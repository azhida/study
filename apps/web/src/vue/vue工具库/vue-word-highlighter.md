# vue-word-highlighter

## 简介

vue-word-highlighter 是用来做搜索字体高亮的，某些场景需要用到，比如搜索一段文本，需要匹配字段并高亮，就可以使用这个库。

- github：https://github.com/kawamataryo/vue-word-highlighter

## 使用

```sh
pnpm install vue-word-highlighter
```

- demo.vue

```vue
<template>
  <WordHighlighter query="vue">
    The word highlighter library for Vue 2.x Vue 3.x 💅
  </WordHighlighter>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import WordHighlighter from "vue-word-highlighter";
</script>
```