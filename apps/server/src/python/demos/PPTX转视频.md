# PPTX 转视频

[AI 版 PPTX 转视频](/dev-tool/VSCode/Copilot/AI实现PPTX合成视频)


## 基本思路

- pptx 转 pdf ，pdf 每页转成图片：可以最大程度保持 pptx 原样式；
- 图片集合成视频；

## 环境搭建

起一个docker容器来玩。

:::details docker-compose.yml
```yml
version: '3.8'

services:
  python_app_pptx2video:
    image: python:3.9-slim
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
```
:::

启动容器：
```sh
sodu docker-compose up -d python_app_pptx2video
```

> 注意：后面的操作都是在 docker 容器内操作了！


```sh
# apt 换源 
sed -i "s@http://deb.debian.org@http://mirrors.aliyun.com@g" /etc/apt/sources.list.d/debian.sources

apt update
apt install -y libreoffice poppler-utils ffmpeg

# pip 换源
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
```

## 安装 Python 依赖

::: details requirements.txt

```txt
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

```sh
# 安装：
sudo pip install -r requirements.txt
```

## pptx 转 图片

先中转 pdf。

::: details pptx_to_images.py

```py

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

:::


## 图片转视频

::: details images_to_video.py

```py
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
```

:::

