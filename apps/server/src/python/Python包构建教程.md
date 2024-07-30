# setuptools 和 setup.py

`Setuptools` 和 `distutils` 都是用于编译、分发和安装 python 包的一个工具，特别是在包依赖问题场景下非常有用，它是一个强大的包管理工具。Setuptools 是 distutils 的加强版。编译、分发和安装 python 包的一个关键的事就是编写 setup 脚本。setup 脚本的主要作用在于向包管理工具 `Setuptools` 或 `distutils` 说明你的模块分发细节，所以 `Setuptools` 支持大量的命令以操作你的包。setup 脚本主要调用一个 `setup()` 方法，许多提供给 `Setuptools` 的信息都以 `keyword arguments` 的参数形式提供给 `setup()` 方法。

# 你所需要做的事 & 一些概念

对于包开发者和使用者，所需要做的事：

* 编写 setup.py 脚本，用于处理你的包
* （可选）编写 setup 配置文件
* 创建源码分发文件，`python setup.py sdist`，
* （可选）创建二进制分发文件，`python setup.py bdist`
  
  对于包使用者，只需要 `python setup.py install`，便可以成功安装 python 包。
  
  ## 基础概念
  
  * module 模块：module 是 python 中代码重用的基本单元，一个 module 可以通过 `import` 语句导入到另一个 module；module 分为：`pure python module`（纯 python 模块）、`extension module`（扩展模块）和 `package`（包）
* pure python module：纯 python 模块是用纯 python 语言编写的模块，单一的 `.py` 文件作为一个模块使用，也就是一个 `.py` 可以称为模块了
* extension module：扩展模块是用底层的 C/C++、Objective-C或 Java 编写的模块，通常包含了一个动态链接库，比如 so、dll 或 Java，目前 `distutils` 只支持 C/C++ 和 Objective-C，不支持 Java 编写扩展模块；但是 python 提供了一个 `JCC` 这样一个用于生成访问 Java 类接口的 C++ 代码的胶水模块，应该也是可以使用 Java 编写模块的。
* package：包是一个带有 `__init__.py` 文件的文件夹，用于包含其他模块
* root package：root package 是包的最顶层，它不是实质性的包，因为它不包含 `__init__.py` 文件。大量的标准库位于 `root package`，因为它们不属于一个任何更大的模块集合了。实际上，每一个 `sys.path` 列举出来的文件夹都是 `root package`，你可以在这些文件夹中找到大量的模块。
* distribution：模块分发，一个归档在一起的 python 模块集合，它作为一个可下载安装的资源，方便用户使用，作为开发者便需要努力创建一个易于使用的 `distribution`。
* distribution root：源代码树的最顶层，也就是 `setup.py` 所在的位置。

## 关于源码分发文件和二进制分发文件

源码分发文件是将包分享给其他人更为推荐的一种形式，因为源码分发文件比二进制分发文件更适合跨平台，这样使用者可以在自己的机器上通过编译得到自己的机器相关的包代码并且进行安装。

# 示例和分发选择

* 如果你只是发布几个脚本文件而已，特别是它们逻辑上不属于同一个包，你可以使用 `py_modules` 选项一个一个地指定；
* 如果你需要发布的模块文件太多，使用 `py_modules` 一个一个指定比较麻烦，特别是模块位于多个包中，那么你可以使用 `packages` 指定整个包，另外只需要另外指定 `package_dir`，位于 distribution root 下的模块文件也可以被处理；
* setuptools 帮助文档声明，`package_dir` 和 `py_modules` 也可以支持分发任何没有包含 `__init__.py` 文件夹下的模块，经测试安装过程没有报错，但是没有包含 `__init__.py` 的文件夹下的模块是没有被正确安装的！因此，如果 python 模块分布在不同的文件夹，最好是在该文件夹下创建一个 `__init__.py` 文件，以表示它是一个包。

## pure python module

