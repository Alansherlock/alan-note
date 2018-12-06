# 循环
# names = ['Michael', 'Bob', 'Tracy']
# for name in names:
#     print(name)
# boy = (1,2,3)
# for item in boy:
#     print(item);

# sum = 0
# Python提供一个range()函数，可以生成一个整数序列，再通过list()函数可以转换为list。
# 比如range(5)生成的序列是从0开始小于5的整数;
# for x in range(101):
#     sum = sum + x
# print(sum)

# while 跳出循环弹出结果
a = 99;
while   a > 0:
        if a < 10 :
            # 这个格式一定要这样哟，我的妈
            break
        print(a)
        a = a -1

# continue 跳过某些循环
n = 0
while n < 10:
    n = n + 1
    if n % 2 == 0: # 如果n是偶数，执行continue语句
        continue # continue语句会直接继续下一轮循环，后续的print()语句不会执行
    print(n)
