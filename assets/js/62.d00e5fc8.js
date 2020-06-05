(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{632:function(_,e,v){"use strict";v.r(e);var l=v(33),i=Object(l.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("title: Network Security\ntags:")]),_._v(" "),v("ul",[v("li",[_._v("SSL/TLS")])]),_._v(" "),v("p",[_._v("categories:")]),_._v(" "),v("ul",[v("li",[_._v("Geek Hobbies\nauthor: suda-morris\ndate: 2015-12-06 18:06:10 +0800")])]),_._v(" "),v("hr"),_._v(" "),v("h2",{attrs:{id:"信息安全的基本属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#信息安全的基本属性"}},[_._v("#")]),_._v(" 信息安全的基本属性")]),_._v(" "),v("ol",[v("li",[_._v("机密性（Confidentiality）——别人“看不到”或者“看不懂”")]),_._v(" "),v("li",[_._v("认证（Authentication）——证明“你就是你”")]),_._v(" "),v("li",[_._v("完整性（Integrity）——信息没有被“动过”")]),_._v(" "),v("li",[_._v("不可否认性（Non-repudiation）——不能抵赖")])]),_._v(" "),v("h2",{attrs:{id:"密码算法分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#密码算法分类"}},[_._v("#")]),_._v(" 密码算法分类")]),_._v(" "),v("ul",[v("li",[_._v("加密算法：用于机密性解决方案")]),_._v(" "),v("li",[_._v("杂凑函数：用于完整性解决方案")]),_._v(" "),v("li",[_._v("数字签名：用于认证和不可否认性")])]),_._v(" "),v("h2",{attrs:{id:"保密通信系统模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保密通信系统模型"}},[_._v("#")]),_._v(" 保密通信系统模型")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://s1.ax1x.com/2018/12/29/FWXQtx.png",alt:"FWXQtx.png"}})]),_._v(" "),v("h2",{attrs:{id:"ssl-tls加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ssl-tls加密"}},[_._v("#")]),_._v(" SSL/TLS加密")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://i.imgur.com/YJZiqwC.png",alt:"SSL协议报文"}})]),_._v(" "),v("ol",[v("li",[_._v("SSL运行在TCP/IP层之上、应用层之下，为应用程序提供加密数据通道，它采用了RC4、MD5以及RSA等加密算法，使用40位的密钥。")]),_._v(" "),v("li",[_._v("HTTPS实际上就是HTTP over SSL，它使用默认端口443，而不是像HTTP那样使用端口80。")]),_._v(" "),v("li",[_._v("HTTPS协议使用SSL在发送方把原始数据进行加密，然后在接收方进行解密，加密和解密需要发送方和接收方通过交换公知的密钥来实现，因此，所传送的数据不容易被网络何可截获和解密\n"),v("img",{attrs:{src:"http://i.imgur.com/rahzPAL.png",alt:"SSL通信过程"}})]),_._v(" "),v("li",[_._v("工作流程\n"),v("ol",[v("li",[_._v("建立安全能力。SSL捂手的第一阶段启动逻辑连接，建立这个连接的安全能力。首先客户机向服务器发出client hello消息并等待服务器响应，随后服务器向客户机返回server hello消息，对client hello消息中的信息进行确认。\n"),v("ol",[v("li",[_._v("Client hello消息包括：\n"),v("ol",[v("li",[_._v("客户端可以支持的SSL最高版本号")]),_._v(" "),v("li",[_._v("一个客户端生成的随机数，稍后用于生成“对话密钥”")]),_._v(" "),v("li",[_._v("一个确定会话的会话ID")]),_._v(" "),v("li",[_._v("一个客户端可以支持的密码套件列表，每个套件都以SSL开头，紧跟着的是密钥交换算法，用with这个词把密钥交换算法、机密算法、散列算法分开。例如：SSL_DHE_RSA_WITH_DES_CBC_SHA, 表示把DHE_RSA(带有RSA数字签名的暂时Diffie-HellMan)定义为密钥交换算法；把DES_CBC定义为加密算法；把SHA定义为散列算法。")]),_._v(" "),v("li",[_._v("一个客户端可以支持的压缩算法列表")])])]),_._v(" "),v("li",[_._v("Server Hello消息包括\n"),v("ol",[v("li",[_._v("一个SSL版本号。去客户端支持的最高版本号和服务端支持的最高笨笨好中的较低者")]),_._v(" "),v("li",[_._v("一个服务器生成的随机数，稍后用于生成“对话密钥”")]),_._v(" "),v("li",[_._v("会话ID")]),_._v(" "),v("li",[_._v("从客户端的密码条件列表中选择的一个密码套件")]),_._v(" "),v("li",[_._v("从客户端的压缩方法的列表中选择的压缩方法")])])]),_._v(" "),v("li",[_._v("这个阶段之后，客户端服务端知道了下列内容：\n"),v("ol",[v("li",[_._v("SSL版本")]),_._v(" "),v("li",[_._v("密钥交换、信息验证和加密算法")]),_._v(" "),v("li",[_._v("压缩方法")]),_._v(" "),v("li",[_._v("有关密钥生成的两个随机数")])])])])]),_._v(" "),v("li",[_._v("服务器鉴别与密钥交换。服务器启动SSL握手第二阶段，是本阶段所有消息的唯一发送方，客户机是所有消息的唯一接收方。该阶段分为4步\n"),v("ol",[v("li",[_._v("证书：服务器将数字证书和到根CA整个链发给客户端，使客户端能用服务器证书中的服务器公钥认证服务器")]),_._v(" "),v("li",[_._v("服务器密钥交换：这里视密钥交换算法而定")]),_._v(" "),v("li",[_._v("证书请求：服务端可能会要求客户自身进行验证")]),_._v(" "),v("li",[_._v("服务器握手完成")])])]),_._v(" "),v("li",[_._v("客户机鉴别与密钥交换。客户机启动SSL握手第三阶段，是本阶段所有消息的唯一发送方，服务器是所有消息的唯一接收方。该阶段分为3歩：\n"),v("ol",[v("li",[_._v("证书：为了对服务器证明自身，客户要发送一个整数信息，这是可选的")]),_._v(" "),v("li",[_._v("客户机密钥交换：这里客户端将预备主密钥发送给服务端，注意这里会使用服务端的公钥进行加密")]),_._v(" "),v("li",[_._v("证书验证：对预备密钥和随机数进行签名")])])]),_._v(" "),v("li",[_._v("完成，客户机启动SSL握手的第四阶段，是服务器结束。该阶段分成4歩")])])]),_._v(" "),v("li",[_._v("SSL协议可分为两层：\n"),v("ol",[v("li",[_._v("SSL记录协议：它建立在可靠的传输协议之上，为高层协议提供数据封装、压缩、加密等基本功能的支持")]),_._v(" "),v("li",[_._v("SSL握手协议：它建立在SSL记录协议之上，用于在实际数据传输开始前，通讯双方进行身份认证、协商加密算法、交换密钥等")])])]),_._v(" "),v("li",[_._v("ESP8266作为SSL server时，提供加密证书的制作脚本，生成SSL加密所需的头文件cert.h和private_key.h。CA认证功能默认关闭，用户可调用接口espconn_secure_ca_enable使能CA认证\n"),v("ol",[v("li",[_._v("证书制作：tool文件夹下，修改makefile.sh文件里面的IP地址为实际SSL 服务器的IP地址；然后./makefile.sh")]),_._v(" "),v("li",[_._v("开发者必须调用espconn_secure_set_default_certificate和espconn_secure_set_default_private_key传入证书和密钥")]),_._v(" "),v("li",[_._v("证书制作脚本makefile.sh生成默认SSL server证书由Espressif System颁发，并非由CA颁发。如果用户需要CA认证，请将运行脚本Makefile.sh生成的TLS.ca_x509.cer导入SSL client，并使用脚本make_cacert.py将CA文件生成eap_ca_cert.bin烧写到Flash对应的地址")])])]),_._v(" "),v("li",[_._v("ESP8266作为SSL client时，可支持双向认证。CA认证功能默认关闭，用户可调用接口espconn_secure_ca_enable使能CA认证")]),_._v(" "),v("li",[_._v("ESP8266作为SSL client时支持证书认证功能，但此功能默认关闭，开发者可以调用接口espconn_secure_cert_req_enable使能证书认证，证书制作：\n"),v("ol",[v("li",[_._v("修改脚本makefile.sh，制作开发者自行签发的CA证书，例如，证书实例中的TLS.ca_x509.cer")]),_._v(" "),v("li",[_._v("使用签发的CA制作供SSL client使用的证书，例如，证书示例中的TLS.x509_1024.cer")]),_._v(" "),v("li",[_._v("去除制作SSL client使用的证书时所用的密钥，例如证书示例中的TLS.key_1024")]),_._v(" "),v("li",[_._v("将证书合成脚本make_cacert.py与CA文件放在同一目录下")]),_._v(" "),v("li",[_._v("运行脚本“make_cacert.py”将合成同一目录下的CA文件生成sap_ca_cert.bin，esp_ca_cert.bin的烧录位置由接口espconn_secure_ca_enable设置，用户可以自行定义")]),_._v(" "),v("li",[_._v("重命名证书名称（例如TLS.x509_1024.cer）；重命名密钥名称，改为private_key.key_1024。")]),_._v(" "),v("li",[_._v("将重命名后的文件，与脚本make_cert.py拷贝到同一目下下")]),_._v(" "),v("li",[_._v("运行脚本make_cert.py生成esp_cert_private_key.bin，esp_cert_private_key.bin的烧录位置由接口espconn_secure_cert_enable设置，用户可自行定义")])])]),_._v(" "),v("li",[_._v("软件接口\n"),v("ol",[v("li",[_._v("SSL系列软件接口与普通TCP软件接口，在SDK底层是两套不同的处理流程，因此不能混用两种软件接口。SSL连接时，仅支持使用：\n"),v("ol",[v("li",[_._v("espconn_secure_XXX系列接口")]),_._v(" "),v("li",[_._v("espconn_regist_XXX系列注册回调的接口")]),_._v(" "),v("li",[_._v("espconn_port获得一个空闲的端口")])])])])]),_._v(" "),v("li",[_._v("在SSL中会使用密钥交换算法交换密钥；使用密钥对数据进行加密；使用散列算法对数据的完整性进行验证，使用数字证书证明自己的身份")]),_._v(" "),v("li",[_._v("SSL/TLS协议的基本思路是采用"),v("strong",[_._v("公钥加密法")]),_._v("，也就是说，客户端先向服务器所要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。\n"),v("ol",[v("li",[_._v("如何保证公钥不被篡改？\n"),v("ul",[v("li",[_._v("将公钥放在数字证书中。只要证书时可信的，公钥就是可信的")])])]),_._v(" "),v("li",[_._v("公钥加密计算量太大，如何减少耗用的时间？\n"),v("ul",[v("li",[_._v("每一次对话（session），客户端和服务器都生成一个“对话密钥”，用它来加密信息。由于“对话密钥”是对称加密，所以运算速度非常快，而服务器公钥只用于加密“对话密钥”本身，这样就减少了加密运算的消耗时间")])])]),_._v(" "),v("li",[_._v("SSL/TLS协议的基本过程是这样的：\n"),v("ol",[v("li",[_._v("客户端向服务端索要并验证公钥")]),_._v(" "),v("li",[_._v("双方协商生成“对话密钥”")]),_._v(" "),v("li",[_._v("双方采用“对话密钥”进行加密通信")])])]),_._v(" "),v("li",[_._v("为什么要用三个随机数来生成“会话密钥”？\n"),v("ul",[v("li",[_._v("不管是客户端还是服务器，都需要随机数，这样生成的密钥才不会每次都一样。由于SSL协议中证书是静态的，因此十分有必要引入一种随机因素来保证协商出来的密钥的随机性。对于RSA密钥交换算法来说，pre-master-key本身就是一个随机数，再加上hello消息中的随机，三个随机数通过一个密钥导出器最终导出一个对称密钥。pre master的存在在于SSL协议不信任每个主机都能产生完全随机的随机数，如果随机数不随机，那么pre master secret就有可能被猜出来，那么仅适用pre master secret作为密钥就不合适了，因此必须引入新的随机因素，那么客户端和服务器加上pre master secret三个随机数一同生成的密钥就不容易被猜出了，一个伪随机可能完全不随机，可是是三个伪随机就十分接近随机了，每增加一个自由度，随机性增加的可不是一。")])])])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);