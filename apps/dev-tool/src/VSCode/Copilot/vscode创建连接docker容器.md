# vscode 创建和连接 docker 容器


## 创建一个项目 `pptx2video`

宿主机
```sh
mkdir pptx2video
cd pptx2video
```

## 起一个 python3.9 的 docker 容器

- docker-compose.yml

```yml
version: '3.8'

services:
  python_app_pptx2video:
    # image: python:3.9
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

```sh
docker-compose up -d python_app_pptx2video
```

## vscode 远程连接到docker容器 python_app_pptx2video

- vscode `左侧菜单栏`，
- 点击 `远程资源管理器`,
- 远程资源管理器 选择 `开发容器`
- 找到容器 `python_app_pptx2video`, 在 新窗口中打开，
- 首次进入，要先选择容器内部目录 `/app` ，
- 连接成功后，就可以在容器内部，问 AI ，让AI写代码，实现各种功能了。


## 注意：AI 聊天窗有三种模式

- 询问：只会在聊天窗回答，不会修改任何文件
- 编辑：会修改当前的文件
- 代理：会自动安装依赖，自动创建和修改任何文件

## 注意

- 如果 `apt update` 执行速度很慢，可以让 AI 帮你切换 apt 源为 阿里云源 、 华为云源 、 腾讯云源 或者 其他你想要的源：

问：`切换 apt 源为 华为云源` ，如果报错，根据提示，一步一步往下问即可。如果 AI 找不到 apt 源的配置文件在哪里，你就找到，然后告诉他：
```sh
cat /etc/apt/sources.list.d/debian.sources
# 如果你不确定目录，可以 输入 /etc/apt/ , 然后按 tab 键来显示后再选择
# 如果说不在当前目录无法写入之类的，就命令行 cd 到对应目录下，如 cd /etc/apt/sources.list.d/ 
```
