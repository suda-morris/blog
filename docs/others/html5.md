title: HTML5 Basic
tags:
  - HTML
categories:
  - Web
author: suda-morris
date: 2015-09-25 22:26:00
---
## 基础
1. 声明：<!DOCTYPE>
	* HTML有多个不同版本，只有完全明白页面中使用的确切的HTML版本，浏览器才能完全正确地显示出HTML页面
	* HTML5：
		* <!DOCTYPE html>
2. 元素：指的是从开始标签到结束标签的所有代码
	* `<p> this is my web page </p>`中的`this is my web page`就是元素内容
	* `<br/>`表示不含任何元素的空标签，即换行
	* 空元素在开始标签中进行关闭
	* 大多数的HTML元素可拥有属性
3. 属性
	* 属性以键值对的形式出现
	* 常用标签属性
		* `<h1>:align对齐方式`
		* `<body>:bgcolor背景颜色`
		* `<a>:target规定在何处打开连接`
	* 通用属性
		* `class：规定元素的类名`
		* `id：规定元素唯一ID`
		* `style：规定元素的样式`
		* `title：规定元素的额外信息`
4.  格式化
	* `<b>定义粗体文字`
	* `<big>定义大号文字`
	* `<em>定义着重文字`
	* `<i>定义斜体文字`
	* `<small>定义小号文字`
	* `<strong>定义加重语气`
	* `<sub>定义下标文字`
	* `<sup>定义上标文字`
	* `<ins>定义插入字`
	* `<del>定义删除字`
5. 样式
	1. 标签
		* `<style>:样式定义`
		* `<link>:资源引用`
	2. 属性
		* `rel="stylesheet"：外部样式表`
		* `type="text/css":引入文档的类型`
		* `margin-left:边距`
	3. 三种样式表插入方法：
		1. 外部样式表：`<link rel="stylesheet" type="text/css" href="mystyle.css">`
		2. 内部样式表：`<style type="text/css">body{background-color:red} p{margin-left:20px}</style>`
		3. 内联样式表：`<p style="color:red">`
6. 链接
	1. 标签：<a></a>
	2. 连接数据：文本链接，图片链接
	3. 属性：
		1. href属性：指向另一个文档的链接
		2. name属性：创建文档内的链接
			* `<a name="tips">hello</a>`
			* `<a href="#tips">跳转</a>`
	4. img标签属性
		1. alt：替换文本属性
		2. width：宽
		3. height：高
7. 表格
	1. 标签
		* `<table>：定义表格`,属性border定义边框大小，属性cellpadding定义单元格边距，属性cellspacing定义单元格间距，属性bgcolor定义表格背景色，属性background定义表格图片
		* `<caption>：定义表格标题`
		* `<th>：定义表格表头`
		* `<tr>：定义表格的行`
		* `<td>：定义表格的单元`,属性colspan的值定义了要合并的单元格数目
		* `<thead>：定义表格的页眉`
		* `<tbody>：定义表格的主题`
		* `<tfoot>：定义表格的页脚`
		* `<col>：定义表格的列属性`
8. 列表
	1. 标签
		* `<ol>：有序列表`，type属性值A,a,I ,i,start
		* `<ul>：无序列表`，type属性值disc,circle,square
		* `<li>：列表项`
		* `<dl>：自定义列表`
		* `<dt>：自定义列表项`
		* `<dd>：自定义列表描述`
9. 块
	1. HTML块元素
		* 块元素在显示时，通常会以新行开始，比如`<h1>,<p>,<ul>`
	2. HTML内联元素
		* 内联元素通常不会以新行开始，比如`<b>,<a>,<img>`
	3. `HTML<div>`元素
		* `<div>`元素也被称称为块元素，其主要是组合HTML元素的容器
	4. `HTML<span>`元素
		* `<span>`元素是内联元素，可作为文本的容器
10. 使用div元素布局 
```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>html布局测试</title>
    <style type="text/css">
        body {
            margin: 0;
        }

        div#page {
            background-color: gray;
            width: 100%;
            height: 950px;
        }

        div#head {
            background-color: red;
            width: 100%;
            height: 10%;
        }

        div#left {
            background-color: greenyellow;
            width: 20%;
            height: 80%;
            float: left;
        }

        div#middle {
            background-color: gray;
            width: 60%;
            height: 80%;
            float: left;
        }

        div#right {
            background-color: cornflowerblue;
            width: 20%;
            height: 80%;
            float: left;
        }

        div#foot {
            background-color: blue;
            width: 100%;
            height: 10%;
            clear: both;
        }
    </style>
</head>
<body>
<div id="page">
    <div id="head">
        head
    </div>
    <div id="left">
        main_L
    </div>
    <div id="middle">
        main_M
    </div>
    <div id="right">
        main_R
    </div>
    <div id="foot">
        foot
    </div>
</div>
</body>
</html>
```

11. 表单
	1. 标签
		* `<form>表单`，属性值有action，method
		* `<input>输入域`，属性type的值有：text，password，checkbox，radio(需要和name属性搭配使用),button(需要和value属性搭配使用),submit(需要和value属性搭配使用)
		* `<textarea>文本域`，属性有cols,rows
		* `<label>控制标签`
		* `<fieldset>定义域`
		* `<legend>域的标题`
		* `<select>选择列表`
		* `<optgroup>选项组`
		* `<option>下拉列表中的选项`,需要被`<select>`包围
		* `<button>按钮`

12. 框架
	1. 框架标签`<frame?`
	2. 框架集标签`<frameset>`
	3. 常用标签
		* noresize:固定框架大小
		* cols:列
		* rows:行
	4. 内联框架`<iframe>`,属性src指名引用的框架路径，属性frameborder指名是否需要边框

13. 实体
	* HTML中预留字符串必须被替换成字符实体，如<（小于号），>（大于号）
	* 常用的字符实体
		* 空格：&nbsp
		* 小于号：&lt
		* 大于号：&gt
		* 和号：&amp
		* 引号：&quot
		* 撇号：&apos
		* 分：&cent
		* 镑：&pound
		* 元：&yen
		* 欧元：&euro
		* 小节：&sect
		* 版权：&copy
		* 注册商标：&reg
		* 商标：&trade
		* 乘号：&times
		* 除号：&divide

## HTML5 Web Storage
1. Web Storage功能就是在Web上存储数据的功能，这里的储存是针对客户端本地而言的，具体分为两种：
	* sessionStorage：将数据保存在session对象中，session是指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间，也就是用户浏览这个网站所花费的时间。session对象可以用来保存在这段时间内所要求保存的任何数据
	* localStorage：将数据保存在客户端本地的硬件设备中，即使浏览器被关闭了，该数据任然存在，下一次打开浏览器访问网站时仍然可以继续使用

```js sessionStorage
function saveStorage(id){
	var target = document.getElementById(id);
	var str = target.value;
	sessionStorage.setItem("message",str);
}

function loadStorage(id){
	var target = document.getElementById(id);
	var msg = sessionStorage.getItem("message");
	target.innerHTML = msg;
}
```
```js localStorage
function saveStorage(id){
	var target = document.getElementById(id);
	var str = target.value;
	localStorage.setItem("message",str);
}

function loadStorage(id){
	var target = document.getElementById(id);
	var msg = localStorage.getItem("message");
	target.innerHTML = msg;
}
```

## HTML5 本地数据库
1. HTML5中内置了两种本地数据库，一种为SQLite，一种为indexedDB


