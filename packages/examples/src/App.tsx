import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Stories from '@react-instagram/stories';
import '@react-instagram/stories/dist/index.css';

const props = {
  stories: [
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      seeMore: true,
      seeMoreComponent: (
        <div>
          <h1>hello </h1>
          <h1>hello </h1>
          <h1>hello </h1>
          <h1>hello </h1>
          <h1>hello </h1>
          <h1>hello </h1>
          <h1>hello </h1>
          <h1>hello </h1>
          <h1>hello </h1>
          <h1>hello </h1>
        </div>
      ),
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 23000,
      header: (
        <div>
          <div>
            <b style={{ color: 'white' }}>This is story header</b>
          </div>
          <div>
            <b style={{ color: 'white' }}>Sub Heading</b>
          </div>
        </div>
      ),
      seeMore: 'SEE MORE',
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 3000,
      header: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <b style={{ color: 'white' }}>This is story header</b>
          </div>
          <div>
            <b style={{ color: 'white' }}>Sub Heading</b>
          </div>
        </div>
      ),
      seeMore: (
        <p
          style={{
            fontSize: '24px',
            color: 'red',
            fontWeight: '800',
            margin: '0',
          }}
        >
          Custom See More
        </p>
      ),
    },
    {
      type: 'video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: 16000,
      header: (
        <div>
          <div>
            <b style={{ color: 'white' }}>This is story header</b>
          </div>
          <div>
            <b style={{ color: 'white' }}>Sub Heading</b>
          </div>
        </div>
      ),
    },
    {
      type: 'component',
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      duration: 17000,
      header: 'this is a log string of text',
      component: ({ story, pause, resume }) => {
        console.log({ story, pause, resume });
        return (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              background: 'white',
              width: '100%',
            }}
          >
            <h1>{story.index}</h1>
            <br />
            <button
              type="submit"
              onClick={() => pause()}
              style={{ height: '40px', zIndex: 9, cursor: 'pointer' }}
            >
              pause this story
            </button>
            <div />
            <button
              type="submit"
              onClick={() => resume()}
              style={{ height: '40px', zIndex: 9, cursor: 'pointer' }}
            >
              resume this story
            </button>
          </div>
        );
      },
      seeMore: () => <h1>hello</h1>,
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
  const [index, setIndex] = useState(0);
  return (
    <div className="App">
      <div className="story-container">
        <Stories
          stories={props.stories}
          onStoryChange={(idx) => setIndex(idx)}
          height="615px"
        />
      </div>
      <h1>{index}</h1>
    </div>
  );
}

export default App;