举个简单的例子，你需要发布两个模块 foo 以及 bar.bar，以供别人使用(import foo 和 import bar.bar)。
其目录树如下：

```
pure_module
├── bar
│   └── bar.py
│   └── __init__.py
├── foo.py
└── setup.py
```

如上图所示，pure_module 目录下包含了一个 foo 模块以及一个 bar 包，同时在 bar 包下还包含了一个 bar 模块。
一个仅使用 `py_modules` 的 setup 脚本可以这样写：

```
from setuptools import setup

NAME = 'foo'
VERSION = '1.0'
PY_MODULES = ['foo', 'bar.bar']

setup(name = NAME
        , version = VERSION
        , py_modules = PY_MODULES)
```

py_modules 指定了 foo 模块以及 bar.bar 模块。
通过 `python setup.py install --user --prefix=` 进行安装后，便可以直接通过 `import foo 和 import bar.bar` 直接使用了。

* 注意：经测试，如果 `.py` 文件位于其他文件夹，该文件夹需要创建一个允许为空的 `__init__.py` 文件，表示为一个 package，否则安装后不能正常使用其他文件夹的模块。

## package

上一节的例子中，bar.bar 属于 bar 包，foo 位于 distribution root，安装后属于 root package，在 Setuptools 中 "" 可以用于表示 root package。所以下面展示两种 setup 脚本的写法：

```
pure_module
├── bar
│   └── bar.py
│   └── __init__.py
├── foo.py
└── setup.py
```

仅使用 `packages` 的 setup.py 文件如下：

```
from setuptools import setup

NAME = 'foo'
VERSION = '1.0'
PACKAGES = ['', 'bar']
setup(name = NAME
        , version = VERSION
        , packages = PACKAGES
        )
```

如上，packages 包含了 package 的列表 root package 以及 bar，这样便能轻松覆盖到 distribution root 下的 foo.py 和 bar 文件夹下的 bar.py 了，在存在大量模块的情况下，省去像 `py_modules` 一样穷举模块的麻烦。在 python 中，默认的情况下，包的名字和目录的名字是一致的，比如 bar 包对应了 bar 目录，且包的路径表示是相对于 distribution root 的（也就是 setup.py 所在目录）。比如 `packages = ['foo']` ，Setuptools 会在 setup.py 所在目录下寻找 `foo/__init__.py`，并将 foo/ 下的所有模块包含进去。

另外一个关键字是 `package_dir`，它的作用是将 package 映射到其他目录，这样的一个好处是方便将 package 移到其他目录而不用修改 `packages` 的参数值。举个例子，假设我们现在需要把 bar 移到 foobar 目录下，按照原来的脚本，Setuptools 是无法成功找到 bar 包的。

```
package_dir
├── foobar
│   ├── bar.py
│   └── __init__.py
├── foo.py
└── setup.py
```

通过 `package_dir = = {'bar':'foobar'}`，将原来的 bar package 映射到 foobar 下。完整的脚本如下：

```
from setuptools import setup

NAME = 'foo'
VERSION = '1.0'
PACKAGE_DIR = {'bar':'foobar'}
PACKAGES = ['', 'bar']

setup(name = NAME
        , version = VERSION
        , package_dir = PACKAGE_DIR
        , packages = PACKAGES
        )
```

package_dir 是一个字典，它的 key 是 package 名（"" 表示 root package），value 是相对于 distribution root 的目录名。在上面的例子中， `package_dir = = {'bar':'foobar'}` 改变了 `packages` 中 package 对应的目录位置，这样当 Setuptools 在找 bar package 时，会在 foobar 目录下找相应的 `__init__.py` 文件。

* 注意，package_dir 会影响 packages 下列出的所有 package，比如，`packages =['bar', 'bar.lib']`，package_dir 不仅会影响所有和 bar 有关的 package，`bar.lib` 也会相应被映射到 `foorbar.lib`。

## extension module

