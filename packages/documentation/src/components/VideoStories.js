import React from 'react';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';

export default function VideoStories() {
  const stories = [
    {
      type: 'video',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4',
      duration: 5000,
    },
    {
      type: 'video',
      duration: 6000,
      url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',
    },
    {
      duration: 30000,
      type: 'video',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
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
      <Stories width="380px" height="600px" stories={stories} />
    </div>
  );
}
