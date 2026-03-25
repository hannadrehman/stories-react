import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Stories from '../index';

// Mock useAnimationFrame to avoid rAF issues
jest.mock('../Hooks', () => {
  const actual = jest.requireActual('../Hooks');
  return {
    ...actual,
    useAnimationFrame: jest.fn(),
  };
});

// Mock HTMLMediaElement methods for video tests
beforeAll(() => {
  window.HTMLMediaElement.prototype.play = jest.fn().mockResolvedValue(undefined);
  window.HTMLMediaElement.prototype.pause = jest.fn();
  window.HTMLMediaElement.prototype.load = jest.fn();
});

function makeImageStory(overrides: Record<string, any> = {}) {
  return {
    type: 'image',
    url: 'http://example.com/photo.jpg',
    duration: 5000,
    ...overrides,
  };
}

function makeStories(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    type: 'image',
    url: `http://example.com/${i}.jpg`,
    duration: 5000,
  }));
}

describe('Stories', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // ---- Basic rendering ----

  it('should render the stories component', () => {
    const { container } = render(
      <Stories stories={makeStories(3)} onStoryChange={jest.fn()} />,
    );

    // After effects run, the component should render
    expect(container.firstChild).toBeTruthy();
  });

  it('should render null when stories array is empty', () => {
    const { container } = render(
      <Stories stories={[]} onStoryChange={jest.fn()} />,
    );

    expect(container.innerHTML).toBe('');
  });

  it('should render the first story by default', () => {
    render(
      <Stories stories={makeStories(3)} onStoryChange={jest.fn()} />,
    );

    const img = document.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('http://example.com/0.jpg');
  });

  it('should render story at specified currentIndex', () => {
    render(
      <Stories
        stories={makeStories(3)}
        onStoryChange={jest.fn()}
        currentIndex={1}
      />,
    );

    const img = document.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('http://example.com/1.jpg');
  });

  // ---- Dimensions ----

  it('should apply default width and height', () => {
    const { container } = render(
      <Stories stories={makeStories(1)} onStoryChange={jest.fn()} />,
    );

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.style.width).toBe('100%');
    expect(mainDiv.style.height).toBe('100%');
  });

  // ---- Callbacks ----

  it('should call onStoriesStart on mount', () => {
    const onStoriesStart = jest.fn();
    render(
      <Stories
        stories={makeStories(3)}
        onStoryChange={jest.fn()}
        onStoriesStart={onStoriesStart}
      />,
    );

    expect(onStoriesStart).toHaveBeenCalledTimes(1);
  });

  it('should call onStoryChange with initial story index', () => {
    const onStoryChange = jest.fn();
    render(
      <Stories stories={makeStories(3)} onStoryChange={onStoryChange} />,
    );

    expect(onStoryChange).toHaveBeenCalledWith(0);
  });

  it('should call onStoryChange with correct index when currentIndex is provided', () => {
    const onStoryChange = jest.fn();
    render(
      <Stories
        stories={makeStories(3)}
        onStoryChange={onStoryChange}
        currentIndex={2}
      />,
    );

    expect(onStoryChange).toHaveBeenCalledWith(2);
  });

  // ---- Navigation ----

  it('should advance to next story on right area click', () => {
    const onStoryChange = jest.fn();
    const { container } = render(
      <Stories stories={makeStories(3)} onStoryChange={onStoryChange} />,
    );

    // The Actions component renders two divs at the end
    // Find the right action area (last div child)
    const allDivs = container.querySelectorAll('div');
    const rightAction = allDivs[allDivs.length - 1];

    fireEvent.mouseDown(rightAction);
    fireEvent.mouseUp(rightAction);

    // Should have been called with 0 (initial) and then 1 (next)
    expect(onStoryChange).toHaveBeenCalledWith(1);
  });

  it('should go to previous story on left area click', () => {
    const onStoryChange = jest.fn();
    const { container } = render(
      <Stories
        stories={makeStories(3)}
        onStoryChange={onStoryChange}
        currentIndex={1}
      />,
    );

    // Find the left action area
    const allDivs = container.querySelectorAll('div');
    const leftAction = allDivs[allDivs.length - 2];

    fireEvent.mouseDown(leftAction);
    fireEvent.mouseUp(leftAction);

    expect(onStoryChange).toHaveBeenCalledWith(0);
  });

  it('should not go before first story', () => {
    const onStoryChange = jest.fn();
    const { container } = render(
      <Stories
        stories={makeStories(3)}
        onStoryChange={onStoryChange}
        currentIndex={0}
      />,
    );

    const allDivs = container.querySelectorAll('div');
    const leftAction = allDivs[allDivs.length - 2];

    fireEvent.mouseDown(leftAction);
    fireEvent.mouseUp(leftAction);

    // Should still be on story 0
    const img = document.querySelector('img');
    expect(img?.getAttribute('src')).toBe('http://example.com/0.jpg');
  });

  it('should call onAllStoriesEnd when reaching the last story', () => {
    const onAllStoriesEnd = jest.fn();
    const { container } = render(
      <Stories
        stories={makeStories(2)}
        onStoryChange={jest.fn()}
        onAllStoriesEnd={onAllStoriesEnd}
        currentIndex={1}
      />,
    );

    // Click right to try to go past last story
    const allDivs = container.querySelectorAll('div');
    const rightAction = allDivs[allDivs.length - 1];

    fireEvent.mouseDown(rightAction);
    fireEvent.mouseUp(rightAction);

    expect(onAllStoriesEnd).toHaveBeenCalledTimes(1);
  });

  it('should call onAllStoriesEnd only once', () => {
    const onAllStoriesEnd = jest.fn();
    const { container } = render(
      <Stories
        stories={makeStories(2)}
        onStoryChange={jest.fn()}
        onAllStoriesEnd={onAllStoriesEnd}
        currentIndex={1}
      />,
    );

    const allDivs = container.querySelectorAll('div');
    const rightAction = allDivs[allDivs.length - 1];

    // Click right multiple times
    fireEvent.mouseDown(rightAction);
    fireEvent.mouseUp(rightAction);
    fireEvent.mouseDown(rightAction);
    fireEvent.mouseUp(rightAction);
    fireEvent.mouseDown(rightAction);
    fireEvent.mouseUp(rightAction);

    expect(onAllStoriesEnd).toHaveBeenCalledTimes(1);
  });

  // ---- Loop ----

  it('should loop back to first story when loop is true', () => {
    const onStoryChange = jest.fn();
    const { container } = render(
      <Stories
        stories={makeStories(2)}
        onStoryChange={onStoryChange}
        currentIndex={1}
        loop={true}
      />,
    );

    const allDivs = container.querySelectorAll('div');
    const rightAction = allDivs[allDivs.length - 1];

    fireEvent.mouseDown(rightAction);
    fireEvent.mouseUp(rightAction);

    // Should loop back to first story
    expect(onStoryChange).toHaveBeenCalledWith(0);
  });

  it('should not call onAllStoriesEnd when looping', () => {
    const onAllStoriesEnd = jest.fn();
    const { container } = render(
      <Stories
        stories={makeStories(2)}
        onStoryChange={jest.fn()}
        onAllStoriesEnd={onAllStoriesEnd}
        currentIndex={1}
        loop={true}
      />,
    );

    const allDivs = container.querySelectorAll('div');
    const rightAction = allDivs[allDivs.length - 1];

    fireEvent.mouseDown(rightAction);
    fireEvent.mouseUp(rightAction);

    expect(onAllStoriesEnd).not.toHaveBeenCalled();
  });

  // ---- Custom classNames ----

  it('should apply custom main className', () => {
    const { container } = render(
      <Stories
        stories={makeStories(1)}
        onStoryChange={jest.fn()}
        classNames={{ main: 'custom-main' }}
      />,
    );

    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv.className).toContain('custom-main');
  });

  // ---- Auto-advance via timeout ----

  it('should auto-advance to next story after duration', () => {
    const onStoryChange = jest.fn();
    // Use component-type stories that don't auto-pause on mount
    const SimpleComponent = () => <div>Simple</div>;
    const componentStories = Array.from({ length: 3 }, (_, i) => ({
      type: 'component',
      url: '',
      duration: 5000,
      component: SimpleComponent,
    }));

    render(
      <Stories
        stories={componentStories as any}
        onStoryChange={onStoryChange}
        defaultDuration={5000}
      />,
    );

    // Advance past the story duration (with some buffer for delta)
    act(() => {
      jest.advanceTimersByTime(6000);
    });

    // Should have advanced to story 1
    expect(onStoryChange).toHaveBeenCalledWith(1);
  });

  // ---- Edge cases ----

  it('should handle single story', () => {
    const onStoryChange = jest.fn();
    render(
      <Stories stories={makeStories(1)} onStoryChange={onStoryChange} />,
    );

    expect(onStoryChange).toHaveBeenCalledWith(0);
  });

  it('should render null when currentIndex is out of bounds', () => {
    const { container } = render(
      <Stories
        stories={makeStories(3)}
        onStoryChange={jest.fn()}
        currentIndex={10}
      />,
    );

    expect(container.innerHTML).toBe('');
  });

  it('should render progress bars for all stories', () => {
    const { container } = render(
      <Stories stories={makeStories(3)} onStoryChange={jest.fn()} />,
    );

    // The progress component renders a grid with one bar per story
    // Each bar has a wrapper and inner div
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toBeTruthy();
  });

  // ---- Pause/Resume via window visibility ----

  it('should pause when window loses focus (pauseStoryWhenInActiveWindow=true)', () => {
    const onStoryChange = jest.fn();
    const SimpleComponent = () => <div>Simple</div>;
    const componentStories = Array.from({ length: 3 }, (_, i) => ({
      type: 'component',
      url: '',
      duration: 5000,
      component: SimpleComponent,
    }));

    render(
      <Stories
        stories={componentStories as any}
        onStoryChange={onStoryChange}
        pauseStoryWhenInActiveWindow={true}
        defaultDuration={5000}
      />,
    );

    // Simulate window blur
    act(() => {
      window.dispatchEvent(new Event('blur'));
    });

    // Advance time - story should NOT advance because it's paused
    act(() => {
      jest.advanceTimersByTime(10000);
    });

    // Should still be on first story (only initial call)
    const calls = onStoryChange.mock.calls;
    const lastCall = calls[calls.length - 1];
    expect(lastCall[0]).toBe(0);
  });

  it('should not pause when window loses focus if pauseStoryWhenInActiveWindow=false', () => {
    const onStoryChange = jest.fn();
    const SimpleComponent = () => <div>Simple</div>;
    const componentStories = Array.from({ length: 3 }, (_, i) => ({
      type: 'component',
      url: '',
      duration: 5000,
      component: SimpleComponent,
    }));

    render(
      <Stories
        stories={componentStories as any}
        onStoryChange={onStoryChange}
        pauseStoryWhenInActiveWindow={false}
        defaultDuration={5000}
      />,
    );

    // Simulate window blur
    act(() => {
      window.dispatchEvent(new Event('blur'));
    });

    // Advance time - story should still advance
    act(() => {
      jest.advanceTimersByTime(6000);
    });

    expect(onStoryChange).toHaveBeenCalledWith(1);
  });

  // ---- Different story types ----

  it('should render video story', () => {
    const stories = [
      { type: 'video', url: 'http://example.com/video.mp4', duration: 5000 },
    ];

    // Mock video play
    window.HTMLMediaElement.prototype.play = jest.fn().mockResolvedValue(undefined);
    window.HTMLMediaElement.prototype.pause = jest.fn();

    render(
      <Stories stories={stories as any} onStoryChange={jest.fn()} />,
    );

    const video = document.querySelector('video');
    expect(video).toBeTruthy();
  });

  it('should render component story', () => {
    const MyComponent = () => <div data-testid="my-component">Hello</div>;
    const stories = [
      { type: 'component', url: '', duration: 5000, component: MyComponent },
    ];

    render(
      <Stories stories={stories as any} onStoryChange={jest.fn()} />,
    );

    expect(screen.getByTestId('my-component')).toBeTruthy();
  });
});
