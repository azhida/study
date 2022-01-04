
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
## 单元格操作练习
### 练习1：每张工作表的固定单元格求和
- 例1：将每张工作表中指定单元格的值汇总
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)

values = []
for sheet in file.worksheets:
    values.append(sheet['D6'].value)
print(sum(values))

# 或者如下
res = sum([sheet['D6'].value for sheet in file.worksheets])
print(res)    
```
> 知识点：列表推导式[for循环简写]  
> 列表名 = [变量名 for 变量名 in range(0,11)]

### 练习2：按行或列求和
- 例1：按行求和
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

for row in list(sheet.rows)[1:]:
    values = [cell.value for cell in row]
    print(values[0], sum(values[1:]))
```
- 例2：按列求和
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

for column in list(sheet.columns)[1:]:
    values = [cell.value for cell in column]
    print(values[0], sum(values[1:]))
```
### 练习3：成绩为空的标记缺考
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

for row in sheet.iter_rows(min_row=2,min_col=2):
    for cell in row:
        if cell.value == None:
            cell.value = '缺考'
            
file.save(file_name)            
```
### 练习4：总分大于270分是优秀
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

sheet['E1'] = '评价'
area = sheet.iter_rows(min_row=2,min_col=2)
for row in area:
    总分 = sum([cell.value for cell in row][:-1])
    if 总分 >= 270:
        row[-1].value = '优秀'
        
file.save(file_name)
```
### 练习5：帅选总分大于270分
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

for row_num in range(sheet.max_row,1,-1):
    总分 = sum([cell.value for cell in sheet[row_num][1:]])
    if 总分 <= 270:
        sheet.delete_rows(row_num)
        
file.save(file_name)        
```
### 练习6：按指定列拆分成多个工作表
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

area = sheet.iter_rows(min_row=2)
# 字典
dict = {}
for row in area:
    # 每行的数据
    row_values = [cell.value for cell in row]
    if row_values[1] in dict.keys():
        dict[row_values[1]] += [row_values]
    else:
        dict[row_values[1]] = [row_values]
        
for key,value in sorted(dict.items()):
    nws = file.create_sheet(key)
    nws.append(['姓名','班级','分数'])
    for v in value:
        nws.append(v)
        
file.remove(file['Sheet1'])
file.save(file_name)
```

## 合并与取消合并单元格

```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

# 合并单元格
sheet.meege_cells('B3:F5')
# 取消合并单元格
sheet.unmeege_cells('B3:F5')
file.save(file_name)
```
> ```
> sheet.merge_cells(start_row=起始行号, start_column=起始列号, end_row=结束行号, end_column=结束列号)
> ```

## 使用公式以及注意事项

```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

sheet['F1'] = '=sum(C1:E1)'

file.save(file_name)
```
> 注意：读取时会直接读取公式，所以要进行如下设置

```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name, data_only=True)
sheet = file['Sheet1']

print(sheet['F1'].value)
```

## 对行和列进行分组

```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name, data_only=True)
sheet = file['Sheet1']

# 对行分组
sheet.column_dimensions.group('A', 'D', hidden=True)
# 对列分组
sheet.column_dimensions.group(1, 5, hidden=True)

file.save(file_name)
```

## 给单元格添加批注
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name, data_only=True)
sheet = file['Sheet1']

comments = vb.comments.Comment('这里写批注', '批注人姓名：张三')

sheet['F20'].comment = comments
sheet['F21'].comment = comments

file.save(file_name)
```

# 装饰部分

## 字体 Font
```
Font(name='Calibri', size=11, bold=False,italic=False,vertAlign=None, underline='none',strike=False, color='FF000000')

参数解读：
name：字体名称，注意中文字体前面加u
size：字号大小
bold：True（加粗）/ False（不加粗）
italic：True（倾斜）/ False（不倾斜）
vertAlign：'None'（默认）/ 'superscript'（上标）/ 'subscript'（下标）
underline：'None'（默认）/ 'single'（单下划线）/ 'double'（双下划线）/ 'singleAccounting'（会计用单下划线）/ 'doubleAccounting'（会计用双下划线）
strike：'True'（显示删除线）/ 'False'（不显示删除线）
color：字体的颜色 RGB转HEX
```

