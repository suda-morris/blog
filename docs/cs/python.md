## 𝙋𝙮𝙩𝙝𝙤𝙣 代码片段

## 文件拷贝
```python
def main():
    f1 = input("Enter a source file name:").strip()
    f2 = input("Enter a destination file name:").strip()

    infile = open(f1, 'r')
    outfile = open(f2, 'w')

    count_lines = count_chars = 0
    for line in infile:
        count_lines += 1
        count_chars += len(line)
        outfile.write(line)

    print(count_lines, "lines and", count_chars, "chars copied")

    infile.close()
    outfile.close()


main()
```

## 数学库及其应用
![数学库及其应用](http://i.imgur.com/ashlYUy.png)

## 随机数库及其应用
![随机数库及其应用](http://i.imgur.com/s7wJNuN.png)

## Python异常处理机制
Python使用try...except...else...finally，可使程序不因运行错误而崩溃,异常捕获机制可以捕捉任何类型的错误，比如：输入非数值类型（NameError），输入无效的表达式(SyntaxError)等。只有当try中的语句没有发生异常，else语句才会被执行，finally无论有无异常都会被执行
```python
try:
	<body>
except <ErrorType1>:
	<handler1>
except <ErrorType2>:
	<handler2>
except:
	<handler0>
else:
	<process_else>
finally:
	<process_finally>
```

## ETC
1. 使用同步赋值语句实现x与y的值交换：x,y=y,x
2. val=pow(2,1000),用一行代码返回val结果的长度值:len(str(val))
3. 布尔运算符的优先级从高到低依次是：not，and，or
4. 对于数字的零值被认为是false，任何非零值都是true。对序列类型来说，空序列被认为是false，非空序列认为是true
5. 常用编码
	1. ASCII码是标准化字符集，用7个二进制位编码表示128个字符
	2. Unicode跨语言，跨平台，同意且唯一的二进制编码，每个字符两个字节长
	3. UTF8编码，可变长度的Unicode，英文对应1个字节，中文对应3个字节
6. python中字符串类型未编码，可以用encode()进行编码，decode()进行解码
![python中的编解码](http://i.imgur.com/6CefLm3.png)

## turtle库的常用指令
1. turtle库以屏幕中心为坐标原点
2. forward（distance）将箭头移到某一指定坐标
3. left（angle）/right（angle）向左/右旋转一个角度
4. penup（）提起笔，用于另起一个地方绘制时使用，与pendown()配对使用
5. goto(x,y)
6. home()
7. circle(radius)
8. speed()

## 使用turtle库绘制五角星
```python
import turtle

p = turtle.Turtle()
p.speed(3)
p.pensize(5)
p.color("black")
p.fillcolor("red")
p.begin_fill()
for i in range(5):
    p.forward(200)
    p.right(144)
p.end_fill()
```

## 使用turtle库绘制蟒蛇
```python
import turtle

def draw_snake(rad, angle, len, neckrad):
    for i in range(len):
        turtle.circle(rad, angle)
        turtle.circle(-rad, angle)
    turtle.circle(rad, angle, 2)
    turtle.fd(rad)
    turtle.circle(neckrad + 1, 180)
    turtle.fd(rad * 2 / 3)

def main():
    turtle.setup(1300, 800, 0, 0)
    pythonsize = 30
    turtle.pensize(pythonsize)
    turtle.pencolor("blue")
    turtle.seth(-40)
    draw_snake(40, 80, 5, pythonsize / 2)

main()
```

## 数据驱动的动态路径绘制
```python
import turtle


def main():
    turtle.title("数据驱动的动态路径绘制")
    turtle.setup(800, 600, 0, 0)

    pen = turtle.Turtle()
    pen.color('red')
    pen.width(5)
    pen.shape("turtle")
    pen.speed(5)

    result = []
    file = open("a.txt", 'r')
    for line in file:
        result.append(list(map(float, line.split(','))))
    print(result)

    for i in range(len(result)):
        pen.color((result[i][3], result[i][4], result[i][5]))
        pen.forward(result[i][0])
        if result[i][1]:
            pen.right(result[i][2])
        else:
            pen.left(result[i][2])

    pen.goto(0, 0)


if __name__ == '__main__':
    main()
```

## 使用蒙特卡洛方法估计圆周率的值
```python
from random import *
from math import  *
from time import *

DARTS = 1000000
hits = 0
clock()
for i in range(1,DARTS):
    x,y=random(),random()
    dist = sqrt(x**2+y**2)
    if(dist <= 1.0):
        hits = hits+1
pi = 4*(hits/DARTS)
print("Pi的值是:%s"%pi)
print("程序运行时间是 %-5.5ss"%clock())
```

##寻找素数
```python
for n in range(2,100):
    for x in range(2,n):
        if n % x == 0:
            print(n, "equals", x, "*", n//x)
            break;
    else:
        print(n, "is a prime number")
```

## 文件循环
```python
def main():
    file_name = input("What's the file path?")
    try:
        infile = open(file_name, 'r')
    except FileNotFoundError:
        print("\nFile not found")
    else:
        msum = 0.0
        count = 0
        line = infile.readline()
        while line != "":
            msum += eval(line)
            count += 1
            line = infile.readline()
        print("\nThe average of the numbers is", msum / count)


main()
```

## 图形用户界面
1. TKinter——Python标准GUI
	1. 15中常见的Tk控件
![常见的Tk控件](http://i.imgur.com/vyefEMa.png)
	2. 3种布局管理方法
![Tkinter三种几何管理方法](http://i.imgur.com/NEIDZxP.png)
	3. 控件的共同属性
![共同属性](http://i.imgur.com/QVe2hIH.png)

2. Graphics——基于Tkinter扩展
	1. GraphWin对象常用方法
![GraphWin对象常用方法](http://i.imgur.com/tgowXan.png)
	2. 图形对象通用方法
![图形对象通用方法](http://i.imgur.com/n6lAydo.png)
	3. Point对象方法
![Point对象方法](http://i.imgur.com/IKM5dHA.png)
	4. Line对象方法
![Line对象方法](http://i.imgur.com/nwyIK0E.png)
	5. Circle对象方法
![Circle对象方法](http://i.imgur.com/jmscbxO.png)
	6. Rectangle对象方法
![Rectangle对象方法](http://i.imgur.com/G67viyS.png)
	7. Oval对象方法
![Oval对象方法](http://i.imgur.com/4gQEpov.png)
    8. Polygon对象方法
![Polygon对象方法](http://i.imgur.com/y983x7H.png)
	9. Text对象方法
![Text对象方法](http://i.imgur.com/G9XjFhU.png)

3. Turtle——Python内置的图形库

## 使用graphics库实现交互式多边形绘制
```python
from graphics import *


def main():
    win = GraphWin("Draw a polygon", 300, 300)
    win.setCoords(0, 0, 300, 300)
    message = Text(Point(150, 20), "CLick on five points")
    message.draw(win)

    p1 = win.getMouse()
    p1.draw(win)
    p2 = win.getMouse()
    p2.draw(win)
    p3 = win.getMouse()
    p3.draw(win)
    p4 = win.getMouse()
    p4.draw(win)
    p5 = win.getMouse()
    p5.draw(win)

    polygon = Polygon(p1, p2, p3, p4, p5)
    polygon.setFill("peachpuff")
    polygon.setOutline("black")
    polygon.draw(win)

    message.setText("Click anywhere to quit.")
    win.getMouse()


main()
```

## 使用TKinter实现简单的聊天界面
```python
from tkinter import *
import time


def main():
    def send_msg():
        strMsg = "我：" + time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) + "\n"
        txtMsgList.insert(END, strMsg, 'greencolor')
        txtMsgList.insert(END, txtMsg.get('0.0', END))
        txtMsg.delete('0.0', END)

    def cancelMsg():
        txtMsg.delete('0.0', END)

    def send_msg_event(event):
        if event.keysym == "Up":
            send_msg()

    # 创建窗口
    t = Tk()
    t.title("与Python聊天中")

    # 创建Frame容器
    frmLT = Frame(width=500, height=320, bg="white")
    frmLC = Frame(width=500, height=150, bg="white")
    frmLB = Frame(width=500, height=30)
    frmRT = Frame(width=200, height=500)

    # 创建控件
    txtMsgList = Text(frmLT)
    txtMsgList.tag_configure("greencolor", foreground="#008c00")  # 创建tag

    txtMsg = Text(frmLC)
    txtMsg.bind("<KeyPress-Up>", send_msg_event)

    btnSend = Button(frmLB, text='发送', width=8, command=send_msg)
    btnCancel = Button(frmLB, text='取消', width=8, command=cancelMsg)

    imgInfo = PhotoImage(file="python.gif")
    lblImage = Label(frmRT, image=imgInfo)
    lblImage.image = imgInfo

    # 窗口布局
    frmLT.grid(row=0, column=0, columnspan=2, padx=1, pady=3)
    frmLC.grid(row=1, column=0, columnspan=2, padx=1, pady=3)
    frmLB.grid(row=2, column=0, columnspan=2)
    frmRT.grid(row=0, column=2, rowspan=3, padx=2, pady=3)

    # 固定大小
    frmLT.grid_propagate(0)
    frmLC.grid_propagate(0)
    frmLB.grid_propagate(0)
    frmRT.grid_propagate(0)

    btnSend.grid(row=2, column=0)
    btnCancel.grid(row=2, column=1)
    lblImage.grid()
    txtMsgList.grid()
    txtMsg.grid()

    t.mainloop()


main()
```

## 使用Turtle库绘制模拟时钟
```python
from turtle import *
from datetime import *


def Skip(step):
    penup()
    forward(step)
    pendown()


def mkHand(name, length):
    # 注册Turtle形状，建立表针Turtle
    reset()
    Skip(-length * 0.1)
    begin_poly()
    forward(length * 1.1)
    end_poly()
    handForm = get_poly()
    register_shape(name, handForm)


def Init():
    global secHand, minHand, hurHand, printer
    mode("logo")  # 重置Turtle指向北
    # 建立三个表针Turtle并初始化
    mkHand("secHand", 125)
    mkHand("minHand", 130)
    mkHand("hurHand", 90)
    secHand = Turtle()
    secHand.shape("secHand")
    minHand = Turtle()
    minHand.shape("minHand")
    hurHand = Turtle()
    hurHand.shape("hurHand")
    for hand in secHand, minHand, hurHand:
        hand.shapesize(1, 1, 3)
        hand.speed(0)
    # 建立输出文字Turtle
    printer = Turtle()
    printer.hideturtle()
    printer.penup()


def SetupClock(radius):
    # 建立表的外框
    reset()
    pensize(7)
    for i in range(60):
        Skip(radius)
        if i % 5 == 0:
            forward(20)
            Skip(-radius - 20)
        else:
            dot(5)
            Skip(-radius)
        right(6)


def Week(t):
    week = ["星期一", "星期二", "星期三",
            "星期四", "星期五", "星期六", "星期日"]
    return week[t.weekday()]


def Date(t):
    y = t.year
    m = t.month
    d = t.day
    return "%s %d %d" % (y, m, d)


def Tick():
    # 绘制表针的动态显示
    t = datetime.today()
    second = t.second + t.microsecond * 0.000001
    minute = t.minute + second / 60.0
    hour = t.hour + minute / 60.0
    secHand.setheading(6 * second)
    minHand.setheading(6 * minute)
    hurHand.setheading(30 * hour)

    tracer(False)
    printer.forward(65)
    printer.write(Week(t), align="center",
                  font=("Courier", 14, "bold"))
    printer.back(130)
    printer.write(Date(t), align="center",
                  font=("Courier", 14, "bold"))
    printer.home()
    tracer(True)

    ontimer(Tick, 100)  # 100ms后继续调用tick


def main():
    tracer(False)
    Init()
    SetupClock(160)
    tracer(True)
    Tick()
    mainloop()


if __name__ == "__main__":
    main()
```

## 使用turtle库绘制雪花图
```python
import turtle as tt
import random as rd


def ground():
    tt.hideturtle()
    tt.speed(100)
    for i in range(400):
        tt.pensize(rd.randint(5, 10))
        x = rd.randint(-400, 350)
        y = rd.randint(-280, -1)
        r = -y / 280
        g = -y / 280
        b = -y / 280
        tt.pencolor((r, g, b))
        tt.penup()
        tt.goto(x, y)
        tt.pendown()
        tt.forward(rd.randint(40, 100))


def snow():
    tt.hideturtle()
    tt.pensize(2)
    tt.speed(100)
    for i in range(100):
        r = rd.random()
        g = rd.random()
        b = rd.random()
        tt.pencolor(r, g, b)
        tt.penup()
        tt.setx(rd.randint(-350, 350))
        tt.sety(rd.randint(1, 270))
        tt.pendown()
        dens = rd.randint(8, 12)
        snowsize = rd.randint(10, 14)
        for j in range(dens):
            tt.forward(snowsize)
            tt.backward(snowsize)
            tt.right(360 / dens)


def main():
    tt.setup(800, 600, 0, 0)
    tt.tracer(False)
    tt.bgcolor("black")
    snow()
    ground()
    tt.tracer(True)
    tt.mainloop()


if __name__ == "__main__":
    main()
```

## Python库
1. [Python官网提供的Python库索引](https://pypi.python.org)
2. Python库的安装
	1. 自定义安装,去国内镜像站下载软件[国内pipy镜像站](http://pypi.douban.com/simple/)
	2. 使用pip工具
![pip常用命令](http://i.imgur.com/A358sfq.png)
	3. 文件安装，通过.whl文件安装
		1. pip inatall xxx.whl
3. pip工具的安装
	1. [pip源码下载地址](https://pypi.python.org/pypi/pip/)
	2. 解压后执行：python setup.py install即可

## OS库常用函数
1. OS库常用函数
![OS库常用函数](http://i.imgur.com/7a826hS.png)
2. os.path是处理操作系统的一个字库，os.path常用函数
![os.path常用函数](http://i.imgur.com/1vWI5ie.png)
3. os.walk(path)用于遍历一个目录，返回一个三元组
	1. root,dirs,files = os.walk(path)
	2. root是字符串，dirs和files是列表类型，表示root中的所有目录和所有文件

## sched库
1. sched库用来进行任务调度
2. sched.scheduler()用来创建一个调度任务
3. 当需要对一个任务进行时间调度时，用这个函数scheduler.enter(delay,priority,action,argument=())
	1. delay表示延时多少时间去执行
	2. priority表示优先级
	3. action是具体需要调度的函数
	4. argument表示action函数需要的参数变量
4. scheduler.run（）运行调度任务中的全部调度事件
5. scheduler.cancel(event)取消某个调度事件

## 函数定时执行
```python
import sched
import time


def print_time(msg='default'):
    print("当前时间", time.time(), msg)


s = sched.scheduler(time.time, time.sleep)
print(time.time())
s.enter(5, 1, print_time, argument=("延迟5秒，优先级1",))
s.enter(3, 2, print_time, argument=("延迟3秒，优先级2",))
s.enter(3, 1, print_time, argument=("延迟3秒，优先级1",))
s.run()
print(time.time())
```

## 打印某一个目录下的全部文件
```python
import os

path = input("请输入一个路径:")

for root, dirs, files in os.walk(path):
    for name in files:
        print(os.path.join(root, name))
```

## 打包发布python应用程序（使用py2exe库）
1. 确定python程序可以执行，比如lesson.py
2. 写一个发布脚本setup.py（与lesson.py同目录）,在里面指名需要调用运行的python程序
```python
from distutils.core import setup
import py2exe

setup(console=['lesson.py'])
```
3. 在命令行下执行python setup.py py2exe
4. 程序正确执行后会生成dist目录和__pycache__目录，前者包含了发布的exe程序，后者可以删除

## NumPy库
1. NumPy系统是Python的一种开源的数值计算扩展，能够存储和处理大型矩阵
	1. N维数组对象Array
	2. 函数库
	3. 实用的线性代数、傅里叶变换和随机数生成函数
2. NumPy提供了许多高级的数值编程工具
	1. 矩阵数据类型
	2. 矢量处理
	3. 运算库
3. NumPy的主要对象是同种元素的多维数组
	1. 维度叫做轴
	2. 轴的个数叫做秩
4. NumPy的数组类被称为ndarray，通常被称作数组
![ndarray主要属性](http://i.imgur.com/u1hf8bi.png)
	1. 创建数组
		1. 使用array函数，利用常规的Python列表和元祖创造数组，所创建的数组类型由原序列中的元素类型决定，例如：a=array([[1,2],[3,4]],dtype=complex)
		2. 使用占位符创建数组，例如函数zeros创建一个全是0的数组，函数ones创建一个全是1的数组，函数empty创建一个内容随机并且依赖于内存状态的数组
		3. 利用arrange创建数组：arrange(10,30,5),从10开始，每次加5，直到30(不包括)
	2. 打印数组，类似于嵌套列表
	3. 数组的算数运算按元素进行，NumPy中的乘法运算符*指示按元素计算
	4. 矩阵乘法可以使用dot函数或创建矩阵对象实现
	5. NumPy提供常见的数学函数如sin、cos和exp
	6. NumPy对于多维数组的运算，缺省情况下并不使用矩阵运算，对数组进行矩阵运算，可调用相应的函数
	7. NumPy库提供了matrix类，使用matrix类创建的是矩阵对象，他们的加减乘除运算采用矩阵方式计算
	8. 创建等比数列：numpy.logspace(1,10,3)表示在1到10中生成3个等比数列
	9. 创建结构数组：
		1. 声明结构数组类型：person=np.dtype({'names':['name','age'],'formats':['S32','i']})
		2. 创建结构数组：a = np.array([('zhang',12)],dtype=person)
		3. 访问结构数组的成员：`a[0]['name']`
5. 更高级的运算：NumPy线型代数子库linalg
	1. inv函数：计算逆矩阵
	2. solve函数：求解多元一次方程组

## Matplotlib库
1. Matplotlib是一个数据可视化函数库
2. pyplot子库提供了2D图表制作的基本函数
3. matplotlib提供的直方图绘制函数为hist()
4. matplotlib的image子库可用来对图像进行操作
	1. imread()函数将图像的各像素点的RGB值存入数组
	2. imshow()函数将存有RGB值的图像数组以图像的方式显示出来


## 使用Matplotlib库绘制曲线
```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-np.pi, np.pi, 256, endpoint=True)
y = np.sin(x)
z = np.cos(x * x)

plt.figure(figsize=(8, 4))
plt.plot(x, z, "ro", label="$cos(x^2)$")
plt.plot(x, y, label="$sin(x)$")

plt.xlabel("Time/s")
plt.ylabel("")
plt.legend()
plt.title("matplotlib")
plt.show()
```


## 使用Matplotlib子图的功能
```python
import numpy as np
import matplotlib.pyplot as plt

w = np.linspace(0.1, 1000, 1000)
p = np.abs(1 / (1 + 0.1j * w))

plt.subplot(221)
plt.plot(w, p, linewidth=2)
plt.ylim(0, 1.5)

plt.subplot(222)
plt.semilogx(w, p, linewidth=2)
plt.ylim(0, 1.5)

plt.subplot(223)
plt.semilogy(w, p, linewidth=2)
plt.ylim(0, 1.5)

plt.subplot(224)
plt.loglog(w, p, linewidth=2)
plt.ylim(0, 1.5)

plt.show()
```

## wxPython
1. wxPython是wxWidgets在python语言下的封装，wxWidgets是一个跨平台的GUI应用程序接口，使用C++编写
2. [对于Python3，wxPython的下载地址](http://wxpython.org/Phoenix/snapshot-builds/),注意选择对应的python版本号以及电脑的位数
3. 控件的事件
	1. 按钮点击
	2. 文本域内容的改变
	3. 鼠标滑过
	4. 鼠标双击
	5. 键盘按下

## 使用wxPython的绝对布局
```python
# -*-coding:utf8-*-
import wx

'''堆砌各个控件，基于坐标位置的控件绝对布局'''


class Lesson(wx.Frame):
    def __init__(self):
        wx.Frame.__init__(self, parent=None, id=-1, title=u'极客学院', size=(600, 600))
        panel = wx.Panel(self, -1)
        self.Centre()

        button = wx.Button(panel, label=u'我是按钮', pos=(20, 0), size=(100, 100))
        statictext = wx.StaticText(panel, -1, u'我是不能编辑的文本框', pos=(20, 100))
        text = wx.TextCtrl(panel, -1, u'请在这里输入内容', pos=(200, 210))
        password = wx.TextCtrl(panel, -1, u'请在这里输入内容', style=wx.TE_PASSWORD, pos=(200, 250))
        mutiText = wx.TextCtrl(panel, -1, u'我是多行\n文本框', style=wx.TE_MULTILINE, pos=(100, 300))
        checkBox1 = wx.CheckBox(panel, -1, u"我是复选框1", pos=(150, 20))
        checkBox2 = wx.CheckBox(panel, -1, u"我是复选框2", pos=(150, 40))

        radio1 = wx.RadioButton(panel, -1, u"我是单选按钮1", pos=(150, 60), style=wx.RB_GROUP)
        radio2 = wx.RadioButton(panel, -1, u"我是单选按钮2", pos=(150, 80))
        radio3 = wx.RadioButton(panel, -1, u"我是单选按钮3", pos=(150, 100))

        radioList = [u'一组单选按钮之1', u'一组单选按钮之2', u'一组单选按钮之3']
        wx.RadioBox(panel, -1, u"一组单选按钮", (10, 120), wx.DefaultSize, radioList, 2, wx.RA_SPECIFY_ROWS)

        jikexueyuan = [u'极', u'客', u'学', u'院', '1', '2', '3', '4', '5', '6']
        listBox = wx.ListBox(panel, -1, pos=(300, 20), size=(100, 100), choices=jikexueyuan, style=wx.LB_MULTIPLE)

        img = wx.Image(r'python.gif', wx.BITMAP_TYPE_ANY).Scale(100, 200)
        sb1 = wx.StaticBitmap(panel, -1, wx.BitmapFromImage(img), pos=(300, 300))


if __name__ == "__main__":
    app = wx.App()
    frame = Lesson()
    frame.Show()
    app.MainLoop()
```

## 使用wxPython的相对布局
```python
# -*-coding:utf8-*-

import wx

'''基于Sizer的控件相对布局'''


class Lesson(wx.Frame):
    def __init__(self):
        wx.Frame.__init__(self, parent=None, id=-1, title=u'极客学院', size=(600, 600))
        self.panel = wx.Panel(self, -1)
        self.Centre()

        # 定义我们需要的各个控件

        commandStatic = wx.StaticText(self.panel, -1, u'输命令:')
        writePyStatic = wx.StaticText(self.panel, -1, u'写代码:')

        commandText = wx.TextCtrl(self.panel, -1, u'')
        writePyText = wx.TextCtrl(self.panel, -1, u'''#-*-coding:utf-8-*-\n#在这写Python代码''',
                                  style=wx.TE_MULTILINE, size=(300, 200))

        send = wx.Button(self.panel, label=u'发送命令')
        clear = wx.Button(self.panel, label=u'清空命令')
        screen = wx.Button(self.panel, label=u'查看屏幕')

        serverList = ['192.168.0.4', '10.19.2.1', '192.168.0.111', '172.26.123.5', '192.168.6.11', '192.99.8.8']
        server = wx.ListBox(self.panel, -1, size=(120, 100), choices=serverList, style=wx.LB_SINGLE)

        img = wx.Image(r'python_logo.gif', wx.BITMAP_TYPE_ANY).Scale(200, 200)
        screenBox = wx.StaticBitmap(self.panel, -1, wx.BitmapFromImage(img))

        # 基于BoxSizer布局
        # hBoxAll = wx.BoxSizer(wx.HORIZONTAL)
        # vBoxControl = wx.BoxSizer(wx.VERTICAL)
        # hBoxCommand = wx.BoxSizer(wx.HORIZONTAL)
        # vBoxWrite = wx.BoxSizer(wx.VERTICAL)
        # hBoxButton = wx.BoxSizer(wx.HORIZONTAL)
        #
        # hBoxCommand.Add(commandStatic, proportion=1, flag=wx.ALL | wx.EXPAND, border=5)
        # hBoxCommand.Add(commandText, proportion=2, flag=wx.ALL | wx.EXPAND, border=5)
        #
        # vBoxWrite.Add(writePyStatic, proportion=0, flag=wx.ALL | wx.EXPAND, border=5)
        # vBoxWrite.Add(writePyText, proportion=0, flag=wx.ALL | wx.EXPAND, border=5)
        #
        # vBoxControl.Add(hBoxCommand, proportion=0, flag=wx.ALL, border=5)
        # vBoxControl.Add(vBoxWrite, proportion=0, flag=wx.ALL, border=5)
        #
        # hBoxButton.Add(send, proportion=0, flag=wx.ALL, border=5)
        # hBoxButton.Add(clear, proportion=0, flag=wx.ALL, border=5)
        # hBoxButton.Add(screen, proportion=0, flag=wx.ALL, border=5)
        #
        # vBoxControl.Add(hBoxButton, proportion=0, flag=wx.ALL, border=5)
        #
        # hBoxAll.Add(server, proportion=1, flag=wx.ALL | wx.EXPAND, border=5)
        # hBoxAll.Add(vBoxControl, proportion=2, flag=wx.ALL | wx.EXPAND, border=5)
        # hBoxAll.Add(screenBox, proportion=3, flag=wx.ALL | wx.EXPAND, border=5)
        #
        # self.panel.SetSizer(hBoxAll)
        # hBoxAll.Fit(self)

        # 基于GridSizer布局
        # gridSizerAll= wx.GridSizer(rows=3, cols=3, hgap=5, vgap=5)
        # gridSizerAll.AddMany([(server, 0, wx.EXPAND), (commandStatic, 0, wx.EXPAND), (commandText, 0, wx.EXPAND),
        # (writePyStatic, 0, wx.EXPAND), (send, 0, wx.EXPAND), (clear, 0, wx.EXPAND),
        #                      (writePyText, 0, wx.EXPAND), (screen, 0, wx.EXPAND), (screenBox, 0, wx.EXPAND)])
        # self.panel.SetSizer(gridSizerAll)
        # gridSizerAll.Fit(self)

        #基于FlexGridSizer布局
        # flexGridSizerAll = wx.FlexGridSizer(rows=3, cols=3, hgap=5, vgap=5)
        # flexGridSizerAll.AddMany([(server, 0, wx.EXPAND), (commandStatic, 0, wx.EXPAND), (commandText, 0, wx.EXPAND),
        #                           (writePyStatic, 0, wx.EXPAND), (send, 0, wx.EXPAND), (clear, 0, wx.EXPAND),
        #                           (writePyText, 0, wx.EXPAND), (screen, 0, wx.EXPAND), (screenBox, 0, wx.EXPAND)])
        # self.panel.SetSizer(flexGridSizerAll)
        #
        # flexGridSizerAll.AddGrowableCol(2, 1)
        # flexGridSizerAll.AddGrowableRow(2, 1)
        #
        # flexGridSizerAll.Fit(self)

        #基于GirdBagSizer布局
        gridBagSizerAll = wx.GridBagSizer(hgap=5, vgap=5)
        gridBagSizerAll.Add(server, pos=(0, 0),
                            flag=wx.ALL | wx.EXPAND,
                            span=(7, 2), border=5)

        gridBagSizerAll.Add(commandStatic, pos=(0, 2),
                            flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                            border=5)
        gridBagSizerAll.Add(commandText, pos=(0, 3),
                            flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                            span=(1, 2), border=5)

        gridBagSizerAll.Add(writePyStatic, pos=(1, 2),
                            flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                            span=(1, 3), border=5)
        gridBagSizerAll.Add(writePyText, pos=(2, 2),
                            flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                            span=(4, 3), border=5)
        gridBagSizerAll.Add(send, pos=(6, 2),
                            flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                            span=(1, 1), border=5)
        gridBagSizerAll.Add(clear, pos=(6, 3),
                            flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                            span=(1, 1), border=5)
        gridBagSizerAll.Add(screen, pos=(6, 4),
                            flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                            span=(1, 1), border=5)

        gridBagSizerAll.Add(screenBox, pos=(0, 5),
                            flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                            span=(7, 2), border=5)

        self.panel.SetSizer(gridBagSizerAll)

        self.SetSizeHints(250, 200, 700, 400)  # 设定窗口的最大最小值
        # gridBagSizerAll.AddGrowableCol(0, 1)
        # gridBagSizerAll.AddGrowableCol(1, 1)
        # gridBagSizerAll.AddGrowableCol(2, 1)
        # gridBagSizerAll.AddGrowableCol(3, 1)
        # gridBagSizerAll.AddGrowableCol(4, 1)
        # gridBagSizerAll.AddGrowableCol(5, 1)
        # gridBagSizerAll.AddGrowableCol(6, 1)
        #
        # gridBagSizerAll.AddGrowableRow(0, 1)
        # gridBagSizerAll.AddGrowableRow(1, 1)
        # gridBagSizerAll.AddGrowableRow(2, 1)
        # gridBagSizerAll.AddGrowableRow(3, 1)
        # gridBagSizerAll.AddGrowableRow(4, 1)
        # gridBagSizerAll.AddGrowableRow(5, 1)
        # gridBagSizerAll.AddGrowableRow(6, 1)
        gridBagSizerAll.Fit(self)


if __name__ == "__main__":
    app = wx.App()
    frame = Lesson()
    frame.Show()
    app.MainLoop()
```

## wxPython事件编程
```python
# -*-coding:utf8-*-

import time

import wx

'''基于Sizer的控件相对布局'''


class Example3(wx.Frame):
    def __init__(self):
        wx.Frame.__init__(self, parent=None, id=-1, title=u'极客学院', size=(600, 600))
        self.panel = wx.Panel(self, -1)
        self.Centre()

        # 定义我们需要的各个控件

        commandStatic = wx.StaticText(self.panel, -1, u'输命令:')
        writePyStatic = wx.StaticText(self.panel, -1, u'写代码:')

        self.commandText = wx.TextCtrl(self.panel, -1, u'')
        self.writePyText = wx.TextCtrl(self.panel, -1, u'''#-*-coding:utf-8-*-\n#在这写Python代码''',
                                       style=wx.TE_MULTILINE, size=(300, 200))

        self.send = wx.Button(self.panel, label=u'发送命令')
        self.clear = wx.Button(self.panel, label=u'清空命令')
        self.screen = wx.Button(self.panel, label=u'查看屏幕')

        self.serverList = ['192.168.0.4', '10.19.2.1', '192.168.0.111', '172.26.123.5', '192.168.6.11', '192.99.8.8']
        self.server = wx.ListBox(self.panel, -1, size=(120, 100), choices=self.serverList, style=wx.LB_SINGLE)

        img = wx.Image(r'python_logo.gif', wx.BITMAP_TYPE_ANY).Scale(200, 200)
        self.screenBox = wx.StaticBitmap(self.panel, -1, wx.BitmapFromImage(img))

        self.Bind(wx.EVT_BUTTON, self.onSend, self.send)
        self.Bind(wx.EVT_BUTTON, self.onClear, self.clear)
        self.Bind(wx.EVT_BUTTON, self.onScreen, self.screen)

        # 基于GirdBagSizer布局
        self.gridBagSizerAll = wx.GridBagSizer(hgap=5, vgap=5)
        self.gridBagSizerAll.Add(self.server, pos=(0, 0),
                                 flag=wx.ALL | wx.EXPAND,
                                 span=(7, 2), border=5)

        self.gridBagSizerAll.Add(commandStatic, pos=(0, 2),
                                 flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                                 border=5)
        self.gridBagSizerAll.Add(self.commandText, pos=(0, 3),
                                 flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                                 span=(1, 2), border=5)

        self.gridBagSizerAll.Add(writePyStatic, pos=(1, 2),
                                 flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                                 span=(1, 3), border=5)
        self.gridBagSizerAll.Add(self.writePyText, pos=(2, 2),
                                 flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                                 span=(4, 3), border=5)
        self.gridBagSizerAll.Add(self.send, pos=(6, 2),
                                 flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                                 span=(1, 1), border=5)
        self.gridBagSizerAll.Add(self.clear, pos=(6, 3),
                                 flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                                 span=(1, 1), border=5)
        self.gridBagSizerAll.Add(self.screen, pos=(6, 4),
                                 flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                                 span=(1, 1), border=5)

        self.gridBagSizerAll.Add(self.screenBox, pos=(0, 5),
                                 flag=wx.ALL | wx.ALIGN_CENTER_VERTICAL,
                                 span=(7, 2), border=5)

        self.panel.SetSizer(self.gridBagSizerAll)

        # self.SetSizeHints(250, 200, 700, 400) #设定窗口的最大最小值
        self.gridBagSizerAll.AddGrowableCol(0, 1)
        self.gridBagSizerAll.AddGrowableCol(1, 1)
        self.gridBagSizerAll.AddGrowableCol(2, 1)
        self.gridBagSizerAll.AddGrowableCol(3, 1)
        self.gridBagSizerAll.AddGrowableCol(4, 1)
        self.gridBagSizerAll.AddGrowableCol(5, 1)
        self.gridBagSizerAll.AddGrowableCol(6, 1)

        self.gridBagSizerAll.AddGrowableRow(0, 1)
        self.gridBagSizerAll.AddGrowableRow(1, 1)
        self.gridBagSizerAll.AddGrowableRow(2, 1)
        self.gridBagSizerAll.AddGrowableRow(3, 1)
        self.gridBagSizerAll.AddGrowableRow(4, 1)
        self.gridBagSizerAll.AddGrowableRow(5, 1)
        self.gridBagSizerAll.AddGrowableRow(6, 1)
        self.gridBagSizerAll.Fit(self)

    def onSend(self, event):
        time.sleep(0.5)
        if self.server.GetSelection() != -1:
            server = self.serverList[self.server.GetSelection()]
        else:
            server = u'未选择服务器'
        command = self.commandText.GetValue()
        writePy = self.writePyText.GetValue()
        print(u'选中的服务器是： %s' % server)
        print(u'执行的内置命令是： %s' % command)
        print(u'写入的Python代码是:\n%s' % writePy)

    def onClear(self, event):
        self.commandText.Clear()
        self.writePyText.Clear()
        self.writePyText.AppendText(u'''#-*-coding:utf-8-*-\n#在这些Python代码''')

    def onScreen(self, event):
        img = wx.Image(r'python.gif', wx.BITMAP_TYPE_ANY).Scale(300, 200)
        self.screenBox.SetBitmap(wx.BitmapFromImage(img))
        self.gridBagSizerAll.Fit(self)


if __name__ == "__main__":
    app = wx.App()
    frame = Example3()
    frame.Show()
    app.MainLoop()
```

## Python中的多线程编程
1. thread.start_new_thread(函数名，（参数1，参数2，···）)
2. 或者使用Threading模块创建线程

## scipy库
1. 解非线性方程组
	1. scipy.optimize子库中的fsolve函数：fsolve(函数, 初始解, 雅可比矩阵)
```python 求解非线性方程组
from math import sin, cos

from scipy.optimize import fsolve


def func(x):
    x0, x1, x2 = x.tolist()
    return [
        5 * x1 + 3,
        4 * x0 * x0 - 2 * sin(x1 * x2),
        x1 * x2 - 1.5
    ]


def j(x):
    x0, x1, x2 = x.tolist()
    return [
        [0, 5, 0],
        [8 * x0, -2 * x2 * cos(x1 * x2), -2 * x1 * cos(x1 * x2)],
        [0, x2, x1]
    ]


r = fsolve(func, [1, 1, 1], fprime=j)
print(r)
```
2. 数值积分
	1. scipy.integrate子库中的quad函数：
	2. 一重积分：quad(函数，定积分下限，定积分上限)
	3. 双重积分：dblquad
	4. 三重积分：tplquad
```python 求解一重积分
from scipy.integrate import quad


def func(x):
    return (1 - x * x) ** 0.5


p, err = quad(func, -1, 1)
print(2 * p)
```
3. 求解常微分方程
	1. scipy.integrate子库中的odeint
```python 常微分方程组求解方法
from scipy.integrate import odeint
import numpy as np
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt


def lorenz(w, t, p, r, b):
    x, y, z = w
    return np.array([p * (y - x), x * (r - z), x * y - b * z])


t = np.arange(0, 30, 0.01)
track = odeint(lorenz, (0.0, 1.00, 0.0), t, args=(10.0, 28.0, 3.0))

fig = plt.figure()
ax = Axes3D(fig)
ax.plot(track[:, 0], track[:,1], track[:,2])
plt.show()
```
4. 数值微分
	1. scipu.misc子库中的derivative
```python 求解数值微分
import numpy as np
import matplotlib.pyplot as plt
from scipy.misc import derivative

Ex = lambda q: q ** 2
x0 = np.linspace(-10, 10, 1000)
dEx = derivative(Ex, x0, dx=1e-6)
plt.plot(x0, dEx)
plt.show()
```

## mpl_toolkits库
```python 3D效果图
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
import matplotlib.pyplot as plt

fig = plt.figure()
ax = Axes3D(fig)
th = np.linspace(-4 * np.pi, 4 * np.pi, 100)
z = np.linspace(-2, 2, 100)
r = z ** 2 + 1
x = r * np.sin(th)
y = r * np.cos(th)

ax.plot()
```
