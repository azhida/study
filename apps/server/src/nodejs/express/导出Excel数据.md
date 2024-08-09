# 导出 Excel 数据

```sh
pnpm i exceljs
```

## 示例代码

### app.js

```js
// app.js

const core = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const Excel = require('exceljs');

const app = express();
app.use(core())
app.use(bodyParser.json());

.get('/export', (req, res) => {

  // 创建一个新的工作簿
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet('My Sheet');

  // 添加表头
  worksheet.columns = [
    { header: 'ID', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
  ];

  // 添加JSON数据
  const data = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '王五' },
  ];

  // 添加数据到工作表
  worksheet.addRows(data);
  
  // 设置响应的HTTP头
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=export.xlsx');
 
  // 将工作簿流发送到客户端
  workbook.xlsx.write(res).then(() => res.end());
});

app.listen(3000, () => {
  console.log(`服务已启动 http://localhost:3000`);
});
```
