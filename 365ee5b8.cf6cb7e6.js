(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{1800:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},s),{},{components:n})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1801:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1802:function(e,t,n){"use strict";var r=n(0),a=n(1803);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1803:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},1804:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1802),c=n(1801),o=n(53),l=n.n(o),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.children,p=e.defaultValue,u=e.values,m=e.groupId,d=e.className,f=Object(i.a)(),O=f.tabGroupChoices,v=f.setTabGroupChoices,j=Object(r.useState)(p),w=j[0],h=j[1];if(null!=m){var y=O[m];null!=y&&y!==w&&u.some((function(e){return e.value===y}))&&h(y)}var g=function(e){h(e),null!=m&&v(m,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(r.cloneElement)(o.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},o.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},1805:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},448:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),i=(n(0),n(1800)),c=n(1804),o=n(1805),l=["components"],s={title:"SwiperItem",sidebar_label:"SwiperItem"},b={unversionedId:"components/viewContainer/swiper-item",id:"version-3.x/components/viewContainer/swiper-item",isDocsHomePage:!1,title:"SwiperItem",description:"\u4ec5\u53ef\u653e\u7f6e\u5728 swiper \u7ec4\u4ef6\u4e2d\uff0c\u5bbd\u9ad8\u81ea\u52a8\u8bbe\u7f6e\u4e3a100%",source:"@site/versioned_docs/version-3.x/components/viewContainer/swiper-item.md",slug:"/components/viewContainer/swiper-item",permalink:"/taro/docs/components/viewContainer/swiper-item",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/swiper-item.md",version:"3.x",sidebar_label:"SwiperItem",sidebar:"version-3.x/components",previous:{title:"Swiper",permalink:"/taro/docs/components/viewContainer/swiper"},next:{title:"MovableArea",permalink:"/taro/docs/components/viewContainer/movable-area"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"SwiperItemProps",id:"swiperitemprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[]}],u={rightToc:p};function m(e){var t=e.components,n=Object(a.a)(e,l);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4ec5\u53ef\u653e\u7f6e\u5728 swiper \u7ec4\u4ef6\u4e2d\uff0c\u5bbd\u9ad8\u81ea\u52a8\u8bbe\u7f6e\u4e3a100%"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html"},"\u53c2\u8003\u6587\u6863"))),Object(i.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<SwiperItemProps>\n")),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)(c.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"React",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  render () {\n    return (\n      <Swiper\n        className='test-h'\n        indicatorColor='#999'\n        indicatorActiveColor='#333'\n        vertical\n        circular\n        indicatorDots\n        autoplay>\n        <SwiperItem>\n          <View className='demo-text-1'>1</View>\n        </SwiperItem>\n        <SwiperItem>\n          <View className='demo-text-2'>2</View>\n        </SwiperItem>\n        <SwiperItem>\n          <View className='demo-text-3'>3</View>\n        </SwiperItem>\n      </Swiper>\n    )\n  }\n}\n"))),Object(i.b)(o.a,{value:"Vue",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},"<template>\n  <swiper\n    class='test-h'\n    indicator-color='#999'\n    indicator-active-color='#333'\n    :vertical=\"true\"\n    :circular=\"true\"\n    :indicator-dots=\"true\"\n    :autoplay=\"true\"\n  >\n    <swiper-item>\n      <view class='demo-text-1'>1</view>\n    </swiper-item>\n    <swiper-item>\n      <view class='demo-text-2'>2</view>\n    </swiper-item>\n    <swiper-item>\n      <view class='demo-text-3'>3</view>\n    </swiper-item>\n  </swiper>\n</template>\n")))),Object(i.b)("h2",{id:"swiperitemprops"},"SwiperItemProps"),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"\u53c2\u6570"),Object(i.b)("th",null,"\u7c7b\u578b"),Object(i.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(i.b)("th",null,"\u8bf4\u660e"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"itemId"),Object(i.b)("td",null,Object(i.b)("code",null,"string")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u8be5 swiper-item \u7684\u6807\u8bc6\u7b26")))),Object(i.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"API"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"center"},"H5"),Object(i.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"SwiperItemProps.itemId"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),Object(i.b)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4e0d\u8981\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"SwiperItem")," \u8bbe\u7f6e ",Object(i.b)("strong",{parentName:"li"},"style")," \u5c5e\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7 class \u8bbe\u7f6e\u6837\u5f0f\u3002",Object(i.b)("a",{parentName:"li",href:"https://github.com/NervJS/taro/issues/7147"},"7147"))))}m.isMDXComponent=!0}}]);