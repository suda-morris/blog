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
    "revision": "d7eb501ee978acad356177b3a13e3e1b"
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
    "url": "assets/js/20.41e7777d.js",
    "revision": "118f059634404d84e3d7b6fe5a1fe284"
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
    "url": "assets/js/24.c11fc9d2.js",
    "revision": "d450476677ae4d2a086f0ebfa752d382"
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
    "url": "assets/js/5.8aaf642d.js",
    "revision": "33b4bd6e711de0e6bf7f65fbe7250396"
  },
  {
    "url": "assets/js/50.0faf7517.js",
    "revision": "7c1eb0911ed48372c88fc86002b540a8"
  },
  {
    "url": "assets/js/51.c096f515.js",
    "revision": "076cdf33ec1870093fb1c2dacbed52d8"
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
    "url": "assets/js/66.e3f1203a.js",
    "revision": "466fedb629439f81cafe1086ab038518"
  },
  {
    "url": "assets/js/67.0ee82a78.js",
    "revision": "ce87dfce8a84936ed4a5ff8a56d6be43"
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
    "url": "assets/js/8.1d36977c.js",
    "revision": "f5dccf2cc9de5e93283c6963b5f39806"
  },
  {
    "url": "assets/js/9.1aff4324.js",
    "revision": "fc7d24ff10edb7229a7b4ffda798618f"
  },
  {
    "url": "assets/js/app.7be1b365.js",
    "revision": "b86c0c22b0f9e461a05f605dcee86cdf"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "677d78b495e29fdcee676fa41e598831"
  },
  {
    "url": "cs/bash.html",
    "revision": "1fe5e6ef96d1ed0811bb1e77e049caef"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "c8354c002f221934ad6d839f2d0ed7bc"
  },
  {
    "url": "cs/cmake.html",
    "revision": "1c7c9162c2fbe159f6bbdb6bbdcf07e6"
  },
  {
    "url": "cs/compilation.html",
    "revision": "0f941c1beb446bc0a731ad9eee20f1c9"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "8f5b146f817546f1fd9cb8a7b1b76ea5"
  },
  {
    "url": "cs/git.html",
    "revision": "9842b2663f3d25ff3b3676c68eab8613"
  },
  {
    "url": "cs/index.html",
    "revision": "d1a15d0c9d669e2438a2eb27170b2b47"
  },
  {
    "url": "cs/keras.html",
    "revision": "35ea8b865f4a3489d58ab67ed54895a2"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "ea8c1ebc91da620843d4942532b8c9bb"
  },
  {
    "url": "cs/lwip.html",
    "revision": "a6d55d2b7a5425f3be629a032c7ea385"
  },
  {
    "url": "cs/scala.html",
    "revision": "6ce4150b5d58667a6f97a4d30013b5b7"
  },
  {
    "url": "ee/about.html",
    "revision": "c032acf9f3a492d4a4a2c392459fd65c"
  },
  {
    "url": "ee/chisel.html",
    "revision": "bcee22940c6f33b3da75aa6528f74ea2"
  },
  {
    "url": "ee/esp32.html",
    "revision": "cc2c2442425322638c6f3b44d5487a3c"
  },
  {
    "url": "ee/index.html",
    "revision": "f2b7de43b1aaa04ed92703eca3cd45c0"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "6ad79fc22d8c19279f054dd17a42ce55"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "fef594008240dd5fd1c83f38e2f3fad2"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "93317f69d706ffd733cb515cececd49a"
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
    "revision": "768fa11b4bb3653969031e0b80f29022"
  },
  {
    "url": "others/about.html",
    "revision": "89d28b95c8543a721aa6f789c48e5225"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "5bd850e0d549492d6f773e479a42c4cb"
  },
  {
    "url": "others/android-studio.html",
    "revision": "dbe19acfeab04770df3b9bfbd603aba8"
  },
  {
    "url": "others/android.html",
    "revision": "7a96e31eb35cecbec4b0aea414fcfbed"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "4894d082da0acdfbbc027f032d31b810"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "f81b1da6e9f4b6583303eb315563d863"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "92565acf132b9e68287ae3a012ec0d83"
  },
  {
    "url": "others/css.html",
    "revision": "2e60d38bb49aed0e6181a0bd9f5bf159"
  },
  {
    "url": "others/docker.html",
    "revision": "f0882d1330d61c6a525d46bc93a47d57"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "ea2cc07216e1dafd49ac423f072066af"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "31e058f11779735e5662d19c5c9299ff"
  },
  {
    "url": "others/english-writting.html",
    "revision": "85739a103bd5c4711ee58cf78c983613"
  },
  {
    "url": "others/freertos.html",
    "revision": "03e56e11c6f2db40e15765f5e4e2afc0"
  },
  {
    "url": "others/gns3.html",
    "revision": "2f7bac48163231cb7b1e30193bab9b56"
  },
  {
    "url": "others/gps.html",
    "revision": "a8fa1e412f2751d4440c12ce6f98c552"
  },
  {
    "url": "others/html5.html",
    "revision": "5c62577d9e50e7d950f9bc831d98ae45"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "0dd4f3af0875b83cc6c0be88d8d7eabb"
  },
  {
    "url": "others/index.html",
    "revision": "4f35b2d9c896d4e43e9af7d08292df7c"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "462e37c4b5b49cc3b00fc6d2ca1515a9"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "44498cda2c658829548ea48938004b1c"
  },
  {
    "url": "others/javascript.html",
    "revision": "6e271d62b41dc22baf3f76bd493a7a14"
  },
  {
    "url": "others/json.html",
    "revision": "3c14e739646ac0957792235ab6b0d36a"
  },
  {
    "url": "others/latex.html",
    "revision": "8b232d639544a52b90e38233eef0fe67"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "8aac0f0148397a1161264eea8e623bde"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "6ad309f506ab7b13d89f262251884e95"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "a2182e3e383c185549e3609c422d0e8e"
  },
  {
    "url": "others/markdown.html",
    "revision": "50da5b8a28a7fde8b918988018402780"
  },
  {
    "url": "others/matlab.html",
    "revision": "06360612947e11471c413be03e164ab9"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "a161d98383993a7444fb48e3935731e2"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "38e9ab1301b62f9b264f5ef0acd04ae2"
  },
  {
    "url": "others/network-security.html",
    "revision": "ccceebd608cd1edeb1b6d845723b199e"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "c294147104757ebd6dc28d2e400c65c8"
  },
  {
    "url": "others/oral_english.html",
    "revision": "eb6ce8c9896ce810ca9eb9c921645340"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "dd2e87267490319b68e327a98cd56c7c"
  },
  {
    "url": "others/poe.html",
    "revision": "b81e2b90e6e0b7a5872386f8ff833a59"
  },
  {
    "url": "others/pyside2.html",
    "revision": "5e6f27990c2ccd1817513e682549db3d"
  },
  {
    "url": "others/python-socket.html",
    "revision": "7248562621028c2ffd5e8b2cda963827"
  },
  {
    "url": "others/python.html",
    "revision": "4878ea43c2fe19b40ba4ac1e7a71e1c1"
  },
  {
    "url": "others/q-learning.html",
    "revision": "e6f615d837f03829296941ecb0739b6b"
  },
  {
    "url": "others/qr-code.html",
    "revision": "481000a3f563866e39fb74aae0db7cee"
  },
  {
    "url": "others/qt4.html",
    "revision": "bb63ab2b61b96685328019b9738a2339"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "01d045f3f3361b59fbd5bf13effec58c"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "e363dafae364827dd0db0d051c5e8701"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "8ef5453b685c55f832ac4db1635c8e23"
  },
  {
    "url": "others/sd-card.html",
    "revision": "0d0e6de98b66114445a249c3dcc55426"
  },
  {
    "url": "others/sdn.html",
    "revision": "550bccd14472e7de09526469f8924509"
  },
  {
    "url": "others/star-uml.html",
    "revision": "341be12dd72eb1b63d0e4e5dbe31a252"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "cf03759a905e12f1dbb0e694d92759c5"
  },
  {
    "url": "others/verilog.html",
    "revision": "4f7d7bdb731505735628cd8942ac9ca5"
  },
  {
    "url": "others/vue.html",
    "revision": "7292fc4b36288888544195d7e6d1998b"
  },
  {
    "url": "others/w5500.html",
    "revision": "428bdbbaa1dae2d9b7c873ee2b77df9f"
  },
  {
    "url": "others/w7500.html",
    "revision": "0a08031d5890fae20593e97547567326"
  },
  {
    "url": "resume.html",
    "revision": "36d3a54fd873f5a91249d534a9af3283"
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
