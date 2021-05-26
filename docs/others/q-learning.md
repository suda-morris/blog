---
title: Q-learning
tags:
  - Algorithm
categories:
  - ML&DL
author: suda-morris
date: 2018-11-06 10:15:27
---

## Q学习——强化学习的具体方法

在Q学习的框架中，作为学习对象的是称为Q值（Q-value）的数值，Q值是指在某种情况下，为了选择下一个要采取的行动的`指标数值`的集合。根据Q学习而获得Q值，在某个状态下选择下一个行动时，可以根据Q值来进行选择。

Q学习中，获得合适的Q值是学习的目标，在学习的初期，不清楚什么是合适的Q值，所以无法做决定。因此在学习的初期，Q值是由随机数来随机确定的。在此基础上，根据Q值进行行动的选择，更新状态。

![Q值更新原则1&2](https://s1.ax1x.com/2018/11/06/iohpUs.jpg)

![Q值更新原则3](https://s1.ax1x.com/2018/11/06/io4rf1.png)



## Q值更新的计算公式

$$
Q(s_t,a_t)=Q(s_t,a_t)+\alpha(r+\gamma \space maxQ(s_{t+1},a_{t+1})-Q(s_t,a_t))
$$

* $s_t$表示t时刻的状态，$a_t$表示在$s_t$时所选的行动
* $\max Q(s_{t+1},a_{t+1})$表示在下一个时刻（t+1）能够选择的行动中所对应的Q值中的最大值
* $r$表示奖赏（仅限于能够获得时，不能获得的话，是0）
* $\alpha$表示学习系数（0.1左右）
* $\gamma$表示折扣率（0.9左右）

## Q-learning算法步骤

![Q-learning算法步骤](https://s1.ax1x.com/2018/11/06/ioXhWD.png)
