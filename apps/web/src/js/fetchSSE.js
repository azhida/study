import { getToken } from "./auth";
import { baseUrl } from "@/utils/http";

export async function fetchSSE(url, data = {}, callback) {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = `${baseUrl}${url}`;
  }

  // 设置请求头
  const headers = {
    'Authorization': 'Bearer ' + getToken(),
    'Accept': 'text/event-stream',
    'Content-Type': 'application/json'
  };

  // 发送POST请求
  fetch(url, {
    method: 'post',
    headers: headers,
    body: JSON.stringify(data)
  }).then(response => {
    console.log('响应:', response);

    // 读 sse 流
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';
    reader.read().then(function processText({ done, value }) {
      if (done) {
        console.log('流已完成');
        return;
      }
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();
      lines.forEach(line => {
        if (line.startsWith('data:')) {
          const data = line.slice(5);
          try {
            const json = JSON.parse(data);
            console.log('解析后的JSON:', json);
            if (callback) {
              callback(json);
            }
          } catch (error) {
            console.error('JSON解析错误:', error);
          }
        }
      });
      return reader.read().then(processText);
    });
  }).catch(error => {
    console.error('请求错误:', error);
  });

}