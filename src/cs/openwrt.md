# OpenWRT 基础

## Flash 分区

Linux系统对闪存类存储器是采用MTD设备驱动实现的。

```bash
[    0.290000] spi-mt7621 10000b00.spi: sys_freq: 193333333
[    0.300000] m25p80 spi32766.0: w25q256 (32768 Kbytes)
[    0.300000] m25p80 spi32766.0: using chunked io
[    0.310000] 4 ofpart partitions found on MTD device spi32766.0
[    0.310000] Creating 4 MTD partitions on "spi32766.0":
[    0.320000] 0x000000000000-0x000000030000 : "u-boot"
[    0.320000] 0x000000030000-0x000000040000 : "u-boot-env"
[    0.330000] 0x000000040000-0x000000050000 : "factory"
[    0.340000] 0x000000050000-0x000002000000 : "firmware"
[    0.410000] 2 uimage-fw partitions found on MTD device firmware
[    0.410000] 0x000000050000-0x000000168da1 : "kernel"
[    0.420000] 0x000000168da1-0x000002000000 : "rootfs"
[    0.420000] mtd: device 5 (rootfs) set to be root filesystem
[    0.430000] 1 squashfs-split partitions found on MTD device rootfs
[    0.440000] 0x000000620000-0x000002000000 : "rootfs_data"
```

::: tip
系统在SPI设备上创建了4个MTD分区
:::

| 分区名 | 分区作用                                      |
| ----------- | -------------------------------------------- |
| u-boot      | 引导程序                                      |
| u-boot-env  | 引导程序的配置数据                              |
| factory     | 路由器芯片的初始化参数                           |
| firmware    | 固件分区                                      |
| kernel | 固件分区<br />Linux 内核 |
| rootfs      | 固件分区<br />文件系统子集                      |
| rootfs_rom | 固件分区<br />文件系统子集<br />只读分区子集 |
| rootfs_data | 固件分区<br />文件系统子集<br />可写分区子集      |

::: tip
分区存在子分区，kernel和rootfs就是firmware的子分区，rootfs_rom和rootfs_data就是rootfs的子分区。
:::

### 查看系统 MTD 分配

```bash
root@Widora:~# cat /proc/mtd
dev:    size   erasesize  name
mtd0: 00030000 00010000 "u-boot"
mtd1: 00010000 00010000 "u-boot-env"
mtd2: 00010000 00010000 "factory"
mtd3: 01fb0000 00010000 "firmware"
mtd4: 00118da1 00010000 "kernel"
mtd5: 01e9725f 00010000 "rootfs"
mtd6: 019e0000 00010000 "rootfs_data"
```

### 查看系统 MTD 分配

```bash
root@Widora:~# cat /proc/partitions
major   minor  #blocks    name
31       0        192   mtdblock0
31       1         64   mtdblock1
31       2         64   mtdblock2
31       3      32448   mtdblock3
31       4       1123   mtdblock4
31       5      31324   mtdblock5
31       6      26496   mtdblock6
```

### 读取/备份 factory 分区

factory 分区（位于 /dev/mtd2）保存了重要的配置参数（如MAC地址，天线匹配参数等）。

#### 查看分区内容

```bash
root@Widora:~# hexdump /dev/mtd2
0000000 7628 0001 ef0c d2af b8a9 0000 0000 0000
0000010 ffff ffff ffff ffff ffff ffff ffff ffff
0000020 0000 0000 0020 0000 ef0c d2af b8a9 ef0c
0000030 d2af b9a9 3422 2000 ffff 0100 0000 0000
0000040 0000 0022 0000 0000 0030 0000 0000 0000
0000050 0081 9400 b040 c640 c31a c2c3 c5c0 0027
0000060 ffff ffff ffff ffff ffff ffff ffff ffff
*
00000a0 c6c6 c4c4 c0c4 c4c0 c4c4 c0c4 c0c0 0000
00000b0 ffff ffff ffff ffff ffff ffff ffff ffff
*
00000f0 0000 0000 00d1 8800 0000 0000 0000 0000
0000100 ffff ffff ffff ffff ffff ffff ffff ffff
*
0000120 0000 0000 0000 0000 0000 0000 0000 0077
0000130 1d11 1d11 7f15 7f15 7f17 7f17 3b10 3b10
0000140 ffff ffff ffff ffff ffff ffff ffff ffff
*
0010000
```

#### 备份分区

使用 `dd` 命令将分区读到一个文件中，然后使用浏览器下载到本地。

