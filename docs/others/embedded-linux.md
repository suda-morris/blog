title: Embedded Linux
tags:
  - Linux
categories:
  - Geek Hobbies
author: suda-morris
date: 2015-06-08 22:30:05
---
## 需要知道的知识点
1. ext4文件系统是Linux在PC机上最常用的磁盘文件系统，在嵌入式设备上则常用jffs2文件系统和yaffs2文件系统
2. 在Linux操作系统中。对于SCSI磁盘。用sd*来表示，第一个磁盘x为a，第二个磁盘x为b，以此类推。磁盘上的第1个分区编号为1，第2个分区编号为2，以此类推。
3. swap分区用于Linux在运行期间的虚拟内存使用，其作用类似Windows中的交换文件pagefile.sys
4. ARM core的CPU在复位时通常都从0地址取它的第一条指令

## 开发环境搭建
> 1. 所使用的虚拟机是VirtualBox4.3.12，安装的虚拟机是UbuntuMate14.04
> 2. 使用的开发板是友善出品的Tiny6410
> 3. 虚拟机网络设置成桥接模式(笔记本的以太网卡，切勿错选成无线网卡)
> 4. 虚拟机ip地址：192.168.1.88，网关192.168.1.1

## 系统烧写
1. Uboot中开发板的IP地址:192.168.1.230,网关192.168.1.1
2. 开发板设置从SD卡启动，需要确保有一张烧写好UBoot的SD卡或者SDHC卡，Linux中的烧写方法：
```
#!/bin/sh
#for SDHC Card,total sectors=15523840
#dd iflag=dsync oflag=dsync if=u-boot-sd.bin of=/dev/sdb bs=512 count=16 seek=15522798
#dd iflag=dsync oflag=dsync if=u-boot-sd.bin of=/dev/sdb bs=512 count=512 seek=15522030

#for SD Card,total sectors=1961984
dd iflag=dsync oflag=dsync if=u-boot-sd.bin of=/dev/sdb bs=512 count=16 seek=1961966
dd iflag=dsync oflag=dsync if=u-boot-sd.bin of=/dev/sdb bs=512 count=512 seek=1961198
sync
#BL1:total sectors - 2 - 1024(if your SD Card Size > 2G) -16
#BL2:total sectors - 2 - 1024(if your SD Card Size > 2G) -16 - 512 - 256
```
3. 进入Uboot后，测试能否ping通虚拟主机：ping 192.168.1.88。在这之前可以先看看开发板的IP地址是否与虚拟主机在一个网段内，使用UBoot下的命令：pri
4. 使用nfs命令获取虚拟主机上的uboot二进制文件供烧写(次UBoot是用来从NandFlash启动的，不能错选从SD卡启动的UBoot),成功以后会提示用户该文件的大小，这里记为filesize(切记要使用十六进制表示的数字)
	* nfs 50000000 192.168.1.88:/embeded/KDM/images/v1/u-boot.bin
5. 烧写uboot至NandFlash中
	* nand write.i 50000000 0 $(filesize)	从0地址开始烧写UBoot
6. 使用nfs命令获取虚拟主机上的kernel文件，成功以后会提示用户该文件的大小，这里记为filesize((切记要使用十六进制表示的数字))
	* nfs 50000000 192.168.1.88:/embeded/KDM/images/v1/Image
7. 烧写kernel到NandFlash中
	* nand write.i 50000000 80000 $(filesize)
8. 使用nfs命令获取虚拟主机上的根文件系统文件，成功以后会提示用户该文件的大小，这里记为filesize((切记要使用十六进制表示的数字))
	* nfs 50000000 192.168.1.88:/embeded/KDM/images/v1/yaff2.img
9. 烧写根文件系统到NandFlash中
	* nand write.yaffs 50000000 580000 $(filesize)
10. 根据需要修改启动参数并保存,例如
	* setenv bootargs root=/dev/mtdblock2 console=ttySAC0,115200
	* saveenv

## 测试图形界面程序
 * 图形界面工具使用的触摸屏校准程序为tslib源码附带的校准程序ts_calibrate,所以如果触摸屏没有校准，可以在Linux系统启动后运行/usr/local/bin/ts_calibrate程序对触摸屏进行校准(通过删除/etc/pointercal文件，可以使得图形界面工具自动调用ts_calibrate程序)，校准完毕会在etc目录下生成pointercal标准文件，供触摸屏库程序转换成符合屏幕的坐标，从而达到校准目的。

## 交叉编译器
* arm-linux-gcc是一个“集合命令”，它包含了4个步骤：预处理，汇编，编译和链接，通过链接阶段便生成ELF格式的可执行文件。4个步骤对应执行的程序为arm-linux-cpp，arm-linux-as，ccl，arm-linux-ld。前三个步骤对应的命令行选项为：-E,-S，-c，如果没有任何参数，则代表经过这4个步骤产生可执行文件。
* ELF文件的not stripped属性告诉我们在编译的时候产生的编译阶段需要的符号没有被删除
* 通常被编译出的程序都会使用到系统的动态库，而这些基本的动态库大部分也都是glibc库中的。例如open,read,write,select,ioctl等应用程序中的函数都是libc.so动态库中提供的，而glibc还提供了libm.so(数学库)，libcrypt.so(安全库)，libld.so(加载库)等。其中libld.so作为加载库负责在应用程序运行时，加载程序所使用到的动态库文件。在我们移植系统的过程中，这些最基本的动态库也需要被移植到根文件系统中去，这样才能保证程序被正常启动。
* arm-linux-strip test可以删除可执行文件中不需要的编译符号和段描述信息
* arm-linux-objcopy -O binary -S test test.bin 通常被用来将生成的ELF格式的文件转化为只含有二进制指令和程序数据的文件test.bin.也只有这样的二进制指令文件才能直接被硬件执行。
* arm-linux-dump -D test > test.dis则是反编译，将ELF格式的可执行文件反编译成汇编信息文件test.dis，有助于代码的查看和调试
* arm-linux-readelf -a test | grep 'Shared'用来获取ELF的头信息，grep 'Shared'是获取头信息中test可执行文件调用到的动态文件
* arm-linux-gcc 针对arm11的设置：
	1. --with-cpu=arm1176jzf-s
	2. --with-tune=arm1176jzf-s
	3. --with-float=softfp

