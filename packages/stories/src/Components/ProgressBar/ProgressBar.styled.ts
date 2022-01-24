import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background-color: #6a6a6a;
  border-radius: 2px;
`;

interface IBar {
  hasCompleted?: boolean;
}

export const Bar = styled.div<IBar>`
  position: absolute;
  width: 0;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 2px;
  background-color: #dfdfdf;
`;
