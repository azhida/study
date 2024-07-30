# pyinstaller - python 脚本打包成 exe

## 安装

```
pip install pyinstaller
```


## 打包单文件

进入 `a.py` 文件所在目录下执行：
```sh
Pyinstaller -F a.py
```

在 `a.py` 同级目录下，生成 `dist/a.exe`


- 相关命令

```
# 打包exe
Pyinstaller -F a.py 
# 不带控制台的打包
Pyinstaller -F -w a.py 
# 打包指定exe图标打包 tb是图标文件名
Pyinstaller -F -w -i tb.ico a.py 
```

这里就给大家分享一个网站，可以把其他格式图片转成ico格式：https://app.xunjiepdf.com/img2icon/

## 打包多文件

todo 待完善



## 参考

- [【Python】如何将写好的Python代码打包成exe文件？](https://blog.csdn.net/WWWQQQEEECCC/article/details/127487095)
- [Python程序打包成exe](https://zhuanlan.zhihu.com/p/444647750)
- [python打包exe最清楚的教程来了](http://www.360doc.com/content/23/0530/15/541242_1082728808.shtml)