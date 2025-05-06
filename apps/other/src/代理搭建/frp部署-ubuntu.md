# 部署 frp - Linux - Ubuntu

[frp 官网](https://gofrp.org/)

## 下载安装
```
# 下载压缩包，注：这里已提供压缩包
wget https://github.com/fatedier/frp/releases/download/v0.39.1/frp_0.39.1_linux_arm64.tar.gz
# 解压安装包
tar -xvf frp_0.39.1_linux_amd64.tar.gz

cd frp_0.39.1_linux_amd64

# 复制到 bin 中
sudo cp frpc /usr/bin/  # 服务端
sudo cp frps /usr/bin/  # 客户端

# 复制配置文件 - 如果不是新安装则跳过这一步，不然会把旧配置覆盖掉
sudo mkdir /etc/frp/
sudo cp frp*.ini /etc/frp/

# 做系统服务
sudo cp systemd/* /lib/systemd/system/

# 启动服务
sudo systemctl start frps # 服务端
sudo systemctl start frpc # 客户端

# 开机启动
sudo systemctl enable frps  # 服务端
sudo systemctl enable frpc  # 客户端
```

## 配置
详细配置信息和方法，看官网文档
### 配置服务端
```
sudo vim /etc/frp/frps.ini
sudo systemctl restart frps
```

### 配置客户端
```
sudo vim /etc/frp/frpc.ini
sudo systemctl restart frpc
```

### 开启日志
```
[common]
# console or real logFile path like ./frps.log or ./frpc.log
log_file = /tmp/frps.log
# trace, debug, info, warn, error
log_level = info
log_max_days = 3
```


## 注意事项

### 端口号开启
记得开启服务端和客户端各自需要用到的端口，  
主要看 `frpc.ini`，  
服务端需要开启的端口：`server_port` 和 所有的 `remote_port` ；  
客户端需要开启的端口：所有的 `local_port` ；  

> 如何开启端口号，请自行百度

> 注：如果连不上服务端，请再次确认服务端的端口号 `server_port` 是否已开启，是否已经支持外部访问


## 调试

### 访问客户端主机
通过第三方计算机终端访问 `ssh -p 7022 root@x.x.x.x` ，输入密码后即可通过 ssh 方式访问linux主机。 

访问成功说明代理成功

## 操作命令
### 操作命令 - 服务端
```
sudo systemctl enable frps  # 设置开机启动
sudo systemctl disable frps # 取消开机启动
systemctl status frps       # 查看 frps 服务状态
systemctl cat frps          # 查看 frps 服务配置
sudo systemctl start frps   # 启动 frps 服务
sudo systemctl restart frpc # 重启 frps 服务
sudo systemctl stop frps    # 停止 frps 服务
```

### 操作命令 - 客户端
客户端的操作命令与服务端类似，只需将 frps 改为 frpc 即可



## 参考

[使用frp实现内网穿透管理物联网设备](https://zhuanlan.zhihu.com/p/339604145)

[Ubuntu下安装frp](https://zhuanlan.zhihu.com/p/262533456)


感谢各路大神指点！