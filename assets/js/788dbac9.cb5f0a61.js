"use strict";(self.webpackChunkbpmn_js_doc=self.webpackChunkbpmn_js_doc||[]).push([[907],{9613:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},747:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(5882),a=(t(9496),t(9613));const o={sidebar_position:5},i="DefaultRenderer",s={unversionedId:"diagram-js/default-renderer",id:"diagram-js/default-renderer",title:"DefaultRenderer",description:"\u5b9a\u4e49\u4e86\u4e00\u4e2a\u9ed8\u8ba4\u7684 Renderer\uff0c\u5728\u6ca1\u6709\u5916\u90e8\u5b9a\u4e49 Renderer \u7684\u65f6\u5019\u4f7f\u7528\u3002",source:"@site/docs/diagram-js/default-renderer.md",sourceDirName:"diagram-js",slug:"/diagram-js/default-renderer",permalink:"/bpmn-js-doc/docs/diagram-js/default-renderer",draft:!1,editUrl:"https://github.com/YuJianghao/bpmn-js-doc/tree/main/docs/diagram-js/default-renderer.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"BaseRenderer",permalink:"/bpmn-js-doc/docs/diagram-js/base-renderer"},next:{title:"DrawModule",permalink:"/bpmn-js-doc/docs/diagram-js/draw-module"}},l={},d=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2}],c={toc:d};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"defaultrenderer"},"DefaultRenderer"),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e86\u4e00\u4e2a\u9ed8\u8ba4\u7684 Renderer\uff0c\u5728\u6ca1\u6709\u5916\u90e8\u5b9a\u4e49 Renderer \u7684\u65f6\u5019\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{23}","{23}":!0},'declare module "diagram-js/lib/draw/DefaultRenderer" {\n  import Styles from "diagram-js/lib/draw/Styles"\n  import { Connection, GraphElement } from "diagram-js/lib/model"\n  import { IRenderer } from "diagram-js/lib/draw/BaseRenderer"\n  import EventBus from "diagram-js/lib/core/EventBus"\n  export class DefaultRenderer implements IRenderer {\n    constructor(eventBus: EventBus, styles: Styles)\n    static $inject: [\'eventBus\', \'styles\']\n  }\n}\n')),(0,a.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,a.kt)("p",null,"\u5728\u6784\u9020\u51fd\u6570\u4e2d\uff0c\u4f1a\u5c06\u81ea\u5df1\u6ce8\u518c\u5230 BaseRenderer \u7684\u6e32\u67d3\u4e8b\u4ef6\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4}","{4}":!0},"export default function DefaultRenderer(eventBus, styles) {\n\n  //\n  BaseRenderer.call(this, eventBus, DEFAULT_RENDER_PRIORITY);\n\n  // ...\n}\n")))}u.isMDXComponent=!0}}]);