```bash
root@Widora:~# dd if=/dev/mtd2 of=/www/art.bin
128+0 records in
128+0 records out
root@Widora:~# ls -l /www/art.bin
-rw-r--r--    1 root     root         65536 Apr 27 18:26 /www/art.bin
```

## 文件系统

```bash
root@Widora:/# df
Filesystem           1K-blocks      Used Available Use% Mounted on
rootfs                   26496       752     25744   3% /
/dev/root                 4864      4864         0 100% /rom
tmpfs                    63232        84     63148   0% /tmp
/dev/mtdblock6           26496       752     25744   3% /overlay
overlayfs:/overlay       26496       752     25744   3% /
tmpfs                      512         0       512   0% /dev
```

1. 引导程序启动内核完成后，由内核加载 `rootfs_rom` 只读分区来完成系统的初步启动。`rootfs_rom` 只读分区采用的是 Linux 内核支持的 **squashFS** 文件系统，加载完毕后将其挂载到 `/rom` 目录，同时也挂载为 `/` 目录。
2. 系统将使用 **JFFS2** 文件系统格式化的 `rootfs_data` 可写文件分区并将这部分挂载到 `/overlay` 目录。
3. 系统再将 `/overlay` 透明挂载为 `/` 根目录。
4. 最后将一部分内存挂载为`/tmp` 目录。

### 透明挂载根目录 /

::: tip

OpenWrt 设计的一个特点是：系统先将 `rootfs_rom` 挂载为 `/` 根目录，这样就具备了一个完整的系统，然后再将 `rootfs_data` 以透明方式挂载在 `/` 根目录上。

:::

* 最终呈现的根文件系统是由 `rootfs_rom` 和 `rootfs_data` 两个分区组合在一起的效果。
* 对任何文件的修改（增、删、改）都会记录在 `rootfs_data` 分区中。
* 读取文件内容时，首先检测 `rootfs_data` 里的状态，再检测 `roots_rom` 里的内容，最后输出结果。

::: warning

如果修改了一个名为 abc 的文件，那么在 `/rom` 里还会保留修改之前的那个 abc 文件，同时在 `/overlay` 里有修改后的 abc 文件，因此所占的空间将会倍增。这样带来的一个好处是，在任何时候，只要删除 `/overlay` 里所有的文件，就能达到恢复出厂的效果。

:::

### 常用文件夹

| 文件夹路径   | 作用                              |
| ------------ | --------------------------------- |
| /etc/        | 存放系统所有的配置文件            |
| /etc/init.d/ | 存放启动的服务脚本                |
| /etc/config/ | 存放 OpenWrt 的配置文件，包括网络 |
| /tmp/        | 存放临时文件和动态的配置文件      |
| /tmp/TZ      | 系统启动后所使用的时区参数        |

## 软件包管理器 OPKG

### 配置 OPKG

`/etc/opkg.conf` 文件保存 OPKG 相关设置：

```bash
root@Widora:/# cat /etc/opkg.conf
dest root /
dest ram /tmp
lists_dir ext /var/opkg-lists
option overlay_root /overlay
option check_signature 1
```

| 配置选项            | 说明             |
| ------------------- | ---------------- |
| dest root           | 安装目标的跟路径 |
| dest ram            | 内存临时文件路径 |
| lists_dir ext       | 软件包列表文件   |
| option overlay_root | 可写分区挂载位置 |

### 常用命令搭配

| 命令                          | 说明                               |
| ----------------------------- | ---------------------------------- |
| opkg update                   | 下载服务器上可用的软件包列表       |
| opkg upgrade \<package\>      | 升级软件包                         |
| opkg install \<package\>      | 安装软件包                         |
| opkg configure \<package\>    | 配置某一个软件包                   |
| opkg remove \<package\>       | 卸载软件包                         |
| opkg list                     | 列出全部可用的软件包               |
| opkg list-installed           | 列出已安装的软件包                 |
| opkg list-upgradable          | 列出可以升级的软件包               |
| opkg info [package\|regexp]   | 显示指定软件包的信息               |
| opkg status [package\|regexp] | 显示指定软件包的状态               |
| opkg download \<package\>     | 下载一个软件包到当前目录，但不安装 |

::: tip

软件包列表可能会比较大，因此并不保存在系统中，每次启动需要首先执行 `opkg update` 取得最新的软件包。

:::

