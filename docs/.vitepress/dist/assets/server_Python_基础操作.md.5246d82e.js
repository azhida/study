import{_ as t,o as a,c as s,Q as e}from"./chunks/framework.92222dd1.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/Python/基础操作.md","lastUpdated":null}'),n={name:"server/Python/基础操作.md"},l=e(`<h6 id="查看-python-版本" tabindex="-1">查看 Python 版本 <a class="header-anchor" href="#查看-python-版本" aria-label="Permalink to &quot;查看 Python 版本&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">python -V</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="执行-python文件" tabindex="-1">执行 python文件 <a class="header-anchor" href="#执行-python文件" aria-label="Permalink to &quot;执行 python文件&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">python Hello.py</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 打印数组</span></span>
<span class="line"><span style="color:#A6ACCD;">list = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">print (list)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="行和缩进" tabindex="-1">行和缩进 <a class="header-anchor" href="#行和缩进" aria-label="Permalink to &quot;行和缩进&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Python 与其他语言最大的区别就是，Python 的代码块不使用大括号 {} 来控制类，函数以及其他逻辑判断。</span></span>
<span class="line"><span style="color:#A6ACCD;">python 最具特色的就是用缩进来写模块。</span></span>
<span class="line"><span style="color:#A6ACCD;">缩进的空白数量是可变的，但是所有代码块语句必须包含相同的缩进空白数量，这个必须严格执行。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="安装模块" tabindex="-1">安装模块 <a class="header-anchor" href="#安装模块" aria-label="Permalink to &quot;安装模块&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 安装 openpyxl 模块，在 python安装目录下 cmd 执行，其他模块 同理</span></span>
<span class="line"><span style="color:#A6ACCD;">pip install openpyxl</span></span>
<span class="line"><span style="color:#A6ACCD;">pip install pandas</span></span>
<span class="line"><span style="color:#A6ACCD;">pip install pymysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="转义字符总结" tabindex="-1">转义字符总结 <a class="header-anchor" href="#转义字符总结" aria-label="Permalink to &quot;转义字符总结&quot;">​</a></h6><table><thead><tr><th style="text-align:center;">转义字符</th><th style="text-align:left;">意义</th></tr></thead><tbody><tr><td style="text-align:center;">\\a</td><td style="text-align:left;">响铃（BEL）</td></tr><tr><td style="text-align:center;">\\b</td><td style="text-align:left;">退格（BS），将当前位置移到前一列</td></tr><tr><td style="text-align:center;">\\f</td><td style="text-align:left;">换页（FF），将当前位置移到下页开头</td></tr><tr><td style="text-align:center;">\\n</td><td style="text-align:left;">换行（LF），将当前位置移到下一行开头</td></tr><tr><td style="text-align:center;">\\r</td><td style="text-align:left;">回车（CR），将当前位置移到本行开头</td></tr><tr><td style="text-align:center;">\\t</td><td style="text-align:left;">水平制表（HT）（跳到下一个TAB位置）</td></tr><tr><td style="text-align:center;">\\v</td><td style="text-align:left;">垂直制表（VT）</td></tr><tr><td style="text-align:center;">\\0</td><td style="text-align:left;">空字符（NULL）</td></tr><tr><td style="text-align:center;">&#39;</td><td style="text-align:left;">代表一个单引号（撇号）字符</td></tr><tr><td style="text-align:center;">&quot;</td><td style="text-align:left;">代表一个双引号字符</td></tr><tr><td style="text-align:center;">?</td><td style="text-align:left;">代表一个问号</td></tr><tr><td style="text-align:center;">\\</td><td style="text-align:left;">代表一个单斜线字符</td></tr><tr><td style="text-align:center;">\\xhh</td><td style="text-align:left;">1到2位十六进制所代表的任意字符</td></tr><tr><td style="text-align:center;">\\ddd</td><td style="text-align:left;">1到3位八进制所代表的任意字符</td></tr></tbody></table><h6 id="变量的命名规范" tabindex="-1">变量的命名规范 <a class="header-anchor" href="#变量的命名规范" aria-label="Permalink to &quot;变量的命名规范&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1.变量名只能包含数字、字母和下划线</span></span>
<span class="line"><span style="color:#A6ACCD;">2.但不能以数字开头</span></span>
<span class="line"><span style="color:#A6ACCD;">3.不能使用Python关键字或函数名</span></span>
<span class="line"><span style="color:#A6ACCD;">4.变量名应简短又具有描述性</span></span>
<span class="line"><span style="color:#A6ACCD;">5.变量名区分字母大小写</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),p=[l];function o(r,i,c,d,y,h){return a(),s("div",null,p)}const A=t(n,[["render",o]]);export{g as __pageData,A as default};
