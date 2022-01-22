import { useContext } from 'react';
import { StoriesContext } from '../Contexts';

export function useStoriesContext() {
  const context = useContext(StoriesContext);
  return context;
}
