import{_ as l,o as i,c as a,Q as s}from"./chunks/framework.aaef0e9b.js";const b=JSON.parse('{"title":"Linux zip命令","description":"","frontmatter":{},"headers":[],"relativePath":"server/linux/命令/备份压缩/zip.md","lastUpdated":1680584985000}'),e={name:"server/linux/命令/备份压缩/zip.md"},t=s(`<h1 id="linux-zip命令" tabindex="-1">Linux zip命令 <a class="header-anchor" href="#linux-zip命令" aria-label="Permalink to &quot;Linux zip命令&quot;">​</a></h1><p>Linux zip 命令用于压缩文件。</p><p>zip 是个使用广泛的压缩程序，压缩后的文件后缀名为 <code>.zip</code>。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">zip [-AcdDfFghjJKlLmoqrSTuvVwXyz$][-b &lt;工作目录&gt;][-ll][-n &lt;字尾字符串&gt;][-t &lt;日期时间&gt;][-&lt;压缩效率&gt;][压缩文件][文件...][-i &lt;范本样式&gt;][-x &lt;范本样式&gt;]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p><strong>参数</strong> ：</p><ul><li>-A 调整可执行的自动解压缩文件。</li><li>-b&lt;工作目录&gt; 指定暂时存放文件的目录。</li><li>-c 替每个被压缩的文件加上注释。</li><li>-d 从压缩文件内删除指定的文件。</li><li>-D 压缩文件内不建立目录名称。</li><li>-f 更新现有的文件。</li><li>-F 尝试修复已损坏的压缩文件。</li><li>-g 将文件压缩后附加在既有的压缩文件之后，而非另行建立新的压缩文件。</li><li>-h 在线帮助。</li><li>-i&lt;范本样式&gt; 只压缩符合条件的文件。</li><li>-j 只保存文件名称及其内容，而不存放任何目录名称。</li><li>-J 删除压缩文件前面不必要的数据。</li><li>-k 使用MS-DOS兼容格式的文件名称。</li><li>-l 压缩文件时，把LF字符置换成LF+CR字符。</li><li>-ll 压缩文件时，把LF+CR字符置换成LF字符。</li><li>-L 显示版权信息。</li><li>-m 将文件压缩并加入压缩文件后，删除原始文件，即把文件移到压缩文件中。</li><li>-n&lt;字尾字符串&gt; 不压缩具有特定字尾字符串的文件。</li><li>-o 以压缩文件内拥有最新更改时间的文件为准，将压缩文件的更改时间设成和该文件相同。</li><li>-q 不显示指令执行过程。</li><li>-r 递归处理，将指定目录下的所有文件和子目录一并处理。</li><li>-S 包含系统和隐藏文件。</li><li>-t&lt;日期时间&gt; 把压缩文件的日期设成指定的日期。</li><li>-T 检查备份文件内的每个文件是否正确无误。</li><li>-u 与 -f 参数类似，但是除了更新现有的文件外，也会将压缩文件中的其他文件解压缩到目录中。</li><li>-v 显示指令执行过程或显示版本信息。</li><li>-V 保存VMS操作系统的文件属性。</li><li>-w 在文件名称里假如版本编号，本参数仅在VMS操作系统下有效。</li><li>-x&lt;范本样式&gt; 压缩时排除符合条件的文件。</li><li>-X 不保存额外的文件属性。</li><li>-y 直接保存符号连接，而非该连接所指向的文件，本参数仅在UNIX之类的系统下有效。</li><li>-z 替压缩文件加上注释。</li><li>-$ 保存第一个被压缩文件所在磁盘的卷册名称。</li><li>-&lt;压缩效率&gt; 压缩效率是一个介于1-9的数值。</li></ul><h3 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h3><p>将 /home/html/ 这个目录下所有文件和文件夹打包为当前目录下的 html.zip：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">zip -q -r html.zip /home/html</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>如果在我们在 /home/html 目录下，可以执行以下命令：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">zip -q -r html.zip *</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>从压缩文件 cp.zip 中删除文件 a.c</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">zip -dv cp.zip a.c</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,14),n=[t];function p(o,c,r,d,h,u){return i(),a("div",null,n)}const m=l(e,[["render",p]]);export{b as __pageData,m as default};
