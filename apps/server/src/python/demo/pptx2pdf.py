import os
import subprocess
import logging
from tempfile import TemporaryDirectory

# 配置日志记录
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def pptx_to_pdf(pptx_path, output_dir='.'):
    """使用unoconv将PPTX文件转换为PDF文件。"""
    try:
        # 确保输出目录存在
        os.makedirs(output_dir, exist_ok=True)
        
        # 生成输出PDF文件路径
        base_name = os.path.basename(pptx_path).rsplit('.', 1)[0]
        pdf_path = os.path.join(output_dir, f'{base_name}.pdf')

        # 使用unoconv进行转换
        command = ['unoconv', '-f', 'pdf', '-o', pdf_path, pptx_path]
        logging.info(f'执行命令: {" ".join(command)}')
        subprocess.run(command, check=True)
        
        logging.info(f'成功将 {pptx_path} 转换为 {pdf_path}')
        return pdf_path
    except Exception as e:
        logging.error(f'转换失败: {e}')
        return None

if __name__ == '__main__':
    # 示例用法
    demo_pptx = './demo.pptx'
    output_dir = './output_pdf'
    pdf_file = pptx_to_pdf(demo_pptx, output_dir)
    if pdf_file:
        logging.info(f'PDF文件已生成: {pdf_file}')
    else:
        logging.error('PDF生成失败')