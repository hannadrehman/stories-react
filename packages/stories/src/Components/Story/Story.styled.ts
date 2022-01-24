import styled from 'styled-components';

interface IVideoPlayer {
  autoPlay?: boolean;
  playsInline?: boolean;
  'webkit-playsinline'?: boolean;
  controls?: boolean;
  src?: string;
  onLoad?: () => void;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Video = styled.video<IVideoPlayer>`
  width: 100%;
  object-fit: cover;
`;

export const Component = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
