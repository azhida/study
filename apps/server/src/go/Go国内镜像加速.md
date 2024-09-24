# Go 国内镜像加速

在 Linux 或 macOS 上面，需要运行下面命令（或者，可以把以下命令写到 .bashrc 或 .bash_profile 文件中）
 
# 1、启用 Go Modules 功能

```sh
go env -w GO111MODULE=on
```
 
# 2、配置 GOPROXY 环境变量，以下三选一，推荐官方
 
 ```sh
    # (1)官方
    go env -w GOPROXY=https://goproxy.cn,direct
    # (2)阿里云
    go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/
    # (3)七牛 CDN
    go env -w  GOPROXY=https://goproxy.cn
 ```

# 3、确认一下：

```sh
go env | grep GOPROXY
# GOPROXY=https://goproxy.cn,direct
```