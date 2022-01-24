import { StoriesContext } from './Contexts';
import { Actions, Progress, Story } from './Components';
import {
  IStoryObject,
  IStoryProps,
  IStoryIndexedObject,
  IStoryContext,
} from './types';
import { useEffect, useMemo, useState } from 'react';
import * as hooks from './Hooks';
import styles from './styles.css';

export default function Stories({
  stories,
  width = '100%',
  height = '100%',
  onStoryChange = () => {},
  currentIndex = 0,
  defaultDuration = 10000,
}: IStoryProps): JSX.Element {
  //
  const storiesWithIndex: IStoryIndexedObject[] = useMemo(() => {
    return stories.map((story: IStoryObject, index: number) => ({
      ...story,
      index,
    }));
  }, [stories]);

  const [selectedStory, setSelectedStory] = useState<IStoryIndexedObject>(
    storiesWithIndex[currentIndex],
  );

  const firstStoryIndex = 0;
  const lastStoryIndex = stories.length - 1;
  const [currentStoryDuration, setCurrentStoryDuration] = useState<any>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const contextValue: IStoryContext = {
    stories: storiesWithIndex,
    width,
    height,
    defaultDuration,
  };
  function handleNextClick() {
    if (selectedStory.index < lastStoryIndex) {
      setSelectedStory((prev) => {
        const newIndex = prev.index + 1;
        return storiesWithIndex[newIndex];
      });
    }
  }
  function handlePrevClick() {
    if (selectedStory.index > firstStoryIndex) {
      setSelectedStory((prev) => {
        const newIndex = prev.index - 1;
        return storiesWithIndex[newIndex];
      });
    }
  }

  useEffect(() => {
    if (selectedStory) {
      const duration = selectedStory.duration || defaultDuration;
      setCurrentStoryDuration(duration);
      onStoryChange(selectedStory.index);
    }
  }, [selectedStory]);

  hooks.usePausableTimeout(
    () => {
      setCurrentStoryDuration(null);
      handleNextClick();
    },
    currentStoryDuration,
    isPaused,
  );

  function handlePause() {
    setIsPaused(true);
  }
  function handleResume() {
    setIsPaused(false);
  }
  return (
    <StoriesContext.Provider value={contextValue}>
      <div className={styles.main} style={{ width, height }}>
        <Progress activeStoryIndex={selectedStory.index} isPaused={isPaused} />
        <Story
          onPause={handlePause}
          onResume={handleResume}
          story={selectedStory}
        />
        <Actions
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
          onPause={handlePause}
          onResume={handleResume}
        />
      </div>
    </StoriesContext.Provider>
  );
}
