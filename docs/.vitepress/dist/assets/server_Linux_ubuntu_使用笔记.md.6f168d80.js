import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.92222dd1.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"server/Linux/ubuntu/使用笔记.md","lastUpdated":null}'),p={name:"server/Linux/ubuntu/使用笔记.md"},e=l(`<h2 id="时区" tabindex="-1">时区 <a class="header-anchor" href="#时区" aria-label="Permalink to &quot;时区&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 修改时区</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo timedatectl set-timezone Asia/Shanghai</span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看时区/时间</span></span>
<span class="line"><span style="color:#A6ACCD;">date -R</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="ubuntu-测网速" tabindex="-1">ubuntu 测网速 <a class="header-anchor" href="#ubuntu-测网速" aria-label="Permalink to &quot;ubuntu 测网速&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo apt install speedtest-cli</span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装之后直接运行</span></span>
<span class="line"><span style="color:#A6ACCD;">speedtest-cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="ubuntu查看本机外网ip地址" tabindex="-1">Ubuntu查看本机外网IP地址 <a class="header-anchor" href="#ubuntu查看本机外网ip地址" aria-label="Permalink to &quot;Ubuntu查看本机外网IP地址&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 1.安装curl工具。</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install curl</span></span>
<span class="line"><span style="color:#A6ACCD;"># 2.查看外网IP地址。</span></span>
<span class="line"><span style="color:#A6ACCD;">curl ifconfig.me</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="防火墙操作" tabindex="-1">防火墙操作 <a class="header-anchor" href="#防火墙操作" aria-label="Permalink to &quot;防火墙操作&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 安装防火墙</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo sudo apt-get install ufw</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看防火墙的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw status</span></span>
<span class="line"><span style="color:#A6ACCD;"># 系统提示： “Status: inactive”状态：不活跃</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 开启防火墙</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw enable</span></span>
<span class="line"><span style="color:#A6ACCD;"># 关闭防火墙</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw disable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 拒接所有外来访问，本机能正常访问外部</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw default deny</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 开放22端口</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow 22</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 关闭21端口，重启生效 ufw reload</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw delete allow 21</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重启ufw防火墙</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看22端口的监听状态</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo netstat -tunlp | grep 22</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 在Windows下检测是否能够telnet通22端口</span></span>
<span class="line"><span style="color:#A6ACCD;">telnet 192.168.121.135 22</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 指定开放8001的tcp协议</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow 8001/tcp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 指定关闭8001的tcp协议</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw delete allow 8001/tcp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 指定ip为192.168.121.1的计算机操作所有端口</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow from 192.168.121.1  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 关闭指定ip为192.168.121.1的计算机操作所有端口</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw delete allow from 192.168.121.1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 开放指定ip为192.168.121.2的计算机访问本机的3306端口</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw allow from 192.168.121.2 to any port 3306</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 关闭指定ip为192.168.121.2的计算机对本机的3306端口的操作</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ufw delete allow from 192.168.121.2 to any port 3306</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[e];function t(c,i,C,A,r,u){return n(),a("div",null,o)}const D=s(p,[["render",t]]);export{y as __pageData,D as default};
