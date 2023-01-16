"use strict";(self.webpackChunkbpmn_js_doc=self.webpackChunkbpmn_js_doc||[]).push([[290],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,b=u["".concat(l,".").concat(d)]||u[d]||v[d]||o;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(5882),a=(t(9496),t(9613));const o={sidebar_position:2},i="EventBus",s={unversionedId:"diagram-js/event-bus",id:"diagram-js/event-bus",title:"EventBus",description:"\u4e8b\u4ef6\u603b\u7ebf",source:"@site/docs/diagram-js/event-bus.md",sourceDirName:"diagram-js",slug:"/diagram-js/event-bus",permalink:"/bpmn-js-doc/docs/diagram-js/event-bus",draft:!1,editUrl:"https://github.com/YuJianghao/bpmn-js-doc/tree/main/docs/diagram-js/event-bus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Styles",permalink:"/bpmn-js-doc/docs/diagram-js/styles"}},l={},c=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventbus"},"EventBus"),(0,a.kt)("p",null,"\u4e8b\u4ef6\u603b\u7ebf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'declare module "diagram-js/lib/core/EventBus" {\n  export class InternalEvent {\n    stopPropagation(): void\n    preventDefault(): void\n    init(data: any): void\n  }\n  export type EventCallback = (\n    e: InternalEvent & { type: string },\n    ...args: any[]\n  ) => void\n  /**\n   * A general purpose event bus.\n   */\n  export default class EventBus {\n    /**\n     * Register an event listener for events with the given name.\n     */\n    on(\n      events: string | string[],\n      priority: number,\n      callback: EventCallback,\n      that: any\n    ): void\n    on(events: string | string[], callback: EventCallback, that: any): void\n\n    /**\n     * Register an event listener that is executed only once.\n     */\n    once(\n      events: string | string[],\n      priority: number,\n      callback: EventCallback,\n      that: any\n    ): void\n    once(events: string | string[], callback: EventCallback, that: any): void\n\n    /**\n     * Removes event listeners by event and callback. If no callback is given,\n     * all listeners for a given event name are being removed.\n     */\n    off(events: string | string[], callback?: EventCallback): void\n\n    /**\n     * Create an EventBus event.\n     */\n    createEvent(data: any): InternalEvent\n\n    /**\n     * Fires a named event.\n     */\n    fire<T = any>(type: string, data: T, ...args: any[]): any\n    fire<T extends { type: string }>(data: T, ...args: any[]): any\n  }\n}\n')),(0,a.kt)("p",null,"\u5b9e\u73b0\u4e86 eventBus \u9700\u8981\u7684 on/off/once/fire \u7684\u57fa\u672c\u529f\u80fd\u3002"),(0,a.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,a.kt)("p",null,"TODO"))}u.isMDXComponent=!0}}]);