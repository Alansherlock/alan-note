const mod = require('./02_cusmod');
console.log(mod.testVar);
mod.testFn();
// 调用02文件的方法，以及输出02文件的值，而此时外部书写的console.log也被打印了出来，因此，在做一些操作的时候，尽可能的书写在函数或者可被调用的作用域中，不会被立即执行来达到私密