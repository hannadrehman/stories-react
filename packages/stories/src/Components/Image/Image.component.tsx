import { useEffect } from 'react';
import { IStoryComponentProps } from '../../types';
import styles from './Image.styles.css';

export function Image(props: IStoryComponentProps) {
  useEffect(() => {
    props.onPause();
  }, []);

  function handleLoadImage() {
    //set timeout is done because there is an inconsitancy in safari and other browser
    //on when to call useEffect
    setTimeout(() => {
      props.onResume();
    }, 4);
  }

  return (
    <img
      className={styles.image}
      src={props.story.url}
      alt="story"
      onLoad={handleLoadImage}
    />
  );
}
