"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[50267],{57522:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(29901);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(t),f=r,u=c["".concat(m,".").concat(f)]||c[f]||d[f]||i;return t?a.createElement(u,o(o({ref:n},s),{},{components:t})):a.createElement(u,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=t(18249),r=(t(29901),t(57522));const i={sidebar_position:12,title:"defineConfig"},o=void 0,p={unversionedId:"apis/app/runtime/app/define-config",id:"apis/app/runtime/app/define-config",title:"defineConfig",description:"\u7528\u4e8e\u52a8\u6001\u914d\u7f6e\u5e94\u7528\u3002",source:"@site/docs/apis/app/runtime/app/define-config.md",sourceDirName:"apis/app/runtime/app",slug:"/apis/app/runtime/app/define-config",permalink:"/docs/apis/app/runtime/app/define-config",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"defineConfig"},sidebar:"apisAppSidebar",previous:{title:"createApp",permalink:"/docs/apis/app/runtime/app/create-app"},next:{title:"useContext",permalink:"/docs/apis/app/runtime/bff-server/use-context"}},m={},l=[{value:"API",id:"api",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:l};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7528\u4e8e\u52a8\u6001\u914d\u7f6e\u5e94\u7528\u3002"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } from '@modern-js/runtime';\n")))),(0,r.kt)("p",null,"Runtime \u914d\u7f6e\u901a\u5e38\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," \u7a7a\u95f4\u4e0b\u914d\u7f6e\uff0c\u5982 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/runtime/router"},"runtime.router")," \u7b49\u3002\n\u4f46\u5982\u679c\u4e00\u4e9b\u914d\u7f6e\u53c2\u6570\u662f\u8fd0\u884c\u65f6\u83b7\u53d6\u7684\uff0c\u6216\u8005\u914d\u7f6e\u53c2\u6570\u662f\u6765\u81ea\u4e8e\u6e90\u7801\u4e2d\u7684\u4e00\u4e2a\u6a21\u5757\uff08\u5982\u7ec4\u4ef6\uff09\uff0c\u5f00\u53d1\u8005\u5c31\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"defineConfig")," API \u8fdb\u884c\u8fd0\u884c\u65f6\u7684\u914d\u7f6e\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"@modern-js/app-tools")," \u62e5\u6709\u540c\u540d API \uff0c\u7528\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u65f6\u914d\u7f6e\u5b9a\u4e49"),"\uff0c\u8bf7\u5f00\u53d1\u8005\u52a0\u4ee5\u533a\u5206\u3002"))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"defineConfig(Component, config): any")),(0,r.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Component\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"React.ComponentType<any>"),"\uff0cApp \u6839\u7ec4\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"config\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, any>"),"\uff0c\u8fd0\u884c\u65f6\u7684\u914d\u7f6e\u3002")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"function App () {\n  ...\n}\n\ndefineConfig(App, {\n  router: {\n    supportHtml5History: false\n  }\n})\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"defineConfig")," \u91cc\u53ef\u914d\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/runtime/state"},"runtime.state"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/runtime/router"},"runtime.router")," \u7b49\u8fd0\u884c\u65f6\u914d\u7f6e\u3002\u5b57\u6bb5\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," \u914d\u7f6e\u5b57\u6bb5\u4e00\u81f4\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"defineConfig")," \u5728\u914d\u7f6e\u67d0\u4e2a\u5c5e\u6027\u4e4b\u524d\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"router"),"\uff0c\u9700\u8981\u786e\u4fdd ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u5df2\u7ecf\u914d\u7f6e\u5f00\u542f\u4e86\u8be5\u529f\u80fd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"defineConfig")," \u4f20\u5165\u7684\u914d\u7f6e\u4f1a\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u91cd\u7684\u914d\u7f6e\u6d45 merge\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"router")," \u4e3a\u4f8b\uff0c\u6700\u7ec8\u5e94\u7528\u7684\u914d\u7f6e\u5982\u4e0b\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  // \u6765\u81ea `modern.config.js` \u914d\u7f6e\n  ...runtime.router\n  // \u6765\u81ea `defineConfig` \u914d\u7f6e\n  ...config.router\n}\n")))}d.isMDXComponent=!0}}]);