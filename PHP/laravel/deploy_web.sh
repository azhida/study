#!/bin/sh
# 前端 PC项目 部署脚本
# 该脚本部署到前端代码根目录
# 前端代码与后端代码要部署在同级目录中

# 根据环境，选择部署的代码源
# cat 是系统关键词
eval `cat ../laravel/.env`
echo 运行环境 "$APP_ENV"

if [ "$APP_ENV" = 'production' ];then
  source_dir=../web/dist
elif [ "$APP_ENV" = 'local' ];then
  source_dir=../web/test
else
  echo 推出程序
  exit 0
fi

echo 'source_dir：' $source_dir

# 先备份原文件夹 -- 命名文件夹 -- 创建日期时间文件夹 ， $dirdate 为变量，date 是系统关键词：日期时间
dirdate=`date +%Y%m%d`_`date +%H%M%S`
bak_dir=../laravel/public/w_bak_$dirdate
sudo mkdir "$bak_dir"
echo '创建备份目录：' "$bak_dir"
# 备份原文件夹内容
old_dir=../laravel/public/m
sudo cp -r "$old_dir"/* "$bak_dir"
echo '已备份:' "$old_dir" '=>' "$bak_dir" 中

# 部署最新代码
sudo cp -r "$source_dir"/* "$old_dir"
echo '已部署：' "$source_dir" '=>' "$old_dir"
