import { useEffect, useRef, useState } from 'react';
import * as hooks from '../../Hooks/';
import { IStoryIndexedObject } from '../../types';
import styles from './ProgressBar.styles.css';

interface IProgressBarProps {
  hasStoryPassed: boolean;
  isActive: boolean;
  story: IStoryIndexedObject;
  isPaused: boolean;
}

let barWidth = 0; // declaring it here to avoid variable creating in a loop. this will improve memory utilization.
let step = 0.1;

export function ProgressBar(props: IProgressBarProps) {
  const { defaultDuration, classNames } = hooks.useStoriesContext();
  const barRef = useRef<HTMLDivElement>(null);
  const barWrapperRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  //set animations
  useEffect(() => {
    if (props.isPaused || !props.isActive) {
      setShouldAnimate(false);
      return;
    }
    if (props.isActive) {
      setShouldAnimate(true);
      return;
    }
    setShouldAnimate(false);
  }, [props.isActive, props.isPaused]);

  useEffect(() => {
    if (!barRef.current) {
      return;
    }
    if (props.hasStoryPassed) {
      barRef.current.style.width = `${barWrapperRef?.current?.offsetWidth}px`;
      return;
    }
    barRef.current.style.width = '0px';
  }, [props.hasStoryPassed, props.isActive]);

  hooks.useAnimationFrame((time: number) => {
    if (!barRef.current || !barWrapperRef.current) {
      return;
    }
    barWidth =
      Number(
        (barRef.current.style.width || '1px').slice(
          0,
          barRef.current.style.width.length - 2,
        ),
      ) || 0;

    if (barWidth > barWrapperRef.current.offsetWidth) {
      setShouldAnimate(false);
      return;
    }

    step =
      barWrapperRef?.current?.offsetWidth /
      ((props.story.duration || defaultDuration) / time);
    barRef.current.style.width = `${barWidth + step}px`;
  }, shouldAnimate);

  return (
    <div
      className={`${styles.wrapper} ${classNames?.progressBarContainer || ''}`}
      ref={barWrapperRef}
    >
      <div
        className={`${styles.bar} ${classNames?.progressBar || ''}`}
        ref={barRef}
      />
    </div>
  );
}
