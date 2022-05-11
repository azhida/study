# 腾讯云服务器 Centos7.5 挂载数据盘

[腾讯云服务器 Centos7.5 挂载数据盘](https://blog.csdn.net/u010227042/article/details/123129187)  
[云主机(Centos7)磁盘挂载](https://cloud.tencent.com/developer/article/1343954?from=15425)  
[CentOS7 硬盘分区，删除分区，格式化分区硬盘，支持 4T 盘，fdisk，parted 简单用法](https://wenku.baidu.com/view/14f23558a16925c52cc58bd63186bceb19e8ed22.html)

- 第一、检查硬盘设备是否有数据盘
```
# 先执行
fdisk -l
```

- 第二、数据硬盘分区(可选)
```
# 执行
fdisk /dev/vdb
# 依次输入 n 、p、 1、 回车、回车、wq
# 这里的VDA是我们上面看到数据硬盘的名称，如果你不是这个需要根据你真实的盘名称替换，如果是和我一样，那就直接复制。
```

- 第三、ext4格 式化分区
```
mkfs.ext4 /dev/vdb
```

- 第四、挂载新分区
```
# 新建目录
mkdir /data
# 挂载分区
mount /dev/vdb /data
# 如果想卸掉，用命令 umount /dev/vdb
```

- 第五、写入fstab 设置开机自动挂载
```
echo '/dev/vdb /data ext4 defaults 0 0' >> /etc/fstab
```

- 第六、检查是否挂载成功（df -h ）
```
# 执行
df -h
```