import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.CFZOmcOm.js";const m=JSON.parse('{"title":"工作表中单元格的操作","description":"","frontmatter":{},"headers":[],"relativePath":"python/模块/openpyxl_demo.md","filePath":"python/模块/openpyxl_demo.md","lastUpdated":1722327281000}'),e={name:"python/模块/openpyxl_demo.md"},l=p(`<h6 id="新建-工作簿-test-xlsx" tabindex="-1">新建 工作簿 test.xlsx <a class="header-anchor" href="#新建-工作簿-test-xlsx" aria-label="Permalink to &quot;新建 工作簿 test.xlsx&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.Workbook(file_name) # 打开或新建工作簿</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h6 id="新建-test-xlsx-工作簿-和-100张工作表" tabindex="-1">新建 test.xlsx 工作簿 和 100张工作表 <a class="header-anchor" href="#新建-test-xlsx-工作簿-和-100张工作表" aria-label="Permalink to &quot;新建 test.xlsx 工作簿 和 100张工作表&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.Workbook(file_name) # 打开工作簿</span></span>
<span class="line"><span>for i in range(1, 101):</span></span>
<span class="line"><span>    file.create_sheet(str(i) + &#39;月&#39;)</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h6 id="复制-test-xlsx-为-test1-xlsx" tabindex="-1">复制 test.xlsx 为 test1.xlsx <a class="header-anchor" href="#复制-test-xlsx-为-test1-xlsx" aria-label="Permalink to &quot;复制 test.xlsx 为 test1.xlsx&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file_name_1 = &#39;test1.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name) # 打开工作簿</span></span>
<span class="line"><span>file.save(file_name_1)</span></span></code></pre></div><h6 id="除了9月份的工作表以外都删除" tabindex="-1">除了9月份的工作表以外都删除 <a class="header-anchor" href="#除了9月份的工作表以外都删除" aria-label="Permalink to &quot;除了9月份的工作表以外都删除&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name) # 打开工作簿</span></span>
<span class="line"><span>sheets = file.worksheets # 显示所有工作表</span></span>
<span class="line"><span>for i in sheets:</span></span>
<span class="line"><span>    if i.title != &#39;9月&#39;:</span></span>
<span class="line"><span>        table = file[i.title]</span></span>
<span class="line"><span>        file.remove(table)</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h6 id="批量修改工作表的名称" tabindex="-1">批量修改工作表的名称 <a class="header-anchor" href="#批量修改工作表的名称" aria-label="Permalink to &quot;批量修改工作表的名称&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建工作簿和工作表</span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.Workbook(file_name) # 打开工作簿</span></span>
<span class="line"><span>for i in range(1, 101):</span></span>
<span class="line"><span>    file.create_sheet(str(i) + &#39;月&#39;)</span></span>
<span class="line"><span>file.save(file_name)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 修改工作表名称</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheets = file.worksheets</span></span>
<span class="line"><span>for i in sheets:</span></span>
<span class="line"><span>    i.title = &#39;北京&#39; + i.title</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h6 id="新建指定工作表" tabindex="-1">新建指定工作表 <a class="header-anchor" href="#新建指定工作表" aria-label="Permalink to &quot;新建指定工作表&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>file.create_sheet(&#39;10月&#39;)</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h6 id="复制指定工作表" tabindex="-1">复制指定工作表 <a class="header-anchor" href="#复制指定工作表" aria-label="Permalink to &quot;复制指定工作表&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>copy_sheet = file.copy_worksheet(file[&#39;9月&#39;])  # 这里是工作表对象</span></span>
<span class="line"><span>copy_sheet.title = &#39;I am new sheet&#39;</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h1 id="工作表中单元格的操作" tabindex="-1">工作表中单元格的操作 <a class="header-anchor" href="#工作表中单元格的操作" aria-label="Permalink to &quot;工作表中单元格的操作&quot;">​</a></h1><h6 id="获取一个单元格的值" tabindex="-1">获取一个单元格的值 <a class="header-anchor" href="#获取一个单元格的值" aria-label="Permalink to &quot;获取一个单元格的值&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span>cell = sheet[&#39;A1&#39;].value</span></span>
<span class="line"><span>print(cell)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cell = file[&#39;sheet_name&#39;][&#39;A1&#39;].value</span></span>
<span class="line"><span>print(cell)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cell = sheet.cell(row=1,column=1).value</span></span>
<span class="line"><span>print(cell)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sheet = file.worksheet[0]</span></span></code></pre></div><h6 id="获取di2列1、3、5、7行的数据" tabindex="-1">获取di2列1、3、5、7行的数据 <a class="header-anchor" href="#获取di2列1、3、5、7行的数据" aria-label="Permalink to &quot;获取di2列1、3、5、7行的数据&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span>for i in range(1,8,2):</span></span>
<span class="line"><span>    print(i, sheet.cell(row=i,column=2).value)</span></span></code></pre></div><h2 id="获取一个区域的单元格" tabindex="-1">获取一个区域的单元格 <a class="header-anchor" href="#获取一个区域的单元格" aria-label="Permalink to &quot;获取一个区域的单元格&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span># 获取 A1 到 C10 区域单元格</span></span>
<span class="line"><span>cells = sheet[&#39;A1:C10&#39;]</span></span>
<span class="line"><span># 获取 1 到 10 行 的全部有内容的单元格</span></span>
<span class="line"><span># cells = sheet[&#39;1:10&#39;]</span></span>
<span class="line"><span># 获取 A 到 C 列 全部有内容的单元格</span></span>
<span class="line"><span># cells = sheet[&#39;A:C&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for row in cells:   # 循环每一行</span></span>
<span class="line"><span>    for cell in row:    # 循环每一个单元格</span></span>
<span class="line"><span>        print(cell.value)</span></span></code></pre></div><ul><li>例一：使用 list（sheet.values）</li></ul><blockquote><p>只能对整个工作表操作，不能对单独区域操作</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span>print(list(sheet.values))</span></span>
<span class="line"><span># 可以用切片方式截取某一段数据</span></span>
<span class="line"><span>print(list(sheet.values)[1:3])</span></span></code></pre></div><ul><li>例二：.iter_rows(min_row=最低行数,max_row=最高行数,min_col=最低列数,max_col=最高列数)</li></ul><blockquote><p>一般情况下只需要定位起点</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 行和列的范围 iter_rows按行</span></span>
<span class="line"><span>for row in sheet.iter_rows(min_row=1,max_row=10,min_col=1,max_col=3):</span></span>
<span class="line"><span>    for cell in row:</span></span>
<span class="line"><span>        print(cell.value)</span></span></code></pre></div><p>或</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 行和列的范围 iter_cols按列</span></span>
<span class="line"><span>for column in sheet.iter_cols(min_row=1,max_row=10,min_col=1,max_col=3):</span></span>
<span class="line"><span>    for cell in column:</span></span>
<span class="line"><span>        print(cell.value)</span></span></code></pre></div><h3 id="获取每一行、每一列" tabindex="-1">获取每一行、每一列 <a class="header-anchor" href="#获取每一行、每一列" aria-label="Permalink to &quot;获取每一行、每一列&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 因为按行，所以返回 A1,B1,C1 这样的顺序</span></span>
<span class="line"><span>for row in sheet.rows:</span></span>
<span class="line"><span>    for cell in row:</span></span>
<span class="line"><span>        print(cell.value)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span># 按列，则 返回 A1,A2,A3 这样的顺序</span></span>
<span class="line"><span>for column in sheet.columns:</span></span>
<span class="line"><span>    for cell in column:</span></span>
<span class="line"><span>        print(cell.value)</span></span></code></pre></div><h3 id="列字母和数字之间的转换" tabindex="-1">列字母和数字之间的转换 <a class="header-anchor" href="#列字母和数字之间的转换" aria-label="Permalink to &quot;列字母和数字之间的转换&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根据列的数字返回字母</span></span>
<span class="line"><span>res1 = vb.utils.get_column_letter(2)</span></span>
<span class="line"><span>print(res1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根据字母返回列的数字</span></span>
<span class="line"><span>res2 = vb.utils.column_index_from_string(&#39;D&#39;)</span></span>
<span class="line"><span>print(res2)</span></span></code></pre></div><blockquote><p>使用这些函数时，不必加载一个工作簿</p></blockquote><h2 id="读取数据" tabindex="-1">读取数据 <a class="header-anchor" href="#读取数据" aria-label="Permalink to &quot;读取数据&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>max_row = sheet.max_row</span></span>
<span class="line"><span>max_column = sheet.max_column</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A1_value = sheet[&#39;A1&#39;].value</span></span>
<span class="line"><span>A1_value = sheet.cell(1,1).value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A1_row = sheet[&#39;A1&#39;].row</span></span>
<span class="line"><span>A1_column = sheet[&#39;A1&#39;].column</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 获取 C列 所有数据</span></span>
<span class="line"><span>values_C = []</span></span>
<span class="line"><span>for i in sheet[&#39;C&#39;]:</span></span>
<span class="line"><span>    values_C.append(i.value)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span># 获取 1行 所有数据</span></span>
<span class="line"><span>values_1 = []</span></span>
<span class="line"><span>for i in sheet[1]:</span></span>
<span class="line"><span>    values_1.append(i.value)  </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span># 获取所有数据</span></span>
<span class="line"><span>values = []</span></span>
<span class="line"><span>for row in sheet.rows:</span></span>
<span class="line"><span>    for cell in row:</span></span>
<span class="line"><span>        values.append(cell.value)</span></span>
<span class="line"><span>print(values)</span></span></code></pre></div><h2 id="写入数据" tabindex="-1">写入数据 <a class="header-anchor" href="#写入数据" aria-label="Permalink to &quot;写入数据&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 一、向一个单元格写入数据</span></span>
<span class="line"><span>sheet.cell(1,5,value=&#39;写入的值&#39;)</span></span>
<span class="line"><span>sheet[&#39;E2&#39;] = &#39;写入E2的值&#39;</span></span>
<span class="line"><span>file.save(file_name)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 二、在最后一行写入数据</span></span>
<span class="line"><span>sheet.append([1,2,3,4,5,6,6])</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 三、向一个区域内写入数据</span></span>
<span class="line"><span>for row in sheet[&#39;A1:B4&#39;]:</span></span>
<span class="line"><span>    for cell in row:</span></span>
<span class="line"><span>        cell.value = 520</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span></span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h2 id="行、列的插入与删除" tabindex="-1">行、列的插入与删除 <a class="header-anchor" href="#行、列的插入与删除" aria-label="Permalink to &quot;行、列的插入与删除&quot;">​</a></h2><ul><li>插入列：sheet.insert_cols(位置,列数)，其中位置是指在工作表的第几列前插入多少列</li><li>插入行：sheet.insert_rows(位置,行数)，其中位置是指在工作表的第几行前插入多少行</li><li>删除列：sheet.delete_cols(位置,列数)，从指定位置开始向后删除指定的列数</li><li>删除列：sheet.delete_rows(位置,行数)，从指定位置开始向下删除指定的行数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sheet.insert_cols(idx=2,amount=5)</span></span>
<span class="line"><span>sheet.insert_rows(idx=2,amount=5)</span></span>
<span class="line"><span>sheet.delete_cols(idx=2,amount=5)</span></span>
<span class="line"><span>sheet.delete_rows(idx=2,amount=5)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h2 id="移动单元格" tabindex="-1">移动单元格 <a class="header-anchor" href="#移动单元格" aria-label="Permalink to &quot;移动单元格&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># rows 和 cols 正数 为 向下或向右，负数 为 向左或向上</span></span>
<span class="line"><span>sheet.move_range(&quot;A1:C3&quot;,rows=10,cols=10)</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h2 id="冻结单元格" tabindex="-1">冻结单元格 <a class="header-anchor" href="#冻结单元格" aria-label="Permalink to &quot;冻结单元格&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sheet.freeze_panes = &#39;C3&#39;</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h2 id="单元格操作练习" tabindex="-1">单元格操作练习 <a class="header-anchor" href="#单元格操作练习" aria-label="Permalink to &quot;单元格操作练习&quot;">​</a></h2><h3 id="练习1-每张工作表的固定单元格求和" tabindex="-1">练习1：每张工作表的固定单元格求和 <a class="header-anchor" href="#练习1-每张工作表的固定单元格求和" aria-label="Permalink to &quot;练习1：每张工作表的固定单元格求和&quot;">​</a></h3><ul><li>例1：将每张工作表中指定单元格的值汇总</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>values = []</span></span>
<span class="line"><span>for sheet in file.worksheets:</span></span>
<span class="line"><span>    values.append(sheet[&#39;D6&#39;].value)</span></span>
<span class="line"><span>print(sum(values))</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或者如下</span></span>
<span class="line"><span>res = sum([sheet[&#39;D6&#39;].value for sheet in file.worksheets])</span></span>
<span class="line"><span>print(res)</span></span></code></pre></div><blockquote><p>知识点：列表推导式[for循环简写]<br> 列表名 = [变量名 for 变量名 in range(0,11)]</p></blockquote><h3 id="练习2-按行或列求和" tabindex="-1">练习2：按行或列求和 <a class="header-anchor" href="#练习2-按行或列求和" aria-label="Permalink to &quot;练习2：按行或列求和&quot;">​</a></h3><ul><li>例1：按行求和</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for row in list(sheet.rows)[1:]:</span></span>
<span class="line"><span>    values = [cell.value for cell in row]</span></span>
<span class="line"><span>    print(values[0], sum(values[1:]))</span></span></code></pre></div><ul><li>例2：按列求和</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for column in list(sheet.columns)[1:]:</span></span>
<span class="line"><span>    values = [cell.value for cell in column]</span></span>
<span class="line"><span>    print(values[0], sum(values[1:]))</span></span></code></pre></div><h3 id="练习3-成绩为空的标记缺考" tabindex="-1">练习3：成绩为空的标记缺考 <a class="header-anchor" href="#练习3-成绩为空的标记缺考" aria-label="Permalink to &quot;练习3：成绩为空的标记缺考&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for row in sheet.iter_rows(min_row=2,min_col=2):</span></span>
<span class="line"><span>    for cell in row:</span></span>
<span class="line"><span>        if cell.value == None:</span></span>
<span class="line"><span>            cell.value = &#39;缺考&#39;</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h3 id="练习4-总分大于270分是优秀" tabindex="-1">练习4：总分大于270分是优秀 <a class="header-anchor" href="#练习4-总分大于270分是优秀" aria-label="Permalink to &quot;练习4：总分大于270分是优秀&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sheet[&#39;E1&#39;] = &#39;评价&#39;</span></span>
<span class="line"><span>area = sheet.iter_rows(min_row=2,min_col=2)</span></span>
<span class="line"><span>for row in area:</span></span>
<span class="line"><span>    总分 = sum([cell.value for cell in row][:-1])</span></span>
<span class="line"><span>    if 总分 &gt;= 270:</span></span>
<span class="line"><span>        row[-1].value = &#39;优秀&#39;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h3 id="练习5-帅选总分大于270分" tabindex="-1">练习5：帅选总分大于270分 <a class="header-anchor" href="#练习5-帅选总分大于270分" aria-label="Permalink to &quot;练习5：帅选总分大于270分&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for row_num in range(sheet.max_row,1,-1):</span></span>
<span class="line"><span>    总分 = sum([cell.value for cell in sheet[row_num][1:]])</span></span>
<span class="line"><span>    if 总分 &lt;= 270:</span></span>
<span class="line"><span>        sheet.delete_rows(row_num)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h3 id="练习6-按指定列拆分成多个工作表" tabindex="-1">练习6：按指定列拆分成多个工作表 <a class="header-anchor" href="#练习6-按指定列拆分成多个工作表" aria-label="Permalink to &quot;练习6：按指定列拆分成多个工作表&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>area = sheet.iter_rows(min_row=2)</span></span>
<span class="line"><span># 字典</span></span>
<span class="line"><span>dict = {}</span></span>
<span class="line"><span>for row in area:</span></span>
<span class="line"><span>    # 每行的数据</span></span>
<span class="line"><span>    row_values = [cell.value for cell in row]</span></span>
<span class="line"><span>    if row_values[1] in dict.keys():</span></span>
<span class="line"><span>        dict[row_values[1]] += [row_values]</span></span>
<span class="line"><span>    else:</span></span>
<span class="line"><span>        dict[row_values[1]] = [row_values]</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>for key,value in sorted(dict.items()):</span></span>
<span class="line"><span>    nws = file.create_sheet(key)</span></span>
<span class="line"><span>    nws.append([&#39;姓名&#39;,&#39;班级&#39;,&#39;分数&#39;])</span></span>
<span class="line"><span>    for v in value:</span></span>
<span class="line"><span>        nws.append(v)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>file.remove(file[&#39;Sheet1&#39;])</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h2 id="合并与取消合并单元格" tabindex="-1">合并与取消合并单元格 <a class="header-anchor" href="#合并与取消合并单元格" aria-label="Permalink to &quot;合并与取消合并单元格&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 合并单元格</span></span>
<span class="line"><span>sheet.meege_cells(&#39;B3:F5&#39;)</span></span>
<span class="line"><span># 取消合并单元格</span></span>
<span class="line"><span>sheet.unmeege_cells(&#39;B3:F5&#39;)</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sheet.merge_cells(start_row=起始行号, start_column=起始列号, end_row=结束行号, end_column=结束列号)</span></span></code></pre></div></blockquote><h2 id="使用公式以及注意事项" tabindex="-1">使用公式以及注意事项 <a class="header-anchor" href="#使用公式以及注意事项" aria-label="Permalink to &quot;使用公式以及注意事项&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sheet[&#39;F1&#39;] = &#39;=sum(C1:E1)&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><blockquote><p>注意：读取时会直接读取公式，所以要进行如下设置</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name, data_only=True)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>print(sheet[&#39;F1&#39;].value)</span></span></code></pre></div><h2 id="对行和列进行分组" tabindex="-1">对行和列进行分组 <a class="header-anchor" href="#对行和列进行分组" aria-label="Permalink to &quot;对行和列进行分组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name, data_only=True)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 对行分组</span></span>
<span class="line"><span>sheet.column_dimensions.group(&#39;A&#39;, &#39;D&#39;, hidden=True)</span></span>
<span class="line"><span># 对列分组</span></span>
<span class="line"><span>sheet.column_dimensions.group(1, 5, hidden=True)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h2 id="给单元格添加批注" tabindex="-1">给单元格添加批注 <a class="header-anchor" href="#给单元格添加批注" aria-label="Permalink to &quot;给单元格添加批注&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name, data_only=True)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>comments = vb.comments.Comment(&#39;这里写批注&#39;, &#39;批注人姓名：张三&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sheet[&#39;F20&#39;].comment = comments</span></span>
<span class="line"><span>sheet[&#39;F21&#39;].comment = comments</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h1 id="装饰部分" tabindex="-1">装饰部分 <a class="header-anchor" href="#装饰部分" aria-label="Permalink to &quot;装饰部分&quot;">​</a></h1><h2 id="字体-font" tabindex="-1">字体 Font <a class="header-anchor" href="#字体-font" aria-label="Permalink to &quot;字体 Font&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Font(name=&#39;Calibri&#39;, size=11, bold=False,italic=False,vertAlign=None, underline=&#39;none&#39;,strike=False, color=&#39;FF000000&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数解读：</span></span>
<span class="line"><span>name：字体名称，注意中文字体前面加u</span></span>
<span class="line"><span>size：字号大小</span></span>
<span class="line"><span>bold：True（加粗）/ False（不加粗）</span></span>
<span class="line"><span>italic：True（倾斜）/ False（不倾斜）</span></span>
<span class="line"><span>vertAlign：&#39;None&#39;（默认）/ &#39;superscript&#39;（上标）/ &#39;subscript&#39;（下标）</span></span>
<span class="line"><span>underline：&#39;None&#39;（默认）/ &#39;single&#39;（单下划线）/ &#39;double&#39;（双下划线）/ &#39;singleAccounting&#39;（会计用单下划线）/ &#39;doubleAccounting&#39;（会计用双下划线）</span></span>
<span class="line"><span>strike：&#39;True&#39;（显示删除线）/ &#39;False&#39;（不显示删除线）</span></span>
<span class="line"><span>color：字体的颜色 RGB转HEX</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 字体对象1</span></span>
<span class="line"><span>font_obj_1 = vb.styles.Font(name=u&#39;微软雅黑&#39;, bold=True, italic=True, size=72)</span></span>
<span class="line"><span>sheet[&#39;A1&#39;].font = font_obj_1</span></span>
<span class="line"><span># 字体对象2</span></span>
<span class="line"><span>font_obj_2 = vb.styles.Font(name=u&#39;隶书&#39;, bold=False, italic=False, size=48)</span></span>
<span class="line"><span>sheet[&#39;A2&#39;].font = font_obj_2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h2 id="对齐-alignment" tabindex="-1">对齐 Alignment <a class="header-anchor" href="#对齐-alignment" aria-label="Permalink to &quot;对齐 Alignment&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Alignment(horizontal=&#39;general&#39;,vertical=&#39;bottom&#39;, text_rotation=0, wrap_text=False, shrink_to_fit=False, indent=0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数说明：</span></span>
<span class="line"><span>horizontal：&#39;general&#39;（常规）/ &#39;justify&#39;（两端对齐）/ &#39;right&#39;（靠右）/ &#39;centerContinuous&#39;（跨列居中）/ &#39;distributed&#39;（分散对齐）/ &#39;fill&#39;（填充）/ &#39;center&#39;（居中）/ &#39;left&#39;（靠左）</span></span>
<span class="line"><span>vertical：&#39;center&#39;（垂直居中）/ &#39;top&#39;（靠上）/ &#39;bottom&#39;（靠下）/ &#39;justify&#39;（两端对齐）/ &#39;distributed&#39;（分散对齐）</span></span>
<span class="line"><span>text_rotation：指定文本旋转角度</span></span>
<span class="line"><span>wrap_text：是否自动换行</span></span>
<span class="line"><span>shrink_to_fit：是否缩小字体填充</span></span>
<span class="line"><span>indent：指定缩进</span></span></code></pre></div><h2 id="边框-side" tabindex="-1">边框 Side <a class="header-anchor" href="#边框-side" aria-label="Permalink to &quot;边框 Side&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Side(style=连线样式,color=边线颜色)</span></span>
<span class="line"><span>Border(left=左边线样式,right=右连线样式,top=上边线样式,bottom=下边线样式)</span></span>
<span class="line"><span>style参数的种类： &#39;double, ‘mediumDashDotDot’, ‘slantDashDot’,‘dashDotDot’,‘dotted’,‘hair’, &#39;mediumDashed, ‘dashed’, ‘dashDot’, ‘thin’,‘mediumDashDot’,‘medium’, &#39;thick’</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>side = vb.styles.Side(style=&#39;thin&#39;,color=&#39;FF0000&#39;)</span></span>
<span class="line"><span>border = vb.styles.Border(left=side,right=side,top=side,bottom=side)</span></span>
<span class="line"><span>sheet[&#39;A1&#39;].border = border</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h2 id="填充-patternfill" tabindex="-1">填充 PatternFill <a class="header-anchor" href="#填充-patternfill" aria-label="Permalink to &quot;填充 PatternFill&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PatternFill(fill_type=None, start_color=&#39;FFFFFF&#39;, end_color=&#39;FF0000&#39;)</span></span>
<span class="line"><span>fill_type：&#39;None&#39;（不填充）/ &#39;solid&#39;（实心填充）/ &#39;darkGray&#39;（75%灰色）&#39;mediumGray&#39;（50%灰色）/ &#39;lightGray&#39;（25%灰色）/ &#39;gray125&#39;（12.5%灰色）/ &#39;gray0625&#39;（6.25%灰色）/ &#39;darkHorizontal&#39;（水平条纹）/ &#39;darkVertical&#39;（垂直条纹）/ &#39;darkDown&#39;（逆对角线条纹）/ &#39;darkUp&#39;（对角线条纹）/ &#39;darkGrid&#39;（对角线剖面线）/ &#39;darkTrellis&#39;（粗对角线剖面线）/ &#39;lightHorizontal&#39;（细水平条纹）/ &#39;lightVertical&#39;（细垂直条纹）/ &#39;lightDown&#39;（细逆对角线条纹）/ &#39;lightUp&#39;（细对角线条纹）/ &#39;lightGrid&#39;（细水平剖面线）/ &#39;lightTrellis&#39;（细对角线剖面线）</span></span>
<span class="line"><span>start_color / fgColor：背景颜色 RGB转HEX</span></span>
<span class="line"><span>end_color / bgColor：图案颜色 RGB转HEX</span></span></code></pre></div><h2 id="渐变填充-gradientfill" tabindex="-1">渐变填充 GradientFill <a class="header-anchor" href="#渐变填充-gradientfill" aria-label="Permalink to &quot;渐变填充 GradientFill&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GradientFill(stop=(渐变颜色1, 渐变颜色2, ….))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fill_type：&#39;linear&#39;（线性渐变）/ &#39;path&#39;（中心扩散）</span></span>
<span class="line"><span>degree：旋转角度</span></span>
<span class="line"><span>stop：一个元组 (OO, XX)，OO 为起始颜色，XX 为结束颜色</span></span></code></pre></div><h2 id="锁定单元格和隐藏公式" tabindex="-1">锁定单元格和隐藏公式 <a class="header-anchor" href="#锁定单元格和隐藏公式" aria-label="Permalink to &quot;锁定单元格和隐藏公式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Protection(locked=True,  hidden=False) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>locked：指定是否锁定单元格</span></span>
<span class="line"><span>hidden：指定是否隐藏公式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>只有在开启 “保护工作表” 之后，“锁定单元格” 和 “隐藏公式” 才生效。</span></span>
<span class="line"><span>在工作表处点击右键，即可开启 “保护工作表”：</span></span></code></pre></div><h2 id="行高和列宽" tabindex="-1">行高和列宽 <a class="header-anchor" href="#行高和列宽" aria-label="Permalink to &quot;行高和列宽&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name, data_only=True)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sheet.row_dimensions[1].height = 200</span></span>
<span class="line"><span>sheet.column_dimensions[&#39;B&#39;].width = 100</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h1 id="图表操作" tabindex="-1">图表操作 <a class="header-anchor" href="#图表操作" aria-label="Permalink to &quot;图表操作&quot;">​</a></h1><h2 id="插入图片" tabindex="-1">插入图片 <a class="header-anchor" href="#插入图片" aria-label="Permalink to &quot;插入图片&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name, data_only=True)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>image = vb.drawing.image.Image(&#39;./img.png&#39;)</span></span>
<span class="line"><span>image.height = 100</span></span>
<span class="line"><span>image.width = 70</span></span>
<span class="line"><span>shhet.add_image(image,&quot;F19&quot;)</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h2 id="柱状图" tabindex="-1">柱状图 <a class="header-anchor" href="#柱状图" aria-label="Permalink to &quot;柱状图&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name, data_only=True)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 新建一个柱状图</span></span>
<span class="line"><span>chart = vb.chart.BarChart()</span></span>
<span class="line"><span># 设定数据引用范围</span></span>
<span class="line"><span>data = vb.chart.Reference(sheet,min_row=1,max_row=5,min_col=2,max_col=3)</span></span>
<span class="line"><span># X轴项目名称</span></span>
<span class="line"><span>name_x = vb.chart.Reference(sheet,min_row=2,max_row=5,min_col=1)</span></span>
<span class="line"><span># 给柱状图添加数据，数据源中有标题，因为数据中有标题行，这里为True</span></span>
<span class="line"><span>chart.add_data(data,titles_from_data=True)</span></span>
<span class="line"><span># 设定X轴的项目</span></span>
<span class="line"><span>chart.set_categories(name_x)</span></span>
<span class="line"><span>sheet.add_chart(chart,&quot;F1&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div><h2 id="折线图" tabindex="-1">折线图 <a class="header-anchor" href="#折线图" aria-label="Permalink to &quot;折线图&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import openpyxl as vb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>file_name = &#39;test.xlsx&#39;</span></span>
<span class="line"><span>file = vb.load_workbook(file_name, data_only=True)</span></span>
<span class="line"><span>sheet = file[&#39;Sheet1&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 新建一个折线图</span></span>
<span class="line"><span>chart = vb.chart.LineChart()</span></span>
<span class="line"><span># 设定数据引用范围</span></span>
<span class="line"><span>data = vb.chart.Reference(sheet,min_row=2,max_row=3,min_col=1,max_col=13)</span></span>
<span class="line"><span># 分类的项目</span></span>
<span class="line"><span>project = vb.chart.Reference(sheet,min_row=1,min_col=2,max_col=13)</span></span>
<span class="line"><span># 给柱状图添加数据，数据源中有标题，from_rows=True因为数据是横项</span></span>
<span class="line"><span>chart.add_data(data,from_rows=True,titles_from_data=True)</span></span>
<span class="line"><span># 设定X轴的项目</span></span>
<span class="line"><span>chart.set_categories(project)</span></span>
<span class="line"><span>sheet.add_chart(chart,&quot;A8&quot;)</span></span>
<span class="line"><span>file.save(file_name)</span></span></code></pre></div>`,98),i=[l];function t(c,o,r,h,d,u){return n(),a("div",null,i)}const v=s(e,[["render",t]]);export{m as __pageData,v as default};
