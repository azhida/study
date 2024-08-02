# 生成 Mock 规则

## 高级 Mock 自定义脚本

```js
var responseJson = {}

// 获取请求参数
var properties = fox.mockRequest.getParam('properties');

// 生成 mock 规则数据
var mockRules = {}

for (var i in properties) {
    var rule = ''
    if (properties[i].mock && properties[i].mock.mock) {
        rule = properties[i].mock.mock
    } else if (properties[i].enum && properties[i].enum.length > 0) {
        var enumStr = properties[i].enum.join("', '")
        rule = `@pick(['${enumStr}'])`
    }
    mockRules[i] = rule
}

responseJson.mockRules = mockRules;

// 将修改后的 json 写入 fox.mockResponse
fox.mockResponse.setBody(responseJson);
```

## 请求参数（示例）

<<< ./请求参数.示例.json


## 响应结果（示例）

```json
{
    "mockRules": {
        "id": "@integer(1000, 10000000)",
        "name": "@cname",
        "age": "@integer(1, 100)",
        "type": "@pick(['1', '2', '3', '4', '5'])",
        "enable": "@boolean",
        "enable1": "@pick(['a', 'b'])"
    }
}
```