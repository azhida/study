from turtle import *

screensize(2000, 2000, 'white')  # 设置画布大小
# 绘制旗面
pencolor('red')
pu()
goto(-300, -200)
pd()
fillcolor('red')
begin_fill()
for i in range(0, 2):
    fd(600)
    lt(90)
    fd(400)
    lt(90)
end_fill()

# 绘制大五角星
pu()
pencolor('yellow')
goto(-260, 120)
pd()
fillcolor('yellow')
begin_fill()
for i in range(0, 5):
    fd(120)
    rt(144)
end_fill()

# 绘制四个小五角星
list1 = [(-100, 160), (-60, 120), (-60, 60), (-100, 20)]  # 四个五角星的中心坐标
list2 = [31.98, 8.13, -15.59, -38.66]  # 相对角度0的后退1.111需要左转的角度

for j in range(0, 4):
    seth(0)  # 这是龟头角度为0
    pu()
    goto(list1[j])  # 定位到五角星中心
    lt(list2[j])  # 旋转角度，以背向指向大五角星的角尖
    bk(1.111)  # 从五角星中心到指向大五角星的角尖（龟倒着爬）
    lt(18)  # 五角星的半角角度
    pd()
    fillcolor('yellow')
    begin_fill()
    for i in range(0, 5):
        fd(40)
        rt(144)
    end_fill()
pu()  # 抬起龟头
ht()  # 隐藏龟头
done()  # 保持