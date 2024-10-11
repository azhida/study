# VueFlow - Vue 流程图工具库

官网：https://vueflow.dev/

Vue Flow 是一个轻量级的 Vue 3 组件库，它允许开发者以简洁直观的方式创建动态流程图。

## 流程图的构成

Nodes、Edges、Handles

- Nodes 是流程图中的一个基本组件，可以在图表中可视化任何类型的数据，独立存在并通过edges互连从而创建数据映射
- Edges 的渲染是通过给VueFlow组件的edges参数传入一个数组实现的，需要配合nodes一起确定节点之间的连线关系；
- Handles 节点边缘上的小圆圈，使用拖拽的方式进行节点之间的连接