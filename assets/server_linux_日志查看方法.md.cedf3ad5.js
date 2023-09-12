import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.aaef0e9b.js";const h=JSON.parse('{"title":"tail","description":"","frontmatter":{},"headers":[],"relativePath":"server/linux/日志查看方法.md","lastUpdated":1680584985000}'),e={name:"server/linux/日志查看方法.md"},p=l(`<h1 id="tail" tabindex="-1">tail <a class="header-anchor" href="#tail" aria-label="Permalink to &quot;tail&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">命令格式: tail[必要参数][选择参数][文件]</span></span>
<span class="line"><span style="color:#babed8;">-f 循环读取</span></span>
<span class="line"><span style="color:#babed8;">-q 不显示处理信息</span></span>
<span class="line"><span style="color:#babed8;">-v 显示详细的处理信息</span></span>
<span class="line"><span style="color:#babed8;">-c&lt;数目&gt; 显示的字节数</span></span>
<span class="line"><span style="color:#babed8;">-n&lt;行数&gt; 显示行数</span></span>
<span class="line"><span style="color:#babed8;">-q, --quiet, --silent 从不输出给出文件名的首部</span></span>
<span class="line"><span style="color:#babed8;">-s, --sleep-interval=S 与-f合用,表示在每次反复的间隔休眠S秒</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>tail 用法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 查询日志尾部最后10行的日志;</span></span>
<span class="line"><span style="color:#babed8;">tail -n 10 test.log</span></span>
<span class="line"><span style="color:#babed8;"># 查询10行之后的所有日志;</span></span>
<span class="line"><span style="color:#babed8;">tail -n +10 test.log</span></span>
<span class="line"><span style="color:#babed8;"># 循环实时查看最后1000行记录(最常用的)</span></span>
<span class="line"><span style="color:#babed8;">tail -fn 10 test.log</span></span>
<span class="line"><span style="color:#babed8;"># 配合着grep用</span></span>
<span class="line"><span style="color:#babed8;">tail -fn 1000 test.log | grep &#39;关键字&#39;</span></span>
<span class="line"><span style="color:#babed8;"># 查询数据量太大,可以进行翻页查看，可以进行多屏显示(ctrl + f 或者 空格键可以快捷键)</span></span>
<span class="line"><span style="color:#babed8;">tail -n 4700 aa.log | more -1000</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h1 id="cat" tabindex="-1">cat <a class="header-anchor" href="#cat" aria-label="Permalink to &quot;cat&quot;">​</a></h1><p>cat 是由第一行到最后一行连续显示在屏幕上</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 一次显示整个文件</span></span>
<span class="line"><span style="color:#babed8;">cat filename</span></span>
<span class="line"><span style="color:#babed8;"># 从键盘创建一个文件</span></span>
<span class="line"><span style="color:#babed8;">cat &gt; filename</span></span>
<span class="line"><span style="color:#babed8;"># 将几个文件合并为一个文件(只能创建新文件,不能编辑已有文件)</span></span>
<span class="line"><span style="color:#babed8;">cat file1 file2 &gt; file</span></span>
<span class="line"><span style="color:#babed8;"># 将一个日志文件的内容追加到另外一个</span></span>
<span class="line"><span style="color:#babed8;">cat -n textfile1 &gt; textfile2</span></span>
<span class="line"><span style="color:#babed8;"># 清空一个日志文件</span></span>
<span class="line"><span style="color:#babed8;">cat : &gt;textfile2</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 注意：&gt; 意思是创建，&gt;&gt;是追加。</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h1 id="less" tabindex="-1">less <a class="header-anchor" href="#less" aria-label="Permalink to &quot;less&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">less log.log</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">shift + G 命令到文件尾部 然后输入 ？加上你要搜索的关键字例如 ？1213</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">按 n 向上查找关键字</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">shift+n 反向查找关键字</span></span>
<span class="line"><span style="color:#babed8;">less与more类似，使用less可以随意浏览文件，而more仅能向前移动，不能向后移动，而且 less 在查看之前不会加载整个文件。</span></span>
<span class="line"><span style="color:#babed8;">less log2013.log 查看文件</span></span>
<span class="line"><span style="color:#babed8;">ps -ef | less ps查看进程信息并通过less分页显示</span></span>
<span class="line"><span style="color:#babed8;">history | less 查看命令历史使用记录并通过less分页显示</span></span>
<span class="line"><span style="color:#babed8;">less log2013.log log2014.log 浏览多个文件</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>less 常用命令参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">less与more类似，使用less可以随意浏览文件，而more仅能向前移动，不能向后移动，而且 less 在查看之前不会加载整个文件。</span></span>
<span class="line"><span style="color:#babed8;">less log2013.log 查看文件</span></span>
<span class="line"><span style="color:#babed8;">ps -ef | less ps查看进程信息并通过less分页显示</span></span>
<span class="line"><span style="color:#babed8;">history | less 查看命令历史使用记录并通过less分页显示</span></span>
<span class="line"><span style="color:#babed8;">less log2013.log log2014.log 浏览多个文件</span></span>
<span class="line"><span style="color:#babed8;">常用命令参数：</span></span>
<span class="line"><span style="color:#babed8;">-b &lt;缓冲区大小&gt; 设置缓冲区的大小</span></span>
<span class="line"><span style="color:#babed8;">-g 只标志最后搜索的关键词</span></span>
<span class="line"><span style="color:#babed8;">-i 忽略搜索时的大小写</span></span>
<span class="line"><span style="color:#babed8;">-m 显示类似more命令的百分比</span></span>
<span class="line"><span style="color:#babed8;">-N 显示每行的行号</span></span>
<span class="line"><span style="color:#babed8;">-o &lt;文件名&gt; 将less 输出的内容在指定文件中保存起来</span></span>
<span class="line"><span style="color:#babed8;">-Q 不使用警告音</span></span>
<span class="line"><span style="color:#babed8;">-s 显示连续空行为一行</span></span>
<span class="line"><span style="color:#babed8;">-S 禁止自动换行</span></span>
<span class="line"><span style="color:#babed8;">/字符串：向下搜索&quot;字符串&quot;的功能</span></span>
<span class="line"><span style="color:#babed8;">?字符串：向上搜索&quot;字符串&quot;的功能</span></span>
<span class="line"><span style="color:#babed8;">n：重复前一个搜索（与 / 或 ? 有关）</span></span>
<span class="line"><span style="color:#babed8;">N：反向重复前一个搜索（与 / 或 ? 有关）</span></span>
<span class="line"><span style="color:#babed8;">b 向后翻一页</span></span>
<span class="line"><span style="color:#babed8;">h 显示帮助界面</span></span>
<span class="line"><span style="color:#babed8;">q 退出less 命令</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 显示每行行号</span></span>
<span class="line"><span style="color:#babed8;">less -N test.log</span></span>
<span class="line"><span style="color:#babed8;"># 显示当前位置 百分比</span></span>
<span class="line"><span style="color:#babed8;">less -m test.log</span></span>
<span class="line"><span style="color:#babed8;"># 显示 行号 和 百分比</span></span>
<span class="line"><span style="color:#babed8;">less -N -m test.log</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,12),o=[p];function t(c,b,i,r,d,y){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{h as __pageData,u as default};
