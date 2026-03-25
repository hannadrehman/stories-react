import { transformStories } from '../utilities';

describe('transformStories', () => {
  const defaultDuration = 10000;

  it('should return an empty array when given an empty stories array', () => {
    const result = transformStories([], defaultDuration);
    expect(result).toEqual([]);
  });

  it('should add index and calculatedDuration to each story', () => {
    const stories = [
      { type: 'image', url: 'http://example.com/1.jpg', duration: 5000 },
      { type: 'video', url: 'http://example.com/2.mp4', duration: 8000 },
    ];
    const result = transformStories(stories as any, defaultDuration);

    expect(result).toHaveLength(2);
    expect(result[0].index).toBe(0);
    expect(result[1].index).toBe(1);
    expect(result[0]).toHaveProperty('calculatedDuration');
    expect(result[1]).toHaveProperty('calculatedDuration');
  });

  it('should use story.duration when provided', () => {
    const stories = [
      { type: 'image', url: 'http://example.com/1.jpg', duration: 5000 },
    ];
    const result = transformStories(stories as any, defaultDuration);

    // calculatedDuration should be close to 5000 (with a small delta)
    expect(result[0].calculatedDuration).toBeGreaterThanOrEqual(5000);
    expect(result[0].calculatedDuration).toBeLessThan(5001);
  });

  it('should use defaultDuration when story.duration is 0 (falsy)', () => {
    const stories = [
      { type: 'image', url: 'http://example.com/1.jpg', duration: 0 },
    ];
    const result = transformStories(stories as any, defaultDuration);

    // Should fall back to defaultDuration (10000) since 0 is falsy
    expect(result[0].calculatedDuration).toBeGreaterThanOrEqual(defaultDuration);
    expect(result[0].calculatedDuration).toBeLessThan(defaultDuration + 1);
  });

  it('should use defaultDuration when story.duration is undefined', () => {
    const stories = [
      { type: 'image', url: 'http://example.com/1.jpg' },
    ];
    const result = transformStories(stories as any, defaultDuration);

    expect(result[0].calculatedDuration).toBeGreaterThanOrEqual(defaultDuration);
    expect(result[0].calculatedDuration).toBeLessThan(defaultDuration + 1);
  });

  it('should preserve all original story properties', () => {
    const stories = [
      {
        type: 'image',
        url: 'http://example.com/1.jpg',
        duration: 5000,
        header: 'My Header',
        seeMore: true,
        seeMoreComponent: 'component',
      },
    ];
    const result = transformStories(stories as any, defaultDuration);

    expect(result[0].type).toBe('image');
    expect(result[0].url).toBe('http://example.com/1.jpg');
    expect(result[0].duration).toBe(5000);
    expect(result[0].header).toBe('My Header');
    expect(result[0].seeMore).toBe(true);
    expect(result[0].seeMoreComponent).toBe('component');
  });

  it('should produce distinct calculatedDuration values for stories with the same duration', () => {
    // Use many stories to increase collision probability
    const stories = Array.from({ length: 20 }, (_, i) => ({
      type: 'image',
      url: `http://example.com/${i}.jpg`,
      duration: 5000,
    }));
    const result = transformStories(stories as any, defaultDuration);

    // Check that adjacent stories have different calculatedDurations
    for (let i = 1; i < result.length; i++) {
      expect(result[i].calculatedDuration).not.toBe(result[i - 1].calculatedDuration);
    }
  });

  it('should handle a single story', () => {
    const stories = [
      { type: 'image', url: 'http://example.com/1.jpg', duration: 3000 },
    ];
    const result = transformStories(stories as any, defaultDuration);

    expect(result).toHaveLength(1);
    expect(result[0].index).toBe(0);
    expect(result[0].calculatedDuration).toBeGreaterThanOrEqual(3000);
    expect(result[0].calculatedDuration).toBeLessThan(3001);
  });

  it('should handle stories with different types', () => {
    const stories = [
      { type: 'image', url: 'http://example.com/1.jpg', duration: 5000 },
      { type: 'video', url: 'http://example.com/2.mp4', duration: 8000 },
      { type: 'component', url: '', duration: 3000, component: () => null },
    ];
    const result = transformStories(stories as any, defaultDuration);

    expect(result).toHaveLength(3);
    expect(result[0].type).toBe('image');
    expect(result[1].type).toBe('video');
    expect(result[2].type).toBe('component');
  });

  it('should add a delta to calculatedDuration that is less than 1', () => {
    const stories = [
      { type: 'image', url: 'http://example.com/1.jpg', duration: 5000 },
    ];
    const result = transformStories(stories as any, defaultDuration);

    const delta = result[0].calculatedDuration - 5000;
    expect(delta).toBeGreaterThanOrEqual(0);
    expect(delta).toBeLessThan(1);
  });

  it('should handle large number of stories', () => {
    const stories = Array.from({ length: 100 }, (_, i) => ({
      type: 'image',
      url: `http://example.com/${i}.jpg`,
      duration: 5000,
    }));
    const result = transformStories(stories as any, defaultDuration);

    expect(result).toHaveLength(100);
    result.forEach((story, i) => {
      expect(story.index).toBe(i);
    });
  });

  it('should handle mixed durations (some provided, some falling back to default)', () => {
    const stories = [
      { type: 'image', url: 'http://example.com/1.jpg', duration: 3000 },
      { type: 'image', url: 'http://example.com/2.jpg', duration: 0 },
      { type: 'image', url: 'http://example.com/3.jpg' },
    ];
    const result = transformStories(stories as any, defaultDuration);

    expect(result[0].calculatedDuration).toBeGreaterThanOrEqual(3000);
    expect(result[0].calculatedDuration).toBeLessThan(3001);
    // duration: 0 is falsy, falls back to defaultDuration
    expect(result[1].calculatedDuration).toBeGreaterThanOrEqual(defaultDuration);
    expect(result[1].calculatedDuration).toBeLessThan(defaultDuration + 1);
    // undefined duration falls back to defaultDuration
    expect(result[2].calculatedDuration).toBeGreaterThanOrEqual(defaultDuration);
    expect(result[2].calculatedDuration).toBeLessThan(defaultDuration + 1);
  });
});
