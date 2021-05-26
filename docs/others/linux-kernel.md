title: Linux Kernel Introduction
tags:
  - Linux
categories:
  - Geek Hobbies
author: suda-morris
date: 2015-07-20 23:30:54 +0800
---
## 内核make流程
1. make %config和make menuconfig的目的是为了生成.config文件，而Kconfig作为生成make menuconfig等图形配置界面工具而存在
2. .config 文件中决定了内核中的哪些代码被编译进内核，哪些代码被当做模块编译
3. make根据.config中的描述，通过解析Makefile文件来进行编译，最终生成zImage文件
4. 流程中设计的文件与命令，再加上Linux内核的scripts目录构成了内核的Kbuild机制，内核通过这种方式，最终编译得到内核镜像文件zImage

## KBuild机制实现原理
1. 从编译过程来看，每一个被编译的目录下都会生成一个build-in.o文件，他们都由自己目录下的源代码编译生成，所有目录下的build-in.o文件最终链接生成vmlinux文件，最后由内核压缩程序加工vmlinux生成内核压缩镜像文件zImage
2. 总原理来看，Kbuild机制只会把obj-y的值编译进内核。每个Makefile文件中都有这个变量，只不过obj-后面一半都跟着一个变量，这个变量的值来自于.config。
3. 待编译目录下的Makefile，如有Kbuild，则Kbuild优先，唯一使用Kbuild而不是Makefile的就是顶层目录

## Kconfig语法
1. config
	* 为menu或者choice中的一个选项条目
	* config后面常跟一个变量名，比如ARM，那么在.config中将以CONFIG_ARM=y或n的形式出现
	* 下一行写该变量的取值类型,可以是bool,tristate,string,hex,int
	* default为变量缺省值，可以被用户设置值覆盖
	* prompt后边是出现在配置菜单中的对应于一个配置选项的文字，没有prompt条目，将使得用户不能在配置界面中显示并配置该配置选项
	* depends on var表示该变量必须在var被设置的情况下才能进行设置，否则取值为n，即使default为y
	* select var表示它将影响到变量var，使得var至少应该配置为y或者m
	* help中的文字将作为配置界面中的帮助信息
2. menu
	* 在menu和endmenu中间可配置若干config条目
3. choice
	* 在choice和endchoice之间可定义若干config条目。choice中的config条目只能有2种类型：bool或者tristate，且不能同时有这两种变量。对于bool型变量只能在多个选择中选择1个为y；对于tristate型变量，要么将多个设置为m，要么仅将1个设为y，其余为n。
4. comment
	* 用于定于帮助信息，将出现在配置界面的第一行，并且还会出现在配置文件.config中作为注释
5. source
	* 由于内核源代码中大多数目录下都有各自的Kconfig文件，因此需要一种手段将所有的Kconfig文件组织为一个整体。这就是source的功能，它用于引入另一个Kconfig文件，有点类似于C语言中的#include

## Makefile文件精解
```C
#如果CONFIG_ATL1=y，将递归进入本目录的子目录atl1，并根据该子目录下的Makefile文件的内容决定该子目录如何继续拧编译，否则将不进入本目录的子目录atl1进行编译
obj-$(CONFIG_ATL1) += atl1/

#如果.config中变量CONFIG_GIANFAR=y，那么将变异本目录下的gianfar.c,gianfar_ethtool.c,gianfar_mii.c,gianfar)sysfa.c文件并将其功能集成进zImage；如果.config文件中变量CONFIG_GIANFAR=m，那么将编译本目录下的gianfar.c,gianfar_ethtool.c,gianfar_mii.c,gianfar_sysfs.c文件生成模块gianfar.ko；否则将编译gianfar.c,gianfar_ethtool.c
gianfar_mii.c,gianfar_sysfa.c
obj-$(CONFIG_GIANFAR) += gianfar_driver.o
gianfar_driver-objs := gianfar.o\
						gianfar_ethtool.o\
						gianfar_mii.o\
						gianfar_sysfs.o
```

## zImage文件生成过程
1. 内核代码首先被编译生成vmlinux，放在Linux源码的顶层目录下
2. 这个vmlinux可执行文件又通过arm-linux-objcopy命令转化为二进制代码文件Image（放在arch/arm/boot目录下），其实这个Image文件才是真是的内核代码文件，因为这个文件会比较大，所以内核会对它做压缩处理
3. 为了最大化减小Image的体积，内核调用gzip工具吧Image压缩成piggy.gz文件
4. 为了让内核具有自引导功能，在arch/arm/boot/compressed目录下有head.o,misc.o两个文件构成解压和自引导代码，而让真实的piggy.gz文件也参与编译，最终生成了梁歪一个vmlinux文件，放在arch/arm/boot/compressed目录下，并最终调用arm-linux-objcopy生成二进制文件zImage。
5. 综上，zImage文件由arch/arm/boot/compressed目录下的head.S和misc.c文件（自解压程序）+内核真实代码文件组成

