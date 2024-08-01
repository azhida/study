import{_ as a,c as s,o as n,a3 as e}from"./chunks/framework.CFZOmcOm.js";const m=JSON.parse('{"title":"Docker 构建 FastAPI 服务容器","description":"","frontmatter":{},"headers":[],"relativePath":"docker/Docker搭建FastAPI.md","filePath":"docker/Docker搭建FastAPI.md","lastUpdated":1722327281000}'),p={name:"docker/Docker搭建FastAPI.md"},o=e(`<h1 id="docker-构建-fastapi-服务容器" tabindex="-1">Docker 构建 FastAPI 服务容器 <a class="header-anchor" href="#docker-构建-fastapi-服务容器" aria-label="Permalink to &quot;Docker 构建 FastAPI 服务容器&quot;">​</a></h1><h2 id="安装-docker" tabindex="-1">安装 docker <a class="header-anchor" href="#安装-docker" aria-label="Permalink to &quot;安装 docker&quot;">​</a></h2><p>安装 <a href="./安装Docker">看这里</a> 。</p><h2 id="创建-容器-fastapi-demo" tabindex="-1">创建 容器 fastapi-demo <a class="header-anchor" href="#创建-容器-fastapi-demo" aria-label="Permalink to &quot;创建 容器 fastapi-demo&quot;">​</a></h2><blockquote><p>注： laravel9 的代码路径 <code>/var/www/fastapi-demo/</code></p></blockquote><ul><li>创建容器 fastapi-demo 并启动</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># docker run 创建容器</span></span>
<span class="line"><span># -d # 后台运行</span></span>
<span class="line"><span># -p 8082:80 # 映射端口本机8082到容器80</span></span>
<span class="line"><span># --name fastapi-demo # docker 容器名字 fastapi-demo</span></span>
<span class="line"><span># -v /etc/localtime:/etc/localtime:ro 容器时间与宿主机时间一致</span></span>
<span class="line"><span># -v /var/www/:/var/www # 映射网页存放目录【网页代码】</span></span>
<span class="line"><span># tiangolo/uvicorn-gunicorn-fastapi:python3.7 # 镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo docker run -d \\</span></span>
<span class="line"><span>--name fastapi-demo \\</span></span>
<span class="line"><span>-p 8082:80 \\</span></span>
<span class="line"><span>-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span>-v /var/www/:/var/www \\</span></span>
<span class="line"><span>tiangolo/uvicorn-gunicorn-fastapi:python3.7</span></span></code></pre></div><ul><li>访问 <a href="http://ip:80821" target="_blank" rel="noreferrer">http://ip:8082</a> ，就可以看到 fastapi demo 首页了</li></ul><blockquote><p>注意：ip 对应的 8082 端口需要开放外部访问权限，否则访问失败</p></blockquote><h2 id="配置-nginx-反向代理支持-域名访问" tabindex="-1">配置 nginx 反向代理支持 域名访问 <a class="header-anchor" href="#配置-nginx-反向代理支持-域名访问" aria-label="Permalink to &quot;配置 nginx 反向代理支持 域名访问&quot;">​</a></h2><p>看这里： <a href="./Docker搭建Nginx反向代理服务器">Docker搭建Nginx反向代理服务器</a></p>`,11),t=[o];function i(c,l,r,d,h,k){return n(),s("div",null,t)}const f=a(p,[["render",i]]);export{m as __pageData,f as default};
