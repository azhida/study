# vue-monoplasty-slide-verify

vue-monoplasty-slide-verify 是一个基于 Vue 的滑块验证组件功能插件，提供了简洁的滑块验证功能，支持自定义样式和多种配置选项，帮助开发者轻松集成滑块验证到项目中。

## 使用

```sh
pnpm install vue-monoplasty-slide-verify
```

- main.js

```js
import { createApp } from 'vue';
import App from './App.vue';
import SlideVerify from 'vue-monoplasty-slide-verify';
const app = createApp(App);
app.use(SlideVerify);
app.mount('#app');
```

## 参考

[vue-monoplasty-slide-verify：vue 滑块验证码组件](https://mp.weixin.qq.com/s/Bzy9iv4-CEpslwaLxggNzg)