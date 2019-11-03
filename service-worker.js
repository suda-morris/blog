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
    "revision": "2aa2eeb147b852e51b6296511d551a7b"
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
    "url": "assets/js/19.828f0309.js",
    "revision": "1ed19704d282731277380c89540b522c"
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
    "url": "assets/js/53.4b2b1dfa.js",
    "revision": "04fab7628fa8ba0e73f8e5553034ad14"
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
    "url": "assets/js/56.9cb84304.js",
    "revision": "b125b9d3b48b831b2df31a5c865f356a"
  },
  {
    "url": "assets/js/57.6fd1262d.js",
    "revision": "6a41a89b740338c14f6b4287f73510cd"
  },
  {
    "url": "assets/js/58.0575e8e5.js",
    "revision": "3d4dc30d0a6e8405e7c0751d6cbd58fc"
  },
  {
    "url": "assets/js/59.7acb44b4.js",
    "revision": "4db37b1e283fe39ebb86c1ca15fb122d"
  },
  {
    "url": "assets/js/6.b048d564.js",
    "revision": "fb1a0be6d13cfad8c826d2d6d3f456b2"
  },
  {
    "url": "assets/js/60.7558ca7e.js",
    "revision": "1cd721b6ab94dcd7162e4c310ae6501c"
  },
  {
    "url": "assets/js/61.5bc53eba.js",
    "revision": "361f9792b7c35e0405fb0e602437ef97"
  },
  {
    "url": "assets/js/62.78ab061a.js",
    "revision": "719e21276d80828530aec728eb357f6f"
  },
  {
    "url": "assets/js/63.5d858dad.js",
    "revision": "aa05154b98b88dbd33c9e8ff2ecefc94"
  },
  {
    "url": "assets/js/64.973032f7.js",
    "revision": "1b09fa5a79c7731d953cebec55d7baa0"
  },
  {
    "url": "assets/js/65.2d413ddc.js",
    "revision": "22e078582924bfdb538bcbeea06aaf2c"
  },
  {
    "url": "assets/js/66.b0855a0e.js",
    "revision": "1942d229ebfebf6af88aa62ea1dfe90a"
  },
  {
    "url": "assets/js/67.9c6f070a.js",
    "revision": "dfebe1e2ba1094da089de44db4784802"
  },
  {
    "url": "assets/js/68.02dfc682.js",
    "revision": "292b5555a39d1b8fc9a1f3f02302009e"
  },
  {
    "url": "assets/js/69.1fcdb7cc.js",
    "revision": "3adef23272b1d2f8bf34ef4a8ce461db"
  },
  {
    "url": "assets/js/7.ced47b9c.js",
    "revision": "c30fb205ecd5b77fecc3ffbd9918ccb3"
  },
  {
    "url": "assets/js/70.392c238e.js",
    "revision": "0e1e7197ab597d3887ddcf178e9e8b00"
  },
  {
    "url": "assets/js/71.d0df6a09.js",
    "revision": "113adae941bf4d4b7c73cda8328509fc"
  },
  {
    "url": "assets/js/72.fb225319.js",
    "revision": "bbdcff1cc0f200696be87b6f48aa5df9"
  },
  {
    "url": "assets/js/73.f58c0b66.js",
    "revision": "be2a29eec54e31ce4059387dacc86740"
  },
  {
    "url": "assets/js/74.5abe8cc1.js",
    "revision": "922f11a5b0459bde0059e725fead7532"
  },
  {
    "url": "assets/js/75.8fd3a9bb.js",
    "revision": "71bd76fe20cda794baa1a3aff168312c"
  },
  {
    "url": "assets/js/76.300fc0c5.js",
    "revision": "0efe60f6d416ccc637a159bcadba6082"
  },
  {
    "url": "assets/js/77.cfc74f6a.js",
    "revision": "4903fa45c6a761cf09d28c0133a868a8"
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
    "url": "assets/js/app.d957bafa.js",
    "revision": "f2342a265958fb355f6b149447ebf6d2"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "29974209e32751653d455797b9382b74"
  },
  {
    "url": "cs/bash.html",
    "revision": "7f36af862118e98f0af0fb7cf0d0036d"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "b2065651e194b2a40316dab7e0e3171f"
  },
  {
    "url": "cs/cmake.html",
    "revision": "d043e4578c257d2190b05577f35a3a90"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "4144dabf8356fe26d06999fd31cd4226"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "99ec593803246b599d560de9ced7afdc"
  },
  {
    "url": "cs/git.html",
    "revision": "e97f6cdd68f76c2fcff71a922bb43f6d"
  },
  {
    "url": "cs/index.html",
    "revision": "c01e781772819b187dc388d82513d7b8"
  },
  {
    "url": "cs/keras.html",
    "revision": "3ac23e48dbbdca6a91ccd703a7f4df8c"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "8f4fec54e9839244d8278c2b09847062"
  },
  {
    "url": "cs/lwip.html",
    "revision": "1333c0110379a50309c78827c50d8cba"
  },
  {
    "url": "cs/scala.html",
    "revision": "6585b366b6c3f5c83dd363958dc257d6"
  },
  {
    "url": "ee/about.html",
    "revision": "fcbe7ffe3b5633f45976b3c3b82403ba"
  },
  {
    "url": "ee/chisel.html",
    "revision": "6fdae211359fd89175ac6132cf2403f8"
  },
  {
    "url": "ee/esp32.html",
    "revision": "6fb0e283f03b6f508ae6c2c0cba845aa"
  },
  {
    "url": "ee/index.html",
    "revision": "52b1d788c742ed2bb982ad738fded1de"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "3a48868fc5ec5fe51e705238398633ae"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "ffdf5c41feb40bfd20fc5fe225f0d7a1"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "9df771595d7ac66210db48192d5924f4"
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
    "revision": "2b350a92d8232e28497d1a1ffb5554a5"
  },
  {
    "url": "others/about.html",
    "revision": "7eb051e8d2ba5820b8da1a9adc924d19"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "3968ad46b5f4a5694d3d1152f17d37ff"
  },
  {
    "url": "others/android-studio.html",
    "revision": "af1b30f2fa66a525cbbf9326b7d68c71"
  },
  {
    "url": "others/android.html",
    "revision": "1c6049d32db0b8452c13384975dc3c4a"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "af15883a3c5d00a787540ac6700f85e1"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "535b24940076b4ca046a4482a4bb740f"
  },
  {
    "url": "others/css.html",
    "revision": "fe3dfc7b3fae52b9c333b323820c820c"
  },
  {
    "url": "others/docker.html",
    "revision": "5499d0e236c952d844c51ccefd02d026"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "e4e9e907f64934d2a332a57982e143a9"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "efb5db7f6f1f807d44e4de017386cddd"
  },
  {
    "url": "others/english-writting.html",
    "revision": "3831702d22042aec25102ee25b78ad6f"
  },
  {
    "url": "others/freertos.html",
    "revision": "71953c7625dfb0cbead1076301d9fdf6"
  },
  {
    "url": "others/gns3.html",
    "revision": "105c00ce005c20711a64449543c3f026"
  },
  {
    "url": "others/gps.html",
    "revision": "d01c7833ccefe5d2b88bf9f03ea52021"
  },
  {
    "url": "others/html5.html",
    "revision": "94d2764efeec478f0f82ce8637604063"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "551cf88e107c4db2614aa2d68408591f"
  },
  {
    "url": "others/index.html",
    "revision": "b5c585536677e45872ff86bc5107e142"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "659c4a857f93feb847f4d3b66de78608"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "daef6d7583126cb4a499d53fd13d2bb3"
  },
  {
    "url": "others/javascript.html",
    "revision": "c61cfcf03aec254c25626c677f8d3b34"
  },
  {
    "url": "others/json.html",
    "revision": "2b0519304ba0ea5f4abbe917b2feae02"
  },
  {
    "url": "others/latex.html",
    "revision": "8d4e1788cbe503d74c685a546654c153"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "13a3a3e98167290223625d8fcd576caf"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "e5eedfa0368d5b687a38e0eea37e1ec4"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "05f4081fe1575c68e1c9d480f1e8f768"
  },
  {
    "url": "others/markdown.html",
    "revision": "9321ce30d62ef425d64e556606a642f6"
  },
  {
    "url": "others/matlab.html",
    "revision": "a128310a447109d1246b63a13202d132"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "3fa3dd4e7050e7d4e236aab9ccfd7750"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "8dcbf395a727d210f347c2ac44957efa"
  },
  {
    "url": "others/network-security.html",
    "revision": "0cde3ae13f23a55c6c69abb9e88e1fae"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "bfe809d69c4f7f4eac3739dfafa0737e"
  },
  {
    "url": "others/oral_english.html",
    "revision": "1ad08dbd2e5ec9c758d6aaae322dfde4"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "08850cbc6fd5ff7988fbae03a1fd7b3b"
  },
  {
    "url": "others/poe.html",
    "revision": "9fcd11fd0c484689aa8958ccb4476a54"
  },
  {
    "url": "others/pyside2.html",
    "revision": "39ddd3b23707183e00522add71f545da"
  },
  {
    "url": "others/python-socket.html",
    "revision": "7875e0454ff3325fd45cce1a77cc2307"
  },
  {
    "url": "others/python.html",
    "revision": "d13a4ff71949b2f37fa4f7f4f9015fa9"
  },
  {
    "url": "others/q-learning.html",
    "revision": "c1fbea756e9adbc019cf1b0e296dba68"
  },
  {
    "url": "others/qr-code.html",
    "revision": "06426bb97ebb2704f46e8843d85f0cf6"
  },
  {
    "url": "others/qt4.html",
    "revision": "4c94cbb592448e190621d6ebb5433252"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "c8ad400819d7aafe4b115e6b0478a42d"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "08e5ee980fe3d990834e68e372eb21dc"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "789e2423845a057cd522581074f27912"
  },
  {
    "url": "others/sd-card.html",
    "revision": "9fcf84e67127f6f0055e56fe4dff4f74"
  },
  {
    "url": "others/sdn.html",
    "revision": "ab954422dac6a6c208076ad9a46b0473"
  },
  {
    "url": "others/star-uml.html",
    "revision": "e33f4e27d25126de1e81c962264922d5"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "67e80043ed7f42a67bfeaeaf615c6f95"
  },
  {
    "url": "others/verilog.html",
    "revision": "afa93b758157ae2d4ad0c159de6040df"
  },
  {
    "url": "others/vue.html",
    "revision": "26238a8fb0ddbb41b7afa07c7fa5a419"
  },
  {
    "url": "others/w5500.html",
    "revision": "27336eae56d9ab805d2999fad427f411"
  },
  {
    "url": "others/w7500.html",
    "revision": "c06c35e39e582f227274677e1c85516d"
  },
  {
    "url": "resume.html",
    "revision": "bb2c6a1060d03610fac25ebaca056f15"
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
