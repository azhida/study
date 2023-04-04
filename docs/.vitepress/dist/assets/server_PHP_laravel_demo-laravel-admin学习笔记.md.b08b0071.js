import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/laravel/demo-laravel-admin学习笔记.md","lastUpdated":null}'),e={name:"server/PHP/laravel/demo-laravel-admin学习笔记.md"},p=l(`<p>github 地址</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">https://github.com/z-song/demo.laravel-admin.org.git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>安装</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/z-song/demo.laravel-admin.org</span></span>
<span class="line"><span style="color:#A6ACCD;">cd demo.laravel-admin.org</span></span>
<span class="line"><span style="color:#A6ACCD;">composer install -vvv</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>导入数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ mysql -h 127.0.0.1 -u root -p</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; create database \`laravel_admin_demo\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; use \`laravel_admin_demo\`;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mysql&gt; source storage/mysql_dump/laravel_admin_demo.sql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>生成网站地址并访问</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ php artisan serve</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[p];function t(c,i,r,d,C,m){return a(),n("div",null,o)}const g=s(e,[["render",t]]);export{_ as __pageData,g as default};
