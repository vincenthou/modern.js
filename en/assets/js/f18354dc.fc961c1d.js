"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9220],{54852:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65113:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(26260),o=n(23157),a=(n(49231),n(54852)),i=["components"],c={title:"\u6837\u677f\u6587\u4ef6"},l=void 0,u={unversionedId:"guides/tutorials/c02-generator-and-studio/2.2-boilerplates",id:"guides/tutorials/c02-generator-and-studio/2.2-boilerplates",isDocsHomePage:!1,title:"\u6837\u677f\u6587\u4ef6",description:"\u751f\u6210\u7684\u9879\u76ee\u7ed3\u6784\uff1a",source:"@site/docs/guides/tutorials/c02-generator-and-studio/2.2-boilerplates.md",sourceDirName:"guides/tutorials/c02-generator-and-studio",slug:"/guides/tutorials/c02-generator-and-studio/2.2-boilerplates",permalink:"/en/docs/guides/tutorials/c02-generator-and-studio/2.2-boilerplates",tags:[],version:"current",frontMatter:{title:"\u6837\u677f\u6587\u4ef6"},sidebar:"guidesSidebar",previous:{title:"\u200b\u7528\u547d\u4ee4\u884c\u5de5\u5177\u521b\u5efa\u9879\u76ee\u200b\u200b",permalink:"/en/docs/guides/tutorials/c02-generator-and-studio/2.1-generator"},next:{title:"\u200b\u914d\u7f6e\u9879\u76ee",permalink:"/en/docs/guides/tutorials/c02-generator-and-studio/2.3-configuration"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u751f\u6210\u7684\u9879\u76ee\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 .vscode/\n\u251c\u2500\u2500 src/\n\u2502\xa0\xa0 \u251c\u2500\u2500 .eslintrc.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.css\n\u2502\xa0\xa0 \u2514\u2500\u2500 App.jsx\n\u251c\u2500\u2500 .editorconfig\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .npmrc\n\u251c\u2500\u2500 .nvmrc\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 pnpm-lock.yaml\n")),(0,a.kt)("p",null,"\u548c\u4e0a\u4e00\u7ae0\u8282\u624b\u52a8\u521b\u5efa\u51fa\u6765\u7684\u9879\u76ee\u4e00\u6837\uff0c\u4ecd\u7136\u662f\u96f6\u914d\u7f6e\u3001\u6781\u7b80\u548c\u8f7b\u91cf\u7684\uff0c\u4f46\u529f\u80fd\u66f4\u5b8c\u6574\uff0c\u6700\u4f73\u5b9e\u8df5\u5f00\u7bb1\u5373\u7528\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u4e86 IDE \u76f8\u5173\u652f\u6301\uff0c\u4e0b\u4e00\u8282\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u96c6\u6210\u4e86 Modern.js Lint \u89c4\u5219\u96c6\uff0c\u6309\u7167\u6700\u4f73\u5b9e\u8df5\u542f\u7528\uff0c\u7701\u53bb\u5f88\u591a\u914d\u7f6e\u5de5\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u58f0\u660e\u4e86 Node.js \u7248\u672c\u3002\u5982\u679c\u4f60\u6309\u7167",(0,a.kt)("a",{parentName:"li",href:"../c01-getting-started/1.1-prerequisites"},"\u4e0a\u4e00\u8282\u7684\u63a8\u8350"),"\uff0c\u5728\u7cfb\u7edf\u91cc\u542f\u7528\u4e86",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#automatically-call-nvm-use"},"\u81ea\u52a8\u5207\u6362 node \u7248\u672c\u7684\u811a\u672c"),"\uff0c\u8fdb\u5165\u9879\u76ee\u76ee\u5f55\u65f6\uff0cnvm \u4f1a\u81ea\u52a8\u5b89\u88c5\u548c\u5207\u6362\u5230\u9879\u76ee\u58f0\u660e\u7684 Node.js \u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5305\u542b Modern.js \u6846\u67b6\u7684\u5168\u5957\u547d\u4ee4\u3002")))}d.isMDXComponent=!0}}]);