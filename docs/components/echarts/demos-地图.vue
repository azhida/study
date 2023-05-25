<template>
  <h4>标题</h4>
  <div id="main" ref="demoRef" :style="{width: '100%', height: '500px'}" :key="updateKey"></div>
  <button class="button" @click="refresh()">刷新</button>
  <button class="button" @click="init()">初始化</button>
</template>

<script>
import * as echarts from 'echarts';
import * as _ from 'lodash-es';
import allData from '../../assets/json/echarts/中华人民共和国.json';

export default{
  data(){
    return {
      updateKey: 0
    }
  },
  computed:{
    
  },
  mounted() {
    this.createChart()
  },
  methods: {
    init(){
      this.createChart()
    },
    refresh(){
      // todo 生成随机数据...
      this.createChart()
    },
    createChart () {

      const el = this.$refs['demoRef']
      const myChart = echarts.init(el);

      // 注册地图，名字自己取：中国
      echarts.registerMap('中国', allData)
 
      const option = {
        visualMap: {
          text: ['高', '低'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            type: 'map',
            map: '中国',
            label: {
              show: true
            },
            roam: true, // 允许拖动和缩放
          }
        ]
      }
 
      myChart.setOption(option)
    }
  },
}
</script>

<style scoped>
  #main{
      /* width: 100%; */
      border: 1px solid red;
  }

  .button{
    margin: 10px ;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #10b981;
    color: #fff;
  }
</style>