## bootloader
* 目标机上的Bootloader通过串口与主机之间进行文件传输，传输协议通常是xmodem/ymodem/zmodem协议中的一种，但是，串口传输速度有限，因此通过以太网连接并借助tftp或者nfs协议来下载文件是个更好的选择
* bootloader的stage1通常包括的步骤：
	1. 硬件设备初始化
		* 屏蔽所有中断
		* 设置CPU的速度和时钟频率
		* RAM初始化
		* 关闭CPU内部指令/数据cache
	2. 为加载Bootloader的stage2准备RAM空间
	3. 复制bootloader的stage2到RAM空间
	4. 设置好堆栈指针sp
	5. 跳转到stage2的C入口点（修改PC寄存器为核实的地址来实现）
* bootloader的stage2通常包括的步骤：
	1. 初始化本阶段要使用到的硬件设备
		* 至少一个串口用来和终端用户进行I/O输出信息
	2. 检测系统内存映射
	3. 将kernel镜像和根文件系统镜像从Flash上读到RAM空间中(需要编写Nand Flash裸驱动)
	4. 为内核设置启动参数
		* linux2.4以后的内核都期望以标记列表的形式来传递启动参数，启动参数标记列表以标记ATAG_CORE尅是，以标记ATAG_NONE结束
		* 每个标记由标识被传递参数的tag_header结构以及随后的参数值数据结构来组成，数据结构tag和tag_header定义在Linux内核源码的include/asm/setup.h头文件中
		* 在嵌入式Linux系统中，通常需要由Bootloader设置的常见启动参数有：ATAG_CORE,ATAG_MEN,ATAG_CMDLINE
	5. 调用内核，跳转到内核第一条指令处，跳转时要满足下列条件
		1. CPU寄存器的设置
			* R0=0
			* R1=机器类型ID，关于Machine Type Number可以参见linux/arch/arm/tools/mach-types
			* R2=启动参数标记列表在RAM中的起始基地址
		2. CPU模式
			*  必须禁止中断(IRQs和FIQs)
			* CPU必须处于SVC模式
		3. Cache和MMU的设置
			* MMU必须关闭
			* 指令Cache可以打开亦可以关闭
			* 数据Cache必须关闭
* U-boot目录结构
	1. 与处理器体系结构或者开发板硬件直接相关
	2. 通用的函数或者驱动程序
	3. U-Boot的应用程序、工具或者文档

## Uboot常用命令
> 1. 使用命令时，可以使用其开头的若干个字母代替它
> 2. 当运行一个命令之后，如果它是可重复执行的（代码中使用U_BOOT_CMD定义这个命令时，第三个参数是1），若想再次运行可以直接输入回车
> 3. Uboot接受的数据都是16进制，输入时可以省略前缀0x

1. 运行`help`命令可以看到所有命令的作用，如果要查看某个命令的使用方法，运行`help 命令名`。可以使用`?`来代替`help`
2. Uboot支持串口下载，网络下载，USB下载，相关命令有：loadb,loads,loadx,loady;tftpboot,nfs;usbslave。使用方法：
	* loadx [off] [baud];off表示文件下载后存放的内存地址，baud表示使用的波特率，如果off参数省略，存放的位置为配置文件中定义的宏CFG_LOAD_ADDR
	* tftpboot [loadAddress] [bootfilename]; loadAddress表示文件下载后存放的内存地址，bootfilename表示要下载的文件名称。loadAddress省略，存放的位置为配置文件中定义的宏CFG_LOAD_ADDR。如果bootfilename省略，则使用单板的IP地址构造一个文件名
	* nfs [loadAddress] [host ip addr:bootfilename];host ip addr表示服务器的IP地址
	* usbslave [wait] [loadAddress]；在PC端使用dnw工具发送文件，U-boot通过USB Device接口接收文件。wait可以取值1或0，表示是否等得数据传输完成，当wait取0时，在后台进行下载，这时在Uboot仍可执行其他操作。下载文件成功后，Uboot会自动创建或者更新环境变量filezise，它表示下载的文件长度，可以在后续命令中使用$(filesize)来引用它
3. 常用的内存操作命令有：查看内存命令md，修改内存命令mm,填充内存命令mw,复制命令cp。这些命令都可以带上后缀".b",".w",".l"表示以字节、字、双字为单位进行操作。
	* md[.b,.w,.l] address [count],表示以字节、字、双字（默认是双字）为单位，显示从地址address开始的内存数据，显示的数据个数为count
	* mm[.b,.w,.l] address,表示以字节、字或双字为单位，从地址address开始修改内存数据，执行mm命令后，输入新数据后回车，地址会自动增加，Ctrl+C退出
	* mw[.b,.w,.l] address value [count],表示以字节、字或双字为单位，往开始地址为address的内存中填充count个数据，数据值为value。
	* cp[.b,.w,.l] source target count,表示以字节、字或双字为单位，从原地址source的内存复制count个数据到目的地址target的内存
	* nm[.b,.w,.l] address，修改内存值,以一种交互式的方式，按q退出
