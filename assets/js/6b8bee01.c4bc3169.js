"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[253],{54852:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(49231);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19145:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(26260),i=n(23157),o=(n(49231),n(54852)),a=["components"],s={title:"\u73af\u5883\u51c6\u5907"},p=void 0,u={unversionedId:"guides/tutorials/c01-getting-started/1.1-prerequisites",id:"guides/tutorials/c01-getting-started/1.1-prerequisites",isDocsHomePage:!1,title:"\u73af\u5883\u51c6\u5907",description:"\u4ece\u672c\u7ae0\u8282\u5f00\u59cb\uff0c\u6211\u4eec\u5c06\u8fdb\u5165\u5b9e\u6218\u6559\u7a0b\u90e8\u5206\u3002",source:"@site/docs/guides/tutorials/c01-getting-started/1.1-prerequisites.md",sourceDirName:"guides/tutorials/c01-getting-started",slug:"/guides/tutorials/c01-getting-started/1.1-prerequisites",permalink:"/docs/guides/tutorials/c01-getting-started/1.1-prerequisites",tags:[],version:"current",frontMatter:{title:"\u73af\u5883\u51c6\u5907"},sidebar:"guidesSidebar",previous:{title:"\u6982\u89c8",permalink:"/docs/guides/tutorials/overview"},next:{title:"\u521b\u5efa\u6700\u7b80\u5355\u7684 MWA",permalink:"/docs/guides/tutorials/c01-getting-started/1.2-minimal-mwa"}},l=[{value:"1. Node.js",id:"1-nodejs",children:[]},{value:"2. pnpm",id:"2-pnpm",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ece\u672c\u7ae0\u8282\u5f00\u59cb\uff0c\u6211\u4eec\u5c06\u8fdb\u5165\u5b9e\u6218\u6559\u7a0b\u90e8\u5206\u3002"),(0,o.kt)("p",null,"\u5728\u5b9e\u6218\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u4ece\u73af\u5883\u51c6\u5907\u5f00\u59cb\uff0c\u4ece\u7b80\u5355\u5230\u590d\u6742\uff0c\u4e00\u6b65\u4e00\u6b65\u642d\u5efa\u4e00\u4e2a\u771f\u5b9e\u7684\u9879\u76ee\u3002"),(0,o.kt)("p",null,"\u57fa\u4e8e Modern.js \u6846\u67b6\u7684\u9879\u76ee\uff0c\u81ea\u5e26\u5168\u5957\u5de5\u7a0b\u73af\u5883\u548c\u5de5\u7a0b\u80fd\u529b\uff0c\u662f ",(0,o.kt)("strong",{parentName:"p"},"\u81ea\u5305\u542b"),"\uff08self-contained\uff09\u7684\uff0c\u5bf9\u4ed3\u5e93\u76ee\u5f55\u4e4b\u5916\u7684\u73af\u5883\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u4f9d\u8d56\uff0c\u53ea\u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u5c11\u6570\u51e0\u4e2a\u6700\u57fa\u672c\u7684\u5de5\u5177\u3002"),(0,o.kt)("h2",{id:"1-nodejs"},"1. Node.js"),(0,o.kt)("p",null,"\u9700\u8981 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/Release"},"Node.js LTS"),"\uff0c\u5e76\u786e\u4fdd Node \u7248\u672c\u5927\u4e8e\u7b49\u4e8e 14.17.6\u3002"),(0,o.kt)("p",null,"Modern.js \u63a8\u8350\u5728\u5f00\u53d1\u73af\u5883\u91cc\u5148\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#install--update-script"},"nvm"),"\uff0c\u5728 shell \u91cc\u96c6\u6210",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#deeper-shell-integration"},"\u81ea\u52a8\u5207\u6362 node \u7248\u672c\u7684\u811a\u672c"),"\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u53ea\u8981\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b\u6709\u5185\u5bb9\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"lts/fermium")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"lts/erbium")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".nvmrc")," \u6587\u4ef6\uff0c\u8fdb\u5165\u8fd9\u4e2a\u4ed3\u5e93\u65f6\u5c31\u4f1a\u81ea\u52a8\u5b89\u88c5\u6216\u5207\u6362\u5230\u6b63\u786e\u7684 Node.js \u7248\u672c\u3002"),(0,o.kt)("h2",{id:"2-pnpm"},"2. pnpm"),(0,o.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://pnpm.io/installation"},"pnpm")," \u6765\u7ba1\u7406\u9879\u76ee\u4f9d\u8d56\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g pnpm\n")))}d.isMDXComponent=!0}}]);