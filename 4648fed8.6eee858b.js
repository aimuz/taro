(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{1800:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(n),s=a,d=p["".concat(l,".").concat(s)]||p[s]||m[s]||c;return n?r.a.createElement(d,b(b({ref:t},i),{},{components:n})):r.a.createElement(d,b({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var i=2;i<c;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},549:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(1800)),l=["components"],b={title:"ImageData",sidebar_label:"ImageData"},o={unversionedId:"apis/canvas/ImageData",id:"apis/canvas/ImageData",isDocsHomePage:!1,title:"ImageData",description:"ImageData \u5bf9\u8c61",source:"@site/docs/apis/canvas/ImageData.md",slug:"/apis/canvas/ImageData",permalink:"/taro/docs/next/apis/canvas/ImageData",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/canvas/ImageData.md",version:"current",sidebar_label:"ImageData",sidebar:"API",previous:{title:"Image",permalink:"/taro/docs/next/apis/canvas/Image"},next:{title:"OffscreenCanvas",permalink:"/taro/docs/next/apis/canvas/OffscreenCanvas"}},i=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,l);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"ImageData \u5bf9\u8c61"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/ImageData.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"data"),Object(c.b)("td",null,Object(c.b)("code",null,"Uint8ClampedArray")),Object(c.b)("td",null,"\u4e00\u7ef4\u6570\u7ec4\uff0c\u5305\u542b\u4ee5 RGBA \u987a\u5e8f\u7684\u6570\u636e\uff0c\u6570\u636e\u4f7f\u7528 0 \u81f3 255\uff08\u5305\u542b\uff09\u7684\u6574\u6570\u8868\u793a")),Object(c.b)("tr",null,Object(c.b)("td",null,"height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u4f7f\u7528\u50cf\u7d20\u63cf\u8ff0 ImageData \u7684\u5b9e\u9645\u9ad8\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u4f7f\u7528\u50cf\u7d20\u63cf\u8ff0 ImageData \u7684\u5b9e\u9645\u5bbd\u5ea6")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"ImageData"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);