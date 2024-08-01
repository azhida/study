# v-wave

## 简介

通过自定义指令的形式，让目标点击节点具备波纹的效果

- 地址：https://github.com/justintaddei/v-wave

## 使用

```sh
pnpm i v-wave
```

- main.ts

```ts
import { createApp } from 'vue'
import VWave from 'v-wave'
import App from './App.vue'

const app = createApp(App)

app.use(VWave)
```

- demo.vue

```vue
// 页面中使用
<button v-wave>Click here</button>
```