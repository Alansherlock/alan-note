const koa = require('koa');
const app =new koa();

const logger = async (ctx,next) => {
    console.log(ctx.mothod,ctx.host+ctx.url);
    await next();
}
app.use(logger);// 调用上面的 logger 中间件来执行
app.use(async (ctx,next) => { // next 用来把中间件的执行权交给下游的中间件
    ctx.body = 'Hello World';
});
//在next之前使用await关键字是因为next()会返回一个Promise对象，而在当前中间件中位于next()之后的代码会暂停执行，
//直到最后一个中间件执行完毕后，再自下而上依次执行每个中间件中next()之后的代码，类似于一种先进后厨的堆栈结构。

// koa-compose 可以用来合并中间件执行

