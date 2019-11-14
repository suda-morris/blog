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
    "revision": "b71608cd60240d809c79c82a035cf8ba"
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
    "url": "assets/js/11.c9b98f8b.js",
    "revision": "24664156c67a6b4cf237d3f2a1750539"
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
    "url": "assets/js/19.c8d81bec.js",
    "revision": "4d10d275030b67701070f9af9d6435ed"
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
    "url": "assets/js/32.09e58b5a.js",
    "revision": "55e7e3d9c886eb8c8620526518bae20d"
  },
  {
    "url": "assets/js/33.c5643bea.js",
    "revision": "c0881be8dfc30f7e477466fae812f853"
  },
  {
    "url": "assets/js/34.135c77e9.js",
    "revision": "71a1bd80591af0b1cd77de9833d13a2e"
  },
  {
    "url": "assets/js/35.59ca256c.js",
    "revision": "6100cb1e31463aa84760d7dc934ed297"
  },
  {
    "url": "assets/js/36.0b5c4675.js",
    "revision": "e842a430d6e6f6bc7b948c6099179821"
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
    "url": "assets/js/53.78ccec47.js",
    "revision": "8c37229221a1beafabddf9e42f370af7"
  },
  {
    "url": "assets/js/54.c3bf91d0.js",
    "revision": "53d4b6fae71d61048b29367e0ba9c50d"
  },
  {
    "url": "assets/js/55.007d61ca.js",
    "revision": "40a05905b4280e28307c48382c603818"
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
    "url": "assets/js/58.71fbcddd.js",
    "revision": "e5b05bdd7007a7119644b0fc474ea102"
  },
  {
    "url": "assets/js/59.f270f170.js",
    "revision": "1c6e758d3378d04a426a984733c27481"
  },
  {
    "url": "assets/js/6.b048d564.js",
    "revision": "fb1a0be6d13cfad8c826d2d6d3f456b2"
  },
  {
    "url": "assets/js/60.c6e245ab.js",
    "revision": "edb23649c228865b0c22d5303d2d7c18"
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
    "url": "assets/js/app.91ce4f91.js",
    "revision": "6234176e3a60774d520a38421e397d0c"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "6d748bee08379a99b0a49e067068fce3"
  },
  {
    "url": "cs/bash.html",
    "revision": "86ed8fefc134527b168633c05488a24e"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "c8df39b800654cf1094bf36683368c0d"
  },
  {
    "url": "cs/cmake.html",
    "revision": "46dd89c64bc67f1c18f513ec72a74b63"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "b818041fafc4ad8bb42ef47b9d004a63"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "5936e6752a0d01973ce02d32a7efa8a8"
  },
  {
    "url": "cs/git.html",
    "revision": "a667c0d7cb0d4838f93216c9455a245f"
  },
  {
    "url": "cs/index.html",
    "revision": "fe2eebb0cb81b15ecc7abbb6141bb12d"
  },
  {
    "url": "cs/keras.html",
    "revision": "9907f8e0db9a17e21715f9c15e50a60d"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a5efa08a2cdc3a836dee5ce48b7151d2"
  },
  {
    "url": "cs/lwip.html",
    "revision": "68f6056693677c657aa68cc80410ff72"
  },
  {
    "url": "cs/scala.html",
    "revision": "0cfea93d7997e9329eea2be021af0bc1"
  },
  {
    "url": "ee/about.html",
    "revision": "2b87f24424133eaacca974f64700be71"
  },
  {
    "url": "ee/chisel.html",
    "revision": "dea5ac1eaf04d89afb0168a279913aba"
  },
  {
    "url": "ee/esp32.html",
    "revision": "0f4bab8d63f2765833711350c5e5c036"
  },
  {
    "url": "ee/index.html",
    "revision": "7105059a47c1f46793f5c7b64eb2bc80"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "ee90110fce6206fa703b33196ce6978e"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "88f3db8c90ca05184704bcef06ff94ff"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "c7d502583dc39393d7bb2352240830c8"
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
    "revision": "dc4bd45b19b6f0d6df1b2e94522b806d"
  },
  {
    "url": "others/about.html",
    "revision": "738a160f678979ebd0086a636a6ef420"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "273a0a32ab4fdbe99a35eeca17f6e1e5"
  },
  {
    "url": "others/android-studio.html",
    "revision": "0dd9c01e044d3e57c518985e37785795"
  },
  {
    "url": "others/android.html",
    "revision": "e305b083bcd001583a5d48a0ffc96f9f"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "8b4517449eb8f91c349da82dda2d45cc"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "78265c5fec0f0a191f63c04fb1ad363d"
  },
  {
    "url": "others/css.html",
    "revision": "e2668173ba4f5f7f713420241e54a3dd"
  },
  {
    "url": "others/docker.html",
    "revision": "2ea7bf99b4a44958e8ef60c97945a3a4"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "a652b36fd243cee11436201520ad8715"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "c6b3d67753b49cd87b3581e82663095f"
  },
  {
    "url": "others/english-writting.html",
    "revision": "1625f1cec3985831b98f4215aca15d89"
  },
  {
    "url": "others/freertos.html",
    "revision": "9297d0f0efb4b4c2ff886269dd4302b1"
  },
  {
    "url": "others/gns3.html",
    "revision": "a62233f1cbf98d476b71b905b9cd8ccf"
  },
  {
    "url": "others/gps.html",
    "revision": "3f4d3a01e235a7101949995c59fc8c67"
  },
  {
    "url": "others/html5.html",
    "revision": "1fa150ba939e4ce67e0964ecd619c699"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "c33e89bdf641f2605698f755056bc081"
  },
  {
    "url": "others/index.html",
    "revision": "3ba14fc6dfcc6e37842c4c7a0aadbca7"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "2d6d8a1120f5d650ef2ad2e93c4233b6"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "12f5a7fb7d5598e84f597a10b7707a11"
  },
  {
    "url": "others/javascript.html",
    "revision": "665b401babfae1a6d1dbcd25b972d9dd"
  },
  {
    "url": "others/json.html",
    "revision": "ce65299e876686b9bce0a933bab512c7"
  },
  {
    "url": "others/latex.html",
    "revision": "a7612fe3c82605f42aa51e2be1ab3b64"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "b55780db8a9182981cb9b75eb2664074"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "da76d82525d730cebcfdd3d0789f1781"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "aaa537a856d6f7ac839d203a0e9ec78e"
  },
  {
    "url": "others/markdown.html",
    "revision": "fe7d6d20ec5fb9e5ce11b29105e5e3cf"
  },
  {
    "url": "others/matlab.html",
    "revision": "af98ae41c2784ac4547bb43c3aeb080e"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "06342fe89b6ca71629864dfff93cec7f"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "4d6e4d640e4925b807a1754764c63d09"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "052f02793b3e8b30d4ad55aeae4538c4"
  },
  {
    "url": "others/network-security.html",
    "revision": "b5f21d895886010508a802f2174f9f15"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "32e09157b4e72f236c9f2cba8eaf94dc"
  },
  {
    "url": "others/oral_english.html",
    "revision": "374891e5562bf313bdf5be5dee9b646c"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "52976738ff2476a35332c65f43a172c3"
  },
  {
    "url": "others/poe.html",
    "revision": "ac202687532743664548e83cad95f2f8"
  },
  {
    "url": "others/pyside2.html",
    "revision": "ea01f89c77f216431821cc180d011c33"
  },
  {
    "url": "others/python-socket.html",
    "revision": "89eca5683c268a19ce7ce9724e58bd72"
  },
  {
    "url": "others/python.html",
    "revision": "13e491ee8ceba45c2ee7fd60b88085b5"
  },
  {
    "url": "others/q-learning.html",
    "revision": "3f4e0b6ecfcf07208a0ecb29a1ff8509"
  },
  {
    "url": "others/qr-code.html",
    "revision": "debf445e5cfd722b54ff3db2db734dab"
  },
  {
    "url": "others/qt4.html",
    "revision": "7cfe9e6eba9928cc2b212d2a0340eae2"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "9587b3a1aaf9dda29a0e56a6b201884d"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "273bb50b0bd8e2ff2f810868ecc10739"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "b4e56aa2c23a047701b419ca5cc8dc05"
  },
  {
    "url": "others/sd-card.html",
    "revision": "4db05507108d73cd226aa82793cbe5cb"
  },
  {
    "url": "others/sdn.html",
    "revision": "47048d3087482799680d065639020e1c"
  },
  {
    "url": "others/star-uml.html",
    "revision": "b639ad4cc440ee52353b8726e4bdbd33"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "ed9dd31c35e110940d1cbb1456161a1c"
  },
  {
    "url": "others/verilog.html",
    "revision": "160ca872903419182458167a82f14fa6"
  },
  {
    "url": "others/vue.html",
    "revision": "c5760d1f9ccb8c82dc439cb46f4265dc"
  },
  {
    "url": "others/w5500.html",
    "revision": "b5cb22601d9e60762684046b5b243134"
  },
  {
    "url": "others/w7500.html",
    "revision": "fb269d3cf995dc4fd0cea0701c851d05"
  },
  {
    "url": "resume.html",
    "revision": "bc263d59c9be984848f8481a1c9f8f6c"
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
