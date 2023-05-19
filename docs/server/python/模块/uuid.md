# uuid - 彩色打印库，为Terminal添加色彩

uuid其实就是唯一标识符，它通过MAC地址、时间戳、命名空间、随机数和伪随机数来确保id的唯一性。

## 安装

```
pip install uuid
```

## 使用

```py
import uuid

str = uuid.uuid4()
print(str)
# 3843a22d-e6ed-4b00-afe4-b3daa0da387f
```