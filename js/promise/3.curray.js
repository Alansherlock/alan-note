// 柯里化： 就是将一个函数拆分成多个函数
// 判断类型 Object.prototype.toString.call

const checkType = (content,type) =>{
    return (content,type)=>{
        return Object.prototype.toString.call(content) === `[object ${type}]`
    }
}

let types = ['Number','String','Boolean'];
let utils = {}
types.forEach(type =>{
    utils['is'+type] = checkType(type);
})
console.log(utils.isNumber('123'));
console.log(utils.isNumber('456'));

