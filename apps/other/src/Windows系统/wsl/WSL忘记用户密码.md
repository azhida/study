# WSL 忘记用户密码

如果忘记 wsl 的用户密码，可以通过以下方式重置用户密码。

用户名： user

- 打开 windows cmd 命令行并执行命令，进入 root 用户

```sh
wsl -u root

# root@DESKTOP-7J6431O:/mnt/c/Users/79040#
```

- 修改密码

```sh
passwd user
```

按提示重置密码即可。