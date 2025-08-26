# 学习笔记

注：本项目全部内容仅用于学习！部分内容来自网络转载，在此感谢各位作者，感谢各路大神！

## 打包

```sh
# 根目录下，一键打包 apps 全部项目
pnpm all:cf:build
```

## 提交编译包到独立分支

> 提交到多个远程仓库的git配置，请看：https://study-43p.pages.dev/dev-tool/Git/git%E5%B0%86%E4%BB%A3%E7%A0%81%E5%90%8C%E6%97%B6%E6%8F%90%E4%BA%A4%E5%88%B0gitee%E5%92%8Cgithub

### `cf-pages` 分支

```sh
git add cf-pages
git commit -m 'feat: 提交 cf-pages 分支'
git push

# 提交编译包到独立分支
git subtree push --prefix=cf-pages origin cf-pages
# 提交到 github 仓库的 cf-pages 分支
git subtree push --prefix=cf-pages github cf-pages
# 提交到 gitee 仓库的 cf-pages 分支
git subtree push --prefix=cf-pages gitee cf-pages
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