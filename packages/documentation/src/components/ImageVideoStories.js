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
      url: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4',
      duration: 5000,
    },
    {
      type: 'image',
      duration: 6000,
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
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
      <Stories width="400px" height="600px" stories={stories} />
    </div>
  );
}
