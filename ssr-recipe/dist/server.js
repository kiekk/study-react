!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";n.r(t);var r=n(0),u=n.n(r),o=n(2),l=n.n(o),a=n(3),c=n.n(a),i=n(1),f=function(){return u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(i.Link,{to:"/red"},"Red")),u.a.createElement("li",null,u.a.createElement(i.Link,{to:"/blue"},"Blue")))},d=function(){return u.a.createElement("div",{className:"Red"},"Red")},m=function(){return u.a.createElement(d,null)},p=function(){return u.a.createElement("div",{className:"Blue"},"Blue")},E=function(){return u.a.createElement(p,null)},b=function(){return u.a.createElement("div",null,u.a.createElement(f,null),u.a.createElement("hr",null),u.a.createElement(i.Route,{path:"/red",component:m}),u.a.createElement(i.Route,{path:"/blue",component:E}))},v=c()();v.use((function(e,t,n){var r=u.a.createElement(i.StaticRouter,{location:e.url,context:{}},u.a.createElement(b,null)),o=l.a.renderToString(r);t.send(o)})),v.listen(5e3,(function(){console.log("Running on http://localhost:5000")})),s}]);