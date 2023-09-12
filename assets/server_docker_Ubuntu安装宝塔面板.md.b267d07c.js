import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const y=JSON.parse('{"title":"Ubuntu 安装宝塔面板","description":"","frontmatter":{},"headers":[],"relativePath":"server/docker/Ubuntu安装宝塔面板.md","lastUpdated":1680584985000}'),l={name:"server/docker/Ubuntu安装宝塔面板.md"},p=e(`<h1 id="ubuntu-安装宝塔面板" tabindex="-1">Ubuntu 安装宝塔面板 <a class="header-anchor" href="#ubuntu-安装宝塔面板" aria-label="Permalink to &quot;Ubuntu 安装宝塔面板&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">docker pull ubuntu:latest</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 在运行容器的时候，给容器加特权，及加上 --privileged=true 参数， 否则 挂载目录时会提示无权限</span></span>
<span class="line"><span style="color:#babed8;"># 挂载目录要注意： ~/www:/www 会与宝塔安装脚本冲突导致宝塔安装失败，所以要挂到 :/www1 去，TODO：后续优化</span></span>
<span class="line"><span style="color:#babed8;">docker run -itd \\</span></span>
<span class="line"><span style="color:#babed8;">--name ubuntu-test \\</span></span>
<span class="line"><span style="color:#babed8;">-p 888:888 \\</span></span>
<span class="line"><span style="color:#babed8;">-p 8888:8888 \\</span></span>
<span class="line"><span style="color:#babed8;">-p 8085:80 \\</span></span>
<span class="line"><span style="color:#babed8;">-p 444:443 \\</span></span>
<span class="line"><span style="color:#babed8;">-p 3308:3306 \\</span></span>
<span class="line"><span style="color:#babed8;">-v ~/www:/www \\</span></span>
<span class="line"><span style="color:#babed8;">--privileged=true \\</span></span>
<span class="line"><span style="color:#babed8;">ubuntu:latest</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>进入容器操作</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">docker exec -it ubuntu-test bash</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>ubuntu 安装宝塔面板</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">apt update</span></span>
<span class="line"><span style="color:#babed8;">apt install wget</span></span>
<span class="line"><span style="color:#babed8;">apt install sudo</span></span>
<span class="line"><span style="color:#babed8;">wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh</span></span>
<span class="line"><span style="color:#babed8;">sudo bash install.sh ed8484bec</span></span>
<span class="line"><span style="color:#babed8;"># 地区选 亚洲 6.Asia ，时区选 上海 70.Shanghai</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,6),t=[p];function o(c,i,b,r,d,u){return a(),n("div",null,t)}const h=s(l,[["render",o]]);export{y as __pageData,h as default};
