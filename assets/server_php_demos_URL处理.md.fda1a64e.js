import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.aaef0e9b.js";const B=JSON.parse('{"title":"URL 处理","description":"","frontmatter":{},"headers":[],"relativePath":"server/php/demos/URL处理.md","lastUpdated":1687323507000}'),p={name:"server/php/demos/URL处理.md"},o=l(`<h1 id="url-处理" tabindex="-1">URL 处理 <a class="header-anchor" href="#url-处理" aria-label="Permalink to &quot;URL 处理&quot;">​</a></h1><h2 id="解析-url" tabindex="-1">解析 URL <a class="header-anchor" href="#解析-url" aria-label="Permalink to &quot;解析 URL&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#BABED8;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://127.0.0.1:8080?a=1&amp;b=2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_arr </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">parse_url</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_arr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>结果</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">array(4) {</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;scheme&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(4) &quot;http&quot;</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;host&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(9) &quot;127.0.0.1&quot;</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;port&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  int(8080)</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;query&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(7) &quot;a=1&amp;b=2&quot;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="参数转数组" tabindex="-1">参数转数组 <a class="header-anchor" href="#参数转数组" aria-label="Permalink to &quot;参数转数组&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#BABED8;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://127.0.0.1:8080?a=1&amp;b=2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">parse_url</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> PHP_URL_QUERY</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query_arr </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[];</span></span>
<span class="line"><span style="color:#82AAFF;">parse_str</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query_arr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query_arr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>结果</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">string(7) &quot;a=1&amp;b=2&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">array(2) {</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;a&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(1) &quot;1&quot;</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;b&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(1) &quot;2&quot;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="数组转参数" tabindex="-1">数组转参数 <a class="header-anchor" href="#数组转参数" aria-label="Permalink to &quot;数组转参数&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#BABED8;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://127.0.0.1:8080?a=1&amp;b=2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">parse_url</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> PHP_URL_QUERY</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query_arr </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[];</span></span>
<span class="line"><span style="color:#82AAFF;">parse_str</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query_arr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query_arr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>结果</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">string(7) &quot;a=1&amp;b=2&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">array(2) {</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;a&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(1) &quot;1&quot;</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;b&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(1) &quot;2&quot;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="追加参数" tabindex="-1">追加参数 <a class="header-anchor" href="#追加参数" aria-label="Permalink to &quot;追加参数&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#BABED8;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://127.0.0.1:8080?a=1&amp;b=2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">parse_url</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> PHP_URL_QUERY</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query_arr </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[];</span></span>
<span class="line"><span style="color:#82AAFF;">parse_str</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query_arr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query_arr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">add_query_arr </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ccc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ddd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aaa</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query_arr </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">array_merge</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query_arr</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">add_query_arr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query_arr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query_str </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">http_build_query</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query_arr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">url_query_str</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">new_url </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">explode</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url</span><span style="color:#89DDFF;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">$</span><span style="color:#BABED8;">url_query_str</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#BABED8;">new_url</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>结果</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">string(7) &quot;a=1&amp;b=2&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">array(2) {</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;a&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(1) &quot;1&quot;</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;b&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(1) &quot;2&quot;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">array(4) {</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;a&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(3) &quot;aaa&quot;</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;b&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(1) &quot;2&quot;</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;c&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(3) &quot;ccc&quot;</span></span>
<span class="line"><span style="color:#babed8;">  [&quot;d&quot;]=&gt;</span></span>
<span class="line"><span style="color:#babed8;">  string(3) &quot;ddd&quot;</span></span>
<span class="line"><span style="color:#babed8;">}</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">string(21) &quot;a=aaa&amp;b=2&amp;c=ccc&amp;d=ddd&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">string(43) &quot;http://127.0.0.1:8080?a=aaa&amp;b=2&amp;c=ccc&amp;d=ddd&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,17),e=[o];function t(r,c,D,y,F,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{B as __pageData,d as default};
