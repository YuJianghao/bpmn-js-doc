declare module "diagram-js/lib/model" {
  export class Base {
    id: string
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
