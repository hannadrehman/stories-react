import styled from 'styled-components';
import { StoriesContext } from './Contexts';
import { Actions, Progress, Story } from './Components';
import {
  IStoryObject,
  IStoryProps,
  IWrapperProps,
  IStoryIndexedObject,
  IStoryContext,
} from './types';
import { useEffect, useMemo, useState } from 'react';
import * as hooks from './Hooks';

const Wrapper = styled.div<IWrapperProps>`
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  touch-action: manipulation;
  background-color: black;
`;

const DEFAULT_STORY_DURATION = 5000;

export default function Stories({
  stories,
  width = '100%',
  height = '100%',
}: IStoryProps): JSX.Element {
  const storiesWithIndex: IStoryIndexedObject[] = useMemo(() => {
    return stories.map((story: IStoryObject, index: number) => ({
      ...story,
      index,
    }));
  }, [stories]);

  const [selectedStory, setSelectedStory] = useState<IStoryIndexedObject>(
    storiesWithIndex[0],
  );

  const firstStoryIndex = 0;
  const lastStoryIndex = stories.length - 1;
  const [currentStoryDuration, setCurrentStoryDuration] = useState<any>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const contextValue: IStoryContext = {
    stories: storiesWithIndex,
    width,
    height,
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
      setCurrentStoryDuration(selectedStory.duration || DEFAULT_STORY_DURATION);
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
      <Wrapper width={width} height={height}>
        <Progress activeStoryIndex={selectedStory.index} isPaused={isPaused} />
        <Story
          currentIndex={selectedStory.index}
          onPause={handlePause}
          onResume={handleResume}
        />
        <Actions
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
          onPause={handlePause}
          onResume={handleResume}
        />
      </Wrapper>
    </StoriesContext.Provider>
  );
}
