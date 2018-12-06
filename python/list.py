
# list,顾名思义其实就是数组
listData = ['Michael', 'Bob', 'Tracy']

# 获取当前list 长度
len(listData)

# 利用 append 追加值进入listData里面
listData.append('Adam')

# 利用 inset 插入值到list某个索引位置
listData.insert(1, 'Jack')

# 打印出list的长度值,利用索引获取list里面的每个的值
print(len(listData),listData[0],listData[1],listData[2]);

# 利用 pop 可以删除list末尾的值
listData.pop()

# 当pop传入索引值时候，可删除当前索引的值
listData.pop(1)

# 如果想要替换当前索引的值时，则可以直接给当前的索引传入另外一个值，直接就替换了
listData[0] = 'Alan'

# list 里面可以存储其他的类型
L = [1,'2',[1,'2'],True]
