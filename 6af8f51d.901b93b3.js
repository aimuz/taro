(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{1800:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var i=n(0),r=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,b=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),u=s(n),O=i,p=u["".concat(b,".").concat(O)]||u[O]||d[O]||l;return n?r.a.createElement(p,c(c({ref:t},o),{},{components:n})):r.a.createElement(p,c({ref:t},o))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,b=new Array(l);b[0]=O;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,b[1]=c;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},802:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(7),l=(n(0),n(1800)),b=["components"],c={title:"Taro.setWifiList(option)",sidebar_label:"setWifiList"},a={unversionedId:"apis/device/wifi/setWifiList",id:"version-3.x/apis/device/wifi/setWifiList",isDocsHomePage:!1,title:"Taro.setWifiList(option)",description:"\u8bbe\u7f6e wifiList \u4e2d AP \u7684\u76f8\u5173\u4fe1\u606f\u3002\u5728 onGetWifiList \u56de\u8c03\u540e\u8c03\u7528\uff0ciOS\u7279\u6709\u63a5\u53e3\u3002",source:"@site/versioned_docs/version-3.x/apis/device/wifi/setWifiList.md",slug:"/apis/device/wifi/setWifiList",permalink:"/taro/docs/apis/device/wifi/setWifiList",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/wifi/setWifiList.md",version:"3.x",sidebar_label:"setWifiList",sidebar:"version-3.x/API",previous:{title:"Taro.startWifi(option)",permalink:"/taro/docs/apis/device/wifi/startWifi"},next:{title:"Taro.onWifiConnected(callback)",permalink:"/taro/docs/apis/device/wifi/onWifiConnected"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"WifiData",id:"wifidata",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],s={rightToc:o};function u(e){var t=e.components,n=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"p"},"wifiList")," \u4e2d AP \u7684\u76f8\u5173\u4fe1\u606f\u3002\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"onGetWifiList")," \u56de\u8c03\u540e\u8c03\u7528\uff0c",Object(l.b)("strong",{parentName:"p"},"iOS\u7279\u6709\u63a5\u53e3"),"\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8be5\u63a5\u53e3\u53ea\u80fd\u5728 ",Object(l.b)("inlineCode",{parentName:"li"},"onGetWifiList")," \u56de\u8c03\u4e4b\u540e\u624d\u80fd\u8c03\u7528\u3002"),Object(l.b)("li",{parentName:"ul"},"\u6b64\u65f6\u5ba2\u6237\u7aef\u4f1a\u6302\u8d77\uff0c\u7b49\u5f85\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e Wi-Fi \u4fe1\u606f\uff0c\u8bf7\u52a1\u5fc5\u5c3d\u5feb\u8c03\u7528\u8be5\u63a5\u53e3\uff0c\u82e5\u65e0\u6570\u636e\u8bf7\u4f20\u5165\u4e00\u4e2a\u7a7a\u6570\u7ec4\u3002"),Object(l.b)("li",{parentName:"ul"},"\u6709\u53ef\u80fd\u968f\u7740\u5468\u8fb9 Wi-Fi \u5217\u8868\u7684\u5237\u65b0\uff0c\u5355\u4e2a\u6d41\u7a0b\u5185\u6536\u5230\u591a\u6b21\u5e26\u6709\u5b58\u5728\u91cd\u590d\u7684 Wi-Fi \u5217\u8868\u7684\u56de\u8c03\u3002")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.setWifiList.html"},"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<WifiError>\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"wifiList"),Object(l.b)("td",null,Object(l.b)("code",null,"WifiData[]")),Object(l.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(l.b)("td",null,"\u63d0\u4f9b\u9884\u8bbe\u7684 Wi-Fi \u4fe1\u606f\u5217\u8868")),Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: WifiError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: WifiError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: WifiError) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h3",{id:"wifidata"},"WifiData"),Object(l.b)("p",null,"\u63d0\u4f9b\u9884\u8bbe\u7684 Wi-Fi \u4fe1\u606f\u5217\u8868"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"BSSID"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"Wi-Fi \u7684 BSSID")),Object(l.b)("tr",null,Object(l.b)("td",null,"SSID"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"Wi-Fi \u7684 SSID")),Object(l.b)("tr",null,Object(l.b)("td",null,"password"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"Wi-Fi \u8bbe\u5907\u5bc6\u7801")))),Object(l.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.onGetWifiList(function (res) {\n  if (res.wifiList.length) {\n    Taro.setWifiList({\n      wifiList: [{\n        SSID: res.wifiList[0].SSID,\n        BSSID: res.wifiList[0].BSSID,\n        password: '123456'\n      }]\n    })\n  } else {\n    Taro.setWifiList({\n      wifiList: []\n    })\n  }\n})\nTaro.getWifiList()\n")),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"center"},"API"),Object(l.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",{parentName:"tr",align:"center"},"H5"),Object(l.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"Taro.setWifiList"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);