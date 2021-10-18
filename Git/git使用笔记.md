###### 初始化项目
```
git init
```

###### 解决中文乱码：
```
# git status 乱码
git config --global core.quotepath false

# git commit 乱码
git config --global i18n.commitencoding utf-8

# git status 乱码
git config --global i18n.logoutputencoding utf-8

# 注：如果是Linux系统，需要设置环境变量 export LESSCHARSET=utf-8
```
###### 修改用户名和提交的邮箱
```
git config  --global user.name 'test_user_name'；
git config  --global user.email 'test@test.com';
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

###### 删除 dev 分支 【任何时候，都要慎用】
```
# 先切换到master分支【不要在dev分支下，否则无法删除】
git checkout master

# 删除本地 dev分支
git branch -D dev

# 删除远程 dev分支【一旦执行，就找不回来了】
git push origin --delete dev
```

#### 常用命令
```shell
# 初始化
git init

# 将项目所有文件纳入到 Git 中
git add -A

# 检查 Git 状态
git status

# 保留改动并提交 -- 该命令会将暂存区的文件都提交到 Git，-m 选项后面带的参数表示本次提交的简单描述。
git commit -m "Initial commit"

# 查看历史提交记录，按 q 可退出查看
git log

# 恢复被删除文件 -- git checkout -f 的作用是将在暂存区的更改文件进行强制撤销
git checkout -f

# 基于当前所在分支新建一个赤裸裸的 new_branch分支，没有任何的提交历史，但是当前分支的内容一一俱全。
git checkout --orphan  new_branch

# 从远程master分支拉取代码
git pull origin master

# 将本地代码推送远程master分支
git push origin master
```

###### github 开启 页面访问
- 访问 https://github.com/azhida/study
- 点击 Settings
- 选择 Pages
- 配置相关信息保存即可