```bash
root@Widora:/# opkg update
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/base/Packages.gz.
Updated list of available packages in /var/opkg-lists/chaos_calmer_base.
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/base/Packages.sig.
Signature check passed.
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/luci/Packages.gz.
Updated list of available packages in /var/opkg-lists/chaos_calmer_luci.
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/luci/Packages.sig.
Signature check passed.
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/management/Packages.gz.
Updated list of available packages in /var/opkg-lists/chaos_calmer_management.
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/management/Packages.sig.
Signature check passed.
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/packages/Packages.gz.
Updated list of available packages in /var/opkg-lists/chaos_calmer_packages.
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/packages/Packages.sig.
Signature check passed.
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/routing/Packages.gz.
Updated list of available packages in /var/opkg-lists/chaos_calmer_routing.
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/routing/Packages.sig.
Signature check passed.
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/telephony/Packages.gz.
Updated list of available packages in /var/opkg-lists/chaos_calmer_telephony.
Downloading http://downloads.openwrt.org/chaos_calmer/15.05.1/ramips/mt7688/packages/telephony/Packages.sig.
Signature check passed.
```

## UCI 命令系统

UCI (Unified Configuration Interface) 是 OpenWrt 中配置参数管理系统，UCI 中已经包含了网络配置、无线配置、系统信息配置等基本路由器所需的主要配置参数。

UCI 配置文件全部存储在 `/etc/config` 目录下：

```bash
root@Widora:/# ls /etc/config/
dhcp           fstab          mountd         shairport      uhttpd
dropbear       luci           network        system         wireless
firewall       mjpg-streamer  rpcd           ucitrack
```

常见的 UCI 配置：

| 配置文件             | 作用                                  |
| -------------------- | ------------------------------------- |
| /etc/config/dhcp     | 面向 LAN 口提供的 IP 地址分配服务配置 |
| /etc/config/dropbear | SSH 服务配置                          |
| /etc/config/firewall | 路由转发，端口转发，防火墙规则        |
| /etc/config/network  | 自身网络接口配置                      |
| /etc/config/system   | 时间服务器时区配置                    |
| /etc/config/wireless | 无线网络配置                          |

支持 UCI 管理模式的软件包是这样完成启动的（以 **samba** 软件为例）：

1. 启动脚本 `/etc/init.d/samba`
2. 启动脚本通过 UCI 分析库从 `/etc/config/samba` 获得启动参数
3. 启动脚本完成正常启动

::: warning

UCI 配置文件既可以使用 UCI 命令进行修改，也可以使用文本编辑器直接修改。但如果两种方式都使用，需要注意 UCI 命令修改会产生缓存，每次修改好要尽快保存确认，以免出现冲突。

:::

### UCI 文件格式

```
config 'section-type' 'section'
	option 'key' 'value'
	option 'list_key' 'list_value1'
	option 'list_key' 'list_value2'
```

::: tip

UCI 允许只有 **section-type** 的匿名配置节点。

:::

### UCI 命令读写配置

```bash
uci [<option>] <command> [<arguments>]
```

#### 读取类语法

| 命令                                          | 说明                   |
| --------------------------------------------- | ---------------------- |
| uci get \<config\>.\<section\>                | 获取节点类型           |
| uci get \<config\>.\<section\>.\<option\>     | 获取取得一个值         |
| uci show                                      | 显示全部 UCI 配置      |
| uci show <config\>                            | 显示指定文件配置       |
| uci show <config\>.\<section\>                | 显示指定节点的配置     |
| uci show \<config\>.\<section\>.\<option\>    | 显示指定选项配置       |
| uci changes <config\>                         | 显示尚未生效的修改记录 |
| uci show -X \<config\>.\<section\>.\<option\> | 显示匿名节点           |

#### 写入类语法

| 命令                                                        | 说明                          |
| ----------------------------------------------------------- | ----------------------------- |
| uci add \<config\> \<section-type\>                         | 增加一个匿名节点              |
| uci set \<config\>.\<section\> = \<section-type\>           | 增加一个节点/修改节点类型     |
| uci set \<config\>.\<section\>.\<option\> = \<value\>       | 增加一个选项值/修改一个选项值 |
| uci add_list \<config\>.\<section\>.\<option\> = \<value\>  | 在列表中增加一个值            |
| uci delete <config\>.\<section\>                            | 删除指定节点                  |
| uci delete <config\>.\<section\>.\<option\>                 | 删除指定选项                  |
| uci delete <config\>.\<section\>.\<list\>                   | 删除列表                      |
| uci del_list \<config\>.\<section\>.\<option\> = \<string\> | 删除列表中的一个值            |
| uci commit <config\>                                        | 使修改生效                    |

