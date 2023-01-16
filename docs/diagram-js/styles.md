---
sidebar_position: 1
---

# Styles

> A component that manages shape styles

```ts
declare module "diagram-js/lib/draw/Styles" {
  export type StyleDefinition = Record<string, unknown>
  export default class Styles {
    /**
     * Builds a style definition from a className, a list of traits and an object of additional attributes.
     * @param className
     * @param traits
     * @param additionalAttrs
     */
    cls(
      className: string,
      traits: string[],
      additionalAttrs?: StyleDefinition
    ): StyleDefinition
    cls(className: string, additionalAttrs?: StyleDefinition): StyleDefinition

    /**
     * Builds a style definition from a list of traits and an object of additional attributes.
     * @param traits
     * @param additionalAttrs
     */
    style(traits: string[], additionalAttrs?: StyleDefinition): StyleDefinition
    style(additionalAttrs?: StyleDefinition): StyleDefinition

    /**
     * 从自定义、默认和预设中计算样式
     * @param custom 
     * @param traits 
     * @param defaultStyles 
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

1. 预设 traits
2. 默认样式
3. 自定义样式

来计算样式对象
