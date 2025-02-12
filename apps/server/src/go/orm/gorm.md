# GORM

## 模型定义
### 模型定义
#### 模型是 GO 中标准的 struct
### 约定
#### gorm 倾向于约定，而不是配置
##### 如：默认情况下，GORM 使用 ID 作为默认主键，使用结构体名的 蛇形复数 作为表名，字段名的 蛇形 作为列名，并使用 CreatedAt、UpdatedAt 字段追踪创建、更新时间
### gorm.Model
### 高级选项
### 创建、更新时间跟踪
### 字段标签
## 连接数据库
### MySQL
### postgres
### sqlite
### SQLserver
## CRUD
### 创建
### 查询
#### 查询单个记录
##### db.First(&user) - // 获取第一条记录
##### db.Take(&user) - // 获取一条记录，没有指定排序字段
##### db.Last(&user) - // 获取最后一条记录（主键降序）
##### 注意：没有找到记录时，他会返回 ErrRecordNotFound 错误
###### // 检查 ErrRecordNotFound 错误
###### errors.ls(result.Error, gorm.ErrRecordNotFound)
#### 根据主键查询
#### 根据所有记录
#### 条件查询
#### 查询特定字段
##### db.Select(&quot;name" ,  "age&quot;).Find(&users)
##### db.Select([]string{"name","age"}).Find(&users) // SELECT name, age FROM users;
#### Order 排序
#### Limit & Offset
##### db.Limit(10).Offset(5).Find(&users) // SELECT * FROM users OFFSET 5 LIMIT 10;

#### Group & Having
#### Distinct
#### Joins
#### San
### 高级查询
#### 智能选择字段
#### 加锁
#### 子查询
#### Count
### 更新
