/* Created by guan on 2019/9/5 */
let express = require('express')
let path = require('path')

let app = express()

/* 配置静态目录 */
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) // 默认就是 ./views 目录

app.get('/', function (req, res) {
  res.render('index.html', {
    name: '张三'
  })
})

app.listen(5000, function () {
  console.log('running...')
})
