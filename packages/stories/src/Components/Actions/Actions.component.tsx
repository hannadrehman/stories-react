import { Fragment, useRef, useState } from 'react';
import * as CONSTANTS from './Actions.constants';
import styles from './Actions.styles.css';

interface IActionsProps {
  onNextClick: () => void;
  onPrevClick: () => void;
  onPause: () => void;
  onResume: () => void;
}

type IActionEvent = React.MouseEvent | React.TouchEvent;

export function Actions({
  onNextClick,
  onPrevClick,
  onPause,
  onResume,
}: IActionsProps) {
  const [isStoryPaused, setIsStoryPaused] = useState(false);
  //adding pause timer because we want to debouce pause interaction
  //because mouse down is called with mouse up immediately
  const pauseTimerRef = useRef<any>(null);

  function handlePause(event: IActionEvent) {
    event.stopPropagation();
    event.preventDefault();
    clearTimeout(pauseTimerRef.current);

    // delay this transaction
    pauseTimerRef.current = setTimeout(() => {
      onPause();
      setIsStoryPaused(true);
    }, 200);
  }

  function handleInteractions(region: string, event: IActionEvent) {
    event.stopPropagation();
    event.preventDefault();

    //clear any pending timeout
    clearTimeout(pauseTimerRef.current);
    if (isStoryPaused) {
      onResume();
      setIsStoryPaused(false);
      return;
    }
    onResume();
    if (region == CONSTANTS.EVENT_REGION.LEFT) {
      onPrevClick();
      return;
    }
    onNextClick();
  }

  function getEvents(region: string) {
    return {
      onMouseUp: (e: React.MouseEvent) => handleInteractions(region, e),
      onTouchEnd: (e: React.TouchEvent) => handleInteractions(region, e),
      onTouchStart: (e: React.TouchEvent) => handlePause(e),
      onMouseDown: (e: React.MouseEvent) => handlePause(e),
    };
  }

  return (
    <Fragment>
      <div
        className={styles.left}
        {...getEvents(CONSTANTS.EVENT_REGION.LEFT)}
      />
      <div
        className={styles.right}
        {...getEvents(CONSTANTS.EVENT_REGION.RIGHT)}
      />
    </Fragment>
  );
}
