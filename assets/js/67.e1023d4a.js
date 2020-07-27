(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{641:function(v,_,t){"use strict";t.r(_);var i=t(29),l=Object(i.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"poe-电源系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#poe-电源系统"}},[v._v("#")]),v._v(" POE 电源系统")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://i.imgur.com/G9gjcdZ.png",alt:"什么是POE"}})]),v._v(" "),t("blockquote",[t("p",[v._v("以太网供电（Power over Ethernet，简称PoE）也称为PoE供电，是一种可以在以太网路中透过双绞线来传输电力与资料到装置上的技术。以太网供电技术的出发点是让IP电话、WLAN接入点、网络摄像头等小型网络设备，可以直接从以太网线（4对双绞线中空闲的2对来传输）获得电力，无需单独铺设电力线，以简化系统布线，降低网络基础设施的建设成本。")])]),v._v(" "),t("h2",{attrs:{id:"使用poe的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用poe的注意事项"}},[v._v("#")]),v._v(" 使用POE的注意事项")]),v._v(" "),t("blockquote",[t("p",[v._v("使用POE需要留意以下三点：")])]),v._v(" "),t("ol",[t("li",[v._v("如上图所示，不是所有的以太网交换机都支持PoE供电功能，供电模块内置或外置，一般价格比普通交换贵一些。")]),v._v(" "),t("li",[v._v("要求终端也支持PoE受电功能。")]),v._v(" "),t("li",[v._v("通过网线供电，功率本身是有一定限制的，留意查看不同设备的使用说明和功率要求。")])]),v._v(" "),t("h2",{attrs:{id:"典型的系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#典型的系统"}},[v._v("#")]),v._v(" 典型的系统")]),v._v(" "),t("blockquote",[t("p",[v._v("一个典型的以太网供电系统。在配线柜里保留以太网交换机设备，用一个带电源供电集线器(Midspan HUB)给局域网的双绞线提供电源。在双绞线的末端，该电源用来驱动电话、无线接入点、相机和其他设备。为避免断电，可以选用一个UPS。")])]),v._v(" "),t("h2",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[v._v("#")]),v._v(" 原理")]),v._v(" "),t("blockquote",[t("p",[v._v("标准的五类网线有"),t("strong",[v._v("四对双绞线")]),v._v(",但是在10M BASE-T和100M BASE-T中只用到其中的"),t("strong",[v._v("两对")]),v._v("。IEEE80 2.3af允许"),t("strong",[v._v("两种")]),v._v("用法:")]),v._v(" "),t("ol",[t("li",[v._v("应用空闲脚供电时,4、5脚连接为正极,7、8脚连接为负极。")]),v._v(" "),t("li",[v._v("应用数据脚供电时,将DC电源加在传输变压器的中点,不影响数据的传输。在这种方式下线对1、2和线对3、6可以为任意极性。")])]),v._v(" "),t("p",[v._v("IEEE802.3af标准不允许同时应用以上两种情况。电源提供设备PSE只能提供一种用法,但是电源应用设备PD必须能够同时适应两种情况。该标准规定供电电源通常是48V、13W的。PD设备提供48V到低电压的转换是较容易的,但同时应有1500V的绝缘安全电压。")])]),v._v(" "),t("p",[t("img",{attrs:{src:"http://i.imgur.com/uRd8v4m.png",alt:"POE典型组网图"}})]),v._v(" "),t("h2",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[v._v("#")]),v._v(" 参数")]),v._v(" "),t("blockquote",[t("p",[v._v("一个完整的POE系统包括供电端设备(PSE, Power Sourcing Equipment)和受电端设备(PD, Powered Device)两部分。PSE设备是为以太网客户端设备供电的设备,同时也是整个POE以太网供电过程的管理者。而PD设备是接受供电的PSE负载,即POE系统的客户端设备,如IP电话、网络安全摄像机、AP及掌上电脑( PDA)或移动电话充电器等许多其他以太网设备（实际上,任何功率不超过13W的设备都可以从RJ45插座获取相应的电力）。")]),v._v(" "),t("p",[v._v("POE标准供电系统的主要供电特性参数为：")])]),v._v(" "),t("ol",[t("li",[v._v("电压在44～57V之间,典型值为48V。")]),v._v(" "),t("li",[v._v("允许最大电流为550mA,最大启动电流为500mA。")]),v._v(" "),t("li",[v._v("典型工作电流为10～350mA,超载检测电流为350～500mA。")]),v._v(" "),t("li",[v._v("在空载条件下,最大需要电流为5mA。")]),v._v(" "),t("li",[v._v("为PD设备提供3.84～12.95W三个等级的电功率请求,最大不超过13W。（注意PD分级0和分级4没有显示出来而且不应采用。）")]),v._v(" "),t("li",[v._v("2009年10月30日 IEEE出了一个最新的802.3at标准，其中规定了POE可以提供更高的功率，超过了13W，可以达到30W,分三个等级(7W,15.4W,30W)")]),v._v(" "),t("li",[v._v("一般设备上会标明：15.4W/802.3af,30W/802.3at")])]),v._v(" "),t("h2",{attrs:{id:"工作过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作过程"}},[v._v("#")]),v._v(" 工作过程")]),v._v(" "),t("ol",[t("li",[v._v("检测\n"),t("ul",[t("li",[v._v("一开始,PSE设备在端口输出很小的电压,直到其检测到线缆终端的连接为一个支持IEEE 802.3af标准的受电端设备。检测电源输出线对之间的阻容值来判断PD是否存在")])])]),v._v(" "),t("li",[v._v("PD端设备分类\n"),t("ul",[t("li",[v._v("当检测到受电端设备PD之后,PSE设备可能会为PD设备进行分类,并且评估此PD设备所需的功率损耗。")])])]),v._v(" "),t("li",[v._v("开始供电\n"),t("ul",[t("li",[v._v("在一个可配置时间(一般小于15μs)的启动期内,PSE设备开始从低电压向PD设备供电,直至提供48V的直流电源。")])])]),v._v(" "),t("li",[v._v("供电\n"),t("ul",[t("li",[v._v("为PD设备提供稳定可靠48V的直流电,满足PD设备不越过 30W的功率消耗。")])])]),v._v(" "),t("li",[v._v("断电\n"),t("ul",[t("li",[v._v("若PD设备从网络上断开时,PSE就会快速地(一般在300～400ms之内)停止为PD设备供电,并重复检测过程以检测线缆的终端是否连接PD设备。")])])])]),v._v(" "),t("h2",{attrs:{id:"hy931147c网络接口-rj45，集成网络变压器，poe电源信号分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hy931147c网络接口-rj45，集成网络变压器，poe电源信号分离"}},[v._v("#")]),v._v(" HY931147C网络接口(RJ45，集成网络变压器，POE电源信号分离)")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://i.imgur.com/vkG79aZ.png",alt:"内部结构图"}})]),v._v(" "),t("ol",[t("li",[v._v("两个二极管桥确保1236和4578都能用来供电，同时也能确保12作为正或者36作为正互相兼容")])]),v._v(" "),t("h2",{attrs:{id:"poe电源工作回路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#poe电源工作回路"}},[v._v("#")]),v._v(" POE电源工作回路")]),v._v(" "),t("ol",[t("li",[v._v("IEEE 802.3af：15.4W供电功率，在100米最大电缆损耗条件下可传送13W的功率")]),v._v(" "),t("li",[v._v("IEEE 802.3at：30W供电功率，在100米最大电缆损耗条件下可输送25.5W的功率\n"),t("img",{attrs:{src:"http://i.imgur.com/R9UCls3.png",alt:"POE电源工作回路"}})])]),v._v(" "),t("h2",{attrs:{id:"poe等级界限（按终端设备划分）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#poe等级界限（按终端设备划分）"}},[v._v("#")]),v._v(" POE等级界限（按终端设备划分）")]),v._v(" "),t("ol",[t("li",[v._v("Class1：可向PD输送3.84W的最大功率")]),v._v(" "),t("li",[v._v("CLass2：可向PD输送6.49W的最大功率")]),v._v(" "),t("li",[v._v("Class3：可向PD输送13.0W的最大功率")]),v._v(" "),t("li",[v._v("Class4：可向PD输送25.5W的最大功率")])]),v._v(" "),t("h2",{attrs:{id:"poe工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#poe工作原理"}},[v._v("#")]),v._v(" POE工作原理")]),v._v(" "),t("ol",[t("li",[v._v("检测\n"),t("ol",[t("li",[v._v("处理PSE的使用以确保远端是PD所期望的功率")]),v._v(" "),t("li",[v._v("避免损坏那些不兼容POE标准的老式设备")]),v._v(" "),t("li",[v._v("低电压、低电流限制探测功能电路寻找25K特征电阻")])])]),v._v(" "),t("li",[v._v("分级\n"),t("ol",[t("li",[v._v("用于确定PD所需功率的任选过程")]),v._v(" "),t("li",[v._v("可对电源管理有所帮助")]),v._v(" "),t("li",[v._v("中间电压/电流限制探测功能电路寻找四个电流吸收器之一")]),v._v(" "),t("li",[v._v("仅在成功的检测之后进行")])])]),v._v(" "),t("li",[v._v("电源维护\n"),t("ol",[t("li",[v._v("确保在PD断连时将高压电源拿掉")])])]),v._v(" "),t("li",[v._v("过流\n"),t("ol",[t("li",[v._v("在链路操作的不同阶段所提供的保护有所不同")]),v._v(" "),t("li",[v._v("防止不良事件的发生")]),v._v(" "),t("li",[v._v("确保在发生PD或电缆布线系统问题时将电源拿掉\n"),t("img",{attrs:{src:"http://i.imgur.com/Jh1B0xr.png",alt:"POE周期图"}})])])])]),v._v(" "),t("h2",{attrs:{id:"线性稳压器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线性稳压器"}},[v._v("#")]),v._v(" 线性稳压器")]),v._v(" "),t("ol",[t("li",[v._v("优点\n"),t("ol",[t("li",[v._v("低输出纹波和噪声，无EMI问题")]),v._v(" "),t("li",[v._v("低成本")]),v._v(" "),t("li",[v._v("简单，所需的外部组件极少，易于配置和设计")]),v._v(" "),t("li",[v._v("面对大的负载阶跃，可在Vout上实现快速瞬态响应")]),v._v(" "),t("li",[v._v("易于实现短路保护")])])]),v._v(" "),t("li",[v._v("缺点\n"),t("ol",[t("li",[v._v("低效率")]),v._v(" "),t("li",[v._v("热问题")]),v._v(" "),t("li",[v._v("Vout必须低于Vin")])])]),v._v(" "),t("li",[v._v("工作原理\n"),t("ol",[t("li",[v._v("线性稳压器和输出阻抗一起形成了一个分压网络")]),v._v(" "),t("li",[v._v("线型稳压器的作用就像受控的可变电阻器，其可根据输出负载自我调节以保持一个稳定的输出")])])]),v._v(" "),t("li",[v._v("压降电压：为使线性稳压器处在稳压器的指定工作范围之内，VIN与VOUT之间可接受的最小压差")]),v._v(" "),t("li",[v._v("线型稳压器中的元件可以是双极型晶体管或MOSFET。不同的配置将产生不同的压降电压\n"),t("ol",[t("li",[v._v("双极型线型稳压器具有较高的压降电压，并能支持较高的输入电压且拥有更好的瞬态响应")]),v._v(" "),t("li",[v._v("MOSFET LDO能支持非常低的压降、低静态电流、改善的噪声性能和低电源抑制")])])]),v._v(" "),t("li",[v._v("静态电流：由稳压器所消耗且不流向输出负载的电流\n"),t("ol",[t("li",[v._v("该规格指标对于需要时钟保持运行的应用（如基带、实时时钟）很重要")])])]),v._v(" "),t("li",[v._v("电源抑制比（PSRR）：已调输出电压纹波与输入电压纹波之比\n"),t("ol",[t("li",[v._v("该规格指标对于具有高噪声限值要求的应用（如低噪声放大器、音频、RF和无线等）很重要")])])]),v._v(" "),t("li",[v._v("基带噪声：某个特定频率范围内的总噪声能量\n"),t("ol",[t("li",[v._v("该规格指标对于具有高噪声限值要求的应用（如PLL、TXCO、RF和无线等）很重要\n"),t("img",{attrs:{src:"http://i.imgur.com/7wrqQCt.png",alt:"LDO的选择"}})])])])]),v._v(" "),t("h2",{attrs:{id:"开关稳压器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开关稳压器"}},[v._v("#")]),v._v(" 开关稳压器")]),v._v(" "),t("ol",[t("li",[v._v("优点\n"),t("ol",[t("li",[v._v("高效率")]),v._v(" "),t("li",[v._v("优良的热性能")]),v._v(" "),t("li",[v._v("高功率密度")]),v._v(" "),t("li",[v._v("允许宽输入电压范围")]),v._v(" "),t("li",[v._v("Vout可以低于或高于Vin")]),v._v(" "),t("li",[v._v("可利用变压器提供隔离")]),v._v(" "),t("li",[v._v("可利用变压器提供多个输出")])])]),v._v(" "),t("li",[v._v("缺点\n"),t("ol",[t("li",[v._v("开关操作会产生较高的输出纹波和噪声")]),v._v(" "),t("li",[v._v("缓慢的瞬态响应（响应带宽约为开关频率的1/10）")]),v._v(" "),t("li",[v._v("高复杂性")])])]),v._v(" "),t("li",[v._v("工作原理\n"),t("ol",[t("li",[v._v("电感负责储存能量及向输出负载释放能量")]),v._v(" "),t("li",[v._v("电感根据开关管的开通从输入端获得能量")])])]),v._v(" "),t("li",[v._v("三种基本的直流开关变换器拓扑（公式推导基于电感的平均电压为0，D为PWM占空比）\n"),t("img",{attrs:{src:"http://i.imgur.com/4mqTm8J.png",alt:"基本拓扑"}})]),v._v(" "),t("li",[v._v("同步与非同步\n"),t("img",{attrs:{src:"http://i.imgur.com/hxTCszv.png",alt:"同步与非同步"}})]),v._v(" "),t("li",[v._v("隔离式与非隔离式\n"),t("ol",[t("li",[v._v("隔离式变换器在输入和输出之间没有电流回路，原副边不同地")]),v._v(" "),t("li",[v._v("变压器通过磁场将能量从初级耦合至次级")]),v._v(" "),t("li",[v._v("隔离式变换器通常在需要提供初级至次级不同地，高可靠性、防雷、耐高压等，如隔离的医疗电源")]),v._v(" "),t("li",[v._v("并非标准负载点电源（POL）解决方案所常用")]),v._v(" "),t("li",[v._v("不仅要电气隔离，还要信号隔离，所以反馈回路需要使用光耦\n"),t("img",{attrs:{src:"http://i.imgur.com/ncj4TY4.png",alt:"隔离开关电源"}})])])])]),v._v(" "),t("h2",{attrs:{id:"电荷泵稳压器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#电荷泵稳压器"}},[v._v("#")]),v._v(" 电荷泵稳压器")]),v._v(" "),t("ol",[t("li",[v._v("电荷泵稳压器是一种只通过电容器的交替式充电和放点来传送功率的开关稳压器")]),v._v(" "),t("li",[v._v("它适合于具有低负载电流及中等输入-输出电压差的应用")]),v._v(" "),t("li",[v._v("开关操作会产生较高的输出纹波和噪声，输出电流能力受限于电容器")]),v._v(" "),t("li",[v._v("倍压电路\n"),t("img",{attrs:{src:"http://i.imgur.com/8p5zBIr.png",alt:"倍压电路"}})])]),v._v(" "),t("h2",{attrs:{id:"变换器控制系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变换器控制系统"}},[v._v("#")]),v._v(" 变换器控制系统")]),v._v(" "),t("ol",[t("li",[v._v("由于在电路中实现了闭环控制系统，因此变换器能够在不同的条件下提供一个恒定的电压输出\n"),t("img",{attrs:{src:"http://i.imgur.com/G4Rr42H.png",alt:"控制系统工作原理"}})])]),v._v(" "),t("h2",{attrs:{id:"uvlo-低电压锁定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uvlo-低电压锁定"}},[v._v("#")]),v._v(" UVLO(低电压锁定)")]),v._v(" "),t("p",[v._v("欠压关断模式可保证IC在供电电压不足的时候不至于损坏，一个低电压锁定（UVLO）电路可确保IC在电池电压未达到安全操作电压前不会激活，UVLO的功能会展示滞后现象，以确保在电源供应上的噪音不会不慎导致系统故障。为了更稳定的工作，某些DC/DC转换器具有UVLO功能，电源开启后，UVLO功能使内部电路处于待机状态，直到DC/DC转换器的输入电压达到UVLO电压，以此来减少消费电流并避免误操作")]),v._v(" "),t("h2",{attrs:{id:"tps54160（1-5a-60v-降压dc-dc转换器）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tps54160（1-5a-60v-降压dc-dc转换器）"}},[v._v("#")]),v._v(" TPS54160（1.5A,60V,降压DC/DC转换器）")]),v._v(" "),t("ol",[t("li",[v._v("支持3.5V~60V的输入电压范围")]),v._v(" "),t("li",[v._v("内部高端MOSFET的导通电阻200mΩ。（low side一般指MOSFET接地，其驱动信号是基于地信号的，在驱动电路中不需要加电压抬升电路；如果是high side即常说的高端驱动，其驱动信号是浮动的，需要加电压抬升电路）")]),v._v(" "),t("li",[v._v("低负载的转换效率也很高，因为设计了独特的Pulse Skipping Eco-mode")]),v._v(" "),t("li",[v._v("可调节的UVLO电压和滞后时间")]),v._v(" "),t("li",[v._v("116uA的静态工作电流")]),v._v(" "),t("li",[v._v("1.3uA的关断电流")]),v._v(" "),t("li",[v._v("100KHz~2.5MHz的开关频率")]),v._v(" "),t("li",[v._v("与外部时钟同步")]),v._v(" "),t("li",[v._v("内部有0.8V的参考电压")]),v._v(" "),t("li",[v._v("欠压（UV）输出保护内部默认设置为2.5V，但是可以通过EN引脚来提高")]),v._v(" "),t("li",[v._v("输出电压启动坡度可以通过SS（slow start）引脚来控制\n"),t("img",{attrs:{src:"http://i.imgur.com/TSjMe8c.png",alt:"简化的原理图"}})]),v._v(" "),t("li",[v._v("在BOOT引脚和PH（内部高端MOEFET的源极）引脚之间需要一个自举电容，当其上的电压少于器件的最低要求，输出将会被关闭，直到自举电容被刷新")]),v._v(" "),t("li",[v._v("COMP是误差放大器的输出，并且会输入到内部的电流比较器中。这个引脚需要连接频率补偿元件")]),v._v(" "),t("li",[v._v("EN脚电压低于1.2后会使芯片不工作，悬空可以工作（芯片内部该引脚上拉到电流源）。要求电压范围不超过5V")]),v._v(" "),t("li",[v._v("PWRGD开漏输出，如果芯片过压、关断、跌落，该引脚会输出低电平")]),v._v(" "),t("li",[v._v("RT(Resistor Timing)/CLK内部的放大器会使该引脚维持在一个固定的电压值，该引脚通过一个连接到地的电阻来设置开关频率")]),v._v(" "),t("li",[v._v("SS/TR该引脚到地的电容可以设置输出电压的抬升时间，降低启动过程中的浪涌电流")]),v._v(" "),t("li",[v._v("VSENSE反馈电压不能超过3V")]),v._v(" "),t("li",[v._v("电流模式控制可以降低输出电容，简化频率补偿\n"),t("img",{attrs:{src:"http://i.imgur.com/n8qTBGt.png",alt:"内部结构图"}})]),v._v(" "),t("li",[v._v("输出电压调节\n"),t("img",{attrs:{src:"http://i.imgur.com/PPkiol6.png",alt:"调节输出电压"}})]),v._v(" "),t("li",[v._v("如果Vin电压小于2.5V，那么TPS54160将不工作，如果需要更高的UVLO电压，可以如图所示\n"),t("img",{attrs:{src:"http://i.imgur.com/7U5iiB1.png",alt:"提高UVLO"}})]),v._v(" "),t("li",[v._v("开关频率由以下公式确定\n"),t("img",{attrs:{src:"http://i.imgur.com/EcqbYXX.png",alt:"开关频率确定公式"}})]),v._v(" "),t("li",[v._v("PCB Layout要领\n"),t("ol",[t("li",[v._v("Vin需要使用低等效串联电阻(ESR)的陶瓷电容旁路，可以选择X5R或者X7R的陶瓷电容")]),v._v(" "),t("li",[v._v("减小由旁路电容的连线，Vin引脚和续流二极管的正极所构成的回路")]),v._v(" "),t("li",[v._v("power pad连接到GND，并且通过多个过孔连接至地平面")]),v._v(" "),t("li",[v._v("续流二极管的阴极和输出电感需要靠近PH引脚")]),v._v(" "),t("li",[v._v("Rt电阻离RT/CLK引脚的距离越近越好\n"),t("img",{attrs:{src:"http://i.imgur.com/Itr7Gst.png",alt:"Layout举例"}})])])])]),v._v(" "),t("h2",{attrs:{id:"开尔文连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开尔文连接"}},[v._v("#")]),v._v(" 开尔文连接")]),v._v(" "),t("p",[v._v("开尔文连接是一种用于模拟信号远传的连接方法，其特点是不在驱动器的输出端直接连接反馈到反相端，而是从负载端将反馈接到驱动器的反相端的而一种连接方法，其目的是减小线路电阻引起的误差")])])}),[],!1,null,null,null);_.default=l.exports}}]);