import styled from 'styled-components';
import { StoriesContext } from './Contexts';
import { Actions, Progress } from './Components';

interface IStoryObject {
  type: string;
  url: string;
  duration: number;
}

interface IWrapperProps {
  height?: '100%';
  width?: '100%';
}

export interface IStoryProps extends IWrapperProps {
  stories: IStoryObject[];
}
const Wrapper = styled.div<IWrapperProps>`
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export default function Stories({
  stories,
  width,
  height,
}: IStoryProps): JSX.Element {
  const contextValue: IStoryProps = {
    stories,
    width,
    height,
  };

  function handleNextClick() {}
  function handlePrevClick() {}
  function handlePause() {}

  return (
    <StoriesContext.Provider value={contextValue}>
      <Wrapper width={width} height={height}>
        <div>please work</div>
        <Actions
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
          onPause={handlePause}
        />
      </Wrapper>
    </StoriesContext.Provider>
  );
}
