import{_ as a,o as e,c as s,Q as n}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"Docker 构建 FastAPI 服务容器","description":"","frontmatter":{},"headers":[],"relativePath":"server/docker/Docker搭建FastAPI.md","lastUpdated":1680584985000}'),o={name:"server/docker/Docker搭建FastAPI.md"},l=n(`<h1 id="docker-构建-fastapi-服务容器" tabindex="-1">Docker 构建 FastAPI 服务容器 <a class="header-anchor" href="#docker-构建-fastapi-服务容器" aria-label="Permalink to &quot;Docker 构建 FastAPI 服务容器&quot;">​</a></h1><h2 id="安装-docker" tabindex="-1">安装 docker <a class="header-anchor" href="#安装-docker" aria-label="Permalink to &quot;安装 docker&quot;">​</a></h2><p>安装 <a href="./安装Docker.html">看这里</a> 。</p><h2 id="创建-容器-fastapi-demo" tabindex="-1">创建 容器 fastapi-demo <a class="header-anchor" href="#创建-容器-fastapi-demo" aria-label="Permalink to &quot;创建 容器 fastapi-demo&quot;">​</a></h2><blockquote><p>注： laravel9 的代码路径 <code>/var/www/fastapi-demo/</code></p></blockquote><ul><li>创建容器 fastapi-demo 并启动</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># docker run 创建容器</span></span>
<span class="line"><span style="color:#babed8;"># -d # 后台运行</span></span>
<span class="line"><span style="color:#babed8;"># -p 8082:80 # 映射端口本机8082到容器80</span></span>
<span class="line"><span style="color:#babed8;"># --name fastapi-demo # docker 容器名字 fastapi-demo</span></span>
<span class="line"><span style="color:#babed8;"># -v /etc/localtime:/etc/localtime:ro 容器时间与宿主机时间一致</span></span>
<span class="line"><span style="color:#babed8;"># -v /var/www/:/var/www # 映射网页存放目录【网页代码】</span></span>
<span class="line"><span style="color:#babed8;"># tiangolo/uvicorn-gunicorn-fastapi:python3.7 # 镜像</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">sudo docker run -d \\</span></span>
<span class="line"><span style="color:#babed8;">--name fastapi-demo \\</span></span>
<span class="line"><span style="color:#babed8;">-p 8082:80 \\</span></span>
<span class="line"><span style="color:#babed8;">-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span style="color:#babed8;">-v /var/www/:/var/www \\</span></span>
<span class="line"><span style="color:#babed8;">tiangolo/uvicorn-gunicorn-fastapi:python3.7</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>访问 <a href="http://ip:80821" target="_blank" rel="noreferrer">http://ip:8082</a> ，就可以看到 fastapi demo 首页了</li></ul><blockquote><p>注意：ip 对应的 8082 端口需要开放外部访问权限，否则访问失败</p></blockquote><h2 id="配置-nginx-反向代理支持-域名访问" tabindex="-1">配置 nginx 反向代理支持 域名访问 <a class="header-anchor" href="#配置-nginx-反向代理支持-域名访问" aria-label="Permalink to &quot;配置 nginx 反向代理支持 域名访问&quot;">​</a></h2><p>看这里： <a href="./Docker搭建Nginx反向代理服务器.html">Docker搭建Nginx反向代理服务器</a></p>`,11),t=[l];function p(r,c,i,d,b,h){return e(),s("div",null,t)}const u=a(o,[["render",p]]);export{m as __pageData,u as default};
