import styled from 'styled-components';

interface IWrapperProps {
  numOfStories?: number;
}

export const Wrapper = styled.div<IWrapperProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 2px;
  display: grid;
  grid-gap: 4px;
  grid-template-columns: repeat(${(props) => props.numOfStories}, 1fr);
  padding: 4px;
`;
