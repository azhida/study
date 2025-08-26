import{_ as s,c as n,o as e,a3 as p}from"./chunks/framework.Bf7f-acG.js";const u=JSON.parse('{"title":"MacOS 使用笔记","description":"","frontmatter":{},"headers":[],"relativePath":"MacOS系统/MacOS使用笔记.md","filePath":"MacOS系统/MacOS使用笔记.md","lastUpdated":1746496452000}'),l={name:"MacOS系统/MacOS使用笔记.md"};function t(i,a,c,o,d,r){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="macos-使用笔记" tabindex="-1">MacOS 使用笔记 <a class="header-anchor" href="#macos-使用笔记" aria-label="Permalink to &quot;MacOS 使用笔记&quot;">​</a></h1><h2 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Ctrl+A：到行首</span></span>
<span class="line"><span>Ctrl+E：到行尾</span></span>
<span class="line"><span>Ctrl+N：到下一行</span></span>
<span class="line"><span>Ctrl+P：到上一行</span></span>
<span class="line"><span>Ctrl+K：从光标处开始删除，直到行尾</span></span>
<span class="line"><span>fn键+左方向键是HOME</span></span>
<span class="line"><span>fn键+右方向键是END</span></span>
<span class="line"><span>fn+上方向键是page up</span></span>
<span class="line"><span>fn+下方向键是page down</span></span>
<span class="line"><span>F11 : 回到桌面</span></span>
<span class="line"><span>win + Shift + 4 : 自定义截屏，截图会保存到桌面</span></span></code></pre></div><h2 id="切换输入法" tabindex="-1">切换输入法 <a class="header-anchor" href="#切换输入法" aria-label="Permalink to &quot;切换输入法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Ctrl + Shift + 空格键</span></span></code></pre></div><h2 id="关闭指定端口" tabindex="-1">关闭指定端口 <a class="header-anchor" href="#关闭指定端口" aria-label="Permalink to &quot;关闭指定端口&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 先查看占用端口的 进程ID</span></span>
<span class="line"><span>lsof -i:8080</span></span>
<span class="line"><span>COMMAND  PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME</span></span>
<span class="line"><span>node    1563 a123   24u  IPv4 0x50a3c2bc555911ab      0t0  TCP 192.168.200.111:8080 (LISTEN)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 杀掉 PID</span></span>
<span class="line"><span>kill -9 1563</span></span></code></pre></div><h2 id="访问远程-linux-服务器" tabindex="-1">访问远程 Linux 服务器 <a class="header-anchor" href="#访问远程-linux-服务器" aria-label="Permalink to &quot;访问远程 Linux 服务器&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># ssh -p 端口号 服务器用户名@ip  ，然后输入 密码</span></span>
<span class="line"><span>ssh -p 22 root@127.0.0.1</span></span></code></pre></div>`,9)]))}const b=s(l,[["render",t]]);export{u as __pageData,b as default};
