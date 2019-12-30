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
    "revision": "5088eb1d5a7285e622075b4b009fcb81"
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
    "url": "assets/img/dynamic_link.8cab516a.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
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
    "url": "assets/img/memory_paging.0cf2f08e.png",
    "revision": "0cf2f08e1ceda473df71189334857cf0"
  },
  {
    "url": "assets/img/memory_segmentation.57211af3.png",
    "revision": "57211af3053ed621aeb903433c6c10d1"
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
    "url": "assets/js/10.a5d48968.js",
    "revision": "a5bb34404eb1908d1868863ea60044a5"
  },
  {
    "url": "assets/js/11.91653609.js",
    "revision": "5afd7bf80d6a34d7b4e6507e7cdb672f"
  },
  {
    "url": "assets/js/12.9277059d.js",
    "revision": "46305ba80118dbe534633dfbda8890ec"
  },
  {
    "url": "assets/js/13.e26afb90.js",
    "revision": "585fe0ae7ca2bb6451fa89f26487b4d4"
  },
  {
    "url": "assets/js/14.d1f62c31.js",
    "revision": "78f56ba2096a1043f4e82163a619f5f1"
  },
  {
    "url": "assets/js/15.9e55ab9a.js",
    "revision": "dd2b4a25889e7348142d9c41bb164d14"
  },
  {
    "url": "assets/js/16.1e72e1ef.js",
    "revision": "7896f1e129143cd2085487c373b14461"
  },
  {
    "url": "assets/js/17.5d2c5e07.js",
    "revision": "efc4a44b7257f9998fbba596b17cff03"
  },
  {
    "url": "assets/js/18.3d753280.js",
    "revision": "d250589a31a8896f230909f968b69d81"
  },
  {
    "url": "assets/js/19.c99e2090.js",
    "revision": "addda7552ced01f425ac0b554c46e4b9"
  },
  {
    "url": "assets/js/2.27c6ebbd.js",
    "revision": "9099425840b5e4f004637e2591e62b8f"
  },
  {
    "url": "assets/js/20.70a5a4f2.js",
    "revision": "9bd26536ad5dfbd9494653c5a1e925c1"
  },
  {
    "url": "assets/js/21.fea5de9a.js",
    "revision": "8bca1b45b219b5fabfee62472e59f701"
  },
  {
    "url": "assets/js/22.282b8d97.js",
    "revision": "c8930cc4efb0af4d7729a6835b37cee6"
  },
  {
    "url": "assets/js/23.9cac56b7.js",
    "revision": "949c6cd40c0904578fafad6b9cebcf6f"
  },
  {
    "url": "assets/js/24.70c9dc45.js",
    "revision": "233a3fe394a1e5be4be321672854661f"
  },
  {
    "url": "assets/js/25.20ebd65a.js",
    "revision": "d2c74e87e77768b61f700c65f8ce23ad"
  },
  {
    "url": "assets/js/26.e6ccb64e.js",
    "revision": "f1953f87ebaf70eb11add61c85d8f9e4"
  },
  {
    "url": "assets/js/27.be500d49.js",
    "revision": "d9f13f70d5d6aafbfebf402387cb94ad"
  },
  {
    "url": "assets/js/28.623fa9df.js",
    "revision": "44df8d6508ef2f02a7a0e7d471f8ef70"
  },
  {
    "url": "assets/js/29.cf2f7bfc.js",
    "revision": "7e467863be0917c5b9773c7676d8d7fd"
  },
  {
    "url": "assets/js/3.62112226.js",
    "revision": "e93d3715753ceb436f6436bf5f6489e3"
  },
  {
    "url": "assets/js/30.593443a2.js",
    "revision": "f8e121e9498f431d0b9267838bb95fb8"
  },
  {
    "url": "assets/js/31.3d103a4f.js",
    "revision": "b9048f76d60b0fcd246ee7e8bfa58fd5"
  },
  {
    "url": "assets/js/32.7885cf51.js",
    "revision": "5d5c724831aca6f610ae408e096b8c77"
  },
  {
    "url": "assets/js/33.cf0a1805.js",
    "revision": "7941e3032c8b9f1ba4800880811152a0"
  },
  {
    "url": "assets/js/34.4a4d9e32.js",
    "revision": "80792ce0e50522f62058fc09003f0af5"
  },
  {
    "url": "assets/js/35.dfbb1885.js",
    "revision": "5520f41efb9ffe6398bcdcecbaba2bdc"
  },
  {
    "url": "assets/js/36.19a455a9.js",
    "revision": "bde7628c8fe9f8d786083dd2410fa626"
  },
  {
    "url": "assets/js/37.65ae0c49.js",
    "revision": "f19dd772685fa8f88fed0f60615a61a2"
  },
  {
    "url": "assets/js/38.269db6cb.js",
    "revision": "2df61b5b3cf3a3a4fa256cad30933e2e"
  },
  {
    "url": "assets/js/39.65c271f3.js",
    "revision": "280c91be065bfed7a8f78b78c15f7b1d"
  },
  {
    "url": "assets/js/4.1706b80d.js",
    "revision": "705daa68deb30d046a0c3ff42796aabb"
  },
  {
    "url": "assets/js/40.111c51ba.js",
    "revision": "34a785dc7459b33394f6ee800867655c"
  },
  {
    "url": "assets/js/41.c82710a3.js",
    "revision": "9ba9b669f55424205c09453109c87f55"
  },
  {
    "url": "assets/js/42.2693eb9c.js",
    "revision": "ab5d38f634820635d3160e3afdd25e3f"
  },
  {
    "url": "assets/js/43.110a02ea.js",
    "revision": "4a9c9356b0395195d34da25a751b932d"
  },
  {
    "url": "assets/js/44.1f4a5dab.js",
    "revision": "5d73c179a0bac735c5c0f9f8c8a08259"
  },
  {
    "url": "assets/js/45.53fc5e8a.js",
    "revision": "87fed217ab66cf9129d29d347b1f64ca"
  },
  {
    "url": "assets/js/46.56561c1d.js",
    "revision": "ea8cf09f748610ef278e7524761ddbe5"
  },
  {
    "url": "assets/js/47.ab88ed00.js",
    "revision": "9e400cbbe163be44028ff2a281d26e8e"
  },
  {
    "url": "assets/js/48.3d4a242b.js",
    "revision": "1bf82754e5d52ed4b599d7beed67dfb3"
  },
  {
    "url": "assets/js/49.6fba6c3c.js",
    "revision": "6f840a2b6ee4f9cd7649367795a3a6ae"
  },
  {
    "url": "assets/js/5.4fbc89a6.js",
    "revision": "d6355ddfcd192011339e87b9d4af9a42"
  },
  {
    "url": "assets/js/50.04c8ef7c.js",
    "revision": "7a6133234fbea6c9841c3d68059e626b"
  },
  {
    "url": "assets/js/51.3ac94448.js",
    "revision": "048e566c31ff2cdb8d4dbd7edf1087e5"
  },
  {
    "url": "assets/js/52.4d61c6fe.js",
    "revision": "aeb444e0a960d1358096a5e39891bb69"
  },
  {
    "url": "assets/js/53.c897b7c2.js",
    "revision": "13474ec5613abc57e309575daae7111f"
  },
  {
    "url": "assets/js/54.1d7e0932.js",
    "revision": "6c113ae6063fcfd1f4c167f91c5ab8b1"
  },
  {
    "url": "assets/js/55.c2779cf2.js",
    "revision": "efde9f1a663a99a33c8c847d5fb1b13d"
  },
  {
    "url": "assets/js/56.2f401ba2.js",
    "revision": "6ca25fca5b0680f68ffea75387445ec2"
  },
  {
    "url": "assets/js/57.2cb05c38.js",
    "revision": "e1fb843b9beadadf2e13a8ae3581eafe"
  },
  {
    "url": "assets/js/58.bce460bc.js",
    "revision": "c6406ba84006b609b07674215119ad94"
  },
  {
    "url": "assets/js/59.a0ba60dd.js",
    "revision": "05e4b2a03af51a5f08f0031af66e11e0"
  },
  {
    "url": "assets/js/6.170252bf.js",
    "revision": "17d89243e5a4d827563318e211e8aa87"
  },
  {
    "url": "assets/js/60.e7267d64.js",
    "revision": "13c5d2919bbb80addc95b56415a8b78c"
  },
  {
    "url": "assets/js/61.7a59d8fc.js",
    "revision": "79681668ace04e038f99406347c336a5"
  },
  {
    "url": "assets/js/62.5349f4ee.js",
    "revision": "b0f89fd6db4c7bc9d4954219530b217f"
  },
  {
    "url": "assets/js/63.bd638993.js",
    "revision": "a61e8baecf48785d450661f4d2bbe4e1"
  },
  {
    "url": "assets/js/64.564d4903.js",
    "revision": "ce921588b090f0dc562ccb5804cbd645"
  },
  {
    "url": "assets/js/65.410d2fcf.js",
    "revision": "69864bb1bf3a241550597b34f4c844d8"
  },
  {
    "url": "assets/js/66.805b9862.js",
    "revision": "739c05f6f82451cd40cd1b13d7d8000e"
  },
  {
    "url": "assets/js/67.c5dd93b7.js",
    "revision": "ab26887c6b0a124cba9e77e0acdb9207"
  },
  {
    "url": "assets/js/68.72155c08.js",
    "revision": "60e8cfeeba5c3b1732f847277934687c"
  },
  {
    "url": "assets/js/69.812ab4cc.js",
    "revision": "066ba93a36d4e8a2d6e6e3d35f7f4827"
  },
  {
    "url": "assets/js/7.d0e4aef7.js",
    "revision": "050a18727179223e54b3bdaf275c366e"
  },
  {
    "url": "assets/js/70.1b95564d.js",
    "revision": "48dfdf67088b0c196e31257b98066351"
  },
  {
    "url": "assets/js/71.510db860.js",
    "revision": "750325c79b345b45bb2bc9afcc9eb638"
  },
  {
    "url": "assets/js/72.3717b669.js",
    "revision": "681fe9d195e155d29340f3c1cc48f7b2"
  },
  {
    "url": "assets/js/73.df3c9531.js",
    "revision": "aa37101b43fcac06f96d25c83b578f81"
  },
  {
    "url": "assets/js/74.bbcba02b.js",
    "revision": "6a70a25926a05c68f3f895db3b1f35fe"
  },
  {
    "url": "assets/js/75.3fbe5935.js",
    "revision": "c1eb693aaac013b57b143b29a4b07cea"
  },
  {
    "url": "assets/js/76.b414b57a.js",
    "revision": "6e3c355e3f629b6f5f16469012744157"
  },
  {
    "url": "assets/js/77.1cb7e3d6.js",
    "revision": "ef9f5e8ffb8c86fc52c261af0812a352"
  },
  {
    "url": "assets/js/78.4f632d1d.js",
    "revision": "6993ad90fb2a7ae4abcba7033b73b34d"
  },
  {
    "url": "assets/js/79.aac84c89.js",
    "revision": "a0e17c093ba1f9dcac56eca5bfeb1086"
  },
  {
    "url": "assets/js/8.2d8e46ee.js",
    "revision": "8c831e83c767e533e18aebc4bd084ae7"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.971a9262.js",
    "revision": "ebe8279b25040bef9a7dcdab1eb61e84"
  },
  {
    "url": "assets/js/app.f559dd95.js",
    "revision": "47b0c0af1492d7adecab580f04bed6f0"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "9bc3342f9faad0c5b6afc1cf38acbd47"
  },
  {
    "url": "cs/bash.html",
    "revision": "d77537ca81c9ed5686f7fa1e663af7ca"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "866e52f39cd462229e5853022cef3c80"
  },
  {
    "url": "cs/cmake.html",
    "revision": "8090f3181ae77accd8e3db5d9f4722f4"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "a9e94ba28b6f95b935a6166fd256866a"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "8f6618c7e5977087a2e331e5fe307538"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "37c0edc79a8e93a01feee6958b2be9f1"
  },
  {
    "url": "cs/git.html",
    "revision": "551873cf8679b7a7018fdfa43f52000e"
  },
  {
    "url": "cs/index.html",
    "revision": "e489468fb34581190f886c91f8032adb"
  },
  {
    "url": "cs/keras.html",
    "revision": "855a985a9e26cf3ecd249bc55e815519"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "8a5996d7b181cfbd9b26c75a7fb67fdf"
  },
  {
    "url": "cs/lwip.html",
    "revision": "f2d99154f831f4e4b672c31e616a1c80"
  },
  {
    "url": "cs/scala.html",
    "revision": "0c8adb8938c5d7d14210fb98db087c05"
  },
  {
    "url": "ee/about.html",
    "revision": "2baf690fac52a030c0f14be5cfc5331b"
  },
  {
    "url": "ee/chisel.html",
    "revision": "12fa4c74d1c27d4f76a4369094cc59b7"
  },
  {
    "url": "ee/esp32.html",
    "revision": "0aed872ae2ab9e4bb432fc61f6c359a4"
  },
  {
    "url": "ee/index.html",
    "revision": "830a46dfb238cf032e5db7c1ab9acd55"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "42993dd905e60b386e7cd40a92c67941"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "e20f1cf573f05b3a6791aa71da91832b"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "4dc294c540b61c0a69af5e1829118a7f"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "7f3cd79708928c70d30845aa478a6725"
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
    "url": "images/cs/computer_composition/dynamic_link.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
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
    "url": "images/cs/computer_composition/memory_paging.png",
    "revision": "0cf2f08e1ceda473df71189334857cf0"
  },
  {
    "url": "images/cs/computer_composition/memory_segmentation.png",
    "revision": "57211af3053ed621aeb903433c6c10d1"
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
    "revision": "9073954ec24be683a8d185f6218ff6a4"
  },
  {
    "url": "others/about.html",
    "revision": "0f1632b8dcd627c9d34b903c13181673"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "d66e141ae8f2f77298163ebe400bd333"
  },
  {
    "url": "others/android-studio.html",
    "revision": "9b3ef44279a75ffddfc9133e2032336a"
  },
  {
    "url": "others/android.html",
    "revision": "e0e72729680e487587c02442c19bcf8e"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "261e526b6881007c4fcaa592390ba061"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "eb293f9fac611131622e09c318e03459"
  },
  {
    "url": "others/css.html",
    "revision": "560c0c2c840b08ad1b70969769eade34"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "416e7fd37ce0541f2001006dfa11af21"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "1fa7de5687e43ac4e8c4e3963ceedc24"
  },
  {
    "url": "others/english-writting.html",
    "revision": "07050fb05cbd3467f432820b3870a622"
  },
  {
    "url": "others/freertos.html",
    "revision": "0170336797abea2624e262aba3fd0a60"
  },
  {
    "url": "others/gns3.html",
    "revision": "0d0d76f7bdfd03e8c89b775ade619894"
  },
  {
    "url": "others/gps.html",
    "revision": "c927332b3a17e64e42d73249a49c2787"
  },
  {
    "url": "others/html5.html",
    "revision": "c1cc2da6ad6efc6a3307ece4284138b1"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "fcf08ecfb0c31e693d679ebf21a96e02"
  },
  {
    "url": "others/index.html",
    "revision": "65b81df98025f94575b236e2e080fcea"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "dfb42c600689aac1d3f3ae1990b26b7e"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "9256549a5a15cb936901b68c0fda4f48"
  },
  {
    "url": "others/javascript.html",
    "revision": "0cf65c40c8f1e64f9cb7592a321e4973"
  },
  {
    "url": "others/json.html",
    "revision": "46d042bda59985dfa384aa61a9da6ef0"
  },
  {
    "url": "others/latex.html",
    "revision": "bab9364442b7d49bb1d0efabb325dd8a"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "e1b4febb0d8c28e5f932c4512ec90aa7"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "1852c4704dc82fb56c6522659f05b234"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "c8093a88ff6a0242263fa579be9e9b53"
  },
  {
    "url": "others/markdown.html",
    "revision": "59cd2b943b91476a2b05a09bad20026d"
  },
  {
    "url": "others/matlab.html",
    "revision": "e3192f903cf5ca0979133c714016ae08"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "636c8f8d147f96daf506be4e9263c2ce"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "d3a48687b2a796dc7f5ccf46db27f723"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "f9d229fbb1d646b149ce5a3f2c841814"
  },
  {
    "url": "others/network-security.html",
    "revision": "c16f2087f0648b449035df95b4a2424f"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "1a6d0a0d85bddccccddac76f82a73b79"
  },
  {
    "url": "others/oral_english.html",
    "revision": "9359851230d07b5edeaf710293cf017c"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "4f10c768db4ed3021af1a86c19de821a"
  },
  {
    "url": "others/poe.html",
    "revision": "9f160860173060b55d56477f2ad5969a"
  },
  {
    "url": "others/pyside2.html",
    "revision": "3d9adf1579ab77c3a37e708d12fa0f0e"
  },
  {
    "url": "others/python-socket.html",
    "revision": "2ed35975bc66e0a0c3dddea887feeae7"
  },
  {
    "url": "others/python.html",
    "revision": "f0b231227cacae1f870577f20a1202fd"
  },
  {
    "url": "others/q-learning.html",
    "revision": "dcb408305aa28d99db37b101b8bb723c"
  },
  {
    "url": "others/qr-code.html",
    "revision": "b6947da114eff5c114bc2dcb5bf1b542"
  },
  {
    "url": "others/qt4.html",
    "revision": "2eb53c1bfd2cb3b0f23599a3a81b4d73"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "188794664ab218404c84a35423b50147"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "71aaba0e676213bc120cc8a370c4ce04"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "3878ac5c3d1cd7af69da96ba02b7c715"
  },
  {
    "url": "others/sd-card.html",
    "revision": "4668981f1d1daba5ad9aea2421c0b1f4"
  },
  {
    "url": "others/sdn.html",
    "revision": "f4b2f81fc8e092feb84cf45517cd8c1d"
  },
  {
    "url": "others/star-uml.html",
    "revision": "c14420aff9f045af11bf3f5d3f82382a"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "4d26224ab09216b2e513d07da48f3101"
  },
  {
    "url": "others/verilog.html",
    "revision": "02d63d7e0e83676fd20be56bd9b4e7c8"
  },
  {
    "url": "others/vue.html",
    "revision": "38dd3cfe1b1fbfad9514d8a4e2b8d122"
  },
  {
    "url": "others/w5500.html",
    "revision": "7779b2c770b118d34f970643264982a9"
  },
  {
    "url": "others/w7500.html",
    "revision": "4f300504e6761109162e7699f2745d9e"
  },
  {
    "url": "resume.html",
    "revision": "01f5d49c2fdb5780ba41c3f59a6ddb59"
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
