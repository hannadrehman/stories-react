import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Actions } from '../Components/Actions';

describe('Actions', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render two action areas (left and right)', () => {
    const { container } = render(
      <Actions
        onNextClick={jest.fn()}
        onPrevClick={jest.fn()}
        onPause={jest.fn()}
        onResume={jest.fn()}
      />,
    );

    const divs = container.querySelectorAll('div');
    expect(divs.length).toBe(2);
  });

  // ---- Quick tap (< 200ms) ----

  it('should call onPrevClick on quick tap on left area', () => {
    const onPrevClick = jest.fn();
    const onResume = jest.fn();
    const { container } = render(
      <Actions
        onNextClick={jest.fn()}
        onPrevClick={onPrevClick}
        onPause={jest.fn()}
        onResume={onResume}
      />,
    );

    const leftDiv = container.firstChild as HTMLElement;

    fireEvent.mouseDown(leftDiv);
    // Release before 200ms
    act(() => {
      jest.advanceTimersByTime(100);
    });
    fireEvent.mouseUp(leftDiv);

    expect(onPrevClick).toHaveBeenCalledTimes(1);
    expect(onResume).toHaveBeenCalledTimes(1);
  });

  it('should call onNextClick on quick tap on right area', () => {
    const onNextClick = jest.fn();
    const onResume = jest.fn();
    const { container } = render(
      <Actions
        onNextClick={onNextClick}
        onPrevClick={jest.fn()}
        onPause={jest.fn()}
        onResume={onResume}
      />,
    );

    const rightDiv = container.lastChild as HTMLElement;

    fireEvent.mouseDown(rightDiv);
    act(() => {
      jest.advanceTimersByTime(100);
    });
    fireEvent.mouseUp(rightDiv);

    expect(onNextClick).toHaveBeenCalledTimes(1);
    expect(onResume).toHaveBeenCalledTimes(1);
  });

  // ---- Long press (>= 200ms) ----

  it('should call onPause after 200ms hold (long press)', () => {
    const onPause = jest.fn();
    const { container } = render(
      <Actions
        onNextClick={jest.fn()}
        onPrevClick={jest.fn()}
        onPause={onPause}
        onResume={jest.fn()}
      />,
    );

    const leftDiv = container.firstChild as HTMLElement;

    fireEvent.mouseDown(leftDiv);
    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(onPause).toHaveBeenCalledTimes(1);
  });

  it('should call onResume on release after long press (no navigation)', () => {
    const onPause = jest.fn();
    const onResume = jest.fn();
    const onPrevClick = jest.fn();
    const onNextClick = jest.fn();
    const { container } = render(
      <Actions
        onNextClick={onNextClick}
        onPrevClick={onPrevClick}
        onPause={onPause}
        onResume={onResume}
      />,
    );

    const leftDiv = container.firstChild as HTMLElement;

    // Long press
    fireEvent.mouseDown(leftDiv);
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(onPause).toHaveBeenCalledTimes(1);

    // Release
    fireEvent.mouseUp(leftDiv);

    expect(onResume).toHaveBeenCalledTimes(1);
    // No navigation should happen after long press
    expect(onPrevClick).not.toHaveBeenCalled();
    expect(onNextClick).not.toHaveBeenCalled();
  });

  // ---- Touch events ----

  it('should handle touchStart/touchEnd for left area (quick tap)', () => {
    const onPrevClick = jest.fn();
    const onResume = jest.fn();
    const { container } = render(
      <Actions
        onNextClick={jest.fn()}
        onPrevClick={onPrevClick}
        onPause={jest.fn()}
        onResume={onResume}
      />,
    );

    const leftDiv = container.firstChild as HTMLElement;

    fireEvent.touchStart(leftDiv);
    act(() => {
      jest.advanceTimersByTime(50);
    });
    fireEvent.touchEnd(leftDiv);

    expect(onPrevClick).toHaveBeenCalledTimes(1);
    expect(onResume).toHaveBeenCalledTimes(1);
  });

  it('should handle touchStart/touchEnd for right area (quick tap)', () => {
    const onNextClick = jest.fn();
    const onResume = jest.fn();
    const { container } = render(
      <Actions
        onNextClick={onNextClick}
        onPrevClick={jest.fn()}
        onPause={jest.fn()}
        onResume={onResume}
      />,
    );

    const rightDiv = container.lastChild as HTMLElement;

    fireEvent.touchStart(rightDiv);
    act(() => {
      jest.advanceTimersByTime(50);
    });
    fireEvent.touchEnd(rightDiv);

    expect(onNextClick).toHaveBeenCalledTimes(1);
    expect(onResume).toHaveBeenCalledTimes(1);
  });

  it('should handle touch long press', () => {
    const onPause = jest.fn();
    const onResume = jest.fn();
    const onPrevClick = jest.fn();
    const { container } = render(
      <Actions
        onNextClick={jest.fn()}
        onPrevClick={onPrevClick}
        onPause={onPause}
        onResume={onResume}
      />,
    );

    const leftDiv = container.firstChild as HTMLElement;

    fireEvent.touchStart(leftDiv);
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(onPause).toHaveBeenCalledTimes(1);

    fireEvent.touchEnd(leftDiv);
    expect(onResume).toHaveBeenCalledTimes(1);
    expect(onPrevClick).not.toHaveBeenCalled();
  });

  // ---- Event propagation ----

  it('should stop propagation and prevent default on mouseDown', () => {
    const { container } = render(
      <Actions
        onNextClick={jest.fn()}
        onPrevClick={jest.fn()}
        onPause={jest.fn()}
        onResume={jest.fn()}
      />,
    );

    const leftDiv = container.firstChild as HTMLElement;
    const event = new MouseEvent('mousedown', { bubbles: true, cancelable: true });
    const stopPropagation = jest.spyOn(event, 'stopPropagation');
    const preventDefault = jest.spyOn(event, 'preventDefault');

    leftDiv.dispatchEvent(event);

    expect(stopPropagation).toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
  });

  it('should stop propagation and prevent default on mouseUp', () => {
    const { container } = render(
      <Actions
        onNextClick={jest.fn()}
        onPrevClick={jest.fn()}
        onPause={jest.fn()}
        onResume={jest.fn()}
      />,
    );

    const rightDiv = container.lastChild as HTMLElement;
    const event = new MouseEvent('mouseup', { bubbles: true, cancelable: true });
    const stopPropagation = jest.spyOn(event, 'stopPropagation');
    const preventDefault = jest.spyOn(event, 'preventDefault');

    rightDiv.dispatchEvent(event);

    expect(stopPropagation).toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
  });

  // ---- Debounce behavior ----

  it('should not call onPause if released before 200ms', () => {
    const onPause = jest.fn();
    const { container } = render(
      <Actions
        onNextClick={jest.fn()}
        onPrevClick={jest.fn()}
        onPause={onPause}
        onResume={jest.fn()}
      />,
    );

    const leftDiv = container.firstChild as HTMLElement;

    fireEvent.mouseDown(leftDiv);
    act(() => {
      jest.advanceTimersByTime(100);
    });
    fireEvent.mouseUp(leftDiv);

    // Advance past the 200ms mark
    act(() => {
      jest.advanceTimersByTime(200);
    });

    // onPause should not have been called because the timeout was cleared
    expect(onPause).not.toHaveBeenCalled();
  });

  it('should clear previous pause timer on new mouseDown', () => {
    const onPause = jest.fn();
    const { container } = render(
      <Actions
        onNextClick={jest.fn()}
        onPrevClick={jest.fn()}
        onPause={onPause}
        onResume={jest.fn()}
      />,
    );

    const leftDiv = container.firstChild as HTMLElement;

    // First mouseDown
    fireEvent.mouseDown(leftDiv);
    act(() => {
      jest.advanceTimersByTime(100);
    });

    // Second mouseDown before 200ms - should clear previous timer
    fireEvent.mouseDown(leftDiv);
    act(() => {
      jest.advanceTimersByTime(200);
    });

    // Only one pause should have been triggered (from the second mouseDown)
    expect(onPause).toHaveBeenCalledTimes(1);
  });

  // ---- Multiple interactions ----

  it('should handle multiple quick taps in sequence', () => {
    const onNextClick = jest.fn();
    const { container } = render(
      <Actions
        onNextClick={onNextClick}
        onPrevClick={jest.fn()}
        onPause={jest.fn()}
        onResume={jest.fn()}
      />,
    );

    const rightDiv = container.lastChild as HTMLElement;

    // First tap
    fireEvent.mouseDown(rightDiv);
    fireEvent.mouseUp(rightDiv);

    // Second tap
    fireEvent.mouseDown(rightDiv);
    fireEvent.mouseUp(rightDiv);

    // Third tap
    fireEvent.mouseDown(rightDiv);
    fireEvent.mouseUp(rightDiv);

    expect(onNextClick).toHaveBeenCalledTimes(3);
  });
});
