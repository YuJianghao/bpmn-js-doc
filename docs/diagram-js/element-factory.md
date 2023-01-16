---
sidebar_position: 7
---
# ElementFactory

```ts
declare module "diagram-js/lib/core/ElementFactory" {
  import { Connection, GraphElement, Label, Root, Shape } from "diagram-js/lib/model"
  export class ElementFactory {
    create(type: string, attrs: any): GraphElement
    createRoot(attrs: any): Root
    createLabel(attrs: any): Label
    createShape(attrs: any): Shape
    createConnection(attrs: any): Connection
  }
}
```

很简单，就是封装了 GraphElement 的创建方法到一个 Module 中。
