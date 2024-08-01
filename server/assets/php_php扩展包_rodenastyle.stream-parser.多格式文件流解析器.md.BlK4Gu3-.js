import{_ as a,c as s,o as n,a3 as e}from"./chunks/framework.CFZOmcOm.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"php/php扩展包/rodenastyle.stream-parser.多格式文件流解析器.md","filePath":"php/php扩展包/rodenastyle.stream-parser.多格式文件流解析器.md","lastUpdated":1722327281000}'),p={name:"php/php扩展包/rodenastyle.stream-parser.多格式文件流解析器.md"},t=e(`<h2 id="多格式文件流解析器" tabindex="-1">多格式文件流解析器 <a class="header-anchor" href="#多格式文件流解析器" aria-label="Permalink to &quot;多格式文件流解析器&quot;">​</a></h2><p>composer url: <a href="https://packagist.org/packages/rodenastyle/stream-parser" target="_blank" rel="noreferrer">https://packagist.org/packages/rodenastyle/stream-parser</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>composer require rodenastyle/stream-parser</span></span></code></pre></div><p>用法：routes/web.php 添加路由</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>use Tightenco\\Collect\\Support\\Collection;</span></span>
<span class="line"><span>use Rodenastyle\\StreamParser\\StreamParser;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Route::get(&#39;xml&#39;, function() {</span></span>
<span class="line"><span>    StreamParser::xml(&quot;https://www.w3schools.com/xml/plant_catalog.xml&quot;)-&gt;each(function(Collection $item){</span></span>
<span class="line"><span>        dump($item);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Route::get(&#39;json&#39;, function() {</span></span>
<span class="line"><span>    StreamParser::json(&#39;https://unpkg.com/province-city-china@2.0.5/dist/data.json&#39;)-&gt;each(function(Collection $item){</span></span>
<span class="line"><span>        dump($item);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Route::get(&#39;csv&#39;, function() {</span></span>
<span class="line"><span>    StreamParser::csv(&#39;https://unpkg.com/province-city-china/dist/data.csv&#39;)-&gt;each(function(Collection $item){</span></span>
<span class="line"><span>        dump($item);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>});</span></span></code></pre></div><p><a href="https://learnku.com/courses/laravel-package/2019/php-7-stream-parser-supports-multi-format-file-stream-parser-rodenastylestream-parser/3834" target="_blank" rel="noreferrer">教程</a></p>`,6),r=[t];function l(o,c,i,d,m,h){return n(),s("div",null,r)}const g=a(p,[["render",l]]);export{_ as __pageData,g as default};
