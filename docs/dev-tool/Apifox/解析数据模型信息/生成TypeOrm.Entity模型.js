

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
var typeOrmEntity = 
`import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

/**
 * ${modelName}
 * ${modelNameCN}
 */ 
@Entity('${modelName}')
export class ${modelName} {
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


// 将修改后的 json 写入 fox.mockResponse
fox.mockResponse.setBody(typeOrmEntity);