import { createContext } from 'react';
import { IStoryContext } from '../types';

const defaultStoryContext: IStoryContext = {
  stories: [],
  width: '100%',
  height: '100%',
};

export const StoriesContext = createContext(defaultStoryContext);
