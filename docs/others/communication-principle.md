# 通信原理

## 消息
1. 语音信号的带宽大约4KHz，图像信号的带宽大约是6MHz，音乐信号的带宽大约20KHz

## 信道
1. 两个基本问题：
	1. 信号衰减：导线的电阻与长度成正比；无线电波扩散本身减弱，且被阻挡物吸收
	2. 加性噪声：沿途的电阻、固态器件等(包括发送器和接收器中的处理电路)引入固有的随机噪声，最基本的是热噪声
2. 其他问题：
	1. 外来干扰：其他电磁波、窜线的电信号
	2. 信号畸变：信道特性不理想。比如电话线中的寄生电容会使高频信号损失
3. 白高斯噪声（White Gassian Noise）：
	1. 时域上，随机性服从高斯分布
	2. 频域上，噪声均匀分布在所有频率上
	3. 功率谱密度值N0/2（物理意义：每Hz内有多少噪声）

## 电磁波
1. 电波传播主要由其频率值的大小决定。空中传播时主要有三种模式：
	1. 地波（Ground-Wave）模式：1~2MHz以下的电磁波主要按照这种模式传播，大致可以传输几十公里，主要用于调幅广播
	2. 天波（Sky-Wave）模式：3~30MHz的电波反射可以达到几百~1000Km远，主要用于长距离通信，大多数用于军事上
	3. 视线（Line-Of-Sight）模式：像广播那样作直线传播，高于30MHz，向上传播时会穿透电离层被反射回来；地面传播时，如遇到遮挡，信号会被阻断会显著衰减，用于电视广播。

## 频分技术的例子：
1. 频分复用：有线通信中多个话音“错开频率”，共用一条电线传输
2. 频分多址：多个无线用户使用各自的频率，同时接入通信系统
3. 频分双工：每个用户采用不同频率接收和发送，两个方向同时传输

## 基带与频带传输
1. 基带信号：频谱位于零频率附近的信号
2. 基带传输：保持基带形式，直接传送消息信号
3. 频带信号：频谱位于某高频附近
4. 频带传输：把基带的消息信号转换为频带消息来传输

## 模拟通信系统
1. 调制：将基带信号变换为适当的频带信号的过程，通常用正弦波携带消息
2. 解调：调制的逆过程

## 数字通信系统
![数字通信系统](http://i.imgur.com/LjU8Kz6.png)
1. 格式化：规范化的数字符号序列，必要时，包括模数变化
2. 基带调制：形成合适的电信号，基带信号通常是用脉冲生成
3. 频带调制：转换为频带信号
4. 发射机：将信号送入信道
5. 同步：提供各种定时时钟，使各单元能够正确、有序地工作
6. 信源编码：实现压缩编码，把原始数字消息里面的冗余压缩掉
7. 加密：提供保密性
8. 信道编码：故意加入特殊数据位（如奇偶校验位等），仪表接收端发现和纠正错误
9. 复用：多种消息信号合并在一起
10. 多址接入：多个用户进入与公用系统
11. 频谱扩展：展宽信号频谱可增加抗干扰与保密性，也可以多址接入

## 数字技术vs模拟技术
1. 天生的抗噪性
2. 潜在的标准性
3. 便利的实现性

## 幅度调制--用消息去控制正弦载波的幅度变化
![常规调幅](http://i.imgur.com/oWMUlEV.png)
1. 常规调幅（Conv.AM）
	1. m(t)是调制信号
	2. 波形特点：消息凸显在载波包络上
2. 移植载波双边带调幅（DSB-SC）
3. 单边带调幅（SSB）
4. 残留边带调幅（VSB）
