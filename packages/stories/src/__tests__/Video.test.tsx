import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { StoriesContext } from '../Contexts';

// Mock localStorage before importing Video
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    get length() {
      return Object.keys(store).length;
    },
    key: jest.fn((index: number) => Object.keys(store)[index] || null),
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Import Video after localStorage mock is set up
import { Video } from '../Components/Video';

function makeStory(overrides: Record<string, any> = {}) {
  return {
    type: 'video',
    url: 'http://example.com/video.mp4',
    duration: 5000,
    index: 0,
    calculatedDuration: 5000.1,
    ...overrides,
  } as any;
}

function renderWithContext(
  ui: React.ReactElement,
  contextOverrides: Record<string, any> = {},
) {
  const defaultContext = {
    stories: [],
    width: '100%' as const,
    height: '100%' as const,
    defaultDuration: 10000,
    isPaused: false,
    ...contextOverrides,
  };
  return render(
    <StoriesContext.Provider value={defaultContext}>{ui}</StoriesContext.Provider>,
  );
}

describe('Video', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    localStorageMock.clear();
    // Reset the RSIsMute key to default
    localStorageMock.setItem('RSIsMute', 'true');

    // Mock HTMLVideoElement methods
    window.HTMLMediaElement.prototype.play = jest.fn().mockResolvedValue(undefined);
    window.HTMLMediaElement.prototype.pause = jest.fn();
    window.HTMLMediaElement.prototype.load = jest.fn();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should render a video element', () => {
    renderWithContext(
      <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />,
    );

    const video = document.querySelector('video');
    expect(video).toBeTruthy();
  });

  it('should set video src from story url', () => {
    renderWithContext(
      <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />,
    );

    const video = document.querySelector('video');
    expect(video?.getAttribute('src')).toBe('http://example.com/video.mp4');
  });

  it('should render source elements for mp4, webm, and ogg', () => {
    renderWithContext(
      <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />,
    );

    const sources = document.querySelectorAll('source');
    expect(sources).toHaveLength(3);

    const types = Array.from(sources).map((s) => s.getAttribute('type'));
    expect(types).toContain('video/mp4');
    expect(types).toContain('video/webm');
    expect(types).toContain('video/ogg');
  });

  it('should call onPause on mount', () => {
    const onPause = jest.fn();
    renderWithContext(
      <Video story={makeStory()} onPause={onPause} onResume={jest.fn()} isPaused={false} />,
    );
    expect(onPause).toHaveBeenCalled();
  });

  it('should show loader on mount', () => {
    const { container } = renderWithContext(
      <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />,
    );

    // The loader should be visible on mount (showLoader is set to true in useEffect)
    // The loader has a nested div structure with loader class
    const allDivs = container.querySelectorAll('div');
    // There should be at least the sound icon div and the loader wrapper + loader div
    expect(allDivs.length).toBeGreaterThanOrEqual(2);
  });

  it('should call onResume after video loads (with 4ms delay)', () => {
    const onResume = jest.fn();
    renderWithContext(
      <Video story={makeStory()} onPause={jest.fn()} onResume={onResume} isPaused={false} />,
    );

    const video = document.querySelector('video')!;
    fireEvent.loadedData(video);

    expect(onResume).not.toHaveBeenCalled();
    act(() => {
      jest.advanceTimersByTime(4);
    });
    expect(onResume).toHaveBeenCalledTimes(1);
  });

  it('should render video with playsInline attribute', () => {
    renderWithContext(
      <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />,
    );

    const video = document.querySelector('video');
    expect(video?.playsInline).toBe(true);
  });

  it('should render video with controls disabled', () => {
    renderWithContext(
      <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />,
    );

    const video = document.querySelector('video');
    expect(video?.controls).toBe(false);
  });

  it('should start muted by default', () => {
    renderWithContext(
      <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />,
    );

    const video = document.querySelector('video');
    expect(video?.muted).toBe(true);
  });

  it('should render SoundIcon', () => {
    renderWithContext(
      <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />,
    );

    // SoundIcon renders an SVG
    const svg = document.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('should toggle mute state when sound icon is clicked', () => {
    renderWithContext(
      <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />,
    );

    // Find the sound icon wrapper (the div containing the SVG)
    const svg = document.querySelector('svg')!;
    const soundIconWrapper = svg.closest('div')!;

    // Click to unmute
    fireEvent.click(soundIconWrapper);

    // Check localStorage was updated
    expect(localStorageMock.setItem).toHaveBeenCalledWith('RSIsMute', 'false');
  });

  it('should attempt to play video when isPaused context is false', () => {
    const context = {
      stories: [],
      width: '100%' as const,
      height: '100%' as const,
      defaultDuration: 10000,
      isPaused: false,
    };

    render(
      <StoriesContext.Provider value={context}>
        <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />
      </StoriesContext.Provider>,
    );

    // When isPaused is false, the Video component calls videoRef.current.play()
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });

  it('should call video pause when isPaused context changes to true and video is playing', () => {
    const context = {
      stories: [],
      width: '100%' as const,
      height: '100%' as const,
      defaultDuration: 10000,
      isPaused: false,
    };

    const { rerender } = render(
      <StoriesContext.Provider value={context}>
        <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />
      </StoriesContext.Provider>,
    );

    // Simulate that the video is currently playing by setting paused to false
    const video = document.querySelector('video')!;
    Object.defineProperty(video, 'paused', { value: false, writable: true });

    // Rerender with isPaused = true
    rerender(
      <StoriesContext.Provider value={{ ...context, isPaused: true }}>
        <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={true} />
      </StoriesContext.Provider>,
    );

    expect(video.pause).toHaveBeenCalled();
  });

  it('should render fallback text for unsupported video', () => {
    renderWithContext(
      <Video story={makeStory()} onPause={jest.fn()} onResume={jest.fn()} isPaused={false} />,
    );

    expect(screen.getByText('Video not supported')).toBeTruthy();
  });
});
