/* Created by guan on 2019/5/31 */
// Apache功能实现
var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()

server.on('request', function (req, res) {
  var url = req.url
  if (url == '/') {
    fs.readFile('./test.html', function (err, date) {
      if (err) {
        res.end('文件不存在')
      } else {
        /* 读取文件目录 */
       /* fs.readdir('../day01', function (err, date) {
          console.log(date)
          if (err) {
            res.end('404 not found!')
          } else {
            res.end(date.toString())
          }
        })*/
        var ret = template.render(date.toString(), {
          name: '强强',
          age: '20',
          hobbies: [
            '写代码',
            '唱歌',
            '打豆豆'
          ],
          title: '我是测试页面标题'
        })
        res.end(ret)
      }
    })
  } else {
    res.end('404 not found')
  }
  console.log(url,'我是请求地址')
})

server.listen(3000, function () {
  console.log('http://localhost:3000');
})
