/* Created by guan on 2019/5/21 */
/* 文件的读写 */
let fs = require('fs')

/* 文件的读取 */
fs.readFile('./test.txt', function (error, data) {
  if (error) {
    console.log(error, '读取出现错误了');
    return
  }
  console.log(data.toString(), '读取成功了'); // toString() 将十六进制转换为十进制
})

/* 文件的写入 */
fs.writeFile('./test.txt', '我是写入的内容', function (error) {
  if (error) {
    console.log(error, '写入错误了');
    return
  }
  console.log('写入成功了');
})
