import{_ as s,c as a,o as n,a5 as p}from"./chunks/framework.CJNr4pYi.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"php/php扩展包/binarytorch.larecipe.Markdown文档工具.md","filePath":"php/php扩展包/binarytorch.larecipe.Markdown文档工具.md","lastUpdated":1722327281000}'),e={name:"php/php扩展包/binarytorch.larecipe.Markdown文档工具.md"},l=p(`<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>composer require binarytorch/larecipe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>php artisan larecipe:install</span></span></code></pre></div><p>访问： <a href="http://your-domain/docs" target="_blank" rel="noreferrer">http://your-domain/docs</a></p><h2 id="编辑文档" tabindex="-1">编辑文档 <a class="header-anchor" href="#编辑文档" aria-label="Permalink to &quot;编辑文档&quot;">​</a></h2><ul><li>文档路径：resources/docs 目录中</li><li>index 是索引文件</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- ## Get Started</span></span>
<span class="line"><span>    - [Overview](/docs/{{version}}/overview)</span></span>
<span class="line"><span>- ## Example</span></span>
<span class="line"><span>    - [demo](/docs/{{version}}/demo)</span></span></code></pre></div><ul><li>创建新文档 demo.md</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>touch resources/docs/1.0/demo.md</span></span></code></pre></div><ul><li>编辑 resources/docs/1.0/demo.md</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Demo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- [右侧锚点1](#section-1)</span></span>
<span class="line"><span>- [右侧锚点2](#section-2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;a name=&quot;section-1&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span>## 右侧锚点1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 列表1</span></span>
<span class="line"><span>- 列表2</span></span>
<span class="line"><span>- 列表3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>警告</span></span>
<span class="line"><span>&gt; {danger} 警告</span></span>
<span class="line"><span></span></span>
<span class="line"><span>成功</span></span>
<span class="line"><span>&gt; {success} 成功</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;a name=&quot;section-2&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span>## 右侧锚点2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;larecipe-card shadow&gt;</span></span>
<span class="line"><span>    Example card</span></span>
<span class="line"><span>&lt;/larecipe-card&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;larecipe-progress type=&quot;success&quot; :value=&quot;60&quot;&gt;&lt;/larecipe-progress&gt;</span></span></code></pre></div><h2 id="配置-文件-config-larecipe-php" tabindex="-1">配置：文件 config/larecipe.php <a class="header-anchor" href="#配置-文件-config-larecipe-php" aria-label="Permalink to &quot;配置：文件 config/larecipe.php&quot;">​</a></h2><h6 id="配置多版本" tabindex="-1">配置多版本 <a class="header-anchor" href="#配置多版本" aria-label="Permalink to &quot;配置多版本&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    &#39;versions&#39;      =&gt; [</span></span>
<span class="line"><span>        &#39;default&#39;   =&gt; &#39;2.0&#39;,</span></span>
<span class="line"><span>        &#39;published&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;1.0&#39;,</span></span>
<span class="line"><span>            &#39;2.0&#39;</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    ],</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cp -R resources/docs/1.0/ resources/docs/2.0</span></span></code></pre></div><p>resources/docs/2.0/overview.md</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>this is version 2.0</span></span></code></pre></div><h6 id="配置-github跳转" tabindex="-1">配置 github跳转 <a class="header-anchor" href="#配置-github跳转" aria-label="Permalink to &quot;配置 github跳转&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>    &#39;repository&#39;   =&gt; [</span></span>
<span class="line"><span>        &#39;provider&#39; =&gt; &#39;github&#39;,</span></span>
<span class="line"><span>        &#39;url&#39;      =&gt; &#39;https://github.com/liyu001989/laravel-package&#39;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>.</span></span></code></pre></div><p><a href="https://learnku.com/courses/laravel-package/2019/add-beautiful-markdown-documents-to-your-project-binarytorchlarecipe/2324" target="_blank" rel="noreferrer">教程</a></p>`,19),i=[l];function t(c,o,r,d,h,u){return n(),a("div",null,i)}const v=s(e,[["render",t]]);export{b as __pageData,v as default};
