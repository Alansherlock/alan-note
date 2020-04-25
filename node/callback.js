// 传入一个callback函数
// Node异步编程 - callback
/*
一、回调格式规范:
error-first callback 
node-style callback
第一个参数是error，后面的参数才是执行结果
** 由于官方定义的是第一个参数抛出错误，所以假设第一个参数不为null，则断定为报错 **
*/
/**
 * 二、callback的难点
 * 异步流程控制
 * 回调地狱解决方案
 * npm:async.js 包
 * thunk
 */
function interview( callback ) { 
    // 3. 这里的异步任务是不能够被外围的try catch 捕获到异常的，
    setTimeout(()=>{
        if(Math.random<0.8) {
            // 第一个参数为异常抛出
            callback(null,'success');
        }else {
            // 4. 由于不能够被try catch 捕获到异常，因此我们这里还是使用callback来抛出我们所要定义的异常
            // throw new Error('fail');
            callback(new Error('fail'));
        }
    },500);
}
// 1. 使用try catch 来捕获异常
// try {
    interview((res)=>{
        // 5. 判断res是否为异常对象
        if(res instanceof Error) {
            return console.log('cry');
        }
        console.log('smile');
    });
// } catch(e) {
    // console.log('error',e);
// }

/**
 * 2. 抛出异常失败，报全局node错误，原因：
 * 调用栈机制和try catch捕获异常机制，
 * node事件循环，每个事件循环都是一个全新的调用栈，这一机制导致异步的定时器事件不与interview函数在同一栈队列，无法给catch到异常
 */