::: warning

UCI 读取总是先读取内存中的缓存，然后再读取文件中的。进行过增删改操作后要执行生效指令，否则所有的修改只留存在缓存中。

:::

## 常用配置操作

### 查看 system 配置

```bash
root@Widora:/# cat /etc/config/system
config system
	option hostname	Widora
	option timezone	CST-8

config timeserver ntp
	list server	0.openwrt.pool.ntp.org
	list server	1.openwrt.pool.ntp.org
	list server	2.openwrt.pool.ntp.org
	list server	3.openwrt.pool.ntp.org
	option enabled 1
	option enable_server 0
root@Widora:/# uci show system
system.@system[0]=system
system.@system[0].hostname='Widora'
system.@system[0].timezone='CST-8'
system.ntp=timeserver
system.ntp.server='0.openwrt.pool.ntp.org' '1.openwrt.pool.ntp.org' '2.openwrt.pool.ntp.org' '3.openwrt.pool.ntp.org'
system.ntp.enabled='1'
system.ntp.enable_server='0'
```

### 查看网络配置

```bash
root@Widora:/# cat /etc/config/network

config interface 'loopback'
	option ifname 'lo'
	option proto 'static'
	option ipaddr '127.0.0.1'
	option netmask '255.0.0.0'

config globals 'globals'
	option ula_prefix 'fdff:c5b2:821c::/48'

config interface 'lan'
	option force_link '1'
	option macaddr '0c:ef:af:d2:a9:b9'
	option type 'bridge'
	option proto 'static'
	option ipaddr '192.168.8.1'
	option netmask '255.255.255.0'
	option ip6assign '60'
	option ifname 'eth0.1'

config interface 'wan'
	option force_link '1'
	option macaddr '0c:ef:af:d2:a9:b8'
	option proto 'dhcp'
	option ifname 'eth0.2'

config interface 'wan6'
	option proto 'dhcpv6'
	option ifname 'eth0.2'

config switch
	option name 'switch0'
	option reset '1'
	option enable_vlan '1'

config switch_vlan
	option device 'switch0'
	option vlan '1'
	option ports '1 2 3 4 6t'

config switch_vlan
	option device 'switch0'
	option vlan '2'
	option ports '0 6t'
```

### 重启网络使配置生效

```bash
root@Widora:~# /etc/init.d/network restart
```

### 开启 Wi-Fi

```bash
uci set wireless.radio0.disabled=0 # 使能 Wi-Fi
uci commit wireless # 使配置生效
wifi # 启动 Wi-Fi
```

### 查看当前网络

```bash
root@Widora:/# ifconfig
br-lan    Link encap:Ethernet  HWaddr 0C:EF:AF:D2:A9:B9
          inet addr:192.168.8.1  Bcast:192.168.8.255  Mask:255.255.255.0
          inet6 addr: fe80::eef:afff:fed2:a9b9/64 Scope:Link
          inet6 addr: fdff:c5b2:821c::1/60 Scope:Global
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:574264 errors:0 dropped:0 overruns:0 frame:0
          TX packets:1217669 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:48102567 (45.8 MiB)  TX bytes:1634912136 (1.5 GiB)

eth0      Link encap:Ethernet  HWaddr 0C:EF:AF:D2:A9:B8
          inet6 addr: fe80::eef:afff:fed2:a9b8/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:1225320 errors:0 dropped:0 overruns:0 frame:0
          TX packets:579507 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:1641989813 (1.5 GiB)  TX bytes:59132909 (56.3 MiB)
          Interrupt:5

eth0.1    Link encap:Ethernet  HWaddr 0C:EF:AF:D2:A9:B8
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:1 errors:0 dropped:1 overruns:0 frame:0
          TX packets:3544 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:46 (46.0 B)  TX bytes:244206 (238.4 KiB)

eth0.2    Link encap:Ethernet  HWaddr 0C:EF:AF:D2:A9:B8
          inet addr:192.168.1.5  Bcast:192.168.1.255  Mask:255.255.255.0
          inet6 addr: fe80::eef:afff:fed2:a9b8/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:1176423 errors:0 dropped:10706 overruns:0 frame:0
          TX packets:575928 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:1617670919 (1.5 GiB)  TX bytes:56565373 (53.9 MiB)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:294 errors:0 dropped:0 overruns:0 frame:0
          TX packets:294 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:41961 (40.9 KiB)  TX bytes:41961 (40.9 KiB)

ra0       Link encap:Ethernet  HWaddr 0C:EF:AF:D2:A9:B8
          inet6 addr: fe80::eef:afff:fed2:a9b8/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:641847 errors:830 dropped:0 overruns:0 frame:0
          TX packets:1228723 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:70965355 (67.6 MiB)  TX bytes:1630822247 (1.5 GiB)
          Interrupt:6
```

