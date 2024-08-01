<template>
  <h4>标题</h4>
  <div id="main" :key="mainKey" :style="{width: mainWight+'px',height:mainHeight+'px'}"></div>
  <button class="button" @click="refresh()">刷新</button>  
  <button class="button" @click="init()">初始化</button>
</template>

<script>
import * as echarts from 'echarts';
import * as _ from 'lodash-es'

export default{
  data(){
    return {
      mainKey: 0,
      mainWight: 500,
      mainHeight: 200,
      bubbleItems: [
        {name:'A',value:10, startColor:'#251571',endColor:'#5a41dd' },
        {name:'A+',value:10, startColor:'#251571',endColor:'#24ac82'},
        {name:'B',value:30, startColor:'#251571',endColor:'#0173e4'},
        {name:'B+',value:40, startColor:'#251571',endColor:'#926710'},
        {name:'C',value:50, startColor:'#251571',endColor:'#5a41dd'},
        {name:'C+',value:60, startColor:'#251571',endColor:'#5a41dd'},
      ],
      bubbleItemsTemp:[]
    }
  },
  computed:{
    
  },
  mounted() {
    this.bubbleItemsTemp = this.bubbleItems
    this.makeChart()
  },
  methods: {
    minValue(){
      return _.minBy(this.bubbleItemsTemp, 'value')
    },
    maxValue(){
      return _.maxBy(this.bubbleItemsTemp, 'value')
    },
    sumValue(){
      return _.sumBy(this.bubbleItemsTemp, 'value')
    },
    baseWeight(){
      return this.mainWight / this.sumValue()
    },
    baseHeight(){
      return this.maxValue() / this.mainHeight
    },
    
    refresh(){
      this.bubbleItemsTemp = _.sampleSize(this.bubbleItems, _.random(1, this.bubbleItems.length))
      this.makeChart()
    },
    init(){
      this.bubbleItemsTemp = this.bubbleItems
      this.makeChart()
    },
    
    makeChart(){
      // 初始化 echarts
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;   

      // 数据数组 -- 拿原始数据 - 请求API获取
      let data = this.bubbleItemsTemp;
      var sum = 0;
      var series = [];
      data.forEach((e, i) => {
        sum += e.value;

        var fontSize = 12 * (1 + e.value - this.minValue().value);
        if (fontSize > 20) {
          fontSize = 20;
        }
        
        var x = (sum - e.value / 2) * this.baseWeight();
        var y = _.random(0 + e.value / 2, this.mainHeight - e.value / 2);
        series.push({
          type: 'scatter',
          symbolSize: e.value * this.baseWeight() * 0.9,
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: e.startColor // 0% 处的颜色
              },
              {
                offset: 1,
                color: e.endColor // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          label: {
            show: true,
            color: '#fff',
            fontWeight: 'bold',
            align: 'center',
            formatter: ['{a|' + e.name + '}', '{b|' + e.value + '%}'].join('\n'),
            rich: {
              a: {
                fontSize: fontSize,
                // fontWeight: 'bold'
              },
              b: {
                fontSize: fontSize,
                // fontWeight: 'bold'
              }
            }
          },
          data: [[x, y]]
        });
      });

      option = {
        grid:{
          left:0,
          right:0
        },
        xAxis: {
          interval:50,
          max: this.mainWight
          // show:false
        },
        yAxis: {
          max: this.mainHeight
          // show:false
        },
        series: series
        // series: [
        //   {
        //     type: 'scatter',
        //     symbolSize: 61 * 2,
        //     color: {
        //       type: 'radial',
        //       x: 0.5,
        //       y: 0.5,
        //       r: 0.5,
        //       colorStops: [
        //         {
        //           offset: 0,
        //           color: '#251571' // 0% 处的颜色
        //         },
        //         {
        //           offset: 1,
        //           color: '#5a41dd' // 100% 处的颜色
        //         }
        //       ],
        //       global: false // 缺省为 false
        //     },
        //     label: {
        //       show: true,
        //       color: '#fff',
        //       fontWeight: 'bold',
        //       align: 'center',
        //       formatter: [
        //         '{a|aaa}',
        //         '{b|bbb%}'
        //       ].join('\n'),
        //       rich: {
        //         a: {
        //           padding: [0, 0, 5, 0],
        //           fontSize: 20,
        //         },
        //         b: {
        //           fontSize: 20,
        //         }
        //       }
        //     },
        //     data: [[20, 30]]
        //   },
        //   {
        //     type: 'scatter',
        //     symbolSize: 50,
        //     label: {
        //       show: true,
        //       fontStyle: 14
        //     },
        //     data: [[10, 50]]
        //   }
        // ]
      };

      option && myChart.setOption(option);

    },


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
