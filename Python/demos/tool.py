# -*- coding: utf-8 -*-

import time
import logging
import inspect
import os


def datetime():
    # 时间日期格式 2000-01-01 00:00:00
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())


# 自定义日志
def log(message, **params):
    log_file_name = 'demo.log'
    if 'log_file_name' in params:
        log_file_name = params['log_file_name']

    # 日志文件名： demo-2020-01-01.log
    rq = time.strftime('%Y-%m-%d', time.localtime(time.time()))
    log_file_name = log_file_name.replace('.log', '')
    current_file_dir = os.path.dirname(__file__)
    log_file_name = current_file_dir + f'/logs/{log_file_name}-{rq}.log'

    logger = logging.getLogger(__name__)
    handler = logging.FileHandler(log_file_name)
    formatter = logging.Formatter('%(asctime)s - %(name)s-%(levelname)s - %(message)s')
    handler.setFormatter(formatter)
    logger.addHandler(handler)

    class_name = ''
    if 'class_name' in params:
        class_name = params['class_name']

    if 'caller_name' in params:
        caller_name = params['caller_name']
    else:
        # 获取调用者的方法名
        curframe = inspect.currentframe()
        calframe = inspect.getouterframes(curframe, 2)
        caller_name = calframe[1][3]
        if caller_name == '<module>':
            caller_name = ''

    logger.error(f'{datetime()} , {class_name}::{caller_name}() => {message}')
    # 如果不删除，将会把日志同时打印到所有添加过的日志文件里
    logger.removeHandler(handler)


# 返回 调用者的方法名
def get_function_name():
    curframe = inspect.currentframe()
    calframe = inspect.getouterframes(curframe, 2)
    caller_name = calframe[1][3]
    # print('caller name:', caller_name)
    return caller_name
