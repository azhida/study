# vue3 使用笔记

## 创建项目
```
npm create vite@latest
yarn create vite
pnpm create vite
```

## setup 中使用 watch

```js
<script lang="ts" setup>
	import { ref, defineProps, watch, defineEmits } from "vue";
	
	const props = defineProps({
		showAll: {
			type: Boolean,
			default: false
		}
	});
	
	watch(() => props.showAll, (val, old) => {
		console.log(val)
	});
		
	onLoad((e) => {
		console.log(e);
	})
</script>
```


## 拷贝粘贴

```vue
<template>
  <div>
    <input type="text" v-model="message">
    <button type="button" @click="onClickCopy()">复制</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useClipboard } from "@vueuse/core";

const { isSupported, copy, copied } = useClipboard();
// const { isSupported, copy, copied } = useClipboard({ legacy: true });

const msg = ref('我是复制的内容！');

watch(copied, (val) => {
  if(val)return alert(msg.value)
})

function onClickCopy() {
  if (!isSupported.value) {
    console.log("您的浏览器不支持复制功能!");
    return;
  }
  copy(msg.value);
}
</script>
```