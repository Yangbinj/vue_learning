// 五、OAuth(开放授权)

// OAuth（Open Authorization）是一个开放标准，允许用户授权第三方网站访问他们存储在另外的服务提供者上的信息，而不需要将用户名和密码提供给第三方网站或分享他们数据的所有内容，为了保护用户数据的安全和隐私，第三方网站访问用户数据前都需要显式的向用户征求授权。我们常见的提供OAuth认证服务的厂商有支付宝，QQ,微信。
// OAuth协议又有1.0和2.0两个版本。相比较1.0版，2.0版整个授权验证流程更简单更安全，也是目前最主要的用户身份验证和授权方式。
// 关于OAuth相关文章，可以查看 OAuth 2.0 的一个简单解释、理解OAuth 2.0、OAuth 2.0 的四种方式

// 5.1 OAuth认证流程

// OAuth就是一种授权机制。数据的所有者告诉系统，同意授权第三方应用进入系统，获取这些数据。系统从而产生一个短期的进入令牌（token），用来代替密码，供第三方应用使用。
// OAuth有四种获取令牌的方式，不管哪一种授权方式，第三方应用申请令牌之前，都必须先到系统备案，说明自己的身份，然后会拿到两个身份识别码：客户端 ID（client ID）和客户端密钥（client secret）。这是为了防止令牌被滥用，没有备案过的第三方应用，是不会拿到令牌的。
// 在前后端分离的情境下，我们常使用授权码方式，指的是第三方应用先申请一个授权码，然后再用该码获取令牌。

// 5.2 GitHub第三方登录示例

// 我们用例子来理清授权码方式的流程。
// 在GitHub中备案第三方应用，拿到属于它的客户端ID和客户端密钥。
// 在github-settings-developer settings中创建一个OAuth App。并填写相关内容。填写完成后Github会给你一个客户端ID和客户端密钥。
// 此时在你的第三方网站就可以提供一个Github登录链接，用户点击该链接后会跳转到Github。这一步拿着客户端ID向Github请求授权码code。

const config = {
  client_id: '28926186082164bbea8f',
  client_secret: '07c4fdae1d5ca458dae3345b6d77a0add5a785ca'
}

router.get('/github/login', async (ctx) => {
  var dataStr = (new Date()).valueOf();
  //重定向到认证接口,并配置参数
  var path = "https://github.com/login/oauth/authorize";
  path += '?client_id=' + config.client_id;

  //转发到授权服务器
  ctx.redirect(path);
})
// 用户跳转到Github，输入Github的用户名密码，表示用户同意使用Github身份登录第三方网站。此时就会带着授权码code跳回第三方网站。跳回的地址在创建该OAuth时已经设置好了。http://localhost:3000/github/callback
// 第三方网站收到授权码，就可以拿着授权码、客户端ID和客户端密钥去向Github请求access_token令牌。
// Github收到请求，向第三方网站颁发令牌。
// 第三方网站收到令牌，就可以暂时拥有Github一些请求的权限，比如说拿到用户信息，拿到这个用户信息之后就可以构建自己第三方网站的token，做相关的鉴权操作。

router.get('/github/callback', async (ctx) => {
  console.log('callback..')
  const code = ctx.query.code;
  const params = {
    client_id: config.client_id,
    client_secret: config.client_secret,
    code: code
  }
  let res = await axios.post('https://github.com/login/oauth/access_token', params)
  const access_token = querystring.parse(res.data).access_token
  res = await axios.get('https://api.github.com/user?access_token=' + access_token)
  console.log('userAccess:', res.data)
  ctx.body = `
        <h1>Hello ${res.data.login}</h1>
        <img src="${res.data.avatar_url}" alt=""/>
    `

})