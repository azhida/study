# AI 实现 PPTX 合成视频

## 环境搭建

[vscode创建连接docker容器](./vscode创建连接docker容器.md)

## 打开 AI 聊天窗

- 选择模式：`代理`
- 选择模型：`GPT-4.1` , 其他的应该也可以，可能需要魔法科学上网

> 注意：模型可以自己选择，付费的可能效果更好，我用免费的，最终结果也是能出来的。

## 与 AI 交互实现功能

此时你只有一个目的，就是把 pptx 转为视频，但是你啥思路也没有。

### 新建 `todo.md`

::: info todo.md

```md 
# pptx 转视频
将 pptx 文件转为 视频。
```

:::

只写一个标题和一句话描述你想做的事情，然后开始：
- 问 AI ：`完善 todo.md`;
- AI 会给你完善 `todo.md` 文件，点击 `保存` 按钮即可;
- 此时，再看 `todo.md` ，大概会知道实现的思路。
- 然后再问 AI 完善实现的思路：`完善 todo.md 的实现思路`,就会得到 `实现思路`;

此时再看 `todo.md`

::: details todo.md

```md
# pptx 转视频
将 pptx 文件转为 视频。

## 需求分析
- 支持上传 pptx 文件
- 支持自定义每页展示时长
- 支持添加背景音乐（可选）
- 输出为常见视频格式（如 mp4）
- 保证转换后视频画质清晰

## 实现步骤
1. 解析 pptx 文件，提取每一页为图片
2. 将图片合成为视频
3. 可选：添加背景音乐
4. 导出视频文件

## 技术选型
- Python：python-pptx、moviepy
- ffmpeg：视频合成与处理

## 实现思路
1. 使用 python-pptx 解析 pptx 文件，将每一页保存为图片（如 PNG/JPG）。
2. 通过 moviepy 或 ffmpeg，将图片序列按设定时长合成为视频。
3. 若用户选择添加背景音乐，使用 moviepy/ffmpeg 将音频合入视频。
4. 输出最终视频文件，支持 mp4 格式。
5. 可封装为命令行工具，支持参数：pptx 路径、输出路径、每页时长、背景音乐路径等。
6. 编写文档，说明使用方法和依赖环境。

## 任务清单
- [ ] 研究 pptx 转图片方案
- [ ] 实现 pptx 批量转图片脚本
- [ ] 研究图片合成视频方案
- [ ] 实现图片合成视频脚本
- [ ] 支持添加背景音乐
- [ ] 打包为命令行工具
- [ ] 编写使用文档
```

:::

### 实现 `todo.md`

- 问 AI : `实现 todo.md`

然后根据 AI 的回答和提示，一步一步往下走，AI 会把代码写好，可能会写到 `main.py` 中，你也可以告诉AI写到哪个脚本中，把文件名告诉AI，你测试即可。如果遇到错误的，可以直接把错误的信息发给 AI ，他会帮你解决。也可以把执行命令发给AI `python3 main.py` ，遇到错误，AI 会自行修复或安装。

执行 `python3 main.py` 需要 pip 安装对应的 python 依赖包，如果 pip 安装的慢，可以换 pip 源：
```sh
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
```

## 整理实现思路

由于 AI 一次性生成脚本，执行时，pptx 转图片，样式异常图片空白，所以我将步骤进一步拆解细分：

### pptx 转图片

- `1.md`

```md
# pptx 转 图片

将 PPTX 文件的每一页转换为一张图片，尽可能保留原始样式和内容。
实现的代码写到 `1.py` 脚本中。
```

- 叫 AI 完善和实现：
  - `完善 1.md`
  - `实现 1.md`

### 图片合成视频

- `2.md`

```md
# images to video

将图片集转成视频，每张图片显示2秒。
实现的代码写到 `2.py` 脚本中。
```

- 叫 AI 完善和实现：
  - `完善 2.md`
  - `实现 2.md`


## 最终产物


::: code-group 

