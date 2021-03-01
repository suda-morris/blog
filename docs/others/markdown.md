# 𝙈𝙖𝙧𝙠𝙙𝙤𝙬𝙣 基本语法

## 表格

### Markdown 表格

**输入**

``` markdown
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**输出**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### HTML 表格

**输入**

``` html
<table>
  <tr>
    <th>项目1</th>
    <th>项目2</th>
    <th>项目3</th>
  </tr>
  <tr>
    <td>a1</td>
    <td colspan="2">a2</td>
  </tr>
  <tr>
    <td rowspan="2">b1</td>
    <td>b2</td>
    <td>b3</td>
  </tr>
  <tr>
    <td>c2</td>
    <td>c3</td>
  </tr>
</table>
```

**输出**

<table>
  <tr>
    <th>项目1</th>
    <th>项目2</th>
    <th>项目3</th>
  </tr>
  <tr>
    <td>a1</td>
    <td colspan="2">a2</td>
  </tr>
  <tr>
    <td rowspan="2">b1</td>
    <td>b2</td>
    <td>b3</td>
  </tr>
  <tr>
    <td>c2</td>
    <td>c3</td>
  </tr>
</table>

## Emoji

**输入**

``` markdown
:tada: :100:
```

**输出**

:tada: :100:

## 自定义容器 <Badge text="默认主题"/>

**输入**

``` markdown
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

**输出**

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous thing
:::

可以自定义块中的标题：

```
::: danger STOP
Danger zone, do not proceed
:::
```

::: danger STOP
Danger zone, do not proceed
:::

## 代码块中的行高亮

**输入**

````
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 数学公式

### 行内语法

**输入**

```
Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.
```

**输出**

Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.

### 块内语法

**输入**

```
$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$
```

**输出**

$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$