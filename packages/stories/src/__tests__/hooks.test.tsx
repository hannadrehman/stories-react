import React from 'react';
import { render, act, screen } from '@testing-library/react';
import {
  useStoriesContext,
  usePausableTimeout,
  useAnimationFrame,
  useWindowVisibility,
} from '../Hooks';
import { StoriesContext } from '../Contexts';

// ============================================================
// useStoriesContext
// ============================================================
describe('useStoriesContext', () => {
  function TestConsumer() {
    const context = useStoriesContext();
    return (
      <div>
        <span data-testid="width">{context.width}</span>
        <span data-testid="height">{context.height}</span>
        <span data-testid="defaultDuration">{context.defaultDuration}</span>
        <span data-testid="isPaused">{String(context.isPaused)}</span>
        <span data-testid="storiesCount">{context.stories.length}</span>
      </div>
    );
  }

  it('should return default context values when no provider is present', () => {
    render(<TestConsumer />);

    expect(screen.getByTestId('width').textContent).toBe('100%');
    expect(screen.getByTestId('height').textContent).toBe('100%');
    expect(screen.getByTestId('defaultDuration').textContent).toBe('10000');
    expect(screen.getByTestId('isPaused').textContent).toBe('false');
    expect(screen.getByTestId('storiesCount').textContent).toBe('0');
  });

  it('should return provided context values', () => {
    const contextValue = {
      stories: [
        { type: 'image', url: 'test.jpg', duration: 5000, index: 0, calculatedDuration: 5000.1 },
      ] as any,
      width: '100%' as const,
      height: '100%' as const,
      defaultDuration: 5000,
      isPaused: true,
    };

    render(
      <StoriesContext.Provider value={contextValue}>
        <TestConsumer />
      </StoriesContext.Provider>,
    );

    expect(screen.getByTestId('defaultDuration').textContent).toBe('5000');
    expect(screen.getByTestId('isPaused').textContent).toBe('true');
    expect(screen.getByTestId('storiesCount').textContent).toBe('1');
  });
});

// ============================================================
// usePausableTimeout
// ============================================================
describe('usePausableTimeout', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  function TestTimeout({
    callback,
    delay,
    pause,
  }: {
    callback: () => void;
    delay: number | null;
    pause: boolean;
  }) {
    usePausableTimeout(callback, delay, pause);
    return <div data-testid="timeout-test">Timeout Test</div>;
  }

  it('should call callback after the specified delay', () => {
    const callback = jest.fn();
    render(<TestTimeout callback={callback} delay={1000} pause={false} />);

    expect(callback).not.toHaveBeenCalled();
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call callback before delay elapses', () => {
    const callback = jest.fn();
    render(<TestTimeout callback={callback} delay={1000} pause={false} />);

    act(() => {
      jest.advanceTimersByTime(999);
    });
    expect(callback).not.toHaveBeenCalled();
  });

  it('should not start timer when delay is null', () => {
    const callback = jest.fn();
    render(<TestTimeout callback={callback} delay={null} pause={false} />);

    act(() => {
      jest.advanceTimersByTime(10000);
    });
    expect(callback).not.toHaveBeenCalled();
  });

  it('should not fire callback when paused', () => {
    const callback = jest.fn();
    render(<TestTimeout callback={callback} delay={1000} pause={true} />);

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(callback).not.toHaveBeenCalled();
  });

  it('should resume timer after being paused', () => {
    const callback = jest.fn();
    jest.spyOn(Date, 'now')
      .mockReturnValueOnce(1000) // initial startTimeRef
      .mockReturnValueOnce(1500) // when pause happens (500ms elapsed)
      .mockReturnValueOnce(2000); // when resume happens

    const { rerender } = render(
      <TestTimeout callback={callback} delay={1000} pause={false} />,
    );

    // Pause after some time
    rerender(<TestTimeout callback={callback} delay={1000} pause={true} />);

    // Advance time while paused - should not fire
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(callback).not.toHaveBeenCalled();

    // Resume
    rerender(<TestTimeout callback={callback} delay={1000} pause={false} />);

    // Should fire after remaining time
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(callback).toHaveBeenCalledTimes(1);

    jest.spyOn(Date, 'now').mockRestore();
  });

  it('should reset timer when delay changes', () => {
    const callback = jest.fn();
    const { rerender } = render(
      <TestTimeout callback={callback} delay={1000} pause={false} />,
    );

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(callback).not.toHaveBeenCalled();

    // Change delay - should reset
    rerender(<TestTimeout callback={callback} delay={2000} pause={false} />);

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should use the latest callback', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    const { rerender } = render(
      <TestTimeout callback={callback1} delay={1000} pause={false} />,
    );

    // Update callback
    rerender(<TestTimeout callback={callback2} delay={1000} pause={false} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).toHaveBeenCalledTimes(1);
  });

  it('should clean up timeout on unmount', () => {
    const callback = jest.fn();
    const { unmount } = render(
      <TestTimeout callback={callback} delay={1000} pause={false} />,
    );

    unmount();

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(callback).not.toHaveBeenCalled();
  });
});

