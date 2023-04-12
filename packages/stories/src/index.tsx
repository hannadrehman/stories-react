import { useRef } from 'react';
import { StoriesContext } from './Contexts';
import { Actions, Progress, Story } from './Components';
import { IStoryProps, IStoryIndexedObject, IStoryContext } from './types';
import { useEffect, useMemo, useState } from 'react';
import * as hooks from './Hooks';
import styles from './styles.css';
import * as utilities from './utilities';

export default function Stories({
  stories = [],
  width = '100%',
  height = '100%',
  onStoryChange = () => {},
  currentIndex = 0,
  defaultDuration = 10000,
  onAllStoriesEnd = () => {},
  onStoriesStart = () => {},
  classNames = {},
  pauseStoryWhenInActiveWindow = true,
  preloadNextStory = false,
}: IStoryProps): JSX.Element | null {
  const storiesWithIndex: IStoryIndexedObject[] = useMemo(() => {
    return utilities.transformStories(stories, defaultDuration);
  }, [stories, defaultDuration]);

  const [selectedStory, setSelectedStory] = useState<
    IStoryIndexedObject | undefined
  >();
  const firstStoryIndex = 0;
  const lastStoryIndex = stories.length - 1;
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const hasCalledEndedCb = useRef<any>(false);
  const hasCalledStartedCb = useRef<any>(false);

  // Preload stories
  const preloadedStoriesUrlsRef = useRef<string[]>([]);
  const preloadStory = (index: number) => {
    if (!preloadNextStory) return;

    if (
      index >= storiesWithIndex.length ||
      preloadedStoriesUrlsRef.current.indexOf(storiesWithIndex[index].url) >= 0
    )
      return;

    if (utilities.preloadStory(
        storiesWithIndex[index].type,
        storiesWithIndex[index].url,
      )) {
      preloadedStoriesUrlsRef.current.push(storiesWithIndex[index].url);
    }
  };

  useEffect(() => {
    if (!hasCalledStartedCb.current) {
      hasCalledStartedCb.current = true;
      onStoriesStart();
    }
  }, [onStoriesStart]);

  // Enters when 'currentIndex' and 'stories' are setted
  useEffect(() => {
    const story = storiesWithIndex[currentIndex];

    if (!story) return;

    setSelectedStory(story);

  }, [currentIndex, stories]);

  function handleNextClick() {
    if (!hasCalledEndedCb.current && selectedStory?.index === lastStoryIndex) {
      onAllStoriesEnd();
      hasCalledEndedCb.current = true;
    }
    if (selectedStory?.index === lastStoryIndex) {
      return;
    }
    setSelectedStory((prev) => {
      if (!prev) {
        return storiesWithIndex[0];
      }
      const newIndex = prev?.index + 1;
      return storiesWithIndex[newIndex];
    });
  }
  function handlePrevClick() {
    if (selectedStory?.index === firstStoryIndex) {
      return;
    }
    setSelectedStory((prev) => {
      if (!prev) {
        return storiesWithIndex[0];
      }
      const newIndex = prev?.index - 1;
      return storiesWithIndex[newIndex];
    });
  }

  function handlePause() {
    setIsPaused(true);
  }
  function handleResume() {
    setIsPaused(false);
  }

  // Enters when 'selectedStory' changed
  useEffect(() => {
    if (!selectedStory) return;

    onStoryChange(selectedStory.index);

    preloadStory(selectedStory.index + 1);
  }, [selectedStory]);

  hooks.usePausableTimeout(
    () => {
      handleNextClick();
    },
    selectedStory?.calculatedDuration ?? null,
    isPaused,
  );

  hooks.useWindowVisibility((isWindowInFocus) => {
    if (pauseStoryWhenInActiveWindow) {
      setIsPaused(!isWindowInFocus);
    }
  });

  const contextValue: IStoryContext = {
    stories: storiesWithIndex,
    width,
    height,
    defaultDuration,
    isPaused,
    classNames,
    preloadNextStory,
  };

  if (!selectedStory) {
    return null;
  }
  return (
    <StoriesContext.Provider value={contextValue}>
      <div
        className={`${styles.main} ${classNames.main || ''}`}
        style={{ width, height }}
      >
        <Progress activeStoryIndex={selectedStory.index} isPaused={isPaused} />
        <Story
          key={selectedStory.index}
          onPause={handlePause}
          onResume={handleResume}
          story={selectedStory}
          isPaused={isPaused}
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
