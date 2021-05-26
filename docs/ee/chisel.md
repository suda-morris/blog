# 𝘾𝙝𝙞𝙨𝙚𝙡 3 基础

Chisel 是 UC Berkeley 开发的一种开源硬件建模语言，支持高度参数化的生成器和分层的特定领域的硬件语言进行高级硬件设计。

## 安装

1. 安装Java环境

   ```bash
   sudo apt-get install default-jdk
   ```

2. 安装sbt（Chisel使用的编译系统）

   ```bash
   echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
   sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 642AC823
   sudo apt-get update
   sudo apt-get install sbt
   ```

3. 安装Verilator（将Verilog文件编译成C++来做仿真）

   ```bash
   sudo apt-get install git make autoconf g++ flex bison
   git clone http://git.veripool.org/git/verilator
   cd verilator
   git pull
   git checkout verilator_3_922
   unset VERILATOR_ROOT # For bash, unsetenv for csh
   autoconf # Create ./configure script
   ./configure
   make
   sudo make install
   ```



## 上手实验

1. 下载教程需要的代码仓库

   ```bash
   git clone https://github.com/ucb-bar/chisel-tutorial.git
   cd chisel-tutorial
   git fetch origin
   git checkout release
   ```

2. 运行Chisel（期间会下载Chisel3软件，测试工具，Scala）

   ```bash
   sbt run
   ```

## Chisel入门

### 导入必要的软件包

```scala
import chisel3._
import chisel3.util._
import chisel3.iotesters.{ChiselFlatSpec, Driver, PeekPokeTester}
```

### 第一个模块

```scala
class PassthroughGenerator(width: Int) extends Module {
  val io = IO(new Bundle {
    val in = Input(UInt(width.W))
    val out = Output(UInt(width.W))
  })
  io.out := io.in
}
```

* 所有的硬件模块都要继承Module类
* 所有的输入输出端口都需要在名字为**io**的常量中声明，该变量必须是**IO**类的实例，在实例化的时候需要传入Bundle类型的实例对象
* 在Bundle实例中指定输入和输入的信号
* `:=`运算符是Chisel自定义的，用来表示左边的信号由右边的信号来驱动

### 编译成Verilog/FIRRTL

```scala
println(getVerilog(new PassthroughGenerator(10)))
println(getFirrtl(new PassthroughGenerator(20)))
```

### 测试

```scala
val testResult = Driver(() => new Passthrough()) {
  c => new PeekPokeTester(c) {
    poke(c.io.in, 0)     // Set our input to value 0
    expect(c.io.out, 0)  // Assert that the output correctly has 0
    poke(c.io.in, 1)     // Set our input to value 1
    expect(c.io.out, 1)  // Assert that the output correctly has 1
    poke(c.io.in, 2)     // Set our input to value 2
    expect(c.io.out, 2)  // Assert that the output correctly has 2
  }
}
assert(testResult)   // Scala Code: if testResult == false, will throw an error
println("SUCCESS!!") // Scala Code: if we get here, our tests passed!
```

* 调用`poke`可以设置某个输入信号的值
* 调用`except`可以检查某个输出信号是否和预期的相同
* 调用`peek`可以获取某个输出信号的值

### 关于printf

```scala
class PrintingModule extends Module {
    val io = IO(new Bundle {
        val in = Input(UInt(4.W))
        val out = Output(UInt(4.W))
    })
    io.out := io.in

    printf("Print during simulation: Input is %d\n", io.in)
    // chisel printf has its own string interpolator too
    printf(p"Print during simulation: IO is $io\n")

    println(s"Print during generation: Input is ${io.in}")
}

class PrintingModuleTester(c: PrintingModule) extends PeekPokeTester(c) {
    poke(c.io.in, 3)
    step(5) // circuit will print

    println(s"Print during testing: Input is ${peek(c.io.in)}")
}
chisel3.iotesters.Driver( () => new PrintingModule ) { c => new PrintingModuleTester(c) }
```

* 以下三种情况中使用打印功能会有所差别
  1. 在编译生成硬件电路的时候
  2. 在运行电路仿真的时候
  3. 在运行测试模块的时候
