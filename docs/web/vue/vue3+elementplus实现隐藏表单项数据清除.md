# Vue3 + ElementPlus 实现隐藏表单项数据清除 

## 重写 `el-form-item` 为 `x-form-item`

- `x-form-item.vue`

```vue
<template>
  <el-form-item v-bind="$attrs">
    <template v-for="(item, key, i) in $slots" :key="i" v-slot:[key]="slotProps">
        <slot :name="key" v-bind="slotProps"></slot>
      </template>
    </el-form-item>
  </template>
<script setup>
import { onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['onMounted', 'onUnmounted', 'hidden'])

onMounted(() => {
  // console.log('onMounted');
  emit('onMounted')
  emit('hidden', false)
})

onUnmounted(() => {
  // console.log('onUnmounted');
  emit('onUnmounted')
  emit('hidden', true)
})
</script>
```

## 调用

### form.vue

```vue
<template>
  <el-form :model="form">
    <el-form-item label="姓名">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="显示/隐藏年龄">
      <el-switch v-model="form.showAge" />
    </el-form-item>
    <x-form-item label="年龄" v-if="form.showAge" @onUnmounted="onUnmountedRemoveFields(['age'])">
      <el-input-number v-model="form.age" placeholder="" />
    </x-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确认</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import XFormItem from './x-form-item.vue'

const form: any = ref({})

const onSubmit = () => {
  console.log(form.value, 'form')
  console.log('submit!')
}

/**
 * 监听到 onUnmounted 事件触发，就清空或者删除表单项对应字段
 * fields 为数组，兼容 一个 el-form-item 里面有多个 el-input 的情况
 * 注意：使用该方法要小心，当整个 form.vue 组件卸载时也会触发，所以需要自行掌握好调用的时机
 */
function onUnmountedRemoveFields(fields: Array<string>) {
  console.log(fields, 'fields')
  fields.map((field: string) => {
    // 置空
    // form.value[field] = null;
    // 删除字段
    delete form.value[field]
  })
}
</script>
```

