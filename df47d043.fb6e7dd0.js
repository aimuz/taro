(window.webpackJsonp=window.webpackJsonp||[]).push([[1525],{1592:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),c=(n(0),n(1800)),l=n(1804),b=n(1805),o=["components"],i={title:"Text",sidebar_label:"Text"},s={unversionedId:"components/base/text",id:"version-3.x/components/base/text",isDocsHomePage:!1,title:"Text",description:"\u6587\u672c",source:"@site/versioned_docs/version-3.x/components/base/text.md",slug:"/components/base/text",permalink:"/taro/docs/components/base/text",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/base/text.md",version:"3.x",sidebar_label:"Text",sidebar:"version-3.x/components",previous:{title:"Icon",permalink:"/taro/docs/components/base/icon"},next:{title:"Progress",permalink:"/taro/docs/components/base/progress"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"TextProps",id:"textprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TSpace",id:"tspace",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],p={rightToc:u};function d(e){var t=e.components,n=Object(a.a)(e,o);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u6587\u672c"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/text.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<TextProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(l.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(b.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  state = {\n    contents: [],\n    contentsLen: 0\n  }\n\n  add = () => {\n    this.setState(prev => {\n      const cot = prev.contents.slice()\n      cot.push({ text: 'hello world' })\n      return {\n        contents: cot,\n        contentsLen: cot.length\n      }\n    })\n  }\n\n  remove = () => {\n    this.setState(prev => {\n      const cot = prev.contents.slice()\n      cot.pop()\n      return {\n        contents: cot,\n        contentsLen: cot.length\n      }\n    })\n  }\n\n  render () {\n    return (\n      <View className='container'>\n        {this.state.contents.map((item, index) => (\n          <Text key={index}>{item.text}</Text>\n        ))}\n        <Button className='btn-max-w button_style' plain type='default' onClick={this.add}>add line</Button>\n        <Button className='btn-max-w button_style' plain type='default' disabled={this.state.contentsLen ? false : true} onClick={this.remove}>remove line</Button>\n      </View>\n    )\n  }\n}\n"))),Object(c.b)(b.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="container">\n    <view v-for="(item, index) in contents">\n      <text>{{item.text}} line {{index + 1}}</text>\n    </view>\n    <button class="btn-max-w button_style" :plain="true" type="default" @tap="add">add line</button>\n    <button class="btn-max-w button_style" :plain="true" type="default" :disabled="contentsLen ? false : true" @tap="remove">remove line</button>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      contents: [],\n      contentsLen: 0\n    }\n  },\n  methods: {\n    add () {\n      const cot = this.contents.slice()\n      cot.push({ text: \'hello world\' })\n      this.contents = cot\n      this.contentsLen = cot.length\n    },\n\n    remove () {\n      const cot = this.contents.slice()\n      cot.pop()\n      this.contents = cot\n      this.contentsLen = cot.length\n    }\n  }\n}\n<\/script>\n')))),Object(c.b)("h2",{id:"textprops"},"TextProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"selectable"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6587\u672c\u662f\u5426\u53ef\u9009")),Object(c.b)("tr",null,Object(c.b)("td",null,"space"),Object(c.b)("td",null,Object(c.b)("code",null,'"ensp" | "emsp" | "nbsp"')),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u663e\u793a\u8fde\u7eed\u7a7a\u683c")),Object(c.b)("tr",null,Object(c.b)("td",null,"decode"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u89e3\u7801")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"TextProps.selectable"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"TextProps.space"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"TextProps.decode"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})))),Object(c.b)("h3",{id:"tspace"},"TSpace"),Object(c.b)("p",null,"space \u7684\u5408\u6cd5\u503c"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"ensp"),Object(c.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u4e00\u534a\u5927\u5c0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"emsp"),Object(c.b)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u5927\u5c0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"nbsp"),Object(c.b)("td",null,"\u6839\u636e\u5b57\u4f53\u8bbe\u7f6e\u7684\u7a7a\u683c\u5927\u5c0f")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Text"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0},1800:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||c;return n?a.a.createElement(m,b(b({ref:t},i),{},{components:n})):a.a.createElement(m,b({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var i=2;i<c;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1801:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},1802:function(e,t,n){"use strict";var r=n(0),a=n(1803);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1803:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},1804:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1802),l=n(1801),b=n(53),o=n.n(b),i=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,b=e.children,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,O=Object(c.a)(),j=O.tabGroupChoices,f=O.setTabGroupChoices,g=Object(r.useState)(u),h=g[0],v=g[1];if(null!=d){var y=j[d];null!=y&&y!==h&&p.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=d&&f(d,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(r.cloneElement)(b.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},1805:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);