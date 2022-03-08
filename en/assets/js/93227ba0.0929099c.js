"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[967],{54852:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return d}});var n=t(49231);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},f=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),l=p(t),d=o,m=l["".concat(c,".").concat(d)]||l[d]||u[d]||i;return t?n.createElement(m,s(s({ref:r},f),{},{components:t})):n.createElement(m,s({ref:r},f))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=l;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},77654:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return f},default:function(){return l}});var n=t(26260),o=t(23157),i=(t(49231),t(54852)),s=["components"],a={sidebar_position:6,title:"\u4f7f\u7528 BFF \u4ee3\u7406"},c=void 0,p={unversionedId:"guides/features/server-side/bff/bff-proxy",id:"guides/features/server-side/bff/bff-proxy",isDocsHomePage:!1,title:"\u4f7f\u7528 BFF \u4ee3\u7406",description:"Modern.js \u652f\u6301\u901a\u8fc7\u914d\u7f6e\u76f4\u63a5\u751f\u6210 BFF \u4ee3\u7406\u51fd\u6570\uff0c\u65e0\u9700\u7528\u6237\u624b\u52a8\u5199\u7801",source:"@site/docs/guides/features/server-side/bff/bff-proxy.md",sourceDirName:"guides/features/server-side/bff",slug:"/guides/features/server-side/bff/bff-proxy",permalink:"/en/docs/guides/features/server-side/bff/bff-proxy",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u4f7f\u7528 BFF \u4ee3\u7406"},sidebar:"guidesSidebar",previous:{title:"\u8fd0\u884c\u65f6\u6846\u67b6",permalink:"/en/docs/guides/features/server-side/bff/frameworks"},next:{title:"Web Server \u7b80\u8ff0",permalink:"/en/docs/guides/features/server-side/deploy/modern-server/web-server"}},f=[],u={toc:f};function l(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Modern.js \u652f\u6301\u901a\u8fc7\u914d\u7f6e\u76f4\u63a5\u751f\u6210 BFF \u4ee3\u7406\u51fd\u6570\uff0c\u65e0\u9700\u7528\u6237\u624b\u52a8\u5199\u7801"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u6587\u4ef6\u4e2d\u7f16\u5199\u4ee5\u4e0b BFF \u4ee3\u7406\u914d\u7f6e\uff0c\u4f1a\u5c06\u53d1\u9001\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8080/api/v1/topics")," \u7684\u8bf7\u6c42\u4ee3\u7406\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"https://cnodejs.org/api/v1/topics"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=modern.config.js",title:"modern.config.js"},"module.exports = {\n  bff: {\n    proxy: {\n      '/api/v1/topics': 'https://cnodejs.org',\n    },\n  },\n};\n")),(0,i.kt)("p",null,"\u5177\u4f53 API \u8bf7\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/config/bff/proxy"},"BFF \u4ee3\u7406"),"\uff0c\u66f4\u591a Modern.js \u4ee3\u7406\u7684\u80fd\u529b\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/usages/debug/proxy-and-mock"},"\u8c03\u8bd5\u4ee3\u7406"),"\u3002"))}l.isMDXComponent=!0}}]);