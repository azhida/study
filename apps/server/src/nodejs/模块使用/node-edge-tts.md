# node-edge-tts

语音合成

## 

```js
const express = require('express');
const { createAudioStream } = require('node-edge-tts');
const app = express();
const port = 3000;
 
app.get('/synthesize', (req, res) => {
    const text = req.query.text; // 获取查询参数中的文本
    if (!text) {
        return res.status(400).send('Text parameter is required');
    }
 
    // 创建音频流
    const audioStream = createAudioStream(text, { lang: 'en-US', voice: 'en-US-AriaNeural' }); // 可以根据需要选择语言和语音模型
    audioStream.on('error', (err) => {
        console.error('Error in audio stream:', err);
        res.status(500).send('Error processing audio');
    });
 
    // 设置响应头为音频流
    res.setHeader('Content-Type', 'audio/mpeg'); // 或者根据需要调整 MIME 类型，例如 'audio/mp4' 或 'audio/wav' 等
    res.setHeader('Content-Disposition', 'attachment; filename=audio.mp3'); // 设置下载文件名和内容类型为附件
 
    // 将音频流发送到客户端
    audioStream.pipe(res); // 注意：这将自动结束响应，无需手动调用 res.end()
});
 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```