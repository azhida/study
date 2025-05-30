# VitePress Markdown 文件中动态渲染 Vue 组件

<script setup>
import { defineAsyncComponent } from 'vue';
const DemoComponent = defineAsyncComponent(() => import('./动态组件.vue'));
</script>

<ClientOnly>
  <DemoComponent />
</ClientOnly>


::: info demo.md

```md
# 这是标题

<script setup>
import { defineAsyncComponent } from 'vue';
const DemoComponent = defineAsyncComponent(() => import('./动态组件.vue'));
</script>

<ClientOnly>
  <DemoComponent />
</ClientOnly>
```

::: 


## 说明

当 vue 组件不兼容 ssr 服务端渲染时，可以使用该方法，避免打包编译时报错 `ReferenceError: document is not defined` 或者 `ReferenceError: window is not defined`