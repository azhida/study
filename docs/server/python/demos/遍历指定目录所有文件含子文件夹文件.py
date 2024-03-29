# -- coding: utf-8 --

import os


def show_files(path, all_files):
    # 首先遍历当前目录所有文件及文件夹
    file_list = os.listdir(path)
    # 准备循环判断每个元素是否是文件夹还是文件，是文件的话，把名称传入list，是文件夹的话，递归
    for file in file_list:
        # print(len(all_files))
        # 满20个文件就不再取了
        if len(all_files) >= 20:
            return all_files
        # 利用os.path.join()方法取得路径全名，并存入cur_path变量，否则每次只能遍历一层目录
        cur_path = os.path.join(path, file)
        # 判断是否是文件夹
        if os.path.isdir(cur_path):
            show_files(cur_path, all_files)
        else:
            all_files.append(cur_path)

    return all_files


# 传入空的list接收文件名
contents = show_files("e:\\www", [])
# 循环打印show_files函数返回的文件名列表
for content in contents:
    print(content)
