<template>
  <h4>标题</h4>
  <div id="main"></div>
  <button class="button" @click="refresh()">刷新</button>  
  <button class="button" @click="init()">初始化</button>
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
      ],
      bubbleItemsTemp:[]
    }
  },
  mounted() {
    this.bubbleItemsTemp = this.bubbleItems
    this.makeChart()
  },
  methods: {
    refresh(){
      this.bubbleItemsTemp = _.sampleSize(this.bubbleItems, _.random(1, this.bubbleItems.length))
      this.makeChart()
    },
    init(){
      this.bubbleItemsTemp = this.bubbleItems
      this.makeChart()
    },
    // 生成随机坐标的不重叠圆
 drawCircles(maxLength, radius, max_x, max_y) {
  let circles = [];
  let anti_crash_count = 0;
  while (circles.length < maxLength) {
    let circle = {
      x: this.getRandomNumber(radius, max_x - radius),
      y: this.getRandomNumber(radius, max_y - radius),
      radius,
    };

    let isOverlapping = false;

    for (let j = 0; j < circles.length; j++) {
      let previous_circle = circles[j];
      let distance = Math.hypot(circle.x - previous_circle.x, circle.y - previous_circle.y);

      if (distance < circle.radius + previous_circle.radius) {
        isOverlapping = true;
        break;
      }
    }

    if (!isOverlapping) {
      circles.push(circle);
    }
    anti_crash_count++;
    if (anti_crash_count > 10000) {
      break;
    }
  }
  return circles;
},
// 生成随机数坐标
 getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
},
    makeChart(){
      // 初始化 echarts
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;   

      // 数据数组 -- 拿原始数据 - 请求API获取
      let bubbleData = this.bubbleItemsTemp;

      var sum = 0,  max = 0;
      bubbleData.forEach((e, i) => {
        e.id = i;
        e.label = {
          normal: {
            show: true,
            color: '#fff',
          },
        };
        e.itemStyle = {
          normal: {
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
            shadowBlur: 16,
            shadowOffsetY: 16,
            shadowColor: 'rgba(0,0,0,0.1)',
          },
        };
        sum += e.value;
        if (e.value >= max) max = e.value;
      });

      // 放大规则
      var number = Math.round(max * 0.5);
      let graphCanvas = document.getElementById('main').getBoundingClientRect();
      let randomCircleArr = this.drawCircles(
        bubbleData.length,
        ((max + number) / max) * 40,
        graphCanvas.width,
        graphCanvas.height
      );

      bubbleData.forEach((e, i) => {
        if (randomCircleArr[i]) {
          e.x = randomCircleArr[i].x;
          e.y = randomCircleArr[i].y;
          e.symbolSize = ((e.value + number) / max) * 70;
          e.label.normal.fontSize = ((e.value + number) / max) * 15;
        } else {
          e.symbolSize = 0;
          e.x = 0;
          e.y = 0;
        }
      });
      
      option = {
        backgroundColor:"#031c4c",
        title: {},
        series: [
          {
            type: 'graph',
            layout: 'none',
            label: {
              show: true,
              normal: {
                color: '#fff',
              },
            },
            data: bubbleData,
          },
        ],
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
    margin: 10px ;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #10b981;
    color: #fff;
  }
</style>
