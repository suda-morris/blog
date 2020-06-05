(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{648:function(t,s,a){"use strict";a.r(s);var e=a(33),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("title: Install Ubuntu Mate LTS\ntags:")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu\ncategories:")]),t._v(" "),a("li",[t._v("Geek Hobbies\nauthor: suda-morris\ndate: 2015-05-24 20:02:00")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"ubuntu-mate14-04-2-lts安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-mate14-04-2-lts安装"}},[t._v("#")]),t._v(" Ubuntu-Mate14.04.2-LTS安装")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://ubuntu-mate.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("进入Ubutnu-Mate官网下载ISO镜像后安装到虚拟机"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("安装结束后，打开自带的软件中心，进入->编辑->软件源，选择访问速度最快的国内镜像站(软件可以自动选取速度最快的站点)")]),t._v(" "),a("li",[t._v("依次安装以下软件，安装命令为:"),a("code",[t._v("sudo apt-get install")]),t._v(" "),a("ul",[a("li",[t._v("文本编辑器:gedit vim")]),t._v(" "),a("li",[t._v("基本开发工具：build-essential")]),t._v(" "),a("li",[t._v("生成工程Makefile的工具：autoconf automake")]),t._v(" "),a("li",[t._v("词法扫描分析工具：flex bison texinfo git-core gnupg gperf valgrind")]),t._v(" "),a("li",[t._v("C语言函数用户手册：manpages-dev libncurses-dev libsdl-dev libesd0-dev libwxgtk2.6-dev ncurses-dev")]),t._v(" "),a("li",[t._v("其他程序的用户手册：binutils-doc cpp-doc gcc-doc glib-doc stl-manual docbook-utils")]),t._v(" "),a("li",[t._v("其他：chrpath socat diffstat texi2html mercurial groff asciidoc")]),t._v(" "),a("li",[t._v("压缩工具： zip")]),t._v(" "),a("li",[t._v("网络工具: curl")]),t._v(" "),a("li",[t._v("串口工具：minicom，完了以后修改minicom的配置权限："),a("code",[t._v("sudo chown morris：morris /etc/minicom/minirc.dfl")])]),t._v(" "),a("li",[t._v("Ubuntu-Tweak工具安装：\n"),a("ul",[a("li",[t._v("添加tweak源：sudo add-apt-repository ppa:tualatrix/ppa")]),t._v(" "),a("li",[t._v("更新：sudo apt-get update")]),t._v(" "),a("li",[t._v("安装ubuntu-tweak：sudo apt-get install ubuntu-tweak")])])]),t._v(" "),a("li",[t._v("超强vim配置文件：wget -qO- https://raw.github.com/ma6174/vim/master/setup.sh | sh -x")]),t._v(" "),a("li",[t._v("下载工具：uget与aria2\n"),a("ul",[a("li",[a("code",[t._v("sudo add-apt-repository ppa:plushuang-tw/uget-stable")])]),t._v(" "),a("li",[a("code",[t._v("sudo ap-get update")])]),t._v(" "),a("li",[a("code",[t._v("sudo apt-get install uget")])]),t._v(" "),a("li",[a("code",[t._v("sudo apt-get install aria2")])]),t._v(" "),a("li",[t._v("打开uget软件，进入插件设置，选择aria插件")]),t._v(" "),a("li",[t._v("修改最大连接数为16")])])]),t._v(" "),a("li",[t._v("输入法工具安装：fcitx:\n"),a("ul",[a("li",[a("code",[t._v("sudo apt-get install fcitx-table-wbpy")])]),t._v(" "),a("li",[t._v("进入"),a("code",[t._v("语言支持")]),t._v("->把"),a("code",[t._v("键盘输入方式系统")]),t._v("改为"),a("code",[t._v("fcitx")]),t._v("，重启系统")])])]),t._v(" "),a("li",[t._v("用WPS替换掉Ubuntu自带的Office")]),t._v(" "),a("li",[t._v("去"),a("a",{attrs:{href:"http://www.qt.io/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Qt官网"),a("OutboundLink")],1),t._v("下载QtCreator")]),t._v(" "),a("li",[t._v("安装Lua5.3：\n"),a("ul",[a("li",[a("a",{attrs:{href:"http://www.lua.org/ftp",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载安装源码"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("安装库文件："),a("code",[t._v("sudo apt-get install libreadline")]),t._v("和"),a("code",[t._v("sudo apt-get install libreadline-gplv2-dev")])]),t._v(" "),a("li",[t._v("进入源码顶层目录，修改Makefile里面的软件安装地址")]),t._v(" "),a("li",[t._v("修改完成后，"),a("code",[t._v("make linux")]),t._v("然后"),a("code",[t._v("make install")])])])]),t._v(" "),a("li",[t._v("编译crosstool-ng需要的安装环境\n"),a("code",[t._v("sudo apt-get install bison flex texinfo automake libtool cvs patch curl gcj subversion gawk cvsd gperf libexpat1-dev")])])])]),t._v(" "),a("li",[t._v("VirtualBox安装增强工具\n"),a("ul",[a("li",[t._v("进入VirtualBox设备->安装增强工具")]),t._v(" "),a("li",[t._v("在Ubuntu中，进入挂在的CD(一般在media下)，运行sudo ./VBoxLinuxAdditions.run后等待完成安装")])])]),t._v(" "),a("li",[t._v("设置root密码："),a("code",[t._v("sudo passwd root")])]),t._v(" "),a("li",[t._v("修改Ubuntu默认JDK配置\n"),a("ol",[a("li",[t._v("将要添加的JDK加入Java菜单选项\n"),a("ul",[a("li",[a("code",[t._v("update-alternatives --install /usr/bin/java java /usr/lib/jvm/java/jdk1.6.0_12/bin/java 300")])]),t._v(" "),a("li",[a("code",[t._v("update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/java/jdk1.6.0_12/bin/javac 300")])])])]),t._v(" "),a("li",[t._v("修改默认JDK\n"),a("ul",[a("li",[a("code",[t._v("sudo update-alternatives --config java")])])])])])]),t._v(" "),a("li",[t._v("NFS远程文件系统\n"),a("ol",[a("li",[t._v("安装NFS服务器："),a("code",[t._v("sudo apt-get install nfs-kernel-server portmap")])]),t._v(" "),a("li",[t._v("配置远程主机共享目录：\n"),a("ul",[a("li",[t._v("设置一个共享目录的方法是修改/etc/exports文件，增加一行例如:"),a("code",[t._v("/embeded/WenRisOS/NFS_doc *(rw,sync,no_root_squash)")])])])]),t._v(" "),a("li",[t._v("重启服务:"),a("code",[t._v("sudo /etc/init.d/nfs-kernel-server restart")])]),t._v(" "),a("li",[t._v("检测NFS服务是否设置正常："),a("code",[t._v("showmount -e")])]),t._v(" "),a("li",[t._v("目标板挂载远程主机：mount -o nolock -t nfs 192.168.1.88:/embeded/WenRisOS/NFS_doc /mnt")]),t._v(" "),a("li",[t._v("使用uboot的nfs命令下载远程主机文件到开发板内存："),a("code",[t._v("nfs 0x32000000 192.168.1.11:/work/system/linux/arch/arm/boot/uImage")])])])]),t._v(" "),a("li",[t._v("FTP服务器软件配置：\n"),a("ol",[a("li",[t._v("安装FTP服务："),a("code",[t._v("sudo apt-get install vsftpd")])]),t._v(" "),a("li",[t._v("修改FTP服务配置文件:"),a("code",[t._v("sudo vim /etc/vsftpd.conf")]),t._v(" "),a("ul",[a("li",[t._v("使能listen,local_enable,write_enable")])])]),t._v(" "),a("li",[t._v("重启FTP服务\n"),a("ul",[a("li",[a("code",[t._v("sudo /etc/init.d/vsftpd restart")])])])])])]),t._v(" "),a("li",[t._v("JLink安装\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://www.segger.com/jlink-software.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网下载J-Link安装压缩包"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("注意选择Linux安装包的时候匹配操作系统的位数，这里下载了64位Linux系统的TGA压缩包，版本5.0")]),t._v(" "),a("li",[t._v("下载好的压缩包解压缩，打开里面的README.txt,按照其要求作相应的操作，各个本版可能要求不同，拿5.0来说，这里需要执行命令："),a("code",[t._v("sudo cp 99-jlink.rules /etc/udev/rules.d/")])]),t._v(" "),a("li",[t._v("最后接入JLink的USB接口，打开软件："),a("code",[t._v("./JLinkExe")]),t._v(",如果显示usb连接不上，请检查USB是否连接可靠，虚拟机是否已经从实体机那获得了该JLink接口，多插拔几次，在该软件中使用命令usb可以尝试再次连接usb接口，如果成功，会出现类似如下的文字：")])])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\tJ-Link>usb\n\tConnecting to J-Link via USB (Port: 0)\n\tDLL version V5.00, compiled Jun  8 2015 21:14:03\n\tFirmware: J-Link ARM V8 compiled Nov 28 2014 13:44:46\n\tHardware: V8.00\n\tS/N: 158000503 \n\tFeature(s): RDI,FlashDL,FlashBP,JFlash,GDBFull \n\tVTarget = 3.319V\n\tInfo: TotalIRLen = 9, IRPrint = 0x0011\n\tFound 2 JTAG devices, Total IRLen = 5:\n \t#0 Id: 0x2B900F0F, IRLen: 04, IRPrint: 0x0, ARM ETB\n \t#1 Id: 0x07B76F0F, IRLen: 05, IRPrint: 0x1, ARM1176 Core\n\tARM11 identified.\n\tTarget interface speed: 100 kHz\n\tJ-Link>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h2",{attrs:{id:"常见问题及解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题及解决方法"}},[t._v("#")]),t._v(" 常见问题及解决方法")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在Ubuntu登陆界面输入密码之后，黑屏一闪后，又跳转到登录界面。")]),t._v(" "),a("ul",[a("li",[t._v("原因：主目录下的.Xauthority文件拥有者变成了root，从而以用户登陆的时候无法都取.Xauthority文件。")]),t._v(" "),a("li",[t._v("方法1：将.Xauthority的拥有者改为登陆用户。开机后在登陆界面按下shift + ctrl + F1进入tty命令行终端登陆后输入: sudo chown 用户名:用户名 .Xauthority")]),t._v(" "),a("li",[t._v("方法2：命令行输入：dpkg-reconfigure lightdm重新配置登陆器，重启")])])]),t._v(" "),a("li",[a("p",[t._v("如何在64位系统上编译32位可执行程序")]),t._v(" "),a("ul",[a("li",[t._v("确认当前架构为64位的内核\n"),a("ul",[a("li",[t._v("打开终端输入"),a("code",[t._v("dpkg --print-architecture")]),t._v(",如果看到amd64表示已经拥有了64位架构的内核")])])]),t._v(" "),a("li",[t._v("确认打开了多核架构的支持功能\n"),a("ul",[a("li",[t._v("打开终端输入"),a("code",[t._v("dpkg --print-foreign-architecture")]),t._v(",如果看到输出i386表示已经打开了多架构支持")]),t._v(" "),a("li",[t._v("如果没有打开，使用如下方法：\n"),a("ul",[a("li",[t._v("下载更新然后运行："),a("code",[t._v("sudo dpkg --add-architecture i386")]),t._v("，然后"),a("code",[t._v("sudo apt-get update")])]),t._v(" "),a("li",[t._v("输入"),a("code",[t._v("sudo apt-get -f dist-upgrade")]),t._v("检查已经拥有的库文件是否有更新版本")])])])])]),t._v(" "),a("li",[t._v("安装兼容包\n"),a("ul",[a("li",[a("code",[t._v("sudo apt-get install libc6:i386")])]),t._v(" "),a("li",[a("code",[t._v("sudo apt-get install gcc-multilib g++-multilib")])]),t._v(" "),a("li",[a("code",[t._v("sudo apt-get install lib32z1 lib32ncurses5 lib32bz2-1.0 libgtk2.0-0:i386 libpangox-1.0-0:i386 libpangoxft-1.0-0:i386 libidn11:i386 gstreamer0.10-pulseaudio:i386 gstreamer0.10-plugins-base:i386 gstreamer0.10-plugins-good:i386")])])])]),t._v(" "),a("li",[t._v("注意，在13.10后Ubuntu不提供ia32-libs的套件了，但是还是可以这样来安装：")])]),t._v(" "),a("div",{staticClass:"language-Shell Ubuntu14.04安装ia32-libs库 line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -i\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /etc/apt/sources.list.d\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb http://archive.ubuntu.com/ubuntu/ raring main restricted universe multiverse"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("ia32-libs-raring.list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ia32-libs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /etc/apt/sources.list.d/ia32-libs-raring.list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc-multilib\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("如何添加应用程序的快捷方式，以Eclipse软件为例")]),t._v(" "),a("ol",[a("li",[t._v("首先进入/usr/share/applications目录下，创建eclipse.desktop")]),t._v(" "),a("li",[t._v("编辑eclipse.desktop，内容如下：")])])])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Desktop Entry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Application\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Eclipse   --应用程序名\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Comment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Eclipse     --程序简介\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Icon")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/lai/Software/eclipse/icon.xpm    --图标地址\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Exec")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/home/lai/Software/eclipse/eclipse      --应用程序地址\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Terminal")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Categories")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Development"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("IDE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("Java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("如何通过搜索的方式安装软件\n"),a("ol",[a("li",[t._v("例如："),a("code",[t._v("sudo apt-cache search nfs-")])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://i.imgur.com/Nn7Krru.gif",alt:"suda-morris"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);