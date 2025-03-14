# video 视频自动播放

## 常规

```vue
<template>
  <video 
    style="width:200px;height: 200px;" 
    ref="remoteVideo" 
    id="remoteVideo" 
    :autoplay="true" 
    :playsinline="true"
    :controls="true" 
    :muted="remoteVideoMuted" 
    preload="metadata" 
    @loadedmetadata="afterVideoOk">
  </video>
</template>

<script setup>

const remoteVideo = ref()
const remoteVideoMuted = ref(true)

function afterVideoOk() {
  remoteVideo.value?.play()
}
</script>
```

## 微信浏览器下

```vue
<template>
  <video 
    style="width:200px;height: 200px;" 
    ref="remoteVideo" 
    id="remoteVideo" 
    :autoplay="true" 
    :playsinline="true"
    :controls="true" 
    :muted="remoteVideoMuted" 
    preload="metadata" 
    @loadedmetadata="afterVideoOk">
  </video>
</template>

<script setup>

const remoteVideo = ref()
// 初始状态下，需要静音才可以自动播放，如果需要声音，可以主动触发设置： remoteVideoMuted.value = false
const remoteVideoMuted = ref(true)

onMounted(() => {
  onBridgeReady()
})

function afterVideoOk() {
  remoteVideo.value?.play()
}

// 准备就绪(预加载前会调用)(初始化调用)将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数
function onBridgeReady() {
  //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
  //关键代码
  if (window.WeixinJSBridge) {
    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
      remoteVideo.value?.play()
    }, false);
  } else {
    // document.addEventListener("WeixinJSBridgeReady", function () {
    //   WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
    //     remoteVideo.value.play()
    //   });
    // }, false);
  }
}
</script>

```