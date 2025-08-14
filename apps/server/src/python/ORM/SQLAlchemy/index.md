# SQLAlchemy

## 简介
SQLAlchemy 是一个强大且灵活的 Python SQL 工具包，提供了完整的 ORM（对象关系映射）功能和原生 SQL 执行能力。它支持多种数据库，如 MySQL、PostgreSQL、SQLite 等，并且提供了两种不同的使用方式：Core（核心）和 ORM。Core 是一个底层的 SQL 抽象层，允许直接使用 SQL 语句；ORM 则是一个高层的抽象层，允许使用 Python 对象来操作数据库。

## 核心概念
### Engine（引擎）
Engine 是 SQLAlchemy 的核心组件，负责与数据库建立连接。它可以根据不同的数据库类型创建不同的连接。

### Session（会话）
Session 是 ORM 中用于与数据库交互的接口，通过 Session 可以执行数据库的增删改查操作。

### Model（模型）
Model 是 ORM 中用于映射数据库表的 Python 类，每个模型类对应一个数据库表，类的属性对应表的列。

## 安装
```bash
pip install sqlalchemy
```

## 基础使用示例
### 使用 Core 执行原生 SQL
```python
from sqlalchemy import create_engine, text

# 创建引擎
engine = create_engine('sqlite:///example.db')

# 执行 SQL 语句
with engine.connect() as conn:
    conn.execute(text("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)"))
    conn.execute(text("INSERT INTO users (name, age) VALUES (:name, :age)"), {'name': 'Alice', 'age': 25})
    conn.commit()
    result = conn.execute(text("SELECT * FROM users"))
    for row in result:
        print(row)
```

### 使用 ORM 操作数据库
```python
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 创建引擎
engine = create_engine('sqlite:///example.db')
Base = declarative_base()

# 定义模型
class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    age = Column(Integer)

# 创建表
Base.metadata.create_all(engine)

# 创建会话
Session = sessionmaker(bind=engine)
session = Session()

# 创建新用户
new_user = User(name='Bob', age=30)
session.add(new_user)
session.commit()

# 查询用户
users = session.query(User).all()
for user in users:
    print(f'ID: {user.id}, Name: {user.name}, Age: {user.age}')

# 关闭会话
session.close()
```

## 进阶功能
### 关系映射
SQLAlchemy 支持多种关系映射，如一对多、多对多等。以下是一个一对多关系的示例：
```python
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker

engine = create_engine('sqlite:///example.db')
Base = declarative_base()

class Author(Base):
    __tablename__ = 'authors'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    books = relationship('Book', back_populates='author')

class Book(Base):
    __tablename__ = 'books'
    id = Column(Integer, primary_key=True)
    title = Column(String)
    author_id = Column(Integer, ForeignKey('authors.id'))
    author = relationship('Author', back_populates='books')

Base.metadata.create_all(engine)
```

### 事务管理
SQLAlchemy 的 Session 会自动管理事务，也可以手动控制事务的提交和回滚：
```python
try:
    new_user = User(name='Charlie', age=35)
    session.add(new_user)
    session.commit()
except Exception as e:
    session.rollback()
    print(f'Error: {e}')
```

## 更多使用示例
### 数据更新
```python
# 查询用户
user = session.query(User).filter_by(name='Bob').first()
if user:
    # 更新用户信息
    user.age = 31
    session.commit()
    print('用户信息更新成功')
```

### 数据删除
```python
# 查询用户
user = session.query(User).filter_by(name='Charlie').first()
if user:
    # 删除用户
    session.delete(user)
    session.commit()
    print('用户删除成功')
```

### 复杂查询
#### 1. 条件查询
```python
# 查询年龄大于 25 岁的用户
users = session.query(User).filter(User.age > 25).all()
for user in users:
    print(f'ID: {user.id}, Name: {user.name}, Age: {user.age}')
```

#### 2. 排序查询
```python
# 按年龄降序排序查询用户
users = session.query(User).order_by(User.age.desc()).all()
for user in users:
    print(f'ID: {user.id}, Name: {user.name}, Age: {user.age}')
```

#### 3. 分页查询
```python
# 每页显示 10 条记录，查询第 2 页
page = 2
per_page = 10
users = session.query(User).limit(per_page).offset((page - 1) * per_page).all()
for user in users:
    print(f'ID: {user.id}, Name: {user.name}, Age: {user.age}')
```

### 执行原生 SQL
```python
# 执行原生 SQL 查询
result = session.execute('SELECT * FROM users WHERE age > :age', {'age': 25})
for row in result:
    print(row)
```

### 连接池配置
```python
from sqlalchemy.pool import QueuePool

# 配置连接池
engine = create_engine('sqlite:///example.db', poolclass=QueuePool, pool_size=5, max_overflow=10)
```

以上内容介绍了 SQLAlchemy 的基本概念、安装方法、基础使用示例、进阶功能以及更多使用示例，希望能帮助你更全面地掌握 SQLAlchemy。