<template>
  <div class="page-box">
    <div style="margin: 16px;">
      <audio style="width: 100%;margin-top: 20px;" ref="audioRef" :src="base64data" controls />
    </div>

    <van-field v-model.trim="text" label="文本" placeholder="请输入内容" label-align="top" type="textarea" autosize />

    <div style="margin: 16px;">
      <van-button round block type="primary" @click="onClick_cf_worker">
        提交(cf_worker)
      </van-button>
    </div>

    <div style="margin: 16px;">
      <van-button round block type="primary" @click="onClick_ws">
        提交(ws)
      </van-button>
    </div>

    <div style="margin: 16px;">
      <van-button round block type="primary" @click="onClick_post">
        提交(post)
      </van-button>
    </div>

    <div style="margin: 16px;">
      <van-button round block type="primary" @click="onClick_post_appendBuffer">
        提交(appendBuffer)
      </van-button>
    </div>

  </div>
</template>

<script setup>
import axios from 'axios';

const audioRef = ref()
const base64data = ref('')
const text = ref('')

let mediaSource;
let sourceBuffer;
let mimeType = 'audio/mpeg'; // 确保使用正确的MIME类型和编解码器


let source;
const audioContext = new (window.AudioContext || window.webkitAudioContext)();


onMounted(() => {
  mediaSource = new MediaSource();
  base64data.value = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener('sourceopen', setupSourceBuffer);
  mediaSource.addEventListener('sourceended', () => console.log('Stream ended'));
});

function setupSourceBuffer() {
  sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');
  // sourceBuffer = mediaSource.addSourceBuffer(mimeType);
  sourceBuffer.addEventListener('updateend', () => {
    if (sourceBuffer.updating) {
      sourceBuffer.abort(); // 停止更新，以防出错时需要重置状态
    } else {
      mediaSource.endOfStream(); // 通知媒体源流结束，可以开始播放了（对于实时流很重要）
      audioRef.value.play(); // 开始播放视频或音频流（注意：这里用的是video，如果要使用audio，请确保服务器支持或将视频转为音频）
    }
  });
}

function onClick_ws() {
  const ws = new WebSocket(`ws://10.0.1.22:3002/edge_tts_stream`)
  ws.binaryType = 'arraybuffer'; // 不写可能异常
  ws.onmessage = async (e) => {
    console.log(e, 'e');

    const buffer = e.data
    sourceBuffer.appendBuffer(buffer); // 追加数据到sourceBuffer中，这将触发'updateend'事件来播放数据。

    // base64data.value = window.URL.createObjectURL(new Blob([buffer]))
    audioRef.value.paly()
  }
}


function onClick_cf_worker() {
  axios.post('https://edge-tts-proxy.weilh.vip/v1/audio/speech', {
    "model": "tts-1",
    "input": "这是要合成语音的文字",
    "voice": "zh-CN-XiaoxiaoNeural",
    "response_format": "wav",
    "speed": 1.0
  }, {
    responseType: 'blob'
  }).then(({ data }) => {
    console.log(data, 'res');
    base64data.value = window.URL.createObjectURL(new Blob([data]))
    audioRef.value.paly()
  })
}

function onClick_post() {
  const dataType = 'json' // blob || json
  axios.post('http://10.0.1.22:3002/edge_tts', {
    text: "一望无垠的大漠，空旷而高远，壮阔而雄浑，当红日西坠，地平线尽头一片殷红，磅礴中亦有种苍凉感。上古的烽烟早已在岁月中逝去，黄河古道虽然几经变迁，但依旧在。",
    dataType: dataType
  }, {

  }).then(({ data }) => {
    console.log(data, 'res');
    // 重新赋值
    base64data.value = 'data:audio/mpeg;base64,'+ data.audio

    audioRef.value.paly()

  })

}


function onClick_post_appendBuffer() {
  const dataType = 'blob' // blob || json
  axios.post('http://10.0.1.22:3002/edge_tts', {
    text: "一望无垠的大漠，空旷而高远，壮阔而雄浑，当红日西坠，地平线尽头一片殷红，磅礴中亦有种苍凉感。上古的烽烟早已在岁月中逝去，黄河古道虽然几经变迁，但依旧在。",
    dataType: dataType
  }, {
    responseType: "arraybuffer"
  }).then(({ data }) => {
    console.log(data, 'res');
    // 追加流
    sourceBuffer.appendBuffer(data); // 追加数据到sourceBuffer中，这将触发'updateend'事件来播放数据。
    audioRef.value.paly()

  })
}
</script>
