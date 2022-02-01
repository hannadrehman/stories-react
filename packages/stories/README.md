<h1 style="margin: 0" align="center">stories-react</h1>
<p align="center">A React component For Instagram like stories</p>

<p align="center"><a href="https://hannadrehman.github.io/stories-react/">Homepage</a>
<div align="center">
  <a href="https://www.npmjs.com/package/react-insta-stories">
    <img alt="NPM" src="https://img.shields.io/npm/v/stories-react" />
  </a>
</div>

<p align="center">
<img alt="hero" src="https://i.imgur.com/q3Y4ApR.png" width="400">
</p>


# Install
```sh
npm install --save stories-react
```

# Demo

You can find working demo [here](https://hannadrehman.github.io/stories-react/)

# Usage

```jsx
import React from 'react';
import Stories from 'stories-react';
import 'stories-react/dist/index.css';

export default function ImagesStories() {
  const stories = [
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
      duration: 5000,
    },
    {
      type: 'image',
      duration: 6000,
      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',
    },
    {
      duration: 7000,
      type: 'image',
      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',
    },
  ];

  return (
      <Stories
        width="400px"
        height="600px"
        stories={stories}
      />
  );
}
```


## Props


| Property                 | Type                          | Defaul        | Description                                                                             |
| ------------------------ | ------------------------------| --------------| --------------------------------------------------------------------------------------- |
| `stories`                | `IStoryObject[]`              | `[]`          |  An array of story objects. description of `IStoryObject` is mentioned below            |
| `height`                 | `string`                      | `100%`        |  Height of story container                                                              |
| `width`                  | `string`                      | `100%`        |  Width of story container                                                               |
| `onStoryChange`          | `function(index:number)`      | `-`           |  Callback called when story changes                                                     |
| `onStoriesStart`         | `function`                    | `-`           |  Callback called when first story is rendered. it get called only once,                 |
| `onAllStoriesEnd`        | `function`                    | `-`           |  Callback called when last story gets completed. it will get called only once           |
| `currentIndex`           | `number`                      | `-`           |  Current index of the story which should be selected first                              |
| `defaultDuration`        | `number`                      |  `10000`      |  default duration in ms of stories if duration is not provided in the `IStoryObject`    |

## IStoryObject

| Property              | Type                                 | Defaul       | Description                                                 |
| --------------------- |--------------------------------------| -------------| ------------------------------------------------------------|
| `type`                | `image , video , component`          | `-`          |  type of story to render                                    |
| `url`                 | `string`                             | `-`          |  url of a story (image & video only)                        |
| `duration`            | `duration`                           | `10000`      |  duration in ms of the story                                |
| `component`           | `React Component`                    | `-`          |  custom component to render as a story                      |
| `header`              | `React Component`                    | `-`          |  header of a story                                          |
| `seeMore`             | `string , boolean , React Component` | `true`       |  See more action text                                       |
| `seeMoreComponent`    | `React Component`                    | `-`          |  see more component opens after clicking see more           |
| `onSeeMoreClick`      | `function(index:number)`             | `-`          |  Callback called when story see more is clicked                                                     |

o
