import { useEffect, useRef } from 'react';
import styles from './Video.styles.css';
import { IStoryComponentProps } from '../../types';

export function Video(props: IStoryComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    props.onPause();
  }, []);

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
    }, 4);
  }

  return (
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
  );
}
