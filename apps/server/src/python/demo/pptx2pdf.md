# pptx 转 pdf

## pptx2pdf.py

::: details 点击查看代码

<<< ./pptx2pdf.py

:::

## 运行环境
本脚本需要在特定环境下运行，以下是详细的环境要求和安装步骤：

### 1. 操作系统
建议使用Windows 10/11并安装WSL 2（Windows Subsystem for Linux），Ubuntu 20.04及以上版本。

#### 安装WSL 2
在PowerShell中以管理员身份运行以下命令：
```powershell
wsl --install -d Ubuntu
```

### 2. Python环境
- **Python版本**：Python 3.7及以上
- **安装Python**：在WSL中运行以下命令安装Python和pip：
```bash
sudo apt update
sudo apt install python3 python3-pip
```

### 3. 依赖工具
#### 3.1 LibreOffice
`unoconv`依赖LibreOffice进行文档转换，安装命令如下：
```bash
sudo apt install libreoffice
```

#### 3.2 unoconv
安装`unoconv`工具：
```bash
sudo apt install unoconv
```

### 4. Python依赖
确保项目所需的Python依赖已安装，可通过以下命令安装：
```bash
pip install -r requirements.txt
```

## 功能概述

## 功能概述
此Python脚本的主要功能是将PPTX文件转换为PDF文件，借助`unoconv`工具完成转换操作，同时使用日志记录功能对转换过程进行监控。

## 主要函数
### `pptx_to_pdf(pptx_path, output_dir='.')`
- **功能**：使用`unoconv`将指定路径的PPTX文件转换为PDF文件。
- **参数**：
  - `pptx_path`：需要转换的PPTX文件的路径。
  - `output_dir`：PDF文件的输出目录，默认为当前目录。
- **返回值**：转换成功返回PDF文件的路径，失败则返回`None`。

## 使用方法
在脚本底部提供了示例用法，指定一个演示用的PPTX文件路径和输出目录，调用`pptx_to_pdf`函数进行转换，并根据返回结果记录日志。示例代码如下：
```python
if __name__ == '__main__':
    demo_pptx = './demo.pptx'
    output_dir = './output_pdf'
    pdf_file = pptx_to_pdf(demo_pptx, output_dir)
    if pdf_file:
        logging.info(f'PDF文件已生成: {pdf_file}')
    else:
        logging.error('PDF生成失败')
```

## 错误处理
在`pptx_to_pdf`函数中使用`try-except`块捕获可能出现的异常，若转换过程中发生错误，会记录错误日志并返回`None`。