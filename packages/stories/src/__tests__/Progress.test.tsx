import React from 'react';
import { render } from '@testing-library/react';
import { Progress } from '../Components/Progress';
import { StoriesContext } from '../Contexts';

// Mock useAnimationFrame to avoid rAF issues in tests
jest.mock('../Hooks', () => {
  const actual = jest.requireActual('../Hooks');
  return {
    ...actual,
    useAnimationFrame: jest.fn(),
  };
});

function makeStories(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    type: 'image',
    url: `http://example.com/${i}.jpg`,
    duration: 5000,
    index: i,
    calculatedDuration: 5000 + i * 0.1,
  }));
}

function renderWithContext(
  ui: React.ReactElement,
  contextOverrides: Record<string, any> = {},
) {
  const defaultContext = {
    stories: makeStories(3),
    width: '100%' as const,
    height: '100%' as const,
    defaultDuration: 10000,
    isPaused: false,
    classNames: {},
    ...contextOverrides,
  };
  return render(
    <StoriesContext.Provider value={defaultContext}>{ui}</StoriesContext.Provider>,
  );
}

describe('Progress', () => {
  it('should render a progress bar for each story', () => {
    const { container } = renderWithContext(
      <Progress activeStoryIndex={0} isPaused={false} />,
    );

    // Each ProgressBar renders a wrapper div containing a bar div
    // The outer wrapper is the grid container
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeTruthy();
    // Should have 3 children (one per story)
    expect(wrapper.children.length).toBe(3);
  });

  it('should render correct grid template columns', () => {
    const { container } = renderWithContext(
      <Progress activeStoryIndex={0} isPaused={false} />,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.style.gridTemplateColumns).toBe('repeat(3,1fr)');
  });

  it('should render with 5 stories', () => {
    const { container } = renderWithContext(
      <Progress activeStoryIndex={2} isPaused={false} />,
      { stories: makeStories(5) },
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.children.length).toBe(5);
    expect(wrapper.style.gridTemplateColumns).toBe('repeat(5,1fr)');
  });

  it('should render empty grid when there are no stories', () => {
    const { container } = renderWithContext(
      <Progress activeStoryIndex={0} isPaused={false} />,
      { stories: [] },
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.children.length).toBe(0);
    expect(wrapper.style.gridTemplateColumns).toBe('repeat(0,1fr)');
  });

  it('should render with single story', () => {
    const { container } = renderWithContext(
      <Progress activeStoryIndex={0} isPaused={false} />,
      { stories: makeStories(1) },
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.children.length).toBe(1);
    expect(wrapper.style.gridTemplateColumns).toBe('repeat(1,1fr)');
  });

  it('should apply custom classNames from context', () => {
    const { container } = renderWithContext(
      <Progress activeStoryIndex={0} isPaused={false} />,
      { classNames: { progressContainer: 'custom-progress' } },
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('custom-progress');
  });

  it('should handle classNames being undefined', () => {
    const { container } = renderWithContext(
      <Progress activeStoryIndex={0} isPaused={false} />,
      { classNames: undefined },
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeTruthy();
  });
});
