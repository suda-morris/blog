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
    "revision": "fb80eb5298cfd179a39357ece8aa2c29"
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
    "url": "assets/js/10.182fb7f5.js",
    "revision": "e9d74e52275f918ab11981e11d9efd8a"
  },
  {
    "url": "assets/js/11.efb86fd8.js",
    "revision": "69ef5cccfb369689e6676168cabf8437"
  },
  {
    "url": "assets/js/12.7a457ca7.js",
    "revision": "b372611085375fd741de759b284ce8dd"
  },
  {
    "url": "assets/js/13.32917904.js",
    "revision": "d7edfe3dfb6f1f7da2e7b7d6dcf4c6d0"
  },
  {
    "url": "assets/js/14.a7246f43.js",
    "revision": "852966bcf9d81a63a1e97d0efe3e423a"
  },
  {
    "url": "assets/js/15.c8a8f6ca.js",
    "revision": "c0a9b3875fa27db23f011bdd0d213408"
  },
  {
    "url": "assets/js/16.6fe79929.js",
    "revision": "66123fb4f5b5a1335ecad80dbea87672"
  },
  {
    "url": "assets/js/17.c3184762.js",
    "revision": "579db5303dd386c8b135d80202594df2"
  },
  {
    "url": "assets/js/18.182dec39.js",
    "revision": "9a464e3079b441fb238a59141d5b00c3"
  },
  {
    "url": "assets/js/19.269140d0.js",
    "revision": "e513dbc70be3148c715ca3242a26428a"
  },
  {
    "url": "assets/js/2.7363b3f4.js",
    "revision": "5d139b2a3c2c3ea7556af67bdb6f532c"
  },
  {
    "url": "assets/js/20.d65c631d.js",
    "revision": "1c6dc0b6e1780313222eb81321bddaa1"
  },
  {
    "url": "assets/js/21.389906d5.js",
    "revision": "a45e678de470ea90f74a890342bb62b1"
  },
  {
    "url": "assets/js/22.f50fb59b.js",
    "revision": "2c90f4b39112caaee16383a188c201ef"
  },
  {
    "url": "assets/js/23.e6dd8c5d.js",
    "revision": "2f925b4bf9fc1fbb057b22dc2269d108"
  },
  {
    "url": "assets/js/24.f5bc75b7.js",
    "revision": "026837a440a34c363629f6ec3a0b0d44"
  },
  {
    "url": "assets/js/25.fabd5e14.js",
    "revision": "7d5453cf1219f139650ca5c452a0bdb0"
  },
  {
    "url": "assets/js/26.98ccbce3.js",
    "revision": "e06d5b24c63f0b0f58d626d4a6c95b5d"
  },
  {
    "url": "assets/js/27.7f766b6b.js",
    "revision": "be0e3a83372c02af9686bacffb8e7f9b"
  },
  {
    "url": "assets/js/28.c75a4139.js",
    "revision": "1b83811d5faffe0bbc86daeeedcf4601"
  },
  {
    "url": "assets/js/29.87abf8c0.js",
    "revision": "049622a28aafb4fe80f4c6170be489da"
  },
  {
    "url": "assets/js/3.7a337f24.js",
    "revision": "60b3a27f86e13d53d93b211edfc454eb"
  },
  {
    "url": "assets/js/30.9a0ceef1.js",
    "revision": "a35e75332a8045a8881d08009397a4ae"
  },
  {
    "url": "assets/js/31.03c4f519.js",
    "revision": "bece0aaa22efcb8018af59d85d653b1d"
  },
  {
    "url": "assets/js/32.cb47cc50.js",
    "revision": "a3ba8a43ab994c2072aaa55dafb6664d"
  },
  {
    "url": "assets/js/33.8e3780a0.js",
    "revision": "a74a3f5c206cec0ebfe8f50d8e1bd857"
  },
  {
    "url": "assets/js/34.18b5567d.js",
    "revision": "1b6554badd67f9cd809c5eea7431eb9f"
  },
  {
    "url": "assets/js/35.cf94130d.js",
    "revision": "fe0514adf2692e86b02700343d258f7e"
  },
  {
    "url": "assets/js/36.410baf8a.js",
    "revision": "ac46bfd99e62c0768d8e9396e2468433"
  },
  {
    "url": "assets/js/37.36b50ea2.js",
    "revision": "635c4778a385acbb739a6f37c970ccb5"
  },
  {
    "url": "assets/js/38.c46f6b4a.js",
    "revision": "7678de1700f3fe34aec5d84f433962de"
  },
  {
    "url": "assets/js/39.ac95c4ac.js",
    "revision": "a83e6f0f9b870ad57edef91e09a4a2e8"
  },
  {
    "url": "assets/js/4.75a9e2be.js",
    "revision": "0a61f4b108430277a24704017a27b902"
  },
  {
    "url": "assets/js/40.1735fbce.js",
    "revision": "c9e89bebb98f2d1737f6784f6d0cf5fe"
  },
  {
    "url": "assets/js/41.4fb27c20.js",
    "revision": "2869f129d0188329bdc4a164cfbfeb83"
  },
  {
    "url": "assets/js/42.75789fb7.js",
    "revision": "3faefe3104be50f8eb449e8bf4954077"
  },
  {
    "url": "assets/js/43.877d2eff.js",
    "revision": "cc4a870f2d052e9a2ac4f698472d07b6"
  },
  {
    "url": "assets/js/44.750b3bbc.js",
    "revision": "400b7def83e755b1bd00799dfd2915fc"
  },
  {
    "url": "assets/js/45.f5ad66ce.js",
    "revision": "671b3200841aeec26a6e1bb5427d7b2d"
  },
  {
    "url": "assets/js/46.2e2bcff7.js",
    "revision": "71d7f93703e096bb42d1b0d55bc5884c"
  },
  {
    "url": "assets/js/47.541c9fdb.js",
    "revision": "d34ee50317d917fecdb57014667384e2"
  },
  {
    "url": "assets/js/48.648ad633.js",
    "revision": "ae7972341d2fab4a6004f8c1f128aed0"
  },
  {
    "url": "assets/js/49.e3f6fb2b.js",
    "revision": "fffc6f5ffcf066becae7527de9bc209f"
  },
  {
    "url": "assets/js/5.af448613.js",
    "revision": "7c8c9825849263cd4bf34ed009dd9be3"
  },
  {
    "url": "assets/js/50.2dbe4924.js",
    "revision": "927bb79e201886da5334a0a1587feef8"
  },
  {
    "url": "assets/js/51.a02532e1.js",
    "revision": "8c4a7df7e616bdb648bfbc99bf3e2fc2"
  },
  {
    "url": "assets/js/52.cf0bf8c3.js",
    "revision": "34ce51964a5ebe0148b4e57a8bef4854"
  },
  {
    "url": "assets/js/53.4a3b1f79.js",
    "revision": "9df0058cfbd24c12423c65a5004933b9"
  },
  {
    "url": "assets/js/54.3a444880.js",
    "revision": "a7b64131eac23441ca11fbe21e2af2c1"
  },
  {
    "url": "assets/js/55.b1092cac.js",
    "revision": "22f5c9e63d22063161794ff92153a2e6"
  },
  {
    "url": "assets/js/56.aef735e2.js",
    "revision": "3d0e439b0a192d0d0047f8d13e6f8ffd"
  },
  {
    "url": "assets/js/57.872b6a0c.js",
    "revision": "1a3c15ec702b968441fec27401cb6e35"
  },
  {
    "url": "assets/js/58.fad73875.js",
    "revision": "9e8e057689e8ee892ac69b18ece51bbc"
  },
  {
    "url": "assets/js/59.9b83adbf.js",
    "revision": "cf9a8170330e0e67850878b02e55b0a7"
  },
  {
    "url": "assets/js/6.9e67c6b1.js",
    "revision": "be19cfd90abe3282ee10846a207ce7e2"
  },
  {
    "url": "assets/js/60.e7874d25.js",
    "revision": "6a0d8fa9a544c86e6907d586de83ce3e"
  },
  {
    "url": "assets/js/61.3bfc2307.js",
    "revision": "944935ea4e05072b6070c8825e54f848"
  },
  {
    "url": "assets/js/62.20af904b.js",
    "revision": "7b95b206fba97a940479793376ad6b9e"
  },
  {
    "url": "assets/js/63.709443e5.js",
    "revision": "945b3fa22a172c7433300cab5dd981e4"
  },
  {
    "url": "assets/js/64.7c97bf1c.js",
    "revision": "f4ccab5eaf637da444466ae346a35556"
  },
  {
    "url": "assets/js/65.c69b94fb.js",
    "revision": "4f0d43a50dbbd042211304fea0ccd971"
  },
  {
    "url": "assets/js/66.bb0ad6d4.js",
    "revision": "bbab55aed74f03bd1b1b5fa935325bb5"
  },
  {
    "url": "assets/js/67.1a65aef5.js",
    "revision": "839ad6d1937a956f6ebcd4f7cdccf916"
  },
  {
    "url": "assets/js/68.01b53973.js",
    "revision": "97b23af17eeb1342c70cf50664c387e0"
  },
  {
    "url": "assets/js/69.2e0e4a69.js",
    "revision": "98a3770744d76706421a856ecdd37ad7"
  },
  {
    "url": "assets/js/7.18243e3d.js",
    "revision": "ce2be3e681e748787a275f6d90707d6d"
  },
  {
    "url": "assets/js/70.5c8c7aab.js",
    "revision": "76192a96eda279a44d94ab90d2180851"
  },
  {
    "url": "assets/js/71.6242c16f.js",
    "revision": "a8c56d43fb26f6860154598d4118c6e1"
  },
  {
    "url": "assets/js/72.b4536535.js",
    "revision": "1f70124ea61e467fce78ccd2277f2117"
  },
  {
    "url": "assets/js/73.f7511dca.js",
    "revision": "b8d5d7a984f52779cbee3dfb8b49da4e"
  },
  {
    "url": "assets/js/74.69ae17ab.js",
    "revision": "f256dc51664a94a327390db6aa2a110a"
  },
  {
    "url": "assets/js/75.e2e206a7.js",
    "revision": "d7068e7aea45b3b6d37ad0be7c27f554"
  },
  {
    "url": "assets/js/76.8f591fbc.js",
    "revision": "3071f11b638f94a3ed1b248cce871add"
  },
  {
    "url": "assets/js/77.2915d7e9.js",
    "revision": "6674c44dbff95dbf1b7eda7e4bbbdb93"
  },
  {
    "url": "assets/js/78.2ce674e8.js",
    "revision": "ee6ee437882e5d7cb9ea99a009f5c869"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.3c5da81e.js",
    "revision": "d7b1f2843c7e2fef9df2d047c164a6bc"
  },
  {
    "url": "assets/js/9.f5e6daf8.js",
    "revision": "95f09791c1830f3e8cbf451ec03a142c"
  },
  {
    "url": "assets/js/app.c9227456.js",
    "revision": "4515a0563ec222a66d985a981e76f313"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "2eca6691755a67e7663394be2ebcb437"
  },
  {
    "url": "cs/bash.html",
    "revision": "4c84bd2d0f2303f6280ca74f5b7367bd"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "248434d3bb9ed5e04c91d10867c14918"
  },
  {
    "url": "cs/cmake.html",
    "revision": "c897e5e4208f82501693ef9571b989b6"
  },
  {
    "url": "cs/compilation.html",
    "revision": "bd76c40e78ec9a1beda58834bbafac47"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "691591fda232fa91084a129a878a2451"
  },
  {
    "url": "cs/git.html",
    "revision": "6a5dbe651d8240e16edfcbf9529d3c31"
  },
  {
    "url": "cs/index.html",
    "revision": "71e5604e9e432098427454dbe952be84"
  },
  {
    "url": "cs/keras.html",
    "revision": "8ce698dc1f2a567b7a026f9c22f8ac58"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "b4f7ce79b4a02c3ff5dac42b092cdac2"
  },
  {
    "url": "cs/lwip.html",
    "revision": "e83dccb3f6947698177399624d96b1dc"
  },
  {
    "url": "cs/scala.html",
    "revision": "5bb5f3323fa0c018827c143aaffa6918"
  },
  {
    "url": "ee/about.html",
    "revision": "0fe330fa1b096a5fae91c2853b251582"
  },
  {
    "url": "ee/chisel.html",
    "revision": "62f33b5c356ad3852a71a54599263d7c"
  },
  {
    "url": "ee/esp32.html",
    "revision": "284fea25a08de57d61ac2e8484891fae"
  },
  {
    "url": "ee/index.html",
    "revision": "e26ad2d0f7e73af0e089d6ec0fc1c06d"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "30e7fa2644c8b9d78db24cb9a7aff508"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "82da1e5903b81859ac5f63c7417b0700"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "24c9beb1d8c2210ab9cfc938a58c85cf"
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
    "revision": "fc78fbe8129e2b45b23f7901df89e99b"
  },
  {
    "url": "others/about.html",
    "revision": "9cc6c7c799c19b5be3f8215bf87ba02d"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "18e63ca7c71b1d94851b29cd0d9583e3"
  },
  {
    "url": "others/android-studio.html",
    "revision": "2d20df54bb081e0b0c13fd0facb07742"
  },
  {
    "url": "others/android.html",
    "revision": "341eb4396e1df039084a09a676223ab0"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "b4de780847ff10e386ffb1d3dbe67fc9"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "3b61fc1d7268ec3b9bcb1073451013e2"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "8242b98042c91d196645500601c86c24"
  },
  {
    "url": "others/css.html",
    "revision": "a4ba040d5f1776b471cf769ccc782fdd"
  },
  {
    "url": "others/docker.html",
    "revision": "6f470b80d5bc8b3a46541f0446d07622"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "c38a76427ba1aa0fdcf013b4bad8feaa"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "e4bb543e116f6590058e68543a4aa0c7"
  },
  {
    "url": "others/english-writting.html",
    "revision": "c30541bbbf9dfa007d9b358711159c61"
  },
  {
    "url": "others/freertos.html",
    "revision": "08671acdb2cf5bc237dbe75028876c87"
  },
  {
    "url": "others/gns3.html",
    "revision": "3dda9d386911a7dea2668be503469bc1"
  },
  {
    "url": "others/gps.html",
    "revision": "93efe62d3607e2f30bf9680b2cbcae9a"
  },
  {
    "url": "others/html5.html",
    "revision": "a1804f07e4f0340863a74ee3dc685b5a"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "86763c21298792bbb12edae47daca732"
  },
  {
    "url": "others/index.html",
    "revision": "6a3781ff267c2a67fc102d31453aee63"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "4e57bcfb3648483bfb51d7c097e9bba3"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "39214208d830452360d301d45317e14c"
  },
  {
    "url": "others/javascript.html",
    "revision": "9aa358b54ad7d6e9049d5dec577a1487"
  },
  {
    "url": "others/json.html",
    "revision": "f627a942453303ed396d73e0bb004ada"
  },
  {
    "url": "others/latex.html",
    "revision": "38985a4a779553b986088e36acd88e7b"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "d6e461ccff342953c284b6b4043ff984"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "4dcafea5e7c30cf2ff2fb7849d0b5df0"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "d5e8fa396b0b93b7a25db4496828b7a4"
  },
  {
    "url": "others/markdown.html",
    "revision": "28586c374fbc75fbc9e0fa54c552bc92"
  },
  {
    "url": "others/matlab.html",
    "revision": "0e2e020825f68632c99ab7ce216d9228"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "cb680e4231c2ca0b016d43424846c51e"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "7ffbacdccae6bb733c252916be49dbd5"
  },
  {
    "url": "others/network-security.html",
    "revision": "ec72f71067423040fcff82a4b2c7e188"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "3dadab35f77847a1763f9c927e128064"
  },
  {
    "url": "others/oral_english.html",
    "revision": "d09b939e8b25574fc94e543450fc92f9"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "5d6c2c13741beb81593c3e2716a3fe0c"
  },
  {
    "url": "others/poe.html",
    "revision": "e04fed9d8d412a221c2cb03a9bddb146"
  },
  {
    "url": "others/pyside2.html",
    "revision": "f914374212e621dce2dfdd2055bc199f"
  },
  {
    "url": "others/python-socket.html",
    "revision": "59dac29e943e4cc855446119973d077e"
  },
  {
    "url": "others/python.html",
    "revision": "1ba82f754a1d924c1d3b9339d6378f50"
  },
  {
    "url": "others/q-learning.html",
    "revision": "3b1df602874c07f40a20f8f63985d2f3"
  },
  {
    "url": "others/qr-code.html",
    "revision": "7ca01f11c718a11a5d2f5740337ad3f9"
  },
  {
    "url": "others/qt4.html",
    "revision": "de13bcbd07a79b2b9d42c09de037d6a9"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "d3d41c7f8f5d15424a791f4baf9985c5"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "55bf405c8e004be8e022691469aa798e"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "b7e5c99d135639f1a00b731cfa4595f9"
  },
  {
    "url": "others/sd-card.html",
    "revision": "55f702bc187b94372c90ec7580f1803d"
  },
  {
    "url": "others/sdn.html",
    "revision": "0744d887852067405890b21702b59ced"
  },
  {
    "url": "others/star-uml.html",
    "revision": "cb93160413d8ee0b6c1c6de9e3537d95"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "9682e2ea027c6ac1695542d28090db25"
  },
  {
    "url": "others/verilog.html",
    "revision": "1c17aab3dccc271428b77951ac9a3148"
  },
  {
    "url": "others/vue.html",
    "revision": "e2782b4f1b44efb613e5234f76b60db0"
  },
  {
    "url": "others/w5500.html",
    "revision": "23933ac045d9529b30b5d3d5a6798577"
  },
  {
    "url": "others/w7500.html",
    "revision": "13f4c1633b9cd7a3ae326f0be24df9ef"
  },
  {
    "url": "resume.html",
    "revision": "9678af8be32f12f97b4a04cadc84cdb1"
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
