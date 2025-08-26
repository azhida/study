# git 将代码同时提交到 gitee 和 github

在开发过程中，我们可能需要将代码同时托管到 GitHub 和 Gitee 上，以方便不同场景下的使用。下面为你介绍具体的操作步骤。

## 前提条件
- 已在本地安装 Git。
- 已在 [GitHub](https://github.com/) 和 [Gitee](https://gitee.com/) 注册账号。
- 已在 GitHub 和 Gitee 上分别创建空的代码仓库。

## 操作步骤
### 1. 初始化本地仓库
如果你还没有初始化本地 Git 仓库，在项目根目录下执行以下命令：
```bash
# 初始化 Git 仓库
git init

# 添加所有文件到暂存区
git add .

# 提交文件到本地仓库
git commit -m "Initial commit"
```

### 2. 添加远程仓库地址
为本地仓库添加 GitHub 和 Gitee 的远程仓库地址。
```bash
# 添加 GitHub 远程仓库地址
git remote add github <GitHub 仓库地址>

# 添加 Gitee 远程仓库地址
git remote add gitee <Gitee 仓库地址>
```
请将 `<GitHub 仓库地址>` 和 `<Gitee 仓库地址>` 替换为你实际创建的仓库地址。仓库地址有 HTTPS 和 SSH 两种格式，可按需选择：
- **HTTPS 格式**：`https://github.com/用户名/仓库名.git`、`https://gitee.com/用户名/仓库名.git`
- **SSH 格式**：`git@github.com:用户名/仓库名.git`、`git@gitee.com:用户名/仓库名.git`

### 3. 推送代码到远程仓库
将本地代码推送到 GitHub 和 Gitee：
```bash
# 推送到 GitHub
git push github main

# 推送到 Gitee
git push gitee main
```
如果你的主分支名为 `master`，则将 `main` 替换为 `master`。

### 4. 设置一次性推送（可选）
为了简化操作，可设置一个别名，一次性将代码推送到两个远程仓库。
#### 方法一：修改配置文件
编辑项目下的 `.git/config` 文件，添加以下内容：
```ini
[remote "all"]
    url = <GitHub 仓库地址>
    url = <Gitee 仓库地址>
```
#### 方法二：使用命令行
```bash
# 添加 all 远程仓库地址
git remote add all <GitHub 仓库地址>

# 为 all 远程仓库添加第二个地址
git remote set-url --add all <Gitee 仓库地址>
```
设置完成后，使用以下命令一次性推送代码到两个仓库：
```bash
# 推送到所有远程仓库
git push all main
```

## 常见问题解决
### 密钥认证失败
如果使用 SSH 地址推送时提示认证失败，需要检查本地是否生成 SSH 密钥，并将公钥添加到 GitHub 和 Gitee 的账户设置中。生成和配置 SSH 密钥的步骤如下：
```bash
# 生成 SSH 密钥（邮箱替换为你注册时使用的邮箱）
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# 查看公钥内容
cat ~/.ssh/id_rsa.pub
```
将输出的公钥内容复制到 GitHub 和 Gitee 的 SSH 密钥设置页面。

### 分支不一致问题
如果本地分支和远程分支名称不一致，需要先创建对应的分支，再进行推送：
```bash
# 创建并切换到新分支
git checkout -b <新分支名>

# 推送到指定远程仓库的指定分支
git push <远程仓库名> <新分支名>
```

通过以上步骤，你就可以方便地将代码同时提交到 GitHub 和 Gitee 了。