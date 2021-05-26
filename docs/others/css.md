title: CSS Basic
tags:
  - CSS
categories:
  - Web
author: suda-morris
date: 2015-09-27 10:51:00
---
## 基础语法
> selector{
> property:value
> }
其中selector有派生选择器，id选择器，类选择器，属性选择器

## 头部声明
`<link href="MyCSS.css" type="text/css" rel="stylesheet">`

## id选择器
1. id选择器可以为标有id的HTML元素指定特定的样式
2. id选择器以“#”来定义

## 类选择器
1. 类选择器以一个点来定义

## 属性选择器
1. `<style type="text/css"> [title=te]{color:blue}</style>`
2. `<p title="te">属性选择器</p>`

## CSS背景
* background-attachment:背景图像是否固定或者随着页面的其余部分滚动
* background-color:设置元素的背景颜色
* background-image:把图片设置为背景，url("bg.jpg")
* background-position:设置背景图片的起始位置
* background-repeat:设置背景图片是否及如何重复
* background-size:规定背景图片的尺寸
* background-origin:规定背景图片的定位区域
* background-clip:规定背景的绘制区域

## CSS文本
* color：文本颜色
* direction：文本方向
* line-height：行高
* letter-spacing：字符间距
* text-align：对齐元素中的文本
* text-decoration：向文本中添加修饰
* text-indent：缩进元素中文本的首行
* text-transform：元素中的字母
* unicode-bidi：设置文本方向
* white-space：元素中空白的处理方式
* word-spacing：字间距
* text-shadow:文本阴影
* word-wrap:规定文本的换行规则

## CSS字体
* font-family:设置字体系列
* font-size:设置字体的尺寸
* font-style:设置字体风格
* font-variant:以小型大写字体或正常字体显示文本
* font-weight:设置字体的粗细

## CSS链接
1. CSS链接的四种状态：
	* a:link 普通的、未被访问的链接
	* a:visited 用户已经访问的链接
	* a:hover 鼠标指针位于链接的上方
	* a:active 链接被点击的时刻
2. 常见的链接样式：
	* text-decoration属于大多用于去掉链接中的下划线

## CSS列表
* list-style简写列表项
* list-style-image列表项图像
* list-style-position列表标志位置
* list-style-type列表类型

## CSS表格
```css
#tb{
	border-collapse:collapse;
	width:500px;
}
#tb td,#tb th{
	border:1px solid bisque;
	padding:5px;
}
#tb th{
	text-align:right;
	background-color:aqua;
	color:#FFFFFF;
}
#tb tr.alt td{
	color:black;
	background-color:aquamarine;
}
```

## CSS轮廓
* outline设置轮廓属性
* outline-color设置轮廓的颜色
* outline-style设置轮廓的样式
* outline-width设置轮廓的宽度
