import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.aaef0e9b.js";const h=JSON.parse('{"title":"Flashtext - 文本关键词提取和替换","description":"","frontmatter":{},"headers":[],"relativePath":"server/python/模块/flashtext.md","lastUpdated":1684483469000}'),o={name:"server/python/模块/flashtext.md"},p=l(`<h1 id="flashtext-文本关键词提取和替换" tabindex="-1">Flashtext - 文本关键词提取和替换 <a class="header-anchor" href="#flashtext-文本关键词提取和替换" aria-label="Permalink to &quot;Flashtext - 文本关键词提取和替换&quot;">​</a></h1><p>在自然语言处理或者是文本处理中，经常需要将文本数据中得某些关键词进行替换，或者提取句子中的某些关键词。虽然正则表达式可以达到这样的效果，但是如果文本过于庞大，那么正则表达式的匹配就会非常的麻烦。所以利用 flashtext 可以达到快速搜索的目的。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">pip install flashtext</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-py"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> flashtext</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 关键词提取</span></span>
<span class="line"><span style="color:#BABED8;">keywordProcessor </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> flashtext</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">KeywordProcessor</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#BABED8;">keywordProcessor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_keyword</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">python</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">kw </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> keywordProcessor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">extract_keywords</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我们学习python</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">kw</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># [&#39;python&#39;]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 替换关键词</span></span>
<span class="line"><span style="color:#BABED8;">keywordProcessor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_keyword</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ABCD</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DCBA</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 这里注意：关键词 ABCD 需要两边空格，否则匹配不到</span></span>
<span class="line"><span style="color:#BABED8;">str1 </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> keywordProcessor</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace_keywords</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0099 ABCD 8788</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">str1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 0099 DCBA 8788</span></span>
<span class="line"></span></code></pre></div>`,6),e=[p];function t(r,c,y,F,D,i){return a(),n("div",null,e)}const A=s(o,[["render",t]]);export{h as __pageData,A as default};
