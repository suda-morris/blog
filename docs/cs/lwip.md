# 𝙇𝙬𝙄𝙋 基础

![TCP/IP协议栈](../.vuepress/public/images/cs/lwip/tcp_ip_stack.png)

## 标准以太网数据帧格式

![Ethernet_Frame](../.vuepress/public/images/cs/lwip/ethernet_frame.png)

## LwIP 的网络接口管理

LwIP 使用 **netif** 结构体来描述硬件网络接口，并通过 `netif_add` 函数将其挂载到全局 **netif 链表**中。

![网卡链表](../.vuepress/public/images/cs/lwip/netif_list.png)

### netif 结构体

```c
/* struct netif 用于描述不同类型的网卡，在网卡初始化方法中，用户需要指定如下成员：
** hwaddr_len, hwaddr[], mtu, flags
*/
struct netif
{
    /* 如果支持多网卡，则使用单向链表来管理同一设备的多个网卡 */
#if !LWIP_SINGLE_NETIF
    struct netif *next;
#endif

#if LWIP_IPV4
    /* 网络字节序表示的 IPv4 地址，子网掩码，默认网关 */
    ip_addr_t ip_addr;
    ip_addr_t netmask;
    ip_addr_t gw;
#endif /* LWIP_IPV4 */
#if LWIP_IPV6
    /* 数组保存多个 IPv6 地址 */
    ip_addr_t ip6_addr[LWIP_IPV6_NUM_ADDRESSES];
    /* 每个 IPv6 地址的状态：临时的还是首选的 */
    u8_t ip6_addr_state[LWIP_IPV6_NUM_ADDRESSES];
#if LWIP_IPV6_ADDRESS_LIFETIMES
    /* 每个 IPv6 地址的剩余有效时间以及总共有效时间，单位：秒 */
    /* IP6_ADDR_LIFE_STATIC 表示这个地址是静态分配的 */
    u32_t ip6_addr_valid_life[LWIP_IPV6_NUM_ADDRESSES];
    u32_t ip6_addr_pref_life[LWIP_IPV6_NUM_ADDRESSES];
#endif /* LWIP_IPV6_ADDRESS_LIFETIMES */
#endif /* LWIP_IPV6 */
    /* 此函数由以太网设备驱动程序调用，将数据包传递给 TCP/IP 协议栈 */
    /* 对于以太网设备，通常是 ethernet_input() */
    netif_input_fn input;
#if LWIP_IPV4
    /* 此函数由 IPv4 模块调用，该函数会解析得到硬件地址，然后发送数据包 */
    /* 对于以太网设备，通常是 etharp_output() */
    netif_output_fn output;
#endif /* LWIP_IPV4 */
    /* 此函数由 ARP 模块调用，用于实现在数据链路层发送数据 */
    netif_linkoutput_fn linkoutput;
#if LWIP_IPV6
    /* 此函数由 IPv6 模块调用，该函数会解析得到硬件地址，然后发送数据包 */
    /* 对于以太网设备，通常是 ethip6_output() */
    netif_output_ip6_fn output_ip6;
#endif /* LWIP_IPV6 */
#if LWIP_NETIF_STATUS_CALLBACK
    /* 当网卡状态设置为 up 或者 down 时，此函数会被调用 */
    netif_status_callback_fn status_callback;
#endif /* LWIP_NETIF_STATUS_CALLBACK */
#if LWIP_NETIF_LINK_CALLBACK
    /* 当网卡的数据链路设置为 up 或者 down 时，此函数会被调用 */
    netif_status_callback_fn link_callback;
#endif /* LWIP_NETIF_LINK_CALLBACK */
#if LWIP_NETIF_REMOVE_CALLBACK
    /* 当网卡被移除时，此函数会被调用 */
    netif_status_callback_fn remove_callback;
#endif /* LWIP_NETIF_REMOVE_CALLBACK */
    /* 用于将网卡的私有数据传递给上层 */
    void *state;
#ifdef netif_get_client_data
    void *client_data[LWIP_NETIF_CLIENT_DATA_INDEX_MAX + LWIP_NUM_NETIF_CLIENT_DATA];
#endif
#if LWIP_NETIF_HOSTNAME
    /* 网卡的主机名，设置为 NULL 也合法 */
    const char *hostname;
#endif /* LWIP_NETIF_HOSTNAME */
#if LWIP_CHECKSUM_CTRL_PER_NETIF
    u16_t chksum_flags;
#endif /* LWIP_CHECKSUM_CTRL_PER_NETIF*/
    /* 最大传输单元（以字节为单位），对于以太网，一般设为 1500 */
    /* IP 层会根据该字段来决定是否需要对数据包进行分片处理 */
    u16_t mtu;
#if LWIP_IPV6 && LWIP_ND6_ALLOW_RA_UPDATES
    /* 最大传输单元（以字节为单位），由 RA 来更新 */
    u16_t mtu6;
#endif /* LWIP_IPV6 && LWIP_ND6_ALLOW_RA_UPDATES */
    /* 数据链路层的硬件地址 */
    u8_t hwaddr[NETIF_MAX_HWADDR_LEN];
    /* 硬件地址长度，以太网是 6 字节 */
    u8_t hwaddr_len;
    /* 网卡状态信息标志位，包括网卡功能使能、广播使能、ARP 使能等 */
    u8_t flags;
    /* 网卡的名字，蓝牙设备的网卡名字可以使 bt，WLAN 设备的名字可以是 wl */
    /* 如果网卡具有相同的名字，需要通过 num 字段来进一步区分 */
    char name[2];
    /* 网卡的标号，可用来标志同种类型的不同网卡 */
    u8_t num;
#if LWIP_IPV6_AUTOCONFIG
    /* 是否使能 IPv6 自动配置 */
    u8_t ip6_autoconfig_enabled;
#endif /* LWIP_IPV6_AUTOCONFIG */
#if LWIP_IPV6_SEND_ROUTER_SOLICIT
    /* 剩余待发送的路由请求消息的数量 */
    u8_t rs_count;
#endif /* LWIP_IPV6_SEND_ROUTER_SOLICIT */
#if MIB2_STATS
    /* 链路类型 */
    u8_t link_type;
    /* 预估的链路层速率 */
    u32_t link_speed;
    /* 最近一次链路层状态变化的时间（建立或者断开链接）*/
    u32_t ts;
    /* 计数器 */
    struct stats_mib2_netif_ctrs mib2_counters;
#endif /* MIB2_STATS */
#if LWIP_IPV4 && LWIP_IGMP
    /* 可以调用此函数来向以太网 MAC 的组播过滤表中添加或删除条目 */
    netif_igmp_mac_filter_fn igmp_mac_filter;
#endif /* LWIP_IPV4 && LWIP_IGMP */
#if LWIP_IPV6 && LWIP_IPV6_MLD
    /* 可以调用此函数来向以太网 MAC 的 IPv6 组播过滤表中添加或删除条目 */
    netif_mld_mac_filter_fn mld_mac_filter;
#endif /* LWIP_IPV6 && LWIP_IPV6_MLD */
#if LWIP_NETIF_USE_HINTS
    struct netif_hint *hints;
#endif /* LWIP_NETIF_USE_HINTS */
#if ENABLE_LOOPBACK
    /* 待发送给自己的数据包列表 */
    struct pbuf *loop_first;
    struct pbuf *loop_last;
#if LWIP_LOOPBACK_MAX_PBUFS
    u16_t loop_cnt_current;
#endif /* LWIP_LOOPBACK_MAX_PBUFS */
#endif /* ENABLE_LOOPBACK */
};
```

