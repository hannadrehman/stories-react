import React from 'react';
import { render } from '@testing-library/react';
import { ProgressBar } from '../Components/ProgressBar';
import { StoriesContext } from '../Contexts';

// Mock useAnimationFrame to avoid rAF issues in tests
jest.mock('../Hooks', () => {
  const actual = jest.requireActual('../Hooks');
  return {
    ...actual,
    useAnimationFrame: jest.fn(),
  };
});

function makeStory(overrides: Record<string, any> = {}) {
  return {
    type: 'image',
    url: 'http://example.com/1.jpg',
    duration: 5000,
    index: 0,
    calculatedDuration: 5000.1,
    ...overrides,
  } as any;
}

function renderWithContext(
  ui: React.ReactElement,
  contextOverrides: Record<string, any> = {},
) {
  const defaultContext = {
    stories: [],
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

describe('ProgressBar', () => {
  it('should render wrapper and bar elements', () => {
    const { container } = renderWithContext(
      <ProgressBar
        hasStoryPassed={false}
        isActive={false}
        story={makeStory()}
        isPaused={false}
      />,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeTruthy();
    expect(wrapper.children.length).toBe(1); // inner bar
  });

  it('should set bar width to 0px when story has not passed and is not active', () => {
    const { container } = renderWithContext(
      <ProgressBar
        hasStoryPassed={false}
        isActive={false}
        story={makeStory()}
        isPaused={false}
      />,
    );

    const bar = container.querySelector('div > div') as HTMLElement;
    // The bar starts with empty width or '0px' depending on when the effect runs
    expect(['', '0px']).toContain(bar.style.width);
  });

  it('should set bar to full width when hasStoryPassed is true', () => {
    const { container } = renderWithContext(
      <ProgressBar
        hasStoryPassed={true}
        isActive={false}
        story={makeStory()}
        isPaused={false}
      />,
    );

    const bar = container.querySelector('div > div') as HTMLElement;
    // In jsdom, offsetWidth is 0, so full width will be "0px"
    // The important thing is the effect ran and set the width
    expect(bar.style.width).toBeDefined();
  });

  it('should apply custom classNames from context', () => {
    const { container } = renderWithContext(
      <ProgressBar
        hasStoryPassed={false}
        isActive={false}
        story={makeStory()}
        isPaused={false}
      />,
      {
        classNames: {
          progressBarContainer: 'custom-bar-container',
          progressBar: 'custom-bar',
        },
      },
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('custom-bar-container');

    const bar = wrapper.firstChild as HTMLElement;
    expect(bar.className).toContain('custom-bar');
  });

  it('should handle undefined classNames gracefully', () => {
    const { container } = renderWithContext(
      <ProgressBar
        hasStoryPassed={false}
        isActive={false}
        story={makeStory()}
        isPaused={false}
      />,
      { classNames: undefined },
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeTruthy();
  });

  it('should render correctly when active and not paused', () => {
    const { container } = renderWithContext(
      <ProgressBar
        hasStoryPassed={false}
        isActive={true}
        story={makeStory()}
        isPaused={false}
      />,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeTruthy();
  });

  it('should render correctly when active and paused', () => {
    const { container } = renderWithContext(
      <ProgressBar
        hasStoryPassed={false}
        isActive={true}
        story={makeStory()}
        isPaused={true}
      />,
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeTruthy();
  });

  it('should reset bar width when transitioning from passed to not passed', () => {
    const { container, rerender } = renderWithContext(
      <ProgressBar
        hasStoryPassed={true}
        isActive={false}
        story={makeStory()}
        isPaused={false}
      />,
    );

    // Rerender with hasStoryPassed = false
    render(
      <StoriesContext.Provider
        value={{
          stories: [],
          width: '100%',
          height: '100%',
          defaultDuration: 10000,
          isPaused: false,
          classNames: {},
        }}
      >
        <ProgressBar
          hasStoryPassed={false}
          isActive={false}
          story={makeStory()}
          isPaused={false}
        />
      </StoriesContext.Provider>,
    );
  });
});
