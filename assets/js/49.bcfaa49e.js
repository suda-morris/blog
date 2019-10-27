(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{308:function(v,_,i){"use strict";i.r(_);var l=i(2),t=Object(l.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("p",[v._v("title: Linux Basic\ntags:")]),v._v(" "),i("ul",[i("li",[v._v("ARM\ncategories:")]),v._v(" "),i("li",[v._v("Geek Hobbies\nauthor: suda-morris\ndate: 2015-11-12 15:40:17 +0800")])]),v._v(" "),i("hr"),v._v(" "),i("h2",{attrs:{id:"linux内核组成部分"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linux内核组成部分"}},[v._v("#")]),v._v(" Linux内核组成部分")]),v._v(" "),i("ol",[i("li",[v._v("内存管理\n"),i("ol",[i("li",[v._v("进程管理负责控制进程对CPU的访问，如任务的创建、调度和终止等。任务调度是进程管理最核心的工作，由Linux内核调度器来完成。Linux内核调度器根据一定算法来选择最值得运行的进程")]),v._v(" "),i("li",[v._v("运行态：已经获得了资源，并且进程正在被CPU执行进程既可以运行在内核态，也可运行在用户态\n"),i("ol",[i("li",[v._v("内核态：内核和驱动所运行时的状态，程序处于特权阶级，能够访问系统的任何资源")]),v._v(" "),i("li",[v._v("用户态：用户程序运行的状态，处于非特权阶级，不能随意访问系统资源，必须通过驱动程序方可访问，用户态程序运行的状态，处于非特权阶级，不能随意访问系统资源，必须通过驱动程序方可访问，用户态程序可通过系统调用进入内核态。")])])]),v._v(" "),i("li",[v._v("就绪态：当系统资源已经可用，但由于前一个进程还没有执行完而释放CPU，准备进入运行状态")]),v._v(" "),i("li",[v._v("可中断睡眠状态：当进程处于可中断等待状态时，系统不会调度改程序执行。当系统产生一个中断或者释放了进程正在等待的资源，或者进程收到一个信号，都可以被唤醒进入就绪状态或者运行态")]),v._v(" "),i("li",[v._v("不可中断睡眠状态：处于中断等待状态，但是该进程只能被使用wake_up（）函数明确唤醒的时候才可进入就绪状态。")]),v._v(" "),i("li",[v._v("暂停状态：当进程收到SIGSTOP、SIGSTP、SIGTTIN或者SIGTTOU就会进入暂停状态，收到SIGCONT信号即可进入运行态")]),v._v(" "),i("li",[v._v("僵死态：进程已经被停止运行，但是其父进程还没有询问其状态\n"),i("img",{attrs:{src:"http://i.imgur.com/bBBsOdX.png",alt:"Linux进程状态和转换"}})])])]),v._v(" "),i("li",[v._v("内存管理\n"),i("ul",[i("li",[v._v("内存管理的主要作用是控制和管理多个进程，使之能够安全的共享主内存区域。当CPU提供内存管理单元MMU时，内存管理为各进程实现虚拟地址到内存物理地址的转换。在32位系统上，Linux内核将4G空间分为1G内核空间（3~4G）和3G（0~3G）用户控件，通过内存管理，每个进程都可以使用3G的用户空间")])])]),v._v(" "),i("li",[v._v("文件系统\n"),i("ul",[i("li",[v._v("Linux内核支持众多的逻辑文件系统，如Ext2、Ext3、Ext4、btrfs、NFS、VFAT等。VFS则是Linux基于各种逻辑文件系统抽象出的一种内存中的文件系统，隐藏了各种硬件设备的细节，为用户提供了同意的操作接口，是用户访问各种不同文件系统和设备时，不用区分具体的逻辑文件系统。")])])]),v._v(" "),i("li",[v._v("网络接口\n"),i("ul",[i("li",[v._v("Linux对网络支持相当完善，网络接口提供了对各种网络标准的存取和各种网络硬件的支持，接口可分为网络协议和网络驱动程序。网络协议部分负责实现每一种可能的网络传输协议。网络设备驱动程序负责与硬件设备通讯，每一种可能的硬件设备都有相应的设备驱动程序")])])]),v._v(" "),i("li",[v._v("进程间通信\n"),i("ul",[i("li",[v._v("支持进程间各种通信机制，如管道、命令管道、信号、消息队列、内存共享、信号量和套接字等。\n"),i("ol",[i("li",[v._v("管道通常用于具有亲缘关系的父子进程或者兄弟进程间通信，是半双工的，数据只能往一个方向流动，先入先出，与自来水管很相似。如果双方胡同时，需要建立两个管道")]),v._v(" "),i("li",[v._v("命名管道突破了进程间的亲缘关系限制，即非父子、兄弟进程之间也可以相互通信")]),v._v(" "),i("li",[v._v("信号是软件中断，用于在多个进程之间传递一步信号。")]),v._v(" "),i("li",[v._v("信号能传递的信息很有限，而消息队列正好弥补了这点。")]),v._v(" "),i("li",[v._v("共享内存常用于不同进程间进行大量数据传递。Linux下每个进程都有自己的独立空间，各自都不能直接访问其他进程的空间。")]),v._v(" "),i("li",[v._v("信号量用于进程同步。只有获得了信号量的进程才可以运行，没有获得信号量的进程则只能等待。")]),v._v(" "),i("li",[v._v("套接字起源于BSD，也常称“BSD套接字”，用于多个进程间通信，可以基于文件，也可以基于网络。\n"),i("img",{attrs:{src:"http://i.imgur.com/fk3Ryjy.png",alt:"Linux操作系统基本体系结构"}})])])])])])]),v._v(" "),i("h2",{attrs:{id:"设置主板支持虚拟化"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#设置主板支持虚拟化"}},[v._v("#")]),v._v(" 设置主板支持虚拟化")]),v._v(" "),i("ol",[i("li",[v._v("进入BIOS（F2或者F10等等）")]),v._v(" "),i("li",[v._v("找到Intel Virtualization Technology选项，设置为Enable")]),v._v(" "),i("li",[v._v("设置好后重启电脑")])]),v._v(" "),i("h2",{attrs:{id:"虚拟网卡有三种模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#虚拟网卡有三种模式"}},[v._v("#")]),v._v(" 虚拟网卡有三种模式")]),v._v(" "),i("ol",[i("li",[v._v("桥接模式\n"),i("ol",[i("li",[v._v("这种情况下，虚拟机虚拟出来的操作系统就像是局域网中的一台独立的主机，它可以访问网内任何一台主机。在桥接模式下，虚拟系统和宿主机的关系就像连接在同一个Hub上的两台电脑。用户需要手工为虚拟系统配置IP地址、子网掩码，而且还要和宿主机器处于同一网段，这样虚拟系统才能和宿主机器进行通信。同时，由于这个虚拟系统是局域网中的而一个独立的主机系统，那么就可以手工配置它的TCP/IP配置信息，以实现通过局域网的网关或罗尤其访问互联网。在进行嵌入式Linux开发，要目标板通过NFS挂载虚拟机的NFS共享目录的话，必须将虚拟王珂配置为桥接模式")])])]),v._v(" "),i("li",[v._v("NAT模式\n"),i("ol",[i("li",[v._v("使用NAT模式，就是让虚拟机系统借助NAT（网络地址转化）功能，通过宿主机器在的网络来访问公网。也就是说，使用NAT模式可以实现在虚拟系统里访问互联网。NAT模式下的虚拟系统的TCP/IP配置信息是由VMnet8（NAT）虚拟网络的DHCP服务器提供的，虚拟机无法正常对主机锁链网络中的其他主机提供普通的而络服务，如TFTP、NFS和FTP等。采用NAT模式最大的优势是虚拟系统接入互联网非常简单，用户不需要进行任何其他的配置，只需要宿主机器能访问互联网即可")])])]),v._v(" "),i("li",[v._v("Host-Only模式\n"),i("ol",[i("li",[v._v("在某些特殊的网络调试环境中，要求将真实环境和虚拟环境隔开，这是用户就可采用仅主机（Host-Only）模式。在Host-Only模式中，所有的虚拟系统是可以相互通信的，但虚拟系统和真实的网络是被隔离开的。")])])])]),v._v(" "),i("h2",{attrs:{id:"简单的shell"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#简单的shell"}},[v._v("#")]),v._v(" 简单的Shell")]),v._v(" "),i("ol",[i("li",[v._v("cd -:切换至之前的工作目录")]),v._v(" "),i("li",[v._v("ls -lash:查看当前目录文件信息")]),v._v(" "),i("li",[v._v("pwd：查看当前路径")]),v._v(" "),i("li",[v._v("mkdir -p：创建多级目录")]),v._v(" "),i("li",[v._v("rmdir：删除空目录")]),v._v(" "),i("li",[v._v('alias rm="rm -vi"：为rm -vi取别名')]),v._v(" "),i("li",[v._v("rm -rf:强制删除某些文件或者目录")]),v._v(" "),i("li",[v._v("touch a：创建a文件，文件大小为0")]),v._v(" "),i("li",[v._v("file a：读取a文件的文件头并识别文件类型。a文件必须具有可读属性")]),v._v(" "),i("li",[v._v("more/less：两个命令都能用来浏览文本文件，可以分页查看文件内容，空格翻页。文件浏览完毕，按键盘q退出。相比来说，less命令更加灵活，支持键盘Page Up和Page Down键，可任意向前后翻页浏览，并且还支持文本搜索。使用less打开文件后，输入/abc可在文本中搜索字符串abc")]),v._v(" "),i("li",[v._v("head/tail：这两个命令可分别查看文件头部和文件尾部，一般用于查看ASCII文件。默认显示10行，加上参数-n【数字】可以指定显示行数或者加上参数-c【数字】指定显示的字节数")]),v._v(" "),i("li",[v._v("cat：cat命令可以将一个或者多个文件输出到标准输出上，可以用于文件查看")]),v._v(" "),i("li",[v._v("文件合并：cat [选项] 文件1 文件2 ... [>文件3]\n"),i("ol",[i("li",[v._v("选项\n"),i("ul",[i("li",[v._v("-n ：从1开始对输出进行编号")]),v._v(" "),i("li",[v._v("-b：类似于-n，从1开始编号，但是忽略空白行")]),v._v(" "),i("li",[v._v("-s：遇到连续两行或者以上的空白行，就替换为一行空白行")])])])])]),v._v(" "),i("li",[v._v("文件压缩/解压：tar [选项] 文件\n"),i("ol",[i("li",[v._v("tar是UNIX系统的一个文件打包工具，只是连续首位相连的将文件堆放起来，并不具备压缩功能，但是加上选项，tar可以调用其它压缩/解压工具，能够实现文件的压缩和解压")]),v._v(" "),i("li",[v._v("选项\n"),i("ul",[i("li",[v._v("-c：创建存档文件，与-x相斥")]),v._v(" "),i("li",[v._v("-t：列出档案文件的文件列表")]),v._v(" "),i("li",[v._v("-x：解包存档文件，与-c相斥")]),v._v(" "),i("li",[v._v("-A：合并存档文件")]),v._v(" "),i("li",[v._v("-d：比较存档文件与源文件")]),v._v(" "),i("li",[v._v("-r：追加文件到存档文件末尾")]),v._v(" "),i("li",[v._v("-u：更新存档文件")]),v._v(" "),i("li",[v._v("-f：指定存档文件，与其他选项同时使用时，必须在最后，如tar -xjvf a.tar.bz2")]),v._v(" "),i("li",[v._v("-v:显示详细处理信息")]),v._v(" "),i("li",[v._v("-C：转到指定目录，常用于解开存档文件")]),v._v(" "),i("li",[v._v("-j：调用bzip2程序")]),v._v(" "),i("li",[v._v("-z：调用gzip程序")]),v._v(" "),i("li",[v._v("-Z：调用compress程序")]),v._v(" "),i("li",[v._v("--exclude=PATH：排除指定文件或者目录，常用于打包文件")])])])])]),v._v(" "),i("li",[v._v("文件复制：cp [选项] 源文件/目录 目的文件/目录\n"),i("ol",[i("li",[v._v("选项：\n"),i("ul",[i("li",[v._v("-a：保留链接，文件属性并递归复制，等同于-dpR组合，常用于复制目录")]),v._v(" "),i("li",[v._v("-d：复制时保留链接")]),v._v(" "),i("li",[v._v("-f：若目标文件已经存在，则直接删除而不提示")]),v._v(" "),i("li",[v._v("-i：若目标文件已经存在，需要用户确认操作，与-f相反")]),v._v(" "),i("li",[v._v("-p：除复制文件内容外，把访问权限和修改时间也复制到新文件中")]),v._v(" "),i("li",[v._v("-f：递归复制，递归复制指定目录下的文件和目录")]),v._v(" "),i("li",[v._v("-v：显示文件复制过程")])])])])]),v._v(" "),i("li",[v._v("创建链接：ln [选项] 源文件/目录 目标文件\n"),i("ol",[i("li",[v._v("硬链接通过索引节点进行链接，相当于源文件的镜像，占用源文件一样大小的空间，修改其中任何一个，另外一个都会进行同样的改动。给一个文件创建硬链接后，文件属性的硬连接数会增加。硬链接不能跨越文件系统，只能在同一个文件系统内进行链接，且不能对目录文件建立硬链接，给目录文件建立硬链接会出错")]),v._v(" "),i("li",[v._v("软连接和硬链接不同，软连接是产生一个新文件，这个文件指向另一个文件的位置，类似于Windows下的快捷方式。软连接可以跨越文件系统，且用于任何文件，包括目录文件")])])]),v._v(" "),i("li",[v._v("网卡配置：ifconfig 网络接口 [选项] 地址/参数\n"),i("ol",[i("li",[v._v("选项：\n"),i("ul",[i("li",[v._v("-a：查看系统拥有的全部网络接口")]),v._v(" "),i("li",[v._v("网络接口如eth0：指定操作某个网口")]),v._v(" "),i("li",[v._v("broadcast：设置网口的广播地址")]),v._v(" "),i("li",[v._v("netmask：设置网口的子网掩码")]),v._v(" "),i("li",[v._v("hw ether：设置网卡物理地址（如果驱动不支持则无效）")]),v._v(" "),i("li",[v._v("up：激活指定网卡")]),v._v(" "),i("li",[v._v("down：关闭指定网卡")])])])])]),v._v(" "),i("li",[v._v("安装和卸载文件系统\n"),i("ol",[i("li",[v._v("linux允许多个文件系统存在于同一个系统中，也允许用户在系统运行中安装内核所支持的文件系统。例如，讲一个FAT格式的U盘插入到linux系统中。")]),v._v(" "),i("li",[v._v("linux安装文件系统：mount [参数] [设备名] [挂载点]\n"),i("ol",[i("li",[v._v("参数：\n"),i("ul",[i("li",[v._v("-a：挂载/etc/fstab文件中列出的所有文件系统")]),v._v(" "),i("li",[v._v("-r：以只读的方式挂载")]),v._v(" "),i("li",[v._v("-w：以可写的方式挂载（默认）")]),v._v(" "),i("li",[v._v("-v：显示详细安装信息")]),v._v(" "),i("li",[v._v("-t<文件系统类型>：指定文件系统类型，常见的有：\n"),i("ul",[i("li",[v._v("ext/ext2/ext3/ext4:Linux常用文件系统")]),v._v(" "),i("li",[v._v("msdos：MS-DOS的FAT，即FAT16")]),v._v(" "),i("li",[v._v("vfat：Windows系统的FAT，FAT32")]),v._v(" "),i("li",[v._v("nfs：网络文件系统")]),v._v(" "),i("li",[v._v("ntfs：Windows2000/NT/XP的ntfs文件系统")]),v._v(" "),i("li",[v._v("auto：自动检测文件系统")])])]),v._v(" "),i("li",[v._v("-o<选项>：指定挂载时的一些选项，常用有：\n"),i("ul",[i("li",[v._v("defaults：使用默认值（auto，nouser，rw，suid）")]),v._v(" "),i("li",[v._v("suid/nosuid：确认/不确认suid和sgid位")]),v._v(" "),i("li",[v._v("user/nouser：允许/不允许一般用户挂载")]),v._v(" "),i("li",[v._v("codepage=XXX：指定codepage")]),v._v(" "),i("li",[v._v("iocharset=XXX：指定字符集")]),v._v(" "),i("li",[v._v("ro：以只读方式挂载")]),v._v(" "),i("li",[v._v("rw：以读写方式挂载")]),v._v(" "),i("li",[v._v("remount：重新安装已经安装了的文件系统")]),v._v(" "),i("li",[v._v("loop：挂载loopback设备以及ISO文件")])])])])])])]),v._v(" "),i("li",[v._v("挂载点必须是一个已经存在的目录")]),v._v(" "),i("li",[v._v("一个挂载点可以被多个设备/文件重复挂载，只是后一次挂载将覆盖前一次内容，卸载后可用")]),v._v(" "),i("li",[v._v("使用多个-o参数的时候，-o只用一次，参数之间用半角逗号隔开")]),v._v(" "),i("li",[v._v("例如，挂载FAT格式的U盘：\n"),i("ol",[i("li",[v._v("mount -t vfat /dev/sda1 /mnt")])])]),v._v(" "),i("li",[v._v("nfs挂载，将远程主机主机Linux的某个共享目录挂载到嵌入式系统本地，当成本地设备进行操作：\n"),i("ol",[i("li",[v._v("mount -t nfs 192.168.1.138:/home/morris/lpc/mnt -o nolock")]),v._v(" "),i("li",[v._v("nolock表示禁用文件锁，当连接到一个旧版本的NFS服务器时常加该选项")])])]),v._v(" "),i("li",[v._v("此外，嵌入式开发中常用的文件系统还有cramfs，jffs2，yaffs2以及ubifs等，特别是用于NOR Flash的jffs2和用于NAND Flash的yaffs/yaffs2,ubifs等，在进行系统操作中通常需要对各设备进行挂载或者卸载，需要在挂载的时候指定正确的文件系统类型。\n"),i("ul",[i("li",[v._v("挂载yaffs2分区的命令示例：mount -t yaffs2 /dev/mtdblock2 /mnt")]),v._v(" "),i("li",[v._v("挂载ubifs分区的命令示例：mount -t ubifs ubi0:rootfs /mnt")])])]),v._v(" "),i("li",[v._v("文件系统卸载：umount 挂载点")])])]),v._v(" "),i("li",[v._v("使用sudo命令需要管理员将用户添加到sudoer组中，一般在/etc/sudoer文件中修改")]),v._v(" "),i("li",[v._v("linux中，对文件的操作都是先保存在缓存中，并没有立即写入磁盘，经系统调度后方可写入磁盘。如果修改了缓存，还没来得及写到磁盘就断电，自然就会造成文件改变丢失。要避免这种情况，就是修改文件后，立即强制进行一次文件同步操作，将缓存的内容写入磁盘，确保文件系统的完整性。能完成这样功能的命令是sync。只需要在关闭文本编辑器后再shell输入sync即可")]),v._v(" "),i("li",[v._v("文件搜索，find 路径 选项 其他\n"),i("ol",[i("li",[v._v("最常用的就是根据文件名来查找，加上-name就可以了，还可以支持通配符，进行模糊搜索。例如：find arch/arm/ -name mux*.c")])])]),v._v(" "),i("li",[v._v("字符串搜索： grep 选项\n"),i("ol",[i("li",[v._v('例如：grep "pcf8563" -R arch/arm')]),v._v(" "),i("li",[v._v("关键字最好加上双引号，特别是包含空格的关键字。")]),v._v(" "),i("li",[v._v("-R表示递归查找")])])]),v._v(" "),i("li",[v._v("执行Shell脚本有多种方式：\n"),i("ol",[i("li",[v._v("点+斜线+文件名，这种方式要求文件必须具有可执行权限")]),v._v(" "),i("li",[v._v("点+空格+文件名，这种方式不要求文件一定具有可执行权限")]),v._v(" "),i("li",[v._v("sh+空格+文件名，这种方式不要求文件一定具有可执行权限")]),v._v(" "),i("li",[v._v("source+空格+文件名，这种方式不要求文件一定具有可执行权限")])])])]),v._v(" "),i("h2",{attrs:{id:"重定向"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#重定向"}},[v._v("#")]),v._v(" 重定向")]),v._v(" "),i("ol",[i("li",[v._v("Linux Shell终端启动的时候会打开3个标准文件：标准输入（stdin）、标准输出（stdout）和标准错误（stderr）。shell从标准输入（通常是键盘）接收命令，命令执行结果信息打印到标准输出（通常是终端屏幕）上，如有错误信息，则打印到标准错误（通常是终端屏幕）上。")]),v._v(" "),i("li",[v._v("Shell允许用户对输入输出进行重定向。输出重定向允许将输出信息从标准输出重定向到其他文件上，也可以重定向到某个设备如打印机上。")]),v._v(" "),i("li",[v._v("重定向在Linux下用“>”和“>>”表示，“>”表示输出到一个新文件中，而“>>”则表示输出到现有文件的末尾。如果文件已经存在，直接操作文件，否则将创建新文件。")]),v._v(" "),i("li",[v._v("echo命令将内容回显到标准输出上，使用echo命令加上重定向可以创建一个带内容的非空文件。")]),v._v(" "),i("li",[v._v("回显内容如果不加引号，则用单空格替代多个连续空格，如果加了引号，则原封不动回显")])]),v._v(" "),i("h2",{attrs:{id:"使用内核模块和驱动"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用内核模块和驱动"}},[v._v("#")]),v._v(" 使用内核模块和驱动")]),v._v(" "),i("ol",[i("li",[v._v("加载（插入）模块\n"),i("ol",[i("li",[v._v("linux能够动态加载和卸载模块。如果某些功能平时用不到，可以不编译进内核，而采取模块方式编译，在需要的时候再插入内核，不再需要的时候卸载。linux中最常见的模块是内核驱动")]),v._v(" "),i("li",[v._v("insmod [选项] 模块 [符号名称=值]，常用选项\n"),i("ol",[i("li",[v._v("-f：强制将模块载入，不检查目前kernel版本与模块编译时的kernel是否一致")]),v._v(" "),i("li",[v._v("-k：将模块设置为自动卸载")]),v._v(" "),i("li",[v._v("-p：测试模块是否能正确插入")]),v._v(" "),i("li",[v._v("-x：不导出模块符号")]),v._v(" "),i("li",[v._v("-X：导出模块所有外部符号（默认）")]),v._v(" "),i("li",[v._v("-v：显示执行过程")])])])])]),v._v(" "),i("li",[v._v("查看系统已经加载的模块：lsmod，其实际上就是列出/proc/modules的内容")]),v._v(" "),i("li",[v._v("卸载驱动模块：rm [选项] 模块，常用选项\n"),i("ol",[i("li",[v._v("-f：强制卸载正在被使用的模块，非常危险。需要内核支持CONFIG_MODULE_FORCE_UNLOAD使能，否则无效")]),v._v(" "),i("li",[v._v("-w：通常情况下不能卸载正在被使用的模块，加上-w选项，指定模块将会被孤立，直到不再被使用")]),v._v(" "),i("li",[v._v("-s：将错误信息写入syslog，而不是标准错误")]),v._v(" "),i("li",[v._v("-v：显示执行过程")])])]),v._v(" "),i("li",[v._v("自动处理可加载模块：insmod/rmmod分别用于加载和卸载模块，但是每次只能加载/卸载一个模块，如果一个模块依赖于多个模块，则需要进行多次操作，比较繁琐。modprobe命令集加载/卸载功能于一身，并且可以自动解决模块的依赖关系。modprobe [选项] 模块[符号=值]，常用选项：\n"),i("ol",[i("li",[v._v("-C<文件>：不使用默认配置文件，使用指定文件作为配置文件")]),v._v(" "),i("li",[v._v("-i：忽略配置文件中的加载和卸载命令")]),v._v(" "),i("li",[v._v("-r：卸载指定模块，包括依赖模块")]),v._v(" "),i("li",[v._v("-f：强制安装")]),v._v(" "),i("li",[v._v("-l：显示所有匹配模块")]),v._v(" "),i("li",[v._v("-a：安装所有匹配的模块")]),v._v(" "),i("li",[v._v("--show-depends：显示模块的依赖关系")]),v._v(" "),i("li",[v._v("-v：显示执行过程")]),v._v(" "),i("li",[v._v("-q：不显示任何信息")]),v._v(" "),i("li",[v._v("-V：显示版本信息")])])]),v._v(" "),i("li",[v._v("modprob处理模块时忽略模块的路径，这要求系统模块和驱动是按照make modules_install方式安装的，即模块必须放在/lib/modules/"),i("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[i("mjx-math",{staticClass:" MJX-TEX"},[i("mjx-mo",{staticClass:"mjx-n"},[i("mjx-c",{attrs:{c:"("}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"u"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"n"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"a"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"m"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"e"}})],1),i("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[i("mjx-c",{attrs:{c:"2212"}})],1),i("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[i("mjx-c",{attrs:{c:"r"}})],1),i("mjx-mo",{staticClass:"mjx-n"},[i("mjx-c",{attrs:{c:")"}})],1),i("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[v._v("目")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[v._v("录")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[v._v("下")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[v._v("，")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[v._v("并")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[v._v("且")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[v._v("有")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[v._v("正")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[v._v("确")]),i("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[v._v("的")])],1),i("mjx-TeXAtom",{attrs:{space:"4"}},[i("mjx-mo",{staticClass:"mjx-n"},[i("mjx-c",{attrs:{c:"/"}})],1)],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"l"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"i"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"b"}})],1),i("mjx-TeXAtom",[i("mjx-mo",{staticClass:"mjx-n"},[i("mjx-c",{attrs:{c:"/"}})],1)],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"m"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"o"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"d"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"u"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"l"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"e"}})],1),i("mjx-mi",{staticClass:"mjx-i"},[i("mjx-c",{attrs:{c:"s"}})],1),i("mjx-TeXAtom",[i("mjx-mo",{staticClass:"mjx-n"},[i("mjx-c",{attrs:{c:"/"}})],1)],1)],1)],1),v._v("(uname -r)/modules.dep文件，modprobe根据该文件来寻找和解决依赖关系")],1),v._v(" "),i("li",[v._v("如果系统不能自动创建设备节点，加载驱动后，则需要为驱动建立对应的设备节点，否则无法通过驱动来操作设备。mknod 设备名 设备类型 主设备号 次设备号")])]),v._v(" "),i("h2",{attrs:{id:"环境变量"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[v._v("#")]),v._v(" 环境变量")]),v._v(" "),i("ol",[i("li",[v._v("Linux是一个多用户操作系统，每个用户都有自己专有的运行环境，用户所使用的环境由一系列变量所定义，这些变量被称为环境变量，系统环境变量一般都是大写")]),v._v(" "),i("li",[v._v("常见的环境变量：\n"),i("ol",[i("li",[v._v("PATH：决定了Shell将到哪些目录中寻找命令或程序，这个变量是在日常使用中经常需要修改的变量")]),v._v(" "),i("li",[v._v("TERM：指定系统终端")]),v._v(" "),i("li",[v._v("SHELL：当前用户shell类型")]),v._v(" "),i("li",[v._v("HOME：当前用户主目录")]),v._v(" "),i("li",[v._v("LOGNAME：当前用户的登录名")]),v._v(" "),i("li",[v._v("USER：当前用户名")]),v._v(" "),i("li",[v._v("HISTSIZE：历史命令记录数")]),v._v(" "),i("li",[v._v("HOSTNAME：主机名")]),v._v(" "),i("li",[v._v("LANGUGE：语言相关的环境变量，多语言可以修改此环境变量")]),v._v(" "),i("li",[v._v("MAIL：当前用户的邮件存放目录")]),v._v(" "),i("li",[v._v("PS1：基本提示符，对于root用户是#，对于普通用户是$")]),v._v(" "),i("li",[v._v("PS2：附属提示符，默认是“>”")]),v._v(" "),i("li",[v._v("LS_COLORS:ls命令结果颜色显示")])])]),v._v(" "),i("li",[v._v("在shell下通过$符号来引用环境变量，使用echo可以查看某个具体环境变量的值")]),v._v(" "),i("li",[v._v("使用env或者printenv命令可以查看系统全部的环境变量设置")]),v._v(" "),i("li",[v._v("修改系统配置文件以达到修改环境变量的目的\n"),i("ol",[i("li",[v._v("修改/etc/profile文件会影响使用本机的全部用户")]),v._v(" "),i("li",[v._v("修改~/.bashrc则仅仅影响当前用户")])])])]),v._v(" "),i("h2",{attrs:{id:"linux目录树标准与文件系统"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linux目录树标准与文件系统"}},[v._v("#")]),v._v(" Linux目录树标准与文件系统")]),v._v(" "),i("ol",[i("li",[v._v("文件层次标准（FHS）对Linux根文件系统的基本目录结构做了比较详细的规定\n"),i("ol",[i("li",[v._v("bin：基本命令的程序文件，里面不能再包含目录")]),v._v(" "),i("li",[v._v("boot：Bootloader静态文件")]),v._v(" "),i("li",[v._v("dev：设备文件")]),v._v(" "),i("li",[v._v("etc：系统配置文件，配置文件必须是静态文件，不能是二进制文件")]),v._v(" "),i("li",[v._v("home：存放各用户的个人数据")]),v._v(" "),i("li",[v._v("lib：基本的共享库和内核模块")]),v._v(" "),i("li",[v._v("media：可移动介质的挂载点")]),v._v(" "),i("li",[v._v("mnt：临时的文件系统挂载点")]),v._v(" "),i("li",[v._v("opt：附件的应用程序软件包")]),v._v(" "),i("li",[v._v("root：root用户目录")]),v._v(" "),i("li",[v._v("sbin：基本的系统命令二进制文件")]),v._v(" "),i("li",[v._v("srv：系统服务的一些数据")]),v._v(" "),i("li",[v._v("tmp：临时文件")]),v._v(" "),i("li",[v._v("usr\n"),i("ol",[i("li",[v._v("/usr/bin:众多的应用程序")]),v._v(" "),i("li",[v._v("/usr/sbin:超级用户的一些管理程序")]),v._v(" "),i("li",[v._v("/usr/doc:linux文档")]),v._v(" "),i("li",[v._v("/usr/lib:常用的动态链接库和软件包的配置文件")]),v._v(" "),i("li",[v._v("/usr/man:帮助文档")]),v._v(" "),i("li",[v._v("/usr/src:源代码")]),v._v(" "),i("li",[v._v("/usr/local/bin:本地增加的命令")]),v._v(" "),i("li",[v._v("/usr/local/lib:本地增加的库")])])]),v._v(" "),i("li",[v._v("var：可变数据")])])]),v._v(" "),i("li",[v._v("Linux下所有文件的描述结构都是相同的，包含索引节点和数据\n"),i("ol",[i("li",[v._v("索引节点：又称I节点，是Linux文件系统用来记录文件信息的一种数据结构，信息包括文件名、文件长度、文件权限、存放位置、所属关系、创建和修改时间。文件系统维护了一个索引节点的数组，每个文件都与索引节点数组中的唯一元素对应，索引节点在数组中的索引号称为索引节点号。每个文件都有一个索引号与之对应，而一个索引节点号可以对应多个文件。")]),v._v(" "),i("li",[v._v("数据：文件的实际内容，可以是空的，也可以非常大，并且拥有自己的结构")])])]),v._v(" "),i("li",[v._v("Linux系统中，文件名以点号（.）开始的文件是隐藏文件，用ls命令不加-a将看不到这类文件")]),v._v(" "),i("li",[v._v("设备文件\n"),i("ol",[i("li",[v._v("设备是一种特殊的的文件，除了存放在文件I节点中的信息外，它们不包含任何数据，有效的设备文件与相应的设备对应，通过设备文件，可以操作与之对应的硬件设备")]),v._v(" "),i("li",[v._v("设备文件包括字符设备和块设备文件。字符设备按照字符操作设备，如键盘、中断等；块设备文件以块为单位操作设备，如磁盘、光盘等。Linux系统的设备文件都放在/dev目录下，用ls -la命令可以查看各设备的属性")])])]),v._v(" "),i("li",[v._v("Linux支持多种文件系统，且同时存在于一个一个运行的系统中，查看/proc/filesystems文件，可以看到系统支持的全部文件系统")]),v._v(" "),i("li",[v._v("proc文件系统\n"),i("ol",[i("li",[v._v("proc是Linux系统中的一种特殊的文件系统，是内核和内核模块用来向进程发送消息的机制，只存在于内存中，实际上是一个伪文件系统。用户和应用程序可通过/proc获得系统的信息，还可以改变内核的某些参数。")]),v._v(" "),i("li",[v._v("/proc/cpuinfo：CPU信息")]),v._v(" "),i("li",[v._v("/proc/meminfo：物理内存，交换空间信息")]),v._v(" "),i("li",[v._v("/proc/mounts：已加载的文件系统列表")]),v._v(" "),i("li",[v._v("/proc/devices：可用设备的列表")]),v._v(" "),i("li",[v._v("/proc/filesystems：被支持的文件系统")]),v._v(" "),i("li",[v._v("/proc/modules：已加载的模块")]),v._v(" "),i("li",[v._v("/proc/version：内核版本")]),v._v(" "),i("li",[v._v("/proc/cmdline：系统启动时输入的内核命令行参数")])])]),v._v(" "),i("li",[v._v("sysfs文件系统\n"),i("ol",[i("li",[v._v("sysfs是Linux2.6引入的新型文件系统是一个基于内存的文件系统，它的作用是将内核的信息以文件的方式提供给用户程序使用。该文件系统的目录层次结构严格按照内核的数据结构组织，除了二进制文件外，sysfs文件内容均以ASCII格式保存，且一个文件只保存一个数据，另外，一个文件不可大于一个内存页（通常为4096字节）")]),v._v(" "),i("li",[v._v("sysfs提供一种机制，使得可以显式地描述内核对象，对象属性及对象间关系。sysfs有两组接口，一组针对内核，用于将设备映射到文件系统中，另一组针对用户程序，用于读取或操作这些设备\n"),i("img",{attrs:{src:"http://i.imgur.com/yE7Xrtx.png",alt:"sysfs内部结构与外部表现"}})]),v._v(" "),i("li",[v._v("sysfs产生了一个包含所有系统硬件的层次视图，把连接在系统上的设备和总线组织成为一个分级的文件，向用户空间导出内核数据结构和以及它们的属性。sysfs清晰地展示了设备驱动模型中各组件的关系，顶层目录包括block、device、bus、drivers、class、power和firmware等。各目录和所包含的内容如下\n"),i("img",{attrs:{src:"http://i.imgur.com/JjRYVxz.png",alt:"sysfs目录结构"}})])])])]),v._v(" "),i("h2",{attrs:{id:"vi的使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vi的使用"}},[v._v("#")]),v._v(" vi的使用")]),v._v(" "),i("ol",[i("li",[v._v("从命令模式进入编辑模式：插入（i或者I），附件（a或者A），打开（o或者O）")]),v._v(" "),i("li",[v._v("光标移动：命令模式下，h（左），j（下），k（上），l（右）")]),v._v(" "),i("li",[v._v("快速光标定位：\n"),i("ol",[i("li",[v._v("命令G：将光标定位到最后一行")]),v._v(" "),i("li",[v._v("命令nG：将光标定位到第n行")]),v._v(" "),i("li",[v._v("命令gg：将光标定位到第1行")]),v._v(" "),i("li",[v._v("命令ngg：将光标定位到第n行")]),v._v(" "),i("li",[v._v("命令:n将光标定位到第n行")])])]),v._v(" "),i("li",[v._v("文本块选定\n"),i("ol",[i("li",[v._v("将光标移动到将要选定的文本块开始处，按esc进入命令模式，再按v，进入可视状态，然后移动光标至文本块结尾，被选定的文本块高亮显示。连按两次esc可以取消所选定的文本块")])])]),v._v(" "),i("li",[v._v("复制和粘贴\n"),i("ol",[i("li",[v._v("如果已经选定文本块，按y即可将所选定文本复制到缓冲区，将光标移到将要粘贴的地方，按p，就可完成文本粘贴")]),v._v(" "),i("li",[v._v("在命令模式下，连按yy，即可复制光标所在的行的内容，连按yny即可复制从光标所在行开始的n行")])])]),v._v(" "),i("li",[v._v("剪切和删除\n"),i("ol",[i("li",[v._v("最后一次剪切和删除的内容都可以被粘贴到其他位置")]),v._v(" "),i("li",[v._v("x或nx：剪切从光标所在位置开始的一个或者n个字符")]),v._v(" "),i("li",[v._v("X或nX：剪切光标前的一个或n个字符")]),v._v(" "),i("li",[v._v("dd：删除光标所在行")]),v._v(" "),i("li",[v._v("D：删除光标位置开始至行尾")]),v._v(" "),i("li",[v._v("dw：删除从光标位置至该词末尾的所有字符")]),v._v(" "),i("li",[v._v("d0：删除从光标位置开始至行首")]),v._v(" "),i("li",[v._v("dnd：删除光标所在行开始的n行")]),v._v(" "),i("li",[v._v("dnG：将光标所在行至第n行删除")])])]),v._v(" "),i("li",[v._v("文本查找\n"),i("ol",[i("li",[v._v("在命令模式下，输入“/字符串”即可从光标位置开始向下查找字符串。输入“？字符串”则从光标位置开始向上查找字符串。无论向上还是向下查找，查找下一个，按键盘n键即可")]),v._v(" "),i("li",[v._v("全局匹配搜索：先将光标移动到字符串abc，然后按下“SHIFT+*”，完成搜索。")])])]),v._v(" "),i("li",[v._v("文本替换\n"),i("ol",[i("li",[v._v("在命令模式下，输入：%s /old/new/gc，能够将文本内全部的字符串old替换为new，为了安全起见，可以在替换命令尾部加上c，这样每次替换前都需要确认一下")])])]),v._v(" "),i("li",[v._v("撤销和回复\n"),i("ol",[i("li",[v._v("在命令模式下输入u，可以撤销所做的更改，回复编辑前的状态，这里的编辑以保存命令为界。不小心多按了u时可以用Ctrl+R来恢复")])])]),v._v(" "),i("li",[v._v("Vi的配置文件\n"),i("ol",[i("li",[v._v('在vi内执行的配置命令的效果是临时IDE，关闭vi，再次打开vi，需要重新配置。vi有自己的配置文件，可以是"/etc/vim/vimrc"或者"~/.vimrc"。两者的区别是前者是全局的，影响登陆本机的全部用户，后者仅仅对当前用户有效')])])]),v._v(" "),i("li",[v._v("文本对比\n"),i("ol",[i("li",[v._v("Vim提供了文本对比工具vimdiff")]),v._v(" "),i("li",[v._v("用法：vimdiff file1 file2 file3")]),v._v(" "),i("li",[v._v("vimdiff可以同时进行2个以上文件的对比")])])])]),v._v(" "),i("h2",{attrs:{id:"如何使全局环境变量生效"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#如何使全局环境变量生效"}},[v._v("#")]),v._v(" 如何使全局环境变量生效")]),v._v(" "),i("ol",[i("li",[v._v("添加在/etc/profile中的全局变量生效的方法：. /etc/profile（点+空格+文件名）")])])])}),[],!1,null,null,null);_.default=t.exports}}]);