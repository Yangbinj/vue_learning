const http = require('http')
console.log("http");
http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    return
  } else {
    res.setHeader('Set-Cookie', 'name=zhunny')
    res.end('Hello Cookie')
  }
}).listen(3000)