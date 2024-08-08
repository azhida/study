const os = require('os');
const core = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require("mongodb");

const ips = getLocalIPs();

const app = express();
app.use(core())
app.use(bodyParser.json());

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mock';

const client = new MongoClient(url);
 
// 连接到数据库
client.connect().then(() => {

  const db = client.db(dbName);
  
  // 列表
  app.get('/mock/:subSystemName/:modelName/page', async (req, res) => {
    const { subSystemName, modelName } = req.params;
    let {pageNum = 1, pageSize = 10, ...query} = req.query;
    if (pageNum < 1) pageNum = 1;
    if (pageSize < 1) pageSize = 10;

    const limit = parseInt(pageSize);
    const skip = limit * (parseInt(pageNum) - 1);

    const tableName = `${subSystemName}:${modelName}`;
    const collection = db.collection(tableName);
    
    const pipeline = [
      {
        $match: query, // 注意：这里接收到的参数都是字符串类型，如果数据库存的是 number 类型，则查不到的
      },
      {
        $facet: {
            "data": [
                // { $sort: { "_id": 1 } }, // 根据需要排序
                { $skip: skip }, // 跳过的文档数量
                { $limit: limit } // 每页的文档数量
            ],
            "count": [
                { $count: "total" } // 获取总文档数量
            ]
        }
      },
      { $project: { "data": 1, "count": { $arrayElemAt: ["$count.total", 0] } } }
    ];

    const result = await collection.aggregate(pipeline).toArray();
    const { data, count } = result[0];
    const rows = data.map(e => {
      const {_id, id, ...item} = e;
      return {id: _id, ...item};
    })
    
    res.json({code: 200, msg: '操作成功', total: count || 0, rows});
  });  

  // 详情
  app.get('/mock/:subSystemName/:modelName/:id', async (req, res) => {
    const { subSystemName, modelName, id } = req.params;
    const tableName = `${subSystemName}:${modelName}`;
    const collection = db.collection(tableName);
    const {_id, id: tempId, ...info} = await collection.findOne({_id: new ObjectId(id)});
    res.json({code: 200, msg: '操作成功', data: {id: _id, ...info}});
  });

  // 写入 - 批量
  app.post('/mock/:subSystemName/:modelName/insertMany', async (req, res) => {
    const { subSystemName, modelName } = req.params;
    const tableName = `${subSystemName}:${modelName}`;
    const {id, ...json} = req.body;
    if (!Array.isArray(json)) {
      return res.json({'code': 500, msg: '必须是一个数组'});
    }
    const collection = db.collection(tableName);
    const result = await collection.insertMany(json);
    if (result?.acknowledged) {
      return res.json({code: 200, msg: '操作成功'});
    }
    return res.json({code: 500, msg: '操作失败', err: result});
  });  

  // 写入 - 单条
  app.post('/mock/:subSystemName/:modelName/add', async (req, res) => {
    const { subSystemName, modelName } = req.params;
    const tableName = `${subSystemName}:${modelName}`;
    const {id, ...json} = req.body;
    if (json?.constructor !== Object) {
      return res.json({code: 500, msg: '数据必须是一个对象'});
    }
    if (Object.keys(json).length === 0) {
      return res.json({code: 500, msg: '数据不能为空'});
    }
    const collection = db.collection(tableName);
    const result = await collection.insertOne(json);
    if (result?.acknowledged) {
      return res.json({code: 200, msg: '操作成功'});
    }
    return res.json({code: 500, msg: '操作失败', err: result});
  });

  // 更新 - 单条
  app.post('/mock/:subSystemName/:modelName/update', async (req, res) => {
    const { subSystemName, modelName } = req.params;
    const tableName = `${subSystemName}:${modelName}`;
    const {id, ...json} = req.body;
    if (json?.constructor !== Object) {
      return res.json({code: 500, msg: '数据必须是一个对象'});
    }
    if (Object.keys(json).length === 0) {
      return res.json({code: 500, msg: '数据不能为空'});
    }
    const collection = db.collection(tableName);
    const result = await collection.updateOne({_id: new ObjectId(id)}, {$set: json});
    if (result?.acknowledged) {
      return res.json({code: 200, msg: '操作成功'});
    }
    return res.json({code: 500, msg: '操作失败', err: result});
  });

  // 删除 - 单条
  app.post('/mock/:subSystemName/:modelName/remove', async (req, res) => {
    const { subSystemName, modelName } = req.params;
    const tableName = `${subSystemName}:${modelName}`;
    const json = req.body;
    if (!Array.isArray(json)) {
      return res.json({'code': 500, msg: '必须是一个数组'});
    }
    if (json.length === 0) {
      return res.json({code: 500, msg: '数据不能为空'});
    }
    const ids = json.map(e => {
      return new ObjectId(e);
    })
    const collection = db.collection(tableName);
    const result = await collection.deleteMany({ _id: { $in: ids } });
    console.log(result, 'result');
    if (result?.acknowledged) {
      return res.json({code: 200, msg: '操作成功'});
    }
    return res.json({code: 500, msg: '操作失败', err: result});
  });
  
  // 启动服务器
  const PORT = 3003;
  app.listen(PORT, () => {
    ips.forEach(e => {
      console.log(`Mock Api 地址 http://${e}:${PORT}`);
    })
  });
});

function getLocalIPs() {
  const interfaces = os.networkInterfaces();
  const ips = Object.keys(interfaces).reduce((arr, iface) => arr.concat(interfaces[iface].filter((info) => info.family === 'IPv4' && !info.internal).map((info) => info.address)), []);
  return ips;
}