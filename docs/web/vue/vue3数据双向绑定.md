# vue3 数据双向绑定

## 父组件

parent.vue

```html
<template>
    <son v-model="parentValue" @onChange="onChange"></son>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import son from './son.vue';
const parentValue = ref('');
function onChange(e:any) {
    console.log(e,'e');
    console.log(parentValue.value, 'parentValue');
}
</script>
```

## 子组件

```html
<template>
    <div class="son-box">
        <input type="text" v-model="inputVal" @input="onInput">
        {{ inputVal  }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputVal = ref('');
const emit = defineEmits(["update:modelValue", 'onChange'])
function onInput() {
    emit('update:modelValue', inputVal.value);
    emit('onChange', inputVal.value);
}
</script>

<style lang="scss" scoped>
.son-box{
    margin: 10px;
    padding: 10px;
}
</style>
```