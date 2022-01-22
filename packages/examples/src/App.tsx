import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stories from '@react-instagram/stories';

console.log(Stories);

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
      duration: 5000,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="story-container">
        <Stories stories={props.stories} />
      </div>
    </div>
  );
}

export default App;
