"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[99433,6178],{57522:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,v=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?o.createElement(v,i(i({ref:t},d),{},{components:n})):o.createElement(v,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(18249),a=(n(29901),n(57522)),r=n(27989);const i={sidebar_position:4,title:"useLocalModel"},l="useLocalModel",s={unversionedId:"apis/app/runtime/model/use-local-model",id:"apis/app/runtime/model/use-local-model",title:"useLocalModel",description:"\u7528\u4e8e\u628a Model \u4e2d\u7684 State \u4f5c\u4e3a\u5c40\u90e8\u72b6\u6001\u4f7f\u7528\uff0c\u6548\u679c\u7c7b\u4f3c React \u7684 useState\u3002useStaticModel API \u5f62\u5f0f\u4e0a\u4e0e useModel \u5b8c\u5168\u4e00\u81f4\u3002\u5177\u4f53\u4f7f\u7528\u8bf7\u53c2\u8003 useModel\u3002",source:"@site/docs/apis/app/runtime/model/use-local-model.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/use-local-model",permalink:"/docs/apis/app/runtime/model/use-local-model",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"useLocalModel"},sidebar:"apisAppSidebar",previous:{title:"useStaticModel",permalink:"/docs/apis/app/runtime/model/use-static-model"},next:{title:"connect",permalink:"/docs/apis/app/runtime/model/connect"}},p={},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uselocalmodel"},"useLocalModel"),(0,a.kt)(r.default,{mdxType:"ReduckTip"}),(0,a.kt)("p",null,"\u7528\u4e8e\u628a Model \u4e2d\u7684 State \u4f5c\u4e3a\u5c40\u90e8\u72b6\u6001\u4f7f\u7528\uff0c\u6548\u679c\u7c7b\u4f3c React \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"useState"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"useStaticModel")," API \u5f62\u5f0f\u4e0a\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"useModel")," \u5b8c\u5168\u4e00\u81f4\u3002\u5177\u4f53\u4f7f\u7528\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/model/use-model"},(0,a.kt)("inlineCode",{parentName:"a"},"useModel")),"\u3002"),(0,a.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function Container() {\n  const [state, actions] = useLocalModel(modelA);\n  const [state1, actions1] = useLocalModel(modelA);\n\n  // ...\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocalModel")," \u52a0\u8f7d\u4e86\u4e24\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"modelA"),"\uff0c\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocalModel")," \u6d88\u8d39\u7684\u662f\u5c40\u90e8\u72b6\u6001\uff0c\u6240\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"state1")," \u4e5f\u662f\u5b8c\u5168\u9694\u79bb\u7684\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u66f4\u591a\u53c2\u8003")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("a",{parentName:"p",href:"/docs/guides/features/model/use-model"},"\u4f7f\u7528 Model")))))}m.isMDXComponent=!0},27989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(18249),a=(n(29901),n(57522));const r={},i=void 0,l={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a@modern-js/runtime/model\u3002",source:"@site/docs/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/docs/components/reduck-tip",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"\u3002"),(0,a.kt)("p",{parentName:"div"},"\u5982\u679c\u662f\u5728 Modern.js \u4ee5\u5916\u5355\u72ec\u96c6\u6210 Reduck\uff0c\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),"\u3002"))))}c.isMDXComponent=!0}}]);