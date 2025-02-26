import React from 'react';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';

export default function ImageVideoStories() {
  const stories = [
    {
      type: 'image',
      duration: 6000,
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
    },
    {
      type: 'video',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
      duration: 27000,
    },
    {
      type: 'image',
      duration: 6000,
      url: 'https://images.pexels.com/photos/5015227/pexels-photo-5015227.jpeg',
    },
    {
      type: 'image',
      duration: 6000,
      url: 'https://images.pexels.com/photos/14664626/pexels-photo-14664626.jpeg',
    },
    {
      type: 'video',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4',
      duration: 10000,
    },
    {
      type: 'video',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-family-walking-together-in-nature-39767-large.mp4',
      duration: 10000,
    },

    {
      type: 'video',
      duration: 6000,
      url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
    },
    {
      duration: 7000,
      type: 'image',
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
    },
  ];
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '16px',
      }}
    >
      <Stories
        width="400px"
        height="600px"
        stories={stories}
        preloadNextStory={true}
      />
    </div>
  );
}
