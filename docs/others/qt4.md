title: QT4 Basic
tags:
  - Qt4
categories:
  - GUI
author: suda-morris
date: 2015-07-19 20:52:44
---
## Qt核心模块
Qt是一个大库，由数个较小的库或者模块组成，其中最为常见的有如下这些，除了core和gui，其余模块都需要在qmake的工程文件中启用：

1. core：包括QObject，QThread，QFile，Qvariant等等
2. gui：所有从QWidget派生的类外加一些相关的类
3. xml：用于解析和序列化XML
4. sql：用于与SQL数据库通信
5. phonon：用于播放多媒体文件
6. webkit：用于使用一种嵌入式web浏览器，QtWebkit

## 工程文件.pro
1. 对于Qt程序，程序不必编写Makefile文件，Qt提供了一个qmake工具，它会根据工程文件来产生对应的Makefile文件。亦可以用qmake -project命令产生一个简单的工程文件，当执行这个命令的时候，qmake会将当前工作目录下的全部源文件(*.cpp)作为SOURCES列出来，而将该目录下的全部头文件(*.h)作为HEADERS列出来。最终生成的可执行文件的名称由TARGET变量指定，其默认为工程的名称
2. TEMPLATE=app，表明qmake应该以一个适合建立这个应用的模板化的Makefile开始，如果这个工程文件用于建立库，则应当使用语句TEMPLATE=lib，以表明应使用Makefile库模板。第三种可能是源代码文件分布在多个子目录下，而每一个子目录下的文件都具有自己的工程文件，这种情况下，位于父目录的工程文件中应该包含语句TMPLATE=subdirs，这会导致在父目录和每一个子目录下都生成Malefile
3. 添加库：LIBS += -Lpathtolibs
4. CONFIG += console表示是控制台程序
5. 当编写并测试完库之后，在编译链接过程结束后它将被安装到由qmake变量DESTDIR指定的目录下。例如，dataobjects库的工程文件包含如下相关的行：
	* TEMPLATE = lib
	* DESTDIR = pathto_install_libs
6. 对于库模板，qmake将产生一个包含install目标的Makefile，这样，在成功编译链接之后执行命令make install将会把这个库复制到某个特定的位置

## Qt中获取命令行参数
* QCoreApplication app(argc,argv);
* QStringList arglist = app.arguments();
* arglist.size等于命令行参数的个数

## Qt中的字符串
1. const char*，主要用于与C语言库的接口
2. 来自C++标准库的string，任何地方都可以使用这种类型
3. QString，优于STL中的字符串类型，有着更加丰富的API而且更加容易使用。
4. 在Qt中使用类似于iostream中的cin，cout：
	* #include <QString\>
	* #include <QTextStream\>
	* QTextStream cout(stdout)
	* QTextStream cin(stdin)
	* cin.readLine()
5. sizeof(QString)=4,sizeof(QChar)=2,sizeof(QDate)=4,sizeof(qint32)=4,sizeof(qint64)=8;QString是一个使用动态内存的复杂类，因此必须调用length()来获得字符串中QChar的数量。由于QChar的大小为char的两倍，所以在计算内存中QString中实际大小时需要将长度乘以2，在运行时，QString能够与具有同一个值的另一个字符串共享内存


## 去掉最大、最小、关闭按钮
> setWindowFlags(windowFlags()|Qt::FramelessWindowHint|Qt::WindowTitleHint);

## 使用中文
> 1. 下载qpf格式的font_wenquanyi字体，将下载的字库文件复制到qt安装目录的lib/fonts子目录下

```
\#include <QTextCodec>
	QApplication a(argc, argv);
    QTextCodec::setCodecForLocale(QTextCodec::codecForName("UTF-8")); 	//中文支持
    QTextCodec::setCodecForTr(QTextCodec::codecForName("UTF-8"));       //支持Tr中文
    QTextCodec::setCodecForCStrings(QTextCodec::codecForName("UTF-8")); //支持中文文件名显示
    QFont font;
    font.setPointSize(160); 											//实际上是16的字号，但设成16却不行
    font.setFamily(("wenquanyi"));
    font.setBold(false);
    a.setFont(font);
```

## 隐藏鼠标箭头
> 1. 对于整个程序: QApplication::setOverrideCursor(Qt::BlankCursor);
> 2. 对单个控件：lable->setCursor(Qt::BlankCursor);//隐藏鼠标  label->setCursor(Qt::ArrowCursor);//显示正常鼠标

## QStringList与迭代
> 1. QStringList实际上就是一个QList<QString>,此外，QStringList还具有一些特别针对字符串的方便函数，例如indexOf(),join()和replaceInStrings()。利用split()函数和join()函数，在列表与字符串之间进行转换相当简单
> 2. QStringList对象可以调用方法takeFirst()来依次获得列表中的字符串对象
```C
QString winter = "December,January,February";
QString spring = "March,April,May";
QString summer = "June,July,August";
QString fall = "September,October,November";

QStringList list;
list << winter;
list += spring;
list.append(summer);
list << fall;

QString allmonths = list.join(",");	/*从列表到字符串，以逗号为分隔符*/
QStringList list2 = allmonths.split(","); /*从字符串到列表，以逗号为分隔符*/

foreach(const QString &str,list){ /*Qt foreach循环*/
	//TODO
}

for(QStringList::iterator it = list.begin(); it != list.end(); ++it){
	QString current = *it;
	//TODO
}

QListIterator<QString> itr(list2);
while(itr.hasNext()){
	QString current = itr.next();
	//TODO
}
```

