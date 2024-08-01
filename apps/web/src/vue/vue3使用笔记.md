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

## vue3 数据还原为初始状态

```vue
<template>
  <div class="app-container">
    <XForm ref="xFormRef" v-model="form" label-width="auto" @confirm="onConfirm">
      <template #imgs>
        <uploadVue v-model="form.imgs"></uploadVue>
      </template>
    </XForm>
  </div>
</template>

<script setup lang="ts">
import { ref, toRaw } from 'vue';

const xFormRef = ref();

const form = ref({
  imgs: [],
  status: '1',
});
// 记录初始值
const rowForm = toRaw(form.value);
console.log(rowForm, 'rowForm');

function handleAdd() {
  console.log('添加');
  // 传入 初始值
  xFormRef.value.open(rowForm, 'add');
}

function handleUpdate(row: any) {
  console.log(row, '更新');
  xFormRef.value.open(row);
}
</script>
```