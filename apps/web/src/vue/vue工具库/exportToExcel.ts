
import { saveAs } from 'file-saver';
import { Workbook } from 'exceljs';

interface Header {
  header: String; // 显示的字段内容
  key: string;//键名
  width: number;//宽度
}

export interface ExportToExcelParams {
  file_name: string; // 文件名称
  sheet_name: string; // 工作表名称
  title: string; // 标题
  headers: Header[]; // 字段匹配
  json_data: object[];// 数据
}

export async function exportToExcel(params: ExportToExcelParams | any = {}) {

  const {
    file_name = 'demo.xlsx',
    sheet_name = 'My Sheet',
    title = '标题',
    headers = [
      { header: '字段1', key: 'key1', width: 10 },
      { header: '字段2', key: 'key2', width: 20 },
    ], // 表头
    json_data = [
      { key1: '张三', key2: 20 },
      { key1: '李四', key2: 120 },
    ]
  }: ExportToExcelParams = params;

  // 获取工作表的列数
  const columnCount = headers.length;

  // 创建工作簿
  const workbook = new Workbook();
  const worksheet: any = workbook.addWorksheet(sheet_name);

  // 添加表头
  worksheet.columns = headers;

  // 添加数据
  worksheet.addRows(json_data);

  handleHeaderRow(worksheet, worksheet.getRow(1));

  // 插入一列到最前面
  worksheet.spliceColumns(1, 0, []);

  // 插入两个空行到最前面
  worksheet.insertRows(1, [{}, {}]);

  // 添加标题
  handleTitleCell(worksheet, columnCount, title);

  handleBorder(worksheet);

  // 写入工作簿并下载
  await workbook.xlsx.writeBuffer().then(data => {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(blob, file_name);
  });
}

function handleBorder(worksheet) {

  // 区域
  const rowCount_min = 3;
  const rowCount_max = worksheet.rowCount;
  const columnCount_min = 2;
  const columnCount_max = worksheet.columnCount;

  console.log(rowCount_min, 'rowCount_min');
  console.log(rowCount_max, 'rowCount_max');
  console.log(columnCount_min, 'columnCount_min');
  console.log(columnCount_max, 'columnCount_max');

  worksheet.getRow(rowCount_min).eachCell({ includeEmpty: true }, (cell, colNumber) => {
    if (colNumber > 1) {
      cell.border = getBorderStyle('top');
    }
  })
  worksheet.getRow(rowCount_max).eachCell({ includeEmpty: true }, (cell, colNumber) => {
    if (colNumber > 1) {
      cell.border = getBorderStyle('bottom');
    }
  })
  worksheet.getColumn(columnCount_min - 1).eachCell({ includeEmpty: true }, (cell, rowNumber) => {
    if (rowNumber > 2) {
      cell.border = { right: { style: 'medium' } }
    }
  })
  worksheet.getColumn(columnCount_max + 1).eachCell({ includeEmpty: true }, (cell, rowNumber) => {
    if (rowNumber > 2) {
      cell.border = { left: { style: 'medium' } }
    }
  })
}

function getBorderStyle(e = '') {

  // 加粗： thick ，细边： thin , medium
  const border = {
    top: {
      style: 'thin',
    },
    left: {
      style: 'thin',
    },
    bottom: {
      style: 'thin',
    },
    right: {
      style: 'thin',
    }
  }

  if (e) {
    for (var i in border) {
      border[e].style = 'medium';
    }
  }

  return border;
}

function handleTitleCell(worksheet, columnCount, title) {

  // 起始列号
  const colNumber_start = 2;
  // 结束列号
  const colNumber_end = colNumber_start + columnCount - 1;
  console.log(colNumber_start, 'colNumber_start', colNumber_end, 'colNumber_end');

  // 合并单元格,添加表格标题
  // 按开始行，开始列，结束行，结束列合并（相当于 K10:M12）
  worksheet.mergeCells(2, colNumber_start, 2, colNumber_end);

  const cell = worksheet.getRow(2).getCell(2);

  cell.value = title;
  // 设置单元格的样式
  cell.style = {
    font: {
      size: 20, // 字体大小
      color: { argb: 'FF0000C0' } // 设置字体颜色为红色
    }
  };
  cell.alignment = {
    horizontal: 'center', // 水平居中
    vertical: 'center', // 垂直居中
    wrapText: false, // 文字自动换行
  };
}

function handleHeaderRow(worksheet, row) {
  // 设置文字颜色
  row.font = {
    bold: true,
    size: 12, // 字体大小，默认也是 12
    color: { argb: 'FF0000C0' }, // 设置字体颜色
  };
  // 设置文字对齐方式
  row.alignment = {
    horizontal: 'center', // 水平居中
    vertical: 'center', // 垂直居中
    wrapText: false, // 文字自动换行
  };

  // 设置所有列
  row.eachCell(cell => {
    const column = worksheet.getColumn(cell._column._number);
    column.alignment = {
      horizontal: 'center', // 水平居中
      vertical: 'center', // 垂直居中
      wrapText: false, // 文字自动换行
    };

    column.eachCell({ includeEmpty: true }, cell1 => {
      cell1.border = getBorderStyle();
    })
  })
}

const headers = [
  { header: '姓名', key: 'name', width: 10 },
  { header: '年龄', key: 'age', width: 5 },
];
const json_data = [
  { name: '张三', age: 10 },
  { name: '李四', age: 20 },
];
// 调用
exportToExcel({
  file_name: '班级名单.xlsx',
  sheet_name: '班级名单',
  title: '班级信息统计表',
  headers: headers,
  json_data: json_data,
})