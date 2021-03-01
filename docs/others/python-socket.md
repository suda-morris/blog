title: Python Socket
tags:
  - Socket
categories:
  - Python
author: suda-morris
date: 2018-10-17 22:36:12 +0800
---
# Python中的Socket编程

## Python标准库中的socket模块

> socket对象支持使用TCP或者UDP协议进行网络通信，并提供了socket编程所需要的对象、函数和常量

### 简单TCP服务器实例

```python
# -*- coding: utf-8 -*-

import socket

server_host = "192.168.1.103"
server_port = 3629

if __name__ == "__main__":
    server_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # 本套接字是建立在IPv4基础上的流式套接字
    server_sock.bind((server_host, server_port))  # 绑定本地地址和端口号
    server_sock.listen(5)  # 使能监听

    client_sock, client_addr_info = server_sock.accept()  # 阻塞，等待客户端连接
    while True:
        data = client_sock.recv(1024)  # 接收数据
        data = data.decode("utf-8")  # 数据解码
        if data == "bye":
            break
        print("Receive from Client[{addr_info}]:{content}".format(addr_info=client_addr_info, content=data))
        data = data + "--> OK"
        client_sock.send(data.encode("utf-8"))  # 发送数据给客户端

    client_sock.close()  # 关闭客户端套接字
    server_sock.close()  # 关闭服务端套接字
```

### 简单TCP客户端实例

```python
# -*- coding: utf-8 -*-

import socket

server_host = "192.168.1.103"
server_port = 3629

if __name__ == "__main__":
    client_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # 本套接字是建立在IPv4基础上的流式套接字
    client_sock.connect((server_host, server_port))  # 向服务器发起连接
    while True:
        data = input("Please Enter a Message to Send: ")
        if data:
            client_sock.send(data.encode("utf-8"))
            if data == "bye":
                break
            data = client_sock.recv(1024)
            data = data.decode("utf-8")
            print("Receive from Server: {content}".format(content=data))
    client_sock.close()
```

### 简单UDP服务器实例

```python
# -*- coding: utf-8 -*-

import socket

server_host = "192.168.1.103"
server_port = 3629

if __name__ == "__main__":
    server_sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)  # 本套接字是建立在IPv4基础上的数据报套接字
    server_sock.bind((server_host, server_port))  # 绑定IP地址和端口号

    while True:
        data, client_addr_info = server_sock.recvfrom(1024)
        data = data.decode("utf-8")
        if data == "bye":
            break
        print("Receive from Client[{addr_info}]:{content}".format(addr_info=client_addr_info, content=data))
        data = data + " --> OK"
        server_sock.sendto(data.encode("utf-8"), client_addr_info)
    server_sock.close()
```

### 简单UDP客户端实例

```python
# -*- coding: utf-8 -*-

import socket

server_host = "192.168.1.103"
server_port = 3629

if __name__ == "__main__":
    client_sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)  # 本套接字是建立在IPv4基础上的数据报套接字
    while True:
        data = input("Please Enter a Message to Send: ")
        if data:
            client_sock.sendto(data.encode("utf-8"), (server_host, server_port))
            if data == "bye":
                break
            data, server_addr_info = client_sock.recvfrom(1024)
            data = data.decode("utf-8")
            print("Receive from Server[{addr_info}]:{content}".format(addr_info=server_addr_info, content=data))
    client_sock.close()
```



## 小项目---备份服务器与客户端的简单实现(多线程版)

