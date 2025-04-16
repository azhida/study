# ZLMediaKit + vue3 播放视频流

## ZLMediaKit 服务端搭建

[ZLMediaKit 项目地址](https://github.com/ZLMediaKit/ZLMediaKit)

### 启动 Docker 服务

```sh
#此镜像为github action 持续集成自动编译推送，跟代码(master分支)保持最新状态
docker run -id -p 1935:1935 -p 8080:80 -p 8443:443 -p 8554:554 -p 10000:10000 -p 10000:10000/udp -p 8000:8000/udp -p 9000:9000/udp zlmediakit/zlmediakit:master

docker run -id -p 1935:1935 -p 8080:80 -p 554:554 -p 10000:10000 -p 10000:10000/udp -v /自定义目录/media:/opt/media --name zlmediakit zlmediakit/zlmediakit:master

```

#### ‌关键参数说明‌：
- 1935 端口用于RTMP推流，8080 用于HTTP协议拉流，554 用于RTSP协议
- 挂载 `/opt/media` 目录可持久化配置文件及录制文件‌26

#### 验证服务状态:

访问 `http://服务器IP:8080/index/api/wecome`，返回JSON即表示部署成功‌

### 视频推流操作

#### FFmpeg推流命令

> docker 容器内执行

```sh
ffmpeg -re -i 视频文件.mp4 -c:v libx264 -c:a aac -f flv rtmp://服务器IP:1935/live/流名称
```

- `live` 为默认应用名， `流名称` 可自定义（如 `test` ）‌


#### 视频流拉流相关地址

|协议类型|	拉流地址示例|
|---|	---|
|HTTP-FLV|	http://IP:8080/live/流名称.flv|
|HLS|	http://IP:8080/live/流名称/hls.m3u8|
|WebRTC|	webrtc://IP:8080/live/流名称|

- `HTTP-FLV` : `http://IP:8080/live/流名称.flv`
- `HLS` : `http://IP:8080/live/流名称/hls.m3u8`
- `WebRTC` : `webrtc://IP:8080/live/流名称`

## Vue3前端播放实现

使用 `flv.js` 播放视频流。

```sh
pnpm install flv.js
```

- demo.vue
```vue
<template>
  <div>
    <video ref="videoPlayer" controls></video>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Hls from 'hls.js';

const videoPlayer = ref(null);

const videoSrc = 'http://IP:8080/live/流名称/hls.m3u8';

onMounted(() => {
  if (Hls.isSupported()) {
    const video = videoPlayer.value;
    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play();
    });
  } else if (videoPlayer.value.canPlayType('application/vnd.apple.mpegurl')) {
    videoPlayer.value.src = videoSrc;
    videoPlayer.value.addEventListener('loadedmetadata', () => {
      videoPlayer.value.play();
    });
  }
});
</script>

<style scoped>
video {
  width: 100%;
  /* 或者你希望的任何宽度 */
  height: auto;
  /* 或者你希望的任何高度 */
}
</style>
```