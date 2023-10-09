# 生成 TypeOrm.Entity 模型


## 高级 Mock 自定义脚本

```js


// 获取请求参数
var modelNameCN = fox.mockRequest.getParam('title');
var modelName = fox.mockRequest.getParam('description');
var properties = fox.mockRequest.getParam('properties');
var xApifoxOrders = fox.mockRequest.getParam('x-apifox-orders');


// 生成 TypeOrm.Entity 模型
var fields = ``;

xApifoxOrders.forEach(i => {

    var comment = `\n  /**`;
    comment += `\n   * ${properties[i].title || ''}`;
    var description = properties[i].description || '';
    if (description) {
        comment += `\n   * ${description}`;
    }
    var enumArr = properties[i].enum || [];
    if (properties[i].enum && properties[i].enum.length > 0) {
        var enumDescriptions = properties[i]['x-apifox']['enumDescriptions'];
        var enumStr = '';
        for (var j in enumDescriptions) {
            enumStr += `${j} ${enumDescriptions[j]} ; `;
        }
        if (enumStr) {
            comment += `\n   * 取值：${enumStr}`;
        }
    }
    
    comment += `\n   */`;

    var modifier = i == 'id' ? '@PrimaryGeneratedColumn()' : '@Column()';

    var item = `\n  ${i}: ${properties[i].type} \n`;

    fields += comment + '\n  ' + modifier + item;
})

// 生成 TypeOrm Entity
var typeOrmEntity = `
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

/**
 * ${modelName}
 * ${modelNameCN}
 */ 
@Entity('${modelName}')
export Class ${modelName} {
` + fields + `

  /**
   * 创建时间
   */
  @CreateDateColumn()
  createdAt: string;

  /**
   * 更新时间
   */
  @UpdateDateColumn()
  updatedAt: string;  
}
`


// 写入 fox.mockResponse
fox.mockResponse.setBody(typeOrmEntity);
```


## 请求参数（示例）

<<< @/dev-tool/Apifox/解析数据模型信息/请求参数.示例.json


## 响应结果（示例）

```

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

/**
 * Demo
 * 示例
 */ 
@Entity('Demo')
export Class Demo {

  /**
   * ID
   */
  @PrimaryGeneratedColumn()
  id: string 

  /**
   * 名称
   */
  @Column()
  name: string 

  /**
   * 年龄
   */
  @Column()
  age: string 

  /**
   * 类型
   * 取值：1 市级 ; 2 校级 ; 3 教师 ; 4 家长 ; 5 学生 ; 
   */
  @Column()
  type: number 

  /**
   * 是否可用
   */
  @Column()
  enable: boolean 

  /**
   * 是否可用
   * 取值：a aa ; b bb ; 
   */
  @Column()
  enable1: string 

  /**
   * 创建时间
   */
  @CreateDateColumn()
  createdAt: string;

  /**
   * 更新时间
   */
  @UpdateDateColumn()
  updatedAt: string;  
}
```