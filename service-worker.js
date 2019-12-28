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
    "revision": "500281e2d3cf5c8f1cd5088788ce4c19"
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
    "url": "assets/img/knowledge_map.12bc9800.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
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
    "url": "assets/js/10.d85ef7e1.js",
    "revision": "3ffe2fe7ce5a262db46bb538aa25686c"
  },
  {
    "url": "assets/js/11.32c92ede.js",
    "revision": "aefc98e815adc5359d0eccec3540acf8"
  },
  {
    "url": "assets/js/12.70949b66.js",
    "revision": "0c064242604f7870358f092303529ea4"
  },
  {
    "url": "assets/js/13.e8e890e9.js",
    "revision": "89678e8f41bbf8ebf8cdaf85caae5007"
  },
  {
    "url": "assets/js/14.df669a5a.js",
    "revision": "8f3a277d9292fb19a8c8e69ec88a4a16"
  },
  {
    "url": "assets/js/15.eefcf8be.js",
    "revision": "75905fa90ddc654714b39eb61e64c2f7"
  },
  {
    "url": "assets/js/16.507a771c.js",
    "revision": "541ff2806bfd79afe9f9583898e1fae1"
  },
  {
    "url": "assets/js/17.3e6d61b7.js",
    "revision": "1bc8a54c3e233ef66005c289a2ea95ee"
  },
  {
    "url": "assets/js/18.b85e5b40.js",
    "revision": "f990297b0b97e12e31c9c974c4affd9a"
  },
  {
    "url": "assets/js/19.7d807a1f.js",
    "revision": "21d095b11f686f9e58902fe9df8816c5"
  },
  {
    "url": "assets/js/2.6d6cf336.js",
    "revision": "cf8dbcd1db7b04efa062d828df06f0a6"
  },
  {
    "url": "assets/js/20.82295697.js",
    "revision": "f575c4c7bf7f7fc6aa451f3da0b7cd72"
  },
  {
    "url": "assets/js/21.a9928ed2.js",
    "revision": "8a1d1fdbb63f2a599153173b8f593405"
  },
  {
    "url": "assets/js/22.f93b15e3.js",
    "revision": "f53b9e7e639f5a1b982bec65d1ed8d8f"
  },
  {
    "url": "assets/js/23.cb95e6f0.js",
    "revision": "d41ce6a46246504aef755d2754abb3e1"
  },
  {
    "url": "assets/js/24.658f4b39.js",
    "revision": "d369ccb499a8cde4444618db3fa9f8c1"
  },
  {
    "url": "assets/js/25.af6d4d98.js",
    "revision": "aa87671f9585617569d2a71effda9801"
  },
  {
    "url": "assets/js/26.f26965b0.js",
    "revision": "582456872584fe0a3e492a049a760c54"
  },
  {
    "url": "assets/js/27.643068bb.js",
    "revision": "fafc845fd3840c4b9d1bda92a11771a7"
  },
  {
    "url": "assets/js/28.85361bd2.js",
    "revision": "d3609c988daa94f9ddd26b4f18cc8867"
  },
  {
    "url": "assets/js/29.755089d3.js",
    "revision": "4782baff7b14295ac2c487194c1721cb"
  },
  {
    "url": "assets/js/3.da2e951c.js",
    "revision": "befd0fe7ca4bde2e7bab4ec7bdf42c30"
  },
  {
    "url": "assets/js/30.0a053e13.js",
    "revision": "da5ee7cbc7c80b5c1efb00ac46a75a4b"
  },
  {
    "url": "assets/js/31.05708751.js",
    "revision": "5710d47ed6a11ed36a3975288064b0f8"
  },
  {
    "url": "assets/js/32.58af06bb.js",
    "revision": "90848a54ebae22fea1611b805f17d836"
  },
  {
    "url": "assets/js/33.c1a9b07f.js",
    "revision": "c0b057dfec60cb12ab81fcc3fc4c5354"
  },
  {
    "url": "assets/js/34.9e52c704.js",
    "revision": "85808097d3fa24583307272317453ba1"
  },
  {
    "url": "assets/js/35.616b39ca.js",
    "revision": "347600a6ad1f35cf11894105509690e4"
  },
  {
    "url": "assets/js/36.fbced71b.js",
    "revision": "b49e88cda6d35b17ffdbd04d12a43e2d"
  },
  {
    "url": "assets/js/37.cdd87c03.js",
    "revision": "984fc3cb536467097603505c4c681f81"
  },
  {
    "url": "assets/js/38.55046624.js",
    "revision": "b847f0b61b4fdb8d0dd6ae9a03dc3947"
  },
  {
    "url": "assets/js/39.fce5df4a.js",
    "revision": "f8fe4cd586296db316296a4d6224d84f"
  },
  {
    "url": "assets/js/4.41b543b2.js",
    "revision": "16c66874c8e6fab8148bc6c0ef056a4f"
  },
  {
    "url": "assets/js/40.7f9632c2.js",
    "revision": "6110d63dfcc15cc77bc24ade96eff92c"
  },
  {
    "url": "assets/js/41.f58bf89a.js",
    "revision": "960925b416663c6966723f868b690e4e"
  },
  {
    "url": "assets/js/42.a0280f49.js",
    "revision": "8eac0c455739a35df75efb25c52c5553"
  },
  {
    "url": "assets/js/43.d89402bc.js",
    "revision": "a35c756e59b7ce2b5974ca76e3e0590a"
  },
  {
    "url": "assets/js/44.e46ffcc2.js",
    "revision": "c5f5a3535089ed256801a1dec17d3e32"
  },
  {
    "url": "assets/js/45.4232aa0c.js",
    "revision": "b3bf7ed922c5f5442bd576a0d0554fc3"
  },
  {
    "url": "assets/js/46.992df65a.js",
    "revision": "5fac287ab1d2cb40d2d0154c3bcca98f"
  },
  {
    "url": "assets/js/47.0f42bce2.js",
    "revision": "8709d15f5356cacf46ff769fb591c752"
  },
  {
    "url": "assets/js/48.a8b83fcf.js",
    "revision": "3e9da520818b6a26295312ba9db21a5c"
  },
  {
    "url": "assets/js/49.9e7ffde4.js",
    "revision": "4756b48c1fb892ec425d233fb80438e4"
  },
  {
    "url": "assets/js/5.51a38cae.js",
    "revision": "eb4072644738e0ab71b7ee87e1197d9e"
  },
  {
    "url": "assets/js/50.c99227c6.js",
    "revision": "4cac8e4d54cfc4e74a9b3eac21b18db5"
  },
  {
    "url": "assets/js/51.ae85f2e1.js",
    "revision": "b0ac71f5e176587c8da7643b47595e3c"
  },
  {
    "url": "assets/js/52.03d2c9a2.js",
    "revision": "eeaccb04407e9378ef60661e923930ec"
  },
  {
    "url": "assets/js/53.038b3785.js",
    "revision": "3aef772885c94f1ccd0280f43dec2147"
  },
  {
    "url": "assets/js/54.465cac09.js",
    "revision": "3d3b4dcd26108ff77b1f885f88253bbf"
  },
  {
    "url": "assets/js/55.60e9bdd8.js",
    "revision": "f6524b5eabc2044ca97bd83ec995631e"
  },
  {
    "url": "assets/js/56.1cd4b8d9.js",
    "revision": "34fc2ec6a7ea50285c29120ce9d3a59d"
  },
  {
    "url": "assets/js/57.f5ae31c8.js",
    "revision": "a7ff3a4f734c8903f36ac2fd58340ac4"
  },
  {
    "url": "assets/js/58.7be65780.js",
    "revision": "08ea54ca30fec801329ea94782932f6c"
  },
  {
    "url": "assets/js/59.c690f4a3.js",
    "revision": "75087ca4201e2249003aa88ce429798b"
  },
  {
    "url": "assets/js/6.83fa18d5.js",
    "revision": "523cf42598bca40de2a4f9409ed022fc"
  },
  {
    "url": "assets/js/60.5afa685c.js",
    "revision": "ebda4d4168248842fed5095225d116e9"
  },
  {
    "url": "assets/js/61.8c42398e.js",
    "revision": "e719a4715050c41610122c5aa22c006a"
  },
  {
    "url": "assets/js/62.b7f7dc88.js",
    "revision": "94b306e3131b8f4a5d31c0d0d5649a6d"
  },
  {
    "url": "assets/js/63.2d74f817.js",
    "revision": "71a22badb51f9935398be0f5e1601422"
  },
  {
    "url": "assets/js/64.b708f2b3.js",
    "revision": "ba2f9b0120dad7b00a93fc3477488def"
  },
  {
    "url": "assets/js/65.185344c4.js",
    "revision": "952ad967c8297c9b76a082ca141260a9"
  },
  {
    "url": "assets/js/66.b3f2856a.js",
    "revision": "f0e85cd37f0ab55f26c2bf8faed44ee7"
  },
  {
    "url": "assets/js/67.1920f39d.js",
    "revision": "97334e63af0735ccf65ae583e44923d7"
  },
  {
    "url": "assets/js/68.7e59f2cd.js",
    "revision": "fac83b288bf3daa14fa092c6551361f4"
  },
  {
    "url": "assets/js/69.ab470ccc.js",
    "revision": "84dca4308bae58287ea28c074b9e6fed"
  },
  {
    "url": "assets/js/7.d29938eb.js",
    "revision": "ad6b7b91882ffbacf363c29aff4aef9f"
  },
  {
    "url": "assets/js/70.602a2eaf.js",
    "revision": "f738eaf700c672c3eb3bc9425da74442"
  },
  {
    "url": "assets/js/71.9e71e99c.js",
    "revision": "57fbfc91e62449ac3d1bb7d2bfa9bc28"
  },
  {
    "url": "assets/js/72.86b9436e.js",
    "revision": "9d4d23cee1534ff5d5106f2656f05fc5"
  },
  {
    "url": "assets/js/73.10c837b8.js",
    "revision": "bfb38f79dc4f41ade035835da1ccc97f"
  },
  {
    "url": "assets/js/74.ffd381ab.js",
    "revision": "ba72190e960fafd4adffa08094f455c4"
  },
  {
    "url": "assets/js/75.96cbbdeb.js",
    "revision": "c9335e5bf8f5959b88fdfb26917e76f8"
  },
  {
    "url": "assets/js/76.3fc5fe46.js",
    "revision": "1d2200c25ccee846f7ec10b10e936a15"
  },
  {
    "url": "assets/js/77.ffcfc21d.js",
    "revision": "d4d73de8417e61b1e4a2ec11d4ec8a0f"
  },
  {
    "url": "assets/js/78.653bc4cd.js",
    "revision": "efce3d1828469b2fe9c4b5c555d1c77b"
  },
  {
    "url": "assets/js/79.c956355e.js",
    "revision": "58c2503e6ff20e4a354a34948e6fd6bd"
  },
  {
    "url": "assets/js/8.d8bf0b89.js",
    "revision": "de310794aad8d814470f8eca108a5437"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.6ee5d59b.js",
    "revision": "ed06de669b17f1ac05ef448f67fb1d2c"
  },
  {
    "url": "assets/js/app.a8e6d649.js",
    "revision": "be39555a5935147c890bb95c742f5c1a"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "eeac3e7959c27575cdaae6066802ccf5"
  },
  {
    "url": "cs/bash.html",
    "revision": "6b9c9a2b6cc6f6b1a15c241a62892daf"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "8f2c10e0f6cca0fbccdfc9df761218fb"
  },
  {
    "url": "cs/cmake.html",
    "revision": "fe1413dfdbb44be22d44e1b33aae02e4"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "c9168ed313ba2a1d3b02a83825251fb1"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "1ea2c33de9834df21d23d44c447baa03"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "00e85d592b8980c4a9bc8a4d8e9ac8e5"
  },
  {
    "url": "cs/git.html",
    "revision": "49afef7019de12117a150ef68c0f60b6"
  },
  {
    "url": "cs/index.html",
    "revision": "b5cd84ebfb56410b69a9b15c637362dd"
  },
  {
    "url": "cs/keras.html",
    "revision": "d900ae0b1c1225a7681414a23ad31923"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a754bc39042433996fc88f0a78d1592f"
  },
  {
    "url": "cs/lwip.html",
    "revision": "2ccc68f88e02c2a7a84fa5c96fcf8f5d"
  },
  {
    "url": "cs/scala.html",
    "revision": "fd56eb459e8c4d89806d544810c76f8a"
  },
  {
    "url": "ee/about.html",
    "revision": "4a20ff40db31f282a5e0a0a128f1bd48"
  },
  {
    "url": "ee/chisel.html",
    "revision": "f8bf14971deb2d4285498ed6f72bad26"
  },
  {
    "url": "ee/esp32.html",
    "revision": "9498e048cce053809e957e6b936a841f"
  },
  {
    "url": "ee/index.html",
    "revision": "683c8a011e0e40ec22615ebcd67fce17"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "1c5ca74750ba78b1f4b5196cf3cee504"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "8f2fdc348f42c396288df2d632374ccb"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "42029f3396d8455305bf2706a4235686"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "a39e4073dd7dbccc08206a3b3717ce11"
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
    "url": "images/cs/computer_composition/knowledge_map.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
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
    "revision": "8c64b34b87c4bd50fa79231928b4831c"
  },
  {
    "url": "others/about.html",
    "revision": "9eceef0088059a442e965f2c22b942bf"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "117d84b1b81b976bbb1e2e5f1dd0abe1"
  },
  {
    "url": "others/android-studio.html",
    "revision": "ee57a44d8c94d9cb1981878e67c57f9d"
  },
  {
    "url": "others/android.html",
    "revision": "88146ec2ed2bfcee979514bc716cf6bd"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "dbded275037b6185dda11a0359ace44d"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "6dee64596d6d2daec83dcd42a1a56e7d"
  },
  {
    "url": "others/css.html",
    "revision": "5eace5482057442a452c24e9b9e8810a"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "e97a0f3765241a1d88a15561b786868e"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "c0b8c2156d55c1c9a804b1e232665841"
  },
  {
    "url": "others/english-writting.html",
    "revision": "d954f41d04ab716ba0675069a242e119"
  },
  {
    "url": "others/freertos.html",
    "revision": "1b6d6f725c96e212e80cca60ff5bd21c"
  },
  {
    "url": "others/gns3.html",
    "revision": "469e0af8f93b9f404d2980e8eac3ed70"
  },
  {
    "url": "others/gps.html",
    "revision": "ce30c58c06cb1b41f82a5b80bd8be751"
  },
  {
    "url": "others/html5.html",
    "revision": "2ec393c07e6a35f45fa74fe81945697b"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "12bce6cd5d552c11a158ababec68d958"
  },
  {
    "url": "others/index.html",
    "revision": "a492a38918b04660cf8ceeff1ad77971"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "f16a9a728890b66d28781d0e5c0f6dda"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "9c4bb2f57ea8407e8c6a37828880b002"
  },
  {
    "url": "others/javascript.html",
    "revision": "d1cc9b32bf3601039e97b7ba0d161007"
  },
  {
    "url": "others/json.html",
    "revision": "e61dbba6284d02bc8034f1c407a39b1e"
  },
  {
    "url": "others/latex.html",
    "revision": "c6e3e3aa0f41d05a2f07cdecbc68d312"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "31d0c2f6e23ae66ba50533d08377b2d4"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "d3ade4474e137398846e0f2992bb8199"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "d4271c41ccae5814fec4a45e445b8974"
  },
  {
    "url": "others/markdown.html",
    "revision": "92ab5f3d9825e59a03ba12df289ec144"
  },
  {
    "url": "others/matlab.html",
    "revision": "7f6f5d4a6fcf40f00b27c46bd94a5a0b"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "be304831fc868bd1e4f9308b299c0812"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "dd55dd2988026715032534c5e694d2b4"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "600a514d7da143c8dfe536873c3dea6d"
  },
  {
    "url": "others/network-security.html",
    "revision": "38b9b39c74611c0fae67c647cf2e3b7e"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "ba0e86a1788ac014a52676708b8f124f"
  },
  {
    "url": "others/oral_english.html",
    "revision": "e1c4c40099e805a827cdff9347e3e245"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "e243d030ff9610f4aabc63248a4bf8ab"
  },
  {
    "url": "others/poe.html",
    "revision": "28c194353b53a89fb798dfc87bc6f4bd"
  },
  {
    "url": "others/pyside2.html",
    "revision": "7e2582bd463a63a8c1f06a4b339d84de"
  },
  {
    "url": "others/python-socket.html",
    "revision": "5fd7579eaffe0e87192025c0b4efa349"
  },
  {
    "url": "others/python.html",
    "revision": "2bee7449ee75a78957b93fba8399a2c0"
  },
  {
    "url": "others/q-learning.html",
    "revision": "813c07c93849034098533d426ac062de"
  },
  {
    "url": "others/qr-code.html",
    "revision": "79a5431f1c3f792d27da2bab50bcbfc5"
  },
  {
    "url": "others/qt4.html",
    "revision": "371d454f8298340fde7ccd6536ba39e7"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "b0aafb9b5d8d76319ce0d3fb488b82de"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "4b3e60d171d9eccfa9537d47dd400006"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "ca1127b6e4ec5b463f602a2b692c8d3b"
  },
  {
    "url": "others/sd-card.html",
    "revision": "d2740a34e738cf71846d063b94734dc1"
  },
  {
    "url": "others/sdn.html",
    "revision": "0dd33d4ce2b22192fc9fecd2617c07ea"
  },
  {
    "url": "others/star-uml.html",
    "revision": "7d28735a1a0744e5e9d0bb466ab5171a"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "f65f52adef0abc9dc0dbfd81c5ba7fed"
  },
  {
    "url": "others/verilog.html",
    "revision": "4fb25207a69e0c1cd3c9b1d8aa9fd75b"
  },
  {
    "url": "others/vue.html",
    "revision": "a71fe02eecb6ee2f34b723ddea0780b3"
  },
  {
    "url": "others/w5500.html",
    "revision": "c844436ddac0461b52507d18b0035c33"
  },
  {
    "url": "others/w7500.html",
    "revision": "506f99e8c9ea6cd96b660fc9a6c5cfd7"
  },
  {
    "url": "resume.html",
    "revision": "3487093c94ea7300379f8a4afe872157"
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
