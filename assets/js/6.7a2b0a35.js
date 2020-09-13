(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{565:function(t,s,a){t.exports=a.p+"assets/img/esp32_system_structure.70e29ed6.png"},566:function(t,s,a){t.exports=a.p+"assets/img/cpu_core_system.99c3127b.png"},567:function(t,s,a){t.exports=a.p+"assets/img/esp32_address_table.85ad7d78.png"},568:function(t,s,a){t.exports=a.p+"assets/img/esp32_on_chip_address_table.24c64bff.png"},569:function(t,s,a){t.exports=a.p+"assets/img/esp32_external_memory.00b7148f.png"},570:function(t,s,a){t.exports=a.p+"assets/img/cache_system.0bb68b0b.png"},571:function(t,s,a){t.exports=a.p+"assets/img/memory_map.6e8f8541.svg"},572:function(t,s,a){t.exports=a.p+"assets/img/memory_and_bus.32a8b406.png"},573:function(t,s,a){t.exports=a.p+"assets/img/image_map.017b48c6.png"},574:function(t,s,a){t.exports=a.p+"assets/img/interrupt_matrix.dc37bcbd.png"},575:function(t,s,a){t.exports=a.p+"assets/img/esp32_system_clock.212a5357.png"},576:function(t,s,a){t.exports=a.p+"assets/img/peripheral_clock.329fd309.png"},577:function(t,s,a){t.exports=a.p+"assets/img/gpio_matrix.0bccff5a.png"},578:function(t,s,a){t.exports=a.p+"assets/img/input_signal_to_peripheral.a9b187b8.png"},579:function(t,s,a){t.exports=a.p+"assets/img/output_signal_to_pad.06e891ba.png"},580:function(t,s,a){t.exports=a.p+"assets/img/io_mux_pad.671514cc.png"},581:function(t,s,a){t.exports=a.p+"assets/img/strapping_pin.5c9a4fda.png"},582:function(t,s,a){t.exports=a.p+"assets/img/dma_engine.54d9bdb7.png"},583:function(t,s,a){t.exports=a.p+"assets/img/dma_chain.5fca630d.png"},584:function(t,s,a){t.exports=a.p+"assets/img/spi_signals.2ac41670.png"},624:function(t,s,a){"use strict";a.r(s);var m=a(29),c=Object(m.a)({},(function(){var t=this,s=t.$createElement,m=t._self._c||s;return m("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[m("h1",{attrs:{id:"esp-32-基础"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#esp-32-基础"}},[t._v("#")]),t._v(" 𝙀𝙎𝙋 32 基础")]),t._v(" "),m("h2",{attrs:{id:"芯片参数"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#芯片参数"}},[t._v("#")]),t._v(" 芯片参数")]),t._v(" "),m("ul",[m("li",[t._v("双核 CPU ，型号：Xtensa LX6，哈佛架构（数据总线和指令总线分别拥有 4GB 的寻址空间），主频最高 240MHz（600 MIPS），支持 DSP 指令（32 位乘法，32 位除法，40 位乘加运算），数据总线支持字节、半字、字对齐（或者非对齐）的方式访问数据（小端序），指令总线只能以字对齐的方式访问数据（小端序）")]),t._v(" "),m("li",[t._v("两个 CPU 各有一组大小为 32KB 的 cache，用于访问外部存储器")]),t._v(" "),m("li",[t._v("最大支持 16MB SPI Nor Flash 与 8MB SPI RAM（PSRAM）")]),t._v(" "),m("li",[t._v("内部集成 8MHz 高速振荡器和低速 RC 谐振器 （通常是150KHz，可调）")]),t._v(" "),m("li",[t._v("集成 Wi-Fi（802.11bgn）和双模蓝牙（经典蓝牙 + BLE）")])]),t._v(" "),m("h2",{attrs:{id:"系统结构"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#系统结构"}},[t._v("#")]),t._v(" 系统结构")]),t._v(" "),m("p",[m("img",{attrs:{src:a(565),alt:"系统结构"}})]),t._v(" "),m("p",[m("img",{attrs:{src:a(566),alt:"CPU_CORE_SYSTEM"}})]),t._v(" "),m("h2",{attrs:{id:"内存地址映射"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#内存地址映射"}},[t._v("#")]),t._v(" 内存地址映射")]),t._v(" "),m("p",[m("img",{attrs:{src:a(567),alt:"esp32 地址映射图"}})]),t._v(" "),m("blockquote",[m("p",[t._v("地址 "),m("code",[t._v("0x4000_0000")]),t._v(" 以下的部分属于数据总线的地址范围,地址 "),m("code",[t._v("0x4000_0000 ~ 0x4FFF_FFFF")]),t._v(" 部分为指令总线的地址范围,地址 "),m("code",[t._v("0x5000_0000")]),t._v(" 及以上的部分是数据总线与指令总线共用的地址范围。")])]),t._v(" "),m("div",{staticClass:"custom-block tip"},[m("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),m("p",[t._v("CPU 可以通过数据总线按照"),m("strong",[t._v("字节")]),t._v("、"),m("strong",[t._v("半字")]),t._v("、"),m("strong",[t._v("字")]),t._v("进行对齐与非对齐的数据访问。")]),t._v(" "),m("p",[t._v("CPU 可以通过指令总线按照"),m("strong",[t._v("字对齐")]),t._v("的方式进行数据访问，非对齐访问会导致 CPU 工作异常。")])]),t._v(" "),m("h3",{attrs:{id:"片上内存地址映射"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#片上内存地址映射"}},[t._v("#")]),t._v(" 片上内存地址映射")]),t._v(" "),m("p",[m("img",{attrs:{src:a(568),alt:"esp32 片上内存地址映射表"}})]),t._v(" "),m("div",{staticClass:"custom-block tip"},[m("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),m("p",[t._v("Internal SRAM1 的容量为 128KB，既可以被两个 CPU 通过数据总线 0x3FFE_0000~0x3FFF_FFFF 读写，也可以被两个 CPU 通过指令总线 0x400A_0000~0x400B_FFFF 读写。"),m("strong",[t._v("指令总线地址和数据总线地址访问的 word 是逆序的")]),t._v("。")]),t._v(" "),m("p",[t._v("RTC FAST Memory 只能被 PRO_CPU 通过数据总线 0x3FF8_0000~0x3FF8_1FFF 读写，或被 PRO_CPU 通过指令总线 0x400C_0000~0x400C_1FFF 读写。"),m("strong",[t._v("指令总线地址和数据总线地址访问的 word 是同序的")]),t._v("。")])]),t._v(" "),m("h3",{attrs:{id:"片外内存地址映射"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#片外内存地址映射"}},[t._v("#")]),t._v(" 片外内存地址映射")]),t._v(" "),m("p",[m("img",{attrs:{src:a(569),alt:"esp32 片外存储器地址映射"}})]),t._v(" "),m("div",{staticClass:"custom-block tip"},[m("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),m("p",[t._v("两个 CPU 通过 Cache 与 MMU 对片外存储器进行访问时，Cache 将根据 MMU 中的设置把 CPU 的地址变换为 External Flash 与 External SRAM 的物理地址，经过变换之后的物理地址最大支持 16MB 的 External Flash 和 8MB 的 External SRAM。")])]),t._v(" "),m("h3",{attrs:{id:"cache-系统"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#cache-系统"}},[t._v("#")]),t._v(" Cache 系统")]),t._v(" "),m("p",[m("img",{attrs:{src:a(570),alt:"cache_system"}})]),t._v(" "),m("p",[t._v("当只有 PRO CPU 使用 Cache 或只有 APP CPU 使用 Cache 时，可以选择使用 Internal SRAM0 的 POOL0 或 POOL1 作为 Cache Memory;当 PRO CPU 和 APP CPU 都使用 Cache 时，Internal SRAM0 的 POOL0 和 POOL1 可以复用作为 Cache Memory。")]),t._v(" "),m("div",{staticClass:"custom-block warning"},[m("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),m("p",[t._v("开启 Cache 功能后，POOL0 或者 POOL1 只能作为 cache memory 使用，不能复用作为指令总线的访问区域。")])]),t._v(" "),m("h3",{attrs:{id:"一张图看清-esp32-的内存映射"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#一张图看清-esp32-的内存映射"}},[t._v("#")]),t._v(" 一张图看清 ESP32 的内存映射")]),t._v(" "),m("p",[m("img",{attrs:{src:a(571),alt:"memory_map"}})]),t._v(" "),m("h3",{attrs:{id:"内存布局与总线"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#内存布局与总线"}},[t._v("#")]),t._v(" 内存布局与总线")]),t._v(" "),m("p",[m("img",{attrs:{src:a(572),alt:"memory_map"}})]),t._v(" "),m("h2",{attrs:{id:"镜像结构"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#镜像结构"}},[t._v("#")]),t._v(" 镜像结构")]),t._v(" "),m("p",[m("img",{attrs:{src:a(573),alt:"image map"}})]),t._v(" "),m("h2",{attrs:{id:"中断矩阵"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#中断矩阵"}},[t._v("#")]),t._v(" 中断矩阵")]),t._v(" "),m("p",[m("img",{attrs:{src:a(574),alt:"中断矩阵"}})]),t._v(" "),m("ul",[m("li",[t._v("输入端可以接收多达 71 个"),m("strong",[t._v("外部中断源信号")]),t._v("（其中有 67 个可以分配给任意一个 CPU，"),m("code",[t._v("GPIO_INTERRUPT_PRO")]),t._v(" 和 "),m("code",[t._v("GPIO_INTERRUPT_PRO_NMI")]),t._v(" 只能分配给 PRO_CPU，"),m("code",[t._v("GPIO_INTERRUPT_APP")]),t._v(" 和 "),m("code",[t._v("GPIO_INTERRUPT_APP_NMI")]),t._v(" 只能分配给 APP_CPU。")]),t._v(" "),m("li",[t._v("每个 CPU 各有 32 个中断，其中仅有 26 个可以接收外部中断源信号，且这 26 个 CPU 中断"),m("strong",[t._v("可以被多个外设中断源共享")]),t._v("。")]),t._v(" "),m("li",[t._v("CPU 中断种类包括：电平触发，边沿触发，NMI，软件触发，定时器触发。")]),t._v(" "),m("li",[t._v("通过配置中断矩阵，可以屏蔽掉 CPU 的 NMI 中断。")])]),t._v(" "),m("h2",{attrs:{id:"系统复位"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#系统复位"}},[t._v("#")]),t._v(" 系统复位")]),t._v(" "),m("p",[t._v("系统提供 3 种级别的复位方式，分别是 CPU 复位，内核复位，系统复位。"),m("strong",[t._v("所有的复位都不会影响 MEM 中的数据")]),t._v("。")]),t._v(" "),m("ul",[m("li",[t._v("CPU 复位：只复位 CPU 的内部寄存器")]),t._v(" "),m("li",[t._v("内核复位：除了 RTC 子系统，所有的数字寄存器全部复位，包括 CPU、外设和数字 GPIO")]),t._v(" "),m("li",[t._v("系统复位：复位芯片的所有寄存器，包括 RTC 子系统")])]),t._v(" "),m("h3",{attrs:{id:"获取复位信息"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#获取复位信息"}},[t._v("#")]),t._v(" 获取复位信息")]),t._v(" "),m("p",[m("code",[t._v("PRO_CPU")]),t._v(" 和 "),m("code",[t._v("APP_CPU")]),t._v(" 可分别读取寄存器 "),m("code",[t._v("RTC_CNTL_RESET_CAUSE_PROCPU")]),t._v(" 和 "),m("code",[t._v("RTC_CNTL_RESET_CAUSE_APPCPU")]),t._v(" 来获取复位源。")]),t._v(" "),m("table",[m("thead",[m("tr",[m("th",[t._v("PRO")]),t._v(" "),m("th",[t._v("APP")]),t._v(" "),m("th",[t._v("复位源")]),t._v(" "),m("th",[t._v("复位级别")]),t._v(" "),m("th",[t._v("备注")])])]),t._v(" "),m("tbody",[m("tr",[m("td",[t._v("0x01")]),t._v(" "),m("td",[t._v("0x01")]),t._v(" "),m("td",[t._v("上电复位")]),t._v(" "),m("td",[t._v("系统复位")]),t._v(" "),m("td",[t._v("-")])]),t._v(" "),m("tr",[m("td",[t._v("0x10")]),t._v(" "),m("td",[t._v("0x10")]),t._v(" "),m("td",[t._v("RWDT 系统复位")]),t._v(" "),m("td",[t._v("系统复位")]),t._v(" "),m("td",[t._v("RTC 看门狗复位")])]),t._v(" "),m("tr",[m("td",[t._v("0x0F")]),t._v(" "),m("td",[t._v("0x0F")]),t._v(" "),m("td",[t._v("欠压复位")]),t._v(" "),m("td",[t._v("系统复位")]),t._v(" "),m("td",[t._v("-")])]),t._v(" "),m("tr",[m("td",[t._v("0x03")]),t._v(" "),m("td",[t._v("0x03")]),t._v(" "),m("td",[t._v("软件系统复位")]),t._v(" "),m("td",[t._v("内核复位")]),t._v(" "),m("td",[t._v("RTC_CNTL_SW_SYS_RST")])]),t._v(" "),m("tr",[m("td",[t._v("0x05")]),t._v(" "),m("td",[t._v("0x05")]),t._v(" "),m("td",[t._v("深度睡眠复位")]),t._v(" "),m("td",[t._v("内核复位")]),t._v(" "),m("td",[t._v("-")])]),t._v(" "),m("tr",[m("td",[t._v("0x07")]),t._v(" "),m("td",[t._v("0x07")]),t._v(" "),m("td",[t._v("MWDT0 全局复位")]),t._v(" "),m("td",[t._v("内核复位")]),t._v(" "),m("td",[t._v("-")])]),t._v(" "),m("tr",[m("td",[t._v("0x08")]),t._v(" "),m("td",[t._v("0x08")]),t._v(" "),m("td",[t._v("MWDT1 全局复位")]),t._v(" "),m("td",[t._v("内核复位")]),t._v(" "),m("td",[t._v("-")])]),t._v(" "),m("tr",[m("td",[t._v("0x09")]),t._v(" "),m("td",[t._v("0x09")]),t._v(" "),m("td",[t._v("RWDT 内核复位")]),t._v(" "),m("td",[t._v("内核复位")]),t._v(" "),m("td",[t._v("-")])]),t._v(" "),m("tr",[m("td",[t._v("0x0B")]),t._v(" "),m("td",[t._v("-")]),t._v(" "),m("td",[t._v("MWDT0 CPU 复位")]),t._v(" "),m("td",[t._v("CPU 复位")]),t._v(" "),m("td",[t._v("-")])]),t._v(" "),m("tr",[m("td",[t._v("0x0C")]),t._v(" "),m("td",[t._v("-")]),t._v(" "),m("td",[t._v("软件 CPU 复位")]),t._v(" "),m("td",[t._v("CPU 复位")]),t._v(" "),m("td",[t._v("RTC_CNTL_SW_PROCPU_RST")])]),t._v(" "),m("tr",[m("td",[t._v("-")]),t._v(" "),m("td",[t._v("0x0B")]),t._v(" "),m("td",[t._v("MWDT1 CPU 复位")]),t._v(" "),m("td",[t._v("CPU 复位")]),t._v(" "),m("td",[t._v("-")])]),t._v(" "),m("tr",[m("td",[t._v("-")]),t._v(" "),m("td",[t._v("0x0C")]),t._v(" "),m("td",[t._v("软件 CPU 复位")]),t._v(" "),m("td",[t._v("CPU 复位")]),t._v(" "),m("td",[t._v("RTC_CNTL_SW_APPCPU_RST")])]),t._v(" "),m("tr",[m("td",[t._v("0x0D")]),t._v(" "),m("td",[t._v("0x0D")]),t._v(" "),m("td",[t._v("RWDT CPU 复位")]),t._v(" "),m("td",[t._v("CPU 复位")]),t._v(" "),m("td",[t._v("-")])]),t._v(" "),m("tr",[m("td",[t._v("-")]),t._v(" "),m("td",[t._v("0x0E")]),t._v(" "),m("td",[t._v("PRO CPU 复位")]),t._v(" "),m("td",[t._v("CPU 复位")]),t._v(" "),m("td",[t._v("DPORT_APPCPU_RESETTING")])])])]),t._v(" "),m("h2",{attrs:{id:"系统时钟"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#系统时钟"}},[t._v("#")]),t._v(" 系统时钟")]),t._v(" "),m("p",[m("img",{attrs:{src:a(575),alt:"esp32 系统时钟树"}})]),t._v(" "),m("h3",{attrs:{id:"时钟源"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#时钟源"}},[t._v("#")]),t._v(" 时钟源")]),t._v(" "),m("ul",[m("li",[t._v("PLL_CLK：320MHz 内部 PLL 时钟")]),t._v(" "),m("li",[t._v("XTL_CLK：2～40MHz 外部晶振时钟")]),t._v(" "),m("li",[t._v("XTL32K_CLK：32KHz 外部晶振时钟")]),t._v(" "),m("li",[t._v("RTC8M_CLK：8MHz 内部时钟，频率可调")]),t._v(" "),m("li",[t._v("RTC8M_D256_CLK：由 RTC8M_CLK 经过 256 分频所得")]),t._v(" "),m("li",[t._v("RTC_CLK：150KHz 内部低功耗时钟，频率可调")]),t._v(" "),m("li",[t._v("APLL_CLK：16～128MHz 内部 Audio PLL 时钟")])]),t._v(" "),m("h3",{attrs:{id:"外设时钟"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#外设时钟"}},[t._v("#")]),t._v(" 外设时钟")]),t._v(" "),m("p",[m("img",{attrs:{src:a(576),alt:"外设支持的时钟源"}})]),t._v(" "),m("div",{staticClass:"custom-block tip"},[m("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),m("ul",[m("li",[t._v("REF_TICK 可以在 APB_CLK 时钟切换时维持频率不变")]),t._v(" "),m("li",[t._v("SLOW_CLK 允许选择 RTC_CLK，XTL32K_CLK，或 RTC8M_D256_CLK，用于驱动 Power Management 模块")]),t._v(" "),m("li",[t._v("FAST_CLK 允许选择 XTL_CLK 的分频时钟或者 RTC8M_CLK ，用于驱动片上传感器模块")])])]),t._v(" "),m("h3",{attrs:{id:"apll"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#apll"}},[t._v("#")]),t._v(" APLL")]),t._v(" "),m("p",[t._v("音频应用和其它对数据传输时效性要求很高的应用都需要一个高度可配值、低抖动并且精确的时钟源。ESP32 集成了专门用于 I2S 外设的 APLL。")]),t._v(" "),m("p"),m("p",[m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[m("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[m("mjx-msub",[m("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[m("mjx-c",{attrs:{c:"f"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"o"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"u"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"="}})],1),m("mjx-mfrac",{attrs:{space:"4"}},[m("mjx-frac",{attrs:{type:"d"}},[m("mjx-num",[m("mjx-nstrut",{attrs:{type:"d"}}),m("mjx-mrow",[m("mjx-msub",[m("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[m("mjx-c",{attrs:{c:"f"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"x"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"t"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"a"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"l"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"("}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"s"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"m"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"+"}})],1),m("mjx-mfrac",{attrs:{space:"3"}},[m("mjx-frac",[m("mjx-num",[m("mjx-nstrut"),m("mjx-mrow",{attrs:{size:"s"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"s"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"m"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1)],1)],1),m("mjx-dbox",[m("mjx-dtable",[m("mjx-line"),m("mjx-row",[m("mjx-den",[m("mjx-dstrut"),m("mjx-msup",{attrs:{size:"s"}},[m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[m("mjx-c",{attrs:{c:"8"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"+"}})],1),m("mjx-mfrac",{attrs:{space:"3"}},[m("mjx-frac",[m("mjx-num",[m("mjx-nstrut"),m("mjx-mrow",{attrs:{size:"s"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"s"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"m"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"0"}})],1)],1)],1),m("mjx-dbox",[m("mjx-dtable",[m("mjx-line"),m("mjx-row",[m("mjx-den",[m("mjx-dstrut"),m("mjx-msup",{attrs:{size:"s"}},[m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}}),m("mjx-c",{attrs:{c:"6"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"+"}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"4"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:")"}})],1)],1)],1),m("mjx-dbox",[m("mjx-dtable",[m("mjx-line",{attrs:{type:"d"}}),m("mjx-row",[m("mjx-den",[m("mjx-dstrut",{attrs:{type:"d"}}),m("mjx-mrow",[m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"("}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"o"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"i"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"v"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"+"}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"2"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),m("p"),t._v(" "),m("p",[t._v("其中：")]),t._v(" "),m("ul",[m("li",[m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-msub",[m("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[m("mjx-c",{attrs:{c:"f"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"x"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"t"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"a"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"l"}})],1)],1)],1)],1)],1)],1),t._v("：晶振频率，通常为 40MHz")],1),t._v(" "),m("li",[m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"s"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"m"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"0"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"2208"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"0"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"2"}}),m("mjx-c",{attrs:{c:"5"}}),m("mjx-c",{attrs:{c:"5"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),t._v(" "),m("li",[m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"s"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"m"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"2208"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"0"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"2"}}),m("mjx-c",{attrs:{c:"5"}}),m("mjx-c",{attrs:{c:"5"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),t._v(" "),m("li",[m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"s"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"m"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"2208"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"0"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"6"}}),m("mjx-c",{attrs:{c:"3"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),t._v(" "),m("li",[m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"o"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"i"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"v"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"2208"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"["}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"0"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:","}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[m("mjx-c",{attrs:{c:"3"}}),m("mjx-c",{attrs:{c:"1"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"]"}})],1)],1)],1)],1),t._v(" "),m("li",[m("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[m("mjx-math",{staticClass:" MJX-TEX"},[m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"3"}}),m("mjx-c",{attrs:{c:"5"}}),m("mjx-c",{attrs:{c:"0"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"M"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"H"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"z"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"<"}})],1),m("mjx-msub",{attrs:{space:"4"}},[m("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[m("mjx-c",{attrs:{c:"f"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"x"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"t"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"a"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"l"}})],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"("}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"s"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"m"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"+"}})],1),m("mjx-mfrac",{attrs:{space:"3"}},[m("mjx-frac",[m("mjx-num",[m("mjx-nstrut"),m("mjx-mrow",{attrs:{size:"s"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"s"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"m"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}})],1)],1)],1),m("mjx-dbox",[m("mjx-dtable",[m("mjx-line"),m("mjx-row",[m("mjx-den",[m("mjx-dstrut"),m("mjx-msup",{attrs:{size:"s"}},[m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[m("mjx-c",{attrs:{c:"8"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"+"}})],1),m("mjx-mfrac",{attrs:{space:"3"}},[m("mjx-frac",[m("mjx-num",[m("mjx-nstrut"),m("mjx-mrow",{attrs:{size:"s"}},[m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"s"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"d"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"m"}})],1),m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"0"}})],1)],1)],1),m("mjx-dbox",[m("mjx-dtable",[m("mjx-line"),m("mjx-row",[m("mjx-den",[m("mjx-dstrut"),m("mjx-msup",{attrs:{size:"s"}},[m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"2"}})],1),m("mjx-script",{staticStyle:{"vertical-align":"0.363em"}},[m("mjx-TeXAtom",{attrs:{size:"s"}},[m("mjx-mn",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:"1"}}),m("mjx-c",{attrs:{c:"6"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"+"}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"3"}},[m("mjx-c",{attrs:{c:"4"}})],1),m("mjx-mo",{staticClass:"mjx-n"},[m("mjx-c",{attrs:{c:")"}})],1),m("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"<"}})],1),m("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[m("mjx-c",{attrs:{c:"5"}}),m("mjx-c",{attrs:{c:"0"}}),m("mjx-c",{attrs:{c:"0"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"M"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"H"}})],1),m("mjx-mi",{staticClass:"mjx-i"},[m("mjx-c",{attrs:{c:"z"}})],1)],1)],1)],1)]),t._v(" "),m("h2",{attrs:{id:"gpio"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#gpio"}},[t._v("#")]),t._v(" GPIO")]),t._v(" "),m("h3",{attrs:{id:"io-mux-和-gpio-matrix"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#io-mux-和-gpio-matrix"}},[t._v("#")]),t._v(" IO_MUX 和 GPIO Matrix")]),t._v(" "),m("p",[m("img",{attrs:{src:a(577),alt:"io_mux_gpio_matrix"}})]),t._v(" "),m("div",{staticClass:"custom-block tip"},[m("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),m("ul",[m("li",[t._v("ESP32 的每个物理 GPIO Pad 都可用作一个通用 IO，或者连接至内部的某个外设信号")]),t._v(" "),m("li",[t._v("RTC IO_MUX 用于控制 GPIO pad 的低功耗和模拟功能，只有部分 GPIO pad 具有这些功能。当这些管脚被配置为 RTC GPIO时，作为输出管脚时仍然能够在芯片处于 Deep-sleep 睡眠模式下保持输出电平值或者作为输入管脚使用时可以将芯片从 Deep-sleep 中唤醒")]),t._v(" "),m("li",[t._v("GPIO 34-39 仅用作输入管脚，其余的既可以作为输入也可以作为输出")]),t._v(" "),m("li",[t._v("快速信号如以太网、SDIO、SPI、JTAG、UART等会旁路 GPIO 交换矩阵以实现更好的高频数字特性")])])]),t._v(" "),m("h3",{attrs:{id:"信号从-gpio-pad-输入给外设"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#信号从-gpio-pad-输入给外设"}},[t._v("#")]),t._v(" 信号从 GPIO pad 输入给外设")]),t._v(" "),m("p",[m("img",{attrs:{src:a(578),alt:"信号从 GPIO pad 输入给外设"}})]),t._v(" "),m("h4",{attrs:{id:"将-rmt-外设通道-0-的输入信号-rmt-sig-in0-idx-信号索引值为-83-绑定到-gpio15"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#将-rmt-外设通道-0-的输入信号-rmt-sig-in0-idx-信号索引值为-83-绑定到-gpio15"}},[t._v("#")]),t._v(" 将 RMT 外设通道 0 的输入信号 RMT_SIG_IN0_IDX (信号索引值为 83) 绑定到 GPIO15")]),t._v(" "),m("ol",[m("li",[t._v("将 GPIO_FUNC83_IN_SEL_CFG_REG 寄存器的 GPIO_FUNC83_IN_SEL 字段设置为 15")]),t._v(" "),m("li",[t._v("置位 GPIO_FUNC15_OUT_SEL_CFG_REG 寄存器的 GPIO_FUNC15_OEN_SEL 位")]),t._v(" "),m("li",[t._v("清零 GPIO_ENABLE_REG 寄存器的 Bit 15")]),t._v(" "),m("li",[t._v("配置 IO_MUX_GPIO15_REG 寄存器的 MCU_SEL 字段为 2 (GPIO function)，同时置位 FUN_IE")])]),t._v(" "),m("h3",{attrs:{id:"信号从外设输出到-gpio-pad"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#信号从外设输出到-gpio-pad"}},[t._v("#")]),t._v(" 信号从外设输出到 GPIO pad")]),t._v(" "),m("p",[m("img",{attrs:{src:a(579),alt:"信号从外设输出到 GPIO pad"}})]),t._v(" "),m("h3",{attrs:{id:"io-mux-pad-列表"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#io-mux-pad-列表"}},[t._v("#")]),t._v(" IO_MUX Pad 列表")]),t._v(" "),m("p",[m("img",{attrs:{src:a(580),alt:"IO_MUX Pad 列表"}})]),t._v(" "),m("h3",{attrs:{id:"strapping-管脚"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#strapping-管脚"}},[t._v("#")]),t._v(" Strapping 管脚")]),t._v(" "),m("p",[m("img",{attrs:{src:a(581),alt:"strapping引脚配置"}})]),t._v(" "),m("h2",{attrs:{id:"dport"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#dport"}},[t._v("#")]),t._v(" DPort")]),t._v(" "),m("p",[t._v("通过 DPort 寄存器控制时钟门控，管理功耗，配置外设可以使系统在保持最佳新能的同时将功耗降到最低。")]),t._v(" "),m("p",[t._v("DPort 寄存器包含了多个外设和模块的寄存器：")]),t._v(" "),m("ul",[m("li",[t._v("系统和存储器：cache 配置和存储器映射")]),t._v(" "),m("li",[t._v("时钟和复位")]),t._v(" "),m("li",[t._v("中断矩阵")]),t._v(" "),m("li",[t._v("DMA")]),t._v(" "),m("li",[t._v("PID/MPU/MMU")]),t._v(" "),m("li",[t._v("APP CPU：暂停任务的执行，设置从 ROM code 启动后的跳转地址 (DPORT_APPCPU_BOOT_ADDR)")]),t._v(" "),m("li",[t._v("外设时钟门控和复位")])]),t._v(" "),m("h2",{attrs:{id:"dma"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#dma"}},[t._v("#")]),t._v(" DMA")]),t._v(" "),m("p",[t._v("DMA 控制器与 CPU 的数据总线使用相同的地址空间访问内部 RAM。")]),t._v(" "),m("p",[m("img",{attrs:{src:a(582),alt:"DMA 引擎的架构"}})]),t._v(" "),m("p",[t._v("软件可以通过挂载链表的方式来使用 DMA 引擎，引擎会根据 out_link 中内容将相应 RAM 中的数据发送出去，也可根据 in_link 中的内容将接收的数据存取指定 RAM 地址空间。")]),t._v(" "),m("p",[m("img",{attrs:{src:a(583),alt:"DMA 链表结构"}})]),t._v(" "),m("ul",[m("li",[t._v("owner\n"),m("ul",[m("li",[t._v("0 表示当前链表对应的 buffer 由 CPU 操作")]),t._v(" "),m("li",[t._v("1 表示当前链表对应的 buffer 由 DMA 操作")])])]),t._v(" "),m("li",[t._v("eof\n"),m("ul",[m("li",[t._v("0 表示当前链表不是最后一个链表")]),t._v(" "),m("li",[t._v("1 表示当前链表为数据包的最后一个链表")])])]),t._v(" "),m("li",[t._v("length\n"),m("ul",[m("li",[t._v("当前链表对应的 buffer 中的有效字节数")])])]),t._v(" "),m("li",[t._v("size\n"),m("ul",[m("li",[t._v("当前链表对应的 buffer 的大小（字对齐）")])])]),t._v(" "),m("li",[t._v("buffer address pointer\n"),m("ul",[m("li",[t._v("buffer 地址指针（字对齐）")])])]),t._v(" "),m("li",[t._v("next descriptor address\n"),m("ul",[m("li",[t._v("指向下一个描述符链表，当 eof 为 1 时，该值也应为0")])])])]),t._v(" "),m("h2",{attrs:{id:"pid"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#pid"}},[t._v("#")]),t._v(" PID")]),t._v(" "),m("ul",[m("li",[t._v("在 ESP32 中，PID 控制器充当指示器，向 MMU/MPU 通知当前运行代码的程序的 PID。")]),t._v(" "),m("li",[t._v("OS 每次将上下文切换到另一个应用时，会更新 PID 控制器中的 PID。")]),t._v(" "),m("li",[t._v("OS 和应用程序运行时，分别配有一个进程号（即 PID），用于区分彼此。")]),t._v(" "),m("li",[t._v("PRO_CPU 和 APP_CPU 各有 8 个进程号。")]),t._v(" "),m("li",[t._v("ESP32 的每个 CPU 各有一个 PID 控制器，能够在需要时允许不同的 CPU 上运行不同的进程。")])]),t._v(" "),m("h2",{attrs:{id:"mpu-mmu"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#mpu-mmu"}},[t._v("#")]),t._v(" MPU，MMU")]),t._v(" "),m("ul",[m("li",[t._v("ESP32 中的每个外设和存储器通过 MMU 或者 MPU 被访问。")]),t._v(" "),m("li",[t._v("MPU/MMU 基于进程的 PID 对片上存储器、片外存储器、外设进行管理。")]),t._v(" "),m("li",[t._v("片上存储器由 MPU/MMU 管理")]),t._v(" "),m("li",[t._v("片外存储器由 MMU 管理")]),t._v(" "),m("li",[t._v("外设由 MPU 管理")])]),t._v(" "),m("h2",{attrs:{id:"spi"}},[m("a",{staticClass:"header-anchor",attrs:{href:"#spi"}},[t._v("#")]),t._v(" SPI")]),t._v(" "),m("p",[m("img",{attrs:{src:a(584),alt:"SPI 信号线"}})])])}),[],!1,null,null,null);s.default=c.exports}}]);