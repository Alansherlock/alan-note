# 判断语句，else if 简写为了elif;
age = 3
if age >= 18:
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('kid')
    
# 输入的是 字符串
s = input('birth: ')
# 转 number类型
birth = int(s)
if birth < 2000:
    print('00前')
else:
    print('00后')