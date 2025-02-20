import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import soundfile as sf
import base64
import io


app = FastAPI()

# 配置CORS中间件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允许所有源，也可以指定具体的域名，例如["https://example.com"]
    allow_credentials=True,  # 允许发送cookies等凭证信息
    allow_methods=["*"],  # 允许所有方法，例如POST, GET, PUT, DELETE等
    allow_headers=["*"],  # 允许所有头部信息
)

@app.get("/get_audio_base64")
def get_audio_base64():
  # 读取WAV文件
  data, samplerate = sf.read('demo.wav')
  audio_bytes = io.BytesIO()
  sf.write(audio_bytes, data, samplerate, format='WAV')
  audio_base64 = base64.b64encode(audio_bytes.getvalue()).decode('utf-8')
  return {'audio_base64':audio_base64}


@app.get("/")
def read_root():
  return {'code':200,'msg':'ok'}

if __name__ == "__main__":
  host='0.0.0.0'
  port=8000
  uvicorn.run('test:app', host=host, port=port, workers=1, reload=True)