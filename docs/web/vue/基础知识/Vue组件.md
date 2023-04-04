# Vue3 组件

#### 返回 [Vue基础知识](../Vue基础知识.md)

组件（Component）是 Vue.js 最强大的功能之一。  
组件可以扩展 HTML 元素，封装可重用的代码。  
组件系统让我们可以用独立可复用的小组件来构建大型应用，几乎任意类型的应用的界面都可以抽象为一个组件树：  

每个 Vue 应用都是通过用 createApp 函数创建的，传递给 createApp 的选项用于配置根组件。当我们挂载应用时，该组件被用作渲染的起点。  
一个应用需要被挂载到一个 DOM 元素中。  
以下实例我们将 Vue 应用挂载到 `<div id="app"></div>`，应该传入 #app：  
```
const RootComponent = { /* 选项 */ }
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')
```

注册一个全局组件语法格式如下：
```
const app = Vue.createApp({...})

app.component('my-component-name', {
  /* ... */
})
```
my-component-name 为组件名，/* ... */ 部分为配置选项。注册后，我们可以使用以下方式来调用组件：
```
<my-component-name></my-component-name>
```

一个简单的 Vue 组件的实例：
> 全局组件实例  
> 注册一个简单的全局组件 runoob，并使用它：
```
<div id="app">
    <runoob></runoob>
</div>
 
<script>
// 创建一个Vue 应用
const app = Vue.createApp({})
 
// 定义一个名为 runoob的新全局组件
app.component('runoob', {
    template: '<h1>自定义组件!</h1>'
})
 
app.mount('#app')
</script>
```

接下来我们再注册一个 button-counter 组件，在每次点击后，计数器会加 1:
```
// 创建一个Vue 应用
const app = Vue.createApp({})

// 定义一个名为 button-counter 的新全局组件
app.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      点了 {{ count }} 次！
    </button>`
})
app.mount('#app')
</script>
```
> 注意：template 中 ` 是反引号，不是单单引号 ' 。

### 组件的复用
你可以将组件进行任意次数的复用：
```
<div id="components-demo">
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>
```
### 全局组件
以上的实例中我们的组件都只是通过 component 全局注册的。  
全局注册的组件可以在随后创建的 app 实例模板中使用，也包括根实例组件树中的所有子组件的模板中。  
> 注册一个简单的全局组件 runoob，并使用它：
```
<div id="app">
    <runoob></runoob>
</div>
 
<script>
// 创建一个Vue 应用
const app = Vue.createApp({})
 
// 定义一个名为 runoob 的新全局组件
app.component('runoob', {
    template: '<h1>自定义组件!</h1>'
})
 
app.mount('#app')
</script>
```
### 局部组件
全局注册往往是不够理想的。比如，如果你使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用一个组件了，它仍然会被包含在你最终的构建结果中。这造成了用户下载的 JavaScript 的无谓的增加。  
在这些情况下，你可以通过一个普通的 JavaScript 对象来定义组件：
```
const ComponentA = {
  /* ... */
}
const ComponentB = {
  /* ... */
}
const ComponentC = {
  /* ... */
}
```

然后在 components 选项中定义你想要使用的组件：
```
const app = Vue.createApp({
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
})
```
对于 components 对象中的每个属性来说，其属性名就是自定义元素的名字（component-a、component-b），其属性值就是这个组件的选项对象（ComponentA、ComponentB）。  
我们也可以在实例选项中注册局部组件，这样组件只能在这个实例中使用：
> 注册一个简单的局部组件 runoobA，并使用它：
```
<div id="app">
    <runoob-a></runoob-a>
</div>
<script>
var runoobA = {
  template: '<h1>自定义组件!</h1>'
}
 
const app = Vue.createApp({
  components: {
    'runoob-a': runoobA
  }
})
 
app.mount('#app')
</script>
```


## Prop
prop 是子组件用来接受父组件传递过来的数据的一个自定义属性。  
父组件的数据需要通过 props 把数据传给子组件，子组件需要显式地用 props 选项声明 "prop"：
```
<div id="app">
  <site-name title="Google"></site-namet>
  <site-name title="Runoob"></site-namet>
  <site-name title="Taobao"></site-name>
</div>
 
<script>
const app = Vue.createApp({})
 
app.component('site-name', {
  props: ['title'],
  template: `<h4>{{ title }}</h4>`
})
 
app.mount('#app')
</script>
```
一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。

### 动态 Prop
类似于用 v-bind 绑定 HTML 特性到一个表达式，也可以用 v-bind 动态绑定 props 的值到父组件的数据中。每当父组件的数据变化时，该变化也会传导给子组件：  
```
<div id="app">
  <site-info
    v-for="site in sites"
    :id="site.id"
    :title="site.title"
  ></site-info>
</div>
 
<script>
const Site = {
  data() {
    return {
      sites: [
        { id: 1, title: 'Google' },
        { id: 2, title: 'Runoob' },
        { id: 3, title: 'Taobao' }
      ]
    }
  }
}
 
const app = Vue.createApp(Site)
 
app.component('site-info', {
  props: ['id','title'],
  template: `<h4>{{ id }} - {{ title }}</h4>`
})
 
app.mount('#app')
</script>
```
### Prop 验证
组件可以为 props 指定验证要求。  
为了定制 prop 的验证方式，你可以为 props 中的值提供一个带有验证需求的对象，而不是一个字符串数组。例如：
```
Vue.component('my-component', {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
})
```
当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。  
type 可以是下面原生构造器：  
- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol

type 也可以是一个自定义构造器，使用 instanceof 检测。


# 读者笔记

---

#### 返回 [Vue基础知识](../Vue基础知识.md)
