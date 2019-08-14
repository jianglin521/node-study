/* Created by guan on 2019/8/14 */
const mongoose = require('mongoose');
// 连接MongoDB数据库
// 指定的连接数据库不需要存在，当你插入第一条数据库之后就会自动创建出来
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
