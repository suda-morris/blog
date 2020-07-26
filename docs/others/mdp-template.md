# 𝙢𝙙𝙥 演示文稿

## 模板

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

## 安装与使用

```bash
# 安装 mdp 软件
sudo pacman -S mdp
# 使用 mdp 软件
mdp path/to/markdown/file.md
```

