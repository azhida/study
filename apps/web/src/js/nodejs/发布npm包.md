# 发布npm包

## 写好包

## 登录 npm
```
npm login
```
注意：如果登录报错，可执行
```
npm config set registry https://registry.npmjs.org/
```

## 发布
```sh
npm publish
# name 为 @azhida/vvte-ui
npm publish --access public
```
如果报错，可检查报名是否重复，也要注意包名不要写的太随意，有可能被认定为垃圾包名，也会报错无法提交


