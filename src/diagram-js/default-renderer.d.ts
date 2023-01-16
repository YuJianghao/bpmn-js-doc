declare module "diagram-js/lib/draw/DefaultRenderer" {
  import Styles from "diagram-js/lib/draw/Styles"
  import { Connection, GraphElement } from "diagram-js/lib/model"
  import { IRenderer } from "diagram-js/lib/draw/BaseRenderer"
  import EventBus from "diagram-js/lib/core/EventBus"
  export class DefaultRenderer implements IRenderer {
    constructor(eventBus: EventBus, styles: Styles)
  }
}