```yml [docker-compose.yml]
version: '3.8'

services:
  python_app_pptx2video:
    image: python:3.9
    container_name: python_app_pptx2video
    volumes:
      - .:/app
    working_dir: /app
    ports:
      - "5000:5000"
    tty: true

networks:
  default:
    driver: bridge


# 启动docker容器： docker-compose up -d python_app_pptx2video
```


```md [总结.md]
# 1.py 和 2.py 实现步骤总结

## 1.py：PPTX 幻灯片转图片
1. 使用 LibreOffice 将 PPTX 文件（如 demo.pptx）批量导出为 PDF 文件。
2. 自动查找导出的 PDF 文件名。
3. 使用 pdftoppm 工具将 PDF 每一页高质量切割为 PNG 图片，命名为 slide_01.png、slide_02.png 等。
4. 自动重命名图片，确保序号有序。
5. 删除中间生成的 PDF 文件，输出图片保存在 output/images 目录。

## 2.py：图片合成视频
1. 自动查找 output/images 目录下的 slide_*.png 图片，确保文件名有序。
2. 构造 ffmpeg 命令，设置帧率、编码格式等参数。
3. 使用 ffmpeg 合成 output.mp4 视频，自动加上 scale=trunc(iw/2)*2:trunc(ih/2)*2，保证分辨率为偶数，兼容主流播放器。
4. 输出视频文件 output.mp4。

## 总结
- 1.py 实现了 PPTX 到图片的高保真批量转换，适合批量幻灯片内容提取。
- 2.py 实现了图片到视频的自动合成，适合制作演示视频或动画。
- 整体流程自动化，兼容性强，适合 Linux 环境批量处理。
```


````md [1.md]
# pptx to images

## 目标
将 PPTX 文件的每一页保存为一张图片，尽量还原页面样式。

## 使用说明
1. 确保已安装 Python 3、Pillow、python-pptx、LibreOffice、ImageMagick（convert）。
2. 将需要转换的 PPTX 文件放置在项目根目录下。
3. 运行：
   ```bash
   python3 1.py
   ```
4. 转换后的图片保存在 `output/images` 文件夹。

## 样式还原说明
- 推荐使用“PDF中转”方案：先用 LibreOffice 导出 PDF，再用 ImageMagick 将 PDF 切割为图片，样式还原度更高。
- 直接用 LibreOffice 导出 PNG，部分复杂样式、字体、动画等可能丢失。
- 手动渲染仅支持文本基本样式。

## 依赖项
- Python 3
- Pillow
- python-pptx
- LibreOffice
- ImageMagick（convert）

## 常见问题
- 图片样式与 PPTX 不一致：请优先使用 PDF 中转方案，并确保系统已安装所需字体。
- 字体缺失：请将所需字体安装到系统并刷新字体缓存。

## 联系方式
如有问题请联系项目维护者。
````

```js [1.py]

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.util import Pt
from pptx.enum.text import PP_ALIGN
from PIL import Image, ImageDraw, ImageFont
import os
import subprocess
import shutil

def pptx_to_images(pptx_path, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    # 1. 用 LibreOffice 转 PDF
    subprocess.run([
        "soffice", "--headless", "--convert-to", "pdf", "--outdir", output_dir, pptx_path
    ], check=True)
    # 2. 查找 output_dir 下的 PDF 文件名
    pdf_files = [f for f in os.listdir(output_dir) if f.lower().endswith('.pdf')]
    if not pdf_files:
        raise FileNotFoundError("PDF 文件未生成，无法切割图片！")
    pdf_path = os.path.join(output_dir, pdf_files[0])
    # 3. 用 pdftoppm 将 PDF 切割为图片
    subprocess.run([
        "pdftoppm", "-png", pdf_path, os.path.join(output_dir, "slide")
    ], check=True)
    # 4. 重命名图片为 slide_1.png, slide_2.png ...
    for fname in os.listdir(output_dir):
        if fname.startswith("slide-") and fname.endswith(".png"):
            idx = fname.split("-")[-1].split(".")[0]
            os.rename(os.path.join(output_dir, fname), os.path.join(output_dir, f"slide_{idx}.png"))
    # 5. 删除临时 PDF
    if os.path.exists(pdf_path):
        os.remove(pdf_path)
    print(f"Slides exported to {output_dir}")

if __name__ == "__main__":
    pptx_path = "demo.pptx"
    output_dir = "output/images"
    pptx_to_images(pptx_path, output_dir)

```