4. 常用的Nand Flash操作命令只有一个，它根据不同的参数进行不同的操作
	* nand info，查看Nand Flash信息
	* nand device [dev]显示或者设置当前使用的Nand Flash
	* nand bad显示Nand Flash的坏块
	* nand scrub彻底擦除整块Nand Flash中的数据，包括OOB。可以擦除软件坏块标志
	* nand erase [clean] [off size],擦除Nand Flash，加上clean时表示在每个块的第一个扇区的OOB区加写入清除标记；off、size表示要擦除的开始偏移地址和长度，如果省略off和size表示要擦除整个Nand Flash
	* nand read[.jffs2] addr off size,从Nand Flash偏移地址off处读出size个字节的数据，存放到开始地址为addr的内存中。是否加后缀.jffs的差别只是读操作时ECC校验方法不同
	* nand write[.jffs2] addr off size,把开始地址为addr的内存中的size个字节数据，写到Nand Flash的偏移地址off处。是否加后缀.jffs的差别只是读操作时ECC校验方法不同
	* nand read.yaffs addr off size，从Nand Flash偏移地址off处读出size个字节的数据（包括OOB区域），存放到开始地址为addr的内存中
	* nand write.yaffs addr off size，把开始地址为addr的内存中的size个字节数据(只要有要写入OOB区域的数据)，写到Nand Flash的偏移地址off处
	* nand dump off，将Nand Flash偏移地址off的一个山区的数据打印出来，包括OOB数据
5. 环境变量命令(下面的命令只是在内存中进行，最后需要使用`saveenv`命令将更改后的所有环境变量写入Flash中)
	* `printenv`命令打印全部环境变量，“printenv name1 name2 ...”打印名字为name1,name2......的环境变量
	* `setenv name value`设置名字为name的环境变量的值为value
	* `setenv name`删除名字为name的环境变量
6. 启动命令,不带参数的`boot`,`bootd`命令都是执行环境变量bootcmd所指定的命令。bootm命令专门用于启动在内存中的用u-boot的mkimage工具处理过的内核镜像
	* "bootm [addr [arg ...]]"命令启动存放在地址addr处的Uboot格式的映像文件（使用Uboot目录tools下的mkimage工具制作得到），[arg ...]表示参数，如果addr参数省略，映像文件所在地址为配置文件中定义的宏CFG_LOAD_ADDR
	* go addr [arg ...]与bootm命令类似，启动存放在地址addr处的二进制文件，[arg ...]表示参数
	* nboot [[[loadAddr] dev] offset]命令将Nand Flash设备dev上偏移地址off处的映像文件复制到内存loadAddr处，然后，如果环境变量autostart的值为yes，就启动这个映像，如果loadAddr参数省略，存放地址为配置文件中定义的宏CFG_LOAD_ADDR。如果dev参数省略，则它的取值为环境变量bootdevice的值，如果offset参数省略，则默认为0

## 根文件系统
1. 所有的Linux发行版在对根文件系统布局上都遵循FHS标准的建议规定。该标准规定了根目录下各个子目录的名称及其存放的内容：
	* /bin：必备的用户命令，例如ls,cp等
	* /sbin:必备的系统管理员命令，例如ifconfig，reboot
	* /dev:设备文件，例如mtdblock0，tty1等
	* /etc:系统配置文件，包括启动文件，例如inittab
	* /lib:必要的链接库，例如C链接库、内核模块
	* /home:普通用户主目录
	* /root:root用户主目录
	* /usr/bin:非必备的用户程序，例如find、du等
	* /usr/sbin:非必备的管理员程序，例如chroot，inetd等
	* /usr/lib：库文件
	* /var:守护进程和工具程序所存放的可变，例如日志文件
	* /proc:用来提供内核和进程信息的虚拟文件系统，有内核自动生成目录下的内容
	* /sys:用来提供内核与设备信息的虚拟文件系统，由内核自动生成目录下的内容
	* /mnt:文件系统挂载点，用于临时安装文件系统
	* /tmp:临时性的文件，重启后将自动清除
2. 编译安装busybox：
	* 下载源码包，解压缩后进入文件夹根目录
	* make defconfig
	* make menuconfig
		* Busybox Settings:选择动态链接C库，指定交叉编译器的prefix为arm-linux-，为各命令安装为指向busybox的软连接，指定busybox的安装位置，选择支持Tab completion和Username completion
		* Applets：基本保持默认设置
	* make -j4
	* make install
