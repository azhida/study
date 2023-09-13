#!/usr/bin/env sh

# 忽略错误
set -e  #有错误抛出错误

if [ -d './gh-pages' ]; then

echo "gh-pages 目录存在"

else

echo "gh-pages 目录不存在"
git clone git@gitee.com:wghzhida/study.git -b gh-pages gh-pages

fi

cd ./gh-pages
git checkout .
git checkout gh-pages
git pull

rm -rf ../gh-pages-temp/English
mv  English ../gh-pages-temp/English
rm -rf *

cd ../

pnpm i
pnpm run docs:build

mv ./gh-pages-temp/English ./gh-pages/English
# cd ./English
# pnpm i
# pnpm run build

cd ./gh-pages

git add -A
git commit -m 'deploy'
git push git@gitee.com:wghzhida/study.git gh-pages:gh-pages
git push git@github.com:azhida/study.git gh-pages:gh-pages


# cd ../../../
# rm -rf docs/.vitepress/dist  #删除dist文件夹
