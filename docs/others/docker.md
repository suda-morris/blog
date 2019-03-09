title: Docker Introduction
tags:
  - Docker
categories:
  - Geek Hobbies
author: suda-morris
date: 2016-08-25 19:37:00
---
## Docker安装
1. 内核要求：3.10以上
2. 安装命令：curl -sSL https://get.docker.com/ | sh
3. 启动docker：systemctl start docker
4. 将docker加入到开机启动：systemctl enable docker

## Docker镜像分层技术
![docker的镜像分层技术](http://i.imgur.com/oE2fYaF.png)
1. docker镜像是运行环境和业务代码的整体打包
2. Aufs是Another Union File System的缩写，支持将多个目录挂载到同一个虚拟目录下
3. 已构建的镜像会设置成只读模式，read-write写操作是在read-only上的一种增量操作，不影响read-only层

## 镜像仓库
1. Docker官方镜像中心（hub.docker.com）
2. 从中心镜像仓库下载到宿主机本地上的镜像称为本地镜像
3. 如果第一次下载镜像，会把镜像所有层都下载回来
4. 利用镜像分层技术，如果主机上已经有layer存在，下载新增的layer，类似git代码提交机制
5. docker pull <$images>

## 删除镜像
1. docker rmi <$images>