(window.webpackJsonp=window.webpackJsonp||[]).push([[1029],{1097:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var l=n(3),b=n(7),c=(n(0),n(1800)),r=["components"],o={title:"Taro.chooseVideo(option)",sidebar_label:"chooseVideo"},a={unversionedId:"apis/media/video/chooseVideo",id:"version-3.x/apis/media/video/chooseVideo",isDocsHomePage:!1,title:"Taro.chooseVideo(option)",description:"\u62cd\u6444\u89c6\u9891\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u89c6\u9891\u3002",source:"@site/versioned_docs/version-3.x/apis/media/video/chooseVideo.md",slug:"/apis/media/video/chooseVideo",permalink:"/taro/docs/apis/media/video/chooseVideo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/media/video/chooseVideo.md",version:"3.x",sidebar_label:"chooseVideo",sidebar:"version-3.x/API",previous:{title:"Taro.createVideoContext(id, component)",permalink:"/taro/docs/apis/media/video/createVideoContext"},next:{title:"VideoContext",permalink:"/taro/docs/apis/media/video/VideoContext"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"camera",id:"camera",children:[]},{value:"sourceType",id:"sourcetype",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:u};function d(e){var t=e.components,n=Object(b.a)(e,r);return Object(c.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u62cd\u6444\u89c6\u9891\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u89c6\u9891\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<void>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"camera"),Object(c.b)("td",null,Object(c.b)("code",null,'"back" | "front"')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u7684\u662f\u524d\u7f6e\u6216\u8005\u540e\u7f6e\u6444\u50cf\u5934\u3002\u90e8\u5206 Android \u624b\u673a\u4e0b\u7531\u4e8e\u7cfb\u7edf ROM \u4e0d\u652f\u6301\u65e0\u6cd5\u751f\u6548")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"compressed"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u538b\u7f29\u6240\u9009\u62e9\u7684\u89c6\u9891\u6587\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"maxDuration"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u62cd\u6444\u89c6\u9891\u6700\u957f\u62cd\u6444\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2")),Object(c.b)("tr",null,Object(c.b)("td",null,"sourceType"),Object(c.b)("td",null,Object(c.b)("code",null,'("album" | "camera")[]')),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u89c6\u9891\u9009\u62e9\u7684\u6765\u6e90")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"duration"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u65f6\u95f4\u957f\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8fd4\u56de\u9009\u5b9a\u89c6\u9891\u7684\u9ad8\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"size"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u6570\u636e\u91cf\u5927\u5c0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"tempFilePath"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u9009\u5b9a\u89c6\u9891\u7684\u4e34\u65f6\u6587\u4ef6\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8fd4\u56de\u9009\u5b9a\u89c6\u9891\u7684\u5bbd\u5ea6")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"camera"},"camera"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"back"),Object(c.b)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u540e\u7f6e\u6444\u50cf\u5934")),Object(c.b)("tr",null,Object(c.b)("td",null,"front"),Object(c.b)("td",null,"\u9ed8\u8ba4\u62c9\u8d77\u524d\u7f6e\u6444\u50cf\u5934")))),Object(c.b)("h3",{id:"sourcetype"},"sourceType"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"album"),Object(c.b)("td",null,"\u4ece\u76f8\u518c\u9009\u62e9\u89c6\u9891")),Object(c.b)("tr",null,Object(c.b)("td",null,"camera"),Object(c.b)("td",null,"\u4f7f\u7528\u76f8\u673a\u62cd\u6444\u89c6\u9891")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.chooseVideo({\n  sourceType: ['album','camera'],\n  maxDuration: 60,\n  camera: 'back',\n  success: function (res) {\n    console.log(res.tempFilePath)\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Taro.chooseVideo"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0},1800:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var l=n(0),b=n.n(l);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,b=function(e,t){if(null==e)return{};var n,l,b={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var u=b.a.createContext({}),i=function(e){var t=b.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=i(e.components);return b.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,r=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=i(n),j=l,s=d["".concat(r,".").concat(j)]||d[j]||O[j]||c;return n?b.a.createElement(s,o(o({ref:t},u),{},{components:n})):b.a.createElement(s,o({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,r=new Array(c);r[0]=j;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<c;u++)r[u]=n[u];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);