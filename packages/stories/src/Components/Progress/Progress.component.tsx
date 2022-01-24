import { useStoriesContext } from '../../Hooks';
import { ProgressBar } from '../ProgressBar';
import { IStoryIndexedObject } from '../../types';
import styles from './progress.styles.css';

interface IProgressProps {
  activeStoryIndex: number;
  isPaused: boolean;
}

export function Progress(props: IProgressProps) {
  const { stories } = useStoriesContext();
  return (
    <div
      className={styles.wrapper}
      style={{ gridTemplateColumns: `repeat(${stories.length},1fr)` }}
    >
      {stories.map((story: IStoryIndexedObject) => (
        <ProgressBar
          key={story.index}
          hasStoryPassed={story.index < props.activeStoryIndex}
          isActive={story.index === props.activeStoryIndex}
          story={story}
          isPaused={story.index === props.activeStoryIndex && props.isPaused}
        />
      ))}
    </div>
  );
}
