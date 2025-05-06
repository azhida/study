# adb

## ADB是什么？

- adb（Android Debug Bridge）是android sdk的一个工具，即调试桥，方便调试设备或调试开发的Android APP;
- adb是用来连接安卓手机和PC端的桥梁，要有adb作为二者之间的维系，才能让用户在电脑上对手机进行全面的操作;（用这个工具可以直接操作管理android模拟器或者真实的android设备）
- Android的初衷是用adb这样的一个工具来协助开发人员在开发android应用的过程中更快更好的调试apk，因此adb具有安装卸载apk、拷贝推送文件、查看设备硬件信息、查看应用程序占用资源、在设备执行shell命令等功能。
- 你可以在Android SDK/platform-tools中找到 adb 工具或下载ADB。

## adb三大组件

### 客户端

该组件发送命令，客户端在开发计算机上运行，可以通过发出 adb 命令从命令行终端调用客户端。

### 后台程序

该组件在设备上运行命令，后台程序在每个模拟器或设备实例上作为后台进程运行。

### 服务器

该组件管理客户端和后台程序之间的通信，服务器在开发计算机上作为后台进程运行。

## ADB环境搭建

### 搭建java环境
### 安装Android sdk

https://developer.android.com

https://developer.android.google.cn

### 设置环境变量
### 验证环境 adb version


## 常用命令

### 安装apk

```
adb install D:\ruanjian\apps\dgms.apk
```

### 列出包名

- 进入手机命令行界面
```cmd
adb shell
# adb -s 指定设备 进行连接
adb -s 127.0.0.1:62001 shell
```

- 列出所有包名称
```sh
cd /data/data
ls
# 或者
ll
# 或者
ls | grep PackageName
```

- 列出所有包名

```sh
# 所有应用的包名列表
adb shell pm list packages
# 第三方应用包名列表
adb shell pm list packages -3
# 系统应用包名列表
adb shell pm list packages -s 
```

- 正在运行应用包名
```sh
adb shell dumpsys window | findstr mCurrentFocus
```

- 卸载 app
```
adb shell pm uninstall --user 0 <packages>
adb shell pm uninstall --user 0 com.douguo.recipe
```

- 运行 app
```
adb shell monkey -p 包名 -v -v -v 1 | findstr "cmp="
# 先找到app的启动页
adb shell monkey -p com.douguo.recipe -v -v -v 1 | findstr "cmp="
# com.douguo.recipe/.MainActivity

#键入activity启动应用（格式为包名 + activity）
adb shell am start com.douguo.recipe/.MainActivity
```

- 参考

[使用adb命令启动app](https://blog.csdn.net/m0_46151559/article/details/126461868)


## 参考

[adb概介](https://blog.csdn.net/weixin_54280625/article/details/112862918?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168618396716800225551728%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168618396716800225551728&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-2-112862918-null-null.142^v88^koosearch_v1,239^v2^insert_chatgpt&utm_term=adb&spm=1018.2226.3001.4187)

[ADB 操作命令详解及用法大全](https://blog.csdn.net/lb245557472/article/details/84068519?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168618396716800225551728%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168618396716800225551728&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-84068519-null-null.142^v88^koosearch_v1,239^v2^insert_chatgpt&utm_term=adb&spm=1018.2226.3001.4187)

[adb连接夜神模拟器和连接夜神多开的方法](https://blog.csdn.net/qq_40558166/article/details/124497404)

[自动化 | 聊聊 ADB](http://www.360doc.com/content/21/1028/11/77509131_1001637303.shtml)

[Android adb 常用命令](https://blog.csdn.net/qq_42069296/article/details/128660317?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-128660317-blog-122584545.235^v38^pc_relevant_anti_t3_base&spm=1001.2101.3001.4242.2&utm_relevant_index=4)