"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[40826,62899],{57522:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(29901);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),d=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=d(t),u=o,v=l["".concat(m,".").concat(u)]||l[u]||c[u]||p;return t?a.createElement(v,r(r({ref:n},s),{},{components:t})):a.createElement(v,r({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,r=new Array(p);r[0]=l;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var d=2;d<p;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},71272:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>m,toc:()=>s});var a=t(18249),o=(t(29901),t(57522)),p=t(15273);const r={sidebar_position:7},i=void 0,m={unversionedId:"apis/monorepo/commands/deploy",id:"apis/monorepo/commands/deploy",title:"deploy",description:"\u5bf9\u6307\u5b9a\u7684\u9879\u76ee\u8fdb\u884c\u90e8\u7f72\uff0c\u4f1a\u901a\u8fc7\u6307\u5b9a\u9879\u76ee\u5206\u6790\u5176\u4f9d\u8d56\u7684 Monorepo \u4e0b\u7684\u5b50\u9879\u76ee\u3002",source:"@site/docs/apis/monorepo/commands/deploy.md",sourceDirName:"apis/monorepo/commands",slug:"/apis/monorepo/commands/deploy",permalink:"/docs/apis/monorepo/commands/deploy",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"apisMonorepoSidebar",previous:{title:"lint",permalink:"/docs/apis/monorepo/commands/lint"},next:{title:"clear",permalink:"/docs/apis/monorepo/commands/clear"}},d={},s=[],c={toc:s};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Usage: modern deploy [options]\n\ndeploy project\n\nOptions:\n  -p, --path [path]  Specify the path of the product output (default: "output")\n  -h, --help         display help for command\n')),(0,o.kt)(p.default,{mdxType:"CommandTip"}),(0,o.kt)("p",null,"\u5bf9\u6307\u5b9a\u7684\u9879\u76ee\u8fdb\u884c\u90e8\u7f72\uff0c\u4f1a\u901a\u8fc7\u6307\u5b9a\u9879\u76ee\u5206\u6790\u5176\u4f9d\u8d56\u7684 Monorepo \u4e0b\u7684\u5b50\u9879\u76ee\u3002"),(0,o.kt)("p",null,"\u5728\u6267\u884c\u547d\u4ee4\u4e4b\u540e\uff0c\u4f1a\u9996\u5148\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," \u76ee\u5f55\uff0c\u5728\u76ee\u5f55\u5f53\u4e2d\u5305\u542b\u4e86\u6307\u5b9a\u90e8\u7f72\u7684\u9879\u76ee\u4ee5\u53ca\u5176\u4f9d\u8d56\u7684\u5b50\u9879\u76ee\uff0c\u5f62\u6210\u4e00\u4e2a\u6700\u5c0f\u96c6\u5408\u7684 Monorepo\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"output")," \u76ee\u5f55\u662f\u9ed8\u8ba4\u76ee\u5f55\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," \u53c2\u6570\u8fdb\u884c\u81ea\u5b9a\u4e49\u3002"))),(0,o.kt)("p",null,"\u7136\u540e\u4f1a\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," \u76ee\u5f55\u4e0b\u8fdb\u884c\u4f9d\u8d56\u7684\u5b89\u88c5\u4ee5\u53ca\u5fc5\u8981\u6587\u4ef6\u7684\u590d\u5236\u3002"),(0,o.kt)("p",null,"\u6700\u540e\u5f53\u4f9d\u8d56\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4fbf\u5b8c\u6210\u4e86\u5bf9\u6307\u5b9a\u9879\u76ee\u7684\u90e8\u7f72\u4efb\u52a1\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u90e8\u7f72\u9879\u76ee\u540d\u79f0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," \u7684\u5e94\u7528\uff0c\u5219\u53ef\u4ee5\u6267\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm deploy app\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," \u4e3a\u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," \u503c\u3002"))))}l.isMDXComponent=!0},15273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var a=t(18249),o=(t(29901),t(57522));const p={},r=void 0,i={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b package.json \u914d\u7f6e\u4e2d\uff1a",source:"@site/docs/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/docs/components/command-tip",tags:[],version:"current",frontMatter:{}},m={},d=[],s={toc:d};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"div"},"\u5f53\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 Yarn \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn command --option"),"\u3002"),(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,o.kt)("p",{parentName:"div"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,o.kt)("p",{parentName:"div"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002"))))}c.isMDXComponent=!0}}]);