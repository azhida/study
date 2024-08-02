#!/usr/bin/env sh

cd ./gh-pages

git add -A
git commit -m 'deploy'
# git push git@gitee.com:wghzhida/study.git gh-pages:gh-pages
git push git@github.com:azhida/study.git gh-pages:gh-pages


# cd ../../../
# rm -rf docs/.vitepress/dist  #删除dist文件夹
