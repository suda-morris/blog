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

## 注脚

**输入**

```markdown
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

**输出**

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.

​	Indent paragraphs to include them in the footnote.

​	`{ my code }`

​	Add as many paragraphs as you like.

## Heading ID

**输入**

```markdown
#### My head

[goto my head](#my-head)
```

**输出**

#### My Head

[go to my head](#my-head)

## 删除线

**输入**

```markdow
~~The world is flat.~~ We now know that the world is round.
```

**输出**

~~The world is flat.~~ We now know that the world is round.

## 任务列表

**输入**

```markdow
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

**输出**

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## 自定义容器

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
