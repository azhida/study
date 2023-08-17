# Vue3 使用百度地图 API

## 申请 应用

百度地图开放平台: https://lbsyun.baidu.com/

创建浏览器端的应用并拿到 `应用AK` : https://lbsyun.baidu.com/apiconsole/key#/home

文档：https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/show

## 项目中使用

- 引入 地图包

index.html

```js
<script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&type=webgl&ak=您的密钥"></script>
```

- 组件中使用

```vue
<template>
  <div ref="mapRef" style="width: 100vw; height: 100vw;"></div>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from "vue";

const mapRef = ref();

onMounted(() => {
  initMap();
});

function initMap(lng = 116.405725, lat = 39.935362) {
  var map = new BMapGL.Map(mapRef.value);
  var point = new BMapGL.Point(lng, lat);
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  map.centerAndZoom('北京', 9);
}
</script>
```

- 声明 BMapGL 类

env.d.ts
```ts
/// <reference types="vite/client" />
declare const BMapGL: any
```

::: danger 注意
如果此处不声明，编译时可能报错！
:::