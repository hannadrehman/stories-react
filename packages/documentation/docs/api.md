---
sidebar_position: 3
---

# Api


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


## Custom Component Story Props


| Property              | Type                                 |              | Description                                                 |
| --------------------- |--------------------------------------| -------------| ------------------------------------------------------------|
| `pause`               | `function`                           |              |  call it to pause a story                                   |
| `resume`              | `function`                           |              |  call it to resume a story                                  |
| `story`               | `IStoryObject`                       |              |  current story properties                                   |
| `isPaused`            | `boolean`                            |              |  state of a story                                           |
