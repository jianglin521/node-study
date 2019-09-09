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
  res.render('login.html')
})

router.post('/login', async function (req, res) {
  const body = req.body

  try {
    const user = await User.findOne({email: body.email, password: md5(md5(body.password))})

    // 如果邮箱和密码匹配，则 user 是查询到的用户对象，否则就是 null
    if (!user) {
      return res.status(200).json({
        err_code: 1,
        message: '用户或者密码不存在'
      })
    }

    // 登录成功，使用 Session 记录用户的登陆状态
    req.session.user = user

    return res.status(200).json({
      err_code: 0,
      message: '登录成功'
    })
  } catch (err) {
    return res.status(500).json({
      err_code: 500,
      message: '服务器错误！'
    })
  }
})

/* 注册 */
router.get('/register', function (req, res) {
  res.render('register.html')
})

router.post('/register', async function (req, res) {
  const body = req.body
  try {
    if (await User.findOne({ email: body.email })) {
       return res.status(200).json({
        err_code: 1,
        message: '邮箱已存在!'
      })
    }

    if (await User.findOne({ nickname: body.nickname })) {
      return res.status(200).json({
        err_code: 2,
        message: '昵称已存在!'
      })
    }

    // 创建用户，执行注册
    const user = await new User(body).save()

    // 登录成功，使用 Session 记录用户的登陆状态
    req.session.user = user

    res.status(200).json({
      err_code: 0,
      message: '注册用户成功！'
    })
  } catch (err) {
    return res.status(500).json({
      err_code: 500,
      message: '服务器错误！'
    })
  }
})

/* 退出 */
router.get('/logout', function (req, res) {
  // 清除登录状态
  req.session.user = null

  // 重定向到登录页面
  res.redirect('/login')
})

module.exports = router

