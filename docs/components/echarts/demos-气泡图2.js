let data = [
  {
    name: 'B',
    value: 40,
    startColor: '#251571',
    endColor: '#0173e4',
  },
  {
    name: 'A+',
    value: 5,
    startColor: '#251571',
    endColor: '#24ac82',
  },
  {
    name: 'A',
    value: 60,
    startColor: '#251571',
    endColor: '#5a41dd',
  },
  {
    name: 'B+',
    value: 30,
    startColor: '#251571',
    endColor: '#926710'
  },
  {
    name: 'C+',
    value: 11,
    startColor: '#251571',
    endColor: '#5a41dd'
  },
  {
    name: 'C',
    value: 5,
    startColor: '#251571',
    endColor: '#5a41dd'
  },
];

var sum = 0;
var series = [];
data.forEach((e,i) =>{
  sum += e.value;
  var fontSize = 12;
  var y = getRandomNumber(100-e.value / 2, 100+e.value / 2);
  series.push(
    {
      type: 'scatter',
      symbolSize: e.value * 2,
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
            color: e.endColor  // 100% 处的颜色
          }
        ],
        global: false // 缺省为 false
      },
      label: {
        show: true,
        color: '#fff',
        fontWeight: 'bold',
        align: 'center',
        formatter: [
          '{a|'+e.name+'}',
          '{b|'+e.value+'%}'
        ].join('\n'),
        rich: {
          a: {
            fontSize: fontSize,
            fontWeight: 'bold',
          },
          b: {
            fontSize: fontSize,
            fontWeight: 'bold',
          }
        }
      },
      data: [[sum - e.value / 2, y]]
    }
    )
})

option = {
  xAxis: {
    max: 500
    // show:false
  },
  yAxis: {
    max: 300
    // show:false
  },
  series:series,
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

// 生成随机数
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
