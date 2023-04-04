# Vue3 计算属性

#### 返回 [Vue基础知识](../Vue基础知识.md)
计算属性关键词: `computed` 。  
计算属性在处理一些复杂逻辑时是很有用的。  
可以看下以下反转字符串的例子：
```
<div id="app">
  {{ message.split('').reverse().join('') }}
</div>
```
实例中模板变的很复杂起来，也不容易看懂理解。  
接下来我们看看使用了计算属性的实例：  
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - Vue教程</title>
<script src="https://unpkg.com/vue@next"></script>
</head>
<body>
<div id="app">
  <p>原始字符串: {{ message }}</p>
  <p>计算后反转字符串: {{ reversedMessage }}</p>
</div>
    
<script>
const app = {
  data() {
    return {
      message: 'Vuejs!!'
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
```
实例中声明了一个计算属性 `reversedMessage` 。  
提供的函数将用作属性 vm.reversedMessage 的 getter 。  
vm.reversedMessage 依赖于 vm.message，在 vm.message 发生改变时，vm.reversedMessage 也会更新。

## computed vs methods
我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
```
methods: {
  reversedMessage2: function () {
    return this.message.split('').reverse().join('')
  }
}
```
可以说使用 computed 性能会更好，但是如果你不希望缓存，你可以使用 methods 属性。
## computed setter
computed 属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：
```
var vm = new Vue({
  el: '#app',
  data: {
    name: 'Google',
    url: 'http://www.google.com'
  },
  computed: {
    site: {
      // getter
      get: function () {
        return this.name + ' ' + this.url
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.name = names[0]
        this.url = names[names.length - 1]
      }
    }
  }
})
// 调用 setter， vm.name 和 vm.url 也会被对应更新
vm.site = 'Vue教程 http://www.vue.com';
document.write('name: ' + vm.name);
document.write('<br>');
document.write('url: ' + vm.url);
```
从实例运行结果看在运行 `vm.site = '菜鸟教程 http://www.runoob.com';` 时，setter 会被调用， vm.name 和 vm.url 也会被对应更新。


# 读者笔记

---

#### 返回 [Vue基础知识](../Vue基础知识.md)