3. busybox只用到了2个库，通用C库(libc)、数学库(libm),每个库有4个文件，四个文件中，.a文件是静态库文件，另外三个是：实际的共享链接库（libLIBRARY_NAME-GLIBC_VERSION.so），主修订版本的符号链接，指向实际的共享链接库(libLIBRARY_NAME.so.MAJOR_REVISION_VERSION,一旦程序连接了特定的链接库，将会参用该符号链接)，与版本无关的符号链接，指向主修订版本的符号链接(libLIBRARY_NAME.so,是为编译程序时提供一个通用条目)
4. 当使用`gcc hello.c -o hello -lm`编译程序的时候，gcc会根据-lm的提示，加头(lib)添尾(.so)得到libm.so，从而沿着与版本无关的符号链接(libm.so->libm.so.6)找到libm.so.6并记录在案(hello的ELF头中)，表示hello需要使用libm.so.6这个库文件所代表的数学库中的库函数。而当hello被执行的时候，动态链接库加载器会从hello的ELF头中找到libm.so.6这个记录，然后沿着主修订版本的符号链接(libm.so.6->libm-2.3.6.so)找到实际的共享链接库libm-2.3.6.so从而将其与hello做动态链接。可见**与版本无关的符号链接是供编译器使用的，主修订版本的符号链接是供动态链接库加载器使用的，而实际的共享链接库则是供应用程序使用的** 
5. init进程的主配置文件inittab用于决定init进程要启动哪些子进程，以及如何启动这些子进程。busybox的inittab文件的语法、语义和传统的SYSV的inittab有所不同
	* inittab文件中每个条目用来定义需要init启动的子进程，并确定它的启动方式，格式为<id>:<runlevel>:<action>:<process>,例如：ttySAC0：：ask-first:-/bin/sh
	* <id>表示子进程要使用的控制台，若省略则使用与init进程一样的控制台
	* <runlevel>表示运行级别，busybox init程序这个字段没有意义
	* <action>表示init进程如何空着这个子进程
		* sysinit：以该方式启动的子进程最先被init启动，该子进程只会被启动一次，如该子进程结束，init将不会重新启动它
		* wait：系统执行完sysinit条目后才启动该子进程，该子进程只执行一次，init进程必须等待该子进程结束后才能继续执行启动其他子进程的动作
		* once:系统执行完wait条目后才启动该子进程，该子进程只执行一次，init进程不必等待该子进程的结束就可以执行启动其他子进程的动作
		* respawn：系统执行完once条目后才能启动该子进程，init进程会持续监测该子进程的状态，若发现该子进程退出，会重新启动它
		* askfirst：系统启动完respawn条目后才能启动该子进程，与respawn类似，不过init进程先输出“Please press Enter to active this console”，等用户输入回车后才启动子进程
		* shutdown：当系统关机时启动该子进程
		* restart：Busybox中配置了CONFIG_FEATURE_USE_INITAB，并且init进程接收到SIGUP信号时执行，先重新读取、解析/etc/inittab文件，再执行restart程序
		* ctrlaltdel：按下Ctrl+Alt+Del键时启动该子进程，不过在串口控制台中无法输入它
	* <process>表示进程对应的二进制文件，如果前面有-号，表示该程序是“可以与用户进行交互的”
6. 手工构建/dev目录：新建dev文件夹，在里面`sudo mknod console c 5 1`,它表示穿件console字符设备文件，主设备号是5，次设备号是1
7. 构建/dev目录的方法是使用udev(user dev),mdev是busybox中对udev的简化实现，其工作原理是：操作系统启动的时候会将识别到的所有设备的信息自动导出到/sys目录，在此基础上，用户态的应用程序mdev -s就可以扫描/sys/class和/sys/block中所有的类设备目录，如果在目录中含有名为“dev”的文件，且文件中包含的是设备号，则mdev就利用这些信息为这个设备在/dev下创建设备节点文件
8. Linux系统下实现热插拔的机制：当有热插拔事件产生时，内核就会调用位于/sbin目录下的mdev。这时mdev通过环境变量中的ACTION和DEVPATH(这两个变量是系统自带的)来确定此次热插拔事件的动作以及影响了/dev中的哪个目录。接着会看看这个目录中是否有“dev”的属性文件，如果有就利用这些信息为这个设备在/dev下创建或删除设备节点文件。我们需要告知操作系统，当它发现热插拔事件时应调用mdev，而不是别的程序。
9. 嵌入式Linux对文件系统的要求：
	* 要求文件系统在频繁的文件操作下能够保持较高的读写性能，要求低碎片化
	* Linux下的日志文件系统(XFS,ReiserFS,Ext3等)能保持数据的完整性，但消耗过多的系统资源的弱点使之不能成为嵌入式系统中的主流应用。并且这些都是专门为硬盘类的存储设备进行了优化，对于Flash这类的存储介质并不适用
	* 嵌入式文件系统的载体是以Flash为主的存储介质，Flash的擦除次数是有限的，所以为了延长Flash的使用寿命，应该尽量减少对Flash的读写操作，并尽量使对Flash的写入操作均匀分布在整个Flash上
10. 在内核的配置菜单中可以看到块设备中有哟个ramdisk选项，并可以设置它的大小，默认的大小为4096KB，在配置内核的时候用户也可以指定ramdisk的大小。ramdisk是基于ram的块设备，所以它占据了一块固定内存的大小，并且需要使用mke2fs格式化以及相对应的文件系统的驱动程序去读取设备上的内容。由于ramdisk在很多场合并不太实用，在Linux的2.4版本开始支持了ramfs文件系统，它是一个简单的基于Linux的。可以动态分配大小的内存文件系统，它属于内核虚拟文件系统层(VFS)，与ramdisk相比，并不是基于虚拟在内存中的其他文件系统，例如ext2文件系统。使用方法：
	* mkdir /mnt/ramfs
	* mount -t ramfs none /mnt/ramfs(缺省大小，被限制最大maxsize为内存总和/2)
	* mount -t ramfs none /mnt/ramfs -o maxsize=1000(创建最大大小为1M的ramfs文件系统)
11. tmpfs文件系统既可以使用内存也可以使用磁盘来作为存储介质，并且它的大小和ramfs一样，可以动态分配。**它主要用于减少对闪存不必要的写操作**这唯一目的。因为tmpfs驻留在RAM中，所以写/读/擦除的操作发生在RAM中而不是在闪存中。因此，当将日志消息写入挂载为tmpfs文件系统的目录时，是将其写入RAM而不是闪存中，在重新引导时不会保留它们。它的原理是：
	* 在Linux内核中有虚拟内存的概念，而虚拟内存是由物理内存RAM和交换分区swap组成，这些虚拟内存资源又是由Linux内核中的虚拟内存子系统管理。tmpfs会向虚拟内存子系统申请页来存储文件，但它不知道虚拟内存子系统分配给自己的页是在物理内存还是属于交换分区
