(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{333:function(_,v,t){"use strict";t.r(v);var i=t(2),l=Object(i.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("title: W5500 Introduction\ncomments: true\ncategories:")]),_._v(" "),t("ul",[t("li",[_._v("Geek Hobbies\ntags:")]),_._v(" "),t("li",[_._v("W5500\nauthor: suda-morris\ndate: 2015-08-17 09:50:00")])]),_._v(" "),t("hr"),_._v(" "),t("h2",{attrs:{id:"w5500网络模块简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#w5500网络模块简介"}},[_._v("#")]),_._v(" W5500网络模块简介")]),_._v(" "),t("ol",[t("li",[_._v("公司：Wiznet")]),_._v(" "),t("li",[_._v("使用硬件逻辑门电路实现TCP/IP协议栈的传输层及网络层（如：TCP，UDP，ICMP，IPv4，ARP，IGMP，PPPoE等协议），并集成了数据链路层，物理层(10BaseT/100BaseTX)，以及32K字节片上RAM作为数据收发缓存，使得上位机主控芯片只需承担TCP/IP应用层控制信息的处理任务，大大节省了上位机对于数据复制、协议处理和中断处理等方面的工作量，提升了系统利用率及可靠性")]),_._v(" "),t("li",[_._v("操作过程中，用户可以近似将W5500作为MCU的一个外设RAM来使用，非常简易。W5500对外接口通常为通用的80MHz高速SPI")]),_._v(" "),t("li",[_._v("W5500支持同时的8个socket，方便和不同的IP和设备进行通讯；为了减小系统能耗，W5500提供了网络环形模式(WOL)以及掉电模式供客户选择使用；W5500是非可攻击性的硬件网络引擎，可以防止类似于洪流，诈骗式以及注入式网络攻击，提高了网络安全")]),_._v(" "),t("li",[_._v("支自动协商(10/100-Based全双工/半双工)")]),_._v(" "),t("li",[_._v("3.3V工作电压，I/O信号口5V耐压")]),_._v(" "),t("li",[_._v("W5500 不支持Auto-MDI-X，也就是不支持交叉直连自动切换，对于某些比较老的设备，可能需要特定的交叉线或者直连线。比如模块连模块，需要使用交叉线，模块连路由器或者交换机需要使用直连线。")]),_._v(" "),t("li",[_._v("W5500不支持自动极性变换功能，因此用户需要使用直连线与交换机或者路由器连接，使用交叉线与终端设备(如服务器，工作站或者其他W5500)相连接。然而用户可以使用任何一种类型的网线与具有自动极性变换的其他设备相连。")]),_._v(" "),t("li",[_._v("W5500以太网芯片的内核由传输层的TCP、UDP、ICMP、IGMP等协议、网络层的IP、ARP、PPPoE等协议以及链路层的MAC构成，再加上物理层的PHY和外围的寄存器、内存、SPI接口组成了这一整套硬件化的以太网解决方案")]),_._v(" "),t("li",[_._v("SPI时钟设定值速率为80MHz，但是高速信号在受电磁串扰和长信号线的影响下可能会失真，实测具有稳定波形的始终速率为33.3MHz")])]),_._v(" "),t("h2",{attrs:{id:"w5500初始化主要使用的几个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#w5500初始化主要使用的几个文件"}},[_._v("#")]),_._v(" W5500初始化主要使用的几个文件")]),_._v(" "),t("ol",[t("li",[_._v("W5500_conf.c->主要配置W5500的MAC、IP地址，W5500基本的数据读写过程，复位设置函数等")]),_._v(" "),t("li",[_._v("Socket.c->主要介绍了W5500的SOCKET相关配置函数，比如SOCKET的打开、关闭以及接收数据、发送数据等等")]),_._v(" "),t("li",[_._v("Utility.c->主要介绍了基本的延时函数，还有数据格式转化函数")]),_._v(" "),t("li",[_._v("w5500.c->主要介绍W5500的寄存器读写过程")])]),_._v(" "),t("h2",{attrs:{id:"w5500的socket初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#w5500的socket初始化"}},[_._v("#")]),_._v(" W5500的Socket初始化")]),_._v(" "),t("ol",[t("li",[_._v("W5500的操作需要设置一下寄存器的参数：\n"),t("ol",[t("li",[_._v("模式寄存器(MR)")]),_._v(" "),t("li",[_._v("中断屏蔽寄存器(IMR)")]),_._v(" "),t("li",[_._v("重发时间寄存器(RTR)")]),_._v(" "),t("li",[_._v("重发计数寄存器(RCR)")])])]),_._v(" "),t("li",[_._v("设置网络信息，下面的寄存器是关于网络的基本设置，需要根据网络环境来进行设置\n"),t("ol",[t("li",[_._v("网关地址寄存器(GAR)")]),_._v(" "),t("li",[_._v("本机物理地址寄存器(SHAR)")]),_._v(" "),t("li",[_._v("子网掩码寄存器(SUBR)")]),_._v(" "),t("li",[_._v("本机IP地址寄存器(SIPR)")])])]),_._v(" "),t("li",[_._v("设置端口存储信息，这一步设置端口TX/RX存储信息，每个端口的基地址和屏蔽地址在这里确定并保存。\n"),t("ol",[t("li",[_._v("W5500有一个通用寄存器，8个Socket寄存器区，以及对应每个Socket的收发缓存区。每一个Socket的发送缓存区都在一个16KB的物理接收内存中，初始化分配为2KB。无论给每个Socket分配多达的收发缓存，都必须在16为的偏移地址范围内(0x0000~0xFFFF).16KB的发送内存初始化被分配为每个SOcket 2KB发送缓存区(2KB*8=16KB)。")]),_._v(" "),t("li",[_._v("初始化分配的2KB Socket发送缓存，可以通过使用Socket发送缓存大小寄存器(Sn_TXBUF_SIZE)重新分配，一旦所有的Socket发送缓存大小寄存器(Sn_TXBUF_SIZE)配置完成，16KB的发送内存就会按照配置分配给每个Socket的发送缓存，并按照从Socket0到7顺序分配。16KB物理内存的地址是可以自增的，但是为了避免数据传输错误，需要避免发送缓存大小寄存器(Sn_TXBUF_SIZE)的和超过16")]),_._v(" "),t("li",[_._v("16KB的发送内存中分配了对应Socket n的发送缓存区，用于为来自主机传输的数据做缓存。Socket n发送缓存区的16位偏移地址支持64KB的寻址范围(从0x0000到0xFFFF)")])])])]),_._v(" "),t("h2",{attrs:{id:"spi工作协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spi工作协议"}},[_._v("#")]),_._v(" SPI工作协议")]),_._v(" "),t("ol",[t("li",[_._v("SPI协议定义了四种工作模式(模式0，1，2，3)。每种模式的区别是根据SCLK的极性及相位不同定义的。SPI的模式0和模式3唯一不同的就是在非活动状态下，SCLK信号的极性，SPI模式0在时钟空闲状态时钟极性为低电平。SPI的模式0和3，数据都是在SCLK的上升沿锁存，在下降沿输出。W5500支持SPI模式0以及模式3，MISO和MOSI信号无论是接收或者发送，均遵从从最高标志位(MSB)到最低标志位(LSB)的传输序列。")]),_._v(" "),t("li",[_._v("W5500与外设主机的通讯受SPI数据帧控制，W5500的帧分为3段：地址段，控制段，数据段")]),_._v(" "),t("li",[_._v("地址段为W5500寄存器或者TX/RX内存指定的16位的偏移地址。")]),_._v(" "),t("li",[_._v("控制段指定了地址段设定的偏移区域的归属，读写访问模式以及SPI工作模式(可变长度模式/固定长度模式)")]),_._v(" "),t("li",[_._v("数据段可以设定为任意长度(N字节)或者是固定长度：1字节，2字节或4字节；如果SPI工作模式设置为可变数据长度模式(VDM),SPI的SCSn信号需要由外部主机通过SPI帧控制。")]),_._v(" "),t("li",[_._v("在可变长度模式下，SCSn控制SPI帧的开始和停止：\n"),t("ol",[t("li",[_._v("SCSn信号拉低，即代表W5500的SPI帧开始(地址段)")]),_._v(" "),t("li",[_._v("SCSn信号拉低，即代表W5500的SPI帧结束(数据段的随机N字节数据结尾)")])])]),_._v(" "),t("li",[_._v("W5500的SPI数据帧包括了16为地址段的偏移地址，8为控制段和N字节数据段。8为控制段可以通过修改区域选择位(BSB[4:0]),读写访问模式位(RWB)以及SPI工作模式位(OM[1:0])来重新定义。区域选择位选择了归属于偏移地址的区域")]),_._v(" "),t("li",[_._v("W5500支持数据的连续读写。其流程为数据从(2/4/N字节连续数据的)偏移地址的基址开始传输，偏移地址会自增寻址(加1)传输接下来的数据")]),_._v(" "),t("li",[_._v("SPI数据帧控制段对应位的说明：\n"),t("ol",[t("li",[_._v("区域选择位BSB[4:0]-> 【00000】= 通用寄存器；【00001】= Socket0寄存器；【00010】=Socket0发送缓存；【00011】=Socket0接收缓存；【00101】=Socket1寄存器；【00110】=Socket1发送缓存；【00111】=Socket1接收缓存；【01001】= Socket2寄存器；【01010】=Socket2发送缓存；【01011】=Socket2接收缓存；【10101】=Socket3寄存器；【01110】=Socket3发送缓存；【01111】=Socket3接收缓存；【10001】= Socket4寄存器；【10010】=Socket4发送缓存；【10011】=Socket4接收缓存；【10101】=Socket5寄存器；【10110】=Socket5发送缓存；【10111】=Socket5接收缓存；【11001】= Socket6寄存器；【11010】=Socket6发送缓存；【11011】=Socket6接收缓存；【11101】=Socket7寄存器；【11110】=Socket7发送缓存；【11111】=Socket7接收缓存；")]),_._v(" "),t("li",[_._v("读写访问模式位RWB-> 【0】=读；【1】=写")]),_._v(" "),t("li",[_._v("工作模式位OM[1:0]-> 【00】=可变数据长度模式，N字节数据段(1≤N)；【01】=固定数据长度模式，1字节数据长度(N=1)；【10】=固定数据长度模式，2字节数据长度(N=2)；【11】=固定数据长度模式，4字节数据长度(N=4)；")])])]),_._v(" "),t("li",[_._v("W5500有一个通用寄存器，8个Socket寄存器，以及对应每个Socket的收发缓存区。每个区域均通过SPI数据帧的区域选择位BSB[4:0]来选取。")]),_._v(" "),t("li",[t("img",{attrs:{src:"http://7xj5i0.com1.z0.glb.clouddn.com/@/BlogImg20150825212635.png",alt:"SPI模式0/3"}})]),_._v(" "),t("li",[t("img",{attrs:{src:"http://7xj5i0.com1.z0.glb.clouddn.com/@/BlogImg20150825212850.png",alt:"SPI数据帧"}})])]),_._v(" "),t("h2",{attrs:{id:"物理层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[_._v("#")]),_._v(" 物理层")]),_._v(" "),t("blockquote",[t("p",[_._v("由计算机和网络介质之间的实际界面组成，可定义电器信号、符号、线的状态和时钟要求、数据编码和数据传输用的连接器。如最常用的RS-232规范、10BASE-T的曼彻斯特编码以及RJ-45就属于这一层。")])]),_._v(" "),t("h2",{attrs:{id:"数据链路层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[_._v("#")]),_._v(" 数据链路层")]),_._v(" "),t("blockquote",[t("ol",[t("li",[_._v("数据链路层通过物理网络链路提供可靠的数据传输。不同的数据链路层定义了不同的网络和协议特征，其中包括物理编址、网络拓扑结构、错误校验、帧序列以及流控")]),_._v(" "),t("li",[_._v("以太网协议规定，一组电信号构成一个数据包，叫做“帧”，每一帧分成三个部分：以太网首部、数据及以太网尾部。")]),_._v(" "),t("li",[_._v("以太网首部包含数据帧的一些说明，比如发送者、接收者、数据类型等等；数据部分则是数据的具体内容；以太网尾部则是CRC校验码")]),_._v(" "),t("li",[_._v("以太网首部的长度固定为14字节。数据的长度最短为46字节，最长为1500字节。以太网尾部的长度固定为4字节。因此，整个数据帧最短为64字节，最长为1518字节。如果数据很长，就必须分割成多个帧进行发送")]),_._v(" "),t("li",[_._v("数据链路层实际上由两个独立的部分组成：介质存取控制(MAC)和逻辑链路控制(LLC)。MAC描述在共享介质环境中如何进行站的调度、发生和接收数据。MAC确保信息跨链路的可靠传输，对数据传输进行同步，识别错误和控制数据流向。一般来讲，MAC只在共享介质环境中才是重要的，只有在共享介质环境中多个节点才能连接到同一传输介质上。")]),_._v(" "),t("li",[_._v("一块网卡如何知道另一块网卡的MAC地址?ARP协议(网络层)可以解决这个问题。以太网数据帧必须知道接收方的MAC地址然后才能发送。有了数据帧的定义，网卡的MAC地址，广播的发送方式，数据链路层就可以在多台计算机之间传送数据了")])])]),_._v(" "),t("h2",{attrs:{id:"网络层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[_._v("#")]),_._v(" 网络层")]),_._v(" "),t("blockquote",[t("ol",[t("li",[_._v("网络层负责在源和终点之间建立连接。它一般包括网络寻址，还可能包括流量控制、错误检查等。相同MAC标准的不同网段之间的数据传输一般只涉及到数据链路层，而不同的MAC标准之间的数据传输都涉及到网络层。IP路由器工作在网络层，因为可以实现多种网络间的互联。")]),_._v(" "),t("li",[_._v("IP数据包分为“标头”和“数据”两个部分。标头部分主要包括版本、长度、IP地址等细心，数据部分则是IP数据报的具体内容。IP数据报的标头部分长度为20到60字节，整个数据报的总长度最大为65535字节，因此理论上，一个数据报的数据部分最长为65515字节。以太网数据帧的数据部分最长只有1500字节，因此如果IP数据报超过了1500字节，它就要分割成几个以太网数据帧分开发送了。")])])]),_._v(" "),t("h2",{attrs:{id:"传输层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[_._v("#")]),_._v(" 传输层")]),_._v(" "),t("blockquote",[t("ol",[t("li",[_._v("传输层向高层提供可靠的端到端的网络数据流服务。传输层的功能一般包括流控、多路传输、虚电路管路以及差错校验和恢复。流控管理设备之间的数据传输，确保传输设备不发送比接受设备处理能力大的数据；多路传输使得多个应用程序的数据可以传输到物理链路上；虚电路由传输层建立、维护和终止；差错校验包括为检测传输错误而建立的各种不同结构；而差错回复包括所采取的行动，以便解决发生的任何错误。")]),_._v(" "),t("li",[_._v("必须要在数据包中加入端口信息，这就需要新的协议。最简单的实现叫做UDP协议，UDP数据段也是有“标头”和“数据”两部分组成")]),_._v(" "),t("li",[_._v("标头部分主要定义了发出端口和接收端口，“数据”部分就是具体的内容，然后把整个UDP数据段放入IP数据报的“数据”部分，而IP数据报又是放在以太网数据帧之中的。")]),_._v(" "),t("li",[_._v("UDP数据段非常简单，标头部分一共只有8个字节，总长度不超过65535字节，正好放进一个IP数据报")]),_._v(" "),t("li",[_._v("为了提高网络可靠性，诞生了TCP协议，这个协议非常复杂，但可以近似认为，他就是有确认机制的UDP协议，没发出一个数据都要求确认。如果有一个数据缺失，就收不到确认，发送方就知道有必要重发这个数据了")]),_._v(" "),t("li",[_._v("TCP数据段没有长度限制，理论上可以无限长，但是为了保证网络的效率。通常TCP数据段的长度不会超过IP数据报的长度，以确保单个TCP数据段不必再分割。")])])]),_._v(" "),t("h2",{attrs:{id:"应用层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[_._v("#")]),_._v(" 应用层")]),_._v(" "),t("blockquote",[t("p",[_._v("应用层是最接近终端用户的第一层，这就意味着应用层与用户之间是通过应用软件直接相互作用。应用层并非由计算机上云sing的实际应用软件组成，而是由向应用程序提供访问网络资源的API组成。")])]),_._v(" "),t("h2",{attrs:{id:"寄存器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#寄存器"}},[_._v("#")]),_._v(" 寄存器")]),_._v(" "),t("h3",{attrs:{id:"w5500通用寄存器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#w5500通用寄存器"}},[_._v("#")]),_._v(" W5500通用寄存器")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://7xj5i0.com1.z0.glb.clouddn.com/@/BlogImg20150823140450.png",alt:"W5500通用寄存器"}}),_._v("\n###Socket寄存器\n"),t("img",{attrs:{src:"http://7xj5i0.com1.z0.glb.clouddn.com/@/BlogImg20150823141841.png",alt:"Socket寄存器"}})]),_._v(" "),t("ol",[t("li",[_._v("通用寄存器区配置了W5500的基本信息，如IP以及MAC地址")]),_._v(" "),t("li",[_._v("W5500支持8个Socket作为通讯信道，每一个Socket通过Socket n寄存器控制。Socket n寄存器可以通过SPI数据帧中的区域选择寄存器BSB[4:0]来选定对应的寄存器n。")])]),_._v(" "),t("h2",{attrs:{id:"tcp-ip协议族"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip协议族"}},[_._v("#")]),_._v(" TCP/IP协议族")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://7xj5i0.com1.z0.glb.clouddn.com/@/BlogImgW5500%E7%BD%91%E7%BB%9C%E6%89%A9%E5%B1%95%E6%9D%BF%E6%95%99%E7%A8%8B.png",alt:"TCP/IP协议族"}})]),_._v(" "),t("h2",{attrs:{id:"tcp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议"}},[_._v("#")]),_._v(" TCP协议")]),_._v(" "),t("ol",[t("li",[_._v("TCP协议通过三个报文段完成连接的建立，这个过程称为三次握手。TCP连接建立过程：\n"),t("ol",[t("li",[_._v("第一次握手：建立连接时，客户端发送SYN包(seq=j)到服务器，并进入SYN_SEND状态，等待服务器确认")]),_._v(" "),t("li",[_._v("第二次握手：服务器收到SYN包，必须确认客户的SYN(ack=j+1),同时自己也发送一个SYN包(seq=k),即SYN+ACK包，此时服务器进入SYN_RECV状态")]),_._v(" "),t("li",[_._v("第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1),此包发送完毕，客户端和服务器进入ESTABLISH状态，完成三次握手")])])]),_._v(" "),t("li",[_._v("终止一个TCP连接需要四次挥手，这是由TCP的半关闭(half-close)造成的\n"),t("ol",[t("li",[_._v("第一次挥手：主动方发出设置了FIN位的报文，表示主动终止从本地到远端的单向链接；此时主动方进入FIN_WAIT1状态，意思是它在等待远端的FIN报文")]),_._v(" "),t("li",[_._v("第二次挥手：远端收到FIN后，会立即发送ACK；主动方收到ACK后，进入FIN_WAIT2状态，所以FIN_WAIT1状态持续的时间非常短；此时远端进入CLOSE-WAIT状态，一条单向链接终止了，但另一条还没有，处于HALF-CLOSE连接状态")]),_._v(" "),t("li",[_._v("第三次挥手：当远端进行了必要的数据发送后，它发送FIN，表示它出发的单向连接也要关闭，同时它进入LAST_ACK状态")]),_._v(" "),t("li",[_._v("第四次挥手：主动方收到FIN后，回应一个ACK；远端就此进入CLOSED状态，连接关闭；主动方进入TIME WAIT状态，确保最后一个ACK没有丢失，防止新连接占用刚刚关闭的主动方的地址端口，使得网络中流浪的老连接的返祖被误认为新连接的分组")])])]),_._v(" "),t("li",[t("img",{attrs:{src:"http://7xj5i0.com1.z0.glb.clouddn.com/@/BlogImgTCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B.png",alt:"TCP三次握手/四次挥手"}})]),_._v(" "),t("li",[_._v("当W5500初始化完成后，程序进入主循环，此时读取Socket的状态值，并选择进入哪种模式。当Socket处于关闭状态时，在进行通信之前，我们先将该Socket初始化，这个Socket作为服务器端，端口号要固定为侦听的端口。当socket将处于初始化完成状态，即SOCK_INIT状态，此时，作为TCP服务器就要执行listen()函数来侦听端口。由于W5500内嵌了TCP/IP协议，连接过程是不需要单片机干预的。如果连接过程中出错造成超时，该Socket将会被关闭，重新进入SOCK_CLOSE状态。待TCP连接的3次握手完成后，socket的状态将会转变为连接建立状态，即代码中定义的SOCK_ESTABLISHED状态。在进入SOCK_ESTABLISHED状态后，便可进行数据收发。数据通信完毕之后执行disconnect()函数，在收到对方FIN数据包之前，该socket将进入SOCK_CLOSE_WAIT状态。")]),_._v(" "),t("li",[t("img",{attrs:{src:"http://7xj5i0.com1.z0.glb.clouddn.com/@/BlogImgTCPServer%E6%B5%81%E7%A8%8B%E5%9B%BE.png",alt:"TCPServer流程图"}})]),_._v(" "),t("li",[t("img",{attrs:{src:"http://7xj5i0.com1.z0.glb.clouddn.com/@/BlogImgTCPClient%E6%B5%81%E7%A8%8B%E5%9B%BE.png",alt:"TCPClient流程图"}})])]),_._v(" "),t("h2",{attrs:{id:"udp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#udp协议"}},[_._v("#")]),_._v(" UDP协议")]),_._v(" "),t("ol",[t("li",[t("img",{attrs:{src:"http://i.imgur.com/ceIUeSz.png",alt:"UDP通信流程图"}})]),_._v(" "),t("li",[_._v("当socket处于关闭状态时，在进行通信之前我们先将该UDP模式的socket端口初始化。当socket将处于初始化完成状态即SOCK_UDP状态，此时就可以通过广播方式发送数据了。")]),_._v(" "),t("li",[t("img",{attrs:{src:"http://i.imgur.com/FxqWkWp.png",alt:"UDP报文"}})])]),_._v(" "),t("h2",{attrs:{id:"dhcp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dhcp协议"}},[_._v("#")]),_._v(" DHCP协议")]),_._v(" "),t("ol",[t("li",[_._v("W5500作为DHCP客户端，路由器作为DHCP服务器端，在DHCP请求的过程中，包括4个主要阶段：发现阶段、提供阶段、选择阶段以及确认阶段")]),_._v(" "),t("li",[_._v("首次W5500客户端发送DHCPDISCOVER消息(IP地址租用申请)，这个消息通过广播方式发出，所有网络中的DHCP服务器都将接收到这个消息。随后，网络中的DHCP服务器会回应一个DHCPOFFER消息(IP地址租用提供)，由于这个时候客户端还没有网络地址，所以DHCPOFFER也是通过广播的方式发送出去的。然后，向该服务器发送DHCPREQUEST消息。在DHCPREQUEST消息中将包含客户端申请的IP地址。最后，DHCP服务器将会送DHCPACK的相应消息来通知客户端可以使用该IP地址，该确认里面包含了分配的IP地址和该地址的一个稳定期限的租约(默认是8天)，并同时更新DHCP数据库")]),_._v(" "),t("li",[_._v("DHCP初始化完成以后，通过获取DHCP_SOCKET的状态来获取动态IP地址。第一个状态DHCP_RET_NONE就是获取不成功，第二个状态DHCP_RET_TIMEOUT是获取IP地址超时，都不符合条件。第三个状态DHCP_RET_UPDATE就是获取动态IP地址成功，此时将得到的IP地址通过SPI写入W5500的寄存器。如果是DHCP_RET_CONFLICT冲突状态，就要返回DHCP服务重新获取")]),_._v(" "),t("li",[t("img",{attrs:{src:"http://i.imgur.com/sqc1tce.jpg",alt:"DHCP报文格式"}})]),_._v(" "),t("li",[_._v("报文格式解析：\n"),t("ol",[t("li",[_._v("OP：若是client送给server的封包，设为1，反之为2")]),_._v(" "),t("li",[_._v("HTYPE：硬件类别，10MB以太网为1，100MB以太网为2")]),_._v(" "),t("li",[_._v("HLEN：硬件地址长度，Ethernet为6")]),_._v(" "),t("li",[_._v("HOPS：若封包需要经过router传送，每站加1，若在同一网段内，为0")]),_._v(" "),t("li",[_._v("TRANSACTION ID：DHCP REQUEST时产生的数值，以作为DHCPREPLY时的依据")]),_._v(" "),t("li",[_._v("SECONDS：Client端启动时间(秒)")]),_._v(" "),t("li",[_._v("FLAGS：从0到15共16bits，最左1bit为1时表示server将以广播方式传送封包给client，其余尚未使用")]),_._v(" "),t("li",[_._v("ciaddr：yhaoshiclient端想继续使用之前取得的IP地址，则列于这里")]),_._v(" "),t("li",[_._v("yiaddr：从server送回client的DHCP OFFER与DHCPACK封包中，此栏填写分配给client的IP地址")]),_._v(" "),t("li",[_._v("siaddr：若client需要透过网络开机，从server送出的DHCP OFFER、DHCPACK、DHCPNACK封包中，此栏填写开机程序代码所在server的地址")]),_._v(" "),t("li",[_._v("giaddr：若需跨网域进行DHCP发放，此栏为relay agent的地址，否则为0")]),_._v(" "),t("li",[_._v("chaddr：client的硬件地址")]),_._v(" "),t("li",[_._v("sname：sever的名称字符串，以0x00结尾")]),_._v(" "),t("li",[_._v("file：若client需要透过网络开机，此栏将指出开机程序名称，稍后以TFTP传送")]),_._v(" "),t("li",[_._v("options：允许厂商定义选项，提供更多的设定信息，其长度可变，同时可携带多个选项，每一个选项的第一个字节为信息代码，其后一个自己为该项数据长度，最后为项目内容")])])])]),_._v(" "),t("h2",{attrs:{id:"dns协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns协议"}},[_._v("#")]),_._v(" DNS协议")]),_._v(" "),t("ol",[t("li",[_._v("客户端初始化完毕之后，如果DNS运行标志位是1或者DNS发送次数超过3次就直接返回。如果不是上面的情况，并且DNS Server的IP不是0.0.0.0时，进入switch函数。当处于DNS域名解析成功状态时，DNS_OK置1，发送请求报文次数置0。当DNS解析域名失败时，标志位置0，请求报文次数加1，然后跳出循环。")]),_._v(" "),t("li",[_._v("DNS报文格式："),t("img",{attrs:{src:"http://i.imgur.com/C48NfJR.jpg",alt:"DNS报文格式"}}),_._v(" "),t("ul",[t("li",[_._v("标识：DNS报文的ID，对于相关联的请求报文和应答报文，这个字段是相同的")]),_._v(" "),t("li",[_._v("标志："),t("img",{attrs:{src:"http://i.imgur.com/ZaPageY.jpg",alt:"标志字段"}}),_._v(" "),t("ul",[t("li",[_._v("QR：查询/响应的标志位，1为响应，0为查询")]),_._v(" "),t("li",[_._v("opcode：定义查询或响应的类型(若为0则表示是标准的，若为1则是反向的，若为2则是服务器状态请求)")]),_._v(" "),t("li",[_._v("AA：授权回答的标志位，该位在相应报文中有效，1表示名字服务器是权限服务器")]),_._v(" "),t("li",[_._v("TC：截断标志位，1表示响应以超过512字节并已经被截断")]),_._v(" "),t("li",[_._v("RD：只能在响应报文中置1，表示可以得到递归响应")]),_._v(" "),t("li",[_._v("zero：0，保留字段")]),_._v(" "),t("li",[_._v("rcode：返回码，表示响应的差错状态，0表示无差错，1表示格式差错，2表示问题在域名服务器上，3表示域参照问题，4表示查询类型不支持，5表示在管理上被禁止")])])]),_._v(" "),t("li",[_._v("问题数、资源记录数、授权资源记录数和额外资源记录数，这四个字段都是两字节，分别对应下面的查询问题、回答、授权和额外信息部分的数量。一般问题数都为1，DNS查询报文中，资源记录数、授权资源记录数和额外资源记录数都为0.")]),_._v(" "),t("li",[_._v("查询问题部分的格式："),t("img",{attrs:{src:"http://i.imgur.com/qkVuppN.gif",alt:"查询问题格式"}}),_._v(" "),t("ul",[t("li",[_._v("查询名部分长度不定，一般为要查询的域名，有时候也有IP的时候，即反向查询。此部分由一个或者多个标识符序列组成，每个标识符以首字节数的计数值来说明该标识符长度，每个名字以0结束。技术字节数必须在0~63之间")]),_._v(" "),t("li",[_._v("查询类型：\n"),t("ul",[t("li",[_._v("1：IPv4地址")]),_._v(" "),t("li",[_._v("2：名字服务器")]),_._v(" "),t("li",[_._v("5：规范名称")]),_._v(" "),t("li",[_._v("6：开始授权，标记一个区的开始")]),_._v(" "),t("li",[_._v("11：熟知服务，定义主机提供的网络服务")]),_._v(" "),t("li",[_._v("12：指针，把IP地址转化为域名")]),_._v(" "),t("li",[_._v("13：主机信息，给出主机使用的硬件和操作系统的表述")]),_._v(" "),t("li",[_._v("15：邮件交换，把邮件改变路由送到邮件服务器")]),_._v(" "),t("li",[_._v("28：IPv6地址")]),_._v(" "),t("li",[_._v("252：传送整个区的请求")]),_._v(" "),t("li",[_._v("255：对所有记录的请求")])])]),_._v(" "),t("li",[_._v("查询类：通常为1，指Internet数据")])])]),_._v(" "),t("li",[_._v("回答字段，授权字段和附加信息字段均采用资源记录的相同格式："),t("img",{attrs:{src:"http://i.imgur.com/WuZQrVt.gif",alt:"资源记录格式"}}),_._v(" "),t("ul",[t("li",[_._v("域名字段(不定长或者2字节)：记录资源数据对应的名字，它的格式和查询名字段格式相同。当报文中域名重复出现时，就需要使用2字节的偏移指针来替换。")]),_._v(" "),t("li",[_._v("类型、类：含义与查询问题部分的类型和类相同")]),_._v(" "),t("li",[_._v("生存时间：该字段表示资源记录的生命周期，一般用于当地址解析程序取出资源记录后决定保存以及使用缓存数据的时间")]),_._v(" "),t("li",[_._v("资源数据长度：表示资源数据的长度，以字节为单位，如果资源数据为IP则为0004")]),_._v(" "),t("li",[_._v("资源数据：该字段是可变长字段，表示按查询段要求返回的相关资源记录的数据")])])])])])]),_._v(" "),t("h2",{attrs:{id:"smtp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smtp协议"}},[_._v("#")]),_._v(" SMTP协议")]),_._v(" "),t("ol",[t("li",[t("img",{attrs:{src:"http://i.imgur.com/9TsOlUJ.png",alt:"邮件发送过程示意图"}})]),_._v(" "),t("li",[_._v("SMTP在TCP协议25号端口监听连续请求。SMTP连接和发送过程：\n"),t("ol",[t("li",[_._v("建立TCP连接")]),_._v(" "),t("li",[_._v("客户端发送HELO命令以标识发件人自己的身份，然后客户端发送MAIL命令；服务器端正希望以OK作为相应，表明准备接收")]),_._v(" "),t("li",[_._v("客户端发送RCPT命令，以表示该电子邮件的计划接收人，可以有多个RCPT行；服务器端则表示是否愿意为收件人接收邮件")]),_._v(" "),t("li",[_._v("协商结束，发送邮件，用命令DATA发送")]),_._v(" "),t("li",[_._v("以“.”号表示结束并将内容一起发出去，结束此次发送，用QUIT命令退出")])])])]),_._v(" "),t("h2",{attrs:{id:"icmp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#icmp协议"}},[_._v("#")]),_._v(" ICMP协议")]),_._v(" "),t("ol",[t("li",[_._v("ICMP是Internet控制报文协议，用于在IP主机、路由器之间传递控制消息。控制消息是指网络通不通、主机是否可达、路由是否可用等网络本身的消息。我们在网络中经常会使用到ICMP协议，比如我们经常使用的用于检查网络通不通的Ping命令，这个ping的过程实际上就是ICMP协议工作的过程。Ping命令利用ICMP回射请求报文和回射应答报文来测试目标系统是否可达。")]),_._v(" "),t("li",[_._v("执行ping后，首先向目标服务器发出回送请求报文。计算机送出的回送请求到达目标服务器后，服务器回答这一请求，向送信方发送回送请求。这个ICMP回送回答报文在IP层来看，与被送来的回送请求报文基本上一样。不同的只是，源和目标IP地址字段被交换了，类型字段里填入了表示回送回答的0，这两点，也就是，从送信方式来看，自己送出的ICMP报文从目标服务器哪里像鹦鹉学舌那样原样返回了")])]),_._v(" "),t("h2",{attrs:{id:"http协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[_._v("#")]),_._v(" Http协议")]),_._v(" "),t("ol",[t("li",[_._v("HTTP消息由客户端到服务器的请求和服务器到客户端的响应组成。请求消息和响应消息都是由开始行（对于请求消息，开始行就是请求行，对于响应消息，开始行就是状态行），消息报头（可选），空行（只有CRLF的行），消息正文（可选）组成。")]),_._v(" "),t("li",[_._v("HTTP消息报头包括普通报头、请求报头、响应报头、实体报头。每一个报头域都是由名字+“：”+空格+值 组成，消息报头域的名字是大小写无关的。")]),_._v(" "),t("li",[_._v("请求报文格式如下：请求行 － 通用信息头 － 请求头 － 实体头 － 报文主体")]),_._v(" "),t("li",[_._v("应答报文格式如下：状态行 － 通用信息头 － 响应头 － 实体头 － 报文主体")]),_._v(" "),t("li",[_._v("请求行以一个方法符号开头，以空格分开，后面跟着请求的URI和协议的版本，格式如下：Method Request-URI HTTP-Version CRLF")]),_._v(" "),t("li",[_._v("请求方法有多种：\n"),t("ol",[t("li",[_._v("GET 请求获取Request-URI所标识的资源")]),_._v(" "),t("li",[_._v("POST 在Request-URI所标识的资源后附加新的数据")])])]),_._v(" "),t("li",[_._v("状态行格式如下：HTTP-Version Status-Code Reason-Phrase CRLF 其中Status-Code标识服务器发回的响应状态代码；Reason-Phrase标识状态代码的文本描述")]),_._v(" "),t("li",[_._v("状态码有三位数字组成，第一个数字定义了响应的类别，且有5种可能取值：\n"),t("ol",[t("li",[_._v("1xx：指示信息，标识请求已接收，继续处理")]),_._v(" "),t("li",[_._v("2xx：成功，标识请求已被成功接收、理解、接受")]),_._v(" "),t("li",[_._v("3xx：重定向，要完成请求必须进行更进一步的操作")]),_._v(" "),t("li",[_._v("4xx：客户端错误，请求有语法错误或请求无法实现")]),_._v(" "),t("li",[_._v("5xx：服务器端错误，服务器位能实现合法的请求")])])]),_._v(" "),t("li",[_._v("常见状态码、状态描述、说明\n"),t("ol",[t("li",[_._v("200 OK 客户端请求成功")]),_._v(" "),t("li",[_._v("400 Bad Request 客户端请求有语法错误，不能被服务器理解")]),_._v(" "),t("li",[_._v("401 Unauthorized 请求未经授权，这个状态码必须和WW-Authenticate报文域一起使用")]),_._v(" "),t("li",[_._v("403 Forbidden 服务器收到请求，但是拒绝提供服务")]),_._v(" "),t("li",[_._v("404 Not Found 请求资源不存在")]),_._v(" "),t("li",[_._v("500 Internal Server Error 服务器发生不可预期的错误")]),_._v(" "),t("li",[_._v("503 Server Unavaliable 服务器当前不能处理客户端的请求，一段时间后可能恢复正常")])])]),_._v(" "),t("li",[_._v("普通报头中，有少数报头域用于所有的请求和响应消息，但并不用于被传输的实体，只用于传输的消息。\n"),t("ol",[t("li",[_._v("Cache-Control用于指定缓存指令，缓存指令是单向的，而且是独立的。\n"),t("ul",[t("li",[_._v("请求时的缓存指令包括：no-cache(用于指示请求或响应消息不能缓存)、no-store、max-age、max-stale、min-fresh、only-if-cached")]),_._v(" "),t("li",[_._v("响应时的缓存指令包括：public、private、no-cache、no-store、no-transform、must-revalidate、proxy-revalidate、max-age、s-maxage")])])]),_._v(" "),t("li",[_._v("Date普通报头域表示消息产生的日期和时间")]),_._v(" "),t("li",[_._v("Connection普通报头域允许发送指定连接的选项，例如指定连接是连续或者指定“close”选项，通知服务器，在响应完成后，关闭连接。在http1.1中，client和server都是默认对方支持长链接的， 如果client使用http1.1协议，但又不希望使用长链接，则需要在header中指明connection的值为close；如果server方也不想支持长链接，则在response中也需要明确说明connection的值为close。不论request还是response的header中包含了值为close的connection，都表明当前正在使用的tcp链接在当天请求处理完毕后会被断掉。以后client再进行新的请求时就必须创建新的tcp链接了。")])])]),_._v(" "),t("li",[_._v("请求报头允许客户端向服务器传递请求的附加信息以及客户端自身的信息，常用的请求报头：\n"),t("ol",[t("li",[_._v("Accept：用于指定客户端接收哪些类型的信息，Accept:image/gif表明客户端希望接收GIF图像格式的资源；Accept:text/html表明客户端希望接收html文本")]),_._v(" "),t("li",[_._v("Accept-Charset：用于指定客户端接受的字符集，如果在请求消息中没有设置这个域，缺省是任何字符集都可以接受")]),_._v(" "),t("li",[_._v("Accept-Encoding：指定可接受的内容编码")]),_._v(" "),t("li",[_._v("Accept-Language：指定一种自然语言")]),_._v(" "),t("li",[_._v("Authorization：用于证明客户端有权查看某个资源，当浏览器访问一个页面时，如果收到服务器的响应代码为401，可以发送一个包含Authorization请求报头域的请求，要求服务器对其进行验证")]),_._v(" "),t("li",[_._v("Host:发送请求是，该报头域是必须的，主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来。HTTP/1.1请求必须包含主机头域，否则系统会以400状态码返回")]),_._v(" "),t("li",[_._v("User-Agent：该请求报头域允许客户端将它的操作系统、浏览器和其他属性告诉服务器，不过，这个报头域不是必须的，如果我们自己编写一个浏览器，不适用User-Agent请求报头域，那么服务器端就无法得知我们的信息了")])])]),_._v(" "),t("li",[_._v("请求报头举例：")])]),_._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[_._v('GET /form.html HTTP/1.1 (CRLF)\nAccept:image/gif,image/x-xbitmap,image/jpeg,application/x-shockwave-flash,application/vnd.ms-excel,application/vnd.ms-powerpoint,application/msword,*/* (CRLF)\nAccept-Language:zh-cn (CRLF)\nAccept-Encoding:gzip,deflate (CRLF)\nIf-Modified-Since:Wed,05 Jan 2007 11:21:25 GMT (CRLF)\nIf-None-Match:W/"80b1a4c018f3c41:8317" (CRLF)\nUser-Agent:Mozilla/4.0(compatible;MSIE6.0;Windows NT 5.0) (CRLF)\nHost:www.guet.edu.cn (CRLF)\nConnection:Keep-Alive (CRLF)\n')])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br"),t("span",{staticClass:"line-number"},[_._v("5")]),t("br"),t("span",{staticClass:"line-number"},[_._v("6")]),t("br"),t("span",{staticClass:"line-number"},[_._v("7")]),t("br"),t("span",{staticClass:"line-number"},[_._v("8")]),t("br"),t("span",{staticClass:"line-number"},[_._v("9")]),t("br")])]),t("ol",{attrs:{start:"13"}},[t("li",[_._v("响应报头允许服务器传递不能放在状态行中的附件响应信息，以及关于服务器的信息和对Request-URI所标识的资源进行下一步访问的信息；常用的响应报头：\n"),t("ol",[t("li",[_._v("Location用于重定向接收者到一个新的位置，Location响应报头域常用在更换域名的时候")]),_._v(" "),t("li",[_._v("Server包含了服务器用来处理请求的软件信息，与User-Agent请求报头域是相对应的")]),_._v(" "),t("li",[_._v("WWW-Authenticate响应报头域西粗被包含在401响应消息中，客户端收到401响应消息时候，并发送Authorization报头域请求服务器对其进行验证时候，服务端响应报头就包含该报头域")])])]),_._v(" "),t("li",[_._v("实体报头。请求和响应消息都可以传送一个实体，一个实体由实体报头域和实体正文组成，但并不是说实体报头域和实体正文要在一起发送，可以只发送实体报头域。实体报头定义了关于实体正文和请求所标识的资源的元信息。常用的实体报头：\n"),t("ol",[t("li",[_._v("Content-Encoding：被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。Content-Encoding这样用于记录文档的压缩方法，eg：Content-Encoding：gzip")]),_._v(" "),t("li",[_._v("Content-Language：实体报头域描述了资源所用的自然语言。没有设置该域则认为实体内容将提供给所有的语言阅读者。eg：Content-Language:da")]),_._v(" "),t("li",[_._v("Content-Length：实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示")]),_._v(" "),t("li",[_._v("Content-Type：实体报头域用语指明发送给接收者的实体正文的媒体类型")]),_._v(" "),t("li",[_._v("Last-Modified：实体报头域用于指示资源的最后修改日期和时间")]),_._v(" "),t("li",[_._v("Expires：实体报头域给出响应过期的日期和时间。eg：为了让浏览器不要缓存页面，我们也可以利用Expires实体报头域，设置为0")])])]),_._v(" "),t("li",[_._v("HTTP协议通常是承载于TCP洗衣之上的，有时也承载于TLS或SSL协议层之上，这时称之为HTTPS协议。默认HTTP的端口号为80，HTTPS的端口号为443")]),_._v(" "),t("li",[t("img",{attrs:{src:"http://i.imgur.com/PiBPPM0.png",alt:"HTTP请求报文"}})]),_._v(" "),t("li",[t("img",{attrs:{src:"http://i.imgur.com/EZ63EEL.png",alt:"HTTP响应报文"}})]),_._v(" "),t("li",[_._v("GET与POST方法有以下区别：\n"),t("ol",[t("li",[_._v("Get是向服务器发索取数据的一种请求，而Post是向服务器提交数据的一种请求，要提交的数据位于信息头后面的实体中。")]),_._v(" "),t("li",[_._v("在客户端，Get方式在通过URL提交数据，数据在URL中可以看到；POST方式，数据放置在HTML HEADER内提交")]),_._v(" "),t("li",[_._v("GET方式提交的数据最多只能有1024字节，而POST则没有此限制")])])])]),_._v(" "),t("h2",{attrs:{id:"netbios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#netbios"}},[_._v("#")]),_._v(" NetBIOS")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://i.imgur.com/OAHwfCG.png",alt:"NetBIOS实现过程"}})]),_._v(" "),t("ol",[t("li",[_._v("NetBIOS协议是一种在局域网上的程序可以使用的应用程序编程接口，为v横须提供了请求低级服务的统一的命令集，作用是为了给局域网提供网络以及其他特殊功能，几乎所有的局域网都是在NetBIOS协议的基础上工作的。NetBIOS协议，简单来说就是通过访问设备名称就可以实现对IP地址的访问。")]),_._v(" "),t("li",[_._v("在Windows操作系统中，默认情况下在安装TCP/IP协议后会自动安装NetBIOS协议。")]),_._v(" "),t("li",[_._v("ping主机名的第一个数据包就是NBNS(NetBIOS Name Server)协议包，它是TCP/IP上的NetBIOS协议族的一部分，它在基于NetBIOS名称访问的网络上提供主机名和地址映射方法。NBNS是动态DNS的一种。Microsoft的NBNS实现称为WINS。NetBIOS的报文类型较多，结构复杂，在不同的网络化境和不同的用途中会使用不同的报文，可用端口进行区分。如图所示NetBIOS协议架构\n"),t("img",{attrs:{src:"http://i.imgur.com/MxZkqby.jpg",alt:"NetBIOS协议架构"}})]),_._v(" "),t("li",[_._v("NetBIOS数据报有很多不同格式，主要取决于服务和信息类型，以及用以传送NetBIOS数据报的传输协议。NetBIOS协议架构包含三种基本服务：NAME、SESSION和DATAGRAM，其中NAME所用协议就是NBNS协议")]),_._v(" "),t("li",[_._v("WINS协议使用的报文即为NetBIOS的名字报文，其总体格式如下图所示\n"),t("img",{attrs:{src:"http://i.imgur.com/i2pWvfO.png",alt:"NetBIOS名字报文格式"}}),_._v("其中2字节通用标志中更详细的字段划分为：操作代码(5bits)操作标志(7bits)结果代码(4bits)\n"),t("ol",[t("li",[_._v("事物ID：请求方为每次名字服务请求所设定的ID值，响应方在相应的响应报文中要填入这个事物ID值")]),_._v(" "),t("li",[_._v("操作代码：指示报文的类型,最高位为0表示数据包为Reauest请求，最高位为1表示数据包为Response应答，其余4个比特均为0")]),_._v(" "),t("li",[_._v("操作标志：操作标志位，最低位为1表示广播或者多播，最低位为0表示单播，其他位均为0")]),_._v(" "),t("li",[_._v("结果代码：在相应报文中指示请求的结果，一般为0")]),_._v(" "),t("li",[_._v("问题记录个数：请求查询问题的个数，对于Request数据包，该值为1，对于Response数据包，该值为0")]),_._v(" "),t("li",[_._v("回答记录个数：对于Response数据包有用，Response数据包中响应问题的个数，一般为1")]),_._v(" "),t("li",[_._v("权威记录个数：在权威记录部分的记录数量，用不到的时候为0")]),_._v(" "),t("li",[_._v("附加记录个数：在附加记录部分数量，用不到的时候为0")])])]),_._v(" "),t("li",[_._v("报文的前12字节总称NetBIOS名字报文的首部，通过首部可以判断是否为名字查询的报文。NetBIOS名字报文中最常见的是携带问题记录的报文，问题记录的格式是：问题名称(若干字节) 问题类型(2字节) 问题类别(2字节)。通过携带问题记录的报文，我们可以得到要查询的名字字符，如果和本机名相符，就发送报文响应，相应中带有IP地址，发送广播的主机就会得到该IP地址")]),_._v(" "),t("li",[_._v("NETBIOS会话报文具有通用的4字节首部和与类型相关的报文内容：类型(1字节) 标志(1字节) 长度(2字节) 内容(若干字节)\n"),t("ol",[t("li",[_._v("类型：指名NetBIOS会话报文的类型，可用的值有：\n"),t("ul",[t("li",[_._v("0x00:会话消息")]),_._v(" "),t("li",[_._v("0x81:会话请求")]),_._v(" "),t("li",[_._v("0x82:正面会话响应")]),_._v(" "),t("li",[_._v("0x83:负面会话响应")]),_._v(" "),t("li",[_._v("0x84:重定向会话响应")]),_._v(" "),t("li",[_._v("0x85:会话保活")])])]),_._v(" "),t("li",[_._v("标志：0~6位保留未用，第7位作为扩展的长度位，使NetBIOS会话报文的内容部分最多可以达到128K字节")]),_._v(" "),t("li",[_._v("长度：NetBIOS会话报文的内容部分的长度，不包括首部的4字节")])])]),_._v(" "),t("li",[t("img",{attrs:{src:"http://i.imgur.com/O24egoi.png",alt:"NBNS"}}),_._v("计算机1向计算机2的137端口发送一个NODE STATUS REQUEST请求数据包，计算机2收到该数据包后，向计算机1返回一个NODE STATUS RESPONSE响应数据包，该数据包中包含计算机2的MAC地址、机器地址、所属的工作组等信息")]),_._v(" "),t("li",[_._v("NODE STATUS REQUEST数据包由12字节的HEADER域和38字节的QUESTION ENTRIES域两个部分组成，HEADER域分为8个字段：\n"),t("img",{attrs:{src:"http://i.imgur.com/VKpTVaA.png",alt:"NetBIOS HEADER"}})]),_._v(" "),t("li",[_._v("QUESTION ENTRIES域组成\n"),t("img",{attrs:{src:"http://i.imgur.com/93RGC0D.png",alt:"QUESTION ENTRIES"}}),_._v("其中：\n"),t("ul",[t("li",[_._v("QUESTION_NAME为要查询的远程计算机的名称，长度为34字节。NBNS规定，计算机NetBIOS的名称不超过16字节，且最后一个字节必须为0x0；")]),_._v(" "),t("li",[_._v("QUESTION_TYPE对于REQUEST数据包取值为0x0021")]),_._v(" "),t("li",[_._v("QUESTION_CLASS取值为0x0001")])])]),_._v(" "),t("li",[_._v("当某台机器的137端口收到NODE STATUS REQUEST请求数据包之后，由该机器的NETBIOS服务随即生成并返回一个NODE STATUS RESPONSE响应数据包。该响应数据包由HEADER域和RESOURCE RECORD域两部分组成。RESOURCE RECORD域组成如图所示：\n"),t("img",{attrs:{src:"http://i.imgur.com/IPEjagx.png",alt:"RESOURCE RECORD"}}),_._v(" "),t("ul",[t("li",[_._v("RP_NAME：34字节，与Request数据包的QUESTION_NAME格式定义相同")]),_._v(" "),t("li",[_._v("RP_TYPE：与Request数据包中的QUESTION_TYPE字段相同")]),_._v(" "),t("li",[_._v("RP_CLASS：与前面Request数据包的QUESTION_CLASS字段取值相同")]),_._v(" "),t("li",[_._v("TTL：4字节，取值为0x00000000")]),_._v(" "),t("li",[_._v("RDLENGTH:表示从NUM_NAMES字段开始到整个RESOURCE RECORD结束共有多少个字节")]),_._v(" "),t("li",[_._v("NUM_NAMES：表示紧随其后的NODE_NAME ARRAY数组的元素个数，数组的每个元素具有NODE_NAME结构，如图所示为NODE_NAME结构：\n"),t("img",{attrs:{src:"http://i.imgur.com/ArSP1Xp.png",alt:"NODE_NAME"}})]),_._v(" "),t("li",[_._v("NETBIOS FORMAT NAME表示远程主机的机器名或者组名，具体依赖NAME_FLAG字段的取值；")]),_._v(" "),t("li",[_._v("NAME_FLAGs：当最高位为1时，NETBIOS FORMAT NAME字段中存储的是Group NetBIOS名称，即工作组名，当最高位为0时，NETBIOS FORMAT NAMR字段中存储的是机器名")]),_._v(" "),t("li",[_._v("STATICS：包含的字段非常多，开始6字节是远程主机的MAC地址")])])])]),_._v(" "),t("h2",{attrs:{id:"sntp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sntp协议"}},[_._v("#")]),_._v(" SNTP协议")]),_._v(" "),t("ol",[t("li",[_._v("SNTP是简单网络时间协议，是用来使设备时间同步化的一种协议，在一些应用场合里，时间同步时十分重要的，贴别是随着设备运行时间增长，时间误差就越来越大，因为设备中晶振自身会产生误差，那么SNTP协议就可以解决这个问题。")]),_._v(" "),t("li",[_._v("报文格式："),t("img",{attrs:{src:"http://i.imgur.com/y9GprbA.gif",alt:"SNTP报文格式"}}),_._v(" "),t("ul",[t("li",[_._v("LI: 跳跃指示器")]),_._v(" "),t("li",[_._v("VN：版本号")]),_._v(" "),t("li",[_._v("Mode：模式\n"),t("ul",[t("li",[_._v("0——预留")]),_._v(" "),t("li",[_._v("1——对称行为")]),_._v(" "),t("li",[_._v("3——客户机")]),_._v(" "),t("li",[_._v("4——服务器")]),_._v(" "),t("li",[_._v("5——广播")]),_._v(" "),t("li",[_._v("6——NTP控制信息")])])]),_._v(" "),t("li",[_._v("Stratum：对本地时钟级别的整体识别")]),_._v(" "),t("li",[_._v("Poll：有符号整数表示连续信息间的最大间隔")]),_._v(" "),t("li",[_._v("Precision：有符号整数表示本地时钟精确度")]),_._v(" "),t("li",[_._v("Root Delay：有符号固定点序号表示主要参考源的总延迟，很短时间内的位15到16间的分段点")]),_._v(" "),t("li",[_._v("Root Dispersion：无符号固定点序号表示相对主要参考源的正常差错，很短时间内的位15到16间的分段点")]),_._v(" "),t("li",[_._v("Reference Identifier：识别特殊参考源")]),_._v(" "),t("li",[_._v("Originate Timestamp：这是向服务器请求分离客户机的时间，采用64位时标格式")]),_._v(" "),t("li",[_._v("Receive Timestamp：这是向服务器请求到达客户机的时间，采用64位时标格式")]),_._v(" "),t("li",[_._v("Transmit Timestamp：这是客户机答复分离服务器的时间，采用64位时标格式")]),_._v(" "),t("li",[_._v("Authenticator：当实现了NTP认证模式主要标识符和信息数字域就包括已定义的信息认证代码信息")])])]),_._v(" "),t("li",[_._v("原理图："),t("img",{attrs:{src:"http://i.imgur.com/kKI2sUY.png",alt:"SNTP原理示意图"}})])]),_._v(" "),t("h2",{attrs:{id:"tftp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tftp协议"}},[_._v("#")]),_._v(" TFTP协议")]),_._v(" "),t("ol",[t("li",[_._v("TFTP是TCP/IP协议族中的而一个用来在客户机和服务器之间进行简单文件传输的协议，基于UDP协议实现，端口号为69.")]),_._v(" "),t("li",[_._v("TFTP是专为小文件喜欢书设计的，提供不复杂、开销小的文件传输服务，缺乏标准FTP协议的许多特征。")]),_._v(" "),t("li",[_._v("TFTP只能从远程服务器上读、写文件或者读写文件传送给远程服务器。它不能列出目录并且当前不提供用户认证")]),_._v(" "),t("li",[_._v("TFTP有3中传输模式：\n"),t("ol",[t("li",[_._v("netASCII模式即8位网络ASCII码")]),_._v(" "),t("li",[_._v("octet即八位组模式")]),_._v(" "),t("li",[_._v("邮件模式，这种模式现在已经废弃不用了")])])]),_._v(" "),t("li",[_._v("TFTP数据包结构\n"),t("img",{attrs:{src:"http://i.imgur.com/eQqDEd2.png",alt:"TFTP报文格式"}})]),_._v(" "),t("li",[_._v("操作码\n"),t("ul",[t("li",[_._v("1=RRQ，读请求，由客户端使用，用来建立一条从服务器读数据的连接")]),_._v(" "),t("li",[_._v("2=WRQ，写请求，由客户端使用，用来建立一条把数据写到服务器的连接，它的格式与RRQ相同")]),_._v(" "),t("li",[_._v("3=data")]),_._v(" "),t("li",[_._v("4=ACK")]),_._v(" "),t("li",[_._v("5-error")])])]),_._v(" "),t("li",[_._v("Filename（文件名字段）说明客户要读或写的位于服务器上的文件，文件名是NETASCII码字符，以0结束。")]),_._v(" "),t("li",[_._v("Mode（模式字段）是一个ASCII码串netASCII或octet，同样以0字节结束。netASCII表示数据是以成行的ASCII码字符组成，以两个字节一回车字符后跟换行符。OCTET模式用于传输文件，这种文件在源机上以8位格式存储。在使用MAIL模式时，用户可以在FILE处使用接收人的地址，这个地址可以是用户名或@主机的形式，如果是后一种形式，允许主机使用电子邮件传输此文件。如果使用MAIL类型，包必须以WRQ开始，否则它与NETASCII完全一样")]),_._v(" "),t("li",[_._v("DATA数据包还包括一个数据块号和数据，数据块号域从1开始编码，每个数据块加1，这样接收方可以确定这个包是新数据还是已经接收过的数据。数据域从0字节到512字节。如果数据域是512字节，则它不是最后一个包，如果小于512字节则表示这个包是最后一个包。如果最后一个包正好512字节，则再发送一个0字节的包用于表示结束")]),_._v(" "),t("li",[_._v("ACK包用于确认数据包以手法哦。当接收方收到一个数据包后，回享发送方发送一个ACK包，而发行方则会在收到一个ACK包后继续发送下一个包。若发送完未能收到ACK包，则会使用超时机制，重新发送刚才的数据包。除了ACK和用于中断的包外，其他的包均需得到确认。发出新的数据包等于确认上次的包。WRQ和DATA包由ACK或ERROR数据包确认，而RRQ数据包由DATA或ERROR数据包确认")]),_._v(" "),t("li",[_._v("ERROR数据包可以被其他任何类型的包确认，错误码指定错误的类型，它用于服务器不能处理读请求或者写请求的情况。在文件传输过程中的读和写差错也会导致传送这种报文，接着停止传输。差错编号字段给出一个数字的差错码，跟着是一个ASCII表示的差错报文字段，可能包含额外的操作系统说明\n"),t("ul",[t("li",[_._v("1：文件未找到")]),_._v(" "),t("li",[_._v("2：访问非法")]),_._v(" "),t("li",[_._v("3：磁盘满或超过分配的配额")]),_._v(" "),t("li",[_._v("4：非法的TFTP操作")]),_._v(" "),t("li",[_._v("5：位置的传输ID")]),_._v(" "),t("li",[_._v("6：文件已经存在")]),_._v(" "),t("li",[_._v("7：没有类似的用户")])])]),_._v(" "),t("li",[_._v("通信流程：任何一个传输进程都以WRQ或者RRQ开始，收到一个确定应答并建立一个连接。创建连接时候，通信双方随机选择一个TID，因为是随机选择，因此两次选择同一个ID的可能性就很小了。每个包包括两个TID，发送者ID和接收者ID。这些ID用于在UDP通信时选择端口，在第一次请求的时候它会将请求发到TID 69，也就是服务器的69端口上，应答时，服务器使用一个选择好的TID作为源TID，并用上一个包中的TID作为目的ID进行发送。这两个被选择的ID在随后的通信中会被一直使用。连接成功后文件就以固定的512字节块的长度进行发送。每个数据包都包含一个数据块，块号从1开始而且是连续的。因此对于写入请求的确定是一个比较特殊的情况，因此它的包的包号是0.再发送下一个包之前，数据块必须得到确认响应包的确认。如果一个数据包的大小小于512字节，则表明传输结束。如果包在网络中丢失，接收端就会在超市以后重新传输最后一个未被确认的数据包，这就是导致丢失包的发送者重新发送丢失包。通信的双方都是数据的发出者与接收者，一方传输数据接收应答，另一方发出应答接收数据。发送者需要保留一个包在手头用于重新发送，由LOCk确认响应保证所有过去的包都已收到。大部分的错误会导致连接中断，错误由一个错误的数据包引起。这个包不会被确认，也不会被重新发送，因此另一方无法接收到。如果错误包丢失，则使用超时机制。错误主要由下面三种情况引起的：不能满足请求，收到的数据包内容错误，对需要资源的访问丢失。TFTP只有在一种情况下不中断连接，这种情况是源端口号不正确，在这种情况下，指示错误的包会被发送到源机。这个协议限制很多，这都是为了实现起来比较方便而进行的。\n"),t("img",{attrs:{src:"http://i.imgur.com/A8vhQRY.jpg",alt:"TFTP通信流程"}})]),_._v(" "),t("li",[_._v("TFTP的工作过程很想停止等待协议，发送完一个文件块后就等待对方的确认，确认时应指名所确认的块号。发送完数据后在规定的时间内收不到确认就要重发数据PDU（协议数据单元），发送确认PDU的一方若在规定时间内收不到下一个文件块，也要重发确认PDU。这样保证文件传送不致因某一个数据报的丢失而告失败")])]),_._v(" "),t("h2",{attrs:{id:"ftp协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ftp协议"}},[_._v("#")]),_._v(" FTP协议")]),_._v(" "),t("ol",[t("li",[_._v("FTP（File Transfer Protocol，文件传输协议），用于Internet上的控制文件的双向传输")]),_._v(" "),t("li",[_._v("FTP协议使用TCP端口中的20和21这两个端口，其中20用于传输数据，21用于传输控制信息。但是是否使用20作为传输数据的端口与FTP使用的传输模式相关，如果采用主动模式，那么数据传输端口就是20；如果采用被动模式，则具体最终使用哪个端口要服务器和客户端协商决定")]),_._v(" "),t("li",[_._v("FTP支持两种模式，一种方式叫做Standard（也就是PORT方式，主动方式），一种是Passive（也就是PASV，被动方式）。Standard模式，FTP的客户端发送PORT命令到FTP服务器，Psaaive模式下FTP的客户端发送PASV命令到FTP Server\n"),t("ol",[t("li",[_._v("Port\n"),t("ul",[t("li",[_._v("FTP客户端首先和FTP服务器的TCP 21端口建立连接，通过这个通道发送命令，客户端需要接收数据的时候在这个通道上发送PORT命令。PORT命令包含了客户端用什么端口接收数据。在传送数据的时候，服务端通过自己的TCP 20端口连接至客户端的指定端口发送数据。FTP server必须和客户端建立一个新的连接用来传送数据")])])]),_._v(" "),t("li",[_._v("Passive\n"),t("ul",[t("li",[_._v("在建立控制通道的时候和Standard模式类似，但建立连接以后发送的不是Port命令，而是Pasv命令。FTP服务器收到Pasv命令后，随机打开一个高端端口（端口号大于1024）并且通知客户端在这个端口上传送数据的请求，客户端连接FTP服务器此端口，然后FTP服务器将通过这个端口进行数据的传送，这个时候FTP server不再需要建立一个新的和客户端之间的连接")])])])])]),_._v(" "),t("li",[_._v("很多防火墙在设置的时候是不允许接收外部发起的连接的，所以许多位于防火墙后或内网的FTP服务器不支持PASV模式，因为客户端无法穿过防火墙打开FTP服务器的高端端口；而许多内网的客户端不能用PORT模式登陆FTP服务器，因为服务器的TCP 20无法和内部网络的客户端建立一个新的连接，造成无法工作")]),_._v(" "),t("li",[_._v("传输方式：\n"),t("ol",[t("li",[_._v("ASCII传输\n"),t("ul",[t("li",[_._v("假定用户正在拷贝的文件包含简单的ASCII码文本，如果在远程机器上运行的是不同的操作系统，当文件传输时ftp通常会自动地调整文件的内容以便于把文件解释成另外那台计算机存储文本文件的格式。但是常常有这样的情况，用户正在传输的文件包含的不是文本文件，他们可能是程序、数据库，字处理文件或者压缩文件。在拷贝任何非文本文件之前，用binary命令告诉ftp逐字拷贝，不要对这些文件进行处理，即使用二进制传输方式")])])]),_._v(" "),t("li",[_._v("二进制传输\n"),t("ul",[t("li",[_._v("在二进制传输中，保存文件的位序，以便原始和拷贝的是逐位一一对应的。计时目的机器上包含位序列的文件时没有意义的。如果在ASCII方式下传输二进制文件，即使不需要也仍会转译。这会使传输稍微变慢，也会损坏数据，是文件变得不能使用。（在大多数计算机上，ASCII方式一般假设每一字符的第一有效位无意义，因为ASCII字符组合不使用它。）\n"),t("img",{attrs:{src:"http://i.imgur.com/8EpzUrL.jpg",alt:"FTP连接"}})])])])])]),_._v(" "),t("li",[_._v("一般来讲，控制连接一直保持到客户-服务器连接的全过程，但数据连接可以根据需要随时开启和结束。而通用的传输方式是流方式，并且文件结尾是以关闭数据连接为标志。这意味着对每一个文件传输或目录列表来说都要建立一个全新的数据连接")]),_._v(" "),t("li",[_._v("一个典型的主动方式的过程：\n"),t("ol",[t("li",[_._v("客户端打开一个随机的端口（端口号大于1024，这里记为x），同时一个FTP进程连接至服务器的21号命令端口。此时，源端口为客户端随机端口x，远程端口为服务器21.正是由于客户端发出命令要求建立数据连接，所以数据连接是在客户的控制下建立的")]),_._v(" "),t("li",[_._v("客户通常在客户端主机上为所在的数据连接端选择一个临时端口号。客户从该端口发布一个被动的打开")]),_._v(" "),t("li",[_._v("客户使用PORT命令从控制连接上把端口号法相服务器")]),_._v(" "),t("li",[_._v("服务器在控制连接上接收端口号，并向客户端主机上的端口发布一个主动的打开。服务器的数据连接端一直使用端口20")])])]),_._v(" "),t("li",[_._v("命令处理\n"),t("ol",[t("li",[_._v("接入命令：USER、PASS、ACCT、REIN、QUIT、ABOR")]),_._v(" "),t("li",[_._v("文件管理命令：CWD、CDUP、DELE、LIST、NLIST、MKD、PWD、RMD、RNFR、RNTO和SMNT")]),_._v(" "),t("li",[_._v("数据格式化命令：TYPE、STUR、MODE")]),_._v(" "),t("li",[_._v("端口定义命令：PORT、PASV")]),_._v(" "),t("li",[_._v("文件传送命令：RETR、STOR、APPE、STOU、ALLO、REST、STAT")]),_._v(" "),t("li",[_._v("杂项命令：HELP、NOOP、SITE、SYST")])])]),_._v(" "),t("li",[_._v("每个FTP命令至少产生一个响应，响应有两个部分：三位数字的树以及紧随后面的正文，数字部分定义代码，正文部分定义所需要的参数和额外的解释。第一位数字定义命令的状态，第二位数字定义命令的意义，第三位数字提供附加信息")]),_._v(" "),t("li",[_._v("当数据通过数据流传输时，控制流处于空闲状态。而当控制流空闲很长时间后，客户端的防火墙会将其会话置为超时，这样当大量数据通过防火墙时，会产生一些问题。此时，虽然文件可以成功传输，但因为控制会话会被防火墙断开，传输会产生一些错误")]),_._v(" "),t("li",[_._v("主动模式\n"),t("ol",[t("li",[_._v("客户端打开一个随机的端口（端口号大于1024，这里称x），同时一个FTP进程连接至服务器的21号命令端口，此时，源端口为随机端口x，在客户端，远程端口为21，在服务器")]),_._v(" "),t("li",[_._v("客户端开始监听端口(x+1),同时向服务器发送一个端口命令（通过服务器的21号命令端口），此命令告诉服务器客户端正在监听的端口号并且已准备好从此端口号接收数据。这个端口号就是我们所知的数据端口")]),_._v(" "),t("li",[_._v("服务器打开20号源端口并且建立和客户端数据端口的链接。此时源端口为20，远程数据端口为（x+1）")]),_._v(" "),t("li",[_._v("客户端通过本地的数据端口建立一个和服务器20号端口的链接，然后向服务器发送一个应答，告诉服务器它已经建立好了一个连接")])])]),_._v(" "),t("li",[_._v("被动模式\n"),t("ol",[t("li",[_._v("在被动方式FTP中，命令链接和数据连接都是由客户端发起，这样就可以解决从服务器到客户端的数据端口的入向链接被防火墙过滤掉的问题")]),_._v(" "),t("li",[_._v("当开启一个FTP连接时，客户端打开两个任意的非特权本地端口（N>1024和N+1）。第一个端口连接服务器的21端口，但与主动方式的FTP不同，客户端不会提交PORT命令并允许服务器来回连它的数据端口，而是提交PASV命令。这样做的结果是服务器会开启一个任意的非特权端口（P>1024），并发送PORT命令给客户端。然后客户端发起从本地端口N+1到服务器端口P的连接用来传送数据")]),_._v(" "),t("li",[_._v("对于服务器端的防火墙来说，必须允许下面的通讯才能支持被动方式的FTP：\n"),t("ol",[t("li",[_._v("从任何大于1024的端口到服务器的21端口（客户端的初始化连接）")]),_._v(" "),t("li",[_._v("服务器的21端口到任何大于1024的端口（服务器响应到客户端的控制端口的连接）")]),_._v(" "),t("li",[_._v("从任何大于1024端口到服务器的大于1024端口（客户端初始化数据连接到服务器指定的任意端口）")]),_._v(" "),t("li",[_._v("服务器的大于1024端口到远程的大于1024的端口（服务器发送ACK响应和数据到客户端的数据端口）")])])])])])]),_._v(" "),t("p",[t("img",{attrs:{src:"http://i.imgur.com/Nn7Krru.gif",alt:"suda-morris"}})])])}),[],!1,null,null,null);v.default=l.exports}}]);