//后端代码
const jwt = require("jsonwebtoken");
const jwtAuth = require("koa-jwt");
//用来签名的密钥
const secret = "it's a secret";

router.post("/login-token", async ctx => {
  const { body } = ctx.request;
  //登录逻辑，略，即查找数据库，若该用户和密码合法，即将其信息生成一个JWT令牌传给用户
  const userinfo = body.username;
  ctx.body = {
    message: "登录成功",
    user: userinfo,
    // 生成 token 返回给客户端
    token: jwt.sign(
      {
        data: userinfo,
        // 设置 token 过期时间，一小时后，秒为单位
        exp: Math.floor(Date.now() / 1000) + 60 * 60
      },
      secret
    )
  };
});

//jwtAuth这个中间件会拿着密钥解析JWT是否合法。
//并且把JWT中的payload的信息解析后放到state中，ctx.state用于中间件的传值。
router.get(
  "/getUser-token",
  jwtAuth({
    secret
  }),
  async ctx => {
    // 验证通过，state.user
    console.log(ctx.state.user);
    ctx.body = {
      message: "获取数据成功",
      userinfo: ctx.state.user.data 
    };
  }
)
//这种密码学的方式使得token不需要存储，只要服务端能拿着密钥解析出用户信息，就说明该用户是合法的。
//若要更进一步的权限验证，需要判断解析出的用户身份是管理员还是普通用户。