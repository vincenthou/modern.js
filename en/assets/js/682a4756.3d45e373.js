"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1884],{54852:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,v=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22505:function(e,t,n){var a=n(49231);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},15175:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(49231),r=n(13529);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(1506),s="tabItem_LOdV",c="tabItemActive_XMHB";var l=function(e){var t,n=e.lazy,r=e.block,l=e.defaultValue,p=e.values,m=e.groupId,d=e.className,u=a.Children.toArray(e.children),v=null!=p?p:u.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=l?l:null==(t=u.find((function(e){return e.props.default})))?void 0:t.props.value,h=o(),g=h.tabGroupChoices,k=h.setTabGroupChoices,b=(0,a.useState)(f),N=b[0],y=b[1],C=[];if(null!=m){var x=g[m];null!=x&&x!==N&&v.some((function(e){return e.value===x}))&&y(x)}var w=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;y(a),null!=m&&(k(m,a),setTimeout((function(){var e,n,a,r,o,i,s,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,l=i.innerWidth,n>=0&&o<=l&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.target)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.target)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:A,onFocus:w,onClick:w},null!=n?n:t)}))),n?(0,a.cloneElement)(u.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},13529:function(e,t,n){var a=(0,n(49231).createContext)(void 0);t.Z=a},37708:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return v}});var a=n(26260),r=n(23157),o=(n(49231),n(54852)),i=n(15175),s=n(22505),c=["components"],l={title:"\u200b\u5b8c\u6574\u4f7f\u7528 Model"},p=void 0,m={unversionedId:"guides/tutorials/c11-container/11.1-use-model-with-app-state",id:"guides/tutorials/c11-container/11.1-use-model-with-app-state",isDocsHomePage:!1,title:"\u200b\u5b8c\u6574\u4f7f\u7528 Model",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u521d\u6b65\u5f15\u5165\u5ba2\u6237\u7aef\u5e94\u7528\u67b6\u6784\uff0c\u4ece\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\u4e2d\u62c6\u5206\u51fa\u3010 \u4e1a\u52a1\u6a21\u578b\uff08Model\uff09\u3011\uff0cAllContacts \u4e2d\u4e0d\u518d\u5305\u542b UI \u65e0\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5b9e\u73b0\u7ec6\u8282\uff0c\u53ea\u9700\u8981\u4f7f\u7528 Model\uff0c\u5c31\u80fd\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002",source:"@site/docs/guides/tutorials/c11-container/11.1-use-model-with-app-state.md",sourceDirName:"guides/tutorials/c11-container",slug:"/guides/tutorials/c11-container/11.1-use-model-with-app-state",permalink:"/en/docs/guides/tutorials/c11-container/11.1-use-model-with-app-state",tags:[],version:"current",frontMatter:{title:"\u200b\u5b8c\u6574\u4f7f\u7528 Model"},sidebar:"guidesSidebar",previous:{title:"\u6d4b\u8bd5 Model",permalink:"/en/docs/guides/tutorials/c10-model/10.4-testing"},next:{title:"\u5bb9\u5668\u7ec4\u4ef6\uff08Container\uff09",permalink:"/en/docs/guides/tutorials/c11-container/11.2-add-container"}},d=[],u={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u521d\u6b65\u5f15\u5165",(0,o.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef\u5e94\u7528\u67b6\u6784"),"\uff0c\u4ece\u3010 \u89c6\u56fe\u7ec4\u4ef6 \u3011\u4e2d\u62c6\u5206\u51fa\u3010 \u4e1a\u52a1\u6a21\u578b\uff08Model\uff09\u3011\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"AllContacts")," \u4e2d\u4e0d\u518d\u5305\u542b UI \u65e0\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5b9e\u73b0\u7ec6\u8282\uff0c\u53ea\u9700\u8981\u4f7f\u7528 Model\uff0c\u5c31\u80fd\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u8981\u8fdb\u4e00\u6b65\u5229\u7528 Model \u4e2d\u5b9e\u73b0\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u8ba9 ",(0,o.kt)("inlineCode",{parentName:"p"},"AllContacts")," \u548c  ",(0,o.kt)("inlineCode",{parentName:"p"},"ArchivedContacts")," \u90fd\u4ece BFF \u83b7\u53d6\u6570\u636e\uff0c\u5b9e\u73b0 Archive \u6309\u94ae\uff0c\u70b9\u51fb\u6309\u94ae\u80fd\u628a\u8054\u7cfb\u4eba\u5f52\u6863\uff0c\u53ea\u663e\u793a\u5728 Achives \u5217\u8868\u91cc\uff0c\u4e0d\u663e\u793a\u5728 All \u5217\u8868\u91cc\u3002"),(0,o.kt)("p",null,"\u5148\u6539\u9020 ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," \u7ec4\u4ef6\uff0c\u589e\u52a0 Archive \u6309\u94ae\u7684\u4ea4\u4e92\u5b9e\u73b0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/contacts/components/Item/index.tsx"',title:'"src/contacts/components/Item/index.tsx"'},"import Avatar from '../Avatar';\n\ntype InfoProps = {\n  avatar: string;\n  name: string;\n  email: string;\n  archived?: boolean;\n};\n\nconst Item = ({\n  info,\n  onArchive,\n}: {\n  info: InfoProps;\n  onArchive?: () => void;\n}) => {\n  const { avatar, name, email, archived } = info;\n  return (\n    <div className=\"flex p-4 items-center border-gray-200 border-b\">\n      <Avatar src={avatar} />\n      <div className=\"ml-4 custom-text-gray flex-1 flex justify-between\">\n        <div className=\"flex-1\">\n          <p>{name}</p>\n          <p>{email}</p>\n        </div>\n        <button\n          type=\"button\"\n          disabled={archived}\n          onClick={onArchive}\n          className={`text-white font-bold py-2 px-4 rounded-full ${\n            archived\n              ? 'bg-gray-400 cursor-default'\n              : 'bg-blue-500 hover:bg-blue-700'\n          }`}>\n          {archived ? 'Archived' : 'Archive'}\n        </button>\n      </div>\n    </div>\n  );\n};\n\nexport default Item;\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ArchivedContacts")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"AllContacts")," \u9700\u8981\u5171\u7528\u540c\u4e00\u5957\u72b6\u6001\uff08\u8054\u7cfb\u4eba\u5217\u8868\u6570\u636e\u3001\u8054\u7cfb\u4eba\u662f\u5426\u88ab\u5f52\u6863\uff09\uff0c\u5e76\u4e14\u7531\u4e8e Achives \u5217\u8868\u548c All \u5217\u8868\u90fd\u53ef\u80fd\u662f\u7b2c\u4e00\u5c4f\u9875\u9762\uff08\u4ece\u4e0d\u540c URL \u8bbf\u95ee\uff09\uff0c\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u90fd\u9700\u8981\u5305\u542b\u52a0\u8f7d\u521d\u59cb\u6570\u636e\u7684\u903b\u8f91\uff08\u5982\u679c\u5ba2\u6237\u7aef\u6ca1\u6709\u8054\u7cfb\u4eba\u5217\u8868\u6570\u636e\uff0c\u5c31\u8bf7\u6c42 BFF\uff09\uff0c\u6240\u4ee5\u8fd9\u7c7b\u4e24\u4e2a\u7ec4\u4ef6\u516c\u7528\u7684\u5b9e\u73b0\u903b\u8f91\u5e94\u8be5\u5408\u5e76\u5230\u4e00\u8d77\uff1a"),(0,o.kt)("p",null,"\u6211\u4eec\u5220\u9664\u539f\u6709\u7684\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Contacts")," \u7ec4\u4ef6\uff1a"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -r src/contacts/components/*Contacts\nmkdir -p src/contacts/components/Contacts/\ntouch src/contacts/components/Contacts/index.tsx\n"))),(0,o.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"rm -r src/contacts/components/*Contacts\nmkdir -p src/contacts/components/Contacts/\nni src/contacts/components/Contacts/index.tsx\n")))),(0,o.kt)("p",null,"\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"p"},"components/Contacts/index.tsx")," \uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/contacts/components/Contacts/index.tsx"',title:'"src/contacts/components/Contacts/index.tsx"'},"import { useEffect } from 'react';\nimport { useLocalModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport contacts from '../../models/contacts';\nimport Item from '../Item';\n\nconst Contacts = ({ source }: { source: 'archived' | 'items' }) => {\n  const [state, actions] = useLocalModel(contacts);\n  const { items, error, pending } = state;\n  useEffect(() => {\n    if (!items.length && !error && !pending) {\n      actions.load();\n    }\n  });\n\n  const data = state.items.filter(item =>\n    source === 'archived' ? item.archived : true,\n  );\n\n  return (\n    (items.length && (\n      <List\n        dataSource={data}\n        renderItem={info => (\n          <Item\n            key={info.email}\n            info={info}\n            onArchive={() => {\n              actions.archive(info.email);\n            }}\n          />\n        )}\n      />\n    )) || (\n      <div className=\"p-4 items-center border-gray-200 border-b border-t custom-text-gray\">\n        Pending...\n      </div>\n    )\n  );\n};\n\nexport default Contacts;\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7531\u4e8e computed \u529f\u80fd\u8fd8\u672a\u63d0\u4f9b\uff0c\u8fd9\u91cc\u5148\u5728\u7ec4\u4ef6\u91cc\u5c06\u4f20\u5165\u7684\u6570\u636e\u505a\u9884\u5904\u7406\u3002"))),(0,o.kt)("p",null,"\u6700\u540e\u6539\u9020 ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx"),"\uff0c\u5229\u7528 Contacts \u5b9e\u73b0 Archives \u5217\u8868\u548c All \u5217\u8868\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/contacts/App.tsx"',title:'"src/contacts/App.tsx"'},"import { useState } from 'react';\nimport { Radio, RadioChangeEvent } from 'antd';\nimport { Route, useHistory } from '@modern-js/runtime/router';\nimport { Helmet } from '@modern-js/runtime/head';\nimport 'tailwindcss/base.css';\nimport 'tailwindcss/components.css';\nimport 'tailwindcss/utilities.css';\nimport './styles/utils.css';\nimport Contacts from './components/Contacts';\n\nfunction App() {\n  const history = useHistory();\n  const [currentList, setList] = useState(history.location.pathname || '/');\n  const handleSetList = (e: RadioChangeEvent) => {\n    const { value } = e.target;\n    setList(value);\n    history.push(value);\n  };\n\n  return (\n    <div className=\"container lg mx-auto\">\n      <div className=\"h-16 p-2 flex items-center justify-center\">\n        <Radio.Group onChange={handleSetList} value={currentList}>\n          <Radio value=\"/\">All</Radio>\n          <Radio value=\"/archives\">Archives</Radio>\n        </Radio.Group>\n      </div>\n      <Route path=\"/\" exact={true}>\n        <Helmet>\n          <title>All</title>\n        </Helmet>\n        <Contacts source=\"items\" />\n      </Route>\n      <Route path=\"/archives\" exact={true}>\n        <Helmet>\n          <title>Archives</title>\n        </Helmet>\n        <Contacts source=\"archived\" />\n      </Route>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/contacts/"),"\uff0c\u70b9\u51fb Archive \u6309\u94ae\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u6309\u94ae\u7f6e\u7070\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/11/display.png",alt:"display"})),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u70b9\u51fb\u9876\u90e8\u5bfc\u822a\uff0c\u5207\u6362\u5230 Archives \u5217\u8868\uff0c\u6211\u4eec\u9884\u671f\u7684\u65f6\u5019\u80fd\u770b\u5230\u5217\u8868\u91cc\u663e\u793a\u521a\u624d\u5f52\u6863\u7684\u8054\u7cfb\u4eba\uff0c\u4f46\u5b9e\u9645\u4e0a\u5217\u8868\u662f\u7a7a\u7684\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/11/display7.png",alt:"display7"})),(0,o.kt)("p",null,"\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u662f\uff0c\u6211\u4eec\u7ee7\u7eed\u6cbf\u7528\u4e86\u4e0a\u4e00\u8282\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"useLocalModel")," API \u6765\u4f7f\u7528 Model\uff0c\u72b6\u6001\u88ab\u4fdd\u5b58\u5230\u4e86\u7ec4\u4ef6\u5185\u90e8\u7684 state \u91cc\uff0c\u800c ",(0,o.kt)("inlineCode",{parentName:"p"},"All")," \u5217\u8868\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Archives")," \u5217\u8868\u4e2d\u5206\u522b\u8c03\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Contacts")," \u7ec4\u4ef6\uff0c\u662f\u4e24\u4e2a\u5404\u81ea\u72ec\u7acb\u7684\u7ec4\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/contacts/App.tsx"',title:'"src/contacts/App.tsx"'},'<Route path="/" exact={true}>\n  <Helmet>\n    <title>All</title>\n  </Helmet>\n  <Contacts source="items" />\n</Route>\n<Route path="/archives" exact={true}>\n  <Helmet>\n    <title>Archives</title>\n  </Helmet>\n  <Contacts source="archived" />\n</Route>\n')),(0,o.kt)("p",null,"\u6240\u4ee5\u5b83\u4eec\u6709\u5404\u81ea\u72ec\u7acb\u7684\u5185\u90e8 state\uff0c\u4e92\u76f8\u4e0d\u5171\u4eab\u72b6\u6001\uff0c\u6e32\u67d3 ",(0,o.kt)("inlineCode",{parentName:"p"},"Archives")," \u5217\u8868\u7684\u65f6\u5019\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"items")," \u4ecd\u7136\u662f\u521d\u59cb\u72b6\u6001\u3002"),(0,o.kt)("p",null,"\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4e00\u79cd\u65b9\u5f0f\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"useLocalModel")," \u7684\u903b\u8f91\u63d0\u5347\u5230\u7236\u7ec4\u4ef6\u91cc\uff0c\u628a\u72b6\u6001\u5206\u522b\u4f20\u7ed9\u4e24\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contacts")," \u7ec4\u4ef6\u3002\u66f4\u6e05\u6670\u3001\u5b8c\u5584\u7684\u65b9\u5f0f\uff0c\u662f\u542f\u7528\u5168\u5c40\u552f\u4e00\u7684\u300c \u5e94\u7528\u72b6\u6001 \u300d\uff0c\u4e24\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contacts")," \u7ec4\u4ef6\u300c \u8fde\u63a5 \u300d\u5e94\u7528\u72b6\u6001\u3002"),(0,o.kt)("p",null,"\u5728 Modern.js \u91cc\u5b9e\u73b0\u5e94\u7528\u72b6\u6001\u7ba1\u7406\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"useLocalModel")," \u6362\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"useModel"),"\u3002"),(0,o.kt)("p",null,"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"components/Contacts/index.tsx")," \u7684\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/contacts/components/Contacts/index.tsx"',title:'"src/contacts/components/Contacts/index.tsx"'},"import { useEffect } from 'react';\nimport { useModel } from '@modern-js/runtime/model';\nimport { List } from 'antd';\nimport contacts from '../../models/contacts';\nimport Item from '../Item';\n\nconst Contacts = ({ source }: { source: 'archived' | 'items' }) => {\n  const [state, actions] = useModel(contacts);\n  const { items, error, pending } = state;\n  useEffect(() => {\n    if (!items.length && !error && !pending) {\n      actions.load();\n    }\n  });\n\n  const data = state.items.filter(item =>\n    source === 'archived' ? item.archived : true,\n  );\n\n  return (\n    (items.length && (\n      <List\n        dataSource={data}\n        renderItem={info => (\n          <Item\n            key={info.email}\n            info={info}\n            onArchive={() => {\n              actions.archive(info.email);\n            }}\n          />\n        )}\n      />\n    )) || (\n      <div className=\"p-4 items-center border-gray-200 border-b border-t custom-text-gray\">\n        Pending...\n      </div>\n    )\n  );\n};\n\nexport default Contacts;\n")),(0,o.kt)("p",null,"\u91cd\u65b0\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u91cd\u590d\u521a\u624d\u7684\u64cd\u4f5c\uff0c\u53ef\u4ee5\u770b\u5230 Archives \u5217\u8868\u80fd\u6b63\u5e38\u663e\u793a\u4e86\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/11/display1.png",alt:"display1"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"useModel API \u8fd8\u53ef\u4ee5\u8bbe\u7f6e Selector\uff0c\u53ea\u8fde\u63a5\u8fd9\u4e2a Model \u5b9a\u4e49\u7684\u72b6\u6001\u4e2d\u7684\u5c40\u90e8\u3002"))),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c11/hello-modern"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}v.isMDXComponent=!0},1506:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);