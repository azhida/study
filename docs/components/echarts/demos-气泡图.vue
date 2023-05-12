<template>
  <h4>标题</h4>
  <div id="main"></div>
  <button class="button" @click="refresh()">刷新</button>  
  <div id="main1"></div>
  <button class="button" @click="makeChart1()">刷新</button>  
</template>

<script>
import * as echarts from 'echarts';
import * as _ from 'lodash-es'

export default{
  data(){
    return {
      bubbleItems: [
        {name:'A',value:1, startColor:'#251571',endColor:'#5a41dd' },
        {name:'A+',value:2, startColor:'#251571',endColor:'#24ac82'},
        {name:'B',value:3, startColor:'#251571',endColor:'#0173e4'},
        {name:'B+',value:4, startColor:'#251571',endColor:'#926710'},
        {name:'C',value:5, startColor:'#251571',endColor:'#5a41dd'},
        {name:'C+',value:61, startColor:'#251571',endColor:'#5a41dd'},
      ]
    }
  },
  mounted() {
      this.makeChart()
      this.makeChart1()
  },
  methods: {
    refresh(){
      this.bubbleItems = _.sampleSize(this.bubbleItems, _.random(1, this.bubbleItems.length))
      this.makeChart()
    },
    makeChart(){
      // 初始化 echarts
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;   

      // 拿原始数据 - 请求API获取
      var data = this.bubbleItems;
      let valueArr = data.map(function(i) {return i.value});
      // 拿到 value 的和，用于计算气泡要显示的百分比
      var sumValue = valueArr.reduce(function (total, value) {
          return total + value;
        }, 0);
      // 拿到 value 最大值，用于计算气泡大小
      var maxValue = Math.max.apply(Math, data.map(function(i) {return i.value}));
      
      // 气泡基础大小
      var basicSize = 70;
      // 节点之间的斥力因子,值越大,气泡间距越大
      var repulsion = 380;
      // 根据气泡数量配置基础大小和斥力因子（以实际情况进行适当调整，使气泡合理分布）
      if (data.length >= 5 && data.length < 10) {
        basicSize = 50;
        repulsion = 230;
      } else if (data.length >= 10 && data.length < 20) {
        basicSize = 40;
        repulsion = 150;
      } else if (data.length >= 20) {
        basicSize = 30;
        repulsion = 75;
      }

      // 做 echart 需要的气泡数据
      var bubbleData = data.map(item => {
        // 计算百分比
        let bValue = item.value / sumValue * 100;

        // 计算气泡大小
        let symbolSize = (item.value * basicSize * 2) / maxValue;
        if (symbolSize < basicSize) symbolSize = basicSize;
        // 气泡大小[宽,高]，symbolSize: [10,20]
        item.symbolSize = [symbolSize, symbolSize];
        // 开启拖拽
        item.draggable = true;
        // 文本标签
        item.label = {
          show: true,
          color: '#fff',
          fontWeight: 'bold',
          align: 'center',
          formatter: ['{a|' + item.name + '}', '{b|' + bValue.toFixed(1) + '%}'].join('\n'),
          rich: {
            a: {
              padding: [0, 0, 5, 0]
            },
            b: {}
          }
        }
        item.itemStyle = {
          normal: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: item.startColor // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: item.endColor // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          }
        }
        
        return item;
      });

      option = {
        backgroundColor:"#031c4c",
        animationEasingUpdate: 'bounceIn',
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: repulsion,
              edgeLength: 10
            },
            // 是否开启鼠标缩放和平移漫游
            roam: false,
            label: { normal: { show: true, color: 'red' } },
            data: bubbleData
          }
        ]
      };
      myChart.setOption(option);

      option && myChart.setOption(option);
    },
    makeChart1(){

      // 拿原始数据 - 请求API获取
      var data = this.bubbleItems;
      let valueArr = data.map(function(i) {return i.value});
      // 拿到 value 的和，用于计算气泡要显示的百分比
      var sumValue = valueArr.reduce(function (total, value) {
          return total + value;
        }, 0);
      // 拿到 value 最大值，用于计算气泡大小
      var maxValue = Math.max.apply(Math, data.map(function(i) {return i.value}));
      
      // 初始化 echarts
      var chartDom = document.getElementById('main1');
      var myChart = echarts.init(chartDom);
      var option;      

      // 气泡基础大小
      var basicSize = 70;
      // 节点之间的斥力因子,值越大,气泡间距越大
      var repulsion = 380;
      // 根据气泡数量配置基础大小和斥力因子（以实际情况进行适当调整，使气泡合理分布）
      if (data.length >= 5 && data.length < 10) {
        basicSize = 50;
        repulsion = 230;
      } else if (data.length >= 10 && data.length < 20) {
        basicSize = 40;
        repulsion = 150;
      } else if (data.length >= 20) {
        basicSize = 30;
        repulsion = 75;
      }

      // 做 echart 需要的气泡数据
      var bubbleData = data.map(item => {
        // 计算百分比
        let bValue = item.value / sumValue * 100;

        // 计算气泡大小
        let symbolSize = (item.value * basicSize * 2) / maxValue;
        if (symbolSize < basicSize) symbolSize = basicSize;
        // 气泡大小[宽,高]，symbolSize: [10,20]
        item.symbolSize = [symbolSize, symbolSize / 2];
        // 开启拖拽
        item.draggable = true;
        // 文本标签
        item.label = {
          show: true,
          color: '#fff',
          fontWeight: 'bold',
          align: 'center',
          formatter: ['{a|' + item.name + '}', '{b|' + bValue.toFixed(1) + '%}'].join('\n'),
          rich: {
            a: {
              padding: [0, 0, 5, 0]
            },
            b: {}
          }
        }
        item.itemStyle = {
          normal: {
            color: {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [
                {
                  offset: 0,
                  color: item.startColor // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: item.endColor // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          }
        }
        
        return item;
      });

      option = {
        backgroundColor:"#031c4c",
        animationEasingUpdate: 'bounceIn',
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: repulsion,
              edgeLength: 10
            },
            // 是否开启鼠标缩放和平移漫游
            roam: false,
            label: { normal: { show: true, color: 'red' } },
            data: bubbleData
          }
        ]
      };
      myChart.setOption(option);

      option && myChart.setOption(option);
    },

  },
}
</script>

<style scoped>
  #main , #main1{
      width: 100%;
      min-height: 300px;
      border: 0px solid red;
  }

  .button{
    margin: 10px 0;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #10b981;
    color: #fff;
  }
</style>
