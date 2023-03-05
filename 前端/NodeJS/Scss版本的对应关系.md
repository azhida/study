## Scss(sass, sass-loader, dart-sass, node-sass 等)版本的对应关系


### sass-loader与webpack

|  sass-loader   | webpack  |
|  ----  | ----  |
| 6.*  | 3.* |
| 7，8，9，10  | 4.* |
| 11，12，13  | 	5.* |


### node-sass与node.js

|   node-sass    |   sass-loader  |
|  ----  | ----  |
| 6.0.1 | 10.0.1 |
| 4.14.1  | 7.3.1 |
| 4.7.2  | 7.0.3 |
| 4.3.0  | 4.1.1 |


### 已知的一组可用组合

|node|node-sass|sass-loader|
|---|---|---|
| v14.19.0 | ^4.14.1  |   ^7.3.1 |