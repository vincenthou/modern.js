"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[5351],{57522:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(29901);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(18249),i=(n(29901),n(57522));const a={sidebar_position:2},s="\u4e3b\u8fdb\u7a0b\u6ce8\u518c\u670d\u52a1",o={unversionedId:"guides/features/electron/ipc/regist-services/main",id:"guides/features/electron/ipc/regist-services/main",title:"\u4e3b\u8fdb\u7a0b\u6ce8\u518c\u670d\u52a1",description:"\u5728\u524d\u9762\u6709\u8fd9\u4e48\u4e00\u6bb5\u4f8b\u5b50\uff1a",source:"@site/docs/guides/features/electron/ipc/regist-services/main.md",sourceDirName:"guides/features/electron/ipc/regist-services",slug:"/guides/features/electron/ipc/regist-services/main",permalink:"/docs/guides/features/electron/ipc/regist-services/main",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/guides/features/electron/ipc/regist-services/"},next:{title:"\u6e32\u67d3\u8fdb\u7a0b\u6ce8\u518c\u670d\u52a1",permalink:"/docs/guides/features/electron/ipc/regist-services/render"}},c={},l=[{value:"\u6ce8\u518c\u670d\u52a1",id:"\u6ce8\u518c\u670d\u52a1",level:2},{value:"\u6e32\u67d3\u8fdb\u7a0b\u4e2d\u8bbf\u95ee",id:"\u6e32\u67d3\u8fdb\u7a0b\u4e2d\u8bbf\u95ee",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e3b\u8fdb\u7a0b\u6ce8\u518c\u670d\u52a1"},"\u4e3b\u8fdb\u7a0b\u6ce8\u518c\u670d\u52a1"),(0,i.kt)("p",null,"\u5728\u524d\u9762\u6709\u8fd9\u4e48\u4e00\u6bb5\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="electron/main.ts"',title:'"electron/main.ts"'},"// \u4e3b\u8fdb\u7a0b\nimport * as services from './services';\nconst runtime = new Runtime({\n  windowsConfig,\n  mainServices: services,\n});\n")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u5c31\u5b8c\u6210\u4e86\u4e3b\u8fdb\u7a0b\u670d\u52a1\u6ce8\u518c\u8fc7\u7a0b\u3002"),(0,i.kt)("h2",{id:"\u6ce8\u518c\u670d\u52a1"},"\u6ce8\u518c\u670d\u52a1"),(0,i.kt)("p",null,"\u4e0a\u8ff0\u793a\u4f8b\uff0c\u5b8c\u6210\u4e86\u5728\u4e3b\u8fdb\u7a0b\u4e2d\u7684\u670d\u52a1\u6ce8\u518c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06\u6240\u6709\u671f\u671b\u4f5c\u4e3a\u670d\u52a1\u63d0\u4f9b\u51fa\u53bb\u7684\uff1a\u51fd\u6570\u3001\u5bf9\u8c61\u3001\u53d8\u91cf\u7b49\u5168\u90e8\u7edf\u4e00\u5bfc\u51fa\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='services/index.ts'",title:"'services/index.ts'"},"export const openWindow = (winName: string) => {\n  console.log('open window by name', winName);\n};\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/features/electron/ipc/regist-services/index"},"\u3010\u670d\u52a1\u5b9a\u4e49\u4e0e\u5bfc\u51fa\u3011"),"\u3002"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u5b9e\u4f8b\u5316 ",(0,i.kt)("inlineCode",{parentName:"li"},"Runtime")," \u65f6\u5019\uff0c\u4f20\u9012\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"li"},"Runtime")," \u5b8c\u6210\u670d\u52a1\u6ce8\u518c\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='electron/main.ts'",title:"'electron/main.ts'"},"import * as services from './services';\n\nconst runtime = new Runtime({\n  windowsConfig,\n  mainServices: services,\n});\n")),(0,i.kt)("h2",{id:"\u6e32\u67d3\u8fdb\u7a0b\u4e2d\u8bbf\u95ee"},"\u6e32\u67d3\u8fdb\u7a0b\u4e2d\u8bbf\u95ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"',title:'"xx/xx.tsx\uff08\u6e32\u67d3\u8fdb\u7a0b\uff09"'},"import { callMain } from '@modern-js/runtime/electron-render';\n...\ncallMain('openWindow', 'demo')  // \u6253\u5f00 demo \u7a97\u53e3\n")))}m.isMDXComponent=!0}}]);