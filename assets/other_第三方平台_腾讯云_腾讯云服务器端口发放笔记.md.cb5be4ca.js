import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const u=JSON.parse('{"title":"腾讯云服务器端口开发笔记","description":"","frontmatter":{},"headers":[],"relativePath":"other/第三方平台/腾讯云/腾讯云服务器端口发放笔记.md","lastUpdated":1681714934000}'),l={name:"other/第三方平台/腾讯云/腾讯云服务器端口发放笔记.md"},t=e(`<h1 id="腾讯云服务器端口开发笔记" tabindex="-1">腾讯云服务器端口开发笔记 <a class="header-anchor" href="#腾讯云服务器端口开发笔记" aria-label="Permalink to &quot;腾讯云服务器端口开发笔记&quot;">​</a></h1><p>80 端口为示例，环境：centOS7.6</p><ul><li>问题描述：</li></ul><p>服务器安全组已经放行 80 端口，但 cmd 访问失败</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># telnet [IP] 80</span></span>
<span class="line"><span style="color:#babed8;">telnet 10.1.1.1 80</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="排查" tabindex="-1">排查 <a class="header-anchor" href="#排查" aria-label="Permalink to &quot;排查&quot;">​</a></h2><ul><li>登录服务器，执行</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 查看 防火墙</span></span>
<span class="line"><span style="color:#babed8;">firewall-cmd --state</span></span>
<span class="line"><span style="color:#babed8;"># not running 说明 防火墙未启动，要先启动防火墙</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 启动防火墙</span></span>
<span class="line"><span style="color:#babed8;">systemctl start firewalld</span></span>
<span class="line"><span style="color:#babed8;">firewall-cmd --state</span></span>
<span class="line"><span style="color:#babed8;"># running 说明防火墙正在运行中</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>cmd 窗口执行</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">telnet 10.1.1.1 80</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>连接成功</p>`,11),p=[t];function o(c,i,r,d,_,b){return s(),n("div",null,p)}const m=a(l,[["render",o]]);export{u as __pageData,m as default};