扩展模块需要使用 `ext_modules` 参数。上面所说的 `package_dir` 和 `packages` 都是针对纯 python 模块，而 `ext_modules` 针对的是使用 C/C++ 底层语言所写的模块。下面举个最简单的例子，扩展模块仅包含一个 foo.cpp 文件，其中定义了可供 python 调用的 myPrint 函数。

```
#include <iostream>
#include <string>

using namespace std;

void myPrint(string text)
{
    cout <<  text << endl;
}
```

```
.
├── setup.py
└── src
    ├── foo.cpp
    ├── foo.h
    └── PythonWrapAPI.cpp
```

现在，我们想要发布扩展模块供别人使用我们的 myPrint 方法。想要 python 中成功导入你的包，需要利用额外的代码封装将被调用的方法。这里的 PythonWrapAPI.cpp 的作用就是使用 Python 提供的库封装你所写的接口，它是处在 python 和 C++ 间的胶水库，当 python 调用你的 C++ 方法时，由于语言类型的差别，需要做转换。

PythonWrapAPI.cpp 如下：

```
#include "foo.h"
#include <string>
#include <python2.6/Python.h>

using namespace std;

/*
Notice：Python Interface Wrap
*/

static PyObject *_myPrint(PyObject *self, PyObject *args)
{
    char *text;

    // 解析 Python 传过来的参数
    if (!PyArg_ParseTuple(args, "s", &text))
        return NULL;

    myPrint(text);
    return Py_None;
}

static PyMethodDef ExtestMethods[] =
{
    { "myPrint", _myPrint, METH_VARARGS },
    { NULL, NULL },
};

PyMODINIT_FUNC initmyprint(void) {
    (void)Py_InitModule("myprint", ExtestMethods);
}
```

* wrapper 函数 _myPrint。它负责将 Python 的参数转化为C/C++的参数（PyArg_ParseTuple），然后调用实际的 myPrint，并处理 myPrint 的返回值，最终返回给Python环境。需要注意的是，C/C++ 中无返回值时，不能直接返回 NULL，而是需要返回 Py_None。
* 导出表 ExtestMethods。它负责告诉Python这个模块里有哪些函数可以被 Python 调用。导出表的名字可以随便起，每一项有4个参数：第一个参数是提供给 Python 环境的函数名称，第二个参数是_myPrint，即 wrapper 函数。第三个参数的含义是参数变长，第四个参数是一个说明性的字符串。导出表总是以{NULL, NULL, 0, NULL}结束。说明，第 3 和 4 个参数可以省略。
* 导出函数 initmyprint。这个的名字不是任取的，是你的 module 名称添加前缀init。导出函数中将模块名称与导出表进行连接。

扩展模块和纯 python 模块有点不太一样，我们导入的 package 名字与 setup() 的 `packages` 或者 `package_dir` 参数是一致的，但是扩展模块的名字是由 `Extension` 实例的 `name` 参数决定的，且需要和导出函数对应的initxxx 名字以及 `Py_InitModule` 方法对应的第一个参数相同。

最后，我们需要编写 setup 脚本编译我们的 cpp 文件为 so 动态链接库，并进行相应的封装。运行 `python setup.py install`，setuptools 会帮我们自动编译。

```
from setuptools import setup, Extension, find_packages

# package name, import NAME
NAME = "foo"
VERSION = '1.0.0'
# an Extension instance list
EXT_MODULES = [ 
                Extension(
                    name = 'myprint' 
                    , sources=['src/foo.cpp','src/PythonWrapAPI.cpp']
                    , include_dirs = ['src']
                    )   
                ]
setup(name = NAME
    , version = VERSION
    , ext_modules = EXT_MODULES
    , )
```

`ext_modules` 是一个 `Extension` 实例列表，Extension 的参数 sources 用于指定所有源文件位置，include_dirs 指定头文件位置，同时还可以使用 library_dirs 和 libraries 指定外部链接库，以及 extra_compile_args 指定额外的编译参数。

