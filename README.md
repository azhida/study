# 学习笔记

注：本项目全部内容仅用于学习！部分内容来自网络转载，在此感谢各位作者，感谢各路大神！

## 打包

```sh
# 根目录下，一键打包 apps 全部项目
pnpm all:cf:build
```

## 提交编译包到独立分支

### `cf-pages` 分支

```sh
git add cf-pages
git commit -m 'feat: 提交 cf-pages 分支'
git push

# 提交编译包到独立分支
git subtree push --prefix=cf-pages origin cf-pages
```


## 预览

```sh
# 根目录下，预览 apps 全部项目
pnpm all:cf:preview
```

## 部署

```sh
# 部署到 cloudflare pages
pnpm cf-pages:deploy-only
```