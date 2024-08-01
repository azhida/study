import{_ as a,c as s,o as n,a3 as p}from"./chunks/framework.CFZOmcOm.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"php/laravel/laravel_artisan学习笔记.md","filePath":"php/laravel/laravel_artisan学习笔记.md","lastUpdated":1722327281000}'),e={name:"php/laravel/laravel_artisan学习笔记.md"},t=p(`<h6 id="维护模式" tabindex="-1">维护模式 <a class="header-anchor" href="#维护模式" aria-label="Permalink to &quot;维护模式&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 1.开启维护模式：  </span></span>
<span class="line"><span>php artisan down</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2.关闭维护模式：</span></span>
<span class="line"><span>php artisan up</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3.当应用处于维护模式时，所有的路由都会指向一个自定义的视图。这对于更新应用或执行维护任务时临时&quot;禁用&quot;当前应用是很方便的。App::down方法在app/start/global.php文件里进行了定义，它将在维护模式时将该方法输出的内容展示给用户。</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 4.维护模式 &amp; 队列</span></span>
<span class="line"><span># 当应用程序处于维护模式时, 将不接受新的队列任务 。一旦应用程序退出维护模式，队列任务的处理即恢复正常。</span></span></code></pre></div><h6 id="迁移文件" tabindex="-1">迁移文件 <a class="header-anchor" href="#迁移文件" aria-label="Permalink to &quot;迁移文件&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 生成迁移文件</span></span>
<span class="line"><span>php artisan make:migration create_users_table --create=users</span></span>
<span class="line"><span>php artisan make:migration add_votes_to_users_table --table=users</span></span>
<span class="line"><span>php artisan make:migration users_add_field --table=users</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 运行迁移文件</span></span>
<span class="line"><span># 运行全部迁移文件</span></span>
<span class="line"><span>php artisan migrate</span></span>
<span class="line"><span># 运行指迁移文件</span></span>
<span class="line"><span>php artisan migrate --path=database/migrations/2014_10_12_000000_create_users_table.php</span></span></code></pre></div>`,4),l=[t];function i(r,c,o,_,d,h){return n(),s("div",null,l)}const b=a(e,[["render",i]]);export{m as __pageData,b as default};
