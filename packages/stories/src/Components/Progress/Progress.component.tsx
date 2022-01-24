import { Wrapper } from './Progress.styled';
import { useStoriesContext } from '../../Hooks';
import { ProgressBar } from '../ProgressBar';
import { IStoryIndexedObject } from '../../types';

interface IProgressProps {
  activeStoryIndex: number;
  isPaused: boolean;
}

export function Progress(props: IProgressProps) {
  const { stories } = useStoriesContext();
  return (
    <Wrapper numOfStories={stories.length}>
      {stories.map((story: IStoryIndexedObject) => (
        <ProgressBar
          key={story.index}
          hasStoryPassed={story.index < props.activeStoryIndex}
          isActive={story.index === props.activeStoryIndex}
          story={story}
          isPaused={story.index === props.activeStoryIndex && props.isPaused}
        />
      ))}
    </Wrapper>
  );
}
