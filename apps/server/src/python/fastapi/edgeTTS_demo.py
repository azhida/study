"""
EdgeTTS 演示服务

环境要求:
- Python 3.8+
- 依赖包: fastapi, uvicorn, edge-tts

安装依赖:
pip install fastapi uvicorn edge-tts

启动服务:
uvicorn edgeTTS.demo:app --reload --port 8000

使用示例:
1. WebSocket测试:
   - 连接地址: ws://localhost:8000/ws/edge_tts
   - 发送任意文本消息测试连接

2. HTTP接口测试:
   - POST请求: http://localhost:8000/edge_tts
   - 参数: {"text": "要转换的文本", "format": "stream"或"json"}
"""

from fastapi import FastAPI, Response, WebSocket, WebSocketDisconnect
from fastapi.responses import StreamingResponse, JSONResponse
import edge_tts
import os
import base64
import tempfile
import uuid
from typing import Dict

app = FastAPI()

class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, WebSocket] = {}
        self.client_user_map: Dict[str, str] = {}

    async def connect(self, websocket: WebSocket, client_id: str = None) -> str:
        await websocket.accept()
        if client_id is None:
            client_id = str(uuid.uuid4())
        self.active_connections[client_id] = websocket
        return client_id

    def disconnect(self, client_id: str):
        if client_id in self.active_connections:
            del self.active_connections[client_id]
        if client_id in self.client_user_map:
            del self.client_user_map[client_id]

    async def send_personal_message(self, message: str, client_id: str):
        if client_id in self.active_connections:
            await self.active_connections[client_id].send_text(message)

    def bind_user(self, client_id: str, user_id: str):
        self.client_user_map[client_id] = user_id
        
    async def send_to_user(self, message: str, user_id: str):
        """
        通过user_id发送消息到对应的客户端
        :param message: 要发送的消息内容
        :param user_id: 目标用户ID
        """
        for client_id, ws_user_id in self.client_user_map.items():
            if ws_user_id == user_id and client_id in self.active_connections:
                await self.active_connections[client_id].send_text(message)

manager = ConnectionManager()

@app.websocket("/ws/edge_tts")
async def websocket_endpoint(websocket: WebSocket):
    client_id = await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            # 这里可以处理接收到的消息
            await manager.send_personal_message(f"Message received: {data}", client_id)
    except WebSocketDisconnect:
        manager.disconnect(client_id)
        print(f"Client {client_id} disconnected")

from pydantic import BaseModel

class TextToSpeechRequest(BaseModel):
    text: str
    format: str = "stream"

@app.post("/edge_tts")
async def text_to_speech(request: TextToSpeechRequest):
    """
    将文本转换为语音
    :param text: 要转换的文本
    :param format: 返回格式，stream(音频流)或json(base64编码)
    """
    try:
        # 使用临时文件保存语音
        with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as tmp_file:
            tmp_path = tmp_file.name
        
        # 生成语音
        communicate = edge_tts.Communicate(request.text, "zh-CN-XiaoxiaoNeural")
        await communicate.save(tmp_path)
        
        if request.format == "json":
            # 读取文件并转换为base64
            with open(tmp_path, "rb") as f:
                audio_data = f.read()
            os.unlink(tmp_path)
            base64_audio = base64.b64encode(audio_data).decode('utf-8')
            return JSONResponse(content={"audio": base64_audio})
        else:
            # 返回音频流
            def iterfile():
                with open(tmp_path, "rb") as f:
                    while chunk := f.read(1024 * 1024):
                        yield chunk
                os.unlink(tmp_path)
            
            return StreamingResponse(
                iterfile(), 
                media_type="audio/wav"
            )
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("edgeTTS_demo:app", host="0.0.0.0", port=8000, reload=True)

# 也可以执行命令来启动
# uvicorn edgeTTS_demo:app --reload --port 8000