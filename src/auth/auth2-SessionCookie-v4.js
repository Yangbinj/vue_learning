//前端代码
async login() {
  await axios.post('/login', {
      username: this.username,
      password: this.password
  })
},
async logout() {
  await axios.post('/logout')
},
async getUser() {
  await axios.get('/getUser')
}

//中间件 auth.js
module.exports = async (ctx, next) => {
  if (!ctx.session.userinfo) {
    ctx.body = {
      ok: 0,
      message: "用户未登录" };
  } else {
    await next();
} };
//需要验证的接口
router.get('/getUser', require('auth'), async (ctx) => {
  ctx.body = {
    message: "获取数据成功",
    userinfo: ctx.session.userinfo
  }
})
//登录
router.post('/login', async (ctx) => {
  const {
    body
  } = ctx.request
  console.log('body', body)
  //设置session
  ctx.session.userinfo = body.username;
  ctx.body = {
    message: "登录成功"
  }
})
//登出
router.post('/logout', async (ctx) => {
  //设置session
  delete ctx.session.userinfo
  ctx.body = {
    message: "登出系统"
  }
})