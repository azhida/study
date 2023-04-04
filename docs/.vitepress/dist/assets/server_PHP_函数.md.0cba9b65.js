import{_ as a,o as s,c as n,Q as l}from"./chunks/framework.92222dd1.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/函数.md","lastUpdated":null}'),e={name:"server/PHP/函数.md"},p=l(`<h6 id="array-flip-键值对互换" tabindex="-1">array_flip 键值对互换 <a class="header-anchor" href="#array-flip-键值对互换" aria-label="Permalink to &quot;array_flip 键值对互换&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">$b = array_flip($a);</span></span>
<span class="line"><span style="color:#A6ACCD;">print_r($b);</span></span>
<span class="line"><span style="color:#A6ACCD;"># 输出</span></span>
<span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;a&#39; =&gt; 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;b&#39; =&gt; 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;c&#39; =&gt; 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;d&#39; =&gt; 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="array-slice-在数组中根据条件取出一段值-并返回" tabindex="-1">array_slice 在数组中根据条件取出一段值，并返回 <a class="header-anchor" href="#array-slice-在数组中根据条件取出一段值-并返回" aria-label="Permalink to &quot;array_slice 在数组中根据条件取出一段值，并返回&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">array_slice(array,offset,length,preserve)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$a=array(0=&gt;&quot;Dog&quot;,1=&gt;&quot;Cat&quot;,2=&gt;&quot;Horse&quot;,3=&gt;&quot;Bird&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">print_r(array_slice($a,1,2));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="array-pop-删除数组中的最后一个元素" tabindex="-1">array_pop 删除数组中的最后一个元素 <a class="header-anchor" href="#array-pop-删除数组中的最后一个元素" aria-label="Permalink to &quot;array_pop 删除数组中的最后一个元素&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$a=array(&quot;red&quot;,&quot;green&quot;,&quot;blue&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">array_pop($a);</span></span>
<span class="line"><span style="color:#A6ACCD;">print_r($a);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),t=[p];function o(r,c,i,C,y,A){return s(),n("div",null,t)}const u=a(e,[["render",o]]);export{_ as __pageData,u as default};
