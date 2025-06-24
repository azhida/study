import cv2
import numpy as np



def merge_videos_side_by_side(video1_path, video2_path, output_path='merged_output.mp4', width_ratio1=0.5, width_ratio2=0.5, position="center"):
    """
    将两个视频并排合并为一个视频

    Args:
        video1_path (str): 第一个视频的路径
        video2_path (str): 第二个视频的路径
        output_path (str): 输出视频的路径
        width_ratio1 (float): 第一个视频占总宽度的比例(0-1), 默认0.5
        width_ratio2 (float): 第二个视频占总宽度的比例(0-1), 默认0.5
        position (str): 第二个视频的垂直位置，可选 "top"、"center"、"bottom"，默认 "center"

    Returns:
        bool: 合并成功返回True，失败返回False
    """
    # 确保比例和为1
    total_ratio = width_ratio1 + width_ratio2
    if total_ratio != 1:
        width_ratio1 = width_ratio1 / total_ratio
        width_ratio2 = width_ratio2 / total_ratio
    try:
        # 打开两个视频文件
        cap1 = cv2.VideoCapture(video1_path)
        cap2 = cv2.VideoCapture(video2_path)

        # 获取视频的基本信息
        width1 = int(cap1.get(cv2.CAP_PROP_FRAME_WIDTH))
        height1 = int(cap1.get(cv2.CAP_PROP_FRAME_HEIGHT))
        width2 = int(cap2.get(cv2.CAP_PROP_FRAME_WIDTH))
        height2 = int(cap2.get(cv2.CAP_PROP_FRAME_HEIGHT))
        fps = min(cap1.get(cv2.CAP_PROP_FPS), cap2.get(cv2.CAP_PROP_FPS))

        # 设定总宽度（可以根据需要调整）
        total_width = 1920  # 例如使用1920作为总宽度

        # 根据width_ratio分配每个视频的宽度
        new_width1 = int(total_width * width_ratio1)
        new_width2 = total_width - new_width1

        # 根据原始宽高比计算对应的高度
        new_height1 = int(new_width1 * height1 / width1)
        new_height2 = int(new_width2 * height2 / width2)

        # 输出视频的尺寸
        output_width = total_width
        output_height = max(new_height1, new_height2)

        # 创建临时无声视频
        temp_video = 'temp_output.mp4'
        fourcc = cv2.VideoWriter_fourcc(*'mp4v')
        out = cv2.VideoWriter(temp_video, fourcc, fps, (output_width, output_height))

        while True:
            ret1, frame1 = cap1.read()
            ret2, frame2 = cap2.read()

            # 创建黑色背景
            combined_frame = np.zeros((output_height, output_width, 3), dtype=np.uint8)

            # 如果第一个视频还没结束，则添加其帧
            if ret1:
                # 调整帧的大小并保持原始比例
                frame1 = cv2.resize(frame1, (new_width1, new_height1))
                # 计算第一个视频的垂直居中位置
                y1 = (output_height - new_height1) // 2
                # 将调整后的帧放入黑色背景中
                combined_frame[y1:y1+new_height1, 0:new_width1] = frame1

            # 如果第二个视频还没结束，则添加其帧
            if ret2:
                # 调整帧的大小并保持原始比例
                frame2 = cv2.resize(frame2, (new_width2, new_height2))
                # 根据position参数计算第二个视频的位置
                if position == "top":
                    y2 = 0  # 靠上对齐
                elif position == "bottom":
                    y2 = output_height - new_height2  # 靠下对齐
                else:  # center
                    y2 = (output_height - new_height2) // 2  # 垂直居中
                # 将调整后的帧放入黑色背景中
                combined_frame[y2:y2+new_height2, new_width1:] = frame2

            # 如果两个视频都结束了，退出循环
            if not ret1 and not ret2:
                break



            # 写入合并好的帧
            out.write(combined_frame)

        # 释放资源
        cap1.release()
        cap2.release()
        out.release()

        # 使用 FFmpeg 将第二个视频的音频添加到合并后的视频中
        import subprocess
        cmd = f'ffmpeg -i {temp_video} -i {video2_path} -c:v copy -map 0:v:0 -map 1:a:0 -shortest {output_path}'
        subprocess.run(cmd, shell=True)

        # 删除临时文件
        import os
        if os.path.exists(temp_video):
            os.remove(temp_video)

        return True

    except Exception as e:
        print(f"视频合并失败: {str(e)}")
        return False    
    

merge_videos_side_by_side('demo/image_video.mp4', 'demo/shuziren_video.mp4', 'demo/merged_video.mp4', 0.8, 0.2, position='top')    