const koa = require('koa');
const app = new koa();
/**
 * 简单处理路由跳转，ctx.request.path，实际开发上可以使用中间件koa-router；
 */
app.use(async (ctx)=>{
    if(ctx.request.method === 'POST') {

    } else if (ctx.request.method === 'GET') {
        if(ctx.request.path !=='/') {
            ctx.response.type = 'html';
            ctx.response.body = '<a href="/">Go To Index</a>';
        }else {
            ctx.response.type = 'html';
            ctx.response.body = '泽浩个沙雕';
        }
    } else {
        ctx.response.body = 'Hello World';
    }
})
app.listen(3000);