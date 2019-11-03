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
    "revision": "142514ecf8e5570b42960fb994b6caa1"
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
    "url": "assets/js/11.92ecb660.js",
    "revision": "345465e13fa05163b15338b1c43d8c59"
  },
  {
    "url": "assets/js/12.0bf0d223.js",
    "revision": "1e0a8b47e1a8ef5e589477051dc8d32f"
  },
  {
    "url": "assets/js/13.ab23926f.js",
    "revision": "a3f548798c4de394fa59e81a8786d5bb"
  },
  {
    "url": "assets/js/14.6ae49464.js",
    "revision": "fdf8bfb42e3435ba2bfff5657c0005da"
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
    "url": "assets/js/17.79171abd.js",
    "revision": "fb8993b1461a2a5b46b857ec2446b5f7"
  },
  {
    "url": "assets/js/18.d714c176.js",
    "revision": "5ed13ef130f91e429bc54853e85e6996"
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
    "url": "assets/js/53.413ce1df.js",
    "revision": "2091e15979a13d2e5346eee845290d42"
  },
  {
    "url": "assets/js/54.52a7c86c.js",
    "revision": "8f86158bc82a81145872d2becd86ba95"
  },
  {
    "url": "assets/js/55.4b90909c.js",
    "revision": "416ec3c223e583501cc8abd56d3ee48d"
  },
  {
    "url": "assets/js/56.ed620c58.js",
    "revision": "2cd6c028f1dac35f251bf794e7b92cc0"
  },
  {
    "url": "assets/js/57.6fd1262d.js",
    "revision": "6a41a89b740338c14f6b4287f73510cd"
  },
  {
    "url": "assets/js/58.3ad1d41c.js",
    "revision": "46bc7487d3abb3d61802a921e7c379cf"
  },
  {
    "url": "assets/js/59.552c4868.js",
    "revision": "176926c049f2d044c9a3a5379b4eb770"
  },
  {
    "url": "assets/js/6.b048d564.js",
    "revision": "fb1a0be6d13cfad8c826d2d6d3f456b2"
  },
  {
    "url": "assets/js/60.c25b9b1e.js",
    "revision": "cb7b40c43f6c84584180238497872a14"
  },
  {
    "url": "assets/js/61.a126d01e.js",
    "revision": "d29fb729a7ec68a2166d2a89a9f367f8"
  },
  {
    "url": "assets/js/62.2d421ea4.js",
    "revision": "221e1dd37049b7147c0b93e4772e45e7"
  },
  {
    "url": "assets/js/63.7910a09f.js",
    "revision": "8c7199438490419cab3b8023801691c2"
  },
  {
    "url": "assets/js/64.e84d777d.js",
    "revision": "a19a4f27c7271511d8d633c4b68ad5c9"
  },
  {
    "url": "assets/js/65.65386581.js",
    "revision": "3949f3c9f756cf79bcf4370ff791803c"
  },
  {
    "url": "assets/js/66.a7fa49ad.js",
    "revision": "f4e176203a80cf0f737fca74f8593394"
  },
  {
    "url": "assets/js/67.e6f81868.js",
    "revision": "033ef18a2c785381d36e7c324ed6f8b5"
  },
  {
    "url": "assets/js/68.0954c5d6.js",
    "revision": "5620e0e27629f9e0a807a952a2adf2f9"
  },
  {
    "url": "assets/js/69.6e4fd709.js",
    "revision": "17af05e0d85e911787fe4aa509c1a5ed"
  },
  {
    "url": "assets/js/7.ced47b9c.js",
    "revision": "c30fb205ecd5b77fecc3ffbd9918ccb3"
  },
  {
    "url": "assets/js/70.97ef2a6f.js",
    "revision": "0b9e00f2352d7c19567082e694d8d246"
  },
  {
    "url": "assets/js/71.f922df72.js",
    "revision": "66c6b8fbb9439bd123bc8e8cdb9da400"
  },
  {
    "url": "assets/js/72.e0fbd581.js",
    "revision": "ac3e5454e5880c0ccc71382c253d940f"
  },
  {
    "url": "assets/js/73.79984c52.js",
    "revision": "76dcf922f84086b3fb39a7f80d225ede"
  },
  {
    "url": "assets/js/74.12c6b317.js",
    "revision": "2a645e81255b259c9d2b1890a0518dac"
  },
  {
    "url": "assets/js/75.a9d76e80.js",
    "revision": "5338190253f1e0886091868e3c3bfdab"
  },
  {
    "url": "assets/js/76.81322ba9.js",
    "revision": "c5215ba3e383f019fd0e0c01dd6e874b"
  },
  {
    "url": "assets/js/77.a793f44a.js",
    "revision": "4f121c11ae044d995cb69bbad0aa66a5"
  },
  {
    "url": "assets/js/78.268f8a59.js",
    "revision": "532329eda741c4575a7ee3a6c5884184"
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
    "url": "assets/js/app.5754a36c.js",
    "revision": "6a8e070736f7ee97a436aacfe0151427"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "65e26b2adcce956d7db001286c5236ec"
  },
  {
    "url": "cs/bash.html",
    "revision": "08dff9bd107183b8db10a3eadab7896d"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "85eb7b6422672cd16d1a8965770b767b"
  },
  {
    "url": "cs/cmake.html",
    "revision": "8c42fd7a2b6f17d93639a7a1d816dc79"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "3a9e07ad8c978e63ed148b51838a8f99"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "e54cdd16ee375db812368e3732a5950f"
  },
  {
    "url": "cs/git.html",
    "revision": "2d01455c3fdd324d9b7a4d3b907e6199"
  },
  {
    "url": "cs/index.html",
    "revision": "c9ef425a8df86cc31e177b6df112b6a0"
  },
  {
    "url": "cs/keras.html",
    "revision": "1fdd2e29cecc73c12e467cf8fd01a5ce"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "e3d5374c2335712a56d162042ebafd8d"
  },
  {
    "url": "cs/lwip.html",
    "revision": "4ff7be3a5387e36f20f5772cd6fa4c67"
  },
  {
    "url": "cs/scala.html",
    "revision": "2a19b96d4130916474d4eec0c5fb4a7a"
  },
  {
    "url": "ee/about.html",
    "revision": "6c791a68f3b51518a6e5bc1d88538efe"
  },
  {
    "url": "ee/chisel.html",
    "revision": "33cce478a808ab8382cad4321e0863e9"
  },
  {
    "url": "ee/esp32.html",
    "revision": "5ea660b49bc391c6dccd5b3a7e2ac230"
  },
  {
    "url": "ee/index.html",
    "revision": "95dd7b640d11c26243ef60a249c26925"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "4730a2174f3a03b63cf3fcb35d4357ef"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "5fa7dceb0c09a021d08c71426f9471f3"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "b9becf6b1c88f142df1b9242a9b56b8c"
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
    "revision": "78dd070bb0da7b916a6148f0d2c4feaa"
  },
  {
    "url": "others/about.html",
    "revision": "5dbafe157fefd360cd6850b6f26df6b8"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "011bee8ad31d7de047a646a06b79a07c"
  },
  {
    "url": "others/android-studio.html",
    "revision": "391f3e738ebdf5840e966bb46ef989ce"
  },
  {
    "url": "others/android.html",
    "revision": "af3946be79195bad1a803fd5fe53b6bd"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "2d0da84eb03601e2184d5647b7017fc1"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "9d13f438ce07836473c44951309660d9"
  },
  {
    "url": "others/css.html",
    "revision": "f948f845578b58f81b718f1ecb988cf1"
  },
  {
    "url": "others/docker.html",
    "revision": "e315a1d444e69ea2c81b02669b1662c5"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "31bcf62406d35ad2695d683d3aced012"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "57b8bd27649c77c9a4ae7856f494b927"
  },
  {
    "url": "others/english-writting.html",
    "revision": "9de51f1114fbe31acdcd8f2af1cca449"
  },
  {
    "url": "others/freertos.html",
    "revision": "6e9cebeaac4a97bd010068a62e3cd104"
  },
  {
    "url": "others/gns3.html",
    "revision": "5fdf3aa5ff7f717aa8b906aafc9cfd76"
  },
  {
    "url": "others/gps.html",
    "revision": "3e54726758a33c53fdc8b601d5177a9b"
  },
  {
    "url": "others/html5.html",
    "revision": "5be6457ea9102f1018f85795b188fac2"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "94db44897976cb47a55b4871cca58b0c"
  },
  {
    "url": "others/index.html",
    "revision": "503cb3880eeab4a8722841161740c94b"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "d27b0a547366d2ec4386854a8916e4d9"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "bd287851c9796e5669c5540d824120fa"
  },
  {
    "url": "others/javascript.html",
    "revision": "06f95c3b663536e7e68f6317b291c9e1"
  },
  {
    "url": "others/json.html",
    "revision": "a46fe2b24958da73f58fca7b50aadc8f"
  },
  {
    "url": "others/latex.html",
    "revision": "4bb5650b0461387622a4a433b4fe1c73"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "0bd942ad7c56ad6c5ed79cf0cd8fc19b"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "7523148b4d4110ca86bcde9d00065d55"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "8375cb971b9c6a67f2b3f90101c01a1e"
  },
  {
    "url": "others/markdown.html",
    "revision": "1a42a11ef5255e8c19fcf8e87beb6d38"
  },
  {
    "url": "others/matlab.html",
    "revision": "24b6995bfcd11b2fb2bffb3fbc1bc756"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "1bab3fe48113235fe1cf6c6176b9798d"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "8fd82579bd489f325562e1a208f58dc4"
  },
  {
    "url": "others/network-security.html",
    "revision": "9dfeaf73796ed145a1a89d2e41cd7ef8"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "27a10a97ed9a98bfcab338eba29e7d40"
  },
  {
    "url": "others/oral_english.html",
    "revision": "9fdab998974588de94b5ac771b40d662"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "8afb5b3ca23ad92d9b9f8585d0999b58"
  },
  {
    "url": "others/poe.html",
    "revision": "c6ad47eb1a1b05a21f47be56339a12f9"
  },
  {
    "url": "others/pyside2.html",
    "revision": "4e8ed24e5014324f959d3c81c98fac3f"
  },
  {
    "url": "others/python-socket.html",
    "revision": "d7e7463c4ff2cfc2b43bee81c5525d76"
  },
  {
    "url": "others/python.html",
    "revision": "277e7a16965ae027dd61448b77e7a034"
  },
  {
    "url": "others/q-learning.html",
    "revision": "f7068a1670bc492f5ad4e4c8493ac53b"
  },
  {
    "url": "others/qr-code.html",
    "revision": "60f1e96002150e8e6f2fbf48d54fc5d1"
  },
  {
    "url": "others/qt4.html",
    "revision": "933617f8d624d82fb8b93d3130d61520"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "e6a161279dd3b7d1a5a0aa4cfd0378e4"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "767bea08fe44ee25fb58b11e48cd9ce6"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "40dcd7a72ef906ec968ee4ad0be83b03"
  },
  {
    "url": "others/sd-card.html",
    "revision": "862944ba22b4cf832a4409e298f6f57e"
  },
  {
    "url": "others/sdn.html",
    "revision": "124f9c569b73134457ffdc0b2512a92d"
  },
  {
    "url": "others/star-uml.html",
    "revision": "51a44d500ca67a3a71b0e2195146de53"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "996b10ead48fbff93045aef1094ea7d7"
  },
  {
    "url": "others/verilog.html",
    "revision": "e3427c7a582874eb5d68c9b2a5c9aeda"
  },
  {
    "url": "others/vue.html",
    "revision": "0d313c79cf6416c3c11c8c141d5a17d4"
  },
  {
    "url": "others/w5500.html",
    "revision": "594a9f81401c50f657580e8d7abdbbfb"
  },
  {
    "url": "others/w7500.html",
    "revision": "2ed2f8eb408fd287092fe1023ee3be55"
  },
  {
    "url": "resume.html",
    "revision": "29ef260f56e45d4755916f2221a2e921"
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
