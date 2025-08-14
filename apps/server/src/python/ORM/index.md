# Python ORM

## 简介
对象关系映射（Object Relational Mapping，简称 ORM）是一种程序设计技术，用于实现面向对象编程语言里不同类型系统的数据之间的转换。在 Python 里，ORM 可以将数据库表中的行与对象实例进行映射，让开发者可以使用面向对象的方式操作数据库，而无需编写复杂的 SQL 语句。

## 常见 Python ORM 库
### SQLAlchemy
SQLAlchemy 是一个强大且灵活的 Python SQL 工具包，提供了完整的 ORM 功能和原生 SQL 执行能力。它支持多种数据库，如 MySQL、PostgreSQL、SQLite 等。

### Django ORM
Django ORM 是 Django 框架自带的 ORM 系统，与 Django 框架深度集成，提供了简单易用的 API 来操作数据库。

### Peewee
Peewee 是一个轻量级的 ORM 库，设计简洁，易于学习和使用，适合小型项目。

## 简单示例 - 使用 SQLAlchemy
以下是使用 SQLAlchemy 进行数据库操作的简单示例：

```python
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# 创建数据库引擎
engine = create_engine('sqlite:///example.db')
Base = declarative_base()

# 定义数据模型
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
new_user = User(name='Alice', age=25)
session.add(new_user)
session.commit()

# 查询用户
users = session.query(User).all()
for user in users:
    print(f'ID: {user.id}, Name: {user.name}, Age: {user.age}')

# 关闭会话
session.close()
```

以上示例展示了如何使用 SQLAlchemy 创建数据库表、插入数据和查询数据。