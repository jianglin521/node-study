## 简介
评论列表项目

## 服务器自动重启
安装 `npm install -g  nodemon`

启动 `nodemon app.js`

## 模板引擎
安装

```shell
npm install --save art-template
npm install --save express-art-template
```
配置

```node
/* 配置使用art-template */
app.engine('html', require('express-art-template'))
```

## express处理get
```node
  // express默认处理get
  let comment = req.query
```

## express处理post
安装

```shell
  npm install body-parser --save // 处理post
```

配置
```node
   // express 处理post必须引入中间件
   var bodyParser = require('body-parser')
   
   // body-parser配置
   // parse application/x-www-form-urlencoded
   app.use(bodyParser.urlencoded({ extended: false }))
   
   // parse application/json
   app.use(bodyParser.json())
   
  let comment = req.body
```
