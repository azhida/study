# Git 添加 SSH 秘钥


## 生成/添加SSH公钥(本地)

### rsa

```sh
# ssh-keygen -t rsa -C "这里输入你的邮箱@xxxxx.com"
ssh-keygen -t rsa -C "test@qq.com"
# 然后一路回车即可
# 如果需要更新公钥文件为 `/root/.ssh/id_rsa_new`，则
# Enter file in which to save the key (/root/.ssh/id_rsa): /root/.ssh/id_rsa_new
```

### ed25519

```sh
# ssh-keygen -t ed25519 -C "这里输入你的邮箱@xxxxx.com"
ssh-keygen -t ed25519 -C "test@qq.com"
# 然后一路回车即可
# 如果需要更新公钥文件为 `/root/.ssh/id_ed25519_new`，则
# Enter file in which to save the key (/root/.ssh/id_ed25519): /root/.ssh/id_ed25519_new
```

## 查看公钥（本地） 


```sh
cat ~/.ssh/id_rsa.pub
cat ~/.ssh/id_rsa_new.pub
cat ~/.ssh/id_ed25519.pub
cat ~/.ssh/id_ed25519_new.pub
```
> 大概长这样：  
> ```
> ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....
> ```


### 仓库添加公钥

- `gitee` 路径：仓库主页 「管理」->「部署公钥管理」->「添加部署公钥」
- `github` 路径：仓库主页 「Settings」->「Deploy keys」->「Add deploy key」
- 标题：自己起一个公钥的名称，便于自己识别该公钥是对应哪台机器
- 公钥内容：就是 `cat ~/.ssh/id_ed25519.pub` 读到的文件内容


### 本地机器连接

在本地机器终端（Terminal）中输入

```sh
# gitee
ssh -T git@gitee.com
# github
ssh -T git@github.com

# 指定公钥文件
ssh -T git@gitee.com -i /root/.ssh/id_ed25519_new
ssh -T git@github.com -i /root/.ssh/id_ed25519_new
```

报错参考：

[WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED](https://blog.csdn.net/qq_41884002/article/details/123358315)

### 本地更换仓库地址 【https => ssh】

```sh
# gitee
git remote set-url origin git@gitee.com:username/demo.git
# github
git remote set-url origin git@github.com:username/demo.git
```