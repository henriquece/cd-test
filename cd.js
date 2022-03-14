const express = require('express')
const fs = require('fs')

const server = express()

server.post('/', (req, res) => {
  console.log('POST /', req.headers, req.ip)

  res.send('Olaa')
})

server.listen(3000, () => {
  console.log('Running..')
})