---
navbar: false
sidebar: false
---
 <center>
     <h1>茅胜荣</h1>
     <div>
        <span>
            <img src="/blog/images/resume/phone.svg" width="18px">
            18862141982
        </span>
        ·
        <span>
            <img src="/blog/images/resume/envelope.svg" width="18px">
            18862141982@163.com
        </span>
        ·
        <span>
            <img src="/blog/images/resume/github.svg" width="18px">
            <a href="https://github.com/suda-morris">suda-morris</a>
        </span>
        ·
        <span>
            <img src="/blog/images/resume/blog.svg" width="18px">
            <a href="https://suda-morris.github.io/blog">blog</a>
        </span>
        .
        <span>
            <img src="/blog/images/resume/bilibili.svg" width="18px">
            <a href="https://space.bilibili.com/9635864">vlog</a>
        </span>
     </div>
 </center>

 ## <img src="/blog/images/resume/info.svg" width="30px"> 个人信息

 - 男，1992 年出生
 - 求职意向：嵌入式驱动工程师
 - 工作经验：3 年
 - 期望薪资：35k
 - 现居地：江苏省苏州市吴中区

## <img src="/blog/images/resume/graduation-cap.svg" width="30px"> 教育经历

- 硕士，苏州大学，电子科学与技术专业，2015.9~2018.7，GPA(3.9/4.0)
- 学士，苏州大学，电子信息工程专业，2011.9~2015.7，GPA(3.8/4.0)

## <img src="/blog/images/resume/briefcase.svg" width="30px"> 工作经历

- **乐鑫信息科技，芯片支持部门，嵌入式驱动工程师，2018.7 月至今**

   * 芯片 bring up
   * SOC 外设驱动框架

## <img src="/blog/images/resume/project-diagram.svg" width="30px"> 项目经历

- **设计实现移动蜂窝通信模块的 PPPoS 接口驱动**

  *event-driven, OOP, Lwip, PPPoS*

  * DTE 与 DCE 独立建模，DCE 抽象出 Modem 模块的常用接口，DTE 抽象出 Modem 支持的底层 IO 协议
  * 对接 DCE 与 LwIP PPPoS 网络接口
  * Modem 设备 IP 层事件进入 event loop，应用层可注册对应的事件处理函数
  * 详见 [GitHub 项目地址](https://github.com/espressif/esp-idf/tree/master/examples/protocols/pppos_client)

- **设计实现嵌入式以太网驱动框架**

  *mediator pattern, OOP, Ethernet*

  * 中介器设计模式，分隔用户、MAC 层和 PHY 层
  * 多态设计，支持 ESP32 内部 MAC 控制器以及其他 SPI 接口的以太网模块
  * 驱动分层设计，LL + HAL + driver，降低驱动在不同芯片平台上移植的难度
  * 详见 [GitHub 项目地址](https://github.com/espressif/esp-idf/tree/master/components/esp_eth)

- **设计实现嵌入式 LCD 驱动框架**

  *RGB, I80, LvGL, OOP, LCD*

  * 抽象出 panel_io 接口，统一 SPI/I2C/I80 对 LCD 模组发送命令与显存数据的操作
  * 抽象出 panel 对象，统一应用层对显存设备的操作，支持 RGB 接口的 LCD 和 panel_io 抽象接口的 LCD 设备
  * IO 接口与显存操作分离，LCD 控制器驱动可复用程度最大化
  * 移植 LvGL 库，支持多屏显示
  * 详见 [GitHub 项目地址](https://github.com/espressif/esp-idf/tree/master/components/esp_lcd)

## <img src="/blog/images/resume/tools.svg" width="30px"> 技能清单

- ★★★ C 语言面向对象建模与实现
- ★★☆ Python、Bash
- ★★☆ 计算机网络

## <img src="/blog/images/resume/certificate.svg" width="30px"> 职业认证

<div>
    <span>
        <img src="/blog/images/resume/network.svg" width="18px">
        网络: CCNA(920分), 全国计算机等级4级(网络工程师)
    </span>
</div>
<div>
    <span>
        <img src="/blog/images/resume/language.svg" width="18px">
        语言: CET-6(511分)
    </span>
</div>
<div>
    <span>
        <img src="/blog/images/resume/programming.svg" width="18px">
        编程: 江苏省计算机等级3级(软件)
    </span>
</div>
<div>
    <span>
        <img src="/blog/images/resume/electronic.svg" width="18px">
        电子: 全国大学生电子设计竞赛二等奖
    </span>
</div>

## <img src="/blog/images/resume/hobby.svg" width="30px"> 业余爱好
<div>
    <span>
        <img src="/blog/images/resume/media.svg" width="18px">
        媒体: 用博客、视频记录工作与生活
    </span>
</div>
<div>
    <span>
        <img src="/blog/images/resume/geek.svg" width="18px">
        创客: 接触最新最好玩的创客玩具(树莓派, openwrt, XMOS, PSoC)
    </span>
</div>

## <img src="/blog/images/resume/ai.svg" width="30px"> 人工智能
