# PDF 渲染

## vue-pdf-embed

```sh
pnpm i vue-pdf-embed
```

```vue
<template>
  <div id="page-box" class="page-box" style="position: relative;">
    <img :src="gifUrl" />
    <VuePdfEmbed :source="pdfUrl" @num-pages="onNumPages" />
  </div>
</template>
<script setup>
import VuePdfEmbed from 'vue-pdf-embed'
import pdfUrl from '/test.pdf'
</script>
```