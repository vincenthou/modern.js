(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{248:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dev-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dev-config"}},[t._v("#")]),t._v(" Dev Config")]),t._v(" "),s("p",[t._v("本章节描述了 Builder 中与本地开发有关的配置。")]),t._v(" "),s("h2",{attrs:{id:"dev-assetprefix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dev-assetprefix"}},[t._v("#")]),t._v(" dev.assetPrefix")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("boolean | string")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("'/'")])])]),t._v(" "),s("p",[t._v("设置开发环境下的静态资源 URL 前缀，对应 webpack 的 "),s("a",{attrs:{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"noopener noreferrer"}},[t._v("output.publicPath"),s("OutboundLink")],1),t._v(" 配置。")]),t._v(" "),s("p",[t._v("该配置项仅用于开发环境。在生产环境下，请使用 "),s("code",[t._v("output.assetPrefix")]),t._v(" 配置项进行设置。")]),t._v(" "),s("h4",{attrs:{id:"boolean-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boolean-类型"}},[t._v("#")]),t._v(" Boolean 类型")]),t._v(" "),s("p",[t._v("如果设置 "),s("code",[t._v("assetPrefix")]),t._v(" 为 "),s("code",[t._v("true")]),t._v("，Builder 会自动计算出 "),s("code",[t._v("//ip:port/")]),t._v(" 作为 URL 前缀：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dev")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("assetPrefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("对应 JS 文件在浏览器中加载的地址如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script defer src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//${ip}:8080/static/js/main.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("如果设置 "),s("code",[t._v("assetPrefix")]),t._v(" 为 "),s("code",[t._v("false")]),t._v(" 或不设置，则默认使用 "),s("code",[t._v("/")]),t._v(" 作为访问前缀。")]),t._v(" "),s("h4",{attrs:{id:"string-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-类型"}},[t._v("#")]),t._v(" String 类型")]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("assetPrefix")]),t._v(" 的值为 "),s("code",[t._v("string")]),t._v(" 类型时，字符串会作为前缀，自动拼接到静态资源访问 URL 上：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dev")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("assetPrefix")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com/assets/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("对应 JS 文件在浏览器中加载的地址如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script defer src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/assets/static/js/main.js"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"dev-hmr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dev-hmr"}},[t._v("#")]),t._v(" dev.hmr")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("是否开启 Hot Module Replacement 热更新能力。")]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("hmr")]),t._v(" 设置为 "),s("code",[t._v("false")]),t._v(" 时，将不再提供热更新和 react-refresh 功能。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dev")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hmr")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"dev-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dev-https"}},[t._v("#")]),t._v(" dev.https")]),t._v(" "),s("p",[t._v("TODO")]),t._v(" "),s("h2",{attrs:{id:"dev-port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dev-port"}},[t._v("#")]),t._v(" dev.port")]),t._v(" "),s("p",[t._v("TODO")]),t._v(" "),s("h2",{attrs:{id:"dev-starturl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dev-starturl"}},[t._v("#")]),t._v(" dev.startUrl")]),t._v(" "),s("p",[t._v("TODO")])])}),[],!1,null,null,null);s.default=r.exports}}]);