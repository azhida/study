# vue3 多页面入口配置

## 新建子应用

```sh
mkdir -p src/apps/demo
```

### 相关文件

- src/apps/demo/router/index.ts
- src/apps/demo/views/formView.vue
- src/apps/demo/views/tableView.vue
- src/apps/demo/App.vue
- src/apps/demo/index.html
- src/apps/demo/main.ts

### 文件内容

- src/apps/demo/router/index.ts

```ts
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'table',
      component: () => import('../views/tableView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/formView.vue')
    }
  ]
})

export default router
```

- src/apps/demo/views/formView.vue

```vue
<template>
  <div>form</div>
</template>
```

- src/apps/demo/views/tableView.vue

```vue
<template>
  <div>table</div>
</template>
```

- src/apps/demo/App.vue

```vue
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>
```

- src/apps/demo/index.html

```html
<!doctype html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./assets/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>项目 Demo</title>
    <script type="module" crossorigin src="./main.ts"></script>
    <link
      rel="modulepreload"
      crossorigin
      href="/static/js/TheWelcome.vue_vue_type_script_setup_true_lang-DMdQRo30.js"
    />
    <link rel="stylesheet" crossorigin href="/static/css/TheWelcome-CgOgiGzx.css" />
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

- src/apps/demo/main.ts

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
```

## vue 项目配置

- `vite.config.demo.ts`

```js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  root: './src/apps/demo',
  base: 'demo',
  server: {
    port: 9912
  },
})
```

- `package.json`

```json
{
  "scripts": {
    "dev:demo": "vite --config vite.config.demo.ts",
    "build:demo": "vite build --config vite.config.demo.ts",
    "preview:demo": "vite preview --config vite.config.demo.ts"
  },
}
```

## 运行

```sh
pnpm dev:demo
```