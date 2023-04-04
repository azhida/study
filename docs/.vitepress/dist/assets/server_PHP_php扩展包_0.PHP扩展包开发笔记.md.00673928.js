import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const u=JSON.parse('{"title":"PHP扩展包开发笔记","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/php扩展包/0.PHP扩展包开发笔记.md","lastUpdated":null}'),e={name:"server/PHP/php扩展包/0.PHP扩展包开发笔记.md"},p=l(`<h1 id="php扩展包开发笔记" tabindex="-1">PHP扩展包开发笔记 <a class="header-anchor" href="#php扩展包开发笔记" aria-label="Permalink to &quot;PHP扩展包开发笔记&quot;">​</a></h1><p>##全局安装 包构建工具</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">composer global require &quot;overtrue/package-builder&quot; --prefer-source</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="包构建工具-基本用法" tabindex="-1">包构建工具 基本用法 <a class="header-anchor" href="#包构建工具-基本用法" aria-label="Permalink to &quot;包构建工具 基本用法&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># package-builder build [目标目录]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 在当前目录 ~/www/ 下 创建 tools 扩展包</span></span>
<span class="line"><span style="color:#A6ACCD;">cd ~/www</span></span>
<span class="line"><span style="color:#A6ACCD;">package-builder build ./tools</span></span>
<span class="line"><span style="color:#A6ACCD;"># 然后按提示操作即可</span></span>
<span class="line"><span style="color:#A6ACCD;"># 包名：azhida/tools</span></span>
<span class="line"><span style="color:#A6ACCD;"># 命名空间：Azhida\\Tools </span></span>
<span class="line"><span style="color:#A6ACCD;"># 描述：A tools SDK</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="声明自动加载" tabindex="-1">声明自动加载 <a class="header-anchor" href="#声明自动加载" aria-label="Permalink to &quot;声明自动加载&quot;">​</a></h2><p>composer.json 中声明包自动加载的命名空间</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;autoload&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;psr-4&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;Azhida\\\\Tools\\\\&quot;: &quot;./src/&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>执行命令：<code>composer dump-autoload</code> 或者 <code>composer du</code></p><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h2><p>要用到 <code>overtrue/laravel-wechat</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">composer require overtrue/laravel-wechat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>不需要则不安装</p></blockquote><h2 id="编码" tabindex="-1">编码 <a class="header-anchor" href="#编码" aria-label="Permalink to &quot;编码&quot;">​</a></h2><p>将主要业务逻辑放到 <code>Azhida\\Tools\\Tool</code> 类中</p><p>创建类 <code>Azhida\\Tools\\Tool</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">vim src/Tool.php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">namespace Azhida\\Tools;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Tool</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>创建包的基础异常类 <code>src/Exceptions/Exception.php</code> ，类中不需要其他代码，如下即可</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">namespace Azhida\\Tools\\Exceptions;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Exception extends \\Exception</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>写单元测试 【 todo 以后继续完善 】</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">composer require phpunit/phpunit mockery/mockery --dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="创建测试项目-【非框架】" tabindex="-1">创建测试项目 【非框架】 <a class="header-anchor" href="#创建测试项目-【非框架】" aria-label="Permalink to &quot;创建测试项目 【非框架】&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ cd ~/www</span></span>
<span class="line"><span style="color:#A6ACCD;">$ mkdir tools-test</span></span>
<span class="line"><span style="color:#A6ACCD;">$ cd tools-test</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后在这个测试项目根目录使用 composer 引入刚写的包 <code>azhida/tools</code> ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 需要先初始化 composer.json, 一路回车即可</span></span>
<span class="line"><span style="color:#A6ACCD;">$ composer init  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 配置包路径，注意，这里 \`../tools\` 为相对路径，不要弄错了</span></span>
<span class="line"><span style="color:#A6ACCD;">$ composer config repositories.tools path ../tools    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装扩展包  这里  \`dev-master\`  中的 dev 指该分支下最新的提交，master 是指定的包中的分支名</span></span>
<span class="line"><span style="color:#A6ACCD;">$ composer require azhida/tools:dev-master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>安装完成后，在 <code>tools-test</code> 根目录创建一个 <code>index.php</code> 来测试：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">require __DIR__ .&#39;/vendor/autoload.php&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">use Azhida\\Tools\\Tool;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 方法调用，自行测试</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后执行 <code>index.php</code> 文件，并查看结果是否符合预期</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">php index.php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="为-laravel-集成优化" tabindex="-1">为 Laravel 集成优化 <a class="header-anchor" href="#为-laravel-集成优化" aria-label="Permalink to &quot;为 Laravel 集成优化&quot;">​</a></h2><p>配置信息写到文件 <code>config/services.php</code> 中，当然，也可以写道其他地方，根据自己开发的具体情况安排</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;tools&#39; =&gt; [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;key&#39; =&gt; env(&#39;Tools_API_KEY&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>配置定下来了，接着就是准备编写 service provider ， 文件 <code>src/ServiceProvider.php</code> ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd ~/www/tools</span></span>
<span class="line"><span style="color:#A6ACCD;">vim src/ServiceProvider.php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">namespace Azhida\\Tools;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class ServiceProvider extends \\Illuminate\\Support\\ServiceProvider</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    protected $defer = true;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public function register()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        $this-&gt;app-&gt;singleton(Tool::class, function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">            return new Tool(config(&#39;services.tools.key&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        $this-&gt;app-&gt;alias(Tool::class, &#39;tool&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public function provides()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return [Tool::class, &#39;tool&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>其中我们设置了 <code>$defer</code> 属性为 <code>true</code>，并且添加了方法 <code>provides</code> ，这是 Laravel 扩展包的延迟注册方式，它不会在框架启动就注册，而是当你调用到它的时候才会注册。</p><h3 id="配置-laravel-auto-discovery" tabindex="-1">配置 Laravel Auto Discovery <a class="header-anchor" href="#配置-laravel-auto-discovery" aria-label="Permalink to &quot;配置 Laravel Auto Discovery&quot;">​</a></h3><p>我们需要在 <code>composer.json</code> 中添加如下部分：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;extra&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;laravel&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;providers&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;Azhida\\\\Tools\\\\ServiceProvider&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="在-laravel-项目中测试" tabindex="-1">在 Laravel 项目中测试 <a class="header-anchor" href="#在-laravel-项目中测试" aria-label="Permalink to &quot;在 Laravel 项目中测试&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd ~/www</span></span>
<span class="line"><span style="color:#A6ACCD;">composer create-project laravel/laravel laravel-tools-test</span></span>
<span class="line"><span style="color:#A6ACCD;">cd laravel-tools-test</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 配置包路径，注意，这里 \`../tools\` 为相对路径，不要弄错了</span></span>
<span class="line"><span style="color:#A6ACCD;">composer config repositories.tools path ../tools </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装扩展包</span></span>
<span class="line"><span style="color:#A6ACCD;">composer require azhida/tools:dev-master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="编写友好的说明文档" tabindex="-1">编写友好的说明文档 <a class="header-anchor" href="#编写友好的说明文档" aria-label="Permalink to &quot;编写友好的说明文档&quot;">​</a></h2><p>todo 后续完善</p><h2 id="发布上线" tabindex="-1">发布上线 <a class="header-anchor" href="#发布上线" aria-label="Permalink to &quot;发布上线&quot;">​</a></h2><ul><li>GitHub上建仓库 ，地址：<a href="https://github.com/pangdahua/php7-wxwork-finance-sdk" target="_blank" rel="noreferrer">https://github.com</a></li></ul><h3 id="提交代码到-github仓库" tabindex="-1">提交代码到 github仓库 <a class="header-anchor" href="#提交代码到-github仓库" aria-label="Permalink to &quot;提交代码到 github仓库&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd ~/www/tools</span></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"><span style="color:#A6ACCD;">git add -A</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &#39;first commit&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置远程地址</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin https://github.com/azhida/tools.git</span></span>
<span class="line"><span style="color:#A6ACCD;"># 将提交推送到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git push -u origin master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="提交到-packagist" tabindex="-1">提交到 Packagist <a class="header-anchor" href="#提交到-packagist" aria-label="Permalink to &quot;提交到 Packagist&quot;">​</a></h3><p>使用 GitHub账号登录 <a href="https://packagist.org/" target="_blank" rel="noreferrer">composer</a></p><p>登录composer以后，点击顶部菜单栏 “Submit” 开始提交项目，填入我们 代码所在的 GitHub 的仓库 URL，然后点 &quot;Check&quot;，然后提交即可：</p><h3 id="启用项目的-packagist-通知服务" tabindex="-1">启用项目的 Packagist 通知服务 <a class="header-anchor" href="#启用项目的-packagist-通知服务" aria-label="Permalink to &quot;启用项目的 Packagist 通知服务&quot;">​</a></h3><ul><li>获取 Packagist 的 API Token</li></ul><blockquote><p>访问你在 Packagist 的个人主页：packagist.org/profile/ ，点击 &quot;Show API Token&quot;，复制 token 备用。</p></blockquote><ul><li>给项目代码库启用 Packagist 通知服务 <ul><li>回到我们的 GitHub 项目，点击项目的 Settings 菜单：</li><li>进到设置页以后选择左边的 “Webhooks” 菜单，点击 “Add webhook”，如图：</li><li>填写对应的内容： <ul><li>Payload URL: <code>https://packagist.org/api/github?username=Packagist 的用户名</code>，即 <code>https://packagist.org/api/github?username=azhida</code></li><li>Content type 选择为 <code>application/json</code></li><li>Secret 填写为您刚刚复制的 token</li><li>然后提交即可。</li></ul></li></ul></li></ul><p>那包已经上线成功了，如果你的网络没问题，过几分钟，应该就可以安装开发版了：</p><blockquote><p>没有发布正式版之前，只能安装开发版，像下面这样在包名后面加上 dev-master。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">composer require azhida/tools:dev-master -vvv</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="发布第一个版本" tabindex="-1">发布第一个版本 <a class="header-anchor" href="#发布第一个版本" aria-label="Permalink to &quot;发布第一个版本&quot;">​</a></h2><ul><li>在 github 项目主页点击 &quot;0 releases&quot; 进入到版本管理页面 【也可能在右侧 releases 那里】</li><li>然后点击 &quot;Create new release&quot; 创建一个新的版本： 0.0.1</li><li>填写版本号、这次发版的标题、以及这次版本变化的内容描述，点击提交。</li></ul><p>我们的第一个版本就发布完成了，过几分钟你就可以安装刚刚发布的 0.0.1 版本了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">composer require azhida/tools -vvv</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>发布第二个版本 <ul><li>GitHub项目主页 点击 <code>Releases</code></li><li>Releases 下 点击 <code>Draft a new releas</code></li><li>填写版本号、这次发版的标题、以及这次版本变化的内容描述，点击提交。</li></ul></li></ul><p>第二个版本发布成功了。</p><h2 id="使用-travis-ci-做自动化测试" tabindex="-1">使用 Travis-CI 做自动化测试 <a class="header-anchor" href="#使用-travis-ci-做自动化测试" aria-label="Permalink to &quot;使用 Travis-CI 做自动化测试&quot;">​</a></h2><p>todo 后续完善</p>`,66),o=[p];function c(t,i,r,C,A,d){return a(),n("div",null,o)}const y=s(e,[["render",c]]);export{u as __pageData,y as default};
