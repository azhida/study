# MateChat (华为开源)

- 官网：https://matechat.gitcode.com/
- 文档：https://matechat.gitcode.com/components/introduction/demo.html

## 特点

- 专为 Vue3 设计，支持对接 OpenAI、DeepSeek、盘古大模型等。
- 提供开箱即用的高质量组件（如对话气泡、Markdown 渲染等）。
- 深度适配 Vue3，支持多主题和灵活集成。

## 使用

```sh
npm i vue-devui @matechat/core @devui-design/icons
```

- main.ts

```ts
import { createApp } from 'vue'
import App from './App.vue'
import MateChat from '@matechat/core'
import '@devui-design/icons/icomoon/devui-icon.css'

const app = createApp(App)
app.use(MateChat).mount('#app')
```