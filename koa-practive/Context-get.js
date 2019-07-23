const koa = require('koa');

const app =new koa();
app.use(async ctx => {
    ctx.response.body = {
        url: ctx.request.url,
        query: ctx.request.query,
        queryString: ctx.request.querystring
    }
    // http://localhost:3000/?search=koa&keywords=context 直接启动服务访问则可以取到值（GET请求）
})
app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000');
});

