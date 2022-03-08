"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[3248],{54852:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74665:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(26260),a=t(23157),i=(t(49231),t(54852)),o=["components"],l={sidebar_position:3},p="\u6a21\u5757",c={unversionedId:"apis/generator/config/module",id:"apis/generator/config/module",isDocsHomePage:!1,title:"\u6a21\u5757",description:"\u6a21\u5757\u9879\u76ee\u9ed8\u8ba4\u5305\u542b\u901a\u7528\u914d\u7f6e\uff0c\u901a\u7528\u914d\u7f6e\u53ef\u67e5\u770b\u901a\u7528\u914d\u7f6e\u3002",source:"@site/docs/apis/generator/config/module.md",sourceDirName:"apis/generator/config",slug:"/apis/generator/config/module",permalink:"/en/docs/apis/generator/config/module",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apisSidebar",previous:{title:"\u5e94\u7528",permalink:"/en/docs/apis/generator/config/mwa"},next:{title:"\u9879\u76ee\u7ec4",permalink:"/en/docs/apis/generator/config/monorepo"}},u=[{value:"Package-Name",id:"package-name",children:[]},{value:"Need-Modify-Module-Config",id:"need-modify-module-config",children:[]},{value:"Enable-Less",id:"enable-less",children:[]},{value:"Enable-Sass",id:"enable-sass",children:[]},{value:"New \u547d\u4ee4",id:"new-\u547d\u4ee4",children:[{value:"Action-Type",id:"action-type",children:[]},{value:"Function",id:"function",children:[]}]}],s={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,i.kt)("p",null,"\u6a21\u5757\u9879\u76ee\u9ed8\u8ba4\u5305\u542b\u901a\u7528\u914d\u7f6e\uff0c\u901a\u7528\u914d\u7f6e\u53ef\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/generator/config/introduce#%E9%80%9A%E7%94%A8%E9%85%8D%E7%BD%AE"},"\u901a\u7528\u914d\u7f6e"),"\u3002"),(0,i.kt)("h3",{id:"package-name"},"Package-Name"),(0,i.kt)("p",null,"\u5305\u540d(packageName)\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u4e3a\u8f93\u5165\u503c\u3002"),(0,i.kt)("h3",{id:"need-modify-module-config"},"Need-Modify-Module-Config"),(0,i.kt)("p",null,"\u662f\u5426\u9700\u8981\u4fee\u6539\u6a21\u5757\u9ed8\u8ba4\u914d\u7f6e(needModifyModuleConfig)\uff0c\u8be5\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"yes")," \u65f6\uff0c\u540e\u7eed\u914d\u7f6e\u624d\u4f1a\u5c55\u793a\u7ed9\u7528\u6237\uff0c\u5728\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," \u53c2\u6570\u548c\u751f\u6210\u5668\u63d2\u4ef6\u4e2d\uff0c\u540e\u7eed\u914d\u7f6e\u624d\u4f1a\u751f\u6548\u3002"),(0,i.kt)("p",null,"\u8be5\u5b57\u6bb5\u5171\u6709\u4e24\u4e2a\u9009\u9879\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u662f(yes)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5426(no)"))),(0,i.kt)("h3",{id:"enable-less"},"Enable-Less"),(0,i.kt)("p",null,"\u662f\u5426\u542f\u7528 Less \u652f\u6301(enableLess)\uff0c\u9ed8\u8ba4\u4e3a\u4e0d\u542f\u7528\uff0c\u5171\u6709\u4e24\u4e2a\u9009\u9879\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u662f(yes)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5426(no)"))),(0,i.kt)("h3",{id:"enable-sass"},"Enable-Sass"),(0,i.kt)("p",null,"\u662f\u5426\u542f\u7528 Sass \u652f\u6301(enableSass), \u9ed8\u8ba4\u4e3a\u4e0d\u542f\u7528\uff0c\u5171\u6709\u4e24\u4e2a\u9009\u9879\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u662f(yes)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5426(no)"))),(0,i.kt)("h2",{id:"new-\u547d\u4ee4"},"New \u547d\u4ee4"),(0,i.kt)("p",null,"\u5e94\u7528\u9879\u76ee\u4e2d new \u547d\u4ee4\u914d\u7f6e\uff0c new \u547d\u4ee4\u4e2d\u4f7f\u7528 config \u53c2\u6570\u65f6\u4f7f\u7528\u7684\u914d\u7f6e\uff0c\u4e5f\u662f\u5728\u751f\u6210\u5668\u63d2\u4ef6\u4e2d\u521b\u5efa\u5143\u7d20\u548c\u542f\u7528\u529f\u80fd\u65f6\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"action-type"},"Action-Type"),(0,i.kt)("p",null,"New \u547d\u4ee4\u7684\u64cd\u4f5c\u7c7b\u578b(actionType)\uff0c\u7c7b\u578b\u652f\u6301\u4e00\u79cd\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"function \u542f\u7528\u529f\u80fd")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u751f\u6210\u5668\u63d2\u4ef6\u4e2d\u4f7f\u7528\u542f\u7528\u529f\u80fd\u548c\u521b\u5efa\u5143\u7d20\u65f6\u4e0d\u9700\u8981\u8be5\u53c2\u6570\uff0c\u751f\u6210\u5668\u63d2\u4ef6\u4e2d\u81ea\u52a8\u6dfb\u52a0\u8be5\u53c2\u6570\u3002"))),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("p",null,"\u53ef\u9009\u529f\u80fd\u540d\u79f0(function)\uff0c\u652f\u6301 11 \u4e2a\u9009\u9879:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tailwind CSS(tailwindcss)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Less(less)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sass(sass)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Storybook(mwa_storybook)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rumtime API(runtimeApi)"))))}m.isMDXComponent=!0}}]);