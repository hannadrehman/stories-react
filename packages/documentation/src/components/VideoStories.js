import React from 'react';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';

export default function VideoStories() {
  const stories = [
    {
      type: 'video',
      url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      duration: 5000,
    },
    {
      type: 'video',
      duration: 30000,
      url: 'https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/Sample-MP4-Video-File-for-Testing.mp4',
    },
    {
      duration: 90000,
      type: 'video',
      url: 'https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/Sample-MP4-Video-File-Download.mp4',
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
