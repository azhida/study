# go get vs go install

## 特性

### 用途
#### go get

- 下载和安装 Go 包和工具
- 更新现有包和工具

#### go install

- 安装 Go 工具
- 编译并安装 Go 包

### 主要功能
#### go get

- 从远程代码仓库获取包
- 将包添加到模块的依赖列表
- 更新包至最新版本

#### go install

- 编译并安装指定包
- 将编译后的二进制文件安装到 $GOPATH/bin 或模块所在目录

### 使用方式
#### go get

- go get [package]
- go get -u [package]（更新包）

#### go install

- go install [package]

### 包管理
#### go get

- 更新或下载指定包及其依赖
- 可用于获取第三方库和工具

#### go install

- 针对当前模块或指定包进行安装
- 对包进行编译并安装到 $GOPATH/bin 或模块目录

### 安装位置
#### go get

- 安装到 $GOPATH/bin（Go 1.16 之前）
- 在模块模式下，安装到 $GOPATH/bin 或模块目录

#### go install

- 安装到 $GOPATH/bin 或模块目录

### 模块支持
#### go get

- 支持 Go Modules（从 Go 1.11 起）
- 可以在模块模式下使用

#### go install

- 支持 Go Modules（从 Go 1.16 起）
- 安装指定的包或工具

### 常用场景
#### go get

- 获取新工具
- 更新现有工具和包

#### go install

- 安装工具到全局环境
- 编译当前项目并安装

### 示例
#### go get

- go get golang.org/x/tools/cmd/gopls
- go get -u github.com/gin-gonic/gin

#### go install

- go install golang.org/x/tools/cmd/gopls@latest
- go install ./cmd/mytool