# package 元信息参数

在编写一个 package 的时候，尽量提供更多的元信息，这样使用者更加能够了解到 package 的相关信息，并且有些信息会被 PyPi 使用。

| 元信息 | 类型 | 描述 | 说明 |
| -------- | ------ | ------ | ------ |
| name | short string | package 名字, 这里用于 pypi 的显示, 而不是用于 import, import 的包名与 packages 和 package_dir 参数一致 | 1 |
| version | short string | package 的发布版本, 建议:major.minor[.patch[.sub]] | 1 |
| author | short string | package 作者名字 | 3 |
| author_email | short string | package 作者邮箱 | 3 |
| maintainer | short string | package 维护者名字 | 3 |
| maintainer_email | short string | package 维护者邮箱 | 3 |
| url | short string | package 项目地址 | 1 |
| description | short string | 简介 |   |
| long_description | long string | 显示于 pypi 的介绍 |   |
| download_url | short string | package 下载地址 | 2 |
| classifiers | strings list | 分类符, 这样便于 pypi 索引, 由 pypi 固定提供, https://pypi.python.org/pypi?%3Aaction=list_classifiers | 2 |
| platforms | strings list | 支持的平台列表 |   |
| license | short string | 授权协议 |   |

1.必填
2.如果为了兼容 2.2.3 或 2.3 版本，不建议使用此字段
3.如果提供了 maintainer，那么 distutils 会将其加入 PKG-INFO

# package 内容参数

## py_modules 列举每个模块

py_modules 是一个字符串列表，用于指定所有的模块，即 py 文件模块。 如果你只是发布几个脚本文件而已，特别是它们逻辑上不属于同一个 package。

比如，`py_modules = ['mod1', 'pkg.mod2']`。这指定了两个模块，一个位于 `root package`，而另一个位于 `pkg package`。如果没有使用 `package_dir` 重新映射 package 和目录的关系的话，那么这两个模块分别对应了 `mod1.py` 以及 `pkg/mod2.py` 文件，并且在 pkg 文件夹下还存在 `__init__.py` 文件。

## package 列举每个包

如果你需要发布的模块文件太多，使用 `py_modules` 一个一个指定比较麻烦，特别是模块位于多个包中，那么你可以使用 `packages` 指定整个包。

packages 是一个包名列表，packages 参数告诉 Setuptools 处理列举出的 package 下所有纯 python 模块。在文件系统中，默认地，package 的名字与目录是一一对应的，也就是说，`packages = ['foo']`，Setuptools 会去查找 `foo/__init__.py` 文件。

## package_dir 重新映射 package 和目录的关系

当你想要重命名你的 package 所在的文件夹，或者想要移动整个 package 到其他目录下，一般情况下，一旦你的源代码布局改变，你需要重新修改 packages。但是 package_dir 可以重新映射 package 和目录的关系。比如你将 root package 下的模块和 package 移到 lib 目录下，那么你只需要在 package_dir 中将 root package 映射到 lib 下。比如 `package_dir = {'': 'lib'}`

再举个例子，比如一下目录结果，当我使用 `package_dir= {'bar':'foobar'}` 和 packages= ['bar']时，Setuptools 根据 `packages` 参数查找 bar package 时，会在 foobar 文件夹下找相应的 `__init__.py` 文件。

```
package_dir
├── foobar
│   ├── bar.py
│   └── __init__.py
└── setup.py
```

* 注意，package_dir 会影响 packages 下列出的所有 package，比如，`packages =['bar', 'bar.lib']`，package_dir 不仅会影响所有和 bar 有关的 package，`bar.lib` 也会相应被映射到 `foorbar.lib`。

## install_requires 和 dependency_links 安装依赖模块

`install_requires` 可以声明 package 安装时所需的依赖模块及其版本。安装 package 时，Setuptools 便能够从 PyPi 上自动下载其所依赖的模块，并且将依赖信息包含进 Python Eggs 中。

