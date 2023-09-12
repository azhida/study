#!/usr/bin/env sh

# 忽略错误
set -e  #有错误抛出错误

pnpm run docs:build
cd English
pnpm run build

cd ../gh-pages

git init
git add -A
git commit -m 'deploy'
git push -f git@gitee.com:wghzhida/study.git master:gh-pages
git push -f git@github.com:azhida/study.git master:gh-pages

# cd ../../../
# rm -rf docs/.vitepress/dist  #删除dist文件夹
