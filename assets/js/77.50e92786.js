(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{589:function(v,_,t){"use strict";t.r(_);var r=t(12),d=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"qr-码基本结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#qr-码基本结构"}},[v._v("#")]),v._v(" QR 码基本结构")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://s1.ax1x.com/2018/11/07/iTDp0x.png",alt:"QR码基本结构"}})]),v._v(" "),_("ul",[_("li",[v._v("格式信息：表示该二维码的纠错级别，分为L(7%)、M(15%)、Q(%25)、H(30%)")]),v._v(" "),_("li",[v._v("版本信息：即二维码的规格，共有40种规格的矩阵，从21x21（版本1）到177x177（版本40），每一个版本符号比前一版本每边增加4个模块")]),v._v(" "),_("li",[v._v("数据和纠错码字：实际保存的二维码信息和纠错码字（用于修正二维码损坏带来的错误）")])]),v._v(" "),_("h2",{attrs:{id:"qr-码数据容量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#qr-码数据容量"}},[v._v("#")]),v._v(" QR 码数据容量")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("类型")]),v._v(" "),_("th",[v._v("容量")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("数字")]),v._v(" "),_("td",[v._v("最多7089字符")])]),v._v(" "),_("tr",[_("td",[v._v("字母")]),v._v(" "),_("td",[v._v("最多4296字符")])]),v._v(" "),_("tr",[_("td",[v._v("二进制数")]),v._v(" "),_("td",[v._v("最多2593字节")])]),v._v(" "),_("tr",[_("td",[v._v("日本汉字/片假名")]),v._v(" "),_("td",[v._v("最多1817字符（采用Shift JIS）")])]),v._v(" "),_("tr",[_("td",[v._v("中文汉字")]),v._v(" "),_("td",[v._v("最多984字符（采用UTF-8）")])]),v._v(" "),_("tr",[_("td",[v._v("中文汉字")]),v._v(" "),_("td",[v._v("最多1800字符（采用BIG5）")])])])]),v._v(" "),_("h2",{attrs:{id:"qr数据模式指示符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#qr数据模式指示符"}},[v._v("#")]),v._v(" QR数据模式指示符")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("模式")]),v._v(" "),_("th",[v._v("指示符")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("ECI")]),v._v(" "),_("td",[v._v("0111")])]),v._v(" "),_("tr",[_("td",[v._v("数字")]),v._v(" "),_("td",[v._v("0001")])]),v._v(" "),_("tr",[_("td",[v._v("字母数字")]),v._v(" "),_("td",[v._v("0010")])]),v._v(" "),_("tr",[_("td",[v._v("8位字节")]),v._v(" "),_("td",[v._v("0100")])]),v._v(" "),_("tr",[_("td",[v._v("日本汉字")]),v._v(" "),_("td",[v._v("1000")])]),v._v(" "),_("tr",[_("td",[v._v("中国汉字")]),v._v(" "),_("td",[v._v("1101")])]),v._v(" "),_("tr",[_("td",[v._v("结构链接")]),v._v(" "),_("td",[v._v("0011")])]),v._v(" "),_("tr",[_("td",[v._v("FNC1")]),v._v(" "),_("td",[v._v("0101（第一位置），1001（第二位置）")])]),v._v(" "),_("tr",[_("td",[v._v("终止符")]),v._v(" "),_("td",[v._v("0000")])])])]),v._v(" "),_("h2",{attrs:{id:"qr编码过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#qr编码过程"}},[v._v("#")]),v._v(" QR编码过程")]),v._v(" "),_("p",[v._v("例如：对数据：01234567 进行编码（版本 1-H）")]),v._v(" "),_("ol",[_("li",[v._v("分组： 012 345 67")]),v._v(" "),_("li",[v._v("转成二进制：\n"),_("ul",[_("li",[v._v("012 → 0000001100")]),v._v(" "),_("li",[v._v("345 → 0101011001")]),v._v(" "),_("li",[v._v("67 → 1000011")])])]),v._v(" "),_("li",[v._v("转成序列： 0000001100 0101011001 1000011")]),v._v(" "),_("li",[v._v("字符数转成二进制： 8 → 0000001000")]),v._v(" "),_("li",[v._v("加入模式指示符：0001： 0001 0000001000 0000001100 0101011001 1000011")]),v._v(" "),_("li",[v._v("按需要将码字序列分块，并根据纠错等级和分块的码字产生纠错码字，并把纠错码字加入到数据码字序列后面，成为一个新的序列")]),v._v(" "),_("li",[v._v("在规格确定的条件下，将上面产生的序列按次序放入分块中，按规定把数据分块，然后对每一块进行计算，得出相应的纠错码字区块，把纠错码字区块按顺序构成一个序列，添加到原先的数据码字序列后面")]),v._v(" "),_("li",[v._v("构造矩阵，将探测图形、分隔符、定位图形、校正图形和码字模块放入矩阵中")]),v._v(" "),_("li",[v._v("将掩膜图形用于符号的编码区域，使得二维码图形中的深色和浅色区域能够比率最优的分布")]),v._v(" "),_("li",[v._v("生成格式和版本信息放入相应区域内")])])])}),[],!1,null,null,null);_.default=d.exports}}]);