title: Javascript Basic
tags:
  - Javascript
categories:
  - Web
author: suda-morris
date: 2015-09-28 12:20:50 +0800
---
## ==与===的区别
1. 对于string,number等基础类型，==和===是有区别的
	1. 不同类型间比较，==之比较“转化成同一类型后的值”看“值”是否相等，===如果类型不同，其结果就是不等
	2. 同类型比较，直接进行“值”比较，两者结果一样
2. 对于Array,Object等高级类型，==和===是没有区别的
	* 进行“指针地址”比较
3. 基础类型与高级类型，==和===是有区别的
	1. 对于==，将高级转化为基础类型，进行“值”比较
	2. 因为类型不同，===结果为false

## 事件
1. 常用事件
	* onClick单击事件
	* onMouseOver鼠标经过事件
	* onMouseOut鼠标移出事件
	* onChange文本内容改变事件
	* onSelect文本框选中事件
	* onFocus光标聚集事件
	* onBlur移开光标事件
	* onLoad网页加载事件
	* onUnload关闭网页事件
2. 事件冒泡
	* 由最具体的元素接收，然后逐级向上传播至最不具体的元素的节点(文档)
3. 事件捕获
	* 最不具体的节点先接收事件，而最具体的节点应该是最后接收事件
4. 事件处理
	1. HTML事件处理
		* 直接添加到HTML结构中
	2. DOM0级事件处理
		* 把一个函数赋值给一个事件处理程序
		* 同一个元素多个事件会被覆盖，只有最后一个事件起作用
	3. DOM2级事件处理
		* addEventListener(“事件名”，“事件处理函数”，“布尔值”)；
		* true：事件捕获
		* false：事件冒泡
		* removeEventListen();
	4. IE事件处理程序(IE8及以下)
		* attachEvent
		* detachEvent
5. 事件对象
	1. 在触发DOM事件的时候都会产生一个对象
	2. 事件对象event
		1. type：获取事件类型
		2. target：获取事件目标
		3. stopPropagation()；阻止事件冒泡
		4. preventDefault()；阻止事件默认行为(比如超链接)

