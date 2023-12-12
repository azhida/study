# 将 json 导出到 excel

## vue2

```vue
<template>
  <JsonExcel :data="list" :fields="json_fields" type="xlsx" title="表名称" name="文件名称.xlsx">
    <el-button type="warning" plain icon="el-icon-download" size="mini">下载</el-button>
  </JsonExcel>
</template>

<script>
import JsonExcel from 'vue-json-excel';

export default {
  components: { JsonExcel },
    data() {
    return {
      tjList: [
        {id: 1, name: '张三'},
        {id: 2, name: '李四'},
      ],
      // 转化导出的字段名
      json_fields: {
        序号: 'id',
        姓名: 'name',
        联系电话: 'phone',
      }
    }
  }
}

</script>
```

## vue3

### `vue3-json-excel`

```sh
pnpm i vue3-json-excel
```

```ts
// main.ts

// 导出 json 到 excel
import vue3JsonExcel from "vue3-json-excel"

const app = createApp(App)
app.use(vue3JsonExcel)
app.mount('#app')
```

```vue
<!-- demo.vue -->

<vue3-json-excel :json-data="tableData" :fields="json_fields">
  <el-button type="warning" plain icon="Download">导出</el-button>
</vue3-json-excel>
```