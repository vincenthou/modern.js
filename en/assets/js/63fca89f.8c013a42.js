"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2554],{54852:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22505:function(e,t,n){var r=n(49231);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},15175:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(49231),a=n(13529);var l=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(1506),i="tabItem_LOdV",s="tabItemActive_XMHB";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=r.Children.toArray(e.children),f=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=l(),b=v.tabGroupChoices,k=v.setTabGroupChoices,h=(0,r.useState)(g),y=h[0],j=h[1],w=[];if(null!=p){var N=b[p];null!=N&&N!==y&&f.some((function(e){return e.value===N}))&&j(N)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;j(r),null!=p&&(k(p,r),setTimeout((function(){var e,n,r,a,l,o,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,o=window,i=o.innerHeight,c=o.innerWidth,n>=0&&l<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},13529:function(e,t,n){var r=(0,n(49231).createContext)(void 0);t.Z=r},28293:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(26260),a=n(23157),l=(n(49231),n(54852)),o=n(15175),i=n(22505),s=["components"],c={title:"\u521b\u5efa\u6700\u7b80\u5355\u7684 MWA"},u=void 0,p={unversionedId:"guides/tutorials/c01-getting-started/1.2-minimal-mwa",id:"guides/tutorials/c01-getting-started/1.2-minimal-mwa",isDocsHomePage:!1,title:"\u521b\u5efa\u6700\u7b80\u5355\u7684 MWA",description:"\u5f00\u59cb\u521b\u5efa",source:"@site/docs/guides/tutorials/c01-getting-started/1.2-minimal-mwa.md",sourceDirName:"guides/tutorials/c01-getting-started",slug:"/guides/tutorials/c01-getting-started/1.2-minimal-mwa",permalink:"/en/docs/guides/tutorials/c01-getting-started/1.2-minimal-mwa",tags:[],version:"current",frontMatter:{title:"\u521b\u5efa\u6700\u7b80\u5355\u7684 MWA"},sidebar:"guidesSidebar",previous:{title:"\u73af\u5883\u51c6\u5907",permalink:"/en/docs/guides/tutorials/c01-getting-started/1.1-prerequisites"},next:{title:"\u8c03\u8bd5\u9879\u76ee",permalink:"/en/docs/guides/tutorials/c01-getting-started/1.3-dev-command"}},d=[{value:"\u5f00\u59cb\u521b\u5efa",id:"\u5f00\u59cb\u521b\u5efa",children:[{value:"1. \u521b\u5efa\u9879\u76ee\u6839\u76ee\u5f55\u548c\u6e90\u4ee3\u7801\u76ee\u5f55",id:"1-\u521b\u5efa\u9879\u76ee\u6839\u76ee\u5f55\u548c\u6e90\u4ee3\u7801\u76ee\u5f55",children:[]},{value:"2. \u5728 src \u76ee\u5f55\u4e0b\uff0c\u521b\u5efa App.jsx",id:"2-\u5728-src-\u76ee\u5f55\u4e0b\u521b\u5efa-appjsx",children:[]},{value:"3. \u6dfb\u52a0\u6846\u67b6\u4f9d\u8d56",id:"3-\u6dfb\u52a0\u6846\u67b6\u4f9d\u8d56",children:[]},{value:"4. \u6dfb\u52a0\u6846\u67b6\u547d\u4ee4",id:"4-\u6dfb\u52a0\u6846\u67b6\u547d\u4ee4",children:[]}]},{value:"\u521b\u5efa\u5b8c\u6210",id:"\u521b\u5efa\u5b8c\u6210",children:[]},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5f00\u59cb\u521b\u5efa"},"\u5f00\u59cb\u521b\u5efa"),(0,l.kt)("h3",{id:"1-\u521b\u5efa\u9879\u76ee\u6839\u76ee\u5f55\u548c\u6e90\u4ee3\u7801\u76ee\u5f55"},"1. \u521b\u5efa\u9879\u76ee\u6839\u76ee\u5f55\u548c\u6e90\u4ee3\u7801\u76ee\u5f55"),(0,l.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-modern")," \u7684\u9879\u76ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p hello-modern/src\ncd hello-modern\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u90fd\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u547d\u4ee4\u3002"),(0,l.kt)("h3",{id:"2-\u5728-src-\u76ee\u5f55\u4e0b\u521b\u5efa-appjsx"},"2. \u5728 src \u76ee\u5f55\u4e0b\uff0c\u521b\u5efa App.jsx"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/App.jsx\n"))),(0,l.kt)(i.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ni src/App.jsx\n")))),(0,l.kt)("p",null,"\u5728 App.jsx \u91cc\u9ed8\u8ba4\u5bfc\u51fa\u4e00\u4e2a React \u7ec4\u4ef6\uff0c\u4f5c\u4e3a\u5e94\u7528\u7684\u6839\u7ec4\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/App.jsx"',title:'"src/App.jsx"'},"export default function App() {\n  return <div>Hello World!</div>;\n}\n")),(0,l.kt)("h3",{id:"3-\u6dfb\u52a0\u6846\u67b6\u4f9d\u8d56"},"3. \u6dfb\u52a0\u6846\u67b6\u4f9d\u8d56"),(0,l.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\uff1a"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"touch package.json\n"))),(0,l.kt)(i.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ni package.json\n")))),(0,l.kt)("p",null,"\u590d\u5236\u4ee5\u4e0b\u5185\u5bb9\u5230\u6587\u4ef6\u91cc\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "hello-modern",\n  "scripts": {},\n  "dependencies": {\n    "react": "^17",\n    "react-dom": "^17",\n    "@modern-js/runtime": "^1.0.0"\n  },\n  "devDependencies": {\n    "@modern-js/app-tools": "^1.0.0"\n  }\n}\n')),(0,l.kt)("h3",{id:"4-\u6dfb\u52a0\u6846\u67b6\u547d\u4ee4"},"4. \u6dfb\u52a0\u6846\u67b6\u547d\u4ee4"),(0,l.kt)("p",null,"\u6dfb\u52a0\u672c\u7ae0\u8282\u8981\u7528\u7684 3 \u4e2a\u547d\u4ee4\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 npm scripts \u91cc\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "dev": "modern dev",\n  "build": "modern build",\n  "start": "modern start"\n},\n')),(0,l.kt)("h2",{id:"\u521b\u5efa\u5b8c\u6210"},"\u521b\u5efa\u5b8c\u6210"),(0,l.kt)("p",null,"\u4e00\u4e2a\u57fa\u4e8e Modern.js \u6846\u67b6\u7684 MWA \u9879\u76ee\uff0c\u5230\u8fd9\u91cc\u5c31\u5df2\u7ecf\u521b\u5efa\u5b8c\u6210\u4e86\u3002"),(0,l.kt)("p",null,"\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 src/\n\u2502   \u2514\u2500\u2500 App.jsx\n\u2514\u2500\u2500 package.json\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u7531\u4e8e Modern.js \u6846\u67b6\u7684",(0,l.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u96f6\u914d\u7f6e\u3001\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e\u3001\u5f00\u7bb1\u5373\u7528\u3001\u907f\u514d\u6837\u677f\u6587\u4ef6\u3001Universal App")," \u7b49\u8bbe\u8ba1\uff0c\u5373\u4f7f\u4e0d\u501f\u52a9\u4efb\u4f55\u811a\u624b\u67b6\u3001\u751f\u6210\u5668\u3001\u9879\u76ee\u6a21\u677f\u7b49\u5de5\u5177\uff0c\u7eaf\u624b\u52a8\u642d\u5efa\u4e00\u4e2a\u9879\u76ee\uff0c\u6574\u4e2a\u8fc7\u7a0b\u4e5f\u662f\u6781\u5176\u7b80\u5355\u7684\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install\n")))}f.isMDXComponent=!0},1506:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);