import { useStoriesContext } from '../../Hooks/';
import { useEffect, useRef } from 'react';
import * as CONSTANTS from './Story.constants';
import styles from './Story.styles.css';

interface IStoryProps {
  currentIndex: number;
  onPause: () => void;
  onResume: () => void;
}
export function Story(props: IStoryProps) {
  const { stories } = useStoriesContext();
  const currentStory = stories[props.currentIndex];
  const videoRef = useRef<HTMLVideoElement>(null);

  //pause story images/video is loaded.
  useEffect(() => {
    if (
      [CONSTANTS.STORY_TYPES.IMAGE, CONSTANTS.STORY_TYPES.VIDEO].includes(
        currentStory.type,
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

    if (currentStory.type === CONSTANTS.STORY_TYPES.VIDEO) {
      playVideo();
    }
  }, [currentStory.type]);

  function imageOnLoad() {
    props.onResume();
  }

  function videoOnLoad() {
    props.onResume();
  }

  function getStory() {
    if (currentStory.type === CONSTANTS.STORY_TYPES.IMAGE) {
      return (
        <img
          className={styles.image}
          src={currentStory.url}
          alt="story"
          onLoad={imageOnLoad}
        />
      );
    }
    if (currentStory.type === CONSTANTS.STORY_TYPES.VIDEO) {
      return (
        <video
          className={styles.video}
          ref={videoRef}
          autoPlay={true}
          playsInline={true}
          webkit-playsinline
          controls={false}
          src={currentStory.url}
          onLoadedData={videoOnLoad}
        />
      );
    }
    if (currentStory.type === CONSTANTS.STORY_TYPES.COMPONENT) {
      return (
        <div className={styles.component}>
          <currentStory.component
            pause={props.onPause}
            resume={props.onResume}
            storyIndex={props.currentIndex}
          />
        </div>
      );
    }

    return null;
  }

  return <div className={styles.wrapper}>{getStory()}</div>;
}