比如我们在自己的 package 中用到了一个 python 非标准库 pycurl 和 xmltodict，当我们的 package 在别的机器上使用时便会报错。为了解决这个问题，我们可以使用 `install_requires = ['pycurl', 'xmltodict']` 将 pycurl 和 xmltodict 加入 package 依赖。

`install_requires` 可以是 string 或 string list，指明所需要依赖的模块。当 `install_requires` 为 string 类型，并且依赖多于 1 个时，每个依赖的声明都要另起一行。

最新版本的 Setuptools 的`install_requires` 有另外两个作用：
1.在运行时，任何脚本都会检查其依赖模块的正确性，并且确保正确的依赖版本都加入到 sys.path 中（假如有多个版本的话）。
2.Python Egg distributions 将会包含依赖相关的元信息。

前面说到，Setuptools 便能够从 PyPi 上自动下载其所依赖的模块，但是在某些环境下无法正常访问 Pypi 下，我们也可以通过 `dependency_links` 参数 指定到自己的 python 源，这样便可以解决下载问题。
比如，`dependency_links = ['http://xxx/xmltodict', 'http://xxx/pycurl']`。
dependency_links 是一个字符串列表，包含了依赖的下载 URL。

Setuptools 对链接的支持比较强大！
下载的资源可以满足以下条件：

* 通过 python setup.py sdist 进行分发的压缩文件，默认情况下在 linux 为 .tar.gz，在 windows 为 zip
* 单一的 py 文件
* VCS 仓库（Subversion, Mercurial, Git）

URL 链接可以是：

* 可以直接下载的 URL
* 包含资源下载链接的网页 URL
* 仓库 URL

当包含资源下载链接的网页 URL 中存在多个版本时，Setuptools 会根据版本要求下载合适的版本。
一般，比较好的方式是网页 URL 方式。我们也可以使用 SourceForge 的 showfiles.php 链接来下载我们所依赖的模块。
如果依赖的模块是一个 py 文件时，你必须在 URL 添加 `"#egg=project-version"` 后缀，以指出模块的名字和版本，另外需要确保将模块名和版本中出现的 `-` 替换为 `_`。EasyInstall 将会识别这个后缀并且自动创建一个 setup.py 脚本，将我们的 py 文件包装为 egg 文件。如果为 VCS，将会 checkout 对应的版本，创建一个临时文件夹并执行 setup.py bdist_egg，安装所需的依赖。

在使用 VCS 的情况下，你也可以使用 `#egg=project-version` 指定要使用的版本。你可以通过在 `#egg=project-version` 前加入 `@REV` 来指定要 checkout 的版本。另外你也可以通过在 URL 前加上以下标识显式声明 URL 使用 的是 VCS：

* Subversion：`svn+URL`
* Git：`git+URL`
* Mercurial：`hg+URL`

因此使用 VCS 更复杂的一个示例为： `vcs+proto://host/path@revision#egg=project-version`

## ext_module Python 调用 C/C++

