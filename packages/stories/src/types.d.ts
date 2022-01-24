interface IStoryComponent {
  pause: () => void;
  resume: () => void;
  storyIndex: number;
}
interface IStoryObject {
  type: string;
  url: string;
  duration: number;
  component?: any
}

interface IStoryIndexedObject extends IStoryObject {
  index: number;
}

interface IWrapperProps {
  height?: '100%';
  width?: '100%';
}

export interface IStoryProps {
  stories: IStoryObject[];
  height?: '100%';
  width?: '100%';
}

export interface IStoryContext {
  stories: IStoryIndexedObject[];
  height?: '100%';
  width?: '100%';
}
