"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[85498],{57522:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,v=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(v,o(o({ref:t},m),{},{components:n})):a.createElement(v,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(18249),r=(n(29901),n(57522));const i={title:"useModuleApp",sidebar_position:6},o=void 0,p={unversionedId:"apis/module/runtime/app/use-module-app",id:"apis/module/runtime/app/use-module-app",title:"useModuleApp",description:"\u8fd4\u56de\u4e00\u4e2a\u81ea\u52a8\u5207\u6362\u5fae\u524d\u7aef\u8def\u7531\u7684\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u6fc0\u6d3b\u7684\u8def\u7531\u662f\u914d\u7f6e\u91cc\u7684 activeWhen\u3002",source:"@site/docs/apis/module/runtime/app/use-module-app.md",sourceDirName:"apis/module/runtime/app",slug:"/apis/module/runtime/app/use-module-app",permalink:"/docs/apis/module/runtime/app/use-module-app",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"useModuleApp",sidebar_position:6},sidebar:"apisModuleSidebar",previous:{title:"PreRender",permalink:"/docs/apis/module/runtime/app/pre-render"},next:{title:"useModuleApps",permalink:"/docs/apis/module/runtime/app/use-module-apps"}},l={},s=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8fd4\u56de\u4e00\u4e2a\u81ea\u52a8\u5207\u6362\u5fae\u524d\u7aef\u8def\u7531\u7684\u7ec4\u4ef6\uff0c\u9ed8\u8ba4\u6fc0\u6d3b\u7684\u8def\u7531\u662f\u914d\u7f6e\u91cc\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"activeWhen"),"\u3002"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useModuleApp } from '@modern-js/runtime';\n")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8be5 API \u5728\u5fae\u524d\u7aef\u4e3b\u5e94\u7528\u4e2d\u4f7f\u7528\uff0c\u9700\u8981\u5148\u5f00\u542f\u5fae\u524d\u7aef\u3002"))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useModuleApp() => React.FC<any>")),(0,r.kt)("p",null,"\u8fd4\u56de\u5b50\u5e94\u7528\u7684 React \u7ec4\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u9700\u8981\u5148\u914d\u7f6e\u5fae\u524d\u7aef\u5b50\u5e94\u7528\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=modern.config.js",title:"modern.config.js"},"defineConfig({\n  runtime: {\n    masterApp: {\n      manifest: {\n        modules: [\n          {\n            name: 'Home',\n            entry: 'http://www.home.com',\n            activeWhen: '/home'\n          },\n          {\n            name: 'Contact',\n            entry: 'http://www.contact.com',\n            activeWhen: '/contact'\n          },\n        ]\n      }\n    }\n  }\n})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=App.tsx",title:"App.tsx"},"import { useModuleApp } from '@modern-js/runtime';\n\nfunction App() {\n  const MApp = useModuleApp();\n\n  return <MApp />;\n}\n")),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"useModuleApp()")," \u83b7\u53d6\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"MApp")," \u7ec4\u4ef6\uff0c\u6e32\u67d3 MApp \u7ec4\u4ef6\uff0c\u5c06\u4f1a\u6839\u636e\u914d\u7f6e\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"activeWhen")," \u4f5c\u4e3a\u6fc0\u6d3b\u8def\u7531\u52a0\u8f7d\u5bf9\u5e94\u7684\u5b50\u5e94\u7528\u3002"))}u.isMDXComponent=!0}}]);