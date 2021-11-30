
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
# 工作表中单元格的操作
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

## 获取一个区域的单元格
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']
# 获取 A1 到 C10 区域单元格
cells = sheet['A1:C10']
# 获取 1 到 10 行 的全部有内容的单元格
# cells = sheet['1:10']
# 获取 A 到 C 列 全部有内容的单元格
# cells = sheet['A:C']

for row in cells:   # 循环每一行
    for cell in row:    # 循环每一个单元格
        print(cell.value)
```

- 例一：使用 list（sheet.values）
> 只能对整个工作表操作，不能对单独区域操作
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']
print(list(sheet.values))
# 可以用切片方式截取某一段数据
print(list(sheet.values)[1:3])

```
- 例二：.iter_rows(min_row=最低行数,max_row=最高行数,min_col=最低列数,max_col=最高列数)
> 一般情况下只需要定位起点
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

# 行和列的范围 iter_rows按行
for row in sheet.iter_rows(min_row=1,max_row=10,min_col=1,max_col=3):
    for cell in row:
        print(cell.value)
```
或
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

# 行和列的范围 iter_cols按列
for column in sheet.iter_cols(min_row=1,max_row=10,min_col=1,max_col=3):
    for cell in column:
        print(cell.value)
```
### 获取每一行、每一列
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

# 因为按行，所以返回 A1,B1,C1 这样的顺序
for row in sheet.rows:
    for cell in row:
        print(cell.value)
        
# 按列，则 返回 A1,A2,A3 这样的顺序
for column in sheet.columns:
    for cell in column:
        print(cell.value)        
```

### 列字母和数字之间的转换
```
import openpyxl as vb

# 根据列的数字返回字母
res1 = vb.utils.get_column_letter(2)
print(res1)

# 根据字母返回列的数字
res2 = vb.utils.column_index_from_string('D')
print(res2)
```
> 使用这些函数时，不必加载一个工作簿

## 读取数据
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

max_row = sheet.max_row
max_column = sheet.max_column

A1_value = sheet['A1'].value
A1_value = sheet.cell(1,1).value

A1_row = sheet['A1'].row
A1_column = sheet['A1'].column

# 获取 C列 所有数据
values_C = []
for i in sheet['C']:
    values_C.append(i.value)
    
# 获取 1行 所有数据
values_1 = []
for i in sheet[1]:
    values_1.append(i.value)  
    
# 获取所有数据
values = []
for row in sheet.rows:
    for cell in row:
        values.append(cell.value)
print(values)              
```
## 写入数据
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

# 一、向一个单元格写入数据
sheet.cell(1,5,value='写入的值')
sheet['E2'] = '写入E2的值'
file.save(file_name)

# 二、在最后一行写入数据
sheet.append([1,2,3,4,5,6,6])

# 三、向一个区域内写入数据
for row in sheet['A1:B4']:
    for cell in row:
        cell.value = 520
        

file.save(file_name)        
```

## 行、列的插入与删除
- 插入列：sheet.insert_cols(位置,列数)，其中位置是指在工作表的第几列前插入多少列
- 插入行：sheet.insert_rows(位置,行数)，其中位置是指在工作表的第几行前插入多少行
- 删除列：sheet.delete_cols(位置,列数)，从指定位置开始向后删除指定的列数
- 删除列：sheet.delete_rows(位置,行数)，从指定位置开始向下删除指定的行数

```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

sheet.insert_cols(idx=2,amount=5)
sheet.insert_rows(idx=2,amount=5)
sheet.delete_cols(idx=2,amount=5)
sheet.delete_rows(idx=2,amount=5)

file.save(file_name)
```
## 移动单元格
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

# rows 和 cols 正数 为 向下或向右，负数 为 向左或向上
sheet.move_range("A1:C3",rows=10,cols=10)
file.save(file_name)
```
## 冻结单元格
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

sheet.freeze_panes = 'C3'
file.save(file_name)
```