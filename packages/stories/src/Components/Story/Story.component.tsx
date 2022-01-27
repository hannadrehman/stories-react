import { useEffect, useRef, useState } from 'react';
import * as CONSTANTS from './Story.constants';
import styles from './Story.styles.css';
import { IStoryIndexedObject } from '../../types';

interface IStoryProps {
  story: IStoryIndexedObject;
  onPause: () => void;
  onResume: () => void;
}
export function Story(props: IStoryProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSeeMoreComponent, setShowSeeMoreComponent] = useState(false);

  //pause story images/video is loaded.
  useEffect(() => {
    if (
      [CONSTANTS.STORY_TYPES.IMAGE, CONSTANTS.STORY_TYPES.VIDEO].includes(
        props.story.type,
      )
    ) {
      props.onPause();
    }
  }, []);

  // playvideo
  useEffect(() => {
    async function playVideo() {
      const video = videoRef.current;
      if (!video) {
        return;
      }
      try {
        await video.play();
      } catch (e) {
        video.muted = true;
        video.play();
      }
    }

    if (props.story.type === CONSTANTS.STORY_TYPES.VIDEO) {
      playVideo();
    }
  }, [props.story.type]);

  useEffect(() => {
    setShowSeeMoreComponent(false);
  }, [props.story]);

  function imageOnLoad() {
    props.onResume();
  }

  function handleVideoLoaded() {
    console.log('loaded');
    props.onResume();
  }

  function getStory() {
    if (props.story.type === CONSTANTS.STORY_TYPES.IMAGE) {
      return (
        <img
          className={styles.image}
          src={props.story.url}
          alt="story"
          onLoad={imageOnLoad}
        />
      );
    }
    if (props.story.type === CONSTANTS.STORY_TYPES.VIDEO) {
      return (
        <video
          className={styles.video}
          ref={videoRef}
          autoPlay={true}
          playsInline={true}
          webkit-playsinline=""
          controls={false}
          src={props.story.url}
          onLoadedData={handleVideoLoaded}
        />
      );
    }
    if (props.story.type === CONSTANTS.STORY_TYPES.COMPONENT) {
      return (
        <div className={styles.component}>
          <props.story.component
            pause={props.onPause}
            resume={props.onResume}
            story={props.story}
          />
        </div>
      );
    }

    return null;
  }

  function getHeader() {
    if (typeof props.story.header === 'function') {
      return <props.story.header />;
    }
    return props.story.header;
  }
  function getSeeMore() {
    const seeMore = props.story.seeMore;
    const typeOfSeeMore = typeof seeMore;
    if (['string', 'boolean'].includes(typeOfSeeMore)) {
      const seeMoreText = typeOfSeeMore === 'string' ? seeMore : 'See More';
      return (
        <div className={styles.defaultSeeMore}>
          <span>^</span>
          <p>{seeMoreText}</p>
        </div>
      );
    }
    if (typeOfSeeMore === 'function') {
      return <props.story.seeMore />;
    }
    return props.story.seeMore;
  }

  function getSeeMoreComponent() {
    if (typeof props.story.seeMoreComponent === 'function') {
      return <props.story.seeMoreComponent />;
    }
    return props.story.seeMoreComponent;
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
    <div className={styles.wrapper} key={props.story.index}>
      {getStory()}
      {props.story.header && <div className={styles.header}>{getHeader()}</div>}
      {props.story.seeMore && (
        <button
          type="button"
          onClick={handleSeeMore}
          className={styles.seeMoreWrapper}
        >
          {getSeeMore()}
        </button>
      )}
      {showSeeMoreComponent &&
        props.story.seeMore &&
        props.story.seeMoreComponent && (
          <div className={styles.seeMoreComponentWrapper}>
            <button className={styles.closeIcon} onClick={handleCloseSeeMore}>
              ✕
            </button>
            {getSeeMoreComponent()}
          </div>
        )}
    </div>
  );
}
