import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.92222dd1.js";const D=JSON.parse('{"title":"Docker安装笔记","description":"","frontmatter":{},"headers":[],"relativePath":"server/消息中间件/RabbitMQ/Docker安装笔记.md","lastUpdated":1680584985000}'),l={name:"server/消息中间件/RabbitMQ/Docker安装笔记.md"},p=e(`<h1 id="docker安装笔记" tabindex="-1">Docker安装笔记 <a class="header-anchor" href="#docker安装笔记" aria-label="Permalink to &quot;Docker安装笔记&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 拉取镜像： </span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 创建目录</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir ~/data/rabbitmq/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 启动</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v ~/data/rabbitmq:/var/lib/rabbitmq \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 5672:5672 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 15672:15672 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name rabbitmq \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart=always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--hostname myRabbit \\</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmq:management</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="管理界面" tabindex="-1">管理界面 <a class="header-anchor" href="#管理界面" aria-label="Permalink to &quot;管理界面&quot;">​</a></h2><p>浏览器访问 <a href="http://192.168.124.129:15672" target="_blank" rel="noreferrer">http://192.168.124.129:15672</a></p><p>初始账号密码 guest/guest</p>`,5),t=[p];function o(r,c,i,C,A,d){return a(),n("div",null,t)}const b=s(l,[["render",o]]);export{D as __pageData,b as default};
