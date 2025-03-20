# 语音合成

## 自己搭建服务

### ‌Fish-Speech

github: https://github.com/fishaudio/fish-speech

需要 python conda 环境。
需要安装 Anaconda。



### node-edge-tts

> 注意：需要在 nodejs 服务端使用，因为它并不直接支持浏览器使用！

```js
const fs = require('fs');
const { EdgeTTS } = require('node-edge-tts')

// edge_tts接口
async function fnEdgeTTS() {
  var speaker = 'zh-CN-XiaoxiaoNeural';
  var text = '你好哟,这里是测试';
  const tts = new EdgeTTS({
    voice: speaker
  })
  await tts.ttsPromise(text, "output.wav");
  var data = fs.readFileSync('output.wav');
  let base64Audio  = Buffer.from(data).toString("base64");
  return { audio: base64Audio }
}
```

### edge-tts-openai-cf-worker

github: https://github.com/dongwen88/edge-tts-openai-cf-worker

## 免费在线工具

### TTSMaker

官网：https://ttsmaker.cn/

支持50+种全球语言300+语音包风格
无广告
支持调整语速、设置音量、插入停顿，可以添加背景音乐
除了网页版还支持PC客户端

### Text to Speech Im

官网：https://texttospeech.im/

支持50多个国家或地区的语言和8000多种音色
用户可以调整语速和音量
无广告

### Text to Speech Online

官网：https://texttospeech.online/

超过409种逼真的声音、129种语言和方言

### Luvvoice

官网：https://luvvoice.com/zh/

支持超过 200 种声音和 70 种语言
有页面广告

### Narakeet

官网：https://www.narakeet.com/app/text-to-audio/

无需注册，支持多种普通话变体和其他地区的中文变体
无广告
用户可以调整语速和音量

### Bingal AI

官网：https://ai.bingal.com/cn/ai-tts/

没有广告，简单洁净的在线工具

### 云猫转码

官网：https://yunmaovideo.com/tts

需要登录，免费用户单次输入上限 3000 字（有小程序端）

### AI在线转换

官网：https://www.zaixianai.cn/voiceCompose

需要登录，单次输入上限 3000 字

### Text Reader

官网：https://textreader.ai/

支持的音色的语言相对较少

### Clipchamp

官网：https://app.clipchamp.com/

这其实是微软出品的一个在线剪辑工具，支持语音转文字

### ChatTTS

https://chattts.com/zh

https://chattts.me/

ChatTTS是专门为对话场景设计的文本转语音模型，例如LLM助手对话任务。它支持英文和中文两种语言。每次最多可以生成 30s的语音；生成的音色非常逼真，网上目前很火，可以玩玩。




## 参考

[11个免费在线AI文字转语音工具](https://baijiahao.baidu.com/s?id=1807061345173752892&wfr=spider&for=pc)