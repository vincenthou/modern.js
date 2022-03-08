"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7770],{54852:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(49231);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=c(t),d=o,g=s["".concat(u,".").concat(d)]||s[d]||f[d]||i;return t?n.createElement(g,a(a({ref:r},l),{},{components:t})):n.createElement(g,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},48645:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=t(26260),o=t(23157),i=(t(49231),t(54852)),a=["components"],p={sidebar_position:2},u="AfterForged",c={unversionedId:"apis/generator/plugin/hook/afterForged",id:"apis/generator/plugin/hook/afterForged",isDocsHomePage:!1,title:"AfterForged",description:"afterForged \u51fd\u6570\u4e3a\u751f\u6210\u5668\u63d2\u4ef6\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u5176\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u5b89\u88c5\u4f9d\u8d56\u3001Git \u7b49\u64cd\u4f5c\uff0c\u4e13\u4e1a\u4e9b\u64cd\u4f5c\u5c06\u4f1a\u5728 onForged \u51fd\u6570\u6267\u884c\u5b8c\u6210\u540e\u8fdb\u884c\u3002",source:"@site/docs/apis/generator/plugin/hook/afterForged.md",sourceDirName:"apis/generator/plugin/hook",slug:"/apis/generator/plugin/hook/afterForged",permalink:"/en/docs/apis/generator/plugin/hook/afterForged",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apisSidebar",previous:{title:"OnForged",permalink:"/en/docs/apis/generator/plugin/hook/onForged"},next:{title:"\u4ecb\u7ecd",permalink:"/en/docs/apis/generator/plugin/file/introduce"}},l=[{value:"func",id:"func",children:[{value:"api",id:"api",children:[]},{value:"inputData",id:"inputdata",children:[]}]}],f={toc:l};function s(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"afterforged"},"AfterForged"),(0,i.kt)("p",null,"afterForged \u51fd\u6570\u4e3a\u751f\u6210\u5668\u63d2\u4ef6\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u5176\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u5b89\u88c5\u4f9d\u8d56\u3001Git \u7b49\u64cd\u4f5c\uff0c\u4e13\u4e1a\u4e9b\u64cd\u4f5c\u5c06\u4f1a\u5728 onForged \u51fd\u6570\u6267\u884c\u5b8c\u6210\u540e\u8fdb\u884c\u3002"),(0,i.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export type PluginAfterForgedFunc = (\n  api: AfterForgedAPI,\n  inputData: Record<string, unknown>,\n) => Promise<void>;\n\nexport interface IPluginContext {\n  afterForged: (func: PluginAfterForgedFunc) => void;\n  ...\n}\n")),(0,i.kt)("h2",{id:"func"},"func"),(0,i.kt)("p",null,"afterForged \u53c2\u6570\u662f\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u4e3a api \u548c inputData\u3002"),(0,i.kt)("h3",{id:"api"},"api"),(0,i.kt)("p",null,"\u5728 afterForged \u751f\u547d\u5468\u671f\u4e2d\u652f\u6301\u7684\u51fd\u6570\u5217\u8868\uff0c\u5177\u4f53\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/generator/plugin/git/isInGitRepo"},"Git API")," \u548c",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/generator/plugin/npm/install"},"NPM API"),"\u3002"),(0,i.kt)("h3",{id:"inputdata"},"inputData"),(0,i.kt)("p",null,"\u5f53\u524d\u7528\u6237\u8f93\u5165\uff0c\u53ef\u7528\u4e8e\u83b7\u53d6\u7528\u6237\u5f53\u524d\u7684\u8f93\u5165\u4fe1\u606f\u53ca\u914d\u7f6e\u4fe1\u606f\u3002"))}s.isMDXComponent=!0}}]);