/*! For license information please see 21b8e7e8.63630173.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[537],{876:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,v=f["".concat(a,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(v,s(s({ref:t},l),{},{components:n})):r.createElement(v,s({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1558:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(2322),o=n(2784),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},s=(0,o.createContext)({stories:[],width:"100%",height:"100%",defaultDuration:1e4,isPaused:!1});Object.freeze({MOUSE_DOWN:"mouseDown",MOUSE_UP:"mouseUp",TOUCH_START:"touchStart",TOUCH_END:"touchEnd"});var u=Object.freeze({LEFT:"left",RIGHT:"right"});function a(e){var t=e.onNextClick,n=e.onPrevClick,s=e.onPause,a=e.onResume,c=(0,o.useState)(!1),l=c[0],d=c[1],f=(0,o.useRef)(null);function p(e){e.stopPropagation(),e.preventDefault(),clearTimeout(f.current),f.current=setTimeout((function(){s(),d(!0)}),200)}function v(e,r){if(r.stopPropagation(),r.preventDefault(),clearTimeout(f.current),l)return a(),void d(!1);a(),e!=u.LEFT?t():n()}function m(e){return{onMouseUp:function(t){return v(e,t)},onTouchEnd:function(t){return v(e,t)},onTouchStart:function(e){return p(e)},onMouseDown:function(e){return p(e)}}}return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("div",i({className:"Actions-styles_left__eky50"},m(u.LEFT)),void 0),(0,r.jsx)("div",i({className:"Actions-styles_right__zguoH"},m(u.RIGHT)),void 0)]},void 0)}function c(){return(0,o.useContext)(s)}function l(e){var t,n,s,u,a,l=c().defaultDuration,d=(0,o.useRef)(null),f=(0,o.useRef)(null),p=(0,o.useState)(!1),v=p[0],m=p[1],y=0,h=.1;return(0,o.useEffect)((function(){e.isPaused?m(!1):e.isActive?m(!0):m(!1)}),[e.isActive,e.isPaused]),(0,o.useEffect)((function(){e.isActive&&d.current&&(d.current.style.width="0px")}),[e.isActive]),(0,o.useEffect)((function(){var t;d.current&&(e.hasStoryPassed?d.current.style.width="".concat(null===(t=null==f?void 0:f.current)||void 0===t?void 0:t.offsetWidth,"px"):e.isActive||(d.current.style.width="0px"))}),[e.hasStoryPassed,e.isActive]),t=function(t){var n;d.current&&f.current&&((y=Number((d.current.style.width||"1px").slice(0,d.current.style.width.length-2))||0)>f.current.offsetWidth?m(!1):(h=(null===(n=null==f?void 0:f.current)||void 0===n?void 0:n.offsetWidth)/((e.story.duration||l)/t),d.current.style.width="".concat(y+h,"px")))},n=v,s=(0,o.useRef)(),u=(0,o.useRef)(),a=(0,o.useRef)(t),(0,o.useEffect)((function(){a.current=t}),[t]),(0,o.useEffect)((function(){return!1!==n?(s.current=requestAnimationFrame((function e(t){if(null!=u.current){var n=t-u.current;a.current(n)}u.current=t,s.current=requestAnimationFrame(e)})),function(){cancelAnimationFrame(s.current),s.current=null,u.current=null}):function(){s.current&&(s.current=null),cancelAnimationFrame(s.current),u.current=null}}),[n]),(0,r.jsx)("div",i({className:"ProgressBar-styles_wrapper__oqUCo",ref:f},{children:(0,r.jsx)("div",{className:"ProgressBar-styles_bar__x0O50",ref:d},void 0)}),void 0)}function d(e){var t=c().stories;return(0,r.jsx)("div",i({className:"progress-styles_wrapper__qQPyW",style:{gridTemplateColumns:"repeat(".concat(t.length,",1fr)")}},{children:t.map((function(t){return(0,r.jsx)(l,{hasStoryPassed:t.index<e.activeStoryIndex,isActive:t.index===e.activeStoryIndex,story:t,isPaused:t.index===e.activeStoryIndex&&e.isPaused},t.index)}))}),void 0)}var f=Object.freeze({IMAGE:"image",VIDEO:"video",COMPONENT:"component"});function p(e){return(0,o.useEffect)((function(){e.onPause()}),[]),(0,r.jsx)("img",{className:"Image-styles_image__gnfW1",src:e.story.url,alt:"story",onLoad:function(){setTimeout((function(){e.onResume()}),4)}},void 0)}var v;function m(e){return"off"===e.type?(0,r.jsx)("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"white"},{children:(0,r.jsx)("path",{d:"M3 9v6h-1v-6h1zm13-7l-9 5v2.288l7-3.889v13.202l-7-3.889v2.288l9 5v-20zm-11 5h-5v10h5v-10zm17.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z"},void 0)}),void 0):(0,r.jsx)("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"white"},{children:(0,r.jsx)("path",{d:"M22 0v24l-11-6v-2.278l9 4.909v-17.262l-9 4.91v-2.279l11-6zm-13 6v12h-7v-12h7zm-2 2h-3v8h3v-8z"},void 0)}),void 0)}var y="RSIsMute",h="undefined"==typeof window?{}:window;function x(e){var t,n=c().isPaused,s=(0,o.useState)("true"===(null===(t=null==h?void 0:h.localStorage)||void 0===t?void 0:t.getItem(y))),u=s[0],a=s[1],l=(0,o.useState)(!1),d=l[0],f=l[1],p=(0,o.useRef)(null);function v(e){var t;null===(t=null==h?void 0:h.localStorage)||void 0===t||t.setItem(y,String(e)),a(e)}return(0,o.useEffect)((function(){e.onPause(),f(!0)}),[]),(0,o.useEffect)((function(){p.current&&(!n||p.current.paused?p.current.play().catch((function(){var e;v(!0),null===(e=p.current)||void 0===e||e.play()})):p.current.pause())}),[n]),(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)("video",i({className:"Video-styles_video__BykuO",ref:p,playsInline:!0,"webkit-playsinline":"",controls:!1,src:e.story.url,onLoadedData:function(){setTimeout((function(){e.onResume(),f(!1)}),4)},muted:u},{children:[(0,r.jsx)("source",{src:e.story.url,type:"video/mp4"},void 0),(0,r.jsx)("source",{src:e.story.url,type:"video/webm"},void 0),(0,r.jsx)("source",{src:e.story.url,type:"video/ogg"},void 0),(0,r.jsx)("p",{children:"Video not supported"},void 0)]}),void 0),(0,r.jsx)("div",i({className:"Video-styles_soundIcon__ZvYXE",onClick:function(){return v(!u)}},{children:(0,r.jsx)(m,{type:u?"off":"on"},void 0)}),void 0),d&&(0,r.jsx)("div",i({className:"Video-styles_loaderWrapper__TqVWk"},{children:(0,r.jsx)("div",{className:"Video-styles_loader__FxxSV"},void 0)}),void 0)]},void 0)}null===(v=null==h?void 0:h.localStorage)||void 0===v||v.setItem(y,"true");function g(e){return(0,r.jsx)("div",i({className:"CustomComponents-styles_component__w87Wx"},{children:(0,r.jsx)(e.story.component,{pause:e.onPause,resume:e.onResume,story:e.story},void 0)}),void 0)}function w(e){return e.story.seeMore?(0,r.jsx)("button",i({type:"button",onClick:function(){e.onSeeMoreClick()},className:"SeeMore-styles_seeMoreWrapper__kwjif"},{children:function(){var t=e.story.seeMore,n=typeof t;if(["string","boolean"].includes(n)){var o="string"===n?t:"See More";return(0,r.jsxs)("div",i({className:"SeeMore-styles_defaultSeeMore__-B1QW"},{children:[(0,r.jsx)("span",{children:"^"},void 0),(0,r.jsx)("p",{children:o},void 0)]}),void 0)}return"function"===n?(0,r.jsx)(e.story.seeMore,{},void 0):e.story.seeMore}()}),void 0):null}function j(e){return e.story.seeMore&&e.story.seeMoreComponent?(0,r.jsxs)("div",i({className:"SeeMoreComponent-styles_seeMoreComponentWrapper__0T6Ap"},{children:[(0,r.jsx)("button",i({className:"SeeMoreComponent-styles_closeIcon__LMm3b",onClick:e.onClose},{children:"\u2715"}),void 0),"function"==typeof e.story.seeMoreComponent?(0,r.jsx)(e.story.seeMoreComponent,{},void 0):e.story.seeMoreComponent]}),void 0):null}function _(e){var t=(0,o.useState)(!1),n=t[0],s=t[1];return(0,o.useEffect)((function(){s(!1)}),[e.story]),(0,r.jsxs)("div",i({className:"Story-styles_wrapper__oJP7j"},{children:[e.story.type===f.IMAGE?(0,r.jsx)(p,i({},e),void 0):e.story.type===f.VIDEO?(0,r.jsx)(x,i({},e),void 0):e.story.type===f.COMPONENT?(0,r.jsx)(g,i({},e),void 0):null,e.story.header&&(0,r.jsx)("div",i({className:"Story-styles_header__-rnWL"},{children:"function"==typeof e.story.header?(0,r.jsx)(e.story.header,{},void 0):e.story.header}),void 0),(0,r.jsx)(w,{onSeeMoreClick:function(){var t,n;e.onPause(),s(!0),null===(n=(t=e.story).onSeeMoreClick)||void 0===n||n.call(t,e.story.index)},story:e.story},void 0),n&&(0,r.jsx)(j,{story:e.story,onClose:function(){e.onResume(),s(!1)}},void 0)]}),void 0)}function b(e){return void 0===e&&(e=4),Number(Math.random().toFixed(e))}function S(e){var t,n,u,c,l,f,p,v=e.stories,m=void 0===v?[]:v,y=e.width,h=void 0===y?"100%":y,x=e.height,g=void 0===x?"100%":x,w=e.onStoryChange,j=void 0===w?function(){}:w,S=e.currentIndex,O=void 0===S?0:S,k=e.defaultDuration,E=void 0===k?1e4:k,P=e.onAllStoriesEnd,C=void 0===P?function(){}:P,M=e.onStoriesStart,N=void 0===M?function(){}:M,T=(0,o.useMemo)((function(){return function(e,t){var n=0;return e.map((function(e,r){var o=e.duration||t,s=o+b();return s===n&&(s=o+b(6)),n=s,i(i({},e),{index:r,calculatedDuration:s})}))}(m,E)}),[m,E]),R=(0,o.useState)(),I=R[0],D=R[1],A=m.length-1,V=(0,o.useState)(!1),F=V[0],W=V[1],z=(0,o.useRef)(!1),L=(0,o.useRef)(!1);function U(){z.current||(null==I?void 0:I.index)!==A||(C(),z.current=!0),(null==I?void 0:I.index)!==A&&D((function(e){if(!e)return T[0];var t=(null==e?void 0:e.index)+1;return T[t]}))}function B(){W(!0)}function Z(){W(!1)}(0,o.useEffect)((function(){L.current||(L.current=!0,N())}),[N]),(0,o.useEffect)((function(){var e=T[O];e&&D(e)}),[O,m]),(0,o.useEffect)((function(){I&&j(I.index)}),[I]),n=function(){U()},u=null!==(t=null==I?void 0:I.calculatedDuration)&&void 0!==t?t:null,c=F,l=(0,o.useRef)(),f=(0,o.useRef)(u),p=(0,o.useRef)(Date.now()),(0,o.useEffect)((function(){l.current=n}),[n]),(0,o.useEffect)((function(){f.current=u}),[u]),(0,o.useEffect)((function(){if(null!==u&&!1===c){p.current=Date.now();var e=setTimeout((function(){l.current()}),f.current);return function(){clearTimeout(e)}}return function(){}}),[u,c]),(0,o.useEffect)((function(){c&&(f.current=f.current-(Date.now()-p.current))}),[c]);var q={stories:T,width:h,height:g,defaultDuration:E,isPaused:F};return I?(0,r.jsx)(s.Provider,i({value:q},{children:(0,r.jsxs)("div",i({className:"styles_main__-0FEu",style:{width:h,height:g}},{children:[(0,r.jsx)(d,{activeStoryIndex:I.index,isPaused:F},void 0),(0,r.jsx)(_,{onPause:B,onResume:Z,story:I},I.index),(0,r.jsx)(a,{onNextClick:U,onPrevClick:function(){0!==(null==I?void 0:I.index)&&D((function(e){if(!e)return T[0];var t=(null==e?void 0:e.index)-1;return T[t]}))},onPause:B,onResume:Z},void 0)]}),void 0)}),void 0):null}},4464:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return p}});var r=n(7896),o=n(1461),i=n(2784),s=n(876),u=n(1558);function a(){return i.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100%",marginBottom:"16px"}},i.createElement(u.Z,{width:"400px",height:"600px",stories:[{type:"image",duration:6e3,url:"https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300"},{type:"video",url:"https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4",duration:28e3},{type:"image",duration:6e3,url:"https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300"},{type:"video",url:"https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4",duration:1e4},{type:"video",url:"https://assets.mixkit.co/videos/preview/mixkit-family-walking-together-in-nature-39767-large.mp4",duration:1e4},{type:"video",duration:6e3,url:"https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4"},{duration:7e3,type:"image",url:"https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300"}]}))}var c=["components"],l={sidebar_position:3},d="Image & Video Stories",f={unversionedId:"tutorial-basics/image-video-stories",id:"tutorial-basics/image-video-stories",title:"Image & Video Stories",description:"",source:"@site/docs/tutorial-basics/image-video-stories.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/image-video-stories",permalink:"/stories-react/docs/tutorial-basics/image-video-stories",editUrl:"https://github.com/hannadrehman/stories-react/tree/main/packages/documentation/docs/tutorial-basics/image-video-stories.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Video Stories",permalink:"/stories-react/docs/tutorial-basics/video-stories"},next:{title:"Component Stories",permalink:"/stories-react/docs/tutorial-basics/component-stories"}},p=[],v={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"image--video-stories"},"Image & Video Stories"),(0,s.kt)(a,{mdxType:"ImageVideoStories"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"\nimport React from 'react';\nimport Stories from 'stories-react';\nimport 'stories-react/dist/index.css';\n\nexport default function ImageVideoStories() {\n  const stories = [\n    {\n      type: 'image',\n      duration: 6000,\n      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',\n    },\n    {\n      type: 'video',\n      url: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4',\n      duration: 28000,\n    },\n    {\n      type: 'image',\n      duration: 6000,\n      url: 'https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg?w=300',\n    },\n    {\n      type: 'video',\n      url: 'https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4',\n      duration: 10000,\n    },\n    {\n      type: 'video',\n      url: 'https://assets.mixkit.co/videos/preview/mixkit-family-walking-together-in-nature-39767-large.mp4',\n      duration: 10000,\n    },\n\n    {\n      type: 'video',\n      duration: 6000,\n      url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4',\n    },\n    {\n      duration: 7000,\n      type: 'image',\n      url: 'https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg?w=300',\n    },\n  ];\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        width: '100%',\n        marginBottom: '16px',\n      }}\n    >\n      <Stories width=\"400px\" height=\"600px\" stories={stories} />\n    </div>\n  );\n}\n\n\n")))}m.isMDXComponent=!0},1837:function(e,t,n){n(7320);var r=n(2784),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:s.current}}t.jsx=c,t.jsxs=c},2322:function(e,t,n){e.exports=n(1837)}}]);