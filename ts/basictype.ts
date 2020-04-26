// 基本类型声明
let isBoolean:boolean = false
let isNum:number = 20
let binaryNumber:number = 0b101
let isStr:string = 'str'
let desc:string = `my first ${isStr}`
let u:undefined = undefined
let n:null = null;
let str:string = null
let strr:string = undefined
let num:number = null
let num1:number = undefined
// 数组声明
let arr:number[] = [1,2,3]

// 元组声明 tuple语法
let arr1:[string,number] = ['1',1]


// interface 简单使用
interface Person {
  readonly id:number; // 只读
  age:number;
  name:string;
  male?:string; // ? 表示可以不写
}
let alan: Person =  {
  id:1,
  age:17,
  name:'刘泽浩'
}
// 函数声明
function add(x:number,y:number,z:number = 10):number {
  return x+y+z
}
add(2,3)

const fun = function(x:number,y:number,z:number = 10):number {
  return x+y+z
}
// fun(4,5)
// 函数表达式的可以重新赋值，但是变量也需要给到对应的入参类型
// const fun1:(x:number,y:number,z?:number)=>number = fun
// 不写对应的入参类型，ts则会进行类型推断赋予类型
const fun1 = fun
fun1(4,5)
