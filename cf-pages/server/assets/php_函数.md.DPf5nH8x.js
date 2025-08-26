import{_ as a,c as s,o as n,a5 as p}from"./chunks/framework.CJNr4pYi.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"php/函数.md","filePath":"php/函数.md","lastUpdated":1722327281000}'),e={name:"php/函数.md"},t=p(`<h6 id="array-flip-键值对互换" tabindex="-1">array_flip 键值对互换 <a class="header-anchor" href="#array-flip-键值对互换" aria-label="Permalink to &quot;array_flip 键值对互换&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$a = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;];</span></span>
<span class="line"><span>$b = array_flip($a);</span></span>
<span class="line"><span>print_r($b);</span></span>
<span class="line"><span># 输出</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>    &#39;a&#39; =&gt; 0,</span></span>
<span class="line"><span>    &#39;b&#39; =&gt; 1,</span></span>
<span class="line"><span>    &#39;c&#39; =&gt; 2,</span></span>
<span class="line"><span>    &#39;d&#39; =&gt; 3,</span></span>
<span class="line"><span>]</span></span></code></pre></div><h6 id="array-slice-在数组中根据条件取出一段值-并返回" tabindex="-1">array_slice 在数组中根据条件取出一段值，并返回 <a class="header-anchor" href="#array-slice-在数组中根据条件取出一段值-并返回" aria-label="Permalink to &quot;array_slice 在数组中根据条件取出一段值，并返回&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>array_slice(array,offset,length,preserve)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$a=array(0=&gt;&quot;Dog&quot;,1=&gt;&quot;Cat&quot;,2=&gt;&quot;Horse&quot;,3=&gt;&quot;Bird&quot;);</span></span>
<span class="line"><span>print_r(array_slice($a,1,2));</span></span></code></pre></div><h6 id="array-pop-删除数组中的最后一个元素" tabindex="-1">array_pop 删除数组中的最后一个元素 <a class="header-anchor" href="#array-pop-删除数组中的最后一个元素" aria-label="Permalink to &quot;array_pop 删除数组中的最后一个元素&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$a=array(&quot;red&quot;,&quot;green&quot;,&quot;blue&quot;);</span></span>
<span class="line"><span>array_pop($a);</span></span>
<span class="line"><span>print_r($a);</span></span></code></pre></div>`,6),i=[t];function l(r,o,c,d,h,_){return n(),s("div",null,i)}const b=a(e,[["render",l]]);export{g as __pageData,b as default};
