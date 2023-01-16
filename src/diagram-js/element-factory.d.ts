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
