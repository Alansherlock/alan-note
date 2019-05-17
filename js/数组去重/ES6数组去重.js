    // 定义数组Aarr
    let arr = [1,1,2,3,4,5,6,6,6,7,8];
    /**
     * @API new Set 如果传递一个可迭代对象，它的所有元素将不重复地被添加到新的 Set中。如果不指定此参数或其值为null，则新的 Set为空。
     * @API Array.from  方法从一个类似数组或可迭代对象中创建一个新的数组实例，可以有类数组，字符串，new Set以及new Map
     * 在了解了Array.from和new Set的用法后得知可以这么去重 
     */

    let newArr = Array.from(new Set(arr));
    console.log(newArr);