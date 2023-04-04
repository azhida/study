import{_ as e,o as a,c as s,Q as o}from"./chunks/framework.92222dd1.js";const b=JSON.parse('{"title":"Docker 镜像发布","description":"","frontmatter":{},"headers":[],"relativePath":"server/Docker/Docker镜像发布.md","lastUpdated":null}'),n={name:"server/Docker/Docker镜像发布.md"},c=o(`<h1 id="docker-镜像发布" tabindex="-1">Docker 镜像发布 <a class="header-anchor" href="#docker-镜像发布" aria-label="Permalink to &quot;Docker 镜像发布&quot;">​</a></h1><h2 id="创建-docker-仓库" tabindex="-1">创建 Docker 仓库 <a class="header-anchor" href="#创建-docker-仓库" aria-label="Permalink to &quot;创建 Docker 仓库&quot;">​</a></h2><ul><li>登录: <a href="https://hub.docker.com/" target="_blank" rel="noreferrer">https://hub.docker.com/</a></li><li>先注册申请一个自己的账号</li><li>创建自己的Docker仓库【如：docker-test】</li></ul><h2 id="登录-dockerhub-仓库" tabindex="-1">登录 DockerHub 仓库 <a class="header-anchor" href="#登录-dockerhub-仓库" aria-label="Permalink to &quot;登录 DockerHub 仓库&quot;">​</a></h2><blockquote><p>注意：在本地 CMD 窗口执行</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># docker login -u 【用户名】 -p 【密码】</span></span>
<span class="line"><span style="color:#A6ACCD;"># 注意：该命令会在本地获取全部权限，存在安全隐患，推荐做法是使用 权限有限的 token 进行登录操作</span></span>
<span class="line"><span style="color:#A6ACCD;">docker login -u user_name -p password</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="生成标准镜像名" tabindex="-1">生成标准镜像名 <a class="header-anchor" href="#生成标准镜像名" aria-label="Permalink to &quot;生成标准镜像名&quot;">​</a></h2><blockquote><p>注意，我们发布镜像的名称有严格的规范，如果不符合这个规范，镜像就有可能发布失败。<br> 镜像的名称必须是“用户名/仓库名”的格式。</p></blockquote><p>如果当前没有该格式的镜像，那么我们可以使用docker tag命令生成一个Docker镜像。docker tag命令格式如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看镜像列表</span></span>
<span class="line"><span style="color:#A6ACCD;">docker image ls</span></span>
<span class="line"><span style="color:#A6ACCD;"># docker tag 【原镜像名】 【新的镜像名】</span></span>
<span class="line"><span style="color:#A6ACCD;">docker tag old_image_name azhida/php7.4-swoole</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="推送镜像到-dockerhun-仓库" tabindex="-1">推送镜像到 DockerHun 仓库 <a class="header-anchor" href="#推送镜像到-dockerhun-仓库" aria-label="Permalink to &quot;推送镜像到 DockerHun 仓库&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># docker push 【镜像名】</span></span>
<span class="line"><span style="color:#A6ACCD;">docker push azhida/php7.4-swoole:latest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>注意：一定用先登录，否则报错 <code>denied: requested access to the resource is denied</code></p></blockquote><h2 id="创建-dockerhub-的访问-token" tabindex="-1">创建 DockerHub 的访问 token <a class="header-anchor" href="#创建-dockerhub-的访问-token" aria-label="Permalink to &quot;创建 DockerHub 的访问 token&quot;">​</a></h2><p>文档：<a href="https://docs.docker.com/docker-hub/access-tokens/" target="_blank" rel="noreferrer">https://docs.docker.com/docker-hub/access-tokens/</a></p><ul><li>访问操作地址： <a href="https://hub.docker.com/settings/security" target="_blank" rel="noreferrer">https://hub.docker.com/settings/security</a></li><li>创建 token：点击按钮 <code>New Access Token</code></li></ul>`,16),r=[c];function t(l,p,i,d,k,h){return a(),s("div",null,r)}const _=e(n,[["render",t]]);export{b as __pageData,_ as default};
