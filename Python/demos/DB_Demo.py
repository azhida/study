import pandas as pd
import pymysql
import time
import sys
import os

# 先安装扩展库 pandas pymysql
# pip install pandas pymysql

# 调用示例：
# python DB_Demo.py MySQL主机地址 用户名 用户密码 数据库名称 数据表名称 动作名称 csv文件绝对路径
# python DB_Demo.py 127.0.0.1 root root db_test table_test action_name csv_file_path


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

    def __del__(self):
        db.cur.close()
        db.con.close()

    def csv_to_mysql(self):

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

    def mysql_to_csv(self):

        try:

            print(self.table_name, '执行开始')
            start_time_1 = time.time()

            # print(os.getcwd()) # 获取当前工作目录路径
            # print(os.path.abspath('.')) # 获取当前工作目录路径

            # 当前文件所在的目录
            current_file_dir = os.path.dirname(__file__)
            print('current_file_dir', current_file_dir)

            # 年月日
            datetime_str = time.strftime("%Y%m%d%H%M%S", time.localtime())
            print(datetime_str)

            # 文件保存路径[动态生成绝对路径]
            save_path = os.path.join(current_file_dir, 'csvs/' + datetime_str)
            print('save_path', save_path)

            # 判断文件夹是否存在，不存在则创建文件夹
            if not os.path.exists(save_path):
                os.makedirs(save_path)

            sql = 'select * from %s' % self.table_name
            print('sql', sql)

            # 参数encoding="utf_8_sig"编码后，可以防止写入csv的中文出现乱码
            df = pd.read_sql(sql, self.con)
            print('df.head(2)', df.head(2))

            df.to_csv(save_path + '/%s.csv' % self.table_name, index=None, encoding="utf_8_sig")

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
action_name = sys.argv[6]  # 动作名称： csv_to_mysql || mysql_to_csv
file_path = sys.argv[7]

# host = input('MySQL host： ')
# user = input('MySQL user：')
# password = input('MySQL password：')
# db_name = input('MySQL db_name：')
# table_name = input('MySQL table_name：')
# action_name = input('action_name：')
# file_path = input('file_path：')

db = DB(host, user, password, db_name, table_name, file_path)
if action_name == 'csv_to_mysql':
    db.csv_to_mysql()
else:
    db.mysql_to_csv()

print('操作结束')
