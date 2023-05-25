<template>
  <h4>标题</h4>
  <div id="main" :style="{width: '100%', height: '500px'}"></div>
  <button class="button" @click="refresh()">刷新</button>
  <button class="button" @click="init()">初始化</button>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl'
import * as _ from 'lodash-es';

export default{
  data(){
    return {
      updateKey: 0,
      chartMaine3: null,
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
      // var ROOT_PATH = 'https://echarts.apache.org/examples';
      var ROOT_PATH = '../../../assets/imgs/echarts/地球';
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;
      
      option = {
        backgroundColor: '#000',
        globe: {
          baseTexture: ROOT_PATH + '/data-gl/asset/earth.jpg',
          heightTexture: ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
          displacementScale: 0.1,
          shading: 'lambert',
          environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
          light: {
            ambient: {
              intensity: 0.1
            },
            main: {
              intensity: 1.5
            }
          },
          layers: [
            {
              type: 'blend',
              blendTo: 'emission',
              texture: ROOT_PATH + '/data-gl/asset/night.jpg'
            },
            {
              type: 'overlay',
              texture: ROOT_PATH + '/data-gl/asset/clouds.png',
              shading: 'lambert',
              distance: 5
            }
          ]
        },
        series: []
      };

      option && myChart.setOption(option);
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
