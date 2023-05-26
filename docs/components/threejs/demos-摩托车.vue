<template>
	<div id="main"></div>
</template>

<script setup>
	import {
		onMounted
	} from 'vue';
	import * as THREE from 'three' //导入three.js核心库
	import {
		OrbitControls
	} from 'three/examples/jsm/controls/OrbitControls.js' //导入轨道控制器
	import {
		GLTFLoader
	} from 'three/examples/jsm/loaders/GLTFLoader.js' //导入GLTF模型加载器

	// 车身材质
	let bodyMaterial = new THREE.MeshPhysicalMaterial({
		color: "#6e2121",
		metalness: 1,
		roughness: 0.5,
		clearcoat: 1.0,
		clearcoatRoughness: 0.03, //clear coat层的粗糙度，由0.0到1.0。 默认为0.0 
	})

	// 车架
	let frameMaterial = new THREE.MeshPhysicalMaterial({
		color: "#c0c0c0",
		metalness: 1,
		roughness: 0.5,
		clearcoat: 1.0,
		clearcoatRoughness: 0.03
	})
	// 车座
	let saddleMaterial = new THREE.MeshPhysicalMaterial({
		color: "#5E2612",
		metalness: 0,
		roughness: 1
		// clearcoat:1,
		// clearcoatRoughness:1
	})
	// 轮胎
	let tireMaterial = new THREE.MeshPhysicalMaterial({
		color: "#000000",
		metalness: 0,
		roughness: 1,
		clearcoat: 0,
		clearcoatRoughness: 0.33
	})
	// 把手
	let handleMaterial = new THREE.MeshPhysicalMaterial({
		color: "#000000",
		metalness: 0,
		roughness: 1,
		clearcoat: 0,
		clearcoatRoughness: 0.33
	})

	class motor3d {
		constructor(selector) {
			this.container = document.querySelector(selector) //获取容器
			this.scene
			this.camera
			this.renderer
			this.controls
			this.init() //初始化
			this.animate() //循环函数
		}

		init() {
			// 初始化场景
			this.initScene()
			// 初始化辅助轴
			this.initAxesHelper()
			// 初始化灯光
			this.initLight()
			// 初始化Mesh
			this.initMesh()
			// 初始化相机
			this.initCamera()
			// 初始化渲染器
			this.initRender()
			// 初始化轨道控制器
			this.initControls()
			// 初始化地面
			this.initFloor()
			// 监听场景大小改变，重新渲染尺寸
			window.addEventListener('resize', this.onWindowResize.bind(this))
		}

		initScene() {
			this.scene = new THREE.Scene()
			this.scene.background = new THREE.Color(0xa0a0a0)
		}

		initAxesHelper() {
			const axesHelper = new THREE.AxesHelper(5)
			this.scene.add(axesHelper)
		}

		initLight() {
			const hesLight = new THREE.HemisphereLight(0xffffff, 0x444444)
			hesLight.intensity = 0.6
			this.scene.add(hesLight)

			const dirLight = new THREE.DirectionalLight()
			dirLight.position.set(5, 5, 5)
			this.scene.add(dirLight)
			//聚光灯
			const sportLight = new THREE.SpotLight(0xffffff, 0.8)
			sportLight.angle = Math.PI / 8; //散射角度，跟水平线的夹角
			sportLight.penumbra = 0.1; // 聚光锥的半影衰减百分比
			sportLight.decay = 2; // 纵向：沿着光照距离的衰减量。
			sportLight.distance = 30;
			sportLight.shadow.radius = 10;
			// 阴影映射宽度，阴影映射高度
			sportLight.shadow.mapSize.set(4096, 4096);

			sportLight.position.set(-5, 5, 1);
			// 光照射的方向
			sportLight.target.position.set(0, 0, 0);
			sportLight.castShadow = true; //开启阴影
			this.scene.add(sportLight);
		}

		initCamera() {
			this.camera = new THREE.PerspectiveCamera(75, this.container.offsetWidth / this.container.offsetHeight,
				0.1, 100)
			this.camera.position.set(1.5, 1.5, 1.5)
		}

		initRender() {
			this.renderer = new THREE.WebGLRenderer({
				antialias: true
			}) //设置抗锯齿
			//设置屏幕像素比
			this.renderer.setPixelRatio(window.devicePixelRatio)
			//渲染的尺寸大小
			this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)
			// 添加到容器
			this.container.appendChild(this.renderer.domElement)

			// 加载阴影
			this.renderer.shadowMap.enabled = true
		}

		render() {
			this.renderer.render(this.scene, this.camera)
			this.controls.update()
		}

		animate() {
			this.renderer.setAnimationLoop(this.render.bind(this))
		}

		initControls() {
			this.controls = new OrbitControls(this.camera, this.renderer.domElement)
			// enableDamping 将其设置为true以启用阻尼（惯性），这将给控制器带来重量感。默认值为false。
			// 请注意，如果该值被启用，你将必须在你的动画循环里调用.update()。
			this.controls.enableDamping = true

			this.controls.maxDistance = 9
			this.controls.minDistance = 1

			this.controls.minPolarAngle = 0
			this.controls.maxPolarAngle = 80 / 360 * 2 * Math.PI
		}

		onWindowResize() {
			this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight
			this.camera.updateProjectionMatrix() //更新矩阵，将3d内容投射到2d画面上转换
			this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)
		}

		// 加载模型
		addGLTFModel(modelName) {
			return new Promise((resolve, reject) => {
				const loader = new GLTFLoader().setPath('/asset/threejs/3dModels/')
				// const loader = new GLTFLoader();
				loader.load(modelName, (gltf) => {
					const motorModel = gltf.scene
					motorModel.traverse(obj => {
						if (obj.name === "网格457") {
							// 车身
							obj.material = bodyMaterial
						} else if (obj.name === "网格457_1") {
							// 车灯
							// obj.material = glassMaterial
						} else if (obj.name === "网格457_2") {
							// 座位
							obj.material = saddleMaterial
						} else if (obj.name === "网格457_4") {
							// 车把
							obj.material = handleMaterial
						} else if (obj.name === "网格457_3" || obj.name === "网格457_5" || obj
							.name === "网格457_6") {
							// 车架
							obj.material = frameMaterial
						} else if (obj.name === "网格457_7") {
							// 轮胎
							obj.material = tireMaterial
						} else {

						}
						obj.castShadow = true;
					})

					this.scene.add(motorModel)

					resolve(this.modelName + '模型添加成功')
				})
			})
		}

		initMesh() {
			this.addGLTFModel('motor03.gltf')
		}

		initFloor() {
			const floorGeometry = new THREE.PlaneGeometry(20, 20)
			const material = new THREE.MeshPhysicalMaterial({
				color: 0x808080,
				side: THREE.DoubleSide,
				metalness: 0,
				roughness: 0.1
			})
			const floorMesh = new THREE.Mesh(floorGeometry, material)
			floorMesh.rotation.x = Math.PI / 2
			floorMesh.receiveShadow = true
			this.scene.add(floorMesh)
		}

		initGUI() {
			var obj = {
				bodyColor: '#6e2121', // 车身颜色
				frameColor: '#c0c0c0', // 车架颜色
				saddleColor: '#5E2612', // 车座颜色
				tireColor: '#000000', // 轮胎颜色
				handleColor: '#000000', // 车把颜色
				glassColor: '#aaaaaa',
			}
		}

	}


	onMounted(() => {
		new motor3d('#main')
	})
</script>

<style scoped>
	#main {
		width: 100%;
		height: 500px;
		border: 1px solid red;
	}
</style>
