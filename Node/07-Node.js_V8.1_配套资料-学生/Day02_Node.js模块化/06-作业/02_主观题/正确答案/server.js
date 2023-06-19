const express = require('express')
const cors = require('cors')
const lodash = require('lodash')
const { stuNameArr } = require('./stuName.js')
const server = express()
server.use(cors())

server.get('/api/rand', (req, res) => {
  const rand = lodash.random(0, 10)
  const stuName = stuNameArr[rand]

  res.send(stuName)
})

server.listen(3000, () => {
  console.log('Web 服务启动了')
})