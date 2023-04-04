# .rar 解压

## mac 安装
```
brew install unrar
# 如不成功，用下面命令
brew install carlocab/personal/unrar
```

## 解压命令

```
# unrar x 需解压的文件目录/文件.rar 解压后目录
# 确保目标目录存在
mkdir -p /var/www/aa
# 解压到指定目录
unrar x /var/www/aa.rar /var/www/aa
```