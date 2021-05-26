title: Coetex-M0 Introduction
tags:
  - ARM
categories:
  - Geek Hobbies
author: suda-morris
date: 2015-10-06 12:23:50 +0800
---
## ARM体系变种
1. M变种：
	1. 长乘法操作：32位整数乘以32位整数，生成64位整数
	2. 长乘加操作：32位整数乘以32位整数，加上32位整数，生成64位整数
2. T变种：
	1. Thumb指令集是ARM指令集的一个子集重新编码而成的，它使ARM更加高效地进行运作
3. E变种：
	1. 增加了新的16位数据乘法与乘加操作指令
	2. 实现饱和的带符号数的加减法操作指令
	3. 进行双字数据操作的指令，包含LDRD、STDR、MCRR\MRRC
	4. cache预取指令PLD
4. J变种：
	1. Jazelle技术：将Java代码运行速度提高了8倍，功耗降低了80%
5. SIMD变种：
	1. 可同时进行两个16位操作数或者4个8位操作数的运算
	2. 用户可以定义饱和运算模式
	3. 32位乘以32位的小数MAC
	4. 音频\视频处理性能提高了4倍
	5. 提供小数算数运算
	6. 两套16位操作数的乘加\乘减运算

## ARM处理器系列
1. ARM7系列
	1. 小型、快速、低能耗、集成式的RISC芯片
	2. 冯诺依曼体系结构
	3. 三级流水线制
	4. 优秀的调试机制
2. ARM9、ARM9E系列
	1. 哈佛体系结构：这种体系结构是一种将程序指令存储和数据存储分开的存储器结构，是一种并行体系结构
	2. 支持32位的ARM指令和16位Thumb指令
	3. 支持一般的操作系统
	4. 五级流水处理及分离的Cache结构
	5. ARM9E内核在ARM9内核的基础上增加了紧密耦合存储器的TCM及DSP部分
3. ARM10E系列
	1. 支持AMBA总线接口（包含AHB，ASB总线）
	2. 六级流水线制
	3. 包含DSP指令集
	4. 可选浮点协处理器
	5. 统一的数据cache和指令cache
	6. 能够支持多种商用操作系统
4. ARM11系列(ARM V6结构)
	1. 针对媒体处理的SIMD
	2. 用以提高安全性能的TrustZone技术
	3. 智能能源管理IEM
	4. 系统多处理技术
5. SecurCore系列
	1. 采用软内核技术
	2. 提供面前智能卡和低成本的存储保护单元
	3. 可集成用户自己的安全特性和其他处理器
	4. 极具安全性
6. Cortex系列处理器
	1. ARM公司在经典处理器ARM11以后的产品改用Cortex命名，并分成A、R和M三类，旨在为各种不同的市场提供服务
	2. A系列面向尖端的基于虚拟内存的操作系统和用户应用
	3. R系列针对实时系统
	4. M系列针对成本和功耗敏感的MCU和终端应用

