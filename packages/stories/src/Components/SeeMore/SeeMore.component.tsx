import { IStoryIndexedObject } from '../../types';
import styles from './SeeMore.styles.css';

interface Iprops {
  story: IStoryIndexedObject;
  onSeeMoreClick: () => void;
}
export function SeeMore(props: Iprops) {
  function getSeeMore() {
    const seeMore = props.story.seeMore;
    const typeOfSeeMore = typeof seeMore;
    if (['string', 'boolean'].includes(typeOfSeeMore)) {
      const seeMoreText = typeOfSeeMore === 'string' ? seeMore : 'See More';
      return (
        <div className={styles.defaultSeeMore}>
          <span>^</span>
          <p>{seeMoreText}</p>
        </div>
      );
    }
    if (typeOfSeeMore === 'function') {
      return <props.story.seeMore />;
    }
    return props.story.seeMore;
  }

  function handleSeeMore() {
    props.onSeeMoreClick();
  }

  if (!props.story.seeMore) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleSeeMore}
      className={styles.seeMoreWrapper}
    >
      {getSeeMore()}
    </button>
  );
}
