import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

markLineHeight = 100;
option = {
  xAxis: {
    data: ['人文旅游专业部', '机电专业部', '信息专业部', '商贸专业部'],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      // color: '#fff'
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    }
  },
  series: [
    {
      z: 10,
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      emphasis: {
        itemStyle: {
          opacity: 1
        }
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(91,252,244,1)' // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgba(91,252,244,0)' // 100% 处的颜色
            }
          ]
        }
      },
      barCategoryGap: '-150%',
      name: 'hill',
      data: [40, 75, 45, 100],
      type: 'pictorialBar',
      markLine: {
        symbol: 'none', //去掉箭头
        data: [
          [
            { coord: ['人文旅游专业部', 0], name: '40' },
            { coord: ['人文旅游专业部', markLineHeight] }
          ],
          [
            { coord: ['机电专业部', 0], name: '75' },
            { coord: ['机电专业部', markLineHeight] }
          ],
          [
            { coord: ['信息专业部', 0], name: '45' },
            { coord: ['信息专业部', markLineHeight] }
          ],
          [
            { coord: ['商贸专业部', 0], name: '90' },
            { coord: ['商贸专业部', markLineHeight] }
          ]
        ]
      }
    }
  ]
};

option && myChart.setOption(option);
