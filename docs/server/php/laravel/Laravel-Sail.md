# Laravel Sail

Laravel Sail （下面简称 Sail）是 Laravel 官方维护的 Docker 解决方案，发布于 2020 年末。

Sail 存在的目的与 Homestead 一样，旨在提供一个为 Laravel 量身定制的开发环境，让开发者可以快速上手。与 Homestead 基于虚拟机技术（VirtualBox + Vagrant）相比，Sail 依赖于 Docker 和 Docker Compose。

相比虚拟机的笨重，Docker 技术更加轻量化。从日常开发角度上讲，明显区别是虚拟机会使笔记本电脑发烫，且执行速度较慢，而 Docker 会好很多。

Docker 是未来趋势，推荐使用。