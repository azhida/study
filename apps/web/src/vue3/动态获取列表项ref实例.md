# 动态获取列表项 ref 实例

## 方式1

```vue
<template>
<van-swipe-cell :ref="(el) => setRef(el, e)" :name="e.id" v-for="(e, i) in list">
  <van-cell :border="false" :title="e.content_en" :label="e.content_zh" />
  <template #right>
    <van-button square type="danger" text="删除" @click="onClickDel(e, i)" />
    <van-button square type="primary" text="编辑" @click="onClickEdit(e, i)" />
  </template>
</van-swipe-cell>
</template>

<script setup>
const list = ref([]);
const swipeCellRefs = ref({})

function setRef(el, e) {
  if (el) {
    swipeCellRefs.value[e.id] = el;
  }
}

function onClickDel(e, i) {
  console.log(i, 'i');
  showConfirmDialog({
    title: '系统提示',
    message: '确认删除吗？',
  })
    .then(() => {
      // on confirm
      swipeCellRefs.value[e.id].close()
      list.value.splice(i, 1);
    })
    .catch(() => {
      // on cancel
    });
}
</script>
```