12. tmpfs文件系统在内核中的打开方式为：
	* 在内核中选择“File systems--Pseudo filesystems--Virtual memory filesystem support”一项来支持对tmpfs虚拟文件系统的管理
13. 在启动时，经常可以看到启动脚本中有以下内容：
	* `mount none /dev -t tmpfs`
	* 这也是由于Linux系统的设备可以热插拔的原因
14. ramfs实现机制是将cache在物理内存的文件占用的page不标记为可释放，这样虚拟内存管理系统就不会将这些page释放或者交换到swap，从而实现文件总在物理内存中。tmpfs也是存放于内存中，但它可以被VM交换到swap，它其实是ramfs的一个变体
15. jffs文件系统被用到NorFlash和小于64MB的NandFlash闪存中
16. yaffs文件系统在mount的时候需要很少的内存（如果是小页--512B/Page,每1MB NandFlash大约需要4KB内存；大页需要大概1KB RAM/1 MB NandFlash）
17. yaffs文件系统的基本单位是Chunk，相当于页。Chunk中的资料包括两部分：一部分是资料区，占用Flash的一页；另一部分是文件信息以及冗余资料区，占用Flash页的OOB区。其冗余资料主要是ECC校验资料，对于小页的Flash，每页都有6位元祖的ECC资料，对于大页的Flash，每页有24位元祖的ECC资料 
18. yaffs文件系统的第一个块用于存放整个文件系统的信息，所以真实的数据应该从第二个块开始。
19. ubifs在设计与性能上均较yaffs2、jffs2更适合MLC NandFlash。例如：ubifs支持write-back，其写入的资料会被cache，直到有必要写入时才写到Flash，大大降低分散小区块数量并提高I/O效率。

## 交叉编译移植所要修改的环境变量
1. CC编译器，系统默认gcc，需要修改为arm-linux-gcc
2. AR库工具，用以创建和修改库，需要修改为arm-linux-ar
3. LD链接器，系统默认为ld，需要修改为arm-linux-ld
4. RANLIB随机库创建器，系统默认为ranlib，需要修改为arm-linux-ranlib
5. AS汇编器，系统默认为as，需要修改为arm-linux-as
6. NM库查看工具，系统默认为nm，需要修改为arm-linux-nm

## 新建用户与用户组
* 在/etc/passwd中第一行新增：root:x:0:0:Root,,,:/root:/bin/sh
* passwd root,设置root用户密码
* chown root:root /bin/busybox,改变busybox的属主，否则将来u+s后第一个用户进程init的权限将不是root的权限
* chmod u+s /bin/busybox，这使得普通用户能使用passwd修改自己的密码，同时也使login程序能够正常工作
* adduser morris -h /home/morris -s /bin/sh -G morris
* adduser ftp -h /var/ftp -s /bin/sh -G ftp
* adduser ftpuser -h /sdcard/local -s /bin/sh -G ftp
* adduser ftproot -h /sdcard/tmp -s /bin/sh -G ftp

## 移植telnet服务器
1. 如上创建好用户
2. 修改/etc/inittab,使得telnetd开机自动启动：
	* ::once/usr/sbin/telnetd#这里一定要使用once，不能使用respawn，因为telnetd是守护进程，其实现会fork自己后让自己结束
3. 创建并挂载/dev/pts,它将供telnetd服务使用
	* mkdir /dev/pts
	* mount -t devpts devpts /dev/pts
4. 更改/dev/tty和/dev/console的权限，以使普通用户登录系统时也能读写控制终端
	* chmod 666 /dev/tty
	* chmod 600 /dev/console

