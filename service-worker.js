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
    "revision": "cff9f4503f22a2edfac9dcb605e1c655"
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
    "url": "assets/js/10.7e58e60e.js",
    "revision": "ad02f42fc16be71bee03efc7cc8ebe3b"
  },
  {
    "url": "assets/js/11.92ecb660.js",
    "revision": "345465e13fa05163b15338b1c43d8c59"
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
    "url": "assets/js/19.7b3a5863.js",
    "revision": "aa9206da5e4a3c2c3de8905d84b04423"
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
    "url": "assets/js/21.da443a90.js",
    "revision": "7c8e326a19bf48fbdc79d08137d8edd2"
  },
  {
    "url": "assets/js/22.d268d78b.js",
    "revision": "599989feacf86b65f9888d9ed5e578f6"
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
    "url": "assets/js/3.561ceaef.js",
    "revision": "39459f0dbc2d067abbe813ce48df4f03"
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
    "url": "assets/js/32.a644cd3e.js",
    "revision": "e91c16d870fed519dabad9727f9ea393"
  },
  {
    "url": "assets/js/33.8726afbb.js",
    "revision": "bed14b4a7e1a4571643cb90b7b12b3cc"
  },
  {
    "url": "assets/js/34.27e89718.js",
    "revision": "fb6f9e7680a5ad1db94e1601d8cd4287"
  },
  {
    "url": "assets/js/35.42ea741e.js",
    "revision": "f817bfb50b9d4642b53c6d7fe09c12bc"
  },
  {
    "url": "assets/js/36.e8ba2346.js",
    "revision": "d19f0bea2c6c945435979b477232cd12"
  },
  {
    "url": "assets/js/37.d992b1dd.js",
    "revision": "a0bf60c42365e5af55b800f8c4a19692"
  },
  {
    "url": "assets/js/38.3161211f.js",
    "revision": "51b63a7cc3077e16c55f9e3feb0d41d1"
  },
  {
    "url": "assets/js/39.c2c904a9.js",
    "revision": "7fd3de1197fa2a4a52b2063d1d8624d9"
  },
  {
    "url": "assets/js/4.85a4841a.js",
    "revision": "5f832272b0536b96309c5cd3fd4fdedc"
  },
  {
    "url": "assets/js/40.a3b0d820.js",
    "revision": "b0e36a6d745b69312257fad465836dde"
  },
  {
    "url": "assets/js/41.5ba46835.js",
    "revision": "c18cfd9d132cfd6e09b95011ff6737d9"
  },
  {
    "url": "assets/js/42.5292e460.js",
    "revision": "4e5aa52d71e5c385eceedbcc1b25550b"
  },
  {
    "url": "assets/js/43.e754530a.js",
    "revision": "b9d052e1fe3c5e79b98bba7b3a59ba65"
  },
  {
    "url": "assets/js/44.d42fd4ea.js",
    "revision": "34ac7864f5a8f2f9ab434ef5c10297cb"
  },
  {
    "url": "assets/js/45.4dd2c386.js",
    "revision": "2bae41589efd6a8f1a45e3f3fc53a612"
  },
  {
    "url": "assets/js/46.70645f35.js",
    "revision": "335c4bcf4ac0a960405841e865c85657"
  },
  {
    "url": "assets/js/47.35429b3b.js",
    "revision": "4f8562b674f8de8fa2fe02709d767828"
  },
  {
    "url": "assets/js/48.50d47e6b.js",
    "revision": "6bfaf53372ccb82802ed66d6e04668f6"
  },
  {
    "url": "assets/js/49.bcfaa49e.js",
    "revision": "42a5099f6203b81683cdcb59f34e73d7"
  },
  {
    "url": "assets/js/5.c8b54d11.js",
    "revision": "eabaf40c871cda15d784a2647ab1386b"
  },
  {
    "url": "assets/js/50.84d68eab.js",
    "revision": "e5666ec721175693b6e4a997e5a1038f"
  },
  {
    "url": "assets/js/51.69b83d05.js",
    "revision": "ff09904524451ffe3212ef1cead1b21e"
  },
  {
    "url": "assets/js/52.cb9884ee.js",
    "revision": "d70e01bac182c254d18865527f7e24b7"
  },
  {
    "url": "assets/js/53.2b2b8cef.js",
    "revision": "5c009949ca32238aac9e22f0fd913972"
  },
  {
    "url": "assets/js/54.c3bf91d0.js",
    "revision": "53d4b6fae71d61048b29367e0ba9c50d"
  },
  {
    "url": "assets/js/55.1cbf1f2e.js",
    "revision": "f77e25cd5df72358550d48ea7a206928"
  },
  {
    "url": "assets/js/56.5d30c9f1.js",
    "revision": "df805061d61e6b9e7db1f10333f4939e"
  },
  {
    "url": "assets/js/57.59ba6e58.js",
    "revision": "24fb353b82dbeb949b1575dc55ded1b1"
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
    "url": "assets/js/62.e1d5abb9.js",
    "revision": "c1ecef85dbe4f817be99f9b4d0f38afe"
  },
  {
    "url": "assets/js/63.8aef338f.js",
    "revision": "de990153733429f5a15eb15aa74492e6"
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
    "url": "assets/js/76.5aac4401.js",
    "revision": "bcb87c512db3666997ecd60067b70718"
  },
  {
    "url": "assets/js/77.cff8e111.js",
    "revision": "722569873a16671337c0a162355da03d"
  },
  {
    "url": "assets/js/78.d0ecfa57.js",
    "revision": "0ccdd7a63cfb0716ebcb4bb0795d4226"
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
    "url": "assets/js/app.3e6349c0.js",
    "revision": "a379f6634b112e67016f713421c14be1"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "b07311cd50022246b99e5c07501b41d9"
  },
  {
    "url": "cs/bash.html",
    "revision": "4f1f3dbcc80355933834cbde6d08fecd"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "e0466c706492d0aff9941152a6cc2cb9"
  },
  {
    "url": "cs/cmake.html",
    "revision": "46988485f0897a8fe2983d7c336e99f0"
  },
  {
    "url": "cs/compilation.html",
    "revision": "33a859d98414f4654e45392adb6d2f43"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "406010459332a4391fb6895d62013389"
  },
  {
    "url": "cs/git.html",
    "revision": "2daf7bdeb91d78ba0c4f1c7345eedfd0"
  },
  {
    "url": "cs/index.html",
    "revision": "5a84887627902bd3d47b1cfd12b662bd"
  },
  {
    "url": "cs/keras.html",
    "revision": "0308e348379219fbe8562086e8eca7ee"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "129a0fea4462da3431887bd0ff4eafe0"
  },
  {
    "url": "cs/lwip.html",
    "revision": "b869830e2bd6a4dae51046cec729fdb9"
  },
  {
    "url": "cs/scala.html",
    "revision": "1e56a0690e4398d98880268a7766557f"
  },
  {
    "url": "ee/about.html",
    "revision": "3ad4b20d734b8f0c54aab18c1c6fd542"
  },
  {
    "url": "ee/chisel.html",
    "revision": "5c5f0002c10e2420d94784cd25aad3d9"
  },
  {
    "url": "ee/esp32.html",
    "revision": "0388ccd94842e7d9559b782e3686450a"
  },
  {
    "url": "ee/index.html",
    "revision": "f86862137d8309903e7b0e36f403e492"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "a0b09e778ecc72505b2f02e1cb8532d6"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "1703e67a5d8b7b8ebb78019f3ed024ca"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "dd1d14c53317ceba0e121de935c45fff"
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
    "revision": "c702912fe848e15baed0820b945db116"
  },
  {
    "url": "others/about.html",
    "revision": "92e22e03fd0895da5f6cdb2a184f8c2b"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "e771411959ac84c03168d8cffd84ea11"
  },
  {
    "url": "others/android-studio.html",
    "revision": "4141cb07c245e62e9256809857a70de4"
  },
  {
    "url": "others/android.html",
    "revision": "491c5746dae80b251397f325886f2b01"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "1cd0eab014caac63887b5956a369cbfe"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "ed73a2b2a8c7345d3fe820564281232b"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "cc17f87bfcd046b0867dd40fd4e8da5f"
  },
  {
    "url": "others/css.html",
    "revision": "d27515314e97e3617970c358b6c0cf5f"
  },
  {
    "url": "others/docker.html",
    "revision": "1822c989ea7e1301c0f63370e58cf449"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "eabe37cdc205a2448679a11daf997337"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "5d2b6fa32face395a447ca2f72cc9203"
  },
  {
    "url": "others/english-writting.html",
    "revision": "42fe6b211ce0a1c9b95013a16b5b15dc"
  },
  {
    "url": "others/freertos.html",
    "revision": "1cb2a9039d681e72b2394221136a84ed"
  },
  {
    "url": "others/gns3.html",
    "revision": "af0b4685e01bacceb217034741e52236"
  },
  {
    "url": "others/gps.html",
    "revision": "b15130696c17e27119d44195fe917aeb"
  },
  {
    "url": "others/html5.html",
    "revision": "99467ff6abb3b9139a3d59d88ff359da"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "aabea6690f5793ed53c51eb99ba719c0"
  },
  {
    "url": "others/index.html",
    "revision": "83b798e8dd2bdfacb5bdbb2061d88927"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "d4677304ac6576e449b87e98aeb2b6aa"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "54d535270cc667660c642bd2acff3a86"
  },
  {
    "url": "others/javascript.html",
    "revision": "79927d8a1a7d993c0d11ba51356f0889"
  },
  {
    "url": "others/json.html",
    "revision": "f43644cdf22584980a91fe6c1daa82ab"
  },
  {
    "url": "others/latex.html",
    "revision": "a3d498685999068394ff5472dd7cad7f"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "3ef70e942d63c9e65d12f1a413ed46da"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "150b030a8e7a50d31103530d5a849ab4"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "9cad6b173e6de55ad7b331d6c14de819"
  },
  {
    "url": "others/markdown.html",
    "revision": "204b2aa25fbc17216926a51184e0e928"
  },
  {
    "url": "others/matlab.html",
    "revision": "5524e7c7a5c4be351d7016ce12bcd0e7"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "7fb8df171fa0e66c3be678d6fd0aec81"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "806dba7d57d132b256d91b26b9236807"
  },
  {
    "url": "others/network-security.html",
    "revision": "9648153b1f418f4e6a3bf838e9dd0df8"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "3ceee5d7a6837f5a660a2c79b3bed2cf"
  },
  {
    "url": "others/oral_english.html",
    "revision": "938bfd0aa32e2e6ed7dcbf741725e2f1"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "84c1a5c700286120b8cc00c98a7e7462"
  },
  {
    "url": "others/poe.html",
    "revision": "34ff414cca12c2a98d3714e26cde03fd"
  },
  {
    "url": "others/pyside2.html",
    "revision": "3a254b7235575b0f5cc7c12377d5b167"
  },
  {
    "url": "others/python-socket.html",
    "revision": "ae9cfa79d933875dc1b1830723250e78"
  },
  {
    "url": "others/python.html",
    "revision": "ce7b8bb7f31b05a03dc330e29736ef51"
  },
  {
    "url": "others/q-learning.html",
    "revision": "36e8505d76a505d4a8e75a82974df341"
  },
  {
    "url": "others/qr-code.html",
    "revision": "dc40147064640438fda46c993c92d166"
  },
  {
    "url": "others/qt4.html",
    "revision": "57364665c44e4253e0770bf3701f8e35"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "6d0957edf0ad692cf4aba258fbe63007"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "beb17d1f7def5fa1e22487064cc53943"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "7908a42d6fc02d1b4c2a4be4974b8843"
  },
  {
    "url": "others/sd-card.html",
    "revision": "1b77fc1d617e2ecc6a7d8c583ac76c44"
  },
  {
    "url": "others/sdn.html",
    "revision": "098fc46e86c1d46c56faa2e757c71a7d"
  },
  {
    "url": "others/star-uml.html",
    "revision": "b3d08427bafd22a1375f7f289636ff93"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "21f5adcc97db3156da3dc58f42c09123"
  },
  {
    "url": "others/verilog.html",
    "revision": "d9cc3f55411778c11968e330459a9fe7"
  },
  {
    "url": "others/vue.html",
    "revision": "124f6706b14c49de6ea542bf6c750ad3"
  },
  {
    "url": "others/w5500.html",
    "revision": "cc6628a833ab8f46a9d6bd32862a6ef4"
  },
  {
    "url": "others/w7500.html",
    "revision": "6095ab606f67c669f51405226cb3fa03"
  },
  {
    "url": "resume.html",
    "revision": "adc7518d2802b62326c3c93036b9ebf1"
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
