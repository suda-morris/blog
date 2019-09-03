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
    "revision": "e528bc23e58b52cebcef0621b9a4845a"
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
    "url": "assets/img/lwip_heap.1ac8ef3c.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "assets/img/lwip_memp.1fc0c568.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
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
    "url": "assets/js/10.5ec85977.js",
    "revision": "ae579b171025f62e116a547b4d139703"
  },
  {
    "url": "assets/js/11.534da2d5.js",
    "revision": "3a796e2051c56a67e0a6fe6700f1f7ff"
  },
  {
    "url": "assets/js/12.969a34cb.js",
    "revision": "a30440c470580474e2a111e38ab91fc2"
  },
  {
    "url": "assets/js/13.6474d988.js",
    "revision": "b2729970393d89cfd75a9aaa94e43bad"
  },
  {
    "url": "assets/js/14.c97e0546.js",
    "revision": "e7a332450e09f3c22707d821369d5231"
  },
  {
    "url": "assets/js/15.90b684c8.js",
    "revision": "b4597a230522e2f1bbd57dca8ef4d4ff"
  },
  {
    "url": "assets/js/16.2c305f3a.js",
    "revision": "d0b20eb80993e077f39e3b3b7944f1de"
  },
  {
    "url": "assets/js/17.05058c5b.js",
    "revision": "0183549028c56598171059d0d6982006"
  },
  {
    "url": "assets/js/18.b56a1d3c.js",
    "revision": "4df7b32aad7b21bf68d10c21f2d2a007"
  },
  {
    "url": "assets/js/19.95c99569.js",
    "revision": "69ad37ac6eb7abac8dac24427f3b65a0"
  },
  {
    "url": "assets/js/2.26fe8008.js",
    "revision": "cbfb52fbfe1a0119a8ae50bb75cc4d5e"
  },
  {
    "url": "assets/js/20.a72a375d.js",
    "revision": "40ad5d96feee3f183e47337820676957"
  },
  {
    "url": "assets/js/21.12e450b8.js",
    "revision": "03219ca15365cac08a8e2a76be4ed083"
  },
  {
    "url": "assets/js/22.aadc7ab2.js",
    "revision": "e7d7c8e82f9ac1765d46c95a77e605f7"
  },
  {
    "url": "assets/js/23.5075b100.js",
    "revision": "0327dfa3986ba6db8e3b9efd4c29ba76"
  },
  {
    "url": "assets/js/24.77e60903.js",
    "revision": "51937669079f7885da8f215057e78c74"
  },
  {
    "url": "assets/js/25.86c89734.js",
    "revision": "225583c14d0782da0caa64e96b2e299f"
  },
  {
    "url": "assets/js/26.1913681e.js",
    "revision": "72a795148a561bd53008c5bb9edfd01c"
  },
  {
    "url": "assets/js/27.d9c25f3c.js",
    "revision": "60f47de30c8076e8f34141801b8fbb09"
  },
  {
    "url": "assets/js/28.9e921225.js",
    "revision": "e65c4997c6b7485aec3bcc957364e7ec"
  },
  {
    "url": "assets/js/29.820840bd.js",
    "revision": "30d7d4b6bd618705c028ddc52e9c5a1e"
  },
  {
    "url": "assets/js/3.44980c37.js",
    "revision": "707c8c1588ff29610a9af6c42e166d66"
  },
  {
    "url": "assets/js/30.c92b4dab.js",
    "revision": "9e08415a99d801b2144c46068c26c89f"
  },
  {
    "url": "assets/js/31.a0ace124.js",
    "revision": "0bc0f35ca913de8d83667cfc57112a9a"
  },
  {
    "url": "assets/js/32.80bc525b.js",
    "revision": "05f7cbfd7181685d02b67dd44cbff3ac"
  },
  {
    "url": "assets/js/33.05cb78d4.js",
    "revision": "a14c020cf848bc34abdcae967413c5a8"
  },
  {
    "url": "assets/js/34.221382bf.js",
    "revision": "e215546652deb5df140b6b6f3b464436"
  },
  {
    "url": "assets/js/35.14e4c486.js",
    "revision": "0b66a7334dbe8376974fba9d40f6c749"
  },
  {
    "url": "assets/js/36.d097e53a.js",
    "revision": "4b5364b22b10e567e0885ffaaec808c9"
  },
  {
    "url": "assets/js/37.10925851.js",
    "revision": "0bbe582beff8c273c844a3ed8f70f70f"
  },
  {
    "url": "assets/js/38.03910c69.js",
    "revision": "d27e0e3d1113815326149cfbc60fe20a"
  },
  {
    "url": "assets/js/39.b11e41d6.js",
    "revision": "fb5b4e2096949a2a011d0dd9fbfed85e"
  },
  {
    "url": "assets/js/4.eee790c2.js",
    "revision": "9646bac145a680793724ca12db2a5087"
  },
  {
    "url": "assets/js/40.eed18373.js",
    "revision": "f2c7548eff439cbdb41ecfc2cd895d69"
  },
  {
    "url": "assets/js/41.7088da1f.js",
    "revision": "0a99b3e50041a21870b43fae88893bc2"
  },
  {
    "url": "assets/js/42.02b95016.js",
    "revision": "1d5522751b4722699aaa049be234f9ce"
  },
  {
    "url": "assets/js/43.c1316ecf.js",
    "revision": "747d8f4c6b381d6c4ecfb97babba4522"
  },
  {
    "url": "assets/js/44.1d1769ee.js",
    "revision": "bbd5ff973c22c78f30080aa705cd973c"
  },
  {
    "url": "assets/js/45.ac41a053.js",
    "revision": "e4860a1cb5e39a56ab5df39cc21f753e"
  },
  {
    "url": "assets/js/46.36764dbf.js",
    "revision": "353b6e81a5c84b3fcf049946811ff28d"
  },
  {
    "url": "assets/js/47.7402bac6.js",
    "revision": "39fb685faae5cb114ef491130cf9800a"
  },
  {
    "url": "assets/js/48.fd02a1a7.js",
    "revision": "d2f6972cb6949922ab2fade2506673ee"
  },
  {
    "url": "assets/js/49.f99da8a2.js",
    "revision": "b7609fe01ad756922911c286e71c141a"
  },
  {
    "url": "assets/js/5.aad55c7e.js",
    "revision": "3a6a1c232a4aa0713a27daf130656aaf"
  },
  {
    "url": "assets/js/50.44005f10.js",
    "revision": "26880a6162bc1e5aae8e314552c71020"
  },
  {
    "url": "assets/js/51.a76e21c4.js",
    "revision": "f51efc261a891036f6045f095a7411dd"
  },
  {
    "url": "assets/js/52.61dc8377.js",
    "revision": "c1a0102cc05de6dd25c16e7fe073c8a0"
  },
  {
    "url": "assets/js/53.a7903aaa.js",
    "revision": "09a2aac9a9d9b07583120531c5e42516"
  },
  {
    "url": "assets/js/54.2fe48653.js",
    "revision": "c5df5a54809ae5f0314a50a26d69e060"
  },
  {
    "url": "assets/js/55.1499ee05.js",
    "revision": "4c784381135e3faac3e85850e2ad4bc4"
  },
  {
    "url": "assets/js/56.f4e73a9d.js",
    "revision": "ae23f5d903569c20cf45ff3015f6cf65"
  },
  {
    "url": "assets/js/57.50910893.js",
    "revision": "d7be1fa7cfab577c318acccbc22b85b3"
  },
  {
    "url": "assets/js/58.f90c2b7f.js",
    "revision": "37c4168f35eecef0474c2db48c7a04ac"
  },
  {
    "url": "assets/js/59.14648b09.js",
    "revision": "ad16b6cfb77c1d202e37f86db6b1e2ee"
  },
  {
    "url": "assets/js/6.c0c34194.js",
    "revision": "227ed147f6024b8bb44ca64ab23defec"
  },
  {
    "url": "assets/js/60.f97c7a9c.js",
    "revision": "796d8f2abae9bd6979f920047d47e5a4"
  },
  {
    "url": "assets/js/61.e947b330.js",
    "revision": "3475206106bb9cf344d4eb5d345c98d9"
  },
  {
    "url": "assets/js/62.f16ddb6c.js",
    "revision": "89525e3a40b7b5d3604ced656440a8d9"
  },
  {
    "url": "assets/js/63.7c8665eb.js",
    "revision": "9a8d4b0f15745464ff95b4327d41a00e"
  },
  {
    "url": "assets/js/64.39bbed98.js",
    "revision": "abe8d7dbe29eacb84dec726de4400d3f"
  },
  {
    "url": "assets/js/65.bc49b1b4.js",
    "revision": "130f8d52a0662c4902f8fe61cd6b836f"
  },
  {
    "url": "assets/js/66.f175ed4a.js",
    "revision": "7bbb11bae962a4c9823830120d244e6f"
  },
  {
    "url": "assets/js/67.1adf8041.js",
    "revision": "8bd6e3b306d6270fd034fce1aa3c7b50"
  },
  {
    "url": "assets/js/68.7c3a836d.js",
    "revision": "744f1c7e1cbcde51833ae7c3ef1f492c"
  },
  {
    "url": "assets/js/69.a9ba4584.js",
    "revision": "8ae66191b18dfa7a5087aa5d84a6f74a"
  },
  {
    "url": "assets/js/7.b2777453.js",
    "revision": "f42228039808c2a9979ffb906c4b5a8c"
  },
  {
    "url": "assets/js/70.aee8de48.js",
    "revision": "280f0a67ace84e25935744c7a0bac375"
  },
  {
    "url": "assets/js/71.716d4184.js",
    "revision": "110a8b6241b6dcb27a1778512833532d"
  },
  {
    "url": "assets/js/72.458a1d3c.js",
    "revision": "2d40330a26bc82fa4bb63916837d9741"
  },
  {
    "url": "assets/js/73.36528ad1.js",
    "revision": "620a16ee4b25b8a3f334bb1bb0540d7a"
  },
  {
    "url": "assets/js/74.16b9bf0b.js",
    "revision": "9185929f699a751a93b65b4b02cdc841"
  },
  {
    "url": "assets/js/75.f71db7ef.js",
    "revision": "e9fed327fa6a307fc8bbeca3d003c744"
  },
  {
    "url": "assets/js/76.cbcce4b6.js",
    "revision": "73d190109b315f8fa8e6a70374aeec83"
  },
  {
    "url": "assets/js/77.5435b0fc.js",
    "revision": "d4e09e325de4f66b3fb83da67900a5fe"
  },
  {
    "url": "assets/js/78.fd2f2839.js",
    "revision": "93596e4f43999aed51ac0afdfb59d1ff"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.29d6d9bc.js",
    "revision": "0cc4761b6591798474568c72ed126190"
  },
  {
    "url": "assets/js/9.16cd21d4.js",
    "revision": "495627a309b86647de0504545465d62e"
  },
  {
    "url": "assets/js/app.e87c68c1.js",
    "revision": "e543e0ed449781d67eea31c7eea6abe7"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "aff0102482109c984d4536ec81b859b0"
  },
  {
    "url": "cs/bash.html",
    "revision": "2172fb3fc20d890f08ed29c13ebf6641"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "9b794821c308ecae2d1c653307ab16d3"
  },
  {
    "url": "cs/cmake.html",
    "revision": "08ce39ba3c41945b4ed72618f85f20ca"
  },
  {
    "url": "cs/compilation.html",
    "revision": "adcf69b54f5c16240f5046c54b1aae1b"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "e698f9fd9c408928a608bb69ee5c977f"
  },
  {
    "url": "cs/git.html",
    "revision": "76820e373c93bb53a6900785073a7b82"
  },
  {
    "url": "cs/index.html",
    "revision": "c6b44d03569b9f229dc5e9990bc2f963"
  },
  {
    "url": "cs/keras.html",
    "revision": "7fde8480f0c7e7d5c64b5900b58b49f3"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "fb592cede2eecb4dca5f968c8aa7af54"
  },
  {
    "url": "cs/lwip.html",
    "revision": "d951f6b88cfa40c5bebd769c7207ca35"
  },
  {
    "url": "cs/scala.html",
    "revision": "90248c3689e93dc4157eeb6e941323e7"
  },
  {
    "url": "ee/about.html",
    "revision": "16f949aa1d7a1210bca7c83e0643665d"
  },
  {
    "url": "ee/chisel.html",
    "revision": "a1d7033e692cf8f785ddf516c0fa51b3"
  },
  {
    "url": "ee/esp32.html",
    "revision": "da93b39d3cf91b69617d50dbf4df0dc7"
  },
  {
    "url": "ee/index.html",
    "revision": "246f2da7e8de6676c0db328f79e841d3"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "23be859f6e43401ec8f62f4761d24092"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "ab7051105b694b674c3b6f4e93a7d47f"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "d743bfb1e1c6fdccb2f91fc5cdc4cbe0"
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
    "url": "images/cs/lwip/lwip_heap.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "images/cs/lwip/lwip_memp.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
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
    "revision": "edadfd5599272de7571c9e98a13b798e"
  },
  {
    "url": "others/about.html",
    "revision": "cfe678e8b35a16f7e67bd29fd4ad43ab"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "74845f1c8da529ec80cad9dfa06dfd3f"
  },
  {
    "url": "others/android-studio.html",
    "revision": "15e13e5a394b29121c811b15e580e88c"
  },
  {
    "url": "others/android.html",
    "revision": "a73d2054a1fce7071bd8307fe98be1f7"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "72901ca797ebb54f531771ac894436c4"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "801ff244b39a9e52e083a99e641bcfda"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "e136ba122caafc273bb503675ab162b4"
  },
  {
    "url": "others/css.html",
    "revision": "f79e4dd2110c6ecb74fb9366b61228af"
  },
  {
    "url": "others/docker.html",
    "revision": "bd328be06e3b9ba41dceca0836974d30"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "99d9677afe5d226b863b21e1e715f4fe"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "b6c5d97cc65dcbdb9d7facd1507c7c30"
  },
  {
    "url": "others/english-writting.html",
    "revision": "d76afd6528b9ded612b20a3df2a2cb08"
  },
  {
    "url": "others/freertos.html",
    "revision": "0c8eee2940d97a51542e901dbf162073"
  },
  {
    "url": "others/gns3.html",
    "revision": "cb15842669dd3190e57b2b6607462bad"
  },
  {
    "url": "others/gps.html",
    "revision": "bb965662af7d544d597a120286c3ce93"
  },
  {
    "url": "others/html5.html",
    "revision": "a78806dbb0689f45c1b42fd8fcb82d0f"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "03f1d310eb68503606da0dccbd01883b"
  },
  {
    "url": "others/index.html",
    "revision": "9d2d1bb80ed1771b928d76b5ded63c71"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "65a93d3eb57a99ac3af4482bf3b2a6fe"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "899508e0c74f78aee00c7e0b22282d43"
  },
  {
    "url": "others/javascript.html",
    "revision": "9089f2c930bc76b29b36883c4602d51a"
  },
  {
    "url": "others/json.html",
    "revision": "0a020d14614183618f71622a99bafb9f"
  },
  {
    "url": "others/latex.html",
    "revision": "2a2e27d0b0fe911298884bfe7b5f3fb5"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "417f6329f7c0585e91d29d157609f8ad"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "d9163b7d315595f58cfdd5a9b7a96505"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "7244f103eb98db1c7f36c7175ffdef43"
  },
  {
    "url": "others/markdown.html",
    "revision": "e64b3fa063686f5dff81891d0c2e9465"
  },
  {
    "url": "others/matlab.html",
    "revision": "cf6243770a720af342b00620f8b8d81c"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "7d84b2f6d8d1456adfe18f6a1e7a811d"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "9984acd6968969044f49f4f039b358d7"
  },
  {
    "url": "others/network-security.html",
    "revision": "7a9578ee83faee52e6c949d310e81629"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "0f133ccbdee9011f74edaeefe251de51"
  },
  {
    "url": "others/oral_english.html",
    "revision": "0486bf84a73a79199a4f4bc51443fc7e"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "1aafe709101180f04d749e878bc522d8"
  },
  {
    "url": "others/poe.html",
    "revision": "88070a71b5c9a3cb923151fd966387aa"
  },
  {
    "url": "others/pyside2.html",
    "revision": "9f33349f3904d8f3da5666a19c36f4b6"
  },
  {
    "url": "others/python-socket.html",
    "revision": "03af124e63b94642e7a9ca97fcbc67e3"
  },
  {
    "url": "others/python.html",
    "revision": "e026bee464304c79a4d9fd09ea29c477"
  },
  {
    "url": "others/q-learning.html",
    "revision": "2f1b9010aa9c34616a00870f3e93ca41"
  },
  {
    "url": "others/qr-code.html",
    "revision": "c9c4848fa7a0b04dacc05753a9b79106"
  },
  {
    "url": "others/qt4.html",
    "revision": "4405dafc2e40b764ff30305322a58198"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "723ced02e1af8a00e51639a4394c15fb"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "9f59141a4f932b275756c7b8df1778ee"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "a43b244e0af391f4697f525bbf4c7c15"
  },
  {
    "url": "others/sd-card.html",
    "revision": "ffff067b80d70d43365d006b20585b0d"
  },
  {
    "url": "others/sdn.html",
    "revision": "6ebedac2f2ad1d02b3802c09726a1ff5"
  },
  {
    "url": "others/star-uml.html",
    "revision": "59c9dd83085ef4a9536b53e6241cd322"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "05ca40782a4bbcfb12104dc0bc8c4830"
  },
  {
    "url": "others/verilog.html",
    "revision": "08924bc3078bb45e456aaf1c6b3a706c"
  },
  {
    "url": "others/vue.html",
    "revision": "9e69f49a7e6d07c1f16d375d1585aa26"
  },
  {
    "url": "others/w5500.html",
    "revision": "753389dbe8be94861c8a993379767f9d"
  },
  {
    "url": "others/w7500.html",
    "revision": "6adc72fbd72cf1dc9f933e76352ba535"
  },
  {
    "url": "resume.html",
    "revision": "41c3f0f62836880d3c3b18811f0a0c79"
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
