import styled, { css } from 'styled-components';

const absStyles = css`
  position: absolute;
  width: 50%;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: 1;
`;

export const Left = styled.div`
  left: 0;
  ${absStyles}
`;

export const Right = styled.div`
  right: 0;
  ${absStyles}
`;
