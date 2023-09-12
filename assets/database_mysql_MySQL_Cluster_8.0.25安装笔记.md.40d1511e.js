import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.aaef0e9b.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"database/mysql/MySQL_Cluster_8.0.25安装笔记.md","lastUpdated":1680584985000}'),e={name:"database/mysql/MySQL_Cluster_8.0.25安装笔记.md"},p=l(`<h4 id="下载-软件" tabindex="-1">下载 软件 <a class="header-anchor" href="#下载-软件" aria-label="Permalink to &quot;下载 软件&quot;">​</a></h4><ul><li>MySQL下载地址 <a href="https://dev.mysql.com/downloads/cluster/" target="_blank" rel="noreferrer">https://dev.mysql.com/downloads/cluster/</a></li><li>Microsoft Visual C++ Redistributable for Visual Studio 2019 <a href="https://visualstudio.microsoft.com/zh-hans/downloads/#microsoft-visual-c-redistributable-for-visual-studio-2019" target="_blank" rel="noreferrer">下载地址</a></li><li>步骤</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 选 Windows (x86, 64-bit), MSI Installer ， 点 Download</span></span>
<span class="line"><span style="color:#babed8;"># 选择 No thanks, just start my download.</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h4><ul><li>安装刚下载的程序 mysql-cluster-8.0.25-winx64.msi ，可以自定义安装目录</li><li>在根目录下添加 my.ini 配置文件</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">[mysqld]</span></span>
<span class="line"><span style="color:#babed8;"># 设置3306端口</span></span>
<span class="line"><span style="color:#babed8;">port=3306</span></span>
<span class="line"><span style="color:#babed8;"># 设置mysql的安装目录</span></span>
<span class="line"><span style="color:#babed8;">basedir=D:\\\\MySQL8</span></span>
<span class="line"><span style="color:#babed8;"># 设置mysql数据库的数据的存放目录</span></span>
<span class="line"><span style="color:#babed8;">#datadir=D:\\\\MySQL8\\\\Data</span></span>
<span class="line"><span style="color:#babed8;"># 允许最大连接数</span></span>
<span class="line"><span style="color:#babed8;">max_connections=200</span></span>
<span class="line"><span style="color:#babed8;"># 允许连接失败的次数。</span></span>
<span class="line"><span style="color:#babed8;">max_connect_errors=10</span></span>
<span class="line"><span style="color:#babed8;"># 服务端使用的字符集默认为utf8mb4</span></span>
<span class="line"><span style="color:#babed8;">character-set-server=utf8mb4</span></span>
<span class="line"><span style="color:#babed8;"># 创建新表时将使用的默认存储引擎</span></span>
<span class="line"><span style="color:#babed8;">default-storage-engine=INNODB</span></span>
<span class="line"><span style="color:#babed8;"># 默认使用“mysql_native_password”插件认证</span></span>
<span class="line"><span style="color:#babed8;">#mysql_native_password</span></span>
<span class="line"><span style="color:#babed8;">default_authentication_plugin=mysql_native_password</span></span>
<span class="line"><span style="color:#babed8;">[mysql]</span></span>
<span class="line"><span style="color:#babed8;"># 设置mysql客户端默认字符集</span></span>
<span class="line"><span style="color:#babed8;">default-character-set=utf8mb4</span></span>
<span class="line"><span style="color:#babed8;">[client]</span></span>
<span class="line"><span style="color:#babed8;"># 设置mysql客户端连接服务端时默认使用的端口</span></span>
<span class="line"><span style="color:#babed8;">port=3306</span></span>
<span class="line"><span style="color:#babed8;">default-character-set=utf8mb4</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>配置系统变量</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 此电脑 -- 右键 -- 属性 -- 高级系统设置 -- 环境变量 -- 系统变量/Path 双击 -- 新建 写入 D:\\MySQL8\\bin -- 确定 -- 确定 -- ……</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>初始化MySQL</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 以管理员身份运行cmd</span></span>
<span class="line"><span style="color:#babed8;"># 开始 右键 -- 搜索 -- cmd -- 选 以管理员身份运行</span></span>
<span class="line"><span style="color:#babed8;"># cmd 命令</span></span>
<span class="line"><span style="color:#babed8;">D:</span></span>
<span class="line"><span style="color:#babed8;">cd MySQL8/bin</span></span>
<span class="line"><span style="color:#babed8;"># 初始化MySQL【安装成功后并记住初始密码为 root@localhost：后面的内容】</span></span>
<span class="line"><span style="color:#babed8;">mysqld --initialize --console</span></span>
<span class="line"><span style="color:#babed8;"># 安装 MySQL</span></span>
<span class="line"><span style="color:#babed8;">mysqld --install</span></span>
<span class="line"><span style="color:#babed8;"># 启动MySQL服务</span></span>
<span class="line"><span style="color:#babed8;">net start mysql</span></span>
<span class="line"><span style="color:#babed8;"># Navicat连接MySQL并修其密码，安装完成</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h4 id="卸载已安装的mysql" tabindex="-1">卸载已安装的MySQL <a class="header-anchor" href="#卸载已安装的mysql" aria-label="Permalink to &quot;卸载已安装的MySQL&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 管理员模式下 CMD命令</span></span>
<span class="line"><span style="color:#babed8;"># 停止MySQL服务</span></span>
<span class="line"><span style="color:#babed8;">net stop mysql</span></span>
<span class="line"><span style="color:#babed8;"># 删除MySQL服务</span></span>
<span class="line"><span style="color:#babed8;">sc delete mysql</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h4 id="安装mysql并指定服务名称为-mysql8-ndb" tabindex="-1">安装MySQL并指定服务名称为 MySQL8_NDB <a class="header-anchor" href="#安装mysql并指定服务名称为-mysql8-ndb" aria-label="Permalink to &quot;安装MySQL并指定服务名称为 MySQL8_NDB&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 安装 MySQL8_NDB</span></span>
<span class="line"><span style="color:#babed8;">mysqld --install mysql8_ndb</span></span>
<span class="line"><span style="color:#babed8;"># 启动 服务 mysql8_ndb</span></span>
<span class="line"><span style="color:#babed8;">net start mysql8_ndb</span></span>
<span class="line"><span style="color:#babed8;"># 停止服务</span></span>
<span class="line"><span style="color:#babed8;">net stop mysql8_ndb</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h6 id="linux参考-第一篇-mysqlcluster数据库集群的搭建和配置" tabindex="-1">Linux参考 <a href="https://blog.csdn.net/csolo/article/details/87086086" target="_blank" rel="noreferrer">第一篇：mysqlcluster数据库集群的搭建和配置</a> <a class="header-anchor" href="#linux参考-第一篇-mysqlcluster数据库集群的搭建和配置" aria-label="Permalink to &quot;Linux参考 [第一篇：mysqlcluster数据库集群的搭建和配置](https://blog.csdn.net/csolo/article/details/87086086)&quot;">​</a></h6>`,15),t=[p];function o(c,i,r,d,b,y){return a(),n("div",null,t)}const h=s(e,[["render",o]]);export{u as __pageData,h as default};
