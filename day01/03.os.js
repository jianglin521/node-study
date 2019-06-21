/* Created by guan on 2019/5/23 */
/* 获取设备信息 */
let os = require('os')
/* 获取CPU信息 */
console.log(os.cpus())
/* 获取内存信息 */
console.log(os.totalmem())
/* 获取主机名 */
console.log(os.hostname())
