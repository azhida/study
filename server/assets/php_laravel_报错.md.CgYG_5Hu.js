import{_ as a,c as n,o as s,a3 as e}from"./chunks/framework.CFZOmcOm.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"php/laravel/报错.md","filePath":"php/laravel/报错.md","lastUpdated":1722327281000}'),t={name:"php/laravel/报错.md"},p=e(`<h6 id="unknown-database-type-json-requested-doctrine-dbal-platforms-mysqlplatform-may-not-support-it" tabindex="-1">Unknown database type json requested, Doctrine\\DBAL\\Platforms\\MySqlPlatform may not support it. <a class="header-anchor" href="#unknown-database-type-json-requested-doctrine-dbal-platforms-mysqlplatform-may-not-support-it" aria-label="Permalink to &quot;Unknown database type json requested, Doctrine\\DBAL\\Platforms\\MySqlPlatform may not support it.&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 场景：迁移文件 修改表字段：由 json 改为 string 时出现</span></span>
<span class="line"><span># 解决办法：迁移文件中添加如下代码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public function up()</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        DB::getDoctrineSchemaManager()-&gt;getDatabasePlatform()-&gt;registerDoctrineTypeMapping(&#39;json&#39;, &#39;string&#39;);</span></span>
<span class="line"><span>        Schema::table(&#39;table_name&#39;,function (Blueprint $blueprint){</span></span>
<span class="line"><span>           $blueprint-&gt;string(&#39;field_name&#39;)-&gt;change();</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span></code></pre></div>`,2),l=[p];function o(r,i,c,d,m,_){return s(),n("div",null,l)}const f=a(t,[["render",o]]);export{h as __pageData,f as default};
