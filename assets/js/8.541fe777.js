(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{584:function(t,s,a){t.exports=a.p+"assets/img/USB_slot_interface.fd582002.png"},585:function(t,s,a){t.exports=a.p+"assets/img/USB_encoding.ef77eb86.png"},586:function(t,s,a){t.exports=a.p+"assets/img/USB_signal_state.afb024aa.png"},587:function(t,s,a){t.exports=a.p+"assets/img/USB_field_package_transaction_transfer.ab197813.png"},588:function(t,s,a){t.exports=a.p+"assets/img/USB_device_structure.e3d82b81.png"},589:function(t,s,a){t.exports=a.p+"assets/img/USB_system_tier.fab32862.png"},590:function(t,s,a){t.exports=a.p+"assets/img/USB_connection_detection.dc749bbf.png"},591:function(t,s,a){t.exports=a.p+"assets/img/USB_fs_device_connection.6b26ee3c.png"},592:function(t,s,a){t.exports=a.p+"assets/img/USB_hs_device_connection.4cf60d51.png"},593:function(t,s,a){t.exports=a.p+"assets/img/USB_enumeration.d3564010.png"},594:function(t,s,a){t.exports=a.p+"assets/img/USB_control_transfer.501fc695.png"},595:function(t,s,a){t.exports=a.p+"assets/img/USB_control_transfer_transactions.73812a66.png"},596:function(t,s,a){t.exports=a.p+"assets/img/USB_control_transfer_setup_stage.54f7d194.png"},638:function(t,s,a){"use strict";a.r(s);var _=a(28),v=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"usb-基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#usb-基础"}},[t._v("#")]),t._v(" 𝑼𝑺𝑩 基础")]),t._v(" "),_("h2",{attrs:{id:"usb-基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#usb-基本概念"}},[t._v("#")]),t._v(" USB 基本概念")]),t._v(" "),_("h3",{attrs:{id:"usb-协议标准"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#usb-协议标准"}},[t._v("#")]),t._v(" USB 协议标准")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("USB 协议标准")]),t._v(" "),_("th",[t._v("主要特点")]),t._v(" "),_("th",[t._v("速度等级")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("USB 2.0 Full Speed"),_("br"),t._v("（旧称 USB 1.1）")]),t._v(" "),_("td",[t._v("规范了 USB 低全速传输")]),t._v(" "),_("td",[t._v("1.5 Mbps~12 Mbps")])]),t._v(" "),_("tr",[_("td",[t._v("USB 2.0 High Speed"),_("br"),t._v("（旧称 USB 2.0）")]),t._v(" "),_("td",[t._v("规范了 USB 高速传输")]),t._v(" "),_("td",[t._v("480 Mbps")])]),t._v(" "),_("tr",[_("td",[t._v("USB 3.2 gen1"),_("br"),t._v("（旧称 USB 3.0）")]),t._v(" "),_("td",[t._v("采用 8b/10b 编码，增加一对超高速差分线，供电 5V/0.9A")]),t._v(" "),_("td",[t._v("5 Gbps")])]),t._v(" "),_("tr",[_("td",[t._v("USB 3.2 gen2"),_("br"),t._v("（旧称 USB 3.1）")]),t._v(" "),_("td",[t._v("采用 128b/132b 编码，速度提高 1 倍，供电 20V/5A，同时增加了 A/V 影音传输标准")]),t._v(" "),_("td",[t._v("10 Gbps")])]),t._v(" "),_("tr",[_("td",[t._v("USB 3.2 gen2*2"),_("br"),t._v("（旧称 USB 3.2）")]),t._v(" "),_("td",[t._v("增加一对超高速传输通道，速度再次翻倍，只能在 C 型接口上运行")]),t._v(" "),_("td",[t._v("20 Gbps")])])])]),t._v(" "),_("h3",{attrs:{id:"通讯接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通讯接口"}},[t._v("#")]),t._v(" 通讯接口")]),t._v(" "),_("p",[_("img",{attrs:{src:a(584),alt:"USB 通讯接口"}})]),t._v(" "),_("h3",{attrs:{id:"编码方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编码方式"}},[t._v("#")]),t._v(" 编码方式")]),t._v(" "),_("p",[_("img",{attrs:{src:a(585),alt:"USB 编码方式"}})]),t._v(" "),_("p",[t._v("这种编码方式也称为"),_("strong",[t._v("反向不归零编码（NRZI）")])]),t._v(" "),_("p",[_("strong",[t._v("位填充")]),t._v("：在数据进行 NRZI 编码前，每 6 个连续的 "),_("strong",[t._v("1")]),t._v(" 信号之后都会插入 1 个 "),_("strong",[t._v("0")]),t._v(" 信号，以避免长时间电平保持不变带来的同步漂移。")]),t._v(" "),_("h3",{attrs:{id:"信号传输状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#信号传输状态"}},[t._v("#")]),t._v(" 信号传输状态")]),t._v(" "),_("p",[_("img",{attrs:{src:a(586),alt:"USB 信号传输状态"}})]),t._v(" "),_("h3",{attrs:{id:"帧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#帧"}},[t._v("#")]),t._v(" 帧")]),t._v(" "),_("p",[t._v("帧是一个时间单位，固定为"),_("strong",[t._v("1ms")]),t._v("（低/全速），高速-微帧为 "),_("strong",[t._v("125us")])]),t._v(" "),_("h3",{attrs:{id:"通讯过程划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通讯过程划分"}},[t._v("#")]),t._v(" 通讯过程划分")]),t._v(" "),_("p",[_("img",{attrs:{src:a(587),alt:"USB 通讯过程划分"}})]),t._v(" "),_("p",[_("strong",[t._v("事务")]),t._v("是最基本的传输单位。")]),t._v(" "),_("h3",{attrs:{id:"四种传输"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四种传输"}},[t._v("#")]),t._v(" 四种传输")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("控制传输")]),t._v(" "),_("p",[t._v("主机获取设备信息、状态，选择设备配置等一系列命令式工作。")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("中断传输")]),t._v(" "),_("p",[t._v("收发数据量少、周期性传输。")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("批量传输")]),t._v(" "),_("p",[t._v("利用任何可获得的总线带宽进行数据传输。")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("等时传输")]),t._v(" "),_("p",[t._v("恒定速率、没有差错控制的传输。")])]),t._v(" "),_("h3",{attrs:{id:"其他术语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他术语"}},[t._v("#")]),t._v(" 其他术语")]),t._v(" "),_("h4",{attrs:{id:"上传-下传"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#上传-下传"}},[t._v("#")]),t._v(" 上传/下传")]),t._v(" "),_("p",[t._v("USB 主机接收 USB 设备的数据称为上传，USB 主机发送数据给 USB 设备称为下传。")]),t._v(" "),_("h4",{attrs:{id:"地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#地址"}},[t._v("#")]),t._v(" 地址")]),t._v(" "),_("p",[t._v("主机管理设备，而为每一个连接的设备分配一个地址，主机最多可以分配 127 个地址。")]),t._v(" "),_("h4",{attrs:{id:"端点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#端点"}},[t._v("#")]),t._v(" 端点")]),t._v(" "),_("p",[t._v("USB 设备中实际的物理单元，端点和地址决定了主机和设备之间通讯的物理通道。")]),t._v(" "),_("h4",{attrs:{id:"usb-传输特点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#usb-传输特点"}},[t._v("#")]),t._v(" USB 传输特点")]),t._v(" "),_("p",[t._v("物理传输双方角色一定是主机和设备，一问一答传输方式，永远是主机先发起包请求。")]),t._v(" "),_("h2",{attrs:{id:"主设备和从设备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主设备和从设备"}},[t._v("#")]),t._v(" 主设备和从设备")]),t._v(" "),_("h3",{attrs:{id:"主设备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主设备"}},[t._v("#")]),t._v(" 主设备")]),t._v(" "),_("ul",[_("li",[t._v("检测 USB 设备的插拔动作")]),t._v(" "),_("li",[t._v("管理主从通讯之间的控制流")]),t._v(" "),_("li",[t._v("管理主从通讯之间的数据流")]),t._v(" "),_("li",[t._v("记录主机状态和设备动作信息")]),t._v(" "),_("li",[t._v("控制主控制器和 USB 设备间的电气接口")])]),t._v(" "),_("h3",{attrs:{id:"集线器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集线器"}},[t._v("#")]),t._v(" 集线器")]),t._v(" "),_("ul",[_("li",[t._v("扩展 USB 主机和 USB 端口")]),t._v(" "),_("li",[t._v("结构上有一个上行端口，多个下行端口")]),t._v(" "),_("li",[t._v("支持级联，系统中最多 5 个集线器（不包括主机的根集线器）")]),t._v(" "),_("li",[t._v("支持速度切换")])]),t._v(" "),_("h3",{attrs:{id:"功能设备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#功能设备"}},[t._v("#")]),t._v(" 功能设备")]),t._v(" "),_("ul",[_("li",[t._v("一个独立的外围设备，可以是单一功能，也可以是多功能的合成设备")]),t._v(" "),_("li",[t._v("内部包含有描述自身功能和资源需求的配置信息")])]),t._v(" "),_("p",[_("img",{attrs:{src:a(588),alt:"USB 设备结构图"}})]),t._v(" "),_("h2",{attrs:{id:"usb-系统分层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#usb-系统分层"}},[t._v("#")]),t._v(" USB 系统分层")]),t._v(" "),_("p",[_("img",{attrs:{src:a(589),alt:"USB 系统分层"}})]),t._v(" "),_("h2",{attrs:{id:"连接与检测"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接与检测"}},[t._v("#")]),t._v(" 连接与检测")]),t._v(" "),_("p",[_("img",{attrs:{src:a(590),alt:"USB 连接检测"}})]),t._v(" "),_("p",[_("img",{attrs:{src:a(591),alt:"USB 全速设备连接"}})]),t._v(" "),_("p",[_("img",{attrs:{src:a(592),alt:"USB 高速设备连接"}})]),t._v(" "),_("h3",{attrs:{id:"总线的状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总线的状态"}},[t._v("#")]),t._v(" 总线的状态")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("常见的总线状态")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("正常工作")]),t._v(" "),_("td",[t._v("总线上存在周期性 SOF 包")])]),t._v(" "),_("tr",[_("td",[t._v("总线复位")]),t._v(" "),_("td",[t._v("总线维持 SE0 状态  > 10ms")])]),t._v(" "),_("tr",[_("td",[t._v("总线挂起")]),t._v(" "),_("td",[t._v("总线无活动 > 3ms")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("常见的几种变化")]),t._v(" "),_("th",[t._v("触发点")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("无连接 -> 连接")]),t._v(" "),_("td",[t._v("D+/D- 上出现高电平 > 2ms")])]),t._v(" "),_("tr",[_("td",[t._v("正常 -> 挂起")]),t._v(" "),_("td",[t._v("J 状态保持 > 3ms")])]),t._v(" "),_("tr",[_("td",[t._v("挂起 -> 正常（唤醒）")]),t._v(" "),_("td",[t._v("出现 K 状态信号并持续一段时间")])])])]),t._v(" "),_("h2",{attrs:{id:"枚举"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#枚举"}},[t._v("#")]),t._v(" 枚举")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("枚举的定义")]),t._v(" "),_("p",[t._v("USB 主设备向 USB 从设备通过获取各种描述符，从而了解设备属性，知道是什么样的设备，并加载对应的 USB 类、功能驱动程序，然后进行后续一系列的数据通信。")])]),t._v(" "),_("ul",[_("li",[t._v("主设备连接识别从设备必须的过程")]),t._v(" "),_("li",[t._v("由多个控制传输构成")]),t._v(" "),_("li",[t._v("经过地址0 （缺省地址）到其他地址（主设备分配地址）的通讯")]),t._v(" "),_("li",[t._v("对于挂载多个 USB 从设备的系统，主设备是逐一进行枚举操作")])]),t._v(" "),_("p",[_("img",{attrs:{src:a(593),alt:"USB 枚举"}})]),t._v(" "),_("h3",{attrs:{id:"设备描述符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设备描述符"}},[t._v("#")]),t._v(" 设备描述符")]),t._v(" "),_("p",[t._v("第一个需要获取的描述符，长度固定 18 字节。")]),t._v(" "),_("h3",{attrs:{id:"配置描述符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置描述符"}},[t._v("#")]),t._v(" 配置描述符")]),t._v(" "),_("p",[t._v("描述了设备特定的配置，提供了当前配置下设备的功能接口，供电方式，耗电等信息。是一个配置的集合，集合长度不固定，包含了配置描述符、接口描述符、类定义描述符、端点描述符。")]),t._v(" "),_("h2",{attrs:{id:"控制传输"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#控制传输"}},[t._v("#")]),t._v(" 控制传输")]),t._v(" "),_("p",[_("img",{attrs:{src:a(594),alt:"USB 控制传输"}})]),t._v(" "),_("p",[_("img",{attrs:{src:a(595),alt:"USB 控制传输涉及到的事务"}})]),t._v(" "),_("h3",{attrs:{id:"建立阶段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#建立阶段"}},[t._v("#")]),t._v(" 建立阶段")]),t._v(" "),_("p",[_("img",{attrs:{src:a(596),alt:"USB 控制传输建立阶段"}})]),t._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.usb.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("USB 协会官网"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=v.exports}}]);