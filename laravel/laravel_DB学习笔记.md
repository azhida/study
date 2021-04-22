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