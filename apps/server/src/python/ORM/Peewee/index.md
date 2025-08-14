# Peewee

## 简介
Peewee 是一个轻量级、简洁且易于使用的 Python ORM（对象关系映射）库。它设计简单，学习曲线低，非常适合小型项目或者需要快速开发的场景。Peewee 支持多种数据库，如 SQLite、MySQL、PostgreSQL 等。

## 安装
使用 pip 可以轻松安装 Peewee：
```bash
pip install peewee
```

## 基础使用示例
### 定义模型
```python
from peewee import *

# 连接 SQLite 数据库
db = SqliteDatabase('example.db')

class BaseModel(Model):
    class Meta:
        database = db

class User(BaseModel):
    username = CharField(unique=True)
    password = CharField()
    email = CharField()
    join_date = DateTimeField()
```

### 初始化数据库
```python
# 连接数据库
db.connect()

# 创建表
db.create_tables([User])
```

### 插入数据
```python
from datetime import datetime

# 插入单条数据
user = User.create(
    username='john_doe',
    password='password123',
    email='john@example.com',
    join_date=datetime.now()
)

# 批量插入数据
users = [
    {'username': 'jane_doe', 'password': 'password456', 'email': 'jane@example.com', 'join_date': datetime.now()},
    {'username': 'bob_smith', 'password': 'password789', 'email': 'bob@example.com', 'join_date': datetime.now()}
]
User.insert_many(users).execute()
```

### 查询数据
```python
# 查询所有用户
for user in User.select():
    print(user.username, user.email)

# 条件查询
query = User.select().where(User.username == 'john_doe')
for user in query:
    print(user.username)

# 获取单条记录
user = User.get(User.username == 'john_doe')
print(user.email)
```

### 更新数据
```python
user = User.get(User.username == 'john_doe')
user.email = 'new_email@example.com'
user.save()
```

### 删除数据
```python
user = User.get(User.username == 'john_doe')
user.delete_instance()
```

## 关系映射
### 一对多关系
```python
class Tweet(BaseModel):
    user = ForeignKeyField(User, backref='tweets')
    message = TextField()
    created_date = DateTimeField(default=datetime.now)
    is_published = BooleanField(default=True)
```

### 查询关联数据
```python
# 获取某个用户的所有推文
user = User.get(User.username == 'jane_doe')
for tweet in user.tweets:
    print(tweet.message)
```

## 进阶用法
### 事务处理
```python
with db.atomic():
    # 在事务中执行多个操作
    User.create(username='alice', password='alice123', email='alice@example.com', join_date=datetime.now())
    User.create(username='charlie', password='charlie123', email='charlie@example.com', join_date=datetime.now())
```

### 原始 SQL 查询
```python
# 执行原始 SQL 查询
query = User.raw('SELECT * FROM user WHERE username = ?', 'jane_doe')
for user in query:
    print(user.username)
```

### 数据库迁移
虽然 Peewee 本身没有内置的迁移工具，但可以使用 `playhouse.migrate` 模块来进行数据库迁移：
```python
from playhouse.migrate import *

migrator = SqliteMigrator(db)

# 添加新字段
migrate(
    migrator.add_column('user', 'age', IntegerField(null=True))
)
```

以上内容介绍了 Peewee 的基本概念、安装方法、基础使用示例、关系映射以及进阶用法，希望能帮助你快速上手 Peewee。