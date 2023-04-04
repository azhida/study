import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/Windows系统/Excel使用笔记.md","lastUpdated":1680584985000}'),p={name:"other/Windows系统/Excel使用笔记.md"},e=l(`<ul><li>自动适应列宽或列宽</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">选择行|列 --&gt; 开始 --&gt; 格式 --&gt; 自动调整行高|自动调整列宽</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>将日期转为 纯文本</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 公式</span></span>
<span class="line"><span style="color:#A6ACCD;">=TEXT(D2,&quot;YYYY-MM-DD HH:MM:SS&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"># 将 公式 计算结果 复制，并 右键选择性粘贴 为 值 即可</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>填充公式的方法</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 写好第一行的公式</span></span>
<span class="line"><span style="color:#A6ACCD;"># 选择包含第一行公式在内的待填充区域</span></span>
<span class="line"><span style="color:#A6ACCD;"># 开始 -- 填充 -- 向下</span></span>
<span class="line"><span style="color:#A6ACCD;"># 填充完成</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>选择区域的方法</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 方法 1 ：</span></span>
<span class="line"><span style="color:#A6ACCD;">输入框最左侧 输入 A1:D100</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 方法 2 ：</span></span>
<span class="line"><span style="color:#A6ACCD;">Ctrl + Shift + 箭头【上下左右】</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>快速筛查重复项</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 方法 1 ：</span></span>
<span class="line"><span style="color:#A6ACCD;"># 选中列</span></span>
<span class="line"><span style="color:#A6ACCD;"># 开始 -&gt; 条件格式 → 突出显示单元格规则 → 重复项</span></span>
<span class="line"><span style="color:#A6ACCD;"># 选中所有的数据</span></span>
<span class="line"><span style="color:#A6ACCD;"># 开始 -- 排序和筛选</span></span>
<span class="line"><span style="color:#A6ACCD;"># 按颜色排序</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),o=[e];function t(c,i,C,r,A,d){return a(),n("div",null,o)}const D=s(p,[["render",t]]);export{u as __pageData,D as default};
