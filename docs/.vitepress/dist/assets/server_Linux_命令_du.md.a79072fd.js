import{_ as a,o as e,c as s,Q as l}from"./chunks/framework.92222dd1.js";const b=JSON.parse('{"title":"du 命令","description":"","frontmatter":{},"headers":[],"relativePath":"server/Linux/命令/du.md","lastUpdated":null}'),n={name:"server/Linux/命令/du.md"},o=l(`<h1 id="du-命令" tabindex="-1">du 命令 <a class="header-anchor" href="#du-命令" aria-label="Permalink to &quot;du 命令&quot;">​</a></h1><p>Linux du命令也是查看使用空间的，但是与df命令不同的是Linux du命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的。</p><h2 id="命令格式" tabindex="-1">命令格式： <a class="header-anchor" href="#命令格式" aria-label="Permalink to &quot;命令格式：&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">du [选项][文件]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="命令功能" tabindex="-1">命令功能： <a class="header-anchor" href="#命令功能" aria-label="Permalink to &quot;命令功能：&quot;">​</a></h2><p>显示每个文件和目录的磁盘使用空间。</p><h2 id="命令参数" tabindex="-1">命令参数： <a class="header-anchor" href="#命令参数" aria-label="Permalink to &quot;命令参数：&quot;">​</a></h2><ul><li><code>-a或-all</code>：显示目录中个别文件的大小。</li><li><code>-b或-bytes</code>：显示目录或文件大小时，以byte为单位。</li><li><code>-c或--total</code> 除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。</li><li><code>-k或--kilobytes</code> 以KB(1024bytes)为单位输出。</li><li><code>-m或--megabytes</code> 以MB为单位输出。</li><li><code>-s或--summarize</code> 仅显示总计，只列出最后加总的值。</li><li><code>-h或--human-readable</code> 以K，M，G为单位，提高信息的可读性。</li><li><code>-x或--one-file-xystem</code> 以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。</li><li><code>-L&lt;符号链接&gt;或--dereference&lt;符号链接&gt;</code> 显示选项中所指定符号链接的源文件大小。</li><li><code>-S或--separate-dirs</code> 显示个别目录的大小时，并不含其子目录的大小。</li><li><code>-X&lt;文件&gt;或--exclude-from=&lt;文件&gt;</code> 在&lt;文件&gt;指定目录或文件。</li><li><code>--exclude=&lt;目录或文件&gt;</code> 略过指定的目录或文件。</li><li><code>-D或--dereference-args</code> 显示指定符号链接的源文件大小。</li><li><code>-H或--si</code> 与-h参数相同，但是K，M，G是以1000为换算单位。</li><li><code>-l或--count-links</code> 重复计算硬件链接的文件。</li></ul><h2 id="使用实例" tabindex="-1">使用实例： <a class="header-anchor" href="#使用实例" aria-label="Permalink to &quot;使用实例：&quot;">​</a></h2><h3 id="实例1-显示目录或者文件所占空间" tabindex="-1">实例1：显示目录或者文件所占空间 <a class="header-anchor" href="#实例1-显示目录或者文件所占空间" aria-label="Permalink to &quot;实例1：显示目录或者文件所占空间&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">du</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>只显示当前目录下面的子目录的目录大小和当前目录的总的大小，最下面的1288为当前目录的总大小</p></blockquote><h3 id="实例2-显示指定文件所占空间" tabindex="-1">实例2：显示指定文件所占空间 <a class="header-anchor" href="#实例2-显示指定文件所占空间" aria-label="Permalink to &quot;实例2：显示指定文件所占空间&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># du filename</span></span>
<span class="line"><span style="color:#A6ACCD;">du log2012.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="实例3-查看指定目录的所占空间" tabindex="-1">实例3：查看指定目录的所占空间 <a class="header-anchor" href="#实例3-查看指定目录的所占空间" aria-label="Permalink to &quot;实例3：查看指定目录的所占空间&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># du path</span></span>
<span class="line"><span style="color:#A6ACCD;">du /var/www/test</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="实例4-显示多个文件所占空间" tabindex="-1">实例4：显示多个文件所占空间 <a class="header-anchor" href="#实例4-显示多个文件所占空间" aria-label="Permalink to &quot;实例4：显示多个文件所占空间&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">du filename1 filename2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="实例5-只显示总和的大小-后面可以带上目录-指定查看该目录的总和" tabindex="-1">实例5：只显示总和的大小[后面可以带上目录，指定查看该目录的总和] <a class="header-anchor" href="#实例5-只显示总和的大小-后面可以带上目录-指定查看该目录的总和" aria-label="Permalink to &quot;实例5：只显示总和的大小[后面可以带上目录，指定查看该目录的总和]&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">du -s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="实例6-方便阅读的格式显示" tabindex="-1">实例6：方便阅读的格式显示 <a class="header-anchor" href="#实例6-方便阅读的格式显示" aria-label="Permalink to &quot;实例6：方便阅读的格式显示&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">du -h path</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="实例7-文件和目录都显示" tabindex="-1">实例7：文件和目录都显示 <a class="header-anchor" href="#实例7-文件和目录都显示" aria-label="Permalink to &quot;实例7：文件和目录都显示&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">du -ah path</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="实例8-显示几个文件或目录各自占用磁盘空间的大小-还统计它们的总和" tabindex="-1">实例8：显示几个文件或目录各自占用磁盘空间的大小，还统计它们的总和 <a class="header-anchor" href="#实例8-显示几个文件或目录各自占用磁盘空间的大小-还统计它们的总和" aria-label="Permalink to &quot;实例8：显示几个文件或目录各自占用磁盘空间的大小，还统计它们的总和&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">du -c finame1 finame2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>加上-c选项后，du不仅显示两个目录各自占用磁盘空间的大小，还在最后一行统计它们的总和。</p></blockquote><h3 id="实例9-按照空间大小排序" tabindex="-1">实例9：按照空间大小排序 <a class="header-anchor" href="#实例9-按照空间大小排序" aria-label="Permalink to &quot;实例9：按照空间大小排序&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">du|sort -nr|more</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="实例10-输出当前目录下各个子目录所使用的空间" tabindex="-1">实例10：输出当前目录下各个子目录所使用的空间 <a class="header-anchor" href="#实例10-输出当前目录下各个子目录所使用的空间" aria-label="Permalink to &quot;实例10：输出当前目录下各个子目录所使用的空间&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">du -h  --max-depth=1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,31),t=[o];function i(c,p,d,r,h,u){return e(),s("div",null,t)}const m=a(n,[["render",i]]);export{b as __pageData,m as default};
