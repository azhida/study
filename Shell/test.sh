# 命名文件夹 -- 创建日期时间文件夹
dirdate=`date +%Y%m%d`_`date +%H%M%S`
# $dirdate 为变量
bak_dir=Shell/Shell_$dirdate
mkdir $bak_dir
echo '创建了文件夹 ' $bak_dir

# 复制 Shell文件夹下所有子文件夹和文件到 新文件夹 $bak_dir 下 
cp -r Shell/学习笔记.md $bak_dir
echo '复制 Shell文件夹下所有文件到 新文件夹 ' $bak_dir ' 下'