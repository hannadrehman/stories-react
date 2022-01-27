import React from 'react';
import Stories from 'react-stories';
import 'react-stories/dist/index.css';

function Head(props) {
  return (
    <div
      style={{
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        'background-color': '#9d9d9d3b',
        width: '150px',
      }}
    >
      <div>
        <img
          src={props.url}
          alt="Avatar"
          style={{
            'vertical-align': 'middle',
            width: '40px',
            height: '40px',
            'border-radius': '50%',
          }}
        />
      </div>
      <div
        style={{
          marginLeft: '8px',
        }}
      >
        <p
          style={{
            color: 'white',
            fontWeight: '500',
            fontSize: '14px',
            margin: 0,
          }}
        >
          {props.name}
        </p>
        <p
          style={{
            color: 'white',
            fontWeight: '400',
            fontSize: '8px',
            margin: 0,
          }}
        >
          {`${props.time} hours ago`}
        </p>
      </div>
    </div>
  );
}

export default function HeaderStories() {
  const stories = [
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
      duration: 15000,
      header: (
        <Head
          name="hannad"
          url="https://www.w3schools.com/howto/img_avatar.png"
          time="4"
        />
      ),
    },
    {
      type: 'image',
      duration: 6000,
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
      header: (
        <Head
          name="john"
          url="https://www.w3schools.com/howto/img_avatar2.png"
          time="5"
        />
      ),
    },
    {
      duration: 7000,
      type: 'image',
      url: 'https://images.pexels.com/photos/10964888/pexels-photo-10964888.jpeg?w=300',
      header: (
        <Head
          name="Doe"
          url="https://www.w3schools.com/w3images/avatar5.png"
          time="6"
        />
      ),
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/10985425/pexels-photo-10985425.jpeg?w=300',
      duration: 15000,
      header: (
        <Head
          name="hannad"
          url="https://www.w3schools.com/howto/img_avatar.png"
          time="4"
        />
      ),
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
