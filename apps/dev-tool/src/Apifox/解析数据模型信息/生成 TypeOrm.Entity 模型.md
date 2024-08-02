# 生成 TypeOrm.Entity 模型


## 高级 Mock 自定义脚本

<<< ./生成TypeOrm.Entity模型.js

## 请求参数（示例）

<<< ./请求参数.示例.json


## 响应结果（示例）


```ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

/**
 * Demo
 * 示例
 */ 
@Entity('Demo')
export class Demo {

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

