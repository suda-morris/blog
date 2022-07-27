# RISC-V 基础

## 单核 CPU 组成结构

![ALU](../images/risc-v/riscv_alu.png)

**数据通路**是处理器中执行处理器所需操作的硬件部分，就像是处理器的四肢。

**控制器**是对数据通路要做什么操作进行行为调度的硬件结构，就像是处理器的大脑。

![ALU](../images/risc-v/riscv_data_path.png)

## 指令集划分

| 基本指令集 | 指令数 | 描述                                               |
| ---------- | ------ | -------------------------------------------------- |
| RV32I      | 47     | 32位地址空间与整数指令,支持32个通用整数寄存器      |
| RV32E      | 47     | 仅支持16个通用整数寄存器                           |
| RV64I      | 59     | 64位地址空间与整数指令,以及一部分64位和32位的指令  |
| RV128I     | 71     | 128位地址空间与整数指令,以及一部分64位和32位的指令 |

| 扩展指令集 | 指令数 | 描述                                                |
| ---------- | ------ | --------------------------------------------------- |
| M          | 8      | 整数乘法与除法指令                                  |
| A          | 11     | 存储器原子操作和Load-Reserved/Store-Conditional指令 |
| F          | 26     | 单精度(32bit)浮点指令                               |
| D          | 26     | 双精度(32bit)浮点指令,必须支持F扩展指令             |
| C          | 46     | 压缩指令,指令长度为16位                             |

## 基本指令集类型

![指令编码格式](../images/risc-v/riscv_instruction_type.png)

### R(Register)型指令

![R型指令](../images/risc-v/riscv_R_instruction.png)

#### 指令汇编格式

##### 加法

```assembly
add rd, rs1, rs2
```

##### 减法

```assembly
sub rd, rs1, rs2
```

##### 逻辑与

```assembly
and rd, rs1, rs2
```

##### 逻辑或

```assembly
or rd, rs1, rs2
```

##### 逻辑异或

```assembly
xor rd, rs1, rs2
```

##### 有符号小于比较

```assembly
slt rd, rs1, rs2
```

##### 无符号小于比较

```assembly
sltu rd, rs1, rs2
```

##### 逻辑左移

```assembly
sll rd, rs1, rs2
```

##### 逻辑右移

```assembly
srl rd, rs1, rs2
```

##### 算数右移

```assembly
sra rd, rs1, rs2
```

### I(Immediate)型指令

![I型指令](../images/risc-v/riscv_I_instruction.png)

#### 指令汇编格式

##### 立即数加法

```assembly
addi rd, rs1, imm[11:0]
```

##### 立即数逻辑与

```assembly
andi rd, rs1, imm[11:0]
```

##### 立即数逻辑或

```assembly
ori rd, rs1, imm[11:0]
```

##### 立即数逻辑异或

```assembly
xori rd, rs1, imm[11:0]
```

##### 立即数有符号小于比较

```assembly
slti rd, rs1, imm[11:0]
```

##### 立即数无符号小于比较

```assembly
sltui rd, rs1, imm[11:0]
```

##### 立即数逻辑左移

```assembly
slli rd, rs1, shamt[4:0]
```

##### 立即数逻辑右移

```assembly
srli rd, rs1, shamt[4:0]
```

##### 立即数算数右移

```assembly
srai rd, rs1, shamt[4:0]
```

### Load/Store 指令

![Load/Store 指令](../images/risc-v/riscv_load_store_instruction.png)

#### 指令汇编格式

##### 字加载

```assembly
lw rd, offset[11:0](rs1)
```

##### 半字加载

```assembly
lh rd, offset[11:0](rs1)
```

##### 无符号半字加载

```assembly
lhu rd, offset[11:0](rs1)
```

##### 字节加载

```assembly
lb rd, offset[11:0](rs1)
```

##### 无符号字节加载

```assembly
lbu rd, offset[11:0](rs1)
```

##### 字存储

```assembly
sw rs2, offset[11:0](rs1)
```

##### 半字存储

```assembly
sh rs2, offset[11:0](rs1)
```

##### 字节存储

```assembly
sb rs2, offset[11:0](rs1)
```

### B(Branch)型指令

![B型指令](../images/risc-v/riscv_B_instruction.png)

#### 指令汇编格式

##### 相等跳转

```assembly
beq rs1, rs2, label
```

##### 不等跳转

```assembly
bne rs1, rs2, label
```

##### 小于跳转

```assembly
blt rs1, rs2, label
```

##### 无符号小于跳转

```assembly
bltu rs1, rs2, label
```