| 网络设备名 | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| br-lan     | 虚拟设备，LAN 口桥接设备，包含通过 LAN 口和 WAN 口连入系统的设备统一桥接 |
| eth0       | 真实设备，CPU 内部到交换机芯片之间只有一个接口               |
| eth0.1     | 虚拟设备，由 VLAN 划分的有线的 LAN 口，VLAN 编号为 1         |
| eth0.2     | 虚拟设备，由 VLAN 划分的有线的 LAN 口，VLAN编号为 2          |
| lo         | 虚拟设备，回环设备                                           |
| ra0        | 真实设备，启动 Wi-Fi 后将会产生此无线设备                    |
| pppoe-wan  | 虚拟设备，是 PPPoE 拨号上网成功后产生的                      |

### 查看 br-lan 桥状态

```bash
root@Widora:/# brctl show
bridge name	bridge id			STP enabled	interfaces
br-lan		7fff.0cefafd2a9b9	no			eth0.1
											ra0
```

### 查看内核日志

```bash
root@Widora:/# logread
```

### 查看当前 VLAN 划分

```bash
root@Widora:/# swconfig dev switch0 show
Global attributes:
	enable_vlan: 1
	alternate_vlan_disable: 0
	bc_storm_protect: 0
	led_frequency: 0
Port 0:
	disable: 0
	doubletag: 0
	untag: 1
	led: 5
	lan: 1
	recv_bad: 0
	recv_good: 2205
	tr_bad: 0
	tr_good: 52155
	pvid: 2
	link: port:0 link:up speed:100baseT full-duplex
Port 1:
	disable: 0
	doubletag: 0
	untag: 1
	led: 5
	lan: 1
	recv_bad: 0
	recv_good: 0
	tr_bad: 0
	tr_good: 0
	pvid: 1
	link: port:1 link:down
Port 2:
	disable: 0
	doubletag: 0
	untag: 1
	led: 5
	lan: 1
	recv_bad: 0
	recv_good: 0
	tr_bad: 0
	tr_good: 0
	pvid: 1
	link: port:2 link:down
Port 3:
	disable: 0
	doubletag: 0
	untag: 1
	led: 5
	lan: 1
	recv_bad: 0
	recv_good: 0
	tr_bad: 0
	tr_good: 0
	pvid: 1
	link: port:3 link:down
Port 4:
	disable: 0
	doubletag: 0
	untag: 1
	led: 5
	lan: 1
	recv_bad: 0
	recv_good: 0
	tr_bad: 0
	tr_good: 0
	pvid: 1
	link: port:4 link:down
Port 5:
	disable: 1
	doubletag: 0
	untag: 0
	led: ???
	lan: 1
	recv_bad: 0
	recv_good: 0
	tr_bad: 0
	tr_good: 0
	pvid: 0
	link: port:5 link:down
Port 6:
	disable: 0
	doubletag: 0
	untag: 0
	led: ???
	lan: ???
	recv_bad: ???
	recv_good: ???
	tr_bad: ???
	tr_good: ???
	pvid: 0
	link: port:6 link:up speed:1000baseT full-duplex
VLAN 1:
	ports: 1 2 3 4 6t
VLAN 2:
	ports: 0 6t
```

::: tip

哪个网口是 LAN， 哪个是 WAN， 是由 VLAN 划分的。VLAN1 为 LAN 口，包含 1、2、3、4 接口；VLAN2 为 WAN 口，包含了 0 接口。

:::

### 配置 WAN 口外网

#### 查看 WAN 口配置

```bash
root@Widora:/# uci show network.wan
network.wan=interface
network.wan.force_link='1'
network.wan.macaddr='0c:ef:af:d2:a9:b8'
network.wan.proto='dhcp'
network.wan.ifname='eth0.2'
```

| 选项    | 说明                                             | 可选值                                                       |
| ------- | ------------------------------------------------ | ------------------------------------------------------------ |
| ifname  | 设备接口名                                       | eth0.2                                                       |
| proto   | 协议类型                                         | static：静态 IP 地址<br />dhcp：动态获取 IP 地址<br />pppoe：拨号上网<br />pptp：远程 VPN 服务器<br />3g：连接 3G/4G 无线电话网络 |
| macaddr | WAN 口 MAC 地址，修改该地址即可实现 MAC 地址克隆 | 首次数据根据 factory 分区内参数自动生成                      |