### netif_add 函数

在调用 `netif_add` 函数之前需要初始化主机的 IP 地址，子网掩码，网关等信息：

`IP4_ADDR(&ipaddr,192,168,1,100)`

`ip_addr_set_zero_ip4(&ipaddr)`

```c
/**
 * @brief 向 LwIP 中添加新的网卡
 *
 * @param netif：netif 结构体（调用函数之前需要为该结构体分配好内存）
 * @param ipaddr：该网卡的 IP 地址
 * @param netmask：该网卡的子网掩码
 * @param gw：该网卡的默认网关
 * @param state： 该网卡的私有数据（LwIP 无法得知该数据的具体含义）
 * @param init：初始化该网卡时的回调函数
 * @param input： 将数据包传递给 LwIP 上层协议的回调函数。如果没有操作系统，建议使用 netif_input，它会将数据包直接传给协议栈；如果有操作系统，建议使用 tcpip_input，它会向 TCPIP 线程发送一个通知。这两个函数会根据网卡的 NETIF_FLAG_ETHARP 和 NETIF_FLAG_ETHERNET 标志来决定将数据包转发给 ethernet_input 函数还是 ip_input 函数。
 */
struct netif * netif_add(struct netif *netif,
#if LWIP_IPV4
          const ip4_addr_t *ipaddr, const ip4_addr_t *netmask, const ip4_addr_t *gw,
#endif /* LWIP_IPV4 */
          void *state, netif_init_fn init, netif_input_fn input)
{
#if LWIP_IPV6
  s8_t i;
#endif
  LWIP_ASSERT_CORE_LOCKED();

#if LWIP_SINGLE_NETIF
  if (netif_default != NULL) {
    LWIP_ASSERT("single netif already set", 0);
    return NULL;
  }
#endif

  LWIP_ERROR("netif_add: invalid netif", netif != NULL, return NULL);
  LWIP_ERROR("netif_add: No init function given", init != NULL, return NULL);

#if LWIP_IPV4
  if (ipaddr == NULL) {
    ipaddr = ip_2_ip4(IP4_ADDR_ANY);
  }
  if (netmask == NULL) {
    netmask = ip_2_ip4(IP4_ADDR_ANY);
  }
  if (gw == NULL) {
    gw = ip_2_ip4(IP4_ADDR_ANY);
  }

  /* 清空网卡之前的 IP 地址，子网掩码，默认网关等字段的信息 */
  ip_addr_set_zero_ip4(&netif->ip_addr);
  ip_addr_set_zero_ip4(&netif->netmask);
  ip_addr_set_zero_ip4(&netif->gw);
  netif->output = netif_null_output_ip4;
#endif /* LWIP_IPV4 */
#if LWIP_IPV6
  for (i = 0; i < LWIP_IPV6_NUM_ADDRESSES; i++) {
    ip_addr_set_zero_ip6(&netif->ip6_addr[i]);
    netif->ip6_addr_state[i] = IP6_ADDR_INVALID;
#if LWIP_IPV6_ADDRESS_LIFETIMES
    netif->ip6_addr_valid_life[i] = IP6_ADDR_LIFE_STATIC;
    netif->ip6_addr_pref_life[i] = IP6_ADDR_LIFE_STATIC;
#endif /* LWIP_IPV6_ADDRESS_LIFETIMES */
  }
  netif->output_ip6 = netif_null_output_ip6;
#endif /* LWIP_IPV6 */
  NETIF_SET_CHECKSUM_CTRL(netif, NETIF_CHECKSUM_ENABLE_ALL);
  netif->mtu = 0;
  netif->flags = 0;
#ifdef netif_get_client_data
  memset(netif->client_data, 0, sizeof(netif->client_data));
#endif /* LWIP_NUM_NETIF_CLIENT_DATA */
#if LWIP_IPV6
#if LWIP_IPV6_AUTOCONFIG
  /* 默认不会自动配置 IPv6 地址 */
  netif->ip6_autoconfig_enabled = 0;
#endif /* LWIP_IPV6_AUTOCONFIG */
  nd6_restart_netif(netif);
#endif /* LWIP_IPV6 */
#if LWIP_NETIF_STATUS_CALLBACK
  netif->status_callback = NULL;
#endif /* LWIP_NETIF_STATUS_CALLBACK */
#if LWIP_NETIF_LINK_CALLBACK
  netif->link_callback = NULL;
#endif /* LWIP_NETIF_LINK_CALLBACK */
#if LWIP_IGMP
  netif->igmp_mac_filter = NULL;
#endif /* LWIP_IGMP */
#if LWIP_IPV6 && LWIP_IPV6_MLD
  netif->mld_mac_filter = NULL;
#endif /* LWIP_IPV6 && LWIP_IPV6_MLD */
#if ENABLE_LOOPBACK
  netif->loop_first = NULL;
  netif->loop_last = NULL;
#endif /* ENABLE_LOOPBACK */

  /* 记录网卡的信息 */
  netif->state = state;
  netif->num = netif_num;
  netif->input = input;

  NETIF_RESET_HINTS(netif);
#if ENABLE_LOOPBACK && LWIP_LOOPBACK_MAX_PBUFS
  netif->loop_cnt_current = 0;
#endif /* ENABLE_LOOPBACK && LWIP_LOOPBACK_MAX_PBUFS */

#if LWIP_IPV4
  /* 设置网卡的 IP 地址，子网掩码，默认网关 */
  netif_set_addr(netif, ipaddr, netmask, gw);
#endif /* LWIP_IPV4 */

  /* 调用用户自定义的网卡初始化函数 */
  if (init(netif) != ERR_OK) {
    return NULL;
  }
#if LWIP_IPV6 && LWIP_ND6_ALLOW_RA_UPDATES
  /* Initialize the MTU for IPv6 to the one set by the netif driver.
     This can be updated later by RA. */
  netif->mtu6 = netif->mtu;
#endif /* LWIP_IPV6 && LWIP_ND6_ALLOW_RA_UPDATES */

/* 为当前网卡确定唯一的 num */
#if !LWIP_SINGLE_NETIF
  {
    struct netif *netif2;
    int num_netifs;
    do {
      if (netif->num == 255) {
        netif->num = 0;
      }
      num_netifs = 0;
      for (netif2 = netif_list; netif2 != NULL; netif2 = netif2->next) {
        LWIP_ASSERT("netif already added", netif2 != netif);
        num_netifs++;
        LWIP_ASSERT("too many netifs, max. supported number is 255", num_netifs <= 255);
        if (netif2->num == netif->num) {
          netif->num++;
          break;
        }
      }
    } while (netif2 != NULL);
  }
  if (netif->num == 254) {
    netif_num = 0;
  } else {
    netif_num = (u8_t)(netif->num + 1);
  }

  /* 将当前网卡插入到全局的 netif_list 链表中，插入方式：头插 */
  netif->next = netif_list;
  netif_list = netif;
#endif /* "LWIP_SINGLE_NETIF */
  mib2_netif_added(netif);

#if LWIP_IGMP
  /* IGMP 开始工作 */
  if (netif->flags & NETIF_FLAG_IGMP) {
    igmp_start(netif);
  }
#endif /* LWIP_IGMP */

  LWIP_DEBUGF(NETIF_DEBUG, ("netif: added interface %c%c IP",
                            netif->name[0], netif->name[1]));
#if LWIP_IPV4
  LWIP_DEBUGF(NETIF_DEBUG, (" addr "));
  ip4_addr_debug_print(NETIF_DEBUG, ipaddr);
  LWIP_DEBUGF(NETIF_DEBUG, (" netmask "));
  ip4_addr_debug_print(NETIF_DEBUG, netmask);
  LWIP_DEBUGF(NETIF_DEBUG, (" gw "));
  ip4_addr_debug_print(NETIF_DEBUG, gw);
#endif /* LWIP_IPV4 */
  LWIP_DEBUGF(NETIF_DEBUG, ("\n"));

  netif_invoke_ext_callback(netif, LWIP_NSC_NETIF_ADDED, NULL);

  return netif;
}
```

