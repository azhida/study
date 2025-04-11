# Knex.js

- 官网：
- 中文网：https://knex.nodejs.cn/

## 全局打印完整 sql

```js
const knex = require('knex')({ /* 配置 */ });

knex.on('query', ({ sql, bindings }) => {
  const fullSQL = knex.raw(sql, bindings).toString();
  console.log('[Executed SQL]', fullSQL); 
});
```