#### 动态获取 IP 选项

| 选项    | 说明                                           | 可选值及说明                  |
| ------- | ---------------------------------------------- | ----------------------------- |
| proto   | 协议类型                                       | dhcp                          |
| ifname  | 设备名称                                       | eth0.2                        |
| macaddr | MAC 地址                                       | 根据 factory 分区自动生成的值 |
| mtu     | 最大数据包大小，默认不用设置                   | 数值                          |
| reqopts | 在向 DHCP 服务器发出请求时增加附加的 DHCP 信息 | 字符串                        |
| dns     | 使用指定的 DNS 服务器地址替代获得的 DNS        | 字符串                        |

#### 指定静态 IP 选项

| 选项      | 说明                                    | 可选值及说明                  |
| --------- | --------------------------------------- | ----------------------------- |
| proto     | 协议类型                                | static                        |
| ifname    | 设备名称                                | eth0.2                        |
| macaddr   | MAC 地址                                | 根据 factory 分区自动生成的值 |
| mtu       | 最大数据包大小，默认不用设置            | 数值                          |
| ipaddr    | WAN 口的 IP 地址                        | 字符串                        |
| netmask   | WAN 口的子网掩码                        | 字符串                        |
| gateway   | 默认网关                                | 字符串                        |
| broadcast | 广播地址                                | 字符串                        |
| dns       | 使用指定的 DNS 服务器地址替代获得的 DNS | 字符串                        |

#### PPPOE 拨号上网选项

| 选项         | 说明                              | 可选值及说明                  |
| ------------ | --------------------------------- | ----------------------------- |
| proto        | 协议类型                          | pppoe                         |
| ifname       | 设备名称                          | eth0.2                        |
| macaddr      | MAC 地址                          | 根据 factory 分区自动生成的值 |
| mtu          | 最大数据包大小，默认不用设置      | 数值                          |
| username     | 拨号使用的帐号                    | 字符串                        |
| password     | 拨号使用的密码                    | 字符串                        |
| ac           | 使用指定的访问集中器进行连接      | 字符串                        |
| service      | 连接的服务名称                    | 字符串                        |
| connect      | 连接时候执行的外部脚本            | 字符串                        |
| disconnect   | 断开连接时执行的外部脚本          | 字符串                        |
| demand       | 等待多久没有活动就断开 PPPOE 连接 | 数字，单位秒                  |
| dns          | DNS 服务器地址                    | 字符串                        |
| pppd_options | 用于 pppd 进程执行时候的附加参数  | 字符串                        |

### 配置 LAN 口服务

::: tip

LAN 口下的设备可以通过 WAN 口接入网络，也可以直接访问设备上的各项功能（系统防火墙对 LAN 口默认不做任何拦截）。

:::

#### 查看 LAN 口配置

```bash
root@Widora:~# uci show network.lan
network.lan=interface
network.lan.force_link='1'
network.lan.macaddr='0c:ef:af:d2:a9:b9'
network.lan.type='bridge'
network.lan.proto='static'
network.lan.ipaddr='192.168.8.1'
network.lan.netmask='255.255.255.0'
network.lan.ip6assign='60'
network.lan.ifname='eth0.1'
```

| 选项    | 说明                                             | 可选值及说明                         |
| ------- | ------------------------------------------------ | ------------------------------------ |
| ifname  | 设备名称                                         | eth0.1                               |
| proto   | 协议类型                                         | static                               |
| macaddr | MAC 地址                                         | 根据 factory 分区自动生成的值        |
| type    | 网络类型                                         | bridge，桥模式（这样才有交换机功能） |
| ipaddr  | LAN 口的 IP 地址，用于局域网内其它设备访问路由器 | 字符串                               |
| netmask | LAN 口的子网掩码                                 | 字符串                               |

::: warning

修改过 LAN 口的配置后要重启网络以及 DHCP 服务。

```bash
root@Widora:~# /etc/init.d/network restart
root@Widora:~# /etc/odhcpd restart
```

:::

### 配置无线网络

#### 查看无线网络配置

