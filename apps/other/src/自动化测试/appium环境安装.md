# Appium 环境安装

## 环境安装

- 安装 Appium-Server

https://github.com/appium/appium-desktop/releases/download/v1.22.3-4/Appium-Server-GUI-windows-1.22.3-4.exe

- 安装 Appium-Inspector

https://github.com/appium/appium-inspector/releases/download/v2023.8.4/Appium-Inspector-windows-2023.8.4.exe

- 安装木木模拟器

https://mumu.163.com/

https://adl.netease.com/d/g/mumu/c/gw_mumu12?type=pc&direct=1


## 配置 APP 信息

输入必要参数，点击连接，以微信为例：


```json
{
  "appium:deviceName": "127.0.0.1:7555",
  "appium:appPackage": "com.douguo.recipe",
  "appium:appActivity": "com.douguo.recipe.MainActivity",
  "platformName": "Android"
}
```

添加以下四项值，完后点击“Start Session”。

- platformName---设备平台，Android或IOS
- deviceName----设备名。按上边adb devices -l 查出的设备名modle填写即可
- appPackage----要启动的app的包名，是App开发者提供的名称。微信是"com.tencent.mm"
- appActivity----要启动的界面，是App提供的各种不同的功能。每个程序都有个MainActivity，就是打开程序时显示在屏幕的活动。微信启动界面是".ui.LauncherUI"


appPackage和appActivity获取：

首先在android手机或模拟器上打开App，输入下面的abd命令：

```sh
adb shell dumpsys window windows | findstr mFocusedApp

# 正在运行应用包名
adb shell dumpsys window | findstr mCurrentFocus
```

> 注意：要先在模拟器里打开APP，否则看不到相关信息


## python 代码 登录微信的操作


```sh
pip install Appium-Python-Client Selenium
```

```py
from appium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# appium服务监听地址
server='http://localhost:4723/wd/hub'
# app启动参数
desired_caps={
  "platformName": "Android",
  "deviceName": "SM_N976N",
  "appPackage": "com.tencent.mm",
  "appActivity": ".ui.LauncherUI",
  'connectTimeout': 10
}

# 驱动
driver = webdriver.Remote(server,desired_caps)
wait = WebDriverWait(driver,10)
# 点击启动页
qidongye = wait.until(EC.presence_of_element_located((By.ID,"android:id/content")))
qidongye.click()
# 获取登录按钮
login_btn = wait.until(EC.presence_of_element_located((By.ID,"com.tencent.mm:id/j_9")))
# 点击登录按钮
login_btn.click()
# # 获取手机号文本框
phone_text = wait.until(EC.presence_of_element_located((By.ID,"com.tencent.mm:id/cd7")))
# # 填写手机号文本框
phone_text.send_keys("1234")
```


## 参考

- [python appium+夜神模拟器 配置 笔记整理](https://blog.csdn.net/m0_58780961/article/details/121377230?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-121377230-blog-129801887.235^v38^pc_relevant_anti_t3_base&spm=1001.2101.3001.4242.1&utm_relevant_index=1)
- [python+appium+夜神模拟器搭建app自动化环境](https://blog.csdn.net/weixin_58694594/article/details/129801887)
- [appium连接夜神模拟器操作app](https://blog.51cto.com/u_15354476/5342062)
- [appium自动化测试](https://www.jianshu.com/p/a80e1d35be10)
- [自动化测试之路 —— Appium使用教程](https://blog.csdn.net/weixin_38306507/article/details/126464298)
- [Appium自动化之adb常用命令及连接mumu模拟器](https://www.ngui.cc/el/3058312.html?action=onClick)
- [python+Appium实现手机移动端自动化 - 模拟器 或 真机【有线】](https://blog.csdn.net/qq_21689457/article/details/129643574)


## 问题

解决：python+appium报错ValueError: Timeout value connect was ＜...＞, but it must be an int, float or None.

最直接的解决方案就是selenium版本降级：
```
pip install --force-reinstall -v "selenium==4.8.0"
```

> 参考：https://blog.csdn.net/qq_48302722/article/details/130861992