## DOM对象
1. 当网页被加载时，浏览器会创建页面的文档对象模型(Document Object Model)
![DOM对象模型](http://i.imgur.com/EwSndVS.png)
2. DOM操作HTML
	1. 改变HTML输出流：
		* 注意，绝对不要在文档加载完成后使用document.write(),这会覆盖该文档
	2. 寻找元素：
		* 通过id找到HTML元素,document.getElementById();
		* 通过标签名找到HTML元素,document.getElementByTagName();
	3. 改变HTML内容
		* 使用属性：innerHTML
	4. 改变HTML属性
		* 使用属性：attribute，例如：`document.getElementById("aid").href="http://www.baid.com";`
	5. 常用方法：
		1. getElementsByName();获取name
		2. getElementsByTagName();获取元素
		3. getAttribute();获取元素属性
		4. setAttribute();设置元素属性
		5. childNodes();访问子节点
		6. parentNode();访问父节点
		7. createElement();创建元素节点
		8. createTextNode();创建文本节点
		9. insertBefore();插入节点
		10. removeChild();删除节点
		11. offsetHeight;网页尺寸,例如：`var width=document.body.offsetWidth;`
		12. crollHeight;网页尺寸
	6. 创建节点示例
		`var body=document.body;var input=document.creatElement("input");input.type="button";input.value="按钮"；body.appendChild(input);`
3. DOM操作CSS
	1. 基本语法：`document.getElementById(id).style.property=new style;`
4. DOM操作事件句柄
	1. addEventListener();向指定元素添加事件句柄
	2. removeEventListener();移出方法添加的事件句柄

## 内置对象
1. String对象
	1. 字符串可以使用使用单引号或者双引号
	2. 获取字符串长度：length属性
	3. 在字符串中查找字符串的方法：indexOf(),成功返回位置，失败返回-1
	4. 内容匹配的方法：match(),成功返回匹配成功的字符串，失败返回空
	5. 替换内容的方法：replace()
	6. 字符串大小写转换：toUpperCase()/toLowerCase()
	7. 字符串转为数组：split
2. Date对象
	1. 常用方法：
		1. getFullYear():获取年份
		2. getTime():获取毫秒
		3. setFullYear():设置具体的日期
		4. getDay():获取星期
3. Array数组对象
	1. 数组的创建
		* `var myArray=["Hello","iwen","ime"];`
	2. 数组的访问
		* 通过指定数组名以及索引号码(下标从0开始)，可以访问某个特定的元素
	3. 常用方法
		* concat();合并数组
		* sort();排序
		* push();末尾追加元素
		* reverse();数组元素翻转
4. Math对象
	1. 常用方法
		* round():四舍五入;例如Math.round(2.5)等于3
		* random();返回0~1之间的随机数;例如parseInt(Math.random()*10);
		* max();返回最高值
		* min();返回最低值
		* abs();返回绝对值

## 浏览器对象
1. Window对象
	* window对象时BOM的核心，window对象指当前的浏览器窗口。所有JavaScript全局对象，函数以及变量均自动成为window对象的成员；全局变量是window对象的属性，全局函数是window对象的方法，甚至HTML DOM的document也是window对象的属性之一
	* window.innerHeight:浏览器窗口的内部高度
	* window.innerWidth:浏览器窗口的内部宽度
	* window.open("url"，“windowname”，“style”):打开新的网页
2. 计时器
	1. 方法
		1. setInterval();间隔指定的好描述不同的执行指定的代码
		2. clearInterval();停止setInterval()方法执行的函数代码
		3. setTimeout();暂停指定的毫秒数后执行指定的代码
		4. clearTimeout();停止之慈宁宫setTimeout()方法的函数代码
3. History对象
	1. history.back()与在浏览器中点击后退按钮相同
	2. history.forward()与在浏览器中点击向前按钮相同
	3. history.go()进入历史中的某个页面
4. Location对象
	1. location对象用于获得当前页面的地址(URL)，并把浏览器重定向到新的页面
	2. 属性与方法
		1. location.hostname返回web主机的域名
		2. location.pathname返回当前页面的路径和文件名
		3. location.port返回web主机的端口
		4. location.protocol返回所使用的web协议(http://或https://)
		5. location.href返回当前页面的URL
		6. location.assign()加载新的文档
5. Screen对象
	1. 属性
		1. screen.availWidth可用的屏幕宽度
		2. screen.availHeight可用的屏幕高度
		3. screen.Height屏幕高度
		4. screen.Width屏幕宽度

## 面向对象
```js 使用闭包以及function来模拟类
(function () {
    function People(name, age) {
        this._name = name;
        this._age = age;
    }

    People.prototype.say = function () {
        alert("People:Hello " + this._name + "," + this._age + " years old");
    }

    window.People = People;
}());

(function () {
    function Student(name, age, grade) {
        this._grade = grade;
        this._name = name;
        this._age = age;
    }

    Student.prototype = new People(this._name,this._age);
    var superSay = Student.prototype.say;
    Student.prototype.say = function () {
        superSay.call(this);
        alert("Student:Hello " + this._name + "," + this._age + " years old" + ",Grade: " + this._grade);
    }

    window.Student = Student;
}());

var stu = new Student("morris",20,"one");
stu.say();
```

## AJAX
1. AJAX(Asynchronous Javascript And XML)
2. 编程模板
	1. 创建XMLHttpRequest对象
	2. open操作初始化请求信息
	3. 监听事件处理响应结果
	4. send操作发出请求
3. 创建各浏览器兼容的XMLHttpRequest对象
```JS
function creatXHR() {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            xhr = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
            try {
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {

            }
        }
    }
    return xhr;
}
```
4. 发送请求信息
	1. get方法
		* `xhr.open("GET","http://test/keyword/hit?keyword=c",true);`
		* `xhr.send();`
	2. post方法
		* `xhr.open("POST","http://test/keyword/hit",true);`
		* `xhr.send("keyword=c")`;
5. 设置请求头信息
	1. `xhr.setRequestHeader("Content-Type","application/json");`
	2. `xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");`
6. 响应的接收与请求
```JS
xhr.onreadystatechange = function(e){
	if(xhr.readyState ==4 && xhr.status == 200){
		console.log(xhr.responseText);
		console.log(xhr.responseXML);
		console.log(xhr.getAllResponseHeaders());
		console.log(xhr.getResponseHeader("Content-Type"));
		console.log(xhr.status);
		console.log(xhr.statusText);
	}
}
```
7. 将Json字符串转换成Json对象：
	1. JSON.parse(xhr.responseText);
	2. eval(xhr.responseText);

## 设计模式
1. 设计原则
	1. 开闭原则：对扩展开放，对修改关闭
	2. 里氏转换原则：子类继承父类，单独调用完全可以运行
	3. 依赖倒转原则：引用一个对象，如果这个对象有底层类型，直接饮用底层
	4. 接口隔离原则：每一个接口应该是一种角色
	5. 合成/聚合复用原则：新的对象应使用一些已有的对象，使之成为新对象的一部分
	6. 迪米特原则：一个对象应对其他对象有尽可能少的了解
2. 单例模式


## jQuery
1. jQuery库可以通过一行简单的标记被添加到网页中
2. jQuery是一个JavaScript函数库
3. jQuery库包含的功能:
	1. HTML元素选取
	2. HTML元素操作
	3. CSS操作
	4. HTML事件函数
	5. JavaScript特效和动画
	6. HTML DOM遍历和修改
	7. AJAX
	8. Utilities
4. 从CDN中载入jQuery，例如：http://libs.baidu.com/jquery/1.10.1/jquery.min.js
5. 基础语法：
	1. $(selector).action()
		* 美元符号定义jQuery
		* 选择符selector“查询”和“查找”HTML元素
		* jQuery的action()执行对元素的操作
		* 例如：
			* $(this).hide()隐藏当前元素
