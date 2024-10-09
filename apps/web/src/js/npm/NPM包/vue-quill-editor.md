# vue-quill-editor 富文本编辑器

```
npm install vue-quill-editor --save
```

## Vue 项目中 使用方法

- main.js 中导入

```
# 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import // 导入富文本编辑器的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

# 注册为全局可用组件
Vue.use(VueQuillEditor)
```

- Home.vue 中使用

```
# content 双向绑定的数据
<quill-editor v-model="content"></quill-editor>
```