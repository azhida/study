import cv2
import numpy as np


def combine_video_with_image(config):
    """
    将视频和图片合并为一个新的视频
    Args:
        config: 配置对象，包含以下字段：
            video_path: 视频文件路径
            image_path: 图片文件路径
            output_path: 输出文件路径
            position: 视频位置，可选值：left/right/top/bottom/center，默认为"right"
            video_width: 视频宽度，默认为None（自动计算）
            video_height: 视频高度，默认为None（自动计算）
            video_size_ratio: 视频相对于图片的大小比例，默认0.3
            x_ratio: 视频水平位置的比例（0-1），默认0.5
            y_ratio: 视频垂直位置的比例（0-1），默认0.5
            on_top: 视频是否在图片上层，默认True
            quality: 输出视频质量（0-1），默认0.95
            limit_fps: 限制输出视频帧率，默认None（使用原视频帧率）
    """
    # 默认配置
    default_config = {
        "video_path": None,         # 视频文件路径
        "image_path": None,         # 图片文件路径
        "output_path": None,        # 输出文件路径
        "position": "right",        # 视频位置：left/right/top/bottom/center
        "video_width": None,        # 视频宽度
        "video_height": None,       # 视频高度
        "video_size_ratio": 0.3,    # 视频大小比例
        "x_ratio": 0.5,            # 水平位置比例
        "y_ratio": 0.5,            # 垂直位置比例
        "on_top": True,            # 视频是否在图片上层
        "quality": 0.95,           # 输出视频质量
        "limit_fps": None          # 限制帧率
    }
    
    # 使用用户配置更新默认配置
    if config is None:
        config = default_config
    else:
        config = {**default_config, **config}

    # 读取视频和图片
    cap = cv2.VideoCapture(config['video_path'])
    image = cv2.imread(config['image_path'])

    # 获取视频的基本信息
    fps = int(cap.get(cv2.CAP_PROP_FPS))
    frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    # 处理视频尺寸
    if config['video_width'] and config['video_height']:
        new_video_width = config['video_width']
        new_video_height = config['video_height']
    else:
        # 如果设置了比例，根据图片尺寸计算视频大小
        if config['video_size_ratio'] > 0:
            new_video_width = int(image.shape[1] * config['video_size_ratio'])
            new_video_height = int(frame_height * (new_video_width / frame_width))
        else:
            new_video_width = frame_width
            new_video_height = frame_height

    # 根据position确定输出视频的尺寸和视频位置
    if config['position'] in ['left', 'right']:
        output_width = image.shape[1] + new_video_width
        output_height = max(image.shape[0], new_video_height)
    elif config['position'] in ['top', 'bottom']:
        output_width = max(image.shape[1], new_video_width)
        output_height = image.shape[0] + new_video_height
    else:  # center
        output_width = image.shape[1]
        output_height = image.shape[0]

    # 创建视频写入器
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(config['output_path'], fourcc, fps, (output_width, output_height))

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # 调整视频帧大小
        frame = cv2.resize(frame, (new_video_width, new_video_height))

        # 创建输出帧
        if config['position'] in ['left', 'right', 'top', 'bottom']:
            # 创建空白背景
            combined_frame = np.zeros((output_height, output_width, 3), dtype=np.uint8)

            # 确定图片位置
            if config['position'] == 'left':
                combined_frame[0:image.shape[0], new_video_width:] = image
                combined_frame[0:new_video_height, 0:new_video_width] = frame
            elif config['position'] == 'right':
                combined_frame[0:image.shape[0], 0:image.shape[1]] = image
                combined_frame[0:new_video_height, image.shape[1]:] = frame
            elif config['position'] == 'top':
                combined_frame[new_video_height:, 0:image.shape[1]] = image
                combined_frame[0:new_video_height, 0:new_video_width] = frame
            elif config['position'] == 'bottom':
                combined_frame[0:image.shape[0], 0:image.shape[1]] = image
                combined_frame[image.shape[0]:, 0:new_video_width] = frame
        else:  # center
            # 复制图片作为背景
            combined_frame = image.copy()

            # 计算视频的位置（根据比例）
            x = int(config['x_ratio'] * (output_width - new_video_width))
            y = int(config['y_ratio'] * (output_height - new_video_height))

            # 确保位置在有效范围内
            x = max(0, min(x, output_width - new_video_width))
            y = max(0, min(y, output_height - new_video_height))

            if config['on_top']:
                # 视频在上层
                combined_frame[y:y+new_video_height, x:x+new_video_width] = frame
            else:
                # 视频在下层
                roi = image[y:y+new_video_height, x:x+new_video_width].copy()
                combined_frame[y:y+new_video_height, x:x+new_video_width] = frame
                # 覆盖回原始图片
                combined_frame[y:y+new_video_height, x:x+new_video_width] = cv2.addWeighted(combined_frame[y:y+new_video_height, x:x+new_video_width], 0.3, roi, 0.7, 0)

        # 写入合并后的帧
        out.write(combined_frame)

    # 释放资源
    cap.release()
    out.release()

    # 使用 FFmpeg 添加原视频的音频到合并后的视频
    try:
        import subprocess
        temp_output = config['output_path'] + '.temp.mp4'
        import os
        os.rename(config['output_path'], temp_output)

        # 合并视频和音频
        cmd = f'ffmpeg -i {temp_output} -i {config["video_path"]} -c:v copy -map 0:v:0 -map 1:a:0 -shortest {config["output_path"]}'
        subprocess.run(cmd, shell=True)

        # 删除临时文件
        if os.path.exists(temp_output):
            os.remove(temp_output)
    except Exception as e:
        print(f"添加音频失败: {str(e)}")

# 示例：合并视频和图片
combine_video_with_image({
    'video_path': 'demo/shuziren_video.mp4',
    'image_path': 'demo/demo.png',
    'output_path': 'demo/merged_image_shuziren.mp4',
    'position': 'right'
})

# 示例：在图片中央显示视频，视频位于图片右下角(比例0.8, 0.8)
combine_video_with_image({
    'video_path': 'demo/shuziren_video.mp4',
    'image_path': 'demo/demo.png',
    'output_path': 'demo/merged_image_shuziren_1.mp4',
    'position': 'center',
    'video_width': 200,
    'video_height': None,
    'x_ratio': 0.1,
    'y_ratio': 0.1
})