##### 大于等于跳转

```assembly
bge rs1, rs2, label
```

##### 无符号大于等于跳转

```assembly
bgeu rs1, rs2, label
```

### J(Jump)型指令

![J型指令](../images/risc-v/riscv_jump_instruction.png)

#### 指令汇编格式

##### 无条件跳转

```assembly
jal rd, label # 将 PC+4 的值保存到 rd 寄存器中，然后设置 PC = PC + offset
```

伪指令 `j` 实际上就是jal指令的变体，此时 rd 会被设置为 x0,表示丢弃返回地址

##### 无条件相对跳转 (I 类型指令)

```assembly
jalr rd, rs1, imm # 将 PC+4 保存到 rd 寄存器中，然后设置 PC = rs1  + imm
```

跳转到任意 32 位绝对地址处

```assembly
lui x1, <hi20bits>
jalr ra, x1, <lo12bits>
```

相对PC地址32位偏移量的相对跳转

```assembly
auipc x1, <hi20bits>
jalr x0, x1, <lo12bits>
```

### U(Upper immediate)型指令

![U型指令](../images/risc-v/riscv_U_instruction.png)

#### 指令汇编格式

##### lui 指令 (Load Upper Immediate)

```assembly
lui rs, imm # 将 20 位的立即数左移12位，低 12 位补零，并写回寄存器 rd 中
```

配合 addi 指令（设置低 12 比特）可实现讲寄存器设置为任意 32 比特的立即数，例如：

```assembly
lui x10, 0x87654     # x10 = 0x87654000
addi x10, x10, 0x321 # x10 = 0x87654321
```

但是，当这个 12 位的立即数为负数（即最高比特位是1）时，得到的结果是高 20 位减 1 再和低 12 位拼接，比如：

```assembly
lui x10, 0xDEADB     # x10 = 0xDEADB000
addi x10, x10, 0xEEF # x10 = 0xDEADBEEF
```

解决这个问题的一种方法是，如果低 12 位的立即数的符号位是 1 ,那就预先给高 20 位的数加 1。`li` 伪指令可以替我们处理好这中特殊情况。

##### auipc 指令 (Add Upper Immediate to PC)

```assembly
auipc rd, imm # 将 20 位的立即数左移12位，低 12 位补零，将得到的 32 位数与 pc 的值相加，最后写回寄存器 rd 中
```

具体应用有：

```assembly
Label: auipc x10, 0 # 将 Label 的地址保存在 x10 寄存器中
```

## ALU 的设计

![ALU设计框图](../images/risc-v/riscv_alu_design.png)

### 加法运算的实现

```verilog
module adder #(
parameter N = 8
) (
	input [N - 1 : 0] a,
	input [N - 1 : 0] b,
	input			  cin,

	output [N - 1 : 0] sum,
	output 			   cout
);
	assign {cout, sum} = a + b + cin;
endmodule
```

### 减法运算的实现

```verilog
module subtractor #(
parameter N = 8
) (
    input [N - 1 : 0] a,
    input [N - 1 : 0] b,

    output [N - 1 : 0] y
);
    assign y = a - b;
endmodule
```

### 比较运算的实现

#### 相等比较

用异或门检查 A 和 B 中对应的位是否相等

#### 量值比较（减法）

首先计算A-B的值，然后检查结果的符号位

```verilog
module comparator #(
parameter N = 8
) (
    input [N - 1 : 0] a,
    input [N - 1 : 0] b

    output eq,
    output neq,
    output lt,
    output lte,
    output gt,
    output gte
);
    assign eq = (a == b);
    assign neq = (a != b);
    assign lt = (a < b);
    assign lte = (a <= b);
    assign gt = (a > b);
    assign gte = (a >= b);
endmodule
```

## 单指令周期 CPU

* 指令周期：CPU 取出并执行一条指令所需的全部时间
* 指令执行的的五个步骤
  1. 取指（Instruction Fetch）
  2. 译码（Instruction Decode）
  3. 执行（Execute）
  4. 访存（Memory Access）
  5. 写回（Write Back)
* CPU周期：也称为机器周期，一个机器周期由若干个时钟周期组成
* CPI (Clock Cycle Per Instruction)：执行每条指令所需的时钟周期数的平均值
* 单指令周期CPU：全部指令选用一个 CPU 周期完成的系统

![单指令周期 CPU](../images/risc-v/single_instruction_CPU.png)

### 寄存器堆的实现

![寄存器堆](../images/risc-v/register_file.png)

