// 客户端使用用户名跟密码请求登录
// 服务端收到请求，去验证用户名与密码
// 验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端
// 客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者Local Storage 里
// 客户端每次向服务端请求资源的时候需要带着服务端签发的 Token
// 服务端收到请求，然后去验证客户端请求里面带着的 Token（request头部添加Authorization），如果验证成功，就向客户端返回请求的数据 ，如果不成功返回401错误码，鉴权失败。

//前端代码
//axios的请求拦截器，在每个request请求头上加JWT认证信息
axios.interceptors.request.use(
    config => {
        const token = window.localStorage.getItem("token");
        if (token) {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        // Bearer是JWT的认证头部信息
            config.headers.common["Authorization"] = "Bearer " + token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
//登录方法：在将后端返回的JWT存入localStorage
async login() {
    const res = await axios.post("/login-token", {
        username: this.username,
        password: this.password
    });
    localStorage.setItem("token", res.data.token);
},
//登出方法：删除JWT
async logout() {
    localStorage.removeItem("token");
},
async getUser() {
    await axios.get("/getUser-token");
}