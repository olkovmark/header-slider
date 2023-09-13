const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('calc', {
    style: 'calc',
    name: 'calc',
    title: 'Калькулятор',
  })
})

module.exports = router
