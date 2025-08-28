# edgeTTS流式合成音频


## 安装依赖
```sh
pip install edge-tts
```

## 流式处理的代码

::: details 示例代码

<<< ./edgeTTS_stream.py

:::


## 非流式处理的代码

::: details 示例代码

```python
import os
import edge_tts

async def tts(text, output_path, voice: str = "zh-CN-XiaoxiaoNeural"):
    """
    使用Edge TTS生成音频
    text: 要转换的文本
    output_path: 输出音频路径
    """
    # # 确保输出目录存在
    output_dir = os.path.dirname(output_path)
    if output_dir:
        os.makedirs(output_dir, exist_ok=True)

    # 合成语音并保存到文件
    await edge_tts.Communicate(text, voice).save(output_path)
    return output_path
```

:::