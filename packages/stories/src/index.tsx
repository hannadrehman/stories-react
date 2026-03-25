import { useRef, useEffect, useMemo, useState } from 'react';
import { StoriesContext } from './Contexts';
import { Actions, Progress, Story } from './Components';
import { IStoryProps, IStoryIndexedObject, IStoryContext } from './types';
import * as hooks from './Hooks';
import styles from './styles.css';
import * as utilities from './utilities';

export type { IStoryObject } from './types';

export default function Stories({
  stories = [],
  width = '100%',
  height = '100%',
  onStoryChange = () => {},
  currentIndex = 0,
  defaultDuration = 10000,
  loop = false,
  onAllStoriesEnd = () => {},
  onStoriesStart = () => {},
  classNames = {},
  pauseStoryWhenInActiveWindow = true,
}: IStoryProps): JSX.Element | null {
  // Keep a ref to the previous transformed stories so we can preserve
  // calculatedDuration values for unchanged stories on re-transform.
  const prevTransformedRef = useRef<IStoryIndexedObject[]>([]);

  const storiesWithIndex: IStoryIndexedObject[] = useMemo(() => {
    const result = utilities.transformStories(
      stories,
      defaultDuration,
      prevTransformedRef.current,
    );
    prevTransformedRef.current = result;
    return result;
  }, [stories, defaultDuration]);

  const [selectedStory, setSelectedStory] = useState<
    IStoryIndexedObject | undefined
  >();
  const firstStoryIndex = 0;
  const lastStoryIndex = storiesWithIndex.length - 1;
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const hasCalledEndedCb = useRef<boolean>(false);
  const hasCalledStartedCb = useRef<boolean>(false);
  // Track previous stories length to detect when stories are appended.
  // Initialized to storiesWithIndex.length so the mount-time effect is a no-op.
  const prevStoriesLengthRef = useRef<number>(storiesWithIndex.length);

  useEffect(() => {
    if (!hasCalledStartedCb.current) {
      hasCalledStartedCb.current = true;
      onStoriesStart();
    }
  }, [onStoriesStart]);

  // Sync selectedStory when the parent explicitly changes currentIndex.
  useEffect(() => {
    const story = storiesWithIndex[currentIndex];
    if (story) {
      setSelectedStory(story);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Handle dynamic story changes: appends, replacements, and resumes.
  useEffect(() => {
    const prevLength = prevStoriesLengthRef.current;
    const newLength = storiesWithIndex.length;

    if (newLength > prevLength) {
      // Stories were appended.
      // Allow onAllStoriesEnd to fire again for the new last story.
      hasCalledEndedCb.current = false;

      // If playback had stopped at the old last story, create a new story
      // object with a fresh calculatedDuration to restart the auto-advance timer.
      // We need a new calculatedDuration because transformStories preserves
      // durations for unchanged stories (to avoid disrupting mid-playback timers).
      if (selectedStory && selectedStory.index === prevLength - 1) {
        const storyAtIndex = storiesWithIndex[selectedStory.index];
        if (storyAtIndex) {
          setSelectedStory({
            ...storyAtIndex,
            calculatedDuration:
              (storyAtIndex.duration || defaultDuration) +
              Number(Math.random().toFixed(4)),
          });
        }
      }
    } else if (newLength === prevLength && selectedStory) {
      // Same length but stories may have been replaced (different content).
      // Update selectedStory if the story at the current index changed.
      const currentStoryInNewArray = storiesWithIndex[selectedStory.index];
      if (
        currentStoryInNewArray &&
        (currentStoryInNewArray.url !== selectedStory.url ||
          currentStoryInNewArray.type !== selectedStory.type)
      ) {
        setSelectedStory(currentStoryInNewArray);
      }
    }

    prevStoriesLengthRef.current = newLength;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storiesWithIndex]);

  function handleNextClick() {
    if (loop && selectedStory?.index === lastStoryIndex) {
      setSelectedStory(storiesWithIndex[firstStoryIndex]);
      return;
    }
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

  useEffect(() => {
    if (selectedStory) {
      onStoryChange(selectedStory.index);
    }
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
