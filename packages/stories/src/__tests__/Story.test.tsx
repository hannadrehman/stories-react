import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Story } from '../Components/Story';
import { StoriesContext } from '../Contexts';

// Mock useAnimationFrame to avoid rAF issues
jest.mock('../Hooks', () => {
  const actual = jest.requireActual('../Hooks');
  return {
    ...actual,
    useAnimationFrame: jest.fn(),
  };
});

// Mock HTMLMediaElement methods for video tests
beforeAll(() => {
  window.HTMLMediaElement.prototype.play = jest.fn().mockResolvedValue(undefined);
  window.HTMLMediaElement.prototype.pause = jest.fn();
  window.HTMLMediaElement.prototype.load = jest.fn();
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

describe('Story', () => {
  // ---- Story type rendering ----

  it('should render Image component for image type story', () => {
    renderWithContext(
      <Story
        story={makeStory({ type: 'image' })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    const img = document.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('http://example.com/1.jpg');
  });

  it('should render Video component for video type story', () => {
    renderWithContext(
      <Story
        story={makeStory({ type: 'video', url: 'http://example.com/video.mp4' })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    const video = document.querySelector('video');
    expect(video).toBeTruthy();
  });

  it('should render CustomComponent for component type story', () => {
    const MyComponent = () => <div data-testid="custom-comp">Custom</div>;
    renderWithContext(
      <Story
        story={makeStory({ type: 'component', component: MyComponent })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    expect(screen.getByTestId('custom-comp')).toBeTruthy();
  });

  it('should render null for unknown story type', () => {
    const { container } = renderWithContext(
      <Story
        story={makeStory({ type: 'unknown' })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    // Should render the wrapper but no story content inside
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeTruthy();
    // No img, video, or custom component
    expect(document.querySelector('img')).toBeNull();
    expect(document.querySelector('video')).toBeNull();
  });

  // ---- Header rendering ----

  it('should render header when story.header is a string', () => {
    renderWithContext(
      <Story
        story={makeStory({ header: 'My Header Text' })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    expect(screen.getByText('My Header Text')).toBeTruthy();
  });

  it('should render header when story.header is JSX', () => {
    const headerJsx = <div data-testid="jsx-header">JSX Header</div>;
    renderWithContext(
      <Story
        story={makeStory({ header: headerJsx })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    expect(screen.getByTestId('jsx-header')).toBeTruthy();
  });

  it('should render header as component when story.header is a function', () => {
    const HeaderComponent = () => <div data-testid="func-header">Function Header</div>;
    renderWithContext(
      <Story
        story={makeStory({ header: HeaderComponent })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    expect(screen.getByTestId('func-header')).toBeTruthy();
  });

  it('should not render header when story.header is falsy', () => {
    const { container } = renderWithContext(
      <Story
        story={makeStory({ header: undefined })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    // The wrapper should exist but no header div should be rendered
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeTruthy();
    // The header div has the 'header' CSS class - it should not be present
    const headerDiv = wrapper.querySelector('[class*="header"]');
    expect(headerDiv).toBeNull();
  });

  it('should not render header when story.header is null', () => {
    renderWithContext(
      <Story
        story={makeStory({ header: null })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    // No header content should be present
    expect(screen.queryByText('header')).toBeNull();
  });

  // ---- SeeMore ----

  it('should render SeeMore button when story.seeMore is truthy', () => {
    renderWithContext(
      <Story
        story={makeStory({ seeMore: true })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    expect(screen.getByText('See More')).toBeTruthy();
  });

  it('should not render SeeMore when story.seeMore is falsy', () => {
    renderWithContext(
      <Story
        story={makeStory({ seeMore: undefined })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    expect(screen.queryByText('See More')).toBeNull();
  });

  it('should call onPause when SeeMore is clicked', () => {
    const onPause = jest.fn();
    renderWithContext(
      <Story
        story={makeStory({ seeMore: true })}
        onPause={onPause}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(onPause).toHaveBeenCalled();
  });

  it('should call story.onSeeMoreClick when SeeMore is clicked', () => {
    const onSeeMoreClick = jest.fn();
    renderWithContext(
      <Story
        story={makeStory({ seeMore: true, onSeeMoreClick, index: 2 })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(onSeeMoreClick).toHaveBeenCalledWith(2);
  });

  it('should show SeeMoreComponent when SeeMore is clicked and seeMoreComponent exists', () => {
    const SeeMoreContent = () => <div data-testid="see-more-panel">Panel Content</div>;
    renderWithContext(
      <Story
        story={makeStory({
          seeMore: true,
          seeMoreComponent: SeeMoreContent,
        })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    // Click see more
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('see-more-panel')).toBeTruthy();
  });

  it('should close SeeMoreComponent and call onResume when close is clicked', () => {
    const onResume = jest.fn();
    const SeeMoreContent = () => <div data-testid="see-more-panel">Panel</div>;
    renderWithContext(
      <Story
        story={makeStory({
          seeMore: true,
          seeMoreComponent: SeeMoreContent,
        })}
        onPause={jest.fn()}
        onResume={onResume}
        isPaused={false}
      />,
    );

    // Open see more
    fireEvent.click(screen.getByText('See More'));

    // Find and click close button (the "✕" button)
    const closeButton = screen.getByText('✕');
    fireEvent.click(closeButton);

    expect(onResume).toHaveBeenCalled();
    expect(screen.queryByTestId('see-more-panel')).toBeNull();
  });

  // ---- Custom classNames ----

  it('should apply storyContainer className from context', () => {
    const { container } = renderWithContext(
      <Story
        story={makeStory()}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
      { classNames: { storyContainer: 'custom-story-container' } },
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('custom-story-container');
  });
});
