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
    "revision": "7b7677555c6fc26ca79a44e98116875c"
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
    "url": "assets/img/cpu_core_system.99c3127b.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
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
    "url": "assets/img/esp32_pin_functions.671514cc.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
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
    "url": "assets/img/netif_list.73bfcf79.png",
    "revision": "73bfcf7938735b596ec4e2538170a853"
  },
  {
    "url": "assets/img/nonlinear_regression.f58b96b1.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
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
    "url": "assets/img/tcp_ip_stack.13913b2b.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "assets/js/10.d44f31e4.js",
    "revision": "c2edb3fe48f7569c43e37103eca1a9a5"
  },
  {
    "url": "assets/js/11.0cb423ae.js",
    "revision": "698f74491facd7a29926a8e8bcf324ba"
  },
  {
    "url": "assets/js/12.0bf0d223.js",
    "revision": "1e0a8b47e1a8ef5e589477051dc8d32f"
  },
  {
    "url": "assets/js/13.5b01901f.js",
    "revision": "01bc0c6db9b336470b948c0a6877a565"
  },
  {
    "url": "assets/js/14.1cce3ea3.js",
    "revision": "61eae28dfd427ddea2d10a3c952805ee"
  },
  {
    "url": "assets/js/15.0b9157e0.js",
    "revision": "3dd9b5d32294f3810618ba237798631d"
  },
  {
    "url": "assets/js/16.db181da8.js",
    "revision": "52a2a74eeb9670238cabb5bf7677b8c8"
  },
  {
    "url": "assets/js/17.2b39f985.js",
    "revision": "9acffb834720ad7ed9488f0498e3d48f"
  },
  {
    "url": "assets/js/18.36e5d72b.js",
    "revision": "965a30f71a674d43992ad10b2294464b"
  },
  {
    "url": "assets/js/19.1d7ab488.js",
    "revision": "69fe7863c226f56f03a8aa2c3e54ec43"
  },
  {
    "url": "assets/js/2.79a91c11.js",
    "revision": "a3a67c4b92024ff49a4d1b0c9665acc1"
  },
  {
    "url": "assets/js/20.213cb999.js",
    "revision": "505fc5bf7c2104397798d50a56b7a5a2"
  },
  {
    "url": "assets/js/21.346c0c45.js",
    "revision": "fccb20acd982e54ab524a50fd664b1b1"
  },
  {
    "url": "assets/js/22.01d8d9bf.js",
    "revision": "2e634b65d07b3767ec81719db5ea2c37"
  },
  {
    "url": "assets/js/23.2ee25230.js",
    "revision": "7fe1dce02fd1063cc15b21b97661136d"
  },
  {
    "url": "assets/js/24.aa06b49f.js",
    "revision": "a929cec1ccd88028d5a254e3a45ebae0"
  },
  {
    "url": "assets/js/25.74ad9d6a.js",
    "revision": "cd4891e16ff4d7ecea6b15de10b98e16"
  },
  {
    "url": "assets/js/26.e6e274dd.js",
    "revision": "1eb02939274b53dcb2d5556620b28404"
  },
  {
    "url": "assets/js/27.2d6005ab.js",
    "revision": "faf1e505e663c43bac35cbb55b0bafee"
  },
  {
    "url": "assets/js/28.efa974e6.js",
    "revision": "d095665f10837e4de44b95d5db30ce6f"
  },
  {
    "url": "assets/js/29.7134355c.js",
    "revision": "fd01e4da1a28b262ed4b14438455f184"
  },
  {
    "url": "assets/js/3.93cbad21.js",
    "revision": "c51d038c42e8fa898ac6bd4184d7a16e"
  },
  {
    "url": "assets/js/30.d3ae9545.js",
    "revision": "4e83d5255104454e43d2748b9892e189"
  },
  {
    "url": "assets/js/31.9057d6e6.js",
    "revision": "935b639cd398b27795a3553c1fc275ea"
  },
  {
    "url": "assets/js/32.09e58b5a.js",
    "revision": "55e7e3d9c886eb8c8620526518bae20d"
  },
  {
    "url": "assets/js/33.f33d6c44.js",
    "revision": "7cef9357ea87129cd31c75c35a73828a"
  },
  {
    "url": "assets/js/34.464ca8a8.js",
    "revision": "5d840cb168a0d9cc25cf86bc1a80d122"
  },
  {
    "url": "assets/js/35.50114fb1.js",
    "revision": "685e46ef42b139b92325fb3989613d1b"
  },
  {
    "url": "assets/js/36.065a5fe5.js",
    "revision": "18a73288121de2aa827f573096193a40"
  },
  {
    "url": "assets/js/37.f29bf6c0.js",
    "revision": "4616fad72341a495bcba4f6bc32baa5c"
  },
  {
    "url": "assets/js/38.b6071926.js",
    "revision": "89b826504f6b93d40252b557d8478556"
  },
  {
    "url": "assets/js/39.cdeafc83.js",
    "revision": "d4e672270b9f7f5ba21851f16de97a36"
  },
  {
    "url": "assets/js/4.85a4841a.js",
    "revision": "5f832272b0536b96309c5cd3fd4fdedc"
  },
  {
    "url": "assets/js/40.cc2ac768.js",
    "revision": "77a1bda18431bc78396808e0f91bb29e"
  },
  {
    "url": "assets/js/41.514169b6.js",
    "revision": "706bcc8b14e5b37ce4467c1d438a099d"
  },
  {
    "url": "assets/js/42.3cb7c487.js",
    "revision": "144bfd1068781509a33407b3d2ab9e07"
  },
  {
    "url": "assets/js/43.af8102c1.js",
    "revision": "2cd7f8b055a7492da56bd433f0045105"
  },
  {
    "url": "assets/js/44.6c640c7e.js",
    "revision": "bb9c1afaaef98dc8beadba264197ca20"
  },
  {
    "url": "assets/js/45.34e63a96.js",
    "revision": "e885ae8e97501cf9474ff57c4ecf7ddd"
  },
  {
    "url": "assets/js/46.80a3a481.js",
    "revision": "e1a23761f0275a86141b4797fec55a4f"
  },
  {
    "url": "assets/js/47.424c1d02.js",
    "revision": "1f3586e3ad463490cbdb035f6fa40bea"
  },
  {
    "url": "assets/js/48.97607314.js",
    "revision": "237e6e7814bc6bf8bed4923e793cbd59"
  },
  {
    "url": "assets/js/49.e5676e26.js",
    "revision": "888dc2c01e72c2ee6dc124e6693804dd"
  },
  {
    "url": "assets/js/5.c8b54d11.js",
    "revision": "eabaf40c871cda15d784a2647ab1386b"
  },
  {
    "url": "assets/js/50.8984db5a.js",
    "revision": "016b8623a66f91412c5b2a8cde7cae09"
  },
  {
    "url": "assets/js/51.34feec51.js",
    "revision": "f7f52a67468ad091a217b7d211ea1b39"
  },
  {
    "url": "assets/js/52.e34841e5.js",
    "revision": "2f5b6eb6142b3a2def3c93158e0a59a6"
  },
  {
    "url": "assets/js/53.d2d2c5a5.js",
    "revision": "7c6e8c96337ea9d7da4d3fbbdcbbe385"
  },
  {
    "url": "assets/js/54.303e225f.js",
    "revision": "7546db251762e9a27fdcaec60122283e"
  },
  {
    "url": "assets/js/55.868bddb7.js",
    "revision": "35ce4c38965b5337a87fcd24f73eb0c5"
  },
  {
    "url": "assets/js/56.8f3189b6.js",
    "revision": "3bf9feb574c726aa1f6220102402baab"
  },
  {
    "url": "assets/js/57.ac3b174d.js",
    "revision": "480fb0076b49b6e257cba083b4bf83ea"
  },
  {
    "url": "assets/js/58.449541d8.js",
    "revision": "6e884126f95b21a7dda40838ecdd9687"
  },
  {
    "url": "assets/js/59.30cb9928.js",
    "revision": "377b32e137df6ca0fdc5be964471e001"
  },
  {
    "url": "assets/js/6.b048d564.js",
    "revision": "fb1a0be6d13cfad8c826d2d6d3f456b2"
  },
  {
    "url": "assets/js/60.7f38d4fe.js",
    "revision": "ee39078ed13a5951743be48eef2b6f4c"
  },
  {
    "url": "assets/js/61.84963bca.js",
    "revision": "18e0a9196edfbad9252e3bc173615e78"
  },
  {
    "url": "assets/js/62.dad2a129.js",
    "revision": "113512895641ea6f06105cd381a4831e"
  },
  {
    "url": "assets/js/63.b9fe1fc4.js",
    "revision": "b8250f13d34bc045fade52fcdf2fa09c"
  },
  {
    "url": "assets/js/64.48460064.js",
    "revision": "bc1ef44a8f5aab041c9f51e997b8447a"
  },
  {
    "url": "assets/js/65.9fbb954b.js",
    "revision": "feb19cab6aab7e741cc274627411e2b4"
  },
  {
    "url": "assets/js/66.67e3cd07.js",
    "revision": "7105a26c58a94d9b5ccb94ab17746c6b"
  },
  {
    "url": "assets/js/67.280745f3.js",
    "revision": "bc0f56963f683e9d60f6694b749a5d14"
  },
  {
    "url": "assets/js/68.e22a1066.js",
    "revision": "35b2b4a68266410987e7a6bac47a09cf"
  },
  {
    "url": "assets/js/69.6c4cc432.js",
    "revision": "5122ac20c5c68c26ab8000c139e50964"
  },
  {
    "url": "assets/js/7.80df8bb5.js",
    "revision": "172fa69c89bd3527603bb9a790f29895"
  },
  {
    "url": "assets/js/70.deda6b33.js",
    "revision": "fbd5f6167689344d77572338b98fd5e3"
  },
  {
    "url": "assets/js/71.68ef0e71.js",
    "revision": "18c5b136332f7c7d293ae80f9c19662c"
  },
  {
    "url": "assets/js/72.59c32e6e.js",
    "revision": "1e430edf6cfcb5376fb80807c24d163d"
  },
  {
    "url": "assets/js/73.d9c6761a.js",
    "revision": "993bf7a25f4cc385ce8f9286b691c6b1"
  },
  {
    "url": "assets/js/74.f9e61e88.js",
    "revision": "4825843f948c8c9e7e950e0f3529d65e"
  },
  {
    "url": "assets/js/75.e6fbf305.js",
    "revision": "aec17cb037499a8cb79ee0d6013cba20"
  },
  {
    "url": "assets/js/76.3f34c3b7.js",
    "revision": "a86d4bb4701f0f23024a5e78dd0d580d"
  },
  {
    "url": "assets/js/77.db66a003.js",
    "revision": "a39bd95283b61e6a5c079ae1f1a6d162"
  },
  {
    "url": "assets/js/78.70adad8b.js",
    "revision": "d09a0ef8071e8d8fa24091645ed37627"
  },
  {
    "url": "assets/js/79.030ab260.js",
    "revision": "8d8ac292cf6fcb1bbdadff6a26d448b9"
  },
  {
    "url": "assets/js/8.1b1e9cb7.js",
    "revision": "cc00e839d873bbc26d501ccfa5dbe5aa"
  },
  {
    "url": "assets/js/9.1aff4324.js",
    "revision": "fc7d24ff10edb7229a7b4ffda798618f"
  },
  {
    "url": "assets/js/app.1abc3fef.js",
    "revision": "d263f774d0c1b6ef8d09eed126c6e822"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "81221993d33a3d10b5e5e2613e08236f"
  },
  {
    "url": "cs/bash.html",
    "revision": "2066e7d6e2c116461e5cbc57cab41fa5"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "f4b8f2fc2227f53f62710ef907a7a333"
  },
  {
    "url": "cs/cmake.html",
    "revision": "cb7ae4deb73f3dcb58e3e6cb500a9757"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "1f2d3b4010b722ae6c12142a4d853492"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "33cc0c29b4c37c917857c30f1840446f"
  },
  {
    "url": "cs/git.html",
    "revision": "4e5fa3fdba4e930352deb9e6d9ad7408"
  },
  {
    "url": "cs/index.html",
    "revision": "ccf6efbd7cb0af5128d3d96f7cdd88d5"
  },
  {
    "url": "cs/keras.html",
    "revision": "115dd42f75cc52438db20f16d3d1748a"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "9cf88406ae5a0b006c71bdc1e36646f3"
  },
  {
    "url": "cs/lwip.html",
    "revision": "52c5819adb6345df3ec4c6287fbf4db1"
  },
  {
    "url": "cs/scala.html",
    "revision": "0eb7912cac3c9a74d5e1174c9f03ff26"
  },
  {
    "url": "ee/about.html",
    "revision": "30b5f8d5f313dfe10f696d7ba843e900"
  },
  {
    "url": "ee/chisel.html",
    "revision": "4ee2178b2d0d3c88332101cf61591da4"
  },
  {
    "url": "ee/esp32.html",
    "revision": "2adb2acba25c1f53b3d3533b69da4c51"
  },
  {
    "url": "ee/index.html",
    "revision": "d567263d5c2b8fa556ef3323c8e69d5f"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "d7c1c569dca9d07b87a5411b748b4be7"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "9c0960e1fd1515d8bff746a232bb14fb"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "0e6ad33511dab1578c3570707d314b67"
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
    "url": "images/ee/esp32/cpu_core_system.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
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
    "url": "images/ee/esp32/esp32_pin_functions.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
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
    "url": "images/ee/esp32/memory_map.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "images/ee/esp32/peripheral_clock.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
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
    "revision": "7b998d238ab87aa2cd655ecd9465a945"
  },
  {
    "url": "others/about.html",
    "revision": "b04dd0788d33e0d8e6c0a34d8414da73"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "c8f06e43186a8ce19dc67c365748e6a4"
  },
  {
    "url": "others/android-studio.html",
    "revision": "b3db45ce31e662689f2bff854aacf5ee"
  },
  {
    "url": "others/android.html",
    "revision": "22b7120e9bd9dc7dfad825a6b27007f4"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "21626690795bd196b9d869fe12abece2"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "6e33774255fe848c8a4b427335ab8cdf"
  },
  {
    "url": "others/css.html",
    "revision": "7f20959b6eec5f39a9a50515f2f42b34"
  },
  {
    "url": "others/docker.html",
    "revision": "f0db4202086699e3bb8985706804b2c6"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "e5bed4be9bb0902d4050ccd987535ec5"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "1216ea80a2e54f919eaa60d74a5b99e7"
  },
  {
    "url": "others/english-writting.html",
    "revision": "34d8af53bfc24fb9b824d888a9acdd44"
  },
  {
    "url": "others/freertos.html",
    "revision": "766ff1d566da99ccfce946577425708e"
  },
  {
    "url": "others/gns3.html",
    "revision": "de4010e233c21fafdb07021078c2db3d"
  },
  {
    "url": "others/gps.html",
    "revision": "002bfd786094e9f6548d24780fbdbd61"
  },
  {
    "url": "others/html5.html",
    "revision": "50d1b58f9184da178a13877feb256bfa"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "3433b3b53dd987f7030d47d2d8338db5"
  },
  {
    "url": "others/index.html",
    "revision": "c5852e2d3c37373a269ac85054320579"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "54c64d527f1059f3a1117d9fece57018"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "7ae332c57d8a0a813b3996f64b434485"
  },
  {
    "url": "others/javascript.html",
    "revision": "d33ab76f4bc10cc2ed67bcd5d1c7fe50"
  },
  {
    "url": "others/json.html",
    "revision": "2b5e189fd243700fe13bd6edafd0a2e9"
  },
  {
    "url": "others/latex.html",
    "revision": "6880e84d92ed7344488e71bee3fad867"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "72460e358328dd75505e25fe172b32d7"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "4e67acc28ea6ee6ef8c2c46ca15152f1"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "99851a8bd8352746908009b488fb27f5"
  },
  {
    "url": "others/markdown.html",
    "revision": "163cbab45916587fb31c0ce1529ff7f8"
  },
  {
    "url": "others/matlab.html",
    "revision": "43d71a5b998b5226c655630906f69a0a"
  },
  {
    "url": "others/mdp_template.html",
    "revision": "a8684ae09b9eb297ce34cf563dfd2e24"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "72692e059475ae1dea0465a133e1b4f6"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "b959f6a6b7eac6831a1c692184bf5a77"
  },
  {
    "url": "others/network-security.html",
    "revision": "f545c010e2e35a1726c83ec85d17cdff"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "cb7a5cff28de56208abae84c5362f232"
  },
  {
    "url": "others/oral_english.html",
    "revision": "c8bbaa14c773987a8846921d0c95d258"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "33133e29d65dd8f9e015aa1f31787f57"
  },
  {
    "url": "others/poe.html",
    "revision": "7ca10b5870c4e616993cbd55910890c0"
  },
  {
    "url": "others/pyside2.html",
    "revision": "9e6a60ca683ecd4ca5776ccd521b7a0d"
  },
  {
    "url": "others/python-socket.html",
    "revision": "ec8b80f1dfb6c97c36a7399f901ce246"
  },
  {
    "url": "others/python.html",
    "revision": "538cdfb896f2999cb7c7cc1ec07d4b79"
  },
  {
    "url": "others/q-learning.html",
    "revision": "aa0bd2ef762914dcfa5374cd3c8cda67"
  },
  {
    "url": "others/qr-code.html",
    "revision": "7c40b51f6ff9b6fbf9b7afabc004b200"
  },
  {
    "url": "others/qt4.html",
    "revision": "ebc55ec0ee1191957d99a7927d3182d6"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "0ff92cc793350cd9e212e3d133741600"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "d6ed39b8b2afa1663027f72733093884"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "016b6fcfe5f2c768a074087e1f0d79f8"
  },
  {
    "url": "others/sd-card.html",
    "revision": "9b7c995ef03e61e4d1ea274b4fd760dd"
  },
  {
    "url": "others/sdn.html",
    "revision": "95dbd881a5a94b9cc0416fd9d8a9778f"
  },
  {
    "url": "others/star-uml.html",
    "revision": "91d0dd2ee8e7112ebf03448862816b49"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "b991c036449deac9aec5115b0d2032eb"
  },
  {
    "url": "others/verilog.html",
    "revision": "cf2e9b44a287a6eb49d450dcbb3aa7bb"
  },
  {
    "url": "others/vue.html",
    "revision": "a865e84158f9d5b15929415d65aad999"
  },
  {
    "url": "others/w5500.html",
    "revision": "0b151c0e07bf8c6f46d9ae8bb68c3f10"
  },
  {
    "url": "others/w7500.html",
    "revision": "221753b44bceca8cffb4df5ceed59f2f"
  },
  {
    "url": "resume.html",
    "revision": "1cfec3e2221830c522989dc36a168b3b"
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
