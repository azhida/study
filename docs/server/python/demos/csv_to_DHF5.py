# -*- coding: utf-8 -*-

import pandas as pd
import os

columns = ['date', 'time', 'open','high','low','close','volume','amount']

# df = pd.read_csv('csvs/quote_data_2012.csv', header=None, names=columns)
df = pd.read_csv('csvs/quote_data_2012.csv')
print(df)
df['datetime'] = pd.to_datetime(df.date + ' ' + df.time, format='%Y-%m-%d %H:%M:%S') # 将数据类型转换成时间类型
df.set_index('datetime', inplace=True) #将date设置为index
df.drop(['date','time'],axis=1, inplace=True)
dest_file =os.path.join(ROOT_H5_1MIN, stock_code +'.h5')
df.to_hdf(dest_file, key='data', mode='w', format='table')