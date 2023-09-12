import{_ as e,o as a,c as o,Q as r}from"./chunks/framework.aaef0e9b.js";const w=JSON.parse('{"title":"搭建 Laravel Sail 开发环境 - Windows","description":"","frontmatter":{},"headers":[],"relativePath":"server/php/laravel/知识/Laravel-Sail开发环境搭建-Windows.md","lastUpdated":1680584985000}'),i={name:"server/php/laravel/知识/Laravel-Sail开发环境搭建-Windows.md"},l=r('<h1 id="搭建-laravel-sail-开发环境-windows" tabindex="-1">搭建 Laravel Sail 开发环境 - Windows <a class="header-anchor" href="#搭建-laravel-sail-开发环境-windows" aria-label="Permalink to &quot;搭建 Laravel Sail 开发环境 - Windows&quot;">​</a></h1><p>学习地址：<a href="https://learnku.com/docs/laravel-development-environment/8.x/setting-up-the-sail-environment-under-windows-10/10352" target="_blank" rel="noreferrer">搭建 Laravel Sail 开发环境 - Windows</a></p><h2 id="开启-windows-系统相关功能" tabindex="-1">开启 Windows 系统相关功能 <a class="header-anchor" href="#开启-windows-系统相关功能" aria-label="Permalink to &quot;开启 Windows 系统相关功能&quot;">​</a></h2><ul><li>快捷键 <code>win + S</code> 打开搜索框</li><li>搜索并打开 <code>控制面板</code></li><li>打开 <code>程序</code></li><li>打开 <code>程序和功能 &gt; 启用或关闭 Windows 功能</code></li><li>查找并勾选如下两项，后确认 <ul><li>适用于 Linux 的 Windows 子系统</li><li>虚拟机平台</li></ul></li></ul><blockquote><p>注意：重启电脑，更新生效</p></blockquote><h2 id="安装-windows-terminal" tabindex="-1">安装 Windows Terminal <a class="header-anchor" href="#安装-windows-terminal" aria-label="Permalink to &quot;安装 Windows Terminal&quot;">​</a></h2><p>为了更好地访问 Windows 的子系统，推荐使用 Windows Terminal 作为命令行工具。</p><p>打开微软商店，搜索关键字 <code>Windows Terminal</code> ，在搜索结果中点击安装即可。</p><h2 id="下载-vscode" tabindex="-1">下载 VSCode <a class="header-anchor" href="#下载-vscode" aria-label="Permalink to &quot;下载 VSCode&quot;">​</a></h2><h2 id="安装-ubuntu" tabindex="-1">安装 Ubuntu <a class="header-anchor" href="#安装-ubuntu" aria-label="Permalink to &quot;安装 Ubuntu&quot;">​</a></h2><p>接下来下载和安装子系统 —— Ubuntu 。</p><p>打开微软商店，搜索关键词 Ubuntu，第一和第二个都可以：点击获取，然后打开即可。<br> 如有报错，则 <a href="https://docs.microsoft.com/zh-cn/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package" target="_blank" rel="noreferrer">下载补丁</a> 。</p><p>补丁下载：<br> 安装 &gt; 旧版本的手动安装步骤 &gt; 步骤 4 - 下载 Linux 内核更新包 &gt; 适用于 x64 计算机的 WSL2 Linux 内核更新包</p><h2 id="安装-docker-desktop" tabindex="-1">安装 Docker Desktop <a class="header-anchor" href="#安装-docker-desktop" aria-label="Permalink to &quot;安装 Docker Desktop&quot;">​</a></h2><h3 id="_1-下载并安装" tabindex="-1">1. 下载并安装 <a class="header-anchor" href="#_1-下载并安装" aria-label="Permalink to &quot;1. 下载并安装&quot;">​</a></h3><p>前往 Docker 官网下载 <a href="https://hub.docker.com/editions/community/docker-ce-desktop-windows" target="_blank" rel="noreferrer">Docker Desktop</a> ，下载完成后点击安装包安装，一直下一步即可。</p><h3 id="_2-开启-wsl2-模式" tabindex="-1">2. 开启 WSL2 模式 <a class="header-anchor" href="#_2-开启-wsl2-模式" aria-label="Permalink to &quot;2. 开启 WSL2 模式&quot;">​</a></h3><h3 id="_3-docker-hub-镜像加速" tabindex="-1">3. Docker Hub 镜像加速 <a class="header-anchor" href="#_3-docker-hub-镜像加速" aria-label="Permalink to &quot;3. Docker Hub 镜像加速&quot;">​</a></h3>',18),t=[l];function n(d,s,c,h,u,p){return a(),o("div",null,t)}const k=e(i,[["render",n]]);export{w as __pageData,k as default};