```verilog
module regfile(rna, rnb, d, wn, we, clk, clrn, qa, qb);
    input [4:0] rna, rnb, wn; // 读地址，写地址
    input [31:0] d; // 写数据
    input we, clk, clrn; // 写使能，时钟，清除信号
    output [31:0] qa, qb; // 读数据

    reg [31:0] register [1:31]; // 31x32-bit regs

    // 2 read ports
    assign qa = (rna == 0) ? 0 : register[rna];
    assign qb = (rnb == 0) ? 0 : register[rnb];

    // 1 write port
    always @(posedge clk or negedge clrn)
        if(clrn == 0) begin
            integer i;
            for(i=1;i<32;i=i+1)
                register[i] <= 0;
        end else if ((wn != 0) && we)
            register[wn] <= d;
endmodule
```

### 完整的数据通路

![完整的数据通路](../images/risc-v/riscv_full_data_path.png)

* 译码阶段，会将指令的功能码和操作码发送给**控制器**，来产生相应的控制信号
* 立即数扩展信号：ImmSel
* ALU 功能选择信号：ALUSel

### 控制器的设计

![控制器的设计](../images/risc-v/riscv_cpu_controller_truth_table.png)

### R 型指令数据通路

![R型指令数据通路](../images/risc-v/riscv_R_instruction_data_path.png)

* `ALUSel` 会根据指令的 `funct3`来取不同的值

### I 型指令数据通路

![I型指令数据通路](../images/risc-v/riscv_I_instruction_data_path.png)

### Load 指令数据通路

![Load指令数据通路](../images/risc-v/riscv_load_instruction_data_path.png)

### Store 指令数据通路

![Store指令数据通路](../images/risc-v/riscv_store_instruction_data_path.png)

* 立即数来自`inst[31:25][11:7]`，这个和Load不同
* Store指令没有**写回**阶段

### B 型指令数据通路

![B指令数据通路](../images/risc-v/riscv_B_instruction_data_path.png)

* 无**访存**和**写回**阶段

### jalr 指令数据通路

![jalr指令数据通路](../images/risc-v/riscv_jalr_instruction_data_path.png)

* PC+4 的值会保存到`rd` 中

### jal 指令数据通路

![jal指令数据通路](../images/risc-v/riscv_jal_instruction_data_path.png)

## 流水线技术

![流水线技术](../images/risc-v/riscv_pipeline.png)

### 处理器性能公式

$$
ProgramTime = \frac{Instructions}{Program} * \frac{Cycle s}{Instruction} * \frac{Time}{Cycle}
$$

### 流水线阶段寄存器

为了确保硬件共享的时候，前一阶段的数据不被丢失，需要在流水线之间插入“阶段寄存器”来保存中间值和控制信号。

![流水线寄存器](../images/risc-v/riscv_pipeline_registers.png)

## Cache

![Cache](../images/risc-v/riscv_cache.png)

### Cache 的结构

![Cache的结构](../images/risc-v/riscv_cache_structure.png)

* 块（block）：两级存储器层次结构中存储器信息交换的最小单元
* 命中（hit）：如果处理器需要的数据存放在高层存储器中的某个块中，称为一次命中
* 缺失（miss）：如果在高层存储器中没有找到所需的数据，这次数据请求称为一次缺失
  * 缺失代价（miss penalty）：将相应的块从底层存储器替换到高层存储器的时间+将该信息块传送给处理器的时间

### Cache 直接映射

直接映射：一种 cache 结构，其中每个存储器地址仅仅对应到 cache 中的一个位置

映射方法：（块地址）mod（cache 中的块数）

标记：表中的一个字段，包含了地址信息，这些地址信息可以用来判断cache中的字是否就是所请求的字

有效位：表中的一个字段，用来标识一个块是否包含有一个有效数据

![Cache直接映射](../images/risc-v/riscv_cache_direct_mapping.png)

![Cache直接映射示例](../images/risc-v/riscv_cache_direct_mapping_example.png)

缺点：利用率低，命中率低

### Cache 全相联映射

全相联映射：一个块可以被放置在 cache 中的任何位置

![Cache全相联映射](../images/risc-v/riscv_cache_full_association_mapping.png)

![Cache全相联映射示例](../images/risc-v/riscv_cache_full_association_mapping_example.png)

缺点：硬件开销大（有多少cache块就配有相等数量的比较器）

### Cache 组相联映射

在组相联映射中，每个块可被放置的位置数是固定的，每个块有 n 个位置可放的 cache 被称为 n 路组相联 Cache

![Cache组相联映射](../images/risc-v/riscv_set_associative_cache.png)

