# Python 导出 CSV 文件

## 使用 pandas

```py
import pandas as pd

data = {
    'name': ['张三','李四', '王五'],
    'age': [10, 20, 30]
}

df = pd.DataFrame(data)
filename = 'data.csv'
df.to_csv(filename, index=False)
```