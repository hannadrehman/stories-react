import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Image } from '../Components/Image';

function makeStory(overrides: Record<string, any> = {}) {
  return {
    type: 'image',
    url: 'http://example.com/photo.jpg',
    duration: 5000,
    index: 0,
    calculatedDuration: 5000.1,
    ...overrides,
  } as any;
}

describe('Image', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render an img element with correct src', () => {
    const onPause = jest.fn();
    const onResume = jest.fn();
    render(
      <Image story={makeStory()} onPause={onPause} onResume={onResume} isPaused={false} />,
    );

    const img = screen.getByAltText('story');
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toBe('http://example.com/photo.jpg');
  });

  it('should render img with alt="story"', () => {
    render(
      <Image story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />,
    );
    expect(screen.getByAltText('story')).toBeTruthy();
  });

  it('should call onPause on mount', () => {
    const onPause = jest.fn();
    render(
      <Image story={makeStory()} onPause={onPause} onResume={jest.fn()} isPaused={false} />,
    );
    expect(onPause).toHaveBeenCalledTimes(1);
  });

  it('should call onResume after image loads (with 4ms delay)', () => {
    const onResume = jest.fn();
    render(
      <Image story={makeStory()} onPause={jest.fn()} onResume={onResume} isPaused={false} />,
    );

    expect(onResume).not.toHaveBeenCalled();

    // Simulate image load
    const img = screen.getByAltText('story');
    fireEvent.load(img);

    // onResume is called after a 4ms setTimeout
    expect(onResume).not.toHaveBeenCalled();
    act(() => {
      jest.advanceTimersByTime(4);
    });
    expect(onResume).toHaveBeenCalledTimes(1);
  });

  it('should not call onResume before image loads', () => {
    const onResume = jest.fn();
    render(
      <Image story={makeStory()} onPause={jest.fn()} onResume={onResume} isPaused={false} />,
    );

    act(() => {
      jest.advanceTimersByTime(10000);
    });
    expect(onResume).not.toHaveBeenCalled();
  });

  it('should use the story url as image source', () => {
    const customUrl = 'http://example.com/custom-image.png';
    render(
      <Image
        story={makeStory({ url: customUrl })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    const img = screen.getByAltText('story');
    expect(img.getAttribute('src')).toBe(customUrl);
  });

  it('should call onPause only once on mount', () => {
    const onPause = jest.fn();
    const { rerender } = render(
      <Image story={makeStory()} onPause={onPause} onResume={jest.fn()} isPaused={false} />,
    );

    // Rerender with same props
    rerender(
      <Image story={makeStory()} onPause={onPause} onResume={jest.fn()} isPaused={true} />,
    );

    // onPause should only be called once (on mount)
    expect(onPause).toHaveBeenCalledTimes(1);
  });
});
