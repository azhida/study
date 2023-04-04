import{_ as a,o as s,c as n,Q as l}from"./chunks/framework.92222dd1.js";const D=JSON.parse('{"title":"MacOS 使用笔记","description":"","frontmatter":{},"headers":[],"relativePath":"other/MacOS系统/MacOS使用笔记.md","lastUpdated":1680584985000}'),e={name:"other/MacOS系统/MacOS使用笔记.md"},p=l(`<h1 id="macos-使用笔记" tabindex="-1">MacOS 使用笔记 <a class="header-anchor" href="#macos-使用笔记" aria-label="Permalink to &quot;MacOS 使用笔记&quot;">​</a></h1><h2 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Ctrl+A：到行首</span></span>
<span class="line"><span style="color:#A6ACCD;">Ctrl+E：到行尾</span></span>
<span class="line"><span style="color:#A6ACCD;">Ctrl+N：到下一行</span></span>
<span class="line"><span style="color:#A6ACCD;">Ctrl+P：到上一行</span></span>
<span class="line"><span style="color:#A6ACCD;">Ctrl+K：从光标处开始删除，直到行尾</span></span>
<span class="line"><span style="color:#A6ACCD;">fn键+左方向键是HOME</span></span>
<span class="line"><span style="color:#A6ACCD;">fn键+右方向键是END</span></span>
<span class="line"><span style="color:#A6ACCD;">fn+上方向键是page up</span></span>
<span class="line"><span style="color:#A6ACCD;">fn+下方向键是page down</span></span>
<span class="line"><span style="color:#A6ACCD;">F11 : 回到桌面</span></span>
<span class="line"><span style="color:#A6ACCD;">win + Shift + 4 : 自定义截屏，截图会保存到桌面</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="切换输入法" tabindex="-1">切换输入法 <a class="header-anchor" href="#切换输入法" aria-label="Permalink to &quot;切换输入法&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Ctrl + Shift + 空格键</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="关闭指定端口" tabindex="-1">关闭指定端口 <a class="header-anchor" href="#关闭指定端口" aria-label="Permalink to &quot;关闭指定端口&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 先查看占用端口的 进程ID</span></span>
<span class="line"><span style="color:#A6ACCD;">lsof -i:8080</span></span>
<span class="line"><span style="color:#A6ACCD;">COMMAND  PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME</span></span>
<span class="line"><span style="color:#A6ACCD;">node    1563 a123   24u  IPv4 0x50a3c2bc555911ab      0t0  TCP 192.168.200.111:8080 (LISTEN)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 杀掉 PID</span></span>
<span class="line"><span style="color:#A6ACCD;">kill -9 1563</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="访问远程-linux-服务器" tabindex="-1">访问远程 Linux 服务器 <a class="header-anchor" href="#访问远程-linux-服务器" aria-label="Permalink to &quot;访问远程 Linux 服务器&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># ssh -p 端口号 服务器用户名@ip  ，然后输入 密码</span></span>
<span class="line"><span style="color:#A6ACCD;">ssh -p 22 root@127.0.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),o=[p];function t(c,i,r,C,A,d){return s(),n("div",null,o)}const u=a(e,[["render",t]]);export{D as __pageData,u as default};
