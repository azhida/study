import{_ as a,c as s,o as n,a5 as e}from"./chunks/framework.CJNr4pYi.js";const q=JSON.parse('{"title":"ls 命令","description":"","frontmatter":{},"headers":[],"relativePath":"linux/命令/ls.md","filePath":"linux/命令/ls.md","lastUpdated":1722327281000}'),l={name:"linux/命令/ls.md"},p=e(`<h1 id="ls-命令" tabindex="-1">ls 命令 <a class="header-anchor" href="#ls-命令" aria-label="Permalink to &quot;ls 命令&quot;">​</a></h1><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看当前目录下的文件数量（不包含子目录中的文件）</span></span>
<span class="line"><span>ls -l|grep &quot;^-&quot;| wc -l</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看当前目录下的文件数量（包含子目录中的文件） 注意：R，代表子目录</span></span>
<span class="line"><span>ls -lR|grep &quot;^-&quot;| wc -l</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看当前目录下的文件夹目录个数（不包含子目录中的目录），同上述理，如果需要查看子目录的，加上R</span></span>
<span class="line"><span>ls -l|grep &quot;^d&quot;| wc -l</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查询当前路径下的指定前缀名的目录下的所有文件数量 。例如：统计所有以“20161124”开头的目录下的全部文件数量</span></span>
<span class="line"><span>ls -lR 20161124*/|grep &quot;^-&quot;| wc -l</span></span></code></pre></div><h2 id="命令参数说明" tabindex="-1">命令参数说明： <a class="header-anchor" href="#命令参数说明" aria-label="Permalink to &quot;命令参数说明：&quot;">​</a></h2><p><code>ls –l</code> ： 该命令表示以长列表输出指定目录下的信息（未指定则表示当前目录），R代表子目录中的“文件”，这个“文件”指的是目录、链接、设备文件等的总称。</p><p><code>grep &quot;^d&quot;</code>：表示目录，<code>&quot;^-&quot;</code>：表示文件。</p><p><code>wc –l</code>： 表示统计输出信息的行数，因为经过前面的过滤已经只剩下普通文件，一个目录或文件对应一行，所以统计的信息的行数也就是目录或文件的个数。</p>`,7),t=[p];function o(c,i,d,r,u,h){return n(),s("div",null,t)}const m=a(l,[["render",o]]);export{q as __pageData,m as default};
