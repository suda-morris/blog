/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1f8c8a250fa2d7ff6ecc97c2f26bce29"
  },
  {
    "url": "assets/css/0.styles.6499505b.css",
    "revision": "d5ea663310e84cd4ec7a8ee87c2a3d5b"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/arp_protocol.6e6dab0f.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "assets/img/brash_motor.78e5d626.png",
    "revision": "78e5d626f0a9e18a5fd2434b712edb98"
  },
  {
    "url": "assets/img/brashless_motor.850d54bc.png",
    "revision": "850d54bc1f29f5bb3db7ee53d23803bd"
  },
  {
    "url": "assets/img/cache_system.0bb68b0b.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "assets/img/cpu_core_system.99c3127b.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "assets/img/cpu_registers.cdba5c17.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
  },
  {
    "url": "assets/img/dma_chain.5fca630d.png",
    "revision": "5fca630de450c01698ac8265b4f53961"
  },
  {
    "url": "assets/img/dma_engine.54d9bdb7.png",
    "revision": "54d9bdb70a2295e715bd1c7546115846"
  },
  {
    "url": "assets/img/elf_format.276a740d.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
  },
  {
    "url": "assets/img/esp32_address_table.85ad7d78.png",
    "revision": "85ad7d785bd61aa4cb118f0043b0e85b"
  },
  {
    "url": "assets/img/esp32_external_memory.00b7148f.png",
    "revision": "00b7148f698a82bf10935863900e4886"
  },
  {
    "url": "assets/img/esp32_on_chip_address_table.24c64bff.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
  },
  {
    "url": "assets/img/esp32_system_clock.212a5357.png",
    "revision": "212a53578bdae5d21866d16781a2a258"
  },
  {
    "url": "assets/img/esp32_system_structure.70e29ed6.png",
    "revision": "70e29ed6a527c6a0285db28bb7845464"
  },
  {
    "url": "assets/img/ethernet_frame.f4de10c4.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "assets/img/gpio_matrix.0bccff5a.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
  },
  {
    "url": "assets/img/image_map.017b48c6.png",
    "revision": "017b48c6656dddd64aed21cad3813ae0"
  },
  {
    "url": "assets/img/infrared_modulation_demodulation.f86ad3e6.svg",
    "revision": "f86ad3e629424c9af8a216abb58ec189"
  },
  {
    "url": "assets/img/input_signal_to_peripheral.a9b187b8.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "assets/img/interrupt_matrix.dc37bcbd.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
  },
  {
    "url": "assets/img/io_mux_pad.671514cc.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
  },
  {
    "url": "assets/img/ip_protocol.f8dade33.png",
    "revision": "f8dade3399a1b809f04f3921124d38cf"
  },
  {
    "url": "assets/img/iterator.a7ae1d2a.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "assets/img/knowledge_map.12bc9800.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
  },
  {
    "url": "assets/img/linear_regression.d67e8d49.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "assets/img/linker_process.f62da9b2.jpeg",
    "revision": "f62da9b29aa53218f8907851df27f912"
  },
  {
    "url": "assets/img/logistic_regression.4ef370cc.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "assets/img/lwip_api_message.6f551817.png",
    "revision": "6f55181782841bf71f3f1aa7c953d320"
  },
  {
    "url": "assets/img/lwip_arp_process_input.35e6fc48.png",
    "revision": "35e6fc48d57f6bdd06dcc3e9e7edead8"
  },
  {
    "url": "assets/img/lwip_arp_process_output.999a53be.png",
    "revision": "999a53be718cf8bb3857986a359d349b"
  },
  {
    "url": "assets/img/lwip_arp_reply.59985110.png",
    "revision": "59985110fc7d039a3cb5c11c152a145b"
  },
  {
    "url": "assets/img/lwip_arp_request.7e489783.png",
    "revision": "7e489783ce9afbf4379c3e2ff47718fe"
  },
  {
    "url": "assets/img/lwip_heap.1ac8ef3c.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "assets/img/lwip_icmp_protocol.a19c8c2e.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "assets/img/lwip_ip_frag.c71fe3b0.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "assets/img/lwip_ip_input.2eb1bb3b.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "assets/img/lwip_ip_output.a56af61e.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
  },
  {
    "url": "assets/img/lwip_memp.1fc0c568.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
  },
  {
    "url": "assets/img/lwip_packet_message.217126c7.png",
    "revision": "217126c725e129b967094255902f19ba"
  },
  {
    "url": "assets/img/lwip_packets_into_core.85a67ff6.png",
    "revision": "85a67ff6553a1d80caff17436465fa64"
  },
  {
    "url": "assets/img/lwip_pbuf_free_0.f2634715.png",
    "revision": "f263471547a20caf3e0b2ec438161dc0"
  },
  {
    "url": "assets/img/lwip_pbuf_free_1.33781abf.png",
    "revision": "33781abf43d12a922ea4eb1bb2f74828"
  },
  {
    "url": "assets/img/lwip_pbuf_pool.e9801004.png",
    "revision": "e98010044b87e4e7c0ff77af5605c319"
  },
  {
    "url": "assets/img/lwip_pbuf_ram.408a7517.png",
    "revision": "408a7517eeb27554819334a236e3806b"
  },
  {
    "url": "assets/img/lwip_pbuf_rom_ref.64893f56.png",
    "revision": "64893f569acab92710ec71b82dabf036"
  },
  {
    "url": "assets/img/lwip_timeouts_list.51042adb.png",
    "revision": "51042adb1c6c886cfc3878b0bc89594a"
  },
  {
    "url": "assets/img/memory_map.6e8f8541.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "assets/img/mips_instruction.b1ade5f8.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
  },
  {
    "url": "assets/img/motor_category.cd3b7f87.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
  },
  {
    "url": "assets/img/netif_list.73bfcf79.png",
    "revision": "73bfcf7938735b596ec4e2538170a853"
  },
  {
    "url": "assets/img/nonlinear_regression.f58b96b1.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
  },
  {
    "url": "assets/img/output_signal_to_pad.06e891ba.png",
    "revision": "06e891bab7649f99f5a1c070de7885c6"
  },
  {
    "url": "assets/img/peripheral_clock.329fd309.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "assets/img/sbt_jvm_options.53a2af9f.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/setup_lwip.c67664dc.png",
    "revision": "c67664dc461af6d603ec1bc2e3f6a661"
  },
  {
    "url": "assets/img/sigmoid_function.24758bff.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
  },
  {
    "url": "assets/img/spi_signals.2ac41670.png",
    "revision": "2ac4167088ad40da2f88c372545f26b9"
  },
  {
    "url": "assets/img/strapping_pin.5c9a4fda.png",
    "revision": "5c9a4fda6540177c3f7f80d6862a22cc"
  },
  {
    "url": "assets/img/tcp_ip_stack.13913b2b.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "assets/img/Von_Neumann_architecture.76984515.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
  },
  {
    "url": "assets/js/10.63dd08ba.js",
    "revision": "89b040edeff90c9421b2f07f14ee689a"
  },
  {
    "url": "assets/js/11.b2c6828c.js",
    "revision": "abb4b003169f91252afb22805d89b6e9"
  },
  {
    "url": "assets/js/12.e4f40a1f.js",
    "revision": "57499046d275db4e82d94eb968523ec8"
  },
  {
    "url": "assets/js/13.1d698e03.js",
    "revision": "5cd5c698ae466c7039a32a7db9a3b665"
  },
  {
    "url": "assets/js/14.0c15b10a.js",
    "revision": "094fe01c7f9eecaddada695de0c2bf5d"
  },
  {
    "url": "assets/js/15.bd6c30d9.js",
    "revision": "fe2b40937d0598f718dda8b982e916c8"
  },
  {
    "url": "assets/js/16.5a1ce9aa.js",
    "revision": "d2537b7ddb30b68c216ebd04309d8c04"
  },
  {
    "url": "assets/js/17.aba0ccf6.js",
    "revision": "832759383af15b39d1b034dbe3998948"
  },
  {
    "url": "assets/js/18.8f6252a3.js",
    "revision": "3f4e5558ccce933197936a977e719618"
  },
  {
    "url": "assets/js/19.61b2779d.js",
    "revision": "92031e72c2796e6a32975ee17ec58608"
  },
  {
    "url": "assets/js/2.003d712b.js",
    "revision": "ea86b75174c6271fb0c7342ffbd68668"
  },
  {
    "url": "assets/js/20.7538a448.js",
    "revision": "f72154f7f73c06d6fac67293d294dbd6"
  },
  {
    "url": "assets/js/21.c1dd1533.js",
    "revision": "4c7e4265cba308605271f795c12caad6"
  },
  {
    "url": "assets/js/22.544c4b74.js",
    "revision": "732ba7ba338a0270db545248dbf24c7b"
  },
  {
    "url": "assets/js/23.d0c0849c.js",
    "revision": "c8ce0092f379871f8884288972ab8b7c"
  },
  {
    "url": "assets/js/24.b3a63395.js",
    "revision": "c83f770fed1a6694213c45ffc96a099a"
  },
  {
    "url": "assets/js/25.c507693b.js",
    "revision": "ac01dea2ce3c459dbef8037b286f27cb"
  },
  {
    "url": "assets/js/26.bce93eed.js",
    "revision": "27edf6f7ec5a1506ed529def9b413a6c"
  },
  {
    "url": "assets/js/27.8b87eca5.js",
    "revision": "4a21460b43186d53d648859825eeab09"
  },
  {
    "url": "assets/js/28.b22a0625.js",
    "revision": "46007a6e3020730dac929b6ac6654747"
  },
  {
    "url": "assets/js/29.f06ee9c6.js",
    "revision": "2c869a34543605fbe66106fe07da6e7e"
  },
  {
    "url": "assets/js/3.64e9474d.js",
    "revision": "3c3893b0d27e4273de1d9103fc7b5fbc"
  },
  {
    "url": "assets/js/30.1950eee6.js",
    "revision": "ffcff394a59211c72fc8fbaa02267471"
  },
  {
    "url": "assets/js/31.b88ffe67.js",
    "revision": "990170f49bc1d550d1d6f1519f50e42b"
  },
  {
    "url": "assets/js/32.45d0536b.js",
    "revision": "8fa99a04de420ff4ff9d2653ddcd4349"
  },
  {
    "url": "assets/js/33.933c2d8a.js",
    "revision": "76774de9eb6f4fcffce40f76fefe14bf"
  },
  {
    "url": "assets/js/34.89f237e0.js",
    "revision": "6cfa072582905a97b4a1145ab4552151"
  },
  {
    "url": "assets/js/35.c4e7db79.js",
    "revision": "d5fa229d8236f441d9f010950d33f24d"
  },
  {
    "url": "assets/js/36.4a7582bd.js",
    "revision": "9a7c5afc43b7ddc2730d297113e2c1be"
  },
  {
    "url": "assets/js/37.4db48c48.js",
    "revision": "f6e01ceabb9f5e1b8f34a4e43ccd68ed"
  },
  {
    "url": "assets/js/38.f75d220f.js",
    "revision": "411c6ac799fc6b019bcb5b38d2698fa8"
  },
  {
    "url": "assets/js/39.1cbd9c90.js",
    "revision": "a12218f40c629c8e816018f679eac36d"
  },
  {
    "url": "assets/js/4.20c7c0b9.js",
    "revision": "15c2aebe521ad866a4ad98202be6b531"
  },
  {
    "url": "assets/js/40.cc4018d1.js",
    "revision": "f9d2c6d27d827adbb3e5b08e1b056b6b"
  },
  {
    "url": "assets/js/41.b68c3609.js",
    "revision": "1239272edeb45779fcf6204603516ad8"
  },
  {
    "url": "assets/js/42.9674c174.js",
    "revision": "f9e0b4463379d625c8476d22ddececbd"
  },
  {
    "url": "assets/js/43.755ce31b.js",
    "revision": "b2759907e9517d9f3a4f4736d373b469"
  },
  {
    "url": "assets/js/44.66fdb7bd.js",
    "revision": "5446c2f09b054da76b10011004c570d3"
  },
  {
    "url": "assets/js/45.c8f8f6c8.js",
    "revision": "d6b83350566818acde4a5e3d61f5bfee"
  },
  {
    "url": "assets/js/46.8e7e8a55.js",
    "revision": "c92a78694068e6f22bdcf2fb3481b16f"
  },
  {
    "url": "assets/js/47.40f06e8a.js",
    "revision": "dbe155c275c746b4cfca33e3a888c61c"
  },
  {
    "url": "assets/js/48.63c2c492.js",
    "revision": "f11a9ab1d20de76e7d4c596dd6bc4adb"
  },
  {
    "url": "assets/js/49.a983b205.js",
    "revision": "ce2de406a90469a2fb46fbd4d5538f0e"
  },
  {
    "url": "assets/js/5.c64e13a6.js",
    "revision": "871551fd902582a044fbd01670d806d2"
  },
  {
    "url": "assets/js/50.f324fd29.js",
    "revision": "c5603603d8eca9ab8b56a2e06271d86f"
  },
  {
    "url": "assets/js/51.d03ab296.js",
    "revision": "baff9e6a84c62cbc332fd5b71cad8bd2"
  },
  {
    "url": "assets/js/52.7e91fd27.js",
    "revision": "dab86506ac38a6c2c24fdb9aeed004f2"
  },
  {
    "url": "assets/js/53.2c9331ed.js",
    "revision": "6b1944fe8a9d4f89c5d51b6a25c46d58"
  },
  {
    "url": "assets/js/54.298f0224.js",
    "revision": "62bc00880a9354474a2d9940e353f67a"
  },
  {
    "url": "assets/js/55.e64bb1c7.js",
    "revision": "0a64ab81b21db38aeaa3b6effa636f47"
  },
  {
    "url": "assets/js/56.93d61270.js",
    "revision": "4bc1ca28067e7fe5f6ee3b5272b8efe2"
  },
  {
    "url": "assets/js/57.4ffef8b9.js",
    "revision": "24c428ce567f67f0964164694c1d393c"
  },
  {
    "url": "assets/js/58.f97a317b.js",
    "revision": "027e78312375fa80f3209542c09515e8"
  },
  {
    "url": "assets/js/59.0715f83c.js",
    "revision": "50aa97126e0ff2ed603b3cdca933d29b"
  },
  {
    "url": "assets/js/6.17e6cdef.js",
    "revision": "96e902e821ece109ffce3b893ac47b68"
  },
  {
    "url": "assets/js/60.47ae3bfd.js",
    "revision": "d5deec287828276516af2f5b04249c87"
  },
  {
    "url": "assets/js/61.65d013fd.js",
    "revision": "49fc4d93bb7e7b79017a25d34e9c9cfe"
  },
  {
    "url": "assets/js/62.8214ac12.js",
    "revision": "68de30c05319b6fe884b9f25c4f9f8ec"
  },
  {
    "url": "assets/js/63.e14205ea.js",
    "revision": "480fcd2425b6480c6fbc0988d938ec86"
  },
  {
    "url": "assets/js/64.eef093fd.js",
    "revision": "a67ce95137bfddcb7906f1d13cf25e7b"
  },
  {
    "url": "assets/js/65.a1773695.js",
    "revision": "3d6f3884ad2785df3f4cffab56122a34"
  },
  {
    "url": "assets/js/66.c7424fa9.js",
    "revision": "f7e10fc0293a63715d53abd9584cbb3e"
  },
  {
    "url": "assets/js/67.6854686c.js",
    "revision": "fcbac3089ccd77e9de5c52423386bba1"
  },
  {
    "url": "assets/js/68.ebe8d9a8.js",
    "revision": "9157f888a7e332b9693bb8adbe196a86"
  },
  {
    "url": "assets/js/69.63ff5f6e.js",
    "revision": "f27f21cf417e9f7806426097e8daddec"
  },
  {
    "url": "assets/js/7.bf1005d3.js",
    "revision": "5a888575099b31a909634e1a779e2f03"
  },
  {
    "url": "assets/js/70.11506eb0.js",
    "revision": "c14ec80c60c6971ecfbcb9310f5cab2c"
  },
  {
    "url": "assets/js/71.27a53a70.js",
    "revision": "8116e7d004082aa7db35c0c12910876b"
  },
  {
    "url": "assets/js/72.c12265a6.js",
    "revision": "c93886c046843b34b583704c6924b041"
  },
  {
    "url": "assets/js/73.60b680a3.js",
    "revision": "dea510ca5890342373db6406cf4aea4b"
  },
  {
    "url": "assets/js/74.64e1e201.js",
    "revision": "ac5d0f6dfe8dbfbc5f721512e811018f"
  },
  {
    "url": "assets/js/75.b99b41b1.js",
    "revision": "108aebf5a1e1d4689d2d920ba84a6ff7"
  },
  {
    "url": "assets/js/76.5a14dded.js",
    "revision": "efa517301d5f5498cc40ec0ecaa448ab"
  },
  {
    "url": "assets/js/77.300a1e09.js",
    "revision": "9a143ef807465a6caae3d5b0387a3f17"
  },
  {
    "url": "assets/js/78.56bc3e86.js",
    "revision": "b0ca72c7b2b99054a0d0ae600532bc97"
  },
  {
    "url": "assets/js/79.8c8b3c2f.js",
    "revision": "05b4115ee3b96a610991eb622bd5e3e7"
  },
  {
    "url": "assets/js/8.d565022a.js",
    "revision": "78b8b73d8c5222290e8a9348a41ecd1f"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.a7f96fc8.js",
    "revision": "48ae49f2ef7fb385cd6901159490f5b3"
  },
  {
    "url": "assets/js/app.a21163f2.js",
    "revision": "c4bcfdc1fb308d2c6662ac03c8d77fa6"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "09a2515e0fe96b3a4d798c1b0e461905"
  },
  {
    "url": "cs/bash.html",
    "revision": "38faeaee0ad80dddcf05c5c0e841dfb8"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "2f69e89630fe848fc1c1357e423ad7c1"
  },
  {
    "url": "cs/cmake.html",
    "revision": "44916240c2a28477d3b57d730852f9f0"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "c4c625ec9292b21bac8e519c648c3e30"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "6221aa69d1e34fa0de81e3473e66c0ac"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "88d9705475a93dac2ae9431ef4386649"
  },
  {
    "url": "cs/git.html",
    "revision": "745e8611b0bc72a54b7d40bba91a5c29"
  },
  {
    "url": "cs/index.html",
    "revision": "0038ae1b320d301894507e22eea34ba2"
  },
  {
    "url": "cs/keras.html",
    "revision": "9e9081a228afb004d4cfd19f82640ff1"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "03c9266ed0fe9ffc19775ff1b53d5f02"
  },
  {
    "url": "cs/lwip.html",
    "revision": "df9978fb4c4040a8bf5a9a2e82c079ec"
  },
  {
    "url": "cs/scala.html",
    "revision": "950f202feabb07a6017e677f5ebcd507"
  },
  {
    "url": "ee/about.html",
    "revision": "ac45f8b645e0a3b432a5544bb33e4627"
  },
  {
    "url": "ee/chisel.html",
    "revision": "3724c61558197643e2e6298f7342174b"
  },
  {
    "url": "ee/esp32.html",
    "revision": "50db08aef1943964481aea29b30e04ce"
  },
  {
    "url": "ee/index.html",
    "revision": "be85b38b903dd7cecc0e9c97bc0e9408"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "e463490bafb4c845f1c0673cc3339045"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "ba693d1e2e07cdb140578d8a00576365"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "072a16514b0581b2a58d65b1e1a6e2c0"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "2c67bce7e56b3e5779fba3ef4b254cc3"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
  },
  {
    "url": "images/cs/ai/logistic_regression.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "images/cs/ai/sigmoid_function.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
  },
  {
    "url": "images/cs/computer_composition/cpu_registers.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
  },
  {
    "url": "images/cs/computer_composition/elf_format.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
  },
  {
    "url": "images/cs/computer_composition/knowledge_map.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
  },
  {
    "url": "images/cs/computer_composition/linker_process.jpeg",
    "revision": "f62da9b29aa53218f8907851df27f912"
  },
  {
    "url": "images/cs/computer_composition/mips_instruction.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
  },
  {
    "url": "images/cs/computer_composition/Von_Neumann_architecture.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
  },
  {
    "url": "images/cs/cs.svg",
    "revision": "fe696bfe6c74377d4e9be63e9f170afc"
  },
  {
    "url": "images/cs/design_pattern/iterator.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "images/cs/keras/linear_regression.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "images/cs/keras/nonlinear_regression.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
  },
  {
    "url": "images/cs/lwip/arp_protocol.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "images/cs/lwip/ethernet_frame.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "images/cs/lwip/ip_protocol.png",
    "revision": "f8dade3399a1b809f04f3921124d38cf"
  },
  {
    "url": "images/cs/lwip/lwip_api_message.png",
    "revision": "6f55181782841bf71f3f1aa7c953d320"
  },
  {
    "url": "images/cs/lwip/lwip_arp_process_input.png",
    "revision": "35e6fc48d57f6bdd06dcc3e9e7edead8"
  },
  {
    "url": "images/cs/lwip/lwip_arp_process_output.png",
    "revision": "999a53be718cf8bb3857986a359d349b"
  },
  {
    "url": "images/cs/lwip/lwip_arp_reply.png",
    "revision": "59985110fc7d039a3cb5c11c152a145b"
  },
  {
    "url": "images/cs/lwip/lwip_arp_request.png",
    "revision": "7e489783ce9afbf4379c3e2ff47718fe"
  },
  {
    "url": "images/cs/lwip/lwip_heap.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "images/cs/lwip/lwip_icmp_protocol.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "images/cs/lwip/lwip_ip_frag.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "images/cs/lwip/lwip_ip_input.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "images/cs/lwip/lwip_ip_output.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
  },
  {
    "url": "images/cs/lwip/lwip_memp.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
  },
  {
    "url": "images/cs/lwip/lwip_packet_message.png",
    "revision": "217126c725e129b967094255902f19ba"
  },
  {
    "url": "images/cs/lwip/lwip_packets_into_core.png",
    "revision": "85a67ff6553a1d80caff17436465fa64"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_free_0.png",
    "revision": "f263471547a20caf3e0b2ec438161dc0"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_free_1.png",
    "revision": "33781abf43d12a922ea4eb1bb2f74828"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_pool.png",
    "revision": "e98010044b87e4e7c0ff77af5605c319"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_ram.png",
    "revision": "408a7517eeb27554819334a236e3806b"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_rom_ref.png",
    "revision": "64893f569acab92710ec71b82dabf036"
  },
  {
    "url": "images/cs/lwip/lwip_timeouts_list.png",
    "revision": "51042adb1c6c886cfc3878b0bc89594a"
  },
  {
    "url": "images/cs/lwip/netif_list.png",
    "revision": "73bfcf7938735b596ec4e2538170a853"
  },
  {
    "url": "images/cs/lwip/setup_lwip.png",
    "revision": "c67664dc461af6d603ec1bc2e3f6a661"
  },
  {
    "url": "images/cs/lwip/tcp_ip_stack.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "images/cs/scala/sbt_jvm_options.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
  },
  {
    "url": "images/ee/ee.svg",
    "revision": "e0d4275736606674f67f12997b80a8b5"
  },
  {
    "url": "images/ee/esp32/cache_system.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "images/ee/esp32/cpu_core_system.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "images/ee/esp32/dma_chain.png",
    "revision": "5fca630de450c01698ac8265b4f53961"
  },
  {
    "url": "images/ee/esp32/dma_engine.png",
    "revision": "54d9bdb70a2295e715bd1c7546115846"
  },
  {
    "url": "images/ee/esp32/esp32_address_table.png",
    "revision": "85ad7d785bd61aa4cb118f0043b0e85b"
  },
  {
    "url": "images/ee/esp32/esp32_external_memory.png",
    "revision": "00b7148f698a82bf10935863900e4886"
  },
  {
    "url": "images/ee/esp32/esp32_on_chip_address_table.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
  },
  {
    "url": "images/ee/esp32/esp32_system_clock.png",
    "revision": "212a53578bdae5d21866d16781a2a258"
  },
  {
    "url": "images/ee/esp32/esp32_system_structure.png",
    "revision": "70e29ed6a527c6a0285db28bb7845464"
  },
  {
    "url": "images/ee/esp32/gpio_matrix.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
  },
  {
    "url": "images/ee/esp32/image_map.png",
    "revision": "017b48c6656dddd64aed21cad3813ae0"
  },
  {
    "url": "images/ee/esp32/input_signal_to_peripheral.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "images/ee/esp32/interrupt_matrix.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
  },
  {
    "url": "images/ee/esp32/io_mux_pad.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
  },
  {
    "url": "images/ee/esp32/memory_map.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "images/ee/esp32/output_signal_to_pad.png",
    "revision": "06e891bab7649f99f5a1c070de7885c6"
  },
  {
    "url": "images/ee/esp32/peripheral_clock.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "images/ee/esp32/spi_signals.png",
    "revision": "2ac4167088ad40da2f88c372545f26b9"
  },
  {
    "url": "images/ee/esp32/strapping_pin.png",
    "revision": "5c9a4fda6540177c3f7f80d6862a22cc"
  },
  {
    "url": "images/ee/infrared_remote/infrared_modulation_demodulation.svg",
    "revision": "f86ad3e629424c9af8a216abb58ec189"
  },
  {
    "url": "images/ee/infrared_remote/nec_ext_train.png",
    "revision": "2f78d1ce7f001926f6b90ad966796e91"
  },
  {
    "url": "images/ee/infrared_remote/nec_modulation.png",
    "revision": "da33571c6f0afb94b1ec1d91caba3edb"
  },
  {
    "url": "images/ee/infrared_remote/nec_repeat.png",
    "revision": "63364daf21e5522c64eb8dfa82f2cef2"
  },
  {
    "url": "images/ee/infrared_remote/nec_sequence.png",
    "revision": "afea92a3b5cc1aa2457d2b118b157c84"
  },
  {
    "url": "images/ee/infrared_remote/nec_train.png",
    "revision": "f970404e7bbfb5711fea5c776f689f3a"
  },
  {
    "url": "images/ee/motor/brash_motor.png",
    "revision": "78e5d626f0a9e18a5fd2434b712edb98"
  },
  {
    "url": "images/ee/motor/brashless_motor.png",
    "revision": "850d54bc1f29f5bb3db7ee53d23803bd"
  },
  {
    "url": "images/ee/motor/motor_category.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "7f3f777d138f012a2265d77b10d952f8"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "04dcbd879d05aca11b08e8ccac38a8b0"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "408ea52ae94a10257aec25a4e0d1aa36"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "78eb4441988533905ba97b4f6f379a76"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "3293a2ba7357e53a03a13a85cfc24cd8"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "a5ae50cb2baa927cbc564db72d233038"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "bbfaa6a7ce0ab3899cd13fae0516dabc"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "0fa51e6798434754e980306de7b8c083"
  },
  {
    "url": "images/others/others.svg",
    "revision": "28a34ae59424a4becd8ace3f14b0b58c"
  },
  {
    "url": "images/resume/ai.svg",
    "revision": "f1dafe8922f7dca830e4ea40abe5a814"
  },
  {
    "url": "images/resume/blog.svg",
    "revision": "2132b282a62fdc63ec6084f47feeadca"
  },
  {
    "url": "images/resume/briefcase.svg",
    "revision": "e5b8dfd88d257ef59607ff503b46a890"
  },
  {
    "url": "images/resume/certificate.svg",
    "revision": "e855e283466a7596679860477005b95a"
  },
  {
    "url": "images/resume/electronic.svg",
    "revision": "bbc07af00a040961f7610db77ec955f8"
  },
  {
    "url": "images/resume/envelope.svg",
    "revision": "ce757b0ad4826316f62e2349dc69157d"
  },
  {
    "url": "images/resume/geek.svg",
    "revision": "46552f138017b1941df626e468d77937"
  },
  {
    "url": "images/resume/github.svg",
    "revision": "3fcc2347207e5f9c79a335745ad05d55"
  },
  {
    "url": "images/resume/graduation-cap.svg",
    "revision": "d011739b9d43665bd81607dfeb7290b2"
  },
  {
    "url": "images/resume/hobby.svg",
    "revision": "1958411e2d6842c6ed08302a14c944a1"
  },
  {
    "url": "images/resume/info.svg",
    "revision": "63bd9d622744545ad8854e469e32e497"
  },
  {
    "url": "images/resume/language.svg",
    "revision": "81bb4f03b3167297e7dfa9efc25e242b"
  },
  {
    "url": "images/resume/network.svg",
    "revision": "3769543541ba02f40a922818ea7f9425"
  },
  {
    "url": "images/resume/phone.svg",
    "revision": "5964fd19559cc192308ec5bbc7e24b5b"
  },
  {
    "url": "images/resume/programming.svg",
    "revision": "6ba074a9f3d4d8dad64511a293c7dccf"
  },
  {
    "url": "images/resume/project-diagram.svg",
    "revision": "2c022c0cc22ccdea32ea67668608877b"
  },
  {
    "url": "images/resume/tools.svg",
    "revision": "879de372ee37b73974b6cdb1847c29d8"
  },
  {
    "url": "images/resume/writing.svg",
    "revision": "bbf32bc943b50af3e456a375567a7f03"
  },
  {
    "url": "index.html",
    "revision": "0f56651f1bd9bae8fc5560610779fa2a"
  },
  {
    "url": "others/about.html",
    "revision": "abf37d47c3627ccb09fccad1fd86668b"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "359398dc54c5a471a989202c64cda362"
  },
  {
    "url": "others/android-studio.html",
    "revision": "9dbfd957da65e758a18517eb36de6a68"
  },
  {
    "url": "others/android.html",
    "revision": "11011eee9063a562da8f8f8973ed487d"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "c9a4bf30b06cdab5945566fb40834c96"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "9a286a5146c976d4e5b2534b450b2634"
  },
  {
    "url": "others/css.html",
    "revision": "13582b415d90ddc43d43716b67192b97"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "8ad3be1cabae6a1e1188ae38fcbedb22"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "40b9245baca899a61d3a54ea598c721f"
  },
  {
    "url": "others/english-writting.html",
    "revision": "ceee3106bd1340df5d3811e283c085dd"
  },
  {
    "url": "others/freertos.html",
    "revision": "93689799045a3e8ac73b943d551ca8b5"
  },
  {
    "url": "others/gns3.html",
    "revision": "b98df04dd573ee06276d94f443ce8e70"
  },
  {
    "url": "others/gps.html",
    "revision": "febeb4685fd97d4c3d402973072e5b21"
  },
  {
    "url": "others/html5.html",
    "revision": "936a3afa67269c4a8753c1bb188376cb"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "4283801593f8a12a589681fd155e4880"
  },
  {
    "url": "others/index.html",
    "revision": "3b5498a8cb50429e8915cdb277a22cf1"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "0d80c03ffc70324da508cb77a0588de8"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "261dea23ecce191afa9b480e18c4abea"
  },
  {
    "url": "others/javascript.html",
    "revision": "6a3e4fb05a40634d80bde615921546c2"
  },
  {
    "url": "others/json.html",
    "revision": "4a650ae4bc7a54e8ab3754818b644804"
  },
  {
    "url": "others/latex.html",
    "revision": "7940b25a9553809ed82cc6b7a010453b"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "8ad00893217a71237e39774c7504a002"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "4ddd9eabde9533baf75891e99fe9a3cc"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "9c5319e60e989ff3eb65226cc1c8563a"
  },
  {
    "url": "others/markdown.html",
    "revision": "71ea61097d61bdf1816818d2f53b38ce"
  },
  {
    "url": "others/matlab.html",
    "revision": "ea0bea9bf5c124b0788fa8c8ee01de9f"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "f595fcd3d9ddf019de73d87c43959b65"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "84c55485953ba9fb877c1086a642edb4"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "82feabb252fa858789253a030bd0dab6"
  },
  {
    "url": "others/network-security.html",
    "revision": "f7b43f14ab4721bfa321cf3b906b8509"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "29faaefb1dbcef8a360475b1dce4a1d3"
  },
  {
    "url": "others/oral_english.html",
    "revision": "f69bd284dbd661c5c809329f69f59cd4"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "3972bd6bf5a1d196d4ac69ba13488ad7"
  },
  {
    "url": "others/poe.html",
    "revision": "251290b3e8f023acc81a083d7361087c"
  },
  {
    "url": "others/pyside2.html",
    "revision": "677d872f08d607839b72d72ed41337a2"
  },
  {
    "url": "others/python-socket.html",
    "revision": "6d4bf36450caee99dfa9db90e8a1fd5c"
  },
  {
    "url": "others/python.html",
    "revision": "75acf8170ef16a113f61a3d96e89bb86"
  },
  {
    "url": "others/q-learning.html",
    "revision": "e86e20da84377b38390c5e02ca7c02b8"
  },
  {
    "url": "others/qr-code.html",
    "revision": "5fb140dff0b4d0f8e84c061196f72b0e"
  },
  {
    "url": "others/qt4.html",
    "revision": "618c05e38ac86c946d8a85b574d791ae"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "62f5f062ee6a6085c3e22619765a24c7"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "679bc64734450465cba882774f74f42e"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "c595186da5e9e616371cc55ed5d950b2"
  },
  {
    "url": "others/sd-card.html",
    "revision": "f5dfafb8d48b62db29514c1e8e7b0b64"
  },
  {
    "url": "others/sdn.html",
    "revision": "b8c689befa02c098112938170003d339"
  },
  {
    "url": "others/star-uml.html",
    "revision": "3678fc9851ab40c4fcd4379c4fd00d5d"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "79bdd3323e29363e35cb5ed5ee4f6e45"
  },
  {
    "url": "others/verilog.html",
    "revision": "0ad55d3b71558eb0b098a736b602a0fa"
  },
  {
    "url": "others/vue.html",
    "revision": "9453f32383190215cf28074d0ad1c683"
  },
  {
    "url": "others/w5500.html",
    "revision": "f04f8583c9e5badac467cbe36d4c232c"
  },
  {
    "url": "others/w7500.html",
    "revision": "b7eaed8661b150b7f3b94a052ff42fd0"
  },
  {
    "url": "resume.html",
    "revision": "dba01f4f96afb97ad3466b43160afb31"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
