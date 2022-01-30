import { Fragment, useEffect, useRef, useState } from 'react';
import styles from './Video.styles.css';
import { IStoryComponentProps } from '../../types';
import * as hooks from '../../Hooks';
import { SoundIcon } from '../SoundIcon';

const key = 'RSIsMute';
const WINDOW: any = typeof window === 'undefined' ? {} : window;
WINDOW?.localStorage?.setItem(key, 'true');

export function Video(props: IStoryComponentProps) {
  const { isPaused } = hooks.useStoriesContext();
  const [isMuted, setIsMuted] = useState(
    WINDOW?.localStorage?.getItem(key) === 'true',
  );
  const [showLoader, setShowLoader] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function setMute(value: boolean) {
    WINDOW?.localStorage?.setItem(key, String(value));
    setIsMuted(value);
  }

  useEffect(() => {
    props.onPause();
    setShowLoader(true);
  }, []);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    if (isPaused && !videoRef.current.paused) {
      videoRef.current.pause();
      return;
    }
    videoRef.current.play().catch(() => {
      setMute(true);
      videoRef.current?.play();
    });
  }, [isPaused]);

  function handleLoad() {
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
        playsInline={true}
        webkit-playsinline=""
        controls={false}
        src={props.story.url}
        onLoadedData={handleLoad}
        muted={isMuted}
      >
        <source src={props.story.url} type="video/mp4" />
        <source src={props.story.url} type="video/webm" />
        <source src={props.story.url} type="video/ogg" />
        <p>Video not supported</p>
      </video>
      <div className={styles.soundIcon} onClick={() => setMute(!isMuted)}>
        <SoundIcon type={isMuted ? 'off' : 'on'} />
      </div>
      {showLoader && (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader} />
        </div>
      )}
    </Fragment>
  );
}
