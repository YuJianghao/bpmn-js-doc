"use strict";(self.webpackChunkbpmn_js_doc=self.webpackChunkbpmn_js_doc||[]).push([[994],{9613:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>f});var t=r(9496);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),u=a,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return r?t.createElement(f,i(i({ref:n},l),{},{components:r})):t.createElement(f,i({ref:n},l))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4978:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=r(5882),a=(r(9496),r(9613));const o={sidebar_position:4},i="BaseRenderer",s={unversionedId:"diagram-js/base-renderer",id:"diagram-js/base-renderer",title:"BaseRenderer",description:"\u5b9a\u4e49\u4e86\u4e00\u4e2a Renderer \u5e94\u8be5\u6709\u7684\u63a5\u53e3\uff0c\u5e76\u4e14\u5c06\u6e32\u67d3\u8fc7\u7a0b\u63a5\u5165\u4e8b\u4ef6\u603b\u7ebf\u4e2d\u3002",source:"@site/docs/diagram-js/base-renderer.md",sourceDirName:"diagram-js",slug:"/diagram-js/base-renderer",permalink:"/bpmn-js-doc/docs/diagram-js/base-renderer",draft:!1,editUrl:"https://github.com/YuJianghao/bpmn-js-doc/tree/main/docs/diagram-js/base-renderer.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"model",permalink:"/bpmn-js-doc/docs/diagram-js/model"},next:{title:"DefaultRenderer",permalink:"/bpmn-js-doc/docs/diagram-js/default-renderer"}},c={},d=[],l={toc:d};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"baserenderer"},"BaseRenderer"),(0,a.kt)("p",null,"\u5b9a\u4e49\u4e86\u4e00\u4e2a Renderer \u5e94\u8be5\u6709\u7684\u63a5\u53e3\uff0c\u5e76\u4e14\u5c06\u6e32\u67d3\u8fc7\u7a0b\u63a5\u5165\u4e8b\u4ef6\u603b\u7ebf\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{23}","{23}":!0},'declare module "diagram-js/lib/draw/BaseRenderer" {\n  import { Connection, GraphElement, Shape } from "diagram-js/lib/model"\n  import EventBus from "diagram-js/lib/core/EventBus"\n\n  export interface IRenderer {\n    canRender(element: GraphElement): boolean\n    drawShape(\n      visuals: SVGGElement,\n      element: Shape,\n      attrs?: Record<string, unknown>\n    ): SVGElement\n    drawConnection(\n      visuals: SVGGElement,\n      connection: Connection,\n      attrs?: Record<string, unknown>\n    ): SVGElement\n    getShapePath(shape: Shape): string\n    getConnectionPath(connection: Connection): string\n  }\n\n  export class BaseRenderer implements IRenderer {\n    /**\n     * \u5728\u8fd9\u91cc\u5c06\u8c03\u7528\u6e32\u67d3\u76f8\u5173\u65b9\u6cd5\uff0c\u5728\u6536\u5230\u6e32\u67d3\u4e8b\u4ef6\u65f6\u6267\u884c\u6e32\u67d3 \n     */\n    constructor(eventBus: EventBus, renderPriority: number)\n  }\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5199\u5230\u8fd9\u91cc\u53d1\u73b0 copilot \u8865\u5168\u4e86\u5f88\u591a\u5b9a\u4e49\uff0c\u662f\u4e0d\u662f\u6709\u4eba\u5199\u8fc7\uff0c\u5feb\u51fa\u6765\u8d34\u51fa\u6765\uff01")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"drawShape")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"drawConnection")," \u65b9\u6cd5\u5c31\u662f\u5f80 svgElement \u4e2d\u6309\u7167\u4e00\u4e2a\u7ea6\u5b9a\u753b\u4e00\u4e9b\u5185\u5bb9\uff0c\u4ece\u800c\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u6e32\u67d3\u6837\u5f0f\u3002\u8fd9\u4e2a\u7ea6\u5b9a\u540e\u671f\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"CanvasModule")," \u4e2d\u8bb2\u5230\u3002"))}p.isMDXComponent=!0}}]);