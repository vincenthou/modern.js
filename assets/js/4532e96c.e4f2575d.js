"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7639],{57522:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(29901);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var r=a.createContext({}),m=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(r.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(t),g=s,d=u["".concat(r,".").concat(g)]||u[g]||p[g]||i;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function g(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=t(18249),s=(t(29901),t(57522));const i={sidebar_position:7},o="\u81ea\u5b9a\u4e49\u63d0\u4ea4 commit \u4fe1\u606f",l={unversionedId:"guides/features/changesets/commit",id:"guides/features/changesets/commit",title:"\u81ea\u5b9a\u4e49\u63d0\u4ea4 commit \u4fe1\u606f",description:"Changesets \u652f\u6301\u914d\u7f6e commit \u4e3a true \u65f6\uff0c\u5728\u6267\u884c change \u548c bump \u547d\u4ee4\u65f6\u81ea\u52a8\u63d0\u4ea4\u5f53\u524d\u53d8\u66f4\u3002",source:"@site/docs/guides/features/changesets/commit.md",sourceDirName:"guides/features/changesets",slug:"/guides/features/changesets/commit",permalink:"/docs/guides/features/changesets/commit",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guidesSidebar",previous:{title:"\u81ea\u5b9a\u4e49 Changelog \u751f\u6210",permalink:"/docs/guides/features/changesets/changelog"},next:{title:"\u81ea\u5b9a\u4e49 Release Note \u683c\u5f0f",permalink:"/docs/guides/features/changesets/release-note"}},r={},m=[{value:"\u81ea\u5b9a\u4e49 commit \u4fe1\u606f\u5185\u5bb9",id:"\u81ea\u5b9a\u4e49-commit-\u4fe1\u606f\u5185\u5bb9",level:2},{value:"getAddMessage",id:"getaddmessage",level:3},{value:"Params",id:"params",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"\u9ed8\u8ba4\u5b9e\u73b0",id:"\u9ed8\u8ba4\u5b9e\u73b0",level:4},{value:"getVersionMessage",id:"getversionmessage",level:3},{value:"Params",id:"params-1",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:4},{value:"\u9ed8\u8ba4\u5b9e\u73b0",id:"\u9ed8\u8ba4\u5b9e\u73b0-1",level:4},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u76f8\u5bf9\u8def\u5f84",id:"\u914d\u7f6e\u76f8\u5bf9\u8def\u5f84",level:3},{value:"\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",id:"\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",level:3},{value:"\u4f7f\u7528 <code>npx @modern-js/create</code> \u521b\u5efa\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u3002",id:"\u4f7f\u7528-npx-modern-jscreate-\u521b\u5efa\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",level:4},{value:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9\u3002",id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9",level:4},{value:"\u5c06\u6a21\u5757\u53d1\u5e03\u5230 NPM\u3002",id:"\u5c06\u6a21\u5757\u53d1\u5e03\u5230-npm",level:4},{value:"\u5728\u76ee\u6807\u4ed3\u5e93\u6839\u76ee\u5f55\u5b89\u88c5\u5bf9\u5e94\u6a21\u5757\uff0c\u4f8b\u5982 custom-commit\u3002",id:"\u5728\u76ee\u6807\u4ed3\u5e93\u6839\u76ee\u5f55\u5b89\u88c5\u5bf9\u5e94\u6a21\u5757\u4f8b\u5982-custom-commit",level:4},{value:"\u914d\u7f6e changeset \u7684 commit \u914d\u7f6e\u4e3a\u5305\u540d\u79f0\u3002",id:"\u914d\u7f6e-changeset-\u7684-commit-\u914d\u7f6e\u4e3a\u5305\u540d\u79f0",level:4},{value:"\u4f7f\u7528 Monorepo \u5de5\u7a0b\u65b9\u6848",id:"\u4f7f\u7528-monorepo-\u5de5\u7a0b\u65b9\u6848",level:3},{value:"\u6267\u884c <code>pnpm run new</code> \u521b\u5efa\u6a21\u5757\u5b50\u9879\u76ee\u3002",id:"\u6267\u884c-pnpm-run-new-\u521b\u5efa\u6a21\u5757\u5b50\u9879\u76ee",level:4},{value:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9\u3002",id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9-1",level:4},{value:"\u5728 Monorepo \u6839\u76ee\u5f55\u6dfb\u52a0\u5b50\u9879\u76ee\u6a21\u5757\u4f9d\u8d56\uff0c\u4f8b\u5982 custom-commit\u3002",id:"\u5728-monorepo-\u6839\u76ee\u5f55\u6dfb\u52a0\u5b50\u9879\u76ee\u6a21\u5757\u4f9d\u8d56\u4f8b\u5982-custom-commit",level:4},{value:"\u914d\u7f6e changeset \u7684 commit \u914d\u7f6e\u4e3a\u5305\u540d\u79f0\u3002",id:"\u914d\u7f6e-changeset-\u7684-commit-\u914d\u7f6e\u4e3a\u5305\u540d\u79f0-1",level:4}],c={toc:m};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u81ea\u5b9a\u4e49\u63d0\u4ea4-commit-\u4fe1\u606f"},"\u81ea\u5b9a\u4e49\u63d0\u4ea4 commit \u4fe1\u606f"),(0,s.kt)("p",null,"Changesets \u652f\u6301\u914d\u7f6e ",(0,s.kt)("inlineCode",{parentName:"p"},"commit")," \u4e3a true \u65f6\uff0c\u5728\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"change")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u65f6\u81ea\u52a8\u63d0\u4ea4\u5f53\u524d\u53d8\u66f4\u3002"),(0,s.kt)("p",null,"\u9ed8\u8ba4\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"commit")," \u4fe1\u606f\u7531 ",(0,s.kt)("inlineCode",{parentName:"p"},"@changesets/cli/commit")," \u63d0\u4f9b\uff0c\u9ed8\u8ba4\u4fe1\u606f\u683c\u5f0f\u4e3a\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-change-commit-info.png",alt:"change commit"}),"\n",(0,s.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bump-commit-info.png",alt:"bump commit"})),(0,s.kt)("p",null,"\u5f53\u9ed8\u8ba4\u7684 commit \u4fe1\u606f\u4e0d\u80fd\u6ee1\u8db3\u9700\u6c42\u65f6\uff0c\u652f\u6301\u81ea\u5b9a\u4e49 commit \u4fe1\u606f\u3002"),(0,s.kt)("h2",{id:"\u81ea\u5b9a\u4e49-commit-\u4fe1\u606f\u5185\u5bb9"},"\u81ea\u5b9a\u4e49 commit \u4fe1\u606f\u5185\u5bb9"),(0,s.kt)("p",null,"commit \u4fe1\u606f\u5206\u4e3a\u4e24\u79cd\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"change")," \u547d\u4ee4\u65f6\u81ea\u52a8\u751f\u6210\u7684 commit \u4fe1\u606f\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"bump")," \u547d\u4ee4\u65f6\u81ea\u52a8\u751f\u6210\u7684 commit \u4fe1\u606f\u3002")),(0,s.kt)("p",null,"\u81ea\u5b9a\u4e49\u903b\u8f91\u4e3b\u8981\u5b9e\u73b0\u4e24\u4e2a\u51fd\u6570\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"getAddMessage")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"getVersionMessage"),"\uff0c\u5206\u522b\u7528\u6765\u5b9a\u4e49\u4e0a\u8ff0\u8fd9\u4e24\u79cd\u4fe1\u606f\u3002"),(0,s.kt)("h3",{id:"getaddmessage"},"getAddMessage"),(0,s.kt)("h4",{id:"params"},"Params"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"changeset")),(0,s.kt)("p",null,"\u5f53\u524d\u521b\u5efa\u7684 chagneset \u4fe1\u606f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"type Release = {\n    name: string;\n    type: VersionType;\n};\n\ntype Changeset = {\n    summary: string;\n    releases: Array<Release>;\n};\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"options")),(0,s.kt)("p",null,"\u914d\u7f6e commit \u65f6\u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"commit \u914d\u7f6e\u4e3a\u6570\u7ec4\u65f6\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u652f\u6301\u4f20\u5165\u9ed8\u8ba4\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u4f1a\u5bf9\u5e94\u7684\u4f7f\u7528\u8be5\u53c2\u6570\u4f20\u9012\u3002")),(0,s.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,s.kt)("p",null,"commit \u4fe1\u606f\u5185\u5bb9\u3002"),(0,s.kt)("h4",{id:"\u9ed8\u8ba4\u5b9e\u73b0"},"\u9ed8\u8ba4\u5b9e\u73b0"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"@changesets/cli/commit")," \u9ed8\u8ba4\u5904\u7406\u903b\u8f91\u4e3a\u4ee5 ",(0,s.kt)("inlineCode",{parentName:"p"},"docs(changeset):")," \u5f00\u5934\uff0ccommit \u4fe1\u606f\u4e3a changeset \u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"summary"),"\uff0c\u5e76\u6839\u636e\u4f20\u5165\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"skipCI")," \u53c2\u6570\u914d\u7f6e\u6dfb\u52a0 ","[skip ci]"," \u4fe1\u606f\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'type SkipCI = boolean | "add" | "version";\n\nconst getAddMessage = async (\n  changeset: Changeset,\n  options: { skipCI?: SkipCI } | null\n) => {\n  const skipCI = options?.skipCI === "add" || options?.skipCI === true;\n  return outdent`docs(changeset): ${changeset.summary}${\n    skipCI ? `\\n\\n[skip ci]\\n` : ""\n  }`;\n};\n')),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/outdent"},"outdent")," \u76ee\u7684\u662f\u5220\u9664\u6a21\u677f\u5b57\u7b26\u4e32\u5f00\u5934\u7684\u7a7a\u683c\u5185\u5bb9\uff0c\u4f7f commit \u4fe1\u606f\u66f4\u7b26\u5408\u89c4\u8303\u3002")),(0,s.kt)("h3",{id:"getversionmessage"},"getVersionMessage"),(0,s.kt)("h4",{id:"params-1"},"Params"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"releasePlan")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'type VersionType = "major" | "minor" | "patch" | "none";\n\ntype Release = {\n    name: string;\n    type: VersionType;\n};\n\ntype Changeset = {\n    id: string;\n    summary: string;\n    releases: Array<Release>;\n};\n\ntype ComprehensiveRelease = {\n    name: string;\n    type: VersionType;\n    oldVersion: string;\n    newVersion: string;\n    changesets: string[];\n};\n\ntype PreState = {\n    mode: "pre" | "exit"; // pre \u6a21\u5f0f\u5f53\u524d\u72b6\u6001\n    tag: string; // pre \u7684\u7c7b\u578b\n    initialVersions: {\n        [pkgName: string]: string; // \u7248\u672c\u5347\u7ea7\u524d\u5305\u540d\u53ca\u7248\u672c\u53f7\u4fe1\u606f\uff0cMap \u683c\u5f0f\n    };\n    changesets: string[]; // \u672c\u6b21\u5347\u7ea7\u7684 changeset id \u5217\u8868\n};\n\ntype ReleasePlan = {\n    changesets: Changeset[]; // \u672c\u6b21\u5347\u7ea7\u7684 changeset \u5217\u8868\n    releases: ComprehensiveRelease[]; // \u5f53\u524d\u5347\u7ea7\u7684\u5305\u4fe1\u606f\uff0c\u5305\u542b\u5305\u540d\u79f0\u3001\u5f53\u524d\u7248\u672c\u3001\u5347\u7ea7\u540e\u7248\u672c\u3001\u5347\u7ea7\u7c7b\u578b\u7b49\n    preState: PreState | undefined; // \u5f53\u524d\u5982\u679c\u4e3a pre \u53d1\u5e03\uff0c\u63d0\u4f9b\u76f8\u5173\u72b6\u6001\u4fe1\u606f\n};\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"options")),(0,s.kt)("p",null,"\u914d\u7f6e commit \u65f6\u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"commit \u914d\u7f6e\u4e3a\u6570\u7ec4\u65f6\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u652f\u6301\u4f20\u5165\u9ed8\u8ba4\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u4f1a\u5bf9\u5e94\u7684\u4f7f\u7528\u8be5\u53c2\u6570\u4f20\u9012\u3002")),(0,s.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,s.kt)("p",null,"commit \u4fe1\u606f\u5185\u5bb9\u3002"),(0,s.kt)("h4",{id:"\u9ed8\u8ba4\u5b9e\u73b0-1"},"\u9ed8\u8ba4\u5b9e\u73b0"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"@changesets/cli/commit")," \u9ed8\u8ba4\u5904\u7406\u903b\u8f91\u4e3a\uff1a\u5148\u5c55\u793a\u5f53\u524d\u9700\u8981 release \u7684\u5305\u6570\u91cf\uff0c\u518d\u5c55\u793a release \u5305\u7684\u540d\u79f0\u53ca\u65b0\u7248\u672c\u53f7\uff0c\u5e76\u6839\u636e\u4f20\u5165\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"skipCI")," \u53c2\u6570\u914d\u7f6e\u6dfb\u52a0 ","[skip ci]"," \u4fe1\u606f\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const getVersionMessage = async (\n  releasePlan: ReleasePlan,\n  options: { skipCI?: SkipCI } | null\n) => {\n  const skipCI = options?.skipCI === "version" || options?.skipCI === true;\n  const publishableReleases = releasePlan.releases.filter(\n    release => release.type !== "none"\n  );\n  const numPackagesReleased = publishableReleases.length;\n\n  const releasesLines = publishableReleases\n    .map(release => `  ${release.name}@${release.newVersion}`)\n    .join("\\n");\n\n  return outdent`\n    RELEASING: Releasing ${numPackagesReleased} package(s)\n\n    Releases:\n    ${releasesLines}\n    ${skipCI ? `\\n[skip ci]\\n` : ""}\n`;\n};\n')),(0,s.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,s.kt)("p",null,"Changesets \u914d\u7f6e\u6587\u4ef6\u4e2d ",(0,s.kt)("inlineCode",{parentName:"p"},"commit")," \u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u7528\u4e8e\u6807\u8bb0\u662f\u5426\u9700\u8981\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"change")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"bump")," \u547d\u4ee4\u662f\u63d0\u4ea4 commit \u4fe1\u606f\u53ca commit \u4fe1\u606f\u7684\u83b7\u53d6\u9014\u5f84\u3002"),(0,s.kt)("p",null,"\u8be5\u914d\u7f6e\u53ef\u4ee5\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"boolean"),"\uff0c\u4e3a true \u65f6\u4f7f\u7528\u9ed8\u8ba4 ",(0,s.kt)("inlineCode",{parentName:"p"},"@changesets/cli/commit")," \u683c\u5f0f\u5316 commit \u4fe1\u606f\u3002"),(0,s.kt)("p",null,"\u8be5\u914d\u7f6e\u53ef\u4ee5\u4e3a\u5b57\u7b26\u4e32\uff0c\u76f4\u63a5\u58f0\u660e\u83b7\u53d6 commit \u4fe1\u606f\u6a21\u5757\u7684\u6a21\u5757\u540d\u79f0\u6216\u8005\u8def\u5f84\u3002"),(0,s.kt)("p",null,"\u8be5\u914d\u7f6e\u8fd8\u652f\u6301\u914d\u7f6e\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u83b7\u53d6 commit \u4fe1\u606f\u6a21\u5757\u7684\u6a21\u5757\u540d\u79f0\u6216\u8005\u8def\u5f84\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4e3a\u4f20\u5165\u5bf9\u5e94\u51fd\u6570\u7684\u53c2\u6570\u503c\uff0c\u4f1a\u4f5c\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"getAddMessage")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"getVersionMessage")," \u51fd\u6570\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165\u3002"),(0,s.kt)("h3",{id:"\u914d\u7f6e\u76f8\u5bf9\u8def\u5f84"},"\u914d\u7f6e\u76f8\u5bf9\u8def\u5f84"),(0,s.kt)("p",null,"commit \u914d\u7f6e\u5982\u679c\u4e3a\u76f8\u5bf9\u8def\u5f84\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},".changesets")," \u76ee\u5f55\u4e0b\u7684\u76f8\u5bf9\u8def\u5f84\u3002"),(0,s.kt)("p",null,"\u4f8b\u5982\u521b\u5efa .changeset/my-commit-config.js \u6587\u4ef6\uff0c\u5b9a\u4e49\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title=".changeset/my-commit-config.js"',title:'".changeset/my-commit-config.js"'},"async function getAddMessage(changeset, options) {}\n\nasync function getVersionMessage(releasePlan, options) {}\n\nmodule.exports = {\n  getAddMessage,\n  getVersionMessage,\n};\n")),(0,s.kt)("p",null,"commit \u914d\u7f6e\u4e3a ./my-commit-config.js \u5373\u53ef:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".changesets/config.json"',title:'".changesets/config.json"'},'{\n  "changelog": "./my-commit-config.js",\n   ...\n}\n')),(0,s.kt)("h3",{id:"\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"},"\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"),(0,s.kt)("p",null,"\u81ea\u5b9a\u4e49 commit \u8fd8\u53ef\u4ee5\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u7ba1\u7406\uff0c\u63d0\u4f9b\u901a\u7528\u65b9\u6848\u3002"),(0,s.kt)("p",null,"\u81ea\u5b9a\u4e49 Changelog \u8fd8\u53ef\u4ee5\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u7ba1\u7406\uff0c\u63d0\u4f9b\u901a\u7528\u65b9\u6848\u3002"),(0,s.kt)("h4",{id:"\u4f7f\u7528-npx-modern-jscreate-\u521b\u5efa\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"},"\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"h4"},"npx @modern-js/create")," \u521b\u5efa\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u6a21\u5757\n? \u8bf7\u586b\u5199\u9879\u76ee\u540d\u79f0 custom-commit\n? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n? \u8bf7\u9009\u62e9\u5305\u7ba1\u7406\u5de5\u5177 pnpm\n")),(0,s.kt)("h4",{id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/index.ts"',title:'"src/index.ts"'},"export async function getAddMessage() {}\n\nexport async function getVersionMessage() {}\n\n")),(0,s.kt)("h4",{id:"\u5c06\u6a21\u5757\u53d1\u5e03\u5230-npm"},"\u5c06\u6a21\u5757\u53d1\u5e03\u5230 NPM\u3002"),(0,s.kt)("h4",{id:"\u5728\u76ee\u6807\u4ed3\u5e93\u6839\u76ee\u5f55\u5b89\u88c5\u5bf9\u5e94\u6a21\u5757\u4f8b\u5982-custom-commit"},"\u5728\u76ee\u6807\u4ed3\u5e93\u6839\u76ee\u5f55\u5b89\u88c5\u5bf9\u5e94\u6a21\u5757\uff0c\u4f8b\u5982 custom-commit\u3002"),(0,s.kt)("h4",{id:"\u914d\u7f6e-changeset-\u7684-commit-\u914d\u7f6e\u4e3a\u5305\u540d\u79f0"},"\u914d\u7f6e changeset \u7684 commit \u914d\u7f6e\u4e3a\u5305\u540d\u79f0\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "changelog": "custom-commit",\n   ...\n}\n')),(0,s.kt)("h3",{id:"\u4f7f\u7528-monorepo-\u5de5\u7a0b\u65b9\u6848"},"\u4f7f\u7528 Monorepo \u5de5\u7a0b\u65b9\u6848"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u5f53\u524d\u4ed3\u5e93\u4e3a Monorepo \u5de5\u7a0b\u65b9\u6848\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6a21\u5757\u5b50\u9879\u76ee\u8fdb\u884c\u7ba1\u7406\u3002"),(0,s.kt)("h4",{id:"\u6267\u884c-pnpm-run-new-\u521b\u5efa\u6a21\u5757\u5b50\u9879\u76ee"},"\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"h4"},"pnpm run new")," \u521b\u5efa\u6a21\u5757\u5b50\u9879\u76ee\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u6a21\u5757\n? \u8bf7\u586b\u5199\u5b50\u9879\u76ee\u540d\u79f0 custom-commit\n? \u8bf7\u586b\u5199\u5b50\u9879\u76ee\u76ee\u5f55\u540d\u79f0 custom-commit\n? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n")),(0,s.kt)("h4",{id:"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9-1"},"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5185\u5bb9\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/index.ts"',title:'"src/index.ts"'},"export async function getAddMessage() {}\n\nexport async function getVersionMessage() {}\n\n")),(0,s.kt)("h4",{id:"\u5728-monorepo-\u6839\u76ee\u5f55\u6dfb\u52a0\u5b50\u9879\u76ee\u6a21\u5757\u4f9d\u8d56\u4f8b\u5982-custom-commit"},"\u5728 Monorepo \u6839\u76ee\u5f55\u6dfb\u52a0\u5b50\u9879\u76ee\u6a21\u5757\u4f9d\u8d56\uff0c\u4f8b\u5982 custom-commit\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "devDependencies": {\n    "custom-commit": "workspace: *",\n    ...\n  }\n}\n')),(0,s.kt)("h4",{id:"\u914d\u7f6e-changeset-\u7684-commit-\u914d\u7f6e\u4e3a\u5305\u540d\u79f0-1"},"\u914d\u7f6e changeset \u7684 commit \u914d\u7f6e\u4e3a\u5305\u540d\u79f0\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".changesets/config.json"',title:'".changesets/config.json"'},'{\n  "commit": "custom-commit",\n   ...\n}\n')),(0,s.kt)("p",null,"\u8be5\u6a21\u5757\u53d1\u5e03\u5230 NPM \u540e\uff0c\u4f9d\u7136\u53ef\u4ee5\u548c\u6a21\u5757\u7c7b\u578b\u4e00\u6837\u4f9b\u5176\u4ed6\u4ed3\u5e93\u4f7f\u7528\u3002"))}p.isMDXComponent=!0}}]);