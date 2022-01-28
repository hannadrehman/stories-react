import styles from './CustomComponents.styles.css';
import { IStoryComponentProps } from '../../types';

export function CustomComponent(props: IStoryComponentProps) {
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
