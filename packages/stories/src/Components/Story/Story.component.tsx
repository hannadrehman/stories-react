import { useEffect, useRef, useState } from 'react';
import * as CONSTANTS from './Story.constants';
import styles from './Story.styles.css';
import { IStoryComponentProps } from '../../types';
import { Image } from '../Image';
import { Video } from '../Video';
import { CustomComponent } from '../CustomComponent';
import { SeeMore } from '../SeeMore';
import { SeeMoreComponent } from '../SeeMoreComponent';

export function Story(props: IStoryComponentProps) {
  const [showSeeMoreComponent, setShowSeeMoreComponent] = useState(false);

  useEffect(() => {
    setShowSeeMoreComponent(false);
  }, [props.story]);

  function getStory() {
    if (props.story.type === CONSTANTS.STORY_TYPES.IMAGE) {
      return <Image {...props} />;
    }
    if (props.story.type === CONSTANTS.STORY_TYPES.VIDEO) {
      return <Video {...props} />;
    }
    if (props.story.type === CONSTANTS.STORY_TYPES.COMPONENT) {
      return <CustomComponent {...props} />;
    }

    return null;
  }

  function getHeader() {
    if (typeof props.story.header === 'function') {
      return <props.story.header />;
    }
    return props.story.header;
  }

  function handleSeeMore() {
    props.onPause();
    setShowSeeMoreComponent(true);
    props.story.onSeeMoreClick?.(props.story.index);
  }

  function handleCloseSeeMore() {
    props.onResume();
    setShowSeeMoreComponent(false);
  }
  return (
    <div className={styles.wrapper}>
      {getStory()}
      {props.story.header && <div className={styles.header}>{getHeader()}</div>}
      <SeeMore onSeeMoreClick={handleSeeMore} story={props.story} />
      {showSeeMoreComponent && (
        <SeeMoreComponent story={props.story} onClose={handleCloseSeeMore} />
      )}
    </div>
  );
}
