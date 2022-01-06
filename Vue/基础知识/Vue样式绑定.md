# Vue3 样式绑定

#### 返回 [Vue基础知识](../Vue基础知识.md)

## Vue.js class

class 与 style 是 HTML 元素的属性，用于设置元素的样式，我们可以用 v-bind 来设置样式属性。  
v-bind 在处理 class 和 style 时， 表达式除了可以使用字符串之外，还可以是对象或数组。  
`v-bind:class` 可以简写为 `:class` 。  


## class 属性绑定

我们可以为 `v-bind:class` 设置一个对象，从而动态的切换 class:  
> 实例中将 isActive 设置为 true 显示了一个绿色的 div 块，如果设置为 false 则不显示：
```
<div :class="{ 'active': isActive }"></div>
```
以上实例 div class 渲染结果为：
```
<div class="active"></div>
```

我们也可以在对象中传入更多属性用来动态切换多个 class 。  
此外，`:class` 指令也可以与普通的 class 属性共存。
> text-danger 类背景颜色覆盖了 active 类的背景色：
```
<div class="static" :class="{ 'active' : isActive, 'text-danger' : hasError }"></div>
```
以上实例 div class 渲染结果为：
```
<div class="static text-danger"></div>
```
当 isActive 或者 hasError 变化时，class 属性值也将相应地更新。例如，如果 active 的值为 true，class 列表将变为 "static active text-danger"。  
我们也可以直接绑定数据里的一个对象：
> text-danger 类背景颜色覆盖了 active 类的背景色：
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - Vue教程</title>
<script src="https://unpkg.com/vue@next"></script>
<style>
.static {
	width: 100px;
	height: 100px;
}
.active {
	background: green;
}
.text-danger {
	background: red;
}
</style>
</head>
<body>
<div id="app">
    <div class="static" :class="classObject"></div>
</div>

<script>
const app = {
    data() {
      return {
         classObject: {
            'active': false,
            'text-danger': true
         }
      }
   }
}

Vue.createApp(app).mount('#app')
</script>
</body>
</html>
```

此外，我们也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - Vue教程</title>
<script src="https://unpkg.com/vue@next"></script>
<style>
.static {
	width: 100px;
	height: 100px;
}
.active {
	background: green;
}
.text-danger {
	background: red;
}
</style>
</head>
<body>
<div id="app">
    <div class="static" :class="classObject"></div>
</div>

<script>
const app = {
   data() {
      return {
         isActive: true,
         error: null
      }
   },
   computed: {
      classObject() {
         return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
         }
      }
   }
}

Vue.createApp(app).mount('#app')
</script>
</body>
</html>
```

### 数组语法
我们可以把一个数组传给 v-bind:class ，实例如下：
```
<div class="static" :class="[activeClass, errorClass]"></div>
```
以上实例 div class 渲染结果为：
```
<div class="static active text-danger"></div>
```

我们还可以使用三元表达式来切换列表中的 class ：
> errorClass 是始终存在的，isActive 为 true 时添加 activeClass 类：
```
<div id="app">
    <div class="static" :class="[isActive ? activeClass : '', errorClass]"></div>
</div>
```
以上实例 div class 渲染结果为：
```
<div class="static text-danger"></div>
```

## Vue.js style(内联样式)
我们可以在 `v-bind:style` 直接设置样式，可以简写为 `:style` ：
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
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Vue教程</div>
</div>

<script>
const app = {
    data() {
        return {
            activeColor: 'red',
			fontSize: 30
        }
    }
}

Vue.createApp(app).mount('#app')
</script>
</body>
</html>
```
以上实例 div style 渲染结果为：
```
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Vue教程</div>
```
```
<div style="color: red; font-size: 30px;">Vue教程</div>
```

也可以直接绑定到一个样式对象，让模板更清晰：
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
    <div :style="styleObject">Vue教程</div>
</div>

<script>
const app = {
    data() {
        return {
			styleObject: {
                color: "red",
			    fontSize: "30px"
			}
        }
    }
}

Vue.createApp(app).mount('#app')
</script>
</body>
```

`v-bind:style` 可以使用数组将多个样式对象应用到一个元素上：
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
    <div :style="[baseStyles, overridingStyles]">Vue教程</div>
</div>

<script>
const app = {
    data() {
        return {
			baseStyles: {
                color: 'green',
                fontSize: '30px'
            },
	        overridingStyles: {
                'font-weight': 'bold'
            }
        }
    }
}

Vue.createApp(app).mount('#app')
</script>
</body>
</html>
```
> 注意：当 `v-bind:style` 使用需要特定前缀的 CSS 属性时，如 transform ，Vue.js 会自动侦测并添加相应的前缀。

### 多重值

可以为 style 绑定中的 property 提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：
```
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```
这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 `display: flex` 。

## 组件上使用 class 属性

当你在带有单个根元素的自定义组件上使用 class 属性时，这些 class 将被添加到该元素中。此元素上的现有 class 将不会被覆盖。

```
<div id="app">
    <runoob class="classC classD"></runoob>
</div>
 
<script>
// 创建一个Vue 应用
const app = Vue.createApp({})
 
// 定义一个名为 runoob的新全局组件
app.component('runoob', {
    template: '<h1 class="classA classB">I like runoob!</h1>'
})
 
app.mount('#app')
</script>
```

以上实例 div class 渲染结果为：
```
<h1 class="classA classB classC classD">I like runoob!</h1>
```
对于带数据绑定 class 也同样适用：
```
<my-component :class="{ active: isActive }"></my-component>
```
当 isActive 为 true 时，HTML 将被渲染成为：
```
<p class="active">Hi</p>
```

如果你的组件有多个根元素，你需要定义哪些部分将接收这个类。可以使用 $attrs 组件属性执行此操作：
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - Vue教程</title>
<script src="https://unpkg.com/vue@next"></script>
<style>
.classA {
    color: red;
	font-size:30px;
}
	</style>
</head>
<body>
<div id="app">
    <runoob class="classA"></runoob>
</div>
 
<script>
const app = Vue.createApp({})
 
app.component('runoob', {
  template: `
    <p :class="$attrs.class">I like runoob!</p>
    <span>这是一个子组件</span>
  `
})
 
app.mount('#app')
</script>
</body>
</html>
```
> 注意：template 中 ` 是反引号，不是单引号 ' 。  

以上实例 div class 渲染结果为：
```
<div id="app" data-v-app=""><p class="classA">I like runoob!</p><span>这是一个子组件</span></div>
```

# 读者笔记

---

#### 返回 [Vue基础知识](../Vue基础知识.md)