```bash
root@Widora:~# cat /etc/config/wireless

config wifi-device 'radio0'
	option type 'ralink'
	option variant 'mt7628'
	option country 'CN'
	option hwmode '11bgn'
	option htmode 'HT40'
	option channel 'auto'
	option disabled '0'

config wifi-iface 'ap'
	option device 'radio0'
	option mode 'ap'
	option network 'lan'
	option ifname 'ra0'
	option ssid 'Widora-A9B8'
	option hidden '0'
	option encryption 'psk2'
	option key 'passworkd'

config wifi-iface 'sta'
	option device 'radio0'
	option disabled '1'
	option mode 'sta'
	option network 'wwan'
	option ifname 'apcli0'
	option ssid 'UplinkAp'
	option key 'SecretKey'
```

#### wifi-device 选项参数

| 选项    | 说明                                              | 可选值及说明                                   |
| ------- | ------------------------------------------------- | ---------------------------------------------- |
| type    | 设备类型                                          | ralink                                         |
| channel | 无线信道，不同的国家支持的信道不同                | auto 或 1～13                                  |
| hwmode  | 无线协议类型                                      | 11bgn: IEEE802.11b + IEEE802.11g + IEEE802.11n |
| htmode  | 无线频宽                                          | HT20、HT40                                     |
| disable | 关闭无线设备                                      | 0：启用；1：禁用                               |
| country | 国家类型，跟支持的频道有关，中国为 CN，支持 1～13 | CN：中国                                       |

#### wifi-iface 选项参数

| 选项       | 说明             | 可选值及说明                                                 |
| ---------- | ---------------- | ------------------------------------------------------------ |
| device     | 关联的无线设备   | radio0                                                       |
| network    | 关联网络设备类型 | lan：表示桥接到 LAN 网上<br />wwan：表示启用无线中继         |
| mode       | 无线工作模式     | ap：热点模式<br />sta：客户端模式                            |
| ssid       | 无线的名称       | 字符串                                                       |
| hidden     | 隐藏无线名称     | 0：显示名称<br />1：隐藏名称                                 |
| encryption | 无线加密方式     | none：不加密<br />psk：WPA-PSK 模式<br />psk2：WPA-PSK2 模式<br />psk-mixed：WPA-PSK / WPA-PSK2 混合模式 |
| key        | 无线密钥         | 字符串，长度为 8～64 个 ASCII 字符                           |

::: tip

修改过无线配置后需要使用命令 `wifi` 使之生效

:::

#### 查看无线网络状态

```bash
root@Widora:~# iwinfo
ra0       ESSID: "Widora-A9B8"
          Access Point: 0C:EF:AF:D2:A9:B8
          Mode: Client  Channel: 7 (2.442 GHz)
          Tx-Power: 18 dBm  Link Quality: 10/100
          Signal: -256 dBm  Noise: -82 dBm
          Bit Rate: 150.0 MBit/s
          Encryption: unknown
          Type: wext  HW Mode(s): 802.11bg
          Hardware: unknown [Generic WEXT]
          TX power offset: unknown
          Frequency offset: unknown
          Supports VAPs: no  PHY name: ra0
```

#### 搜索范围内的其它无线设备

```bash
root@Widora:~# iwinfo ra0 scan
Cell 01 - Address: 50:64:2B:4B:02:4E
          ESSID: "Xiaomi_024D"
          Mode: Master  Channel: 11
          Signal: -256 dBm  Quality: 55/100
          Encryption: WPA2 PSK (TKIP, AES-OCB)

Cell 02 - Address: 44:97:5A:EC:C5:14
          ESSID: "FAST_C514"
          Mode: Master  Channel: 1
          Signal: -256 dBm  Quality: 47/100
          Encryption: WPA2 PSK (AES-OCB)
```

##  防火墙

防火墙、DMZ（独立隔离区）、NAT 转发在 OpenWrt 系统中都是由 /etc/config/firewall 配置文件管理的。

### 防火墙命令

#### 重置防火墙

```bash
root@Widora:~# /etc/init.d/firewall reload
```

### 重启防火墙

```bash
root@Widora:~# /etc/init.d/firewall restart
```

#### 查看防火墙完整策略

```bash
root@Widora:~# iptables -L
```

### 防火墙 defaults 配置

```bash
config defaults
	option syn_flood	1			# 启用防洪水攻击
	option input		ACCEPT		# INPUT 链过滤策略
	option output		ACCEPT		# OUTPUT 链过滤策略
	option forward		REJECT		# FORWARD 链过滤策略
```

### 防火墙 zone 域配置

系统将 LAN 和 WAN 分为两个不同的 zone，它们之间是隔离的。

