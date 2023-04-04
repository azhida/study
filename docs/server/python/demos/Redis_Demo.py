# -*- coding: utf-8 -*-

import sys
import os
import redis
import base64
import inspect
import tool

# 先安装扩展库 redis
# pip install redis

# 使用日志模块要确保存在 logs 目录，否则报错


class Redis:

    def __init__(self, host='127.0.0.1', db=0):
        # 连接redis
        self.r = redis.Redis(host=host, port=6379, db=db)

    def __del__(self):
        print('销毁')

    def log(self, message, log_file_name='redis.log'):
        # 获取调用者的方法名
        curframe = inspect.currentframe()
        calframe = inspect.getouterframes(curframe, 2)
        caller_name = calframe[1][3]
        tool.log(message, log_file_name=log_file_name, class_name=__class__.__name__, caller_name=caller_name)

    # 获取指定目录 path下的 所有文件名，返回 列表
    def get_files(self, path, all_files, chunk=20):
        # path 绝对路径
        if not path:
            return False

        # 首先遍历当前目录所有文件及文件夹
        file_list = os.listdir(path)
        # 准备循环判断每个元素是否是文件夹还是文件，是文件的话，把名称传入list，是文件夹的话，递归
        for file in file_list:
            # print(len(all_files))
            # 满20个文件就不再取了
            if len(all_files) >= chunk:
                return all_files
            # 利用os.path.join()方法取得路径全名，并存入cur_path变量，否则每次只能遍历一层目录
            cur_path = os.path.join(path, file)
            # 判断是否是文件夹
            if os.path.isdir(cur_path):
                self.get_files(cur_path, all_files)
            else:
                all_files.append(cur_path)

        return all_files

    # 图片文件转 base64 保存到redis 哈希中
    def save_img(self, file_name, source_path='', hase_name='test_imgs', rm_source_file=False):
        try:
            # 只接受 jpg和png 格式
            file_suffix = '.' + file_name.split('.')[-1]
            if not file_suffix in ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG']:
                return False

            with open(file_name, 'rb') as f:
                base64_data = base64.b64encode(f.read())
                # 去除根目录，便于下载保存
                hase_key = file_name.replace(source_path, '')
                self.r.hset(hase_name, hase_key, base64_data)
                # 写入成功，删除本地文件
                if rm_source_file:
                    os.remove(file_name)

        except Exception as e:
            self.log(f'抛出异常：{e}')
            exit(e)

    # 批量保存图片数据到redis中
    def save_imgs(self, path, hase_name='test_imgs'):
        all_files = self.get_files(path, [])
        for i in all_files:
            self.save_img(i, path, hase_name)

    # 批量读取redis中的图片数据，并转图片文件形式保存
    def download_imgs(self, save_path, hase_name='test_imgs'):
        try:
            num = 0
            for i in self.r.hscan_iter(hase_name):
                hase_key = i[0].decode()
                file_name = save_path + hase_key
                current_save_path = os.path.dirname(file_name)

                # 目录不存在就先创建目录 -- 多级目录
                if not os.path.exists(current_save_path):
                    os.makedirs(current_save_path)

                with open(file_name, 'wb') as f:
                    print(num, file_name)
                    img_base64 = i[1].decode()
                    data = base64.b64decode(img_base64)
                    f.write(data)

                    # 写入成功，将redis中hase对应key删除
                    self.r.hdel(hase_name, hase_key)

                num += 1

        except Exception as e:
            exit(e)


if __name__ == '__main__':

    r = Redis('127.0.0.1')

    # 图片转base64存redis
    # r.save_imgs('e:/www/test_imgs/', 'test_imgs')

    # base64转图片存文件
    # r.download_imgs('e:/www/test_imgs/', 'test_imgs')

    # 读取 指定文件夹下所有文件
    r.get_files('e:/www/test_imgs/', [], 10)

    print('操作结束')