## Linux内核体系结构
1. 内核和用户空间的应用程序使用不同的保护地址空间。每个用户空间的进程都使用自己的虚拟地址空间，内核则占用单独的地址空间，一般情况下，应用程序无法直接访问内核空间地址。因此，应用程序想访问内核必须通过某种特殊的方式从用户空间切换到内核空间。这个特殊的方法称为：系统调用
2. 考虑到频繁的系统调用会影响操作系统的性能（切换开销、硬件损耗等），标准C库GNU C Library（glibc）提供了新的连接内核的接口，这些接口同样通过系统调用访问内核，不过通常都带有缓冲区，将数次操作合并为一次，以有效减少系统调用的次数
3. 综上，Linux内核可以分为3层：
	1. 最上面一层是系统调用接口，它实现了一些基本功能，如read和write。
	2. 系统调用接口之下是体系架构无关的内核，这部分内核对于Linux支持的所有处理器体系结构是通用的。
	3. 其下是体系架构相关的部分，通常称为BSP。

## 内核配置过程
1. 运行make menuconfig时，配置工具首先分析与体系结构对应的arch/<arch>/Kconfig文件，arch/<arch>/Kconfig文件除本身包含一些与体系结构相关的配置项和配置菜单以外，还通过source语句引入下一层的Kconfig文件。

## 内核头文件命名规则
1. `#include <asm/xxx.h>`：CPU相关的头文件
2. `#include <linux/xxx.h>`：平台无关的头文件
3. `#include <plat/xxx.h>`：芯片公司相关的头文件
4. `#include <mach/xxx.h>`：开发板相关的头文件

## 内核组件
1. Linux内核主要由系统调用（SCI），进程管理（PM），内存管理（MM），虚拟文件系统（VFS），网络协议栈（NET），CPU体系结构和设备驱动（DD）等7个组件组成
	1. SCI层提供了某些机制执行从用户空间到内核的函数调用。这些接口依赖于体系结构。
	2. 进程管理的重点是进程的执行。在内核中这些进程称为线程，代表了单独的处理器虚拟化（线程代码、数据、堆栈和CPU寄存器）。在用户空间，通常使用进程这个术语，不过Linux实现并没有区分这两个概念（进程和线程）。内核通过SCI提供了一个应用程序编程接口来创建一个新进程（fork、exec、kill、exit），并在它们之间进行通信和同步
	3. 内核管理的另外一个重要资源是内存，为了提高效率，内存按照内存页的方式进行管理，页大通常是4KB。Linux内存管理主要负责内存的分配和释放，以及物理地址到虚拟地址的映射等
	4. 虚拟文件系统是Linux内核中非常有用的一个组件，因为它为文件系统提供了一个通用的接口抽象。VFS在SCI和内核支持的文件系统之间提供了一个交换层。在VFS上面，是对诸如open、close、read和write之类的系统调用函数的一个通用抽象。在VFS下面是对文件系统的抽象，它定义了上层函数的实现方式。文件系统层之下是缓冲区缓存，它为文件系统层提供了一个通用函数集，这个缓存层通过将数据保留一段时间，优化对物理设备的访问。缓冲区缓存之下是设备驱动程序，它实现了特定物理设备的接口。
	5. 网络协议栈在设计上采用分层思想，从上到下分为系统调用接口、协议无关接口层、网络协议层、设备无关接口层和设备驱动层。其中协议无关层就是socket层，提供了一组通用函数来支持各种不同协议。

## 字符设备驱动
1. 设备号
	1. 内核使用dev_t来描述设备号，其实质是unsigned int32位整数，其中高12位是主设备号，低20位是次设备号
	2. int register_chrdev_region(dev_t from,unsigned count,const char* name);调用该函数向内核注册设备号
2. 设备信息的描述
```C cdev
struct cdev
{
	struct kobject kobj;
	struct module *owner;
	const struct file_operations *ops;
	struct list_head list;
	dev_t dev;
	unsigned int count;
}
```
3. 设备行为的描述
```C file_operations
struct file_operations
{
	struct module *owner;
	...
	ssize_t (*read)(struct file*,char __user*,size_t,loff_t*);
	ssize_t (*write)(struct file*,const char __user*,size_t loff_t*);
	int (*open)(struct inode*,struct file*);
	int (*release)(struct inode*,struct file*);
	...
}
```
4. 相关的注册函数
	1. int cdev_add(struct cdev*p,dev_t dev,unsigned count);
