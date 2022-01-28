import { Fragment, useEffect, useRef, useState } from 'react';
import styles from './Video.styles.css';
import { IStoryComponentProps } from '../../types';
import * as hooks from '../../Hooks';

export function Video(props: IStoryComponentProps) {
  const { isPaused } = hooks.useStoriesContext();
  const [showLoader, setShowLoader] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    props.onPause();
  }, []);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    if (isPaused && !videoRef.current.paused) {
      videoRef.current.pause();
      return;
    }
    videoRef.current.play();
  }, [isPaused]);

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

    playVideo();
  }, [props.story.type]);

  function handleLoad() {
    //set timeout is done because there is an inconsitancy in safari and other browser
    //on when to call useEffect
    setTimeout(() => {
      props.onResume();
      setShowLoader(false);
    }, 4);
  }

  return (
    <Fragment>
      <video
        className={styles.video}
        ref={videoRef}
        autoPlay={true}
        playsInline={true}
        webkit-playsinline=""
        controls={false}
        src={props.story.url}
        onLoadedData={handleLoad}
      >
        <source src={props.story.url} type="video/mp4" />
        <source src={props.story.url} type="video/webm" />
        <source src={props.story.url} type="video/ogg" />
        <p>Video not supported</p>
      </video>
      {showLoader && (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader} />
        </div>
      )}
    </Fragment>
  );
}
