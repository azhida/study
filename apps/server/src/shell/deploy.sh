#!/usr/bin/env sh

# echo -n "请输入密码: "
# read -s password
# echo

# echo "你输入的密码是: $password"

# scp -r /d/www/xingli/demo/dist/ root@192.168.1.200:/var/www/demo/

scp -r ./dist/ root@192.168.1.200:/var/www/demo/