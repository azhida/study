import numpy as np
import pandas as pd
import tushare as ts
import mplfinance as mpf
import matplotlib.pyplot as plt
from pylab import mpl
from datetime import datetime

pd.set_option('expand_frame_repr', False)#True就是可以换行显示。设置成False的时候不允许换行
pd.set_option('display.max_columns', None)# 显示所有列
pd.set_option('colheader_justify', 'centre')# 显示居中

# token 自己到官网注册查看
pro = ts.pro_api('token')

mpl.rcParams['axes.unicode_minus'] = False  # 解决保存图像是负号'-'显示为方块的问题
df = pro.daily(ts_code='000001.SZ', start_date='20200301', end_date='20201001')
#df.sort_values(by='trade_date',ascending=False)
data = df.loc[:, ['trade_date', 'open', 'close', 'high', 'low', 'vol']]  #：取所有行数据，后面取date列，open列等数据
data = data.rename(columns={'trade_date': 'Date', 'open': 'Open', 'close': 'Close', 'high': 'High', 'low': 'Low', 'vol': 'Volume'})  #更换列名，为后面函数变量做准备
data.set_index('Date', inplace=True)  #设置date列为索引，覆盖原来索引,这个时候索引还是 object 类型，就是字符串类型。
data.index = pd.DatetimeIndex(data.index)  #将object类型转化成 DateIndex 类型，pd.DatetimeIndex 是把某一列进行转换，同时把该列的数据设置为索引 index。
data = data.sort_index(ascending=True)
my_color = mpf.make_marketcolors(up='green', down='red', edge='i', wick='i', volume='in')
my_style = mpf.make_mpf_style(marketcolors=my_color, gridaxis='both', gridstyle='-.', y_on_right=False)

mpf.plot(data, type='candle', mav=(5, 10, 20),style=my_style, volume=True, show_nontrading=False)