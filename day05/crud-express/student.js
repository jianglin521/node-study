/* Created by guan on 2019/8/17 */
const mongoose = require('mongoose')
// 连接
mongoose.connect('mongodb://localhost/crud_test', { useNewUrlParser: true });

const Schema = mongoose.Schema

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0,1], // 枚举限定
    default: 0 // 默认
  },
  age: {
    type: Number
  },
  hobbies: {
    type: String
  }
})

// 直接导出模型构造函数
module.exports = mongoose.model('Student', studentSchema)
