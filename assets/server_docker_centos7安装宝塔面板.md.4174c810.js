import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const m=JSON.parse('{"title":"centos7 安装宝塔面板","description":"","frontmatter":{},"headers":[],"relativePath":"server/docker/centos7安装宝塔面板.md","lastUpdated":1680584985000}'),l={name:"server/docker/centos7安装宝塔面板.md"},p=e(`<h1 id="centos7-安装宝塔面板" tabindex="-1">centos7 安装宝塔面板 <a class="header-anchor" href="#centos7-安装宝塔面板" aria-label="Permalink to &quot;centos7 安装宝塔面板&quot;">​</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">docker pull centos:centos7</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 在运行容器的时候，给容器加特权，及加上 --privileged=true 参数， 否则 挂载目录时会提示无权限</span></span>
<span class="line"><span style="color:#babed8;">docker run -itd \\</span></span>
<span class="line"><span style="color:#babed8;">--name centos-test \\</span></span>
<span class="line"><span style="color:#babed8;">-p 888:888 \\</span></span>
<span class="line"><span style="color:#babed8;">-p 8888:8888 \\</span></span>
<span class="line"><span style="color:#babed8;">-p 8085:80 \\</span></span>
<span class="line"><span style="color:#babed8;">-p 444:443 \\</span></span>
<span class="line"><span style="color:#babed8;">-p 3308:3306 \\</span></span>
<span class="line"><span style="color:#babed8;">-v ~/www:/www \\</span></span>
<span class="line"><span style="color:#babed8;">--privileged=true \\</span></span>
<span class="line"><span style="color:#babed8;">centos:centos7</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>进入容器操作</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">docker exec -it centos-test bash</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>yum之镜像加速</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 备份源文件</span></span>
<span class="line"><span style="color:#babed8;">mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup</span></span>
<span class="line"><span style="color:#babed8;"># 下载对应文件到/etc/yum.repos.d下</span></span>
<span class="line"><span style="color:#babed8;">wget -O /etc/yum.repos.d/CentOS-Base.repo  http://mirrors.163.com/.help/CentOS7-Base-163.repo</span></span>
<span class="line"><span style="color:#babed8;"># 安装epel.repo源</span></span>
<span class="line"><span style="color:#babed8;">wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo</span></span>
<span class="line"><span style="color:#babed8;"># 生成缓存</span></span>
<span class="line"><span style="color:#babed8;">yum clean all</span></span>
<span class="line"><span style="color:#babed8;">yum makecache</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>centos7 安装宝塔面板</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">yum update -y</span></span>
<span class="line"><span style="color:#babed8;">yum install -y wget </span></span>
<span class="line"><span style="color:#babed8;">yum install -y sudo</span></span>
<span class="line"><span style="color:#babed8;">wget -O install.sh http://download.bt.cn/install/install_6.0.sh </span></span>
<span class="line"><span style="color:#babed8;">sudo sh install.sh ed8484bec</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,8),o=[p];function t(c,r,i,d,b,y){return a(),n("div",null,o)}const _=s(l,[["render",t]]);export{m as __pageData,_ as default};
