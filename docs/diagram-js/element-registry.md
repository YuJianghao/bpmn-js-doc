---
sidebar_position: 8
---
# ElementRegistry

```ts
declare module "diagram-js/lib/core/ElementRegistry" {
  import EventBus from "diagram-js/lib/core/EventBus"
  import { GraphElement } from "diagram-js/lib/model"
  export class ElementRegistry {
    constructor(eventBus: EventBus)
    static $inject: ["eventBus"]
    add(
      element: GraphElement,
      gfx: SVGGElement,
      secondaryGfx?: SVGGElement
    ): void
    remove(element: GraphElement | string): void
    updateId(element: GraphElement | string, newId: string): void
    updateGraphics(
      filter: GraphElement | string,
      gfx: SVGGElement,
      secondary?: boolean
    ): SVGGElement
    get(filter: GraphElement | string): GraphElement
    filter(
      filter: (element: GraphElement, gfx: SVGGElement) => boolean
    ): GraphElement[]
    find(
      filter: (element: GraphElement, gfx: SVGGElement) => boolean
    ): GraphElement | undefined
    getAll(): GraphElement[]
    forEach(callback: (element: GraphElement, gfx: SVGGElement) => void): void
    getGraphics(filter: GraphElement | string, secondary?: boolean): SVGGElement
  }
}
```

实现了一些注册表相关的功能，重要的是内部存储结构。内部存储了一个 map：`_elements`

```ts
interface IElement {
  element: GraphElement
  gfx: GraphicsElement
  secondaryGfx?: SVGGElement
}
class ElementRegistry {
  private _elements: Record<string, IElement>
}
```

所有的操作都围绕着对这个 map 和 map 中每一个对象的增删改查展开。具体的实现原理不是很重要，而且也不难。

> GraphicsElement 见 [GraphicsFactory](./graphics-factory)
