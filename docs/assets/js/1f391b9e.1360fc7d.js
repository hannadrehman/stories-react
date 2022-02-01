"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85],{4321:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var o=n(2784),r=n(6277),i=n(5053),s=n(876),u=n(8003),a=n(480),l=n(2809),c="mdxPageWrapper_uvJ1";var d=function(e){var t=e.content,n=t.metadata,d=n.title,v=n.description,f=n.permalink,m=n.frontMatter,h=m.wrapperClassName,y=m.hide_table_of_contents;return o.createElement(i.Z,{title:d,description:v,permalink:f,wrapperClassName:null!=h?h:l.kM.wrapper.mdxPages,pageClassName:l.kM.page.mdxPage},o.createElement("main",{className:"container container--fluid margin-vert--lg"},o.createElement("div",{className:(0,r.Z)("row",c)},o.createElement("div",{className:(0,r.Z)("col",!y&&"col--8")},o.createElement(s.Zo,{components:u.Z},o.createElement(t,null))),!y&&t.toc&&o.createElement("div",{className:"col col--2"},o.createElement(a.Z,{toc:t.toc,minHeadingLevel:m.toc_min_heading_level,maxHeadingLevel:m.toc_max_heading_level})))))}},480:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(7896),r=n(1461),i=n(2784),s=n(6277),u=n(7969),a="tableOfContents_EtLs",l=["className"];var c=function(e){var t=e.className,n=(0,r.Z)(e,l);return i.createElement("div",{className:(0,s.Z)(a,"thin-scrollbar",t)},i.createElement(u.Z,(0,o.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},7969:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(7896),r=n(1461),i=n(2784),s=n(2809),u=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function a(e){var t=e.toc,n=e.className,o=e.linkClassName,r=e.isChild;return t.length?i.createElement("ul",{className:r?void 0:n},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=o?o:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(a,{isChild:!0,toc:e.children,className:n,linkClassName:o}))}))):null}function l(e){var t=e.toc,n=e.className,l=void 0===n?"table-of-contents table-of-contents__left-border":n,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,v=e.linkActiveClassName,f=void 0===v?void 0:v,m=e.minHeadingLevel,h=e.maxHeadingLevel,y=(0,r.Z)(e,u),p=(0,s.LU)(),x=null!=m?m:p.tableOfContents.minHeadingLevel,_=null!=h?h:p.tableOfContents.maxHeadingLevel,g=(0,s.DA)({toc:t,minHeadingLevel:x,maxHeadingLevel:_}),N=(0,i.useMemo)((function(){if(d&&f)return{linkClassName:d,linkActiveClassName:f,minHeadingLevel:x,maxHeadingLevel:_}}),[d,f,x,_]);return(0,s.Si)(N),i.createElement(a,(0,o.Z)({toc:g,className:l,linkClassName:d},y))}},1385:function(e,t,n){var o=n(2784),r=n(1558),i=Object.assign({React:o},o,{Stories:r.Z,storyStyles:r.Z});t.Z=i},1558:function(e,t,n){n.d(t,{Z:function(){return E}});var o=n(2322),r=n(2784),i=function(){return i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},s=(0,r.createContext)({stories:[],width:"100%",height:"100%",defaultDuration:1e4,isPaused:!1});Object.freeze({MOUSE_DOWN:"mouseDown",MOUSE_UP:"mouseUp",TOUCH_START:"touchStart",TOUCH_END:"touchEnd"});var u=Object.freeze({LEFT:"left",RIGHT:"right"});function a(e){var t=e.onNextClick,n=e.onPrevClick,s=e.onPause,a=e.onResume,l=(0,r.useState)(!1),c=l[0],d=l[1],v=(0,r.useRef)(null);function f(e){e.stopPropagation(),e.preventDefault(),clearTimeout(v.current),v.current=setTimeout((function(){s(),d(!0)}),200)}function m(e,o){if(o.stopPropagation(),o.preventDefault(),clearTimeout(v.current),c)return a(),void d(!1);a(),e!=u.LEFT?t():n()}function h(e){return{onMouseUp:function(t){return m(e,t)},onTouchEnd:function(t){return m(e,t)},onTouchStart:function(e){return f(e)},onMouseDown:function(e){return f(e)}}}return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)("div",i({className:"Actions-styles_left__eky50"},h(u.LEFT)),void 0),(0,o.jsx)("div",i({className:"Actions-styles_right__zguoH"},h(u.RIGHT)),void 0)]},void 0)}function l(){return(0,r.useContext)(s)}function c(e){var t,n,s,u,a,c=l().defaultDuration,d=(0,r.useRef)(null),v=(0,r.useRef)(null),f=(0,r.useState)(!1),m=f[0],h=f[1],y=0,p=.1;return(0,r.useEffect)((function(){e.isPaused?h(!1):e.isActive?h(!0):h(!1)}),[e.isActive,e.isPaused]),(0,r.useEffect)((function(){e.isActive&&d.current&&(d.current.style.width="0px")}),[e.isActive]),(0,r.useEffect)((function(){var t;d.current&&(e.hasStoryPassed?d.current.style.width="".concat(null===(t=null==v?void 0:v.current)||void 0===t?void 0:t.offsetWidth,"px"):e.isActive||(d.current.style.width="0px"))}),[e.hasStoryPassed,e.isActive]),t=function(t){var n;d.current&&v.current&&((y=Number((d.current.style.width||"1px").slice(0,d.current.style.width.length-2))||0)>v.current.offsetWidth?h(!1):(p=(null===(n=null==v?void 0:v.current)||void 0===n?void 0:n.offsetWidth)/((e.story.duration||c)/t),d.current.style.width="".concat(y+p,"px")))},n=m,s=(0,r.useRef)(),u=(0,r.useRef)(),a=(0,r.useRef)(t),(0,r.useEffect)((function(){a.current=t}),[t]),(0,r.useEffect)((function(){return!1!==n?(s.current=requestAnimationFrame((function e(t){if(null!=u.current){var n=t-u.current;a.current(n)}u.current=t,s.current=requestAnimationFrame(e)})),function(){cancelAnimationFrame(s.current),s.current=null,u.current=null}):function(){s.current&&(s.current=null),cancelAnimationFrame(s.current),u.current=null}}),[n]),(0,o.jsx)("div",i({className:"ProgressBar-styles_wrapper__oqUCo",ref:v},{children:(0,o.jsx)("div",{className:"ProgressBar-styles_bar__x0O50",ref:d},void 0)}),void 0)}function d(e){var t=l().stories;return(0,o.jsx)("div",i({className:"progress-styles_wrapper__qQPyW",style:{gridTemplateColumns:"repeat(".concat(t.length,",1fr)")}},{children:t.map((function(t){return(0,o.jsx)(c,{hasStoryPassed:t.index<e.activeStoryIndex,isActive:t.index===e.activeStoryIndex,story:t,isPaused:t.index===e.activeStoryIndex&&e.isPaused},t.index)}))}),void 0)}var v=Object.freeze({IMAGE:"image",VIDEO:"video",COMPONENT:"component"});function f(e){return(0,r.useEffect)((function(){e.onPause()}),[]),(0,o.jsx)("img",{className:"Image-styles_image__gnfW1",src:e.story.url,alt:"story",onLoad:function(){setTimeout((function(){e.onResume()}),4)}},void 0)}var m;function h(e){return"off"===e.type?(0,o.jsx)("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"white"},{children:(0,o.jsx)("path",{d:"M3 9v6h-1v-6h1zm13-7l-9 5v2.288l7-3.889v13.202l-7-3.889v2.288l9 5v-20zm-11 5h-5v10h5v-10zm17.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z"},void 0)}),void 0):(0,o.jsx)("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"white"},{children:(0,o.jsx)("path",{d:"M22 0v24l-11-6v-2.278l9 4.909v-17.262l-9 4.91v-2.279l11-6zm-13 6v12h-7v-12h7zm-2 2h-3v8h3v-8z"},void 0)}),void 0)}var y="RSIsMute",p="undefined"==typeof window?{}:window;function x(e){var t,n=l().isPaused,s=(0,r.useState)("true"===(null===(t=null==p?void 0:p.localStorage)||void 0===t?void 0:t.getItem(y))),u=s[0],a=s[1],c=(0,r.useState)(!1),d=c[0],v=c[1],f=(0,r.useRef)(null);function m(e){var t;null===(t=null==p?void 0:p.localStorage)||void 0===t||t.setItem(y,String(e)),a(e)}return(0,r.useEffect)((function(){e.onPause(),v(!0)}),[]),(0,r.useEffect)((function(){f.current&&(!n||f.current.paused?f.current.play().catch((function(){var e;m(!0),null===(e=f.current)||void 0===e||e.play()})):f.current.pause())}),[n]),(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)("video",i({className:"Video-styles_video__BykuO",ref:f,playsInline:!0,"webkit-playsinline":"",controls:!1,src:e.story.url,onLoadedData:function(){setTimeout((function(){e.onResume(),v(!1)}),4)},muted:u},{children:[(0,o.jsx)("source",{src:e.story.url,type:"video/mp4"},void 0),(0,o.jsx)("source",{src:e.story.url,type:"video/webm"},void 0),(0,o.jsx)("source",{src:e.story.url,type:"video/ogg"},void 0),(0,o.jsx)("p",{children:"Video not supported"},void 0)]}),void 0),(0,o.jsx)("div",i({className:"Video-styles_soundIcon__ZvYXE",onClick:function(){return m(!u)}},{children:(0,o.jsx)(h,{type:u?"off":"on"},void 0)}),void 0),d&&(0,o.jsx)("div",i({className:"Video-styles_loaderWrapper__TqVWk"},{children:(0,o.jsx)("div",{className:"Video-styles_loader__FxxSV"},void 0)}),void 0)]},void 0)}null===(m=null==p?void 0:p.localStorage)||void 0===m||m.setItem(y,"true");function _(e){return(0,o.jsx)("div",i({className:"CustomComponents-styles_component__w87Wx"},{children:(0,o.jsx)(e.story.component,{pause:e.onPause,resume:e.onResume,story:e.story},void 0)}),void 0)}function g(e){return e.story.seeMore?(0,o.jsx)("button",i({type:"button",onClick:function(){e.onSeeMoreClick()},className:"SeeMore-styles_seeMoreWrapper__kwjif"},{children:function(){var t=e.story.seeMore,n=typeof t;if(["string","boolean"].includes(n)){var r="string"===n?t:"See More";return(0,o.jsxs)("div",i({className:"SeeMore-styles_defaultSeeMore__-B1QW"},{children:[(0,o.jsx)("span",{children:"^"},void 0),(0,o.jsx)("p",{children:r},void 0)]}),void 0)}return"function"===n?(0,o.jsx)(e.story.seeMore,{},void 0):e.story.seeMore}()}),void 0):null}function N(e){return e.story.seeMore&&e.story.seeMoreComponent?(0,o.jsxs)("div",i({className:"SeeMoreComponent-styles_seeMoreComponentWrapper__0T6Ap"},{children:[(0,o.jsx)("button",i({className:"SeeMoreComponent-styles_closeIcon__LMm3b",onClick:e.onClose},{children:"\u2715"}),void 0),"function"==typeof e.story.seeMoreComponent?(0,o.jsx)(e.story.seeMoreComponent,{},void 0):e.story.seeMoreComponent]}),void 0):null}function j(e){var t=(0,r.useState)(!1),n=t[0],s=t[1];return(0,r.useEffect)((function(){s(!1)}),[e.story]),(0,o.jsxs)("div",i({className:"Story-styles_wrapper__oJP7j"},{children:[e.story.type===v.IMAGE?(0,o.jsx)(f,i({},e),void 0):e.story.type===v.VIDEO?(0,o.jsx)(x,i({},e),void 0):e.story.type===v.COMPONENT?(0,o.jsx)(_,i({},e),void 0):null,e.story.header&&(0,o.jsx)("div",i({className:"Story-styles_header__-rnWL"},{children:"function"==typeof e.story.header?(0,o.jsx)(e.story.header,{},void 0):e.story.header}),void 0),(0,o.jsx)(g,{onSeeMoreClick:function(){var t,n;e.onPause(),s(!0),null===(n=(t=e.story).onSeeMoreClick)||void 0===n||n.call(t,e.story.index)},story:e.story},void 0),n&&(0,o.jsx)(N,{story:e.story,onClose:function(){e.onResume(),s(!1)}},void 0)]}),void 0)}function C(e){return void 0===e&&(e=4),Number(Math.random().toFixed(e))}function E(e){var t,n,u,l,c,v,f,m=e.stories,h=void 0===m?[]:m,y=e.width,p=void 0===y?"100%":y,x=e.height,_=void 0===x?"100%":x,g=e.onStoryChange,N=void 0===g?function(){}:g,E=e.currentIndex,w=void 0===E?0:E,S=e.defaultDuration,M=void 0===S?1e4:S,k=e.onAllStoriesEnd,P=void 0===k?function(){}:k,b=e.onStoriesStart,R=void 0===b?function(){}:b,T=(0,r.useMemo)((function(){return function(e,t){var n=0;return e.map((function(e,o){var r=e.duration||t,s=r+C();return s===n&&(s=r+C(6)),n=s,i(i({},e),{index:o,calculatedDuration:s})}))}(h,M)}),[h,M]),A=(0,r.useState)(),O=A[0],L=A[1],I=h.length-1,D=(0,r.useState)(!1),Z=D[0],H=D[1],W=(0,r.useRef)(!1),F=(0,r.useRef)(!1);function z(){W.current||(null==O?void 0:O.index)!==I||(P(),W.current=!0),(null==O?void 0:O.index)!==I&&L((function(e){if(!e)return T[0];var t=(null==e?void 0:e.index)+1;return T[t]}))}function U(){H(!0)}function V(){H(!1)}(0,r.useEffect)((function(){F.current||(F.current=!0,R())}),[R]),(0,r.useEffect)((function(){var e=T[w];e&&L(e)}),[w,h]),(0,r.useEffect)((function(){O&&N(O.index)}),[O]),n=function(){z()},u=null!==(t=null==O?void 0:O.calculatedDuration)&&void 0!==t?t:null,l=Z,c=(0,r.useRef)(),v=(0,r.useRef)(u),f=(0,r.useRef)(Date.now()),(0,r.useEffect)((function(){c.current=n}),[n]),(0,r.useEffect)((function(){v.current=u}),[u]),(0,r.useEffect)((function(){if(null!==u&&!1===l){f.current=Date.now();var e=setTimeout((function(){c.current()}),v.current);return function(){clearTimeout(e)}}return function(){}}),[u,l]),(0,r.useEffect)((function(){l&&(v.current=v.current-(Date.now()-f.current))}),[l]);var B={stories:T,width:p,height:_,defaultDuration:M,isPaused:Z};return O?(0,o.jsx)(s.Provider,i({value:B},{children:(0,o.jsxs)("div",i({className:"styles_main__-0FEu",style:{width:p,height:_}},{children:[(0,o.jsx)(d,{activeStoryIndex:O.index,isPaused:Z},void 0),(0,o.jsx)(j,{onPause:U,onResume:V,story:O},O.index),(0,o.jsx)(a,{onNextClick:z,onPrevClick:function(){0!==(null==O?void 0:O.index)&&L((function(e){if(!e)return T[0];var t=(null==e?void 0:e.index)-1;return T[t]}))},onPause:U,onResume:V},void 0)]}),void 0)}),void 0):null}}}]);