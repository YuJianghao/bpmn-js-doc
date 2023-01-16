---
sidebar_position: 5
---

# DefaultRenderer

定义了一个默认的 Renderer，在没有外部定义 Renderer 的时候使用。

```ts {23}
declare module "diagram-js/lib/draw/DefaultRenderer" {
  import Styles from "diagram-js/lib/draw/Styles"
  import { Connection, GraphElement } from "diagram-js/lib/model"
  import { IRenderer } from "diagram-js/lib/draw/BaseRenderer"
  import EventBus from "diagram-js/lib/core/EventBus"
  export class DefaultRenderer implements IRenderer {
    constructor(eventBus: EventBus, styles: Styles)
    static $inject: ['eventBus', 'styles']
  }
}
```

## 原理

在构造函数中，会将自己注册到 BaseRenderer 的渲染事件中。

```js {4}
export default function DefaultRenderer(eventBus, styles) {

  //
  BaseRenderer.call(this, eventBus, DEFAULT_RENDER_PRIORITY);

  // ...
}
```
