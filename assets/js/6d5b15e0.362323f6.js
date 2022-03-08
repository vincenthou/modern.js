"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6459],{54852:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59239:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(26260),o=t(23157),a=(t(49231),t(54852)),s=["components"],i={sidebar_position:2},c="\u53d1\u5e03\u5230\u817e\u8baf\u4e91 SCF",l={unversionedId:"guides/features/server-side/deploy/modern-server/use-lambda/tencent-scf",id:"guides/features/server-side/deploy/modern-server/use-lambda/tencent-scf",isDocsHomePage:!1,title:"\u53d1\u5e03\u5230\u817e\u8baf\u4e91 SCF",description:"Modern.js \u652f\u6301\u901a\u8fc7\u817e\u8baf\u4e91\u7684\u4e91\u51fd\u6570\u4ea7\u54c1\u90e8\u7f72\u5e94\u7528\u3002\u90e8\u7f72\u65f6\uff0cModern.js \u4f1a\u81ea\u52a8\u5c06\u5e94\u7528\u6253\u5305\u6210\u817e\u8baf\u4e91\u51fd\u6570\u7684\u6240\u9700\u7684\u90e8\u7f72\u4ea7\u7269\uff0c\u5e76\u901a\u8fc7\u5b98\u65b9\u5de5\u5177\u5c06\u5e94\u7528\u90e8\u7f72\u5230\u51fd\u6570\u8ba1\u7b97\u670d\u52a1\u4e2d\u3002",source:"@site/docs/guides/features/server-side/deploy/modern-server/use-lambda/tencent-scf.md",sourceDirName:"guides/features/server-side/deploy/modern-server/use-lambda",slug:"/guides/features/server-side/deploy/modern-server/use-lambda/tencent-scf",permalink:"/docs/guides/features/server-side/deploy/modern-server/use-lambda/tencent-scf",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u53d1\u5e03\u5230\u963f\u91cc\u4e91 FC",permalink:"/docs/guides/features/server-side/deploy/modern-server/use-lambda/aliyun-fc"},next:{title:"Dockerfile",permalink:"/docs/guides/features/server-side/deploy/modern-server/any-container/docker"}},p=[{value:"\u542f\u7528\u529f\u80fd",id:"\u542f\u7528\u529f\u80fd",children:[]},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",children:[]},{value:"\u83b7\u53d6\u53d1\u5e03\u914d\u7f6e",id:"\u83b7\u53d6\u53d1\u5e03\u914d\u7f6e",children:[]},{value:"\u90e8\u7f72\u5e94\u7528",id:"\u90e8\u7f72\u5e94\u7528",children:[]},{value:"\u67e5\u770b\u51fd\u6570",id:"\u67e5\u770b\u51fd\u6570",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53d1\u5e03\u5230\u817e\u8baf\u4e91-scf"},"\u53d1\u5e03\u5230\u817e\u8baf\u4e91 SCF"),(0,a.kt)("p",null,"Modern.js \u652f\u6301\u901a\u8fc7\u817e\u8baf\u4e91\u7684\u4e91\u51fd\u6570\u4ea7\u54c1\u90e8\u7f72\u5e94\u7528\u3002\u90e8\u7f72\u65f6\uff0cModern.js \u4f1a\u81ea\u52a8\u5c06\u5e94\u7528\u6253\u5305\u6210\u817e\u8baf\u4e91\u51fd\u6570\u7684\u6240\u9700\u7684\u90e8\u7f72\u4ea7\u7269\uff0c\u5e76\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serverless-components/tencent-scf"},"\u5b98\u65b9\u5de5\u5177"),"\u5c06\u5e94\u7528\u90e8\u7f72\u5230\u51fd\u6570\u8ba1\u7b97\u670d\u52a1\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u542f\u7528\u529f\u80fd"},"\u542f\u7528\u529f\u80fd"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u76ee\u5f55\u4e2d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm new")," \u542f\u7528\u90e8\u7f72\u529f\u80fd\uff0c\u5148\u5ffd\u7565 CDN \u76f8\u5173\u5185\u5bb9\uff0c\u53ea\u5f00\u542f\u4e91\u51fd\u6570\u90e8\u7f72\u529f\u80fd\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\uff1a\u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd\uff1a\u542f\u7528\u300c\u90e8\u7f72\u300d\u529f\u80fd\n? \u9ed8\u8ba4\u4f7f\u7528\u6846\u67b6\u81ea\u5e26\u7684\u4e13\u4e1a Web \u670d\u52a1\u5668\uff0c\u662f\u5426\u8c03\u6574\uff1a\u5426\n? \u8bf7\u9009\u62e9 CDN \u5e73\u53f0\uff1a\u4e0d\u4f7f\u7528 CDN\n? \u8bf7\u9009\u62e9\u4e91\u51fd\u6570\u5e73\u53f0\uff1a\u817e\u8baf\u4e91 SCF\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u5df2\u7ecf\u65b0\u589e\u4e86\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  + "@modern-js/plugin-lambda-scf": "^1"\n}\n')),(0,a.kt)("h2",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u90e8\u7f72\u5230\u817e\u8baf\u9700\u8981\u5728\u73af\u5883\u53d8\u91cf\u4e2d\u914d\u7f6e\u8d26\u53f7\u3001\u533a\u57df\u7b49\u4fe1\u606f\u3002\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"secretId")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"secretKey"),"\u3002"),(0,a.kt)("p",null,"\u90e8\u5206",(0,a.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u8fdb\u5165\u4ee3\u7801\u4ed3\u5e93"),"\u7684\u73af\u5883\u53d8\u91cf\u53ef\u4ee5\u653e\u5728\u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e2d\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u817e\u8baf\u4e91\u533a\u57df\u4fe1\u606f\uff08\u53ef\u9009\uff0c\u9ed8\u8ba4 'ap-guangzhou'\uff09\nCLOUD_REGION\n")),(0,a.kt)("p",null,"\u53e6\u5916\u4e0e\u8d26\u53f7\u9274\u6743\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u5fc5\u987b\u786e\u4fdd\u653e\u5728\u5e73\u53f0\u4e0a\uff0c\u4f8b\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment"},"Github Environments")," \u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u817e\u8baf\u4e91\u8bbf\u95ee AK\nCLOUD_SECRET_ID\n# \u817e\u8baf\u4e91\u8bbf\u95ee SK\nCLOUD_SECRET_KEY\n")),(0,a.kt)("h2",{id:"\u83b7\u53d6\u53d1\u5e03\u914d\u7f6e"},"\u83b7\u53d6\u53d1\u5e03\u914d\u7f6e"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u76f8\u5173\u914d\u7f6e\u90fd\u53ef\u4ee5\u5728\u817e\u8baf\u4e91\u5e73\u53f0\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.tencent.com/cam/capi"},"API \u79d8\u94a5\u7ba1\u7406"),"\u4e2d\u83b7\u53d6\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/tencent-aksk.png",alt:"aksk"})),(0,a.kt)("h2",{id:"\u90e8\u7f72\u5e94\u7528"},"\u90e8\u7f72\u5e94\u7528"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm deploy"),"\uff0c\u5e94\u7528\u4f1a\u9996\u5148\u8fdb\u884c\u6784\u5efa\uff0c\u968f\u540e\u53ef\u4ee5\u770b\u5230\u5f00\u59cb\u90e8\u7f72\u5230\u817e\u8baf\u4e91\u51fd\u6570\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/tencent-scf-deploy.png",alt:"scf"})),(0,a.kt)("p",null,"\u53d1\u5e03\u540e\uff0c\u817e\u8baf\u4e91\u4f1a\u8f93\u51fa\u4e00\u4e2a\u4e34\u65f6\u53ef\u7528\u7684\u57df\u540d\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u67e5\u770b\u51fd\u6570"},"\u67e5\u770b\u51fd\u6570"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.tencent.com/scf/list"},"\u817e\u8baf\u4e91 SCF \u63a7\u5236\u53f0"),"\u67e5\u770b\u5df2\u7ecf\u90e8\u7f72\u7684\u51fd\u6570\uff0cModern.js \u9ed8\u8ba4\u4f1a\u4f7f\u7528\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," \u503c\u4f5c\u4e3a\u51fd\u6570\u524d\u7f00\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/tencent-scf-list.png",alt:"scf-list"})),(0,a.kt)("p",null,"\u5728\u63a7\u5236\u53f0\u4e2d\uff0c\u53ef\u4ee5\u8fdb\u5165\u51fd\u6570\u8fdb\u884c\u8c03\u8bd5\u3001\u90e8\u7f72\u7248\u672c\u3001\u6dfb\u52a0\u65b0\u7684 Trigger\uff0c\u6216\u662f\u4e3a\u51fd\u6570\u6dfb\u52a0\u81ea\u5b9a\u4e49\u57df\u540d\u7b49\u3002"))}d.isMDXComponent=!0}}]);