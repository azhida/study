import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.92222dd1.js";const u=JSON.parse('{"title":"centos7 安装宝塔面板","description":"","frontmatter":{},"headers":[],"relativePath":"server/Docker/centos7安装宝塔面板.md","lastUpdated":null}'),l={name:"server/Docker/centos7安装宝塔面板.md"},p=e(`<h1 id="centos7-安装宝塔面板" tabindex="-1">centos7 安装宝塔面板 <a class="header-anchor" href="#centos7-安装宝塔面板" aria-label="Permalink to &quot;centos7 安装宝塔面板&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker pull centos:centos7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 在运行容器的时候，给容器加特权，及加上 --privileged=true 参数， 否则 挂载目录时会提示无权限</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -itd \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name centos-test \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 888:888 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 8888:8888 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 8085:80 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 444:443 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 3308:3306 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v ~/www:/www \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--privileged=true \\</span></span>
<span class="line"><span style="color:#A6ACCD;">centos:centos7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>进入容器操作</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker exec -it centos-test bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>yum之镜像加速</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 备份源文件</span></span>
<span class="line"><span style="color:#A6ACCD;">mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup</span></span>
<span class="line"><span style="color:#A6ACCD;"># 下载对应文件到/etc/yum.repos.d下</span></span>
<span class="line"><span style="color:#A6ACCD;">wget -O /etc/yum.repos.d/CentOS-Base.repo  http://mirrors.163.com/.help/CentOS7-Base-163.repo</span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装epel.repo源</span></span>
<span class="line"><span style="color:#A6ACCD;">wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo</span></span>
<span class="line"><span style="color:#A6ACCD;"># 生成缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">yum clean all</span></span>
<span class="line"><span style="color:#A6ACCD;">yum makecache</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>centos7 安装宝塔面板</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">yum update -y</span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y wget </span></span>
<span class="line"><span style="color:#A6ACCD;">yum install -y sudo</span></span>
<span class="line"><span style="color:#A6ACCD;">wget -O install.sh http://download.bt.cn/install/install_6.0.sh </span></span>
<span class="line"><span style="color:#A6ACCD;">sudo sh install.sh ed8484bec</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[p];function t(c,r,i,C,A,y){return n(),a("div",null,o)}const D=s(l,[["render",t]]);export{u as __pageData,D as default};
