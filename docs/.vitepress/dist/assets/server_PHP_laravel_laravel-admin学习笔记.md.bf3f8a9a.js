import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/PHP/laravel/laravel-admin学习笔记.md","lastUpdated":null}'),e={name:"server/PHP/laravel/laravel-admin学习笔记.md"},p=l(`<h4 id="权限控制部分-路由权限控制" tabindex="-1">权限控制部分 -- 路由权限控制 <a class="header-anchor" href="#权限控制部分-路由权限控制" aria-label="Permalink to &quot;权限控制部分 -- 路由权限控制&quot;">​</a></h4><ul><li>创建管理员：角色暂时留空【因为还没有创建角色】；</li><li>创建权限：标识和名称自己写一个，与操作的路由具有一定关联意思的就行，便于识别；</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">在laravel-admin 1.5中，权限和路由是绑定在一起的，在编辑权限页面里面设置当前权限能访问的路由，在HTTP方法select框中选择访问路由的方法，在HTTP路径textarea中填写能访问的路径。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">比如要添加一个权限，该权限可以以GET方式访问路径/admin/users，那么HTTP方法选择GET，HTTP路径填写/users。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">如果要访问前缀是/admin/users的所有路径，那么HTTP路径填写/users*，如果权限包括多个访问路径，换行填写每条路径</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>创建角色：可以配置刚刚创建的权限了；</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">必须赋予Dashboard（显示仪表盘）、Login（登入、登出）、User setting（用户信息设置，密码修改等）权限。</span></span>
<span class="line"><span style="color:#A6ACCD;">否则会出现奇奇怪怪的BUG，比如没有 Login 权限就只能登入，但无法登出。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>给管理员赋予角色：编辑管理员页面将刚创建的角色选上就行</li></ul><h4 id="菜单权限控制" tabindex="-1">菜单权限控制 <a class="header-anchor" href="#菜单权限控制" aria-label="Permalink to &quot;菜单权限控制&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">创建菜单时，可以指定权限，也可以同时指定角色</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="since-v1-7-16-内置数据导出功能-导出-csv-乱码解决办法" tabindex="-1">since v1.7.16 内置数据导出功能，导出 csv 乱码解决办法： <a class="header-anchor" href="#since-v1-7-16-内置数据导出功能-导出-csv-乱码解决办法" aria-label="Permalink to &quot;since v1.7.16 内置数据导出功能，导出 csv 乱码解决办法：&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$grid-&gt;export(function ($export) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    print(chr(0xEF).chr(0xBB).chr(0xBF)); // 添加这一行，可以解决导出的csv文件乱码问题</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    $export-&gt;filename(&#39;Filename.csv&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    $export-&gt;except([&#39;column1&#39;, &#39;column2&#39; ...]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    $export-&gt;only([&#39;column3&#39;, &#39;column4&#39; ...]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    $export-&gt;originalValue([&#39;column1&#39;, &#39;column2&#39; ...]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    $export-&gt;column(&#39;column_5&#39;, function ($value, $original) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return $value;</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="备份和导入管理后台菜单数据" tabindex="-1">备份和导入管理后台菜单数据 <a class="header-anchor" href="#备份和导入管理后台菜单数据" aria-label="Permalink to &quot;备份和导入管理后台菜单数据&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 导出数据，生成文件 database/seeders/AdminTablesSeeder.php </span></span>
<span class="line"><span style="color:#A6ACCD;"># 备份5个数据表：admin_menus、admin_permissions、admin_roles、admin_role_menu、admin_role_permissions</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan admin:export-seed</span></span>
<span class="line"><span style="color:#A6ACCD;"># 备份包括管理员在内的所有后台数据</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan admin:export-seed --users</span></span>
<span class="line"><span style="color:#A6ACCD;"># 备份除created_at,updated_at外的全部字段</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan admin:export-seed --users --except-fields=created_at,updated_at</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 导入数据</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan db:seed --class=AdminTablesSeeder</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 额外：如果管理后台没有超级管理员，则创建一个管理员用户</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan admin:create-user</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="模型关联-驼峰显示-关联的模型名" tabindex="-1">模型关联 驼峰显示 关联的模型名 <a class="header-anchor" href="#模型关联-驼峰显示-关联的模型名" aria-label="Permalink to &quot;模型关联 驼峰显示 关联的模型名&quot;">​</a></h4><p>在主模型加上属性</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public static $snakeAttributes = false;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$order = Order::query()-&gt;with([orderItems])-&gt;first();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">要在 Order模型添加 $snakeAttributes 属性</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),o=[p];function t(c,i,r,C,A,d){return a(),n("div",null,o)}const h=s(e,[["render",t]]);export{y as __pageData,h as default};
