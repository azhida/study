# element-plus

经典中的经典，全面支持 Vue 3。

- 官网

https://element-plus.org/zh-CN/

https://element-plus.gitee.io/zh-CN/


## 参考

- [(vue3)vite+TS+element-plus icon图标自动导入实现方法](https://blog.csdn.net/qq_39111074/article/details/130063159)


## 使用笔记

### 下拉框 el-dropdown 有黑框框怎么取消

```vue
<template>
  <el-dropdown>
    <div class="custom-dropdown">123</div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">
.custom-dropdown:focus-visible {
  outline: unset;
}
</style>
```
