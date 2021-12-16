import pandas as pd
s = pd.HDFStore('sh000001.h5','r')
df = s.get('data')
s.close()
print(df)