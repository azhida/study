# ppt转图片

::: details 点击查看代码

<<< ./ppt转图片.py

:::

## 1. 文件概述
`ppt转图片.py` 是一个Python脚本，用于将PPTX文件转换为PNG图片。它依赖于`python-pptx`和`pillow`库进行图像处理，同时需要外部工具`unoconv`和`convert`（通常属于ImageMagick）进行文件格式转换。

## 2. 主要功能

### 2.1 转换PPTX到PNG
- **输入**: PPTX文件路径和可选的输出目录。
- **输出**: 生成的PNG图片文件，存放在指定的输出目录中。

### 2.2 错误处理
- 检查输入的PPTX文件是否存在。
- 捕获并处理在转换过程中可能出现的异常，如PDF转换失败。

### 2.3 日志输出
- 打印转换过程中的关键信息，如开始转换、转换完成及生成的图片数量。
- 在出现错误时，打印错误信息。

## 3. 文件结构

### 3.1 导入模块
```python
import os
import sys
from pptx import Presentation
from PIL import Image
import io
```

### 3.2 主函数 `pptx_to_png`
- **参数**: `pptx_path` (PPTX文件路径), `output_dir` (输出目录，默认为"output")。
- **功能**: 执行PPTX到PNG的转换流程。

### 3.3 命令行接口
- 检查命令行参数数量，确保至少提供了一个PPTX文件路径。
- 调用`pptx_to_png`函数，传递命令行参数作为输入。

## 4. 转换流程

1. **检查PPTX文件是否存在**:
   - 如果不存在，打印错误信息并返回。

2. **创建输出目录**:
   - 使用`os.makedirs`确保输出目录存在，如果目录已存在则不会报错。

3. **加载PPTX文件**:
   - 使用`Presentation`类加载PPTX文件。

4. **转换为PDF**:
   - 使用`unoconv`命令行工具将PPTX文件转换为PDF文件。
   - 检查PDF文件是否成功生成，如果失败则抛出异常。

5. **将PDF转换为PNG**:
   - 使用`convert`命令行工具将PDF文件转换为PNG图片。
   - 图片文件名格式为`slide_%d.png`，其中`%d`为幻灯片序号。

6. **清理临时文件**:
   - 删除生成的PDF文件。

7. **统计并打印生成的图片数量**:
   - 列出输出目录中的所有PNG文件，计算并打印数量。

8. **异常处理**:
   - 捕获并处理在转换过程中可能出现的任何异常，确保程序能够优雅地退出。

## 5. 依赖说明
- **python-pptx**: 用于处理PPTX文件。
- **pillow**: 用于图像处理（虽然在此脚本中未直接使用，但通常与ImageMagick配合使用）。
- **unoconv**: 用于将PPTX转换为PDF。
- **convert** (ImageMagick): 用于将PDF转换为PNG。

这些依赖项需要通过`pip`或系统包管理器进行安装。


# 提取依赖项

从提供的`ppt2png.py`文件中，我们可以提取出该脚本运行所需的依赖项。这些依赖项包括Python库和外部命令行工具。

## 1. Python库

### 1.1 python-pptx
- **用途**: 用于处理PPTX文件。
- **安装命令**: `pip install python-pptx`

### 1.2 pillow
- **用途**: 用于图像处理（虽然在提供的脚本中未直接使用，但通常与ImageMagick配合使用）。
- **安装命令**: `pip install pillow`

## 2. 外部命令行工具

### 2.1 unoconv
- **用途**: 用于将PPTX文件转换为PDF文件。
- **安装方法**:
  - 在Ubuntu/Debian系统上: `sudo apt-get install unoconv`
  - 在CentOS/RHEL系统上: `sudo yum install unoconv`
  - 在macOS上: 可以通过Homebrew安装，`brew install unoconv`
  - 在Windows上: 可能需要手动安装LibreOffice并使用其自带的unoconv功能，或寻找其他Windows兼容的替代品。

### 2.2 convert (ImageMagick)
- **用途**: 用于将PDF文件转换为PNG图片。
- **安装方法**:
  - 在Ubuntu/Debian系统上: `sudo apt-get install imagemagick`
  - 在CentOS/RHEL系统上: `sudo yum install imagemagick`
  - 在macOS上: 可以通过Homebrew安装，`brew install imagemagick`
  - 在Windows上: 可以从[ImageMagick官网](https://imagemagick.org/script/download.php)下载并安装。

## 3. 依赖项总结

| 类型       | 依赖项     | 用途                     | 安装命令/方法                                              |
|------------|------------|--------------------------|------------------------------------------------------------|
| Python库   | python-pptx | 处理PPTX文件             | `pip install python-pptx`                              |
| Python库   | pillow     | 图像处理（未直接使用）   | `pip install pillow`                                   |
| 外部工具   | unoconv    | 将PPTX转换为PDF          | Ubuntu/Debian: `sudo apt-get install unoconv` <br> CentOS/RHEL: `sudo yum install unoconv` <br> macOS: `brew install unoconv` <br> Windows: 手动安装LibreOffice或使用替代品 |
| 外部工具   | convert    | 将PDF转换为PNG           | Ubuntu/Debian: `sudo apt-get install imagemagick` <br> CentOS/RHEL: `sudo yum install imagemagick` <br> macOS: `brew install imagemagick` <br> Windows: 从[ImageMagick官网](https://imagemagick.org/script/download.php)下载并安装 |

请确保在运行`ppt2png.py`脚本之前，已经正确安装了上述所有依赖项。




netsh interface portproxy add v4tov4 listenport=8000 connectaddress=10.0.1.201 connectport=8000

New-NetFirewallRule -DisplayName "Allow Inbound TCP Port 5000" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 5000


netsh interface portproxy add v4tov4 listenport=8000 connectaddress=10.0.1.201 connectport=8000 protocol=tcp