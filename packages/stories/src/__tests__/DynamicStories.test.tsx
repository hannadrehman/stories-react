import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Stories from '../index';

// Mock requestAnimationFrame / cancelAnimationFrame for jsdom
beforeAll(() => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
    return setTimeout(() => cb(Date.now()), 0) as unknown as number;
  });
  jest.spyOn(window, 'cancelAnimationFrame').mockImplementation((id) => {
    clearTimeout(id);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

const makeStory = (id: number, duration = 5000) => ({
  type: 'image' as const,
  url: `https://example.com/${id}.jpg`,
  duration,
});

/**
 * Fire the onLoad event on the currently rendered <img> to unblock
 * the Image component (which pauses the timer until the image loads).
 * Throws if no image is found so tests fail explicitly.
 */
function triggerImageLoad(container: HTMLElement) {
  const img = container.querySelector('img[alt="story"]');
  if (!img) {
    throw new Error('No <img alt="story"> found in container');
  }
  fireEvent.load(img);
}

/**
 * Trigger image load and advance timers past the story's duration.
 * This simulates a story finishing playback.
 */
function advancePastStory(container: HTMLElement, durationMs = 6000) {
  act(() => {
    triggerImageLoad(container);
    // The Image component does a 4ms setTimeout before calling onResume
    jest.advanceTimersByTime(10);
  });
  act(() => {
    jest.advanceTimersByTime(durationMs);
  });
}

describe('Dynamic Stories - updating stories prop', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render initial stories with correct number of progress bars', () => {
    const stories = [makeStory(1), makeStory(2), makeStory(3)];
    const { container } = render(
      <Stories stories={stories} onStoryChange={() => {}} />,
    );

    const progressContainer = container.querySelector(
      '[style*="grid-template-columns"]',
    );
    expect(progressContainer).toBeTruthy();
    expect(progressContainer?.getAttribute('style')).toContain('repeat(3');
  });

  it('should not reset to first story when stories prop is updated with appended stories', () => {
    const initialStories = [makeStory(1), makeStory(2), makeStory(3)];
    const onStoryChange = jest.fn();

    const { container, rerender } = render(
      <Stories stories={initialStories} onStoryChange={onStoryChange} />,
    );

    // Initial render shows story 0
    expect(onStoryChange).toHaveBeenCalledWith(0);
    onStoryChange.mockClear();

    // Advance past story 0 to reach story 1
    advancePastStory(container);
    expect(onStoryChange).toHaveBeenCalledWith(1);
    onStoryChange.mockClear();

    // Append new stories -- should NOT reset to story 0
    const updatedStories = [...initialStories, makeStory(4), makeStory(5)];
    rerender(
      <Stories stories={updatedStories} onStoryChange={onStoryChange} />,
    );

    const calls = onStoryChange.mock.calls.map((c: number[]) => c[0]);
    expect(calls).not.toContain(0);
  });

  it('should update progress bar count when stories are appended', () => {
    const initialStories = [makeStory(1), makeStory(2)];

    const { container, rerender } = render(
      <Stories stories={initialStories} onStoryChange={() => {}} />,
    );

    let progressContainer = container.querySelector(
      '[style*="grid-template-columns"]',
    );
    expect(progressContainer?.getAttribute('style')).toContain('repeat(2');

    const updatedStories = [...initialStories, makeStory(3), makeStory(4)];
    rerender(
      <Stories stories={updatedStories} onStoryChange={() => {}} />,
    );

    progressContainer = container.querySelector(
      '[style*="grid-template-columns"]',
    );
    expect(progressContainer?.getAttribute('style')).toContain('repeat(4');
  });

  it('should call onAllStoriesEnd when reaching the new last story after appending', () => {
    const stories = [makeStory(1)];
    const onAllStoriesEnd = jest.fn();
    const onStoryChange = jest.fn();

    const { container, rerender } = render(
      <Stories
        stories={stories}
        onStoryChange={onStoryChange}
        onAllStoriesEnd={onAllStoriesEnd}
      />,
    );

    // Advance past story 1 -- triggers onAllStoriesEnd
    advancePastStory(container);
    expect(onAllStoriesEnd).toHaveBeenCalledTimes(1);
    onAllStoriesEnd.mockClear();

    // Append a new story
    const updatedStories = [...stories, makeStory(2)];
    rerender(
      <Stories
        stories={updatedStories}
        onStoryChange={onStoryChange}
        onAllStoriesEnd={onAllStoriesEnd}
      />,
    );

    // Advance past the resumed story 0 (timer restarts with fresh calculatedDuration)
    advancePastStory(container);
    // Advance past story 1 (the new last story)
    advancePastStory(container);

    expect(onAllStoriesEnd).toHaveBeenCalledTimes(1);
  });

  it('should resume playback when stories are appended after reaching the end', () => {
    const stories = [makeStory(1)];
    const onStoryChange = jest.fn();

    const { container, rerender } = render(
      <Stories stories={stories} onStoryChange={onStoryChange} />,
    );

    // Advance past story 1 -- playback stops
    advancePastStory(container);
    onStoryChange.mockClear();

    // Append new stories -- playback should resume
    const updatedStories = [...stories, makeStory(2), makeStory(3)];
    rerender(
      <Stories stories={updatedStories} onStoryChange={onStoryChange} />,
    );

    // Advance past the resumed current story and into story 1
    advancePastStory(container);
    advancePastStory(container);

    const calls = onStoryChange.mock.calls.map((c: number[]) => c[0]);
    expect(calls).toContain(1);
  });

  it('should handle full story replacement (same length, different content)', () => {
    const initialStories = [makeStory(1), makeStory(2)];
    const onStoryChange = jest.fn();

    const { container, rerender } = render(
      <Stories stories={initialStories} onStoryChange={onStoryChange} />,
    );

    // Initial render shows story 0
    expect(onStoryChange).toHaveBeenCalledWith(0);
    onStoryChange.mockClear();

    // Replace all stories with different content (same length)
    const replacementStories = [makeStory(10), makeStory(20)];
    rerender(
      <Stories stories={replacementStories} onStoryChange={onStoryChange} />,
    );

    // Should update to the new story at currentIndex (0)
    expect(onStoryChange).toHaveBeenCalledWith(0);

    // Verify the new story is rendered (check the img src)
    const img = container.querySelector('img[alt="story"]');
    expect(img?.getAttribute('src')).toBe('https://example.com/10.jpg');
  });

  it('should export IStoryObject type', () => {
    // Compile-time smoke test: if IStoryObject is not exported, this file won't compile.
    const storyObj: import('../types').IStoryObject = {
      type: 'image',
      url: 'https://example.com/test.jpg',
      duration: 5000,
    };
    expect(storyObj.type).toBe('image');
  });
});
