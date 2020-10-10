const koa = require('koa')
// redis是一个键值服务器，可以专门放session的键值对。如何在koa中使用session:

const app = new koa()
const session = require('koa-session')

const redisStore = require('koa-redis')
const redis = require('redis')
const redisClient = redis.createClient(6379, 'localhost')

const wrapper = require('co-redis')
const client = wrapper(redisClient)

//加密sessionid
app.keys = ['session secret']

const SESS_CONFIG = {
  key: 'kbb:sess',
  //此时让session存储在redis中
  store: redisStore({ client })
}

app.use(session(SESS_CONFIG, app))

app.use(ctx => {
  //查看redis中的内容
  redisClient.keys('*', (errr, keys) => {
    console.log('keys:', keys)
    keys.forEach(key => {
      redisClient.get(key, (err, val) => {
        console.log(val)
      })
    })
  })
  if (ctx.path === '/favicon.ico') return
  let n = ctx.session.count || 0
  ctx.session.count = ++n
  ctx.body = `第${n}次访问`
})

app.listen(3000)