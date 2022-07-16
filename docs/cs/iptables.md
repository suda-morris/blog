# 防火墙 𝙞𝙥𝙩𝙖𝙗𝙡𝙚𝙨 基础

`iptables` 是一种**包过滤防火墙**，用来对 IP，ICMP，TCP，UDP，端口号进行控制。

`iptables` 是应用程序的接口，具体的数据包过滤需要配合内核提供的 `netfilter` 模块。

## iptables 的表和链

### 规则表

`filter` 表，`nat` 表，`mangle` 表，`raw` 表

### 规则链

* `INPUT` `OUTPUT` `FORWARD`
* `PREROUTING` `POSTROUTING`

## iptables 过滤规则的使用

### 基本命令结构

* iptables -t filter 命令 规则链 规则

### 查看 filter 表中的已有规则

```bash
➤ sudo iptables -t filter -vnL                                                 14:04:32
Chain INPUT (policy ACCEPT 1941 packets, 11M bytes)
 pkts bytes target     prot opt in     out     source               destination

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination

Chain OUTPUT (policy ACCEPT 1728 packets, 178K bytes)
 pkts bytes target     prot opt in     out     source               destination
```

### 添加规则

* -I 插入到规则链的最前面
* -A 插入到规则链的最后面

```bash
# 向 filter 表的 INPUT 规则链中添加新的规则，允许源 ip 为 10.0.0.1 的数据包进入
sudo iptables -t filter -A INPUT -s 10.0.0.1 -j ACCEPT

# 向 filter 表的 INPUT 规则链中添加新的规则，阻止源 IP 网段为 10.0.0.0/24 的数据包进入
sudo iptables -t filter -A INPUT -s 10.0.0.0/24 -j DROP

# 允许 10.0.0.2 的主机从本机的 eth0 接口访问 80 端口
sudo iptables -t filter -A INPUT -i eth0 -s 10.0.0.2 -p tcp --dport 80 -j ACCEPT
```

### 修改默认规则

```bash
# 将 filter 表的 INPUT 规则链的默认规则修改为 DROP
sudo iptables -t filter -P INPUT DROP
```

### 清除规则

```bash
sudo iptables -t filter -F
```

### 删除指定的规则

```bash
# 删除 filter 表的 INPUT 规则链中的第 5 条规则
sudo iptables -t filter -D 5
```

### 自定义规则链

* -N 新建自定义规则链
* -X 删除自定义规则链
* -E 重命名自定义规则链

## iptables NAT 表的使用

### 基本命令结构

* iptables -t nat 命令 规则链 规则
  * PREROUTING 目的地址转换
  * POSTROUTING 源地址转换

### 目的地址转换

```bash
# 将到 114.115.116.117 tcp 80 端口的访问转给内网的 10.0.0.1 主机
sudo iptables -t nat -A PREROUTING -i eth0 -d 114.115.116.117 -p tcp --dport 80 -j DNAT --to-destination 10.0.0.1
```

### 源地址转换

```bash
# 来自内网 10.0.0.0/24 的网络数据包的源地址都会被替换成 eth1 接口的 111.112.113.114，然后发往外网
sudo iptables -t nat -A OSTROUTING -s 10.0.0.0/24 -o eth1 -j SNAT --to-source 111.112.113.114
```
