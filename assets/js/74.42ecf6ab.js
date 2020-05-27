(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{411:function(_,v,a){"use strict";a.r(v);var i=a(19),l=Object(i.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("p",[_._v("title: S3C6410 Introduction\ntags:")]),_._v(" "),a("ul",[a("li",[_._v("ARM\ncategories:")]),_._v(" "),a("li",[_._v("Geek Hobbies\nauthor: suda-morris\ndate: 2016-05-15 21:04:55 +0800")])]),_._v(" "),a("hr"),_._v(" "),a("h2",{attrs:{id:"总线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总线"}},[_._v("#")]),_._v(" 总线")]),_._v(" "),a("ol",[a("li",[_._v("总线是计算机各部件之间传送数据、地址和控制信息的公共通道，按照相对于CPU的位置可以分为：片内总线和片外总线")]),_._v(" "),a("li",[_._v("总线带宽=（总线宽度/8）*总线频率")]),_._v(" "),a("li",[_._v("ARM系列的处理器按照AMBA（Advanced Microcontroller Bus Architecture）规范设计总线，包括AHB、ASB、APB")])]),_._v(" "),a("h2",{attrs:{id:"cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[_._v("#")]),_._v(" Cache")]),_._v(" "),a("ol",[a("li",[_._v("CPU在写Cache时，如果Cache与对应内存内容同步更新，则称为通写，如果只在写入Cache的内容移出时才更新对应内存内容，则称为回写")])]),_._v(" "),a("h2",{attrs:{id:"u-boot的编译配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#u-boot的编译配置"}},[_._v("#")]),_._v(" u-boot的编译配置")]),_._v(" "),a("ol",[a("li",[_._v("执行make smdk2410_config 将u-boot顶层目录下的mkconfig脚本生成配置文件include/config.mk，内容正是根据Makefile最开发板的配置生成的\n"),a("ol",[a("li",[_._v("ARCH=arm")]),_._v(" "),a("li",[_._v("CPU=arm920t")]),_._v(" "),a("li",[_._v("BOARD=smdk2410")]),_._v(" "),a("li",[_._v("VENDOR=samsung")]),_._v(" "),a("li",[_._v("SOC=s3c24x0")])])]),_._v(" "),a("li",[_._v("Makefile的编译选项和规则在顶层目录的config.mk文件中定义。各体系结构通用的规则直接在该文件中定义。通过ARCH、CPU、BOARD、SOC等变量为不同硬件平台定义不同选项。不同体系结构的规则分别包含在各自的lib_xxx目录下的config.mk文件中")])]),_._v(" "),a("h2",{attrs:{id:"删减u-boot文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删减u-boot文件"}},[_._v("#")]),_._v(" 删减u-boot文件")]),_._v(" "),a("ol",[a("li",[_._v("删除board目录下非samsung的目录\n"),a("ul",[a("li",[_._v("cd board/ && rm -rf "),a("code",[_._v('ls | grep -v "samsung"')])])])]),_._v(" "),a("li",[_._v("删除board/samsung目录下非smdk6400的目录\n"),a("ul",[a("li",[_._v("cd board/samsung/ && rm -rf "),a("code",[_._v('ls | grep -v "smdk6400"')])])])]),_._v(" "),a("li",[_._v("删除cpu目录下非arm920t的目录\n"),a("ul",[a("li",[_._v("cd cpu/ && rm -rf "),a("code",[_._v('ls | grep -v "arm1176"')])])])]),_._v(" "),a("li",[_._v("删除include目录中非arm架构和非generic的汇编头文件目录\n"),a("ul",[a("li",[_._v("cd include/ && rm -rf "),a("code",[_._v('ls | grep "asm-" | egrep -v "arm|generic"')])])])]),_._v(" "),a("li",[_._v("删除include/asm-arm目录中非s3c64xx架构的头文件目录\n"),a("ul",[a("li",[_._v("cd include/asm-arm/ && rm -rf "),a("code",[_._v('ls | grep "arch-" | grep -v "s3c64xx"')])])])]),_._v(" "),a("li",[_._v("删除include/configs目录下非smdk6400.h的目录和文件\n"),a("ul",[a("li",[_._v("cd include/configs/ && rm -rf "),a("code",[_._v('ls | grep -v "smdk6400.h"')])])])]),_._v(" "),a("li",[_._v("删除u-boot顶层目录下非arm架构和非generic的库目录\n"),a("ul",[a("li",[_._v("rm -rf "),a("code",[_._v('ls | grep "lib_" | egrep -v "arm|generic"')])])])])]),_._v(" "),a("h2",{attrs:{id:"建立suda6410配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立suda6410配置"}},[_._v("#")]),_._v(" 建立suda6410配置")]),_._v(" "),a("ol",[a("li",[_._v("选择u-boot中原有的smdk6400作为suda6410的移植依据。修改顶层Makefile，检索到smdk2410_config目标所在行，添加suda6410_config目标规则\n"),a("img",{attrs:{src:"http://i.imgur.com/gnd6FyP.png",alt:"修改Makefile"}})]),_._v(" "),a("li",[_._v("创建板级支持文件，将原来存放smdk6410板级相关初始化代码的文件夹复制并命名为suda6410对应功能的文件夹\n"),a("img",{attrs:{src:"http://i.imgur.com/bXKnNmi.png",alt:"创建板级支持文件"}})]),_._v(" "),a("li",[_._v("修改board/samsung/suda6410/下的Makefile\n"),a("img",{attrs:{src:"http://i.imgur.com/m3EwWzx.png",alt:"修改board/samsung/suda6410/下的Makefile"}})]),_._v(" "),a("li",[_._v("修改board/samsung/suda6410/下的config.mk，将原内容替换为如下代码。其中的TEXT_BASE指定最终u-boot镜像的链接基地址，LDSCRIPT则指定了连接器脚本的路径\n"),a("img",{attrs:{src:"http://i.imgur.com/F53F0Qj.png",alt:"board/samsung/suda6410/config.mk"}})]),_._v(" "),a("li",[_._v("创建板级配置文件\n"),a("ul",[a("li",[_._v("cd include/configs/ && cp smdk6400.h suda6410.h")])])])]),_._v(" "),a("h2",{attrs:{id:"u-boot的环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#u-boot的环境变量"}},[_._v("#")]),_._v(" u-boot的环境变量")]),_._v(" "),a("ol",[a("li",[_._v("bootdelay、baudrate、netmask、ethaddr、bootfile、bootargs、bootcmd、serverip、ipaddr、stdin、stdout、stderr")]),_._v(" "),a("li",[_._v("如果在启动的时候看到u-boot打印出“Warning-bad CRC，using default environment”则说明u-boot没有在存放环境变量的固态存储器中找到有效的环境变量，只好使用编译时定义的默认环境变量。只要运行saveenv就可以把默认环境变量写入固态存储器，下次启动就不会有这个警告了。")])]),_._v(" "),a("h2",{attrs:{id:"s3c6410处理器概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3c6410处理器概述"}},[_._v("#")]),_._v(" S3C6410处理器概述")]),_._v(" "),a("ol",[a("li",[_._v("S3C6410是一个32位的RISC微处理器，采用了32位内部总线架构，内部总线由AXI（先进的可扩展接口）、AHB和APB总线组成")]),_._v(" "),a("li",[_._v("包括许多硬件外设，如一个相机接口，TFT24位真彩色液晶显示控制器，系统管理器（电源管理等），4通道UART，32通道DMA，4通道定时器，通用的I/O端口，IIS总线接口，IIC总线接口，USB主设备，USB OTG，SD主设备")]),_._v(" "),a("li",[_._v("矢量浮点型（VFP）协处理器支持")]),_._v(" "),a("li",[_._v("ARM1176JZF-S核心时钟频率最高是667MHz")]),_._v(" "),a("li",[_._v("包含3个片上PLL：APLL，MPLL和EPLL\n"),a("ol",[a("li",[_._v("APLL生成一个独立的ARM操作时钟")]),_._v(" "),a("li",[_._v("MPLL生成系统参考时钟")]),_._v(" "),a("li",[_._v("EPLL产生用作外设IP的时钟")])])])]),_._v(" "),a("h2",{attrs:{id:"系统控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统控制器"}},[_._v("#")]),_._v(" 系统控制器")]),_._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/lmyZ0IA.png",alt:"6410的结构框图"}})]),_._v(" "),a("ol",[a("li",[_._v("系统控制器由时钟控制和电源管理控制两个部分组成")]),_._v(" "),a("li",[_._v("系统时钟控制\n"),a("ol",[a("li",[_._v("ARMCLK给CPU提供时钟")]),_._v(" "),a("li",[_._v("HCLK给AXI/AHB总线外设提供时钟")]),_._v(" "),a("li",[_._v("PCLK给APB总线外设提供时钟")])])]),_._v(" "),a("li",[_._v("S3C6410有3个PLL，一个仅用于ARMCLK，一个用于HCLK和PCLK，最后一个用于外设，特别是音频相关的时钟")]),_._v(" "),a("li",[_._v("S3C6410中电源管理有四个模块组成：通用时钟门控模式，空闲模式，停止模式和睡眠模式\n"),a("ol",[a("li",[_._v("通用时钟门控模式用来控制内部外设时钟的开关")]),_._v(" "),a("li",[_._v("空闲模式仅中断ARMCLK到CPU")]),_._v(" "),a("li",[_._v("停止模式禁用PLL，这种情况下，电力消耗仅仅因为漏电流")]),_._v(" "),a("li",[_._v("睡眠模式断开内部电源。为了使用睡眠模式，两个独立的电源是必需的。两个电源中的一个用于唤醒逻辑提供电力，另一个提供其他内部逻辑，包括CPU")])])]),_._v(" "),a("li",[_._v("ARM1176处理器是通过64位AXI总线连接到几个内存控制器上的，这样做是为了满足带宽需求。")]),_._v(" "),a("li",[_._v("多媒体协处理器分为5个电源域，包括MFC（多格式编解码器），JPEG，Camera接口，TV译码器等等。当IP没有被一个应用程序所要求时，5个电源域可以进行独立的控制，以减少不必要的电力")])]),_._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/xErsUXB.png",alt:"6410的时钟树"}})]),_._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[_._v("S3C6410有3个PLL，分别是APLL，MPLL，和EPLL\n"),a("ol",[a("li",[_._v("APLL用于产生RM时钟")]),_._v(" "),a("li",[_._v("MPLL用于产生系统主时钟，用于操作AXI、AHB和APB总线")]),_._v(" "),a("li",[_._v("EPLL用于特殊用途，主要用于外设，如UART，IIS，IIC等")])])]),_._v(" "),a("li",[_._v("当在AXI总线或者AHB总线上时，操作速度最大可达到133MHz，当在APB总线上时，最大的操作速度可以达到66MHz")])]),_._v(" "),a("h2",{attrs:{id:"arm核心寄存器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arm核心寄存器"}},[_._v("#")]),_._v(" ARM核心寄存器")]),_._v(" "),a("ol",[a("li",[_._v("ARM11有13个32位的通用寄存器R0~R12，另外有3个32位的寄存器分别是SP、LR和PC\n"),a("ol",[a("li")])])]),_._v(" "),a("h2",{attrs:{id:"gpio特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpio特性"}},[_._v("#")]),_._v(" GPIO特性")]),_._v(" "),a("ol",[a("li",[_._v("提供内部去抖滤波器")]),_._v(" "),a("li",[_._v("8通道复用ADC，最大500k采样/s和10位的分辨率")])]),_._v(" "),a("h2",{attrs:{id:"存储器映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储器映射"}},[_._v("#")]),_._v(" 存储器映射")]),_._v(" "),a("ol",[a("li",[_._v("S3C6410支持32位物理地址域，并且这些地址域分成两部分，一部分用于存储，另一部分用于外设")]),_._v(" "),a("li",[_._v("通过SPINE总线访问主存，主存的地址范围是从0x0000_0000~0x6FFF_FFFF。主存部分分成四个区域：引导镜像区、内部存储区、静态存储区和动态存储区\n"),a("ol",[a("li",[_._v("引导镜像区的地址范围是从0x0000_0000~0x07FF_FFFF，但是没有实际的映射内存。引导镜像区反映一个镜像，这个镜像指向内存的一部分区域或者静态存储区。引导镜像的开始地址是0x0000_0000")]),_._v(" "),a("li",[_._v("内部存储区用于启动代码访问内部ROM和内部SRAM，也被称作steppingstone。每块内部存储器的起始地址是确定的，内部ROM的地址范围是0x0800_0000~0x0BFF_FFFF，但是实际存储仅32KB。该区域是只读的，并且当内部ROM启动被选择时，该区域能映射到引导镜像区。内部SRAM的地址范围是0x0C00_0000~0x0FFF_FFFF，但是实际存储仅4KB。当NAND闪存启动被选择时能映射到引导镜像区。")]),_._v(" "),a("li",[_._v("静态存储区的地址范围是0x1000_0000~0x3FFF_FFFF，通过该地址区域能访问SROM、SRAM、NOR Flash、同步NOR接口设备和Steppingstone。每一块区域代表一个芯片选择。例如地址范围从0x1000_0000~0x17FF_FFFF代表Xm0CSn[0]。每个芯片选择的开始地址是固定的。NAND Flash和CF/ATAPI不能通过静态存储区访问，因此任何Xm0CSn[5:2]映射到NFCON或CFCON，相关地址区域应当被访问。一个例外，如果Xm0CSn[2]用于NAND Flash，Steppingstone映射到存储区从0x2000_0000~0x27FF_FFFF")]),_._v(" "),a("li",[_._v("动态存储区域的地址范围是0x4000_0000~0x6FFF_FFFF。DMC0有权使用地址0x4000_0000~0x4FFF_FFFF，并且DMC1有权使用地址0x5000_0000~0x6FFF_FFFF。对于每一块芯片选择的起始地址是可以进行配置的")])])]),_._v(" "),a("li",[_._v("外设区域通过PERI总线被访问，它的地址范围是0x7000_0000~0x7FFF_FFFF。这个地址范围的所有的SFR能被访问。而且如果数据需要从NFCON或CFCON传输，这些数据需要通过PERI总线传输")])]),_._v(" "),a("h2",{attrs:{id:"bootloader的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootloader的作用"}},[_._v("#")]),_._v(" bootloader的作用")]),_._v(" "),a("ol",[a("li",[_._v("boot的目的：跳到C语言中\n"),a("ol",[a("li",[_._v("关闭看门狗，中断，MMU，CACHE")]),_._v(" "),a("li",[_._v("配置系统工作时钟")]),_._v(" "),a("li",[_._v("配置SDRAM的控制器（行地址数、列地址数、多少块，周期性的充电）")]),_._v(" "),a("li",[_._v("让sp指针指向可读可写的设备区间中，满足递减栈的规则\n"),a("ol",[a("li",[_._v("用哪些模式，就要初始化哪些模式下的sp")]),_._v(" "),a("li",[_._v("每个模式的值不能覆盖其余模式")])])]),_._v(" "),a("li",[_._v("代码搬移\n"),a("ol",[a("li",[_._v("执行速度问题（Nor Flash比RAM的速度慢很多），把程序从nor-flash搬移到快速的内存")]),_._v(" "),a("li",[_._v("只把存储器的一部分代码执行出来，把存储在其他位置上的代码搬移到内存上，所以要对相应存储器的控制器进行初始化")])])]),_._v(" "),a("li",[_._v("bl main")])])]),_._v(" "),a("li",[_._v("loader的目的\n"),a("ol",[a("li",[_._v("执行应用逻辑，点灯，uart，load linux kernel")])])])]),_._v(" "),a("h2",{attrs:{id:"链接脚本的构成要素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接脚本的构成要素"}},[_._v("#")]),_._v(" 链接脚本的构成要素")]),_._v(" "),a("ol",[a("li",[_._v("哪一个.o放到代码段的起始位置")]),_._v(" "),a("li",[_._v("所有的.o放到哪个基地址上")]),_._v(" "),a("li",[_._v("代码段、数据段等等是不连续的\n"),a("ol",[a("li",[_._v(".text代码段")]),_._v(" "),a("li",[_._v(".rodata只读数据段")]),_._v(" "),a("li",[_._v(".data初始化数据段")]),_._v(" "),a("li",[_._v(".bss未初始化数据段")])])])]),_._v(" "),a("h2",{attrs:{id:"_6410的启动步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6410的启动步骤"}},[_._v("#")]),_._v(" 6410的启动步骤")]),_._v(" "),a("p",[_._v("上电后，6410会启动片内IROM中的程序(BL0，位于地址0x0800_0000~0x0BFF_FFFF，实际仅32KB)，这部分程序主要是初始化时钟，看门狗等外设，然后把SD卡或者NandFlash中的最开始4K字节的内容(BL1)加载到片内SRAM中(Stepping Stone区域，位于0x0C00_0000~0x0FFF_FFFF，实际仅用了4KB),这4K程序主要完成对SDRAM主存的配置，然后把bootloader全部的程序(BL1+BL2)加载到SDRAM中，并从Stepping Stone中跳转过去。BL2程序会把Nand Flash中的OS镜像加载到主存中，并跳转到OS的入口中运行。")]),_._v(" "),a("h2",{attrs:{id:"异常向量的地址映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常向量的地址映射"}},[_._v("#")]),_._v(" 异常向量的地址映射")]),_._v(" "),a("p",[_._v("根据ARM的手册，一般异常发生以后会被映射到0x0000_0000或者0xFFFF_0000，这可以使用CP15协处理器的SCTLR寄存器去配置（bit13等于0代表异常向量表位于0x0000_0000），")]),_._v(" "),a("h2",{attrs:{id:"arm流水线技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arm流水线技术"}},[_._v("#")]),_._v(" ARM流水线技术")]),_._v(" "),a("ol",[a("li",[_._v("在ARM中，PC指针并不是指向当前正在运行的指令，而是指向当前运行的指令的地址+8（8个字节正好是两条指令，即三级流水线：取址，译码，执行）")])]),_._v(" "),a("h2",{attrs:{id:"arm的协处理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arm的协处理器"}},[_._v("#")]),_._v(" ARM的协处理器")]),_._v(" "),a("ol",[a("li",[_._v("CP15，涉及到CACHE，MMU，中断向量等的管理")]),_._v(" "),a("li",[_._v("CP14，涉及到仿真功能，设计仿真器的时候可能需要")]),_._v(" "),a("li",[_._v("CP12-13，保留为以后使用")]),_._v(" "),a("li",[_._v("CP11一般用于双精度浮点数的计算")]),_._v(" "),a("li",[_._v("CP10用于单精度浮点数的计算")]),_._v(" "),a("li",[_._v("CP8-9，保留为以后使用")]),_._v(" "),a("li",[_._v("CP0-7，ARM公司留个各生产厂家使用")])]),_._v(" "),a("h2",{attrs:{id:"冯诺依曼体系和哈佛体系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冯诺依曼体系和哈佛体系"}},[_._v("#")]),_._v(" 冯诺依曼体系和哈佛体系")]),_._v(" "),a("ol",[a("li",[_._v("一般单片机如MSP430，Cortex-M3等会采用哈佛体系结构，内部集成了Flash和RAM，指令和数据总线分开，虽然总线很多，但是因为在芯片内部，无伤大雅")]),_._v(" "),a("li",[_._v("ARM7，ARM11，Cortex-A8等应用处理器会采用冯诺依曼体系结构，指令和数据总线共用。冯诺依曼体系能够省去相当多的数据总线和地址总线，由于代码和数据共享一块内存，经常会造成数据冲突，速度上产生瓶颈。为了缓解这种情况，引入了CACHE的机制。")]),_._v(" "),a("li",[_._v("ARM早期采用冯诺依曼结构，到了后来CPU主频越来越快，数据吞吐量很大，冯诺依曼已经无法满足。ARM更新了设计，芯片外部还是采用冯诺依曼体系，即一块RAM既存放代码又存放数据，但是芯片内部不采用单一的CACHE，而是采用哈佛体系结构，分成DCACHE和ICACHE两块。")]),_._v(" "),a("li",[_._v("在bootloader期间，还没有严格区分代码段与数据段，代码段有可能会被缓存到DCACHE中，导致修改后的代码无法被缓存到ICACHE中，造成CACHE与主存的不一致，因此在bootloader中需要清DCACHE和ICACHE")])]),_._v(" "),a("h2",{attrs:{id:"linux下查看二进制代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux下查看二进制代码"}},[_._v("#")]),_._v(" Linux下查看二进制代码")]),_._v(" "),a("ol",[a("li",[_._v("hexdump -C file.bin | less，其中-C表示同时显示二进制和ASCII码")])]),_._v(" "),a("h2",{attrs:{id:"大端（big-edian）与小端（little-edian）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大端（big-edian）与小端（little-edian）"}},[_._v("#")]),_._v(" 大端（Big Edian）与小端（Little Edian）")]),_._v(" "),a("ol",[a("li",[_._v("Intel阵营支持小端，摩托罗拉支持大端，早期的ARM公司大小端都支持，通过寄存器配置来选择")]),_._v(" "),a("li",[_._v("摩托罗拉公司的衰落，导致小端格式直接成为市场主流，ARM也放弃了对大端格式的支持")]),_._v(" "),a("li",[_._v("但是在网络协议中，一直保持着大端的数据格式，数据传输也是先传高位再传低位")])]),_._v(" "),a("h2",{attrs:{id:"u-boot-kernel中的死循环高级用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#u-boot-kernel中的死循环高级用法"}},[_._v("#")]),_._v(" u-boot/kernel中的死循环高级用法")]),_._v(" "),a("p",[_._v("见代码如下，其中b\t1b表示跳转到之前一个标号“1”处，即back，b\t1f表示跳转到后面一个标号“1”处，即forward")]),_._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[_._v("1:\t\n\tb\t1b\n1:\n\tb\t1f\n1:\n\tb\t1b\n")])]),_._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[_._v("1")]),a("br"),a("span",{staticClass:"line-number"},[_._v("2")]),a("br"),a("span",{staticClass:"line-number"},[_._v("3")]),a("br"),a("span",{staticClass:"line-number"},[_._v("4")]),a("br"),a("span",{staticClass:"line-number"},[_._v("5")]),a("br"),a("span",{staticClass:"line-number"},[_._v("6")]),a("br")])]),a("h2",{attrs:{id:"vim中跨文件的赋值粘贴"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vim中跨文件的赋值粘贴"}},[_._v("#")]),_._v(" VIM中跨文件的赋值粘贴")]),_._v(" "),a("ol",[a("li",[_._v('打开A文件，光标停在要开始赋值的文字那行，在命令模式下输入："+单字母的变量名+要复制的行数+yy')]),_._v(" "),a("li",[_._v('打开B文件，光标停在要粘贴的文字的那行，在命令模式下输入："+同上面的变量名+p')])]),_._v(" "),a("h2",{attrs:{id:"ddr内存基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ddr内存基本原理"}},[_._v("#")]),_._v(" DDR内存基本原理")]),_._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/fZZiioL.png",alt:"DRAM工作原理"}}),_._v(" "),a("img",{attrs:{src:"http://i.imgur.com/lTlELeY.png",alt:"DRAM如何读写一个字节的数据"}}),_._v(" "),a("img",{attrs:{src:"http://i.imgur.com/q6lcWjG.png",alt:"DDR内存条的构成"}}),_._v(" "),a("img",{attrs:{src:"http://i.imgur.com/ipG0yKZ.png",alt:"多个内存条并存"}}),_._v(" "),a("img",{attrs:{src:"http://i.imgur.com/1F224If.png",alt:"异步DRAM通信时序"}}),_._v(" "),a("img",{attrs:{src:"http://i.imgur.com/3MoeCYQ.png",alt:"异步DRAM与同步DRAM的时序对比"}})]),_._v(" "),a("ol",[a("li",[_._v("DDR SDRAM全称Double Data Rate Synchronize Dynamic Random Access Memory\n"),a("ol",[a("li",[_._v("RAM中的R表示随机，意思是访问任意地址上的数据所花费的时间是一样的，区别于硬盘这类顺序访问存储器")]),_._v(" "),a("li",[_._v("SRAM中的S表示Static，静态内存。静态内存使用DQ触发器来保存一个位，一个位至少需要4~6g个晶体管")]),_._v(" "),a("li",[_._v("DRAM保存一个位只需要一个电容，由于电容值很小，会漏电，需要实时地去刷新一下（读出值，然后写回）")]),_._v(" "),a("li",[_._v("SDRAM中的S表示同步，即CPU会提供一个时钟信号与之同步")])])]),_._v(" "),a("li",[_._v("Word Line也称行地址，Bit Line也称列地址，在DRAM中，每一个地址只保存1位。通过Array的形式堆叠在一起可以一次访问多个位。图中4个array组成了一个bank，8个bank拼在一起组成了一个memory device(即实际的DDR芯片)")]),_._v(" "),a("li",[_._v("DDR SDRAM会在时钟的上升和下降沿都用来读写数据，数据传输速率提高了1倍")])]),_._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/mstLY5e.png",alt:"为什么需要DQS信号"}})]),_._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[_._v("普通的SDRAM可以在时钟上升沿把数据发送到数据总线，在时钟下降沿将数据稳定地锁存到SDRAM中，但是在DDR中，由于时钟的上升沿和下降呀都被使用，数据的稳定时刻DDR无法获知，因此引入了DQS信号来表征数据可以被锁存的稳定时刻")])]),_._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/NQMVHpY.png",alt:"DDR中的DLL机制"}})]),_._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[_._v("DLL(Delay Lock Loop)\n"),a("ol",[a("li",[_._v("CLk信号在DDR芯片内部也会产生延迟")]),_._v(" "),a("li",[_._v("DLL会进一步延迟外部时钟信号，使之加上内部走线延时正好满足一个周期，这样内部时钟上升沿与外部时钟上升沿可以保持一致")]),_._v(" "),a("li",[_._v("所以DDR芯片在上电reset之后需要一段时间来完成DLL的工作")])])])]),_._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/nIZtssr.png",alt:"DDR SDRAM模式寄存器MRS设定"}}),_._v(" "),a("img",{attrs:{src:"http://i.imgur.com/993CUsS.png",alt:"DDR读时序图"}})]),_._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[_._v("典型的读时序过程\n"),a("ol",[a("li",[_._v("行激活")]),_._v(" "),a("li",[_._v("经过tRCD（Row to Column Delay）延时后可以输出列命令")]),_._v(" "),a("li",[_._v("经过tCAS（Column Access Strobe）延时后总线上开始输出数据")]),_._v(" "),a("li",[_._v("一个行操作总共花费的时间为tRAS（Row Access Strobe）")]),_._v(" "),a("li",[_._v("经过tRC（Row Precharge）时间的行预充电")]),_._v(" "),a("li",[_._v("整个过程称作一个cycle，时间为tRC（Row Cycle）")])])])]),_._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/KGr6AoR.png",alt:"DDR写时序图"}})]),_._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[_._v("典型的写时序过程\n"),a("ol",[a("li",[_._v("行激活")]),_._v(" "),a("li",[_._v("经过tRCD的延时后输出列命令")]),_._v(" "),a("li",[_._v("经过tCWD（Command wait delay）的延时后将数据放到总线上")]),_._v(" "),a("li",[_._v("经过tWR（Write Recovery）的延时后，DDR芯片将数据存储到了电容中")]),_._v(" "),a("li",[_._v("经过tRC（Row Precharge）时间的行预充电")])])])]),_._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/qc0yQ5k.png",alt:"典型刷新时序过程"}})]),_._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[_._v("典型的刷新时序过程\n"),a("ol",[a("li",[_._v("一次刷新完成两行，一次刷新花的时间tRFC（Refresh Cycle Time）")]),_._v(" "),a("li",[_._v("tREFI表示平均周期刷新时间间隔")])])]),_._v(" "),a("li",[_._v("Precharge与Refresh的区别\n"),a("ol",[a("li",[_._v("precharge是对两根bitline预充电至VCC/2")]),_._v(" "),a("li",[_._v("refresh是每个一定的时间对电容进行充电（因为电容要漏电），间隔一般为64ms")])])])]),_._v(" "),a("h2",{attrs:{id:"s3c6410的ddr控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3c6410的ddr控制器"}},[_._v("#")]),_._v(" S3C6410的DDR控制器")]),_._v(" "),a("ol",[a("li",[_._v('DRAM控制器可以直接收一个DRAM控制器本身的指令，通过写指令到直接指令寄存器，DRAM控制器可以发送像“Precharge all”,"Autorefresh","NOP","MRS"("EMRS")这样的指令到SDRAM')]),_._v(" "),a("li",[_._v("在自动刷新计数器中，当刷新技术达到刷新周期的值时，控制器便会发出一个自动刷新指令对SDRAM进行周期性的刷新")]),_._v(" "),a("li",[_._v("DRAM控制器最多只能支持两个同一类型的芯片，每个芯片可分配最多256MB的地址空间。")])]),_._v(" "),a("h2",{attrs:{id:"mmu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mmu"}},[_._v("#")]),_._v(" MMU")]),_._v(" "),a("ol",[a("li",[_._v("ARMv6的MMU由协处理器CP15控制，其功能是：地址映射（VA->PA），内存访问权限控制")]),_._v(" "),a("li",[_._v("虚拟地址到物理地址的转换过程：Micro TLB->Main TLB->Page Table Walk")]),_._v(" "),a("li",[_._v("ARMv6的MMU进行地址映射时设计到两种页表，一级页表(first level page table)和二级页表(coarse page table)")]),_._v(" "),a("li",[_._v("关于映射方式有两种：段映射和页映射。段映射只用到一级页表，页映射用到一级页表和二级页表s")]),_._v(" "),a("li",[_._v("关于映射粒度：段映射的映射粒度有两种，1M section和16M supersection；页映射的映射粒度也有两种：4K small page和64K large page")]),_._v(" "),a("li",[_._v("硬件在做地址转换时，如何知道当前是什么映射方式以及映射粒度是多少呢？这些信息可以从页表的入口描述符中获得")]),_._v(" "),a("li",[_._v("一级页表总共包含4096个转换描述符，因为是通过虚拟地址的31：20位寻址的，12位能够表示的数最大是4096")]),_._v(" "),a("li",[_._v("通过虚拟地址的高12位偏移，找到页表中的对应描述符，判断描述符的最后两位，确定是什么转换，10的话表示段转换，01表示粗页(64K)转换,11表示细页(4K)转换。如果判断是段转换，将描述符的高12位取出，这个就是物理的基地址，再和虚拟地址的后20位拼接，就得到对应的物理地址。")])]),_._v(" "),a("h2",{attrs:{id:"制作uimage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#制作uimage"}},[_._v("#")]),_._v(" 制作uImage")]),_._v(" "),a("ol",[a("li",[_._v("工具：mkimage，位于uboot的tools文件夹下")]),_._v(" "),a("li",[_._v("命令使用：\n"),a("ol",[a("li",[_._v("##mkimage -n 'my_kernel' -A arm -O linux -T kernel -C none -a 0x50008000 -e 0x50008040 -d zImage uImage##")])])])]),_._v(" "),a("h2",{attrs:{id:"交叉编译器工具链使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交叉编译器工具链使用"}},[_._v("#")]),_._v(" 交叉编译器工具链使用")]),_._v(" "),a("ol",[a("li",[_._v("readelf\n"),a("ol",[a("li",[_._v("在操作系统基础之上的可执行文件至少包括两个部分，一个是真正的可执行代码的集合，另一个是头信息（Windows下是PE头，Linux下是ELF头），专门给操作系统看的,里面包括首先要运行的程序的入口地址（通过修改该入口地址可以制作木马）")]),_._v(" "),a("li",[_._v("arm-linux-readelf -h u-boot")])])]),_._v(" "),a("li",[_._v("size\n"),a("ol",[a("li",[_._v("读取可执行程序的大小，包括text，data，bss等等")]),_._v(" "),a("li",[_._v("size u-boot")])])]),_._v(" "),a("li",[_._v("nm\n"),a("ol",[a("li",[_._v("查看可执行程序的符号列表（全局标签），T代表全局函数标签，t表示静态函数标签（被static修饰），D代表全局变量标签，d代表静态变量标签（被static修饰）")]),_._v(" "),a("li",[_._v("nm u-boot")])])]),_._v(" "),a("li",[_._v("strip\n"),a("ol",[a("li",[_._v("剔除符号列表，能够把可执行程序变小")])])]),_._v(" "),a("li",[_._v("string\n"),a("ol",[a("li",[_._v("查看可执行程序中的常量字符串")]),_._v(" "),a("li",[_._v("string u-boot")])])]),_._v(" "),a("li",[_._v("objdump\n"),a("ol",[a("li",[_._v("反汇编")]),_._v(" "),a("li",[_._v("objdump -D u-boot")])])]),_._v(" "),a("li",[_._v("objcopy\n"),a("ol",[a("li",[_._v("将ELF头信息剔除，只保留可执行程序中的text，data，bss等段")])])]),_._v(" "),a("li",[_._v("addr2line")])]),_._v(" "),a("h2",{attrs:{id:"为什么内核加载到内存0x50008000处，即偏移0x8000？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么内核加载到内存0x50008000处，即偏移0x8000？"}},[_._v("#")]),_._v(" 为什么内核加载到内存0x50008000处，即偏移0x8000？")]),_._v(" "),a("ul",[a("li",[_._v("Linux内核在内核管理中需要建立MMU表，这个表需要在内存中预留一段空间来保存")])]),_._v(" "),a("h2",{attrs:{id:"u-boot启动linux内核的条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#u-boot启动linux内核的条件"}},[_._v("#")]),_._v(" u-boot启动linux内核的条件")]),_._v(" "),a("ol",[a("li",[_._v("需要在uboot中配置好bootargs环境变量\n"),a("ol",[a("li",[_._v("root=启动根文件系统在哪个设备，如ram，nfs或者flash")]),_._v(" "),a("li",[_._v("init=内核启动后第一个可执行文件init进程从哪里来")]),_._v(" "),a("li",[_._v("console=内核启动时使用哪个设备作为控制台")])])]),_._v(" "),a("li",[_._v("文件系统的部署\n"),a("ol",[a("li",[_._v("ramdisk:内存磁盘类型的文件系统\n"),a("ul",[a("li",[_._v("root=/dev/ram initrd=0x21000000,8M init=/linuxrc console=ttySAC0,115200")]),_._v(" "),a("li",[_._v("测试过程中，需要先将ramdisk的内容（如initrd.img.gz）放在内存的0x21000000")])])]),_._v(" "),a("li",[_._v("如何将initrd.img.gz中的内容取出来？\n"),a("ol",[a("li",[_._v("gunzip initrd.img.gz")]),_._v(" "),a("li",[_._v("sudo mount -t ext2 initrd.img ./swap/")]),_._v(" "),a("li",[_._v("进入swap便能获得文件系统的具体内容")])])]),_._v(" "),a("li",[_._v("nfs\n"),a("ul",[a("li",[_._v("root=/dev/nfs nfsroot=服务器IP地址:根文件系统目录的绝对路径 ip=开发板IP地址 init=/linuxrc console=ttySAC0,115200")])])])])])]),_._v(" "),a("h2",{attrs:{id:"linux系统下查看启动参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux系统下查看启动参数"}},[_._v("#")]),_._v(" Linux系统下查看启动参数")]),_._v(" "),a("ul",[a("li",[_._v("cat /proc/cmdline")])]),_._v(" "),a("h2",{attrs:{id:"根文件系统制作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根文件系统制作"}},[_._v("#")]),_._v(" 根文件系统制作")]),_._v(" "),a("ol",[a("li",[_._v("bin dev etc lib proc usr var这些都是必需的，其他的都是可选的")]),_._v(" "),a("li",[_._v("创建终端会话设备console\n"),a("ol",[a("li",[_._v("sudo mknod console c 5 1")])])]),_._v(" "),a("li",[_._v("查看busybox的链接依赖库\n"),a("ol",[a("li",[_._v("arm-linux-readelf -d busybox | grep NEEDED")]),_._v(" "),a("li",[_._v("一般需要的依赖是libc.so.6和libm.so.6")]),_._v(" "),a("li",[_._v("此外还需要链接库加载器ld-linux.so.3")])])])]),_._v(" "),a("h2",{attrs:{id:"busybox启动控制过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#busybox启动控制过程"}},[_._v("#")]),_._v(" busybox启动控制过程")]),_._v(" "),a("ol",[a("li",[_._v("init->inittab->/etc/init.d/rcS->/etc/init.d/S(0-9)(0-9)*->application")])]),_._v(" "),a("h2",{attrs:{id:"嵌入式常用的工具命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌入式常用的工具命令"}},[_._v("#")]),_._v(" 嵌入式常用的工具命令")]),_._v(" "),a("ol",[a("li",[_._v("设备驱动管理\n"),a("ul",[a("li",[_._v("fdisk fsck hwclock mkdosfs insmod rmmod lsmod mknod modprobe lsusb mdev mount unmount")])])]),_._v(" "),a("li",[_._v("文本编辑处理\n"),a("ul",[a("li",[_._v("mkdir mkfifo ln mv cp touch rm unlink awk cat cut find vi sed wc tar grep head tail less more xargs od stat")])])]),_._v(" "),a("li",[_._v("网络信息配置\n"),a("ul",[a("li",[_._v("udhcpc udhcpd route netstat ping ifconfig")])])]),_._v(" "),a("li",[_._v("系统信息管理\n"),a("ul",[a("li",[_._v("chmode clear date dd df echo free ipcrm ipcs ls ps pwd top uptime kill killall reboot sleep sysctl usleep")])])])]),_._v(" "),a("h2",{attrs:{id:"fstab配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fstab配置文件"}},[_._v("#")]),_._v(" fstab配置文件")]),_._v(" "),a("ol",[a("li",[_._v("fstab是文件系统启动后默认要挂载的文件系统")]),_._v(" "),a("li",[a("code",[_._v("proc /proc proc defaults 0 0")]),_._v("一行配置由6个字段组成\n"),a("ol",[a("li",[_._v("第一个字段表示设备名称")]),_._v(" "),a("li",[_._v("第二个字段表示挂载点")]),_._v(" "),a("li",[_._v("第三个字段表示文件系统类型")]),_._v(" "),a("li",[_._v("第四个字段表示挂载选项")]),_._v(" "),a("li",[_._v("第五个字段表示备份检查，0不检查")]),_._v(" "),a("li",[_._v("第六个字段表示文件系统完整性检查，0不检查")])])])]),_._v(" "),a("h2",{attrs:{id:"常用嵌入式文件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用嵌入式文件系统"}},[_._v("#")]),_._v(" 常用嵌入式文件系统")]),_._v(" "),a("ol",[a("li",[_._v("基于存储设备的文件系统\n"),a("ol",[a("li",[_._v("内存文件系统\n"),a("ol",[a("li",[_._v("tmpfs")]),_._v(" "),a("li",[_._v("ramdisk")])])]),_._v(" "),a("li",[_._v("Flash文件系统\n"),a("ol",[a("li",[_._v("cramfs")]),_._v(" "),a("li",[_._v("squashfs")]),_._v(" "),a("li",[_._v("jffs/jffs2")]),_._v(" "),a("li",[_._v("yaffs/yaffs2")]),_._v(" "),a("li",[_._v("ubifs")])])]),_._v(" "),a("li",[_._v("扩展SD卡文件系统\n"),a("ol",[a("li",[_._v("FAT32")]),_._v(" "),a("li",[_._v("ext2/ext3")])])]),_._v(" "),a("li",[_._v("网络文件系统\n"),a("ol",[a("li",[_._v("NFS")]),_._v(" "),a("li",[_._v("Samba")])])])])]),_._v(" "),a("li",[_._v("基于逻辑的虚拟文件系统\n"),a("ol",[a("li",[_._v("进程文件系统\n"),a("ol",[a("li",[_._v("procfs")])])]),_._v(" "),a("li",[_._v("设备文件系统\n"),a("ol",[a("li",[_._v("devfs（老版本内核使用）")]),_._v(" "),a("li",[_._v("sysfs")])])])])])]),_._v(" "),a("h2",{attrs:{id:"nand-flash硬件特性（以k9k8g08为例）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nand-flash硬件特性（以k9k8g08为例）"}},[_._v("#")]),_._v(" Nand Flash硬件特性（以K9K8G08为例）")]),_._v(" "),a("ol",[a("li",[_._v("该芯片由两个K9F4G08芯片（chip）组成，每个chip包含了4个层（plane），每层1024块（block），每块64页（page），每页（2K+64）字节")]),_._v(" "),a("li",[_._v("由于Nand Flash的工艺不能保证其存储单元在其生命周期中保持性能的可靠，因此，在其生产及使用过程中会产生坏块。\n"),a("ol",[a("li",[_._v("坏块的特征是：编程/擦除这个块时，会产生编程或擦除错误，并反映到状态寄存器相应位上")]),_._v(" "),a("li",[_._v("Nand Flash出错时，一般不会造成整个快或者页不能读取或全部出错，而是整个页中只有一个或者几个位出错。一般使用一种比较专用的校验-ECC")]),_._v(" "),a("li",[_._v("典型的ECC算法如Hanming码，能纠正单比特错误和检测双比特错误，而且计算速度很快，但对1比特以上的错误无法纠正，对2比特以上的错误不能保证检测。利用ECC校验需要额外的空间来存放ECC校验码")]),_._v(" "),a("li",[_._v("Nand Flash中每一个页的主数据区后都有一个称为空闲区域或者冗余区域的存储空间，在Linux驱动中，习惯称为OOB（Out Of Band）区。OOB区用来存放主数据区数据的校验值（ECC校验码），当然，除了存放ECC校验码，该区域还被用作其他用途。比如：标记是否是坏块，存储ECC数据，存储一些和文件系统相关的数据，如yaffs文件系统会在oob中，存放很多和自己文件系统相关的信息。")])])]),_._v(" "),a("li",[_._v("Nand Flash以8个I/O端口多路复用的方式进行寻址。Nand Flash操作是通过向I/O端口发送相应的命令序列完成的。有的命令仅仅需要一个总线周期，如芯片复位命令、状态读写命令。其他的命令，如页的读写和块的擦除，则需要两个总线周期：一个周期用于装载，另一个周期用于执行。在页读写时，需要在相应请求命令发出后，再发出5个地址周期（2列地址和3行地址）进行寻址。在块擦除时，仅需要发出3个行地址周期。\n"),a("ol",[a("li",[_._v("列地址就是页内地址，由于K9K8G08页大小为2K+64字节，因此有效列地址总共12位，即A0~A11")]),_._v(" "),a("li",[_._v("行地址对应页的编号，用于确定具体那一页")])])]),_._v(" "),a("li",[_._v("Nand Flash的寻址单位是页，读写以页为单位，擦除以块为单位。")]),_._v(" "),a("li",[_._v("按照页大小不同，Nand Flash可以分为大页设备和小页设备，大页设备典型大小2048字节，小页设备典型页大小为512字节。对于大页设备，通过8位I/O通常需要5个地址周期寻址，小页设备则只需要4个周期。")])]),_._v(" "),a("h2",{attrs:{id:"mtd设备概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mtd设备概述"}},[_._v("#")]),_._v(" MTD设备概述")]),_._v(" "),a("ol",[a("li",[_._v("MTD（Memory Technology Device）是介于"),a("strong",[_._v("原始闪存设备")]),_._v("与上层应用之间的一个抽象层，为不同类型的闪存设备提供统一的操作接口，以供上层使用。MTD设备通常包括NAND、OneNAND、NOR、AG-AND、ECC'd NOR等")]),_._v(" "),a("li",[_._v("MTD设备具备一些独特的硬件特性，例如，MTD设备由擦除块构成，擦除快能够被写入，但是要想再次写入就必须重新擦除")]),_._v(" "),a("li",[_._v("MTD子系统不处理块设备，例如，MMC、eMMC、SD、CompactFlash等都不属于MTD，这些设备虽然多数内存存储单元都是用Nand Flash，但是他们并不是原始的闪存设备，而是通过集成在芯片内部的FTL（Flash Translation layer），使其具备块设备的特征，因此这些设备属于块设备系统，而不是MTD")]),_._v(" "),a("li",[_._v("闪存设备能够分成若干MTD分区，每一个MTD分区由一片连续的擦除块构成，因此MTD分区是建立在闪存的物理层上的。")])]),_._v(" "),a("h2",{attrs:{id:"nand-flash控制器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nand-flash控制器"}},[_._v("#")]),_._v(" Nand Flash控制器")]),_._v(" "),a("ol",[a("li",[_._v("在上电或系统复位之后，Nand Flash控制器自动加载4KB的启动代码。加载完成后，启动代码将在Stepping Stone中被执行。在自动导入期间，ECC是未被选中状态，因此，前8K的Nand Flash绝对不能有位错误")])]),_._v(" "),a("h2",{attrs:{id:"usb概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usb概述"}},[_._v("#")]),_._v(" USB概述")]),_._v(" "),a("ol",[a("li",[_._v("Mini/Micro USB接口5根连接线中的4号引脚【ID】，用于区分是USB主控端（主机）还是USB设备端（从机）。当该引脚接地时表示是主控端，悬空时表示是设备端")])])])}),[],!1,null,null,null);v.default=l.exports}}]);