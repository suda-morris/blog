# Altium Designer 基础

### 软件汉化

1. DXP->Preferences
2. 在System->General中选择Use localized resources复选框
3. 重启软件

### 恢复桌面布局

当文件桌面发生混乱时，可通过View->Desktop Layout->Default命令来恢复默认的桌面布局

### 公制与英制

$1mil = 1/1000inch = 0.0254mm$

### 设置图纸格点

图纸格点设置包括两个方面，一个是图纸的Snap捕捉格点，一个是可视格点，还有一个是电栅格（电气格点）。
1. snap捕捉格点：表示放置线时可以捕捉到放置端点位置的点。
2. 可视格点：表示可见到的网格大小
3. 电栅格：绘制原理图的导线时系统会以电栅格大小为半径，以光标所在位置为中心进行查找电气节点，如果在此范围内有电气节点则光标会自动移动到此电气节点上

### 视图的刷新

绘制原理图时，在完成滚动画面、移动元件等操作后，又会出现画面显示残留的斑点、线段或图形变性等问题。虽然这些内容不会影响电路的正确性，但是为了美观，通过View->Refresh命令可以使显示恢复

### 选择一个连接上的所有导线

选择Edit->Select->Connection命令，将鼠标指针移动到某个连接的导线上，单击，则该连接上的所有导线都被选中，并高亮地显示出来，元器件也被特殊标示出来

### 绘制椭圆曲线

在绘图工具栏中选择绘制椭圆，按Tab键，输入相应的配置参数后在不移动鼠标的情况下连续单击5次

### 使用Ultra Librarian软件自动生成原理图库和封装库

