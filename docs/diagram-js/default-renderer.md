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
  }
}
```

到这里为止 `DrawModule` 就全部讲完了。可以回看下目录：

```mermaid
graph TD;
    modules-->ConfigModules;
    modules-->CoreModule;
    CoreModule-->DrawModule["#9989; DrawModule"];
    DrawModule-->Styles["#9989; Styles"];
    DrawModule-->DefaultRenderer["#9989; DefaultRenderer"];
    DefaultRenderer-->BaseRenderer["#9989; BaseRenderer"];
    DefaultRenderer-->model["#9989; model"];
    BaseRenderer-->model["#9989; model"];
    BaseRenderer-->EventBus["#9989; EventBus"];
    CoreModule-->EventBus["#9989; EventBus"];
    CoreModule-->ElementFactory;
    CoreModule-->ElementRegistry;
    CoreModule-->GraphicsFactory;
    CoreModule-->Canvas;
    ElementRegistry-->EventBus["#9989; EventBus"];
    GraphicsFactory-->EventBus["#9989; EventBus"];
    GraphicsFactory-->ElementRegistry;
    Canvas-->EventBus["#9989; EventBus"];
    Canvas-->GraphicsFactory;
    Canvas-->ElementRegistry;
    ElementFactory-->model["#9989; model"];
```
