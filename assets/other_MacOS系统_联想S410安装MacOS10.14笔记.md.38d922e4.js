import{_ as a,o as e,c as l,Q as o}from"./chunks/framework.aaef0e9b.js";const b=JSON.parse('{"title":"联想 IdeaPad S410 安装 macOS 10.14","description":"","frontmatter":{},"headers":[],"relativePath":"other/MacOS系统/联想S410安装MacOS10.14笔记.md","lastUpdated":1680584985000}'),s={name:"other/MacOS系统/联想S410安装MacOS10.14笔记.md"},t=o(`<h1 id="联想-ideapad-s410-安装-macos-10-14" tabindex="-1">联想 IdeaPad S410 安装 macOS 10.14 <a class="header-anchor" href="#联想-ideapad-s410-安装-macos-10-14" aria-label="Permalink to &quot;联想 IdeaPad S410 安装 macOS 10.14&quot;">​</a></h1><h2 id="事先准备" tabindex="-1">事先准备 <a class="header-anchor" href="#事先准备" aria-label="Permalink to &quot;事先准备&quot;">​</a></h2><ul><li>U盘 10G 以上</li><li>软件：TransMac ，自行百度下载</li><li>软件：macOS 10.14 镜像 <ul><li>百度网盘：链接：<a href="https://pan.baidu.com/s/1hjpG_OZcZUDu3AxHSuUTRw?pwd=0m6j" target="_blank" rel="noreferrer">https://pan.baidu.com/s/1hjpG_OZcZUDu3AxHSuUTRw?pwd=0m6j</a> 提取码：0m6j</li><li>黑果小兵原版镜像下载：<a href="https://blog.daliansky.net/macOS-Mojave-10.14-18A389-Release-with-Clover-4670-original-mirror.html" target="_blank" rel="noreferrer">https://blog.daliansky.net/macOS-Mojave-10.14-18A389-Release-with-Clover-4670-original-mirror.html</a></li><li>更多镜像看 <a href="https://blog.daliansky.net/categories/%E4%B8%8B%E8%BD%BD/" target="_blank" rel="noreferrer">黑果小兵</a></li></ul></li></ul><h2 id="transmac-制作-u盘启动盘-可自行百度-很多教程" tabindex="-1">TransMac 制作 U盘启动盘（可自行百度，很多教程） <a class="header-anchor" href="#transmac-制作-u盘启动盘-可自行百度-很多教程" aria-label="Permalink to &quot;TransMac 制作 U盘启动盘（可自行百度，很多教程）&quot;">​</a></h2><ul><li>Windows 下以管理员身份运行软件 TransMac （试用版的也可以），或者自行百度破解版</li><li>TransMac 软件内，左侧找到你的 U盘（要小心谨慎，注意别找错了U盘，会清空全部数据的）</li><li>找到左侧U盘并鼠标右键，选中 <code>Format Disk For Mac</code> ，会将 U盘 根式化 匹配 Mac 系统</li><li>找到左侧U盘并鼠标右键，选中 <code>Restore with Disk Image</code> ，然后找到准备好的 Mac系统镜像，写入 U盘</li><li>成功写入，说明 U盘启动盘制作好了。</li></ul><h2 id="联想笔记本-ideapad-s410-安装-macos-10-14" tabindex="-1">联想笔记本 IdeaPad S410 安装 macOS 10.14 <a class="header-anchor" href="#联想笔记本-ideapad-s410-安装-macos-10-14" aria-label="Permalink to &quot;联想笔记本 IdeaPad S410 安装 macOS 10.14&quot;">​</a></h2><p>参考：</p><p><a href="https://blog.daliansky.net/MacOS-installation-tutorial-XiaoMi-Pro-installation-process-records.html" target="_blank" rel="noreferrer">教程</a></p><p><a href="https://blog.daliansky.net/Common-problems-and-solutions-in-macOS-Mojave-10.14-installation.html" target="_blank" rel="noreferrer">排错</a></p><h3 id="bios-设置" tabindex="-1">BIOS 设置 <a class="header-anchor" href="#bios-设置" aria-label="Permalink to &quot;BIOS 设置&quot;">​</a></h3><p>开机按住 F2 进入 BIOS 设置界面，在 boot 选项卡中，将 EFI 中 U盘 调整到第一个位置，按住 <code>Fn + F10</code> 保存设置并重启电脑， 重启后 会进入 U盘的引导界面了</p><h3 id="u盘引导界面-第一阶段-u盘启动" tabindex="-1">U盘引导界面 (第一阶段) - U盘启动 <a class="header-anchor" href="#u盘引导界面-第一阶段-u盘启动" aria-label="Permalink to &quot;U盘引导界面 (第一阶段) - U盘启动&quot;">​</a></h3><ul><li>选择 USB 启动，会跑代码，然后进入 macOS 安装的第一个阶段 <ul><li>选择 安装的 硬盘 （假设硬盘名称为： <code>MacOS 10.14</code> ）</li><li>可能会报错：镜像副本已损坏，解决办法：终端命令行执行 <code>date 0201010116</code> ，详见：<a href="https://blog.daliansky.net/Common-problems-and-solutions-in-macOS-Mojave-10.14-installation.html" target="_blank" rel="noreferrer">排错</a></li><li>然后 执行 macOS 系统安装，结束后会重启</li></ul></li></ul><h3 id="u盘引导界面-第二阶段-硬盘启动" tabindex="-1">U盘引导界面 (第二阶段) - 硬盘启动 <a class="header-anchor" href="#u盘引导界面-第二阶段-硬盘启动" aria-label="Permalink to &quot;U盘引导界面 (第二阶段) - 硬盘启动&quot;">​</a></h3><ul><li>选中 <code>Boot macOS Install from Mac OS 10.14</code> ，不要直接回车键启动</li><li>按 空格键 ，选择第一项 <code>Boot macOS with selected options</code> ，然后回车启动，跑完代码 会进入 macos 的设置界面了</li><li>30分钟左右跑完代码，然后就一路往下设置，直到最后安装应该就成功了</li></ul><blockquote><p>注意：这个过程中，网络我是没有设置成功的，百度了网上资料，很多人说是 黑苹果无法识别 网卡设备导致，<br> 我也没有过多折腾，因为后面我直接用数据线连 苹果手机，电脑就可以上网了。</p></blockquote><p>到此，安装算是成功了，但是 每次开机，都还需要u盘作为引导才能正常进入mac系统，所以，继续往下看。</p><h2 id="实现-macos-脱离-u盘-实现正常开机" tabindex="-1">实现 macOS 脱离 U盘 实现正常开机 <a class="header-anchor" href="#实现-macos-脱离-u盘-实现正常开机" aria-label="Permalink to &quot;实现 macOS 脱离 U盘 实现正常开机&quot;">​</a></h2><blockquote><p>注：这时，虽然 已经安装成功，但开机重启，还是需要 U盘，否则无法启动！</p></blockquote><p>解决办法： <a href="https://blog.daliansky.net/Common-problems-and-solutions-in-macOS-Mojave-10.14-installation.html" target="_blank" rel="noreferrer">参考</a></p><h3 id="教你将u盘上的efi复制到磁盘的efi分区-脱离usb运行-macos篇" tabindex="-1">教你将U盘上的EFI复制到磁盘的EFI分区,脱离USB运行[macOS篇] <a class="header-anchor" href="#教你将u盘上的efi复制到磁盘的efi分区-脱离usb运行-macos篇" aria-label="Permalink to &quot;教你将U盘上的EFI复制到磁盘的EFI分区,脱离USB运行[macOS篇]&quot;">​</a></h3><blockquote><p>新的系统安装成功后，EFI还位于U盘里，总不能一直挂着U盘使用系统吧。这个时候如果你想将U盘里的EFI复制到磁盘的EFI分区里，却苦于找不到看不见EFI分区，这个时候是该让 <code>diskutil</code> 登场了。</p></blockquote><p><code>diskutil</code> 命令的基本用法：</p><p>查看磁盘分区表:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">diskutil list</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>会看到 磁盘和U盘的信息</p><p>挂载磁盘EFI分区(如果你的不是 disk0s1 ，请自行替换为 EFI 对应的 IDENTIFIER)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo diskutil mount disk0s1</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>挂载U盘EFI分区(如果你的不是 disk1s1 ，请自行替换为 EFI 对应的 IDENTIFIER)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">sudo diskutil mount disk1s1</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>打开 Finder，注意后面有个.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">open .</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><p>左侧会显示挂载了两个EFI分区，将U盘EFI目录全部复制到磁盘的EFI分区即可。</p><p>怎么区分 U盘的EFI 和 磁盘的EFI：<br> 去U盘下找 EFi 文件，看看里边是什么，然后 对比这两个 EFI 。<br> 一般，u盘下的 EFI 有两个文件夹 <code>BOOT</code> 和 <code>CLOVER</code> ，磁盘下的 EFI 只有 一个文件夹 <code>APPLE</code> 。</p><p>复制，合并，然后就可以 拔出 U盘，让电脑自己启动，可以正常开机进入系统了。</p><h2 id="优化-未完待续" tabindex="-1">优化（未完待续） <a class="header-anchor" href="#优化-未完待续" aria-label="Permalink to &quot;优化（未完待续）&quot;">​</a></h2><blockquote><p>这个时候，重新开机启动，还是会进入磁盘引导页面，然后跑代码，之后才能进入 Mac系统！<br> 我现在还没有研究实操怎样优化，因为现在只要跑完开机代码，技能进入系统，我已经可以做开发了，等以后有空了再继续研究！</p></blockquote>`,37),i=[t];function n(r,c,d,p,h,u){return e(),l("div",null,i)}const k=a(s,[["render",n]]);export{b as __pageData,k as default};
