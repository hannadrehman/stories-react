import { STORY_TYPES } from '../Components/Story/Story.constants';
import { EVENT_TYPE, EVENT_REGION } from '../Components/Actions/Actions.constants';

describe('STORY_TYPES', () => {
  it('should have IMAGE type as "image"', () => {
    expect(STORY_TYPES.IMAGE).toBe('image');
  });

  it('should have VIDEO type as "video"', () => {
    expect(STORY_TYPES.VIDEO).toBe('video');
  });

  it('should have COMPONENT type as "component"', () => {
    expect(STORY_TYPES.COMPONENT).toBe('component');
  });

  it('should be frozen (immutable)', () => {
    expect(Object.isFrozen(STORY_TYPES)).toBe(true);
  });

  it('should have exactly 3 types', () => {
    expect(Object.keys(STORY_TYPES)).toHaveLength(3);
  });

  it('should not allow modification', () => {
    expect(() => {
      (STORY_TYPES as any).NEW_TYPE = 'new';
    }).toThrow();
  });
});

describe('EVENT_TYPE', () => {
  it('should have MOUSE_DOWN as "mouseDown"', () => {
    expect(EVENT_TYPE.MOUSE_DOWN).toBe('mouseDown');
  });

  it('should have MOUSE_UP as "mouseUp"', () => {
    expect(EVENT_TYPE.MOUSE_UP).toBe('mouseUp');
  });

  it('should have TOUCH_START as "touchStart"', () => {
    expect(EVENT_TYPE.TOUCH_START).toBe('touchStart');
  });

  it('should have TOUCH_END as "touchEnd"', () => {
    expect(EVENT_TYPE.TOUCH_END).toBe('touchEnd');
  });

  it('should be frozen (immutable)', () => {
    expect(Object.isFrozen(EVENT_TYPE)).toBe(true);
  });

  it('should have exactly 4 event types', () => {
    expect(Object.keys(EVENT_TYPE)).toHaveLength(4);
  });
});

describe('EVENT_REGION', () => {
  it('should have LEFT as "left"', () => {
    expect(EVENT_REGION.LEFT).toBe('left');
  });

  it('should have RIGHT as "right"', () => {
    expect(EVENT_REGION.RIGHT).toBe('right');
  });

  it('should be frozen (immutable)', () => {
    expect(Object.isFrozen(EVENT_REGION)).toBe(true);
  });

  it('should have exactly 2 regions', () => {
    expect(Object.keys(EVENT_REGION)).toHaveLength(2);
  });
});
