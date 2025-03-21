# node-edge-tts 实现语音合成


## nodejs
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

## express

```js
const express = require("express");
const fs = require('fs');
const app = express();
const { EdgeTTS } = require('node-edge-tts')

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
  console.log("请打开浏览器，访问 http://localhost:3000 ");
});

app.post("/edge_tts", async (req, res) => {
  var speaker = req.query.speaker || 'zh-CN-XiaoxiaoNeural';
  var text = req.query.text || '你好哟,这里是测试';
  const tts = new EdgeTTS({
    voice: speaker
  })
  await tts.ttsPromise(text, "output.wav")
  fs.readFile("output.wav", (err, data) => {
    if (err) {
      console.error("读取文件错误:", err);
      res.status(500).send("服务器内部错误");
      return;
    }
    // 将音频数据编码为 Base64
    const base64Audio = Buffer.from(data).toString("base64");
    // 将 Base64 编码的音频数据发送到前端
    res.send({ audio: base64Audio });
  });
});
```

