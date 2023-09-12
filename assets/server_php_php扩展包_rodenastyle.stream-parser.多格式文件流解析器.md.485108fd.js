import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.aaef0e9b.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/php/php扩展包/rodenastyle.stream-parser.多格式文件流解析器.md","lastUpdated":1680584985000}'),p={name:"server/php/php扩展包/rodenastyle.stream-parser.多格式文件流解析器.md"},t=n(`<h2 id="多格式文件流解析器" tabindex="-1">多格式文件流解析器 <a class="header-anchor" href="#多格式文件流解析器" aria-label="Permalink to &quot;多格式文件流解析器&quot;">​</a></h2><p>composer url: <a href="https://packagist.org/packages/rodenastyle/stream-parser" target="_blank" rel="noreferrer">https://packagist.org/packages/rodenastyle/stream-parser</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">composer require rodenastyle/stream-parser</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>用法：routes/web.php 添加路由</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">use Tightenco\\Collect\\Support\\Collection;</span></span>
<span class="line"><span style="color:#babed8;">use Rodenastyle\\StreamParser\\StreamParser;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Route::get(&#39;xml&#39;, function() {</span></span>
<span class="line"><span style="color:#babed8;">    StreamParser::xml(&quot;https://www.w3schools.com/xml/plant_catalog.xml&quot;)-&gt;each(function(Collection $item){</span></span>
<span class="line"><span style="color:#babed8;">        dump($item);</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Route::get(&#39;json&#39;, function() {</span></span>
<span class="line"><span style="color:#babed8;">    StreamParser::json(&#39;https://unpkg.com/province-city-china@2.0.5/dist/data.json&#39;)-&gt;each(function(Collection $item){</span></span>
<span class="line"><span style="color:#babed8;">        dump($item);</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">Route::get(&#39;csv&#39;, function() {</span></span>
<span class="line"><span style="color:#babed8;">    StreamParser::csv(&#39;https://unpkg.com/province-city-china/dist/data.csv&#39;)-&gt;each(function(Collection $item){</span></span>
<span class="line"><span style="color:#babed8;">        dump($item);</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p><a href="https://learnku.com/courses/laravel-package/2019/php-7-stream-parser-supports-multi-format-file-stream-parser-rodenastylestream-parser/3834" target="_blank" rel="noreferrer">教程</a></p>`,6),l=[t];function o(r,c,i,d,b,m){return a(),e("div",null,l)}const h=s(p,[["render",o]]);export{u as __pageData,h as default};
