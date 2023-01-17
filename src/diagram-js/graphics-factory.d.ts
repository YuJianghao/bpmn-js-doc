declare module "diagram-js/lib/core/GraphicsFactory" {
  import { ElementRegistry } from "diagram-js/lib/core/ElementRegistry"
  import { Connection, GraphElement, Shape } from "diagram-js/lib/model"
  import EventBus from "diagram-js/lib/core/EventBus"
  export type GraphicsElement = SVGGElement
  export class GraphicsFactory {
    constructor(eventBus: EventBus, elementRegistry: ElementRegistry)
    static $inject: ["eventBus", "elementRegistry"]
    create(
      type: string,
      element: GraphElement,
      parentIndex?: number
    ): GraphicsElement
    updateContainments(elements: GraphElement[]): void
    drawShape(visual: SVGGElement, element: Shape): SVGElement
    getShapePath(shape: Shape): string
    drawConnection(visual: SVGGElement, element: Connection): SVGElement
    getConnectionPath(connection: Connection): string
    update(type: string, element: GraphElement, gfx: GraphicsElement): void
    remove(element: GraphElement): void
  }
}
