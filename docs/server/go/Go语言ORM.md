# Go语言ORM

比较好的Go语言ORM包括： xorm 与 gorm 



## XORM

xorm 是一个Go语言的ORM库，通过它可以很方便的操作数据库。它的设计重点是高性能和易用性。XORM支持多种数据库，包括 MySQL、PostgreSQL、SQLite、Oracle 和 SQL Server，并提供了丰富的查询语言。XORM还支持事务和缓存机制，可以提高数据库操作的性能。

```sh
# 添加依赖：
go get github.com/go-xorm/xorm
```

## GORM

GORM 是 Go 语言中最受欢迎的ORM框架之一。它具有易于使用的API和灵活的查询语言，支持多种类型的数据库，包括 MySQL、PostgreSQL、SQLite和SQL Server。 GORM 还提供了自动迁移功能，可以在应用程序启动时自动创建数据库表和字段。

```sh
# 添加依赖
go get gorm.io/gorm
go get gorm.io/driver/mysql
```


[GORM 中文文档](https://learnku.com/docs/gorm/v2)



## 区别

- 查询语言：GORM使用链式查询语法，而XORM使用结构体作为查询条件。XORM的查询语言更为灵活，可以支持更复杂的查询。
- 性能：XORM的性能比GORM更高，在大量数据的情况下，XORM能够更快地进行数据库操作。
- 易用性：GORM的API比XORM更易用，特别是对于没有ORM经验的开发者来说。
- 社区支持：GORM的社区比XORM更大，因此有更多的文档、示例和插件可以使用。