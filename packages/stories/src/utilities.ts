import { IStoryObject, IStoryIndexedObject } from './types';

function getTimeDelta(precesion = 4): number {
  return Number(Math.random().toFixed(precesion));
}

export function transformStories(
  stories: IStoryObject[],
  defaultDuration: number,
  previousTransformed: IStoryIndexedObject[] = [],
): IStoryIndexedObject[] {
  /*
   * adding some delta time to duration to have distinct duration for each story.
   * this is required inside the timeout hook.
   * otherwise the effect is not getting called which resets the delay
   * after each story
   *
   * When stories are appended dynamically, we preserve the calculatedDuration
   * of existing stories so the currently playing story's timer is not reset.
   */

  let lastCalculatedDuration = 0;
  return stories.map((story, index) => {
    // Preserve calculatedDuration for existing stories that haven't changed,
    // so the usePausableTimeout timer is not disrupted mid-playback.
    const prev = previousTransformed[index];
    if (
      prev &&
      prev.url === story.url &&
      prev.type === story.type &&
      prev.duration === story.duration
    ) {
      lastCalculatedDuration = prev.calculatedDuration;
      return {
        ...story,
        index,
        calculatedDuration: prev.calculatedDuration,
      };
    }

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
