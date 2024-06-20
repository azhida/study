# Python 多环境管理 - conda

## 安装 conda [miniconda]

软件列表： https://repo.anaconda.com/miniconda/

- 下载软件 [Miniconda3-latest-Windows-x86_64.exe](https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe)
- 安装 Miniconda3-latest-Windows-x86_64.exe ，目录 `D:\ruanjian\miniconda3`
- 配置环境变量 `D:\ruanjian\miniconda3\Scripts`
- 新开 CMD 窗口，执行 `conda -V` ，输出 `conda 24.4.0`
- 安装完成

[conda 使用文档](https://conda.io/projects/conda/en/latest/user-guide/getting-started.html)

[Anaconda 文档](https://docs.anaconda.com/anaconda/?souce=installation-success)

## 创建Conda虚拟环境

在命令行中，使用以下命令创建一个名为 myenv 的新虚拟环境，指定Python版本（例如Python 3.8）：

```sh
conda create --name myenv python=3.8
```

## 激活Conda虚拟环境

```sh
conda activate myenv
```

如果报错 `CondaError: Run 'conda init' before 'conda activate'` , 重新打开一个 CMD 窗口执行即可。

激活后，命令行提示符会显示当前活动环境的名称（如 `(myenv)` ），表示你现在处于该虚拟环境中。

## 安装Python包

在激活的环境中，使用 `conda` 或 `pip` 安装所需的 Python 包。例如，安装 `numpy` 和 `pandas` ：

```sh
# 在conda环境中，pip会与conda兼容

conda install numpy pandas
# 或
pip install numpy pandas
```

## 管理Conda环境

```sh
# 列出所有环境：
conda env list
# base                  *  D:\ruanjian\miniconda3
# myenv                    D:\ruanjian\miniconda3\envs\myenv

# 激活环境(切换环境)
conda activate base
conda activate myenv

# 创建环境
conda create --name testenv python=3.7
conda activate testenv
python -V
# Python 3.7.16

# 删除环境：
conda remove --name testenv --all

# 克隆环境：
conda create --name myenv_copy --clone myenv

# 导出环境配置：
conda env export > environment.yml
# 从配置文件创建环境：
conda env create -f environment.yml
```


## 参考

[Python 管理 —— Conda](https://zhuanlan.zhihu.com/p/638540652)

[Python虚拟环境conda的安装使用教程](https://www.jb51.net/python/318733ev7.htm)