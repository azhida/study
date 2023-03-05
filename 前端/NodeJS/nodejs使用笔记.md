```
# 安装nodejs — linux

wget https://nodejs.org/dist/v14.19.2/node-v14.19.2-linux-x64.tar.xz
tar xf node-v14.19.2-linux-x64.tar.xz
# 建立软连接（注意一定要用绝对路径）
ln -s /root/node-v14.19.2-linux-x64/bin/node /usr/bin/node
ln -s /root/node-v14.19.2-linux-x64/bin/npm /usr/bin/npm
ln -s /root/node-v14.19.2-linux-x64/bin/npx /usr/bin/npx

# npm 升级到指定版本
npm install npm@8.19.1 -g
```


```
# windows 通过 npm安装yarn
npm install -g yarn
# 查看 yarn 版本
yarn --version
```

```
# 默认情况下，我们在执行npm install -g XXXX下载全局包时，这个包的默认存放路径位C:\Users\用户名\AppData\Roaming\npm\node_modules 下，可以通过CMD指令npm root -g查看
# 修改全局依赖包下载路径
npm config set prefix "D:\nodejs\node_global" 或 npm config set prefix "D:\nodejs\node_modules"
npm config set cache "D:\nodejs\node_cache"
```

```
# npm 查询当前配置的镜像
npm get registry
# npm 设置成淘宝镜像
npm config set registry http://registry.npm.taobao.org/
# npm 换成原来镜像
npm config set registry https://registry.npmjs.org/
```

```
# 安装淘宝 npm 镜像加速
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

```
# yarn 查询当前配置镜像
yarn config get registry
# yarn 设置成淘宝镜像
yarn config set registry http://registry.npm.taobao.org/
```

```
# Scss--版本的对应关系(sass, sass-loader, dart-sass, node-sass等）
# 一组可用的组合
node: v14.19.0;
node-sass: ^4.14.1;
sass-loader: ^7.3.1;
```

