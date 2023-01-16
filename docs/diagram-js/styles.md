---
sidebar_position: 1
---

# Styles

```ts
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
```

这个模块的主要作用就是使用：

1. 预设
2. 默认样式
3. 自定义样式

来计算样式对象。可以认为是一个针对 style 计算和合并的工具。
