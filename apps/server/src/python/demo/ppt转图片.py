#!/usr/bin/env python3
"""
将PPTX文件转换为PNG图片
需要安装: python-pptx和pillow包
安装命令: pip install python-pptx pillow
"""

import os
import sys
from pptx import Presentation
from PIL import Image
import io

def pptx_to_png(pptx_path, output_dir="output"):
    """将PPTX每页转换为PNG图片"""
    if not os.path.exists(pptx_path):
        print(f"错误: 文件 {pptx_path} 不存在")
        return

    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)

    # 加载PPTX文件
    prs = Presentation(pptx_path)
    
    # 使用LibreOffice/unoconv进行转换
    print(f"开始转换 {pptx_path} 为PNG图片...")
    
    try:
        # 转换为PDF
        pdf_path = os.path.join(output_dir, "temp.pdf")
        cmd = f"unoconv -f pdf -o {pdf_path} {pptx_path}"
        os.system(cmd)
        
        if not os.path.exists(pdf_path):
            raise Exception("PDF转换失败")
            
        # 转换为PNG
        cmd = f"convert -density 150 {pdf_path} {output_dir}/slide_%d.png"
        os.system(cmd)
        
        # 清理临时文件
        os.remove(pdf_path)
        
        # 统计生成的图片数量
        png_files = [f for f in os.listdir(output_dir) if f.endswith(".png")]
        print(f"转换完成，共生成 {len(png_files)} 张PNG图片")
        
    except Exception as e:
        print(f"转换出错: {str(e)}")
        if os.path.exists(pdf_path):
            os.remove(pdf_path)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python ppt2png.py [pptx文件路径] [输出目录(可选)]")
        sys.exit(1)
    
    pptx_path = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "output"
    pptx_to_png(pptx_path, output_dir)