![Cache组相联映射示例](../images/risc-v/riscv_set_associative_cache_example.png)

四路组相联 Cache：

* 4 个比较器
* 1 个四选一多路选择器

### Cache 的设计

* 要考虑的维度
  * Cache 的容量
  * 块大小
  * 组织方式（Direct，Fully Associative，Set Associative）
  * 替换算法（FIFO，LRU）
  * 写策略（write-through, write-back）

## 虚拟地址

![虚拟存储器管理](../images/risc-v/riscv_mmu.png)

### 分段管理

![分段管理](../images/risc-v/riscv_mmu_segment_manage.png)

分段管理：将一个程序按照逻辑单元分成多个程序段，每一个段使用自己单独的虚拟地址空间。

* 逻辑上相互独立
* 容易实现共享和保护
* 非常容易产生碎片（段长是不确定的）

### 分页管理

![分页管理](../images/risc-v/riscv_mmu_page_manage.png)

* 如果页表项为4字节，那么整张页表会占据4MB大小的内存空间

### 两级分页管理

![两级分页管理](../images/risc-v/riscv_mmu_two_level_page_manage.png)

* 4KB的页目录+4KB的页表

### 快速地址转换 TLB

![块表](../images/risc-v/riscv_tlb.png)

块表（Translation-Lookaside Buffer）：用于记录最近使用地址的映射信息的高速缓存，从而可以避免每次都要访问页表

### 使用 TLB 进行地址转换

![TLB的位置](../images/risc-v/riscv_tlb_location.png)

![TLB实现地址转换的原理](../images/risc-v/riscv_tlb_translation.png)

![TLB虚实地址转换](../images/risc-v/riscv_vma_pma_translation.png)

## 通用寄存器组

| 寄存器  | ABI 名字 | 描述                                                         | Saver  |
| ------- | -------- | ------------------------------------------------------------ | ------ |
| x0      | zero     | 硬件连线0                                                    | -      |
| x1      | ra       | 返回地址                                                     | Caller |
| x2      | sp       | 栈指针                                                       | Callee |
| x3      | gp       | 全局指针                                                     | -      |
| x4      | tp       | 线程指针                                                     | -      |
| x5-x7   | t0-t2    | 临时寄存器                                                   | Caller |
| x8      | s0/fp    | 保存的寄存器/帧指针                                          | Callee |
| x9      | s1       | 保存寄存器<br />保存原进程中的关键数据，<br />避免在函数调用过程中被破坏 | Callee |
| x10-x11 | a0-a1    | 函数参数/返回值                                              | Caller |
| x12-x17 | a2-a7    | 函数参数                                                     | Caller |
| x18-x27 | s2-s11   | 保存寄存器                                                   | Callee |
| x28-x31 | t3-t6    | 临时寄存器                                                   | Caller |

### 函数调用时保留的寄存器

被调用函数一般不会使用这些寄存器，即便使用也会提前保存好原值，可以信任。这些寄存器有：sp, gp, tp 和 s0-s11 寄存器。

### 函数调用时不保存的寄存器

有可能被调用函数使用更改，需要caller在调用前对自己用到的寄存器进行保存。这些寄存器有：参数与返回地址寄存器 a0-a7，返回地址寄存器 ra，临时寄存器 t0-t6

## CSR 寄存器组

### 独立的12位地址编码空间

![CSR寄存器访问指令的编码](../images/risc-v/csr_register_encoding.png)

### 专用的 CSR 指令读写 CSR 寄存器

![CSR寄存器访问指令](../images/risc-v/riscv_csr_register_access_instruction.png)

### 标准寄存器列表

#### Machine Mode

