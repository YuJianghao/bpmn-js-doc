"use strict";(self.webpackChunkbpmn_js_doc=self.webpackChunkbpmn_js_doc||[]).push([[674],{4613:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/custom-renderer","metadata":{"permalink":"/bpmn-js-doc/blog/custom-renderer","editUrl":"https://github.com/YuJianghao/bpmn-js-doc/tree/main/blog/custom-renderer.mdx","source":"@site/blog/custom-renderer.mdx","title":"\u81ea\u5b9a\u4e49\u6e32\u67d3\u5668 CustomRenderer","description":"\u5982\u4f55\u81ea\u5b9a\u4e49\u4e00\u4e2a bpmn-js \u81ea\u5b9a\u4e49\u6e32\u67d3\u5668\uff08custom-renderer\uff09\uff0c\u5c06 bpmn:ServiceTask \u6e32\u67d3\u6210\u4e00\u4e2a\uff08\u4e0d\u600e\u4e48\uff09\u6f02\u4eae\u7684\u65b9\u5757\uff1f","date":"2023-03-03T16:02:27.000Z","formattedDate":"2023\u5e743\u67083\u65e5","tags":[],"readingTime":1.685,"hasTruncateMarker":true,"authors":[{"name":"Yu Jianghao","title":"Front End Engineer","url":"https://yujianghao.cn","imageURL":"https://github.com/YuJianghao.png","key":"winwin2011"}],"frontMatter":{"authors":"winwin2011"}},"content":"import CodeSandbox from \'../src/components/CodeSandbox\'\\n\\n\\n\u5982\u4f55\u81ea\u5b9a\u4e49\u4e00\u4e2a bpmn-js \u81ea\u5b9a\u4e49\u6e32\u67d3\u5668\uff08custom-renderer\uff09\uff0c\u5c06 `bpmn:ServiceTask` \u6e32\u67d3\u6210\u4e00\u4e2a\uff08\u4e0d\u600e\u4e48\uff09\u6f02\u4eae\u7684\u65b9\u5757\uff1f\\n\\n\x3c!--truncate--\x3e\\n\\n## \u539f\u7406\\n\\n\u9996\u5148\u8981\u660e\u767d\uff0c`bpmn-js` \u7684\u6e32\u67d3\u903b\u8f91\u662f\u901a\u8fc7 `diagram-js` \u5b9e\u73b0\u7684\uff0c\u5177\u4f53\u7684\u662f\u901a\u8fc7\u5411 `BaseRenderer` \u6ce8\u518c Renderer \u5b9e\u73b0\uff1a\\n\\n\u4e00\u4e2a Renderer \u9700\u8981\u5b9e\u73b0 IRenderer \u63a5\u53e3\uff0c\u53c2\u89c1[\u8fc7\u53bb\u7684\u6587\u7ae0](../docs/diagram-js/base-renderer)\\n\\nRenderer \u9700\u8981\u5728\u521d\u59cb\u5316\u65f6\u5411 BaseRenderer \u6ce8\u518c\u81ea\u5df1\uff1a\\n\\n```js\\nBaseRenderer.call(renderer, eventBus, renderPriority)\\n```\\n\\n\u6700\u540e\u66b4\u9732\u4e3a\u4e00\u4e2a Module \u5e76\u4e14\u542f\u7528\\n\\n## \u5b9e\u73b0\\n\\n\u9996\u5148\u5b9a\u4e49\u4e00\u4e2a Renderer\uff0c\u786e\u5b9a\u6211\u4eec\u53ea\u80fd\u6e32\u67d3 `bpmn:ServiceTask`\u3002\\n\\n```js\\nimport {is} from \'bpmn-js/lib/util/ModelUtil\'\\n\\nclass CustomRenderer {\\n  canRender(element) {\\n    return is(element, \'bpmn:ServiceTask\');\\n  }\\n}\\n```\\n\\n\u7136\u540e\u5b9e\u73b0 `drawShape` \u753b\u51fa\u60f3\u8981\u7684\u6837\u5b50\\n\\n```js\\nimport { is } from \\"bpmn-js/lib/util/ModelUtil\\";\\nimport {\\n  append as svgAppend,\\n  attr as svgAttr,\\n  create as svgCreate,\\n  transform as svgTransform,\\n  createTransform\\n} from \\"tiny-svg\\";\\nimport BaseRenderer from \\"diagram-js/lib/draw/BaseRenderer\\";\\n\\nclass CustomRenderer {\\n  drawShape(visuals, element) {\\n    const container = svgCreate(\\"g\\");\\n    const rect = svgCreate(\\"rect\\");\\n    svgAttr(rect, {\\n      fill: \\"#6647d2\\",\\n      stroke: \\"#777\\",\\n      strokeWidth: 1,\\n      width: element.width,\\n      height: element.height,\\n      borderRadius: 10\\n    });\\n    svgAppend(container, rect);\\n    const circle = svgCreate(\\"circle\\");\\n    svgAttr(circle, {\\n      cx: 0,\\n      cy: 0,\\n      r: 25,\\n      fill: \\"#f8cf45\\"\\n    });\\n    const translate = createTransform();\\n    translate.setTranslate(element.width / 2, element.height / 2);\\n    svgTransform(circle, translate);\\n    svgAppend(container, circle);\\n    svgAppend(visuals, container);\\n    return container;\\n  }\\n}\\n```\\n\\n\u5982\u679c\u6709\u9700\u8981\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7 `drawShapePath` \u753b\u4e00\u4e0b\u5143\u7d20\u53ef\u89c6\u8303\u56f4\u7684\u8def\u5f84\uff0c\u4e0d\u8fc7\u4e00\u822c\u4e0d\u9700\u8981\u3002\\n\\n\u7136\u540e\u5c06 `CustomRenderer` \u6ce8\u518c\u5230 `BaseRenderer`\u3002\\n\\n```js\\nclass CustomRenderer {\\n  constructor(eventBus) {\\n    BaseRenderer.call(this, eventBus, 2000);\\n  }\\n}\\nCustomRenderer.$inject = [\'eventBus\'];\\n```\\n\\n\u5bfc\u51fa\u4e00\u4e2a Module\uff0c\u5e76\u8f7d\u5165\\n\\n```js\\nexport default {\\n  __init__: [\\"customRenderer\\"],\\n  customRenderer: [\\"type\\", CustomRenderer]\\n};\\n```\\n\\n## \u7ed3\u679c\\n\\n<CodeSandbox src=\\"https://codesandbox.io/embed/bpmn-custom-renderer-50bes5?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcustom-renderer.js&theme=dark\\"/>"}]}')}}]);