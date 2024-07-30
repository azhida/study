# 百度网盘 python 客户端



## 安装
```
apt install python-pip

pip install bypy
```

## 使用
```
# 用该命令获取百度云盘授权码
bypy info

# 上传文件或文件夹
bypy upload filename

# 上传文件或文件夹到指定目录 ab
bypy upload filename ab/

# 关闭连接，退出授权
bypy -c
```