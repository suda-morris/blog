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
    "revision": "d81c2f8b404d588615e15041d1d87053"
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
    "url": "assets/js/10.68087c0a.js",
    "revision": "15d937b183adaa60ec568794e944df3a"
  },
  {
    "url": "assets/js/11.1cdfa36e.js",
    "revision": "45d01b7e1b78b9fab99aa52e2832b9a5"
  },
  {
    "url": "assets/js/12.cc73510c.js",
    "revision": "d6cc205ecf5de9055d64f660db4b6433"
  },
  {
    "url": "assets/js/13.62153d46.js",
    "revision": "90c71270487e007fb94ca1308d4cec4d"
  },
  {
    "url": "assets/js/14.d4b89603.js",
    "revision": "ad15ebb7dc712a9b7201093b58050f9d"
  },
  {
    "url": "assets/js/15.8ed7e10e.js",
    "revision": "b9537a49a45835610f458e6dfa23a9bb"
  },
  {
    "url": "assets/js/16.f91d3892.js",
    "revision": "0af1492f9b420fc8c3a255dd18d7b094"
  },
  {
    "url": "assets/js/17.a53eb27b.js",
    "revision": "48237e0face80e7160f5502c41252cfd"
  },
  {
    "url": "assets/js/18.4c1e7114.js",
    "revision": "019e6306cd5aa0e6d659b062bc3557af"
  },
  {
    "url": "assets/js/19.c8992cac.js",
    "revision": "5ccdf38d8a888029a42785f3c2b63f84"
  },
  {
    "url": "assets/js/2.b979bcff.js",
    "revision": "c3e12e37c95ffe7c469713528565872b"
  },
  {
    "url": "assets/js/20.c297e377.js",
    "revision": "bc34072ed4b296cf0534d91097f3692f"
  },
  {
    "url": "assets/js/21.44f7908d.js",
    "revision": "979767a85cf418d8b0ed3b8cb88d6b5b"
  },
  {
    "url": "assets/js/22.bcc35853.js",
    "revision": "5395bfef1026e880da02af5a0c0489dc"
  },
  {
    "url": "assets/js/23.e0bee435.js",
    "revision": "59894a2de116da8a458f0d10c9b91c24"
  },
  {
    "url": "assets/js/24.63d48074.js",
    "revision": "e8cb764eaf4ecda25a86feb8c0142417"
  },
  {
    "url": "assets/js/25.89eaf5ad.js",
    "revision": "8283213cdc4d6b65c77f11172579b020"
  },
  {
    "url": "assets/js/26.dde60b62.js",
    "revision": "68e8892c5ec6373d3fb4be9d92bf291d"
  },
  {
    "url": "assets/js/27.5c62e321.js",
    "revision": "b4cbd447918fd26bfcbbd331df834fff"
  },
  {
    "url": "assets/js/28.c75a4139.js",
    "revision": "1b83811d5faffe0bbc86daeeedcf4601"
  },
  {
    "url": "assets/js/29.9d1e9bb5.js",
    "revision": "63b99d967d6876ed74ff1cbbd9942acf"
  },
  {
    "url": "assets/js/3.6fdf42c7.js",
    "revision": "24c1e2b2db5e161436f3c47b966e4be8"
  },
  {
    "url": "assets/js/30.68af343e.js",
    "revision": "fb1e42e79513608e775ecdbbeafe205e"
  },
  {
    "url": "assets/js/31.fe3bd06e.js",
    "revision": "039215e3b83a99c1ec89136623363eec"
  },
  {
    "url": "assets/js/32.7c5850bb.js",
    "revision": "a9efd9683a323f6c1871dfd7c4d0c5f4"
  },
  {
    "url": "assets/js/33.69a9db9d.js",
    "revision": "d9d91fa486be8dcdb7b8b7ed336f8754"
  },
  {
    "url": "assets/js/34.92c77151.js",
    "revision": "4f1104f17a0d4909b336ba92c05e8e66"
  },
  {
    "url": "assets/js/35.bd6ba3ec.js",
    "revision": "304a7b2c9c2f950c32131698e13c789c"
  },
  {
    "url": "assets/js/36.b6610415.js",
    "revision": "4e132351781a38e110f78b4587762aa8"
  },
  {
    "url": "assets/js/37.38e50dbb.js",
    "revision": "2aa6272d7c29e9ad86822a0f4de9f0e1"
  },
  {
    "url": "assets/js/38.9767ccf6.js",
    "revision": "5539a8ed928dd481c013dbb5fd5ef13e"
  },
  {
    "url": "assets/js/39.897e62c2.js",
    "revision": "b13c941c2f5e31cada6998081fdb165f"
  },
  {
    "url": "assets/js/4.fa0175d8.js",
    "revision": "ee7325a1d374ad7e3df918e4b9e04f04"
  },
  {
    "url": "assets/js/40.1b25ba28.js",
    "revision": "3631320c683c4143d8839aee6741104c"
  },
  {
    "url": "assets/js/41.4fb27c20.js",
    "revision": "2869f129d0188329bdc4a164cfbfeb83"
  },
  {
    "url": "assets/js/42.4de053c7.js",
    "revision": "d10a97fc7029baf332784a78017856ab"
  },
  {
    "url": "assets/js/43.39127d26.js",
    "revision": "eba7848131428ed131071fa497e459f0"
  },
  {
    "url": "assets/js/44.9d84d61c.js",
    "revision": "f24541a19e503cd7ef2e74d447baab0d"
  },
  {
    "url": "assets/js/45.2a64873a.js",
    "revision": "1fa0a8c4fa8176e327c23010c8868aba"
  },
  {
    "url": "assets/js/46.64328551.js",
    "revision": "d579f39a57baf2864fdcb61ccfea755a"
  },
  {
    "url": "assets/js/47.2971d010.js",
    "revision": "27c6099268a1a58761e36c97c5b1fa3c"
  },
  {
    "url": "assets/js/48.42eda05c.js",
    "revision": "7a719b4d15371390e85a125819eb6cff"
  },
  {
    "url": "assets/js/49.1fac5e72.js",
    "revision": "97741944afd50c48c3bab79c1a552cb8"
  },
  {
    "url": "assets/js/5.31326356.js",
    "revision": "7026c4839f4db4408c5ac631e859b479"
  },
  {
    "url": "assets/js/50.affb4441.js",
    "revision": "faa8efd0ca9873ca323810f09e9b1273"
  },
  {
    "url": "assets/js/51.2019fd59.js",
    "revision": "8b0522fe783cc6b2b96a82daf068e433"
  },
  {
    "url": "assets/js/52.36928f10.js",
    "revision": "a7f980d8e82ba27ef1575fca088ff198"
  },
  {
    "url": "assets/js/53.46118337.js",
    "revision": "64eed30af84ac33f0b035fe0aac5632b"
  },
  {
    "url": "assets/js/54.8b3fb933.js",
    "revision": "87cc183d3f522af7d45285a37e33171d"
  },
  {
    "url": "assets/js/55.c6c65f63.js",
    "revision": "8c99cf4aaf4ca194dfa6d2dc35588e8a"
  },
  {
    "url": "assets/js/56.aef735e2.js",
    "revision": "3d0e439b0a192d0d0047f8d13e6f8ffd"
  },
  {
    "url": "assets/js/57.6b7de622.js",
    "revision": "e829f967881cbd6e2f81b121815f8145"
  },
  {
    "url": "assets/js/58.cb69f3d7.js",
    "revision": "468cd0732f32d7a2e658513360764a41"
  },
  {
    "url": "assets/js/59.9b83adbf.js",
    "revision": "cf9a8170330e0e67850878b02e55b0a7"
  },
  {
    "url": "assets/js/6.233184a6.js",
    "revision": "fa555fdc195e583683f39aba2cc3b609"
  },
  {
    "url": "assets/js/60.e7874d25.js",
    "revision": "6a0d8fa9a544c86e6907d586de83ce3e"
  },
  {
    "url": "assets/js/61.2d9f0082.js",
    "revision": "fff9621bd1cc5f2338cc9b95d8aef521"
  },
  {
    "url": "assets/js/62.bdf7f2f4.js",
    "revision": "bcac055a33553db239f079c7a120b1c8"
  },
  {
    "url": "assets/js/63.c62c9bb9.js",
    "revision": "c46b2cd90c2edd86b58ef5bc59fdb156"
  },
  {
    "url": "assets/js/64.8bc1257a.js",
    "revision": "e9f3cb6e8ffc0702dad7039c2bd357d1"
  },
  {
    "url": "assets/js/65.dfc3c79b.js",
    "revision": "207691abc6a4db27ad2a665bb3f014a2"
  },
  {
    "url": "assets/js/66.c219ef30.js",
    "revision": "17d89b0aa3333c099874dc02f107e130"
  },
  {
    "url": "assets/js/67.192d6ddd.js",
    "revision": "df5fdaf8e15dced69e33decc6c2310b0"
  },
  {
    "url": "assets/js/68.01b53973.js",
    "revision": "97b23af17eeb1342c70cf50664c387e0"
  },
  {
    "url": "assets/js/69.1395376c.js",
    "revision": "3f8083efad3c912129e19a41c7652a06"
  },
  {
    "url": "assets/js/7.c0a027a9.js",
    "revision": "4fe9e70b8712515e4a6b51bf6fb9ff28"
  },
  {
    "url": "assets/js/70.5c8c7aab.js",
    "revision": "76192a96eda279a44d94ab90d2180851"
  },
  {
    "url": "assets/js/71.1163301a.js",
    "revision": "59bf570f562ebeed74e79928107e5bdc"
  },
  {
    "url": "assets/js/72.b102198b.js",
    "revision": "730ec2a9bbdadbcad6137f7803753121"
  },
  {
    "url": "assets/js/73.5c2a3d63.js",
    "revision": "2356698b516d714d84708a66662a6557"
  },
  {
    "url": "assets/js/74.8265c3e9.js",
    "revision": "e72257926568b980d302c4138acd5beb"
  },
  {
    "url": "assets/js/75.e2e206a7.js",
    "revision": "d7068e7aea45b3b6d37ad0be7c27f554"
  },
  {
    "url": "assets/js/76.b89a4877.js",
    "revision": "dc7cf08890b98d09f0986b739aca5088"
  },
  {
    "url": "assets/js/77.3b4c29e5.js",
    "revision": "882c78ae9e4597fdaafac787655fbc28"
  },
  {
    "url": "assets/js/78.1999740d.js",
    "revision": "3e6667c297f962da647cef34c35748fc"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.75c1d338.js",
    "revision": "bb41e392405c752ac965071f1d89cea1"
  },
  {
    "url": "assets/js/9.e6c2a730.js",
    "revision": "bb7d1dba72d6d3ad7b1312cec4b35aaa"
  },
  {
    "url": "assets/js/app.e6f6dcc1.js",
    "revision": "d572b378857cde11d2cfbb9eb148e693"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "27fbbd696376b863d44209c48adcb1ad"
  },
  {
    "url": "cs/bash.html",
    "revision": "f79154b91a00613659a06e9f335f4af7"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "072fb781a6ee0d2b14dfd5870dfc05fc"
  },
  {
    "url": "cs/cmake.html",
    "revision": "d188af9639619b7cabc4feac57f430b2"
  },
  {
    "url": "cs/compilation.html",
    "revision": "6afe0a106919505fe36f6578ef189b18"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "e0d50d60b925ccedc540eb1a1cf1cc72"
  },
  {
    "url": "cs/git.html",
    "revision": "73ac3bbd1471c1027ceb501f63710cf9"
  },
  {
    "url": "cs/index.html",
    "revision": "10d391bc04f0f6446747af8887c23929"
  },
  {
    "url": "cs/keras.html",
    "revision": "9bebb69bbc42ea56911dec9b6f2e32ba"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "f3a841a5a4233b37b4dde33b70695a89"
  },
  {
    "url": "cs/lwip.html",
    "revision": "505ea6aa311857522d88de22b5c6d78b"
  },
  {
    "url": "cs/scala.html",
    "revision": "41c474cce0eeb48286dd2f1773b78847"
  },
  {
    "url": "ee/about.html",
    "revision": "fb1ebd9da91f191cbd79e48245bd0caf"
  },
  {
    "url": "ee/chisel.html",
    "revision": "8c7ea5282442c44ca1303a56eecb2c6f"
  },
  {
    "url": "ee/esp32.html",
    "revision": "ed956dfc0254b114473cfdce294d56ce"
  },
  {
    "url": "ee/index.html",
    "revision": "3eacf17071bd49aefe35659ed344b132"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "e22cff55871ab12a2296163f17b22642"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "0fc197f25356e1e6cc1f5438349259f9"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "b7d8fd31f4aa39436df4048ed96d7107"
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
    "revision": "05f6222d73060b40c64bc0af32a980a8"
  },
  {
    "url": "others/about.html",
    "revision": "4e625ac4d4a98e3ca6a5f378a760b899"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "eb4bf2e783db232ea8049ac3bb77a119"
  },
  {
    "url": "others/android-studio.html",
    "revision": "149ab600a408229356680b66eaba2125"
  },
  {
    "url": "others/android.html",
    "revision": "cf2923376a0b5e887bca774d038930e2"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "d2912b731608b893dfd00aaba4c49325"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "61c76e73bfb924289552468d95cf95e4"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "0dde41d310c780bef5efa155a79fcb76"
  },
  {
    "url": "others/css.html",
    "revision": "25f6dbdb906f18a58f8a12a64cad04f7"
  },
  {
    "url": "others/docker.html",
    "revision": "7a5682f9599220e3fe35ae130d1f0b5f"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "f039b687ab36ebcfdceb8d2e3d659a06"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "6defdac14fa1108d5c9f84c481757434"
  },
  {
    "url": "others/english-writting.html",
    "revision": "212c4589a990d9d010c83a780e8deb5e"
  },
  {
    "url": "others/freertos.html",
    "revision": "e4066f3a1972b0eafc44ec36c9bd2ba7"
  },
  {
    "url": "others/gns3.html",
    "revision": "b9af41de5423777e916c289b35c1a80c"
  },
  {
    "url": "others/gps.html",
    "revision": "2e6180e18e6eff27fea1e7f8fd288029"
  },
  {
    "url": "others/html5.html",
    "revision": "ab9944ccffe5bf84b701afbd0322d53b"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "c4c3f6b5ed25b248b275261dbc845527"
  },
  {
    "url": "others/index.html",
    "revision": "a689dc362ec31e74f0bd692a119fdfdf"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "a932ce67d7946cf4562dd6b4796f0d64"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "2ba20baf9c3cd1f12465ae743511db4f"
  },
  {
    "url": "others/javascript.html",
    "revision": "b202277f10fc295bbbaf8b2c9c9d91c2"
  },
  {
    "url": "others/json.html",
    "revision": "b0543a4ea900980cdadd4ed8242090f2"
  },
  {
    "url": "others/latex.html",
    "revision": "87ff29acfa1e46eca1b8e48ae97b5949"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "b632abe12d88dfe0fd38569dbf2f6a23"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "8a526dbe4439459c05fe6ba6ebbce3c3"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "3e9a818a18ce8f7800df1e8c822ce77b"
  },
  {
    "url": "others/markdown.html",
    "revision": "8cee450b7128d33d8c4fc0e60a758610"
  },
  {
    "url": "others/matlab.html",
    "revision": "f55f4de00b44cff1f3193ed05f6acdd6"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "d61d5c1045c0e67af662881aa2ee8cd7"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "6ce186a78ce25c5c2dff5abbb1797399"
  },
  {
    "url": "others/network-security.html",
    "revision": "51dc40a9bb414880540b800e19fcecdd"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "a1d4d1bc8ac2c7e2a0874915f6e7f5a8"
  },
  {
    "url": "others/oral_english.html",
    "revision": "fab3a7f4b0ffccaf8f5a793c91992ed5"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "c3940fbc591de560d7e3006cb1e71e37"
  },
  {
    "url": "others/poe.html",
    "revision": "874530b045316653c8505b5669878b54"
  },
  {
    "url": "others/pyside2.html",
    "revision": "0634784b5109981b1857311fe87f07a1"
  },
  {
    "url": "others/python-socket.html",
    "revision": "727d8eb54970ac9f6956f9ec75abcf77"
  },
  {
    "url": "others/python.html",
    "revision": "9a8c9f78362051a31f11df193c21e55f"
  },
  {
    "url": "others/q-learning.html",
    "revision": "09c974d7053397875d380ece68e73c4e"
  },
  {
    "url": "others/qr-code.html",
    "revision": "fa77559587edddb2b21b1e24041556f7"
  },
  {
    "url": "others/qt4.html",
    "revision": "4747de1d8b4d2e574cf39302ee300fc5"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "34e88011a86e4395f357426334349821"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "5e4378c7473997c50e8c82dddcd51eb6"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "4c6b7ec40cfea01ca3b13ecdcc2443b4"
  },
  {
    "url": "others/sd-card.html",
    "revision": "ba3499e11427bc3853f6c4bcef3eae85"
  },
  {
    "url": "others/sdn.html",
    "revision": "4cd632305c3384a240c3328c81d10c27"
  },
  {
    "url": "others/star-uml.html",
    "revision": "1aee670f18580fd6dcd4d80111d37723"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "913baeb1f44c9881eaf282d11611c519"
  },
  {
    "url": "others/verilog.html",
    "revision": "e548971b3c0a926b56913f10b7078b3f"
  },
  {
    "url": "others/vue.html",
    "revision": "339d04f6c6238a2578149663b2bad9bf"
  },
  {
    "url": "others/w5500.html",
    "revision": "3d3c2b91f2cec37815e25d5cb167a624"
  },
  {
    "url": "others/w7500.html",
    "revision": "99908efbb868e7ffefc974742bc07d1b"
  },
  {
    "url": "resume.html",
    "revision": "bb453189445fef0f795c95bc4170771d"
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