Python 的可扩展性特别强，不仅支持 python 语言的扩展模块，而且支持其他语言的扩展。
Python 调用 C++ 的详细文档可以查看 [https://docs.python.org/2/extending/building.html](https://docs.python.org/2/extending/building.html)
这里假设已经懂得怎么调用 C++ 方法了，接下来只需要使用 ext_module 参数，使 Setuptools 能够编译和安装扩展模块了。
`ext_module` 参数是一个 Extension 实例列表，Extension 类似于 gcc/g++ 的所需参数，包含了指定源文件、头文件、依赖的静态库或动态库、额外的编译参数、宏定义等功能。

### name 扩展模块名字

`name` 是一个字符串，用于指定扩展模块的名字。
`packages` 和 `package_dir` 用于支持 python 语言编写模块，其 import 语句使用的包名与 `packages` 和 `package_dir` 中所指定的名字是一致的。但是扩展模块的名字是由 `Extension` 实例的 `name` 参数决定的，且需要和导出函数对应的initxxx 名字以及 `Py_InitModule` 方法对应的第一个参数相同。定义好模块的名字 xxx 后，我们便可以使用 `import xxx` 使用我们自己的模块了。

### sources 和 include_dirs

`sources` 为用于指定要编译源文件的字符串列表，比如，`sources=['foo/foo.cpp', 'bar/bar.cpp']`，Setuptools 支持 C/C++ 以及 Objective-C。
`include_dirs` 为用于指定编译需要的头文件目录的字符串列表，比如，`include_dirs=['foo/include', 'bar/include']`。如果头文件位于 distribution root 目录，需要使用 `'.'` 表示头文件位于当前目录，不能为 `''`，否则将找不到头文件。
另外还支持 `extra_objects` 向链接程序传递 object 文件，比如 `.o` 文件。

### define_macros 和 undef_macros

gcc 支持在编译的时候定义新的宏变量和取消某个宏变量的定义，具体的选项 `[-Dmacro[=defn]...] [-Umacro]`。Extension 也支持这样的选项。
你可以使用 `define_macros` 和 `undef_macros` 定义新的宏变量和取消某个宏变量的定义。
`define_macros` 是一个 `(name, value)` 元组列表，其中的 name 为宏变量名字符串，value 为对应的值，可以为字符串、数字或为 None 类型（说明：官方文档没有声明 `value` 可以为数字，但是经过测试，只要是 python 支持的数字类型都可以用于 `value`，但是最好还是使用字符串的形式，这样脚本的兼容性会更好）.
比如，`define_macros=[('DEBUG', None), ('FOO', '1'), ('BAR', 2), ('FOOBAR', '"abc"')]`，gcc 对应的编译选项结果为 `-DDEBUG -DFOO=1 -DBAR=2 -DFOOBAR="abc"`。
`undef_macros` 比 `define_macros` 简单得多，它就是一个宏变量字符串列表，举个例子，我们想要取消以上定义的宏变量，对应的 undef_macros 值为 `undef_macros=['DEBUG', 'FOO', 'BAR', 'FOOBAR']`。

### libraries 和 library_dirs

Setuptools 对 C/C++ 库的引用方法和 gcc 一样，具体的规则可以参考 gcc。
libraries 为要添加的库的名字字符串列表，而 library_dirs 为要添加的库所在的目录，举个例子：

```
.
├── setup.py
└── curl
    ├── include
        ├── curl.h
        ├── test.h
    ├── lib
        ├── libcurl.a
        ├── libtest.a
```

其对应的参数为 `libraries=['curl', 'test']`、`library_dirs=['curl/lib']`、`include_dirs=[‘curl/include’]`

注意：在实际的使用过程中碰到过一个链接错误的坑，Setuptools 在编译的时候报错：

```
libcurl.a : relocation against .rodata can not be used when making a shared object:recompile with -fPIC
libcurl.a : could not read symbols:Bad value
```

前面提到，python 在创建扩展模块时会将源文件编译为动态链接库，动态链接库在加载的时候，内存位置是不固定的，所以我们链接的外部库代码也需要全部使用相对地址，这样代码便可以加载到内存的任意位置。因为有的库没有使用 `-fPIC` 选项进行编译，导致库最终在链接到 so 文件时报错。

解决方案是使用 `-fPIC` 重新编译 `libcurl.a` 库。

### extra_compile_args

在编译扩展模块时，Setuptools 会自动指定编译参数，比如下面一个模块的编译：

```
gcc -pthread -fno-strict-aliasing -O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector --param=ssp-buffer-size=4 -m64 -mtune=generic -D_GNU_SOURCE -fPIC -fwrapv -DNDEBUG -O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector --param=ssp-buffer-size=4 -m64 -mtune=generic -D_GNU_SOURCE -fPIC -fwrapv -fPIC -DDEBUG -DFOO=1 -DBAR=2 -DFOOBAR="abc" -Isrc -I/usr/include/python2.6 -c src/foo.cpp -o build/temp.linux-x86_64-2.6/src/foo.o
gcc -pthread -fno-strict-aliasing -O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector --param=ssp-buffer-size=4 -m64 -mtune=generic -D_GNU_SOURCE -fPIC -fwrapv -DNDEBUG -O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector --param=ssp-buffer-size=4 -m64 -mtune=generic -D_GNU_SOURCE -fPIC -fwrapv -fPIC -DDEBUG -DFOO=1 -DBAR=2 -DFOOBAR="abc" -Isrc -I/usr/include/python2.6 -c src/PythonWrapAPI.cpp -o build/temp.linux-x86_64-2.6/src/PythonWrapAPI.o
g++ -pthread -shared build/temp.linux-x86_64-2.6/src/foo.o build/temp.linux-x86_64-2.6/src/PythonWrapAPI.o -L/usr/lib64 -lpython2.6 -o build/lib.linux-x86_64-2.6/myprint.so
```

这么多的编译参数绝大部分是 Setuptools 自动指定的，但是如果我们还想要在每个文件的编译再加上额外的编译选项，可以使用 `extra_compile_args` 和 `extra_link_args`，其中 `extra_link_args` 选项用于链接。
`extra_compile_args` 是一个编译选项字符串列表，每个编译选项都要单独作为一个字符串，不能并在一起，否则会报错。

# 创建源码分发

建议使用源码分发的形式发布你的包，而不是二进制发布形式，这样包将更方便跨平台。

## sdist 命令

创建源码分发的命令为：`python setup.py sdist`，命令执行后会创建 dist 目录，收集一些必要的文件以及 setup 脚本，生成一个压缩文件，用户安装时，只需要解压，然后执行 `python setup.py install` 命令，将进行编译和安装，将相应的文件存放到 python 第三方库目录下。

sdist 比较常用的一个选项是 `--format`，选择压缩的格式。比如，使用 zip 进行压缩，`python setup.py sdist --format=zip`。

| 格式  | 后缀     |
| ------- | ---------- |
| zip   | .zip     |
| gztar | .tar.gz  |
| bztar | .tar.bz2 |
| ztar  | .tar.Z   |
| tar   | .tar     |

说明：`python setup.py sdist --format=zip, tar`，Setuptools 会分别使用 zip 和 tar 进行压缩，将同时产生两个压缩文件。

setuptools 和 distutils 对于文件查找的算法是一样的：

* 所有在 `py_modules` 和 `packages` 指定的对应模块文件
* 所有在 `ext_modules` 和 `libraries` 选项指定的源文件和库
* `scripts` 选项指定的脚本文件
* 所有类似测试脚本的文件，比如：test/test*.py (低版本的包管理工具可能不支持)
* README.txt（或 README），setup.py 以及 setup.cfg（README 文件目前无法支持更多的后缀格式）
* `package_data` 选项指定的文件
* `data_files` 选项指定的文件

另外在使用过程中，遇到 Setuptools 的一个巨坑，确实可以包含文件，但是它并不总能包含文件，这是有前提的。

bdist是发布二进制文件，sdist是发布源文件。而在旧版本的 python 中(2.7 以前)， package_data只有在使用 bdist 时候才有用，也就是如果使用 sdist，是无法正确包含文件的。而在新版本中，会自动把package_data 里面的内容添加到 MANIFEST 文件中。

## MANIFEST.in 模版文件

当我们使用 sdist 进行分发包时，如果需要包含额外的文件，可以使用 `MANIFEST.in` 文件，在该文件中列举出需要包含的文件。当我们执行 sdist 时，将会对 `MANIFEST.in` 文件进行检查，读取解释并生成 MANIFEST 文件，该文件列举了所有需要包含进包的文件。位于 distribution root 下的 MANIFEST.in 文件每行对应一条包含一系列文件的命令。
