# BIOS：Basic Input Output System 基本输入输出系统

## Information：信息台

- Product Name： 产品名称
- BIOS Version：BIOS 版本
- EC Version：嵌入式控制器版本（Embedded Controller Version），EC是控制内置键盘鼠标的一个单片机
- MTM：Machine Type Model，机子型号
- Lenovo SN：序列号
- Board Number：
- UUID Number：UUID识别码
- CPU：CPU型号
- System Memory：内存大小
- Hard Disk：硬盘信息
- Preinstalled OS license：预装操作系统授权信息
- Windows license：使用主板上集成的授权信息（也就是使用主板上的系统激活密钥）
- OA3 KEY ID：OA3密钥，Win8的新激活方式

## configuration 配置

- System Time：系统时间
- System Date：系统日期
- System Time Date：设置系统时间和日期
- USB Legacy：控制USB设备（USB鼠标键盘等）在传统系统（DOS等）下能否使用，Enable 表示可以使用，Disable表示不能使用
- Wireless：是否开启无线网卡
- SATA模式：硬盘工作模式，如果要用ssd的话要切换成AHCI模式，至于IDE与AHCI的区别就自行百度咯
- Grapnic Device Setting：选择用双显卡还是单显卡
- Graphic Device：显卡工作模式
  
  - Switchable Graphics：
  - UMA Graphic：
- Power Beep：电源提示音开闭
- Intel Virtual Technology：开启虚拟化技术如虚拟机什么的
- BIOS Back Flash：是否允许BIOS更新版本，一般不会去更新BIOS，设置不允许即可
- HotKey Mode：控制你的F1-F12是传统键还是功能键，设置Enable的话就表示是功能键

## security： 安全措施

用于设置一些密码，分别是超级用户密码，普通用户密码，硬盘保护密码，一般不用设置，特别是硬盘保护密码不要随便设置。

- Set Administrator Password：设置超级管理员密码
- Set Hard Disk Passwords：设置硬盘密码
- 
- Secure Boot：安全启动
- Secure Boot Status：安全启动状态
- Platform Mode：
- Secure Boot Mode：安全启动模式
- Reset to Setup Mode：
- Restore Factory Keys：

## boot： 启动

- Boot Mode：选择是否支持Legacy或UEFI启动模式，前者就是老的BIOS启动模式，后者是一个新的启动模式，具体是什么就自行百度咯
- Boot Priority：哪个启动模式优先
- USB Boot：是否开启USB启动
- PXE Boot to  LAN:无盘系统，没有任何硬盘光驱什么的，靠网卡启动，读取服务器数据进入操作系统
- EFI与Legacy列表：这些显示你所有的启动项，可以调整上下位置，越靠上的越优先启动

## exit 退出

用于离开BIOS并重启，这里可以选择是否应用这些改变。
不同BIOS会略有不同，但大致一致，也都是一些简单单词，基本就一通百通了。

