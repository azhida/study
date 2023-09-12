import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const u=JSON.parse('{"title":"Docker 搭建 Nginx 反向代理服务器访问多个子域名站点","description":"","frontmatter":{},"headers":[],"relativePath":"server/docker/Docker搭建Nginx反向代理服务器.md","lastUpdated":1680584985000}'),l={name:"server/docker/Docker搭建Nginx反向代理服务器.md"},p=e(`<h1 id="docker-搭建-nginx-反向代理服务器访问多个子域名站点" tabindex="-1">Docker 搭建 Nginx 反向代理服务器访问多个子域名站点 <a class="header-anchor" href="#docker-搭建-nginx-反向代理服务器访问多个子域名站点" aria-label="Permalink to &quot;Docker 搭建 Nginx 反向代理服务器访问多个子域名站点&quot;">​</a></h1><h2 id="架构" tabindex="-1">架构 <a class="header-anchor" href="#架构" aria-label="Permalink to &quot;架构&quot;">​</a></h2><table><thead><tr><th>域名</th><th>容器名称</th><th>占用端口</th></tr></thead><tbody><tr><td>aa.test</td><td>nginx-test-aa</td><td>8079</td></tr><tr><td>bb.test</td><td>nginx-test-bb</td><td>8078</td></tr><tr><td>cc.test</td><td>nginx-test-cc</td><td>8077</td></tr><tr><td>proxy.test</td><td>nginx_proxy</td><td>80</td></tr></tbody></table><h2 id="安装-docker" tabindex="-1">安装 docker <a class="header-anchor" href="#安装-docker" aria-label="Permalink to &quot;安装 docker&quot;">​</a></h2><p>安装 <a href="./安装Docker.html">看这里</a> 。</p><h2 id="创建容器-nginx-proxy-来做代理转发" tabindex="-1">创建容器 nginx_proxy 来做代理转发 <a class="header-anchor" href="#创建容器-nginx-proxy-来做代理转发" aria-label="Permalink to &quot;创建容器 nginx_proxy 来做代理转发&quot;">​</a></h2><ul><li>拉取 nginx 镜像</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker pull nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>创建 nginx_proxy 配置文件目录</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo mkdir -p /mydockerdata/nginx_proxy/{log,code,conf.d}/</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>写站点内容</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo echo &#39;proxy.test&#39; &gt; /mydockerdata/nginx_proxy/code/index.html</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>编辑 nginx_proxy 的站点配置文件</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo vim /mydockerdata/nginx_proxy/conf.d/default.conf</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>写入内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">server{</span></span>
<span class="line"><span style="color:#babed8;">    server_name proxy.test;</span></span>
<span class="line"><span style="color:#babed8;">    listen 80;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    # 如果开启 https 则开启 443端口 并配置 ssl 配置项 ，否则 注释</span></span>
<span class="line"><span style="color:#babed8;">    # https 配置开始</span></span>
<span class="line"><span style="color:#babed8;">    listen 443 ssl;    #表示监听443端口即https</span></span>
<span class="line"><span style="color:#babed8;">    ssl_certificate /root/ssl/default.pem;      # 证书公钥文件路径</span></span>
<span class="line"><span style="color:#babed8;">    ssl_certificate_key /root/ssl/default.key;  # 证书私钥文件路径</span></span>
<span class="line"><span style="color:#babed8;">    ssl_session_timeout 5m;                     #5分钟session会话保持</span></span>
<span class="line"><span style="color:#babed8;">    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="color:#babed8;">    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span style="color:#babed8;">    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span style="color:#babed8;">    # https 配置结束</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    location / {</span></span>
<span class="line"><span style="color:#babed8;">        root   /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#babed8;">        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#babed8;">    location = /50x.html {</span></span>
<span class="line"><span style="color:#babed8;">        root   /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>创建容器 nginx_proxy</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># docker run 创建容器</span></span>
<span class="line"><span style="color:#babed8;"># -d # 后台运行</span></span>
<span class="line"><span style="color:#babed8;"># -p 80:80 # 映射端口本机80到容器80</span></span>
<span class="line"><span style="color:#babed8;"># -p 443:443 # 映射端口本机 443到容器443，配置 https 访问需要</span></span>
<span class="line"><span style="color:#babed8;"># --name nginx_proxy # docker 容器的名字 nginx_proxy</span></span>
<span class="line"><span style="color:#babed8;"># -v /etc/localtime:/etc/localtime:ro 容器时间与宿主机时间一致</span></span>
<span class="line"><span style="color:#babed8;"># -v /mydockerdata/nginx_proxy/log/:/var/log/nginx # 映射log文件目录</span></span>
<span class="line"><span style="color:#babed8;"># -v /mydockerdata/nginx_proxy/code/:/usr/share/nginx/html # 映射网页存放目录【网页代码】</span></span>
<span class="line"><span style="color:#babed8;"># -v /mydockerdata/nginx_proxy/conf.d/:/etc/nginx/conf.d # 映射配置文件夹</span></span>
<span class="line"><span style="color:#babed8;"># -v /root/ssl/:/root/ssl # 可以配置 ssl 证书</span></span>
<span class="line"><span style="color:#babed8;"># nginx # 镜像</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">sudo docker run -d \\</span></span>
<span class="line"><span style="color:#babed8;">-p 80:80 \\</span></span>
<span class="line"><span style="color:#babed8;">-p 443:443 \\</span></span>
<span class="line"><span style="color:#babed8;">--name nginx_proxy \\</span></span>
<span class="line"><span style="color:#babed8;">-v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span style="color:#babed8;">-v /mydockerdata/nginx_proxy/log/:/var/log/nginx \\</span></span>
<span class="line"><span style="color:#babed8;">-v /mydockerdata/nginx_proxy/code/:/usr/share/nginx/html \\</span></span>
<span class="line"><span style="color:#babed8;">-v /mydockerdata/nginx_proxy/conf.d/:/etc/nginx/conf.d \\</span></span>
<span class="line"><span style="color:#babed8;">-v /root/ssl/:/root/ssl \\</span></span>
<span class="line"><span style="color:#babed8;">nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>查看容器列表状态，确保容器正常运行</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker ps -a</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>访问 <a href="http://ip" target="_blank" rel="noreferrer">http://ip</a> 或者 <a href="https://ip" target="_blank" rel="noreferrer">https://ip</a> 就可以看到内容 <code>proxy.test</code> 了。 <blockquote><p>注意：80 端口 和 443 端口需要开放访问权限，否则无法访问！</p></blockquote></li></ul><h2 id="创建容器-nginx-test-aa" tabindex="-1">创建容器 nginx-test-aa <a class="header-anchor" href="#创建容器-nginx-test-aa" aria-label="Permalink to &quot;创建容器 nginx-test-aa&quot;">​</a></h2><ul><li>创建 nginx-test-aa 配置文件目录</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo mkdir -p /mydockerdata/nginx-test-aa/{log,code,conf.d}/</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>创建容器 nginx-test-aa</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker run -d \\</span></span>
<span class="line"><span style="color:#babed8;">-p 8079:80 \\</span></span>
<span class="line"><span style="color:#babed8;">--name nginx-test-aa \\</span></span>
<span class="line"><span style="color:#babed8;">-v /mydockerdata/nginx-test-aa/log/:/var/log/nginx \\</span></span>
<span class="line"><span style="color:#babed8;">-v /mydockerdata/nginx-test-aa/code/:/usr/share/nginx/html \\</span></span>
<span class="line"><span style="color:#babed8;">-v /mydockerdata/nginx-test-aa/conf.d/:/etc/nginx/conf.d \\</span></span>
<span class="line"><span style="color:#babed8;">nginx</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>编辑站点配置文件</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo vim /mydockerdata/nginx-test-aa/conf.d/default.conf</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">    listen       80;</span></span>
<span class="line"><span style="color:#babed8;">    listen  [::]:80;</span></span>
<span class="line"><span style="color:#babed8;">    server_name  aa.test;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    location / {</span></span>
<span class="line"><span style="color:#babed8;">        root   /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#babed8;">        index  index.html index.htm;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>写 站点内容</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo echo &#39;aa.test&#39; &gt; /mydockerdata/nginx-test-aa/code/index.html</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>重启容器 nginx-test-aa</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker restart nginx-test-aa</span></span>
<span class="line"><span style="color:#babed8;">sudo docker ps -a</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li><p>访问 <a href="http://ip:8079" target="_blank" rel="noreferrer">http://ip:8079</a> 就可以看到内容 aa.test 了</p><blockquote><p>注意：要开启 8079 端口访问权限</p></blockquote></li><li><p>获取 容器 nginx-test-aa 的 IP 地址</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker inspect nginx-test-aa</span></span>
<span class="line"><span style="color:#babed8;"># &quot;IPAddress&quot;: &quot;172.17.0.9&quot;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><blockquote><p>这一步特别注意：<br> 如果代理服务器和被代理服务器是同一台服务器，则可以直接用 <code>sudo docker inspect nginx-test-aa</code> 获取内部 IP 地址<br> 如果代理服务器和被代理服务器不是同一台服务器，但属于同一个服务商，则可以使用服务商分配的 私有 IP 地址<br> 如果代理服务器和被代理服务器不是同一台服务器，也属于同一个服务商，则只能 公网 IP 地址</p></blockquote><ul><li>添加 代理站点 配置文件</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo vim /mydockerdata/nginx_proxy/conf.d/aa.test.conf</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>内容</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">server {</span></span>
<span class="line"><span style="color:#babed8;">    server_name aa.test;</span></span>
<span class="line"><span style="color:#babed8;">    listen 80;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    # 配置 https 就写这段，否则删除</span></span>
<span class="line"><span style="color:#babed8;">    # https 配置开始</span></span>
<span class="line"><span style="color:#babed8;">    listen 443 ssl;</span></span>
<span class="line"><span style="color:#babed8;">    ssl_certificate /root/ssl/aa.test.pem;      # 证书公钥文件路径</span></span>
<span class="line"><span style="color:#babed8;">    ssl_certificate_key /root/ssl/aa.test.key;  # 证书私钥文件路径</span></span>
<span class="line"><span style="color:#babed8;">    ssl_session_timeout 5m;                     #5分钟session会话保持</span></span>
<span class="line"><span style="color:#babed8;">    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="color:#babed8;">    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span style="color:#babed8;">    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span style="color:#babed8;">    # https 配置结束</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    location / {</span></span>
<span class="line"><span style="color:#babed8;">        proxy_redirect off;</span></span>
<span class="line"><span style="color:#babed8;">        proxy_set_header Host $host;</span></span>
<span class="line"><span style="color:#babed8;">        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span style="color:#babed8;">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#babed8;">        # proxy_pass http://[IP地址]:8079;</span></span>
<span class="line"><span style="color:#babed8;">        proxy_pass http://172.17.0.9:80;</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><blockquote><p>特别提醒：<br> 如果 <code>proxy_pass http://[IP地址]:8079;</code> 中 IP 地址 是公网 IP，则 服务器必须开启 8079 端口的外部访问权限，否则无法访问无法代理。</p></blockquote><ul><li>重启容器前的配置文件检测（一定要做，避免重启失败到时服务宕机影响其他的被代理站点）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 进入 nginx_proxy 容器</span></span>
<span class="line"><span style="color:#babed8;">sudo docker exec -it nginx_proxy nginx -t</span></span>
<span class="line"><span style="color:#babed8;"># 检测配置文件 （看到检测结果 ok 说明配置文件没问题，否则就要排查）</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>重启 nginx_proxy 容器（注意：重启前对 容器 nginx_proxy 的配置文件进行检测 ）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo docker restart nginx_proxy</span></span>
<span class="line"><span style="color:#babed8;"># 查看容器列表状态</span></span>
<span class="line"><span style="color:#babed8;">sudo docker ps -a</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><blockquote><p>浏览器访问 <code>http://aa.test</code> 就可以看到网站内容 <code>aa.test</code> 了。</p></blockquote><blockquote><p>容器 nginx-test-bb 、 nginx-test-cc 创建方法与 nginx-test-aa 类似，注意修改端口号 和 代理的 内部 IP 地址即可。</p></blockquote>`,48),o=[p];function t(c,i,r,d,b,y){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
