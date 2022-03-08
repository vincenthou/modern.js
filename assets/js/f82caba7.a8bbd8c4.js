"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9451],{54852:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(49231);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92048:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=t(26260),i=t(23157),r=(t(49231),t(54852)),s=["components"],o={sidebar_position:2},c="Tailwind CSS",l={unversionedId:"guides/usages/css/tailwindcss",id:"guides/usages/css/tailwindcss",isDocsHomePage:!1,title:"Tailwind CSS",description:"Tailwind CSS \u662f\u4e00\u4e2a\u4ee5 Utility Class \u4e3a\u57fa\u7840\u7684 CSS \u6846\u67b6\u548c\u8bbe\u8ba1\u7cfb\u7edf\uff0c\u53ef\u4ee5\u5feb\u901f\u5730\u4e3a\u7ec4\u4ef6\u6dfb\u52a0\u5e38\u7528\u6837\u5f0f\uff0c\u540c\u65f6\u652f\u6301\u4e3b\u9898\u6837\u5f0f\u7684\u7075\u6d3b\u6269\u5c55\u3002\u5728 Modern.js \u4e2d\u4f7f\u7528 Tailwind CSS\uff0c\u53ea\u9700\u8981\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c pnpm run new \u5e76\u5f00\u542f\u3002",source:"@site/docs/guides/usages/css/tailwindcss.md",sourceDirName:"guides/usages/css",slug:"/guides/usages/css/tailwindcss",permalink:"/docs/guides/usages/css/tailwindcss",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"CSS-in-JS",permalink:"/docs/guides/usages/css/css-in-js"},next:{title:"PostCSS",permalink:"/docs/guides/usages/css/postcss"}},p=[],d={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tailwind-css"},"Tailwind CSS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS")," \u662f\u4e00\u4e2a\u4ee5 Utility Class \u4e3a\u57fa\u7840\u7684 CSS \u6846\u67b6\u548c\u8bbe\u8ba1\u7cfb\u7edf\uff0c\u53ef\u4ee5\u5feb\u901f\u5730\u4e3a\u7ec4\u4ef6\u6dfb\u52a0\u5e38\u7528\u6837\u5f0f\uff0c\u540c\u65f6\u652f\u6301\u4e3b\u9898\u6837\u5f0f\u7684\u7075\u6d3b\u6269\u5c55\u3002\u5728 Modern.js \u4e2d\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),"\uff0c\u53ea\u9700\u8981\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run new")," \u5e76\u5f00\u542f\u3002"),(0,r.kt)("p",null,"\u6309\u7167\u5982\u4e0b\u8fdb\u884c\u9009\u62e9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c: \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd: \u542f\u7528 Tailwind CSS \u652f\u6301\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u65f6\u5728\u5165\u53e3\u7684\u6839\u7ec4\u4ef6(\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.jsx"),")\u6dfb\u52a0\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\n")),(0,r.kt)("p",null,"\u7136\u540e\u5373\u53ef\u5728\u5404\u4e2a\u7ec4\u4ef6\u4e2d\u4f7f\u7528 Tailwind CSS \u63d0\u4f9b\u7684 Utility Class \u4e86\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6839\u636e\u4e0d\u540c\u9700\u6c42\uff0c\u53ef\u4ee5\u9009\u62e9\u6027\u7684\u5bfc\u5165 Tailwind CSS \u63d0\u4f9b\u7684 CSS \u6587\u4ef6\u3002\u7531\u4e8e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"@taiwind")," \u4e0e\u76f4\u63a5\u5bfc\u5165 CSS \u6587\u4ef6\u7684\u4f5c\u7528\u7b49\u4ef7\uff0c\u56e0\u6b64\u5173\u4e8e Tailwind CSS \u63d0\u4f9b\u7684 CSS \u6587\u4ef6\u7684\u7528\u9014\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/functions-and-directives#tailwind"},(0,r.kt)("inlineCode",{parentName:"a"},"@tailwind")," \u7684\u4f7f\u7528")," \u6587\u6863\u4e2d\u6ce8\u91ca\u91cc\u7684\u5185\u5bb9\u3002"))),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u81ea\u5b9a\u4e49 Tailwind CSS \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/theme"},"\btheme")," \u914d\u7f6e\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5728\u914d\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/config/source/design-system"},(0,r.kt)("inlineCode",{parentName:"a"},"source.designSystem"))," \u4e2d\u4fee\u6539\uff0c\u4f8b\u5982\uff0c\u989c\u8272\u4e3b\u9898\u4e2d\u589e\u52a0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"primary"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="package.json"',title:'"package.json"'},'{\n  "modernConfig": {\n    "source": {\n      "designSystem": {\n        "extend": {\n          "colors": {\n            "primary": "#5c6ac4"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u5bf9 Tailwind CSS \u505a ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/theme"},"theme")," \u4ee5\u5916\u7684\u5176\u4ed6\u7279\u6b8a\u914d\u7f6e\u65f6\uff0c\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/config/tools/tailwindcss"},(0,r.kt)("inlineCode",{parentName:"a"},"tools.tailwindcss"))," \u4e2d\u914d\u7f6e\uff0c\u4f8b\u5982\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"variants"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="package.json"',title:'"package.json"'},'{\n  "modernConfig": {\n    "tools": {\n      "tailwindcss": {\n        "variants": {\n          "extend": {\n            "backgroundColor": ["active"]\n          }\n        }\n      }\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);