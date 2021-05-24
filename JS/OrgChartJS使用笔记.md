[官网](https://balkan.app/OrgChartJS)



###### 配置项详解
```
var config = {
    mouseScrool: OrgChart.action.none,
    enableDragDrop: true,
    enableTouch: false,
    toolbar: {
        layout: true,
        zoom: true,
        fit: true,
        expandAll: false
    }
};
```
```
config.lazyLoading: true, // 延迟加载
```
```
config.enableSearch: true, // 是否启用高级搜索
```
```
config.orientation：OrgChart.orientation.top, // 方向

// 可选值：
OrgChart.orientation.top
OrgChart.orientation.bottom
OrgChart.orientation.right
OrgChart.orientation.left
OrgChart.orientation.top_left
OrgChart.orientation.bottom_left
OrgChart.orientation.right_top
OrgChart.orientation.left_top
```
```
config.mouseScrool ：OrgChart.action.zoom, // 设置操作

// 可选值：
OrgChart.action.zoom - will zoom in/out on mouse scroll 鼠标支持放大缩小
OrgChart.action.xScroll - left/right move of the chart on mouse scroll 支持左右滑窗
OrgChart.action.yScroll - up/down move of the chart on mouse scroll 支持上下滑窗
OrgChart.action.none - do nothing on mouse scroll 什么都不支持，只能脱拽
```
```
config.nodeBinding：Object, // 绑定模板参数
```

```
config.enableDragDrop：false, // 移动节点：true 可移动，false 不可移动
```
```
config.enableTouch: false, // 是否可触摸
```
```
// 启动编辑等功能
config.nodeMenu:{
    details: {text:"Details"},
    edit: {text:"Edit"},
    add: {text:"Add"},
    remove: {text:"Remove"}       
},
```
```
// 启动编辑等功能【鼠标右键的方式打开】
nodeContextMenu:{
    details: {text:"Details"},
    edit: {text:"Edit"},
    add: {text:"Add"},
    remove: {text:"Remove"}       
},
```
```
// 带有拖放和分组功能
dragDropMenu: {
    addInGroup: { text: "Add in group" },
    addAsChild: { text: "Add as child" }
},
```
```
menu: Menu, // 支持导出到excel、导出到svg和其他组织结构图操作
```
```
// 工具栏是一组图标或按钮【在右下角显示工具】
toolbar: {
    layout: true,
    zoom: true,
    fit: true,
    expandAll: false
},
```
```
sticky: true, // 移动组织结构图后，停止将其锁定到屏幕顶部
```
```
nodeMouseClick: OrgChart.action.details,

// 可选值：
OrgChart.action.edit 将打开右侧单击的节点的编辑视图
OrgChart.action.details 将打开右侧单击的节点的详细信息视图，详细信息是只读的。
OrgChart.action.expandCollapse 将展开或折叠子节点
OrgChart.action.none 对节点单击事件不执行任何操作
```
```
showXScroll: OrgChart.scroll.none, // 显示水平滚动条
```
```
showYScroll: OrgChart.scroll.none, // 显示垂直滚动条
```
```
template: string, // 切换模板主题

// 可选值：ana | ula | olivia | belinda | rony | mery | polina | mila | diva | luba | derek | base | deborah
```
```
tags: Tags
 // 使用标签选项，您可以：
    为标记节点设置特定模板
    设置标记节点的默认状态（展开/折叠）
    为标记的节点定义组
    将节点设置为标记节点的助手
    为标记节点设置节点菜单项

//为标记节点设置特定模板。有关详细信息，请参阅一个图表中的多个模板。
var chart = new OrgChart(document.getElementById("tree"), {
        tags: {
            Management: {
                template: "rony"
            }
        },     
        nodes: [
            { id: 1, tags: ["Management"] },        
        ]
    });
//设置标记节点的默认状态（展开/折叠）。有关详细信息，请参见展开/折叠。
var chart = new OrgChart(document.getElementById("tree"), {
    tags: {
        hide: {
            state: OrgChart.COLLAPSE
        }
    },
    nodes: [
        { id: "1" },
        { id: "2", tags: ["hide"] },
        { id: "3" }
    ]
});
//为标记的节点定义组。有关详细信息，请参见分组。
var chart = new OrgChart(document.getElementById("tree"), {
    tags: {
        HRs: {
            group: true,
            groupName: "HR Team",
            groupState: OrgChart.EXPAND,
            template: "group_grey"
        }
    },
    nodes: [
        { id: 1, tags: ["HRs"] }
    ]
});    
//将节点设置为标记节点的助手。详见助手。
var chart = new OrgChart(document.getElementById("tree"), {
    tags: {
        assistant: {
            template: "mery"
        }
    },
    nodes: [
        { id: 1, tags: ["assistant"] }
    ]
}); 
// 为标记的节点设置节点菜单项。有关详细信息，请参见节点菜单项。  
var chart = new OrgChart(document.getElementById("tree"), {
    tags: 
        customMenuItems: {
            nodeMenu: {
                add: { text: "Add New" }
            }
        }
      },
});
```
```
linkBinding: Object, // 组织结构图JS中的链接绑定将节点数据映射到链接模板参数【在线中加注释】
```
```
searchFields: Array string, // 按字段类型进行搜索
searchFields: ["name", "title"],
```
```
nodes: Array string, // 节点数据JSON对象的数组【节点选项是图表的数据源】
nodes: [
    { id: "1" },
    { id: "2", pid: "1" },
    { id: "3", pid: "1", tags: ["Sales"] }
]
```
```
clinks: Array string, // Add C link 添加辅助线 实线
clinks: [
    {from: 4, to: 0, label: 'text'}, 
    {from: 4, to: 5, template: 'blue', label: '4 reports to 5' },
    {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' },
]
```
```
slinks: Array string, // Add S link 添加辅助线 虚线
slinks: [
    {from: 4, to: 0, label: 'text'}, 
    {from: 4, to: 5, template: 'blue', label: 'reports to' },
    {from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' },
]
```
```
levelSeparation: 60, // 每个级别之间的差距 默认60
```
```
siblingSeparation: 20, // 子树中节点之间的间距 默认20
```
```
subtreeSeparation: 20, // 子树之间的间隙 默认40
```
```
mixedHierarchyNodesSeparation: 5, // 垂直布局中节点之间的间距
```
```
padding: 20, // 填充选项在组织结构图的所有四个边上设置填充区域

// 还可以使用以下选项：
OrgChart.normal
OrgChart.mixed
OrgChart.tree
OrgChart.treeLeftOffset
OrgChart.treeRightOffset
```


 ###### 实例化类
 ```
 var chart = new OrgChart(document.getElementById("tree"), config)
 ```