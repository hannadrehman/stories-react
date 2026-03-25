import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SeeMoreComponent } from '../Components/SeeMoreComponent';

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

describe('SeeMoreComponent', () => {
  it.each([
    ['seeMore is undefined', { seeMore: undefined, seeMoreComponent: () => <div>Content</div> }],
    ['seeMore is false', { seeMore: false, seeMoreComponent: () => <div>Content</div> }],
    ['seeMoreComponent is undefined', { seeMore: true, seeMoreComponent: undefined }],
    ['seeMoreComponent is null', { seeMore: true, seeMoreComponent: null }],
    ['both are falsy', { seeMore: false, seeMoreComponent: undefined }],
  ])('should return null when %s', (_label, overrides) => {
    const { container } = render(
      <SeeMoreComponent
        story={makeStory(overrides)}
        onClose={jest.fn()}
      />,
    );
    expect(container.innerHTML).toBe('');
  });

  it('should render when both seeMore and seeMoreComponent are truthy', () => {
    const SeeMoreContent = () => <div data-testid="see-more-content">Content</div>;
    render(
      <SeeMoreComponent
        story={makeStory({ seeMore: true, seeMoreComponent: SeeMoreContent })}
        onClose={jest.fn()}
      />,
    );
    expect(screen.getByTestId('see-more-content')).toBeTruthy();
  });

  it('should render seeMoreComponent as a React component when it is a function', () => {
    const SeeMoreContent = () => <div data-testid="func-component">Function Component</div>;
    render(
      <SeeMoreComponent
        story={makeStory({ seeMore: true, seeMoreComponent: SeeMoreContent })}
        onClose={jest.fn()}
      />,
    );
    expect(screen.getByTestId('func-component')).toBeTruthy();
  });

  it('should render seeMoreComponent as JSX when it is not a function', () => {
    const jsxContent = <div data-testid="jsx-content">JSX Content</div>;
    render(
      <SeeMoreComponent
        story={makeStory({ seeMore: true, seeMoreComponent: jsxContent })}
        onClose={jest.fn()}
      />,
    );
    expect(screen.getByTestId('jsx-content')).toBeTruthy();
  });

  it('should render a close button', () => {
    render(
      <SeeMoreComponent
        story={makeStory({ seeMore: true, seeMoreComponent: () => <div>Content</div> })}
        onClose={jest.fn()}
      />,
    );
    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeTruthy();
    expect(closeButton.textContent).toContain('✕');
  });

  it('should call onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <SeeMoreComponent
        story={makeStory({ seeMore: true, seeMoreComponent: () => <div>Content</div> })}
        onClose={onClose}
      />,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should render with seeMore as a string and seeMoreComponent as function', () => {
    const SeeMoreContent = () => <div data-testid="content">Details</div>;
    render(
      <SeeMoreComponent
        story={makeStory({ seeMore: 'See More', seeMoreComponent: SeeMoreContent })}
        onClose={jest.fn()}
      />,
    );
    expect(screen.getByTestId('content')).toBeTruthy();
  });
});
