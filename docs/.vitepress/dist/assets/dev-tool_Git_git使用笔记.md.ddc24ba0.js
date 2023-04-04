import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"dev-tool/Git/git使用笔记.md","lastUpdated":1680584985000}'),e={name:"dev-tool/Git/git使用笔记.md"},p=l(`<h6 id="初始化项目" tabindex="-1">初始化项目 <a class="header-anchor" href="#初始化项目" aria-label="Permalink to &quot;初始化项目&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="克隆-指定账户密码" tabindex="-1">克隆 指定账户密码 <a class="header-anchor" href="#克隆-指定账户密码" aria-label="Permalink to &quot;克隆 指定账户密码&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># https://gitee.com/wghzhida/study.git 为例</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone https://账户:密码@gitee.com/wghzhida/study.git</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone https://username:password@gitee.com/username/test.git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="克隆-指定分支-dev分支" tabindex="-1">克隆 指定分支 dev分支 <a class="header-anchor" href="#克隆-指定分支-dev分支" aria-label="Permalink to &quot;克隆 指定分支 dev分支&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone -b dev https://xxx.git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="解决中文乱码" tabindex="-1">解决中文乱码： <a class="header-anchor" href="#解决中文乱码" aria-label="Permalink to &quot;解决中文乱码：&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># git status 乱码</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global core.quotepath false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># git commit 乱码</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global i18n.commitencoding utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># git status 乱码</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global i18n.logoutputencoding utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 注：如果是Linux系统，需要设置环境变量 export LESSCHARSET=utf-8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="修改用户名和提交的邮箱" tabindex="-1">修改用户名和提交的邮箱 <a class="header-anchor" href="#修改用户名和提交的邮箱" aria-label="Permalink to &quot;修改用户名和提交的邮箱&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git config  --global user.name &#39;test_user_name&#39;；</span></span>
<span class="line"><span style="color:#A6ACCD;">git config  --global user.email &#39;test@test.com&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="本地存储的账号密码-凭据" tabindex="-1">本地存储的账号密码（凭据） <a class="header-anchor" href="#本地存储的账号密码-凭据" aria-label="Permalink to &quot;本地存储的账号密码（凭据）&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看凭据</span></span>
<span class="line"><span style="color:#A6ACCD;">cat ~/.git-credentials</span></span>
<span class="line"><span style="color:#A6ACCD;"># 修改本地存储的账号密码（凭据）</span></span>
<span class="line"><span style="color:#A6ACCD;">vim ~/.git-credentials</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 将凭证用明文的形式存放在磁盘中</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global credential.helper store</span></span>
<span class="line"><span style="color:#A6ACCD;">#配置到缓存 默认15分钟</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global credential.helper cache</span></span>
<span class="line"><span style="color:#A6ACCD;">#修改缓存时间</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global credential.helper &#39;cache --timeout=3600&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除保存的凭证</span></span>
<span class="line"><span style="color:#A6ACCD;">vim ~/.git-credentials</span></span>
<span class="line"><span style="color:#A6ACCD;"># 禁止使用缓存凭据</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global --unset credential.helper</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --unset credential.helper</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="清理项目-命令-git-clean-作用是清理项目-f-是强制清理文件的设置-d-选项命令连文件夹一并清除。" tabindex="-1">清理项目，命令 git clean 作用是清理项目，-f 是强制清理文件的设置，-d 选项命令连文件夹一并清除。 <a class="header-anchor" href="#清理项目-命令-git-clean-作用是清理项目-f-是强制清理文件的设置-d-选项命令连文件夹一并清除。" aria-label="Permalink to &quot;清理项目，命令 git clean 作用是清理项目，-f 是强制清理文件的设置，-d 选项命令连文件夹一并清除。&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clean -f -d</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="合并分支。将-dev分支-合并到当前分支上。" tabindex="-1">合并分支。将 dev分支 合并到当前分支上。 <a class="header-anchor" href="#合并分支。将-dev分支-合并到当前分支上。" aria-label="Permalink to &quot;合并分支。将 dev分支 合并到当前分支上。&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git merge dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="https永久记住用户名和密码" tabindex="-1">https永久记住用户名和密码 <a class="header-anchor" href="#https永久记住用户名和密码" aria-label="Permalink to &quot;https永久记住用户名和密码&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git config --global credential.helper store</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="credential-helper-store-命令不生效的解决办法" tabindex="-1">credential.helper store 命令不生效的解决办法 <a class="header-anchor" href="#credential-helper-store-命令不生效的解决办法" aria-label="Permalink to &quot;credential.helper store 命令不生效的解决办法&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看 credential.helper=manager 命令是否生效，credential.helper=manager 说明未生效</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 执行命令 去掉 manager 参数【任选其一即可】</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --system --unset credential.helper</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global --unset credential.helper</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 执行 git config –global credential.helper store</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global credential.helper store</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="查看提交的历史版本" tabindex="-1">查看提交的历史版本 <a class="header-anchor" href="#查看提交的历史版本" aria-label="Permalink to &quot;查看提交的历史版本&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看全部历史版本</span></span>
<span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看全部历史版本【列出修改的文件】</span></span>
<span class="line"><span style="color:#A6ACCD;">git log --stat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看提交的历史版本【列出最后3个历史版本】【列出修改的文件】</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -3 --stat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看提交的历史版本【单文件】</span></span>
<span class="line"><span style="color:#A6ACCD;">git log filename</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看提交的历史版本【单文件】【变动内容】</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -p filename</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看提交的历史版本【单版本】【变动内容】</span></span>
<span class="line"><span style="color:#A6ACCD;">git show commit_id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看提交的历史版本【单版本】【变动内容】【单文件】</span></span>
<span class="line"><span style="color:#A6ACCD;">git show commit_id filename</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="git-reset-使用说明" tabindex="-1">git reset 使用说明 <a class="header-anchor" href="#git-reset-使用说明" aria-label="Permalink to &quot;git reset 使用说明&quot;">​</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 1、不删除工作空间提交的代码，撤销 commit，并且撤销 git add . 操作。注意：-mixed 为默认参数。git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --mixed HEAD^ 或者 git reset --mixed commit_id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 2、不删除工作空间提交的代码，撤销 commit，但不撤销 git add . 操作。注意：就是说仅仅是撤回后，修改的代码仍然保留。</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --soft HEAD^ 或者 git reset --soft commit_id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 3、删除工作空间提交的代码，撤销 commit，并且撤销 git add . 操作。注意：就是说即撤回后，本地提交的代码也不保留。就等于恢复到了上一次的 commit 状态。</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard HEAD^ 或者 git reset --hard commit_id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="修改本地最后一个版本的注释" tabindex="-1">修改本地最后一个版本的注释 <a class="header-anchor" href="#修改本地最后一个版本的注释" aria-label="Permalink to &quot;修改本地最后一个版本的注释&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git commit --amend</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="更换远程仓库地址" tabindex="-1">更换远程仓库地址 <a class="header-anchor" href="#更换远程仓库地址" aria-label="Permalink to &quot;更换远程仓库地址&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote -v  #查看远端地址</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote #查看远端仓库名</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote set-url origin https://gitee.com/xx/xx.git (新地址 -- 更新)</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin https://gitee.com/xx/xx.git (新地址 -- 添加)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="彻底删除某一文件及其提交历史【对于错误提交机密文件有用】" tabindex="-1">彻底删除某一文件及其提交历史【对于错误提交机密文件有用】 <a class="header-anchor" href="#彻底删除某一文件及其提交历史【对于错误提交机密文件有用】" aria-label="Permalink to &quot;彻底删除某一文件及其提交历史【对于错误提交机密文件有用】&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 删除包括历史</span></span>
<span class="line"><span style="color:#A6ACCD;">git filter-branch --force --index-filter &#39;git rm --cached --ignore-unmatch 文件相对路径&#39; --prune-empty --tag-name-filter cat -- --all</span></span>
<span class="line"><span style="color:#A6ACCD;"># 同步到远程</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin master --force</span></span>
<span class="line"><span style="color:#A6ACCD;"># 注意：如果设置了忽略文件，一定在提交之前就设置好，提交后的同样会被git管理</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="删除-dev-分支-【任何时候-都要慎用】" tabindex="-1">删除 dev 分支 【任何时候，都要慎用】 <a class="header-anchor" href="#删除-dev-分支-【任何时候-都要慎用】" aria-label="Permalink to &quot;删除 dev 分支 【任何时候，都要慎用】&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 先切换到master分支【不要在dev分支下，否则无法删除】</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除本地 dev分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -D dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除远程 dev分支【一旦执行，就找不回来了】</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin --delete dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h4><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 克隆 指定分支 dev分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://xxx.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 初始化</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将项目所有文件纳入到 Git 中</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检查 Git 状态</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 保留改动并提交 -- 该命令会将暂存区的文件都提交到 Git，-m 选项后面带的参数表示本次提交的简单描述。</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Initial commit</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看历史提交记录，按 q 可退出查看</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 恢复被删除文件 -- git checkout -f 的作用是将在暂存区的更改文件进行强制撤销</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 基于当前所在分支新建一个赤裸裸的 new_branch分支，没有任何的提交历史，但是当前分支的内容一一俱全。</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--orphan</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">new_branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 从远程master分支拉取代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将本地代码推送远程master分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span></code></pre></div><h6 id="github-开启-页面访问" tabindex="-1">github 开启 页面访问 <a class="header-anchor" href="#github-开启-页面访问" aria-label="Permalink to &quot;github 开启 页面访问&quot;">​</a></h6><ul><li>访问 <a href="https://github.com/azhida/study" target="_blank" rel="noreferrer">https://github.com/azhida/study</a></li><li>点击 Settings</li><li>选择 Pages</li><li>配置相关信息保存即可</li></ul><h6 id="github-拉取代码时所用-token-配置方法" tabindex="-1">github 拉取代码时所用 token 配置方法 <a class="header-anchor" href="#github-拉取代码时所用-token-配置方法" aria-label="Permalink to &quot;github 拉取代码时所用 token 配置方法&quot;">​</a></h6><ul><li>访问 <a href="https://github.com/settings/profile" target="_blank" rel="noreferrer">https://github.com/settings/profile</a></li><li>选择 Developer settings</li><li>选择 Personal access tokens</li><li>点击 generate new token 【也可以选择原来已经生成但失效或者忘记token的重新刷新并保存即可】</li><li>按提示选择并生成即可</li></ul><h6 id="利用-git-subtree-将-master-分支指定目录-dist-推送到远程-dist-分支上" tabindex="-1">利用 <code>git subtree</code> 将 <code>master</code> 分支指定目录 <code>dist</code> 推送到远程 <code>dist</code> 分支上 <a class="header-anchor" href="#利用-git-subtree-将-master-分支指定目录-dist-推送到远程-dist-分支上" aria-label="Permalink to &quot;利用 \`git subtree\` 将 \`master\` 分支指定目录 \`dist\` 推送到远程 \`dist\` 分支上&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git subtree push --prefix=dist origin dist</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>todo 如果推送发生冲突，我也还不知道怎么解决，目前我只是把 dist 分支删除了重新推送</p>`,41),t=[p];function o(i,c,r,C,A,d){return a(),n("div",null,t)}const y=s(e,[["render",o]]);export{h as __pageData,y as default};
