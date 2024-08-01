import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.CFZOmcOm.js";const g=JSON.parse('{"title":"viacreative/sudo-su","description":"","frontmatter":{},"headers":[],"relativePath":"php/php扩展包/viacreative.sudo-su.md","filePath":"php/php扩展包/viacreative.sudo-su.md","lastUpdated":1722327281000}'),e={name:"php/php扩展包/viacreative.sudo-su.md"},i=p(`<h1 id="viacreative-sudo-su" tabindex="-1">viacreative/sudo-su <a class="header-anchor" href="#viacreative-sudo-su" aria-label="Permalink to &quot;viacreative/sudo-su&quot;">​</a></h1><h2 id="composer地址" tabindex="-1">composer地址 <a class="header-anchor" href="#composer地址" aria-label="Permalink to &quot;composer地址&quot;">​</a></h2><p><a href="https://packagist.org/packages/viacreative/sudo-su" target="_blank" rel="noreferrer">https://packagist.org/packages/viacreative/sudo-su</a></p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>用户切换工具 sudo-su。当需要切换多个用户来测试，频繁地退出和登录用户是一个费时的事情，可以使用 sudo-su 用户切换工具，来提高效率。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li>使用 Composer 安装：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>composer require &quot;viacreative/sudo-su:~1.1&quot;</span></span></code></pre></div><ul><li>添加 Provider</li></ul><p>我们只在开发环境中加载此扩展包：</p><p>app/Providers/AppServiceProvider.php</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>class AppServiceProvider extends ServiceProvider</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    .</span></span>
<span class="line"><span>    .</span></span>
<span class="line"><span>    .</span></span>
<span class="line"><span>    public function register()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        if (app()-&gt;isLocal()) {</span></span>
<span class="line"><span>            $this-&gt;app-&gt;register(\\VIACreative\\SudoSu\\ServiceProvider::class);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>发布资源文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>php artisan vendor:publish --provider=&quot;VIACreative\\SudoSu\\ServiceProvider&quot;</span></span></code></pre></div><p>会生成：<br><code>/public/sudo-su</code> 前端 CSS 资源存放文件夹；<br><code>config/sudosu.php</code> 配置信息文件。</p><ul><li>修改配置文件</li></ul><p>config/sudosu.php</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return [</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 允许使用的顶级域名</span></span>
<span class="line"><span>    &#39;allowed_tlds&#39; =&gt; [&#39;dev&#39;, &#39;local&#39;, &#39;test&#39;],</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 用户模型</span></span>
<span class="line"><span>    &#39;user_model&#39; =&gt; App\\Models\\User::class</span></span>
<span class="line"><span>];</span></span></code></pre></div><p>Sudosu 为了避免开发者在生产环境下误开启此功能，在配置选项 allowed_tlds 里做了域名后缀的限制，tld 为 Top Level Domain 的简写。</p><ul><li>模板植入</li></ul><p>一般我们是在网页里使用 Sudosu，在主要布局模板中的 Scripts 区块上写入模板调用代码：</p><p>resources/views/layouts/app.blade.php</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>  @if (app()-&gt;isLocal())</span></span>
<span class="line"><span>    @include(&#39;sudosu::user-selector&#39;)</span></span>
<span class="line"><span>  @endif</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!-- Scripts --&gt;</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span></code></pre></div>`,23),l=[i];function t(c,o,r,d,u,h){return n(),a("div",null,l)}const b=s(e,[["render",t]]);export{g as __pageData,b as default};
