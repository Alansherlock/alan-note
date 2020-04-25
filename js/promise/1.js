
// 函数的before
// 重写原型方法
// 高阶函数，1.一个函数传入函数  2.返回一个新的函数
// js的核心 是回调
Function.prototype.before = function(beforeFn) {
    return (...args)=>{// 箭头函数没有this指向，没有arguments,所以会向上级查找
        beforeFn();
        this(...args);
    }
}
// AOP 切片 装饰 把核心抽离，在核心基础上增加功能
const say = ()=>{
    console.log('说话');// 剩余运算符把所有的参数组成一个数组
}
const newSay = say.before(()=>{
    console.log('您好');
})
const newSay1 = say.before(()=>{
    console.log('天气很好');
})

newSay(1,2,3)
newSay1();
// react 的事务