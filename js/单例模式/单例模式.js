// var Singleton = function (name) {
//     this.name = name;
// };
// Singleton.prototype.getName = function () {
//     alert(this.name);
// };
// Singleton.getInstance = (function () {
//     var instance = null;
//     return function (name) {
//         if (!instance) {
//             instance = new Singleton(name);
//         }
//         return instance;
//     }
// })();
// 单例在这里的理解是如果形容是一座桥，则通过的人只能有一个，一旦有一个通过了，则通道关闭，然后每次只能访问到桥那边过去的那个人；
let test = function(x){
    this.name = x;
    // 当这个值有了之后则不会继续执行if语句中的赋值，直接返回当前对象存储的ins的值
    this.ins = null;
    console.log(this.name);
}
test.prototype.getName = function(name) {
    console.log(name);
}
test.fun = function(name) {
    if(!this.ins) {
        // 惰性单例,在需要的时候才实例了test对象
        this.ins = new test(name)
    }
    console.log(this.ins);
    return this.ins;
}
test.fun('123')
test.fun('456')
