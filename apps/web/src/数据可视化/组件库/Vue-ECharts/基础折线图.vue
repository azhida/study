<!-- 基础折线图 -->
<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { ref } from 'vue';
import VChart from 'vue-echarts';
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([GridComponent, LineChart, CanvasRenderer])

const option = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 300px;
}
</style>
