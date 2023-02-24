"use strict";(self.webpackChunkbpmn_js_doc=self.webpackChunkbpmn_js_doc||[]).push([[837],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(5882),a=(t(9496),t(9613));const o={sidebar_position:2},i="diagram-js",l={unversionedId:"diagram-js/index",id:"diagram-js/index",title:"diagram-js",description:"diagram-js \u63d0\u4f9b\u4e86\u5b8c\u6574\u7684 svg \u7ed8\u56fe\u529f\u80fd\u3002\u662f bpmn-js \u7f16\u8f91\u5668\u56fe\u5f62\u90e8\u5206\u7684\u57fa\u7840\u3002",source:"@site/docs/diagram-js/index.md",sourceDirName:"diagram-js",slug:"/diagram-js/",permalink:"/bpmn-js-doc/docs/diagram-js/",draft:!1,editUrl:"https://github.com/YuJianghao/bpmn-js-doc/tree/main/docs/diagram-js/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5199\u5728\u5f00\u59cb",permalink:"/bpmn-js-doc/docs/"},next:{title:"Styles",permalink:"/bpmn-js-doc/docs/diagram-js/styles"}},s={},p=[{value:"\u6e90\u7801\u5206\u6790",id:"\u6e90\u7801\u5206\u6790",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"diagram-js"},"diagram-js"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"diagram-js")," \u63d0\u4f9b\u4e86\u5b8c\u6574\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"svg")," \u7ed8\u56fe\u529f\u80fd\u3002\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"bpmn-js")," \u7f16\u8f91\u5668\u56fe\u5f62\u90e8\u5206\u7684\u57fa\u7840\u3002"),(0,a.kt)("h2",{id:"\u6e90\u7801\u5206\u6790"},"\u6e90\u7801\u5206\u6790"),(0,a.kt)("p",null,"\u4ece\u6e90\u7801\u770b\u8d77\uff0c\u5b9a\u4f4d\u5230\u5165\u53e3\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"// index.js\nexport { default } from './lib/Diagram';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,9-13,17}","{3,9-13,17}":!0},"// lib/Diagram.js\nexport default function Diagram(options, injector) {\n  this.injector = injector = injector || createInjector(options); // \u770b\u8fd9\u91cc\n  // ...\n}\n\nfunction createInjector(options) {\n    options = options || {};\n  var configModule = {\n    'config': [ 'value', options ]\n  };\n  var modules = [ configModule, CoreModule ].concat(options.modules || []);\n  return bootstrap(modules);\n}\n\nfunction bootstrap(modules) {\n  var injector = new Injector(modules);\n  injector.init();\n  return injector;\n}\n")),(0,a.kt)("p",null,"\u6cbf\u7740 ",(0,a.kt)("inlineCode",{parentName:"p"},"default export")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"Diagram")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"createInjector")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," > ",(0,a.kt)("inlineCode",{parentName:"p"},"new Injector")," \u7684\u8def\u5f84\u770b\u4e0b\u6765\u3002\u53ef\u4ee5\u53d1\u73b0\uff0c\u6700\u7ec8\u65b0\u5efa\u4e86\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nikku/didi#example"},(0,a.kt)("inlineCode",{parentName:"a"},"didi.Injector")),"\u3002\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Injector")," \u6ce8\u5165\u4e86\u4e00\u7cfb\u5217 ",(0,a.kt)("inlineCode",{parentName:"p"},"modules")," \u6765\u63d0\u4f9b\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u7ee7\u7eed\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"modules"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"configModules"),"\uff1a\u63d0\u4f9b\u914d\u7f6e\u9879\u5230 Injector \u4e2d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CoreModule"),"\uff1a\u662f\u6211\u4eec\u5173\u6ce8\u7684\u91cd\u70b9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// lib/core/index.js\nexport default {\n  __depends__: [ DrawModule ], // \u753b\u753b\u76f8\u5173\u7684\n  __init__: [ 'canvas' ],\n  canvas: [ 'type', Canvas ], // \u753b\u5e03\n  elementRegistry: [ 'type', ElementRegistry ], // \u5143\u7d20\u6ce8\u518c\u8868\n  elementFactory: [ 'type', ElementFactory ], // \u5143\u7d20\u5de5\u5382\n  eventBus: [ 'type', EventBus ], // \u4e8b\u4ef6\u603b\u7ebf\n  graphicsFactory: [ 'type', GraphicsFactory ] // \u56fe\u5f62\u5143\u7d20\u5de5\u5382\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CoreModule")," \u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"p"},"DrawModule"),"\u3002\u6211\u4eec\u4ece\u4f9d\u8d56\u9879\u770b\u8d77"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// lib/draw/index.js\nexport default {\n  __init__: [ 'defaultRenderer' ],\n  defaultRenderer: [ 'type', DefaultRenderer ],\n  styles: [ 'type', Styles ]\n};\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u4f9d\u6b21\u770b\u8fd9\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"Modules"),"\uff0c\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u8bb2\u5230\u54ea\u4e86\uff0c\u53ef\u4ee5\u56de\u8fd9\u9875\u770b\u76ee\u5f55\uff1a"),(0,a.kt)("mermaid",{value:"graph TD;\n    modules--\x3eConfigModules;\n    modules--\x3eCoreModule;\n    CoreModule--\x3eDrawModule;\n    DrawModule--\x3eStyles;\n    DrawModule--\x3eDefaultRenderer;\n    DefaultRenderer--\x3eBaseRenderer;\n    DefaultRenderer--\x3emodel;\n    BaseRenderer--\x3emodel;\n    BaseRenderer--\x3eEventBus;\n    DefaultRenderer--\x3eEventBus;\n    CoreModule--\x3eEventBus;\n    CoreModule--\x3eElementFactory;\n    CoreModule--\x3eElementRegistry;\n    CoreModule--\x3eGraphicsFactory;\n    CoreModule--\x3eCanvas;\n    ElementRegistry--\x3eEventBus;\n    GraphicsFactory--\x3eEventBus;\n    GraphicsFactory--\x3eElementRegistry;\n    Canvas--\x3eEventBus;\n    Canvas--\x3eGraphicsFactory;\n    Canvas--\x3eElementRegistry;\n    ElementFactory--\x3emodel;"}))}c.isMDXComponent=!0}}]);