import{_ as s,c as a,o as n,a5 as p}from"./chunks/framework.CJNr4pYi.js";const _=JSON.parse('{"title":"Ubuntu 安装宝塔面板","description":"","frontmatter":{},"headers":[],"relativePath":"docker/Ubuntu安装宝塔面板.md","filePath":"docker/Ubuntu安装宝塔面板.md","lastUpdated":1722327281000}'),e={name:"docker/Ubuntu安装宝塔面板.md"},t=p(`<h1 id="ubuntu-安装宝塔面板" tabindex="-1">Ubuntu 安装宝塔面板 <a class="header-anchor" href="#ubuntu-安装宝塔面板" aria-label="Permalink to &quot;Ubuntu 安装宝塔面板&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull ubuntu:latest</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在运行容器的时候，给容器加特权，及加上 --privileged=true 参数， 否则 挂载目录时会提示无权限</span></span>
<span class="line"><span># 挂载目录要注意： ~/www:/www 会与宝塔安装脚本冲突导致宝塔安装失败，所以要挂到 :/www1 去，TODO：后续优化</span></span>
<span class="line"><span>docker run -itd \\</span></span>
<span class="line"><span>--name ubuntu-test \\</span></span>
<span class="line"><span>-p 888:888 \\</span></span>
<span class="line"><span>-p 8888:8888 \\</span></span>
<span class="line"><span>-p 8085:80 \\</span></span>
<span class="line"><span>-p 444:443 \\</span></span>
<span class="line"><span>-p 3308:3306 \\</span></span>
<span class="line"><span>-v ~/www:/www \\</span></span>
<span class="line"><span>--privileged=true \\</span></span>
<span class="line"><span>ubuntu:latest</span></span></code></pre></div><ul><li>进入容器操作</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker exec -it ubuntu-test bash</span></span></code></pre></div><ul><li>ubuntu 安装宝塔面板</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apt update</span></span>
<span class="line"><span>apt install wget</span></span>
<span class="line"><span>apt install sudo</span></span>
<span class="line"><span>wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh</span></span>
<span class="line"><span>sudo bash install.sh ed8484bec</span></span>
<span class="line"><span># 地区选 亚洲 6.Asia ，时区选 上海 70.Shanghai</span></span></code></pre></div>`,6),l=[t];function i(c,u,d,o,r,h){return n(),a("div",null,l)}const g=s(e,[["render",i]]);export{_ as __pageData,g as default};
