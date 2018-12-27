// 不改变原数组，返回新数组

// ## concat
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let twoArr = [1,[2]];
let arr3 = arr1.concat(arr2);
let arr4 = arr2.concat(arr1);
let arr5 = arr1.concat(twoArr);
console.log(arr1,arr2,arr3,arr4,arr5);
// [ 1, 2, 3 ] [ 4, 5, 6 ] [ 1, 2, 3, 4, 5, 6 ] [ 4, 5, 6, 1, 2, 3 ] [ 1, 2, 3, 1, [ 2 ] ]

// ## join()

let joinArr1 = [1,2,'A','B']
let joinArr2 = [3,4,'c','d']
let join1 = joinArr1.join('');
let join2 = joinArr2.join('');
console.log(join1,join2);

//## slice()

let sliceArr1 = [1,2,3,4,5,6];
let sliceArr2 = ['A','B','C','D'];
let sliceStr = 'abcdef'
let slice1 = sliceArr1.slice(1,2);
let slice2 = sliceArr2.slice(1,3);
let slice3 = sliceStr.slice(1,3);
//字符串的则是单个数如果是负数从后面截取
let slice4 = sliceStr.slice(-2);
console.log(slice1,slice2,slice3,slice4);

// ### every()

let evArr = [1,2,3];
let every1 = evArr.every((e)=> {
    console.log(e,'e');
    // 在这里记得是需要return的，e表示数组循环出来的每个值
    return e < 4
})
console.log(every1);


// ### map()

let mapArr = [1,2,3,4];
let map1 = mapArr.map((a,index,c) => {
    // 参数一为值，参数二为索引，参数三为原数组
    console.log(a,index,c)
    return a + 1;
})
console.log(map1)


// some()


let someArr = [1,2,3];
let some1 = someArr.some((e)=> {
    return e <2;
});
console.log(some1);

// filter()
let filterArr = [1,2,3];
let filter1 = filterArr.filter((e)=> e <2);
console.log(filter1);//[ 1 ]