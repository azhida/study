import pandas as pd
import pymysql
import time
import sys

# 先安装扩展库 pandas pymysql
# pip install pandas pymysql
# 调用示例：
# python DB_Demo.py MySQL主机地址 用户名 用户密码 数据库名称 数据表名称 csv文件绝对路径
# python DB_Demo.py 127.0.0.1 root root db_test table_test csv_file_path

class DB:

    def __init__(self, host, user, password, db_name, table_name, file_path):

        self.host = host
        self.user = user
        self.password = password
        self.db_name = db_name
        self.table_name = table_name
        self.file_path = file_path

        # 创建数据库连接
        self.con = pymysql.connect(
            host=self.host,
            user=self.user,
            password=self.password,
            db=self.db_name
        )
        self.con.set_charset('utf8')
        self.cur = self.con.cursor()
        self.cur.execute('set names utf8')
        self.cur.execute('set character_set_connection=utf8;')

    def csvToDb(self):

        try:
            print(self.table_name, '执行开始')
            start_time_1 = time.time()
            chunksize = 1000
            count = 1
            for df in pd.read_csv(self.file_path, chunksize=chunksize):
                # print('执行开始 count : ', count, df)
                # print(11, tuple(df.columns))

                print(self.table_name, '执行开始 count : ', count)
                count += 1

                start_time_2 = time.time()

                try:

                    # 数据表字段
                    select_colunm = str(tuple(df.columns))
                    # print(2, select_colunm, type(select_colunm))
                    select_colunm = select_colunm.replace("'", '`')
                    # print(2, select_colunm, type(select_colunm))

                    # 将 表中所有为 null的数据 标记为 None_Null
                    df = df.astype(object).where(pd.notnull(df), 'None_Null')

                    insert_data = ''

                    for i in df.values:
                        # print(3, i, type(i))
                        i = str(tuple(i))
                        insert_data = insert_data + i + ','

                    # 替换 NULL 值
                    insert_data = insert_data.replace("'None_Null'", 'null')
                    # 替换多余的 括号()
                    insert_data = insert_data.rstrip(',')
                    # print(95, insert_data)

                    # 拼接sql
                    insert_sql = 'insert into `{}` {} values {}'.format(self.table_name, select_colunm, insert_data)
                    # print(90, insert_sql)

                    self.cur.execute(insert_sql)
                    self.con.commit()

                    end_time_2 = time.time()
                    used_time_2 = end_time_2 - start_time_2
                    print(self.table_name, '执行结束, used_time_2 : %s' % used_time_2)

                except Exception as e:
                    exit(e)

            end_time_1 = time.time()
            used_time_1 = end_time_1 - start_time_1
            print(self.table_name, '执行结束 used_time_1 = ', used_time_1)

        except Exception as e:
            exit(e)


# 接收命令行参数
print(f'命令行参数：{sys.argv}')
host = sys.argv[1]
user = sys.argv[2]
password = sys.argv[3]
db_name = sys.argv[4]
table_name = sys.argv[5]
file_path = sys.argv[6]

# host = input('MySQL host： ')
# user = input('MySQL user：')
# password = input('MySQL password：')
# db_name = input('MySQL db_name：')
# table_name = input('MySQL table_name：')
# file_path = input('MySQL file_path：')

db = DB(host, user, password, db_name, table_name, file_path)
db.csvToDb()

db.cur.close()
db.con.close()
