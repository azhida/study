# Vue3 监听属性

#### 返回 [Vue基础知识](../Vue基础知识.md)

本章节，我们将为大家介绍 Vue3 监听属性 watch，我们可以通过 watch 来响应数据的变化。  
以下实例通过使用 watch 实现计数器：
```
<div id = "app">
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button @click = "counter++" style = "font-size:25px;">点我</button>
</div>
    
<script>
const app = {
  data() {
    return {
      counter: 1
    }
  }
}
vm = Vue.createApp(app).mount('#app')
vm.$watch('counter', function(nval, oval) {
    alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
});
</script>
```

以下实例进行千米与米之间的换算：
```
<head>
<meta charset="utf-8">
<title>Vue 测试实例 - 菜鸟教程(runoob.com)</title>
<script src="https://unpkg.com/vue@next"></script>
</head>
<body>
<div id = "app">
    千米 : <input type = "text" v-model = "kilometers">
    米 : <input type = "text" v-model = "meters">
</div>
<p id="info"></p>    
<script>
const app = {
  data() {
    return {
      kilometers : 0,
      meters:0
    }
  },
  watch : {
      kilometers:function(val) {
          this.kilometers = val;
          this.meters = this.kilometers * 1000
      },
      meters : function (val) {
          this.kilometers = val/ 1000;
          this.meters = val;
      }
  }
}
vm = Vue.createApp(app).mount('#app')
vm.$watch('kilometers', function (newValue, oldValue) {
    // 这个回调将在 vm.kilometers 改变后调用
    document.getElementById ("info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;
})
</script>
```
以上代码中我们创建了两个输入框，data 属性中， kilometers 和 meters 初始值都为 0。watch 对象创建了 data 对象的两个监控方法： kilometers 和 meters。  
当我们再输入框输入数据时，watch 会实时监听数据变化并改变自身的值。

### 异步加载中使用 watch
异步数据的加载 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。  
以下实例我们使用 axios 库，后面会具体介绍。
```
<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script>
  const watchExampleVM = Vue.createApp({
    data() {
      return {
        question: '',
        answer: '每个问题结尾需要输入 ? 号。'
      }
    },
    watch: {
      // 每当问题改变时，此功能将运行，以 ? 号结尾
      question(newQuestion, oldQuestion) {
        if (newQuestion.indexOf('?') > -1) {
          this.getAnswer()
        }
      }
    },
    methods: {
      getAnswer() {
        this.answer = '加载中...'
        axios
          .get('https://yesno.wtf/api')
          .then(response => {
            this.answer = response.data.answer
          })
          .catch(error => {
            this.answer = '错误! 无法访问 API。 ' + error
          })
      }
    }
  }).mount('#watch-example')
</script>
```

# 读者笔记

---

#### 返回 [Vue基础知识](../Vue基础知识.md)
