# HDL 基础

## verilog与数字电路基础

1. 数字电路的五基元电路：反相器、与门、或门、三态门、D触发器
2. 常用三种描述方式：
 1. 数据流描述(assign)->组合逻辑电路
 2. 行为级描述(always)->时序逻辑电路
 3. 门级电路(and/or/not/buf)->基本门电路的调用
3. 常用关键字：always,assign,begin,case(xz),default,defparam,else,end,for,function,if,input,input,integer,module,negedge,output,parameter,posedge,primitive,reg,table,task,wire
 1. 自定义模块(一般由FPGA厂商制作):primitive...endprimitive;table...endtable;

## 我的FPGA

1. FPGA芯片：EP4CE6F22C8N，逻辑资源6272LEs，乘法器15，RAM资源270Kbits
2. SDRAM芯片：K4S561632J，256Mbit
3. 串行FLASH：EPCS4，4Mbit
4. 有源晶振：48MHz
5. SPI Flash：Winbond 25Q128

## FPGA入门知识

1. FPGA的仿真分为：行为仿真、门级仿真和布局布线后仿真，或者叫做前仿真、后仿真（包含门级仿真和布局布线后仿真）。
2. 一个标称450MHz的FPGA仅仅值内部的寄存器或者乘法器、RAM等单个资源的时钟频率能够达到。实际上使用这些器件搭建一个运行在200-300MHz之间的设计已经非常理想。因为级联门延时、线延时都是非常大的除了优化算法结构外，为了达到更高的速率插入同步寄存器，增加流水级数必不可少，这样才能用资源换来速度的提升。对同功能的设计，速度和资源永远成反比
3. 建立就是CLK到来前DATA稳定时间，保持就是时钟到来后数据的保持时间
4. 现在的很多PCB工具和FPGA开发软件都有附带的接口，可以相互转换。将PCB设计软件中的管脚转换成FPGA的约束文件（TCL或者CSV格式），或者在FPGA调整之后再次导入PCB
5. 真的时钟是不能赋值给线网或者寄存器的。由于FPGA里时钟属于单独的时钟树，CLK是无法直接赋值给一个寄存器变量的，因为他们只能从时钟树分配到寄存器的CLK端。因为时钟树总是和寄存器的clk端相连，他们和触发器的D端实际是不连接的，需要通过特殊处理。
6. 在基本组成元素中非时序组合逻辑在FPGA内部使用查找表资源实现（LUT）。而时序则由寄存器实现。
7. 三段式有限状态机：
 1. 现态
 2. 次态
 3. 逻辑输出
8. 状态机编码：
 1. 顺序编码
 2. 格雷编码
 3. 一位热码
 4. 约翰逊编码

9.

## 将POF文件转换成固化到FPGA Flash的文件

