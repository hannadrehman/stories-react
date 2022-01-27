/*! For license information please see a151b411.3e60ee76.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[769],{876:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1558:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(2322),o=t(2784),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)};var s=(0,o.createContext)({stories:[],width:"100%",height:"100%",defaultDuration:1e4});Object.freeze({MOUSE_DOWN:"mouseDown",MOUSE_UP:"mouseUp",TOUCH_START:"touchStart",TOUCH_END:"touchEnd"});var u=Object.freeze({LEFT:"left",RIGHT:"right"});function a(e){var n=e.onNextClick,t=e.onPrevClick,s=e.onPause,a=e.onResume,c=(0,o.useState)(!1),l=c[0],d=c[1],p=(0,o.useRef)(null);function f(e){e.stopPropagation(),e.preventDefault(),clearTimeout(p.current),p.current=setTimeout((function(){s(),d(!0)}),200)}function m(e,r){if(r.stopPropagation(),r.preventDefault(),clearTimeout(p.current),l)return a(),void d(!1);a(),e!=u.LEFT?n():t()}function y(e){return{onMouseUp:function(n){return m(e,n)},onTouchEnd:function(n){return m(e,n)},onTouchStart:function(e){return f(e)},onMouseDown:function(e){return f(e)}}}return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("div",i({className:"Actions-styles_left__eky50"},y(u.LEFT)),void 0),(0,r.jsx)("div",i({className:"Actions-styles_right__zguoH"},y(u.RIGHT)),void 0)]},void 0)}function c(){return(0,o.useContext)(s)}function l(e){var n,t,s,u,a,l=c().defaultDuration,d=(0,o.useRef)(null),p=(0,o.useRef)(null),f=(0,o.useState)(!1),m=f[0],y=f[1],h=0,v=.1;return(0,o.useEffect)((function(){e.isPaused?y(!1):e.isActive?y(!0):y(!1)}),[e.isActive,e.isPaused]),(0,o.useEffect)((function(){e.isActive&&d.current&&(d.current.style.width="0px")}),[e.isActive]),(0,o.useEffect)((function(){var n;d.current&&(e.hasStoryPassed?d.current.style.width="".concat(null===(n=null==p?void 0:p.current)||void 0===n?void 0:n.offsetWidth,"px"):e.isActive||(d.current.style.width="0px"))}),[e.hasStoryPassed,e.isActive]),n=function(n){var t;d.current&&p.current&&((h=Number((d.current.style.width||"1px").slice(0,d.current.style.width.length-2))||0)>p.current.offsetWidth?y(!1):(v=(null===(t=null==p?void 0:p.current)||void 0===t?void 0:t.offsetWidth)/((e.story.duration||l)/n),d.current.style.width="".concat(h+v,"px")))},t=m,s=(0,o.useRef)(),u=(0,o.useRef)(),a=(0,o.useRef)(n),(0,o.useEffect)((function(){a.current=n}),[n]),(0,o.useEffect)((function(){return!1!==t?(s.current=requestAnimationFrame((function e(n){if(null!=u.current){var t=n-u.current;a.current(t)}u.current=n,s.current=requestAnimationFrame(e)})),function(){cancelAnimationFrame(s.current),s.current=null,u.current=null}):function(){s.current&&(s.current=null),cancelAnimationFrame(s.current),u.current=null}}),[t]),(0,r.jsx)("div",i({className:"ProgressBar-styles_wrapper__oqUCo",ref:p},{children:(0,r.jsx)("div",{className:"ProgressBar-styles_bar__x0O50",ref:d},void 0)}),void 0)}function d(e){var n=c().stories;return(0,r.jsx)("div",i({className:"progress-styles_wrapper__qQPyW",style:{gridTemplateColumns:"repeat(".concat(n.length,",1fr)")}},{children:n.map((function(n){return(0,r.jsx)(l,{hasStoryPassed:n.index<e.activeStoryIndex,isActive:n.index===e.activeStoryIndex,story:n,isPaused:n.index===e.activeStoryIndex&&e.isPaused},n.index)}))}),void 0)}var p=Object.freeze({IMAGE:"image",VIDEO:"video",COMPONENT:"component"});function f(e){var n=(0,o.useRef)(null),t=(0,o.useState)(!1),s=t[0],u=t[1];return(0,o.useEffect)((function(){[p.IMAGE,p.VIDEO].includes(e.story.type)&&e.onPause()}),[]),(0,o.useEffect)((function(){e.story.type===p.VIDEO&&function(){!function(e,n,t,r){new(t||(t=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(s,u)}a((r=r.apply(e,n||[])).next())}))}(this,void 0,void 0,(function(){var e;return function(e,n){var t,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(e,s)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(t){switch(t.label){case 0:if(!(e=n.current))return[2];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,e.play()];case 2:return t.sent(),[3,4];case 3:return t.sent(),e.muted=!0,e.play(),[3,4];case 4:return[2]}}))}))}()}),[e.story.type]),(0,o.useEffect)((function(){u(!1)}),[e.story]),(0,r.jsxs)("div",i({className:"Story-styles_wrapper__oJP7j"},{children:[e.story.type===p.IMAGE?(0,r.jsx)("img",{className:"Story-styles_image__hQdW-",src:e.story.url,alt:"story",onLoad:function(){e.onResume()}},void 0):e.story.type===p.VIDEO?(0,r.jsx)("video",{className:"Story-styles_video__RJghk",ref:n,autoPlay:!0,playsInline:!0,"webkit-playsinline":"",controls:!1,src:e.story.url,onLoadedData:function(){console.log("loaded"),e.onResume()}},void 0):e.story.type===p.COMPONENT?(0,r.jsx)("div",i({className:"Story-styles_component__IGrVa"},{children:(0,r.jsx)(e.story.component,{pause:e.onPause,resume:e.onResume,story:e.story},void 0)}),void 0):null,e.story.header&&(0,r.jsx)("div",i({className:"Story-styles_header__-rnWL"},{children:"function"==typeof e.story.header?(0,r.jsx)(e.story.header,{},void 0):e.story.header}),void 0),e.story.seeMore&&(0,r.jsx)("button",i({type:"button",onClick:function(){var n,t;e.onPause(),u(!0),null===(t=(n=e.story).onSeeMoreClick)||void 0===t||t.call(n,e.story.index)},className:"Story-styles_seeMoreWrapper__TLVGk"},{children:function(){var n=e.story.seeMore,t=typeof n;if(["string","boolean"].includes(t)){var o="string"===t?n:"See More";return(0,r.jsxs)("div",i({className:"Story-styles_defaultSeeMore__QbXTZ"},{children:[(0,r.jsx)("span",{children:"^"},void 0),(0,r.jsx)("p",{children:o},void 0)]}),void 0)}return"function"===t?(0,r.jsx)(e.story.seeMore,{},void 0):e.story.seeMore}()}),void 0),s&&e.story.seeMore&&e.story.seeMoreComponent&&(0,r.jsxs)("div",i({className:"Story-styles_seeMoreComponentWrapper__TCOms"},{children:[(0,r.jsx)("button",i({className:"Story-styles_closeIcon__ThM3G",onClick:function(){e.onResume(),u(!1)}},{children:"\u2715"}),void 0),"function"==typeof e.story.seeMoreComponent?(0,r.jsx)(e.story.seeMoreComponent,{},void 0):e.story.seeMoreComponent]}),void 0)]}),e.story.index)}function m(e){var n,t,u,c,l,p,m=e.stories,y=void 0===m?[]:m,h=e.width,v=void 0===h?"100%":h,x=e.height,b=void 0===x?"100%":x,g=e.onStoryChange,w=void 0===g?function(){}:g,E=e.currentIndex,C=void 0===E?0:E,_=e.defaultDuration,S=void 0===_?1e4:_,j=(0,o.useMemo)((function(){return y.map((function(e,n){return i(i({},e),{index:n})}))}),[y]),k=(0,o.useState)(j[C]),O=k[0],P=k[1],T=y.length-1,N=(0,o.useState)(null),R=N[0],I=N[1],M=(0,o.useState)(!1),F=M[0],D=M[1],A={stories:j,width:v,height:b,defaultDuration:S};function z(){O.index<T&&P((function(e){var n=e.index+1;return j[n]}))}function W(){D(!0)}function L(){D(!1)}return(0,o.useEffect)((function(){if(O){var e=O.duration||S;I(e),w(O.index)}}),[O]),n=function(){I(null),z()},t=R,u=F,c=(0,o.useRef)(),l=(0,o.useRef)(t),p=(0,o.useRef)(Date.now()),(0,o.useEffect)((function(){c.current=n}),[n]),(0,o.useEffect)((function(){l.current=t}),[t]),(0,o.useEffect)((function(){if(null!==t&&!1===u){p.current=Date.now();var e=setTimeout((function(){c.current()}),l.current);return function(){return clearTimeout(e)}}return function(){}}),[t,u]),(0,o.useEffect)((function(){u&&(l.current=t-(Date.now()-p.current))}),[u]),(0,r.jsx)(s.Provider,i({value:A},{children:(0,r.jsxs)("div",i({className:"styles_main__-0FEu",style:{width:v,height:b}},{children:[(0,r.jsx)(d,{activeStoryIndex:O.index,isPaused:F},void 0),(0,r.jsx)(f,{onPause:W,onResume:L,story:O},void 0),(0,r.jsx)(a,{onNextClick:z,onPrevClick:function(){O.index>0&&P((function(e){var n=e.index-1;return j[n]}))},onPause:W,onResume:L},void 0)]}),void 0)}),void 0)}},8556:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return y},default:function(){return b},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return v}});var r=t(7896),o=t(1461),i=t(2784),s=t(876),u=t(1558);function a(){return i.createElement("p",null,"Jaguar shark! So tell me - does it really exist? Checkmate... Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah, but your scientists were so preoccupied with whether or not they could, they didnt stop to think if they should.")}function c(){return i.createElement("div",{className:"box",style:{height:"90%",padding:"100px 24px",background:"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"}},i.createElement("h4",null,"Hannad Rehman says:"),i.createElement(a,null))}function l(){return i.createElement("div",{className:"box",style:{paddingTop:"100px",padding:"24px",backgroundColor:"#fad0c4",height:"100%"}},i.createElement("h4",null,"Component with interactions"),i.createElement("div",{style:{display:"flex",justifyContent:"center",padding:"24px"}},i.createElement("img",{src:"https://images.pexels.com/photos/10955653/pexels-photo-10955653.jpeg?dpr=2&w=100"})),i.createElement("p",null,"You need to add ",i.createElement("code",null,"zindex >= 2")," to any interaction u want in the component"),i.createElement("button",{onClick:function(){return window.open("https://www.pexels.com/@imadclicks","_blank")},style:{color:"#3399FF",border:"1px solid",borderColor:"#3399FF",borderRadius:"3px",height:"30px",cursor:"pointer",position:"relative",zIndex:"2",width:"100%"}},"Follow Imad Clicks on pexels for amazing pictures"))}function d(e){return i.createElement("div",{className:"box",style:{paddingTop:"100px",padding:"24px",backgroundColor:"rgb(196, 220, 250)",height:"100%"}},i.createElement("h4",null,"Component Api"),i.createElement("br",null),i.createElement("br",null),i.createElement("h3",null,"A story can be paused and resumed too !"),i.createElement("br",null),i.createElement("button",{onClick:function(){return e.pause()},style:{color:"#3399FF",border:"1px solid",borderColor:"#3399FF",borderRadius:"3px",height:"30px",cursor:"pointer",position:"relative",zIndex:"2",width:"100%"}},"Pause Story"),i.createElement("br",null),i.createElement("br",null),i.createElement("button",{onClick:function(){return e.resume()},style:{color:"rgb(255, 51, 108)",border:"1px solid",borderColor:"rgb(255, 51, 108)",borderRadius:"3px",height:"30px",cursor:"pointer",position:"relative",zIndex:"2",width:"100%"}},"Resume Story"),i.createElement("h5",null,"Make Sure button zIndex is >= 2"),i.createElement("pre",{style:{marginTop:"16px",padding:"16px"}},JSON.stringify(e,null,2)),i.createElement("h6",null,"Story object passed in props "))}function p(){var e=[{type:"component",duration:9e3,component:c},{type:"component",duration:3e4,component:l},{duration:9e3,type:"component",component:d},{type:"component",duration:9e3,component:c}];return i.createElement("div",{style:{display:"flex",justifyContent:"center",width:"100%",marginBottom:"16px"}},i.createElement(u.Z,{width:"400px",height:"600px",stories:e}))}var f=["components"],m={sidebar_position:4},y="Component Stories",h={unversionedId:"tutorial-basics/component-stories",id:"tutorial-basics/component-stories",title:"Component Stories",description:"",source:"@site/docs/tutorial-basics/component-stories.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/component-stories",permalink:"/docs/tutorial-basics/component-stories",editUrl:"https://github.com/hannadrehman/stories-react/tree/main/packages/documentation/docs/tutorial-basics/component-stories.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Image & Video Stories",permalink:"/docs/tutorial-basics/image-video-stories"},next:{title:"Stories with See More",permalink:"/docs/tutorial-basics/see-more"}},v=[],x={toc:v};function b(e){var n=e.components,t=(0,o.Z)(e,f);return(0,s.kt)("wrapper",(0,r.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"component-stories"},"Component Stories"),(0,s.kt)(p,{mdxType:"ComponentStories"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"\nimport React from 'react';\nimport Stories from 'stories-react';\nimport 'stories-react/dist/index.css';\n\nfunction Copy() {\n  return (\n    <p>\n      Jaguar shark! So tell me - does it really exist? Checkmate... Eventually,\n      you do plan to have dinosaurs on your dinosaur tour, right? Yeah, but your\n      scientists were so preoccupied with whether or not they could, they didnt\n      stop to think if they should.\n    </p>\n  );\n}\n\nfunction HelpText() {\n  return (\n    <div\n      className=\"box\"\n      style={{\n        height: '90%',\n        padding: '100px 24px',\n        background:\n          'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',\n      }}\n    >\n      <h4>Hannad Rehman says:</h4>\n      <Copy />\n    </div>\n  );\n}\n\nfunction ComponentWithInteractions() {\n  return (\n    <div\n      className=\"box\"\n      style={{\n        paddingTop: '100px',\n        padding: '24px',\n        backgroundColor: '#fad0c4',\n        height: '100%',\n      }}\n    >\n      <h4>Component with interactions</h4>\n      <div\n        style={{ display: 'flex', justifyContent: 'center', padding: '24px' }}\n      >\n        <img src=\"https://images.pexels.com/photos/10955653/pexels-photo-10955653.jpeg?dpr=2&w=100\" />\n      </div>\n      <p>\n        You need to add <code>zindex >= 2</code> to any interaction u want in\n        the component\n      </p>\n      <button\n        onClick={() =>\n          window.open('https://www.pexels.com/@imadclicks', '_blank')\n        }\n        style={{\n          color: '#3399FF',\n          border: '1px solid',\n          borderColor: '#3399FF',\n          borderRadius: '3px',\n          height: '30px',\n          cursor: 'pointer',\n          position: 'relative',\n          zIndex: '2',\n          width: '100%',\n        }}\n      >\n        Follow Imad Clicks on pexels for amazing pictures\n      </button>\n    </div>\n  );\n}\n\nfunction ComponentApi(props) {\n  return (\n    <div\n      className=\"box\"\n      style={{\n        paddingTop: '100px',\n        padding: '24px',\n        backgroundColor: 'rgb(196, 220, 250)',\n        height: '100%',\n      }}\n    >\n      <h4>Component Api</h4>\n      <br />\n      <br />\n      <h3>A story can be paused and resumed too !</h3>\n      <br />\n      <button\n        onClick={() => props.pause()}\n        style={{\n          color: '#3399FF',\n          border: '1px solid',\n          borderColor: '#3399FF',\n          borderRadius: '3px',\n          height: '30px',\n          cursor: 'pointer',\n          position: 'relative',\n          zIndex: '2',\n          width: '100%',\n        }}\n      >\n        Pause Story\n      </button>\n\n      <br />\n      <br />\n      <button\n        onClick={() => props.resume()}\n        style={{\n          color: 'rgb(255, 51, 108)',\n          border: '1px solid',\n          borderColor: 'rgb(255, 51, 108)',\n          borderRadius: '3px',\n          height: '30px',\n          cursor: 'pointer',\n          position: 'relative',\n          zIndex: '2',\n          width: '100%',\n        }}\n      >\n        Resume Story\n      </button>\n      <h5>Make Sure button zIndex is >= 2</h5>\n\n      <pre style={{ marginTop: '16px', padding: '16px' }}>\n        {JSON.stringify(props, null, 2)}\n      </pre>\n      <h6>Story object passed in props </h6>\n    </div>\n  );\n}\n\nexport default function ComponentStories() {\n  const stories = [\n    {\n      type: 'component',\n      duration: 9000,\n      component: HelpText,\n    },\n    {\n      type: 'component',\n      duration: 30000,\n      component: ComponentWithInteractions,\n    },\n    {\n      duration: 9000,\n      type: 'component',\n      component: ComponentApi,\n    },\n  ];\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        width: '100%',\n        marginBottom: '16px',\n      }}\n    >\n      <Stories width=\"400px\" height=\"600px\" stories={stories} />\n    </div>\n  );\n}\n\n")))}b.isMDXComponent=!0},1837:function(e,n,t){t(7320);var r=t(2784),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)u.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:s.current}}n.jsx=c,n.jsxs=c},2322:function(e,n,t){e.exports=t(1837)}}]);