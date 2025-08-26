import{_ as s,c as a,o as n,a5 as e}from"./chunks/framework.CJNr4pYi.js";const _=JSON.parse('{"title":"centos7 安装宝塔面板","description":"","frontmatter":{},"headers":[],"relativePath":"docker/centos7安装宝塔面板.md","filePath":"docker/centos7安装宝塔面板.md","lastUpdated":1722327281000}'),p={name:"docker/centos7安装宝塔面板.md"},t=e(`<h1 id="centos7-安装宝塔面板" tabindex="-1">centos7 安装宝塔面板 <a class="header-anchor" href="#centos7-安装宝塔面板" aria-label="Permalink to &quot;centos7 安装宝塔面板&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull centos:centos7</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在运行容器的时候，给容器加特权，及加上 --privileged=true 参数， 否则 挂载目录时会提示无权限</span></span>
<span class="line"><span>docker run -itd \\</span></span>
<span class="line"><span>--name centos-test \\</span></span>
<span class="line"><span>-p 888:888 \\</span></span>
<span class="line"><span>-p 8888:8888 \\</span></span>
<span class="line"><span>-p 8085:80 \\</span></span>
<span class="line"><span>-p 444:443 \\</span></span>
<span class="line"><span>-p 3308:3306 \\</span></span>
<span class="line"><span>-v ~/www:/www \\</span></span>
<span class="line"><span>--privileged=true \\</span></span>
<span class="line"><span>centos:centos7</span></span></code></pre></div><ul><li>进入容器操作</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker exec -it centos-test bash</span></span></code></pre></div><ul><li>yum之镜像加速</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 备份源文件</span></span>
<span class="line"><span>mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup</span></span>
<span class="line"><span># 下载对应文件到/etc/yum.repos.d下</span></span>
<span class="line"><span>wget -O /etc/yum.repos.d/CentOS-Base.repo  http://mirrors.163.com/.help/CentOS7-Base-163.repo</span></span>
<span class="line"><span># 安装epel.repo源</span></span>
<span class="line"><span>wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo</span></span>
<span class="line"><span># 生成缓存</span></span>
<span class="line"><span>yum clean all</span></span>
<span class="line"><span>yum makecache</span></span></code></pre></div><ul><li>centos7 安装宝塔面板</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>yum update -y</span></span>
<span class="line"><span>yum install -y wget </span></span>
<span class="line"><span>yum install -y sudo</span></span>
<span class="line"><span>wget -O install.sh http://download.bt.cn/install/install_6.0.sh </span></span>
<span class="line"><span>sudo sh install.sh ed8484bec</span></span></code></pre></div>`,8),l=[t];function c(i,o,d,r,u,h){return n(),a("div",null,l)}const g=s(p,[["render",c]]);export{_ as __pageData,g as default};
