"""
EdgeTTS 演示服务

环境要求:
- Python 3.8+
- 依赖包: fastapi, uvicorn, edge-tts

安装依赖:
pip install fastapi uvicorn edge-tts

启动服务:
uvicorn edgeTTS.demo:app --reload --port 8003

使用示例:
1. WebSocket测试:
   - 连接地址: ws://localhost:8003/ws/edge_tts
   - 【或者】连接地址: ws://127.0.0.1:8003/ws/edge_tts
   - 发送任意文本消息测试连接

2. HTTP接口测试:
   - POST请求: http://localhost:8003/edge_tts
   - 参数: {"text": "要转换的文本", "format": "stream"或"json"}
"""

# 标准库导入
import asyncio
import base64
import os
import tempfile
import uuid
from typing import Dict, List
import json

# 第三方库导入
import edge_tts

# FastAPI相关导入
from fastapi import (
    BackgroundTasks,
    FastAPI,
    Response,
    WebSocket,
    WebSocketDisconnect
)
from fastapi.responses import JSONResponse, StreamingResponse

app = FastAPI()

class ConnectionManager:
    """WebSocket连接管理器"""
    
    def __init__(self):
        """初始化连接管理器"""
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
                
    async def broadcast_message(self, message: str):
        """
        向所有活跃连接广播消息
        :param message: 要广播的消息内容
        """
        for client_id, websocket in self.active_connections.items():
            await websocket.send_text(message)

manager = ConnectionManager()

@app.websocket("/ws")
async def websocket_endpoint_test(websocket: WebSocket, user_id: str = None):
    await websocket.accept()
    print(f"WebSocket 连接建立，user_id: {user_id}")
    try:
        while True:
            data = await websocket.receive_text()
            # 这里可以处理接收到的消息
            await websocket.send_text(data)
    except WebSocketDisconnect:
        print(f"Client  disconnected")
    except Exception as e:
        print(f"An error occurred for client : {str(e)}")


@app.websocket("/ws/edge_tts")
async def websocket_endpoint(websocket: WebSocket, user_id: str = None):
    client_id = await manager.connect(websocket)
    manager.bind_user(client_id, user_id)
    try:
        while True:
            data = await websocket.receive_text()
            # 这里可以处理接收到的消息
            await manager.send_personal_message(f"Message received: {data}", client_id)
    except WebSocketDisconnect:
        manager.disconnect(client_id)
        print(f"Client {client_id} disconnected")



from pydantic import BaseModel
import pathlib


async def tts_batch(user_id: str, texts: List[str],  output_dir: str = None, return_format: str = "path") -> List[str]:
    """
    批量将文本转换为语音
    :param texts: 要转换的文本数组
    :param output_dir: 可选输出目录路径，如果为None则按当前时分秒生成目录
    :param return_format: 返回格式，可选值: path(文件路径), stream(文件流), base64(base64编码)
    :return: 根据return_format返回对应格式的数据列表
    """
    if output_dir is None:
      # 生成批次号目录
      import datetime
      now = datetime.datetime.now()
      date_str = now.strftime("%Y%m%d")
      time_str = now.strftime("%H%M%S")
      batch_dir = f"{date_str}/{time_str}"
      output_dir = os.path.join(output_dir, batch_dir)
      print(f"output_dir: {output_dir}")
    
    # 创建输出目录
    pathlib.Path(output_dir).mkdir(parents=True, exist_ok=True)
    print(f"输出目录: {output_dir}")

    results = []
    for i, text in enumerate(texts):
        try:
            output_path = os.path.join(output_dir, f"{i}.wav")
            result = await tts_one(text, output_path, return_format)
            res_json = {
                'status': 'success',
                'result': result,
                'text': text
            }
            results.append(res_json)
            
            await manager.send_to_user(json.dumps(res_json), user_id)
            await manager.broadcast_message('result')

        except Exception as e:
            results.append({"status": "error", "error": str(e), "text": text})
    return results


async def tts_one(text: str, output_path: str = None, return_format: str = "path"):
    """
    将文本转换为语音并返回指定格式
    :param text: 要转换的文本
    :param output_path: 可选的文件输出路径，如果为None则按日期时间生成路径
    :param return_format: 返回格式，可选值: path(文件路径), stream(文件流), base64(base64编码)
    :return: 根据return_format返回对应格式的数据
    """
    try:
        print(f"output_path - 1: {output_path}")
        communicate = edge_tts.Communicate(text, "zh-CN-XiaoxiaoNeural")

        # 确保输出目录存在，如果不存在，则创建
        if output_path is None:
            import datetime
            now = datetime.datetime.now()
            date_str = now.strftime("%Y%m%d")
            time_str = now.strftime("%H%M%S")
            output_dir = os.path.join("test", date_str)            
            output_path = os.path.join(output_dir, f"tts_{time_str}.wav")
            
        print(f"output_path - 2: {output_path}")
        pathlib.Path(output_path).parent.mkdir(parents=True, exist_ok=True)
        await communicate.save(str(output_path))

        # 根据返回格式处理
        if return_format == "path":
            return output_path
        elif return_format == "stream":
            def iterfile():
                with open(output_path, "rb") as f:
                    while chunk := f.read(1024 * 1024):
                        yield chunk
            return StreamingResponse(iterfile(), media_type="audio/wav")
        elif return_format == "base64":
            with open(output_path, "rb") as f:
                audio_data = f.read()
            base64_data = base64.b64encode(audio_data).decode('utf-8')
            return { "file_path": output_path, "audio": base64_data}
        else:
            raise ValueError(f"不支持的返回格式: {return_format}")
        
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        )
    


from pydantic import BaseModel

class TextToSpeechRequest(BaseModel):
    text: str
    format: str = "stream"

class AsyncTextToSpeechRequest(BaseModel):
    user_id: str
    texts: List[str]



@app.post("/edge_tts")
async def text_to_speech(request: TextToSpeechRequest):
    """
    将文本转换为语音
    :param text: 要转换的文本
    :param format: 返回格式，stream(音频流)或json(base64编码)
    """
    try:
        if request.format == "stream":
            audio_stream = await tts_one(request.text, None, "stream")
            return audio_stream
        else:
            res = await tts_one(request.text, None, request.format)
            return JSONResponse(content=res)
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        )

@app.post("/async_edge_tts")
async def async_text_to_speech(request: AsyncTextToSpeechRequest, background_tasks: BackgroundTasks):
    """
    异步批量语音合成接口
    :param request: 包含要转换的文本数组的请求体
    :param user_id: 可选的用户ID，用于WebSocket通知
    :return: 任务ID
    """
    # 生成批次号目录
    import datetime
    now = datetime.datetime.now()
    date_str = now.strftime("%Y%m%d")
    time_str = now.strftime("%H%M%S")
    batch_dir = f"{date_str}/{time_str}"
    output_dir = os.path.join('./test', batch_dir)
    print(f"output_dir: {output_dir}")

    background_tasks.add_task(tts_batch, request.user_id, request.texts, output_dir)
    
    return JSONResponse({"code": 200, "msg": "任务处理中", "output_dir": output_dir})



if __name__ == "__main__":
    import uvicorn
    uvicorn.run("edgeTTS_demo:app", host="0.0.0.0", port=8003, reload=True, log_level='info')

# 也可以执行命令来启动
# uvicorn edgeTTS_demo:app --reload --port 8003