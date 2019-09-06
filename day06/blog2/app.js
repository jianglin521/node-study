/* Created by guan on 2019/9/5 */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')


const app = express()

/* 配置静态目录 */
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) // 默认就是 ./views 目录

// 配置解析表单 POST 请求体插件（注意：一定要在 app.use(router) 之前 ）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/* 将路由挂载在app中 */
app.use(router)

app.listen(5000, function () {
  console.log('running...')
})
