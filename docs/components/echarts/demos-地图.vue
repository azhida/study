<template>
	<h4>标题</h4>
	<div id="main" ref="demoRef" :style="{width: '100%', height: '500px'}" :key="updateKey"></div>
	<div id="main1" ref="demo1Ref" :style="{width: '100%', height: '500px'}" :key="updateKey"></div>
	<button class="button" @click="refresh()">刷新</button>
	<button class="button" @click="init()">初始化</button>
</template>

<script>
	import * as echarts from 'echarts';
	import * as _ from 'lodash-es';
	import allData from '../../assets/json/echarts/中华人民共和国.json';

	export default {
		data() {
			return {
				updateKey: 0
			}
		},
		computed: {

		},
		mounted() {
			this.createChart()
			this.createChart1()
		},
		methods: {
			init() {
				this.createChart()
			},
			refresh() {
				// todo 生成随机数据...
				this.createChart()
			},
			createChart() {

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
					series: [{
						type: 'map',
						map: '中国',
						label: {
							show: true
						},
						roam: true, // 允许拖动和缩放
					}]
				}

				myChart.setOption(option)
			},

			createChart1() {

				var colors = ['red', 'blue', 'gray'];
				var colors1 = ['#55ff00', '#ffff00', '#5500ff'];

				const customSettings = [];
				console.log(allData, 'allData')
				allData.features.forEach(e => {
					console.log(e, 'e');
					var color = _.sample(colors);
					customSettings.push({
						name: e.properties.name,
						itemStyle: {
							areaColor: color,
							color: _.sample(colors1)
						}
					})
				})


				const el = this.$refs['demo1Ref']
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
					tooltip: {
						show: true,
						trigger: 'item', // 设置该属性之后，会与series中data数据对应。注意data中对象的键名为name。如果单纯的展示数据可用此属性，不与formatter同用。
						alwaysShowContent: false,
						backgroundColor: '#0C121C',
						borderColor: 'rgba(0, 0, 0, 0.16);',
						hideDelay: 100,
						triggerOn: 'mousemove',
						enterable: true,
						textStyle: {
							color: '#DADADA',
							fontSize: '12',
							width: 20,
							height: 30,
							overflow: 'break'
						},
						formatter(params) {
							console.log(params, 'params')
							return `数量：11111`
						},
						showDelay: 100
					},
					geo: {
						map: '中国',
						roam: true, //滚轮 放大缩小
						zoom: 1.2, //缩放比例  
						regions: customSettings, //设置省市县的样式颜色
						itemStyle: {
							normal: {
								borderColor: 'rgba(0, 0, 0, 0.2)' //地图边框颜色
							},
							emphasis: {
								areaColor: '#F3B329', //鼠标放到地图上显示的颜色（黄色）
								shadowOffsetX: 0,
								shadowOffsetY: 0,
								shadowBlur: 20,
								borderWidth: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}
				}

				myChart.setOption(option)
			}
		},
	}
</script>

<style scoped>
	#main {
		/* width: 100%; */
		border: 1px solid red;
	}

	.button {
		margin: 10px;
		padding: 10px 20px;
		border-radius: 5px;
		background-color: #10b981;
		color: #fff;
	}
</style>