## QDir，QFileInfo和QDirIterator
```C 利用QDir类和QFileInfo类获取目录的内容列表以及关于每一个项的信息
void recurseAddDir(QDir d,bool recursive=true,bool symlinks=false){
	d.setSorting(QDir::Name);
	QDir::Filters df = QDir::Files | QDir::NoDotAndDotDot;
	if(recursive) df |= QDir::Dirs;
	if(not symlinks) df |= QDir::NoSymLinks;
	QStringList qsl = d.entryList(df,QDir::Name|QDir::DirsFirst);

	foreach(const QString &entry,qsl){
		QFileInfo finfo(d,entry);
		if(finfo.isDir()){
			QDir sd(finfo.absoluteFilePath());
			recurseAddDir(sd);
		}else{
			if(finfo.completeSuffix()=="mp3"){
				addMp3File(finfo.absoluteFilePath());
			}
		}
	}
}
```

```C 使用QDirIterator实现相同功能
QDir dir = QDir::current();
QDirIterator qdi(dir.absolutePath(), QStringList() << "*.mp3", QDir::NoSymLinks | QDir::Files, QDirIterator::Subdirectories);
while(qdi.hasNext){
	addMp3File(qdi.next());
	//TODO
}
```

## QDate
> 1. static QDate currentDate = QDate::currentDate();