| 名称         | 地址  | 属性 | 备注                                                         |
| ------------ | ----- | ---- | ------------------------------------------------------------ |
| mvendorid    | 0xF11 | RO   | 商业供应商编号寄存器                                         |
| marchid      | 0xF12 | RO   | 架构编号寄存器                                               |
| mimpid       | 0xF13 | RO   | 硬件实现编号寄存器                                           |
| mhartid      | 0xF14 | RO   | Hart编号寄存器 (Hart: Hardware Thread)                       |
| mstatus      | 0x300 | RW   | 异常处理状态寄存器                                           |
| misa         | 0x301 | RO   | 指令集架构寄存器                                             |
| mie          | 0x304 | RW   | 局部中断屏蔽控制寄存器                                       |
| mtvec        | 0x305 | RW   | 异常入口基地址寄存器                                         |
| mtvt         | 0x307 | RW   | 中断向量表的基地址，至少为 **64byte** 对齐                   |
| mscratch     | 0x340 | RW   | 暂存寄存器，比如进入异常处理模式后，将应用程序的用户的 sp 寄存器临时保存到这个寄存器中 |
| mepc         | 0x341 | RW   | 异常PC寄存器                                                 |
| mcause       | 0x342 | RW   | 异常原因寄存器                                               |
| mtval        | 0x343 | RW   | 异常值寄存器，保存进入异常之前出错指令的编码值或者存储器访问的地址值 |
| mip          | 0x344 | RW   | 中断等待寄存器                                               |
| mnxti        | 0x345 | RW   | 读操作返回值是下一个中断的handler地址，写回操作会更新中断使能的状态 |
| mintstatus   | 0x346 | RO   | 用于保存当前中断 Level                                       |
| mscratchcsw  | 0x348 | RW   | 用于在特权模式变化时交换mscratch与目的寄存器的值             |
| mscratchcswl | 0x349 | RW   | 用于在中断Level变化时交换mscratch与目的寄存器的值            |
| mcycle       | 0xB00 | RW   | 周期计数器的低32位                                           |
| mcycleh      | 0xB80 | RW   | 周期计数器的高32位                                           |
| minstret     | 0xB02 | RW   | 完成指令计数器的低32位，该寄存器用于衡量处理器的性能         |
| minstrech    | 0xB82 | RW   | 完成指令计数器的高32位                                       |

#### User Mode

| 名称     | 地址  | 属性 | 备注                      |
| -------- | ----- | ---- | ------------------------- |
| cycle    | 0xC00 | RO   | mcycle寄存器的只读副本    |
| time     | 0xC01 | RO   | mtime寄存器的只读副本     |
| instret  | 0xC02 | RO   | minstret寄存器的只读副本  |
| cycleh   | 0xC80 | RO   | mcycleh寄存器的只读副本   |
| timeh    | 0xC81 | RO   | mtimeh寄存器的只读副本    |
| instreth | 0xC82 | RO   | minstreth寄存器的只读副本 |

## RISC-V 的中断

![进入中断](../images/risc-v/riscv_interrupt_enter.png)

![退出中断](../images/risc-v/riscv_interrupt_exit.png)

### 中断和异常相关的寄存器

![异常相关的CSR寄存器](../images/risc-v/riscv_exception_csr_registers.png)

![异常相关的CSR寄存器具体定义](../images/risc-v/riscv_exception_csr_register_definitions.png)

### mstatus

* MIE：为1表示中断的全局开关打开，中断能够被正常响应
* FS：维护浮点单元的状态。上电默认为0,表示Off，为了能够正常使用浮点单元，软件需要使用 CSR 写指令将 FS 的值改写为非 0 值以打开浮点单元的功能。操作系统在进行上下文切换的时候，需要通过该值来判断是否需要对浮点单元进行上下文的保存
* XS：维护用户自定义的扩展指令单元状态，类似与 FS

### mtvec

![mtvec寄存器](../images/risc-v/riscv_exception_mtvec_register.png)

### 异常代码

![异常代码](../images/risc-v/riscv_machine_exception_codes.png)

### 中断返回

![中断返回](../images/risc-v/riscv_exception_return.png)

### 中断屏蔽与中断等待

![中断屏蔽和等待相关额寄存器](../images/risc-v/riscv_interrupt_enable_pending.png)

### 中断优先级

![中断优先级](../images/risc-v/riscv_interrupt_priority.png)

### 单指令数据通路的中断响应与退出

![中断响应](../images/risc-v/riscv_one_cycle_intruction_interrupt_enter.png)

![中断退出](../images/risc-v/riscv_one_cycle_intruction_interrupt_exit.png)

## RISC-V 架构的可扩展性

### 指令集的扩展

![指令集扩展](../images/risc-v/riscv_isa_extension.png)

### 指令编码空间的扩展

![指令编码空间的扩展](../images/risc-v/riscv_isa_custom_instruction.png)

* custom-0、custom-1用于 RV32 的自定义指令集扩展
* custom-2、custom-3预留给 RV128，也可以用于 RV32、RV64的用户自定义指令集扩展

## 常用伪指令

##### 赋值指令

```assembly
mv rd, rs # 等效于 addi rd, rs, x0
```

##### 加载立即数

```assembly
li rd, 13 # 等效于 addi rd, x0, 13
```

##### 函数调用和返回

```assembly
jal my_foo # 函数调用
ret # 函数返回，等效于 jr ra，等效于 jalr x0, ra, 0
```
