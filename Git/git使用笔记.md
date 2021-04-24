###### 初始化项目
```
git init
```

###### git status 显示中文乱码：
```
git config --global core.quotepath false
```


###### 清理项目，命令 git clean 作用是清理项目，-f 是强制清理文件的设置，-d 选项命令连文件夹一并清除。
```
git clean -f -d
```

###### 合并分支。将 dev分支 合并到当前分支上。
```
git merge dev
```

###### https永久记住用户名和密码
```
git config --global credential.helper store
```
###### credential.helper store 命令不生效的解决办法
```
# 查看 credential.helper=manager 命令是否生效，credential.helper=manager 说明未生效
git config --list

# 执行命令 去掉 manager 参数【任选其一即可】
git config --system --unset credential.helper
git config --global --unset credential.helper

# 执行 git config –global credential.helper store
git config --global credential.helper store
```
###### 查看提交的历史版本
```
# 查看全部历史版本
git log

# 查看全部历史版本【列出修改的文件】
git log --stat

# 查看提交的历史版本【列出最后3个历史版本】【列出修改的文件】
git log -3 --stat

# 查看提交的历史版本【单文件】
git log filename

# 查看提交的历史版本【单文件】【变动内容】
git log -p filename

# 查看提交的历史版本【单版本】【变动内容】
git show commit_id

# 查看提交的历史版本【单版本】【变动内容】【单文件】
git show commit_id filename
```

##### git reset 使用说明
```
# 1、不删除工作空间提交的代码，撤销 commit，并且撤销 git add . 操作。注意：-mixed 为默认参数。git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。
git reset --mixed HEAD^ 或者 git reset --mixed commit_id

# 2、不删除工作空间提交的代码，撤销 commit，但不撤销 git add . 操作。注意：就是说仅仅是撤回后，修改的代码仍然保留。
git reset --soft HEAD^ 或者 git reset --soft commit_id

# 3、删除工作空间提交的代码，撤销 commit，并且撤销 git add . 操作。注意：就是说即撤回后，本地提交的代码也不保留。就等于恢复到了上一次的 commit 状态。
git reset --hard HEAD^ 或者 git reset --hard commit_id
```


###### 修改本地最后一个版本的注释
```
git commit --amend
```

###### 更换远程仓库地址
```
git remote -v  #查看远端地址
git remote #查看远端仓库名
git remote set-url origin https://gitee.com/xx/xx.git (新地址 -- 更新)
git remote add origin https://gitee.com/xx/xx.git (新地址 -- 添加)
```


###### 彻底删除某一文件及其提交历史【对于错误提交机密文件有用】
```
# 删除包括历史
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch 文件相对路径' --prune-empty --tag-name-filter cat -- --all
# 同步到远程
git push origin master --force
# 注意：如果设置了忽略文件，一定在提交之前就设置好，提交后的同样会被git管理
```