## Qt中字符串的数据流操作
```C
QString Student::toString() const{
	QString retval;
	QTextStream os(&retval);
	os << "name:" << m_Name << ";ID:" << m_StudentID;
	return retval;
}
````

> qDeleteAll(container)只对包含指针的容器有意义，该函数将释放所有对象，但并不删除容器中的指针；删除容器中的指针需要调用容器的clear()函数

## 容器（Qt容器被定义成模板类）
> 1. QList<T>是用数组实现的，数组的两端都有预分配的空间。它针对按索引的随机访问以及少于1000项的列表进行了优化。对于prepend()和append()这样的操作，它有很好的性能表现
> 2. QStringList是派生自QList<QString>的一个便利类
> 3. QLinkedList<T>针对迭代器的顺序访问以及快速、常量时间的列表插入操作进行了优化，但排序和搜索比较缓慢。它提供多个便利函数来处理那些经常用到的操作
> QVector<T>以连续的内存位置保存数据，并针对按索引的随机访问进行了优化。通常而言，QVector对象都是用其初始大小进行构造的，在其两端都不存在预先自动分配的内存空间，所以中间掺入、末端插入以及前端插入都是耗时的
> 4. QStack<T>是派生自QVector<T>的public类，所以QVector类的public接口可以用于QStack对象。不过，push(),pop()以及top()函数采用的是后入先出(LIFO)的语法
> 5. QMap<Key,T>是一个有序的关联容器，它保存的是键/值对，其作用是根据键来快速找到对应的值。它也被设计成支持适量的快速插入操作和删除操作。它将键有序排列，以便能够快速搜索和快速缩小搜索范围，采用的是一个跳跃列表字典，这个字典在概率上是平衡的并且高效的利用了内存。键的类型必须是operator<()和operator==()
> 6. QHash<Key,T>也是一个关联容器，它使用哈希表来进行键的查找。它提供快速的查找(键精确匹配)和插入操作，但其搜索速度较慢，且没有排序功能。键的类型必须是operator==()
> 7. QMultiMap<Key,T>是QMap的一个子类，而QMultiHash<Key,T>是QHash的一个子类。这两个类是的一个键可以与多个值关联
> 8. QCache<Key,T>是一个关联容器，它对最近使用过的项提供最快速的访问，并会根据几个开销函数的结果自动移除哪些不常用的项
> 9. QSet<T>用QHash保存T类型的值，QHash中的键位于T中，而其中的哑值与每一个键相关联。这种安排可优化查找和插入操作。QSet中的几个函数用于常规的集合操作。它的默认构造函数会创建一个空集合
>
> **用于模板容器类的类型参数T，或者用于关联容器的键类型都必须为可赋值数据类型，即值类型。这意味着T必须具有public类型的默认构造函数、拷贝构造函数和赋值运算符。基本类例如int，double，char和指针都是可赋值的，有些Qt类型是可赋值的，例如QString，QDate，QTime。QObject以及派生自QObject的类型都是不可赋值的，如果需要使用某种不可赋值类型的对象，则可以定义一个指针容器，例如QList<QFile\*>**

## QFile
```C
QFile outf(("filename");
outf.open(QIODevice::WriteOnly);
QTextStream outstr(&outf);
outstr << "content";
outf.close();
```

## 序列化器模式：QTextStream和QDataStream
> 1. 序列化器是一种只负责读取或者写入对象的对象，Qt的QTextStream序列化器用于读写人可读的文件，而QDataStream序列化器用于读写结构化的二进制数据。这些类都是用序列化器模式实现的
> 2. 利用QDataStream就可以序列化和解序列化QVariant支持的全部类型，包括QList，QMap，QVector以及其他类型。

```C
QFile textFile("playlist1.tsv");
QFile binaryFile("playlist1.bin");
QTextStream textStream；
QDataStream dataStream；
if(textFile.open(QIODevice::ReadOnly)){
	textStream.setDevice(&textFile);
}
if(binaryFile.open(QIODevice::WriteOnly)){
	dataStream.setDevice(&binaryFile);
}
QList<MetaDataValue> values;
while(!textStream.atEnd()){
	MetaDataValue mdv;
	textStream >> mdv;
	values << mdv;
	dataStream << mdv;
}
```

## QObject
> 1. QObject是Qt库中许多重要的类的基类，如QEvent，QApplication，QLayout和QWidget。
> 2. QObject使基于事件的编程成为了可能，其中用到了QApplication和Qt的事件循环
> 3. QObject没有公有的拷贝构造函数或复制赋值运算符。QObject类定义的结尾处有一个宏Q_DISABLE_COPY(QObject)，它显示地确保任何QObject都不能被复制。QObject不是设计用于复制的，QObject会用来代表具有唯一身份的对象。这种不带拷贝构造函数策略的一个直接后果就是永远无法通过值传递方式向函数传递OBject。
> 4. QObject及其派生类的单参数构造函数应当予以显式声明explicit，以免意外的隐式转换的发生。
> 5. 每个QObject都可以有（至多）一个父QObject，且可以拥有任意数量的子QObject。
> 6. 每个QObject都将指向各个子对象的指针存放在一个QObjectList中，在调用QObject的析构函数时会自动销毁该对象的子对象
> 7. 通常而言，没有父对象的QObject应当在程序栈区(stack)中进行定义，而那些有父对象的QObject则应当在堆区(heap)动态创建出来，这样可有助于确保发生正确的析构操作。
> 8. QObject有一个成员函数，可以返回一个指向主对象中全部子对象的指针列表：const QObjeectList& QObject::children() const
> 9. QObject还提供了两个名称为findChildren()的重载(递归)每个都会返回一个满足特定条件的子对象列表：QList<T> parentObj.findChildren<T>(const QString& name=QString()) const 该函数返回一个类型为T的子对象列表，其对象名与name相等。如果name是空字符串，那么将会起到一个类过滤器的作用，返回结果是一个QList，其中包含指向全部子对象的指针，而这些子对象都可以通过类型转换变成类型T的对象

```C
QList<Customer*> custlist = parent.findChildren<Customer*>();
foreach (const Customer* current,custlist){
	qDebug() << current->toString();
}
```

## QEvent
> 1. QEvent类封装了底层事件的概念。QEvent类是若干特定事件类的基类，例如QActionEvent,QFileOpenEvent,QHoverEvent,QInputEvent,QMouseEvent等。QEvent对象可以由窗口系统创建以响应用户的动作(例如，QMouseEvent)或按照指定的时间间隔(QTimerEvent)完成创建，也可以由应用程序显式地创建。成员type()会返回一个美剧，其中含有近百个特定的值，以区分不同种类的各式事件(例如,关闭、DragEnter、DragMove、放下、输入、GrabMouse、HoverEnter、KeyPress、MouseButtonDblClick、MouseMove、Resize)
> 2. 一个典型的Qt程序会创建对象，连接各个对象，然后再告诉应用程序开始发送exec()，在运行时，应用程序就进入了事件循环，各个对象之间可以通过各种方式相互发送消息。
> 3. 只有在事件循环，特别是QApplication::exec()进入的事件循环中，信号才能发送到槽上。这是因为信号和槽在其外表之下是使用事件循环来传递消息的。
> 4. QObject支持一些普通C++对象通常没有的特性：信号和槽，元对象、元属性、元方法，qobject_cast
> 5. 元对象编辑器，即moc，会针对每个使用Q_OBJECT宏的QObject派生类生成额外的函数，生成的代码可以在名称为moc_filename.cpp的文件中找到。

## 信号和槽
> 1. 信号是在类定义中给出的类似于void函数声明的一种消息。它有参数列表却没有函数体。信号时一个类的接口的一部分，它看起来想函数，但不用同样的方式进行调用---它被此类的对象发射
> 2. 槽通常是一个void成员函数，它可以像普通的成员函数一样进行调用，或者可以由QMetaObject系统进行间接调用
> 3. 连接语句的语法：bool QObject::connect(senderQObjectPtr,SIGNAL(signalName(argumentList)),receiverQObjectPtr,SLOT(slotName(argumentList))optionalConnectionType);optionalConnectionType让你可以明确说明，你是否希望从发射点处同步(阻塞)或者非同步(排队)地调用目标槽
> 4. 如果有多个信号连接到同一个槽上且需要知道是那哟个QPbject发射的信号，则可以在该槽中调用sender(),它会返回一个指向那个对象的指针

## 堆还是栈
> 一般情况下，没有父对象的QObject应当在栈上创建，或者定义成另一个类的子对象。有父对象的QObject不应该在栈上创建，因为那样的话，它有可能会被删除两次。
> 不推荐直接删除QObject，在带有事件循环的程序中，最好利用QObject::deleteLater()来删除QObject。这样做，可以在应用程序处理事件并在当前槽返回之后就安排该对象的销毁。希望能够在槽内删除信号的sender(),这么做实际上是必须的

## QWidget和其余GUI开发中常用的类
> 1. QWidget是一个采用了多重继承的类，首先，QWidget是一个QObject，因此它可以有父对象、信号、槽以及可受管理的子对象。同时QWidget也是一个QPaintDevice，这个类是所有可在屏幕上进行绘制的对象的基类
> 2. Qt数据类型——QPoint,QSize,QColor,QImage和QPixmap是在处理图形对象时常用到的类型
> 3. 布局——这些类能够动态地管理Widget的布局，其中有些事常用的特殊布局，包括QHBoxLayout，QVBoxLayout，QGridLayout，QFormLayout等
> 4. 模型——QAbstractItemModel及其各个派生类，如QAbstractListModel和QAbstractTableModel，外加一些已有的可继承实体类，如QSqlQueryModel和QFileSystemModel，都是Qt模型/视图框架中的一部分，该框架内置将一个模型和其他不同视图相连接的机制，以便对一个组件的修改可以自动变换到其他组件上
> 5. 控制类——QApplication和QAction两者都是管理GUI应用程序控制流的对象。QItemDelegate用作模型和视图之间的控制器

## 对话框
> 1. QDialog是Qt所有对话框的基类。对话框窗口可以是模态(modal)对话框也可以是非模态(nonmodal)对话框。
> 2. 当程序调用静态的便利函数"QMessageBox::"或者"QFileDialog::"时，弹出的对话框就是模态对话框。当模态对话框显示在屏幕上时，它会冻结同一应用程序中的其他所有可见窗口的输入功能。用户解除模态对话框后，与应用程序的常规交互才可以继续下去。QDialog::exec()是将模态对话框放到屏幕上的另一种方式。当用户完成了所需的响应后，对话框就可以返回数据，也可以返回对话框代码(QDialog::Accepted或者QDialog::Rejected);
> 3. 可以像QWidget一样通过show()显示一个QDialog，在此情况下，对话框是非模态的，用户也就可以与应用程序的其他窗口继续交互。

```C
QApplication app(argc,argv);
QProgressDialog nonModal;
nonModal.setWindowTitle("Non Modal Parent Dialog");
nonModal.show();
nonModal.connect(&nonModal,SIGNAL(finished()),&app,SLOT(quit()));
```

## 图标、图像与资源
> 1. Qt提供了至少两种方式来获得标准的图标。一种方式来自于桌面样式的QStyle::standardIcon()，另一种则来自插件型图标主题:QIcon::fromTheme()
> 2. 把所需的二进制数据文件作为资源附加到工程中会让工程更为健壮。源代码无须为资源文件使用一些不可移植的路径名。要引用一个存储成资源的文件，可以使用在.rcc文件中指定的别名并在前面带一个前缀":/"。于是，每个资源好像位于一个私有虚文件系统中，其根为":/"。然而，得到这些好处是需要付出代价的，可执行文件会更大，程序也会需要更多的内存
> 3. 有3个Qt类可以简化处理图片：
	* QImage——用于离屏操作，输入输出操作，并可直接访问像素
	* QPixmap——用于在屏幕上进行绘制并优化，仅用在主线程中
	* QIcon——用于视频内存的缓冲且经常用到，但仅用在主线程中
	* QPicture——存储绘制的操作而不是实际的位图图片

## 布局
> 1. 布局可以将它们的Widgets排列成如下几种形式：
	* 垂直型(QVBoxLayout)
	* 水平型(QHBoxLayout)
	* 网格型(QGridLayout)
	* 窗体型(QFormLayout)
	* 栈型，任何时候都只有一个窗件可见(QStackedLayout)
> 2. 可以使用addWidget()函数向QLayout添加窗件，当窗件添加到布局中时，它会称为拥有该布局的窗件的子对象。窗件永远不会称为布局的子对象
> 3. 为了能够顺利地管理其几何形状，每个QLayout对象都必须有一个父对象，这可以是一个QWidget，也可以是一个QLayout。可以在创建布局时通过向构造函数传递一个指向父窗件或者布局的指针来指定其父对象。当然，也可以先创建一个QLayout而不指定QLayout的父对象，这种情况下，可以稍后通过调用QWidget::addLayout()来指定其父对象
> 4. 布局可以拥有子布局，通过调用addLayout()函数，可以将一个布局添加为另外一个布局的子布局。如果布局的父对象是一个窗件，那么该窗件将再也无法称为另外一个布局的父对象
> 5. 不使用Qt设计师时，可以使用QLayout类的API来直接指定各个窗件之间的分割、伸展和支撑
	* addSpacing(int size)会向布局的末尾添加固定数量的像素
	* addStretch(int stretch = 0)会添加数目不定的像素。此函数由一个最小的数目开始，然后逐渐扩展到使用所有的可用空间。如果在同一个布局中进行多次扩展，可以用此作为一个增长因子
	* addStrut(int size)讲给处置方向施加一个最小的数值(也就是，QVBoxLayout的宽度或者QHBoxLayout的高度)

## QTimer
> 1. QTimer对象是一个倒数计时器，以毫秒级时间间隔启动，当其到达零时会发出一个timeout()信号.QTimer可用来以规则的间隔来发射信号，或者如果singleShot属性已设置成true，则在给定的时间间隔后仅发射一次信号。QTimer有一个静态函数singleShot()，可以在给定的时间间隔后调用一次槽。如果倒数间隔设置成0，QTimer会在事件队列中的全部事件处理完后就立刻发出timeout()信号

```C
QTimer::singleShot(m_expInterval,this,SLOT(timerDisplayRandStr()));
```

## 绘制事件和画图
> 1. 一个Widget应当在其paintEvent()方法中执行适当的绘制操作。这是QWidget中唯一可以创建QPainter painter(this)的地方。有下面几个原因使得QPaintEvent可以被发送到QWidget上。
	1. 窗件是隐藏的，然后又显露了出来
	2. 窗件改变了大小或者进行了重新排布
	3. 调用了update()或者repaint()。repaint()在paintEvent()得到调用后才会返回。update()在QPaintEvent被放进事件队列后会立即返回
```C
void LifeWidget::paintEvent(QPaintEvent* evt){
	QPainter painter(this);
	if(!m_image.isNull()){
		painter.drawImage(QPoint(0,0),m_image);
	}
}
```

## QMainWindow
```C
class MyMainWindow:public QMainWindow{
	Q_OBJECT
public:
	explicit MyMainWindow(QWidget* parent=0);
	void closeEvent(QCloseEvent* event);
protected slots:
	virtual void newFile();
	virtual void open();
	virtual bool save();
}
```

## QAction
> 1. QAction从QObject派生而来，是用于用户选定动作的一个基类。它提供了丰富的接口，它还可以用于许多种动作中。QWidget接口使得每个窗件都可以维护一个QList<QAction*>。所有QWidget都可以拥有QAction，一些窗件借助上下文提供了QAction的清单，其他借助菜单栏。
> 2. QMenu是一个能够给QAction集合提供特殊视图的QWidget。QMenuBar是菜单的一个集合，常见于QMainWindow中。
> 3. 每次调用QMenu::addAction(text,target,slot,shortcut)函数，都会窗件一个未命名的QAction，并且会将其添加到这个QMenu上。然后会调用它的积累函数，QWidget::addAction(QAction*),这样把新建的QAction添加到用于上下文菜单的QMenu的QAction清单中。

## QSettings
> 1. QSettings会管理键/值对的永久映射关系，它是一个QObject，并且会使用一些与QObject相似的属性接口——setValue()和value()——来设置和获取它的值。这个类可以用来存储任何需要在多次执行之间进行记忆的数据
> 2. QSettings需要一个组织名和一个应用程序名，但当使用默认的构造函数时，QSettings会从QApplication中获得这些值。每个名称组合都会定义一个唯一的永久映射，这使得不会与其他命名的Qt应用程序产生冲突
> 3. 允许多个实例共享相同状态的类，可以看成是Monodtate模式的一种实现。拥有相同组织/应用程序名称的两个QSettings实例，可以访问同一个永久映射数据。这简化了应用程序从不同源文件访问公共设置值的过程。QSettings是Monostate模式的一种实现

## 剪切板
> 1. 每个Qt应用程序都可以使用qApp->clipboard()访问系统的剪贴板。剪贴板会保存带类型的数据(文本，图片，URL或者自定义数据)。要往剪贴板中放置数据，可以创建一个QMimeData，以一定的方式对数据进行编码，并且调用QClipBoard->setMimeData()。

```C
connect(qApp->clipboard(),SIGNAL(changed(QClipboard::Mode)),this,SLOT(clipboardChanged(QClipboard::Mode)));
```

## QImage
> 1. QImage在像素处理上得到了优化，QPixmap使用了视频存储器，它也是需要在屏幕上显示图片的多种窗件要用到的类。可以吧QImage转换成QPixmap并将其在QLabel进行显示
```C
int h(m_Image.height()),w(m_Image.width());
int r,g,b;
QRgb oldpix,newpix;
for(int y=0;y<h;y++){
	for(int x=0;x<w;x++){
		oldpix=m_Image.pixel(x,y);
		r=qRed(oldpix)*radj;
		g=qGreen(oldpix)*gadj;
		b=qBlue(oldpix)*badj;
		newpix=qRgb(r,g,b);
		m_Image.setPix(x,y,newpix);
	}
}
```

## 模板类
> 因为每个Q_OBJECT都需要通过moc为其生成代码，而且moc并未智能到知道如何生成模板类的特化，孤儿不允许使一个已经标记为Q_OBJECT的类再次成为模板类


##qSort
> 1. qSort()函数是一个使用堆分类算法进行实现的范型方法。qSort()可以应用到任何Qt容器，只要容器内的对象拥有公共接口operator<()和operator==()。基本数据类型的容器也可以使用此函数进行排序

## 反射与元对象
> 1. 所谓反射，就是指对象成员的自我检查，使用反射编程，就可以编写出通用的操作，可对具有各种不同结构的类进行操作。使用通用的值存储器QVariant，就可以按照一种统一的方式来对基本类型和其他普通类型进行操作
> 2. 所谓元对象就是描述另一个对象结构的对象。QMetaObject是元对象模式的一个Qt实现，它提供了一个QObject对象所拥有的属性和方法的信息。元对象模式有时也称为反射模式
> 3. 一个拥有元对象的类就可以支持反射。这是一个许多面向对象语言都具有的性质。虽然C++中不存在反射，但Qt的元对象编译器(moc)可以为QObject生成支持这种机制的代码
> 4. 只要满足一定条件(每个类都必须在头文件中定义，并且列举在工程文件的HEADERS中，同时此类的定义中还必须包括Q_OBJECT宏)，每个派生自QObject的类都会拥有一个有moc为其生成的QMetaObject。QObject拥有有个成员函数，它能够返回指向对象的QMetaObject的指针，这个函数原型是：QMetaObject* QObject：：metaObject() const[virtual]
> 5. 可以使用QMetaObject的下面这些方法来获取一个QObject的信息：
	* className(),它会将类的名称以const char*格式返回
	* superClass(),如果存在基类的QMetaObject，则返回其指针，如果不存在返回0
	* mathodCount(),返回类的成员函数的个数
> 6. 信号和槽机制同样需要依赖与QMetaObject
> 7. 通过使用QMetaObject和QMetaProperty就可以编写足够通用的代码来处理所有具有自我描述能力的类
> 8. 除了C++的RTTI运算符dynamic_cast和typeid之外，Qt还提供了两种运行时的类型识别机制：
	* qobject_cast
	* QObject::inherits()
> 9. qobject_cast是一个ANSI风格的类型转换运算符：DestType* qobject_cast<DestType*> (QObject* qoptr),如果转换失败返回NULL。qobject_cast实际是一个向下转换运算符，类似于dynamic_cast。拥有指向派生类的基类指针时，向下转换允许调用在基类接口中不存在的派生类方法。
> 10. 访问数据成员的方式：
	* 直接访问，通过经典的gettet/settet，速度快，更为有效
	* 间接访问，通过QObject/QMetaObject接口，可让代码复用性更好
> 11. 使用Q_PROPERTY宏来描述QObject的属性：Q_PROPERTY(type name READ getFunction [WRITE setFunction] [RESET resetFunction] [NOTIFY notifySignal] [DESIGNABLE bool] [SCRIPTABLE bool] [STORED bool]),例如：

```C customer-props.h
class Customer:public QObject{
	Q_OBJECT			//moc预处理类需要的宏
	Q_PROPERTY(QString id READ getId WRITE setId NOTIFY valueChanged);
	Q_PROPERTY(QString name READ getName WRITE setName NOTIFY valueChanged);
	Q_PROPERTY(QString address READ getAddress WRITE setAddress NOTIFY addressChanged);
	Q_PROPERTY(QString phone READ getPhone WRITE setPhone NOTIFY phoneChanged);
	Q_PROPERTY(QDate dateEstablished READ getDateEstablished);		//只读属性
	Q_PROPERTY(CustomerType type READ getType WRITE setType NOTIFY valueChanged);
public:
	enum CustomerType{
				Corporate,Individual,Educational,Government
					};												//枚举类型定义必须与Q_ENUMS宏的定义出现在同一类定义中
	Q_ENUMS(CustomerType);											//特殊的宏可以实现生成字符串到枚举之间的转换功能；必须在同一个类中
	explicit Customer(const QString name = QString(),QObject* parent = 0);//之所以声明为explicit，是因为不希望从QString转换到Customer时出现意外
	QString getId const{
		return m_id;
	}
	void setType(CustomerType newType);
	void setType(QString newType);
signals:
	void addressChanged(QString newAddress);
	void valueChanged(QString propertyName,QVariant newValue,QVariant oldValue=QVariant());
	void phoneChanged(QString newPhone);
	void typeChanged(CustomerType type);
private:
	QString m_id,m_name,m_address,m_phone;
	QDate m_date;
	CustomerType m_type;
}
```
```C customer-props.cpp
Customer::Customer(const QString name,QObject* parent):QObject(parent){
	setObjectName(name);
}
void Customer::setId(const QString& newId){
	if(newId != m_id){
		QString oldId = m_id;
		m_id = newId;
		emit valueChanged("id",newId,oldId);
	}
}
void Customer::setType(CustomerType theType){
	if(m_type != theType){
		CustomerType oldType = m_type;
		m_type = theType;
		emit valueChanged("type",theType,oldType);
	}
}
void Customer::setType(QString newType){
	static const QMetaObject* meta = metaObject();
	static int propindex = meta->indexOfProperty("type");
	static const QMetaProperty mp = meta->property(propindex);

	QMetaEnum menum = mp.enumerator();
	const char* ntyp = newType.toAscii().data();
	CustomerType theType = static_cast<CustomerType>(menum.keyToValue(ntyp));
	if(theType != m_type){
		CustomerType oldType = m_type;
		m_type = theType;
		emit valueChanged("type",theType,oldType);
	}
}
QString Customer::getTypeString() const{
	return property("type").toString();
}
```
> 可以通多下面的函数来获得任意属性的值：QVariant QObject::property(QString propertyName);
> QVariant是一个联合体的封装，其中包含了所有基本类型和所允许的全部Q_PROPERTY类型。QVariant有一个toString()函数能够为它支持的许多类型返回其QString表示。
> QVariant对象可以通过QMetaProperty::read()或者QObject::property()获得
> 同一类的所有对象会共享同一个metaObject，因而会有相同元属性组
```C
QString objTOString(const QObject* obj){
	QStringList result;
	const QMetaObject* meta = obj->metaObject();
	result += QString("class %1:public %2 {").arg(meta->className()).arg(meta->superClass()->className());
	for(int i=0;i<meta->propertyCount();++i){
		const QMetaProperty qmp=meta->property(i);
		QVariant value = obj->property(qmp.name());
		if(value.canConvert(QVariant::String)){
			result += QString("%1 %2=%3;")
			.arg(qmp.typeName())
			.arg(qmp.name())
			.arg(value.toString());
		}
	}
	result += "};";
	return result.join("\n");
}
```

## QMetaType
> 1. QMetaType是一个用于值类型的辅助类，对于60多种内置类型，QMetaType为每个类型ID关联了一个类型名，从而使构造和析构可以在运行时动态发生。有一个名称为QMetaType::Type的公共枚举，它有所有QVariant兼容类型的值。在QMetaType::Type中的枚举值与QVariant::Type中的枚举值一样
> 通过使用Q_ENUMS宏可以在QVariant系统中加入一些自定义的枚举类型。
> 使用Q_DECLARE_METATYPE(MyType)宏也有可能把自己的值类型加到QMetaType列表中。如果MyType有公共的默认复制构造函数和公共的复制构造函数以及一个公共的析构函数，Q_DECLARE_METATYPE宏使得它可用作QVariant中的自定义类型
> 要注册的元类型必须已经用Q_DECLARE_METATYPE声明过。模板函数qRegisterMetaType<T>()会注册类型T并返回由QMetaType使用的内部ID。这个函数有一个重载版本，qRegisterMetaType<T>(const char* name),它可以让你注册一个名称作为类型T的名称。对于这个函数的调用必须早早地出现在主程序中。

```C fraction.h
class Fraction:public QPair<qint32,qint32>{
public:
	Fraction(qint32 n=0,qint32 d=1):QPair<qint32,qint32>(n.d){}
}
Q_DECLARE_METATYPE(Fraction);
```
```C metatype.cpp
int main(int argc,char* argv[]){
	QApplication app(argc,argv);
	qRegissterMetaType<Fraction>("Fraction");
	Fraction twoThirds(2,3);
	QVariant var;
	var.setValue(twoThirds);
	Q_ASSERT(var.value<Fraction>() == twoThirds);

	Fraction oneHalf(1,2);
	Fraction threeQuarters(3,4);
	QList<Fraction> fractions;
	fractions<<oneHalf<<twoThirds<<threeQuarters;
	QFile binaryTestFile("testMetaType.bin");
	binaryTestFile.open(QIODevice::WriteOnly);
	QDataStream dout(&binaryTestFile);
	dout<<fractions;
	binaryTestFile.close();
	binaryTestFile.open(QIODevice::ReadOnly);
	QDataStream din(&binaryTestFile);
	QList<Fraction> frac2;
	din >> frac2;
	binaryTestFile.close();
	Q_ASSERT(fractions == frac2);
	creatTest();
}
void creatTest(){
	static int fracType = QMetaType::type("Fraction");
	void* vp = QMetaType::construct(fracType);
	Fraction* fp = reinterpret_cast<Fraction*>(vp);
	fp->first  =1;
	fp->second = 2;
	Q_ASSERT(*fp == Fraction(1,2));
}
```

## invokeMethod()
> 1. Qt把信号连接到槽需要一种机制：通过名称以类型安全的方式来间接调用这些槽，当调用槽时，实际是由invokeMethod()完成的。
> 2. 与QObject::connect()类似，invokeMethod()接受一个可选参数Qt::ConnectionType,该参数可让你来决定是要用同步调用还是要用异步调用。默认情况下是Qt::AutoConnection，表示发射者和接收者处于同一线程中时会同步执行一个槽
> 3. 要通过invokeMethod()向函数传递类型参数，可以用Q_ARG宏创建一些值，这样会返回一个QGenericArgument，它封装了单个参数的类型和值信息

```C
void AutoSaver::saveIfNecessary(){
	if(!QMetaObject::invokeMethod(parent(),"save")){
		qWarning()<<"AutoSaver:error invoking save() on parent";
	}
}
```
```C
QByteArray buffer=...;
const bool b = QMetaObject::invokeMethod(m_thread,"caculateSpectrum",Qt::AutoConnection,Q_ARG(QByteArray,buffer),Q_ARG(int,format.frequency()),Q_ARG(int,bytesPerSample));
```

## MVC设计模式
> 1. MVC由三类对象组成。模型是应用程序对象，视图是它的屏幕展示，控制器定义了用户界面对用户输入的反应行为。
> 2. 在Qt中，不同的控制器类的基类是QAbstractItemDelegate。那些连接信号与槽的connect语句也可以认为是控制器代码
> 3. Qt中包含有一个模型/视图框架，用于维护数据的组织管理和向用户的呈现方式之间的分离。三个最常用的视图类(列表、树和表格)都是默认提供的。另外，它还提供了抽象的和具体的数据模型，这些数据模型可被扩展和自定义以保存不同类型的数据。
> 4. 视图是获取、修改和呈现数据的对象。QAbstractItemModel定义了视图(还有委托)访问数据的一个标准接口。模型中存储供显示和操作的具体数据。通过信号和槽，他们将数据的变化通知给所有相关联的视图。每个视图对象都有一个指向模型对象的指针，视图对象会频繁访问模型的方法以获取或设置数据，或者做各种其他操作。
> 5. 模型中每个数据项都用一个模型索引来表示。模型索引为视图和委托提供了在不知道其底层数据结构的情况下间接访问模型中数据项的方法。QModeIndex对象由模型创建，可以被模型、视图或委托代码用于定位数据模型中特定项。QModeIndex对象具有很短的生命周期，可能在刚刚创建后就变成无效的状态，因此它们应该被立即使用而后丢弃
> 6. 如果使用一个在若干指令操作前已经存在的QModeIndex，那么应该先调用QModelIndex::isValid（）。QPersistentModelIndex对象具有更长的生命周期，但是在使用前任然应该先调用isValid()来进行检查

## 智能指针
> 1. 一个重写了指针解引用操作operator*()和operator->()的类被称为智能指针。
> 2. QScopedPointer是一个在指针作用域结束后自动删除所引用对象的智能指针。它类似于std::auto_ptr。复制QScopedPointer是毫无意义的，因为它会导致所引用的对象重复删除
> 3. QSharedPointer是一个自动删除它所引用的对象的智能指针，但是它允许被复制，而且QSharedPointer会保持一个引用计数。共享的堆对象只有在最后一个指向它的只能指针销毁时才会被删除。

## 输入掩码
> 1.所谓的输入掩码，是一种控制用户在输入窗件中可键入的内容的主动模式。它有助于防止输入某些类型的不正确的数据。每个QLineEdit都有一个QString属性用来存储掩码字符。输入掩码可以指定在键入QLineEdit的字符串中那个位置处的何种字符是允许的。该字符串由一些特殊的、预定义的掩码字符和一些占据输入字符串相应位置的普通字符构成
> 掩码字符：
	* A:ASCII字母型字符——大写或者小写
	* N:ASCII字母数字型字符——大写或者小写
	* X:任意的ASCII字符
	* D:ASCII非零数字
	* 9:ASCII数字
	* H:十六进制数字
	* B:二进制数字
	* >:随后的字母字符是大写
	* <:随后的字母字符是小写
	* ！:结束大小写转换
	* \:转义字符

```C
QLineEdit* m_StringEntry;
m_StringEntry->setInputMask(m_InputMask->text());
```

## QRegExp
> 1. 正则表达式是验证输入、从输入中提取数据以及对输入进行搜索和替换的强大工具。Qt提供了QRegExp类，它实现了Perl风格的扩展正则表达式语言的大部分功能
> 2. 特殊字符：
	* '.'可以与任意字符相匹配，称之为元字符
	* '\n'匹配换行符
	* '\f'匹配换页符
	* '\t'匹配制表符
	* '\xhhhh'匹配一个Unicode字符，其对应的码值是范围为0x0000到0xFFFF之间的一个十六进制数hhhh
> 3. 量词——说明前面的字符(或字符组)在匹配的表达式中可出现次数的修饰符
	* '+' 出现1次或者更多次
	* '?' 出现0次或者1次
	* '*' 出现0次或者更多次
	* {i,j} 出现至少i次但不超过j次
> 4. 字符集——在匹配表达式指定位置允许出现的字符集合
	* '\s' 匹配任何空白符
	* '\S' 匹配任何非空白符
	* '\d' 匹配任何数字字符：从'0'到'9'
	* '\D' 匹配任何非数字字符
	* '\w' 匹配任何“单词”字符，也就是任意的字母、数字或者下划线
	* '\W' 匹配任意的非单词字符
> 5. 字符集也可以使用方括号指定:
	* [AEIOU]匹配这五个字符中的任意一个
	* [a-g]短线使此集合可匹配从'a'到'g'的字符
	* [^xyz]匹配任何除这三字符以外的字符
> 6. 分组和捕获字符——(圆括号)是可以用来把字符划分成组的特殊字符。字符组可以是后向引用的。也就是说，如果存在一个匹配，那么分组了的值将可以通过各种方法来捕获和访问。为了简便起见，一般规定在一个正则表达式中最多可以引用9个分组，即使用\1到\9这样的修饰符。此外还有一个QRegExp成员函数cap(int nth),它返回第那个分组(基于QString的形式返回)
> 7. 锚点字符——去顶尝试进行匹配操作的边界
	* 脱字符(^),如果它是正则表达式中的第一个字符，则说明匹配过程从字符串的开头处开始
	* 美元符($),如果它是正则表达式的最后一个字符，则表明匹配过程指导字符串的结尾才结束
	* 此外，还有单词边界(\b)断言或者非单词边界(\B),有助于我们关注正则表达式本身


## Qt环境变量的获取与设置
> QProcess::environment()函数和setEnvironment()函数


## QProcess和进程控制
> 1. QProcess是一个能够非常方便而且跨平台的用于启动和控制其他进程的类。它从QPbject派生而来，可充分利用信号和槽来简化和其他Qt类的交互
> 2. 一个QProcess可以使用start()函数来启动另外一个进程，新进程将会成为一个子进程并且在父进程终止时而随之终止
> 3. Qt的线程模型允许线程的优先次序和控制。QThread是一个低级类，适合用于显式的构建长期运行的线程
> 4. QtConcurrent是一个命名空间，提供了用于编写并发软件的更高层次的类和算法。该命名空间有一个重要的类，QThreadPool，这是一个管理线程池的类。每个Qt应用程序都有一个QThreadPool::globalInstance()函数，它带有一个推荐的最大线程数，在大多数系统上，处理核的数量就是该值的默认值
> 5. 借助QtConcurrent中函数式的map/filter/reduce算法，通过将进程分布在由线程池管理的多个线程上，可编写一个能够自动利用系统多核的程序。另外，在命令模式和利用QtConcurrent::run()工作时可把QRunnable用作基类。在这些情况下，无须显示地创建线程或者直接管理他们，只需简单把工作片段描述为具有正确接口的对象即可
