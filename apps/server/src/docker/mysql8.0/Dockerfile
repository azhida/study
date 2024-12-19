# 使用官方MySQL 8.0镜像作为基础镜像
FROM mysql:8.0

# 设置环境变量，例如数据库的root密码
ENV MYSQL_ROOT_PASSWORD=root_password

# 复制配置文件（如果需要）
COPY my.cnf /etc/mysql/conf.d/

# 暴露8000端口供外部访问
EXPOSE 8000

# 其他自定义配置...


# 制作镜像
# docker build -t my_mysql_8.0 .
# 运行镜像
# docker run -d -p 8010:8000 my_mysql_8.0

# 然后使用 Navacat 连接 127.0.0.1:8010 就可以访问数据库了