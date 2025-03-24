const express = require("express");
const fs = require('fs');
const { EdgeTTS } = require('node-edge-tts')
const readline = require('linebyline');
const lineByLine = require('n-readlines');
const expressWs = require('express-ws');
const path = require('path')
const sleep = require('atomic-sleep')
const cors = require('cors')

const app = express();
app.use(cors())

// 使用中间件解析json格式的请求体
app.use(express.json());

expressWs(app);

app.listen(3000, () => {
  console.log("请打开浏览器，访问 http://localhost:3000 ");
});

// websocket 推流
app.ws('/edge_tts_stream', async function (ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('something');
  });

  // 初始化 EdgeTTS
  var speaker = 'zh-CN-XiaoxiaoNeural';
  const tts = new EdgeTTS({
    voice: speaker
  })

  // 逐行读文件内容，并处理
  await fnReadFile_by_n_readlines('a.txt', async (e) => {
    sleep(2000); // 睡眠 2s
    console.log(e, 'e');

    try {
      const wavFileName = `outputs/output-${e.lineNum}.wav`
      await tts.ttsPromise(e.text, wavFileName)
      // 读文件拿到文件流
      const buffer = fs.readFileSync(wavFileName)
      // 将音频数据编码为 Base64
      const base64Audio = Buffer.from(buffer).toString("base64");

      // 推送文件流
      // 前端要接收 文件流，需要配置（否则无法实时追加到 正在播放的音频中）：
      // const ws = new WebSocket(`ws://10.0.1.22:3002/edge_tts_stream`)
      // ws.binaryType = 'arraybuffer'
      ws.send(buffer);

      // 要推送的json数据，重新开一个 ws 连接
      //  const sendRes = {
      //    lineNum: e.lineNum, // 当前行号
      //    text: e.text, // 当前行内容
      //    // buffer: buffer, // 二进制音频流，不能这样返回，要转 base64，前端再将 base64 转为 二进制流，否则数据可能丢失
      //    base64: base64Audio, // base64 音频数据
      //  }
      // console.log(sendRes, 'sendRes');
      //  ws.send(JSON.stringify(sendRes));

      // 指定要删除的文件路径
      const filePath = path.join(__dirname, wavFileName);
      console.log(filePath, 'filePath');
      fs.unlink(filePath, (err) => {
        console.log(err, 'err');
      })
    } catch (e) {
      console.log(e, 'tts 报错');
    }
  })
});

// websocket 按行推送文件内容
app.ws('/read_file_line', async function (ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('something');
  });

  // // 逐行读文件内容，并处理
  // await fnReadFile_by_n_readlines('a.txt', async (e) => {
  //   sleep(2000); // 睡眠 2s
  //   console.log(e, 'e');
  //   ws.send(JSON.stringify(e))
  // })

  // 逐行读文件内容，并处理
  await fnReadFile_by_readline('a.txt', async (e) => {
    sleep(2000); // 睡眠 2s
    console.log(e, 'e');
    ws.send(JSON.stringify(e))
  })
});

// 使用 n-readlines 模块读文件
async function fnReadFile_by_n_readlines(filePath, callback) {
  // const liner = new lineByLine('a.txt');
  const liner = new lineByLine(filePath);

  let line;
  let lineNumber = 0;

  while (line = liner.next()) {
    // 休眠 1s
    sleep(1000)
    // delay(1000)
    // const text = line.toString('utf-8').trim();
    const text = line.toString('utf-8')
    lineNumber++;
    await callback({ lineNum: lineNumber, text: text })
  }
}

// 使用 readline 模块读文件
async function fnReadFile_by_readline(filePath, callback) {
  // const  rl = readline('./a.txt');
  const rl = readline(filePath);
  rl.on('line', function (line, lineCount, byteCount) {
    // do something with the line of text
    console.log(line, 'line');
    console.log(lineCount, 'lineCount');
    console.log(byteCount, 'byteCount');
    callback({ text: line, lineNum: lineCount, byteCount: byteCount })
    sleep(1000)
  }).on('error', function (e) {
    // something went wrong
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 请求语音合成
app.post("/edge_tts", async (req, res) => {
  console.log(req);

  var speaker = req.query.speaker || 'zh-CN-XiaoxiaoNeural';
  // var dataType = req.body.dataType || 'json'; // blob || json
  const {dataType='json', text = '你好哟,这里是测试' } = req.body;

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

    if (dataType == 'json') {
      // 将音频数据编码为 Base64
      const base64Audio = Buffer.from(data).toString("base64");
      // 将 Base64 编码的音频数据发送到前端
      res.send({ audio: base64Audio });
    } else {
      // 返回 二进制文件流
      res.send(data);
    }
  });
});
