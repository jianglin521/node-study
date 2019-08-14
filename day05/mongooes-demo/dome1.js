/* Created by guan on 2019/8/14 */
const mongoose = require('mongoose');
// 连接MongoDB数据库
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
// 创建一个模型
// 就是设计数据库
// MongoDB是动态的，非常灵活，只需在代码中设计数据库就可以了
// mongooes就可以让你的设计过程非常简单
const Cat = mongoose.model('Cat', { name: String });

for( let i = 1; i < 100; i++) {
  // 实例化Cat
  const kitty = new Cat({ name: 'Zildjian' + i });
  // 持久化保存kitty实例
  kitty.save().then(() => console.log('meow' + i));
}


