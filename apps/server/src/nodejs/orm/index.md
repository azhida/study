# NodeJS ORM

## Prisma ORM

- [官网](https://link.juejin.cn/?target=https%3A%2F%2Fwww.prisma.io%2F)
- [文档](https://link.juejin.cn/?target=https%3A%2F%2Fwww.prisma.io%2Fdocs%2Fgetting-started)

### Prisma 特性

- 基于 TypeScript 类型安全，自动生成操作数据 API
- 自创了 Prisma.schema PSL 文件，简洁明了（目前已经支持多文件）
- 多数据库抽象支持，无需关注底层
- 良好的 CLI 命令支持，自动化迁移（不是数据库之间）
- 良好的文档和社区支持

### Primsa 使用流程

```
prisma -> init -> schema -> migrate -> 使用 primsa 客户客户端操作数据库。
```

## TypeORM

- [官网](https://link.juejin.cn/?target=https%3A%2F%2Ftypeorm.io%2F)

### TypeORM 特性

- 基于 TypeScript 类型安全，支持 JavaScript/ESM, Class 实体、语法灵活
- 支持 DataMapper 和 ActiveRecord 两种模式
- 直接关系模型（关联，单项、双向、自引用、连接）
- 连接池、支持过数据库实例
- 多数据库支持
- 自动迁移和生成迁移文件


## Sequelize

- [官网](https://link.juejin.cn/?target=https%3A%2F%2Fsequelize.org%2F)

### Sequelize 特性
- TypeScript 和 Node.js ORM 数据库支持
- 多种数据库支持，支持事务

## Mongoose (ODM)

- [官网](https://link.juejin.cn/?target=https%3A%2F%2Fmongoosejs.com%2F)

## drizzle

- [官网](https://link.juejin.cn/?target=https%3A%2F%2Form.drizzle.team%2F)
- [文档](https://link.juejin.cn/?target=https%3A%2F%2Form.drizzle.team%2Fdocs%2Foverview)

### drizzle 特性
- Drizzle ORM 是一个有头的无头 TypeScript ORM 🐲
- 如果您了解 SQL，那么您就了解 Drizzle。
- 支持主流的数据库和 serverless

## mikro-orm

- [官网](https://link.juejin.cn/?target=https%3A%2F%2Fmikro-orm.io%2F)
- [文档](https://link.juejin.cn/?target=https%3A%2F%2Fmikro-orm.io%2Fdocs%2Fquick-start)

### mikro-orm 特性
- Node.js 的 TypeScript ORM 基于数据映射器、工作单元和身份映射模式。
- 支持主流的数据库

## Knex.js

- [官网](https://link.juejin.cn/?target=https%3A%2F%2Fknexjs.org%2F)
- [中文网](https://knex.nodejs.cn/guide/)

### Knex.js 特性
- 定位是 基于 JavaScript 的 SQL 查询生成器。
- 主流的数据库均支持、支持 TypeScript。


## 参考

- [Node.js 生态数据操作库和 ORM 大盘点](https://blog.csdn.net/CTZL123456/article/details/139534316)