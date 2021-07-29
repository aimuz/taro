(window.webpackJsonp=window.webpackJsonp||[]).push([[1684],{1751:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return v})),n.d(t,"default",(function(){return h}));var r=n(3),a=n(7),c=(n(0),n(1800)),o=n(1804),l=n(1805),i=n(1807),s=["components"],u={title:"\u8def\u7531\u529f\u80fd"},p={unversionedId:"router",id:"router",isDocsHomePage:!1,title:"\u8def\u7531\u529f\u80fd",description:"\u672c\u7bc7\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u914d\u7f6e\u8def\u7531\u3001\u5b9e\u73b0\u8def\u7531\u8df3\u8f6c\u548c\u4f20\u53c2\u7b49\u65b9\u6cd5\u3002",source:"@site/docs/router.mdx",slug:"/router",permalink:"/taro/docs/next/router",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/router.mdx",version:"current",sidebar:"docs",previous:{title:"Nerv",permalink:"/taro/docs/next/nerv"},next:{title:"\u9759\u6001\u8d44\u6e90\u5f15\u7528",permalink:"/taro/docs/next/static-reference"}},v=[{value:"\u8def\u7531\u914d\u7f6e",id:"\u8def\u7531\u914d\u7f6e",children:[]},{value:"\u8def\u7531\u8df3\u8f6c",id:"\u8def\u7531\u8df3\u8f6c",children:[{value:"\u8def\u7531\u4f20\u53c2",id:"\u8def\u7531\u4f20\u53c2",children:[]},{value:"\u83b7\u53d6\u8def\u7531\u53c2\u6570",id:"\u83b7\u53d6\u8def\u7531\u53c2\u6570",children:[]}]}],m={rightToc:v};function h(e){var t=e.components,n=Object(a.a)(e,s);return Object(c.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u672c\u7bc7\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u914d\u7f6e\u8def\u7531\u3001\u5b9e\u73b0\u8def\u7531\u8df3\u8f6c\u548c\u4f20\u53c2\u7b49\u65b9\u6cd5\u3002"),Object(c.b)("h2",{id:"\u8def\u7531\u914d\u7f6e"},"\u8def\u7531\u914d\u7f6e"),Object(c.b)("p",null,"Taro \u9075\u5faa\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u8def\u7531\u89c4\u8303\u3002\u53ea\u9700\u8981\u4fee\u6539\u5168\u5c40\u914d\u7f6e\u7684 ",Object(c.b)("a",{parentName:"p",href:"app-config#pages"},"pages")," \u5c5e\u6027\uff0c\u914d\u7f6e\u4e3a Taro \u5e94\u7528\u4e2d\u6bcf\u4e2a\u9875\u9762\u7684\u8def\u5f84\u5373\u53ef\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Taro \u6ca1\u6709\u5b9e\u73b0\u6d4f\u89c8\u5668\u7684 history API\uff0c\u56e0\u6b64\u4e0d\u80fd\u4f7f\u7528 react-router\u3001vue-router \u7b49\u8def\u7531\u5e93\u3002")),Object(c.b)("h2",{id:"\u8def\u7531\u8df3\u8f6c"},"\u8def\u7531\u8df3\u8f6c"),Object(c.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7 Taro \u63d0\u4f9b\u7684 API \u6765\u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\u3002\u8def\u7531 API \u7684\u8be6\u7ec6\u7528\u6cd5\u8bf7\u67e5\u770b API \u6587\u6863\u7684 ",Object(c.b)("a",{parentName:"p",href:"./apis/route/navigateTo"},"\u5bfc\u822a")," \u7ae0\u8282\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'},"// \u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\uff0c\u6253\u5f00\u65b0\u9875\u9762\nTaro.navigateTo({\n  url: '/pages/page/path/name'\n})\n\n// \u8df3\u8f6c\u5230\u76ee\u7684\u9875\u9762\uff0c\u5728\u5f53\u524d\u9875\u9762\u6253\u5f00\nTaro.redirectTo({\n  url: '/pages/page/path/name'\n})\n")),Object(c.b)("h3",{id:"\u8def\u7531\u4f20\u53c2"},"\u8def\u7531\u4f20\u53c2"),Object(c.b)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728\u6240\u6709\u8df3\u8f6c\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"url")," \u540e\u9762\u6dfb\u52a0\u67e5\u8be2\u5b57\u7b26\u4e32\u53c2\u6570\u8fdb\u884c\u8df3\u8f6c\u4f20\u53c2\uff0c\u4f8b\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"// \u4f20\u5165\u53c2\u6570 id=2&type=test\nTaro.navigateTo({\n  url: '/pages/page/path/name?id=2&type=test'\n})\n")),Object(c.b)("h3",{id:"\u83b7\u53d6\u8def\u7531\u53c2\u6570"},"\u83b7\u53d6\u8def\u7531\u53c2\u6570"),Object(c.b)("p",null,"\u8df3\u8f6c\u6210\u529f\u540e\uff0c\u5728\u76ee\u6807\u9875\u9762\u7684",Object(c.b)("strong",{parentName:"p"},"\u751f\u547d\u5468\u671f"),"\u65b9\u6cd5\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"Taro.getCurrentInstance().router.params")," \u83b7\u53d6\u8def\u7531\u53c2\u6570\u3002"),Object(c.b)(o.a,{defaultValue:"React",values:[{label:Object(c.b)(i.a,{mdxType:"ReactIcon"}),value:"React"},{label:Object(c.b)(i.b,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'},"import React, { Component } from 'react'\nimport { View } from '@tarojs/components'\n\nclass Index extends Component {\n  // \u5efa\u8bae\u5728\u9875\u9762\u521d\u59cb\u5316\u65f6\u628a getCurrentInstance() \u7684\u7ed3\u679c\u4fdd\u5b58\u4e0b\u6765\u4f9b\u540e\u9762\u4f7f\u7528\uff0c\n  // \u800c\u4e0d\u662f\u9891\u7e41\u5730\u8c03\u7528\u6b64 API\n  $instance = getCurrentInstance()\n\n  componentDidMount () {\n    // \u83b7\u53d6\u8def\u7531\u53c2\u6570\n    console.log($instance.router.params) // \u8f93\u51fa { id: 2, type: 'test' }\n  }\n\n  render () {\n    return (\n      <View className='index' />\n    )\n  }\n}\n\nexport default Index\n"))),Object(c.b)(l.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html",metastring:'title="\u793a\u4f8b\u4ee3\u7801"',title:'"\u793a\u4f8b\u4ee3\u7801"'},"<template>\n  <view className='index' />\n</template>\n\n<script>\nimport Taro from '@tarojs/taro'\n\nexport default {\n  created () {\n    // \u5efa\u8bae\u5728\u9875\u9762\u521d\u59cb\u5316\u65f6\u628a getCurrentInstance() \u7684\u7ed3\u679c\u4fdd\u5b58\u4e0b\u6765\u4f9b\u540e\u9762\u4f7f\u7528\uff0c\n    // \u800c\u4e0d\u662f\u9891\u7e41\u5730\u8c03\u7528\u6b64 API\n    this.$instance = Taro.getCurrentInstance()\n  },\n  mounted () {\n    // \u83b7\u53d6\u8def\u7531\u53c2\u6570\n    console.log(this.$instance.router.params) // \u8f93\u51fa { id: 2, type: 'test' }\n  }\n}\n<\/script>\n")))))}h.isMDXComponent=!0},1800:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(o,".").concat(m)]||p[m]||v[m]||c;return n?a.a.createElement(h,l(l({ref:t},s),{},{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1801:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1802:function(e,t,n){"use strict";var r=n(0),a=n(1803);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1803:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},1804:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1802),o=n(1801),l=n(53),i=n.n(l),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,p=e.defaultValue,v=e.values,m=e.groupId,h=e.className,f=Object(c.a)(),d=f.tabGroupChoices,b=f.setTabGroupChoices,g=Object(r.useState)(p),O=g[0],j=g[1];if(null!=m){var y=d[m];null!=y&&y!==O&&v.some((function(e){return e.value===y}))&&j(y)}var w=function(e){j(e),null!=m&&b(m,e)},z=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},h)},v.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return z.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(z,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(l.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},1805:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1807:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),c=function(){return a.a.createElement("span",{className:"footer_link_connect_wrap"},a.a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u7fa4",a.a.createElement("span",{className:"wechat_qrcode_icon"},a.a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},a.a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),a.a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),a.a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),a.a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),a.a.createElement("span",{className:"footer_link_wechat_img inline"},a.a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))};function o(){return a.a.createElement("span",null,a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.a.createElement("defs",null,a.a.createElement("style",null)),a.a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.a.createElement("span",{style:{color:l}},"Vue"))}var l="#4fc08d";function i(){return a.a.createElement("span",null,a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.a.createElement("defs",null,a.a.createElement("style",null)),a.a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.a.createElement("span",{style:{color:"#61dafb"}},"React"))}}}]);