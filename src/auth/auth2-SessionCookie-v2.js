const http = require('http')
//此时session存在内存中
const session = {}
http.createServer((req, res) => {
  const sessionKey = 'sid'
  console.log(session);
  if (req.url === '/favicon.ico') {
    return
  } else {
    const cookie = req.headers.cookie
    //再次访问，对sid请求进行认证
    if (cookie && cookie.indexOf(sessionKey) > -1) {
      res.end('Come Back')
    }
    //首次访问，生成sid，保存在服务器端
    else {
      const sid = (Math.random() * 9999999).toFixed()
      res.setHeader('Set-Cookie', `${sessionKey}=${sid}`)
      session[sid] = { name: 'zhunny' }
      res.end('Hello Cookie')
    }
  }
}).listen(3000)