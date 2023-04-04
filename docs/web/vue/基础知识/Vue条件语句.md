# Vue3 条件语句

#### 返回 [Vue基础知识](../Vue基础知识.md)


## 条件判断
### v-if
条件判断使用 v-if 指令，指令的表达式返回 true 时才会显示：
```
<div id="app">
    <p v-if="seen">现在你看到我了</p>
</div>
    
<script>
const app = {
  data() {
    return {
      seen: true /* 改为false，信息就无法显示 */
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```
这里， v-if 指令将根据表达式 seen 的值( true 或 false )来决定是否插入 p 元素。  
因为 v-if 是一个指令，所以必须将它添加到一个元素上。如果是多个元素，可以包裹在 `<template>` 元素上，并在上面使用 v-if。最终的渲染结果将不包含 `<template>` 元素。

```
<div id="app">
    <template v-if="seen">
        <h1>网站</h1>
        <p>Google</p>
        <p>Runoob</p>
        <p>Taobao</p>
    </template>
</div>
    
<script>
const app = {
  data() {
    return {
      seen: true /* 改为false，信息就无法显示 */
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```

### v-else
可以用 v-else 指令给 v-if 添加一个 "else" 块：
> 随机生成一个数字，判断是否大于 0.5，然后输出对应信息：
```
<div id="app">
    <div v-if="Math.random() > 0.5">
      随机数大于 0.5
    </div>
    <div v-else>
      随机数小于等于 0.5
    </div>
</div>
    
<script>
Vue.createApp(app).mount('#app')
</script>
```
### v-else-if
v-else-if 即 v-if 的 else-if 块，可以链式的使用多次：
> 判断 type 变量的值：
```
<div id="app">
    <div v-if="type === 'A'">
         A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
</div>
    
<script>
const app = {
  data() {
    return {
      type: "C" 
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```
> v-else 、v-else-if 必须跟在 v-if 或者 v-else-if之后。
### v-show
我们也可以使用 v-show 指令来根据条件展示元素：
```
<h1 v-show="ok">Hello!</h1>
```

# 读者笔记

---

#### 返回 [Vue基础知识](../Vue基础知识.md)