* `println`**不能**在电路仿真的时候用来打印，因为此时的电路已经是Verilog或者Firrtl语言描述的

#### 上述代码的运行结果为

```bash
[info] [0.002] Elaborating design...
Print during generation: Input is chisel3.core.UInt@7
[info] [0.115] Done elaborating.
Total FIRRTL Compile Time: 176.6 ms
Total FIRRTL Compile Time: 14.3 ms
End of dependency graph
Circuit state created
[info] [0.001] SEED 1536679256727
Print during simulation: Input is 3
Print during simulation: IO is Bundle(in -> 3, out -> 3)
Print during simulation: Input is 3
Print during simulation: IO is Bundle(in -> 3, out -> 3)
Print during simulation: Input is 3
Print during simulation: IO is Bundle(in -> 3, out -> 3)
Print during simulation: Input is 3
Print during simulation: IO is Bundle(in -> 3, out -> 3)
Print during simulation: Input is 3
Print during simulation: IO is Bundle(in -> 3, out -> 3)
[info] [0.007] Print during testing: Input is 3
test cmd2WrapperHelperPrintingModule Success: 0 tests passed in 10 cycles taking 0.033230 seconds
[info] [0.008] RAN 5 CYCLES PASSED
```



## 数字组合逻辑电路

### 多路选择与级联

```scala
class MyOperatorsTwo extends Module {
  val io = IO(new Bundle {
    val in      = Input(UInt(4.W))
    val out_mux = Output(UInt(4.W))
    val out_cat = Output(UInt(4.W))
  })

  val s = true.B
  io.out_mux := Mux(s, 3.U, 0.U) // should return 3.U, since s is true
  io.out_cat := Cat(2.U, 1.U)    // concatenates 2 (b10) with 1 (b1) to give 5 (101)
}

println(getVerilog(new MyOperatorsTwo))
class MyOperatorsTwoTester(c: MyOperatorsTwo) extends PeekPokeTester(c) {
  expect(c.io.out_mux, 3)
  expect(c.io.out_cat, 5)
}
assert(Driver(() => new MyOperatorsTwo) {c => new MyOperatorsTwoTester(c)})
println("SUCCESS!!")
```

* Chisel内置了`Mux`和`Cat`运算符，`Mux`使用起来就像是C语言中的三元运算符，`Cat`的级联方式是：先MSB后LSB，并且一次运算只能操作两个参数

### MAC（乘加）运算

```scala
class MAC extends Module {
  val io = IO(new Bundle {
    val in_a = Input(UInt(4.W))
    val in_b = Input(UInt(4.W))
    val in_c = Input(UInt(4.W))
    val out  = Output(UInt(8.W))
  })

  io.out := io.in_a * io.in_b + io.in_c
}
class MACTester(c: MAC) extends PeekPokeTester(c) {
  val cycles = 100
  import scala.util.Random
  for (i <- 0 until cycles) {
    val in_a = Random.nextInt(16)
    val in_b = Random.nextInt(16)
    val in_c = Random.nextInt(16)
    poke(c.io.in_a, in_a)
    poke(c.io.in_b, in_b)
    poke(c.io.in_c, in_c)
    expect(c.io.out, in_a*in_b+in_c)
  }
}
assert(Driver(() => new MAC) {c => new MACTester(c)})
println("SUCCESS!!")
```



## 条件控制

### `when` , `elsewhen`, `otherwise`

```scala
// Max3 returns the max of its 3 arguments
class Max3 extends Module {
  val io = IO(new Bundle {
    val in1 = Input(UInt(16.W))
    val in2 = Input(UInt(16.W))
    val in3 = Input(UInt(16.W))
    val out = Output(UInt(16.W))
  })

  when(io.in1 > io.in2 && io.in1 > io.in3) {
    io.out := io.in1
  }.elsewhen(io.in2 > io.in1 && io.in2 > io.in3) {
    io.out := io.in2
  }.otherwise {
    io.out := io.in3
  }
}

// verify that the max of the three inputs is correct
class Max3Tester(c: Max3) extends PeekPokeTester(c) {
  poke(c.io.in1, 6)
  poke(c.io.in2, 4)
  poke(c.io.in3, 2)
  expect(c.io.out, 6)  // input 1 should be biggest
  poke(c.io.in2, 7)
  expect(c.io.out, 7)  // now input 2 is
  poke(c.io.in3, 11)
  expect(c.io.out, 11) // and now input 3
  poke(c.io.in3, 3)
  expect(c.io.out, 7)  // show that decreasing an input works as well
}

// Test Max3
val works = Driver(() => new Max3) {
  c => new Max3Tester(c)
}
assert(works)        // Scala Code: if works == false, will throw an error
println("SUCCESS!!") // Scala Code: if we get here, our tests passed!
```

