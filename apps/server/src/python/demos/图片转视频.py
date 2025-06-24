import cv2
import numpy as np

def image_to_video(image_path, duration, output_path="output.mp4"):
    """
    将图片转换为指定时长的视频

    Args:
        image_path (str): 输入图片的路径
        duration (float): 视频时长(秒)
        output_path (str): 输出视频的路径，默认为'output.mp4'

    Returns:
        bool: 转换成功返回True，失败返回False
    """
    try:
        # 读取图片
        img = cv2.imread(image_path)
        if img is None:
            print(f"无法读取图片: {image_path}")
            return False

        # 获取图片尺寸
        height, width = img.shape[:2]

        # 设置视频参数
        fps = 30
        total_frames = int(duration * fps)

        # 创建视频写入器
        fourcc = cv2.VideoWriter_fourcc(*'mp4v')
        out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))

        # 将图片写入视频帧
        for _ in range(total_frames):
            out.write(img)

        # 释放资源
        out.release()

        return True

    except Exception as e:
        print(f"视频生成失败: {str(e)}")
        return False
    


image_to_video("demo.png", 5)  # 将input.jpg转换为5秒长的视频    