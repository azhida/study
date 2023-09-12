import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/OrgChartJS使用笔记.md","lastUpdated":1680584985000}'),l={name:"web/js/OrgChartJS使用笔记.md"},p=e(`<p><a href="https://balkan.app/OrgChartJS" target="_blank" rel="noreferrer">官网</a></p><h6 id="配置项详解" tabindex="-1">配置项详解 <a class="header-anchor" href="#配置项详解" aria-label="Permalink to &quot;配置项详解&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">var config = {</span></span>
<span class="line"><span style="color:#babed8;">    mouseScrool: OrgChart.action.none,</span></span>
<span class="line"><span style="color:#babed8;">    enableDragDrop: true,</span></span>
<span class="line"><span style="color:#babed8;">    enableTouch: false,</span></span>
<span class="line"><span style="color:#babed8;">    toolbar: {</span></span>
<span class="line"><span style="color:#babed8;">        layout: true,</span></span>
<span class="line"><span style="color:#babed8;">        zoom: true,</span></span>
<span class="line"><span style="color:#babed8;">        fit: true,</span></span>
<span class="line"><span style="color:#babed8;">        expandAll: false</span></span>
<span class="line"><span style="color:#babed8;">    }</span></span>
<span class="line"><span style="color:#babed8;">};</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.lazyLoading: true, // 延迟加载</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.enableSearch: true, // 是否启用高级搜索</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.orientation：OrgChart.orientation.top, // 方向</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 可选值：</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.orientation.top</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.orientation.bottom</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.orientation.right</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.orientation.left</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.orientation.top_left</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.orientation.bottom_left</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.orientation.right_top</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.orientation.left_top</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.mouseScrool ：OrgChart.action.zoom, // 设置操作</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 可选值：</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.action.zoom - will zoom in/out on mouse scroll 鼠标支持放大缩小</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.action.xScroll - left/right move of the chart on mouse scroll 支持左右滑窗</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.action.yScroll - up/down move of the chart on mouse scroll 支持上下滑窗</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.action.none - do nothing on mouse scroll 什么都不支持，只能脱拽</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.nodeBinding：Object, // 绑定模板参数</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.enableDragDrop：false, // 移动节点：true 可移动，false 不可移动</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">config.enableTouch: false, // 是否可触摸</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 启动编辑等功能</span></span>
<span class="line"><span style="color:#babed8;">config.nodeMenu:{</span></span>
<span class="line"><span style="color:#babed8;">    details: {text:&quot;Details&quot;},</span></span>
<span class="line"><span style="color:#babed8;">    edit: {text:&quot;Edit&quot;},</span></span>
<span class="line"><span style="color:#babed8;">    add: {text:&quot;Add&quot;},</span></span>
<span class="line"><span style="color:#babed8;">    remove: {text:&quot;Remove&quot;}       </span></span>
<span class="line"><span style="color:#babed8;">},</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 启动编辑等功能【鼠标右键的方式打开】</span></span>
<span class="line"><span style="color:#babed8;">nodeContextMenu:{</span></span>
<span class="line"><span style="color:#babed8;">    details: {text:&quot;Details&quot;},</span></span>
<span class="line"><span style="color:#babed8;">    edit: {text:&quot;Edit&quot;},</span></span>
<span class="line"><span style="color:#babed8;">    add: {text:&quot;Add&quot;},</span></span>
<span class="line"><span style="color:#babed8;">    remove: {text:&quot;Remove&quot;}       </span></span>
<span class="line"><span style="color:#babed8;">},</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 带有拖放和分组功能</span></span>
<span class="line"><span style="color:#babed8;">dragDropMenu: {</span></span>
<span class="line"><span style="color:#babed8;">    addInGroup: { text: &quot;Add in group&quot; },</span></span>
<span class="line"><span style="color:#babed8;">    addAsChild: { text: &quot;Add as child&quot; }</span></span>
<span class="line"><span style="color:#babed8;">},</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">menu: Menu, // 支持导出到excel、导出到svg和其他组织结构图操作</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">// 工具栏是一组图标或按钮【在右下角显示工具】</span></span>
<span class="line"><span style="color:#babed8;">toolbar: {</span></span>
<span class="line"><span style="color:#babed8;">    layout: true,</span></span>
<span class="line"><span style="color:#babed8;">    zoom: true,</span></span>
<span class="line"><span style="color:#babed8;">    fit: true,</span></span>
<span class="line"><span style="color:#babed8;">    expandAll: false</span></span>
<span class="line"><span style="color:#babed8;">},</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sticky: true, // 移动组织结构图后，停止将其锁定到屏幕顶部</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">nodeMouseClick: OrgChart.action.details,</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 可选值：</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.action.edit 将打开右侧单击的节点的编辑视图</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.action.details 将打开右侧单击的节点的详细信息视图，详细信息是只读的。</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.action.expandCollapse 将展开或折叠子节点</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.action.none 对节点单击事件不执行任何操作</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">showXScroll: OrgChart.scroll.none, // 显示水平滚动条</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">showYScroll: OrgChart.scroll.none, // 显示垂直滚动条</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">template: string, // 切换模板主题</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 可选值：ana | ula | olivia | belinda | rony | mery | polina | mila | diva | luba | derek | base | deborah</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">tags: Tags</span></span>
<span class="line"><span style="color:#babed8;"> // 使用标签选项，您可以：</span></span>
<span class="line"><span style="color:#babed8;">    为标记节点设置特定模板</span></span>
<span class="line"><span style="color:#babed8;">    设置标记节点的默认状态（展开/折叠）</span></span>
<span class="line"><span style="color:#babed8;">    为标记的节点定义组</span></span>
<span class="line"><span style="color:#babed8;">    将节点设置为标记节点的助手</span></span>
<span class="line"><span style="color:#babed8;">    为标记节点设置节点菜单项</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">//为标记节点设置特定模板。有关详细信息，请参阅一个图表中的多个模板。</span></span>
<span class="line"><span style="color:#babed8;">var chart = new OrgChart(document.getElementById(&quot;tree&quot;), {</span></span>
<span class="line"><span style="color:#babed8;">        tags: {</span></span>
<span class="line"><span style="color:#babed8;">            Management: {</span></span>
<span class="line"><span style="color:#babed8;">                template: &quot;rony&quot;</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">        },     </span></span>
<span class="line"><span style="color:#babed8;">        nodes: [</span></span>
<span class="line"><span style="color:#babed8;">            { id: 1, tags: [&quot;Management&quot;] },        </span></span>
<span class="line"><span style="color:#babed8;">        ]</span></span>
<span class="line"><span style="color:#babed8;">    });</span></span>
<span class="line"><span style="color:#babed8;">//设置标记节点的默认状态（展开/折叠）。有关详细信息，请参见展开/折叠。</span></span>
<span class="line"><span style="color:#babed8;">var chart = new OrgChart(document.getElementById(&quot;tree&quot;), {</span></span>
<span class="line"><span style="color:#babed8;">    tags: {</span></span>
<span class="line"><span style="color:#babed8;">        hide: {</span></span>
<span class="line"><span style="color:#babed8;">            state: OrgChart.COLLAPSE</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    nodes: [</span></span>
<span class="line"><span style="color:#babed8;">        { id: &quot;1&quot; },</span></span>
<span class="line"><span style="color:#babed8;">        { id: &quot;2&quot;, tags: [&quot;hide&quot;] },</span></span>
<span class="line"><span style="color:#babed8;">        { id: &quot;3&quot; }</span></span>
<span class="line"><span style="color:#babed8;">    ]</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;">//为标记的节点定义组。有关详细信息，请参见分组。</span></span>
<span class="line"><span style="color:#babed8;">var chart = new OrgChart(document.getElementById(&quot;tree&quot;), {</span></span>
<span class="line"><span style="color:#babed8;">    tags: {</span></span>
<span class="line"><span style="color:#babed8;">        HRs: {</span></span>
<span class="line"><span style="color:#babed8;">            group: true,</span></span>
<span class="line"><span style="color:#babed8;">            groupName: &quot;HR Team&quot;,</span></span>
<span class="line"><span style="color:#babed8;">            groupState: OrgChart.EXPAND,</span></span>
<span class="line"><span style="color:#babed8;">            template: &quot;group_grey&quot;</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    nodes: [</span></span>
<span class="line"><span style="color:#babed8;">        { id: 1, tags: [&quot;HRs&quot;] }</span></span>
<span class="line"><span style="color:#babed8;">    ]</span></span>
<span class="line"><span style="color:#babed8;">});    </span></span>
<span class="line"><span style="color:#babed8;">//将节点设置为标记节点的助手。详见助手。</span></span>
<span class="line"><span style="color:#babed8;">var chart = new OrgChart(document.getElementById(&quot;tree&quot;), {</span></span>
<span class="line"><span style="color:#babed8;">    tags: {</span></span>
<span class="line"><span style="color:#babed8;">        assistant: {</span></span>
<span class="line"><span style="color:#babed8;">            template: &quot;mery&quot;</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">    },</span></span>
<span class="line"><span style="color:#babed8;">    nodes: [</span></span>
<span class="line"><span style="color:#babed8;">        { id: 1, tags: [&quot;assistant&quot;] }</span></span>
<span class="line"><span style="color:#babed8;">    ]</span></span>
<span class="line"><span style="color:#babed8;">}); </span></span>
<span class="line"><span style="color:#babed8;">// 为标记的节点设置节点菜单项。有关详细信息，请参见节点菜单项。  </span></span>
<span class="line"><span style="color:#babed8;">var chart = new OrgChart(document.getElementById(&quot;tree&quot;), {</span></span>
<span class="line"><span style="color:#babed8;">    tags: </span></span>
<span class="line"><span style="color:#babed8;">        customMenuItems: {</span></span>
<span class="line"><span style="color:#babed8;">            nodeMenu: {</span></span>
<span class="line"><span style="color:#babed8;">                add: { text: &quot;Add New&quot; }</span></span>
<span class="line"><span style="color:#babed8;">            }</span></span>
<span class="line"><span style="color:#babed8;">        }</span></span>
<span class="line"><span style="color:#babed8;">      },</span></span>
<span class="line"><span style="color:#babed8;">});</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">linkBinding: Object, // 组织结构图JS中的链接绑定将节点数据映射到链接模板参数【在线中加注释】</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">searchFields: Array string, // 按字段类型进行搜索</span></span>
<span class="line"><span style="color:#babed8;">searchFields: [&quot;name&quot;, &quot;title&quot;],</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">nodes: Array string, // 节点数据JSON对象的数组【节点选项是图表的数据源】</span></span>
<span class="line"><span style="color:#babed8;">nodes: [</span></span>
<span class="line"><span style="color:#babed8;">    { id: &quot;1&quot; },</span></span>
<span class="line"><span style="color:#babed8;">    { id: &quot;2&quot;, pid: &quot;1&quot; },</span></span>
<span class="line"><span style="color:#babed8;">    { id: &quot;3&quot;, pid: &quot;1&quot;, tags: [&quot;Sales&quot;] }</span></span>
<span class="line"><span style="color:#babed8;">]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">clinks: Array string, // Add C link 添加辅助线 实线</span></span>
<span class="line"><span style="color:#babed8;">clinks: [</span></span>
<span class="line"><span style="color:#babed8;">    {from: 4, to: 0, label: &#39;text&#39;}, </span></span>
<span class="line"><span style="color:#babed8;">    {from: 4, to: 5, template: &#39;blue&#39;, label: &#39;4 reports to 5&#39; },</span></span>
<span class="line"><span style="color:#babed8;">    {from: 2, to: 6, template: &#39;yellow&#39;, label: &#39;lorem ipsum&#39; },</span></span>
<span class="line"><span style="color:#babed8;">]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">slinks: Array string, // Add S link 添加辅助线 虚线</span></span>
<span class="line"><span style="color:#babed8;">slinks: [</span></span>
<span class="line"><span style="color:#babed8;">    {from: 4, to: 0, label: &#39;text&#39;}, </span></span>
<span class="line"><span style="color:#babed8;">    {from: 4, to: 5, template: &#39;blue&#39;, label: &#39;reports to&#39; },</span></span>
<span class="line"><span style="color:#babed8;">    {from: 2, to: 6, template: &#39;yellow&#39;, label: &#39;lorem ipsum&#39; },</span></span>
<span class="line"><span style="color:#babed8;">]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">levelSeparation: 60, // 每个级别之间的差距 默认60</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">siblingSeparation: 20, // 子树中节点之间的间距 默认20</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">subtreeSeparation: 20, // 子树之间的间隙 默认40</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">mixedHierarchyNodesSeparation: 5, // 垂直布局中节点之间的间距</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">padding: 20, // 填充选项在组织结构图的所有四个边上设置填充区域</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;">// 还可以使用以下选项：</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.normal</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.mixed</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.tree</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.treeLeftOffset</span></span>
<span class="line"><span style="color:#babed8;">OrgChart.treeRightOffset</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="实例化类" tabindex="-1">实例化类 <a class="header-anchor" href="#实例化类" aria-label="Permalink to &quot;实例化类&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">var chart = new OrgChart(document.getElementById(&quot;tree&quot;), config)</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,33),o=[p];function t(c,i,r,b,d,y){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{g as __pageData,h as default};
