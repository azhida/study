# conda

官网：https://www.anaconda.com/

安装包下载：https://www.anaconda.com/download/success

## 相关命令

### 查看 conda 信息
```sh
conda info
```

### 更新 conda
```sh
# 更新 conda
conda update conda
```

### 创建和管理环境

```sh
# 创建新环境
conda create --name myenv python=3.8
# 激活环境
conda activate myenv
# 列出所有环境
conda env list
```

### 安装、更新和移除包

```sh
# 安装包
conda install numpy
# 更新包
conda update numpy
# 移除包
conda remove numpy
```

### 使用 Conda 配置文件

`conda` 使用 `.condarc` 文件来存储配置设置。这个文件通常位于用户的主目录下（例如，在 Windows 上是 `C:\Users\YourUsername\.condarc`）。你可以手动编辑这个文件来设置代理、频道优先级等。例如，你可以添加以下内容来设置代理：

```sh

```

### 更换镜像源

#### 查看源

```sh
# 列出源
conda config --show-sources
conda config --show channels

```

#### 删除源

```sh
# 删除源[指定源]
conda config --remove channels https://repo.anaconda.com/pkgs/msys2


# 移除所有自定义的channels（包括镜像源）
conda config --remove-key channels


```

#### 添加源

```sh
# 添加源
conda config --add channels https://mirrors.tuna.edu.cn/anaconda/pkgs/main

# 使用默认的channels
conda config --set channels default
```

#### 测试源
```sh
# 测试 conda 源， 如果能快速返回结果，说明换源成功！
conda search numpy
```
