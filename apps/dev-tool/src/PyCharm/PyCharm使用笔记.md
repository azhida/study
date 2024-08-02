###### [社区版下载地址（免费）](hhttps://www.jetbrains.com/pycharm/download/#section=windows)

###### 汉化步骤
```
File --> Settings --> Plugins
# 搜索 Chin，选择 中文简体 即可
```

###### 调整字体大小
```
# File --> Settings --> Keymap --> Editor Actions
# 找到如下选项，并双击
Decrease Font Size
Increase Font Size
# 选择 Add Mouse Shortcut，按住 Ctrl ，鼠标滚轮上下滚动即可
```

## Pycharm报错 `ModuleNotFoundError: no module named 'requests_html''` 解决方法
### 出错原因
pycharm未导入requests_html库
### 解决办法
- File——Settings
- Project: PycharmProjects——Python Interpreter，在右侧显示的一长串库上方，有+ - △ 可视化的符号，点击+号
- 在输入框输入添加的库：requests-html，在左下角点击Install package安装即可
- 返回上一页，在右侧可以看到已经安装的requests-html包，点击ok即可
- 代码没有标红了