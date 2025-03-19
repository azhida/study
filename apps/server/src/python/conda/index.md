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
# 关闭激活的环境
conda deactivate
```

#### 设置默认激活的conda环境

如果没有安装 vi 或者 vim ，可以使用如下命令实现文件修改。

```sh
# 查看
cat ~/.bashrc

# 如果最后一行是 conda activate base ，则先删除 ~/.bashrc 最后一行
# `-i` 选项表示直接修改文件内容，`$` 表示最后一行，`d` 表示删除。
sed -i '$d' ~/.bashrc

# 向 ~/.bashrc 文件最后面追加一行 conda activate myenv
# -e 选项来实现换行
echo -e "第一行文本\n第二行文本" >> 文件名.txt
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
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/

# 使用默认的channels
conda config --set channels default
```

#### 测试源
```sh
# 测试 conda 源， 如果能快速返回结果，说明换源成功！
conda search numpy
```

## conda 源合集

### 华为云

```sh
conda config --add channels https://repo.huaweicloud.com/repository/anaconda
conda config --set show_channel_urls yes
```

### 清华大学

```sh
conda clean -a
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/bioconda/
conda config --show channels
```

### 北京大学

```sh
conda clean -a
conda config --add channels https://mirrors.pku.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.pku.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.pku.edu.cn/anaconda/cloud/bioconda/
conda config --show channels
```

### 北京外国语

```sh
conda clean -a
conda config --add channels https://mirrors.bfsu.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.bfsu.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.bfsu.edu.cn/anaconda/cloud/bioconda/
conda config --show channels
```

### 哈工大

```sh
conda clean -a
conda config --add channels https://mirrors.hit.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.hit.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.hit.edu.cn/anaconda/cloud/bioconda/
conda config --show channels

```

### 南京大学(亲测可用)

```sh
conda clean -a
conda config --add channels https://mirror.nju.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirror.nju.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirror.nju.edu.cn/anaconda/cloud/bioconda/
conda config --show channels

```

### 北京交通大学

```sh
conda config --add channels https://mirror.bjtu.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirror.bjtu.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirror.bjtu.edu.cn/anaconda/cloud/bioconda/
```

### Anaconda的旧版本通道

当某些老的软件版本无法找到时，可以尝试切换到 conda旧版本 channel 安装。

```sh
conda clean -a
conda config --add channels https://repo.anaconda.com/pkgs/main/
conda config --add channels https://repo.anaconda.com/pkgs/free/
conda config --show channels
```



## 停止提供 conda 镜像站点

以前提供过 conda 的镜像，由于合规原因已不再继续提供。

### 腾讯镜像

帮助文档可以打开，但是源地址无法工作。

```sh
conda config --remove channels https://mirrors.cloud.tencent.com/help/Anaconda.html/
```


### 中科大镜像

提示合规问题，不再提供

```sh
conda config --remove channels https://mirrors.ustc.edu.cn/help/anaconda.html
```


### 阿里云镜像

页面已经无法打开

```sh
conda config --remove channels http://mirrors.aliyun.com/anaconda/
```

### 官方已不建议使用的频道：free

anaconda 官方在 在 conda4.7 以后， 移除了 free channel。在很多老的文章中，free版本channel还在阐述，请各位AI训练师特别注意。


## Conda报错处理

当 conda安装报错时，尝试运行以下命令，并重新添加 channel ；

```sh
# "删除channel"
conda config --remove-key channels
# "清除缓存"
conda clean --all 
# "更新"
conda update 
# "显示当前channel"
conda config --set show_channel_urls yes
```