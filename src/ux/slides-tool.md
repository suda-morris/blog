# 终端演示工具


## [Slides](https://github.com/maaslalani/slides)

### 安装与使用

```bash
# 安装 slides 软件
yay -S slides
# 使用 slides 软件
slides path/to/markdown/file.md
```

### 模板

````markdown
---
theme: https://github.com/maaslalani/slides/raw/main/styles/theme.json
---

# Welcome to Slides

A terminal based presentation tool

---

# Code blocks

Slides allows you to execute code blocks directly inside your slides!

Just press `ctrl+e` and the result of the code block will be displayed as virtual
text in your slides.

---

### Bash

```bash
ls
```

---

### Go

```go
package main

import "fmt"

func main() {
  fmt.Println("Hello, world!")
}
```

---

### Javascript

```javascript
console.log("Hello, world!")
```

---

### Python

```python
print("Hello, world!")
```

---

# h1
## h2
### h3
#### h4
##### h5
###### h6

---

# Markdown components

You can use everything in markdown!

* Like bulleted list
* You know the deal

1. Numbered lists too

* [x] ToDo

---

# Tables

| Tables | Too    |
| ------ | ------ |
| Even   | Tables |

---

# Graphs

```
digraph {
    rankdir = LR;
    a -> b;
    b -> c;
}
```
```
┌───┐     ┌───┐     ┌───┐
│ a │ ──▶ │ b │ ──▶ │ c │
└───┘     └───┘     └───┘
```
---

~~~uname -a
This will be replaced by command `uname -a`
~~~

---

SEE YOU!

[Blog](https://suda-mottis.github.io/blog)

![ME](/home/morris/blog/docs/.vuepress/public/author.jpg)

````

## [mdp](https://github.com/visit1985/mdp)

### 安装与使用

```bash
# 安装 mdp 软件
sudo pacman -S mdp
# 使用 mdp 软件
mdp path/to/markdown/file.md
```

### 模板

```markdown
%title: Markdown Presentation 演示文稿 🥳
%author: suda-morris
%date: 2019-11-11

-> # 一级标题，居中 <-

-> ## 二级标题，居中 <-

-> 文本内容，居中 <-

_基本控制:_

下一页      *Enter*, *Space*, *Page Down*, *j*, *l*,
            *Down Arrow*, *Right Arrow*

前一页      *Backspace*, *Page Up*, *h*, *k*,
            *Up Arrow*, *Left Arrow*

退出        *q*
重载        *r*
第 N 页     *1..9*
首页        *Home*, *g*
末页        *End*, *G*

-------------------------------------------------


-> # 代码展示 <-

行内代码 `main()`

代码块

​```
int main(int argc, char *argv[]) {
    printf("%s\n", "Hello world!");
}
​```

-------------------------------------------------

-> # 引用 <-

> 引用
>> 嵌套引用 1
>>> 嵌套引用 2

-------------------------------------------------

-> # 下划线与高亮 <-

_仅下划线_ *高亮* _*下划线且高亮*_

-------------------------------------------------

-> # 列表 <-

list
* major
    - minor
        - *important*
          detail
    - minor

-------------------------------------------------

-> # 逐行显示 <-

Agenda
^
* major
^
    * minor
^
* major
  ^
    * minor
      ^
        * detail

-------------------------------------------------

-> # URL 链接 <-

[blog](https://suda-morris.github.io/blog)

-------------------------------------------------

-> # UTF-8 特殊字符 <-

ae = ä, oe = ö, ue = ü, ss = ß
upsilon = Ʊ, phi = ɸ

▛▀▀▀▀▀▀▀▀▀▜
▌rectangle▐
▙▄▄▄▄▄▄▄▄▄▟


-------------------------------------------------

-> # 演示的暂停与恢复 <-

按下 *Ctrl + z* 可以暂停当前演示，回到终端

在终端输入 *fg* 可以恢复之前的演示

-------------------------------------------------

-> # 导出到 PDF 文件 <-

需要安装额外的工具：

\- *markdown* 将 Markdown 文件导出为 HTML
\- *wkhtmltopdf* 将 HTML 转换为 PDF

`$ markdown sample.md | wkhtmltopdf - sample.pdf`
```

## [slidev](https://sli.dev)

* Demo: <https://suda-morris.github.io/rmt-driver-lecture>