* 不同于Scala中的if语句，Chisel中的when语句不会有返回值

### `wire`构造器

```scala
/** Sort4 sorts its 4 inputs to its 4 outputs */
class Sort4 extends Module {
  val io = IO(new Bundle {
    val in0 = Input(UInt(16.W))
    val in1 = Input(UInt(16.W))
    val in2 = Input(UInt(16.W))
    val in3 = Input(UInt(16.W))
    val out0 = Output(UInt(16.W))
    val out1 = Output(UInt(16.W))
    val out2 = Output(UInt(16.W))
    val out3 = Output(UInt(16.W))
  })

  val row10 = Wire(UInt(16.W))
  val row11 = Wire(UInt(16.W))
  val row12 = Wire(UInt(16.W))
  val row13 = Wire(UInt(16.W))

  when(io.in0 < io.in1) {
    row10 := io.in0            // preserve first two elements
    row11 := io.in1
  }.otherwise {
    row10 := io.in1            // swap first two elements
    row11 := io.in0
  }

  when(io.in2 < io.in3) {
    row12 := io.in2            // preserve last two elements
    row13 := io.in3
  }.otherwise {
    row12 := io.in3            // swap last two elements
    row13 := io.in2
  }

  val row21 = Wire(UInt(16.W))
  val row22 = Wire(UInt(16.W))

  when(row11 < row12) {
    row21 := row11            // preserve middle 2 elements
    row22 := row12
  }.otherwise {
    row21 := row12            // swap middle two elements
    row22 := row11
  }

  val row20 = Wire(UInt(16.W))
  val row23 = Wire(UInt(16.W))
  when(row10 < row13) {
    row20 := row10            // preserve middle 2 elements
    row23 := row13
  }.otherwise {
    row20 := row13            // swap middle two elements
    row23 := row10
  }

  when(row20 < row21) {
    io.out0 := row20            // preserve first two elements
    io.out1 := row21
  }.otherwise {
    io.out0 := row21            // swap first two elements
    io.out1 := row20
  }

  when(row22 < row23) {
    io.out2 := row22            // preserve first two elements
    io.out3 := row23
  }.otherwise {
    io.out2 := row23            // swap first two elements
    io.out3 := row22
  }
}

// verify the all possible ordering of 4 numbers are sorted
class BetterSort4Tester(c: Sort4) extends PeekPokeTester(c) {
  List(1, 2, 3, 4).permutations.foreach { case i0 :: i1 :: i2 :: i3 :: Nil =>
    println(s"Sorting $i0 $i1 $i2 $i3")
    poke(c.io.in0, i0)
    poke(c.io.in1, i1)
    poke(c.io.in2, i2)
    poke(c.io.in3, i3)
    expect(c.io.out0, 1)
    expect(c.io.out1, 2)
    expect(c.io.out2, 3)
    expect(c.io.out3, 4)
  }
}

// Here's the tester
val works = iotesters.Driver(() => new Sort4) {
c => new BetterSort4Tester(c)
}
assert(works) // Scala Code: if works == false, will throw an error
println("SUCCESS!!") // Scala Code: if we get here, our tests passed!
```

## 参考文献

1. [Chisel3 Wiki](https://github.com/freechipsproject/chisel3/wiki)
2. [Chisel3 教程](https://github.com/ucb-bar/chisel-tutorial)
3. [Chisel3 工程模板](https://github.com/ucb-bar/chisel-template)
4. [Chisel3 API查询](https://chisel.eecs.berkeley.edu/api/latest/index.html)
5. [Chisel3 小抄](https://chisel.eecs.berkeley.edu/doc/chisel-cheatsheet3.pdf)
