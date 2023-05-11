import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  title: {
    text: '名称',
    subtext: '子名称',
    left: 'center',
    top: 'center',
    textStyle: {
      color: '#059cbe',
      fontSize: 14
    },
    subtextStyle: {
      color: '#059cbe',
      fontSize: 14
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    top: 'center',
    textStyle: {
      color: '#fff'
    },
    icon: 'circle',
    data: [{ name: '男生' }, { name: '女生' }]
  },
  color: ['#ff9745', '#3fddfa'],
  series: [
    {
      type: 'pie',
      radius: ['35%', '50%'],
      data: [
        { value: 21, name: '女生' },
        { value: 86, name: '男生' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);
