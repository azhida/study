# Win10 安装wsl并将文件位置从C盘迁移至D盘

## 查看Ubuntu 版本号

```
wsl -l

# Ubuntu-20.04
```

```
# 导出
wsl --export Ubuntu-20.04 d://wslubuntu//ubuntu-20.04.tar
# 注销原来的
wsl --unregister Ubuntu-20.04
# 导入
wsl --import Ubuntu-20.04 d://wslubuntu d://wslubuntu//ubuntu-20.04.tar
```

## 参考

[Win10 安装wsl并将文件位置从C盘迁移至D盘](https://blog.csdn.net/weixin_50321412/article/details/124592284)