```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

# 字体对象1
font_obj_1 = vb.styles.Font(name=u'微软雅黑', bold=True, italic=True, size=72)
sheet['A1'].font = font_obj_1
# 字体对象2
font_obj_2 = vb.styles.Font(name=u'隶书', bold=False, italic=False, size=48)
sheet['A2'].font = font_obj_2

file.save(file_name)
```

## 对齐 Alignment

```
Alignment(horizontal='general',vertical='bottom', text_rotation=0, wrap_text=False, shrink_to_fit=False, indent=0)

参数说明：
horizontal：'general'（常规）/ 'justify'（两端对齐）/ 'right'（靠右）/ 'centerContinuous'（跨列居中）/ 'distributed'（分散对齐）/ 'fill'（填充）/ 'center'（居中）/ 'left'（靠左）
vertical：'center'（垂直居中）/ 'top'（靠上）/ 'bottom'（靠下）/ 'justify'（两端对齐）/ 'distributed'（分散对齐）
text_rotation：指定文本旋转角度
wrap_text：是否自动换行
shrink_to_fit：是否缩小字体填充
indent：指定缩进
```

## 边框 Side
```
Side(style=连线样式,color=边线颜色)
Border(left=左边线样式,right=右连线样式,top=上边线样式,bottom=下边线样式)
style参数的种类： 'double, ‘mediumDashDotDot’, ‘slantDashDot’,‘dashDotDot’,‘dotted’,‘hair’, 'mediumDashed, ‘dashed’, ‘dashDot’, ‘thin’,‘mediumDashDot’,‘medium’, 'thick’
```

```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name)
sheet = file['Sheet1']

side = vb.styles.Side(style='thin',color='FF0000')
border = vb.styles.Border(left=side,right=side,top=side,bottom=side)
sheet['A1'].border = border
file.save(file_name)
```

## 填充 PatternFill

```
PatternFill(fill_type=None, start_color='FFFFFF', end_color='FF0000')
fill_type：'None'（不填充）/ 'solid'（实心填充）/ 'darkGray'（75%灰色）'mediumGray'（50%灰色）/ 'lightGray'（25%灰色）/ 'gray125'（12.5%灰色）/ 'gray0625'（6.25%灰色）/ 'darkHorizontal'（水平条纹）/ 'darkVertical'（垂直条纹）/ 'darkDown'（逆对角线条纹）/ 'darkUp'（对角线条纹）/ 'darkGrid'（对角线剖面线）/ 'darkTrellis'（粗对角线剖面线）/ 'lightHorizontal'（细水平条纹）/ 'lightVertical'（细垂直条纹）/ 'lightDown'（细逆对角线条纹）/ 'lightUp'（细对角线条纹）/ 'lightGrid'（细水平剖面线）/ 'lightTrellis'（细对角线剖面线）
start_color / fgColor：背景颜色 RGB转HEX
end_color / bgColor：图案颜色 RGB转HEX
```

## 渐变填充 GradientFill
```
GradientFill(stop=(渐变颜色1, 渐变颜色2, ….))

fill_type：'linear'（线性渐变）/ 'path'（中心扩散）
degree：旋转角度
stop：一个元组 (OO, XX)，OO 为起始颜色，XX 为结束颜色
```

## 锁定单元格和隐藏公式
```
Protection(locked=True,  hidden=False) 

locked：指定是否锁定单元格
hidden：指定是否隐藏公式

只有在开启 “保护工作表” 之后，“锁定单元格” 和 “隐藏公式” 才生效。
在工作表处点击右键，即可开启 “保护工作表”：
```

## 行高和列宽
```
import openpyxl as vb

file_name = 'test.xlsx'
file = vb.load_workbook(file_name, data_only=True)
sheet = file['Sheet1']

sheet.row_dimensions[1].height = 200
sheet.column_dimensions['B'].width = 100

file.save(file_name)
```