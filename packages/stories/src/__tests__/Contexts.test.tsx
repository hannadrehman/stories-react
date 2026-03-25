import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { StoriesContext } from '../Contexts';

describe('StoriesContext', () => {
  function ContextConsumer() {
    const context = useContext(StoriesContext);
    return (
      <div>
        <span data-testid="stories-length">{context.stories.length}</span>
        <span data-testid="width">{context.width}</span>
        <span data-testid="height">{context.height}</span>
        <span data-testid="defaultDuration">{context.defaultDuration}</span>
        <span data-testid="isPaused">{String(context.isPaused)}</span>
      </div>
    );
  }

  it('should provide default context values', () => {
    render(<ContextConsumer />);

    expect(screen.getByTestId('stories-length').textContent).toBe('0');
    expect(screen.getByTestId('width').textContent).toBe('100%');
    expect(screen.getByTestId('height').textContent).toBe('100%');
    expect(screen.getByTestId('defaultDuration').textContent).toBe('10000');
    expect(screen.getByTestId('isPaused').textContent).toBe('false');
  });

  it('should allow overriding context values via Provider', () => {
    const customValue = {
      stories: [
        {
          type: 'image',
          url: 'test.jpg',
          duration: 3000,
          index: 0,
          calculatedDuration: 3000.1,
        },
      ] as any,
      width: '100%' as const,
      height: '100%' as const,
      defaultDuration: 3000,
      isPaused: true,
    };

    render(
      <StoriesContext.Provider value={customValue}>
        <ContextConsumer />
      </StoriesContext.Provider>,
    );

    expect(screen.getByTestId('stories-length').textContent).toBe('1');
    expect(screen.getByTestId('defaultDuration').textContent).toBe('3000');
    expect(screen.getByTestId('isPaused').textContent).toBe('true');
  });

  it('should support nested providers (inner overrides outer)', () => {
    const outerValue = {
      stories: [] as any,
      width: '100%' as const,
      height: '100%' as const,
      defaultDuration: 5000,
      isPaused: false,
    };

    const innerValue = {
      stories: [] as any,
      width: '100%' as const,
      height: '100%' as const,
      defaultDuration: 8000,
      isPaused: true,
    };

    render(
      <StoriesContext.Provider value={outerValue}>
        <StoriesContext.Provider value={innerValue}>
          <ContextConsumer />
        </StoriesContext.Provider>
      </StoriesContext.Provider>,
    );

    expect(screen.getByTestId('defaultDuration').textContent).toBe('8000');
    expect(screen.getByTestId('isPaused').textContent).toBe('true');
  });
});
