import{_ as s,o as a,c as n,Q as t}from"./chunks/framework.92222dd1.js";const d=JSON.parse('{"title":"vue 文件保存时自动格式化","description":"","frontmatter":{},"headers":[],"relativePath":"dev-tool/VSCode/vue文件保存时自动格式化.md","lastUpdated":null}'),o={name:"dev-tool/VSCode/vue文件保存时自动格式化.md"},e=t(`<h1 id="vue-文件保存时自动格式化" tabindex="-1">vue 文件保存时自动格式化 <a class="header-anchor" href="#vue-文件保存时自动格式化" aria-label="Permalink to &quot;vue 文件保存时自动格式化&quot;">​</a></h1><h2 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h2><ul><li>eslint</li><li>Vetur</li><li>Prettier - Code formatter</li></ul><h2 id="修改编辑器配置文件" tabindex="-1">修改编辑器配置文件 <a class="header-anchor" href="#修改编辑器配置文件" aria-label="Permalink to &quot;修改编辑器配置文件&quot;">​</a></h2><ul><li>打开编辑器配置文件：文件--首选项--设置--打开设置文件(json)【设置页面的右上角】</li><li>写入内容（注意：是添加，不要删除你原来的配置，如果有重复就单独处理即可）</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.suggestSelection&quot;: &quot;first&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vsintellicode.modify.editor.suggestSelection&quot;: &quot;automaticallyOverrodeDefaultValue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;explorer.confirmDelete&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.tabSize&quot;: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;files.autoSave&quot;: &quot;onFocusChange&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.fontSize&quot;: 14, // 设置字体</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.tabCompletion&quot;: &quot;on&quot;, // 用来在出现推荐值时，按下Tab键是否自动填入最佳推荐值</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;source.fixAll.eslint&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;source.organizeImports&quot;: true // 这个属性能够在保存时，自动调整 import 语句相关顺序，能够让你的 import 语句按照字母顺序进行排列</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // #让vue中的js按&quot;prettier&quot;格式进行格式化</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatter.html&quot;: &quot;js-beautify-html&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatter.js&quot;:&quot;prettier-eslint&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vetur.format.defaultFormatterOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;js-beautify-html&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // #vue组件中html代码格式化样式</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;wrap_attributes&quot;: &quot;auto&quot;, //也可以设置为“auto”，效果会不一样</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;wrap_line_length&quot;: 200,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;end_with_newline&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;semi&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;singleQuote&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;prettier&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;semi&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;singleQuote&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.tabSize&quot;: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;prettyhtml&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;printWidth&quot;: 160,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;singleQuote&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;wrapAttributes&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;sortAttributes&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;[vue]&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;editor.defaultFormatter&quot;: &quot;octref.vetur&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;bracketPairColorizer.depreciation-notice&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;editor.mouseWheelZoom&quot;: true</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),l=[e];function p(r,u,i,c,C,A){return a(),n("div",null,l)}const y=s(o,[["render",p]]);export{d as __pageData,y as default};
