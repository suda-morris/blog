(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{243:function(t,s,a){t.exports=a.p+"assets/img/esp32_system_structure.70e29ed6.png"},244:function(t,s,a){t.exports=a.p+"assets/img/cpu_core_system.99c3127b.png"},245:function(t,s,a){t.exports=a.p+"assets/img/esp32_address_table.85ad7d78.png"},246:function(t,s,a){t.exports=a.p+"assets/img/esp32_on_chip_address_table.24c64bff.png"},247:function(t,s,a){t.exports=a.p+"assets/img/esp32_external_memory.00b7148f.png"},248:function(t,s,a){t.exports=a.p+"assets/img/memory_map.6e8f8541.svg"},249:function(t,s,a){t.exports=a.p+"assets/img/esp32_system_clock.212a5357.png"},250:function(t,s,a){t.exports=a.p+"assets/img/peripheral_clock.329fd309.png"},251:function(t,s,a){t.exports=a.p+"assets/img/gpio_matrix.0bccff5a.png"},252:function(t,s,a){t.exports=a.p+"assets/img/esp32_pin_functions.671514cc.png"},253:function(t,s,a){t.exports=a.p+"assets/img/image_map.017b48c6.png"},281:function(t,s,a){"use strict";a.r(s);var r=a(2),_=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"𝙀𝙎𝙋-32-基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#𝙀𝙎𝙋-32-基础"}},[t._v("#")]),t._v(" 𝙀𝙎𝙋 32 基础")]),t._v(" "),r("h2",{attrs:{id:"芯片参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#芯片参数"}},[t._v("#")]),t._v(" 芯片参数")]),t._v(" "),r("ul",[r("li",[t._v("双核 CPU ，型号：Xtensa LX6，哈佛架构（数据总线和指令总线分别拥有 4GB 的寻址空间），主频最高 240MHz（600 MIPS），支持 DSP 指令（32 位乘法，32 位除法，40 位乘加运算），数据总线支持字节、半字、字对齐（或者非对齐）的方式访问数据（小端序），指令总线只能以字对齐的方式访问数据（小端序）")]),t._v(" "),r("li",[t._v("两个 CPU 各有一组大小为 32KB 的 cache，用于访问外部存储器")]),t._v(" "),r("li",[t._v("最大支持 16MB SPI Nor Flash 与 8MB SPI RAM（PSRAM）")]),t._v(" "),r("li",[t._v("内部集成 8MHz 高速振荡器和低速 RC 谐振器 （通常是150KHz，可调）")]),t._v(" "),r("li",[t._v("集成 Wi-Fi（802.11bgn）和双模蓝牙（经典蓝牙 + BLE）")])]),t._v(" "),r("h2",{attrs:{id:"系统结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统结构"}},[t._v("#")]),t._v(" 系统结构")]),t._v(" "),r("p",[r("img",{attrs:{src:a(243),alt:"系统结构"}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(244),alt:"CPU_CORE_SYSTEM"}})]),t._v(" "),r("h2",{attrs:{id:"内存地址映射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存地址映射"}},[t._v("#")]),t._v(" 内存地址映射")]),t._v(" "),r("p",[r("img",{attrs:{src:a(245),alt:"esp32 地址映射图"}})]),t._v(" "),r("blockquote",[r("p",[t._v("地址 "),r("code",[t._v("0x4000_0000")]),t._v(" 以下的部分属于数据总线的地址范围,地址 "),r("code",[t._v("0x4000_0000 ~ 0x4FFF_FFFF")]),t._v(" 部分为指令总线的地址范围,地址 "),r("code",[t._v("0x5000_0000")]),t._v(" 及以上的部分是数据总线与指令总线共用的地址范围。")])]),t._v(" "),r("h3",{attrs:{id:"片上内存地址映射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#片上内存地址映射"}},[t._v("#")]),t._v(" 片上内存地址映射")]),t._v(" "),r("p",[r("img",{attrs:{src:a(246),alt:"esp32 片上内存地址映射表"}})]),t._v(" "),r("h3",{attrs:{id:"片外内存地址映射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#片外内存地址映射"}},[t._v("#")]),t._v(" 片外内存地址映射")]),t._v(" "),r("p",[r("img",{attrs:{src:a(247),alt:"esp32 片外存储器地址映射"}})]),t._v(" "),r("blockquote",[r("p",[t._v("CPU 可以在单个时钟周期内访问 ROM 和 SRAM，RTC Fast Memory 的时钟源是 APB_CLOCK，RTC Slow Memory 的时钟源是 FAST_CLOCK，DMA 在 APB_CLK 时钟下访问 SRAM。")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(248),alt:"memory_map"}})]),t._v(" "),r("h2",{attrs:{id:"系统时钟"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统时钟"}},[t._v("#")]),t._v(" 系统时钟")]),t._v(" "),r("p",[r("img",{attrs:{src:a(249),alt:"esp32 系统时钟树"}})]),t._v(" "),r("h3",{attrs:{id:"时钟源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#时钟源"}},[t._v("#")]),t._v(" 时钟源")]),t._v(" "),r("ul",[r("li",[t._v("PLL_CLK：320MHz 内部 PLL 时钟")]),t._v(" "),r("li",[t._v("XTL_CLK：2～40MHz 外部晶振时钟")]),t._v(" "),r("li",[t._v("XTL32K_CLK：32KHz 外部晶振时钟")]),t._v(" "),r("li",[t._v("RTC8M_CLK：8MHz 内部时钟")]),t._v(" "),r("li",[t._v("RTC8M_D256_CLK：由 RTC8M_CLK 经过 256 分频所得")]),t._v(" "),r("li",[t._v("RTC_CLK：150KHz 内部低功耗时钟")]),t._v(" "),r("li",[t._v("APLL_CLK：16～128MHz 内部 Audio PLL 时钟")])]),t._v(" "),r("h3",{attrs:{id:"外设时钟"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#外设时钟"}},[t._v("#")]),t._v(" 外设时钟")]),t._v(" "),r("p",[r("img",{attrs:{src:a(250),alt:"外设支持的时钟源"}})]),t._v(" "),r("ul",[r("li",[t._v("REF_TICK 可以在 APB_CLK 时钟切换时维持频率不变")])]),t._v(" "),r("h2",{attrs:{id:"gpio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gpio"}},[t._v("#")]),t._v(" GPIO")]),t._v(" "),r("h3",{attrs:{id:"io-mux-和-gpio-matrix"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#io-mux-和-gpio-matrix"}},[t._v("#")]),t._v(" IO_MUX 和 GPIO Matrix")]),t._v(" "),r("p",[r("img",{attrs:{src:a(251),alt:"io_mux_gpio_matrix"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("ESP32 的每个物理 GPIO Pad 都可用作一个通用 IO，或者连接一个内部的外设信号。")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(252),alt:"esp32 引脚功能"}})]),t._v(" "),r("h2",{attrs:{id:"esp32-strapping-引脚配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#esp32-strapping-引脚配置"}},[t._v("#")]),t._v(" ESP32 Strapping 引脚配置")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s1.ax1x.com/2018/07/25/PtYdFf.png",alt:"strapping引脚配置"}})]),t._v(" "),r("h2",{attrs:{id:"低功耗管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#低功耗管理"}},[t._v("#")]),t._v(" 低功耗管理")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s1.ax1x.com/2018/07/25/PtBLWt.png",alt:"低功耗模式"}})]),t._v(" "),r("h2",{attrs:{id:"镜像结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像结构"}},[t._v("#")]),t._v(" 镜像结构")]),t._v(" "),r("p",[r("img",{attrs:{src:a(253),alt:"image map"}})])])}),[],!1,null,null,null);s.default=_.exports}}]);