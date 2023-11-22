# pnpm 使用笔记

## 安装

```sh
npm i -g pnpm
```

## pnpm 常用命令

```sh
# 升级
pnpm add -g pnpm

# 查看源
pnpm config get registry 

# 设置源
pnpm config set registry https://registry.npm.taobao.org/
pnpm config set registry https://registry.npmmirror.com
pnpm config set registry https://registry.npmjs.org

# 配置pnpm全局安装路径
pnpm config set global-dir "E:\Env\Pnpm\global"

# 配置pnpm全局bin文件安装路径
pnpm config set global-bin-dir "E:\Env\Pnpm\global-bin"

# 配置pnpm cache路径
pnpm config set cache-dir "E:\Env\Pnpm\cache"

# 配置pnpm state路径
pnpm config set state-dir "E:\Env\Pnpm\state"

# 配置pnpm store路径
pnpm config set state-dir "E:\Env\Pnpm\store"

# 下载安装依赖包(XXX)
pnpm install XXX
pnpm i XXX
# -S  默认写入dependencies
pnpm add XXX -S
# -D devDependencies
pnpm add -D
# 全局安装
pnpm add -g

# 移除包(XXX)
pnpm remove XXX
# 移除全局包(XXX)
pnpm remove XXX --global

# 更新所有依赖项
pnpm up                
# 更新包(XXX)
pnpm upgrade XXX
# 更新全局包(XXX)
pnpm upgrade XXX --global
```