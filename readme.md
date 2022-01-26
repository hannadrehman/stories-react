<h1 style="margin: 0" align="center">react-instagram-stories</h1>
<p align="center">A React component For Instagram like stories</p>

<p align="center"><a href="">Homepage</a>

[add screenshot here]

# Install
```sh
npm install --save react-instagram-stories
```

# Demo

You can find working demo here [add link to the docs demo page]

# Usage

```jsx
import React from 'react';
import Stories from '@react-instagram/stories';
import '@react-instagram/stories/dist/index.css';

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
| `currentIndex`           | `number`                      | `-`           |  Current index of the story which should be selected first                              |
| `defaultDuration`        | `number`                      |  `10000`      |  default duration in ms of stories if duration is not provided in the `IStoryObject`    |

## IStoryObject

| Property              | Type                             | Defaul       | Description                                                 |
| --------------------- |----------------------------------| -------------| ------------------------------------------------------------|
| `type`                | `image|video|component`          | `-`          |  type of story to render                                    |
| `url`                 | `string`                         | `-`          |  url of a story (image & video only)                        |
| `duration`            | `duration`                       | `10000`      |  duration in ms of the story                                |
| `component`           | `React Component`                | `-`          |  custom component to render as a story                      |
| `header`              | `React Component`                | `-`          |  header of a story                                          |
| `seeMore`             | `string|boolean|React Component` | `true`       |  See more action text                                       |
| `seeMoreComponent`    | `React Component`                | `-`          |  see more component opens after clicking see more           |

