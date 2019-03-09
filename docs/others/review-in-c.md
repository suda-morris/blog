title: Review in C Language
tags:
  - C
categories:
  - Job Hunting
author: suda-morris
date: 2015-06-27 15:17:00
---
## ifdef和if defined的差别

注意两者都有个define的作用，区别在于使用方式上。前者的通常用法是:
```C 只能在两者中选择是否有定义
#ifdef  XXX

   ....

#else

   ....

#endif
```
对于后者，常用法是：
```C 可以在多个中选择是否有定义
#if defined xxx1

   ....

#elif defined xxx2

   ....

#elif defined xxx3

   ....

#endif
```

## 字节对齐

```c
/**
 * @def RT_ALIGN(size, align)
 * Return the most contiguous size aligned at specified width. RT_ALIGN(13, 4) would return 16.
 */
#define RT_ALIGN(size, align)           (((size) + (align) - 1) & ~((align) - 1))

/**
 * @def RT_ALIGN_DOWN(size, align)
 * Return the down number of aligned at specified width. RT_ALIGN_DOWN(13, 4) would return 12.
 */
#define RT_ALIGN_DOWN(size, align)      ((size) & ~((align) - 1))
```

## 小细节

1. C++并不支持void*隐式转换为其他类型的指针，但是C语言允许
2. 变量命名，所有字符都使用小写，含义多的可以用**_**进行辅助
3. 全局变量能少用就少用，必须要用的情况下，可以考虑添加前缀**g_**
4. 不要将**_**作为宏的开头或者结尾
5. 要使用**#if**而不是**#ifdef**，可以使用**define（）**来替代**#ifdef**的功能
```C
#if !define(USERS_DEFINE)
      #define USERS_DEFINE ...
 #endif
```

## volatile关键字

一旦使用了，就是告诉编译器，即使这个变量没有被使用或修改其他内存单元，它的值也可能发生变化。通俗地讲，告诉编译器，不要把你的那一套优化策略用在我的身上

## 两种不太常见的格式：%[]和%*

1. %[]用于限制读取类型，常见于字符串的过滤。
```C 
//假设输入：22 hello,string to me!
scanf("%d %[a-z]", &tmp, str);//22 hello
scanf("%d %[^i]", &tmp, str);//22 hello,str
scanf("%d %[^,]", &tmp, str);//22 hello
```
2. %*是忽略第一个输入，也可以理解为文件宽度(域宽)
```C 
//假设输入：22 33
scanf("%*d %d", &tmp);//读到33
```
```C
 char str[10] = "dir";
 printf("%*s%s",4 ,"" , str);//输出:    dir,前面有四个空白占位   
```

## select机制

1. select()的机制中提供一fd_set的数据结构，实际上是一long类型的数组， 每一个数组元素都能与一打开的文件句柄（不管是Socket句柄，还是其他文件或命名管道或设备句柄）建立联系，建立联系的工作由程序员完成，当调用select()时，由内核根据IO状态修改fd_set的内容，由此来通知执行了select()的进程哪一Socket或文件可读或可写。
2. 程序去select的时候，如果没有数据输入，程序会一直等待，直到有数据为止，也就是程序中无需循环和sleep
3. 使用Select就可以完成非阻塞（所谓非阻塞方式non-block，就是进程或线程执行此函数时不必非要等待事件的发生，一旦执行肯定返回，以返回值的不同来反映函数的执行情况，如果事件发生则与阻塞方式相同，若事件没有发生，则返回一个代码来告知事件未发生，而进程或线程继续执行，所以效率较高）方式工作的程序，它能够监视我们需要监视的文件描述符的变化情况——读写或是异常。
4. 返回值：准备就绪的描述符数，若超时则返回0，若出错则返回-1。

![suda-morris](http://i.imgur.com/Nn7Krru.gif)
