import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const u=JSON.parse('{"title":"summerblue/administrator","description":"","frontmatter":{},"headers":[],"relativePath":"server/php/php扩展包/summerblue.administrator.md","lastUpdated":1680584985000}'),l={name:"server/php/php扩展包/summerblue.administrator.md"},p=e(`<h1 id="summerblue-administrator" tabindex="-1"><a href="https://github.com/summerblue/administrator" target="_blank" rel="noreferrer">summerblue/administrator</a> <a class="header-anchor" href="#summerblue-administrator" aria-label="Permalink to &quot;[summerblue/administrator](https://github.com/summerblue/administrator)&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>使用 Laravel Administrator 来构建 LaraBBS 管理员后台，管理员可以在后台完成用户、话题和回复的 CURD 操作，还可完成用户权限分配、修改站点设置等任务。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li>使用 Composer 安装</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">composer require &quot;summerblue/administrator:9.*&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>发布资源文件</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">php artisan vendor:publish --provider=&quot;Frozennode\\Administrator\\AdministratorServiceProvider&quot;</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>会生成：<br> config/administrator.php —— 配置信息；<br> public/packages/summerblue/administrator —— 前端资源文件，这是用来做页面渲染的。</p><ul><li>配置信息讲解</li></ul><p>config/administrator.php</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;?php</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">use Illuminate\\Support\\Facades\\Auth;</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">return array(</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 后台的 URI 入口</span></span>
<span class="line"><span style="color:#babed8;">    &#39;uri&#39; =&gt; &#39;admin&#39;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 后台专属域名，没有的话可以留空</span></span>
<span class="line"><span style="color:#babed8;">    &#39;domain&#39; =&gt; &#39;&#39;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 应用名称，在页面标题和左上角站点名称处显示</span></span>
<span class="line"><span style="color:#babed8;">    &#39;title&#39; =&gt; env(&#39;APP_NAME&#39;, &#39;Laravel&#39;),</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 模型配置信息文件存放目录</span></span>
<span class="line"><span style="color:#babed8;">    &#39;model_config_path&#39; =&gt; config_path(&#39;administrator&#39;),</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 配置信息文件存放目录</span></span>
<span class="line"><span style="color:#babed8;">    &#39;settings_config_path&#39; =&gt; config_path(&#39;administrator/settings&#39;),</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    /*</span></span>
<span class="line"><span style="color:#babed8;">     * 后台菜单数组，多维数组渲染结果为多级嵌套菜单。</span></span>
<span class="line"><span style="color:#babed8;">     *</span></span>
<span class="line"><span style="color:#babed8;">     * 数组里的值有三种类型：</span></span>
<span class="line"><span style="color:#babed8;">     * 1. 字符串 —— 子菜单的入口，不可访问；</span></span>
<span class="line"><span style="color:#babed8;">     * 2. 模型配置文件 —— 访问 \`model_config_path\` 目录下的模型文件，如 \`users\` 访问的是 \`users.php\` 模型配置文件；</span></span>
<span class="line"><span style="color:#babed8;">     * 3. 配置信息 —— 必须使用前缀 \`settings.\`，对应 \`settings_config_path\` 目录下的文件，如：默认设置下，</span></span>
<span class="line"><span style="color:#babed8;">     *              \`settings.site\` 访问的是 \`administrator/settings/site.php\` 文件</span></span>
<span class="line"><span style="color:#babed8;">     * 4. 页面文件 —— 必须使用前缀 \`page.\`，如：\`page.pages.analytics\` 对应 \`administrator/pages/analytics.php\`</span></span>
<span class="line"><span style="color:#babed8;">     *               或者是 \`administrator/pages/analytics.blade.php\` ，两种后缀名皆可</span></span>
<span class="line"><span style="color:#babed8;">     *</span></span>
<span class="line"><span style="color:#babed8;">     * 示例：</span></span>
<span class="line"><span style="color:#babed8;">     *     [</span></span>
<span class="line"><span style="color:#babed8;">     *      &#39;users&#39;,</span></span>
<span class="line"><span style="color:#babed8;">     *        &#39;E-Commerce&#39; =&gt; [&#39;collections&#39;, &#39;products&#39;, &#39;product_images&#39;, &#39;orders&#39;],</span></span>
<span class="line"><span style="color:#babed8;">     *        &#39;Settings&#39;  =&gt; [&#39;settings.site&#39;, &#39;settings.ecommerce&#39;, &#39;settings.social&#39;],</span></span>
<span class="line"><span style="color:#babed8;">     *         &#39;Analytics&#39; =&gt; [&#39;E-Commerce&#39; =&gt; &#39;page.pages.analytics&#39;],</span></span>
<span class="line"><span style="color:#babed8;">     *    ]</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    &#39;menu&#39; =&gt; [</span></span>
<span class="line"><span style="color:#babed8;">        &#39;用户与权限&#39; =&gt; [</span></span>
<span class="line"><span style="color:#babed8;">            &#39;users&#39;,</span></span>
<span class="line"><span style="color:#babed8;">        ],</span></span>
<span class="line"><span style="color:#babed8;">    ],</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    /*</span></span>
<span class="line"><span style="color:#babed8;">     * 权限控制的回调函数。</span></span>
<span class="line"><span style="color:#babed8;">     *</span></span>
<span class="line"><span style="color:#babed8;">     * 此回调函数需要返回 true 或 false ，用来检测当前用户是否有权限访问后台。</span></span>
<span class="line"><span style="color:#babed8;">     * \`true\` 为通过，\`false\` 会将页面重定向到 \`login_path\` 选项定义的 URL 中。</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    &#39;permission&#39; =&gt; function () {</span></span>
<span class="line"><span style="color:#babed8;">        // 只要是能管理内容的用户，就允许访问后台</span></span>
<span class="line"><span style="color:#babed8;">        return Auth::check() &amp;&amp; Auth::user()-&gt;can(&#39;manage_contents&#39;);</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    /*</span></span>
<span class="line"><span style="color:#babed8;">     * 使用布尔值来设定是否使用后台主页面。</span></span>
<span class="line"><span style="color:#babed8;">     *</span></span>
<span class="line"><span style="color:#babed8;">     * 如值为 \`true\`，将使用 \`dashboard_view\` 定义的视图文件渲染页面；</span></span>
<span class="line"><span style="color:#babed8;">     * 如值为 \`false\`，将使用 \`home_page\` 定义的菜单条目来作为后台主页。</span></span>
<span class="line"><span style="color:#babed8;">     */</span></span>
<span class="line"><span style="color:#babed8;">    &#39;use_dashboard&#39; =&gt; false,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 设置后台主页视图文件，由 \`use_dashboard\` 选项决定</span></span>
<span class="line"><span style="color:#babed8;">    &#39;dashboard_view&#39; =&gt; &#39;&#39;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 用来作为后台主页的菜单条目，由 \`use_dashboard\` 选项决定，菜单指的是 \`menu\` 选项</span></span>
<span class="line"><span style="color:#babed8;">    &#39;home_page&#39; =&gt; &#39;users&#39;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 右上角『返回主站』按钮的链接</span></span>
<span class="line"><span style="color:#babed8;">    &#39;back_to_site_path&#39; =&gt; &#39;/&#39;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 当选项 \`permission\` 权限检测不通过时，会重定向用户到此处设置的路径</span></span>
<span class="line"><span style="color:#babed8;">    &#39;login_path&#39; =&gt; &#39;login&#39;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 允许在登录成功后使用 Session::get(&#39;redirect&#39;) 将用户重定向到原本想要访问的后台页面</span></span>
<span class="line"><span style="color:#babed8;">    &#39;login_redirect_key&#39; =&gt; &#39;redirect&#39;,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 控制模型数据列表页默认的显示条目</span></span>
<span class="line"><span style="color:#babed8;">    &#39;global_rows_per_page&#39; =&gt; 20,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">    // 可选的语言，如果不为空，将会在页面顶部显示『选择语言』按钮</span></span>
<span class="line"><span style="color:#babed8;">    &#39;locales&#39; =&gt; [],</span></span>
<span class="line"><span style="color:#babed8;">);</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>下面着重讲下两个选项：<br><code>permission</code> —— 生产环境中，请谨慎定义好访问权限，否则将造成安全威胁；<br><code>menu</code> —— 后台管理菜单，后面新增 Model 管理时，我们将会频繁修改此选项。</p><ul><li>创建必要的文件夹</li></ul><p>Administrator 会监测 <code>settings_config_path</code> 和 <code>model_config_path</code> 选项目录是否能正常访问，否则会报错，故我们先使用以下命令新建目录：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">mkdir -p config/administrator/settings</span></span>
<span class="line"><span style="color:#babed8;">touch config/administrator/settings/.gitkeep</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>在空文件夹中放置 <code>.gitkeep</code> 保证了 Git 会将此文件夹纳入版本控制器中。</p>`,17),o=[p];function t(c,i,r,b,d,y){return a(),n("div",null,o)}const g=s(l,[["render",t]]);export{u as __pageData,g as default};
