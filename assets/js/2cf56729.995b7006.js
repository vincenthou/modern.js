"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4512],{57522:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(29901);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(18249),r=(t(29901),t(57522));const l={sidebar_label:"\u522b\u540d\u3001\u73af\u5883\u53d8\u91cf\u548c\u5168\u5c40\u53d8\u91cf",sidebar_position:6},o="\u522b\u540d\u3001\u73af\u5883\u53d8\u91cf\u548c\u5168\u5c40\u53d8\u91cf",i={unversionedId:"guides/usages/globals",id:"guides/usages/globals",title:"\u522b\u540d\u3001\u73af\u5883\u53d8\u91cf\u548c\u5168\u5c40\u53d8\u91cf",description:"\u4f7f\u7528\u522b\u540d",source:"@site/docs/guides/usages/globals.md",sourceDirName:"guides/usages",slug:"/guides/usages/globals",permalink:"/docs/guides/usages/globals",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"\u522b\u540d\u3001\u73af\u5883\u53d8\u91cf\u548c\u5168\u5c40\u53d8\u91cf",sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",permalink:"/docs/guides/usages/compatibility"},next:{title:"\u81ea\u5b9a\u4e49 HTML \u6a21\u677f",permalink:"/docs/guides/usages/html"}},s={},p=[{value:"\u4f7f\u7528\u522b\u540d",id:"\u4f7f\u7528\u522b\u540d",level:2},{value:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",level:2},{value:"\u4f7f\u7528\u5168\u5c40\u53d8\u91cf",id:"\u4f7f\u7528\u5168\u5c40\u53d8\u91cf",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u522b\u540d\u73af\u5883\u53d8\u91cf\u548c\u5168\u5c40\u53d8\u91cf"},"\u522b\u540d\u3001\u73af\u5883\u53d8\u91cf\u548c\u5168\u5c40\u53d8\u91cf"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u522b\u540d"},"\u4f7f\u7528\u522b\u540d"),(0,r.kt)("p",null,"Modern.js \u5141\u8bb8\u5728 JS \u548c CSS \u4e2d\u4f7f\u7528\u522b\u540d\u5bfc\u5165\u81ea\u5b9a\u4e49\u76ee\u5f55\u4e0b\u7684\u6a21\u5757\uff0c\u5e76\u5185\u7f6e\u4e86\u4ee5\u4e0b\u522b\u540d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  '@': '<appDirectory>/src',\n  '@shared': '<appDirectory>/shared',\n}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u5f00\u542f\u53ef\u9009\u529f\u80fd\u65f6\uff0c\u751f\u6210\u5668\u4e5f\u4f1a\u52a8\u6001\u7684\u6dfb\u52a0\u5185\u7f6e\u522b\u540d\uff0c\u4f8b\u5982\u542f\u7528 BFF \u65f6\u9ed8\u8ba4\u4f1a\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@api")," \u522b\u540d\uff1a"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u65f6\uff0c\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u6587\u4ef6\u4e2d\u5bfc\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/common")," \u76ee\u5f55\u4e0b\u7684\u6a21\u5757:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 common\n\u2502\xa0\xa0 \u251c\u2500\u2500 styles\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 base.css\n\u2502\xa0\xa0 \u2514\u2500\u2500 utils\n\u2502\xa0\xa0     \u2514\u2500\u2500 index.ts\n\u251c\u2500\u2500 App.tsx\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u4e2d\u5199\u6cd5\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import utils from '@/src/common/utils';\nimport '@/src/common/styles/base.css';\n")),(0,r.kt)("p",null,"Modern.js \u4e5f\u63d0\u4f9b\u4e86\u81ea\u5b9a\u4e49\u522b\u540d\u7684\u65b9\u5f0f\uff0c\u4ee5\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"@common")," \u522b\u540d\u4e3a\u4f8b\uff0c\u5bf9\u4e8e TypeScript \u9879\u76ee\uff0c\u53ea\u9700\u8981\u5728\u9879\u76ee\u6839\u76ee\u5f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u4e0b\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"compilerOptions.paths")," \u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "paths": {\n      "@/*": [\n        "./src/*"\n      ],\n      "@/common/*": [\n        "./src/common/*"\n      ]\n    }\n  },\n}\n')),(0,r.kt)("p",null,"JavaScript \u9879\u76ee\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4e2d\u914d\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/source/alias"},(0,r.kt)("inlineCode",{parentName:"a"},"source.alias")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    alias: {\n      '@common': './src/common'\n    }\n  }\n});\n")),(0,r.kt)("p",null,"\u5177\u4f53\u522b\u540d\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003 \u3010",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/source/alias"},"API \u8d44\u6599 - source.alias"),"\u3011\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf"},"\u4f7f\u7528\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u524d\u7aef\u4ee3\u7801\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u73af\u5883\u53d8\u91cf\uff0c\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (process.env.NODE_ENV === 'development') {\n  // do something\n}\n")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," \u547d\u4ee4\u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u6784\u5efa\u4ea7\u7269\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (true) {\n  // do something\n}\n")),(0,r.kt)("p",null,"\u540c\u6837\u5728\u81ea\u5b9a\u4e49\u7684 HTML \u6a21\u677f\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u3002\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"config/html/head.html"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<meta name="test" content="<process.env.NODE_ENV>">\n')),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u4ee5\u5916\u7684\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/config/source/env-vars"},(0,r.kt)("inlineCode",{parentName:"a"},"source.envVars"))," \u914d\u7f6e\u6307\u5b9a, \u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    envVars: ['VERSION']\n  }\n})\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VERSION")," \u73af\u5883\u53d8\u91cf\u9700\u8981\u5728\u7f16\u8bd1\u4e4b\u524d\u8bbe\u7f6e\u597d, \u53ef\u4ee5\u5728\u6267\u884c\u547d\u4ee4\u65f6\u6dfb\u52a0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"// linux, macOS\n$ VERSION=1.0.0 npm run dev\n\n// windows\n$ set VERSION=1.0.0&&npm run dev\n")),(0,r.kt)("p",null,"Modern.js \u4e5f\u652f\u6301\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e2d\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".env"',title:'".env"'},"VERSION=1.0.0\n")),(0,r.kt)("p",null,"\u66f4\u591a\u6587\u4ef6\u683c\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env"),"\uff1a\u9ed8\u8ba4\u52a0\u8f7d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env.development"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},".env.test"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},".env.production"),"\uff1a\u9488\u5bf9\u5177\u4f53\u73af\u5883\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u4f1a\u8986\u76d6 ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," \u4e2d\u7684\u8bbe\u7f6e\u3002")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u5168\u5c40\u53d8\u91cf"},"\u4f7f\u7528\u5168\u5c40\u53d8\u91cf"),(0,r.kt)("p",null,"Modern.js \u652f\u6301\u5728\u7f16\u8bd1\u65f6\u8bbe\u7f6e\u4ee3\u7801\u4e2d\u4f7f\u7528\u5230\u7684\u5168\u5c40\u53d8\u91cf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    globalVars: {\n      VERSION: '1.0.0'\n    }\n  }\n})\n")),(0,r.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},"/* TS \u5e94\u7528\u4e2d\uff0c\u9700\u8981\u58f0\u660e\u8be5\u53d8\u91cf */\ndeclare const VERSION: string;\n\nconst a = VERSION;\n")))}m.isMDXComponent=!0}}]);