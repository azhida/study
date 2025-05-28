# vue3-ai-sidebar（AI 侧边栏组件库）

- github：https://github.com/CH-122/vue3-ai-assignment
- npmjs：https://www.npmjs.com/package/vue3-ai-sidebar

一个基于 Vue3 + Element Plus 的 AI 侧边栏助手组件，可以轻松集成到任何 Vue3 项目中，支持 Dify API 接入。

## 使用

```sh
pnpm install vue3-ai-sidebar
```

- main.ts

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { AiSidebar } from 'vue3-ai-sidebar'
import 'vue3-ai-sidebar/dist/vue3-ai-sidebar.css'

const app = createApp(App)
app.use(AiSidebar).mount('#app')
```

- demo.vue

```vue
<template>
  <AiSidebar :apiKey="YOUR_API_KEY" />
</template>
```