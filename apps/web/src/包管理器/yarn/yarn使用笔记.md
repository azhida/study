# yarn 使用笔记

## yarn 常用命令

```sh
# 查看源
yarn config get registry

# 设置源
yarn config set registry https://registry.npm.taobao.org/
yarn config set registry https://registry.npmmirror.com
yarn config set registry https://registry.npmjs.org
yarn install --registry https://registry.npmmirror.com
yarn install --registry https://registry.npmjs.org
```