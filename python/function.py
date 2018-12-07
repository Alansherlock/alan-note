# 内置函数

# 求绝对值 abs()

print(abs(-20), abs(20))

# 求最大最小值 max(),min()

print(max(1, 2, 3), min(2, 3, 5))

# 三种数据转换 int()转化为整数，float()转化为浮点数，str()转化为字符串,hex()转16进制

print(int('123'), str(23), float('12.3'), hex(12))

# 定义函数 def 函数名():


def getA(a):
    if a > 0:
        return a
    else:
        return -a


print(getA(100))

# 空函数 pass


def passFun(a):
    if a > 18:
        pass

# isinstance()内置函数判断数据类型，书写判断大小的函数，首先进行数据类型判断

def maxData(a,b):
    if not isinstance(a,(int,float)):
        raise TypeError('bad operand type')
    if not isinstance(b,(int,float)):
        raise TypeError('bad operand type')
    return max(a,b)

print(maxData(1,2))

# 函数返回tuple

import math

def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny

print(move(20,100,30))
