---
sidebar_position: 4
---

# BaseRenderer

定义了一个 Renderer 应该有的接口，并且将渲染过程接入事件总线中。

```ts {22-25}
declare module "diagram-js/lib/draw/BaseRenderer" {
  import { Connection, GraphElement, Shape } from "diagram-js/lib/model"
  import EventBus from "diagram-js/lib/core/EventBus"

  export interface IRenderer {
    canRender(element: GraphElement): boolean
    drawShape(
      visuals: SVGGElement,
      element: Shape,
      attrs?: Record<string, unknown>
    ): SVGElement
    drawConnection(
      visuals: SVGGElement,
      connection: Connection,
      attrs?: Record<string, unknown>
    ): SVGElement
    getShapePath(shape: Shape): string
    getConnectionPath(connection: Connection): string
  }

  export class BaseRenderer implements IRenderer {
    /**
     * 在这里将调用渲染相关方法，在收到渲染事件时执行渲染 
     */
    constructor(eventBus: EventBus, renderPriority: number)
  }
}
```

:::info
写到这里发现 copilot 补全了很多定义，是不是有人写过，快出来贴出来！
:::

`canRender` 字面意思，能否渲染某个元素。

`drawShape` 和 `drawConnection` 方法就是往 svgElement 中按照一个约定画一些内容，从而实现自定义的渲染样式。这个约定后期会在 `CanvasModule` 中讲到。

`drawShapePath` 和 `drawConnectionPath` 用于绘制图形的可见区域边界，用于后期裁剪连线。

## 原理

利用 `EventBus` 提供的事件注册和优先级机制，注册所有的渲染器，并且控制最终生效的渲染器。在监听到渲染事件的时候，调用对应方法完成渲染。

```js {6,21}
export default function BaseRenderer(eventBus, renderPriority) {
  var self = this;

  renderPriority = renderPriority || DEFAULT_RENDER_PRIORITY;

  eventBus.on([ 'render.shape', 'render.connection' ], renderPriority, function(evt, context) {
    var type = evt.type,
        element = context.element,
        visuals = context.gfx,
        attrs = context.attrs;

    if (self.canRender(element)) {
      if (type === 'render.shape') {
        return self.drawShape(visuals, element, attrs);
      } else {
        return self.drawConnection(visuals, element, attrs);
      }
    }
  });

  eventBus.on([ 'render.getShapePath', 'render.getConnectionPath' ], renderPriority, function(evt, element) {
    if (self.canRender(element)) {
      if (evt.type === 'render.getShapePath') {
        return self.getShapePath(element);
      } else {
        return self.getConnectionPath(element);
      }
    }
  });
}
```
