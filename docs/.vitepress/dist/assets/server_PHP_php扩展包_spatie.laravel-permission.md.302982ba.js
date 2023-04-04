import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const u=JSON.parse('{"title":"spatie/laravel-permission","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/php扩展包/spatie.laravel-permission.md","lastUpdated":null}'),e={name:"server/PHP/php扩展包/spatie.laravel-permission.md"},p=l(`<h1 id="spatie-laravel-permission" tabindex="-1"><a href="https://github.com/spatie/laravel-permission" target="_blank" rel="noreferrer">spatie/laravel-permission</a> <a class="header-anchor" href="#spatie-laravel-permission" aria-label="Permalink to &quot;[spatie/laravel-permission](https://github.com/spatie/laravel-permission)&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>权限管理包</p><h2 id="选择理由" tabindex="-1">选择理由 <a class="header-anchor" href="#选择理由" aria-label="Permalink to &quot;选择理由&quot;">​</a></h2><ul><li>作者在积极维护；</li><li>详尽的文档；</li><li>容易理解的数据库结构；</li><li>跟着 Laravel 自带的授权风格走，不会产生冲突；</li><li>重视性能优化 —— 缓存角色和权限信息，高速读取。</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">composer require &quot;spatie/laravel-permission:~5.5&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>生成数据库迁移文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">php artisan vendor:publish --provider=&quot;Spatie\\Permission\\PermissionServiceProvider&quot; --tag=&quot;migrations&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>数据表各自的作用：</p><ul><li>roles —— 角色的模型表；</li><li>permissions —— 权限的模型表；</li><li>model_has_roles —— 模型与角色的关联表，用户拥有什么角色在此表中定义，一个用户能拥有多个角色；</li><li>role_has_permissions —— 角色拥有的权限关联表，如管理员拥有查看后台的权限都是在此表定义，一个角色能拥有多个权限；</li><li>model_has_permissions —— 模型与权限关联表，一个模型能拥有多个权限。</li></ul><p>从最后一张表中可以看出，laravel-permission 允许用户跳过角色，直接拥有权限。</p><p>数据迁移：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">php artisan migrate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>生成配置信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">php artisan vendor:publish --provider=&quot;Spatie\\Permission\\PermissionServiceProvider&quot; --tag=&quot;config&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>配置信息存放于 config/permission.php</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在 User 中使用 laravel-permission 提供的 Trait —— HasRoles，此举能让我们获取到扩展包提供的所有权限和角色的操作方法。</p><p>app/Models/User.php</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">use Spatie\\Permission\\Traits\\HasRoles;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class User extends Authenticatable implements MustVerifyEmail</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    use HasRoles;</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><h3 id="初始化角色和权限" tabindex="-1">初始化角色和权限 <a class="header-anchor" href="#初始化角色和权限" aria-label="Permalink to &quot;初始化角色和权限&quot;">​</a></h3><ul><li>生成迁移文件</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">php artisan make:migration seed_roles_and_permissions_data</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>写入角色和权限内容</li></ul><p>database/migrations/{timestamp}_seed_roles_and_permissions_data.php</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">use Illuminate\\Database\\Eloquent\\Model;</span></span>
<span class="line"><span style="color:#A6ACCD;">use Spatie\\Permission\\Models\\Role;</span></span>
<span class="line"><span style="color:#A6ACCD;">use Spatie\\Permission\\Models\\Permission;</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">    public function up()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 需清除缓存，否则会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">        app(Spatie\\Permission\\PermissionRegistrar::class)-&gt;forgetCachedPermissions();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 先创建权限</span></span>
<span class="line"><span style="color:#A6ACCD;">        Permission::create([&#39;name&#39; =&gt; &#39;manage_contents&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        Permission::create([&#39;name&#39; =&gt; &#39;manage_users&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        Permission::create([&#39;name&#39; =&gt; &#39;edit_settings&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 创建站长角色，并赋予权限</span></span>
<span class="line"><span style="color:#A6ACCD;">        $founder = Role::create([&#39;name&#39; =&gt; &#39;Founder&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        $founder-&gt;givePermissionTo(&#39;manage_contents&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        $founder-&gt;givePermissionTo(&#39;manage_users&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        $founder-&gt;givePermissionTo(&#39;edit_settings&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 创建管理员角色，并赋予权限</span></span>
<span class="line"><span style="color:#A6ACCD;">        $maintainer = Role::create([&#39;name&#39; =&gt; &#39;Maintainer&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">        $maintainer-&gt;givePermissionTo(&#39;manage_contents&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public function down()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 需清除缓存，否则会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">        app(Spatie\\Permission\\PermissionRegistrar::class)-&gt;forgetCachedPermissions();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 清空所有数据表数据</span></span>
<span class="line"><span style="color:#A6ACCD;">        $tableNames = config(&#39;permission.table_names&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        Model::unguard();</span></span>
<span class="line"><span style="color:#A6ACCD;">        DB::table($tableNames[&#39;role_has_permissions&#39;])-&gt;delete();</span></span>
<span class="line"><span style="color:#A6ACCD;">        DB::table($tableNames[&#39;model_has_roles&#39;])-&gt;delete();</span></span>
<span class="line"><span style="color:#A6ACCD;">        DB::table($tableNames[&#39;model_has_permissions&#39;])-&gt;delete();</span></span>
<span class="line"><span style="color:#A6ACCD;">        DB::table($tableNames[&#39;roles&#39;])-&gt;delete();</span></span>
<span class="line"><span style="color:#A6ACCD;">        DB::table($tableNames[&#39;permissions&#39;])-&gt;delete();</span></span>
<span class="line"><span style="color:#A6ACCD;">        Model::reguard();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>为用户指派角色</li></ul><p>生成用户填充数据以后，为 1 号和 2 号用户分别指派角色：</p><p>database/seeders/UsersTableSeeder.php</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class UsersTableSeeder extends Seeder</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    public function run()</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        .</span></span>
<span class="line"><span style="color:#A6ACCD;">        .</span></span>
<span class="line"><span style="color:#A6ACCD;">        .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 初始化用户角色，将 1 号用户指派为『站长』</span></span>
<span class="line"><span style="color:#A6ACCD;">        $user-&gt;assignRole(&#39;Founder&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // 将 2 号用户指派为『管理员』</span></span>
<span class="line"><span style="color:#A6ACCD;">        $user = User::find(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">        $user-&gt;assignRole(&#39;Maintainer&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>刷新测试数据</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">php artisan migrate:refresh --seed</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="方法说明" tabindex="-1">方法说明 <a class="header-anchor" href="#方法说明" aria-label="Permalink to &quot;方法说明&quot;">​</a></h2><ul><li>新建角色</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">use Spatie\\Permission\\Models\\Role;</span></span>
<span class="line"><span style="color:#A6ACCD;">$role = Role::create([&#39;name&#39; =&gt; &#39;Founder&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>为角色添加权限：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">use Spatie\\Permission\\Models\\Permission;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Permission::create([&#39;name&#39; =&gt; &#39;manage_contents&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">$role-&gt;givePermissionTo(&#39;manage_contents&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>赋予用户某个角色：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 单个角色</span></span>
<span class="line"><span style="color:#A6ACCD;">$user-&gt;assignRole(&#39;Founder&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 多个角色</span></span>
<span class="line"><span style="color:#A6ACCD;">$user-&gt;assignRole(&#39;writer&#39;, &#39;admin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 数组形式的多个角色</span></span>
<span class="line"><span style="color:#A6ACCD;">$user-&gt;assignRole([&#39;writer&#39;, &#39;admin&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>检查用户角色：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 是否是站长</span></span>
<span class="line"><span style="color:#A6ACCD;">$user-&gt;hasRole(&#39;Founder&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 是否拥有至少一个角色</span></span>
<span class="line"><span style="color:#A6ACCD;">$user-&gt;hasAnyRole(Role::all());  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 是否拥有所有角色</span></span>
<span class="line"><span style="color:#A6ACCD;">$user-&gt;hasAllRoles(Role::all());   </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>检查权限：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 检查用户是否有某个权限</span></span>
<span class="line"><span style="color:#A6ACCD;">$user-&gt;can(&#39;manage_contents&#39;); </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 检查角色是否拥有某个权限</span></span>
<span class="line"><span style="color:#A6ACCD;">$role-&gt;hasPermissionTo(&#39;manage_contents&#39;);  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>直接给用户添加权限：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 为用户添加『直接权限』</span></span>
<span class="line"><span style="color:#A6ACCD;">$user-&gt;givePermissionTo(&#39;manage_contents&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 获取所有直接权限</span></span>
<span class="line"><span style="color:#A6ACCD;">$user-&gt;getDirectPermissions() </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,47),o=[p];function i(t,c,r,C,A,d){return a(),n("div",null,o)}const m=s(e,[["render",i]]);export{u as __pageData,m as default};
