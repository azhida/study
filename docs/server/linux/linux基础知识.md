# Linux 基础知识

## 用户相关操作

```sh
# 添加用户，用户名www
adduser www
# 添加用户组，组名www
groupadd www
# 添加用户www 并加入 用户组www
useradd -g www www
# 将用户 user1 加入到 users组中，
usermod -g users user1

# 修改 www用户的密码
passwd www
```

## less 查看日志


一定要用 less 命令查看日志文件，而不是 vim 或者其他编辑器。
通常来说日志文件会特别大，特别是线上的服务器，如果用 vim 或者其他编辑器打开，会把整个日志文件加载到内存中，有可能立马将服务器内存撑爆导致系统故障。
less 命令则不会，可以理解为按需加载文件内容到内存中。

```sh
less storage/logs/laravel.log
```

## vim 编辑器相关

vim 编辑状态下，按 `shift + g` 可以跳转到日志文件的末尾

## scp 使用说明

scp [使用参考地址](https://www.cnblogs.com/peida/archive/2013/03/15/2960802.html)

scp 是 `secure copy` 的缩写, scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令。 linux 的 scp 命令可以在 linux 服务器之间复制文件和目录。

scp 是 `secure copy` 的简写，用于在 Linux 下进行远程拷贝文件的命令，和它类似的命令有 cp ，不过 cp 只是在本机进行拷贝不能跨服务器，而且 scp 传输是加密的。可能会稍微影响一下速度。

当你服务器硬盘变为只读 `read only system` 时，用scp可以帮你把文件移出来。

另外，scp 还非常不占资源，不会提高多少系统负荷，在这一点上， rsync 就远远不及它了。

虽然 rsync 比 scp 会快一点，但当小文件众多的情况 下， rsync 会导致硬盘 I/O 非常高，而 scp 基本不影响系统正常使用。

```sh
# scp 命令格式
scp [参数] [原路径] [目标路径]

# 从远处复制到本地 -- 文件：
# 从192.168.120.204机器上的/opt/soft/的目录中下载nginx-0.5.38.tar.gz 文件到本地/opt/soft/目录中
scp root@192.168.120.204:/opt/soft/nginx-0.5.38.tar.gz /opt/soft/

# 从远处复制到本地 -- 文件夹：
# 从192.168.120.204机器上的/opt/soft/中下载mongodb 目录到本地的/opt/soft/目录来
scp -r root@192.168.120.204:/opt/soft/mongodb /opt/soft/

# 上传本地文件到远程机器指定目录
# 复制本地opt/soft/目录下的文件nginx-0.5.38.tar.gz 到远程机器192.168.120.204的opt/soft/scptest目录
scp /opt/soft/nginx-0.5.38.tar.gz root@192.168.120.204:/opt/soft/scptest

# 上传本地目录到远程机器指定目录
# 上传本地目录 /opt/soft/mongodb到远程机器192.168.120.204上/opt/soft/scptest的目录中去
scp -r /opt/soft/mongodb root@192.168.120.204:/opt/soft/scptest

# 如果出现报错 The authenticity of host 192.168.xx.xx can't be established. 则在当前机器执行以下命令登陆 远程机器 192.168.xx.xx ，并输入密码，成功登陆远程机器192.168.xx.xx 后 退出，重新在当前机器执行 scp 命令即可
ssh -o StrictHostKeyChecking=no 192.168.xx.xx
```

## zip、unzip 压缩和解压

参考地址：https://blog.csdn.net/lcathm/article/details/11721751

zip 命令压缩文件或文件夹。

```sh
# 将当前目录下的所有文件和文件夹全部压缩成myfile.zip文件,－r表示递归压缩子目录下所有文件.
zip -r myfile.zip ./*

# unzip 命令，解压文件或文件夹。
unzip file.zip
```
