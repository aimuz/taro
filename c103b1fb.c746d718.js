(window.webpackJsonp=window.webpackJsonp||[]).push([[1338],{1405:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return O}));var a=r(3),n=r(7),b=(r(0),r(1800)),c=["components"],l={title:"Worker",sidebar_label:"Worker"},o={unversionedId:"apis/worker/Worker",id:"apis/worker/Worker",isDocsHomePage:!1,title:"Worker",description:"\u65b9\u6cd5",source:"@site/docs/apis/worker/Worker.md",slug:"/apis/worker/Worker",permalink:"/taro/docs/next/apis/worker/Worker",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/worker/Worker.md",version:"current",sidebar_label:"Worker",sidebar:"API",previous:{title:"Taro.createWorker(scriptPath)",permalink:"/taro/docs/next/apis/worker/createWorker"},next:{title:"Taro.getExtConfigSync()",permalink:"/taro/docs/next/apis/ext/getExtConfigSync"}},i=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"onMessage",id:"onmessage",children:[]},{value:"postMessage",id:"postmessage",children:[]},{value:"terminate",id:"terminate",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"OnMessageCallback",id:"onmessagecallback",children:[]},{value:"OnMessageCallbackResult",id:"onmessagecallbackresult",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-3",children:[]}],p={rightToc:i};function O(e){var t=e.components,r=Object(n.a)(e,c);return Object(b.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(b.b)("h3",{id:"onmessage"},"onMessage"),Object(b.b)("p",null,"\u76d1\u542c\u4e3b\u7ebf\u7a0b/Worker \u7ebf\u7a0b\u5411\u5f53\u524d\u7ebf\u7a0b\u53d1\u9001\u7684\u6d88\u606f\u7684\u4e8b\u4ef6\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.onMessage.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnMessageCallback) => void\n")),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"callback"),Object(b.b)("td",null,Object(b.b)("code",null,"OnMessageCallback")),Object(b.b)("td",null,"\u4e3b\u7ebf\u7a0b/Worker \u7ebf\u7a0b\u5411\u5f53\u524d\u7ebf\u7a0b\u53d1\u9001\u7684\u6d88\u606f\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Worker.onMessage"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h3",{id:"postmessage"},"postMessage"),Object(b.b)("p",null,"\u5411\u4e3b\u7ebf\u7a0b/Worker \u7ebf\u7a0b\u53d1\u9001\u7684\u6d88\u606f\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.postMessage.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"(message: Record<string, any>) => void\n")),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"message"),Object(b.b)("td",null,Object(b.b)("code",null,"Record<string, any>")),Object(b.b)("td",null,"\u9700\u8981\u53d1\u9001\u7684\u6d88\u606f\uff0c\u5fc5\u987b\u662f\u4e00\u4e2a\u53ef\u5e8f\u5217\u5316\u7684 JavaScript key-value \u5f62\u5f0f\u7684\u5bf9\u8c61\u3002")))),Object(b.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("p",null,"worker \u7ebf\u7a0b\u4e2d"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"worker.postMessage({\n  msg: 'hello from worker'\n})\n")),Object(b.b)("p",null,"\u4e3b\u7ebf\u7a0b\u4e2d"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"const worker = Taro.createWorker('workers/request/index.js')\nworker.postMessage({\n  msg: 'hello from main'\n})\n")),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Worker.postMessage"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h3",{id:"terminate"},"terminate"),Object(b.b)("p",null,"\u7ed3\u675f\u5f53\u524d Worker \u7ebf\u7a0b\u3002\u4ec5\u9650\u5728\u4e3b\u7ebf\u7a0b worker \u5bf9\u8c61\u4e0a\u8c03\u7528\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.terminate.html"},"\u53c2\u8003\u6587\u6863"))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),Object(b.b)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Worker.terminate"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"onmessagecallback"},"OnMessageCallback"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-tsx"},"(result: OnMessageCallbackResult) => void\n")),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"result"),Object(b.b)("td",null,Object(b.b)("code",null,"OnMessageCallbackResult"))))),Object(b.b)("h3",{id:"onmessagecallbackresult"},"OnMessageCallbackResult"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"message"),Object(b.b)("td",null,Object(b.b)("code",null,"Record<string, any>")),Object(b.b)("td",null,"\u4e3b\u7ebf\u7a0b/Worker \u7ebf\u7a0b\u5411\u5f53\u524d\u7ebf\u7a0b\u53d1\u9001\u7684\u6d88\u606f")))),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"API"),Object(b.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",{parentName:"tr",align:"center"},"H5"),Object(b.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Worker.onMessage"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Worker.postMessage"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"Worker.terminate"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))))}O.isMDXComponent=!0},1800:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},O=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=p(r),j=a,u=O["".concat(c,".").concat(j)]||O[j]||s[j]||b;return r?n.a.createElement(u,l(l({ref:t},i),{},{components:r})):n.a.createElement(u,l({ref:t},i))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=j;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<b;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}j.displayName="MDXCreateElement"}}]);