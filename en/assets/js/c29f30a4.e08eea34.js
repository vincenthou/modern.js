"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3505],{54852:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,g=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return t?r.createElement(g,a(a({ref:n},s),{},{components:t})):r.createElement(g,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},55013:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=t(26260),o=t(23157),i=(t(49231),t(54852)),a=["components"],p={sidebar_position:1},l="install",c={unversionedId:"apis/generator/plugin/npm/install",id:"apis/generator/plugin/npm/install",isDocsHomePage:!1,title:"install",description:"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u5b89\u88c5\u4f9d\u8d56\u3002",source:"@site/docs/apis/generator/plugin/npm/install.md",sourceDirName:"apis/generator/plugin/npm",slug:"/apis/generator/plugin/npm/install",permalink:"/en/docs/apis/generator/plugin/npm/install",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisSidebar",previous:{title:"createSubProject",permalink:"/en/docs/apis/generator/plugin/new/createSubProject"},next:{title:"isInGitRepo",permalink:"/en/docs/apis/generator/plugin/git/isInGitRepo"}},s=[],u={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install"},"install"),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,i.kt)("p",null,"install \u51fd\u6570\u4e2d\u5c06\u6839\u636e packageManager \u7684\u503c\u4f7f\u7528\u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5de5\u5177\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export type AfterForgedAPI = {\n  install: () => Promise<void>;\n  ...\n};\n")))}f.isMDXComponent=!0}}]);