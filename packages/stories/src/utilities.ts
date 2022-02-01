import { IStoryObject, IStoryIndexedObject } from './types';

function getTimeDelta(precesion = 4): number {
  return Number(Math.random().toFixed(precesion));
}

export function transformStories(
  stories: IStoryObject[],
  defaultDuration: number,
): IStoryIndexedObject[] {
  /*
   * adding some delta time to duration to have distinct duration for each story.
   * this is required inside the timeout hook.
   * otherwise the effect is not getting called which resets the delay
   * after each story
   */

  let lastCalculatedDuration = 0;
  return stories.map((story, index) => {
    const duration = story.duration || defaultDuration;
    let calculatedDuration = duration + getTimeDelta();
    /*
     * it is possible that there is a collision in delta time generated.
     * in that case we are storing last calculatedDuration and comparing it
     * on each iteration with next calculated duration.
     * if collision occured and we got same duration we are re generating the time delta
     * with a different precision. slightly higer then default
     * */
    if (calculatedDuration === lastCalculatedDuration) {
      calculatedDuration = duration + getTimeDelta(6);
    }

    lastCalculatedDuration = calculatedDuration;
    return {
      ...story,
      index,
      calculatedDuration,
    };
  });
}
