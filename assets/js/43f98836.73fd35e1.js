"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[6332],{57522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(29901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70702:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(29901);function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},189:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(18249),r=n(29901),l=n(78684),o=n(67167),s=n(25789);const i="tabItem_Uhzi";function c(e){var t,n,l;const{lazy:c,block:u,defaultValue:p,values:d,groupId:m,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,o.lx)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===p?p:null!=(t=null!=p?p:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:y}=(0,o.UB)(),[N,w]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:S}=(0,o.o5)();if(null!=m){const e=g[m];null!=e&&e!==N&&b.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==N&&(S(t),w(a),null!=m&&y(m,a))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]||O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]||O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},v)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:j,onClick:j},l,{className:(0,s.Z)("tabs__item",i,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},31986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(18249),r=(n(29901),n(57522)),l=n(189),o=n(70702);const s={title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6"},i=void 0,c={unversionedId:"guides/tutorials/c05-component/5.2-use-standalone-component",id:"guides/tutorials/c05-component/5.2-use-standalone-component",title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6",description:"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u4f7f\u7528 Ant Design \u7ec4\u4ef6\u5e93\u4e2d\u7684\u7ec4\u4ef6\u6765\u5b9e\u73b0\u5217\u8868\u3002",source:"@site/docs/guides/tutorials/c05-component/5.2-use-standalone-component.md",sourceDirName:"guides/tutorials/c05-component",slug:"/guides/tutorials/c05-component/5.2-use-standalone-component",permalink:"/docs/guides/tutorials/c05-component/5.2-use-standalone-component",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6"},sidebar:"guidesSidebar",previous:{title:"\u4f7f\u7528\u4e3b\u6d41\u7ec4\u4ef6\u5e93",permalink:"/docs/guides/tutorials/c05-component/5.1-use-ui-library"},next:{title:"\u7528 CSS in JS \u5199\u7ec4\u4ef6",permalink:"/docs/guides/tutorials/c06-css-and-component/6.1-css-in-js"}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0a\u4e00\u5c0f\u8282\u6211\u4eec\u4f7f\u7528 Ant Design \u7ec4\u4ef6\u5e93\u4e2d\u7684\u7ec4\u4ef6\u6765\u5b9e\u73b0\u5217\u8868\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\u6211\u4eec\u7528\u72ec\u7acb\u5f00\u6e90\u7ec4\u4ef6\u6765\u5b9e\u73b0\u8054\u7cfb\u4eba\u7684\u64cd\u4f5c\u6309\u94ae\u3002"),(0,r.kt)("p",null,"\u4ee5\u6309\u94ae\u5e93 ",(0,r.kt)("a",{parentName:"p",href:"https://lab.hakim.se/ladda/"},"Ladda")," \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-ladda"},"React \u5b9e\u73b0")," \u4e3a\u4f8b\uff0c\u5148\u6dfb\u52a0\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add react-ladda ladda\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," \u91cc\u5bfc\u5165\u7ec4\u4ef6\uff0c\u540c\u65f6\u624b\u52a8\u5bfc\u5165\u9700\u8981\u7684 CSS\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import LaddaButton, { S, SLIDE_UP } from 'react-ladda';\nimport 'ladda/dist/ladda.min.css';\n")),(0,r.kt)("p",null,"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"List.Item")," \u7ec4\u4ef6\u7684\u8c03\u7528\u4ee3\u7801\uff0c\u6dfb\u52a0 actions\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'<List.Item\n  key={name}\n  actions={[\n    <LaddaButton\n      key={email}\n      loading={false}\n      data-size={S}\n      data-style={SLIDE_UP}\n      data-spinner-size={20}\n      data-spinner-color="#ddd"\n      data-spinner-lines={8}>\n      Call\n    </LaddaButton>\n  ]}>\n  <List.Item.Meta\n    avatar={<img alt="avatar" src={avatar} width={60} height={60} />}\n    title={name}\n    description={email}\n  />\n</List.Item>\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-ladda")," \u7ec4\u4ef6\u5e93\u6ca1\u6709\u63d0\u4f9b types \u6587\u4ef6\uff0c\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," \u6587\u4ef6\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/modern-app-env.d.ts\n"))),(0,r.kt)(o.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ni src/modern-app-env.d.ts\n")))),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern-app-env.d.ts")," \u4e2d\u6dfb\u52a0\u6a21\u5757\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"declare module 'react-ladda' {\n  const LaddaButton: any;\n  export default LaddaButton;\n  export const S: any;\n  export const SLIDE_UP: any;\n}\n")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u67e5\u770b\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/05/result1.png",alt:"result1"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"CSS \u6587\u4ef6\u4f1a\u81ea\u52a8\u7ecf\u8fc7 Modern.js \u5185\u7f6e\u7684 ",(0,r.kt)("a",{parentName:"p",href:"docs/guides/usages/css/postcss"},"PostCSS")," \u7684\u5904\u7406\uff0c\u80fd\u591f\u6ee1\u8db3\u5927\u591a\u6570\u9879\u76ee\u7684\u6837\u5f0f\u5f00\u53d1\u9700\u6c42\u3002"),(0,r.kt)("p",{parentName:"div"},"Modern.js \u4e5f\u652f\u6301\u5bfc\u5165 SCSS\u3001Less \u6587\u4ef6\u3002\u6b64\u5916\uff0c\u6709\u7684\u7ec4\u4ef6\u4f7f\u7528 CSS in JS\uff0c\u4e0d\u9700\u8981\u989d\u5916\u5bfc\u5165\u6837\u5f0f\u6587\u4ef6\uff0c\u4e0b\u4e00\u8282\u4f1a\u6709\u76f8\u5173\u4ecb\u7ecd\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c05/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}m.isMDXComponent=!0}}]);