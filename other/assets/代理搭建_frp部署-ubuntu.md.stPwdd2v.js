import{_ as s,c as n,o as p,a3 as e}from"./chunks/framework.Bf7f-acG.js";const u=JSON.parse('{"title":"部署 frp - Linux - Ubuntu","description":"","frontmatter":{},"headers":[],"relativePath":"代理搭建/frp部署-ubuntu.md","filePath":"代理搭建/frp部署-ubuntu.md","lastUpdated":1746496452000}'),l={name:"代理搭建/frp部署-ubuntu.md"};function t(r,a,i,o,c,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="部署-frp-linux-ubuntu" tabindex="-1">部署 frp - Linux - Ubuntu <a class="header-anchor" href="#部署-frp-linux-ubuntu" aria-label="Permalink to &quot;部署 frp - Linux - Ubuntu&quot;">​</a></h1><p><a href="https://gofrp.org/" target="_blank" rel="noreferrer">frp 官网</a></p><h2 id="下载安装" tabindex="-1">下载安装 <a class="header-anchor" href="#下载安装" aria-label="Permalink to &quot;下载安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 下载压缩包，注：这里已提供压缩包</span></span>
<span class="line"><span>wget https://github.com/fatedier/frp/releases/download/v0.39.1/frp_0.39.1_linux_arm64.tar.gz</span></span>
<span class="line"><span># 解压安装包</span></span>
<span class="line"><span>tar -xvf frp_0.39.1_linux_amd64.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd frp_0.39.1_linux_amd64</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 复制到 bin 中</span></span>
<span class="line"><span>sudo cp frpc /usr/bin/  # 服务端</span></span>
<span class="line"><span>sudo cp frps /usr/bin/  # 客户端</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 复制配置文件 - 如果不是新安装则跳过这一步，不然会把旧配置覆盖掉</span></span>
<span class="line"><span>sudo mkdir /etc/frp/</span></span>
<span class="line"><span>sudo cp frp*.ini /etc/frp/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 做系统服务</span></span>
<span class="line"><span>sudo cp systemd/* /lib/systemd/system/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动服务</span></span>
<span class="line"><span>sudo systemctl start frps # 服务端</span></span>
<span class="line"><span>sudo systemctl start frpc # 客户端</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 开机启动</span></span>
<span class="line"><span>sudo systemctl enable frps  # 服务端</span></span>
<span class="line"><span>sudo systemctl enable frpc  # 客户端</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>详细配置信息和方法，看官网文档</p><h3 id="配置服务端" tabindex="-1">配置服务端 <a class="header-anchor" href="#配置服务端" aria-label="Permalink to &quot;配置服务端&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo vim /etc/frp/frps.ini</span></span>
<span class="line"><span>sudo systemctl restart frps</span></span></code></pre></div><h3 id="配置客户端" tabindex="-1">配置客户端 <a class="header-anchor" href="#配置客户端" aria-label="Permalink to &quot;配置客户端&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo vim /etc/frp/frpc.ini</span></span>
<span class="line"><span>sudo systemctl restart frpc</span></span></code></pre></div><h3 id="开启日志" tabindex="-1">开启日志 <a class="header-anchor" href="#开启日志" aria-label="Permalink to &quot;开启日志&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[common]</span></span>
<span class="line"><span># console or real logFile path like ./frps.log or ./frpc.log</span></span>
<span class="line"><span>log_file = /tmp/frps.log</span></span>
<span class="line"><span># trace, debug, info, warn, error</span></span>
<span class="line"><span>log_level = info</span></span>
<span class="line"><span>log_max_days = 3</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><h3 id="端口号开启" tabindex="-1">端口号开启 <a class="header-anchor" href="#端口号开启" aria-label="Permalink to &quot;端口号开启&quot;">​</a></h3><p>记得开启服务端和客户端各自需要用到的端口，<br> 主要看 <code>frpc.ini</code>，<br> 服务端需要开启的端口：<code>server_port</code> 和 所有的 <code>remote_port</code> ；<br> 客户端需要开启的端口：所有的 <code>local_port</code> ；</p><blockquote><p>如何开启端口号，请自行百度</p></blockquote><blockquote><p>注：如果连不上服务端，请再次确认服务端的端口号 <code>server_port</code> 是否已开启，是否已经支持外部访问</p></blockquote><h2 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h2><h3 id="访问客户端主机" tabindex="-1">访问客户端主机 <a class="header-anchor" href="#访问客户端主机" aria-label="Permalink to &quot;访问客户端主机&quot;">​</a></h3><p>通过第三方计算机终端访问 <code>ssh -p 7022 root@x.x.x.x</code> ，输入密码后即可通过 ssh 方式访问linux主机。</p><p>访问成功说明代理成功</p><h2 id="操作命令" tabindex="-1">操作命令 <a class="header-anchor" href="#操作命令" aria-label="Permalink to &quot;操作命令&quot;">​</a></h2><h3 id="操作命令-服务端" tabindex="-1">操作命令 - 服务端 <a class="header-anchor" href="#操作命令-服务端" aria-label="Permalink to &quot;操作命令 - 服务端&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo systemctl enable frps  # 设置开机启动</span></span>
<span class="line"><span>sudo systemctl disable frps # 取消开机启动</span></span>
<span class="line"><span>systemctl status frps       # 查看 frps 服务状态</span></span>
<span class="line"><span>systemctl cat frps          # 查看 frps 服务配置</span></span>
<span class="line"><span>sudo systemctl start frps   # 启动 frps 服务</span></span>
<span class="line"><span>sudo systemctl restart frpc # 重启 frps 服务</span></span>
<span class="line"><span>sudo systemctl stop frps    # 停止 frps 服务</span></span></code></pre></div><h3 id="操作命令-客户端" tabindex="-1">操作命令 - 客户端 <a class="header-anchor" href="#操作命令-客户端" aria-label="Permalink to &quot;操作命令 - 客户端&quot;">​</a></h3><p>客户端的操作命令与服务端类似，只需将 frps 改为 frpc 即可</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://zhuanlan.zhihu.com/p/339604145" target="_blank" rel="noreferrer">使用frp实现内网穿透管理物联网设备</a></p><p><a href="https://zhuanlan.zhihu.com/p/262533456" target="_blank" rel="noreferrer">Ubuntu下安装frp</a></p><p>感谢各路大神指点！</p>`,30)]))}const b=s(l,[["render",t]]);export{u as __pageData,b as default};