![bak_server_protocol](https://s1.ax1x.com/2018/10/17/idOnEQ.png)

### 服务器

```python
# -*- coding: utf-8 -*-

import os
import pickle
import socket
import struct
import threading
from tkinter import *
from tkinter.ttk import *

DEFAULT_BAK_PATH = r"E:\MyBak"  # 服务器端默认备份路径

SERV_RUN_FLAG = True  # 服务器运行标志
flag_lock = threading.Lock()  # 运行标志的指令锁


def get_file_infos(client):
    """
    接受客户端传来的文件列表信息
    :param client:客户端连接套接字
    :return:data要备份的文件列表信息，compress是否是压缩文件
    """
    fmt_str = 'Q?'  # 长整形+布尔型
    headsize = struct.calcsize(fmt_str)
    data = client.recv(headsize)  # 接受文件信息列表的长度
    infos_len, compress = struct.unpack(fmt_str, data)  # unpack字节数据
    data = b""  # 保存文件列表信息
    while True:  # 每次最多接收1K字节
        if infos_len > 1024:
            data += client.recv(1024)
            infos_len -= 1024
        else:
            data += client.recv(infos_len)
            break
    data = pickle.loads(data)  # 使用pickle反序列化
    return data, compress


def mk_file_path(filepath_rel):
    """
    根据文件的相对路径创建服务器端的路径
    :param filepath_rel: 客户端文件的相对路径
    """
    paths = filepath_rel.split(os.path.sep)[:-1]  # 按照目录级别切分，去掉最后一项(文件名)
    p = DEFAULT_BAK_PATH
    for path in paths:
        p = os.path.join(p, path)  # 逐级创建文件夹
        if not os.path.exists(p):
            os.mkdir(p)


def get_compress_size(client):
    """
    获取压缩文件的大小
    :param client: 客户端连接套接字
    :return: size压缩文件的大小
    """
    fmt_str = 'Q'  # 长整型
    size = struct.calcsize(fmt_str)
    data = client.recv(size)
    size = struct.unpack(fmt_str, data)[0]
    return size


def recv_file(client, filepath_rel, file_size, compress):
    """
    接收并保存单个文件
    :param client:客户端连接套接字
    :param filepath_rel:文件的相对地址
    :param file_size:文件大小
    :param compress:是否是压缩文件
    :return:返回接收成功与否
    """
    res = True
    mk_file_path(filepath_rel)
    filepath = os.path.join(DEFAULT_BAK_PATH, filepath_rel)  # 文件在服务器端的完整路径
    if compress:
        file_size = get_compress_size(client)
        filepath = "".join([os.path.splitext(filepath)[0], ".tar.gz"])  # 修改文件拓展名
    f = open(filepath, "wb+")
    try:
        while True:
            if file_size > 1024:
                data = client.recv(1024)
                f.write(data)
                file_size -= 1024
            else:
                data = client.recv(file_size)
                f.write(data)
                break
    except socket.error as e:
        print(e)
        res = False
    else:
        res = True
    finally:
        f.close()
        return res


def send_echo(client, result):
    """
    发送当前文件的备份结果给客户端
    :param client: 客户端连接的套接字
    :param result: 当前文件备份的结果
    """
    if result:
        client.send(b"success")
    else:
        client.send(b"failure")


def client_operate(client_sock):
    """
    客户端处理线程
    :param client_sock:客户端连接套接字
    """
    files_infos, compress = get_file_infos(client_sock)  # 获取客户端传送的文件列表信息以及是否发送压缩文件
    for file_size, file_path_rel in files_infos:  # 逐个接收文件
        res = recv_file(client_sock, file_path_rel, file_size, compress)
        send_echo(client_sock, res)
    client_sock.close()  # 关闭客户端套接字


def start(host, port):
    """
    启动服务后运行的线程函数
    :param host: 服务器IP地址
    :param port: 服务器端口号
    """
    if not os.path.exists(DEFAULT_BAK_PATH):  # 判断本地备份根目录是否存在
        os.mkdir(DEFAULT_BAK_PATH)
    server_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # 创建流失套接字
    server_sock.settimeout(1)  # 设置超时时间1s
    server_sock.bind((host, int(port)))  # 绑定服务器端的IP和端口号
    server_sock.listen(1)  # 同一时间只处理一个客户端的连接
    flag_lock.acquire()  # 访问SERV_RUN_FLAG之前需要先获取指令锁
    while SERV_RUN_FLAG:
        flag_lock.release()  # 访问完成后立马释放指令锁
        client_sock = None  # 客户端连接的套接字
        try:
            client_sock, addr_info = server_sock.accept()  # 1s内没有发生客户端连接动作就会产生超时异常
        except socket.timeout:
            pass
        if client_sock:  # 确实有客户端发起连接请求
            t = threading.Thread(target=client_operate, args=(client_sock,))  # 单独开线程处理客户端的需求
            t.start()
        flag_lock.acquire()  # 访问SERV_RUN_FLAG之前需要先获取指令锁
    server_sock.close()


class MyFrame(Frame):
    def __init__(self, root):
        """
        自定义Frame
        :param root: 父类容器对象
        """
        super().__init__(root)
        self.root = root
        self.grid()  # 网格布局
        self.local_ip = "127.0.0.1"
        self.local_ports = [10888, 20888, 30888]
        self.serv_ip = None
        self.serv_port = None
        self.__init_components()

    def __init_components(self):
        """
        初始化界面组件
        """
        proj_name = Label(self, text=u"远程备份服务器")
        proj_name.grid(columnspan=2)  # 横跨两列

        serv_ip_label = Label(self, text=u"服务地址")
        serv_ip_label.grid(row=1)
        self.serv_ip = Combobox(self, values=self.__get_ip_address())  # 下拉列表
        self.serv_ip.set(self.local_ip)  # 下拉列表默认值
        self.serv_ip.grid(row=1, column=1)

        serv_port_label = Label(self, text=u"服务端口")
        serv_port_label.grid(row=2)
        self.serv_port = Combobox(self, values=self.local_ports)
        self.serv_port.set(self.local_ports[0])
        self.serv_port.grid(row=2, column=1)

        self.start_serv_btn = Button(self, text=u"启动服务", command=self.__start_serv)
        self.start_serv_btn.grid(row=3)

        self.exit_serv_btn = Button(self, text=u"退出服务", command=self.__exit_serv)
        self.exit_serv_btn.grid(row=3, column=1)

    def __get_ip_address(self):
        """
        获取服务器端可用的IP地址
        :return: IP地址列表
        """
        hostname = socket.gethostname()  # 获取主机名
        info = socket.gethostbyname_ex(hostname)  # 根据主机名获取IP地址信息
        info = info[2]  # 第3项才是ip地址列表
        info.append(self.local_ip)  # 加上回环地址
        return info

    def __start_serv(self):
        """
        【启动服务】按键处理程序
        """
        host = self.serv_ip.get()  # 从下拉列表中获取用户设置的IP地址
        port = self.serv_port.get()  # 从下拉列表中获取用户设置的端口号
        t = threading.Thread(target=start, args=(host, port))  # 开启线程处理客户端连接请求
        t.start()
        self.start_serv_btn.state(["disabled", ])  # 启动按钮变暗

    def __exit_serv(self):
        """
        【退出服务】按键处理程序
        """
        global SERV_RUN_FLAG
        while True:
            if flag_lock.acquire():
                SERV_RUN_FLAG = False
                flag_lock.release()
                break
        self.root.destroy()  # 退出界面


if __name__ == "__main__":
    root = Tk()
    root.title(u"备份服务器")
    root.resizable(False, False)
    app = MyFrame(root)
    app.mainloop()
```

### 客户端

```python
# -*- coding: utf-8 -*-

import os
import pickle
import socket
import struct
import tarfile
import tempfile
import threading
from tkinter import *
from tkinter.ttk import *


def send_file_infos(client, file_infos, compress):
    """
    发送文件信息
    :param client:客户端连接套接字
    :param file_infos: 文件信息，列表
    :param compress: 是否需要压缩
    """
    fmt_str = 'Q?'  # 长整型+布尔类型
    infos_bytes = pickle.dumps(file_infos)  # 对file_infos序列化操作
    infos_bytes_len = len(infos_bytes)
    infos_bytes_len_pack = struct.pack(fmt_str, infos_bytes_len, compress)  # 用struct模块对长度值进行二进制编码
    client.sendall(infos_bytes_len_pack)  # 先发送长度
    client.sendall(infos_bytes)  # 再发送内容


def send_file(client, file, compress):
    """
    发送单个文件至服务器
    :param client:客户端连接套接字
    :param file:#要发送文件的绝对路径
    :param compress:是否需要压缩
    """
    if not compress:
        f = open(file, "rb")  # 二进制只读方式读取文件
    else:
        f = tempfile.NamedTemporaryFile()  # 创建临时文件
        tar = tarfile.open(mode="w:gz", fileobj=f)  # gzip 压缩
        tar.add(file)
        tar.close()
        f.seek(0)  # 调整文件指针位置
        file_size = os.stat(f.name).st_size  # 计算压缩文件的大小
        file_size_pack = struct.pack('Q', file_size)  # 压缩文件大小二进制编码
        client.sendall(file_size_pack)
    try:
        while True:
            data = f.read(1024)  # 每次发送1K字节，直到发送结束
            if data:
                client.sendall(data)  # 发送原文件或者时压缩文件
            else:
                break
    finally:
        f.close()


def get_bak_info(client, size=7):
    """
    从服务器获取当前备份结果信息
    :param client:客户端连接套接字
    :param size:返回结果信息[success,failure]的字节数
    """
    msg = client.recv(size)
    print(msg.decode("utf-8"))


def get_file_infos_paths(root_path):
    """
    获取文件夹下的所有文件信息和文件路径
    :param root_path:文件夹根目录
    :return:infos文件信息列表，元素是元祖(文件大小，文件相对路径)，paths文件绝对路径
    """
    infos = []
    paths = []
    if not root_path or not os.path.exists(root_path):
        return None, None
    for dirpath, dirnames, filenames in os.walk(root_path):  # 递归遍历根目录下所有文件
        # dirpath根目录，dirnames文件夹名，filenames文件名
        for file_name in filenames:
            file_path = os.path.join(dirpath, file_name)  # 获取文件的绝对路径
            paths.append(file_path)
            file_size = os.stat(file_path).st_size  # 获取文件大小
            file_path_rel = file_path[len(root_path) + 1:]  # 获取文件相对路径
            infos.append((file_size, file_path_rel))
    return infos, paths


def start(host, port, root_path, compress):
    """
    开始备份工作的线程函数
    :param host:服务器IP地址
    :param port:服务器端口号
    :param root_path:备份路径根目录
    :param compress:是否需要压缩文件
    """
    if not os.path.exists(root_path):
        print(u"备份的路径不存在!", root_path)
        return
    client_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # 建立流式套接字
    client_sock.connect((host, port))  # 连接服务器
    file_infos, file_paths = get_file_infos_paths(root_path)  # 获取指定目录下的文件信息与文件路径
    send_file_infos(client_sock, file_infos, compress)  # 发送需要备份的文件信息
    for fp in file_paths:
        send_file(client_sock, fp, compress)  # 依次发送所有文件
        print(fp)  # 打印当前正在备份的文件
        get_bak_info(client_sock)  # 打印文件备份结果
    client_sock.close()


class MyFrame(Frame):
    def __init__(self, root):
        """
        自定义Frame
        :param root: 父类容器对象
        """
        super().__init__(root)
        self.root = root  # 保存父类容器控件
        self.grid()  # 整体使用网格布局
        self.remote_ip_default = "127.0.0.1"  # 默认连接的服务器IP地址
        self.remote_port_default = 10888  # 默认连接的服务器端口号
        self.remote_ip_var = StringVar()  # 保存用户输入的服务器IP地址
        self.remote_port_var = IntVar()  # 保存用户输入的服务器端口号
        self.bak_src_var = StringVar()  # 保存用户输入的本地备份路径
        self.compress_var = BooleanVar()  # 保存用户是否需要对文件进行压缩处理
        self.__init_components()  # 初始化界面上的所有组件

    def __init_components(self):
        """
        初始化界面组件
        """
        proj_name = Label(self, text=u"远程备份客户端")
        proj_name.grid(columnspan=2)  # 横跨两列

        serv_ip_label = Label(self, text=u"服务器地址：")
        serv_ip_label.grid(row=1)
        self.serv_ip = Entry(self, textvariable=self.remote_ip_var)  # 输入框
        self.remote_ip_var.set(self.remote_ip_default)
        self.serv_ip.grid(row=1, column=1)

        serv_port_label = Label(self, text=u"服务器端口：")
        serv_port_label.grid(row=2)
        self.serv_port = Entry(self, textvariable=self.remote_port_var)
        self.remote_port_var.set(self.remote_port_default)
        self.serv_port.grid(row=2, column=1)

        bak_src_label = Label(self, text=u"备份的目标：")
        bak_src_label.grid(row=3)
        self.bak_src = Entry(self, textvariable=self.bak_src_var)
        self.bak_src.grid(row=3, column=1)

        compress_label = Label(self, text=u"压缩备份：")
        compress_label.grid(row=4)
        self.compress_on = Checkbutton(self, text=u"开启压缩", variable=self.compress_var, onvalue=1, offvalue=0)  # 单选框
        self.compress_on.grid(row=4, column=1)

        self.start_serv_btn = Button(self, text=u"开始备份", command=self.__start_bak)  # 按钮，绑定事件处理函数
        self.start_serv_btn.grid(row=5)

        self.exit_serv_btn = Button(self, text=u"退出程序", command=self.__exit_bak)
        self.exit_serv_btn.grid(row=5, column=1)

    def __start_bak(self):
        """
        【开始备份】事件处理
        """
        host = self.remote_ip_var.get()
        port = self.remote_port_var.get()
        bak_path = self.bak_src_var.get()
        compress = self.compress_var.get()
        self.bak_src_var.set("")  # 清空备份路径输入框
        t = threading.Thread(target=start, args=(host, port, bak_path, compress))  # 创建子线程
        t.start()

    def __exit_bak(self):
        """
        【退出程序】事件处理
        """
        self.root.destroy()  # 退出界面


if __name__ == "__main__":
    root = Tk()
    root.title(u"备份客户端")
    root.resizable(False, False)  # 大小不允许伸缩
    app = MyFrame(root)
    app.mainloop()
```



## SocketServer框架

> Python提供了SocketServer框架用来编写网络服务器，它预定义了一个基本的服务器框架
>
> 步骤：
>
> 1. 建立客户端处理类
> 2. 初始化服务器类，传入相关参数
> 3. 启动服务器

### SocketServer框架下的TCP服务器

```python
import socketserver
import threading

HOST = "127.0.0.1"
PORT = 3629


def shut_server_down():
    if server:
        server.shutdown()


class MyHandler(socketserver.StreamRequestHandler):
    def handle(self):
        while True:
            data = self.rfile.readline()  # 按行读取数据(需要数据中包含换行符)
            if not data:
                break
            print("Receive From Client: ", data.decode("utf-8").strip('\n'))
            self.wfile.write(data)
        threading.Thread(target=shut_server_down).start()  # 服务器的shutdown方法需要在别的线程中调用


if __name__ == "__main__":
    server = socketserver.TCPServer((HOST, PORT), MyHandler)  # 创建TCP服务器
    server.serve_forever()  # 运行服务器
```

#### 配套的TCP客户端

```python
# -*- coding: utf-8 -*-

import socket

server_host = "192.168.1.104"
server_port = 3629

if __name__ == "__main__":
    client_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # 本套接字是建立在IPv4基础上的流式套接字
    client_sock.connect((server_host, server_port))  # 向服务器发起连接
    data = True
    while data:
        data = input("Please Enter a Message to Send: ")
        data += '\n'
        client_sock.send(data.encode("utf-8"))
        data = client_sock.recv(1024)
        data = data.decode("utf-8").strip('\n')
        print("Receive from Server: {content}".format(content=data))
    client_sock.close()
```



### SocketServer框架下的UDP服务器

```python
import socketserver
import threading

HOST = "192.168.1.104"
PORT = 3629


def shut_server_down():
    if server:
        server.shutdown()


class MyHandler(socketserver.DatagramRequestHandler):
    def handle(self):
        data, client_sock = self.request
        data = data.decode("utf-8")
        if data == "bye":
            threading.Thread(target=shut_server_down).start()
            return
        print("Receive From Client: ", data)
        data = data + "--->OK"
        client_sock.sendto(data.encode("utf-8"), self.client_address)


if __name__ == "__main__":
    server = socketserver.UDPServer((HOST, PORT), MyHandler)
    server.serve_forever()
```

#### 配套的UDP客户端

```python
# -*- coding: utf-8 -*-

import socket

server_host = "192.168.1.104"
server_port = 3629

if __name__ == "__main__":
    client_sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)  # 本套接字是建立在IPv4基础上的数据报套接字
    while True:
        data = input("Please Enter a Message to Send: ")
        if data:
            client_sock.sendto(data.encode("utf-8"), (server_host, server_port))
            if data == "bye":
                break
            data = b""
            while len(data) == 0:  # 防止接收到空数据
                data, server_addr_info = client_sock.recvfrom(1024)
            data = data.decode("utf-8")
            print("Receive from Server[{addr_info}]:{content}".format(addr_info=server_addr_info, content=data))
    client_sock.close()
```



## 使用SocketServer框架改写备份服务器程序

```python
# -*- coding: utf-8 -*-

import os
import pickle
import socket
import socketserver
import struct
import threading
from tkinter import *
from tkinter.ttk import *

DEFAULT_BAK_PATH = r"E:\MyBak"  # 服务器端默认备份路径


def mk_file_path(filepath_rel):
    """
    根据文件的相对路径创建服务器端的路径
    :param filepath_rel: 客户端文件的相对路径
    """
    paths = filepath_rel.split(os.path.sep)[:-1]  # 按照目录级别切分，去掉最后一项(文件名)
    p = DEFAULT_BAK_PATH
    for path in paths:
        p = os.path.join(p, path)  # 逐级创建文件夹
        if not os.path.exists(p):
            os.mkdir(p)


class BakHandler(socketserver.StreamRequestHandler):
    def handle(self):
        self.__client_operate()

    def __client_operate(self):
        """
        客户端处理线程
        """
        files_infos, compress = self.__get_file_infos()  # 获取客户端传送的文件列表信息以及是否发送压缩文件
        for file_size, file_path_rel in files_infos:  # 逐个接收文件
            res = self.__recv_file(file_path_rel, file_size, compress)  # request就是客户端连接的套接字
            self.__send_echo(res)
            self.request.close()  # 关闭客户端套接字

    def __get_file_infos(self):
        """
        接受客户端传来的文件列表信息
        :return:data要备份的文件列表信息，compress是否是压缩文件
        """
        fmt_str = 'Q?'  # 长整形+布尔型
        headsize = struct.calcsize(fmt_str)
        data = self.request.recv(headsize)  # 接受文件信息列表的长度
        infos_len, compress = struct.unpack(fmt_str, data)  # unpack字节数据
        data = b""  # 保存文件列表信息
        while True:  # 每次最多接收1K字节
            if infos_len > 1024:
                data += self.request.recv(1024)
                infos_len -= 1024
            else:
                data += self.request.recv(infos_len)
                break
        data = pickle.loads(data)  # 使用pickle反序列化
        return data, compress

    def __send_echo(self, result):
        """
        发送当前文件的备份结果给客户端
        :param result: 当前文件备份的结果
        """
        if result:
            self.request.send(b"success")
        else:
            self.request.send(b"failure")

    def __recv_file(self, filepath_rel, file_size, compress):
        """
        接收并保存单个文件
        :param filepath_rel:文件的相对地址
        :param file_size:文件大小
        :param compress:是否是压缩文件
        :return:返回接收成功与否
        """
        res = True
        mk_file_path(filepath_rel)
        filepath = os.path.join(DEFAULT_BAK_PATH, filepath_rel)  # 文件在服务器端的完整路径
        if compress:
            file_size = self.__get_compress_size()
            filepath = "".join([os.path.splitext(filepath)[0], ".tar.gz"])  # 修改文件拓展名
        f = open(filepath, "wb+")
        try:
            while True:
                if file_size > 1024:
                    data = self.request.recv(1024)
                    f.write(data)
                    file_size -= 1024
                else:
                    data = self.request.recv(file_size)
                    f.write(data)
                    break
        except socket.error as e:
            print(e)
            res = False
        else:
            res = True
        finally:
            f.close()
            return res

    def __get_compress_size(self):
        """
        获取压缩文件的大小
        :return: size压缩文件的大小
        """
        fmt_str = 'Q'  # 长整型
        size = struct.calcsize(fmt_str)
        data = self.request.recv(size)
        size = struct.unpack(fmt_str, data)[0]
        return size


class MyFrame(Frame):
    def __init__(self, root):
        """
        自定义Frame
        :param root: 父类容器对象(根窗口)
        """
        super().__init__(root)
        self.root = root
        self.server = None
        self.grid()  # 网格布局
        self.local_ip = "127.0.0.1"
        self.local_ports = [10888, 20888, 30888]
        self.serv_ip = None
        self.serv_port = None
        self.__init_components()

    def __init_components(self):
        """
        初始化界面组件
        """
        proj_name = Label(self, text=u"远程备份服务器")
        proj_name.grid(columnspan=2)  # 横跨两列

        serv_ip_label = Label(self, text=u"服务地址")
        serv_ip_label.grid(row=1)
        self.serv_ip = Combobox(self, values=self.__get_ip_address())  # 下拉列表
        self.serv_ip.set(self.local_ip)  # 下拉列表默认值
        self.serv_ip.grid(row=1, column=1)

        serv_port_label = Label(self, text=u"服务端口")
        serv_port_label.grid(row=2)
        self.serv_port = Combobox(self, values=self.local_ports)
        self.serv_port.set(self.local_ports[0])
        self.serv_port.grid(row=2, column=1)

        self.start_serv_btn = Button(self, text=u"启动服务", command=self.__start_serv)
        self.start_serv_btn.grid(row=3)

        self.exit_serv_btn = Button(self, text=u"退出服务", command=self.__exit_serv)
        self.exit_serv_btn.grid(row=3, column=1)

    def __get_ip_address(self):
        """
        获取服务器端可用的IP地址
        :return: IP地址列表
        """
        hostname = socket.gethostname()  # 获取主机名
        info = socket.gethostbyname_ex(hostname)  # 根据主机名获取IP地址信息
        info = info[2]  # 第3项才是ip地址列表
        info.append(self.local_ip)  # 加上回环地址
        return info

    def __start_serv(self):
        """
        【启动服务】按键处理程序
        """
        if not os.path.exists(DEFAULT_BAK_PATH):  # 判断本地备份根目录是否存在
            os.mkdir(DEFAULT_BAK_PATH)
        host = self.serv_ip.get()  # 从下拉列表中获取用户设置的IP地址
        port = self.serv_port.get()  # 从下拉列表中获取用户设置的端口号
        self.start_serv_btn.state(["disabled", ])  # 启动按钮变暗
        self.server = socketserver.ThreadingTCPServer((host, int(port)), BakHandler)  # 创建多线程TCP服务器
        threading.Thread(target=self.server.serve_forever).start()  # 在新线程中启动服务器

    def __exit_serv(self):
        """
        【退出服务】按键处理程序
        """
        if self.server:
            threading.Thread(target=self.server.shutdown).start()
        self.root.destroy()  # 退出界面


if __name__ == "__main__":
    root = Tk()  # 根窗口
    root.title(u"备份服务器")
    root.resizable(False, False)
    app = MyFrame(root)
    app.mainloop()
```



## 项目：简单FTP服务器与客户端的实现

### FTP服务器的实现

```python
import os
import socketserver
import threading
import time


def add_opr_file(client_addr, item):
    """
    向FTPDataHandler类的操作列表中添加新操作
    命令通道和数据通道，实际上是通过FTPDataHandler类中的client_oper字典联系在一起的
    :param client_addr: 客户端的ip地址
    :param item: 新操作
    """
    if client_addr in FTPDataHandler.client_oper:
        FTPDataHandler.client_oper[client_addr].append(item)
    else:
        FTPDataHandler.client_oper[client_addr] = [item, ]


class FTPHandler(socketserver.StreamRequestHandler):
    def __init__(self, request=None, client_addr=None, server=None):
        """
        FTP服务器的处理类
        :param request: 请求对象，即连接的客户端socket
        :param client_addr: 客户端地址
        :param server: 与自己绑定的服务器对象(即后面的MyThreadFTPServer对象)
        """
        self.cmd_keys = ("QUIT", "USER", "NOOP", "TYPE", "PASV", "PORT", "RETR", "STOR")  # FTP服务器支持的命令
        self.coms = {}  # 字典，{命令:执行方法}
        self.__init_coms()  # 初始化字典coms
        self.server = server  # 与服务类绑定的服务器的引用
        self.cmd_port = 21  # 命令端口号
        self.data_port = 20  # 数据端口号
        self.pasv_data_ip = None  # 被动模式下，数据模块线程服务器的IP地址
        self.pasv_data_port = None  # 被动模式下，数据模块线程服务器的端口号
        self.args = None  # 某条命令对应的参数
        self.loged = False  # 用户是否登陆
        self.pasv_mode = None  # 当前服务器是否工作在被动模式
        super().__init__(request, client_addr, server)  # 调用父类的构造函数

    def __init_coms(self):
        """
        初始化字典coms，键为命令名字，值为具体的方法
        """
        for key in self.cmd_keys:
            self.coms[key] = getattr(self, "exe_" + key.lower())  # 获取exe_开头的成员方法

    def handle(self):
        """
        重写父类的处理函数
        """
        while True:
            cmds = self.rfile.readline()  # 读取一行用户发来的命令
            if not cmds:
                continue
            cmds = cmds.decode("utf-8")  # 解码
            cmd = self.__parse_cmd(cmds)  # 解析命令
            if cmd in self.cmd_keys:
                self.coms[cmd]()  # 执行命令对应的方法
            else:
                self.__send(500, "Invalid command.")
            if cmd == "QUIT":
                break

    def __parse_cmd(self, cmds):
        """
        从字符串中提取命令动词和参数
        :param cmds:包含命令、参数的字符串
        :return:命令动词，大写
        """
        if ' ' in cmds:  # 根据空格来判断是否包含命令参数
            cmd, args = cmds.split(' ')  # 切分命令动词与命令参数
            self.args = args.strip('\n').strip()  # 清除换行符与空格
        else:
            cmd = cmds.strip('\n').strip()
        return cmd.upper()

    def __send(self, code, info):
        """
        向客户端返回命令执行状态
        :param code:状态码
        :param info:状态信息
        """
        infos = "%d %s\n" % (code, info)
        self.request.sendall(infos.encode("utf-8"))

    def __make_pasv_info(self):
        """
        返回进入主动模式的信息
        :return: 返回给客户端的信息，包括主动模式数据通道的IP地址和端口号，按照FTP协议的格式要求发送
        """
        ip_info = self.pasv_data_ip.split('.')  # IP地址之间的.号使用,号来替代
        ip_info = ','.join(ip_info)
        porta_info = str(self.pasv_data_port // 256)
        portb_info = str(self.pasv_data_port % 256)
        return ','.join((ip_info, porta_info, portb_info))

    def __enter_pasv(self):
        """
        进入被动模式，开启数据服务器
        """
        if not self.server.data_server:
            self.pasv_data_ip, self.pasv_data_port = self.server.create_data_server()

    def exe_quit(self):
        """
        QUIT命令的执行动作
        """
        self.__send(221, "bye.")

    def exe_user(self):
        """
        USER命令的执行动作
        """
        user = self.args  # 获取登陆的用户名
        if user in ("", "anonymous"):
            self.loged = True
            self.__send(230, "identified!")
        else:
            self.__send(530, "Only use anonymous.")

    def exe_noop(self):
        """
        NOOP命令的执行动作
        """
        self.__send(200, "ok.")

    def exe_type(self):
        """
        TYPE命令的执行动作
        """
        self.__send(200, "ok.")

    def exe_pasv(self):
        """
        PASV命令的执行动作
        """
        if not self.loged:
            self.__send(332, "Please login.")
            return
        if self.pasv_mode:  # 已经passive模式了
            info = "entering passive mode (%s)" % self.__make_pasv_info()
            self.__send(227, info)
            return
        try:
            self.__enter_pasv()  # 进入passive模式
            info = "entering passive mode (%s)" % self.__make_pasv_info()
            self.pasv_mode = True
            self.__send(227, info)
        except Exception as e:  # 进入passive模式失败
            print(e)
            self.pasv_mode = False
            self.__send(500, "Fail to enter passvie mode.")

    def exe_port(self):
        """
        PORT命令的执行动作
        """
        self.__send(500, "Do not support port mode.")

    def exe_retr(self):
        """
        RETR命令的执行动作
        """
        if not os.path.exists(os.path.join("/root", "server", self.args)):  # 确保要下载的文件是存在的
            self.__send(550, "File {file_path} not exist!".format(file_path=self.args))
            return
        client_addr = self.request.getpeername()[0]  # 获取客户端的IP地址
        add_opr_file(client_addr, ("RETR", self.args))  # 向数据通道中添加新的任务
        self.__send(150, "ok.")

    def exe_stor(self):
        """
        STOR命令的执行动作
        """
        client_addr = self.request.getpeername()[0]
        add_opr_file(client_addr, ("STOR", self.args))  # 向数据通道中添加新的任务
        self.__send(150, "ok.")


class FTPDataHandler(socketserver.StreamRequestHandler):
    client_oper = {}  # 字典，键为客户端IP地址，值为列表，存放具体的操作

    def handle(self):
        """
        数据服务器针对每个连接的客户端的操作
        """
        peerip = self.request.getpeername()[0]  # 获取连接的客户端的IP地址
        opr = self.__get_opr_args(peerip)  # 根据IP地址查询该客户端具体的操作
        if opr:
            if opr[0] == "RETR":
                self.retr_file(opr[1])  # 下载文件
            elif opr[0] == "STOR":
                self.stor_file(opr[1])  # 上传文件
        self.request.close()  # 处理完依次上传或者下载任务后就关闭客户端套接字

    def __get_opr_args(self, peerip):
        """
        根据IP地址查询客户端需要服务的内容
        :param peerip: 远端的IP地址
        :return: opr具体的操作
        """
        if peerip in self.client_oper:
            opr = self.client_oper[peerip].pop(0)  # 弹出列表中的第一个
            if not self.client_oper[peerip]:  # 针对该IP地址，列表中没有其余操作了
                self.client_oper.pop(peerip)  # 在字段中删除这个IP地址为键的项目
            return opr

    def retr_file(self, filepath):
        """
        客户端下载文件(对应服务器端的发送文件)
        :param filepath: 文件路径
        """
        filepath = os.path.join("/root", "server", filepath)
        print(filepath)
        f = open(filepath, "rb")
        while True:
            data = f.read(1024)
            if data:
                self.request.sendall(data)
            else:
                break
        f.close()

    def stor_file(self, filepath):
        """
        客户端上传文件(对应服务器端的接收并保存文件)
        :param filepath:文件路径
        """
        filepath = os.path.join("/root", "server", filepath)
        print(filepath)
        f = open(filepath, "wb")  # 将新文件保存到当前目录的bakt文件夹下
        while True:
            data = self.request.recv(1024)
            if data:
                f.write(data)
            else:
                break
        f.close()


class MyThreadFTPServer(socketserver.ThreadingTCPServer):
    def __init__(self, addr, handler):
        """
        自定义多线程FTP服务器
        :param addr: 服务器地址，元祖(IP地址，端口号)，21命令端口，20数据端口
        :param handler:处理客户端连接的对象
        """
        self.data_server = None  # 专门负责数据通道的服务器
        super().__init__(addr, handler)

    def shutdown(self):
        """
        重写父类的shutdown函数
        """
        if self.data_server:  # 是否有数据通道服务器没有关闭
            threading.Thread(target=self.data_server.shutdown).start()
        super().shutdown()  # 调用父类的挂机函数

    def create_data_server(self):
        """
        创建数据通道专用服务器
        :return:pasv_data_ip数据服务器的IP地址；pasv_data_port数据服务器的端口号
        """
        self.data_server = socketserver.ThreadingTCPServer(("127.0.0.1", 0), FTPDataHandler)
        pasv_data_ip, pasv_data_port = self.data_server.server_address  # 获取数据服务器的ip地址和端口号
        threading.Thread(target=self.data_server.serve_forever).start()  # 开启新线程，启动数据服务器
        return pasv_data_ip, pasv_data_port


if __name__ == "__main__":
    ftp_server = MyThreadFTPServer(("127.0.0.1", 21), FTPHandler)
    threading.Thread(target=ftp_server.serve_forever).start()  # 开启新线程，启动FTP服务器
    print("FTP Server Start...")
    # time.sleep(30)
    # ftp_server.shutdown()
```

### FTP客户端的实现

```python
import os
import socket
import threading


def get_file(host, port, file_path):
    """
    从服务器下载文件
    :param host: 服务器IP地址
    :param port: 服务器端口号
    :param file_path: 文件路径
    """
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((host, port))
    file_path = os.path.join("/root", "client", file_path)  # 文件保存在服务器的bakt文件夹下
    print(file_path)
    f = open(file_path, "wb")
    data = True
    while data:
        data = s.recv(1024)
        if data:
            f.write(data)
    s.close()
    f.close()


def put_data(host, port, file_path):
    """
    上传文件至服务器
    :param host: 服务器的IP地址
    :param port: 服务器的端口号
    :param file_path: 本地文件路径
    """
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((host, port))
    print(file_path)
    f = open(file_path, "rb")
    while True:
        data = f.read(1024)
        if data:
            s.sendall(data)
        else:
            break
    s.close()
    f.close()


class FTPClient(object):
    def __init__(self, host="localhost", port=21):
        """
        自定义FTP客户端
        :param host:服务器IP地址
        :param port:服务器端口号
        """
        self.host = host  # 服务器ip地址
        self.port = port  # 服务器端口号
        self.cmds = ("QUIT", "USER", "NOOP", "TYPE", "PASV", "PORT", "RETR", "STOR")  # 支持的FTP命令
        self.line_sep = '\n'
        self.loged = False  # 是否已经登陆服务器
        self.sock = None  # 连接服务器端的套接字
        self.pasv_mode = None  # 是否处于被动模式
        self.pasv_host = None  # 被动模式的服务器ip地址
        self.pasv_port = None  # 被动模式的服务器端口号

    def __cmd_connect(self):
        """
        连接服务器
        """
        self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.sock.connect((self.host, self.port))

    def __login(self):
        """
        登录服务器
        """
        if self.sock:
            self.send_cmd("USER")
            res = self.read_line(self.sock)
            if res.startswith("230"):
                print("Log in Successfully!")
                self.loged = True

    def read_line(self, sock):
        """
        按行读取服务器返回数据
        :param sock: 套接字
        :return: data接收到的一行数据
        """
        data = ""
        while not data.endswith(self.line_sep):
            d = sock.recv(1)
            data += d.decode("utf-8")
        return data

    def __parse_cmd(self, cmd_str):
        """
        从字符串中解析命令
        :param cmd_str: 命令字符串
        :return: 返回命令动词(大写)，命令参数
        """
        if ' ' in cmd_str:
            cmd_lst = cmd_str.split(' ')
            cmd = cmd_lst[0]
            args = ' '.join(cmd_lst[1:])
        else:
            cmd = cmd_str
            args = ''
        return cmd.upper(), args

    def send_cmd(self, cmd, args=""):
        """
        发送命令
        :param cmd: 命令动词
        :param args: 命令参数
        :return: 返回命令发送成功与否
        """
        if self.sock:
            if args:
                cmd = ' '.join((cmd, args))
                if cmd.startswith("RETR") or cmd.startswith("STOR"):
                    if not self.pasv_mode:
                        print("Please enter passive mode first")
                        return False
                    if not args:
                        print("Please specify a file")
                        return False
                if cmd.startswith("STOR"):
                    if not os.path.exists(args):
                        print("File not exist")
                        return False
            cmd += self.line_sep
            self.sock.sendall(cmd.encode("utf-8"))
            return True

    def start(self):
        """
        循环执行用户输入的命令
        """
        print("Supported Commands: ", self.cmds)
        self.__cmd_connect()  # 连接
        self.__login()  # 登陆
        while True:
            cmd_str = input("Enter your commands: ")
            if not cmd_str:
                print("FTP command can not be empty")
                continue
            cmd, args = self.__parse_cmd(cmd_str)
            if not self.send_cmd(cmd, args):
                print("Fail to send your command: ", cmd)
                continue
            res = self.read_line(self.sock)
            print(res)
            if cmd.startswith("PASV") and res.startswith("227"):
                self.pasv_mode = True
                server_info = res[res.index('(') + 1:res.index(')')]
                self.pasv_host = '.'.join(server_info.split(',')[:4])
                server_info = server_info.split(',')[-2:]
                self.pasv_port = int(server_info[0]) * 256 + int(server_info[1])
            if cmd.startswith("RETR"):  # 下载文件
                if self.pasv_mode:
                    threading.Thread(target=get_file, args=(self.pasv_host, self.pasv_port, args)).start()
            if cmd.startswith("STOR"):  # 上传文件
                if self.pasv_mode:
                    threading.Thread(target=put_data, args=(self.pasv_host, self.pasv_port, args)).start()
            if cmd.startswith("QUIT"):
                break
        self.sock.close()
        self.sock = None


if __name__ == "__main__":
    ftp_client = FTPClient()
    ftp_client.start()
```
