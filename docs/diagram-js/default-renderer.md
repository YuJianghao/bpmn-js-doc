---
sidebar_position: 5
---

# DefaultRenderer

定义了一个默认的 Renderer。

```ts {23}
declare module "diagram-js/lib/draw/DefaultRenderer" {
  import Styles from "diagram-js/lib/draw/Styles"
  import { Connection, GraphElement } from "diagram-js/lib/model"
  import { IRenderer } from "diagram-js/lib/draw/BaseRenderer"
  import EventBus from "diagram-js/lib/core/EventBus"
  export class DefaultRenderer implements IRenderer {
    constructor(eventBus: EventBus, styles: Styles)
  }
}
```