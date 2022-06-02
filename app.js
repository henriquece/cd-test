const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('GET / 2222', 'utf-8')
  } else if (req.url === '/testt') {
    res.write('GET /testt', 'latin1')
  }

  res.end()
})

server.listen(3000, '0.0.0.0', () => { console.log('Running...') })