## 移植ftp服务器
1. [下载vsftpd2.3.5并解压](http://download.chinaunix.net/download/0001000/19.shtml)
2. 修改Makefile，指定交叉编译器`CC=arm-linux-gcc`
3. 修改vsf_findlibs.sh,将所有/lib和/usr/lib前面加上交叉编译器的库目录地址，比如`/embeded/crosstool/arm-wenris-linux-gnueabi/sysroot`
4. make -j4,将生成的vsftp复制到开发板根文件系统相应目录/usr/sbin
5. 复制vsftpd依赖的动态库文件到开发板根文件系统相应目录
6. 将模板配置文件vsftpd.conf复制到开发板/etc目录，修改该配置文件，使有效配置如下：
```
	anonymous_enable=NO
	local_enable=YES
	write_enable=YES
	anon_upload_enable=NO
	anon_mkdir_write_enable=NO
	dirmessage_enable=YES
	xferlog_enable=YES
	connect_from_port_20=YES
	xferlog_file=/var/log/vsftpd.log
	xferlog_std_format=YES
	idle_session_timeout=600
	data_connection_timeout=120
	nopriv_user=ftp
	ftpd_banner=Welcome to WenRis FTP service
	listen=YES
```
7. 由于vsftp源代码程序一定要使用一个目录/usr/share/empty,所以必须要预先创建它
8. 修改/etc/inittab,使得vsftpd在开机时候自动启动：
	* ::respawn:/usr/sbin/vsftpd

## 移植httpd服务器
1. 增加用户www：`adduser -S -D -H www`
2. 修改/etc/inittab文件，指名httpd的目录和运行账户：
	* `::once:/usr/sbin/httpd -h /www -u www`
3. httpd运行时会以普通用户www的身份访问/dev/null设备，因此需要在rcS脚本中修改/dev/null的权限：`chmod 666 /dev/null`
4. 创建http服务器的主目录和主文件
	* `mkdir /www`
	* `echo "this is my first web site" > /www/index.html`

## 移植boa网页服务器
1. [获取源码，并解压缩](http://www.boa.org/)
2. 进入解压后的文件夹 内部的 src文件夹，对源文件进行如下修改：
```
由于arm-linux-gcc 编译器版本过高，对语法的支持有一些改变，所以需要修改compat.h中的
     #define TIMEZONE_OFFSET(foo) foo##->tm_gmtoff
为：

     #define TIMEZONE_OFFSET(foo) foo->tm_gmtoff
不然在编译的时候会提示如下错误：
    util.c: 100: 1: pasting “t” and “->” does not give a valid preprocessing token make: [util.o] Error1
```

```
将boa.c 文件225-227三行的文件注释掉
 if (setuid(0) != -1) {
                        DIE(”icky Linux kernel bug!”);
        }
为
/*
         if (setuid(0) != -1) {
                        DIE(”icky Linux kernel bug!”);
                }
*/

，否则，但以root权限启动boa服务器的时候，会出现以下错误：boa.c:226 - icky Linux kernel bug!:
```
3. 然后生成Makefile：./configure
4. 修改生成的Makefile：默认生成的Makefile针对x86平台，我们的目标是针对嵌入式平台，所以需要修改编译器:
```
更改Makefile的31行和32行：
CC = gcc 
CPP = gcc -E
更改为
CC = arm-linux-gcc
CPP = arm-linux-gcc -E
```

5. 在当前目录下编译Boa源文件： make
6. 将生成的boa可执行程序复制到根文件系统的/usr/sbin目录下
7. 将boa.conf文件复制到根文件系统/etc/boa文件夹下面，并且作如下修改：
```
(1) 修改25行的port端口，用来设置服务器监听的端口：
# Port: The port Boa runs on.  The default port for http servers is 80.
# If it is less than 1024, the server must be started as root.

Port 80
(2) 注释43行的监听IP地址：默认监听该主机上的所有IP地址
#Listen 192.68.0.5
(3) 修改53、54行的user和Group 启动的UID和GID，使其以root身份启动
#  User: The name or UID the server should run as.
# Group: The group name or GID the server should run as.

User root
Group root
(4) 修改116行的DocumentRoot地址，即客户端要显示的HTML页面存放位置
# DocumentRoot: The root directory of the HTML documents.
# Comment out to disable server non user files.

DocumentRoot /usr/local/boa
(5) 修改输入网页输入主机IP时要显示的页面：这里设为index.html
 # DirectoryIndex: Name of the file to use as a pre-written HTML
# directory index.  Please MAKE AND USE THESE FILES.  On the
# fly creation of directory indexes can be _slow_.
# Comment out to always use DirectoryMaker

DirectoryIndex index.html
(6) 修改CGI程序存放的位置：以http://IP/cgi-bin/cginame 的方式运行cgi 程序时将在/usr/local/boa/cgi-bin 目录下寻找该程序
# ScriptAlias: Maps a virtual path to a directory for serving scripts
# Example: ScriptAlias /htbin/ /www/htbin/

ScriptAlias /cgi-bin/ /usr/local/boa/cgi-bin/
```

8. 创建/var/log/boa/ 目录，这样Boa服务器启动时会在该目录下创建日志文件
9. 将Linux系统上/etc/mime.types 文件复制到根文件系统的/etc 目录下，否则Boa服务器启动不起来
10. 修改/etc/inittab,使得vsftpd在开机时候自动启动：
	* ::once:/usr/sbin/boa
11. 注意事项：
	* 有时候boa服务器并不能随系统启动，运行 /sbin/boa 命令会提示：gethostbyname:: Success，需要如下修改
		* `修改boa.conf 文件将  #ServerName  www.your.org.here  改为 ServerName  www.your.org.here`

## 移植zlib库
1. [下载zlib库,解压缩](http://download.chinaunix.net/download.php?id=24014&ResourceID=12241)
2. 进入终端，声明几个重要的环境变量：
```
export CC=arm-linux-gcc
export AR=arm-linux-ar
export LD=arm-linux-ld
export RANLIB=arm-linux-ranlib
export STRIP=arm-linux-strip
export CC_FOR_BUILD=gcc
```
3. ./configure --shared --prefix=$PWD/results
4. make -j4
5. make install
6. 成功后把lib里面的库文件复制到根文件系统对应目录，并把库文件和头文件复制到交叉编译器的对应文件夹中，注意复制到时候带上参数 *-P*

## 移植libxml2库
1. [下载libxml2库，解压缩](http://download.chinaunix.net/download/0007000/6095.shtml)
2. 进入终端，声明几个重要的环境变量：
```
export CC=arm-linux-gcc
export AR=arm-linux-ar
export LD=arm-linux-ld
export RANLIB=arm-linux-ranlib
export STRIP=arm-linux-strip
export CC_FOR_BUILD=gcc
```
3. ./configure --prefix=$PWD/results --host=arm-linux --target=arm-linux
4. make && make install
5. 将生成的lib和include移植到交叉编译器，将bin文件，lib文件移植到开发板根文件系统中的bin目录和lib目录中

## 移植SQLite数据库
1. [获取源码,并解压缩](http://sqlite.org)
2. 配置并进行交叉编译和安装
	* `./configure --enable-shared --prefix=/work/rootfs/sqlite/result --host=arm-linux`
	* `make -j4 && make install` 
3. 最终在result文件夹下面会得到四个文件夹:bin include lib share
4. 将bin文件夹下的程序放到根文件系统的usr/bin 目录下
5. 将lib文件夹下的动态库及其一个软连接复制到根文件系统的lib目录下，并将lib文件下的所有的动态链接库文件复制到交叉编译器的链接lib文件夹下
6. 将include文件夹下的头文件复制到交叉编译器的头文件路径中

## 移植PHP5.4.42
1. [下载php源代码，解压缩](http://php.net/downloads.php)
2. 执行如下配置选项,配置之前需要先交叉编译好zlib，libxml2，sqlite3，iconv的库文件，然后在下面的脚本中指名其路径
```
./configure --prefix=/opt/php-arm \
--with-config-file-path=/opt/php-arm/etc \
--host=arm-linux \
--disable-cli \
--disable-fileinfo \
--disable-debug \
--disable-rpath \
--enable-ftp \
--enable-inline-optimization \
--enable-pdo \
--enable-bcmath \
--enable-calendar 
--enable-sockets \
--enable-wddx \
--enable-mbstring \
--enable-mbregex \
--enable-sysvsem \
--with-pear \
--with-regex=system \
--with-xmlrpc \
--with-gettext \
--with-sqlite3 \
--with-pdo-sqlite=/embeded/WenRisOS/rootfs/sqlite-3.8.10.2/result \
--with-libxml-dir=/embeded/WenRisOS/rootfs/third-libs/libxml2 \
--with-zlib-dir=/embeded/WenRisOS/rootfs/third-libs/zlib \
--with-iconv-dir=/embeded/WenRisOS/rootfs/third-libs/iconv \
```

3. configure执行完成以后，查看Makefile文件，确保里面的交叉编译器是arm-linux-gcc,重点检查：CC,CPP;检查EXTRA_LIBS是否有-liconv,-lxml2;检查头文件包含路径是否指向交叉编译的include路径(将所有的/usr/include替换掉交叉编译器对应的/usr/include)
4. make && make install
5. 将prefix所指路径的文件安装到开发板对应的地方(在这里也是开发板的/opt/php-arm文件下)
6. 在开发板/opt/php-arm夹下新建文件夹etc，存放php配置文件php.ini(从源代码中复制一份修改名字即可)

## 移植嵌入式ssh服务器-dropbear
1. [下载源码包，解压缩](http://matt.ucc.asn.au/dropbear/)
2. 配置：
```
\#!/bin/sh
./configure --prefix=$PWD/results \
--host=arm-linux \
--with-zlib=/embeded/WenRisOS/rootfs/third-libs/zlib

make 
make scp
make install
cp scp results/bin
arm-linux-strip results/bin/* results/sbin/*
```
3. 将生成的bin，sin放到开发板相应文件夹下
4. 登陆开发板，创建dropbear配置目录，并生成密钥
```
mkdir /etc/dropbear
cd /etc/dropbear
dropbearkey -t rsa -f dropbear_rsa_host_key
dropbearkey -t dss -f dropbear_dss_host_key
```

## 编译tslib
1. [源码下载地址](http://download.csdn.net/detail/liuqiqi677/3177449)
2. 解压缩，进入tslib源码文件夹
3. `./autogen.sh`生成configure源代码配置文件
4. `./configure --host=arm-linux --disable-h3600 --disable-arctic2 --disable-mk712 --disable-collie --disable-corgi --disable-ucb1x00 --with-gnu-ld --prefix=/embeded/tslib_install ac_cv_func_malloc_0_nonnull=yes` 这里，--host的含义是你要安装的目标系统，后面的--disable 是因为我们不编译对指定触摸屏的支持，我们选择支持的是Linux的input子系统，--with-gnu-ld是确认使用GNU的LD连接器，因为我们使用的就是GNU的编译器，所以选择这一项。--prefix选项是指定安装的位置。ac_cv_func_malloc_0_nonnull会在./configure执行阶段测试GNU内置的malloc函数的功能是否可用或者说是否兼容
5. 进入安装目录，这里是/embeded/tslib_install,进入etc目录，打开ts.conf进行修改.其中pthres主要用于处理触摸屏的灵敏度，而variance和dejitter分别用于处理触摸屏的滤波和去噪的算法，linear是触摸屏的坐标变换。
	* module_raw input
	* module pthres pmin=1
	* module variance delta=30
	* module dejitter delta=100
	* module linear


## Qt移植(Qt支持的嵌入式Linux平台需要有frambuffer支持)
1. [下载软件包，解压缩](http://download.qt.io/development_releases/qt/5.4/5.4.0-rc/single/)
2. 进入源代码根文件目录，执行配置命令如下：
```
\#!/bin/sh
./configure -prefix /opt/qt4.8.5-arm \
-opensource \
-confirm-license \
-release \
-shared \
-embedded arm \							#选择Qt的嵌入式平台为arm平台
-xplatform qws/linux-arm-g++ \
-platform qws/linux-x86-g++ \
-depths 4,8,16,18,24,32 \
-optimized-qmake \
-qt-sql-sqlite \
-qt-zlib \
-webkit \
-qt-gfx-transformed \
-qt-libjpeg \							#使Qt支持jpeg图片显示
-qt-libpng \
-qt-libtiff \
-qt-libmng  \
-qt-freetype \
-little-endian \
-host-little-endian \
-make libs \
-nomake tools \
-nomake docs \
-make examples \
-make demos \
-qt-kbd-linuxinput \
-no-qt3support \
-no-phonon \
-no-phonon-backend \
-no-gif \
-no-dbus \
-no-rpath \
-qt-mouse-tslib \						#使Qt支持触摸方式，需要额外指定tslib的路径
-qt-mouse-pc \
-no-mouse-linuxtp \
-qt-gfx-linuxfb \
-no-neon \
-no-nis \
-no-cups \
-no-openssl \
-no-fast \
-no-scripttools \
-no-mmx \
-no-3dnow \
-no-sse \
-no-sse2 \
-I /embeded/WenRisOS/rootfs/tslib/target-arm/include \
-L /embeded/WenRisOS/rootfs/tslib/target-arm/lib \
-R /embeded/WenRisOS/rootfs/tslib/target-arm/lib \
-D__ARM_ARCH_5TEJ_						#选择处理器平台
```
3. make && make install
4. 将生成的lib文件和plugins文件部署到根文件系统中，字体保存在lib下的fonts目录下

## MP3播放器madplay移植
1. [进入官网下载3个源码包](ftp://ftp.mars.org/pub/mpeg/)
2. 移植libid3tag库需要依赖zlib库，所以需要先前把zlib的头文件和动态链接库文件保存在交叉编译器的头文件路径和库文件路径下
3. 进入libid3tag源码文件夹，执行配置命令：./configure --prefix=/embeded/WenRisOS/rootfs/madplay/target-arm --host=arm-linux
4. make && make install，把生成的头文件和库文件放入交叉编译器中
5. 进入libmad源码文件夹，执行配置命令：./configure --prefix=/embeded/WenRisOS/rootfs/madplay/target-arm --host=arm-linux
6. make && make install,把生成的头文件和库文件放入交叉编译器中
7. 进入madplay源码文件夹，执行配置文件：./configure --prefix=/embeded/WenRisOS/rootfs/madplay/target-arm --host=arm-linux
8. make && make install

## gdb/gdbserver
> gdb和gdbserver可以看作两个不同的命令。gdb放在宿主机上运行，而gdbserver被放在开发板上运行。启动gdbserver运行制定的需要调试的可执行文件，而在宿主机中使用gdb来运行同样的可执行文件，通过串口或者tcp就可以达到远程调试的目的。由于宿主机gdb所运行的程序和gdbserver是一样的，都是arm指令的elf文件，那么作为宿主机gdb工具必须能够明确地知道遵循ABI接口的ARM的ELF文件格式。因此，传统的宿主机自身携带的gdb不能用于调试嵌入式ARM程序，我们需要下载gdb的源代码，增加对ARM的ELF格式的支持才能够调试ARM程序。
1. 编译宿主机上的arm-linux-gdb程序（如果在busybox中添加过了gdb的选项，不必再编译arm-linux-gdb了，已经有了）
	* ./configure --target=arm-linux --enable-werror=no
	* --target指定宿主机调试的目标机类型，在编译的时候会编译出符合arm-linux的调试的gdb工具
	* --enable-werror的含义是在编译的时候增加-Werror选项，这样会把一些原本的警告信息当做错误。由于gdb的部分代码写的并不规范，所以-Werror会报出一些错误
2. 进入gdb/gdbserver目录下，执行以下命令：
	* ./configure --host=arm-linux --target=arm-linux
	* make 
	* arm-linux-strip gdbserver
	* --host指定编译出的工具运行在什么平台
	* --target为指定的编译器配置目标环境
3. gdb远程调试命令
	* Target remote ip：port executable；target命令用于连接一个远程的gdbserver，ip和port为远程主机的ip和端口号，executable为gdbserver需要调试的程序，这个文件在gdb所在的宿主机上不能被strip，否在调试需要的symbols就不存在了
	* file executable；在gdb调试之前，需要使用file命令获取可执行文件的符号，以获得调试需要的符号列表
	* show/set sysroot；因为调试的时候需要用到交叉编译器的库文件和工具，所以必须制定，set用于设置sysroot路径，show用于显示gdb内置变量的值
	* show/set solib-search-path;solib-search-path必须设置，因为远程调试的程序在运行时会调用到动态库，需要把所有的动态库都加载到这个变量中，像LD_LIBRARY_PATH一样
	* List/l;调试的时候我们可以通过这个命令查看源代码
	* break/b linenumber/function;设置断点，在运行时会停止在设置的断点处，断点可以设置为代码的行号，也可以在指定的函数处停止
	* continue/c;继续，使用gdb/gdbserver，没有run这个命令，因为程序实际通过stub在gdbserver所对应的开发板上运行
	* next/n;执行一条指令，但不会进入函数内部
	* print/p;打印变量的值
	* step/s;单步跟踪，如果有函数，会进入函数内部，可以通过finish命令退出函数
	* quit/q;退出gdb调试环境
4. 步骤演示
	* 开发板执行arm-linux-gdbserver命令，开启调试服务端程序test：arm-linux-gdbserver 192.168.1.230:6410 test;命令的参数类型为<ip>:<port> <app>,ip为开发板的网络地址，端口号由用户指定，代表服务应用程序所使用的网络端口，app为需要调试的应用程序的名字
	* 宿主机把调试文件载入gdb调试器（可执行文件必须要有调试信息，比如编译时候加上-g，Qt下是qmake CONFIG+=debug）：arm-linux-gdb test
	* 向应用程序传递参数，比如：set args -qws
	* 确认参数是否被正学设置：show args
	* 设置交叉编译器动态库文件路径：set sysroot /embeded/wenris-xtools/arm-wenris-linux-gnueabi/sysroot;如果在交叉编译的时候指定--with-sysroot，则可以省略。最后通过show sysroot命令查看是否设置成功
	* 设置程序运行时的动态库：set solib-search-path /work/qt/qt-4.7-arm/lib:/work/qt/tslib_install/lib:/work/qt/tslib_install/lib/ts
	* 链接到gdbserver：target remote 192.168.1.230:6410
	* 执行gdb相关的代码调试命令进行远程调试