title: Inline Assembly
tags:
  - Assembly

categories:

  - Geek Hobbies
author: morris
date: 2019-01-03 16:45:00

---

## GCC内联汇编的标准格式

```c
asm　volatile("Instruction List" : Output : Input : Clobber/Modify);
```

### asm

用来声明一个内联汇编表达式，任何一个内联汇编表达式都以它开头

### Instruction List

汇编指令序列，可以为空。比如Linux内核中的内存屏障：

```c
#define barrier() asm("":::"memory"); //它向GCC声明“内存发生了改动，GCC在编译时会将此因素考虑进去。
```

* 每条指令必须被双引号括起来
* 两条指令必须用换行或者分号分开

例如，在ARM系统结构上关闭中断的操作

```c
int disable_interrupts (void)
{
    unsigned long old,temp;
    asm volatile("mrs %0, cpsr\n"
                 "orr %1, %0, #0x80\n"
                 "msr cpsr_c, %1"
                 : "=r" (old), "=r" (temp)
                 :
                 : "memory");
    return (old & 0x80) == 0;
}
```

### volatile

向GCC声明不允许对该内联汇编进行优化，否则当使用了优化选项`-O`进行编译时，GCC会根据自己的判断决定是否将这个内联汇编表达式中的指令优化掉

### Output

指定当前内联汇编语句的输出，例如从arm协处理器p15中读出c1的值

```c
static unsigned long read_p15_c1 (void)
{
    unsigned long value;
    asm volatile("mrc p15, 0, %0, c1, c0, 0 @ read control reg\n"
                 : "=r" (value) @编译器选择一个R*寄存器
                 :
                 : "memory");
    return value;
}
```

### Input

指定当前内联汇编语句的输入，例如向arm协处理器p15中写入C1值

```c
static void write_p15_c1 (unsigned long value)
{
    asm volatile("mcr p15, 0, %0, c1, c0, 0 @ write it back\n"
                 :
                 : "r" (value) @编译器选择一个R*寄存器
                 : "memory");
    read_p15_c1 ();
}
```

### Clobber/Modify

有时候，你想通知GCC当前内联汇编语句可能会对某些寄存器或者内存进行修改，希望GCC在编译时能够将这点考虑进去。可以在这个区域声明这些寄存器或者内存。

这种情况一般发生在一个寄存器出现在“Instruction List”，但却不是由Input/Output操作表达式所指定的，也不是在一些Input/Output操作表达式使用“r”约束时由GCC为其选择的，同时此寄存器被“Instruction List”中的指令修改，而这个寄存器只是供当前内联汇编临时使用的情况。例如：

```c
asm("mov R0, #0x34" : : : "R0");//寄存器R0出现在“Instruction List”中，并且被mov指令修改，但是却未被任何Input/Output操作表达式指定，所以需要在Clobber/Modify域指定“R0”，让GCC知道这一点
```

如果一个内联汇编语句的Clobber/Modify域存在“memory”，那么GCC会保证在此内联汇编之前，如果某个内存的内容被装入了寄存器，那么在这个内联汇编之后，如果需要使用这个内存处的内容，就会直接到这个内存处重新读取，而不是使用被存放在寄存器中的拷贝。因为这个时候寄存器中的拷贝已经很可能和内存处的内容不一致了。
