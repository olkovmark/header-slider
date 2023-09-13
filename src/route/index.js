const express = require('express')
const router = express.Router()

router.get('/nav', function (req, res) {
  res.render('nav', {
    style: 'nav',
    name: 'nav',
    title: 'Nav',
  })
})

router.get('/', function (req, res) {
  res.render('scroll', {
    style: 'scroll',
    name: 'scroll',
    title: 'scroll',
  })
})

module.exports = router