````md [2.md]
# images to video

## 目标
将一组图片（如 slide_01.png, slide_02.png ...）合成为一个视频文件。

## 使用说明
1. 确保已安装 ffmpeg。
2. 将所有待合成的图片（如 slide_01.png, slide_02.png ...）放在同一目录下，文件名需有序。
3. 运行如下命令示例，将图片合成为视频：
   ```bash
   ffmpeg -framerate 1 -i slide_%02d.png -c:v libx264 -r 30 -pix_fmt yuv420p output.mp4
   ```
   - `-framerate 1` 表示每秒1帧，可根据需要调整。
   - `slide_%02d.png` 匹配 slide_01.png、slide_02.png ...
   - `output.mp4` 为输出视频文件名。

## 依赖项
- ffmpeg

## 示例
假设当前目录下有 slide_01.png ~ slide_22.png，执行上述命令后会生成 output.mp4 视频。

## 进阶用法
- 调整帧率：如每页显示2秒，可用 `-framerate 0.5`。
- 指定分辨率：可加 `-vf scale=1920:1080` 参数。
- 生成 gif 动画：
  ```bash
  ffmpeg -framerate 1 -i slide_%02d.png output.gif
  ```
- 生成 mov、avi 等格式：只需修改输出文件扩展名。

## 注意事项
- 图片顺序需严格有序，建议命名为 slide_01.png、slide_02.png ...
- 所有图片分辨率应一致，否则视频可能拉伸或报错。
- 输出视频默认编码为 H.264，兼容性好。

## 常见问题
- 图片顺序不对：请确保图片文件名有序且格式一致。
- ffmpeg 未安装：请使用 `apt install ffmpeg` 安装。
- 视频播放异常：可尝试调整帧率、分辨率或更换播放器。
- 图片尺寸不一致：建议预处理图片尺寸一致。

## 联系方式
如有问题请联系项目维护者。
````

````py [2.py]
import os
import subprocess

def images_to_video(image_dir, output_video, framerate=1, resolution=None):
    # 查找图片文件，确保有序
    images = sorted([f for f in os.listdir(image_dir) if f.startswith('slide_') and f.endswith('.png')])
    if not images:
        raise FileNotFoundError('未找到图片文件！')
    # 构造 ffmpeg 命令
    input_pattern = os.path.join(image_dir, 'slide_%02d.png')
    cmd = [
        'ffmpeg', '-y', '-framerate', str(framerate), '-i', input_pattern,
        '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2',
        '-c:v', 'libx264', '-r', '30', '-pix_fmt', 'yuv420p', output_video
    ]
    if resolution:
        cmd.insert(-2, '-vf')
        cmd.insert(-2, f'scale={resolution[0]}:{resolution[1]}')
    print('运行命令:', ' '.join(cmd))
    subprocess.run(cmd, check=True)
    print(f'视频已生成: {output_video}')

if __name__ == '__main__':
    image_dir = 'output/images'
    output_video = 'output.mp4'
    images_to_video(image_dir, output_video, framerate=0.2)

````

```txt [requirements.txt]
azure-cognitiveservices-speech==1.30.0
certifi==2025.4.26
charset-normalizer==3.4.2
decorator==4.4.2
idna==3.10
imageio==2.37.0
imageio-ffmpeg==0.6.0
lxml==5.4.0
moviepy==1.0.3
numpy==2.0.2
pillow==11.2.1
proglog==0.1.12
python-dotenv==1.1.0
python-pptx==0.6.21
pyttsx3==2.90
requests==2.32.3
tqdm==4.67.1
typing_extensions==4.14.0
urllib3==2.4.0
XlsxWriter==3.2.3

```

:::

