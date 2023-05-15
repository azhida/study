let resultData = {
  status: 'success',
  data: [
    {
      name: 'A',
      value: 4,
    },
    {
      name: 'A+',
      value: 894,
    },
    {
      name: 'B',
      value: 33,
    },
    {
      name: 'B+',
      value: 333,
    },
    {
      name: 'C',
      value: 32,
    },
    {
      name: 'C+',
      value: 785,
    },
  ],
  msg: 'exercitation in',
};

// ajax 请求数据
let data  = [
    {name:'A',value:1, startColor:'#251571',endColor:'#5a41dd' },
    {name:'A+',value:2, startColor:'#251571',endColor:'#24ac82'},
    {name:'B',value:3, startColor:'#251571',endColor:'#0173e4'},
    {name:'B+',value:4, startColor:'#251571',endColor:'#926710'},
    {name:'C',value:5, startColor:'#251571',endColor:'#5a41dd'},
    {name:'C+',value:61, startColor:'#251571',endColor:'#5a41dd'},
]

// 颜色列表
let colorList = [];
data.forEach((e,i) => {
    colorList.push({
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [{
          offset: 0, color: e.startColor // 0% 处的颜色
        }, {
          offset: 1, color: e.endColor // 100% 处的颜色
        }],
        global: false // 缺省为 false
    })
})

let colorListLen = colorList.length;

// 生成随机坐标的不重叠圆
function drawCircles(maxLength, radius, max_x, max_y) {
  let circles = [];
  let anti_crash_count = 0;
  while (circles.length < maxLength) {
    let circle = {
      x: getRandomNumber(radius, max_x - radius),
      y: getRandomNumber(radius, max_y - radius),
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
}

// 生成随机数坐标
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// 数据数组
let countList = resultData.data;
var showData = [];
var sum = 0,
  max = 0;
countList.forEach((e, i) => {
  e.id = i;
  e.label = {
    normal: {
      show: true,
      color: '#fff',
    },
  };
  e.itemStyle = {
    normal: {
      color: colorList[Math.floor(Math.random() * colorListLen)],
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
let graphCanvas = document.getElementById('chart-panel').getBoundingClientRect();
let randomCircleArr = drawCircles(
  countList.length,
  ((max + number) / max) * 40,
  graphCanvas.width,
  graphCanvas.height
);
countList.forEach((e, i) => {
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
  title: {},
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      if (params['data']['name'] !== '') {
        return '<b>' + params['data']['name'] + '</b>：<b>' + params['data']['value'] + ' </b>';
      }
    },
  },
  series: [
    {
      name: '词条分布',
      type: 'graph',
      layout: 'none',
      label: {
        show: true,
        normal: {
          color: '#fff',
        },
      },
      data: countList,
    },
  ],
};
