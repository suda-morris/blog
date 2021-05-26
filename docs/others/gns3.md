title: GNS3 Install
tags:
  - GNS3
categories:
  - Network
author: suda-morris
date: 2015-06-08 11:24:00
---
## GNS3模拟器安装步骤

1. [下载GNS3](https://community.gns3.com/community/software/download/)，并且安装
2. [下载GNS3 IOU VM虚拟机镜像](https://community.gns3.com/community/software/download/)
3. 下载路由器和交换机的IOS镜像文件(百度搜索并下载)
	* i86bi-linux-l2-ipbasek9-15.1g.bin(交换机)
	* i86bi-linux-l3-adventerprisek9-15.4.1T.bin(路由器)
4. 安装virtualbox
5. 导入步骤2中下载的GNS3虚拟机镜像，设置网卡为hostonly，并启动虚拟机
6. GNS3是基于linux系统的，root用户登录，密码为cisco，然后查看网卡ip地址ifconfig
7. 在浏览器中输入刚才查找到的IP地址，并指名端口号8000下的upload，例如：http://192.168.172.101:8000/upload
8. 打开GNS3软件，在edit->Preference->Server中添加虚拟机的IP地址以及端口(ip地址来自步骤6)
9. 在edit->Preference->IOS on UNIX中，指名iourc.txt的路径
10. 在edit->Preference->IOU devices中，添加switch和router镜像路径(路径为上传到虚拟机中的具体路径，例如：/home/gns3/GNS3/images/IOU/i86bi-linux-l2-ipbasek9-15.1g.bin)
11. 启动设备

![suda-morris](http://i.imgur.com/Nn7Krru.gif)
