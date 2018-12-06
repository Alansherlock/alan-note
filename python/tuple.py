# tuple, tuple一旦初始化就不能修改

# 因为tuple不可变，所以代码更安全。如果可能，能用tuple代替list就尽量用tuple。

# 由于tuple 是一个小括号，为了避免冲突，则在1后面加多一个逗号
print((1))
print((1,))

## “可变的”tuple,tuple的元素确实变了，但其实变的不是tuple的元素，而是list的元素。tuple一开始指向的list并没有改成别的list，
# 所以，tuple所谓的“不变”是说，tuple的每个元素，指向永远不变。

t = (1,2,['A','b'])
t[2][0] = 'B'
