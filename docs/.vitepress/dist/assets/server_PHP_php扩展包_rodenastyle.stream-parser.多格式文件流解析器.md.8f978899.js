import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.92222dd1.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/php扩展包/rodenastyle.stream-parser.多格式文件流解析器.md","lastUpdated":null}'),p={name:"server/PHP/php扩展包/rodenastyle.stream-parser.多格式文件流解析器.md"},l=e(`<h2 id="多格式文件流解析器" tabindex="-1">多格式文件流解析器 <a class="header-anchor" href="#多格式文件流解析器" aria-label="Permalink to &quot;多格式文件流解析器&quot;">​</a></h2><p>composer url: <a href="https://packagist.org/packages/rodenastyle/stream-parser" target="_blank" rel="noreferrer">https://packagist.org/packages/rodenastyle/stream-parser</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">composer require rodenastyle/stream-parser</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>用法：routes/web.php 添加路由</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">use Tightenco\\Collect\\Support\\Collection;</span></span>
<span class="line"><span style="color:#A6ACCD;">use Rodenastyle\\StreamParser\\StreamParser;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Route::get(&#39;xml&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    StreamParser::xml(&quot;https://www.w3schools.com/xml/plant_catalog.xml&quot;)-&gt;each(function(Collection $item){</span></span>
<span class="line"><span style="color:#A6ACCD;">        dump($item);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Route::get(&#39;json&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    StreamParser::json(&#39;https://unpkg.com/province-city-china@2.0.5/dist/data.json&#39;)-&gt;each(function(Collection $item){</span></span>
<span class="line"><span style="color:#A6ACCD;">        dump($item);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Route::get(&#39;csv&#39;, function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    StreamParser::csv(&#39;https://unpkg.com/province-city-china/dist/data.csv&#39;)-&gt;each(function(Collection $item){</span></span>
<span class="line"><span style="color:#A6ACCD;">        dump($item);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><a href="https://learnku.com/courses/laravel-package/2019/php-7-stream-parser-supports-multi-format-file-stream-parser-rodenastylestream-parser/3834" target="_blank" rel="noreferrer">教程</a></p>`,6),t=[l];function o(r,c,i,C,A,m){return a(),n("div",null,t)}const u=s(p,[["render",o]]);export{_ as __pageData,u as default};
