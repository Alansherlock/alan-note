# 来了，熟悉的js对象,在这了叫做dict
d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
# 可以通过 in 判断key是否存在于d这个dict之中
print(d['Michael'],'Michael' in d)
# d.get(),通过这个方法可以取到dict中的值，
# 注意：返回None的时候Python的交互环境不显示结果。
print(d.get('Thomas'),1)
print(d.get('Michael'))
#和list比较，dict有以下几个特点：
#查找和插入的速度极快，不会随着key的增加而变慢；需要占用大量的内存，内存浪费多。而list相反：查找和插入的时间随着元素的增加而增加；占用空间小，浪费内存很少。所以，dict是用空间来换取时间的一种方法。dict可以用在需要高速查找的很多地方，在Python代码中几乎无处不在，正确使用dict非常重要，需要牢记的第一条就是dict的key必须是不可变对象。这是因为dict根据key来计算value的存储位置，如果每次计算相同的key得出的结果不同，那dict内部就完全混乱了。这个通过key计算位置的算法称为哈希算法（Hash）。要保证hash的正确性，作为key的对象就不能变。在Python中，字符串、整数等都是不可变的，因此，可以放心地作为key。而list是可变的，就不能作为key：

# 删除当前的 Michael
print(d.pop('Michael'),d)


# set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key。
# set 不是有序的，set会进行去重,通过add(key)方法可以添加元素到set中，可以重复添加，但不会有效果
print(set([1,2,3]));
print(set([1,2,3,3,3,3]));
setData = set([1,2,3]);
print(setData.add(4));
print(setData.add(3));

# remove(key)删除当前的key
print(setData.remove(3));

# set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作

a = set([1,2,3]);
b = set([2,3,4]);
print(a & b);# 2,3
print(a | b);# 1,2,3,4


## list是可变对象，而str不是，但是可以拿取替换后的值
# sort 排序
sortList = [1,3,2]
sorted = sortList.sort()
print(sorted,sortList)

# replace 替换字符串
replaceStr = 'abc'
replaced = replaceStr.replace('a','A')
print(replaceStr,replaced)
