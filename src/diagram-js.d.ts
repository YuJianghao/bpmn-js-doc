declare module "diagram-js/lib/draw/Styles" {
  export type StyleDefinition = Record<string, unknown>
  /**
   * A component that manages shape styles
   */
  export default class Styles {
    /**
     * Builds a style definition from a className, a list of traits and an object of additional attributes.
     */
    cls(
      className: string,
      traits: string[],
      additionalAttrs?: StyleDefinition
    ): StyleDefinition
    cls(className: string, additionalAttrs?: StyleDefinition): StyleDefinition

    /**
     * Builds a style definition from a list of traits and an object of additional attributes.
     */
    style(traits: string[], additionalAttrs?: StyleDefinition): StyleDefinition
    style(additionalAttrs?: StyleDefinition): StyleDefinition

    /**
     * 从自定义、默认和预设中计算样式
     */
    computeStyle(
      custom: StyleDefinition,
      traits: string[],
      defaultStyles: StyleDefinition
    ): StyleDefinition
    computeStyle(
      custom: StyleDefinition,
      defaultStyles: StyleDefinition
    ): StyleDefinition
  }
}

declare module "diagram-js/lib/core/EventBus" {
  export class InternalEvent {
    stopPropagation(): void
    preventDefault(): void
    init(data: any): void
  }
  /**
   * A general purpose event bus.
   */
  export default class EventBus {
    /**
     * Register an event listener for events with the given name.
     */
    on(
      events: string | string[],
      priority: number,
      callback: Function,
      that: any
    ): void
    on(events: string | string[], callback: Function, that: any): void

    /**
     * Register an event listener that is executed only once.
     */
    once(
      events: string | string[],
      priority: number,
      callback: Function,
      that: any
    ): void
    once(events: string | string[], callback: Function, that: any): void

    /**
     * Removes event listeners by event and callback. If no callback is given,
     * all listeners for a given event name are being removed.
     */
    off(events: string | string[], callback?: Function): void

    /**
     * Create an EventBus event.
     */
    createEvent(data: any): InternalEvent

    /**
     * Fires a named event.
     */
    fire<T=any>(type: string, data: T, ...args: any[]): any
    fire<T extends { type: string }>(data: T, ...args: any[]): any
  }
}
