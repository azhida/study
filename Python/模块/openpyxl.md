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
常用操作
> 注意：如果Excel文件正在打开，则 以下所有操作都会报错，错误信息 包含但不限于 `无操作权限`
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





