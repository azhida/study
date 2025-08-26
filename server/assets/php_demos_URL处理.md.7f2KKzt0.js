import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.CJNr4pYi.js";const g=JSON.parse('{"title":"URL 处理","description":"","frontmatter":{},"headers":[],"relativePath":"php/demos/URL处理.md","filePath":"php/demos/URL处理.md","lastUpdated":1722327281000}'),p={name:"php/demos/URL处理.md"},l=n(`<h1 id="url-处理" tabindex="-1">URL 处理 <a class="header-anchor" href="#url-处理" aria-label="Permalink to &quot;URL 处理&quot;">​</a></h1><h2 id="解析-url" tabindex="-1">解析 URL <a class="header-anchor" href="#解析-url" aria-label="Permalink to &quot;解析 URL&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8080?a=1&amp;b=2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url_arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> parse_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var_dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_arr);</span></span></code></pre></div><p>结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>array(4) {</span></span>
<span class="line"><span>  [&quot;scheme&quot;]=&gt;</span></span>
<span class="line"><span>  string(4) &quot;http&quot;</span></span>
<span class="line"><span>  [&quot;host&quot;]=&gt;</span></span>
<span class="line"><span>  string(9) &quot;127.0.0.1&quot;</span></span>
<span class="line"><span>  [&quot;port&quot;]=&gt;</span></span>
<span class="line"><span>  int(8080)</span></span>
<span class="line"><span>  [&quot;query&quot;]=&gt;</span></span>
<span class="line"><span>  string(7) &quot;a=1&amp;b=2&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="参数转数组" tabindex="-1">参数转数组 <a class="header-anchor" href="#参数转数组" aria-label="Permalink to &quot;参数转数组&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8080?a=1&amp;b=2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url_query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> parse_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PHP_URL_QUERY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var_dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url_query_arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">parse_str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query, $url_query_arr);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var_dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query_arr);</span></span></code></pre></div><p>结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>string(7) &quot;a=1&amp;b=2&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>array(2) {</span></span>
<span class="line"><span>  [&quot;a&quot;]=&gt;</span></span>
<span class="line"><span>  string(1) &quot;1&quot;</span></span>
<span class="line"><span>  [&quot;b&quot;]=&gt;</span></span>
<span class="line"><span>  string(1) &quot;2&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="数组转参数" tabindex="-1">数组转参数 <a class="header-anchor" href="#数组转参数" aria-label="Permalink to &quot;数组转参数&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8080?a=1&amp;b=2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url_query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> parse_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PHP_URL_QUERY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var_dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url_query_arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">parse_str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query, $url_query_arr);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var_dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query_arr);</span></span></code></pre></div><p>结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>string(7) &quot;a=1&amp;b=2&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>array(2) {</span></span>
<span class="line"><span>  [&quot;a&quot;]=&gt;</span></span>
<span class="line"><span>  string(1) &quot;1&quot;</span></span>
<span class="line"><span>  [&quot;b&quot;]=&gt;</span></span>
<span class="line"><span>  string(1) &quot;2&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="追加参数" tabindex="-1">追加参数 <a class="header-anchor" href="#追加参数" aria-label="Permalink to &quot;追加参数&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8080?a=1&amp;b=2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url_query </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> parse_url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PHP_URL_QUERY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var_dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url_query_arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">parse_str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query, $url_query_arr);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var_dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query_arr);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$add_query_arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&#39;c&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ccc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&#39;d&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ddd&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;a&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;aaa&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url_query_arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> array_merge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query_arr, $add_query_arr);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var_dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query_arr);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$url_query_str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> http_build_query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query_arr);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var_dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($url_query_str);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$new_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> explode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;?&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, $url)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;?&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> .</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $url_query_str;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">var_dump</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($new_url);</span></span></code></pre></div><p>结果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>string(7) &quot;a=1&amp;b=2&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>array(2) {</span></span>
<span class="line"><span>  [&quot;a&quot;]=&gt;</span></span>
<span class="line"><span>  string(1) &quot;1&quot;</span></span>
<span class="line"><span>  [&quot;b&quot;]=&gt;</span></span>
<span class="line"><span>  string(1) &quot;2&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>array(4) {</span></span>
<span class="line"><span>  [&quot;a&quot;]=&gt;</span></span>
<span class="line"><span>  string(3) &quot;aaa&quot;</span></span>
<span class="line"><span>  [&quot;b&quot;]=&gt;</span></span>
<span class="line"><span>  string(1) &quot;2&quot;</span></span>
<span class="line"><span>  [&quot;c&quot;]=&gt;</span></span>
<span class="line"><span>  string(3) &quot;ccc&quot;</span></span>
<span class="line"><span>  [&quot;d&quot;]=&gt;</span></span>
<span class="line"><span>  string(3) &quot;ddd&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>string(21) &quot;a=aaa&amp;b=2&amp;c=ccc&amp;d=ddd&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>string(43) &quot;http://127.0.0.1:8080?a=aaa&amp;b=2&amp;c=ccc&amp;d=ddd&quot;</span></span></code></pre></div>`,17),t=[l];function h(e,k,r,d,E,u){return i(),a("div",null,t)}const o=s(p,[["render",h]]);export{g as __pageData,o as default};
