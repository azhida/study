# vue3 富文本编辑器

## VueQuill

文档：

https://vueup.github.io/vue-quill/guide/


## CKEditor

- 文档：

https://ckeditor.com/

- vue3 版本：

https://ckeditor.com/docs/ckeditor5/latest/installation/integrations/vuejs-v3.html

### 基本使用示例

- 安装依赖

```sh
pnpm install --save @ckeditor/ckeditor5-vue @ckeditor/ckeditor5-build-classic
```
- 示例代码

/src/views/demo/editor.vue

```vue
<template>
  <div class="app-container demo-editor-box">
    <ckeditor :editor="ClassicEditor" v-model="editorData" :config="editorConfig"></ckeditor>
    <div style="margin-top: 20px;">{{ editorData }}</div>
  </div>
</template>

<script setup>
import {component as ckeditor } from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ref } from 'vue';

const editorData = ref('abcd')
const editorConfig = ref({})
</script>
```

