/* Created by guan on 2019/9/23 */
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();


/*app.all('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  console.log(req)
  next();
});*/

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method == 'OPTIONS') {
         res.send(200);
     } else {
         next();
     }
});

app.use('/crmapi', proxy({
    target: 'http://localhost:8080/',
    changeOrigin: true,
    pathRewrite: {
      '^/crmapi': '/'
    }
  }, function (req) {
    console.log(req)
  })
)

app.listen(3000);




