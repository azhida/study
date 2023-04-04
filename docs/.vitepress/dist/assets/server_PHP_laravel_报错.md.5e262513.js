import{_ as a,o as s,c as n,Q as e}from"./chunks/framework.92222dd1.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/laravel/报错.md","lastUpdated":null}'),t={name:"server/PHP/laravel/报错.md"},l=e(`<h6 id="unknown-database-type-json-requested-doctrine-dbal-platforms-mysqlplatform-may-not-support-it" tabindex="-1">Unknown database type json requested, Doctrine\\DBAL\\Platforms\\MySqlPlatform may not support it. <a class="header-anchor" href="#unknown-database-type-json-requested-doctrine-dbal-platforms-mysqlplatform-may-not-support-it" aria-label="Permalink to &quot;Unknown database type json requested, Doctrine\\DBAL\\Platforms\\MySqlPlatform may not support it.&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 场景：迁移文件 修改表字段：由 json 改为 string 时出现</span></span>
<span class="line"><span style="color:#A6ACCD;"># 解决办法：迁移文件中添加如下代码</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public function up()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        DB::getDoctrineSchemaManager()-&gt;getDatabasePlatform()-&gt;registerDoctrineTypeMapping(&#39;json&#39;, &#39;string&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        Schema::table(&#39;table_name&#39;,function (Blueprint $blueprint){</span></span>
<span class="line"><span style="color:#A6ACCD;">           $blueprint-&gt;string(&#39;field_name&#39;)-&gt;change();</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[l];function p(r,c,i,d,_,m){return s(),n("div",null,o)}const C=a(t,[["render",p]]);export{u as __pageData,C as default};
