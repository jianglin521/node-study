/* Created by guan on 2019/6/20 */
/* 创建express服务 */
var express = require('express');
var bodyParser =  require('body-parser')
var app = express()

/* 提供静态资源服务 */
app.use('/node_modules', express.static('./node_modules'))
app.use('/public', express.static('./public'))

/* 配置使用art-template */
app.engine('html', require('express-art-template'))

/* 配置bodyParser */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var comments = [{
  name: '张三',
  message: '今天天气不错！',
  dateTime: '2015-10-16'
},
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

/* 模板引擎默认从views中查找 */
app.get('/', function (req, res) {
  res.render('index.html', {
    comments: comments
  })
})

app.get('/post', function (req, res) {
  res.render('post.html')
})

app.post('/post', function (req, res) {
  let comment = req.body
  console.log(comment)
  comment.dateTime = '2019-06-21'
  comments.unshift(comment)
  res.redirect('/')
})

app.listen(3000, function () {
  console.log('3000 runing...')
})
