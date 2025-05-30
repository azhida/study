<!-- 基础柱状图 -->
<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { ref } from 'vue';
import VChart from 'vue-echarts';
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([GridComponent, BarChart, CanvasRenderer])

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
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
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
