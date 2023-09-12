import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const y=JSON.parse('{"title":"Docker安装笔记","description":"","frontmatter":{},"headers":[],"relativePath":"server/消息中间件/RabbitMQ/Docker安装笔记.md","lastUpdated":1680584985000}'),l={name:"server/消息中间件/RabbitMQ/Docker安装笔记.md"},p=e(`<h1 id="docker安装笔记" tabindex="-1">Docker安装笔记 <a class="header-anchor" href="#docker安装笔记" aria-label="Permalink to &quot;Docker安装笔记&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 拉取镜像： </span></span>
<span class="line"><span style="color:#babed8;">docker pull rabbitmq</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 创建目录</span></span>
<span class="line"><span style="color:#babed8;">mkdir ~/data/rabbitmq/</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 查看镜像</span></span>
<span class="line"><span style="color:#babed8;">docker images</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 启动</span></span>
<span class="line"><span style="color:#babed8;">docker run -d \\</span></span>
<span class="line"><span style="color:#babed8;">-v ~/data/rabbitmq:/var/lib/rabbitmq \\</span></span>
<span class="line"><span style="color:#babed8;">-p 5672:5672 \\</span></span>
<span class="line"><span style="color:#babed8;">-p 15672:15672 \\</span></span>
<span class="line"><span style="color:#babed8;">--name rabbitmq \\</span></span>
<span class="line"><span style="color:#babed8;">--restart=always \\</span></span>
<span class="line"><span style="color:#babed8;">--hostname myRabbit \\</span></span>
<span class="line"><span style="color:#babed8;">rabbitmq:management</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="管理界面" tabindex="-1">管理界面 <a class="header-anchor" href="#管理界面" aria-label="Permalink to &quot;管理界面&quot;">​</a></h2><p>浏览器访问 <a href="http://192.168.124.129:15672" target="_blank" rel="noreferrer">http://192.168.124.129:15672</a></p><p>初始账号密码 guest/guest</p>`,5),t=[p];function o(r,c,b,i,d,_){return s(),n("div",null,t)}const h=a(l,[["render",o]]);export{y as __pageData,h as default};
