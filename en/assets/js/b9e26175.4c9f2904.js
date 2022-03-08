"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[978],{54852:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return b}});var n=a(49231);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(a),b=r,d=m["".concat(s,".").concat(b)]||m[b]||c[b]||p;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<p;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8988:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var n=a(26260),r=a(23157),p=(a(49231),a(54852)),o=["components"],l={title:"\u4f7f\u7528 ES6+ \u8bed\u6cd5"},s=void 0,i={unversionedId:"guides/tutorials/c04-es6-plus-and-ts/4.1-use-es6-plus",id:"guides/tutorials/c04-es6-plus-and-ts/4.1-use-es6-plus",isDocsHomePage:!1,title:"\u4f7f\u7528 ES6+ \u8bed\u6cd5",description:"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u786e\u8ba4\u4e86\u5f53\u524d IDE \u7684\u7f16\u7a0b\u73af\u5883\u3002",source:"@site/docs/guides/tutorials/c04-es6-plus-and-ts/4.1-use-es6-plus.md",sourceDirName:"guides/tutorials/c04-es6-plus-and-ts",slug:"/guides/tutorials/c04-es6-plus-and-ts/4.1-use-es6-plus",permalink:"/en/docs/guides/tutorials/c04-es6-plus-and-ts/4.1-use-es6-plus",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 ES6+ \u8bed\u6cd5"},sidebar:"guidesSidebar",previous:{title:"\u547d\u4ee4\u884c\u4e2d\u7684\u81ea\u52a8\u4fee\u590d",permalink:"/en/docs/guides/tutorials/c03-ide/3.4-autofix-in-cli"},next:{title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5",permalink:"/en/docs/guides/tutorials/c04-es6-plus-and-ts/4.2-use-typescript"}},u=[],c={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u4e0a\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u786e\u8ba4\u4e86\u5f53\u524d IDE \u7684\u7f16\u7a0b\u73af\u5883\u3002"),(0,p.kt)("p",null,"\u8fd9\u4e00\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u6cbf\u7528\u4e0a\u4e00\u7ae0\u8282\u7684\u9879\u76ee\u548c\u7f16\u7801\u73af\u5883\uff0c\u5b9e\u73b0\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u8054\u7cfb\u4eba\u5217\u8868\u3002"),(0,p.kt)("p",null,"Modern.js \u652f\u6301 ",(0,p.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u76f4\u63a5\u4f7f\u7528 ES6+\uff08ES2015+\uff09\u8bed\u6cd5\uff0c\u539f\u5219\u4e0a\u5305\u62ec\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5df2\u7ecf\u8fdb\u5165 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals/blob/master/finished-proposals.md"},"Stage 4\uff08\u5b8c\u6210\u9636\u6bb5\uff09"),"\u7684\u8bed\u6cd5\uff0c\u5305\u62ec ES2015\uff08ES6\uff09\u5230 ES2020\uff08ES11\uff09\u4ee5\u53ca\u540e\u7eed\u7248\u672c\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u90e8\u5206\u5f88\u6709\u7528\u4e14\u786e\u5b9a\u6027\u8f83\u5f3a\uff08\u91cd\u6784\u4e5f\u5bb9\u6613\uff09\u7684 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals/blob/master/stage-1-proposals.md"},"Stage 1\uff08\u63d0\u6848\u9636\u6bb5\uff09"),"\u3001",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals#stage-2"},"Stage 2\uff08\u8349\u6848\u9636\u6bb5\uff09"),"\u3001",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposals#stage-3"},"Stage 3\uff08\u5019\u9009\u9636\u6bb5\uff09"),"\u8bed\u6cd5\uff0c\u6bd4\u5982\uff1a"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-decorators"},"Decorators"),"\uff08\u9ed8\u8ba4\u4f7f\u7528 legacy \u63d0\u6848\uff0c\u53ef\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"li"},"output.enableLatestDecorators")," \u4f7f\u7528\u65b0\u7248\u63d0\u6848\uff09"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-class-properties"},"Class Public Properties")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-private-property-in-object"},"Class Private Properties"),"\u3001",(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-private-methods"},"Class Private Methods")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator"},"Pipeline Operator"),"\uff08\u9ed8\u8ba4\u4e3a minimal \u63d0\u6848\uff09"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-partial-application"},"Partial Application")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-function-bind"},"Bind Operator")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from"},"export default from"),", ",(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-export-namespace-from"},"export namespace from")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-optional-catch-binding"},"Optional Catch Binding")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-numeric-separator"},"Numeric Separator"))))),(0,p.kt)("p",null,"\u6211\u4eec\u628a ",(0,p.kt)("inlineCode",{parentName:"p"},"src/App.jsx")," \u6539\u6210\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const getAvatar = users =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData =\n  [\n    { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n    { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n    { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n    { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n  ] |> getAvatar;\n\nfunction App() {\n  return (\n    <ul>\n      {mockData.map(({ name, avatar, email }) => (\n        <li key={name}>\n          <img src={avatar} width={60} height={60} /> ---\n          <span>{name}</span> ---\n          <span>{email}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport default App;\n")),(0,p.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5176\u4e2d\u4f7f\u7528\u4e86\u591a\u79cd ES6+ \u8bed\u6cd5\uff08\u6ce8\u610f\u751f\u6210 mockData \u8fc7\u7a0b\u4e2d\u4f7f\u7528\u4e86 ",(0,p.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator"},"Pipeline Operator")," \u8bed\u6cd5\uff09\uff0c\u90fd\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u914d\u7f6e\u3002"),(0,p.kt)("p",null,"\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u67e5\u770b\u8fd0\u884c\u7ed3\u679c\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/contacts.png",alt:"result"})),(0,p.kt)("hr",null),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,p.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c04/hello-modern"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}m.isMDXComponent=!0}}]);