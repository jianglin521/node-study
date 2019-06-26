/* Created by guan on 2019/6/23 */
/* 创建express服务 */
var express = require('express')
var bodyParser = require('body-parser')
var router = require('./router')

var app = express()

/* 提供静态资源服务 */
app.use('/node_modules', express.static('./node_modules'))
app.use('/public', express.static('./public'))

/* 配置使用art-template */
app.engine('html', require('express-art-template'))

/* 配置body数据 */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/* 配置路由 */
app.use(router)

app.listen(3000, function () {
  console.log('running 3000...')
})
