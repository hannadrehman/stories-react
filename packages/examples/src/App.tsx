import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stories from '@react-instagram/stories';

const props = {
  stories: [
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      duration: 5000,
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 3000,
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 3000,
    },
    {
      type: 'video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: 16000,
    },
    {
      type: 'component',
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 7000,
      component: ({ storyIndex, pause, resume }) => {
        console.log({ pause, resume });
        return (
          <div
            style={{
              height: '100%',
              display: 'flex',
              background: 'white',
              width: '100%',
            }}
          >
            <h1>{storyIndex}</h1>
          </div>
        );
      },
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 1000,
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 2000,
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 3000,
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 4000,
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 15000,
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 500,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <div className="story-container">
        <Stories stories={props.stories} />
      </div>
    </div>
  );
}

export default App;
