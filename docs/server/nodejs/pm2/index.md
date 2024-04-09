# pm2

[pm2 中文网](https://pm2.fenxianglu.cn/)

## 安装

```sh
pnpm i -g pm2
```

## 操作应用

```sh
pm2 start app.js
pm2 restart app.js
pm2 reload app.js
pm2 stop app.js
pm2 delete app.js
pm2 reload app.js
pm2 reload app.js
pm2 reload app.js
```

## 查看应用列表

```sh
pm2 list
pm2 ls
pm2 status
```

## 查看日志

```sh
pm2 logs

# 指定日志行数
pm2 logs --lines 200
```

## 查看监控信息

```sh
pm2 monit
```

## 命令列表

```sh
# Fork 模式
pm2 start app.js --name my-api # 程序名

# Cluster 模式
pm2 start app.js -i 0        # 将根据可用的 CPU 使用 LB 启动最大进程
pm2 start app.js -i max      # 和上面一样，但是不推荐使用。
pm2 scale app +3             # Scales `app` up by 3 workers
pm2 scale app 2              # Scales `app` up or down to 2 workers total

# Listing

pm2 list               # 显示所有进程状态
pm2 jlist              # 以原始JSON格式打印进程列表
pm2 prettylist         # 以美化的JSON格式打印进程列表

pm2 describe 0         # 显示指定进程的所有信息

pm2 monit              # 监控所有进程

# Logs

pm2 logs [--raw]       # 在流中显示所有进程日志
pm2 flush              # 清空所有日志文件
pm2 reloadLogs         # 重新加载所有日志

# Actions

pm2 stop all           # 停止所有进程
pm2 restart all        # 重启所有进程

pm2 reload all         # 将 0s 宕机机时间重新加载（对于 NETWORKED 应用程序）

pm2 stop 0             # 停止指定进程id
pm2 restart 0          # 重启指定进程id

pm2 delete 0           # 将进程从pm2列表中删除
pm2 delete all         # 将从pm2列表中删除所有进程

# Misc

pm2 reset <process>    # 重置元数据(重启时间…)
pm2 updatePM2          # 在内存中更新pm2
pm2 ping               # 确保pm2守护进程已经启动
pm2 sendSignal SIGUSR2 my-app # 向脚本发送系统信号
pm2 start app.js --no-daemon
pm2 start app.js --no-vizion
pm2 start app.js --no-autorestart
```