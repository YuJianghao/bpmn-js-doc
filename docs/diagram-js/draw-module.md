---
sidebar_position: 6
---

# DrawModule

```js
export default {
  __init__: [ 'defaultRenderer' ],
  defaultRenderer: [ 'type', DefaultRenderer ],
  styles: [ 'type', Styles ]
};
```

可以看到，在载入 `DrawModule` 的时候会初始化 `defaultRenderer`，这会将 `DefaultRenderer` 作为默认的渲染器注册到 injector 中。

:::tip
[何不尝试实现一个自己的 Renderer？](../../blog/custom-renderer)
:::

---

到这里为止 `DrawModule` 就全部讲完了。可以回看下目录：

```mermaid
graph TD;
    modules-->ConfigModules["#9989; ConfigModules"];
    modules-->CoreModule;
    CoreModule-->DrawModule["#9989; DrawModule"];
    DrawModule-->Styles["#9989; Styles"];
    DrawModule-->DefaultRenderer["#9989; DefaultRenderer"];
    DefaultRenderer-->BaseRenderer["#9989; BaseRenderer"];
    DefaultRenderer-->model["#9989; model"];
    BaseRenderer-->model["#9989; model"];
    BaseRenderer-->EventBus["#9989; EventBus"];
    DefaultRenderer-->EventBus["#9989; EventBus"];
    CoreModule-->EventBus["#9989; EventBus"];
    CoreModule-->ElementFactory;
    CoreModule-->ElementRegistry;
    CoreModule-->GraphicsFactory;
    CoreModule-->Canvas;
    ElementRegistry-->EventBus["#9989; EventBus"];
    GraphicsFactory-->EventBus["#9989; EventBus"];
    GraphicsFactory-->ElementRegistry;
    Canvas-->EventBus["#9989; EventBus"];
    Canvas-->GraphicsFactory;
    Canvas-->ElementRegistry;
    ElementFactory-->model["#9989; model"];
```

接下来依次讲 `ElementFactory`、`ElementRegistry`、`GraphicsFactory` 和 `Canvas`。
