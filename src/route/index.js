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
  res.render('index', {
    style: 'index',
    name: 'index',
    title: 'index',
  })
})
router.get('/communication', function (req, res) {
  res.render('communication', {
    style: 'communication',
    name: 'communication',
    title: 'communication',
  })
})

module.exports = router
