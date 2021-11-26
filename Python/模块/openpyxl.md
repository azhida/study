## 作用

主要针对 xlsx 进行读取和编辑

## 安装和卸载

```
# 安装
pip install openpyxl
# 或安装
python -m pip install openpyxl -i https://pypi.tuna.tsinghua.edu.cn/simple

# 卸载
pip uninstall openpyxl
```

## 引入 模块 openpyxl
```
import openpyxl as vb
```
## 常用操作
> 注意：如果Excel文件正在打开，则 以下所有操作都会报错，错误信息 包含但不限于 `无操作权限`
### 工作簿
```
file_name = 'test.xlsx'

file = vb.Workbook(file_name) # 打开工作簿，文件不存在则新建
file = vb.load_workbook(file_name)  # 打开【加载】工作簿，如果工作簿不存在，则报错

file.create_sheet('sheet_name') # 创建工作表，sheet_name 为 string类型，指 工作表名称

sheets = file.worksheets # 获取所有工作表
sheet = file['sheet_name']  # 获取 sheet_name 工作表对象，这是一个对象， sheet_name 是工作表名称
file.remove(sheet)  # 删除工作表，参数 sheet 是一个对象

copy_sheet = file.copy_worksheet(sheet)  # 复制指定工作表 sheet， 这里 参数 sheet 是工作表对象
copy_sheet.title = 'new sheet name'  # 给复制的表命名，记得 还要 file.save() 才能保存新复制的表

file.save(file_name)  # 保存文件（工作簿）：任何操作之后，都需要保存文件
```

| 属性 | 作用 |
| --- | --- |
| active | 获取当前活跃的Worksheet |
| worksheets | 以列表的形式返回所有的Worksheet（表格） |
| data_only | 默认为 False，为 True时只读取数据不显示公式 |
| read_only | 判断是否以read_only模式打开Excel文档 |
| encoding | 获取文档的字符集编码 |
| properties | 获取文档的元数据，如标题，创建者，创建日期等 |
| sheetnames | 获取工作簿中的表（列表） |

| 方法 | 作用 |
| --- | --- |
| file.sheetnames | 获取所有表格的名称 |
| file['sheetname'] | 通过表格名称获取Worksheet对象 |
| file.active | 获取活跃的表格 |
| remove | 删除一个工作表对象【对象】 |
| create_sheet | 创建一个空的表格【表名】 |
| copy_worksheet | 在Workbook内拷贝表格【对象】 |

### 工作表
```
# 从工作簿中获取工作表
file.sheetnames

# 获取指定工作表
file[sheet_name]

# 激活第一个工作表
file.active

# 获取工作表名称
sheet.title
```

| 属性 | 作用 |
| --- | --- |
| title | 工作表名称 |
| dimensions | 表格的大小。指含有数据的表格的大小。即：左上角坐标:右下角坐标 |
| max_row | 表格的最大行 |
| min_row | 表格的最小行 |
| max_column | 表格最大列 |
| min_column | 表格最小列 |
| rows | 按行获取单元格（Cell对象）- 生成器   --- sheet.rows |
| columns | 按列获取单元格（Cell对象）- 生成器 --- sheet.columns |
| freeze_panes | 冻结窗格 --- sheet.freeze_panes = 'C3' |
| values | 按行获取表格的内容（数据）- 生成器 |

> freeze_panes，参数比较特别，主要用于在表格较大时冻结顶部的行或左边的行。对于冻结的行，在用户滚动时，是始终可见的，可以设置为一个Cell对象或一个端元个坐标的字符串，单元格上面的行和左边的列将会冻结（单元格所在的行和列不会被冻结）。例如我们要冻结第一行那么设置A2为freeze_panes，如果要冻结第一列，freeze_panes取值为B1，如果要同时冻结第一行和第一列，那么需要设为B2为freeze_panes，freeze_panes值为none时，表示不冻结任何列。

| 方法 | 作用 |
| --- | --- |
| iter_rows | 按行获取所有单元格，内置属性有（min_row, max_row, min_col, max_col） |
| iter_columns | 按列获取所有单元格 |
| append | 在表格末尾添加数据 |
| merged_cells | 合并多个单元格 |
| unmerged_cells | 移除合并的单元格 |

### 单元格

| 属性 | 作用 |
| --- | --- |
| row | 单元格所在行 |
| column | 单元格所在列 |
| value | 单元格的值 |
| coordinate | 单元格的坐标 |




