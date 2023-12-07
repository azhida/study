# 生成 Columns 字段列表

## 高级 Mock 自定义脚本

```js
// 获取请求参数
var modelNameCN = fox.mockRequest.getParam('title');
var modelName = fox.mockRequest.getParam('description');
var properties = fox.mockRequest.getParam('properties');
var xApifoxOrders = fox.mockRequest.getParam('x-apifox-orders');


var columns = [
    {
        'key': '',
        'title': "选项",
        'type': "selection", // 可能不同的 ui 框架这个字段不一样
        'width': "55px"
    },
    {
        "key": "",
        "title": "序号",        
        'type': "index", // 可能不同的 ui 框架这个字段不一样
        'width': "55px"
    },
]

xApifoxOrders.forEach(i => {
    columns.push({
        key: i,
        title: properties[i].title
    })
})

columns.push({
    'key': 'operator', 
    'title': '操作',
    'width': "150px"
})

var fileds = `  [`

columns.forEach(e => {
    var itemArr = []
    for (var i in e) {
        itemArr.push(`${i}: '${e[i]}'`)
    }
    fileds += '\n    {' + itemArr.join(', ') + '},'
})

fileds += `\n  ]`

// 将修改后的 json 写入 fox.mockResponse
fox.mockResponse.setBody(fileds);
```

## 请求参数（示例）

<<< @/dev-tool/Apifox/解析数据模型信息/请求参数.示例.json


## 响应结果（示例）

```json
  [
    {key: '', title: '选项', type: 'selection', width: '55px'},
    {key: '', title: '序号', type: 'index', width: '55px'},
    {key: 'id', title: 'ID'},
    {key: 'name', title: '名称'},
    {key: 'age', title: '年龄'},
    {key: 'type', title: '类型'},
    {key: 'enable', title: '是否可用'},
    {key: 'enable1', title: '是否可用'},
    {key: 'operator', title: '操作', width: '150px'},
  ]
```