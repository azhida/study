import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.aaef0e9b.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/python/知识问答.md","lastUpdated":1680584985000}'),e={name:"server/python/知识问答.md"},p=l(`<h4 id="代码书写规范与基本使用" tabindex="-1">代码书写规范与基本使用 <a class="header-anchor" href="#代码书写规范与基本使用" aria-label="Permalink to &quot;代码书写规范与基本使用&quot;">​</a></h4><ul><li>Q：代码“=”(等号)的两边要不要空格，有影响吗？<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">A：没有影响，要习惯空格，这样更加规范美观，有辨识度，如：</span></span>
<span class="line"><span style="color:#babed8;">a = 0</span></span>
<span class="line"><span style="color:#babed8;">b = input(&#39;输入你的问题&#39;)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>Q：单引号、双引号、三引号的区别?<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">A：正常使用单引号和双引号都是可以的，三引号表达的是换行字符串，会将引号内的所</span></span>
<span class="line"><span style="color:#babed8;">有内容打印出来，如：</span></span>
<span class="line"><span style="color:#babed8;">print(&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#babed8;">你好啊</span></span>
<span class="line"><span style="color:#babed8;">天气真好&#39;&#39;&#39;)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>Q：直接输入内容不能运行，如直接输入 你好啊，天气真好 点击运行，结果报错?<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">A：python 代码是需要有执行的，你好啊，天气真好并不是一个执行操作。</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>Q：代码一直显示“运行中”?<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">A：检查一下终端是不是可以输入，如果代码内有输入操作的话，代码会一直显示运行中，需要等待输入内容；</span></span>
<span class="line"><span style="color:#babed8;">   若终端不可输入，则可尝试刷新学习页面。</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>Q：else 后面不可以加条件？<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">A：else 表达的就是其它所有情况，不可加条件，只有 if 和 elif 需要加条件。</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>Q：if 和 else 一定要同时出现吗？<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">A：不一定，它们都可以单独使用，else 也可以和循环一起使用，表达循环外的所有情况</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>Q：int(input())输入小数为何报错？<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">A：input 输出的是字符串类型，类浮点数字符串如&#39;1.5&#39;中的小数点是无法被 int 函数识别转换的，</span></span>
<span class="line"><span style="color:#babed8;">   所以会报错，int 只能转换纯整数字符串</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>Q：数据的运算？<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">A：整数和浮点数是可以直接加减乘除的，字符串如果用加法的话会拼在一起形成一个新的字符串，</span></span>
<span class="line"><span style="color:#babed8;">   用乘法会多次打印如，&#39;2&#39;*7 会得到&#39;2222222&#39;，字符串是没有减法和除法的</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>Q：input 里面要不要加 print？<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">A：不需要，input 括号内的内容可以理解为是问题，在运行的时候就会把问题打印出来，</span></span>
<span class="line"><span style="color:#babed8;">   如果加上 print 的话，就会打印 none，这里涉及到返回值的问题，目前不需要纠结</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>Q：常见的一些报错类型？<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">A：</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> SyntaxError: unexpected EOF while parsing </span></span>
<span class="line"><span style="color:#babed8;"> #语法错误，多了无法解析的符号，检查一下是否多了或者少了括号</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> SyntaxError: invalid character in identifier </span></span>
<span class="line"><span style="color:#babed8;"> #语法错误有无效标识符，检查一下中文符号</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> IndexError: list index out of range</span></span>
<span class="line"><span style="color:#babed8;"> #索引错误，超出索引范围，检查一下列表是否为空</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> TypeError: must be str, not int</span></span>
<span class="line"><span style="color:#babed8;"> #数据类型错误，该数据不是正确的数据类型，比如字符串和数字直接拼接，检查一下数据类型</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> IndentationError: expected an indented block</span></span>
<span class="line"><span style="color:#babed8;"> #缩进错误，检查一下代码的缩进是否正确</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> KeyError: &#39;fond&#39;</span></span>
<span class="line"><span style="color:#babed8;"> #键错误，字典中没有该的 key 对应的值，检查一下键名或者字典数据是否正确</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> ValueError: substring not found</span></span>
<span class="line"><span style="color:#babed8;"> #值错误，输入的数据类型跟要求的不符合</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> NameError: name &#39;a&#39; is not defined</span></span>
<span class="line"><span style="color:#babed8;"> #未初始化对象，变量没有被定义</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> AttributeError: &#39;tuple&#39; object has no attribute &#39;remove&#39;</span></span>
<span class="line"><span style="color:#babed8;"> #属性错误，该对象没有这个属性、方法，检查一下数据类型</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"> SystemExit</span></span>
<span class="line"><span style="color:#babed8;"> #解释器请求退出，出现在 exit()函数后</span></span>
<span class="line"><span style="color:#babed8;"> </span></span>
<span class="line"><span style="color:#babed8;"> IOError</span></span>
<span class="line"><span style="color:#babed8;"> #输入/输出操作失败</span></span>
<span class="line"><span style="color:#babed8;"> </span></span>
<span class="line"><span style="color:#babed8;"> ImportError</span></span>
<span class="line"><span style="color:#babed8;"> #导入模块/对象失败，检查一下模块是否能够正常使用</span></span>
<span class="line"><span style="color:#babed8;"> </span></span>
<span class="line"><span style="color:#babed8;"> UnicodeDecodeError/UnicodeEncodeError/UnicodeTranslateError</span></span>
<span class="line"><span style="color:#babed8;"> #Unicode 解码/编码/转换/时的错误</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li><li>Q：<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div></li></ul>`,2),o=[p];function c(t,i,r,b,d,y){return a(),n("div",null,o)}const g=s(e,[["render",c]]);export{h as __pageData,g as default};
