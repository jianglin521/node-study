## 创建json服务
安装 `npm i -g json-server`

运行 `json-server --watch db.jsons`

## 语法
use runoob  // 创建库
show dbs // 展示所有库
db // 当前库
db.runoob.find()
db.runoob.insert({name:'菜鸟教程1'}) // 创建表
db.runoob.remove({name:'菜鸟教程1'}) // 删除数据
db.runoob1.drop() // 删除表
show collections // 显示集合
