(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1800:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),m=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=m(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=m(a),j=n,d=o["".concat(c,".").concat(j)]||o[j]||O[j]||b;return a?r.a.createElement(d,l(l({ref:t},p),{},{components:a})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},324:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(1800)),c=["components"],l={title:"Canvas",sidebar_label:"Canvas"},i={unversionedId:"apis/canvas/Canvas",id:"version-3.x/apis/canvas/Canvas",isDocsHomePage:!1,title:"Canvas",description:"Canvas \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 SelectorQuery \u83b7\u53d6\u3002",source:"@site/versioned_docs/version-3.x/apis/canvas/Canvas.md",slug:"/apis/canvas/Canvas",permalink:"/taro/docs/apis/canvas/Canvas",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/canvas/Canvas.md",version:"3.x",sidebar_label:"Canvas",sidebar:"version-3.x/API",previous:{title:"Taro.canvasGetImageData(option, component)",permalink:"/taro/docs/apis/canvas/canvasGetImageData"},next:{title:"CanvasContext",permalink:"/taro/docs/apis/canvas/CanvasContext"}},p=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"cancelAnimationFrame",id:"cancelanimationframe",children:[]},{value:"createImageData",id:"createimagedata",children:[]},{value:"createImage",id:"createimage",children:[]},{value:"getContext",id:"getcontext",children:[]},{value:"requestAnimationFrame",id:"requestanimationframe",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-5",children:[]}],m={rightToc:p};function o(e){var t=e.components,a=Object(r.a)(e,c);return Object(b.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Canvas \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 SelectorQuery \u83b7\u53d6\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(b.b)("h3",{id:"cancelanimationframe"},"cancelAnimationFrame"),Object(b.b)("p",null,"\u53d6\u6d88\u7531 requestAnimationFrame \u6dfb\u52a0\u5230\u8ba1\u5212\u4e2d\u7684\u52a8\u753b\u5e27\u8bf7\u6c42\u3002\u652f\u6301\u5728 2D Canvas \u548c WebGL Canvas \u4e0b\u4f7f\u7528, \u4f46\u4e0d\u652f\u6301\u6df7\u7528 2D \u548c WebGL \u7684\u65b9\u6cd5\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.cancelAnimationFrame.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"(requestID: number) => void\n")),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"requestID"),Object(b.b)("td",null,Object(b.b)("code",null,"number"))))),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Canvas.cancelAnimationFrame"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h3",{id:"createimagedata"},"createImageData"),Object(b.b)("p",null,"\u521b\u5efa\u4e00\u4e2a ImageData \u5bf9\u8c61\u3002\u4ec5\u652f\u6301\u5728 2D Canvas \u4e2d\u4f7f\u7528\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.createImageData.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"() => ImageData\n")),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Canvas.createImageData"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h3",{id:"createimage"},"createImage"),Object(b.b)("p",null,"\u521b\u5efa\u4e00\u4e2a\u56fe\u7247\u5bf9\u8c61\u3002 \u652f\u6301\u5728 2D Canvas \u548c WebGL Canvas \u4e0b\u4f7f\u7528, \u4f46\u4e0d\u652f\u6301\u6df7\u7528 2D \u548c WebGL \u7684\u65b9\u6cd5\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.createImage.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"() => Image\n")),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Canvas.createImage"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h3",{id:"getcontext"},"getContext"),Object(b.b)("p",null,"\u652f\u6301\u83b7\u53d6 2D \u548c WebGL \u7ed8\u56fe\u4e0a\u4e0b\u6587"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.getContext.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"(contextType: string) => RenderingContext\n")),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"contextType"),Object(b.b)("td",null,Object(b.b)("code",null,"string"))))),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Canvas.getContext"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h3",{id:"requestanimationframe"},"requestAnimationFrame"),Object(b.b)("p",null,"\u5728\u4e0b\u6b21\u8fdb\u884c\u91cd\u7ed8\u65f6\u6267\u884c\u3002 \u652f\u6301\u5728 2D Canvas \u548c WebGL Canvas \u4e0b\u4f7f\u7528, \u4f46\u4e0d\u652f\u6301\u6df7\u7528 2D \u548c WebGL \u7684\u65b9\u6cd5\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.requestAnimationFrame.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: (...args: any[]) => any) => number\n")),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"callback"),Object(b.b)("td",null,Object(b.b)("code",null,"(...args: any[]) => any")),Object(b.b)("td",null,"\u6267\u884c\u7684 callback")))),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Canvas.requestAnimationFrame"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6-5"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Canvas.cancelAnimationFrame"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Canvas.createImageData"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Canvas.createImage"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Canvas.getContext"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Canvas.requestAnimationFrame"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))))}o.isMDXComponent=!0}}]);