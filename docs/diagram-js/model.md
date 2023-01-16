---
sidebar_position: 3
---

# model

`model` 定义了绘图用到的 Element，我称之为 `GraphElement`，是 JavaScript 对象。包含自身的位置信息，尺寸，和其他 Element 的父子兄弟关系，标签 label 等信息。还暴露了一个 `create` 方法用于创建对象。

:::info
后期还会有 `ModdleElement`、`GraphicsElement`，要注意区分。
:::

- Root 一般用于整个画布的定义。
- Shape 指画布上的元素节点。
- Connection 指画布上的各类连线。
- Label 指标签。

```ts
declare module "diagram-js/lib/model" {
  export class Base {
    businessObject: any
    label: Label
    parent: Shape
    labels: Label[]
    outgoing: Connection[]
    incoming: Connection[]
  }
  export class Shape extends Base {
    children: GraphElement[]
    host: Shape
    attachers: Shape
    x: number
    y: number
    width: number
    height: number
  }
  export class Root extends Shape {
    children: GraphElement[]
  }
  export class Label extends Base {
    labelTarget: GraphElement
  }
  export class Connection extends Base {
    source: GraphElement
    target: GraphElement
    waypoints?: {
      x: number
      y: number
      original?: {
        x: number
        y: number
      }
    }[]
  }

  export type GraphElement = Shape | Root | Label | Connection

  /**
   * Creates a new model element of the specified type
   */
  export function create(
    type: "connection",
    attrs: Record<string, unknown>
  ): Connection
  export function create(type: "label", attrs: Record<string, unknown>): Label
  export function create(type: "shape", attrs: Record<string, unknown>): Shape
  export function create(type: "root", attrs: Record<string, unknown>): Root
}
```
