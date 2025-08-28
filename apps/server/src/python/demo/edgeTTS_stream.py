import os
import asyncio
import edge_tts


async def tts(
    text, output_path, voice: str = "zh-CN-XiaoxiaoNeural", progress_callback=None
):
    """
    使用Edge TTS生成音频
    text: 要转换的文本
    output_path: 输出音频路径
    voice: 语音
    progress_callback: 进度回调函数，接收已处理的字节数、总字节数和进度百分比
    """
    # 确保输出目录存在
    output_dir = os.path.dirname(output_path)
    if output_dir:
        os.makedirs(output_dir, exist_ok=True)

    # 简单预估总字节数（基于文本长度，不需要调用edge_tts）
    # 这是一个粗略的估算，每个字符约1600字节
    estimated_bytes_per_char = 1600  # 每个字符预估的字节数
    total_bytes = len(text) * estimated_bytes_per_char

    # 初始化通信对象
    communicate = edge_tts.Communicate(text, voice)

    # 用于跟踪进度的变量
    processed_bytes = 0

    # 打开输出文件
    with open(output_path, "wb") as f:
        # 使用流式处理
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                # 写入音频数据
                f.write(chunk["data"])
                # 更新已处理字节数
                processed_bytes += len(chunk["data"])
                # 如果提供了回调函数，则调用它
                if progress_callback:
                    process = int(processed_bytes / total_bytes * 100)
                    if process > 99:
                        process = 99
                    await progress_callback(processed_bytes, total_bytes, process)
            elif chunk["type"] == "WordBoundary":
                # 可以在这里处理单词边界事件，用于更精确的进度跟踪
                pass

    if progress_callback:
        await progress_callback(processed_bytes, total_bytes, 100)

    return output_path


async def progress_callback(processed_bytes, total_bytes, process):
    print(
        f"已处理 {processed_bytes} 字节，总字节数 {total_bytes}，进度 {process}%"
    )


text = """
南宁南湖作为国家AAAA级旅游景区，是南宁市打造「中国绿城」的核心生态地标。
本次展示将系统解析这座占地93公顷的城市中央公园，涵盖唐代水利遗址背景、生态修复技术体系、特色景观构成及智慧化建设路径。
采用「历史-空间-功能」三维框架，通过航拍实景、水质监测热力图等15组可视化素材，呈现从农耕水利工程到现代城市生态综合体的千年演变。
重点突出其作为首府「城市会客厅」的定位，以及在中国-东盟园林艺术交流中的文化窗口价值，为后续深度解读建立认知锚点。
南湖占据南宁地理中心，东连东盟商务区天际线，西接古城路历史建筑群，地铁1/3号线双轨交汇形成高效到达系统。
公园呈南北轴向带状布局，水域面积58.7万平方米，与青秀山构成「山湖辉映」的城市景观主轴。
作为住建部海绵城市重点示范项目，集成雨水花园、生态滤池等7大系统，实现12.8平方公里汇水区的径流控制。
2023年监测数据显示，环湖智能步道日均服务健身人群1.8万人次，89%受访市民将其列为「15分钟生活圈」核心休闲节点。
南湖历史可追溯至唐景云元年（710年）的邕州水利工程，现存唐代堤坝遗址3处。
1950年代扩建为城市公园，2016年投入2.3亿元实施水质生态治理，透明度从0.3m提升至1.5m。
现存历史遗存包含清代九孔石桥、韦拔群李明瑞烈士纪念馆等红色教育基地，以及1980年代建设的首代观景平台。
公园档案室珍藏1958-2023年间建设图纸126份，完整记录从农业灌溉水系到现代生态公园的转型历程，见证南宁城市发展的关键阶段。
"""


async def main():
    await tts(
        text=text,
        output_path="test.mp3",
        progress_callback=progress_callback,
    )


if __name__ == "__main__":
    asyncio.run(main())
