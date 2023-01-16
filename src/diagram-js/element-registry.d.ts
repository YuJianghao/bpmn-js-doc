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
