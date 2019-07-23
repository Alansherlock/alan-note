/**
 * ctx.response.status 请求状态如，200，404，500等
 * ctx.response.type 可以设置响应的Content-Type.如 'html','json','image/png',默认则是text/plain
 * ctx.response.rediect(url,[alt]),重定向到指定的URL页面
 */

const koa = require('koa');
const app = new koa();
/**
 * 简单处理路由跳转，ctx.request.path，实际开发上可以使用中间件koa-router；
 */
app.use(async (ctx)=>{
    ctx.response.status = 200;
    if(ctx.request.accepts('json')) {
        ctx.response.type = 'json';
        ctx.response.body = { data:'Hello World' };
    }else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>123</p>';
    }else {
        ctx.response.type = 'text';
        ctx.response.body = '456';
    }
})
app.listen(3000);