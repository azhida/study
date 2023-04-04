import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92222dd1.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"database/MySQL/基础操作笔记.md","lastUpdated":null}'),e={name:"database/MySQL/基础操作笔记.md"},p=l(`<h6 id="json字段创建虚拟列" tabindex="-1">json字段创建虚拟列 <a class="header-anchor" href="#json字段创建虚拟列" aria-label="Permalink to &quot;json字段创建虚拟列&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># orders.shipping_address 是json类型，包含 phone 字段</span></span>
<span class="line"><span style="color:#A6ACCD;">alter table orders add v_shipping_address_phone varchar(20) generated always as (JSON_UNQUOTE(shipping_address-&gt;&#39;$.phone&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查询 v_shipping_address_phone</span></span>
<span class="line"><span style="color:#A6ACCD;">select * FROM orders where v_shipping_address_phone = &#39;13100000000&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="mysql批量替换某个字段中的部分数据" tabindex="-1">MYSQL批量替换某个字段中的部分数据 <a class="header-anchor" href="#mysql批量替换某个字段中的部分数据" aria-label="Permalink to &quot;MYSQL批量替换某个字段中的部分数据&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># UPDATE 表名test SET 字段data = replace(字段data, ‘aaa’, ‘bbb’) WHERE 条件语句;</span></span>
<span class="line"><span style="color:#A6ACCD;">UPDATE test SET \`data\` = REPLACE(\`data\`,&#39;aaa&#39;, &#39;bbb&#39;) WHERE id IN (7, 8, 9);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="存储引擎" tabindex="-1">存储引擎 <a class="header-anchor" href="#存储引擎" aria-label="Permalink to &quot;存储引擎&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看 存储引擎信息，Support = YSE 说明 支持该引擎，Support = DEFAULT 说明 该引擎为默认存储引擎</span></span>
<span class="line"><span style="color:#A6ACCD;">SHOW ENGINES;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置InnoDB为默认引擎：在配置文件my.ini中的 [mysqld] 下面加入default-storage-engine=INNODB</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="手动清理binlog" tabindex="-1">手动清理binlog <a class="header-anchor" href="#手动清理binlog" aria-label="Permalink to &quot;手动清理binlog&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看主库和从库正在使用的binlog是哪个文件</span></span>
<span class="line"><span style="color:#A6ACCD;">show master status;</span></span>
<span class="line"><span style="color:#A6ACCD;">show slave status;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除指定日期以前的日志索引中binlog日志文件</span></span>
<span class="line"><span style="color:#A6ACCD;">purge master logs before &#39;2016-09-01 17:20:00&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除指定日志文件的日志索引前所有binlog日志文件【删除 日志索引 小于 000022 的所有日志文件】</span></span>
<span class="line"><span style="color:#A6ACCD;">purge master logs to &#39;mysql-bin.000022&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 注意：</span></span>
<span class="line"><span style="color:#A6ACCD;"># 时间和文件名一定不可以写错，尤其是时间中的年和文件名中的序号，以防不小心将正在使用的binlog删除！！！</span></span>
<span class="line"><span style="color:#A6ACCD;"># 切勿删除正在使用的binlog！！！</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h6 id="将表a查询出来的数据插入到表b中" tabindex="-1">将表A查询出来的数据插入到表B中 <a class="header-anchor" href="#将表a查询出来的数据插入到表b中" aria-label="Permalink to &quot;将表A查询出来的数据插入到表B中&quot;">​</a></h6><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">INSERT into B (字段1,字段2,字段3.......)</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT 字段1,字段2,字段3....... FROM A </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),o=[p];function t(c,i,r,d,C,A){return a(),n("div",null,o)}const _=s(e,[["render",t]]);export{y as __pageData,_ as default};
