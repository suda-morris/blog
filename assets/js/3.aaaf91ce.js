(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{199:function(t,s,a){t.exports=a.p+"assets/img/esp32_system_structure.70e29ed6.png"},200:function(t,s,a){t.exports=a.p+"assets/img/esp32_address_table.85ad7d78.png"},201:function(t,s,a){t.exports=a.p+"assets/img/esp32_on_chip_address_table.24c64bff.png"},202:function(t,s,a){t.exports=a.p+"assets/img/esp32_external_memory.00b7148f.png"},203:function(t,s,a){t.exports=a.p+"assets/img/esp32_system_clock.212a5357.png"},204:function(t,s,a){t.exports=a.p+"assets/img/esp32_pin_functions.671514cc.png"},280:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"𝙀𝙎𝙋-32-基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#𝙀𝙎𝙋-32-基础","aria-hidden":"true"}},[t._v("#")]),t._v(" 𝙀𝙎𝙋 32 基础")]),t._v(" "),r("h2",{attrs:{id:"芯片参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#芯片参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 芯片参数")]),t._v(" "),r("ul",[r("li",[t._v("双核 CPU ，型号：Xtensa LX6，哈佛架构（数据总线和指令总线分别拥有 4GB 的寻址空间），主频最高 240MHz（600 MIPS），支持 DSP 指令（32 位乘法，32 位除法，40 位乘加运算），数据总线支持字节、半字、字对齐（或者非对齐）的方式访问数据（小端序），指令总线只能以字对齐的方式访问数据（小端序）")]),t._v(" "),r("li",[t._v("两个 CPU 各有一组大小为 32KB 的 cache，用于访问外部存储器")]),t._v(" "),r("li",[t._v("最大支持 16MB SPI Nor Flash 与 8MB SPI RAM（PSRAM）")]),t._v(" "),r("li",[t._v("内部集成 8MHz 高速振荡器和低速 RC 谐振器 （通常是150KHz，可调）")]),t._v(" "),r("li",[t._v("集成 Wi-Fi（802.11bgn）和双模蓝牙（经典蓝牙 + BLE）")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(199),alt:"系统结构"}})]),t._v(" "),r("h2",{attrs:{id:"内存地址映射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存地址映射","aria-hidden":"true"}},[t._v("#")]),t._v(" 内存地址映射")]),t._v(" "),r("p",[r("img",{attrs:{src:a(200),alt:"esp32 地址映射图"}})]),t._v(" "),r("blockquote",[r("p",[t._v("地址 "),r("code",[t._v("0x4000_0000")]),t._v(" 以下的部分属于数据总线的地址范围,地址 "),r("code",[t._v("0x4000_0000 ~ 0x4FFF_FFFF")]),t._v(" 部分为指令总线的地址范围,地址 "),r("code",[t._v("0x5000_0000")]),t._v(" 及以上的部分是数据总线与指令总线共用的地址范围。")])]),t._v(" "),r("h3",{attrs:{id:"片上内存地址映射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#片上内存地址映射","aria-hidden":"true"}},[t._v("#")]),t._v(" 片上内存地址映射")]),t._v(" "),r("p",[r("img",{attrs:{src:a(201),alt:"esp32 片上内存地址映射表"}})]),t._v(" "),r("h3",{attrs:{id:"片外内存地址映射"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#片外内存地址映射","aria-hidden":"true"}},[t._v("#")]),t._v(" 片外内存地址映射")]),t._v(" "),r("p",[r("img",{attrs:{src:a(202),alt:"esp32 片外存储器地址映射"}})]),t._v(" "),r("blockquote",[r("p",[t._v("CPU 可以在单个时钟周期内访问 ROM 和 SRAM，RTC Fast Memory 的时钟源是 APB_CLOCK，RTC Slow Memory 的时钟源是 FAST_CLOCK，DMA 在 APB_CLK 时钟下访问 SRAM。")])]),t._v(" "),r("h2",{attrs:{id:"系统时钟"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统时钟","aria-hidden":"true"}},[t._v("#")]),t._v(" 系统时钟")]),t._v(" "),r("p",[r("img",{attrs:{src:a(203),alt:"esp32 系统时钟树"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s1.ax1x.com/2018/11/08/i7afBV.png",alt:"外设支持的时钟源"}})]),t._v(" "),r("h2",{attrs:{id:"esp32-strapping-引脚配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#esp32-strapping-引脚配置","aria-hidden":"true"}},[t._v("#")]),t._v(" ESP32 Strapping 引脚配置")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s1.ax1x.com/2018/07/25/PtYdFf.png",alt:"strapping引脚配置"}})]),t._v(" "),r("h2",{attrs:{id:"低功耗管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#低功耗管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 低功耗管理")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://s1.ax1x.com/2018/07/25/PtBLWt.png",alt:"低功耗模式"}})]),t._v(" "),r("h2",{attrs:{id:"gpio-mux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gpio-mux","aria-hidden":"true"}},[t._v("#")]),t._v(" GPIO-MUX")]),t._v(" "),r("p",[r("img",{attrs:{src:a(204),alt:"esp32 引脚功能"}})])])},[],!1,null,null,null);s.default=e.exports}}]);