```bash
config zone
	option name			lan			# zone 节点名
	list   network		'lan'		# 指定绑定到该 zone 上的设备
	option input		ACCEPT
	option output		ACCEPT
	option forward		ACCEPT

config zone
	option name			wan
	list   network		'wan'
	list   network		'wan6'
	list   network		'wwan'
	option input		ACCEPT
	option output		ACCEPT
	option forward		REJECT
	option masq			1			# 传输伪装开关，WAN 必须设为 1
	option mtu_fix		1			# 数据输出时开启 MSS 钳制，WAN 必须设为 1
```

### 防火墙 forwarding 转发配置

forwarding 配置可以实现两个不同 zone 域之间的数据发送

```bash
config forwarding
	option src		lan			# 来源 zone
	option dest		wan			# 目标 zone
```

### 防火墙 rule 规则

默认情况下，所有进入 WAN 口的请求都会被拒绝，如果希望有例外，那么要通过 rule 来实现许可。

```bash
# Allow IPv4 ping
config rule
	option name			Allow-Ping
	option src			wan					# 数据源的 zone 域
	option proto		icmp				# 数据源的协议类型
	option icmp_type	echo-request
	option family		ipv4				# IP 协议类型
	option target		ACCEPT				# 规则动作

# 禁止 LAN 口的某个 IP 访问 WAN 口
config rule
	option src		lan						# 数据源的 zone 域
	option src_ip	192.168.45.2			# 数据源的 IP 地址
	option dest		wan						# 目的地的 zone 域
	option proto	tcp
	option target	REJECT

# 禁止某个 MAC 地址访问 WAN
config rule
	option dest		wan
	option src_mac	00:11:22:33:44:66		# 数据源的 MAC 地址
	option target	REJECT

# 阻塞某个 zone 上的 ICMP 流量
config rule
	option src		lan
	option proto	ICMP
	option target	DROP
```

### 防火墙 redirect 端口转发

端口转发允许访问者通过 WAN 口访问 LAN 口中的一个特定端口，并将结果转发回给访问者。

```bash
# 将 LAN 口的 80 端口开放到 WAN 口上
config redirect
	option src			wan				# 被转发来源 zone 域
	option src_dport	80				# 被转发的端口
	option dest			lan				# 转发到哪个 zone 域
	option dest_ip		192.168.16.235 	# 转发到哪个 IP 地址
	option dest_port	80				# 转发到哪个端口
	option proto		tcp				# 协议类型

# 将所有来自 WAN 口的 TCP 协议访问 22001 的请求都转发给 LAN 中的一台 80 端口的计算机
config redirect
	option src			wan
	option src_dport	22001
	option dest			lan
	option dest_port	22
	option proto		tcp

# 将 IP 地址 192.168.1.2 设置到 DMZ 隔离区
config redirect
	option src			wan
	option proto		all
	option dest_ip		192.168.1.2
```

## NTP

NTP 用来使网络中的各个计算机时间同步的一种协议，它的用途是把系统的时钟同步到 UTC 时区，其精度在局域网内可达到 0.1ms，在互联网上绝大多数情况其精度可以达到1～50ms。

配置内容如下：

```bash
root@Widora:~# cat /etc/config/system
config system
	option hostname	Widora				# 主机名
	option timezone	CST-8				# 时区

config timeserver ntp
	list server	0.openwrt.pool.ntp.org	# NTP 服务器地址
	list server	1.openwrt.pool.ntp.org
	list server	2.openwrt.pool.ntp.org
	list server	3.openwrt.pool.ntp.org
	option enabled 1					# 开启 NTP 功能
	option enable_server 0
```

::: tip

阿里云提供了 NTP 服务功能：

ntp1.aliyun.com

ntp2.aliyun.com

ntp3.aliyun.com

:::

## 服务管理

### 查看系统服务命令

```bash
root@Widora:~# ls /etc/init.d/
avahi-daemon   dbus           dropbear       led            mountd         rpcd           sysctl         system         umount
boot           dnsmasq        firewall       log            network        setnetmode     sysfixtime     telnet
cron           done           fstab          mjpg-streamer  odhcpd         shairport      sysntpd        uhttpd
```

### 服务命令的语法格式

```
服务的语法格式：/etc/init.d/服务名称 [命令]
可用命令：
		start	临时开启这个服务
		stop	临时关闭这个服务
		restart 重启当前已开启的服务，如果没有开启就开启它
		reload 	重新读取该服务的配置信息（如果服务支持的话）
		enable	设置该服务随系统一同启动
		disable	禁止该服务随系统一同启动
```