### 初始化 LwIP 的一般流程

![初始化 LwIP](../.vuepress/public/images/cs/lwip/setup_lwip.png)

## LwIP 的内存管理

LwIP 的内存管理机制大致上可以分成三种：

1. C 标准库自带的内存分配策略（即使用 malloc、free等函数，这些函数的**执行时间是不确定的**）
2. LwIP 的动态内存堆分配策略
3. LwIP 的动态内存池分配策略

::: tip LwIP 使用动态内存池的原因

LwIP 中有很多固定的数据结构空间，比如 TCP 首部，UDP 首部，IP 首部，Ethernet 首部等。采用内存池策略分配这些固定大小的内存空间，可以大大提升效率，还不会产生内存碎片。

:::

![LwIP内存管理](https://s1.ax1x.com/2018/08/01/PwhSgK.png)

- 将MEM_LIBC_MALLOC设置为1，表明使用标准C库自带的内存分配策略
- 将MEMP_MEM_MALLOC设置为1，表明使用LwIP自己的动态内存堆分配策略
- LwIP还支持内存池，不过在ESP-IDF中并没有被使能。相较于内存堆的动态分配，内存池效率更高，碎片少，但是会消耗更多的内存



## 网络数据包

> LwIP的缓冲管理机制的功能是尽量避免内存拷贝，尽量较少对内存和空间的需求，提高程序的执行效率。LwIP使用数据结构pbuf来描述内存的缓冲数据包。

![pbuf结构体](https://s1.ax1x.com/2018/08/01/Pw4Mz6.png)

- 由于实际发送或接收的数据包长度不一，而每个pbuf只能管理一部分数据，因此对于大容量的数据包，就必须使用多个pbuf才能完整地描述它
- type表明了该pbuf的类型，目前LwIP定义了四种类型的pbuf，分别是：`PBUF_RAM`，`PBUF_ROM`，`PBUF_REF`，`PBUF_POOL`

![pbuf类型定义](https://s1.ax1x.com/2018/08/01/Pw4RWq.png)

- PBUF_RAM类型的pbuf是通过内存堆分配得到的，LwIP协议栈和应用程序要传递的数据一般都使用该类型的pbuf。
- PBUF_POOL类型的pbuf是通过内存池分配得到的，由于分配此类型的pbuf可以快速完成，适合中断处理，因此它更多地应用在网络设备驱动层。
- PBUF_REF和PBUF_ROM类型的pbuf基本相同，他们都是从内存池中申请分配pbuf结构首部空间，而不申请数据区的空间。两者的区别在于，前者指向RAM空间内的某段数据，后者指向ROM空间内的某段数据。

![pbuf结构](https://s1.ax1x.com/2018/08/10/P63kMq.png)

### pbuf管理API

> 当使用Netconn API时，则使用netbuf（网络缓冲）发送/接收数据，netbuf只是pbuf结构的封装，它可容纳分配的或引用的数据。

![pbuf管理API](https://s1.ax1x.com/2018/08/10/P61IaD.png)

## 

::: warning HTTP 协议在物联网系统中的劣势


1. HTTP 是一种同步协议，客户端需要等待服务器的响应才可以进行下一步工作（在客户端数量多、网络不可靠的场景下，实现同步通信很困难）
2. HTTP 是单向的，客户端只能主动向服务器发出数据，无法被动接收来自网络的数据（不适用于实时控制的场合）
3. HTTP 有许多帧头和规则，是一种重量级的协议（实现在物联网设备中需要耗费大量的系统资源）

:::

## LwIP架构

![LwIP架构](https://s1.ax1x.com/2018/08/09/PyrZkR.png)

## 进程模型

> 进程模型是指TCP/IP协议栈的各协议入IP协议、TCP协议、ICMP协议等是如何实现的。

* TCP/IP协议栈的每个协议都通过一个不同的进程实现。在该模型下，每个进程都严格地与一个协议相对应。这种进程模型的优点是网络协议的每一层都很清晰，每一层都可以随时参与系统运行。该模型的缺点是进程间的上下文切换比较频繁，系统将为频繁的上下文切换付出较大的代价。
* TCP/IP协议栈驻留在操作系统的内核中，应用程序通过系统调用与TCP/IP协议栈通信。该模型下，各协议栈并非严格地与一个进程相对应。
* TCP/IP协议栈驻留在同一个进程中，独立于操作系统内核空间。LwIP采用正是这种方式，LwIP作为一个独立的进程，运行在用户空间内，其优点是可以方便地移植到不同的操作系统中运行。



## ARP处理

> ARP协议是TCP/IP协议的基础，本质是实现IP地址与底层物理地址的相互转换。ARP协议的核心是ARP缓存表，而ARP协议的实质就是对缓存表的建立、更新、查询等操作。ARP缓存表是由若干缓存表项组成，在LwIP中，描述缓存表项的数据结构叫etharp_entry。

![ARP协议数据包格式](https://s1.ax1x.com/2018/08/02/P0CQUA.png)

```c
struct etharp_entry {
#if ARP_QUEUEING
  /** Pointer to queue of pending outgoing packets on this ARP entry. */
  struct etharp_q_entry *q;
#else /* ARP_QUEUEING */
  /** Pointer to a single pending outgoing packet on this ARP entry. */
  struct pbuf *q;
#endif /* ARP_QUEUEING */
  ip4_addr_t ipaddr;
  struct netif *netif;
  struct eth_addr ethaddr;
  u16_t ctime;
  u8_t state;
};
```

* ipaddr存放IP地址，ethaddr存放物理地址，state表示缓存项的状态（例如是否为空，是否稳定），ctime记录ARP缓存项处于某个状态的时间，当某表项的ctime值大于规定的表项最大生存值时，LwIP内核会删除该表项。因此使用ARP功能时，必须设置一个ARP超时事件，该超时事件的基本功能就是对每个表项的ctime字段值加1，然后删除那些生存时间大于最大生存值的表项

![ARP处理流程](https://s1.ax1x.com/2018/08/02/P0PcWt.jpg)

* 函数ethernet_input根据报文首部的帧类型字段判断接收到的报文类型，如果是IP包，则将该包传递给etharp_ip_input，如果是ARP包，则将该包递交给etharp_arp_input
* 函数etharp_ip_input调用函数update_arp_entry，它是将报文首部的MAC地址和IP地址更新到ARP缓存中
* 函数etharp_arp_input首先判断接收到的ARP数据包的类型，如果是ARP请求包，那么首先判断这个包是否是给自己的，如果是给自己的，就在原有包的基础上重组一个ARP应答包发送出去；如果不是给自己的，则直接忽略而如果接收到的数据包是ARP应答包，那么就调用update_arp_entry更新ARP缓存表



## IP处理



![IP协议数据包格式](https://s1.ax1x.com/2018/08/02/P0CUbQ.png)



#### LwIP软件大致框架

![LwIP整体框架图](https://s1.ax1x.com/2018/08/02/P0keJA.jpg)

* ip_input会做各项检查，包括协议版本号，IP首部的校验值，源IP地址是否有效等，然后检测IP数据包中的目的IP地址是否与本节点的IP地址相符，如果是本节点的IP地址，则根据该IP数据包首部的协议字段判断该数据包应该被递交到哪个上层协议，并调用相应的函数。如果是UDP协议，则调用udp_input函数；如果是TCP协议，则调用tcp_input函数；如果是ICMP协议，则调用icmp_input函数；如果是IGMP协议，则调用igmp_input函数；如果都不是，则调用函数icmp_dest_unreach返回一个协议不可达ICMP数据包给源主机。如果不是本节点的IP地址，则通过调用函数ip_forward对数据包进行转发。需要注意，由于一个节点可能含有多个IP地址，因此ip_input函数会遍历网络接口链表netif_list上的netif结构变量，来查找与IP数据包中相匹配的IP地址。
* ip_output使用ip_route函数查找目标网络接口netif来发送IP数据包。当网络接口netif确定后，IP数据包通过函数ip_output_if发送出去。若ip_route没有找到合适的网络接口，则丢弃该报文，终止本次发送。函数ip_route通过遍历网络接口链表netif_list，查找与目的IIP地址在同一个子网中的网络接口，并将该网络接口返回给变量netif。



## ICMP处理

![ICMP协议数据包格式](https://s1.ax1x.com/2018/08/02/P0AVmT.jpg)

* icmp_input在ip_input中被调用，它处理接收到的ICMP数据包，并根据包类型做相应的处理。在LwIP协议栈中，它只处理ICMP回显请求包，对其他类型的ICMP包不作响应。icmp_input在处理ICMP回显请求时，首先判断该数据包是否为广播或者组播包，如果是，则直接返回，不再继续处理；如果不是，则继续判断该数据包长度是否小于ICMP回显请求头部长度，如果是则丢弃数据包；如果不是则将该ICMP报文类型字段变为0，重新计算校验和，并将IP报文首部的源IP地址和目的IP地址交换位置，并通过调用函数ip_output_if将数据包发送出去。
* 函数icmp_dest_unreach在ip_input、udp_input中被调用，它的功能是通过调用函数icmp_send_response发送一个“目的不可到达”类型的icmp报文。在函数ip_input中，当所接收的IP报文协议字段不可识别时，icmp_dest_unreach就被调用。而在UDP处理器中，若不能找到与接收的报文相对应的端口号，则icmp_dest_unreach也将被调用。
* 函数icmp_time_exceeded在ip_forward中被调用，它的功能是通过调用函数icmp_send_response发送一个“超时”类型的ICMP报文。在函数ip_forward中，当TTL减小为0时，调用该函数。



## UDP处理

![UDP协议数据包](https://s1.ax1x.com/2018/08/02/P0JfdH.png)



* 函数udp_input将检查报文的UDP校验，最终调用函数recv，将收到的报文传递给应用层程序
* 当应用层程序要通过UDP协议向外发送IP报文时，将通过调用函数udp_send实现，函数udp_send通过调用IP层的函数ip_output_if实现报文的发送
* LwIP使用链表结构体udp_pcb来保存每一个UDP会话的状态

```c
struct udp_pcb {
/* Common members of all PCB types */
  IP_PCB;

/* Protocol specific PCB members */

  struct udp_pcb *next;

  u8_t flags;
  /** ports are in host byte order */
  u16_t local_port, remote_port;

#if LWIP_MULTICAST_TX_OPTIONS
  /** outgoing network interface for multicast packets */
  ip_addr_t multicast_ip;
  /** TTL for outgoing multicast packets */
  u8_t mcast_ttl;
#endif /* LWIP_MULTICAST_TX_OPTIONS */

#if LWIP_UDPLITE
  /** used for UDP_LITE only */
  u16_t chksum_len_rx, chksum_len_tx;
#endif /* LWIP_UDPLITE */

  /** receive callback function */
  udp_recv_fn recv;
  /** user-supplied argument for the recv callback */
  void *recv_arg;
};
```



## TCP处理

![TCP协议数据包](https://s1.ax1x.com/2018/08/02/P0JULF.png)

* TCP的滑动窗口协议是用于实现流量控制的
* TCP的超时和重传机制提高了数据传输的可靠性
* 拥塞控制是通过慢启动算法和拥塞避免算法来实现的
* LwIP中含有两个定时器函数：tcp_fasttmr和tcp_slowtmr，tcp_fasttmr每250ms调用一次，tcp_slowtmr每500ms调用一次。快速定时器主要做两个方面的事情：向上层递交上层一直未接收的数据，二是发送该连接上的延迟ACK请求数据段。慢速定时器参与了较多功能，如超时与重传、拥塞控制等。



## LwIP 的三种编程接口

::: tip RAW/Callback API

直接调用协议栈各模块的函数（它们是使用**回调函数**的 API 接口，也称为 RAW API）。

优点：

* 无需操作系统支持。
* LwIP 内核把数据交给应用程序的过程只是一次简单的 API 调用，非常节省时间和空间。
* 应用程序和内核程序处于同一线程之中，节省了任务间通信和任务切换的开销。

缺点：

* 应用程序的执行会制约内核程序的执行，不同的应用程序之间也会互相制约。在应用程序执行的过程中，内核程序将不能得到运行，这会影响网络数据包的处理效率，严重地还会造成数据包堵塞而发生丢包现象。

:::

::: tip Netconn API

使用 LwIP 提供的专用 API，也称为 Sequential API，程序的执行过程基于 **open-read-write-close** 模型。Netconn API 是基于操作系统的 IPC 机制实现的，它将 LwIP 内核代码和网络应用程序分离成独立的线程。

优点：

* LwIP 线程只负责数据包的 TCP/IP 封装和拆封，不用进行数据的应用层处理，提高了系统对网络数据包的处理效率。
* 相较于 Socket API，Netconn API 避免了内核程序和网络应用程序之间的数据拷贝，提高了数据传递的效率。

缺点：

* 依赖操作系统。
* 内核程序和网络应用程序之间的数据包传递需要依靠操作系统的信号量和邮箱机制完成，耗费了更多的时间和内存。

:::

::: tip BSD Socket API

Socket 对网络连接进行了高级的抽象，使得用户可以像操作文件一样操作网络连接。LwIP 的 Socket API 是基于 Netconn API 实现的。

优点：

* 使用 Socket 编写的网络应用程序具有很好的可移植性。

缺点：

* Socket API 在内核程序和应用程序之间存在数据拷贝，降低了数据传递的效率。

:::

::: warning

LwIP 并没有实现全部的 BSD Socket API。

:::

### TCP RAW API

![TCP RAW API](https://s1.ax1x.com/2018/08/10/P6l7j0.png)

| 函数                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| struct tcp_pcb* tcp_new()                                    | 新建tcp协议控制块                                            |
| ert_t tcp_bind(struct tcp_pcb* pcb,struct ip_addr* ipaddr,u16_t port) | 绑定本地IP地址和端口号，如果ipaddr为IP_ADDR_ANY，则将连接绑定到所有的本地IP地址上 |
| struct tcp_pcb* tcp_listen(struct tcp_pcb* pcb)              | 使指定的连接开始进入监听状态，如果监听成功，就返回一个新的连接控制块pcb |
| void tcp_accepted(struct tcp_pcb* pcb)                       | 通知LwIP一个新来的连接已经被接收，这个函数通常在由tcp_accept指定的回调函数中被调用 |
| void tcp_accept(struct tcp_pcb\* pcb,err_t (\*accept)(void\* arg,struct tcp_pcb\* newpcb,err_t err)) | 指定处于监听状态的连接，在成功建立连接后要调用的回调方法     |
| err_t tcp_connect(struct tcp_pcb\* pcb,struct ip_addr\* ipaddr,u16_t port,err_t (\* connected)(void\* arg,struct tcp_pcb\* tpcb,err_t err)) | 请求连接到执行的远程主机                                     |
| err_t tcp_write(struct tcp_pcb\* pcb,void\* dataptr,u16_t len,u8_t copy) | 发送TCP数据，将要发送的数据放入发送队列中，由协议栈内核发送，copy为0则不会为发送的数据分配新的内存空间 |
| void tcp_sent(struct tcp_pcb\* pcb,err_t (\*sent)(void\* arg,struct tcp_pcb\* tpcb,u16_t len)) | 指定当远程主机成功接收数据后，应用程序调用的回调函数         |
| void tcp_recv(struct tcp_pcb\* pcb,err_t (\* recv)(void\* arg,struct tcp_pcb\* tpcb,struct pbuf\* p,err_t err)) | 指定接收数据时调用的回调函数                                 |
| void tcp_recved(struct tcp_pcb\* pcb,u16_t len)              | 用于获取接收到的数据的长度，必须在tcp_recv指定的回调函数中被调用 |
| err_t tcp_close(struct tcp_pcb\* pcb)                        | 关闭一个指定的TCP连接，调用该函数后将会释放pcb控制块所占用的内存空间 |
| void tcp_abort(struct tcp_pcb\* pcb)                         | 终止一个指定的连接，调用该函数后，pcb控制块所占用的内存空间将被释放 |
| void tcp_err(struct tcp_pcb\* pcb,void (\*err)(void\* arg,err_t err)) | 指定处理错误的回调函数                                       |



### TCP RAW API

![UDP RAW API](https://s1.ax1x.com/2018/08/10/P6lLHU.png)



### Netconn API

* 数据结构netconn描述了应用程序要使用API函数机那里一个连接的各种属性，包括了连接的类型、最近的故障代码、回调函数等。

```c
/** A netconn descriptor */
struct netconn {
  /** type of the netconn (TCP, UDP or RAW) */
  enum netconn_type type;
  /** current state of the netconn */
  enum netconn_state state;
  /** the lwIP internal protocol control block */
  union {
    struct ip_pcb  *ip;
    struct tcp_pcb *tcp;
    struct udp_pcb *udp;
    struct raw_pcb *raw;
  } pcb;
  /** the last error this netconn had */
  err_t last_err;
  
#if !LWIP_NETCONN_SEM_PER_THREAD
  /** sem that is used to synchronously execute functions in the core context */
  sys_sem_t op_completed;

#endif

  /** mbox where received packets are stored until they are fetched
      by the netconn application thread (can grow quite big) */
  sys_mbox_t recvmbox;
#if LWIP_TCP
  /** mbox where new connections are stored until processed
      by the application thread */
  sys_mbox_t acceptmbox;
#endif /* LWIP_TCP */
  /** only used for socket layer */
#if LWIP_SOCKET
  int socket;
#endif /* LWIP_SOCKET */
#if LWIP_SO_SNDTIMEO
  /** timeout to wait for sending data (which means enqueueing data for sending
      in internal buffers) in milliseconds */
  s32_t send_timeout;
#endif /* LWIP_SO_RCVTIMEO */
#if LWIP_SO_RCVTIMEO
  /** timeout in milliseconds to wait for new data to be received
      (or connections to arrive for listening netconns) */
  int recv_timeout;
#endif /* LWIP_SO_RCVTIMEO */
#if LWIP_SO_RCVBUF
  /** maximum amount of bytes queued in recvmbox
      not used for TCP: adjust TCP_WND instead! */
  int recv_bufsize;
  /** number of bytes currently in recvmbox to be received,
      tested against recv_bufsize to limit bytes on recvmbox
      for UDP and RAW, used for FIONREAD */
  int recv_avail;
#endif /* LWIP_SO_RCVBUF */
#if LWIP_SO_LINGER
   /** values <0 mean linger is disabled, values > 0 are seconds to linger */
  s16_t linger;
#endif /* LWIP_SO_LINGER */
  /** flags holding more netconn-internal state, see NETCONN_FLAG_* defines */
  u8_t flags;
#if LWIP_TCP
  /** TCP: when data passed to netconn_write doesn't fit into the send buffer,
      this temporarily stores how much is already sent. */
  size_t write_offset;
  /** TCP: when data passed to netconn_write doesn't fit into the send buffer,
      this temporarily stores the message.
      Also used during connect and close. */
  struct api_msg_msg *current_msg;
#endif /* LWIP_TCP */
  /** A callback function that is informed about events for this netconn */
  netconn_callback callback;
};
```

![Netconn API](https://s1.ax1x.com/2018/08/10/P61AED.png)

| 函数                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| struct netconn\* netconn_new_with_proto_and_callback(enum netconn_type t,u8_t proto,netconn_callback callback) | 建立一个新的netconn连接                                      |
| err_t netconn_delete(struct netconn\* conn)                  | 删除netconn所指向的连接                                      |
| err_t netconn_getaddr(struct netconn\* conn,struct ip_addr\* addr,u16_t\* port,u8_t local) | 获取conn连接的主机IP地址和端口号                             |
| err_t netconn_bind(struct netconn\* conn,struct ip_addr\* addr,u16_t port) | 将一个IP地址及端口号与conn指向的而连接绑定                   |
| err_t netconn_connect(struct netconn\* conn,struct ip_addr\* addr,u16_t port) | 将服务器端的IP地址和端口号与conn指向的连接绑定               |
| err_t netconn_disconnect(struct netconn\* conn)              | 断开conn指向的连接                                           |
| err_t netconn_listen_with_backlog(struct netconn\* conn，u8_t backlog) | 将conn指向的连接设定为监听状态                               |
| struct netconn\* netconn_accept(struct netconn\* conn)       | 接收客户端的连接，该函数会阻塞在acceptmbox邮箱上             |
| struct netbuf\* netconn_recv(struct netconn\* conn)          | 接收数据，接收到的数据被封装为netbuf结构                     |
| err_t netconn_sendto(struct netconn\* conn,struct netbuf\* buf,struct ip_addr\* addr,u16_t port) | 向一个指定的IP地址和端口号发送数据，这个函数只能用在conn类型为UDP或者RAW的连接中 |
| err_t netconn_write(struct netconn\* conn,const void\* dataptr,size_t size,u8_t apiflag) | 向相应的TCP连接上发送数据，这个函数只能用于发送TCP的报文     |
| err_t nnetconn_close(struct netconn\* conn)                  | 关闭conn指向的连接                                           |

* netconn_new_with_proto_and_callback首先调用netconn_alloc函数分配并初始化一个netconn结构，接下来该函数会构建一个api_msg消息，该消息要求内核执行函数do_newconn，最后调用函数tcpip_apimsg来将消息包装成tcpip_msg结构并发送出去。tcpip_thread函数解析该消息并调用函数do_newconn，do_newconn根据参数的类型调用函数tcp_new创建一个TCP控制块
* tcpip_thread是处理TCP/IP的内核协议栈进程，它只接收tcpip_msg结构封装的消息，并根据消息的类型来判定该消息来自物理网卡或应用层程序。如果接收到网卡的IP报文，则将该报文递交给ip_input函数；如果是应用层程序发送的消息，则通过调用消息指定的内核处理函数来完成相应的功能



### Socket API

> LwIP提供了标准BSD套接字API，它也是有序API，在内存构建于Netconn API之上。所谓“有序”是指其执行模型基于典型的阻塞式打开-读-写-关闭机制。

![Socket API](https://s1.ax1x.com/2018/08/10/P61V4H.png)



## LwIP移植

> 1. 以太网接口任务用于接收来自物理网卡的数据报文，同时将收到的报文通过FreeRTOS提供的邮箱传递给TCP/IP协议栈任务。以太网接口任务平时处于挂起状态，当硬件收到报文时，将产生接收报文中断，该终端以信号量的方式将以太网接口任务激活
> 2. 应用程序使用TCP/IP协议栈提供的Sequential API接口访问LwIP，同时这两个独立的任务需要使用FreeRTOS提供的邮箱机制实现彼此之间信息的交互。Sequential API接口函数在FreeRTOS操作系统运行环境下是“阻塞”函数，也就是说应用程序任务在调用Sequential API接口函数时，将会被阻塞，直到收到来自TCP/IP协议栈返回的消息应答
> 3. 基于LwIP的TCP/IP协议栈与应用程序运行在两个独立的任务中

![网卡驱动移植](https://s1.ax1x.com/2018/08/09/PyyVRx.jpg)

1. 以太网接口文件ethernetif.c的移植，主要包含`ethernet_low_level_init`，`ethernet_low_level_output`，`ethernetif_input`，`ethernetif_init`这几个函数的功能
   * `ethernetif_input`函数用于从底层物理网卡读取报文，并将该报文向上传递给LwIP协议栈函数ethernet_input进行处理
   * `ethernetif_init`函数指定了网络接口netif对应的主机名及网卡描述，并指定了该网卡的MAC地址，同事还指定了netif的发送数据报文函数
2. 操作系统模拟层文件sys_arch.c的移植，总的来时操作系统模拟层主要完成了与信号量、消息邮箱机制、线程相关的功能
   * 在sys_arch.h文件中对信号量、邮箱、线程对象进行重定义
   * sys_mbox_new函数，使用FreeRTOS提供的消息队列机制创建一个空的消息队列
   * sys_mbox_free函数，删除一个队列，当该队列中还有未被取出的消息时，该函数应当报错，并通知应用程序
   * sys_mbox_post函数，将消息发送到消息队列中，该函数是一个阻塞函数，当消息被发送至队列后，该函数才会退出阻塞状态
   * sys_mbox_trypost函数，用于尝试将某个消息发送至消息队列中，当消息被成功投递后，则返回成功，否则返回失败
   * sys_arch_mbox_fetch函数，用于从消息队列中取出一条消息，该函数是一个阻塞函数，调用该函数的线程若未取到消息，则在形参timeout所指定的时间内，该线程被阻塞。当超过timeout所指定的时间后，该线程恢复至就绪状态。若timeout为0，则调用该函数的线程一直被阻塞，直到收到消息
   * sys_arch_mbox_tryfetch函数尝试从消息队列中取出消息，它是一个非阻塞函数，当取到消息时，则返回成功，否则立即退出，返回队列空
   * sys_sem_new函数创建一个信号量，并根据形参的值指定好当前信号量的状态
   * sys_arch_sem_wait函数在形参timeout指定的时间被阻塞，若timeout为0，则调用该函数的线程将一直被阻塞，直到等待的信号量被释放。但该函数取到信号量时，它将返回取到的该信号量所占的时间
   * sys_sem_signal函数用于释放一个信号量
   * sys_sem_free函数用于删除一个信号量
   * sys_thread_new函数用于创建一个新的线程
   * sys_init函数是操作系统模拟层的初始化函数，主要对定时器管理数组进行了初始化
   * sys_zrch_timeouts函数用于返回当前任务的定时器管理链表首地址
   * sys_arch_protect函数和sys_arch_unprotect函数在访问临界区资源时成对使用
3. ethernet_input函数的实现在独立模式和RTOS模式时是不同的：
   * 在独立应用中，此函数必须被插入到应用的主循环中，以便轮询任何收到的包
   * 在RTOS应用中，此函数为一个阻塞线程，只有当得到所等待的信号量时才处理接收到的数据包。当以太网外设收到数据并产生中断时，会在中断处理函数中释放此信号量



## LwIP配置

> LwIP提供了名为lwipopts.h的文件，它允许用户充分配置栈及其所有模块。用户不需要定义所有LwIP选项：如果未定义某选项，则使用opt.h文件中定义的默认值

* 内存配置

![LwIP内存配置](https://s1.ax1x.com/2018/08/10/P6GG5D.png)