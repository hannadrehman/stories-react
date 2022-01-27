---
sidebar_position: 1
---

# Intro

Let's discover **React Instagram Stories** in less than **5 minutes**.

## Getting Started


## Install


```shell
npm install react-stories
```

## Usage


```jsx

import Stories from 'react-stories';

const storySource = [
  {
    type: "image",
    url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
    duration: 5000
  },
  {
    type: "video",
    url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
    duration: 5000
  }
]

function Profile(){
  return (
    <div>
     <Stories width="400px" height="640px" stories={storySource} />
    </div>
  )
}

```
