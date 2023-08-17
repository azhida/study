# Express

## 跨域处理

```
yarn add cors
```

```
import * as cors from 'cors';

const app = express()
app.use(cors())
```

## 热更新

- ts
```
npm i -D ts-node-dev
yarn add -D ts-node-dev

ts-node-dev main.ts
```

## 参考

[在Express中使用JWT](https://blog.csdn.net/m0_63400611/article/details/124274499)