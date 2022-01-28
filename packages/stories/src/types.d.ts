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
}

export interface IStoryProps {
  stories: IStoryObject[];
  height?: '100%';
  width?: '100%';
  onStoryChange: (currentIndex: number) => void;
  currentIndex?: number;
  defaultDuration?: number;
}

export interface IStoryContext {
  stories: IStoryIndexedObject[];
  height?: '100%';
  width?: '100%';
  defaultDuration: number;
}

export interface IStoryComponentProps {
  story: IStoryIndexedObject;
  onPause: () => void;
  onResume: () => void;
}