![使用JTAG烧写Flash文件（非AS模式）](http://i.imgur.com/u2iVkzg.png)

1. 选择File->Convert Programming Files
2. 选择Programming file type为：JTAG Indirect Configuration(.jic),选择相应的串行配置Flash型号，点击Flash Loader，添加Flash器件，然后导入之前生成的pof文件

## 使用TCL文件来分配器件与管脚

![一个tcl文件的例子](http://i.imgur.com/oEYr6m0.png)

## Verilog的模块

1. 模块是Verilog语言的基本单元，其基本语法如下：

```Verilog
module <模块名>（<端口列表>）
 端口说明（input，output，inout）
 参数定义
 数据类型定义：指定模块内用到的数据对象为寄存器型、存储器型还是连续型
 连续赋值语句（assign）
 过程块（initial和always）
  -行为描述语句
 底层模块实例
 任务和函数
 延时说明块：对模块各个输入和输出端口之间的路径延时进行说明
endmodule
```

2. 模块的描述方式
 1. 模块的描述方式又称建模方式。verilog既是一门行为化又是一门结构化的HDL语言，根据设计的需要，每个模块的内部可以分为四种抽象级别来进行描述。模块在外部环境中的表现都是同等的，而与其内部具体描述的抽象级别无关。因此模块的内部具体描述相对于外部环境来说是隐藏的，该表一个模块内部描述的抽象级别，可以不用对其外部环境做任何的改动。
 2. 模块的4类抽象级别的描述
  1. 行为级建模：这是Verilog最高抽象级别的描述方式。一个模块可以按照要求的设计算法来实现，而不用关心具体硬件实现的细节。行为描述通过行为语句来实现，行为功能可使用下述过程语句结构描述
   * initial语句，此语句只执行一次
   * always语句，此语句循环执行
  2. 数据流描述方式（数据流级建模）
   1. 数据流描述方式也称RTL（寄存器传输级）描述方式。在这种描述方式下，设计者需要知道数据是如何在寄存器之间传输的以及将被如何处理。数据流描述防护四类似于布尔方程，它能够比较直观地表达底层逻辑行为。在Verilog中数据流描述方式主要用来描述组合逻辑，具体由连续赋值语句“assign”来实现。
  3. 门级描述方式
   1. 在这种描述方式下，模块是按照逻辑门和他们之间的互连线来实现的，在这种抽象级别下的设计与按照门级逻辑图来描述一个设计类似。门级描述就是指调用Verilog内建的基本门级元件来对硬件电路进行结构设计。这些基本的门级元件是一类特殊的模块，共有14种，分成4类，他们分别由Verilog语言自身提供。
  4. 开关级描述方式
   1. 开关级描述方式也称晶体管级描述方式，是Verilog最低级别的描述方式。在这种描述方式下，模块是按照开关级元件和存储节点以及它们之间的互连来实现的。具体来说是指调用Verilog内建的基本开关级原价来对硬件电路进行结构设计。与门级元件类似，这些基本的开关级元件也是一类特殊的模块，共有12种，由Verilog语言自身提供
3. 模块调用

```Verilog
<模块名> <参数值列表> <实例名> (<端口连接表>)；
```

## 语法基础

1. 注释：`/*多行注释*/`和`//单行注释`
2. 数值可取下面的4类值：
 1. 0：逻辑0或者假状态
 2. 1：逻辑1或者真状态
 3. x(X)：未知状态
 4. z(Z)：高阻状态
3. 整数型常量
 1. 简单的十进制格式。由0~9的数字串组成的十进制数，可以在数值前面加上符号“+”或“-”来表示数的正负
 2. 指定位宽的基数格式，由三部分组成：<size><'base_format><number>
  1. size指定数的二进制位宽，是一个非零的无符号十进制常量，size若省略默认32位
  2. 'base_format:单引号'是指定位宽格式表示法的固有字符，不能省略。base_format指定数的基数格式，用一个字母表示，对大小写不敏感。在base_format之前，单引号之后可以加上字母s(S)表示该数为有符号数。合法的技术格式字符串字母有d(D)-十进制；h(H)-十六进制；o(O)-八进制；b(B)-二进制。number是一个无符号的数，由相应基数格式的数字串组成。十六进制数字a~f对大小写也是不敏感的。可以在size之前加上“+”或“-”表示数的正或负，但是不能再base_format和number之间加“+”或“-”，因为这违背了Verilog的语法规则
 3. 下划线符号“_”除了不能放在数值的首位外，可以放在整数型和实数型内任何地方。它们对数值没有任何影响，在编译时会被忽略，只是为了将长的数值分段，提高可读性
 4. 数值常量中的？表示高阻状态
4. 实数型常量
 1. 实数型常量可以通过对小数的四舍五入，转换为最靠近的整数型常量，而不是直接将小数舍弃，从而得到整数。当一个实数常量被赋给一个整数变量时，一种隐式的转换就发生了。例如实数-1.5转换为整数-2，实数35.2转换为整数得到35
 2. 实数既可以使用小数也可以使用科学计数法的方式来表达
5. 字符串：用双引号“”括起来的字符序列，必须包含在一行内，不能分成多行书写
 1. 字符串变量是寄存器类型的变量，该字符串变量的位数要大于等于字符串的最大长度
 2. 存储一个12字符的字符串“Hello world！”需要一个8*12=96位的寄存器变量。
  * `reg [8*12:1] stringvar;`
  * `stringvar = "Hello world";`
 3. 如果声明的字符串变量位数大于字符串实际长度，则在赋值操作后，字符串变量的左端（即高位）补0.如果声明的字符串变量位数小于字符串实际长度，那么字符串的左端被截取，这些高位字符就丢失了
6. 标识符分为简单标识符、转义标识符、生成标识符、关键字
 1. 简单标识符是由字母、数字、美元符号、下划线构成的任意序列。简单标识符的第一个符号不能是数字或者美元符号$
 2. 关键字都用小写字母定义
 3. 标识符的第一个字符不能够是“$”，因为在Verilog中，“$”专门用来代表系统命令
 4. Verilog中9个关键字：always,endmodule,reg,and,assign,begin,for,case,or,function,output,parameter,wait,if,else,input,while,end
7. 系统任务和函数
 1. 为了便于设计者对仿真过程进行控制，以及对仿真结果进行分析，Verilog提供了大量的系统功能调用，大致分为：
  1. 任务型的功能调用，称为系统任务
  2. 函数型的功能调用，称为系统函数
 2. Verilog的系统任务和系统函数是以字符$开头的标识符，他们的主要区别是
  1. 系统任务可以没有返回值或者有多个返回值，而系统函数只有一个返回值
  2. 系统任务可以带有延迟，而系统函数不允许延迟，在0时刻执行
 3. 用户可以根据需要基于Verilog仿真系统提供的PLI编程接口，编制特殊的系统任务和系统函数，根据系统任务和系统函数实现的功能不同，可将其分成以下几类：
  1. 标准输出任务
   1. $display:将特定信息输出到标准输出设备时，具有自动换行的功能
   2. $write：不带有行结束符
   3. $displayb和writeb（输出二进制）
   4. $displayo和writeo（输出八进制）
   5. $displayh和writeh（输出十六进制）
   6. 格式说明符：
    1. %h或%H：以十六进制数的形式输出
    2. %d或%D：以十进制数的形式输出
    3. %o或%O：以八进制的形式输出
    4. %b或%B：以二进制的形式输出
    5. %c或%C：以ASCII码字符的形式输出
    6. %s或%S：以字符串的形式输出
    7. %v或%V：输出线型数据的驱动强度
    8. %m或%M：输出模块的名称
  2. 文件管理任务
   1. <file_handle>=$fopen("<file_name>");如果文件名<file_name>正确，则返回一个32位的句柄描述符<file_handle>，且其中只有一位为高电平
   2. Verilog中用来将信息输出到文件的系统任务有$fdisplay,$fwrite,$fmonitor:<task_name>(<file_handles>,<format_specifiers>);其中<task_name>是上述三种系统任务中的一种。<file_handles>是文件句柄描述符，与打开文件所不同的是，可以对句柄进行多位设置。<format_specifiers>用来指定输出格式
   3. $fclose(<file_handle>);关闭文件
   4. Verilog中有两个系统任务$readmemb和$readmemh,它们能够把一个数据文件中的数据内容读入到一个指定的存储器中。这两个系统任务的区别在于，前者要求以二进制数据格式存放数据文件，而后者要求以十六进制数据格式存放数据文件。他们具有相同的语法格式：<task_name>(<file_name>,<register_array>,<start>,<end>);其中<task_name>用来指定系统任务，可取上述任务中的一个。<file_name>是读出数据的文件名。<register_array>为要读入数据的存储器。<start>和<end>分别为存储器的起始地址和结束地址。
    * 系统任务$readmem中，被读取的数据文件内容只能够包含空白符、注释行、二进制或十六进制的数字，同样也可以存在不定态X、高阻态Z和下划线_。
    * 数据文件中地址的表示格式为：“@”后面加上十六进制数字。同一个数据文件中可以出现多个地址。当系统任务遇到一个地址时，立刻将该地址后面的数据存放到存储器中相应的地址单元中
  3. 仿真控制任务
   1. Verilog中有三种仿真监控任务：$monitor,$monitoron,$monitoroff
   2. $monitor(<format_specifiers>,signal,signal,...);该任务可用来连续监控指定的信号参数，如果发现其中的任一信号发生变化，则系统按照调用$monitor时规定的格式，在时间歩结束时显示整个信号表。
   3. $finish和$stop这两个系统任务可以用来结束仿真。$finish用来终止仿真器的运行，结束仿真过程返回到操作系统。$stop暂时挂起仿真器，进入Verilog界面，可以通过输入相应命令使仿真继续进行
  4. 时间函数
   1. $timeformat(<unit>,<precision>,<suffix>,<min_field_width>)其中<unit>用于指定时间单位，取值范围是0~-15。<precision>指定所要显示时间信息的精度，<suffix>是诸如“ms”，“ns”之类的字符，<min_field_width>说明时间信息的最小字符数
   2. `$timeformat(-9,2,"ns",10)`
   3. 时间显示函数
    1. $time，返回64位整数，指定当前的仿真时间
    2. $stime，返回32位的仿真时间
    3. $realtime，以实数形式范湖当前的仿真时间
  5. 其他
   1. 随机函数
    1. $random%<number>,其中<number>用来指定所产生的随机数的范围，即-<number>+1到<number>-1
   2. 转换函数
    1. 有时需要将整数转换成实数，或将实数转换成整数，或者用向量形式来表示实数等。Verilog提供了许多转换函数可以方便实现上述功能。
    2. $rtio：通过截断小数部分，将实数转换成整数
    3. $itor:将整数转换成实数
    4. $realtobits:将实数转换成64位的实数向量表示
    5. $bitstoreal:将位模式转换为实数
8. 相等（==）与全等（===）运算符
 1. 相等运算中，如果任何一个操作数中存在不定态或者高阻态，将得到一个不定态的结果；而在全等运算中，则是将不定态和高阻态看作是逻辑状态的一种，同样参与比较，当这两个操作数的相应位都是X或者Z时，认为全等关系成立，否则运算结果为0。所以，全等是比较是否完全匹配，只有0和1两个状态，相等则会出现不定态。
9. 缩位运算符&，~&，|，~|，^,~^
 1. 缩位运算符是对单个操作数进行与或非等操作，与逻辑运算符的区别是最终结果和操作的位数无关，一定是1位的逻辑值。如果a为[3:0]，&a等效于a[0]&a[1]&a[2]&a[3],~|a等效于~(a[0]|a[1]|a[2]|a[3])
10. Verilog中的数据类型是指在硬件数字电路中数据进行存储和传输的方式。按照物理数据类型分类，Verilog中变量分为**线型**和**寄存器**型两种，两者在驱动方式、保持方式和对应的硬件实现都不同。这两种变量在定义时要设置位宽，缺省值为1位。变量的每一位可以是0，1，x或者z，其中x代表一个未被预置初始状态的变量，或者是由于两个或更多个驱动装置试图将之设定为不同的值而引起的冲突型变量。z代表高阻状态或悬空状态。
 1. 参数(parameters)
  1. 参数是常量的一种，经常用来定义延时、线宽、寄存器位数等物理量，可以增加代码的可读性和可维护性
  2. 参数的定义格式：parameter 参数名1=表达式1，参数名2=表达式2，参数名3=表达式3，……
  3. 对含有参数的模块通常称为参数化模块
 2. 线型变量（Nets）
  1. 线型变量表示硬件电路中元器件之间的物理连接。它的值由驱动元件的值决定，并具有实时更新性
  2. 线型变量不具备电荷保持作用（trireg型除外），因此没有存储数据的能力，其逻辑值由驱动源提供和保持。各种线型变量在没有驱动源的情况下呈现高阻态（trireg保持不定态）
  3. wire,tri表示标准连线
  4. wor，trior，多重驱动时，具有线或特性的连线
  5. wand，triand，多重驱动时，具有线与特性的连线
  6. tri1，tri0，上拉电阻，下拉电阻
  7. supply1，supply0，电源线，地线
  8. trireg，具有点和保持特性的连线
  9. 线型变量主要通过assign语句赋值。对于综合而言，wire型变量的取值可以是0，1，X与Z
 3. 寄存器型变量（Register），**寄存器型变量对应的硬件电路并不一定是寄存器**
  1. 寄存器型变量表示一个抽象的数据存储单元，它并不是指寄存器，而是所有具有存储能力的硬件电路的通称，如触发器、锁存器等。此外，寄存器型变量还包括测试文件中的**激励信号**。虽然这些激励信号并不是电路元件，仅是虚拟驱动源，但由于保持数值的特性，任然属于寄存器变量。
  2. 寄存器类型只能在always语句和initial语句中被赋值，并且它的值从一个赋值到另一个赋值被保存下来。寄存器型变量的缺省值是不定态X
  3. 寄存器型变量与线型变量的显著区别是寄存器型数据在接受下一次赋值之前，始终保持原值不变，而线型变量需要有持续的驱动
  4. reg，表示常用的寄存器型变量
  5. integer，表示32位带符号整数型变量
  6. real，便是64位带符号整数型变量
  7. time，无符号时间变量
 4. 存储器（Memories）
  1. 设计中，经常有存储指令或者存储数据等操作
  2. 存储器定义格式：reg[wordsize-1:0] memory_name[memorysize-1:0]
  3. 存储器可以看成是寄存器组成的数组
11. 编译向导
 1. 类似于C语言中的编译预处理的功能，在编译时首先对这些编译向导进行预处理，然后保持其结果，将其与源代码一起进行编译
 2. 编译向导的标志是在某些标识符前面添加反引号“`”
 3. `define <宏名> <宏定义的文本内容>。用于文本定义，和C语言#define类似，即在编译时通知编译器，用宏定义中的文本直接替换代码中出现的宏名。宏定义语句可以用于模块的任意位置，通常写在模块的外面，建议使用大写字母表示宏名，便于与变量名相区别。在调用宏定义的时候，也需要撇号作为开头
 4. `timescale <时间单位>/<时间精度>。时间单位和时间精度都是由整数和计时单位组成的。合法的整数有1，10，100；合法的计时单位为s,ms,us,ns,ps和fs。在仿真时间尺度中，时间单位用来定义模块内部仿真时间和延迟时间的基准单位；时间精度用来声明该模块仿真时间的精确程度。时间精度和时间单位的差别最好不要太大，因为在仿真过程中，仿真时间是以时间精度累计的，两者差异越大，仿真花费的时间就越长。另外，时间精度值至少要和时间单位一样精确，时间精度值不能大于时间单位值。如果一个设计中存在多个timescale，则采用最小的时间单位。如果不指定timescale，则系统默认执行时间单位为1ns，时间精度为1ns的timescale
 5. `include “文件名”。文件名中可以指定包含文件的路径，既可以是相对路径，也可以是完整的路径名。每条文件包含语句只能够用于一个文件的包含，但是，包含文件允许嵌套，即包含的文件中允许再去包含另外的一个文件
12. Verilog HDL中，所有的描述都是通过下面四种结构中的一种实现的，在一个模块内部可以由任意多个initial语句和always语句，两者都是从仿真的起始时刻开始执行的，但是initial语句后面的块语句只执行一次，而always语句则循环地重复执行后面的块语句，直到仿真结束。task任务和function函数可以在模块内部从一处或多处被调用
 1. initial语句

```
 initial
  begin
   语句1;
   语句2;
   语句3;
   ...
   语句n;
  end
```

	2. always语句,多个敏感信号表达式之间用or或者逗号隔开

```
 always @ （敏感信号表达式）
 begin
 ......
 end
```

	3. task任务
  1. 任务可以在源代码的不同位置执行共同的代码段，这些代码段已经用任务定义编写成任务，因此能够从源代码的不同位置调用任务。
  2. 任务的定义与引用都在一份模块内部完成，任务内部可以包含时序控制，即时延控制，并且任务也能够调用任何任务（包括本身）和函数
  3. 定义任务与调用任务必须在同一个模块内，任务调用语句应该在always块或者task-endtask块中
  4. 定义任务时，没有端口名称表，但要进行端口与数据类型的声明
  5. 调用任务时，与调用模块一样，要列出端口名称表，但是顺序要与定义中的排序完全一致
  6. 任务中可以调用其他的任务或者函数，且调用的个数不受限制
  7. 定义格式：

```
task <任务名>；
 <端口及数据类型定义语句>
 <语句1>
 <语句2>
 ...
 <语句n>
endtask
```

	4. function函数
  1. 函数与task一样，也可以在模块中的不同位置执行同一段代码，不同之处是函数只能返回一个值，它不能包含任何时间控制语句。函数可以调用其他函数，但是不能调用任务。此外，函数必须至少带有一个输入端口，在函数中允许没有输出或输入输出说明
  2. 函数的定义蕴含声明了一个与函数同名的，函数的内部寄存器，并作为函数的返回值传出函数
  3. 定义格式：

```
function <位宽说明> 函数名；
 <输入端口和类型说明>
 <局部变量说明>
 begin
 <语句1>
 <语句2>
 ...
 <语句n>
 end
endfunction
```

13. 赋值语句Assignments，是Verilog中对线型和寄存器型变量赋值的主要方式，根据赋值对象的不同分为连续赋值语句（针对线型变量）和过程赋值语句（针对寄存器型变量）
 1. 线型变量一旦被连续赋值语句赋值后，赋值语句右端表达式中的信号有任何变化，都将实时反映到左端的线型变量中；
 2. 过程赋值语句只有在语句被执行到时，赋值过程才能够进行一次，而且赋值过程的具体执行时间还受到各种因素的影响
 3. 连续赋值语句不能出现在任何一个过程块中；过程赋值语句只能够出现在过程块中
 4. 连续赋值语句以关键词assign为先导。过程赋值语句不需要任何先导的关键词，但是语句的赋值分为阻塞性和非阻塞型
 5. 连续赋值语句
  1. assign #[delay] <线型变量>=<表达式>
 6. 过程赋值语句
  1. <寄存器型变量> = <表达式>，阻塞型过程赋值
  2. <寄存器型变量> <= <表达式>，非阻塞型过程赋值
  3. 阻塞型赋值语句的执行受到前后顺序的而影响，只有在第一条语句执行完之后才可以执行第二条语句，而在非阻塞型赋值语句中，则是某一规定时刻同时完成，不受先后顺序的影响。从某种角度来说，非阻塞型赋值语句的执行顺序与并行块的执行十分相像。
  4. 总结：阻塞赋值按顺序执行，非阻塞赋值，块结束后并行执行
14. 块语句
 1. 串行块（begin-end）
  1. 串行块中的每条语句都是依据块中的排列次序顺序执行
  2. 串行块中每条语句的延时都是相对于前一条语句执行结束的相对时间
  3. 串行块的起始执行时间是块中第一条语句开始执行的时间，结束时间是最后一条语句执行结束的时间
 2. 并行快（fork-join）
  1. 并行块中的每条语句都是同时并行执行的，与排列次序无关
  2. 并行块中每条语句的延时都是相对于整个并行块开始执行的绝对时间
  3. 并行块的起始时间是流程控制转入并行块的时间，结束时间是并行块中按执行时间排序，最后执行的那条语句结束的时间
15. case语句
 1. case语句要求敏感表达式的值与给定的值1、值2……或值n中的一个全等时，执行后面相应的块语句，如果均不相等，执行default语句
 2. casez语句认为，如果给定的值中有一位或几位是高阻态z，则认为该位为“真”，敏感表达式与其比较时不予判断，只需比较其他几位
 3. casex语句扩充为，如果给定的值中有一位或某几位是高阻态或者不定态，同样认为其为“真”，不予判断
16. Verilog中存在4中类型的循环语句，可以控制语句的执行次数。这四种语句分别是for语句，repeat语句，while语句和forever语句
 1. for(循环变量赋初值；循环结束条件；循环变量增值) 块语句；
 2. repeat(循环次数表达式) 块语句；
 3. while(循环执行条件表达式) 块语句；
 4. forever 块语句；多用在initial块中，生成周期性输入波形，通常为不可综合语句
17. 任务与函数的区别
 1. 函数需要在一个仿真时间单位内完成，而任务定义中可以包含任意类型的定时控制部分及weit语句等
 2. 函数不能调用任务，而任务可以调用任何任务和函数
 3. 函数只允许有输入变量且至少有一个，不能够有输出端口输入输出端口；任务可以没有任何端口，也可以包括各种类型的端口
 4. 函数通过函数名返回一个值；任务则不需要

## 减小NIOS程序的代码量

1. 采用alt_main()作为程序入口
2. 打开编译器优化选项，-O3
3. 使用小封装的驱动库与C语言库
 1. HAL为处理器的外设提供了两种驱动库：一种是执行速度快，但是代码量大的版本；另一种是小封装的版本。默认情况下，HAL系统使用的是代码量大的版本。可以选择Reduced device drivers选项来选择小封装版本，从而减小代码量
 2. 完整的ANSI C标准库通常不适用于嵌入式系统，HAL提供了一系列经过剪裁的新的ANSI C标准库，占用非常小的代码量。可以选择Small C library选项来选择新的ANSI C标准库
4. 去掉不使用的驱动库
 1. 当用户的程序没有使用到NIOS系统中某些设备时，应该在系统中将这些设备完全移出

## 流水灯

```
 module led_module(
 input EN,
 input CLK,
 output [3:0] leds
 );

 reg clk_hz;
 initial clk_hz= 1'b0;//初始化只对仿真有效，综合器会自动无视
 reg[31:0]count;
 initial count = 32'b0;
 reg[3:0] led_reg;
 initial led_reg = 4'b1111;
 parameter SEC_TIME = 32'd48_000_000;

 always@(posedge CLK)
 if(count == SEC_TIME>>1)
  begin
   count <= 32'b0;
   clk_hz = !clk_hz;
  end
 else
  count <= count+1'b1;


 always@(posedge clk_hz)
 begin
  if(led_reg == 4'b1111)
   led_reg <= 4'b1110;
  else if(led_reg == 4'b1110)
   led_reg <= 4'b1101;
  else if(led_reg == 4'b1101)
   led_reg <= 4'b1011;
  else if(led_reg == 4'b1011)
   led_reg <= 4'b0111;
  else if(led_reg == 4'b0111)
   led_reg <= 4'b1110;
  else
   led_reg <= 4'b1111;
 end
 assign leds = EN ? led_reg : 4'bzzzz;
 endmodule

```

## 蜂鸣器

```
 module beep_module(
 input EN,
 input CLK,
 output BP
 );

 reg clk_hz;
 initial clk_hz= 1'b0;//初始化只对仿真有效，综合器会自动无视
 reg[31:0]count;
 initial count = 32'b0;

 parameter SEC_TIME = 32'd48_000_000;

 always@(posedge CLK)
 if(count == SEC_TIME>>1)
  begin
   count <= 32'b0;
   clk_hz = !clk_hz;
  end
 else
  count <= count+1'b1;

 assign BP = EN ? clk_hz : 1'bz;

 endmodule

```

## 8位共阳数码管

```
//8位共阳数码管
module HEX8(Clk,Rst_n,En,disp_data,sel,seg);

 input Clk;//输入50M外部时钟
 input Rst_n;
 input En;//使能引脚，低功耗考虑
 input [31:0]disp_data;//数码管总共有8位，每位显示0~F(4位表示)

 output [7:0]sel;//数码管位选(选择当前要显示的数码管)
 output reg [7:0]seg;//数码管段选(当前要显示的内容)

 reg [14:0]divider_cnt;
 localparam DELAY_ONE_MS = 25_000;//500us/20ns=25000

 reg clk_1k;

 reg [7:0]sel_r;

 reg [3:0]data_tmp;

 //分频计数器计数模块
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  divider_cnt <= 15'd0;
 else if(En == 1'b0)
  divider_cnt <= 15'd0;
 else if(divider_cnt == DELAY_ONE_MS -1)
  divider_cnt <= 1'd0;
 else
  divider_cnt <= divider_cnt + 1'b1;

 //1KHz扫描时钟生成模块
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  clk_1k <= 1'b0;
 else if(divider_cnt == DELAY_ONE_MS -1)
  clk_1k <= ~clk_1k;
 else
  clk_1k <= clk_1k;

 //8位循环移位寄存器
 always@(posedge clk_1k or negedge Rst_n)
 if(Rst_n == 1'b0)
  sel_r <= 8'b0000_0001;
 else if(sel_r == 8'b1000_0000)
  sel_r <= 8'b0000_0001;
 else
  sel_r <= sel_r << 1;

 //8选1多路选择器
 always@(*)
  case(sel_r)

   8'b0000_0001:data_tmp = disp_data[3:0];
   8'b0000_0010:data_tmp = disp_data[7:4];
   8'b0000_0100:data_tmp = disp_data[11:8];
   8'b0000_1000:data_tmp = disp_data[15:12];
   8'b0001_0000:data_tmp = disp_data[19:16];
   8'b0010_0000:data_tmp = disp_data[23:20];
   8'b0100_0000:data_tmp = disp_data[27:24];
   8'b1000_0000:data_tmp = disp_data[31:28];
   default:data_tmp = 4'b0000;

  endcase

 always@(*)
  case(data_tmp)
   4'h0:seg = 8'hc0;
   4'h1:seg = 8'hf9;
   4'h2:seg = 8'ha4;
   4'h3:seg = 8'hb0;
   4'h4:seg = 8'h99;
   4'h5:seg = 8'h92;
   4'h6:seg = 8'h82;
   4'h7:seg = 8'hf8;
   4'h8:seg = 8'h80;
   4'h9:seg = 8'h90;
   4'ha:seg = 8'h88;
   4'hb:seg = 8'h83;
   4'hc:seg = 8'hc6;
   4'hd:seg = 8'ha1;
   4'he:seg = 8'h86;
   4'hf:seg = 8'h8e;
  endcase

 assign sel = ((En==1'b1) ? sel_r:8'b0000_0000);

endmodule
```

## 按键消抖

```
module key_filter(Clk,Rst_n,key_in,key_flag,key_status);

 input Clk;
 input Rst_n;
 input key_in;

 output reg key_flag;//按键按下或者弹起便产生一个脉冲
 output reg key_status;//按键当前的状态，0表示按下

 reg [3:0]state;//状态机变量

 localparam
  IDEL   = 4'b0001,//空闲
  FILTER0  = 4'b0010,//按下消抖
  DOWN   = 4'b0100,//按下且稳定
  FILTER1  = 4'b1000;//松开消抖

 reg [19:0]cnt;//用于20ms延迟的计数器
 reg en_cnt;//计数器使能信号
 reg cnt_full;//计数器满标志信号

 reg key_in_s0,key_in_s1;//同步按键输入(按键输入为异步信号)用的两级寄存器
 reg key_tmp0,key_tmp1;//边沿检测用的两级寄存器
 wire pedge,nedge;

 //50_000_000->20ns,20ms/20ns=1_000_000
 parameter twenty_ms = 1_000_000;//消抖时间一般为20ms

 //对异步信号进行同步处理
 always@ (posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)begin
  key_in_s0 <= 1'b0;
  key_in_s1 <= 1'b0;
 end
 else begin
  key_in_s0 <= key_in;
  key_in_s1 <= key_in_s0;
 end


 //按键边沿检测
 always@ (posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)begin
  key_tmp0 <= 1'b0;
  key_tmp1 <= 1'b0;
 end
 else begin
  key_tmp0 <= key_in_s1;//key_in_s1为同步后的按键输入信号
  key_tmp1 <= key_tmp0;
 end

 //边沿检测组合逻辑电路
 assign nedge = (key_tmp0 == 1'b0 && key_tmp1 == 1'b1);
 assign pedge = (key_tmp0 == 1'b1 && key_tmp1 == 1'b0);

 //一段式状态机主程序
 always@ (posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)begin
  en_cnt <= 1'b0;
  state <= IDEL;
  key_flag <= 1'b0;
  key_status <= 1'b1;
 end
 else begin
  case(state)

   IDEL:
    begin
     key_flag <= 1'b0;
     if(nedge)begin
      state <= FILTER0;
      en_cnt <= 1'b1;
     end
     else
      state <= IDEL;
    end

   FILTER0:
    if(cnt_full)begin
     en_cnt <= 1'b0;
     state <= DOWN;
     key_flag <= 1'b1;
     key_status <= 1'b0;
    end
    else if(pedge)begin
     en_cnt <= 1'b0;
     state <= IDEL;
    end
    else
     state <= FILTER0;

   DOWN:
    begin
     key_flag <= 1'b0;
     if(pedge)begin
      state <= FILTER1;
      en_cnt <= 1'b1;
     end
     else
      state <= DOWN;
    end

   FILTER1:
    if(cnt_full)begin
     state <= IDEL;
     key_flag <= 1'b1;
     key_status <= 1'b1;
    end
    else if(nedge)begin
     en_cnt <= 1'b0;
     state <= DOWN;
    end
    else
     state <= FILTER1;

   default:
    begin
     state <= IDEL;
     en_cnt <= 1'b0;
     key_flag <= 1'b0;
     key_status <= 1'b1;
    end

  endcase
 end

 //计数器
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  cnt <= 20'd0;
 else if(en_cnt)
  cnt <= cnt +1'b1;
 else
  cnt <= 20'd0;

 //判断是否计数满20ms
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  cnt_full <= 1'b0;
 else if(cnt == twenty_ms-1)
  cnt_full <= 1'b1;
 else
  cnt_full <= 1'b0;

endmodule
```

## 串口通信

1. 起始位：低电平，停止位：高电平
2. 串口发送模块包含两个主要组件：
 1. 发送波特率生成模块
 2. 数据发送模块

```
//串口发送模块
module uart_byte_tx(
 Clk,
 Rst_n,
 data_byte,
 send_en,
 baud_set,
 Rs232_Tx,
 Tx_Done,
 uart_state
);

 input Clk;
 input Rst_n;
 input [7:0]data_byte;
 input send_en;
 input [2:0]baud_set;

 output reg Rs232_Tx;
 output reg Tx_Done;
 output reg uart_state;

 reg bps_clk;//波特率时钟

 reg [15:0]bps_DR;//分频计数最大值

 reg [15:0]div_cnt;//分频计数器

 reg [3:0]bps_cnt;//波特率计数时钟

 reg [7:0]r_data_byte;

 localparam
  START_BIT = 1'b0,
  STOP_BIT = 1'b1;

 //外部数据寄存，保持数据稳定
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  r_data_byte = 8'd0;
 else if(send_en)
  r_data_byte <= data_byte;
 else
  r_data_byte <= r_data_byte;

 //uart_state
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  uart_state <= 1'b0;
 else if(send_en)
  uart_state <= 1'b1;
 else if(bps_cnt == 4'd11)
  uart_state <= 1'b0;
 else
  uart_state <= uart_state;

 //波特率分频系数查找表
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  bps_DR <= 16'd5207;
 else begin
  case(baud_set)
   3'd0:bps_DR <= 16'd5207;//9600Hz
   3'd1:bps_DR <= 16'd2603;//19200Hz
   3'd2:bps_DR <= 16'd1301;//38400Hz
   3'd3:bps_DR <= 16'd867;//57600Hz
   3'd4:bps_DR <= 16'd433;//115200Hz
   default:bps_DR <= 16'd433;//115200Hz
  endcase
 end

 //波特率计数器
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  div_cnt <= 16'd0;
 else if(uart_state)begin
  if(div_cnt == bps_DR)
   div_cnt <= 16'd0;
  else
   div_cnt <= div_cnt + 1'b1;
 end
 else
  div_cnt <= 16'd0;

 //产生波特率时钟
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  bps_clk <= 1'b0;
 else if(div_cnt == 16'd1)
  bps_clk <= 1'b1;
 else
  bps_clk <= 1'b0;

 //bps counter
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  bps_cnt <= 4'd0;
 else if(bps_cnt == 4'd11)
  bps_cnt <= 4'd0;
 else if(bps_clk)
  bps_cnt <= bps_cnt + 1'b1;
 else
  bps_cnt <= bps_cnt;

 //Tx_Done
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  Tx_Done <= 1'b0;
 else if(bps_cnt == 4'd11)
  Tx_Done <= 1'b1;
 else
  Tx_Done <= 1'b0;

 //串口发送逻辑
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  Rs232_Tx <= 1'b1;
 else begin
  case(bps_cnt)
   4'd0:Rs232_Tx <= 1'b1;
   4'd1:Rs232_Tx <= START_BIT;
   4'd2:Rs232_Tx <= r_data_byte[0];
   4'd3:Rs232_Tx <= r_data_byte[1];
   4'd4:Rs232_Tx <= r_data_byte[2];
   4'd5:Rs232_Tx <= r_data_byte[3];
   4'd6:Rs232_Tx <= r_data_byte[4];
   4'd7:Rs232_Tx <= r_data_byte[5];
   4'd8:Rs232_Tx <= r_data_byte[6];
   4'd9:Rs232_Tx <= r_data_byte[7];
   4'd10:Rs232_Tx <= STOP_BIT;
   default:Rs232_Tx <= 1'b1;
  endcase
 end

endmodule
```

3. 串口接收模块
 1. 对于接收数据中的每一位进行采样，一般情况下每一位数据的中间点是最稳定的，因此在一般应用中，采集中间时刻的数据即可，但是在工业应用中，往往有非常强的电磁干扰，只采样一次就作为该数据的电平判定，是不保险的，有可能恰好采集到被干扰的信号而导致结果出错，因此需要使用多次采样求概率的方式进行

```
//串口接收模块,采用过采样的方案，将有效时间分成5-6-5三段，检查中间6端的数据，有效降低工业环境的干扰
module uart_byte_rx(
 Clk,
 Rst_n,
 baud_set,
 Rs232_Rx,

 data_byte,
 Rx_Done
);

 input Clk;
 input Rst_n;
 input [2:0]baud_set;
 input Rs232_Rx;//Rx输入引脚

 output reg[7:0]data_byte;//接收到的数据
 output reg Rx_Done;//接收完毕信号

 reg s0_Rs232_Rx,s1_Rs232_Rx;//同步寄存器，消除亚稳态
 reg tmp0_Rs232_Rx,tmp1_Rs232_Rx;//数据寄存器,用于边沿检测

 wire nedge;//下降沿标志

 reg [15:0]bps_DR;//分频计数最大值
 reg [15:0]div_cnt;//分频计数器
 reg uart_state;
 reg bps_clk;//波特率时钟
 reg [7:0]bps_cnt;//波特率计数时钟

 reg [2:0]r_data_byte [7:0];
 reg [2:0]START_BIT,STOP_BIT;

 //同步寄存器，消除亚稳态,s1_Rs232_Rx为最终稳定的输入数据
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)begin
  s0_Rs232_Rx <= 1'b0;
  s1_Rs232_Rx <= 1'b0;
 end
 else begin
  s0_Rs232_Rx <= Rs232_Rx;
  s1_Rs232_Rx <= s0_Rs232_Rx;
 end

 //数据寄存器
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)begin
  tmp0_Rs232_Rx <= 1'b0;
  tmp1_Rs232_Rx <= 1'b0;
 end
 else begin
  tmp0_Rs232_Rx <= s1_Rs232_Rx;
  tmp1_Rs232_Rx <= tmp0_Rs232_Rx;
 end

 assign nedge = (tmp0_Rs232_Rx==1'b0 && tmp1_Rs232_Rx==1'b1);

 //波特率分频系数查找表
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  bps_DR <= 16'd324;
 else begin
  case(baud_set)
   3'd0:bps_DR <= 16'd324;//9600Hz,50000000/9600/16=325
   3'd1:bps_DR <= 16'd162;//19200Hz
   3'd2:bps_DR <= 16'd80;//38400Hz
   3'd3:bps_DR <= 16'd53;//57600Hz
   3'd4:bps_DR <= 16'd26;//115200Hz
   default:bps_DR <= 16'd26;//115200Hz
  endcase
 end

 //波特率计数器
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  div_cnt <= 16'd0;
 else if(uart_state)begin//检测到有效信号才开始计数，随之产生波特率
  if(div_cnt == bps_DR)
   div_cnt <= 16'd0;
  else
   div_cnt <= div_cnt + 1'b1;
 end
 else
  div_cnt <= 16'd0;

 //产生波特率时钟
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  bps_clk <= 1'b0;
 else if(div_cnt == 16'd1)
  bps_clk <= 1'b1;
 else
  bps_clk <= 1'b0;

 //bps counter,159=16*10-1
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  bps_cnt <= 8'd0;
 else if(bps_cnt == 8'd159 | (bps_cnt == 8'd12 && (START_BIT > 2)))
  bps_cnt <= 8'd0;
 else if(bps_clk)
  bps_cnt <= bps_cnt + 1'b1;
 else
  bps_cnt <= bps_cnt;

 //Rx_Done
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  Rx_Done <= 1'b0;
 else if(bps_cnt == 8'd159)
  Rx_Done <= 1'b1;
 else
  Rx_Done <= 1'b0;

 //data_byte
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  data_byte <= 8'd0;
 else if(bps_cnt == 8'd159)begin
  data_byte[0] <= r_data_byte[0][2];//100开始表示收到1的概率大，数据判定为1
  data_byte[1] <= r_data_byte[1][2];
  data_byte[2] <= r_data_byte[2][2];
  data_byte[3] <= r_data_byte[3][2];
  data_byte[4] <= r_data_byte[4][2];
  data_byte[5] <= r_data_byte[5][2];
  data_byte[6] <= r_data_byte[6][2];
  data_byte[7] <= r_data_byte[7][2];
 end

 //串口接收逻辑
 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0) begin
  START_BIT <= 3'd0;
  r_data_byte[0]<= 3'd0;
  r_data_byte[1]<= 3'd0;
  r_data_byte[2]<= 3'd0;
  r_data_byte[3]<= 3'd0;
  r_data_byte[4]<= 3'd0;
  r_data_byte[5]<= 3'd0;
  r_data_byte[6]<= 3'd0;
  r_data_byte[7]<= 3'd0;
  STOP_BIT <= 3'd0;
 end
 else if(bps_clk)begin
  case(bps_cnt)
   0:begin
    START_BIT <= 3'd0;
    r_data_byte[0]<= 3'd0;
    r_data_byte[1]<= 3'd0;
    r_data_byte[2]<= 3'd0;
    r_data_byte[3]<= 3'd0;
    r_data_byte[4]<= 3'd0;
    r_data_byte[5]<= 3'd0;
    r_data_byte[6]<= 3'd0;
    r_data_byte[7]<= 3'd0;
    STOP_BIT <= 3'd0;
   end
   6,7,8,9,10,11:START_BIT <= START_BIT + s1_Rs232_Rx;
   22,23,24,25,26,27:r_data_byte[0] <= r_data_byte[0] + s1_Rs232_Rx;
   38,39,40,41,42,43:r_data_byte[1] <= r_data_byte[1] + s1_Rs232_Rx;
   54,55,56,57,58,59:r_data_byte[2] <= r_data_byte[2] + s1_Rs232_Rx;
   70,71,72,73,74,75:r_data_byte[3] <= r_data_byte[3] + s1_Rs232_Rx;
   86,87,88,89,90,91:r_data_byte[4] <= r_data_byte[4] + s1_Rs232_Rx;
   102,103,104,105,106,107:r_data_byte[5] <= r_data_byte[5] + s1_Rs232_Rx;
   118,119,120,121,122,123:r_data_byte[6] <= r_data_byte[6] + s1_Rs232_Rx;
   134,135,136,137,138,139:r_data_byte[7] <= r_data_byte[7] + s1_Rs232_Rx;
   150,151,152,153,154,155:STOP_BIT <= STOP_BIT + s1_Rs232_Rx;
   default:
    begin
     START_BIT = START_BIT;
     r_data_byte[0] <= r_data_byte[0];
     r_data_byte[1] <= r_data_byte[1];
     r_data_byte[2] <= r_data_byte[2];
     r_data_byte[3] <= r_data_byte[3];
     r_data_byte[4] <= r_data_byte[4];
     r_data_byte[5] <= r_data_byte[5];
     r_data_byte[6] <= r_data_byte[6];
     r_data_byte[7] <= r_data_byte[7];
     STOP_BIT = STOP_BIT;
    end
  endcase
 end

 always@(posedge Clk or negedge Rst_n)
 if(Rst_n == 1'b0)
  uart_state <= 1'b0;
 else if(nedge)
  uart_state <= 1'b1;
 else if(Rx_Done || (bps_cnt == 8'd12 && (START_BIT > 2)))//接收结束或者接收到错误的开始位
  uart_state <= 1'b0;
 else
  uart_state <= uart_state;

endmodule
```

## VGA

1. VGA全称Video Graphic Array，也叫显示绘图阵列，是逐行扫描的显示制式，其支持的分辨率为640X480，对更高分辨率800X600称为SVGA模式；1024X768称为XVGA
2. VGA时序分行时序和帧时序，两者都包含同步脉冲（Sync a），显示后延（Back porch b），显示时序段（Display interval c）和显示前沿（Front porch d）四个部分
![VGA时序](http://i.imgur.com/xTENNYJ.png)
3. 各种分辨率的行场同步时序如图
![VGA参考时序数据表](http://i.imgur.com/VTCZg6j.png)

## 基于NIOS II的SOPC技术

![Nios II处理器](http://i.imgur.com/6h2MCPM.png)
![典型系统架构](http://i.imgur.com/KMXyhNc.png)

1. 可二次开发的32位RISC软核处理器，基于哈佛结构，免版税
2. 32个通用寄存器，3种指令格式，32位指令，32位数据总线，平面寄存器文件，高速缓冲Cache(指令缓存和数据缓存分开)，分支预测，紧耦合型存储器选项，32级中断支持
3. 凡是需要存储程序代码的外设都需要连接到nios的指令总线上

## 经验之谈

1. 异步信号的同步处理
 1. 对于异步信号输入，为了避免时钟沿采到的数据处于亚稳态引起电路振荡，一般在异步信号输入后面加入两级D触发器
2. 分频后的时钟信号不能直接去驱动D触发器
