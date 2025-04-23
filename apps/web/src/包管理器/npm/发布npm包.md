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


## 手动将包同步到淘宝镜像

> 淘宝镜像自动同步可能有时间差，如果想立即同步，需要手动操作！

- 登录淘宝镜像网站 https://npmmirror.com
- 搜索你想要同步的包
- 点击 `版本列表`
- 点击 `进行同步`