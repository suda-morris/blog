---
title: pyside2
tags:
  - Python
categories:
  - Geek Hobbies
author: suda-morris
date: 2018-10-29 10:46:38
---
# PySide2安装

```bash
sudo pip install pyside2 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

## Get Started

```python
# -*- coding:utf-8 -*-

import sys
import random
from PySide2 import QtCore, QtWidgets, QtGui


class MyWidget(QtWidgets.QWidget):
    def __init__(self):
        QtWidgets.QWidget.__init__(self)

        self.hello = ["Hallo Welt", "你好，世界", "Hei maailma",
                      "Hola Mundo", "Привет мир"]

        self.button = QtWidgets.QPushButton("Click me!")
        self.text = QtWidgets.QLabel("Hello World")
        self.text.setAlignment(QtCore.Qt.AlignCenter)

        self.text.setFont(QtGui.QFont("Titillium", 30))
        self.button.setFont(QtGui.QFont("Titillium", 20))

        self.layout = QtWidgets.QVBoxLayout()
        self.layout.addWidget(self.text)
        self.layout.addWidget(self.button)
        self.setLayout(self.layout)

        self.button.clicked.connect(self.magic)

    def magic(self):
        self.text.setText(random.choice(self.hello))


if __name__ == "__main__":
    app = QtWidgets.QApplication([])

    widget = MyWidget()
    widget.resize(800, 600)
    widget.show()

    sys.exit(app.exec_())
```

## 使用QML

```python
# -*- coding:utf-8 -*-
from PySide2.QtWidgets import QApplication
from PySide2.QtQuick import QQuickView
from PySide2.QtCore import QUrl

if __name__ == "__main__":
    app = QApplication([])
    view = QQuickView()
    url = QUrl("app.qml")
    view.setSource(url)
    view.show()
    app.exec_()
```

```xml
import QtQuick 2.0
Rectangle{
	width:300
	height:300
	color:"cyan"
	Text{
		text:"Hello world"
		anchors.centerIn:parent
	}
}
```



# 参考文献

1. [官方教程](http://doc.qt.io/qtforpython/tutorials/index.html)
