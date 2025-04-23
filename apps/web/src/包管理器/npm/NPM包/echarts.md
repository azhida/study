# Echarts

[官网](https://echarts.apache.org/zh/index.html)

```
npm install echarts --save
```

## vue 中使用
ECharts.vue
```
<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <!-- 1. 为 ECharts 准备一个定义了宽高的 DOM -->
      <div
        id="main"
        style="width: 600px;height:400px;"
      ></div>
    </el-card>
  </div>
</template>

<script>
// 2.导入 echarts , 注意： import echarts from 'echarts' 是错误的，一定要写 * as echarts
import * as echarts from 'echarts'

export default {
  // 此时，页面上的元素，已经被渲染完毕！
  mounted() {
    // 3.基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'))

    // 4.指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }

    // 5.使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  }

}
</script>

<style lang="less" scoped>
</style>
```