# LangUI（基于 Tailwind CSS 的 AI 组件库）

- 官网：https://www.langui.dev/
- 组件：https://www.langui.dev/components

## 特点

- 提供 60+ 可定制组件，适合快速开发 AI 应用界面。
- 支持按钮、卡片、输入框等常用元素。

## 使用

```sh
pnpm install langui
```

- demo.vue

```vue
<template>
  <LangCard title="AI 助手">
    <LangButton @click="triggerAI">生成回答</LangButton>
  </LangCard>
</template>
```