
###### 新建 工作簿 test.xlsx
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.Workbook(file_name) # 打开或新建工作簿
file.save(file_name)
```
###### 新建 test.xlsx 工作簿 和 100张工作表
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.Workbook(file_name) # 打开工作簿
for i in range(1, 101):
    file.create_sheet(str(i) + '月')
file.save(file_name)
```
###### 复制 test.xlsx 为 test1.xlsx
```
import openpyxl as vb

file_name = 'test.xlsx'
file_name_1 = 'test1.xlsx'
file = vb.load_workbook(file_name) # 打开工作簿
file.save(file_name_1)
```


###### 除了9月份的工作表以外都删除
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name) # 打开工作簿
sheets = file.worksheets # 显示所有工作表
for i in sheets:
    if i.title != '9月':
        table = file[i.title]
        file.remove(table)
file.save(file_name)
```
###### 批量修改工作表的名称
```
import openpyxl as vb

# 创建工作簿和工作表
file_name = 'test.xlsx'
file = vb.Workbook(file_name) # 打开工作簿
for i in range(1, 101):
    file.create_sheet(str(i) + '月')
file.save(file_name)

# 修改工作表名称
file = vb.load_workbook(file_name)
sheets = file.worksheets
for i in sheets:
    i.title = '北京' + i.title
file.save(file_name)
```

###### 新建指定工作表
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
file.create_sheet('10月')
file.save(file_name)
```

###### 复制指定工作表
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
copy_sheet = file.copy_worksheet(file['9月'])  # 这里是工作表对象
copy_sheet.title = 'I am new sheet'
file.save(file_name)
```

###### 获取一个单元格的值
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']
cell = sheet['A1'].value
print(cell)

cell = file['sheet_name']['A1'].value
print(cell)

cell = sheet.cell(row=1,column=1).value
print(cell)

sheet = file.worksheet[0]
```

###### 获取di2列1、3、5、7行的数据
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']
for i in range(1,8,2):
    print(i, sheet.cell(row=i,column=2).value)
```

###### 示例
```

```