## Cortex-M0/M0+
1. CortexM0/M0+均是ARMv6M架构,均支持Thumb指令集，支持NVIC和WIC，但不支持Thumb2指令集，其中M0是三级流水线架构，M0+是二级流水线架构
2. CortexM3，CortexM4均是ARMv7M架构，均支持Thumb，Thumb2指令集，支持NVIC和WIC；CortexA5，CortexA8，CortexA9均是ARMv7A架构
3. 存储器模型：![ARM CortexM存储器模型](http://i.imgur.com/KKgz65f.png)
	1. 4GB可寻址线性空间
	2. 标准实现，适用于所有Cortex-M系列
	3. 无须paging和banking
	4. 软件访问可访问性
4. 两种工作模式
	1. Thread模式
	2. Handler模式
5. 异常模型
	1. 异常发生->加载向量列表->异常处理->返回

## ARM Cortex-M0+寄存器
1. 32位位宽寄存器：
	1. 13个通用寄存器：
		1. R0-R7（Low registers）
		2. R8-R12(High registers)
	2. 3个特殊用处寄存器
		1. SP-R13，初始值：0x00000000
		2. LR-R14
		3. PC-R15，初始值0x00000004,Bit[0]为1，表示当前为Thumb代码
	3. 特殊寄存器
		1. PSR（Program Status Register）
		2. PRIMASK（Interrupt mask register），仅有Bit[0],值为1表示关闭所有中断，只有NMI和硬件错误才能被响应，缺省值为0
		3. CONTROL（control register），只有Bit[0]（定义权限级别，0表示特权级线程模式，1表示普通线程模式，所有的Handler模式都是特权级模式）和Bit[1]（选择当前使用哪个栈指针，0表示选择主栈指针MSP，1表示选择进程栈指针PSP）
2. 寄存器使用方法
	1. R0-R3：传递函数参数，返回函数结果，因此也称为a1-a4；也可用于程序内部保存临时变量
	2. R4-R11：保存程序内部的变量值，因此又称为v1-v8，其中r9是个平台相关的寄存器，需要半导体厂商自己定义
	3. R12-R15：专门用途寄存器，R12-IP
3. 程序状态寄存器PSR
	1. APSR(Application Program Status Register)，包括Negative，Zero，Carry和Overflow的标志位
	2. IPSR(Interrupt Program Status Register)，包括Exception number(前6位)
	3. EPSR(Execution Program Status Register)，包括Thumb code is executed的指示位
	4. 程序状态寄存器的访问指令：MSR和MRS

## ARM Cortex-M0+指令集
1. 每条Thumb指令有相同处理器模型所对应的32位ARM指令，比如可以将Thumb指令ADD Rd，#immed_8转换为ARM指令ADD Rd，Rd，#immed_8
2. Thumb的56条指令分类：
	1. 存储器访问指令
		1. ADR:Generate PC-relative address
		2. LDM:Load Multiple registers
		3. LDR{type}:Load Register using immediate offset
		4. LDR{type}:Load Register using register offset
		5. LDR:Load Register from PC-relative address
		6. POP:Pop register from stack
		7. PUSH:Push registers onto stack
		8. STM:Store Multiple registers
		9. STR{type}:Store Register using immediate offset
		10. STR{type}:Store Register using register offset
	2. 数据处理指令
	3. 分支和控制指令
		1. B{cc}:Branch {conditionally},如果使用了条件执行，那么跳转范围在-256~254字节内；如果没有使用条件执行，那么跳转范围在±1M内
		2. BL:Branch with Link,跳转范围±16MB
		3. BLX:Branch indirect with Link
		4. BX:Branch indirect
	4. 杂项指令
		1. MRS:Move from special register to register
		2. MSR:Move from register to special register
		3. CPSID:Change Processor State,Disable Interrupts,C语言操作函数:void __disable_irq(void);
		4. CPSIE:Change Processor State,Enable Interrupts,C语言操作函数：void __enable_irq(void);
		5. WFE:Wait For Event,C语言操作函数：void __WFE(void);
		6. WFI:Wait For Interrupt,C语言操作函数：void __WFI(void);
		7. NOP:No Operation,C语言操作函数：void __NOP(void);
		8. SVC:Supervisor Call

## ARM Cortex-M0+外设
1. 外设的映射
	1. Private Peripheral Bus（PPB）的映射(0xE0000000-0xE00FFFFF)
	2. SysTick:24位计数器，扩展的NVIC特性
	3. NVIC：中断设置与配置
	4. SCB:提供系统实现和系统控制；包括配置、控制和上报系统异常
	5. MPU（Memory Protection Unit）
2. NVIC接口API：
	1. void NVIC_EnableIRQ(IRQn_t IRQn);
	2. void NVIC_DisableIRQ(IRQn_t IRQn);
	3. uint32_t NVIC_GetPendingIRQ(IRQn_t IRQn);
	4. void NVIC_SetPendingIRQ(IRQn_t IRQn);
	5. void NVIC_ClearPendingIRQ(IRQn_t IRQn);
	6. void NVIC_SetPriority(IRQn_t IRQn,uint32_t priority);
	7. uint32_t NVIC_GetPriority(IRQn_t IRQn);
	8. void NVIC_SystemReset(void);请求一次系统复位

## ARM Cortex-M0+可执行镜像
1. ELF：定义了对象文件的内容和格式
2. BIN：直接的内存镜像
3. HEX：包含了目标程序镜像的存储地址
4. AXF：ARM工具链产生，BIN文件内容+调试信息

## WEAK和alias属性
1. 当两个或者两个以上行数具有相同的名字，并其中之一声明为weak属性时，则不会引发重定义错误。连接器会忽略弱属性的函数，而使用普通的函数来解析所有对这些符号的引用
2. 如果普通的函数不可用时，连接器会使用weak属性的函数
3. alias属性：声明别名，当weak和alias属性连用时，可以声明弱别

## 错误异常
1. 优先级仅次于复位和NMI
2. 引起错误异常的来源：
	1. Memory访问异常
	2. 程序异常
3. 错误异常分析：![错误异常分析](http://i.imgur.com/DrQtd2F.png)
	1. 当异常发生时，处理器首先会保护现场，因此可以得到当前寄存器的值，以及异常发生前被压栈的寄存器的值
	2. 判断PC的返回值是否合法，存储器的访问地址是否正确，栈地址是否正确以及是否出现了溢出
	3. 访问PSR寄存器来获取当前处理器的状态信息

## 锁定
1. 锁定（Lockup）的发生：
	1. 在处理NMI或者HardFault时产生错误异常
	2. 异常处理返回，当PSP出栈时，系统总线错误
2. 锁定的退出：
	1. 复位
	2. Debugger
3. 锁定的预防：
	1. 尽量缩短NMI和HardFault异常的处理时间
	2. 在进入HardFault异常处理前，添加汇编代码，检查SP指针
