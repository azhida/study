import{_ as s,c as a,o as n,a5 as p}from"./chunks/framework.CJNr4pYi.js";const f=JSON.parse('{"title":"使用笔记","description":"","frontmatter":{},"headers":[],"relativePath":"linux/ubuntu/使用笔记.md","filePath":"linux/ubuntu/使用笔记.md","lastUpdated":1722327281000}'),e={name:"linux/ubuntu/使用笔记.md"},l=p(`<h1 id="使用笔记" tabindex="-1">使用笔记 <a class="header-anchor" href="#使用笔记" aria-label="Permalink to &quot;使用笔记&quot;">​</a></h1><h2 id="查看ubuntu版本" tabindex="-1">查看Ubuntu版本: <a class="header-anchor" href="#查看ubuntu版本" aria-label="Permalink to &quot;查看Ubuntu版本:&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo lsb_release -a</span></span></code></pre></div><h2 id="时区" tabindex="-1">时区 <a class="header-anchor" href="#时区" aria-label="Permalink to &quot;时区&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 修改时区</span></span>
<span class="line"><span>sudo timedatectl set-timezone Asia/Shanghai</span></span>
<span class="line"><span># 查看时区/时间</span></span>
<span class="line"><span>date -R</span></span></code></pre></div><h6 id="ubuntu-测网速" tabindex="-1">ubuntu 测网速 <a class="header-anchor" href="#ubuntu-测网速" aria-label="Permalink to &quot;ubuntu 测网速&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt install speedtest-cli</span></span>
<span class="line"><span># 安装之后直接运行</span></span>
<span class="line"><span>speedtest-cli</span></span></code></pre></div><h6 id="ubuntu查看本机外网ip地址" tabindex="-1">Ubuntu查看本机外网IP地址 <a class="header-anchor" href="#ubuntu查看本机外网ip地址" aria-label="Permalink to &quot;Ubuntu查看本机外网IP地址&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 1.安装curl工具。</span></span>
<span class="line"><span>sudo apt-get install curl</span></span>
<span class="line"><span># 2.查看外网IP地址。</span></span>
<span class="line"><span>curl ifconfig.me</span></span></code></pre></div><h6 id="防火墙操作" tabindex="-1">防火墙操作 <a class="header-anchor" href="#防火墙操作" aria-label="Permalink to &quot;防火墙操作&quot;">​</a></h6><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 安装防火墙</span></span>
<span class="line"><span>sudo sudo apt-get install ufw</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看防火墙的状态</span></span>
<span class="line"><span>sudo ufw status</span></span>
<span class="line"><span># 系统提示： “Status: inactive”状态：不活跃</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 开启防火墙</span></span>
<span class="line"><span>sudo ufw enable</span></span>
<span class="line"><span># 关闭防火墙</span></span>
<span class="line"><span>sudo ufw disable</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 拒接所有外来访问，本机能正常访问外部</span></span>
<span class="line"><span>sudo ufw default deny</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 开放22端口</span></span>
<span class="line"><span>sudo ufw allow 22</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 关闭21端口，重启生效 ufw reload</span></span>
<span class="line"><span>sudo ufw delete allow 21</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重启ufw防火墙</span></span>
<span class="line"><span>sudo ufw reload</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看22端口的监听状态</span></span>
<span class="line"><span>sudo netstat -tunlp | grep 22</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 在Windows下检测是否能够telnet通22端口</span></span>
<span class="line"><span>telnet 192.168.121.135 22</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定开放8001的tcp协议</span></span>
<span class="line"><span>sudo ufw allow 8001/tcp</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定关闭8001的tcp协议</span></span>
<span class="line"><span>sudo ufw delete allow 8001/tcp</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定ip为192.168.121.1的计算机操作所有端口</span></span>
<span class="line"><span>sudo ufw allow from 192.168.121.1  </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 关闭指定ip为192.168.121.1的计算机操作所有端口</span></span>
<span class="line"><span>sudo ufw delete allow from 192.168.121.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 开放指定ip为192.168.121.2的计算机访问本机的3306端口</span></span>
<span class="line"><span>sudo ufw allow from 192.168.121.2 to any port 3306</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 关闭指定ip为192.168.121.2的计算机对本机的3306端口的操作</span></span>
<span class="line"><span>sudo ufw delete allow from 192.168.121.2 to any port 3306</span></span></code></pre></div>`,11),t=[l];function i(c,u,o,d,r,h){return n(),a("div",null,t)}const g=s(e,[["render",i]]);export{f as __pageData,g as default};
