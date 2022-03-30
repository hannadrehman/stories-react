import { useContext, useRef, useEffect } from 'react';
import { StoriesContext } from '../Contexts';
import { IStoryContext } from '../types';

interface IUseRef {
  current: any;
}

export function useStoriesContext() {
  const context: IStoryContext = useContext(StoriesContext);
  return context;
}

export function usePausableTimeout(
  callback: () => void,
  delay: number | null,
  pause: boolean,
) {
  const savedCallback: IUseRef = useRef();
  const timeRemaining: IUseRef = useRef(delay);
  const startTimeRef: IUseRef = useRef(Date.now());
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // reset time remaining everytime delay changes
  useEffect(() => {
    timeRemaining.current = delay;
  }, [delay]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null && pause === false) {
      startTimeRef.current = Date.now();
      const timerId = setTimeout(tick, timeRemaining.current);
      return () => {
        clearTimeout(timerId);
      };
    }
    return () => {};
  }, [delay, pause]);

  useEffect(() => {
    if (pause) {
      timeRemaining.current =
        timeRemaining.current - (Date.now() - startTimeRef.current);
    }
  }, [pause]);
}

export function useAnimationFrame(
  callback: (time: number) => void,
  start: boolean,
) {
  const requestRef: IUseRef = useRef();
  const previousTimeRef: IUseRef = useRef();
  const callBackRef: IUseRef = useRef(callback);

  useEffect(() => {
    callBackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    function animate(time: number) {
      if (previousTimeRef.current != undefined) {
        const deltaTime = time - previousTimeRef.current;
        callBackRef.current(deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    }
    if (start !== false) {
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
        previousTimeRef.current = null;
      };
    }
    return () => {
      if (requestRef.current) {
        requestRef.current = null;
      }
      cancelAnimationFrame(requestRef.current);
      previousTimeRef.current = null;
    };
  }, [start]);
}

export function useWindowVisibility(callback: (isVisible: boolean) => void) {
  const callBackRef = useRef(callback);
  useEffect(() => {
    callBackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    function handleActive() {
      callBackRef.current(true);
    }
    function handleInActive() {
      callBackRef.current(false);
    }
    window.addEventListener('focus', handleActive);
    window.addEventListener('blur', handleInActive);

    return () => {
      window.removeEventListener('focus', handleActive);
      window.removeEventListener('blur', handleInActive);
    };
  }, []);
}
