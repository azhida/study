import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.aaef0e9b.js";const h=JSON.parse('{"title":"ubuntu server 20.04 安装笔记","description":"","frontmatter":{},"headers":[],"relativePath":"server/linux/ubuntu/安装笔记.md","lastUpdated":1680584985000}'),l={name:"server/linux/ubuntu/安装笔记.md"},p=e(`<h1 id="ubuntu-server-20-04-安装笔记" tabindex="-1">ubuntu server 20.04 安装笔记 <a class="header-anchor" href="#ubuntu-server-20-04-安装笔记" aria-label="Permalink to &quot;ubuntu server 20.04 安装笔记&quot;">​</a></h1><p><a href="https://www.osyunwei.com/?p=10727" target="_blank" rel="noreferrer">学习地址：https://www.osyunwei.com/?p=10727</a></p><h2 id="开启root账号" tabindex="-1">开启root账号 <a class="header-anchor" href="#开启root账号" aria-label="Permalink to &quot;开启root账号&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 启用root账号并设置密码，根据提示输入2次密码</span></span>
<span class="line"><span style="color:#babed8;">sudo passwd root</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 从普通用户切换到root用户，根据提示输入root密码</span></span>
<span class="line"><span style="color:#babed8;">su root</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 禁用root账号，如果要启用，输入sudo passwd root再次设置root密码</span></span>
<span class="line"><span style="color:#babed8;">sudo passwd -l root</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 创建一个普通用户</span></span>
<span class="line"><span style="color:#babed8;">adduser osyunwei</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 关机，不加参数-p会进入休眠状态，卡在关机界面</span></span>
<span class="line"><span style="color:#babed8;">halt -p</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="设置ip地址、网关、dns" tabindex="-1">设置IP地址、网关、DNS <a class="header-anchor" href="#设置ip地址、网关、dns" aria-label="Permalink to &quot;设置IP地址、网关、DNS&quot;">​</a></h2><blockquote><p>如果安装时已经连上了，可以不用再配</p></blockquote><p>Ubuntu Server17.10 开始，弃用 <code>/etc/network/interfaces</code> 配置文件，改成 netplan ⽅式。</p><p>各个版本配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># Ubuntu Server17.10 以前</span></span>
<span class="line"><span style="color:#babed8;">/etc/network/interfaces</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># Ubuntu Server 18.04</span></span>
<span class="line"><span style="color:#babed8;">/etc/netplan/01-netcfg.yaml</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># Ubuntu Server 20.04</span></span>
<span class="line"><span style="color:#babed8;">/etc/netplan/00-installer-config.yaml</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><ul><li>修改配置文件</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">vim /etc/netplan/00-installer-config.yaml</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># This is the network config written by &#39;subiquity&#39;</span></span>
<span class="line"><span style="color:#babed8;">network:</span></span>
<span class="line"><span style="color:#babed8;">    ethernets:    </span></span>
<span class="line"><span style="color:#babed8;">        ens33:        </span></span>
<span class="line"><span style="color:#babed8;">            dhcp4: no            </span></span>
<span class="line"><span style="color:#babed8;">            addresses: [192.168.21.204/24]            </span></span>
<span class="line"><span style="color:#babed8;">            gateway4: 192.168.21.2            </span></span>
<span class="line"><span style="color:#babed8;">            nameservers:            </span></span>
<span class="line"><span style="color:#babed8;">                addresses: [8.8.8.8]                </span></span>
<span class="line"><span style="color:#babed8;">                addresses: [8.8.4.4]    </span></span>
<span class="line"><span style="color:#babed8;">    version: 2</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><blockquote><p>注意：yaml格式是层级的，配置文件有上下级关系，需要缩进，冒号后面的配置文件一定要空一格再写，否则配置出错。</p></blockquote><ul><li>重启，使配置文件生效，如果配置失败，请仔细检查配置文件，注意格式和空格</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">netplan apply</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div><h2 id="注" tabindex="-1">注： <a class="header-anchor" href="#注" aria-label="Permalink to &quot;注：&quot;">​</a></h2><p>使用了系统默认的磁盘分区，LVM 磁盘管理。 硬盘信息：500G SSD + 3T 机械硬盘。 用 <code>df -h</code> 看不到 3T 的硬盘信息。 解决如下：</p><h3 id="磁盘操作相关" tabindex="-1">磁盘操作相关 <a class="header-anchor" href="#磁盘操作相关" aria-label="Permalink to &quot;磁盘操作相关&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;"># 查看磁盘信息，找到 3T 的磁盘信息，如： /dev/sda1</span></span>
<span class="line"><span style="color:#babed8;">fdisk -l</span></span>
<span class="line"><span style="color:#babed8;"># /dev/sda1   2048 7814035455 7814033408  3.7T Microsoft basic data</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 显示存在的卷组，看 卷组名字和剩余可分配的空间 Free PE/Size</span></span>
<span class="line"><span style="color:#babed8;">vgdisplay</span></span>
<span class="line"><span style="color:#babed8;"># VG Name               ubuntu-vg</span></span>
<span class="line"><span style="color:#babed8;"># Free  PE / Size       0 / 0</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 把 3T硬盘空间 添加到 卷组 ubuntu-vg ，再执行 vgdisplay 就可以看到 Free 有剩余的空间了</span></span>
<span class="line"><span style="color:#babed8;">vgextend ubuntu-vg /dev/sda1</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 查看磁盘目录和挂载点</span></span>
<span class="line"><span style="color:#babed8;">df -h</span></span>
<span class="line"><span style="color:#babed8;"># /dev/mapper/ubuntu--vg-ubuntu--lv  4.1T  298G  3.6T   8% /</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 用以下方式 全部空间都给这个盘 /dev/mapper/ubuntu--vg-ubuntu--lv</span></span>
<span class="line"><span style="color:#babed8;">lvextend -l +100%FREE /dev/mapper/ubuntu–vg-ubuntu–lv</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 然后重新计算磁盘大小</span></span>
<span class="line"><span style="color:#babed8;">resize2fs /dev/mapper/ubuntu–vg-ubuntu–lv</span></span>
<span class="line"><span style="color:#babed8;"></span></span>
<span class="line"><span style="color:#babed8;"># 再次查看磁盘情况，就可以看到 空间扩大了</span></span>
<span class="line"><span style="color:#babed8;">df -h</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre></div>`,19),o=[p];function t(c,r,b,i,d,u){return a(),n("div",null,o)}const v=s(l,[["render",t]]);export{h as __pageData,v as default};
