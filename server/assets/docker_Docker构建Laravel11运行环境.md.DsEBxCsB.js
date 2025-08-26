import{_ as a,c as s,o as n,a5 as e}from"./chunks/framework.CJNr4pYi.js";const m=JSON.parse('{"title":"Docker 构建 Laravel11 运行环境","description":"","frontmatter":{},"headers":[],"relativePath":"docker/Docker构建Laravel11运行环境.md","filePath":"docker/Docker构建Laravel11运行环境.md","lastUpdated":1731633968000}'),p={name:"docker/Docker构建Laravel11运行环境.md"},l=e(`<h1 id="docker-构建-laravel11-运行环境" tabindex="-1">Docker 构建 Laravel11 运行环境 <a class="header-anchor" href="#docker-构建-laravel11-运行环境" aria-label="Permalink to &quot;Docker 构建 Laravel11 运行环境&quot;">​</a></h1><h2 id="安装-laravel11" tabindex="-1">安装 laravel11 <a class="header-anchor" href="#安装-laravel11" aria-label="Permalink to &quot;安装 laravel11&quot;">​</a></h2><p><a href="https://learnku.com/docs/laravel/11.x/installationmd/16647#creating-a-laravel-project" target="_blank" rel="noreferrer">文档</a></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-project</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> laravel/laravel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example-app</span></span></code></pre></div><h2 id="dockerfile" tabindex="-1">Dockerfile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;Dockerfile&quot;">​</a></h2><div class="language-laravel11 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">laravel11</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 使用官方PHP 8.3-fpm镜像</span></span>
<span class="line"><span>FROM php:8.3-fpm</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 更新包列表</span></span>
<span class="line"><span>RUN apt-get update &amp;&amp; apt-get install -y git</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装PHP扩展</span></span>
<span class="line"><span>RUN docker-php-ext-install pdo pdo_mysql zip</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装Composer</span></span>
<span class="line"><span>RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置工作目录</span></span>
<span class="line"><span>WORKDIR /var/www</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 复制composer.json和composer.lock文件</span></span>
<span class="line"><span>COPY composer.json composer.lock /var/www/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装依赖</span></span>
<span class="line"><span>RUN composer install</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 复制Laravel项目文件到工作目录</span></span>
<span class="line"><span>COPY . /var/www</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置用户和用户组</span></span>
<span class="line"><span>RUN chown -R www-data:www-data /var/www</span></span>
<span class="line"><span>USER www-data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EXPOSE 80</span></span>
<span class="line"><span>EXPOSE 8000</span></span></code></pre></div><h2 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> laravel_run_image:latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div>`,8),i=[l];function t(r,c,o,h,d,k){return n(),s("div",null,i)}const _=a(p,[["render",t]]);export{m as __pageData,_ as default};
