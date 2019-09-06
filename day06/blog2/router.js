/* Created by guan on 2019/9/6 */
const express = require('express')
const User = require('./models/user')

const router = express.Router()

router.get('/', function (req, res) {
  res.render('index.html')
})

/* 登录 */
router.get('/login', function (req, res) {
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
  console.log(req.body);
  const body = req.body

  //res.render('index.html')
})

module.exports = router

