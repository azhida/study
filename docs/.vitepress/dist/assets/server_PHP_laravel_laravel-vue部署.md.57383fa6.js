import{_ as a,o as s,c as e,Q as l}from"./chunks/framework.92222dd1.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/laravel/laravel-vue部署.md","lastUpdated":null}'),n={name:"server/PHP/laravel/laravel-vue部署.md"},p=l(`<h4 id="laravel项目-public目录下-部署两个vue子项目-并去掉vue路由中的-号" tabindex="-1">laravel项目，public目录下，部署两个vue子项目，并去掉vue路由中的#号 <a class="header-anchor" href="#laravel项目-public目录下-部署两个vue子项目-并去掉vue路由中的-号" aria-label="Permalink to &quot;laravel项目，public目录下，部署两个vue子项目，并去掉vue路由中的#号&quot;">​</a></h4><ul><li>pc端目录： /var/www/laravel/public/pc/</li><li>web端目录： /var/www/laravel/public/web/</li></ul><h6 id="nginx部署方法-在-server-里配置" tabindex="-1">nginx部署方法：在 server 里配置 <a class="header-anchor" href="#nginx部署方法-在-server-里配置" aria-label="Permalink to &quot;nginx部署方法：在 server 里配置&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    location ^~ /pc/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        alias /var/www/laravel/public/pc/;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files $uri $uri/ /pc/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location ^~ /web/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        alias /var/www/laravel/public/web/;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files $uri $uri/ /web/index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),r=[p];function i(t,c,o,u,v,d){return s(),e("div",null,r)}const A=a(n,[["render",i]]);export{C as __pageData,A as default};
