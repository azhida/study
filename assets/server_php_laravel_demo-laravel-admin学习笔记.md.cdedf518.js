import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.aaef0e9b.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/php/laravel/demo-laravel-admin学习笔记.md","lastUpdated":1680584985000}'),l={name:"server/php/laravel/demo-laravel-admin学习笔记.md"},p=n(`<p>github 地址</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">https://github.com/z-song/demo.laravel-admin.org.git</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>安装</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">git clone https://github.com/z-song/demo.laravel-admin.org</span></span>
<span class="line"><span style="color:#babed8;">cd demo.laravel-admin.org</span></span>
<span class="line"><span style="color:#babed8;">composer install -vvv</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>导入数据</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">$ mysql -h 127.0.0.1 -u root -p</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">mysql&gt; create database \`laravel_admin_demo\`;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">mysql&gt; use \`laravel_admin_demo\`;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">mysql&gt; source storage/mysql_dump/laravel_admin_demo.sql</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>生成网站地址并访问</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">$ php artisan serve</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,8),o=[p];function t(c,i,r,d,b,m){return s(),e("div",null,o)}const y=a(l,[["render",t]]);export{g as __pageData,y as default};
