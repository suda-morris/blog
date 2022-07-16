# 位运算技巧

## 基础

| 符号 | 含义     | 规则                                   |
| ---- | -------- | -------------------------------------- |
| &    | 与       | 两个位都为 1 时，结果为 1，否则为 0    |
| \|   | 或       | 有一个位为 1 时，结果为 1，否则为 0    |
| ^    | 异或     | 与 0 异或值不变，与 1 异或值取反       |
| ~    | 取反     | 0 变 1, 1 变 0                         |
| <<   | 左移     | 所有位左移若干位，高位丢弃，低位补 0   |
| >>   | 算术右移 | 所有位右移若干位，高位补最高有效位的值 |
| >>   | 逻辑右移 | 所有位右移若干位，高位补 0             |

::: warning
1. 位运算只支持整数，不支持 float 和 double
2. 逻辑右移的符号各种语言不太相同
3. 位运算的优先级比较低，建议使用括号来确保运算顺序
:::

## 应用实例

### 混合体

| 位运算             | 功能                  | 示例                 |
| ------------------ | --------------------- | -------------------- |
| x >> 1             | 去掉最后一位          | 101101->10110        |
| x << 1             | 在最后加一个0         | 101101->1011010      |
| x << 1 \| 1        | 在最后加一个1         | 101101->1011011      |
| x \| 1             | 把最后一位变成1       | 101100->101101       |
| x & -2             | 把最后一位变成0       | 101101->101100       |
| x \| (1 << (k-1))  | 把右数第k位变成1      | 101001->101101,k=3   |
| x & ~ (1 << (k-1)) | 把右数第k位变成0      | 101101->101001,k=3   |
| x ^(1 <<(k-1))     | 右数第k位取反         | 101001->101101,k=3    |
| x & 7              | 取末三位              | 1101101->101         |
| x & (1 << k-1)     | 取末k位               | 1101101->1101,k=5    |
| x >> (k-1) & 1     | 取右数第k位           | 1101101->1,k=4       |
| x \| ((1 << k)-1)  | 把末k位变成1          | 101001->101111,k=4   |
| x ^ (1 << k-1)     | 末k位取反             | 101001->100110,k=4   |
| x & (x+1)          | 把右边连续的1变成0    | 100101111->100100000 |
| x \| (x+1)         | 把右起第一个0变成1    | 100101111->100111111 |
| x \| (x-1)         | 把右边连续的0变成1    | 11011000->11011111   |
| (x ^ (x+1)) >> 1   | 取右边连续的1         | 100101111->1111      |
| x & -x             | 去掉右起第一个1的左边 | 100101000->1000      |
| x&0x7F             | 取末7位               | 100101000->101000    |
| x& ~0x7F           | 是否小于127           | 001111111 & ~0x7F->0 |
| x & 1              | 判断奇偶              | 00000111&1->1        |

### 数据交换

```c
int swap(int a, int b)
{
    if (a != b)
    {
        a ^= b;
        b ^= a;
        a ^= b;
    }
}
```

### 绝对值

```c
int abs(int a)
{
    int i = a >> 31;
    return ((a ^ i) - i);
}
```

### 查找 32 位整数前导 0 的个数

```c
int nlz(unsigned x)
{
    int n;
    if (x == 0) return(32);
    n = 1;
    if ((x >> 16) == 0) {n = n +16; x = x <<16;}
    if ((x >> 24) == 0) {n = n + 8; x = x << 8;}
    if ((x >> 28) == 0) {n = n + 4; x = x << 4;}
    if ((x >> 30) == 0) {n = n + 2; x = x << 2;}
    n = n - (x >> 31);
    return n;
}
```

### 二进制逆序

```c
int reverse_order(int n)
{
    n = ((n & 0xAAAAAAAA) >> 1) | ((n & 0x55555555) << 1);
    n = ((n & 0xCCCCCCCC) >> 2) | ((n & 0x33333333) << 2);
    n = ((n & 0xF0F0F0F0) >> 4) | ((n & 0x0F0F0F0F) << 4);
    n = ((n & 0xFF00FF00) >> 8) | ((n & 0x00FF00FF) << 8);
    n = ((n & 0xFFFF0000) >> 16) | ((n & 0x0000FFFF) << 16);
    return n;
}
```

### 二进制中 1 的个数

```c
unsigned int BitCount_e(unsigned int value)
{
    unsigned int count = 0;
    // 解释下下面这句话代码，这句话求得两两相加的结果，例如 11 01 00 10
    // 11 01 00 10 = 01 01 00 00 + 10 00 00 10，即由奇数位和偶数位相加而成
    // 记 value = 11 01 00 10，high_v = 01 01 00 00， low_v = 10 00 00 10
    // 则 value = high_v + low_v，high_v 右移一位得 high_v_1，
    // 即 high_v_1 = high_v >> 1 = high_v / 2
    // 此时 value 可以表示为 value = high_v_1 + high_v_1 + low_v，
    // 可见 我们需要 high_v + low_v 的和即等于 value - high_v_1
    // 写简单点就是 value = value & 0x55555555 + (value >> 1) & 0x55555555;
    value = value - ((value >> 1) & 0x55555555);

    // 之后的就好理解了
    value = (value & 0x33333333) + ((value >> 2) & 0x33333333);
    value = (value & 0x0f0f0f0f) + ((value >> 4) & 0x0f0f0f0f);
    value = (value & 0x00ff00ff) + ((value >> 4) & 0x00ff00ff);
    value = (value & 0x0000ffff) + ((value >> 8) & 0x0000ffff);
    return value;

    // 另一种写法，原理一样，原因在最后一种解法中有提到
    //value = (value & 0x55555555) + (value >> 1) & 0x55555555;
    //value = (value & 0x33333333) + ((value >> 2) & 0x33333333);
    //value = (value & 0x0f0f0f0f) + ((value >> 4) & 0x0f0f0f0f);
    //value = value + (value >> 8);
    //value = value + (value >> 16);
    //return (value & 0x0000003f);
}
```