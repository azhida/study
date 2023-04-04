```
composer require tecnickcom/tcpdf
```

TCPDF简明教程  
https://www.cnblogs.com/66w66/p/13710730.html

附录：TCPDF常用函数的使用说明：

　　$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

　　页面记得也设为utf-8

　　AddPage();新建一个pdf文档页面。

　　Image($file, $x, $y, $w, $h, $type, $link, $align, $resize, $dpi, $palign, $ismask, $imgmask, $border);

　　注：把图片放语句$pdf->AddPage()之后，而这紧挨着，并且使用绝对坐标定位，即可做背景。

　　setFont( '字体','控制显示',字号) 设置文字显示样式也可单独使用

　　setTextcolor(int，int，int)设置文本颜色，三个参数的值必须在0~255之间

　　setFontSize(int );设置字号

　　setFillColor(int,int,int) 设置矩形框之类图形的填充颜色，三个参数值必须在0和255之间

　　输入文字：

　　单行文本

　　Cell($w, $h=0, $txt='', $border=0, $ln=0, $align='', $fill=0, $link='', $stretch=0)

　　Cell(宽, 高, 内容, 边框, 是否换行, 文字对齐, 文字底色,连接, 变宽)

　　多行文本

　　MultiCell($w, $h, $txt, $border=0, $align='J', $fill=0, $ln=1, $x='', $y='', $reseth=true, $stretch=0, $ishtml=false, $autopadding=true, $maxh=0)

　　MultiCell(宽, 高, 内容, 边框,文字对齐, 文字底色, 是否换行, x坐标, y坐标, 变高, 变宽, 是否支持html, 自动填充, 最大高度)

　　html文字

　　setHtmlLinksStyle($color=array(0,0,255), $fontstyle='U');

　　setHtmlLinksStyle(颜色默认蓝色, U有下划线);

　　addHtmlLink($url, $name, $fill=0, $firstline=false, $color='', $style=-1);

　　addHtmlLink(超链接地址, 显示文字, 是否有底色, $firstline=false, $color='', $style=-1);

　　换行

　　Ln($h='', $cell=false);

　　Ln(行数, 是否cell);

　　加密

　　SetProtection($permissions=array(), $user_pass='', $owner_pass=null);

　　例如：

　　$pdf->SetProtection(array('print','modify','copy','annot-forms'), '123658');

　　图片背景

　　输出pdf

　　$pdf->Output(doc.pdf', 'I');/* 默认是I：在浏览器中打开，D：下载，F：在服务器生成pdf ，S：只返回pdf的字符串
