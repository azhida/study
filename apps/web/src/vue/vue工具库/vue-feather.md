# vue-feather

## 官网

https://feathericons.com/

- 文档

https://fengyuanchen.github.io/vue-feather/

## 使用

```sh
npm install vue-feather-icons --save
```

- `demo.vue`

```vue
<template>
  <div>
    <feather type="coffee" stroke="red" />
    <feather type="settings" animation="spin" />
  </div>
</template>

<script>
import { Feather } from 'vue-feather-icons';

export default {
  components: {
    Feather
  }
};
</script>
```

## 参考

https://mp.weixin.qq.com/s/Lcl6fUTjoA-E8Y_WCqziJQ