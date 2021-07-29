(window.webpackJsonp=window.webpackJsonp||[]).push([[1068],{1136:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(1800)),i=t(1804),c=t(1805),l=["components"],s={title:"\u4f7f\u7528 CSS-in-JS"},u={unversionedId:"css-in-js",id:"version-3.x/css-in-js",isDocsHomePage:!1,title:"\u4f7f\u7528 CSS-in-JS",description:"linaria",source:"@site/versioned_docs/version-3.x/css-in-js.mdx",slug:"/css-in-js",permalink:"/taro/docs/css-in-js",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/css-in-js.mdx",version:"3.x",sidebar:"version-3.x/docs",previous:{title:"\u4f7f\u7528 CSS Modules",permalink:"/taro/docs/css-modules"},next:{title:"\u4f7f\u7528 Vant Weapp",permalink:"/taro/docs/vant"}},p=[{value:"linaria",id:"linaria",children:[]},{value:"Fower",id:"fower",children:[]}],b={rightToc:p};function d(e){var n=e.components,t=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"linaria"},"linaria"),Object(o.b)("p",null,"\u5728 React \u793e\u533a\u6709\u4e00\u4e2a\u8457\u540d\u7684 CSS-in-JS \u89e3\u51b3\u65b9\u6848: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/styled-components/styled-components"},"styled-components"),"\u3002\u4f46\u9057\u61be\u7684\u662f\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"styled-components")," \u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"<style>")," \u6807\u7b7e\u6765\u52a8\u6001\u5730\u63a7\u5236\u6837\u5f0f\uff0c\u5728\u5c0f\u7a0b\u5e8f\u6ca1\u6709\u7c7b\u4f3c\u7684\u65b9\u6848\u3002\u4f46\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",Object(o.b)("a",{parentName:"p",href:"https://github.com/callstack/linaria"},"linaria")," \u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"linaria")," \u4e3b\u8981\u63d0\u4f9b\u4ee5\u4e0b\u7279\u6027\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8fd1\u4f3c\u4e8e ",Object(o.b)("inlineCode",{parentName:"li"},"styled-components")," \u7684 API"),Object(o.b)("li",{parentName:"ul"},"\u5b8c\u6574\u7684 TypeScript \u652f\u6301"),Object(o.b)("li",{parentName:"ul"},"\u96f6\u8fd0\u884c\u65f6")),Object(o.b)("p",null,"\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"linaria")," \u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u9996\u5148\u901a\u8fc7 NPM \u5b89\u88c5\u4f9d\u8d56\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ npm i linaria\n")),Object(o.b)("p",null,"\u5176\u6b21\u914d\u7f6e\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"babel.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},"module.exports = {\n  presets: [\n    ['taro', {\n      framework: 'react',\n      ts: true\n    }],\n    'linaria/babel' // \u6dfb\u52a0\u5230 babel-preset\n  ]\n}\n")),Object(o.b)("p",null,"\u4e4b\u540e\u914d\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},"config/index.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"const config = {\n  mini: {\n    webpackChain(chain, webpack) {\n      // linaria/loader \u9009\u9879\u8be6\u89c1 https://github.com/callstack/linaria/blob/master/docs/BUNDLERS_INTEGRATION.md#webpack\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('linaria/loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    }\n  },\n  h5: {\n    webpackChain(chain, webpack) {\n      chain.module\n        .rule('script')\n        .use('linariaLoader')\n        .loader('linaria/loader')\n        .options({\n          sourceMap: process.env.NODE_ENV !== 'production',\n        })\n    }\n  }\n}\n")),Object(o.b)("p",null,"\u6700\u540e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u65b0\u5efa ",Object(o.b)("inlineCode",{parentName:"p"},"linaria.config.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="linaria.config.js"',title:'"linaria.config.js"'},'// linaria \u914d\u7f6e\u8be6\u89c1 https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md#options\nmodule.exports = {\n  rules: [\n    {\n      action: require("linaria/evaluators").shaker,\n    },\n    {\n      test: /node_modules[\\/\\\\](?!@tarojs)/,\n      action: "ignore"\n    }\n  ]\n}\n')),Object(o.b)("p",null,"\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"),Object(o.b)(i.a,{defaultValue:"JS",values:[{label:"JavaScript",value:"JS"},{label:"TypeScript",value:"TS"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"JS",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { styled } from 'linaria/react'\n\nconst Title = styled(View)`\n  color: ${props => props.color}\n`;\n\nconst Index = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n"))),Object(o.b)(c.a,{value:"TS",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\nimport { View } from '@tarojs/components'\nimport { styled } from 'linaria/react'\n\nconst Title = styled(View)<{ color: string }>`\n  color: ${props => props.color}\n`;\n\nconst Index: React.FC = () => {\n  return <Title color='red'>\n    Hello World!\n  </Title>\n}\n\nexport default Index\n")))),Object(o.b)("h2",{id:"fower"},"Fower"),Object(o.b)("p",null,"\u793e\u533a\u8fd8\u6709\u53e6\u4e00\u4e2a\u65b9\u6848 ",Object(o.b)("strong",{parentName:"p"},"Fower"),"\uff0c",Object(o.b)("a",{parentName:"p",href:"https://fower.vercel.app/zh-cn/docs/use-with-taro"},"\u6587\u6863")))}d.isMDXComponent=!0},1800:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1801:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},1802:function(e,n,t){"use strict";var r=t(0),a=t(1803);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1803:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},1804:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(1802),i=t(1801),c=t(53),l=t.n(c),s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.children,p=e.defaultValue,b=e.values,d=e.groupId,m=e.className,f=Object(o.a)(),j=f.tabGroupChoices,O=f.setTabGroupChoices,v=Object(r.useState)(p),g=v[0],y=v[1];if(null!=d){var h=j[d];null!=h&&h!==g&&b.some((function(e){return e.value===h}))&&y(h)}var N=function(e){y(e),null!=d&&O(d,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===n,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(r.cloneElement)(c.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},1805:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}}}]);