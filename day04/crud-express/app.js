/* Created by guan on 2019/6/23 */
/* 创建express服务 */
var express = require('express')
var fs = require('fs')
var app = express()

/* 提供静态资源服务 */
app.use('/node_modules', express.static('./node_modules'))
app.use('/public', express.static('./public'))

/* 配置使用art-template */
app.engine('html', require('express-art-template'))

app.get('/', function (req, res) {
  fs.readFile('./db.json', function (err, data) {
    if (err) {
      return res.status(500),send('server error!')
    }
    console.log(data.toString())
  })




  res.render('index.html', {
    fruits: [
      '苹果',
      '香蕉',
      '葡萄',
      '橘子'
    ]
  })
})

app.listen(3000, function () {
  console.log('running 3000...')
})
