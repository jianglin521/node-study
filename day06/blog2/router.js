/* Created by guan on 2019/9/6 */
const express = require('express')
const md5 = require('blueimp-md5')
const User = require('./models/user')

const router = express.Router()

router.get('/', function (req, res) {
  //console.log(req.session.user);
  res.render('index.html', {
    user: req.session.user
  })
})

/* 登录 */
router.get('/login', function (req, res) {
  console.log();
  res.render('login.html')
})

router.post('/login', function (req, res) {
  //res.render('index.html')
})

/* 注册 */
router.get('/register', function (req, res) {
  res.render('register.html')
})

router.post('/register', function (req, res) {
  const body = req.body
  User.findOne({
    $or: [
      { email: body.email },
      { nickname: body.nickname }
    ]
  }, function (err, data) {
    if (err) {
      return res.status(500).json({
        err_code: 500,
        message: '服务器错误！'
      })
    }
    if (data) {
      // 邮箱或昵称已存在
      return res.status(200).json({
        err_code: 1,
        message: '邮箱或者昵称存在！'
      })
    }
    // 对密码进行 md5 重复加密
    body.password = md5(md5(body.password))

    // 存放数据
    new User(body).save((err, user) => {
      if (err) {
        return res.status(500).json({
          err_code: 500,
          message: '服务器错误！'
        })
      }

      // 注册成功，使用 Session 记录用户的登陆状态
      req.session.user = user

      // 注册成功
      return res.status(200).json({
        err_code: 0,
        message: '注册成功！',
        content: user,
      })
    });
  })
})

module.exports = router

