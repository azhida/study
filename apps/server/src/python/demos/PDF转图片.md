# PDF 转图片

## 两者差异对比

| 对比项 | PyMuPDF | pdf2image |
| --- | --- | --- |
| **速度** | 快，底层基于C++实现，处理效率高 | 相对较慢，依赖外部工具转换 |
| **功能** | 支持PDF内容提取、编辑等多功能 | 专注于PDF转图片，功能单一 |
| **依赖** | 纯Python库，无额外依赖 | 需要安装Poppler等外部工具 |
| **安装** | `pip install pymupdf` 即可 | 除 `pip install pdf2image` 外，还需手动安装Poppler |
| **使用复杂度** | API较底层，学习成本稍高 | API简单易用，适合快速上手 |
| **图片质量** | 可自定义DPI，输出高质量图片 | 图片质量依赖于Poppler配置 |



## 使用 PyMuPDF (fitz)

```sh
pip install pymupdf
```

::: details 示例代码

```python
import fitz  # PyMuPDF
 
def pdf_to_images(pdf_path, output_folder):
    # 打开PDF文件
    doc = fitz.open(pdf_path)
    for page_number in range(len(doc)):
        # 获取页面
        page = doc.load_page(page_number)
        # 将页面渲染为图片
        pix = page.get_pixmap()
        # 设置DPI为300
        pix.set_dpi(300)  
        # 保存图片到文件
        image_path = f"{output_folder}/page_{page_number + 1}.png"
        pix.save(image_path)
    doc.close()
 
pdf_path = 'path/to/your/pdf/file.pdf'
output_folder = 'path/to/output/folder'
pdf_to_images(pdf_path, output_folder)
```


## 使用 PDF2Image


```sh
pip install pdf2image
```

::: details 示例代码
```python
from pdf2image import convert_from_path
 
def pdf_to_images(pdf_path, output_folder):
    # 转换PDF的每一页为图片列表
    images = convert_from_path(pdf_path)
    for i, image in enumerate(images):
        # 保存图片到文件
        image_path = f"{output_folder}/page_{i + 1}.png"
        image.save(image_path, 'PNG')  # 可以改为'JPEG'来保存为JPEG格式
    # 关闭图片对象以释放内存
    for image in images:
        image.close()
 
pdf_path = 'path/to/your/pdf/file.pdf'
output_folder = 'path/to/output/folder'
pdf_to_images(pdf_path, output_folder)
```