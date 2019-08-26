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
    "revision": "c422f6e741231352fe66d49d8f6b4bc1"
  },
  {
    "url": "assets/css/0.styles.59426545.css",
    "revision": "0cdcac5933a9f836387a8b2cba491aec"
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
    "url": "assets/js/10.c5057ac3.js",
    "revision": "eaa6b8156e3180780319a952cad8f97f"
  },
  {
    "url": "assets/js/11.f49537ea.js",
    "revision": "5e6215910bc5c0760f3fdc64f8db9e6e"
  },
  {
    "url": "assets/js/12.8ff986db.js",
    "revision": "ede72bbb166a8b7e74efa317d8d69f32"
  },
  {
    "url": "assets/js/13.49b810c0.js",
    "revision": "c9f225153cff206b882c2a3bb8d60318"
  },
  {
    "url": "assets/js/14.7a7dc217.js",
    "revision": "23e2cb92cf2301049393163708bcda85"
  },
  {
    "url": "assets/js/15.43737a7b.js",
    "revision": "b6677f64ab5b75853f74003f8c3a5f29"
  },
  {
    "url": "assets/js/16.9e9dfdda.js",
    "revision": "17ef8e3ffd3faf38f1f03a973d503136"
  },
  {
    "url": "assets/js/17.bc69b084.js",
    "revision": "585b70129339a9173ada3f3f5bb0b767"
  },
  {
    "url": "assets/js/18.3238a166.js",
    "revision": "0f607ad78f3a163882414c170cbfb9cd"
  },
  {
    "url": "assets/js/19.b2f3dc72.js",
    "revision": "8c032b0e5edf662d7f18d512c6017459"
  },
  {
    "url": "assets/js/2.a4cf58eb.js",
    "revision": "7a8aaa159c52ae5210a0f667e990a516"
  },
  {
    "url": "assets/js/20.86358099.js",
    "revision": "1fb22e55a3ce1e80494c425ee81f2855"
  },
  {
    "url": "assets/js/21.9845f508.js",
    "revision": "4215bb6ee9082c49b97be5d6fd5ae448"
  },
  {
    "url": "assets/js/22.9f0a63b2.js",
    "revision": "187e21937df488f52fb5d3070177104b"
  },
  {
    "url": "assets/js/23.eb8a9a1d.js",
    "revision": "e66766288a839d9d7edd615ca6e380c8"
  },
  {
    "url": "assets/js/24.5a2b28c7.js",
    "revision": "40b2220bba498b6973f3eec97c9494c9"
  },
  {
    "url": "assets/js/25.dc8f7b2b.js",
    "revision": "96c4a7c10f012c27caa4bcfee4b4b9b6"
  },
  {
    "url": "assets/js/26.c8d1e33f.js",
    "revision": "cf1a6c4dcc6d1971c9c30326d6c2b7eb"
  },
  {
    "url": "assets/js/27.35d63a5a.js",
    "revision": "3682b6f34aa9806bcf89470a4963c423"
  },
  {
    "url": "assets/js/28.56e0c0a9.js",
    "revision": "de03752927b96b176d6c52992777654a"
  },
  {
    "url": "assets/js/29.3353008b.js",
    "revision": "8af9818ed51471bf611202ab45d20fc7"
  },
  {
    "url": "assets/js/3.3a3faf80.js",
    "revision": "1abc0855561ebfbe4a79feba3a96df55"
  },
  {
    "url": "assets/js/30.6ec510b7.js",
    "revision": "13266a9f5c3392732b766a70ce75f385"
  },
  {
    "url": "assets/js/31.93ae6d01.js",
    "revision": "d96bf27f177476c275b49cccad4ea010"
  },
  {
    "url": "assets/js/32.314694c5.js",
    "revision": "951c840a0bb9cf78ad61cc02d149df0a"
  },
  {
    "url": "assets/js/33.70eaddff.js",
    "revision": "7da68d5bf9df6bdc2a99ba19d451f363"
  },
  {
    "url": "assets/js/34.de274b95.js",
    "revision": "aeea7ca49b720a4c5cb11877e11fed62"
  },
  {
    "url": "assets/js/35.24361b9a.js",
    "revision": "8d4a368dc87d3dd4a047a01ca1c88316"
  },
  {
    "url": "assets/js/36.5275d0c7.js",
    "revision": "74f59e04146f2d304b0cb848ddc38a69"
  },
  {
    "url": "assets/js/37.9fc1f1ba.js",
    "revision": "dc5d96343b8a456e21041e274bbbb2c3"
  },
  {
    "url": "assets/js/38.9d4a9141.js",
    "revision": "9d2759728373526410f818797912d872"
  },
  {
    "url": "assets/js/39.cbd6de65.js",
    "revision": "afc418c33a35f0b0513a346473d700c2"
  },
  {
    "url": "assets/js/4.ea9d2f0f.js",
    "revision": "f5d09e6a68ba2eb564ee5541cc1b5423"
  },
  {
    "url": "assets/js/40.1b25ba28.js",
    "revision": "3631320c683c4143d8839aee6741104c"
  },
  {
    "url": "assets/js/41.e73d56ed.js",
    "revision": "9fc9d6cb3546dc92c07da6b088e92bf3"
  },
  {
    "url": "assets/js/42.d5f07d78.js",
    "revision": "b1ac1a899e975d9a621016a9c94ea8c9"
  },
  {
    "url": "assets/js/43.1b829b89.js",
    "revision": "03543db07702b251ca0f172da3fc4071"
  },
  {
    "url": "assets/js/44.c2a5afd0.js",
    "revision": "2386879903f5b0112348b466a55310d0"
  },
  {
    "url": "assets/js/45.095e1596.js",
    "revision": "ad5cdf9c9516fbf4e5a7d4d7415c3749"
  },
  {
    "url": "assets/js/46.f17ed9e1.js",
    "revision": "123972021f6c6aad891776b2568ce8b9"
  },
  {
    "url": "assets/js/47.a921b411.js",
    "revision": "58b29fe02984f1d478223d68ed85615c"
  },
  {
    "url": "assets/js/48.a9da1c0a.js",
    "revision": "116fc5ae0f2d6223b7a7880c327ddba8"
  },
  {
    "url": "assets/js/49.e98ab9c0.js",
    "revision": "03598924de29ef206048826424ab1991"
  },
  {
    "url": "assets/js/5.bb381791.js",
    "revision": "5fa4263e3938e90151986fa1c8dfb0f1"
  },
  {
    "url": "assets/js/50.dd915bd8.js",
    "revision": "d0c454deedbc71cd7405279d0b729699"
  },
  {
    "url": "assets/js/51.1b15fbf4.js",
    "revision": "8c78df12e42f71a6c1a4c88c2f86bcd7"
  },
  {
    "url": "assets/js/52.97d381c5.js",
    "revision": "f148b40248f1aa639982ae11d911b331"
  },
  {
    "url": "assets/js/53.46118337.js",
    "revision": "64eed30af84ac33f0b035fe0aac5632b"
  },
  {
    "url": "assets/js/54.49a5413a.js",
    "revision": "942966e02221f68735f85fe88bf9b3f8"
  },
  {
    "url": "assets/js/55.9c704259.js",
    "revision": "45b7ec288350b4a2d62415c6e4df6209"
  },
  {
    "url": "assets/js/56.f76ffa66.js",
    "revision": "66ec2a5d3d58001ed35d6625c9f61485"
  },
  {
    "url": "assets/js/57.681eb10f.js",
    "revision": "b4084180179733b82f1283c78a9bfa0c"
  },
  {
    "url": "assets/js/58.cdd2e36e.js",
    "revision": "aed99d6eff1c1e80d5d5643b82e135da"
  },
  {
    "url": "assets/js/59.9b83adbf.js",
    "revision": "cf9a8170330e0e67850878b02e55b0a7"
  },
  {
    "url": "assets/js/6.9ab5c56f.js",
    "revision": "1e27ba49b3b4c5de564fb4cd93d58b95"
  },
  {
    "url": "assets/js/60.7ef828d9.js",
    "revision": "d5e63609da10557683a4ff671027c9c0"
  },
  {
    "url": "assets/js/61.5647a594.js",
    "revision": "cde3859e59fa764e2e7d549e9e7bc6ab"
  },
  {
    "url": "assets/js/62.10d768a0.js",
    "revision": "9d67e3a34cbee1c8ceff7e119627f7f4"
  },
  {
    "url": "assets/js/63.a9323b7b.js",
    "revision": "7e35449a6c70a586053e09ac55c2025a"
  },
  {
    "url": "assets/js/64.55c1256f.js",
    "revision": "1adca0762af8288857f01c7588d4a10f"
  },
  {
    "url": "assets/js/65.54520d85.js",
    "revision": "d272a217aabb198e4d8a7c36578ee7c7"
  },
  {
    "url": "assets/js/66.fba5634b.js",
    "revision": "c7a6da6b08d8c76d159c5891a15e6093"
  },
  {
    "url": "assets/js/67.67a29b22.js",
    "revision": "e70e6589cb9bb9ba968a2e075e8260e6"
  },
  {
    "url": "assets/js/68.d881c075.js",
    "revision": "1e89a8b68154636bf925148d06564a32"
  },
  {
    "url": "assets/js/69.28da9ce5.js",
    "revision": "dde684595fe8acf52dcfa9026b6d0c61"
  },
  {
    "url": "assets/js/7.e3e30421.js",
    "revision": "7c75bc1cd586396979c6ce221a5a9d95"
  },
  {
    "url": "assets/js/70.7141f308.js",
    "revision": "4d9ad09dd65e957e1b8209f11668d15b"
  },
  {
    "url": "assets/js/71.0ac76b65.js",
    "revision": "ecf4b555233902181e0c13ef023cbd06"
  },
  {
    "url": "assets/js/72.6b8ee5fc.js",
    "revision": "ea2ec4e0c3d804425ccd23386293e4b7"
  },
  {
    "url": "assets/js/73.db63bd77.js",
    "revision": "cde0b72782a15d4850d3ad0c4f18ad04"
  },
  {
    "url": "assets/js/74.89aaa2ca.js",
    "revision": "c87840d6bf6e44b538663cd4f4e48fb6"
  },
  {
    "url": "assets/js/75.a5bbe0ad.js",
    "revision": "d0af57a012509fd7cd3b96c273ebfd4f"
  },
  {
    "url": "assets/js/76.1c1c947e.js",
    "revision": "5599b61082944e556dbb8466fd324f02"
  },
  {
    "url": "assets/js/77.1417c208.js",
    "revision": "ababa2a0e9420b0d9e1aa4a281e046cd"
  },
  {
    "url": "assets/js/78.185c9224.js",
    "revision": "ff89100391fa26eac7f3ca9b1b00fe5e"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.ba8b5982.js",
    "revision": "a4d62a0256a5567b172b2f9e8829e68a"
  },
  {
    "url": "assets/js/9.f529b8db.js",
    "revision": "e9ddad246ffed4895b5be6e5ffd0f7f2"
  },
  {
    "url": "assets/js/app.1b45bd8f.js",
    "revision": "e47cfe6449970e6fe17a2145b1648cf5"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "e6bc679c345e42f3c56ef45bdf6d90fc"
  },
  {
    "url": "cs/bash.html",
    "revision": "6e1c784b301c6e39a6a0bb597baca3b6"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "087943ea81d65fa629ae97405faa7f89"
  },
  {
    "url": "cs/cmake.html",
    "revision": "fd59d272420ed3816d4fadade4faff2a"
  },
  {
    "url": "cs/compilation.html",
    "revision": "5d389db3570984b27de1c2064c0ea70e"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "f6d2558c405a1c22b43effd97d6c2d19"
  },
  {
    "url": "cs/git.html",
    "revision": "f54499f1e0caa759101121dd5aca39f5"
  },
  {
    "url": "cs/index.html",
    "revision": "a710b946ff86dae64a1c4c310b927b1a"
  },
  {
    "url": "cs/keras.html",
    "revision": "cf05418656bc4eeb44a3000a1efa07f5"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "fe5d2980345c54c46d06144c082e6ed4"
  },
  {
    "url": "cs/lwip.html",
    "revision": "9e772307f1d72a8261e4a6fbb475580b"
  },
  {
    "url": "cs/scala.html",
    "revision": "498ddbcb15ab821b2ca2d0385af83144"
  },
  {
    "url": "ee/about.html",
    "revision": "a5d3bb85b52c47887a17bbf8747abd5d"
  },
  {
    "url": "ee/chisel.html",
    "revision": "1b93b53c803e81ee7d16625f1ddaf839"
  },
  {
    "url": "ee/esp32.html",
    "revision": "b0d649f1d0bd05d9456f1a1eba3657ae"
  },
  {
    "url": "ee/index.html",
    "revision": "e10adf0f8b59efba16f582a2aea6c528"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "80663c59eaded8e41b1dfa0c1bdc203e"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "55c5d6e9ba4f1ddb63692c7920c0102c"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "ec44932cba2089be2a034eec6947a99a"
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
    "url": "images/cs/lwip/ethernet_frame.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
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
    "revision": "e13cb7598a1e796de80d94173b415145"
  },
  {
    "url": "others/about.html",
    "revision": "33f40c95eeec8eef62561ee9555753d1"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "28d72174a8fd2a1cada0fe8d85588a39"
  },
  {
    "url": "others/android-studio.html",
    "revision": "df0c31431a4972b5cd8d5181d9ab17b6"
  },
  {
    "url": "others/android.html",
    "revision": "7ce26a7b180437a81000f6220237a3cb"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "d5781890e17733d00f2060f4b79d33e1"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "d45af3bce7ed0a64d068470e44d8778d"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "a7f18642cd185f6658fb28e350d93234"
  },
  {
    "url": "others/css.html",
    "revision": "f0d11f9d7bf7452eeef6ea661ed31ae2"
  },
  {
    "url": "others/docker.html",
    "revision": "08364161e57a300e7e91cd96d167f35d"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "ecb5d566c29b3827eff77288e103a6cb"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "782872fce4baee4f3babd1a350bfb0a3"
  },
  {
    "url": "others/english-writting.html",
    "revision": "eb8645c11ed2335c4745eb5e849513d5"
  },
  {
    "url": "others/freertos.html",
    "revision": "7b035c404c667887e727f32b86d0db89"
  },
  {
    "url": "others/gns3.html",
    "revision": "39568d5c20759c3100df80bcd9a025e4"
  },
  {
    "url": "others/gps.html",
    "revision": "0cb579d10c7d796153841cbe4ade700a"
  },
  {
    "url": "others/html5.html",
    "revision": "e48575cf7d638bb6f075dd8c51af5b2b"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "ebe00c54515f395d43913b2b55b4f9ff"
  },
  {
    "url": "others/index.html",
    "revision": "609dd4bb9213546f7ca5ab6a824f2c4b"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "5b2fa27126b52b5debfcb35429cd1a81"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "7fbee456d3b6d49777f7527dfe95cdf0"
  },
  {
    "url": "others/javascript.html",
    "revision": "3e02408c858b616dd5859a15fcd68dde"
  },
  {
    "url": "others/json.html",
    "revision": "f081b55bb5f65a619b5a41a1cf6c09ac"
  },
  {
    "url": "others/latex.html",
    "revision": "c3c22aad903b1b041fe18eb56c7c37ef"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "ef7bbe0ca4cb1fde02205e4f21ea2c5d"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "681a8a4cac8163b7c18d6aff334b8a42"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "d5f0b5062bf63bca37915e5bb3b82379"
  },
  {
    "url": "others/markdown.html",
    "revision": "56344fdaa7634de1a170a5ea312e9fa8"
  },
  {
    "url": "others/matlab.html",
    "revision": "96f3660efe841b26954e48490d6a82e5"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "ac8f639713283b5dee9ca9b88fe09e29"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "c1555490eb42f2446a974f255399c2b1"
  },
  {
    "url": "others/network-security.html",
    "revision": "763695f83c9752d0364f9e86f96052ea"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "1dfb9cfc2bab04022b4eada8712a605f"
  },
  {
    "url": "others/oral_english.html",
    "revision": "f8a1081ee7006bbaa06de9042317dbbe"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "5110a65750f78a298e5191aa949f48db"
  },
  {
    "url": "others/poe.html",
    "revision": "31dbc373bd799f5b467bdfa022669b21"
  },
  {
    "url": "others/pyside2.html",
    "revision": "ef6d78454fd2e210334042197bdba9c0"
  },
  {
    "url": "others/python-socket.html",
    "revision": "1909d1d993aacbcdfe46e8273109b8fb"
  },
  {
    "url": "others/python.html",
    "revision": "80ff7345f037413cc65e7551e1d3236e"
  },
  {
    "url": "others/q-learning.html",
    "revision": "4d767678b0694f5fe655651288cc0b57"
  },
  {
    "url": "others/qr-code.html",
    "revision": "f38f36f2655f93dd6feee82b55b7f859"
  },
  {
    "url": "others/qt4.html",
    "revision": "8e3c40ff3bd75d2b179049845b34118b"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "0eed7553bff6b5019b3f4ca3a68e77cf"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "e73e54c4a5233fdaff0fed3747fd4b40"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "df50f37a9d1d80105814e3ada82b820b"
  },
  {
    "url": "others/sd-card.html",
    "revision": "593b5f449fd584034c1e749e34b0a7a8"
  },
  {
    "url": "others/sdn.html",
    "revision": "1cc6e88f600b68dc390f27c3520c365f"
  },
  {
    "url": "others/star-uml.html",
    "revision": "0733b6d47f0982d0c6e4f94f0fd52520"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "379e4b3f9ec88c0001e5788ab17a85c9"
  },
  {
    "url": "others/verilog.html",
    "revision": "3268526f533a0d226d9d80e6b631a2b0"
  },
  {
    "url": "others/vue.html",
    "revision": "6cd131d85ae0ab19356dbb3e4b5c81f5"
  },
  {
    "url": "others/w5500.html",
    "revision": "9567bfc1d8fef1f975393c57509500f5"
  },
  {
    "url": "others/w7500.html",
    "revision": "9b2281481a4fe8cf2bbcc93fbdfabf74"
  },
  {
    "url": "resume.html",
    "revision": "a6fd363d225fc1e8b891409963f80846"
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
