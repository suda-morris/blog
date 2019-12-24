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
    "revision": "60938329e481db8e536319a47aa888be"
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
    "url": "assets/img/dma_chain.5fca630d.png",
    "revision": "5fca630de450c01698ac8265b4f53961"
  },
  {
    "url": "assets/img/dma_engine.54d9bdb7.png",
    "revision": "54d9bdb70a2295e715bd1c7546115846"
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
    "url": "assets/img/linear_regression.d67e8d49.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
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
    "url": "assets/js/10.1a357e08.js",
    "revision": "7abf2a4c739b54760b9140725ad75bbd"
  },
  {
    "url": "assets/js/11.d98ae025.js",
    "revision": "de9d9feed45a8631a2976d51f7f7446a"
  },
  {
    "url": "assets/js/12.754c1db8.js",
    "revision": "08ecbabc6198b5c7f7957a3d5c0a8ac6"
  },
  {
    "url": "assets/js/13.d02db38c.js",
    "revision": "1779e9ff7492fd991325f190529fa225"
  },
  {
    "url": "assets/js/14.994427c5.js",
    "revision": "e50bc7c53fbcd321f45d2a115306cc99"
  },
  {
    "url": "assets/js/15.ede0ee86.js",
    "revision": "de104476291fc7a903d796dae7cd49c3"
  },
  {
    "url": "assets/js/16.cb258864.js",
    "revision": "4d3aa283b3c8957a18bed28df3fbeddb"
  },
  {
    "url": "assets/js/17.c9ef1dc7.js",
    "revision": "d25f40617e2145961de0784dbad9a582"
  },
  {
    "url": "assets/js/18.47cef489.js",
    "revision": "34a81939bab5bb1a2e2f54c0b9f54848"
  },
  {
    "url": "assets/js/19.4a54e5f5.js",
    "revision": "b6a8f758fabd04d5ab1789bb6a566634"
  },
  {
    "url": "assets/js/2.70919896.js",
    "revision": "a3eaaed580d32d7c3e2f74fc32158480"
  },
  {
    "url": "assets/js/20.b343a203.js",
    "revision": "8d65eeba606dcdff3f8f6adca96e1c66"
  },
  {
    "url": "assets/js/21.431eac4a.js",
    "revision": "c66a3fc630bf569e242f0a531a6fde21"
  },
  {
    "url": "assets/js/22.07688f3c.js",
    "revision": "e0ecc554afe1eeb42d4799c78e7c2a01"
  },
  {
    "url": "assets/js/23.bcb80bce.js",
    "revision": "4456a1168f6d87649a6688eebffbc5f2"
  },
  {
    "url": "assets/js/24.fd7bcf10.js",
    "revision": "71cc92e2b849530b56b011ee2bc4c309"
  },
  {
    "url": "assets/js/25.f6eac380.js",
    "revision": "68e0adaa16143394bfd9098f7cd46f3c"
  },
  {
    "url": "assets/js/26.3da95923.js",
    "revision": "5acc6b6f557f72a85ccb81b3eaa8cb21"
  },
  {
    "url": "assets/js/27.6783cc98.js",
    "revision": "ffe6bc211335649b175fe6b7f7643570"
  },
  {
    "url": "assets/js/28.94f1af2b.js",
    "revision": "4d550807c5f42727054d478d98562260"
  },
  {
    "url": "assets/js/29.4efbac91.js",
    "revision": "5750b4e2a2289a8cbc5d5d54c1f9d817"
  },
  {
    "url": "assets/js/3.46e0f72b.js",
    "revision": "e34b9a9f87239830c3feac63b8f24628"
  },
  {
    "url": "assets/js/30.04d7c41f.js",
    "revision": "ed2e6f9f417d3b795dd9834c8a2f3cbb"
  },
  {
    "url": "assets/js/31.994023e1.js",
    "revision": "377ca1417439186b55f1d30a9e259876"
  },
  {
    "url": "assets/js/32.05b895de.js",
    "revision": "a43db85d86f943c4fff6462ddff929a4"
  },
  {
    "url": "assets/js/33.440cab19.js",
    "revision": "69335a660da461c6f3de9fd9552dc477"
  },
  {
    "url": "assets/js/34.570cd01b.js",
    "revision": "65e14430635b4b8e6bc215894e540ce2"
  },
  {
    "url": "assets/js/35.0f0f42d0.js",
    "revision": "bad61b1f9ef5ccc049126be9ad841c62"
  },
  {
    "url": "assets/js/36.06969961.js",
    "revision": "7347635985990b074d786468b7ac9d7c"
  },
  {
    "url": "assets/js/37.5f5d7971.js",
    "revision": "96230eb6794868ed1b7f49438d31d03f"
  },
  {
    "url": "assets/js/38.a528cb71.js",
    "revision": "05b50eed65c45e8dafd0c1fbcec79ad2"
  },
  {
    "url": "assets/js/39.b2c0f8a4.js",
    "revision": "1249db6be24f155075ce6ba594b0ed94"
  },
  {
    "url": "assets/js/4.ee50e299.js",
    "revision": "79978e5d85138ead6ae4209f61ab8c36"
  },
  {
    "url": "assets/js/40.b3d7c5d9.js",
    "revision": "a60c90c587b5385dbc21dd9f2c4627c6"
  },
  {
    "url": "assets/js/41.7550243b.js",
    "revision": "f7c1c27a604dd927f5ab4402444cfed0"
  },
  {
    "url": "assets/js/42.855c6c2f.js",
    "revision": "4a8598150d8584d9123ac157cab79fd0"
  },
  {
    "url": "assets/js/43.0dc49027.js",
    "revision": "57b7eba238508001efb2022ba9c101c5"
  },
  {
    "url": "assets/js/44.3f57949d.js",
    "revision": "685ec7bbef904930e5d60bafc3679b0e"
  },
  {
    "url": "assets/js/45.cbcb08bf.js",
    "revision": "d9a5572b37ee07ad04f13571658cfd73"
  },
  {
    "url": "assets/js/46.f4b0e01e.js",
    "revision": "cfac3fc1a0270147588e8fda966cfa56"
  },
  {
    "url": "assets/js/47.7a72d668.js",
    "revision": "7f98469daf824b18487c9f8c21e75b3a"
  },
  {
    "url": "assets/js/48.410b7990.js",
    "revision": "c8ed4a3a563b9504db9a9efefa311db6"
  },
  {
    "url": "assets/js/49.e7f56f24.js",
    "revision": "10166808ecdffdd6ae7070db382fee1b"
  },
  {
    "url": "assets/js/5.11d6bb43.js",
    "revision": "bed012209af96085226b65a94022bad0"
  },
  {
    "url": "assets/js/50.a43edd0b.js",
    "revision": "01cbc204e67c83445a0cfd27ca262630"
  },
  {
    "url": "assets/js/51.7abdabdf.js",
    "revision": "eead69a54b15303318d5bd5c3c5f3263"
  },
  {
    "url": "assets/js/52.5a94a5e1.js",
    "revision": "e9a8c11b129c2f16c64311760c1bf210"
  },
  {
    "url": "assets/js/53.ccaa98fe.js",
    "revision": "603c5fd9024192ebed74214aaaaa2066"
  },
  {
    "url": "assets/js/54.b8f7cf62.js",
    "revision": "f210aae3e4da66106fec0313a64ca2ff"
  },
  {
    "url": "assets/js/55.e64bb1c7.js",
    "revision": "0a64ab81b21db38aeaa3b6effa636f47"
  },
  {
    "url": "assets/js/56.499bc3f7.js",
    "revision": "3820352a70dd7d8df7a9bffa4f7d0ad2"
  },
  {
    "url": "assets/js/57.0d042ec1.js",
    "revision": "a13492a1e643dd8e5c9f8745d3899e02"
  },
  {
    "url": "assets/js/58.e10db2b7.js",
    "revision": "25e5473a31ed55e91f901815395ffc32"
  },
  {
    "url": "assets/js/59.3fb43cff.js",
    "revision": "711e9608ffbea0294039c21c92e0e597"
  },
  {
    "url": "assets/js/6.35616f99.js",
    "revision": "f92c013c632f09d6c97e28e02588582e"
  },
  {
    "url": "assets/js/60.2c24a4a8.js",
    "revision": "1ac4c502097c0135956eec12bf36ead6"
  },
  {
    "url": "assets/js/61.c5615df0.js",
    "revision": "12b1bc37b6a6642f2225a7e2a917c52f"
  },
  {
    "url": "assets/js/62.2da0ec5b.js",
    "revision": "2d6fc49dcc2fc1c0170c30f8d8b0503f"
  },
  {
    "url": "assets/js/63.d8c2934e.js",
    "revision": "c9d7af3bae158d9cac3a679f5f9a0c0a"
  },
  {
    "url": "assets/js/64.65e92e74.js",
    "revision": "297c602a64c040b4926bb2e54ab0fc7c"
  },
  {
    "url": "assets/js/65.d4fedb60.js",
    "revision": "f6b27bea7a87b29386a425a9af07e9b8"
  },
  {
    "url": "assets/js/66.778efcfc.js",
    "revision": "a6dd6e0e1035dc2fbf3637debdf0b604"
  },
  {
    "url": "assets/js/67.d85243a5.js",
    "revision": "3dbcbded95b7c7cb45af1215cdb6d59d"
  },
  {
    "url": "assets/js/68.422d322d.js",
    "revision": "1e5219e0f42572224218df927cf6c314"
  },
  {
    "url": "assets/js/69.f122e868.js",
    "revision": "e9f7c6bb8d22d781b309cf82635a7562"
  },
  {
    "url": "assets/js/7.9815a90f.js",
    "revision": "f9117a78bd92b5093f3afb5f644de868"
  },
  {
    "url": "assets/js/70.33c5b917.js",
    "revision": "1fc72d8a0814c3c79fd45d6b067ee495"
  },
  {
    "url": "assets/js/71.6a2206b7.js",
    "revision": "6e174314d0310202eed4566010ee27aa"
  },
  {
    "url": "assets/js/72.32345149.js",
    "revision": "131787e7b450ef9c9390672a4880e1fc"
  },
  {
    "url": "assets/js/73.2dfbdbe1.js",
    "revision": "e531edd57a5282f43475f3350d7fe5aa"
  },
  {
    "url": "assets/js/74.b8b3fbf9.js",
    "revision": "1873e48a9e457a77460ab13a6d03a511"
  },
  {
    "url": "assets/js/75.713de1cb.js",
    "revision": "946f17f4541b27a302b046f34fa3f218"
  },
  {
    "url": "assets/js/76.ea35d398.js",
    "revision": "46cc6ff75b309bfe061456cd146da80b"
  },
  {
    "url": "assets/js/77.33c4a6b3.js",
    "revision": "4bb5c1501e951663b50ae385db810781"
  },
  {
    "url": "assets/js/78.793fcbaa.js",
    "revision": "cbf718533291cbd2c578de14c4fb0e22"
  },
  {
    "url": "assets/js/79.213397b8.js",
    "revision": "da538ecef89d7a22ae3e93677b063ab9"
  },
  {
    "url": "assets/js/8.16f13172.js",
    "revision": "6fe10688292a051fe1c9a9734c384d91"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.5a11b2cb.js",
    "revision": "2d17cf740d7db3c2a192a844f408bbdf"
  },
  {
    "url": "assets/js/app.fc31037c.js",
    "revision": "c8f77eec6228fdbadf453a74616ec43c"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "1364543ea1a68d3ce960aa8733e1b86e"
  },
  {
    "url": "cs/bash.html",
    "revision": "3cb431d4948a633cc013cd1eb6da9bc1"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "f40c085145708dc465c8a926bec77055"
  },
  {
    "url": "cs/cmake.html",
    "revision": "940db2d15287f58835b786bf9979455d"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "481fd42fbc6f66947ace0490772157da"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "09eee8aca028f124615f1f084f0585f2"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "fbf1b36f83980ea8a2af8ec84f1ec729"
  },
  {
    "url": "cs/git.html",
    "revision": "2f02fc2e144cf053951ab9103eaf7673"
  },
  {
    "url": "cs/index.html",
    "revision": "db592a583fde85aa09c762c9bcf08708"
  },
  {
    "url": "cs/keras.html",
    "revision": "08400c5dd801659f23074f19b99eae48"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "15bd95889b60aa872ee5f4cabb997a89"
  },
  {
    "url": "cs/lwip.html",
    "revision": "f20bfc832999fbd805543d125fb3c727"
  },
  {
    "url": "cs/scala.html",
    "revision": "31676dd6e3730129aa3400c94502fe10"
  },
  {
    "url": "ee/about.html",
    "revision": "f0d75c8f9daa949fcf1e04473979fad8"
  },
  {
    "url": "ee/chisel.html",
    "revision": "79f103866118e970c8196f237f335201"
  },
  {
    "url": "ee/esp32.html",
    "revision": "bd2624be2d834c7f421b415cc2f5b50b"
  },
  {
    "url": "ee/index.html",
    "revision": "6af4ce875ee901887bc184a51a3997c7"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "6e1a0e45719a063071c99d1dc586023d"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "e29057775db0d2dc05d549a34e57089e"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "85c27d6b089da5fcba52cfb97ff01680"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "4710c4942ae531adc998268f10ceca64"
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
    "revision": "e004eeea4a6a73c76d100a0e7c8cedcf"
  },
  {
    "url": "others/about.html",
    "revision": "8685a62ec0efc0002f0e1a9e563deb67"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "722d5eddcfc44b3ce43d139d1aee1fac"
  },
  {
    "url": "others/android-studio.html",
    "revision": "9a0971b8da41085e88f4e006df208423"
  },
  {
    "url": "others/android.html",
    "revision": "d9a9407630f09e1ba8fbd670f2823db4"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "01233a321c443351ecd3e37585c2ab28"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "2d7ffa157133774939fe6b0c3c42de3e"
  },
  {
    "url": "others/css.html",
    "revision": "d817b5edba5a0edcd1b982b8608762e2"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "64bc0191a88bb1c9313c5cba33936e3b"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "bc01166b395e961f4405eaf878ddf187"
  },
  {
    "url": "others/english-writting.html",
    "revision": "93bf734e326da135a81fd922b8185ce0"
  },
  {
    "url": "others/freertos.html",
    "revision": "035018cf140330789a61a3d46c7c2c57"
  },
  {
    "url": "others/gns3.html",
    "revision": "99b1a82ecb0967209cfdcce71c0d23da"
  },
  {
    "url": "others/gps.html",
    "revision": "a514efffdc6abf1823c5653be0a3f5b4"
  },
  {
    "url": "others/html5.html",
    "revision": "ca47cef1374db45299e95a5c304e2a00"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "a0df32ad635cb30f62297222caf8faa9"
  },
  {
    "url": "others/index.html",
    "revision": "672f8c8e0f5554b278af9ae392fe7a37"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "8859c439bfc014a465b6ab392a0114c4"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "95d2063f7785a37ba4fef997ce4d3118"
  },
  {
    "url": "others/javascript.html",
    "revision": "04f99ff9cf5401b9238650ec4c6c861a"
  },
  {
    "url": "others/json.html",
    "revision": "7d906fd33742a62d004a32a64b2ebaf0"
  },
  {
    "url": "others/latex.html",
    "revision": "2da13d1aca42d430ae36beec99e65870"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "ce0ffd64d8e5f607da8bc539e5fdbce9"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "ead95fea1fe358a438d1c554811d09af"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "7ccb42d4c60a9b7688125bda5113f76c"
  },
  {
    "url": "others/markdown.html",
    "revision": "2864caf96dc3e12325e4a72e3f0434a3"
  },
  {
    "url": "others/matlab.html",
    "revision": "84954074c9fc5985f02a5eaf235751d0"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "a6d9d9c7f04abc86819ea2996764c888"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "88954088949961642358eb6eac938e08"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "96d05ce285320a56e0fab096733d6168"
  },
  {
    "url": "others/network-security.html",
    "revision": "b92217af8c4b2a3fefb8c97d41ceda04"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "40f54aa348417cf58f6c80d07dd7a90a"
  },
  {
    "url": "others/oral_english.html",
    "revision": "35383d112f81c333204cae2c523202c8"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "46e8edd9e47f2362beb689bc77dc56b5"
  },
  {
    "url": "others/poe.html",
    "revision": "fd0d1236d86bf31c6605d0b0ddf607e8"
  },
  {
    "url": "others/pyside2.html",
    "revision": "6c625c414c77b3649d77ce3da4478797"
  },
  {
    "url": "others/python-socket.html",
    "revision": "0d1ed73a349d958015bc28683a684143"
  },
  {
    "url": "others/python.html",
    "revision": "d8d3c8411bd4db68d561a0b3a3a1c9bc"
  },
  {
    "url": "others/q-learning.html",
    "revision": "b1c9e53e50b4cc67759c635417ad2e6c"
  },
  {
    "url": "others/qr-code.html",
    "revision": "60f30598a7819168f9b4ec31af00aa76"
  },
  {
    "url": "others/qt4.html",
    "revision": "ccf4eb626a0f3aca74a8d3a3ca66a70d"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "be7b06f068f24d69388fcdbeea99b15a"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "e3c4c226eb93e14b35bd76df22655e35"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "fc918573d1b4b559158dc5eebb4e04fb"
  },
  {
    "url": "others/sd-card.html",
    "revision": "b7960f5e5cd4fce96ac133782129d010"
  },
  {
    "url": "others/sdn.html",
    "revision": "dd1fab6839b40047758d9dee2e246c60"
  },
  {
    "url": "others/star-uml.html",
    "revision": "ed3d68f9c155927fa3efb4e33aa0ce15"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "605f7e737c8a26aff5837bc5f8805447"
  },
  {
    "url": "others/verilog.html",
    "revision": "1f85bef1b2ece725e20a6ff9e3f41dfb"
  },
  {
    "url": "others/vue.html",
    "revision": "c6bc6a3bd339f32bea16d18507a1742a"
  },
  {
    "url": "others/w5500.html",
    "revision": "c24ac30b847f64de36186182b68274a3"
  },
  {
    "url": "others/w7500.html",
    "revision": "e399c4884eb5e8cd625fea624378fe3e"
  },
  {
    "url": "resume.html",
    "revision": "3ce6144c4f4aa274600ea0981dd32a1f"
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
