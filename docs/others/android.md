title: Android Introduction
tags:
  - Android
categories:
  - Mobile
author: suda-morris
date: 2016-01-20 18:01:40 +0800
---
## Android系统架构图
![Android系统架构](http://i.imgur.com/fNWm4KQ.png)

1. 应用程序框架
	1. Activity Manager：管理各个应用程序生命周期以及通常的导航回退功能
	2. Window Manager：管理所有的窗口程序
	3. Content Provider：使得不同应用程序之间存取或者分享数据
	4. View System：构建应用程序的基本组件
	5. NotificationManager：使得应用程序可以在状态栏中显示自定义的提示信息
	6. Package Manager：Android系统内的程序管理
	7. TelephonyManager：管理所有的移动设备功能
	8. Resource Manager：提供应用程序使用的各种非代码资源，如本地化字符串、图片、布局文件、颜色文件等
	9. LocationManager：提供位置服务
	10. XMPP Service：提供GoogleTalk服务
2. 系统运行库分成两个部分，分别是系统库和Android运行时。
	1. 系统库是应用程序框架的支撑，是连接应用程序框架层与Linux内核层的重要纽带。
		1. Surface Manager：执行多个应用程序的时候，负责管理显示与存取操作间的互动，另外也负责2D绘图与3D绘图进行显示合成
		2. Media Framework：多媒体库，基于PacketVideo OpenCore；支持多种常用的音频、视频格式录制和回放，编码格式包络MPEG4、MP3、H.264、AAC、ARM
		3. SQLite：小型的关系型数据库引擎
		4. OpenGL|ES：根据OpenGLES1.0API标准实现的3D绘图函数库
		5. FreeType：提供点阵字与向量字的描绘与显示
		6. WebKit：一套网页浏览器的软件引擎
		7. SGL：底层的2D图形渲染引擎
		8. SSL:在Android上通信过程中实现握手
		9. Libc：从BSD继承来的标准C系统函数库，专门为基于embedded linux的设备定制
	2. Android运行时，程序在Android运行时中执行，其运行分为核心库和Dalvik虚拟机两部分
		1. 核心库：核心库提供了Java语言API中的大多数功能，同时也包含了Android的一些核心API，如android.os、android.net、android.media等等
		2. Dalvik虚拟机：Android程序不同于J2ME程序，每个Android应用程序都有一个专有的进程，并且不是多个程序运行在一个虚拟机中，而是每个Android程序都有一个Dalvik虚拟机的实例，并在该实例中执行。Dalvik虚拟机是一种基于寄存爱的Java虚拟机，而不是传统的基于栈的虚拟机，并进行了内存资源使用的优化，以及支持多个虚拟机的特点。需要注意，不同于J2ME，Android程序在虚拟机中执行的并非编译后的字节码，而是通过转换工具dx将java字节码转换成dex格式的中间码

## Adnroid UI基础
1. Android UI由View和ViewGroup组成，ViewGroup是不可见的，用于组织和排版View和ViewGroup。View显示用户内容，以及相应用户的操作。Android UI可以在code中生产，不过更加方便的方式是在Android的XML文件中定义UI
2. 可以通过2种方式定义界面结构，一种是在XML中定义视图结构，另一种是在运行时动态创建视图结构，
	1. 通过XML定义视图结构，可以有效做到代码与界面的分离，并且提高界面的可读性。XML的文件西部包含一个root，可以是View或者ViewGroup。在节点下面增加子界面的方式来构造界面结构
	2. 在编译阶段，所有的XML layout文件都会编译到一个统一的View资源里面，在需要使用layout资源的时候，需要将资源加载到程序中，一般做法是在Activity.onCreate()中做加载的资源操作
3. 每一个View或者ViewGroup都有一个ID属性，该属性由class View定义。其定义语法为：android:id="@+id/my_button"。
	1. @的意思是指示XML parser解析并且展开后面的内容，将其作为一个ID的资源
	2. +的意思是指示这是一个新的ID，需要将其加到资源定义文件R.java中去。有一些系统自定的ID，如果引用这些系统自定的ID，则不需要加+号，但是要加上包的命名空间，其定义非语法为：android：id=“@android：id/empty”
4. 在XML文件中，通常使用layout_something来定义View在ViewGroup中的位置。ViewGroup类会实现一个嵌套类来扩展ViewGroup.LayoutParms。这个内嵌的子类会定义类型来指定字View的位置和大小。每个view group一般都会包含width和height参数，因此每个在其内部的view都需要定义这两个属性。一般不会将其指定为某一个宽度或者高度，一般写为相对的，这样可以保证适用于多种屏幕大小的设备。其中，wrap_content会根据内容的大小来调节大小。fill_parent，最大化达到父几点所允许的，在API level8后名字改为match_parent
5. View作为一个几何图形，具有4个属性对应于它所属的容器，分别是left，top，width和height，每个属性的单位是pixel。参考API文档，可以很多函数获取位置以及View的大小信息。getLeft()，getTop(),getRight(),getBottom()。获取的值一本都是相对应与父节点的位置和大小信息。Padding是内容与View空间直接的间隔。View并未提供Margin属性，该属性一般由ViewGroup设置
6. 如果需要在界面上显示的内容是动态获取的话，可以使用Adapter和继承AdapterView的View来动态显示。Adapter是数据源和AdapterView之间的桥梁，由它从数据源获取数据，然后转换为一组实体，填充到View
7. 可以简单的使用继承自AdapterView的View来绑定Adapter，来获取外部数据源的数据。Android也提供了一些继承自Adapter的子类用于处理不同的数据形式来建立View，下面是三种比较常见的Adapter：
	1. ArrayAdapter，当数据源是一个数组的时候，可以使用这个Adapter，默认，ArrayAdapter在调用toString()后会为每个Item创建一个TextView
	2. SimpleCursorAdapter，如果数据源是来自于游标的时候，使用这个Adapter。使用这个Adapter的时候，需要指定Cursor的哪个行，哪个列插入Layout的View
8. 可以通过实现AdapterView.OnItemClickListener接口来让AdapterView响应点击事件

## Android开发中高效的数据结构
1. SimpleArrayMap与ArrayMap
	1. 实质上ArrayMap继承自SimpleArrayMap，主要是为了实现像HashMap一样的api方法，让习惯使用HashMap的开发者感觉不到差异，本质上是SimpleArrayMap+Map的再封装。一般来说使用这两个类来代替HashMap，因为它们比HashMap更加高效，也对内存进行了优化
2. SparseArray与SparseArrayCompat和LongSparseArray
	1. 这3个类中，前2个基本上是同一类，只不过第二个类有removeAt方法，第三个是Long类型的。这3个类也是用来代替HashMap，只不过它们的键的类型是整形Integer或者Long类型，在实际开发中，如月份缩写的映射，或者进行文件缓存映射，viewHolder都特别适用
3. AtomicFile
	1. AtomicFile首先不是用来代替File的，而是作为File的辅助类存在，AtomicFile的作用是实现事务性原子操作，即文件读写必须完整，适合多线程中的文件读写操作

## Intent
1. Intent是不同组件中提供运行时绑定的对象。Intent代表一个应用“想去做什么事情”，你可以用它做各种各样的任务，不过大部分的时候他们被用来启动另一个Activity。
2. 在Activity之间传递数据包Bundle
```java
//发送端
Bundle b = new Bundle();
b.putString("name","morris");
b.putInt("age",20);
intent.putExtras(b);
//接收端
Bundle data = intent.getExtras();
String name = data.getString("name");
int age = data.getInt("age");
```
3. 在Activity之间传递值对象
```java
/*方法1，使用Java的序列化，效率比较低*/
//前提要求User类实现Serializable接口
//发送端
intent.putExtra("user",new User("name",20));
//接收端
User user = (User)intent.getSerializableExtra("user");

/*方法2，使用Android的Parcelable，效率比较高*/
//前提要求User类实现了Parcelable接口,并且重写了writeToParcel方法来手动实现序列化
//在User类中实现方法
@Override
public void writeToParcel(Parcel dest,int flags){
	dest.writeString(getName());
	dest.writeInt(getAge());
}
//在User类中实现常量对象CREATOR
public static final Creator<User> CREATOR = new CREATOR<User>(){
	@Override
	public User createFromParcel(Parcel source){
		return new User(source.readString(),source.readInt());
	}

	@Override
	public User[] newArray(int size){
		return new User[size];
	}
}
//发送端
intent.putExtra("user",new User("name",20));

//接收端
User user = intent.getParcelableExtra("user");
```
4. 获取Activity的返回参数
```java
//发送端
startActivityForResult(intent,requestCode);

@Override
protected void onActivityResult(int requestCode, int resultCode,Intent data){
	super.onActivityResult(requestCode,resultCode,data);
	//ToDo
}
//接收端
setResult(resultCode,intent);
finish();
```
5. 隐式Intent
	1. 在AndroidManifest文件中，为activity添加<intent-filter>标签，并为其指名category和action
```
	<category android:name="android.intent.category.DEFAULT"/> //表示该intent-filter的行为方式是activity
	<action android:name="字符串A"/>
```

	2. 然后在创建Intent实例的时候把“字符串A”传入构造函数
	3. 一般来说，字符串A约定的格式为：包名.intent.action.类名
	4. 通过这种方式能够访问其他应用中的activity，但是如果在activity的标签中指名`android:exported="false"`的话，别的应用便无法访问该activity

## Activity的启动模式
1. 在AndroidManifest文件中，为activity添加参数：android:lanuchMode="standard"。在standard启动模式中，所有实例放入同一个任务栈，因此支持后退键导航
2. 在AndroidManifest文件中，为activity添加参数：android:lanuchMode="singleTop"。singleTop模式和standard模式都会将intent发送给新的实例，不过，singleTop要求如果创建intent的时候栈顶已经有了要创建的Activity的实例，则将intent发送给该实例，而不创建新的实例。singleTop模式，可用来解决栈顶多个重复相同的Activity的问题。如果是A activity跳转到B activity，在跳转到A activity，行为就和standard模式一样了，会在B activity跳转到A activity的时候创建A activity的新实例，因为当时的栈顶不是A activity实例。
3. 在AndroidManifest文件中，为activity添加参数：android:lanuchMode="singleTask"。当intent到来，需要穿件singleTask模式Activity的时候，系统会检查任务栈里面是否已经有该Activity的实例，如果有直接将intent发送给它。
4. 在AndroidManifest文件中，为activity添加参数：android:lanuchMode="singleInstance"。**一个任务栈只包括一个activity**。比如有A，B，C三个Activity，其中B为sigleInstance模式，他们之间的跳转关系是A->B->C，现在在C中按下返回键，由于B位于独立的task中，它不属于C的上下文activity，所以此时直接返回到A中。

## Get a string resource from you app's Resources
> String hello = getResources().getString(R.string.hello_world);

## Toast使用方法
> Toast.makeText(activity对象，“显示内容”，Toast.LENGTH_SHORT).show();

## 适配不同的屏幕
1. 安卓设备的屏幕的分类指标：大小(size)和分辨率(density)
2. 有四种size：small，normal，large，xlarge
3. 有四种density：low（ldpi），medium（mdpi），high（hdpi），extra high（xhdpi）
4. 每份图片需要四种分辨率的备份，比如，如果你为xhdpi设备生成一张200X200的照片，同样，你需要为hdpi设备生成150X150的照片，为mdpi设备生成100X100的照片，为ldpi设备生成75X75的照片
	1. xhdpi：2.0
	2. hdpi：1.5
	3. mdpi：1.0（baseline）
	4. ldpi：0.75
5. 一般来说，ldpi的素材是可以不需要的，因为如果你提供了hdpi的素材，系统会自动将它缩小一半来适应ldpi的设备

## Activity的生命周期
![Activity生命周期](http://i.imgur.com/gzlBPwv.png)

1. onPause主要完成的工作（为了快速切换到下一个Activity，这个函数里面的操作内容应该尽量简单些）
	1. 停止动画或者其他正在消耗CPU的动作
	2. 提交未保存的变化，比如草稿邮件
	3. 释放系统资源，包括broadcast receiver，传感器句柄等
2. onStop函数用来执行占用CPU大的shut-down操作，比如往数据库中写入数据

## Context
1. 它是用来访问全局信息（比如，应用程序的资源）的接口，一些常用的资源都会实现Context，这样就可以方便访问资源
2. System.out.println(R.string.hello_world)等同于System.out.println(getContext().getResources().getText(R.string.hello_world));

## Application
1. 安装一个app应用后可以在桌面上显示多个应用图标(即同一个应用程序有多个主Activity)，那是因为在Manifest文件中设置了多个activity的category为android.intent.category.LAUNCHER，action为android.intent.category.LAUNCHER。但是这几个应用同属于一个Application，表现为在Manifest文件中，这些activity在同一个application标签下。
2. 在Manifest文件中，为application标签设置属性name,其值为一个继承自Application的某个自定义类，这样在任意一个activity中可以通过getApplicationContext来获取该自定义Application类的实例。从某种意义上来说，该自定义Appliacation类中的资源可以更加方便的为全局共享，里面可以存放一些全局的逻辑资源（区别于UI的资源）
3. Application的生命周期相关的方法
	1. onCreate，创建Application的时候调用，先于activity的onCreate
	2. onTerminate，结束后调用
	3. onLowMemory，低内存时候调用
	4. onTrimMemory，操作系统内存整理的时候调用
	5. onConfigurationChanged，配置改变的时候调用

## Service
1. 启动服务：startService，service内部会执行onStartCommand
2. 停止服务：stopService
3. 绑定服务：bindService
4. 解绑服务：unbindService
5. 当activity与service绑定后，如果activity退出，响应的service也会停止。即service的生命周期伴随着activity的存在于消亡。若是是使用startService来启动service的话，service的生命将会独立于activity，只有通过调用stopService才能将其停止。当startService与bindService都调用了的话，若想退出服务，unbindService与stopService都必须执行
6. 同一个service只会创建1次

## 普通辅线程不允许修改UI线程中的资源！

## AIDL(Android Interface Definition Language)
