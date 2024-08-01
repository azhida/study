# v-perfect-signature

## 简介

v-perfect-signature 是用来做电子签名的

- 链接：https://github.com/wobsoriano/v-perfect-signature

## 使用

```sh
pnpm add v-perfect-signature
```

- demo.vue

```vue
<template>
  <VPerfectSignature ref="signaturePad" :stroke-options="strokeOptions" />
  <button @click="toDataURL">下载</button>
</template>

<script setup>
import { ref } from 'vue'
import { VPerfectSignature } from 'v-perfect-signature'

const signaturePad = ref()
const strokeOptions = {
  size: 16,
  thinning: 0.75,
  smoothing: 0.5,
  streamline: 0.5,
}

function toDataURL() {
  const dataURL = signaturePad.value.toDataURL()
  console.log(dataURL)
}
</script>
```