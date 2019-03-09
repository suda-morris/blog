title: ESP32 介绍
tags:
  - ESP32
categories:
  - Geek Hobbies
author: suda-morris
date: 2018-07-05 09:48:00
---

## ESP32关键特征简介

* 双核CPU，集成WiFi(802.11bgn)和双模蓝牙(经典蓝牙+蓝牙BLE)
* CPU最高主频240MHz(600MIPS)，内部集成8MHz的高速振荡器和低速RC谐振器(通常是150KHz，可调)
* CPU支持DSP指令，包括32比特的乘法，32比特的除法和40比特的MAC（乘加操作）
* 支持32个中断向量
* 448 kB ROM（存放启动代码和核心功能函数），520 kB SRAM（存放指令和数据），16 kB SRAM in RTC（包括8kB的快速内存和8kB的慢速内存，快速内存可以用来保存数据，主CPU从Deepsleep模式唤醒时候会访问这块内存；慢速内存在Deep-sleep模式下由RTC协处理器访问）
* 1kbit的熔丝位，其中256比特用于配置系统的MAC地址和芯片的相关设定，剩余部分供用户保存flash秘钥，芯片ID等
* 支持片外SPI接口的Flash和SRAM
* 两组定时器，每组包括两个64位的常规定时器和1个看门狗定时器
* 一个RTC定时器和RTC看门狗
* 34个GPIO
* 18通道的SAR ADC（12比特）
* 2个8比特DAC
* 10路电容触摸传感器
* 4个SPI接口，2个I2S接口，2个I2C接口，3个UART接口
* 1个SDIO主控制器，1个SDIO从控制器
* 一路以太网MAC(包括专用DMA，支持1588协议)
* 一路CAN2.0
* 一路红外收发器
* 电机PWM
* 16通道LED PWM调试器
* 霍尔传感器
* 秘钥加密加速(AES，SHA-2，RSA，ECC)
* 随机数发生器

![ESP32芯片内部框图](https://s1.ax1x.com/2018/07/25/PtGOD1.png)



## ESP32 Strapping 引脚配置

![strapping引脚配置](https://s1.ax1x.com/2018/07/25/PtYdFf.png)



## ESP32 内存映射

![内存映射](https://s1.ax1x.com/2018/07/25/PtNsZn.png)

* ESP32可以通过高速缓存来访问片外的QSPI Flash，最高16MB的外部Flash可以被映射到CPU的指令内存空间和只读空间。如果映射到指令空间，一次最多可以映射11MB+248KB（超过3MB+24KB后，cache的性能会下降）；如果映射到只读空间，一次最对可以映射4MB，并且支持8bit、16bit和32bit的读操作
* ESP32可以通过高速缓存来访问片外的QSPI SRAM，最高8MB的外部SRAM可以被映射到CPU的数据空间，并且一次最多可以映射4MB，支持8bit、16bit和32bit的读写操作

![ESP32内存映射表](https://s1.ax1x.com/2018/07/25/Pta1AI.png)



## ESP32的低功耗管理

![低功耗模式](https://s1.ax1x.com/2018/07/25/PtBLWt.png)



## ESP32 GPIO-MUX

![GPIO-MUX](https://s1.ax1x.com/2018/07/25/Ptrcgx.png)



## ESP32系统时钟

![系统时钟结构](https://s1.ax1x.com/2018/11/08/i7aN6I.png)

![外设支持的时钟源](https://s1.ax1x.com/2018/11/08/i7afBV.png)