# Vue3 起步

#### 返回 [Vue基础知识](../Vue基础知识.md)

刚开始学习 Vue，我们不推荐使用 vue-cli 命令行工具来创建项目，更简单的方式是直接在页面引入 vue.global.js 文件来测试学习。

Vue3 中的应用是通过使用 createApp 函数来创建的，语法格式如下：

```
const app = Vue.createApp({ /* 选项 */ })
```
传递给 createApp 的选项用于配置根组件。在使用 `mount()` 挂载应用时，该组件被用作渲染的起点。

一个简单的实例：
```
Vue.createApp(HelloVueApp).mount('#hello-vue')
```

createApp 的参数是根组件（HelloVueApp），在挂载应用时，该组件是渲染的起点。  
一个应用需要被挂载到一个 DOM 元素中，以上代码使用 `mount('#hello-vue')` 将 Vue 应用 HelloVueApp 挂载到 `<div id="hello-vue"></div>` 中。

先在 HTML 页面中引入 Vue 的 JS 文件：
```
<script src="https://unpkg.com/vue@next"></script>
```

实例：
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
<script src="https://unpkg.com/vue@next"></script>
</head>
<body>
<div id="hello-vue" class="demo">
  {{ message }}
</div>

<script>
const HelloVueApp = {
  data() {
    return {
      message: 'Hello Vue!!'
    }
  }
}

Vue.createApp(HelloVueApp).mount('#hello-vue')
</script>
</body>
</html>
```
vue的js文件：
```
<script src="https://unpkg.com/vue@next"></script>
```
- `mount('#hello-vue')` 将 Vue 应用 HelloVueApp 挂载到 `<div id="hello-vue"></div>` 中。
- `{{ }}` 用于输出对象属性和函数返回值。
- `{{ message }}` 对应应用中 message 的值。

## data 选项
data 选项是一个函数。Vue 在创建新组件实例的过程中调用此函数。它应该返回一个对象，然后 Vue 会通过响应性系统将其包裹起来，并以 $data 的形式存储在组件实例中。
```
const app = Vue.createApp({
  data() {
    return { count: 4 }
  }
})

const vm = app.mount('#app')

document.write(vm.$data.count) // => 4
document.write("<br>")
document.write(vm.count)       // => 4
document.write("<br>")
// 修改 vm.count 的值也会更新 $data.count
vm.count = 5
document.write(vm.$data.count) // => 5
document.write("<br>")
// 反之亦然
vm.$data.count = 6
document.write(vm.count) // => 6
```
以上实例属性仅在实例首次创建时被添加，所以你需要确保它们都在 data 函数返回的对象中。

## 方法

我们可以在组件中添加方法，使用 `methods` 选项，该选项包含了所需方法的对象。  
以下实例我们添加了 methods 选项，选项中包含了 `increment()` 方法：
```
const app = Vue.createApp({
  data() {
    return { count: 4 }
  },
  methods: {
    increment() {
      // `this` 指向该组件实例
      this.count++
    }
  }
})

const vm = app.mount('#app')

document.write(vm.count) // => 4
document.write("<br>")
vm.increment()

document.write(vm.count) // => 5
```

# 读者笔记

---

#### 返回 [Vue基础知识](../Vue基础知识.md)
