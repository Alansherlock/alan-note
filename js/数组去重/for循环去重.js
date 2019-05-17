// 定义数组Aarr
let arr = [1,1,2,3,4,5,6,6,6,7,8];
let newArr = [];
    /**
     * @API includes 有包含则等于true
     * @API indexOf  在数组或者字符串里面没有该值的时候输出-1，否则则输出索引
     * 在了解了includes或indexOf的用法后得知可以这么去重 
     */
for(let i = 0;i<arr.length;i++) {
    if(!newArr.includes(arr[i])) {
        newArr.push(arr[i])
    }
}
for(let i = 0;i<arr.length;i++) {
    if(newArr.indexOf(arr[i])===-1) {
        newArr.push(arr[i])
    }
}
console.log(newArr);