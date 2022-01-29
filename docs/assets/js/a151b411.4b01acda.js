/*! For license information please see a151b411.4b01acda.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[769],{876:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var o=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),a=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=a(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=a(t),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?o.createElement(m,s(s({ref:n},l),{},{components:t})):o.createElement(m,s({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,s[1]=u;for(var a=2;a<i;a++)s[a]=t[a];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1558:function(e,n,t){t.d(n,{Z:function(){return C}});var o=t(2322),r=t(2784),i=function(){return i=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},i.apply(this,arguments)},s=(0,r.createContext)({stories:[],width:"100%",height:"100%",defaultDuration:1e4,isPaused:!1});Object.freeze({MOUSE_DOWN:"mouseDown",MOUSE_UP:"mouseUp",TOUCH_START:"touchStart",TOUCH_END:"touchEnd"});var u=Object.freeze({LEFT:"left",RIGHT:"right"});function c(e){var n=e.onNextClick,t=e.onPrevClick,s=e.onPause,c=e.onResume,a=(0,r.useState)(!1),l=a[0],d=a[1],p=(0,r.useRef)(null);function f(e){e.stopPropagation(),e.preventDefault(),clearTimeout(p.current),p.current=setTimeout((function(){s(),d(!0)}),200)}function m(e,o){if(o.stopPropagation(),o.preventDefault(),clearTimeout(p.current),l)return c(),void d(!1);c(),e!=u.LEFT?n():t()}function v(e){return{onMouseUp:function(n){return m(e,n)},onTouchEnd:function(n){return m(e,n)},onTouchStart:function(e){return f(e)},onMouseDown:function(e){return f(e)}}}return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)("div",i({className:"Actions-styles_left__eky50"},v(u.LEFT)),void 0),(0,o.jsx)("div",i({className:"Actions-styles_right__zguoH"},v(u.RIGHT)),void 0)]},void 0)}function a(){return(0,r.useContext)(s)}function l(e){var n,t,s,u,c,l=a().defaultDuration,d=(0,r.useRef)(null),p=(0,r.useRef)(null),f=(0,r.useState)(!1),m=f[0],v=f[1],y=0,h=.1;return(0,r.useEffect)((function(){e.isPaused?v(!1):e.isActive?v(!0):v(!1)}),[e.isActive,e.isPaused]),(0,r.useEffect)((function(){e.isActive&&d.current&&(d.current.style.width="0px")}),[e.isActive]),(0,r.useEffect)((function(){var n;d.current&&(e.hasStoryPassed?d.current.style.width="".concat(null===(n=null==p?void 0:p.current)||void 0===n?void 0:n.offsetWidth,"px"):e.isActive||(d.current.style.width="0px"))}),[e.hasStoryPassed,e.isActive]),n=function(n){var t;d.current&&p.current&&((y=Number((d.current.style.width||"1px").slice(0,d.current.style.width.length-2))||0)>p.current.offsetWidth?v(!1):(h=(null===(t=null==p?void 0:p.current)||void 0===t?void 0:t.offsetWidth)/((e.story.duration||l)/n),d.current.style.width="".concat(y+h,"px")))},t=m,s=(0,r.useRef)(),u=(0,r.useRef)(),c=(0,r.useRef)(n),(0,r.useEffect)((function(){c.current=n}),[n]),(0,r.useEffect)((function(){return!1!==t?(s.current=requestAnimationFrame((function e(n){if(null!=u.current){var t=n-u.current;c.current(t)}u.current=n,s.current=requestAnimationFrame(e)})),function(){cancelAnimationFrame(s.current),s.current=null,u.current=null}):function(){s.current&&(s.current=null),cancelAnimationFrame(s.current),u.current=null}}),[t]),(0,o.jsx)("div",i({className:"ProgressBar-styles_wrapper__oqUCo",ref:p},{children:(0,o.jsx)("div",{className:"ProgressBar-styles_bar__x0O50",ref:d},void 0)}),void 0)}function d(e){var n=a().stories;return(0,o.jsx)("div",i({className:"progress-styles_wrapper__qQPyW",style:{gridTemplateColumns:"repeat(".concat(n.length,",1fr)")}},{children:n.map((function(n){return(0,o.jsx)(l,{hasStoryPassed:n.index<e.activeStoryIndex,isActive:n.index===e.activeStoryIndex,story:n,isPaused:n.index===e.activeStoryIndex&&e.isPaused},n.index)}))}),void 0)}var p=Object.freeze({IMAGE:"image",VIDEO:"video",COMPONENT:"component"});function f(e){return(0,r.useEffect)((function(){e.onPause()}),[]),(0,o.jsx)("img",{className:"Image-styles_image__gnfW1",src:e.story.url,alt:"story",onLoad:function(){setTimeout((function(){e.onResume()}),4)}},void 0)}var m;function v(e){return"off"===e.type?(0,o.jsx)("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"white"},{children:(0,o.jsx)("path",{d:"M3 9v6h-1v-6h1zm13-7l-9 5v2.288l7-3.889v13.202l-7-3.889v2.288l9 5v-20zm-11 5h-5v10h5v-10zm17.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z"},void 0)}),void 0):(0,o.jsx)("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"white"},{children:(0,o.jsx)("path",{d:"M22 0v24l-11-6v-2.278l9 4.909v-17.262l-9 4.91v-2.279l11-6zm-13 6v12h-7v-12h7zm-2 2h-3v8h3v-8z"},void 0)}),void 0)}var y="RSIsMute",h="undefined"==typeof window?{}:window;function x(e){var n,t=a().isPaused,s=(0,r.useState)("true"===(null===(n=null==h?void 0:h.localStorage)||void 0===n?void 0:n.getItem(y))),u=s[0],c=s[1],l=(0,r.useState)(!1),d=l[0],p=l[1],f=(0,r.useRef)(null);function m(e){var n;null===(n=null==h?void 0:h.localStorage)||void 0===n||n.setItem(y,String(e)),c(e)}return(0,r.useEffect)((function(){e.onPause(),p(!0)}),[]),(0,r.useEffect)((function(){f.current&&(!t||f.current.paused?f.current.play().catch((function(){var e,n;(null===(e=f.current)||void 0===e?void 0:e.paused)||(m(!0),null===(n=f.current)||void 0===n||n.play())})):f.current.pause())}),[t]),(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)("video",i({className:"Video-styles_video__BykuO",ref:f,playsInline:!0,"webkit-playsinline":"",controls:!1,src:e.story.url,onLoadedData:function(){setTimeout((function(){e.onResume(),p(!1)}),4)},muted:u},{children:[(0,o.jsx)("source",{src:e.story.url,type:"video/mp4"},void 0),(0,o.jsx)("source",{src:e.story.url,type:"video/webm"},void 0),(0,o.jsx)("source",{src:e.story.url,type:"video/ogg"},void 0),(0,o.jsx)("p",{children:"Video not supported"},void 0)]}),void 0),(0,o.jsx)("div",i({className:"Video-styles_soundIcon__ZvYXE",onClick:function(){return m(!u)}},{children:(0,o.jsx)(v,{type:u?"off":"on"},void 0)}),void 0),d&&(0,o.jsx)("div",i({className:"Video-styles_loaderWrapper__TqVWk"},{children:(0,o.jsx)("div",{className:"Video-styles_loader__FxxSV"},void 0)}),void 0)]},void 0)}null===(m=null==h?void 0:h.localStorage)||void 0===m||m.setItem(y,"true");function g(e){return(0,o.jsx)("div",i({className:"CustomComponents-styles_component__w87Wx"},{children:(0,o.jsx)(e.story.component,{pause:e.onPause,resume:e.onResume,story:e.story},void 0)}),void 0)}function b(e){return e.story.seeMore?(0,o.jsx)("button",i({type:"button",onClick:function(){e.onSeeMoreClick()},className:"SeeMore-styles_seeMoreWrapper__kwjif"},{children:function(){var n=e.story.seeMore,t=typeof n;if(["string","boolean"].includes(t)){var r="string"===t?n:"See More";return(0,o.jsxs)("div",i({className:"SeeMore-styles_defaultSeeMore__-B1QW"},{children:[(0,o.jsx)("span",{children:"^"},void 0),(0,o.jsx)("p",{children:r},void 0)]}),void 0)}return"function"===t?(0,o.jsx)(e.story.seeMore,{},void 0):e.story.seeMore}()}),void 0):null}function w(e){return e.story.seeMore&&e.story.seeMoreComponent?(0,o.jsxs)("div",i({className:"SeeMoreComponent-styles_seeMoreComponentWrapper__0T6Ap"},{children:[(0,o.jsx)("button",i({className:"SeeMoreComponent-styles_closeIcon__LMm3b",onClick:e.onClose},{children:"\u2715"}),void 0),"function"==typeof e.story.seeMoreComponent?(0,o.jsx)(e.story.seeMoreComponent,{},void 0):e.story.seeMoreComponent]}),void 0):null}function j(e){var n=(0,r.useState)(!1),t=n[0],s=n[1];return(0,r.useEffect)((function(){s(!1)}),[e.story]),(0,o.jsxs)("div",i({className:"Story-styles_wrapper__oJP7j"},{children:[e.story.type===p.IMAGE?(0,o.jsx)(f,i({},e),void 0):e.story.type===p.VIDEO?(0,o.jsx)(x,i({},e),void 0):e.story.type===p.COMPONENT?(0,o.jsx)(g,i({},e),void 0):null,e.story.header&&(0,o.jsx)("div",i({className:"Story-styles_header__-rnWL"},{children:"function"==typeof e.story.header?(0,o.jsx)(e.story.header,{},void 0):e.story.header}),void 0),(0,o.jsx)(b,{onSeeMoreClick:function(){var n,t;e.onPause(),s(!0),null===(t=(n=e.story).onSeeMoreClick)||void 0===t||t.call(n,e.story.index)},story:e.story},void 0),t&&(0,o.jsx)(w,{story:e.story,onClose:function(){e.onResume(),s(!1)}},void 0)]}),void 0)}function C(e){var n,t,u,a,l,p,f=e.stories,m=void 0===f?[]:f,v=e.width,y=void 0===v?"100%":v,h=e.height,x=void 0===h?"100%":h,g=e.onStoryChange,b=void 0===g?function(){}:g,w=e.currentIndex,C=void 0===w?0:w,_=e.defaultDuration,E=void 0===_?1e4:_,S=(0,r.useMemo)((function(){return m.map((function(e,n){return i(i({},e),{index:n})}))}),[m]),k=(0,r.useState)(S[C]),O=k[0],P=k[1],N=m.length-1,T=(0,r.useState)(!1),M=T[0],R=T[1];function I(){O.index<N&&P((function(e){var n=e.index+1;return S[n]}))}function F(){R(!0)}function D(){R(!1)}(0,r.useEffect)((function(){O&&b(O.index)}),[O]),n=function(){I()},t=O.duration||E,u=M,a=(0,r.useRef)(),l=(0,r.useRef)(t),p=(0,r.useRef)(Date.now()),(0,r.useEffect)((function(){a.current=n}),[n]),(0,r.useEffect)((function(){l.current=t}),[t]),(0,r.useEffect)((function(){if(null!==t&&!1===u){p.current=Date.now();var e=setTimeout((function(){a.current()}),l.current);return function(){clearTimeout(e)}}return function(){}}),[t,u]),(0,r.useEffect)((function(){u&&(l.current=l.current-(Date.now()-p.current))}),[u]);var A={stories:S,width:y,height:x,defaultDuration:E,isPaused:M};return(0,o.jsx)(s.Provider,i({value:A},{children:(0,o.jsxs)("div",i({className:"styles_main__-0FEu",style:{width:y,height:x}},{children:[(0,o.jsx)(d,{activeStoryIndex:O.index,isPaused:M},void 0),(0,o.jsx)(j,{onPause:F,onResume:D,story:O},O.index),(0,o.jsx)(c,{onNextClick:I,onPrevClick:function(){O.index>0&&P((function(e){var n=e.index-1;return S[n]}))},onPause:F,onResume:D},void 0)]}),void 0)}),void 0)}},8556:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return v},default:function(){return g},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return h}});var o=t(7896),r=t(1461),i=t(2784),s=t(876),u=t(1558);function c(){return i.createElement("p",null,"Jaguar shark! So tell me - does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah, but your scientists were so preoccupied with whether or not they could, they didnt stop to think if they should.")}function a(){return i.createElement("div",{className:"box",style:{height:"90%",padding:"100px 24px",background:"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"}},i.createElement("h4",null,"Hannad Rehman says:"),i.createElement(c,null))}function l(){return i.createElement("div",{className:"box",style:{paddingTop:"100px",padding:"24px",backgroundColor:"#fad0c4",height:"100%"}},i.createElement("h4",null,"Component with interactions"),i.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"24px"}},i.createElement("img",{src:"https://images.pexels.com/photos/10955653/pexels-photo-10955653.jpeg?dpr=2&w=100"})),i.createElement("p",null,"You need to add ",i.createElement("code",null,"zindex >= 2")," to any interaction u want in the component"),i.createElement("button",{onClick:function(){return window.open("https://www.pexels.com/@imadclicks","_blank")},style:{color:"#3399FF",border:"1px solid",borderColor:"#3399FF",borderRadius:"3px",height:"30px",cursor:"pointer",position:"relative",zIndex:"2",width:"100%"}},"Follow Imad Clicks on pexels for amazing pictures"))}function d(e){return i.createElement("div",{className:"box",style:{paddingTop:"100px",padding:"24px",backgroundColor:"rgb(196, 220, 250)",height:"100%"}},i.createElement("h4",null,"Component Api"),i.createElement("br",null),i.createElement("br",null),i.createElement("h3",null,"A story can be paused and resumed too !"),i.createElement("br",null),i.createElement("button",{onClick:function(){return e.pause()},style:{color:"#3399FF",border:"1px solid",borderColor:"#3399FF",borderRadius:"3px",height:"30px",cursor:"pointer",position:"relative",zIndex:"2",width:"100%"}},"Pause Story"),i.createElement("br",null),i.createElement("br",null),i.createElement("button",{onClick:function(){return e.resume()},style:{color:"rgb(255, 51, 108)",border:"1px solid",borderColor:"rgb(255, 51, 108)",borderRadius:"3px",height:"30px",cursor:"pointer",position:"relative",zIndex:"2",width:"100%"}},"Resume Story"),i.createElement("h5",null,"Make Sure button zIndex is >= 2"),i.createElement("pre",{style:{marginTop:"16px",padding:"16px"}},JSON.stringify(e,null,2)),i.createElement("h6",null,"Story object passed in props "))}function p(){var e=[{type:"component",duration:9e3,component:a},{type:"component",duration:3e4,component:l},{duration:9e3,type:"component",component:d},{type:"component",duration:9e3,component:a}];return i.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100%",marginBottom:"16px"}},i.createElement(u.Z,{width:"400px",height:"600px",stories:e}))}var f=["components"],m={sidebar_position:4},v="Component Stories",y={unversionedId:"tutorial-basics/component-stories",id:"tutorial-basics/component-stories",title:"Component Stories",description:"",source:"@site/docs/tutorial-basics/component-stories.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/component-stories",permalink:"/stories-react/docs/tutorial-basics/component-stories",editUrl:"https://github.com/hannadrehman/stories-react/tree/main/packages/documentation/docs/tutorial-basics/component-stories.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Image & Video Stories",permalink:"/stories-react/docs/tutorial-basics/image-video-stories"},next:{title:"Stories with See More",permalink:"/stories-react/docs/tutorial-basics/see-more"}},h=[],x={toc:h};function g(e){var n=e.components,t=(0,r.Z)(e,f);return(0,s.kt)("wrapper",(0,o.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"component-stories"},"Component Stories"),(0,s.kt)(p,{mdxType:"ComponentStories"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"\nimport React from 'react';\nimport Stories from 'stories-react';\nimport 'stories-react/dist/index.css';\n\nfunction Copy() {\n  return (\n    <p>\n      Jaguar shark! So tell me - does it really exist? Checkmate... Eventually,\n      you do plan to have dinosaurs on your dinosaur tour, right? Yeah, but your\n      scientists were so preoccupied with whether or not they could, they didnt\n      stop to think if they should.\n    </p>\n  );\n}\n\nfunction HelpText() {\n  return (\n    <div\n      className=\"box\"\n      style={{\n        height: '90%',\n        padding: '100px 24px',\n        background:\n          'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',\n      }}\n    >\n      <h4>Hannad Rehman says:</h4>\n      <Copy />\n    </div>\n  );\n}\n\nfunction ComponentWithInteractions() {\n  return (\n    <div\n      className=\"box\"\n      style={{\n        paddingTop: '100px',\n        padding: '24px',\n        backgroundColor: '#fad0c4',\n        height: '100%',\n      }}\n    >\n      <h4>Component with interactions</h4>\n      <div\n        style={{ display: 'flex', justifyContent: 'center', padding: '24px' }}\n      >\n        <img src=\"https://images.pexels.com/photos/10955653/pexels-photo-10955653.jpeg?dpr=2&w=100\" />\n      </div>\n      <p>\n        You need to add <code>zindex >= 2</code> to any interaction u want in\n        the component\n      </p>\n      <button\n        onClick={() =>\n          window.open('https://www.pexels.com/@imadclicks', '_blank')\n        }\n        style={{\n          color: '#3399FF',\n          border: '1px solid',\n          borderColor: '#3399FF',\n          borderRadius: '3px',\n          height: '30px',\n          cursor: 'pointer',\n          position: 'relative',\n          zIndex: '2',\n          width: '100%',\n        }}\n      >\n        Follow Imad Clicks on pexels for amazing pictures\n      </button>\n    </div>\n  );\n}\n\nfunction ComponentApi(props) {\n  return (\n    <div\n      className=\"box\"\n      style={{\n        paddingTop: '100px',\n        padding: '24px',\n        backgroundColor: 'rgb(196, 220, 250)',\n        height: '100%',\n      }}\n    >\n      <h4>Component Api</h4>\n      <br />\n      <br />\n      <h3>A story can be paused and resumed too !</h3>\n      <br />\n      <button\n        onClick={() => props.pause()}\n        style={{\n          color: '#3399FF',\n          border: '1px solid',\n          borderColor: '#3399FF',\n          borderRadius: '3px',\n          height: '30px',\n          cursor: 'pointer',\n          position: 'relative',\n          zIndex: '2',\n          width: '100%',\n        }}\n      >\n        Pause Story\n      </button>\n\n      <br />\n      <br />\n      <button\n        onClick={() => props.resume()}\n        style={{\n          color: 'rgb(255, 51, 108)',\n          border: '1px solid',\n          borderColor: 'rgb(255, 51, 108)',\n          borderRadius: '3px',\n          height: '30px',\n          cursor: 'pointer',\n          position: 'relative',\n          zIndex: '2',\n          width: '100%',\n        }}\n      >\n        Resume Story\n      </button>\n      <h5>Make Sure button zIndex is >= 2</h5>\n\n      <pre style={{ marginTop: '16px', padding: '16px' }}>\n        {JSON.stringify(props, null, 2)}\n      </pre>\n      <h6>Story object passed in props </h6>\n    </div>\n  );\n}\n\nexport default function ComponentStories() {\n  const stories = [\n    {\n      type: 'component',\n      duration: 9000,\n      component: HelpText,\n    },\n    {\n      type: 'component',\n      duration: 30000,\n      component: ComponentWithInteractions,\n    },\n    {\n      duration: 9000,\n      type: 'component',\n      component: ComponentApi,\n    },\n  ];\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        width: '100%',\n        marginBottom: '16px',\n      }}\n    >\n      <Stories width=\"400px\" height=\"600px\" stories={stories} />\n    </div>\n  );\n}\n\n")))}g.isMDXComponent=!0},1837:function(e,n,t){t(7320);var o=t(2784),r=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),i("react.fragment")}var s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var o,i={},a=null,l=null;for(o in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)u.call(n,o)&&!c.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:r,type:e,key:a,ref:l,props:i,_owner:s.current}}n.jsx=a,n.jsxs=a},2322:function(e,n,t){e.exports=t(1837)}}]);