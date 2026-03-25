import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SeeMore } from '../Components/SeeMore';

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

describe('SeeMore', () => {
  it('should return null when seeMore is falsy (undefined)', () => {
    const { container } = render(
      <SeeMore story={makeStory({ seeMore: undefined })} onSeeMoreClick={jest.fn()} />,
    );
    expect(container.innerHTML).toBe('');
  });

  it('should return null when seeMore is false', () => {
    const { container } = render(
      <SeeMore story={makeStory({ seeMore: false })} onSeeMoreClick={jest.fn()} />,
    );
    expect(container.innerHTML).toBe('');
  });

  it('should return null when seeMore is null', () => {
    const { container } = render(
      <SeeMore story={makeStory({ seeMore: null })} onSeeMoreClick={jest.fn()} />,
    );
    expect(container.innerHTML).toBe('');
  });

  it('should return null when seeMore is 0', () => {
    const { container } = render(
      <SeeMore story={makeStory({ seeMore: 0 })} onSeeMoreClick={jest.fn()} />,
    );
    expect(container.innerHTML).toBe('');
  });

  it('should return null when seeMore is empty string', () => {
    const { container } = render(
      <SeeMore story={makeStory({ seeMore: '' })} onSeeMoreClick={jest.fn()} />,
    );
    expect(container.innerHTML).toBe('');
  });

  it('should render a button when seeMore is truthy', () => {
    render(
      <SeeMore story={makeStory({ seeMore: true })} onSeeMoreClick={jest.fn()} />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
  });

  it('should render default "See More" text when seeMore is boolean true', () => {
    render(
      <SeeMore story={makeStory({ seeMore: true })} onSeeMoreClick={jest.fn()} />,
    );
    expect(screen.getByText('See More')).toBeTruthy();
    expect(screen.getByText('^')).toBeTruthy();
  });

  it('should render custom text when seeMore is a string', () => {
    render(
      <SeeMore story={makeStory({ seeMore: 'Swipe Up' })} onSeeMoreClick={jest.fn()} />,
    );
    expect(screen.getByText('Swipe Up')).toBeTruthy();
    expect(screen.getByText('^')).toBeTruthy();
  });

  it('should render seeMore as a component when it is a function', () => {
    const CustomSeeMore = () => <div data-testid="custom-see-more">Custom</div>;
    render(
      <SeeMore
        story={makeStory({ seeMore: CustomSeeMore })}
        onSeeMoreClick={jest.fn()}
      />,
    );
    expect(screen.getByTestId('custom-see-more')).toBeTruthy();
  });

  it('should render seeMore as JSX when it is an object/element', () => {
    const jsxSeeMore = <div data-testid="jsx-see-more">JSX See More</div>;
    render(
      <SeeMore
        story={makeStory({ seeMore: jsxSeeMore })}
        onSeeMoreClick={jest.fn()}
      />,
    );
    expect(screen.getByTestId('jsx-see-more')).toBeTruthy();
  });

  it('should call onSeeMoreClick when the button is clicked', () => {
    const onSeeMoreClick = jest.fn();
    render(
      <SeeMore story={makeStory({ seeMore: true })} onSeeMoreClick={onSeeMoreClick} />,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(onSeeMoreClick).toHaveBeenCalledTimes(1);
  });

  it('should render button with type="button"', () => {
    render(
      <SeeMore story={makeStory({ seeMore: true })} onSeeMoreClick={jest.fn()} />,
    );
    const button = screen.getByRole('button');
    expect(button.getAttribute('type')).toBe('button');
  });
});
