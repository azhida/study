import{_ as a,o as e,c as r,Q as n}from"./chunks/framework.92222dd1.js";const v=JSON.parse('{"title":"encore/laravel-admin","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/php扩展包/encore.laravel-admin.md","lastUpdated":null}'),l={name:"server/PHP/php扩展包/encore.laravel-admin.md"},s=n(`<h1 id="encore-laravel-admin" tabindex="-1"><a href="https://packagist.org/packages/encore/laravel-admin" target="_blank" rel="noreferrer">encore/laravel-admin</a> <a class="header-anchor" href="#encore-laravel-admin" aria-label="Permalink to &quot;[encore/laravel-admin](https://packagist.org/packages/encore/laravel-admin)&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>一个可以快速构建后台管理的扩展包，它提供了页面组件和表单元素等功能，只需要使用很少的代码就实现功能完善的后台管理功能。</p><p>使用手册：<a href="http://laravel-admin.org/docs/zh" target="_blank" rel="noreferrer">http://laravel-admin.org/docs/zh</a></p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>创建 管理后台 UsersController，其中 --model=App\\Models\\User 代表新创建的这个控制器是要对 App\\Models\\User 这个模型做增删改查。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">php artisan admin:make UsersController --model=App\\\\Models\\\\User</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>新增角色时要注意，权限 要点击选择 Login / User setting / Dashboard / 用户管理，前两个权限是必须的，否则该用户将无法登录后台和修改资料，第三个权限是管理后台的首页，如果没有这个权限，在登录的时候会报错。</p>`,8),t=[s];function o(p,c,i,d,h,_){return e(),r("div",null,t)}const g=a(l,[["render",o]]);export{v as __pageData,g as default};
