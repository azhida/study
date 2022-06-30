# MacOS 使用笔记

## 快捷键
```
Ctrl+A：到行首
Ctrl+E：到行尾
Ctrl+N：到下一行
Ctrl+P：到上一行
Ctrl+K：从光标处开始删除，直到行尾
fn键+左方向键是HOME
fn键+右方向键是END
fn+上方向键是page up
fn+下方向键是page down
F11 : 回到桌面
win + Shift + 4 : 自定义截屏，截图会保存到桌面
```

## 切换输入法
```
Ctrl + Shift + 空格键
```

## 关闭指定端口
```
# 先查看占用端口的 进程ID
lsof -i:8080
COMMAND  PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    1563 a123   24u  IPv4 0x50a3c2bc555911ab      0t0  TCP 192.168.200.111:8080 (LISTEN)

# 杀掉 PID
kill -9 1563
```
