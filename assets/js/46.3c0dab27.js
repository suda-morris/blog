(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{616:function(v,_,l){"use strict";l.r(_);var i=l(33),G=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("p",[v._v("title: GPS Introduction\ntags:")]),v._v(" "),l("ul",[l("li",[v._v("GPS\ncategories:")]),v._v(" "),l("li",[v._v("Geek Hobbies\nauthor: suda-morris\ndate: 2015-10-16 09:06:12 +0800")])]),v._v(" "),l("hr"),v._v(" "),l("h2",{attrs:{id:"neo-m8n模块"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#neo-m8n模块"}},[v._v("#")]),v._v(" NEO-M8N模块")]),v._v(" "),l("ol",[l("li",[v._v("内嵌USB转串口功能")]),v._v(" "),l("li",[v._v("三维位置定位")]),v._v(" "),l("li",[v._v("测速")]),v._v(" "),l("li",[v._v("授时")]),v._v(" "),l("li",[v._v("MAXIM公司20.5dB高增益LNA芯片")]),v._v(" "),l("li",[v._v("应用场合：\n"),l("ol",[l("li",[v._v("语音报站")]),v._v(" "),l("li",[v._v("航模，飞控，无人机")]),v._v(" "),l("li",[v._v("同步授时")]),v._v(" "),l("li",[v._v("汽车导航")])])]),v._v(" "),l("li",[v._v("接收制式：\n"),l("ol",[l("li",[v._v("GPS")]),v._v(" "),l("li",[v._v("GLONASS")]),v._v(" "),l("li",[v._v("Galileo")]),v._v(" "),l("li",[v._v("BeiDou")]),v._v(" "),l("li",[v._v("QZSS")]),v._v(" "),l("li",[v._v("SBAS")])])]),v._v(" "),l("li",[v._v("72路接收通道")]),v._v(" "),l("li",[v._v("水平定位精度：2米（空旷地）")]),v._v(" "),l("li",[v._v("输出频率1Hz~10Hz")]),v._v(" "),l("li",[v._v("速度精度：0.1m/s")]),v._v(" "),l("li",[v._v("加速度精度：0.1m/s2")]),v._v(" "),l("li",[v._v("最大高度18000米，最大速度515m/s")]),v._v(" "),l("li",[v._v("最大加速度4g")]),v._v(" "),l("li",[v._v("基于UBX协议进行模块的配置")]),v._v(" "),l("li",[v._v("IIC接口的SDA与SCL已经内部接了上拉电阻")])]),v._v(" "),l("h2",{attrs:{id:"xh414法拉电容"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#xh414法拉电容"}},[v._v("#")]),v._v(" XH414法拉电容")]),v._v(" "),l("ol",[l("li",[v._v("参数:3.3V 0.07F")]),v._v(" "),l("li",[v._v("功能和锂电池一样，在主电源掉电的时候可以为GPS模块的RTC部分供电，以使GPS模块在下次启动时能快速搜索到卫星，一般可维持供电1小时")])]),v._v(" "),l("h2",{attrs:{id:"nmea-0183协议"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#nmea-0183协议"}},[v._v("#")]),v._v(" NMEA-0183协议")]),v._v(" "),l("ol",[l("li",[v._v("NMEA是美国国家海洋电子协会为海用电子设备指定的标准格式，目前已经成为了GPS导航设备统一的RTCM标准协议")]),v._v(" "),l("li",[v._v("NMEA-0183是一套定义接收机输出的标准信息，有几种不同的二格式，每种都是独立相关的ASCII，使用逗号隔开数据，数据流长度30-100字符不等，通常以每秒间隔选择输出，最常用的格式为“GGA”，它包含了定位时间，纬度，经度，高度，定位所用的卫星数，DOP值，差分状态和校正时段，其他的有速度，跟踪，日期等。")]),v._v(" "),l("li",[v._v("NMEA-0183常用语句格式说明：\n"),l("ol",[l("li",[v._v("$GPGGA:全球定位数据，最大帧长72")]),v._v(" "),l("li",[v._v("$GPGSA：卫星PRN数据，最大帧长65")]),v._v(" "),l("li",[v._v("$GPGSV：卫星状态信息，最大帧长210")]),v._v(" "),l("li",[v._v("$GPRMC：推荐最小数据，最大帧长70")]),v._v(" "),l("li",[v._v("$GPVTG：地面速度信息，最大帧长34")]),v._v(" "),l("li",[v._v("$GPGLL：大地坐标信息")]),v._v(" "),l("li",[v._v("$GPZDA：UTC时间和日期")])])]),v._v(" "),l("li",[v._v("协议帧总说明：该协议采用ASCII码。帧格式形如：$aacc,dd,dd,...,ddd*hh"),l("CR",[l("LF",[l("ol",[l("li",[v._v("$表示帧命令起始位")]),v._v(" "),l("li",[v._v("aaccc表示地址域，前两位是标识符，后三位为语句名")]),v._v(" "),l("li",[v._v("ddd...ddd表示数据")]),v._v(" "),l("li",[v._v("*表示校验和前缀")]),v._v(" "),l("li",[v._v("hh表示校验和，$与*之间所有字符ASCII码的校验和(各字节做异或运算，得到校验和后，再转换16进制格式的ASCII字符)")]),v._v(" "),l("li",[l("CR",[l("LF",[v._v("表示回车和换行\n")])],1)],1)])])],1)],1),v._v(" "),l("li",[v._v("GPGGA：GPS固定数据输出语句\n"),l("ol",[l("li",[v._v("格式：$GPGGA,<1>,<2>,<3>,<4>,<5>,<6>,<7>,<8>,<9>,<10>,<11>,<12>,<13>,<14>*<15>"),l("CR",[l("LF")],1)],1),v._v(" "),l("li",[v._v("例子：$GPGGA,092725.00,4717.11399,N,00833.91590,E,1,8,1.01,499.6,M,48.0,M,,0*5B")]),v._v(" "),l("li",[v._v("<1>UTC时间，格式为hhmmss.sss")]),v._v(" "),l("li",[v._v("<2>纬度，格式ddmm.mmmm")]),v._v(" "),l("li",[v._v("<3>纬度半球，N或者S")]),v._v(" "),l("li",[v._v("<4>经度，格式ddmm.mmmm")]),v._v(" "),l("li",[v._v("<5>经度半球，E或W")]),v._v(" "),l("li",[v._v("<6>定位质量指标，0=定位无效，1=标准定位，2=差分定位，6=估算")]),v._v(" "),l("li",[v._v("<7>使用卫星数量，从00到12")]),v._v(" "),l("li",[v._v("<8>水平精确度，0.5到99.9")]),v._v(" "),l("li",[v._v("<9>天线离海平面的高度，-9999.9到9999.9米")]),v._v(" "),l("li",[v._v("<10>高度单位，M表示单位米")]),v._v(" "),l("li",[v._v("<11>大地椭球面相对海平面的高度")]),v._v(" "),l("li",[v._v("<12>高度单位，M表示单位米")]),v._v(" "),l("li",[v._v("<13>差分GPS数据期限（RTCM SC-104），最后设立RTCM传送的秒数量")]),v._v(" "),l("li",[v._v("<14>差分参考基站标号，从0000到1023")]),v._v(" "),l("li",[v._v("<15>校验和")])])]),v._v(" "),l("li",[v._v("GPGSA：GPS精度指针及使用卫星\n"),l("ol",[l("li",[v._v("格式：$GPGSA,<1>,<2>,<3>,<4>,<5>,<6>,<7>,<8>,<9>,<10>,<11>,<12>,<13>,<14>,<15>,<16>,<17>*<18>"),l("CR",[l("LF")],1)],1),v._v(" "),l("li",[v._v("例子：$GPGSA,A,3,23,29,07,08,09,18,26,28,,,,,1.94,1.18,1.54*0D")]),v._v(" "),l("li",[v._v("<1>模式2：M=手动，A=自动")]),v._v(" "),l("li",[v._v("<2>模式1：定位型式1=未定位，2=二维定位，3=三维定位")]),v._v(" "),l("li",[v._v("<3>第1信道正在使用的卫星PRN码编号(Pseudo Random Noise，伪随机噪声吗)，01至32")]),v._v(" "),l("li",[v._v("<4> 第2信道正在使用的卫星PRN码编号")]),v._v(" "),l("li",[v._v("<5> 第3信道正在使用的卫星PRN码编号")]),v._v(" "),l("li",[v._v("<6> 第4信道正在使用的卫星PRN码编号")]),v._v(" "),l("li",[v._v("<7> 第5信道正在使用的卫星PRN码编号")]),v._v(" "),l("li",[v._v("<8> 第6信道正在使用的卫星PRN码编号")]),v._v(" "),l("li",[v._v("<9> 第7信道正在使用的卫星PRN码编号")]),v._v(" "),l("li",[v._v("<10> 第8信道正在使用的卫星PRN码编号")]),v._v(" "),l("li",[v._v("<11> 第9信道正在使用的卫星PRN码编号")]),v._v(" "),l("li",[v._v("<12> 第10信道正在使用的卫星PRN码编号")]),v._v(" "),l("li",[v._v("<13> 第11信道正在使用的卫星PRN码编号")]),v._v(" "),l("li",[v._v("<14> 第12信道正在使用的卫星PRN码编号")]),v._v(" "),l("li",[v._v("<15> PDOP综合位置精度因子（0.5 - 99.9）")]),v._v(" "),l("li",[v._v("<16> HDOP水平精度因子（0.5 - 99.9）")]),v._v(" "),l("li",[v._v("<17> VDOP垂直精度因子（0.5 - 99.9）")]),v._v(" "),l("li",[v._v("<18> 校验和")])])]),v._v(" "),l("li",[v._v("GPGSV：可视卫星状态输出语句\n"),l("ol",[l("li",[v._v("格式：：$GPGSV, <1>,<2>,<3>,<4>,<5>,<6>,<7>,...,<4>,<5>,<6>,<7>*<8>"),l("CR",[l("LF")],1)],1),v._v(" "),l("li",[v._v("例子：$GPGSV,3,1,10,23,38,230,44,29,71,156,47,07,29,116,41,08,09,081,36*7F")]),v._v(" "),l("li",[v._v("<1> 总的GSV语句电文数")]),v._v(" "),l("li",[v._v("<2> 当前GSV语句号")]),v._v(" "),l("li",[v._v("<3> 可视卫星总数，00至12")]),v._v(" "),l("li",[v._v("<4> 卫星编号，01至32")]),v._v(" "),l("li",[v._v("<5> 卫星仰角，00至90度")]),v._v(" "),l("li",[v._v("<6> 卫星方位角，000至359度。实际值")]),v._v(" "),l("li",[v._v("<7> 信噪比（C/No），00至99dB；无表示未接收到讯号")]),v._v(" "),l("li",[v._v("<8> 校验和。")]),v._v(" "),l("li",[v._v("每条语句最多包括四颗卫星的信息，每颗卫星的信息有四个数据项，即：卫星编号，卫星仰角，卫星方位角，信噪比")])])]),v._v(" "),l("li",[v._v("GPRMC：推荐最小数据量的GPS信息\n"),l("ol",[l("li",[v._v("格式：$GPRMC,<1>,<2>,<3>,<4>,<5>,<6>,<7>,<8>,<9>,<10>,<11>,<12>*<13>"),l("CR",[l("LF")],1)],1),v._v(" "),l("li",[v._v("例子：$GPRMC,083559.00,A,4717.11437,N,00833.91522,E,0.004,77.52,091202,,,A*57")]),v._v(" "),l("li",[v._v("<1> UTC（Coordinated Universal Time）时间，hhmmss（时分秒）格式")]),v._v(" "),l("li",[v._v("<2> 定位状态，A=有效定位，V=无效定位")]),v._v(" "),l("li",[v._v("<3> Latitude，纬度ddmm.mmmm（度分）格式（前导位数不足则补0）")]),v._v(" "),l("li",[v._v("<4> 纬度半球N（北半球）或S（南半球）")]),v._v(" "),l("li",[v._v("<5> Longitude，经度dddmm.mmmm（度分）格式（前导位数不足则补0")]),v._v(" "),l("li",[v._v("<6> 经度半球E（东经）或W（西经）")]),v._v(" "),l("li",[v._v("<7> 地面速率（000.0~999.9节，Knot，前导位数不足则补0）")]),v._v(" "),l("li",[v._v("<8> 地面航向（000.0~359.9度，以真北为参考基准，前导位数不足则补0）")]),v._v(" "),l("li",[v._v("<9> UTC日期，ddmmyy（日月年）格式")]),v._v(" "),l("li",[v._v("<10> Magnetic Variation，磁偏角（000.0~180.0度，前导位数不足则补0）")]),v._v(" "),l("li",[v._v("<11> Declination，磁偏角方向，E（东）或W（西）")]),v._v(" "),l("li",[v._v("<12> Mode Indicator，模式指示（仅NMEA0183 3.00版本输出，A=自主定位，D=差分，E=估算，N=数据无效）")]),v._v(" "),l("li",[v._v("<13> 校验和。")])])]),v._v(" "),l("li",[v._v("GPVTG：地面速度信息\n"),l("ol",[l("li",[v._v("格式：$GPVTG,<1>,<2>,<3>,<4>,<5>,<6>,<7>,<8>,<9>*<10>"),l("CR",[l("LF")],1)],1),v._v(" "),l("li",[v._v("例子：$GPVTG,77.52,T,,M,0.004,N,0.008,K,A*06")]),v._v(" "),l("li",[v._v("<1> 以真北为参考基准的地面航向")]),v._v(" "),l("li",[v._v("<2> T，表示“真”")]),v._v(" "),l("li",[v._v("<3> 以磁北为参考基准的地面航向")]),v._v(" "),l("li",[v._v("<4> M，表示“磁场”")]),v._v(" "),l("li",[v._v("<5> 地面速率")]),v._v(" "),l("li",[v._v("<6> N，表示“节”")]),v._v(" "),l("li",[v._v("<7> 地面速率")]),v._v(" "),l("li",[v._v("<8> K，表示“千米/小时”")]),v._v(" "),l("li",[v._v("<9> 模式指示（A=自主定位，D=差分，E=估算，N=数据无效）")]),v._v(" "),l("li",[v._v("<10> 校验和")])])]),v._v(" "),l("li",[v._v("GPGLL：定位地理信息\n"),l("ol",[l("li",[v._v("格式：$GPGLL,<1>,<2>,<3>,<4>,<5>,<6>,<7>*<8>"),l("CR",[l("LF")],1)],1),v._v(" "),l("li",[v._v("例子：$GPGLL,4717.11364,N,00833.91565,E,092321.00,A,A*60")]),v._v(" "),l("li",[v._v("<1> 纬度 ddmm.mmmmm（度分）")]),v._v(" "),l("li",[v._v("<2> 纬度半球 N（北半球）或 S（南半球）")]),v._v(" "),l("li",[v._v("<3> 经度 dddmm.mmmmm（度分）")]),v._v(" "),l("li",[v._v("<4> 经度半球 E（东经）或 W（西经）")]),v._v(" "),l("li",[v._v("<5> UTC 时间：hhmmss（时分秒）")]),v._v(" "),l("li",[v._v("<6> 定位状态，A=有效定位，V=无效定位")]),v._v(" "),l("li",[v._v("<7> 模式指示（A=自主定位，D=差分，E=估算，N=数据无效）")]),v._v(" "),l("li",[v._v("<8> 校验和")])])]),v._v(" "),l("li",[v._v("GPZDA：当前时间信息\n"),l("ol",[l("li",[v._v("格式：$GPZDA,<1>,<2>,<3>,<4>,<5>,<6>*<7>"),l("CR",[l("LF")],1)],1),v._v(" "),l("li",[v._v("例子：$GPZDA,082710.00,16,09,2002,00,00*64")]),v._v(" "),l("li",[v._v("<1> UTC 时间：hhmmss（时分秒，格林威治时间）")]),v._v(" "),l("li",[v._v("<2> 日")]),v._v(" "),l("li",[v._v("<3> 月")]),v._v(" "),l("li",[v._v("<4> 年")]),v._v(" "),l("li",[v._v("<5> 本地区域小时（NEO-6M 不支持，为 00）")]),v._v(" "),l("li",[v._v("<6> 本地区域分钟（NEO-6M不支持，为 00）")]),v._v(" "),l("li",[v._v("<7> 校验和")])])])])])}),[],!1,null,null,null);_.default=G.exports}}]);