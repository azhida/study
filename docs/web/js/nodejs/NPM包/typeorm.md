# TypeORM

- 官网

https://typeorm.io/

- 文档

https://typeorm.bootcss.com/

https://typeorm.biunav.com/zh/


## 创建 Express 项目

```
npm install typeorm -g
typeorm init --name MyProject --database mysql --express
```

## 注意

### 连接 mysql8 报错

```
code: 'ER_NOT_SUPPORTED_AUTH_MODE',
errno: 1251,
sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client'
```

#### 解决方案

- 降级 MySQL的 权限认证配置，不使用新的验证方式
- 安装mysql2，在typeOrm的配置中，改用mysql2

```sh
npm i mysql2
yarn add mysql2
```

```ts
export const AppDataSource = new DataSource({
    type: "mysql",
    connectorPackage: "mysql2",
}
```