1. [下载ULib](http://webench.ti.com/cad/ULib.zip)，解压缩后安装
2. 打开软件，Load Data导入bxl文件(芯片厂商提供)
3. 选择输出格式为Altium Designer，然后Export，导出的文件一般放在软件目录的Exported下，比如D:\UltraLibrarian\Library\Exported
![数据文件导入](http://i.imgur.com/H9HAk1N.png)
4. 进入导出后的文件夹，用altium软件打开PrjScr工程文件
5. 在打开的软件中双击打开UL_Form.pas文件，并运行
6. 紧接着弹出的对话框中，选择导出文件夹下的【日期.txt]格式的文件
7. 完成后会在相同的目录下生成需要的库文件
![使用Altium软件完成余下工作](http://i.imgur.com/l3Mzy9u.png)

### 测量距离

快捷键：Ctrl+M

### Mechanical13和Mechanical15

1. Mechanical13用于代表元件封装本体外形
2. Mechanical15用于表示囊括元件外形（包括管脚）所需的最小矩形

### 从PCB文件生成封装库文件

1. Altium提供了一个从PCB文件生成封装库文件的功能，该功能自动创建一个封装库并将PCB文件中所有用到的元件封装导入该封装库
2. 方法：在PCB编辑器中单击：Design->Make PCB Library

### 敷铜

1. 印刷线路板上大面积的敷铜通常有两种，一种用作散热，一种用作屏蔽来减小干扰
2. 大面积敷铜上一般要开窗口（网状），这是由于印刷线路板板材的基板与铜箔之间的粘合剂在浸焊或长时间受热（如波峰焊），会产生挥发性气体无法排出，热量不易散发，以致产生铜箔膨胀、脱落现象。
3. 每个板卡都包含了大量敷铜多边形，在设计时一个方便的管理方法就是把他们堆放在一起，即所谓敷铜搁置，也称敷铜堆放。堆放敷铜多边形不会将他们删除，而是把它们放进PCB文件中保留其完整的定义，但在设计窗口中他们将不再出现。
4. 敷铜管理器：Tool->Polygon Pours->Polygon Manager

### PCB的组成部分

1. 元件：用于完成电路功能的各种器件
2. 铜箔：铜箔在电路板上可以表现为导线、焊盘、过孔和敷铜等
3. 丝印层：印刷电路板的顶层，采用绝缘材料制成。在丝印层上可以标注文字，注释电路板上的元件和整个电路板。丝印层还能起到保护顶层导线的功能
4. 印制材料：采用绝缘材料制成，用于支撑整个电路板

### PCB的板层

1. Altium Designer提供堆栈管理器对各层属性进行管理，在堆栈管理器中可以定义层的结构，看到堆栈层的立体效果。选择：Design->Layer Stack Manager
2. PCB工作层面可以分成以下几种类型：
	1. 信号层：即为用于建立电气连接的铜箔层
	2. 内平面：是专门用于建立电源网络的铜箔，可以算作信号层的一种
	3. 机械层：是用于支持电路板的印制材料层
	4. 掩膜层：为了方便焊接而设立的
		1. Top/Bottom Solder，阻焊层，是指印刷电路板要上绿油的部分。实际上这阻焊层使用的是负片输出，所以在阻焊层的形状映射到板子上以后，并不是上了绿油阻焊，反而是露出了铜皮。所以阻焊层的意思是在整片阻焊的绿油上开窗，目的是允许焊接，默认情况下，没有阻焊层的区域都要上绿油
		2. Top/Bottom Paste，锡膏防护层，这一层只要露出所有需要焊接的焊盘
	5. 丝印层：即电路板的说明文字层
	6. 其余层
		1. Drill Guide和Drill Drawing：用于描述钻孔图及钻孔位置
		2. Keep-out Layer：禁止布线层
		3. Multi-Layer：设置更多层面

### 电路板物理与电气边界

1. 电路板的物理边界由机械层1来定义
2. 电路板的电气边界由Keep-out层来定义
3. 一般物理边界与电气边界间距50mil即可。比如电路板大小为5000milX4000mil，那么电气边界大小为4900milX3900mil

### PCB设计规则

1. 一般每个特定的网络布线宽度规则需要添加一个规则名称，以便与其他网络区分
2. 通常为了降低布线间的耦合面积，减小干扰，不同层的布线需要设置成不同的走向。如双层板，默认状态下顶层为垂直走向，底层为水平走向。
3. 表贴式焊盘的引出导线一般都是引出一段长度后才开始拐弯，这样就不会出现和相邻焊盘太近的情况
4. 阻焊层扩展
	1. 通常阻焊层除焊盘或过孔外，整面都铺满阻焊剂。阻焊层的作用就是防止不该被焊上的部分被焊锡连接，回流焊就是靠阻焊层实现的。板子整面经过高温的锡水，没有阻焊层的裸露电路板就被粘锡焊接了，而有阻焊层的部分则不会粘锡。阻焊层的另一个作用是起到提高布线的绝缘性，防氧化和美观
	2. 阻焊剂印制到电路板上时，焊盘或过孔被空出，空出的面积要比焊盘或过孔大一些，这就是阻焊层扩展
5. 锡膏防护层扩展
	1. 表贴式组件在焊接前，先对焊盘涂一层锡膏，然后将组件粘在焊盘上，再用回流焊机焊接。通常在大规模生产时，标贴式焊盘的涂膏是通过一个钢模完成的。钢模上对应焊盘的位置按焊盘形状镂空，涂膏时将钢模覆盖在电路板上，将锡膏放在钢模上，用括板来回括，锡膏通过镂空的部位涂到焊盘上。PCB设计软件的锡膏层或锡膏防护层的数据就是用来制作钢模的，钢模上镂空的面积要比设计焊盘的面积小，这个差值便是锡膏防护层扩展，默认是0mil
6. 在数字电路中，是否为高频电路取决于信号的上升沿和下降沿，而不是信号的频率
7. 当系统工作在50MHz时，将产生传输线效应和信号完整性问题。当系统时钟达到120MHz时，除非使用高速电路设计知识，否则基于传统方法设计的PCB将无法工作。
8. 通常约定如果线传播延时大于数字信号驱动端的上升时间，则认为此类信号是高速信号并产生传输线效应
9. PCB上每英寸/单位的延时时间为0.167ns，但是如果过孔多，器件引脚多，布线上设置的约束多，延时将增大
10. 如果采用CMOS或TTL电路进行设计，工作频率小于10MHz时，布线长度应不大于7in。工作频率在50MHz以上时，布线长度应不大于1.5in。如果工作频率达到或超过75MHz时，布线长度应在1in。对于GaAs芯片最大的布线长度应为0.3in。
11. 解决传输线效应的另一个方法是选择正确的布线路径和终端拓扑结构。走线的拓扑结构是指一根网线的布线顺序以及布线结构。当使用告诉逻辑器件的时候，除非走线分支长度保持很短，否则边沿快速变化的信号将被信号主干走线上的分支走线所扭曲。通常情形下，PCB走线采用两种基本拓扑结构，即**菊花形**布线和**星形**布线。
12. 对于菊花形布线，布线从驱动端开始，一次到达各接收端。如果使用串联电阻来改变信号特性，串联电阻的位置应该紧靠驱动端。在控制走线的高次谐波干扰方面，菊花链走线效果最好。
13. 星形拓扑结构可以有效避免时钟信号的不同步问题，但在密度很高的PCB上手工完成布线十分困难。采用自动布线器是完成星形布线的最好方法。每条分支上都需要终端电阻。终端电阻的阻值应和连线的特征阻抗相匹配。
14. 等长网络布线规则也称为匹配网络长度规则，用于设置指定网络等长布线规则。该规则以规定范围中的最长布线为基准，使其他网络通过匹配调整操作，以增长布线的形式在设定的公差范围内与之等长。增长的布线按设定的迂回模式（折现模式）进行布线。
15. 在高速PCB设计时，设计者总是希望过孔越小越好，这样板上就可以有更多的布线空间。此外，过孔越小，其自身的寄生电容也越小，更适合用于高速电路。但孔尺寸的减小同时带来了成本的增加。当孔的深度超过钻孔直径的6倍时，就无法保证孔壁能均匀镀铜。随着激光钻孔技术的发展，钻孔的尺寸越来越小，一般直径小于等于6mil的过孔称为微孔。
16. 过孔在传输线上表现为阻抗不连续的断点，会造成信号的反射。一般过孔的等效阻抗比传输线低12%左右。但过孔因为阻抗不连续而造成的反射其实是微乎其微的，其反射系数仅为0.06，过孔产生的问题更多的集中在寄生电容和电感的影响。过孔的寄生电容会给电路造成的主要影响是延长了信号的上升时间，降低了电路的速度。
17. 在实际设计中可以通过增大过孔和敷铜区的距离或者减小焊盘的直径来减小寄生电容
18. 在高速数字电路的设计中，过孔的寄生电感带来的危害往往大于寄生电容的影响。它的寄生串联电感会削弱旁路电容的贡献，减弱整个电源系统的滤波效用。
19. 如果要在PCB文件中有几个电源和地线，则需要建立布线类规则来增加电源和地线的宽度


### 添加泪滴及敷铜

1. 添加泪滴是指在导线与焊盘/过孔的链接处添加一段过渡铜箔，过渡铜箔呈现泪滴状。泪滴的作用是增加焊盘/过孔的机械强度，避免应力集中在导线与焊盘/过孔的连接处，而使连接处断裂或焊盘/过孔脱落。单击Tools->Teardrops
2. 网格状填充区又称敷铜，敷铜就是将电路板中空白的地方铺满铜箔，添加敷铜不仅仅是为了好看，最主要的目的是提高电路板的抗干扰能力，起到屏蔽外界干扰的效果，通常将敷铜接地，这样电路板中空白的地方就铺满了接地的铜箔。

### 修改PCB的形状大小

1. 在PCB页面用Keep-Out Layer画出所需板子的大小形状，必须是封闭的形状
2. 选中画出的这些封闭的框框
3. Design->Board Shape->Define from selected objects

### PCB Logo制作

1. DXP->Run Script
2. 选择PCB Logo Creator下的工程文件
![PCB Logo Creator脚本工程](http://i.imgur.com/1NjlZbw.png)
3. 选择RunConverterScript，点击OK
![选择bmp图片开始转换](http://i.imgur.com/BXtrhYj.png)
4. 点击Load选择需要使用的bmp位图
5. 选择好丝印层，点击Convert，等待转换结束

### 硬件构件化电路原理图绘制的规则

1. 硬件构建分类
	1. 核心构件：只提供接口，没有需求接口，比如芯片的硬件最小系统
	2. 中间构件：既有需求接口，又有提供接口，比如232电平转换构件
	3. 终端构件：只有需求接口，比如LCD构件
2. 通用规则
	1. 元器件命名格式
		1. 核心构件：其元器件直接编号命名，同种类型的元件命名时冠以相同的字母前缀，如R1，R2
		2. 中间构件和终端构件：元器件命名格式采用“构件名-标志字符？”，例如LCD构件中所有的电阻名称统一为“LCD-R”
	2. 为硬件构件添加详细的文字描述
	3. 将前两歩产生的内容封装在一个虚线框内，组成硬件构件的内部实体
	4. 为该硬件构件添加与其他构件交互的输入、输出接口标识。接口标识有两种
		1. 接口注释：位于虚线框内，是为构件接口所作的解释性文字，采用斜体
		2. 接口网标：位于虚线框外，具有电气特性
3. 核心构件设计规则
	1. 核心构件的接口标识均为网标，若同意引脚具有不同功能，则接口网标依据第一功能选项命名
4. 中间构件设计规则
	1. 描述需求接口采用接口注释，描述提供接口采用接口网标
	2. 直观起见，将构件的需求接口放置在构件实体的左侧，提供接口放置在右侧
	3. 接口网标的命名规则是：构件名称-引脚信号/功能名称
	4. 接口注释名称前的构件名称可有可无
5. 终端构件设计规则
	1. 接口标识均为斜体标注的接口注释

### 布线总结

1. 按小键盘的*键或大键盘的数字2键添加一个过孔
2. 按L键可以切换布线层
3. 按数字3可设定最小线宽、典型线宽、最大线宽的值进行切换
4. 差分布线
	1. 差分网络是两条存在耦合的传输线，一天携带信号，另一条则携带它的互补信号。使用差分对布线前要对设定差分对网络进行设置。设置可以在原理图中设置，也可以在PCB中进行设置
	2. 原理图中添加差分对规则:在命名差分对网络时，必须保证网络名的前缀是一样的，后缀中用下划线带一个N和一个P字母即可。命名好之后，点击菜单Place->Directives->DifferentialPair命令，在差分对上放置两个差分图标

### Altium中绘制自定义焊盘

1. 在Top Overlay层绘制自定义焊盘的轮廓
![绘制自定义焊盘的轮廓](http://i.imgur.com/Jjnolr0.png)
2. 选中轮廓，Tool->Convert->Create Region from Selected Primitives
![创建Region](http://i.imgur.com/tF5WMEs.png)
3. 将创建的Region放置在Top Layer上
![将创建的Region放置在Top Layer上](http://i.imgur.com/5uMSDDr.png)
4. 复制刚才得到的Region两次，分别放置在Top Paste和Top overlay层
![Top Paste和Top overlay层](http://i.imgur.com/OXxOcYs.png)
5. 将Top Lay和Top paste，Top overlay层的图形重叠在一起，摆放到合适位置后，双击Top Layer的Region，打开Mask选项
![打开Mask扩展选项](http://i.imgur.com/UuPNroi.png)
6. 在自定义Region中间防止一个小焊盘，标上正确的Designator
![放置焊盘](http://i.imgur.com/GmmOFit.png)
7. 将新创建的封装库放到PCB文件中会出现警告信息，比如短路，需要在PCB界面中，使用design->netlist->configure physical nets来对这些无网络的元素进行处理
![处理无网络的元素](http://i.imgur.com/XuST9Vf.png)

### 6层板的层叠设置

1. Top层
2. GND2层
3. Signal3层
4. PWR4层
5. GND5层
6. Bottom层

### 常用快捷键

1. 单层与多层显示切换：Shift+S
2. 切换走线规则：Shift+R
3. 选择走线线宽：Shift+W
4. L打开层设置开关选项
5. S打开选择：S+L(线选)、S+I(框选)
6. J跳转：J+C(跳转到器件)、J+N(跳转到网络)
7. Q英寸和毫米切换
8. Delete删除已被选择的对象，E+D点选删除
9. 切换层：小键盘上面的“+”、“-”
10. A+T：向上对齐、A+L：向左对齐、A+R：向右对齐、A+B：向下对齐
11. 测量：Ctrl+M（哪里要测点哪里）、R+P（测量边距）
12. 改变走线模式：Shift+空格
13. 选择过孔：Shift+W
14. 等间距走线：T+T+M（不可更改间距），P+M（可更改间距）
15. 走线时显示走线长度：Shift+g
16. 选中物理连接：Ctrl+H
17. Objects的显示与隐藏：Ctrl+D
18. 单端蛇形线走线：T+R
19. 清除错误标记：T+M
20. Shift+空格键，在交互布线的过程中，切换布线形状

### 用户自定义快捷键

1. 按住Ctrl点击需要自定义的命令图标，输入自定义的按键，如F2，F3等

### 多层板的添加与编辑

1. 电源和地一般选择**负片**，信号层采用**正片**

### 常用的全局操作

1. 更改丝印字体大小
2. 过孔盖油

### Chip器件的扇孔方式

![Chip器件的扇孔方式](http://i.imgur.com/3bxldlP.png)

### 查看网络线的长度

* Ctrl+鼠标中间

### 调整丝印位号到器件中心

* 全选过后A+P

### USB的阻抗匹配与电源完整性

* 通常设计差分线采用5mil的线宽以及5.5mil的线距即可满足差分阻抗90欧姆
* USB的输出电流是500mA，需注意VBUS以及GND的线宽，线宽大于20mil即可满足载流要求

### 以太网的阻抗匹配

* 需要对RX±、TX±差分对进行阻抗匹配，通常阻抗控制在100欧姆，长度差控制在5mil以内
![差分线的处理](http://i.imgur.com/vRC72Aa.jpg)
![变压器集成在网口的以太网PCB布局](http://i.imgur.com/TvV6dym.jpg)