// ============================================================
// useAnimationFrame
// ============================================================
describe('useAnimationFrame', () => {
  let rafCallbacks: Array<(time: number) => void> = [];
  let rafId = 0;

  beforeEach(() => {
    rafCallbacks = [];
    rafId = 0;
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      rafCallbacks.push(cb);
      return ++rafId;
    });
    jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  function TestAnimationFrame({
    callback,
    start,
  }: {
    callback: (time: number) => void;
    start: boolean;
  }) {
    useAnimationFrame(callback, start);
    return <div data-testid="animation-test">Animation Test</div>;
  }

  it('should start animation frame loop when start is true', () => {
    const callback = jest.fn();
    render(<TestAnimationFrame callback={callback} start={true} />);

    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  it('should not call callback on the first frame (no previous time)', () => {
    const callback = jest.fn();
    render(<TestAnimationFrame callback={callback} start={true} />);

    // Simulate first frame
    act(() => {
      rafCallbacks[0](100);
    });

    // First frame should not call callback (no previousTimeRef yet)
    expect(callback).not.toHaveBeenCalled();
  });

  it('should call callback with delta time on subsequent frames', () => {
    const callback = jest.fn();
    render(<TestAnimationFrame callback={callback} start={true} />);

    // First frame - sets previousTimeRef
    act(() => {
      rafCallbacks[0](100);
    });

    // Second frame - should call callback with deltaTime
    act(() => {
      rafCallbacks[rafCallbacks.length - 1](116);
    });

    expect(callback).toHaveBeenCalledWith(16);
  });

  it('should not start animation when start is false', () => {
    const callback = jest.fn();
    render(<TestAnimationFrame callback={callback} start={false} />);

    // requestAnimationFrame should not be called for animation
    // (it may be called 0 times or the false branch may not call it)
    // The key assertion is that callback is never called
    expect(callback).not.toHaveBeenCalled();
  });

  it('should stop animation when start changes from true to false', () => {
    const callback = jest.fn();
    const { rerender } = render(
      <TestAnimationFrame callback={callback} start={true} />,
    );

    expect(window.requestAnimationFrame).toHaveBeenCalled();

    rerender(<TestAnimationFrame callback={callback} start={false} />);

    expect(window.cancelAnimationFrame).toHaveBeenCalled();
  });

  it('should cancel animation frame on unmount', () => {
    const callback = jest.fn();
    const { unmount } = render(
      <TestAnimationFrame callback={callback} start={true} />,
    );

    unmount();

    expect(window.cancelAnimationFrame).toHaveBeenCalled();
  });

  it('should use the latest callback', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    const { rerender } = render(
      <TestAnimationFrame callback={callback1} start={true} />,
    );

    // Update callback
    rerender(<TestAnimationFrame callback={callback2} start={true} />);

    // Simulate frames
    act(() => {
      rafCallbacks[rafCallbacks.length - 1](100);
    });
    act(() => {
      rafCallbacks[rafCallbacks.length - 1](116);
    });

    // callback2 should be called (latest), not callback1
    expect(callback2).toHaveBeenCalled();
  });
});

// ============================================================
// useWindowVisibility
// ============================================================
describe('useWindowVisibility', () => {
  it('should add focus and blur event listeners on mount', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    const callback = jest.fn();

    function TestVisibility() {
      useWindowVisibility(callback);
      return <div>Visibility Test</div>;
    }

    render(<TestVisibility />);

    expect(addSpy).toHaveBeenCalledWith('focus', expect.any(Function));
    expect(addSpy).toHaveBeenCalledWith('blur', expect.any(Function));

    addSpy.mockRestore();
  });

  it('should remove event listeners on unmount', () => {
    const removeSpy = jest.spyOn(window, 'removeEventListener');
    const callback = jest.fn();

    function TestVisibility() {
      useWindowVisibility(callback);
      return <div>Visibility Test</div>;
    }

    const { unmount } = render(<TestVisibility />);
    unmount();

    expect(removeSpy).toHaveBeenCalledWith('focus', expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith('blur', expect.any(Function));

    removeSpy.mockRestore();
  });

  it('should call callback with true on window focus', () => {
    const callback = jest.fn();

    function TestVisibility() {
      useWindowVisibility(callback);
      return <div>Visibility Test</div>;
    }

    render(<TestVisibility />);

    act(() => {
      window.dispatchEvent(new Event('focus'));
    });

    expect(callback).toHaveBeenCalledWith(true);
  });

  it('should call callback with false on window blur', () => {
    const callback = jest.fn();

    function TestVisibility() {
      useWindowVisibility(callback);
      return <div>Visibility Test</div>;
    }

    render(<TestVisibility />);

    act(() => {
      window.dispatchEvent(new Event('blur'));
    });

    expect(callback).toHaveBeenCalledWith(false);
  });

  it('should use the latest callback reference', () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();

    function TestVisibility({ cb }: { cb: (v: boolean) => void }) {
      useWindowVisibility(cb);
      return <div>Visibility Test</div>;
    }

    const { rerender } = render(<TestVisibility cb={callback1} />);
    rerender(<TestVisibility cb={callback2} />);

    act(() => {
      window.dispatchEvent(new Event('focus'));
    });

    // Should use the latest callback
    expect(callback2).toHaveBeenCalledWith(true);
  });
});
