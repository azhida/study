# 导入 Excel 数据

## 基本思路：
- 先上传文件，
- 然后读取文件内容，
- 数据保存入库


## 示例代码

### app.js

```js
// app.js

const core = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const excelRouter = require('./routes/excel');

const app = express();
app.use(core())
app.use(bodyParser.json());

app.use('/excel', excelRouter);

app.listen(3000, () => {
  console.log(`服务已启动 http://localhost:3000`);
});
```

### routes/excel.js

```js
// routes/excel.js

const multer = require('multer');
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// 磁盘存储
const storage = multer.diskStorage({
  // 自定义目录
  destination: function (req, file, cb) {
    try {
    // 尝试创建一个文件夹
        fs.mkdirSync(path.join(process.cwd(), 'static/excels'), { recursive: true });
    } catch (e) {}

    cb(null, path.join(process.cwd(), 'static/excels'));
  },
  // 自定义文件名
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) + '-' + file.originalname;
    // 设置文件名为字段名+唯一后缀
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
})

const upload = multer({ storage });

// 数据导入
router.post('/', upload.single('myFile'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.send({code: 500, msg: '没有上传的文件'});
  }

  try {

    const workbook = xlsx.readFile(file.path);
    const sheetNames = workbook.SheetNames;
    const sheet = workbook.Sheets[sheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    // TODO 数据保存入库
    
    res.send({code: 200, msg: '上传成功', data: jsonData});

  } catch(e) {
    res.send({code: 500, msg: '数据异常', err: e});
  }
});

module.exports = router;
```

