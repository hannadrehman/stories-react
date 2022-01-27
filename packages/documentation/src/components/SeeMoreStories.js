import React from 'react';
import Stories from 'react-stories';
import 'react-stories/dist/index.css';

function SeeMoreComponent() {
  return (
    <div
      className="box"
      style={{
        paddingTop: '100px',
        padding: '24px',
        backgroundColor: '#fad0c4',
        height: '100%',
      }}
    >
      <h4>Component opened from see more</h4>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '24px' }}
      >
        <img src="https://images.pexels.com/photos/10955653/pexels-photo-10955653.jpeg?dpr=2&w=100" />
      </div>
      <p>
        You need to add <code>zindex >= 2</code> to any interaction u want in
        the component
      </p>
      <button
        onClick={() =>
          window.open('https://www.pexels.com/@imadclicks', '_blank')
        }
        style={{
          color: '#3399FF',
          border: '1px solid',
          borderColor: '#3399FF',
          borderRadius: '3px',
          height: '30px',
          cursor: 'pointer',
          position: 'relative',
          zIndex: '2',
          width: '100%',
        }}
      >
        Follow Imad Clicks on pexels for amazing pictures
      </button>
    </div>
  );
}

export default function SeeMoreStories() {
  const stories = [
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
      duration: 5000,
      seeMore: true,
      seeMoreComponent: SeeMoreComponent,
    },
    {
      type: 'image',
      duration: 6000,
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
      seeMore: 'Custom See More String',
      seeMoreComponent: SeeMoreComponent,
    },
    {
      duration: 7000,
      type: 'image',
      url: 'https://images.pexels.com/photos/10964888/pexels-photo-10964888.jpeg?w=300',
      seeMore: (
        <div>
          <button>custom see more button</button>
        </div>
      ),
      seeMoreComponent: SeeMoreComponent,
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/10985425/pexels-photo-10985425.jpeg?w=300',
      duration: 5000,
      seeMore: true,
      seeMoreComponent: SeeMoreComponent,
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
