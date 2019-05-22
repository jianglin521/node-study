/* Created by guan on 2019/5/21 */
/* 创建http服务 */
let http = require('http')

let server = http.createServer()

server.on('request', function (request, response) {
  let  test =  [
    {id: '1', title: '标题一'},
    {id: '2', title: '标题二'},
    {id: '3', title: '标题三'},
    {id: '4', title: '标题四'},
    {id: '5', title: '标题五'},
  ]
  response.writeHeader(200, {
    'Content-Type' : 'text/html;charset:utf-8'
  });
  //console.log(request.url, '添加测试');
  if (request.url === '/') {
    console.log('index page');
    response.end('index page')
  } else if (request.url === '/login') {
    console.log('login page');
    response.end(JSON.stringify(test))
  } else {
    console.log('other page');
    response.end('other page')
  }
})

server.listen(5000, '127.0.0.1', function () {
  console.log('127.0.0.1:5000 启动成功！');
})
