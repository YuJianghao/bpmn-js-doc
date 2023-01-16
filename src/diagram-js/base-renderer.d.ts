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
    constructor(eventBus: EventBus, renderPriority: number)
  }
}
