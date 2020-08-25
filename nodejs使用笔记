# windows 通过 npm安装yarn
npm install -g yarn
# 查看 yarn 版本
yarn --version

# 默认情况下，我们在执行npm install -g XXXX下载全局包时，这个包的默认存放路径位C:\Users\用户名\AppData\Roaming\npm\node_modules 下，可以通过CMD指令npm root -g查看
# 修改全局依赖包下载路径
npm config set prefix "D:\nodejs\node_global" 或 npm config set prefix "D:\nodejs\node_modules"
npm config set cache "D:\nodejs\node_cache"

# npm 查询当前配置的镜像
npm get registry
# npm 设置成淘宝镜像
npm config set registry http://registry.npm.taobao.org/
# npm 换成原来镜像
npm config set registry https://registry.npmjs.org/

# 安装淘宝 npm 镜像加速
npm install -g cnpm --registry=https://registry.npm.taobao.org

# yarn 查询当前配置镜像
yarn config get registry
# yarn 设置成淘宝镜像
yarn config set registry http://registry.npm.taobao.org/