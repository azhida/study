# Vue3 事件处理

#### 返回 [Vue基础知识](../Vue基础知识.md)

我们可以使用 `v-on` 指令来监听 DOM 事件，从而执行 JavaScript 代码。  
`v-on` 指令可以缩写为 `@` 符号。  
语法格式：
```
v-on:click="methodName"
或
@click="methodName"
```
实例
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
  <button @click="counter += 1">增加 1</button>
  <p>这个按钮被点击了 {{ counter }} 次。</p>
</div>

<script>
const app = {
  data() {
    return {
      counter: 0
    }
  }
}

Vue.createApp(app).mount('#app')
</script>
</body>
</html>
```

通常情况下，我们需要使用一个方法来调用 JavaScript 方法。

v-on 可以接收一个定义的方法来调用。
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
  <!-- `greet` 是在下面定义的方法名 -->
  <button @click="greet">点我</button>
</div>

<script>
const app = {
  data() {
    return {
      name: 'Runoob'
    }
  },
  methods: {
    greet(event) {
      // `methods` 内部的 `this` 指向当前活动实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}

Vue.createApp(app).mount('#app')
</script>
</body>
</html>
```

除了直接绑定到一个方法，也可以用内联 JavaScript 语句：
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
  <button @click="say('hi')">Say hi</button>
  <button @click="say('what')">Say what</button>
</div>

<script>
const app = {
  data() {
   
  },
  methods: {
    say(message) {
      alert(message)
    }
  }
}

Vue.createApp(app).mount('#app')
</script>
</body>
</html>
```

事件处理程序中可以有多个方法，这些方法由逗号运算符分隔：
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
  <!-- 这两个 one() 和 two() 将执行按钮点击事件 -->
  <button @click="one($event), two($event)">
  点我
  </button>
</div>
 
<script>
const app = {
  data() {
  },
  methods: {
    one(event) {
      alert("第一个事件处理器逻辑...")
    },
    two(event) {
      alert("第二个事件处理器逻辑...")
    }
  }
}
 
Vue.createApp(app).mount('#app')
</script>
</body>
</html>
```

### 事件修饰符

Vue.js 为 v-on 提供了事件修饰符来处理 DOM 事件细节，如：event.preventDefault() 或 event.stopPropagation()。  
Vue.js 通过由点 `.` 表示的指令后缀来调用修饰符。
- .stop - 阻止冒泡
- .prevent - 阻止默认事件
- .capture - 阻止捕获
- .self - 只监听触发该元素的事件
- .once - 只触发一次
- .left - 左键事件
- .right - 右键事件
- .middle - 中间滚轮事件

```
<!-- 阻止单击事件冒泡 -->
<a v-on:click.stop="doThis"></a>
<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>
<!-- 修饰符可以串联  -->
<a v-on:click.stop.prevent="doThat"></a>
<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>
<!-- 添加事件侦听器时使用事件捕获模式 -->
<div v-on:click.capture="doThis">...</div>
<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div v-on:click.self="doThat">...</div>

<!-- click 事件只能点击一次，2.1.4版本新增 -->
<a v-on:click.once="doThis"></a>
```

### 按键修饰符

Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
```
<!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
<input v-on:keyup.13="submit">
```
记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：
```
<!-- 同上 -->
<input v-on:keyup.enter="submit">
<!-- 缩写语法 -->
<input @keyup.enter="submit">
```

全部的按键别名：
- .enter
- .tab
- .delete (捕获 "删除" 和 "退格" 键)
- .esc
- .space
- .up
- .down
- .left
- .right

系统修饰键：
- .ctrl
- .alt
- .shift
- .meta

鼠标按钮修饰符:
- .left
- .right
- .middle

```
<p><!-- Alt + C -->
<input @keyup.alt.67="clear">
<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

### .exact 修饰符

`.exact` 修饰符允许你控制由精确的系统修饰符组合触发的事件。
```
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```

# 读者笔记

---

#### 返回 [Vue基础知识](../Vue基础知识.md)
