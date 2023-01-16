"use strict";(self.webpackChunkbpmn_js_doc=self.webpackChunkbpmn_js_doc||[]).push([[290],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),k=r,v=d["".concat(s,".").concat(k)]||d[k]||c[k]||l;return t?a.createElement(v,i(i({ref:n},u),{},{components:t})):a.createElement(v,i({ref:n},u))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(5882),r=(t(9496),t(9613));const l={sidebar_position:2},i="EventBus",o={unversionedId:"diagram-js/event-bus",id:"diagram-js/event-bus",title:"EventBus",description:"\u4e8b\u4ef6\u603b\u7ebf",source:"@site/docs/diagram-js/event-bus.md",sourceDirName:"diagram-js",slug:"/diagram-js/event-bus",permalink:"/bpmn-js-doc/docs/diagram-js/event-bus",draft:!1,editUrl:"https://github.com/YuJianghao/bpmn-js-doc/tree/main/docs/diagram-js/event-bus.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Styles",permalink:"/bpmn-js-doc/docs/diagram-js/styles"},next:{title:"model",permalink:"/bpmn-js-doc/docs/diagram-js/model"}},s={},p=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"<code>on</code>",id:"on",level:3},{value:"<code>once</code>",id:"once",level:3},{value:"<code>off</code>",id:"off",level:3},{value:"<code>fire</code>",id:"fire",level:3},{value:"\u5c0f\u7ed3\u4e00",id:"\u5c0f\u7ed3\u4e00",level:3},{value:"<code>_addListener</code>",id:"_addlistener",level:3},{value:"<code>_removeListener</code>",id:"_removelistener",level:3},{value:"<code>_invokeListener(s)</code>",id:"_invokelisteners",level:3},{value:"<code>_invokeListeners</code>",id:"_invokelisteners-1",level:4},{value:"<code>_invokeListener</code>",id:"_invokelistener",level:4},{value:"\u5c0f\u7ed3\u4e8c",id:"\u5c0f\u7ed3\u4e8c",level:3}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventbus"},"EventBus"),(0,r.kt)("p",null,"\u4e8b\u4ef6\u603b\u7ebf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'declare module "diagram-js/lib/core/EventBus" {\n  export interface InternalEvent {\n    type: string\n    cancelBubble: boolean\n    defaultPrevented: boolean\n    stopPropagation(): void\n    preventDefault(): void\n    init(data: any): void\n  }\n  export type EventCallback = (\n    e: InternalEvent,\n    ...args: any[]\n  ) => void\n  /**\n   * A general purpose event bus.\n   */\n  export default class EventBus {\n    /**\n     * Register an event listener for events with the given name.\n     */\n    on(\n      events: string | string[],\n      priority: number,\n      callback: EventCallback,\n      that: any\n    ): void\n    on(events: string | string[], callback: EventCallback, that: any): void\n\n    /**\n     * Register an event listener that is executed only once.\n     */\n    once(\n      events: string | string[],\n      priority: number,\n      callback: EventCallback,\n      that: any\n    ): void\n    once(events: string | string[], callback: EventCallback, that: any): void\n\n    /**\n     * Removes event listeners by event and callback. If no callback is given,\n     * all listeners for a given event name are being removed.\n     */\n    off(events: string | string[], callback?: EventCallback): void\n\n    /**\n     * Create an EventBus event.\n     */\n    createEvent(data: any): InternalEvent\n\n    /**\n     * Fires a named event.\n     */\n    fire<T = any>(type: string, data: T, ...args: any[]): any\n    fire<T extends { type: string }>(data: T, ...args: any[]): any\n  }\n}\n')),(0,r.kt)("p",null,"\u5b9e\u73b0\u4e86 eventBus \u9700\u8981\u7684 on/off/once/fire \u7684\u57fa\u672c\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e00\u4e9b\u5f88\u7b80\u5355\u7684\u5c31\u7565\u8fc7\u4e86\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"createEvent")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"handleError")," \u8fd9\u79cd\u3002")),(0,r.kt)("h3",{id:"on"},(0,r.kt)("inlineCode",{parentName:"h3"},"on")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"EventBus.prototype.on = function(events, priority, callback, that) {\n\n  // \u68c0\u67e5\u5e76\u683c\u5f0f\u5316\u53c2\u6570\n\n  var actualCallback = callback;\n\n  if (that) {\n    actualCallback = bind(callback, that);\n\n    // make sure we remember and are able to remove\n    // bound callbacks via {@link #off} using the original\n    // callback\n    actualCallback[FN_REF] = callback[FN_REF] || callback;\n  }\n\n  var self = this;\n\n  events.forEach(function(e) {\n    self._addListener(e, {\n      priority: priority,\n      callback: actualCallback,\n      next: null\n    });\n  });\n};\n")),(0,r.kt)("p",null,"\u8fd9\u91cc ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBus.prototype.on")," \u505a\u4e86\u4e24\u4ef6\u4e8b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7ed1\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"callback")," \u7684\u4e0a\u4e0b\u6587\u3002\u540c\u65f6\u8bb0\u4f4f\u539f\u59cb\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"callback")," \u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"FN_REF")," \u4e0a\u3002\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"off")," \u7684\u65f6\u5019\u8981\u6bd4\u5bf9\u539f\u59cb ",(0,r.kt)("inlineCode",{parentName:"li"},"callback"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e3a\u6bcf\u4e00\u4e2a\u4e8b\u4ef6\u6dfb\u52a0\u76d1\u542c\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"_addListenerp9ol;"),"\u3002")),(0,r.kt)("h3",{id:"once"},(0,r.kt)("inlineCode",{parentName:"h3"},"once")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"EventBus.prototype.once = function(event, priority, callback, that) {\n  var self = this;\n\n  // \u68c0\u67e5\u5e76\u683c\u5f0f\u5316\u53c2\u6570\n\n  function wrappedCallback() {\n    wrappedCallback.__isTomb = true;\n\n    var result = callback.apply(that, arguments);\n\n    self.off(event, wrappedCallback);\n\n    return result;\n  }\n\n  // make sure we remember and are able to remove\n  // bound callbacks via {@link #off} using the original\n  // callback\n  wrappedCallback[FN_REF] = callback;\n\n  this.on(event, priority, wrappedCallback);\n};\n")),(0,r.kt)("p",null,"\u8fd9\u91cc ",(0,r.kt)("inlineCode",{parentName:"p"},"EventBus.prototype.once")," \u505a\u4e86\u4e09\u4ef6\u4e8b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"li"},"callback")," \u5305\u4e00\u5c42\uff0c\u5728\u8c03\u7528\u4e00\u6b21\u540e off \u6389"),(0,r.kt)("li",{parentName:"ol"},"\u8bb0\u5f55\u539f\u59cb\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"callback"),"\uff0c\u7528\u4e8e off"),(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"on")," \u6ce8\u518c\u4e8b\u4ef6")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"__isTomb")," \u662f\u5e72\u4ec0\u4e48\u7684\uff1f\u7559\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"_invokeListener")," \u91cc\u8bf4\u3002"),(0,r.kt)("h3",{id:"off"},(0,r.kt)("inlineCode",{parentName:"h3"},"off")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"EventBus.prototype.off = function(events, callback) {\n\n  events = isArray(events) ? events : [ events ];\n\n  var self = this;\n\n  events.forEach(function(event) {\n    self._removeListener(event, callback);\n  });\n\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"off")," \u5c31\u6bd4\u8f83\u7b80\u5355\u4e86\uff0c\u8c03\u7528\u5185\u90e8\u51fd\u6570\uff0c\u53d6\u6d88\u76d1\u542c"),(0,r.kt)("h3",{id:"fire"},(0,r.kt)("inlineCode",{parentName:"h3"},"fire")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"EventBus.prototype.fire = function(type, data) {\n  // \u68c0\u67e5\u5e76\u683c\u5f0f\u5316\u53c2\u6570\n\n  firstListener = this._listeners[type];\n\n  if (!firstListener) {\n    return;\n  }\n\n  // \u51c6\u5907\u4e8b\u4ef6\u53c2\u6570 \n\n  if (type !== originalType) {\n    event.type = type;\n  }\n\n  try {\n    returnValue = this._invokeListeners(event, args, firstListener);\n  } finally {\n\n    // reset event type after delegation\n    if (type !== originalType) {\n      event.type = originalType;\n    }\n  }\n\n  // set the return value to false if the event default\n  // got prevented and no other return value exists\n  if (returnValue === undefined && event.defaultPrevented) {\n    returnValue = false;\n  }\n\n  return returnValue;\n};\n")),(0,r.kt)("p",null,"\u4e3b\u8981\u5e72\u4e86\u8fd9\u4e48\u51e0\u4e2a\u4e8b\u513f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u53d6\u51fa ",(0,r.kt)("inlineCode",{parentName:"li"},"listener"),"\uff0c\u5982\u679c\u6ca1\u6709\u76f4\u63a5\u8fd4\u56de\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," \u51c6\u5907\u597d\u4e8b\u4ef6\u53c2\u6570\u3002\u6709\u4e2a\u7279\u4f8b\uff0c\u5982\u679c data \u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"InternalEvent")," \u7c7b\u578b\u7684\uff0c\u9700\u8981\u5224\u65ad\u4e0b\u662f\u5426\u8981\u4e34\u65f6\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"event.type"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"_invokeListeners"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u4e14 ",(0,r.kt)("inlineCode",{parentName:"li"},"defaultPrevented"),"\uff0c\u9700\u8981\u8fd4\u56de\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u8fd4\u56de\u503c")),(0,r.kt)("p",null,"\u53ef\u4ee5\u7406\u89e3\u4e3a\u57fa\u672c\u5728\u6574\u7406\u8f93\u5165\u548c\u8f93\u51fa\u7684\u6570\u636e\uff0c\u6ca1\u5e72\u4ec0\u4e48\u590d\u6742\u7684\u4e8b\u60c5\u3002\u590d\u6742\u7684\u903b\u8f91\u90fd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"_invokeListeners")," \u91cc\u9762\u3002"),(0,r.kt)("h3",{id:"\u5c0f\u7ed3\u4e00"},"\u5c0f\u7ed3\u4e00"),(0,r.kt)("mermaid",{value:"graph LR;\n    cb1[cb]-- on --\x3ecb2[cb with FN_REF] --\x3e _addListener\n    cb3[cb]-- once --\x3ecb4[cb with off and FN_REF and __isTomb] --\x3e on\n    cb5[cb]-- off --\x3e _removeListener\n    fire -- event and args and firstListener --\x3e _invokeListeners --\x3e returnValue"}),(0,r.kt)("p",null,"\u6240\u4ee5\u63a5\u4e0b\u6765\u8fd8\u6709\u4e09\u4e2a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_addListener")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_removeListener")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_invokeListeners"))),(0,r.kt)("h3",{id:"_addlistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"_addListener")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EventBus")," \u7684 listeners \u5b58\u50a8\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Record<eventName, listenerHead>")," \u7ed3\u6784\u3002\u6bcf\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"listener")," \u662f\u4e00\u4e2a\u94fe\u8868\uff0c\u9ad8\u4f18\u5148\u7ea7\u7684\u66f4\u63a5\u8fd1 Head\uff0c\u7ed3\u5c3e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"listener.next")," \u662f\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"_addListener")," \u5c31\u662f\u6309\u7167\u4f18\u5148\u7ea7\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"newListener")," \u63d2\u5165\u5230\u94fe\u8868\u7684\u5408\u9002\u4f4d\u7f6e\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6e90\u7801\u7684\u96be\u5ea6\u4e3b\u8981\u5728\u4e8e\u94fe\u8868\u63d2\u5165\u7684\u5b9e\u73b0\u3002\u4e0d\u4f1a\u94fe\u8868\u7684\u540c\u5b66\u53ef\u4ee5\u53c9\u51fa\u53bb\u4e86\u3002")),(0,r.kt)("h3",{id:"_removelistener"},(0,r.kt)("inlineCode",{parentName:"h3"},"_removeListener")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4e5f\u5c31\u663e\u800c\u6613\u89c1\u4e86\uff0c\u94fe\u8868\u7684\u5220\u9664\u3002\uff08\u53c9\u51fa\u53bb\uff1f\uff09"),(0,r.kt)("h3",{id:"_invokelisteners"},(0,r.kt)("inlineCode",{parentName:"h3"},"_invokeListener(s)")),(0,r.kt)("h4",{id:"_invokelisteners-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"_invokeListeners")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"EventBus.prototype._invokeListeners = function(event, args, listener) {\n\n  var returnValue;\n\n  while (listener) {\n\n    // handle stopped propagation\n    if (event.cancelBubble) {\n      break;\n    }\n\n    returnValue = this._invokeListener(event, args, listener);\n\n    listener = listener.next;\n  }\n\n  return returnValue;\n};\n")),(0,r.kt)("p",null,"\u505a\u4e86\u4e24\u4ef6\u4e8b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u662f\u5426 bubbleCanceled\uff0c\u5982\u679c\u662f\uff0c\u7acb\u5373\u8fd4\u56de\u3002\u5c31\u662f\u963b\u6b62\u5192\u6ce1\uff0c\u505c\u6b62\u6267\u884c\u540e\u7eed\u7684\u4e8b\u4ef6\u76d1\u542c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5426\u5219\u4f9d\u6b21\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"_invokeListener"),"\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u8fd4\u56de\u6700\u540e\u4e00\u4e2a listener \u7684\u8fd4\u56de\u503c"),"\uff08\u91cd\u8981\uff0c\u8fd9\u5bf9\u4ee5\u540e\u6b63\u786e\u4f7f\u7528 EventBus \u5f88\u6709\u5e2e\u52a9\uff09\u3002")),(0,r.kt)("h4",{id:"_invokelistener"},(0,r.kt)("inlineCode",{parentName:"h4"},"_invokeListener")),(0,r.kt)("p",null,"\u4e0a\u6765\u5c31\u770b\u5230\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"__isTomb"),"\u3002\u56de\u770b\u4e4b\u524d\u7684\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function wrappedCallback() {\n  wrappedCallback.__isTomb = true;\n\n  var result = callback.apply(that, arguments);\n\n  self.off(event, wrappedCallback);\n\n  return result;\n}\n")),(0,r.kt)("p",null,"\u770b\u5230\u7b2c\u4e00\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"callback")," \u8c03\u7528\u540e\u8fd9\u4e2a\u503c\u88ab\u8bbe\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u3002\u770b\u73b0\u5728\u7684\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"EventBus.prototype._invokeListener = function(event, args, listener) {\n\n  var returnValue;\n\n  if (listener.callback.__isTomb) {\n    return returnValue;\n  }\n")),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u76f4\u63a5\u8fd4\u56de\uff0c\u8fd9\u53ef\u4ee5\u4fdd\u8bc1 ",(0,r.kt)("inlineCode",{parentName:"p"},"wrappedCallback")," \u53ea\u88ab\u6267\u884c\u4e00\u904d\uff0c\u7b2c\u4e8c\u904d\u8c03\u7528\u4e0d\u4f1a\u88ab\u6267\u884c\uff0c\u800c\u662f\u76f4\u63a5\u7565\u8fc7\u3002",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bpmn-io/diagram-js/issues/524"},"\u6211\u731c\u53ef\u80fd\u662f\u7528\u6765\u4fee\u590d\u67d0\u4e00\u4e2a bug \u7684"),"\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u662f\u8c03\u7528\u548c\u5904\u7406\u8fd4\u56de\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"EventBus.prototype._invokeListener = function(event, args, listener) {\n\n  var returnValue;\n\n  if (listener.callback.__isTomb) {\n    return returnValue;\n  }\n\n  try {\n\n    // returning false prevents the default action\n    returnValue = invokeFunction(listener.callback, args);\n\n    // stop propagation on return value\n    if (returnValue !== undefined) {\n      event.returnValue = returnValue;\n      event.stopPropagation();\n    }\n\n    // prevent default on return false\n    if (returnValue === false) {\n      event.preventDefault();\n    }\n  } catch (error) {\n    if (!this.handleError(error)) {\n      console.error('unhandled error in event listener', error);\n\n      throw error;\n    }\n  }\n\n  return returnValue;\n};\n")),(0,r.kt)("p",null,"\u5982\u679c\u6709\u8fd4\u56de\u503c\u5c31\u505c\u6b62\u5192\u6ce1\uff0c\u5982\u679c\u8fd4\u56de\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u5c31 ",(0,r.kt)("inlineCode",{parentName:"p"},"preventDefault"),"\u3002\u518d\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"Errorhandler")," \u5c31\u662f\u5168\u90e8\u4e86\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u7684\u505c\u6b62\u5192\u6ce1\u4f1a\u5bfc\u81f4\u4e00\u65e6\u6709\u4efb\u4f55\u7684\u76d1\u542c\u5668\u8fd4\u56de\u4e86\u975e ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," \u503c\uff0c\u5c31\u4f1a\u505c\u6b62\u7ee7\u7eed\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u88ab\u8c03\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"preventDefault")," \u4e14\u8fd4\u56de\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u6700\u7ec8\u4f1a\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"\u3002")),(0,r.kt)("h3",{id:"\u5c0f\u7ed3\u4e8c"},"\u5c0f\u7ed3\u4e8c"),(0,r.kt)("p",null,"\u6240\u4ee5 EventBus \u5b9e\u73b0\u7684\u529f\u80fd\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u76d1\u542c\u7684\u6ce8\u518c\u548c\u89e3\u6ce8\u518c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6309\u7167\u4f18\u5148\u7ea7\u4ece\u9ad8\u5230\u4f4e\u4f9d\u6b21\u6267\u884c\u76d1\u542c\u51fd\u6570\uff0c\u5982\u679c\u6709\u8fd4\u56de\u503c\u5219\u8fd4\u56de\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"li"},"stopPropagation")," \u65b9\u6cd5\uff0c\u63a7\u5236\u4e8b\u4ef6\u8fd4\u56de\u65f6\u673a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"li"},"preventDefault")," \u65b9\u6cd5\uff0c\u5728\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")," \u7684\u60c5\u51b5\u4e0b\u8fd4\u56de\u503c\u3002")))}d.isMDXComponent=!0}}]);