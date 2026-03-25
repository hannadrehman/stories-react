import React from 'react';
import { render, screen } from '@testing-library/react';
import { CustomComponent } from '../Components/CustomComponent';

function makeStory(overrides: Record<string, any> = {}) {
  return {
    type: 'component',
    url: '',
    duration: 5000,
    index: 0,
    calculatedDuration: 5000.1,
    ...overrides,
  } as any;
}

describe('CustomComponent', () => {
  it('should render the custom component from story.component', () => {
    const MyComponent = () => <div data-testid="custom">Custom Content</div>;
    render(
      <CustomComponent
        story={makeStory({ component: MyComponent })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    expect(screen.getByTestId('custom')).toBeTruthy();
    expect(screen.getByText('Custom Content')).toBeTruthy();
  });

  it('should pass pause callback to custom component', () => {
    const onPause = jest.fn();
    const MyComponent = ({ pause }: { pause: () => void }) => (
      <button onClick={pause} data-testid="pause-btn">
        Pause
      </button>
    );

    render(
      <CustomComponent
        story={makeStory({ component: MyComponent })}
        onPause={onPause}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    screen.getByTestId('pause-btn').click();
    expect(onPause).toHaveBeenCalledTimes(1);
  });

  it('should pass resume callback to custom component', () => {
    const onResume = jest.fn();
    const MyComponent = ({ resume }: { resume: () => void }) => (
      <button onClick={resume} data-testid="resume-btn">
        Resume
      </button>
    );

    render(
      <CustomComponent
        story={makeStory({ component: MyComponent })}
        onPause={jest.fn()}
        onResume={onResume}
        isPaused={false}
      />,
    );

    screen.getByTestId('resume-btn').click();
    expect(onResume).toHaveBeenCalledTimes(1);
  });

  it('should pass story object to custom component', () => {
    const story = makeStory({ component: () => null });
    let receivedStory: any = null;
    const MyComponent = (props: any) => {
      receivedStory = props.story;
      return <div data-testid="story-receiver">Got Story</div>;
    };

    render(
      <CustomComponent
        story={makeStory({ component: MyComponent })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    expect(receivedStory).toBeTruthy();
    expect(receivedStory.type).toBe('component');
    expect(receivedStory.index).toBe(0);
  });

  it('should pass isPaused to custom component', () => {
    let receivedIsPaused: boolean | null = null;
    const MyComponent = (props: any) => {
      receivedIsPaused = props.isPaused;
      return <div>Paused: {String(props.isPaused)}</div>;
    };

    render(
      <CustomComponent
        story={makeStory({ component: MyComponent })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={true}
      />,
    );

    expect(receivedIsPaused).toBe(true);
  });

  it('should pass isPaused=false to custom component', () => {
    let receivedIsPaused: boolean | null = null;
    const MyComponent = (props: any) => {
      receivedIsPaused = props.isPaused;
      return <div>Paused: {String(props.isPaused)}</div>;
    };

    render(
      <CustomComponent
        story={makeStory({ component: MyComponent })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    expect(receivedIsPaused).toBe(false);
  });

  it('should render within a wrapper div', () => {
    const MyComponent = () => <div data-testid="inner">Inner</div>;
    const { container } = render(
      <CustomComponent
        story={makeStory({ component: MyComponent })}
        onPause={jest.fn()}
        onResume={jest.fn()}
        isPaused={false}
      />,
    );

    // The wrapper div should contain the custom component
    const wrapper = container.firstChild;
    expect(wrapper).toBeTruthy();
    expect(wrapper?.nodeName).toBe('DIV');
  });
});
