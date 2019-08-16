/* Created by guan on 2019/8/14 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 1.连接MongoDB数据库
// 指定的连接数据库不需要存在，当你插入第一条数据库之后就会自动创建出来
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });


// 2.设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 值
// 约束的目的是保持数据的完整性，不要有脏数据
const userSchema = new Schema({
  username: {
    type: String,
    required: true // 必须有
  },
  password: {
    type: String,
    required: true
  },
  mail: {
    type: String
  }
});

// 3.将文档结构发布为模型
//   mongoose.model 方法就是用来将一个结构发布为 model
//   第一个参数: 传入一个大写的名词单数字符串来表示你的数据库名称
//              mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//              列如这里的 User 最终会变为 users 集合名称
//   第二个参数：架构 Schema
//
//   返回值：模型构造函数
const User = mongoose.model('User', userSchema);

// 4.当我们有了模型构造函数之后，就可以使用这个构造函数对 User 集合中的数据为所欲为了（正删改查）

// 新增
// const admin = new User({
//   username: '张三',
//   password: '123456',
//   mail: 'admin@admin.com'
// })
// admin.save(function (err, ret) {
//   if (err) {
//     console.log('保存失败');
//   } else {
//     console.log('保存成功');
//     console.log(ret, '我是ret');
//   }
// })

// 查询
/*User.find(function (err, ret) {
  if (err) {
    console.log('查询失败');
  } else {
    console.log('查询成功');
    console.log(ret, '我是ret');
  }
})*/

// 删除
/*User.remove({
  username: '张三',
},function (err, ret) {
  if (err) {
    console.log('删除失败');
  } else {
    console.log('删除成功');
    console.log(ret, '我是ret');
  }
})*/

// 更新
/*User.updateOne({
  id: '5d5609b1b0275230bc3d4031'
}, {
  password: '123',
  mail: 'test@test.com'
},function (err, ret) {
  if (err) {
    console.log(err,'更新失败');
  } else {
    console.log('更新成功');
    console.log(ret, '我是ret');
  }
})*/
