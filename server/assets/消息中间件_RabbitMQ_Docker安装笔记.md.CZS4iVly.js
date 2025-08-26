import{_ as a,c as s,o as n,a5 as e}from"./chunks/framework.CJNr4pYi.js";const m=JSON.parse('{"title":"Docker安装笔记","description":"","frontmatter":{},"headers":[],"relativePath":"消息中间件/RabbitMQ/Docker安装笔记.md","filePath":"消息中间件/RabbitMQ/Docker安装笔记.md","lastUpdated":1722327281000}'),p={name:"消息中间件/RabbitMQ/Docker安装笔记.md"},t=e(`<h1 id="docker安装笔记" tabindex="-1">Docker安装笔记 <a class="header-anchor" href="#docker安装笔记" aria-label="Permalink to &quot;Docker安装笔记&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 拉取镜像： </span></span>
<span class="line"><span>docker pull rabbitmq</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建目录</span></span>
<span class="line"><span>mkdir ~/data/rabbitmq/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看镜像</span></span>
<span class="line"><span>docker images</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动</span></span>
<span class="line"><span>docker run -d \\</span></span>
<span class="line"><span>-v ~/data/rabbitmq:/var/lib/rabbitmq \\</span></span>
<span class="line"><span>-p 5672:5672 \\</span></span>
<span class="line"><span>-p 15672:15672 \\</span></span>
<span class="line"><span>--name rabbitmq \\</span></span>
<span class="line"><span>--restart=always \\</span></span>
<span class="line"><span>--hostname myRabbit \\</span></span>
<span class="line"><span>rabbitmq:management</span></span></code></pre></div><h2 id="管理界面" tabindex="-1">管理界面 <a class="header-anchor" href="#管理界面" aria-label="Permalink to &quot;管理界面&quot;">​</a></h2><p>浏览器访问 <a href="http://192.168.124.129:15672" target="_blank" rel="noreferrer">http://192.168.124.129:15672</a></p><p>初始账号密码 guest/guest</p>`,5),l=[t];function i(r,c,o,d,_,b){return n(),s("div",null,l)}const k=a(p,[["render",i]]);export{m as __pageData,k as default};
