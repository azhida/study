# 在 Ubuntu 中配置 Conda 环境

Conda 是一个开源的包管理器和环境管理器，可以用于安装、运行和更新包和环境。它非常适用于管理多个数据科学、Python项目，确保各个项目的依赖隔离，避免相互冲突。

## 下载 Anaconda 安装器

下载地址：

https://www.anaconda.com/download#downloads

https://repo.anaconda.com/archive/Anaconda3-2024.02-1-Linux-x86_64.sh

```sh
wget https://repo.anaconda.com/archive/Anaconda3-2024.02-1-Linux-x86_64.sh
```

## 终端中安装 Anaconda

### 安装软件

```sh
bash Anaconda3-2024.02-1-Linux-x86_64.sh
```

### 接受许可协议

输入 `yes`

### 选择安装位置

默认位置 `/home/user/anaconda3`

### 初始化 Conda

在安装过程的最后，脚本会询问你是否希望让 `conda init` 初始化。建议输入 `yes` ，这将使 Conda 集成到你的 shell 脚本中，允许你直接从终端激活 Conda 环境。

## 激活安装

安装完成后，为了使安装生效，你需要关闭并重新打开终端窗口，或者运行以下命令来激活安装环境：

```sh
source ~/.bashrc
```

## 测试 Conda 安装

通过运行以下命令来测试 Conda 是否正确安装：

```sh
conda list
```

如果安装成功，你将看到已安装的包列表。

## 创建和激活新的 Conda 环境

通过以下命令创建一个新的 Conda 环境，其中 `myenv` 是环境名称，`python=3.8` 指定了 Python 版本：

```sh
conda create --name myenv python=3.8
```

创建环境后，使用以下命令激活该环境：

```sh
conda activate myenv
```

## 管理包

在 Conda 环境中，可以使用 `conda install` 命令安装新的包。例如，要安装 `NumPy` ，可以使用：

```sh
conda install numpy
```

## 参考

[在Ubuntu中配置Conda环境的步骤](https://www.8kiz.cn/archives/17534.html)