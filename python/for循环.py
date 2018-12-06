# 循环
names = ['Michael', 'Bob', 'Tracy']
for name in names:
    print(name)
boy = (1,2,3)
for item in boy:
    print(item);

sum = 0
# Python提供一个range()函数，可以生成一个整数序列，再通过list()函数可以转换为list。
# 比如range(5)生成的序列是从0开始小于5的整数;
for x in range(101):
    sum = sum + x
print(sum)