interface IStoryObject {
  type: string;
  url: string;
  duration: number;
  component?: any;
  header?: any;
  seeMore?: any;
  seeMoreComponent?: any;
  onSeeMoreClick?: (storyIndex: number) => void;
}

interface IStoryIndexedObject extends IStoryObject {
  index: number;
  calculatedDuration: number;
}

interface IStoryClassNames {
  main?: string;
  progressContainer?: string;
  progressBarContainer?: string;
  progressBar?: string;
  storyContainer?: string;
}

export interface IStoryProps {
  stories: IStoryObject[];
  height?: '100%';
  width?: '100%';
  onStoryChange: (currentIndex: number) => void;
  currentIndex?: number;
  defaultDuration?: number;
  loop?: boolean;
  onStoriesStart?: () => void;
  onAllStoriesEnd?: () => void;
  classNames?: IStoryClassNames;
  pauseStoryWhenInActiveWindow?: boolean;
  preloadNextStory?:boolean;
}

export interface IStoryContext {
  stories: IStoryIndexedObject[];
  height?: '100%';
  width?: '100%';
  defaultDuration: number;
  isPaused: boolean;
  classNames?: IStoryClassNames;
  preloadNextStory?: boolean;
}

export interface IStoryComponentProps {
  story: IStoryIndexedObject;
  onPause: () => void;
  onResume: () => void;
  isPaused: boolean;
}
