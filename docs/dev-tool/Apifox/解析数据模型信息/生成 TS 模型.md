# 生成 TS 模型

## 高级 Mock 自定义脚本

```js


// 获取请求参数
var modelNameCN = fox.mockRequest.getParam('title');
var modelName = fox.mockRequest.getParam('description');
var properties = fox.mockRequest.getParam('properties');


// 生成 TS 模型
var fields = ``

for (var i in properties) {
    var comment = `\n  /**`
    comment += `\n   * ${properties[i].title || ''}`
    var description = properties[i].description || ''
    if (description) {
        comment += `\n   * ${description}`
    }
    var enumArr = properties[i].enum || []
    if (properties[i].enum && properties[i].enum.length > 0) {
        var enumDescriptions = properties[i]['x-apifox']['enumDescriptions'];
        var enumStr = '';
        for (var j in enumDescriptions) {
            enumStr += `${j} ${enumDescriptions[j]} ; `
        }
        if (enumStr) {
            comment += `\n   * 取值：${enumStr}`
        }
    }
    
    comment += `\n   */`
    var item = `\n  ${i}: ${properties[i].type}`
    fields += comment + item
}

// 生成 ts model
var tsModel = `
/**
 * ${modelName || 'ModelName'}
 * ${modelNameCN || '模型名称'}
 */
export interface ${modelName} {
` + fields + `
}
`


// 将修改后的 json 写入 fox.mockResponse
fox.mockResponse.setBody(tsModel);
```


## 请求参数（示例）

<<< @/dev-tool/Apifox/解析数据模型信息/请求参数.示例.json


## 响应结果（示例）

```ts
/**
 * Demo
 * 示例
 */
export interface Demo {

  /**
   * ID
   */
  id: string
  /**
   * 名称
   */
  name: string
  /**
   * 年龄
   */
  age: string
  /**
   * 类型
   * 取值：1 市级 ; 2 校级 ; 3 教师 ; 4 家长 ; 5 学生 ; 
   */
  type: number
  /**
   * 是否可用
   */
  enable: boolean
  /**
   * 是否可用
   * 取值：a aa ; b bb ; 
   */
  enable1: string
}
```