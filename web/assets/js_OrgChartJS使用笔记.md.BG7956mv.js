import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.CDwh3-Fg.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"js/OrgChartJS使用笔记.md","filePath":"js/OrgChartJS使用笔记.md","lastUpdated":1722500431000}'),e={name:"js/OrgChartJS使用笔记.md"},t=p(`<p><a href="https://balkan.app/OrgChartJS" target="_blank" rel="noreferrer">官网</a></p><h6 id="配置项详解" tabindex="-1">配置项详解 <a class="header-anchor" href="#配置项详解" aria-label="Permalink to &quot;配置项详解&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var config = {</span></span>
<span class="line"><span>    mouseScrool: OrgChart.action.none,</span></span>
<span class="line"><span>    enableDragDrop: true,</span></span>
<span class="line"><span>    enableTouch: false,</span></span>
<span class="line"><span>    toolbar: {</span></span>
<span class="line"><span>        layout: true,</span></span>
<span class="line"><span>        zoom: true,</span></span>
<span class="line"><span>        fit: true,</span></span>
<span class="line"><span>        expandAll: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>config.lazyLoading: true, // 延迟加载</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>config.enableSearch: true, // 是否启用高级搜索</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>config.orientation：OrgChart.orientation.top, // 方向</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 可选值：</span></span>
<span class="line"><span>OrgChart.orientation.top</span></span>
<span class="line"><span>OrgChart.orientation.bottom</span></span>
<span class="line"><span>OrgChart.orientation.right</span></span>
<span class="line"><span>OrgChart.orientation.left</span></span>
<span class="line"><span>OrgChart.orientation.top_left</span></span>
<span class="line"><span>OrgChart.orientation.bottom_left</span></span>
<span class="line"><span>OrgChart.orientation.right_top</span></span>
<span class="line"><span>OrgChart.orientation.left_top</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>config.mouseScrool ：OrgChart.action.zoom, // 设置操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 可选值：</span></span>
<span class="line"><span>OrgChart.action.zoom - will zoom in/out on mouse scroll 鼠标支持放大缩小</span></span>
<span class="line"><span>OrgChart.action.xScroll - left/right move of the chart on mouse scroll 支持左右滑窗</span></span>
<span class="line"><span>OrgChart.action.yScroll - up/down move of the chart on mouse scroll 支持上下滑窗</span></span>
<span class="line"><span>OrgChart.action.none - do nothing on mouse scroll 什么都不支持，只能脱拽</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>config.nodeBinding：Object, // 绑定模板参数</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>config.enableDragDrop：false, // 移动节点：true 可移动，false 不可移动</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>config.enableTouch: false, // 是否可触摸</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 启动编辑等功能</span></span>
<span class="line"><span>config.nodeMenu:{</span></span>
<span class="line"><span>    details: {text:&quot;Details&quot;},</span></span>
<span class="line"><span>    edit: {text:&quot;Edit&quot;},</span></span>
<span class="line"><span>    add: {text:&quot;Add&quot;},</span></span>
<span class="line"><span>    remove: {text:&quot;Remove&quot;}       </span></span>
<span class="line"><span>},</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 启动编辑等功能【鼠标右键的方式打开】</span></span>
<span class="line"><span>nodeContextMenu:{</span></span>
<span class="line"><span>    details: {text:&quot;Details&quot;},</span></span>
<span class="line"><span>    edit: {text:&quot;Edit&quot;},</span></span>
<span class="line"><span>    add: {text:&quot;Add&quot;},</span></span>
<span class="line"><span>    remove: {text:&quot;Remove&quot;}       </span></span>
<span class="line"><span>},</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 带有拖放和分组功能</span></span>
<span class="line"><span>dragDropMenu: {</span></span>
<span class="line"><span>    addInGroup: { text: &quot;Add in group&quot; },</span></span>
<span class="line"><span>    addAsChild: { text: &quot;Add as child&quot; }</span></span>
<span class="line"><span>},</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>menu: Menu, // 支持导出到excel、导出到svg和其他组织结构图操作</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 工具栏是一组图标或按钮【在右下角显示工具】</span></span>
<span class="line"><span>toolbar: {</span></span>
<span class="line"><span>    layout: true,</span></span>
<span class="line"><span>    zoom: true,</span></span>
<span class="line"><span>    fit: true,</span></span>
<span class="line"><span>    expandAll: false</span></span>
<span class="line"><span>},</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sticky: true, // 移动组织结构图后，停止将其锁定到屏幕顶部</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nodeMouseClick: OrgChart.action.details,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 可选值：</span></span>
<span class="line"><span>OrgChart.action.edit 将打开右侧单击的节点的编辑视图</span></span>
<span class="line"><span>OrgChart.action.details 将打开右侧单击的节点的详细信息视图，详细信息是只读的。</span></span>
<span class="line"><span>OrgChart.action.expandCollapse 将展开或折叠子节点</span></span>
<span class="line"><span>OrgChart.action.none 对节点单击事件不执行任何操作</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>showXScroll: OrgChart.scroll.none, // 显示水平滚动条</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>showYScroll: OrgChart.scroll.none, // 显示垂直滚动条</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>template: string, // 切换模板主题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 可选值：ana | ula | olivia | belinda | rony | mery | polina | mila | diva | luba | derek | base | deborah</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>tags: Tags</span></span>
<span class="line"><span> // 使用标签选项，您可以：</span></span>
<span class="line"><span>    为标记节点设置特定模板</span></span>
<span class="line"><span>    设置标记节点的默认状态（展开/折叠）</span></span>
<span class="line"><span>    为标记的节点定义组</span></span>
<span class="line"><span>    将节点设置为标记节点的助手</span></span>
<span class="line"><span>    为标记节点设置节点菜单项</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//为标记节点设置特定模板。有关详细信息，请参阅一个图表中的多个模板。</span></span>
<span class="line"><span>var chart = new OrgChart(document.getElementById(&quot;tree&quot;), {</span></span>
<span class="line"><span>        tags: {</span></span>
<span class="line"><span>            Management: {</span></span>
<span class="line"><span>                template: &quot;rony&quot;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        },     </span></span>
<span class="line"><span>        nodes: [</span></span>
<span class="line"><span>            { id: 1, tags: [&quot;Management&quot;] },        </span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>//设置标记节点的默认状态（展开/折叠）。有关详细信息，请参见展开/折叠。</span></span>
<span class="line"><span>var chart = new OrgChart(document.getElementById(&quot;tree&quot;), {</span></span>
<span class="line"><span>    tags: {</span></span>
<span class="line"><span>        hide: {</span></span>
<span class="line"><span>            state: OrgChart.COLLAPSE</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    nodes: [</span></span>
<span class="line"><span>        { id: &quot;1&quot; },</span></span>
<span class="line"><span>        { id: &quot;2&quot;, tags: [&quot;hide&quot;] },</span></span>
<span class="line"><span>        { id: &quot;3&quot; }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>//为标记的节点定义组。有关详细信息，请参见分组。</span></span>
<span class="line"><span>var chart = new OrgChart(document.getElementById(&quot;tree&quot;), {</span></span>
<span class="line"><span>    tags: {</span></span>
<span class="line"><span>        HRs: {</span></span>
<span class="line"><span>            group: true,</span></span>
<span class="line"><span>            groupName: &quot;HR Team&quot;,</span></span>
<span class="line"><span>            groupState: OrgChart.EXPAND,</span></span>
<span class="line"><span>            template: &quot;group_grey&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    nodes: [</span></span>
<span class="line"><span>        { id: 1, tags: [&quot;HRs&quot;] }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>});    </span></span>
<span class="line"><span>//将节点设置为标记节点的助手。详见助手。</span></span>
<span class="line"><span>var chart = new OrgChart(document.getElementById(&quot;tree&quot;), {</span></span>
<span class="line"><span>    tags: {</span></span>
<span class="line"><span>        assistant: {</span></span>
<span class="line"><span>            template: &quot;mery&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    nodes: [</span></span>
<span class="line"><span>        { id: 1, tags: [&quot;assistant&quot;] }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}); </span></span>
<span class="line"><span>// 为标记的节点设置节点菜单项。有关详细信息，请参见节点菜单项。  </span></span>
<span class="line"><span>var chart = new OrgChart(document.getElementById(&quot;tree&quot;), {</span></span>
<span class="line"><span>    tags: </span></span>
<span class="line"><span>        customMenuItems: {</span></span>
<span class="line"><span>            nodeMenu: {</span></span>
<span class="line"><span>                add: { text: &quot;Add New&quot; }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>});</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>linkBinding: Object, // 组织结构图JS中的链接绑定将节点数据映射到链接模板参数【在线中加注释】</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>searchFields: Array string, // 按字段类型进行搜索</span></span>
<span class="line"><span>searchFields: [&quot;name&quot;, &quot;title&quot;],</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>nodes: Array string, // 节点数据JSON对象的数组【节点选项是图表的数据源】</span></span>
<span class="line"><span>nodes: [</span></span>
<span class="line"><span>    { id: &quot;1&quot; },</span></span>
<span class="line"><span>    { id: &quot;2&quot;, pid: &quot;1&quot; },</span></span>
<span class="line"><span>    { id: &quot;3&quot;, pid: &quot;1&quot;, tags: [&quot;Sales&quot;] }</span></span>
<span class="line"><span>]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>clinks: Array string, // Add C link 添加辅助线 实线</span></span>
<span class="line"><span>clinks: [</span></span>
<span class="line"><span>    {from: 4, to: 0, label: &#39;text&#39;}, </span></span>
<span class="line"><span>    {from: 4, to: 5, template: &#39;blue&#39;, label: &#39;4 reports to 5&#39; },</span></span>
<span class="line"><span>    {from: 2, to: 6, template: &#39;yellow&#39;, label: &#39;lorem ipsum&#39; },</span></span>
<span class="line"><span>]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>slinks: Array string, // Add S link 添加辅助线 虚线</span></span>
<span class="line"><span>slinks: [</span></span>
<span class="line"><span>    {from: 4, to: 0, label: &#39;text&#39;}, </span></span>
<span class="line"><span>    {from: 4, to: 5, template: &#39;blue&#39;, label: &#39;reports to&#39; },</span></span>
<span class="line"><span>    {from: 2, to: 6, template: &#39;yellow&#39;, label: &#39;lorem ipsum&#39; },</span></span>
<span class="line"><span>]</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>levelSeparation: 60, // 每个级别之间的差距 默认60</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>siblingSeparation: 20, // 子树中节点之间的间距 默认20</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>subtreeSeparation: 20, // 子树之间的间隙 默认40</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mixedHierarchyNodesSeparation: 5, // 垂直布局中节点之间的间距</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>padding: 20, // 填充选项在组织结构图的所有四个边上设置填充区域</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 还可以使用以下选项：</span></span>
<span class="line"><span>OrgChart.normal</span></span>
<span class="line"><span>OrgChart.mixed</span></span>
<span class="line"><span>OrgChart.tree</span></span>
<span class="line"><span>OrgChart.treeLeftOffset</span></span>
<span class="line"><span>OrgChart.treeRightOffset</span></span></code></pre></div><h6 id="实例化类" tabindex="-1">实例化类 <a class="header-anchor" href="#实例化类" aria-label="Permalink to &quot;实例化类&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var chart = new OrgChart(document.getElementById(&quot;tree&quot;), config)</span></span></code></pre></div>`,33),l=[t];function i(o,c,d,r,h,u){return n(),a("div",null,l)}const v=s(e,[["render",i]]);export{b as __pageData,v as default};
