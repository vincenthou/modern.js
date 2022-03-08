"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1477],{54852:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(49231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(n),m=o,d=l["".concat(s,".").concat(m)]||l[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},14314:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var r=n(26260),o=n(23157),a=(n(49231),n(54852)),i=["components"],p={title:"api/_app.[tj]s",sidebar_position:3},s=void 0,c={unversionedId:"apis/hooks/mwa/api/functions/app",id:"apis/hooks/mwa/api/functions/app",isDocsHomePage:!1,title:"api/_app.[tj]s",description:"\u5728 Modern.js \u51fd\u6570\u5199\u6cd5\u4e0b\uff0c\u8be5\u6587\u4ef6\u53ef\u4ee5\u7ed9 MWA \u5e94\u7528\u670d\u52a1\u7aef\u6dfb\u52a0\u524d\u7f6e\u4e2d\u95f4\u4ef6\uff1b\u8be5\u4e2d\u95f4\u4ef6\u7684\u6267\u884c\u4f1a\u5728 BFF \u51fd\u6570\u4e4b\u524d\u6267\u884c\u3002",source:"@site/docs/apis/hooks/mwa/api/functions/app.md",sourceDirName:"apis/hooks/mwa/api/functions",slug:"/apis/hooks/mwa/api/functions/app",permalink:"/docs/apis/hooks/mwa/api/functions/app",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"api/_app.[tj]s",sidebar_position:3},sidebar:"apisSidebar",previous:{title:"api/**/_*.[tj]s,api/**/_*/**",permalink:"/docs/apis/hooks/mwa/api/functions/common"},next:{title:"api/lambda/*.[tj]s",permalink:"/docs/apis/hooks/mwa/api/framework/lambda"}},u=[],f={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 Modern.js \u51fd\u6570\u5199\u6cd5\u4e0b\uff0c\u8be5\u6587\u4ef6\u53ef\u4ee5\u7ed9 MWA \u5e94\u7528\u670d\u52a1\u7aef\u6dfb\u52a0\u524d\u7f6e\u4e2d\u95f4\u4ef6\uff1b\u8be5\u4e2d\u95f4\u4ef6\u7684\u6267\u884c\u4f1a\u5728",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/hooks/mwa/api/functions/api"}," BFF \u51fd\u6570"),"\u4e4b\u524d\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u76ee\u524d Modern.js \u652f\u6301\u56db\u79cd\u4e0d\u540c\u7684\u6846\u67b6\uff0cexpress\uff0ckoa\uff0cnest\uff0cegg \u7b49\uff0c\u4e0d\u540c\u7684\u6846\u67b6\u9700\u8981\u6dfb\u52a0\u76f8\u5e94\u6846\u67b6\u7684\u4e2d\u95f4\u4ef6\u3002\u5177\u4f53\u793a\u4f8b\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/runtime/bff-server/hook"},"hook")))}l.isMDXComponent=!0}}]);