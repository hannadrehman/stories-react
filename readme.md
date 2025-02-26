<h1 style="margin: 0" align="center">stories-react</h1>
<p align="center">A React component For Instagram like stories</p>

<p align="center"><a href="https://hannadrehman.github.io/stories-react/">Homepage</a>

<div align="center">
  <a href="https://www.npmjs.com/package/stories-react">
    <img alt="version" src="https://img.shields.io/npm/v/stories-react" />
  </a>
</div>
<div align="center">
  <a href="https://www.npmjs.com/package/stories-react">
    <img alt="downloads yearly" src="https://badgen.net/npm/dy/stories-react" />
  </a>
    <a href="https://www.npmjs.com/package/stories-react">
    <img alt="downloads monthly" src="https://badgen.net/npm/dm/stories-react" />
  </a>
  <a href="https://www.npmjs.com/package/stories-react">
    <img alt="downloads weekly" src="https://badgen.net/npm/dw/stories-react" />
  </a>
</div>
<div align="center">
  <a href="https://www.npmjs.com/package/stories-react">
    <img alt="types" src="https://badgen.net/npm/types/stories-react" />
  </a>
    <a href="https://www.npmjs.com/package/stories-react">
    <img alt="dependents" src="https://badgen.net/npm/dependents/stories-react" />
  </a>
</div>
<div align="center">
  <a href="https://bundlephobia.com/package/stories-react">
    <img alt="bundlephobia min" src="https://badgen.net/bundlephobia/min/stories-react" />
  </a>
    <a href="https://bundlephobia.com/package/stories-react">
    <img alt="bundlephobia min+gzip" src="https://badgen.net/bundlephobia/minzip/stories-react" />
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

  return <Stories width="400px" height="600px" stories={stories} />;
}
```

## Props

| Property                       | Type                     | Default | Description                                                                         |
| ------------------------------ | ------------------------ | ------- | ----------------------------------------------------------------------------------- |
| `stories`                      | `IStoryObject[]`         | `[]`    | An array of story objects. description of `IStoryObject` is mentioned below         |
| `height`                       | `string`                 | `100%`  | Height of story container                                                           |
| `width`                        | `string`                 | `100%`  | Width of story container                                                            |
| `onStoryChange`                | `function(index:number)` | `-`     | Callback called when story changes                                                  |
| `onStoriesStart`               | `function`               | `-`     | Callback called when first story is rendered. it get called only once,              |
| `onAllStoriesEnd`              | `function`               | `-`     | Callback called when last story gets completed. it will get called only once        |
| `currentIndex`                 | `number`                 | `-`     | Current index of the story which should be selected first                           |
| `defaultDuration`              | `number`                 | `10000` | default duration in ms of stories if duration is not provided in the `IStoryObject` |
| `classNames`                   | `IStoryClassNames`       | `{}`    | classnames to overide different sections of a story renderer                        |
| `pauseStoryWhenInActiveWindow` | `boolean`                | `true`  | pauses story when window goes out of focus (user changes tab/minimizes browser etc  |
| `preloadNextStory`             | `boolean`                | `false` | Preloads next story using `@remotion/preload`  **(Applies only for image and video stories)**  |

## IStoryObject

| Property           | Type                                 | Default | Description                                      |
| ------------------ | ------------------------------------ | ------- | ------------------------------------------------ |
| `type`             | `image , video , component`          | `-`     | type of story to render                          |
| `url`              | `string`                             | `-`     | url of a story (image & video only)              |
| `duration`         | `duration`                           | `10000` | duration in ms of the story                      |
| `component`        | `React Component`                    | `-`     | custom component to render as a story            |
| `header`           | `React Component`                    | `-`     | header of a story                                |
| `seeMore`          | `string , boolean , React Component` | `true`  | See more action text                             |
| `seeMoreComponent` | `React Component`                    | `-`     | see more component opens after clicking see more |
| `onSeeMoreClick`   | `function(index:number)`             | `-`     | Callback called when story see more is clicked   |

## IStoryClassNames

| Property               | Type     | Default | Description                                     |
| ---------------------- | -------- | ------- | ----------------------------------------------- |
| `main`                 | `string` | `-`     | classname for main container                    |
| `progressContainer`    | `string` | `-`     | classname for progress line container           |
| `progressBarContainer` | `string` | `-`     | classname for single progress bar box container |
| `progressBar`          | `string` | `-`     | classname for progress bar                      |
| `storyContainer`       | `string` | `-`     | classname for story container                   |

## Custom Component Story Props

| Property   | Type           |     | Description               |
| ---------- | -------------- | --- | ------------------------- |
| `pause`    | `function`     |     | call it to pause a story  |
| `resume`   | `function`     |     | call it to resume a story |
| `story`    | `IStoryObject` |     | current story properties  |
| `isPaused` | `boolean`      |     | state of a story          |
