const express = require('express')
const fs = require('fs')
const { execSync } = require('child_process')

const server = express()

server.get('/', (req, res) => {
  console.log('GET /', req.headers, req.ip)

  res.send('GET root')
})

server.post('/', (req, res) => {
  console.log('POST /', req.headers, req.ip)

  res.send('POST root')

  execSync("sh ./deploy.sh")
})

server.listen(3000, () => {
  console.log('Running..')
})