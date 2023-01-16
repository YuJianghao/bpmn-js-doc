---
sidebar_position: 2
---

# EventBus

事件总线

```ts
declare module "diagram-js/lib/core/EventBus" {
  export class InternalEvent {
    stopPropagation(): void
    preventDefault(): void
    init(data: any): void
  }
  export type EventCallback = (
    e: InternalEvent & { type: string },
    ...args: any[]
  ) => void
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
      callback: EventCallback,
      that: any
    ): void
    on(events: string | string[], callback: EventCallback, that: any): void

    /**
     * Register an event listener that is executed only once.
     */
    once(
      events: string | string[],
      priority: number,
      callback: EventCallback,
      that: any
    ): void
    once(events: string | string[], callback: EventCallback, that: any): void

    /**
     * Removes event listeners by event and callback. If no callback is given,
     * all listeners for a given event name are being removed.
     */
    off(events: string | string[], callback?: EventCallback): void

    /**
     * Create an EventBus event.
     */
    createEvent(data: any): InternalEvent

    /**
     * Fires a named event.
     */
    fire<T = any>(type: string, data: T, ...args: any[]): any
    fire<T extends { type: string }>(data: T, ...args: any[]): any
  }
}
```

实现了 eventBus 需要的 on/off/once/fire 的基本功能。

## 原理

TODO