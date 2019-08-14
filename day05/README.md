## 创建json服务
安装 `npm i -g json-server`

运行 `json-server --watch db.jsons`

## 数据库连接、退出
```shell
  # 该命令默认连接本机MongoDB服务
  mongo
  # 连接状态输入exit退出连接
  exit
```

## MongoDB数据库基本概念
- 可以有多个数据库
- 一个数据可以有多个集合（表）
- 一个集合可以有多个文档（表记录）
- 文档结构灵活，没有任何限制

## 基本命令
show dbs // 查看所有数据库
db // 查看当前所在数据库
use 数据库名称 // 切换到指定数据库（如果没有创建）
show dbs // 展示所有库
db // 当前库
db.runoob.find()
db.runoob.insert({name:'菜鸟教程1'}) // 创建表
db.runoob.remove({name:'菜鸟教程1'}) // 删除数据
db.runoob1.drop() // 删除表
show collections // 显示集合

## 在node中操作MongoDB数据
1. 使用官网mongodb包来操作
    * `npm install mongodb`
    * [mongodb源码地址](https://github.com/mongodb/node-mongodb-native)
2. 使用第三方mongoose来操作MongoDB数据库
    * 对官网mongodb做了封装
    * `npm install mongoose`
    * [mongoose官网](http://mongoosejs.net/)

