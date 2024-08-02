# Git 添加 SSH 秘钥


## 生成/添加SSH公钥(本地)
```
# ssh-keygen -t rsa -C "这里输入你的邮箱@xxxxx.com"
ssh-keygen -t rsa -C "test@qq.com"
# 然后一路回车即可
```

## 查看 `~/.ssh/id_rsa.pub` 文件内容，获取公钥 public key
```
cat ~/.ssh/id_rsa.pub
```
> 大概长这样：  
> ```
> ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....
> ```


## 复制生成的公钥，添加到 gitee 仓库中
- 路径：仓库主页 「管理」->「部署公钥管理」->「添加部署公钥」

## 添加后，在终端（Terminal）中输入
```
ssh -T git@gitee.com
```

## 更换仓库地址 【https => ssh】
```
git remote set-url origin https://gitee.com/xx/xx.git (新地址 -- 更新)
```