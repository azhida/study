###### 执行sql文件
```
DB::unprepared(file_get_contents(public_path('test.sql')));
```

###### 读取指定数据表的所有字段
```
$column = Schema::getColumnListing('table_name');
# 拼接 字段
join($column, '","');
```
###### 查询时添加不存在的列并赋值
```
SELECT '888' as add_column, id from table_name;

DB::table('table_name')->selectRaw("id, {$value} as add_column")->get();
```
###### increment时实现对两个字段同时加1
```
DB::table(test)->increment('num',1,['vote'=>DB::raw('`vote`+1')]);
```
###### 获取所有表信息
```
# 包含表结构信息
$tables = \DB::connection()->getDoctrineSchemaManager()->listTables();
# 只有表名称
$tables = DB::connection()->getDoctrineSchemaManager()->listTableNames();
```