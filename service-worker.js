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
    "revision": "fe49df8d73047770ef35ef6389955eb4"
  },
  {
    "url": "assets/css/0.styles.6e7aa9f8.css",
    "revision": "3559d3a6e41ca47bb0d09208f45235d9"
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
    "url": "assets/js/10.620a7235.js",
    "revision": "cbb3ffcd76472f1c0023e761df2f45b0"
  },
  {
    "url": "assets/js/11.983e8ee4.js",
    "revision": "50f6a59582d94c196ea55177dbcd8309"
  },
  {
    "url": "assets/js/12.aaa824e9.js",
    "revision": "fccd0e09bdc668d092e917c742ed51d2"
  },
  {
    "url": "assets/js/13.6659bc17.js",
    "revision": "51f9a345ad2ffce6c11f8a85ee115e6e"
  },
  {
    "url": "assets/js/14.71aa194c.js",
    "revision": "422a0dc10add38e2bddef18c6bac620f"
  },
  {
    "url": "assets/js/15.819fd84b.js",
    "revision": "81850968b582af5ec2161ac9ace87c74"
  },
  {
    "url": "assets/js/16.46175218.js",
    "revision": "f43d5af66791b47f1ef78367811c6e72"
  },
  {
    "url": "assets/js/17.4702b8e7.js",
    "revision": "8d7ad003b859b24c723f11f77ac03fd5"
  },
  {
    "url": "assets/js/18.d61c8a22.js",
    "revision": "51fc8365e03e38bcca8462d549fb07d7"
  },
  {
    "url": "assets/js/19.1a326300.js",
    "revision": "87f6319e13b575a131bf7bbdc8535798"
  },
  {
    "url": "assets/js/2.a6386433.js",
    "revision": "c02c0f77a9415eb189be0921226bca15"
  },
  {
    "url": "assets/js/20.b0096f85.js",
    "revision": "2ff580c7e1c99dbd8732ae09808a360f"
  },
  {
    "url": "assets/js/21.7b9078c1.js",
    "revision": "d058f0335cb92008a0bdacd4e8f3b2b8"
  },
  {
    "url": "assets/js/22.37e2fc7c.js",
    "revision": "98ae19a716ff74b05e75cfdf1d1ca75a"
  },
  {
    "url": "assets/js/23.7f2e0f75.js",
    "revision": "51b8844997c4a6a3a0f00f40bea2eba6"
  },
  {
    "url": "assets/js/24.b9576242.js",
    "revision": "7104583d39f13ace847c9082c06a1882"
  },
  {
    "url": "assets/js/25.0b521ebb.js",
    "revision": "869b81decd61a7a2f67fa266d4d2d5c3"
  },
  {
    "url": "assets/js/26.21df83ba.js",
    "revision": "dda788840e7c0811820ea5d9fb6aba4b"
  },
  {
    "url": "assets/js/27.e303f4d6.js",
    "revision": "051c528279919b7c2c7179ede4e4f57d"
  },
  {
    "url": "assets/js/28.afc228de.js",
    "revision": "ddc86dff54beff52f1c0fe29bd798150"
  },
  {
    "url": "assets/js/29.d86d0d55.js",
    "revision": "310e3c7c8fa25ecba2f2e3eb00d39f4a"
  },
  {
    "url": "assets/js/3.aaaf91ce.js",
    "revision": "cb326d66013c4ea972a80830cae1b9fc"
  },
  {
    "url": "assets/js/30.c7d55eb4.js",
    "revision": "314bad9488a1caed1ef40326bf2cf027"
  },
  {
    "url": "assets/js/31.4e3b008e.js",
    "revision": "a0c32b051f9e196bba22209fffeb22a7"
  },
  {
    "url": "assets/js/32.c8cadbe2.js",
    "revision": "3f2c14fdfa22c4ca313663892658ee94"
  },
  {
    "url": "assets/js/33.db71320d.js",
    "revision": "e8615f11a02b4b7671099409a6d545a1"
  },
  {
    "url": "assets/js/34.b8902ad6.js",
    "revision": "428030212efd6dfee17934e4111b260d"
  },
  {
    "url": "assets/js/35.1d211cda.js",
    "revision": "73c813a001a3d51548a8072ae7418bd0"
  },
  {
    "url": "assets/js/36.e3aab90e.js",
    "revision": "311433b80c3a9df23a469dc3184d0b92"
  },
  {
    "url": "assets/js/37.c4640c2b.js",
    "revision": "e3be7824d7f423cec0cecd661176c917"
  },
  {
    "url": "assets/js/38.c852371d.js",
    "revision": "349e52bf4fd3d5d48190455b84fe1f29"
  },
  {
    "url": "assets/js/39.6a95c848.js",
    "revision": "bc734aba6c2dc2a1888f189ecbb83382"
  },
  {
    "url": "assets/js/4.4acc1a5c.js",
    "revision": "151d19485cd003342621fe99bee35817"
  },
  {
    "url": "assets/js/40.98531bca.js",
    "revision": "d6b8e85f3df82ff5cd8768a9d2e1c65c"
  },
  {
    "url": "assets/js/41.629f9020.js",
    "revision": "3c94bd789f232172fdcf339a0596cb03"
  },
  {
    "url": "assets/js/42.160f2cc3.js",
    "revision": "122d948812067cffca67bc8db1ddd293"
  },
  {
    "url": "assets/js/43.210d6680.js",
    "revision": "7f2e69c014fe94048f0c0e8d806e5725"
  },
  {
    "url": "assets/js/44.e2d0b2e1.js",
    "revision": "52c1765b324587eecbac547a87b1870a"
  },
  {
    "url": "assets/js/45.39548a8d.js",
    "revision": "de240558f0c2b0d0ab6deef80047d096"
  },
  {
    "url": "assets/js/46.29715187.js",
    "revision": "bdfce45acb4afa53e151161f9f38b23c"
  },
  {
    "url": "assets/js/47.c71c7045.js",
    "revision": "92b93f3035b9ff59d71f3223e3752f0c"
  },
  {
    "url": "assets/js/48.c08950e1.js",
    "revision": "fb97a043e0e66716667dfb3b9e36c1ff"
  },
  {
    "url": "assets/js/49.4f1f87e9.js",
    "revision": "85a7d0c2f92f67543995cad74dba6c3c"
  },
  {
    "url": "assets/js/5.f3c39b1b.js",
    "revision": "93ace8b4b6b079a9daee08902f4b7053"
  },
  {
    "url": "assets/js/50.a60e2f14.js",
    "revision": "0b3719f7fac21b5f71938b5d3529e6b3"
  },
  {
    "url": "assets/js/51.900a066a.js",
    "revision": "41077cb524b31aad20b94693a96a5572"
  },
  {
    "url": "assets/js/52.300e8a0b.js",
    "revision": "ef6b0fd6a5e8de17d35c5dda83f500fc"
  },
  {
    "url": "assets/js/53.76f68176.js",
    "revision": "4e77356a3a7c1cb80e83e3fc9dccab3f"
  },
  {
    "url": "assets/js/54.04397316.js",
    "revision": "1b5309a32e0f3dba344629b6f75ef956"
  },
  {
    "url": "assets/js/55.75673155.js",
    "revision": "8dc6a03c4d74372934e02fd78788a17b"
  },
  {
    "url": "assets/js/56.82d0f008.js",
    "revision": "5de8ff80cef88e6363f70edbc472e7df"
  },
  {
    "url": "assets/js/57.e4d35fde.js",
    "revision": "ae86e2455c3aed910b88be7c30904e8d"
  },
  {
    "url": "assets/js/58.0fb74581.js",
    "revision": "518057036b1fbc60d19d6f0718f4630a"
  },
  {
    "url": "assets/js/59.4c3776db.js",
    "revision": "cd4c27c7dcbee8be1de982ea516c3b25"
  },
  {
    "url": "assets/js/6.fc06098a.js",
    "revision": "40c4546c0d561121f9bab939ce517238"
  },
  {
    "url": "assets/js/60.f50e224d.js",
    "revision": "ef15b617fd66356222468d7cde2f0351"
  },
  {
    "url": "assets/js/61.37de38d8.js",
    "revision": "a536253c2d88c8c95eb8f5dafde95e50"
  },
  {
    "url": "assets/js/62.b723b7c0.js",
    "revision": "53d7b87b364ef33434a8433f94267df2"
  },
  {
    "url": "assets/js/63.95fe8fa4.js",
    "revision": "6470a027f4b2779b8d5aeebfdb6b2721"
  },
  {
    "url": "assets/js/64.405d9bd5.js",
    "revision": "e1531d281bb85606f8cb0342862206b8"
  },
  {
    "url": "assets/js/65.75c2a799.js",
    "revision": "bfb017b717531c687848e29e1a0c8d52"
  },
  {
    "url": "assets/js/66.4a707cb8.js",
    "revision": "f2f9deca3ebdd1d6dff9953f452fa040"
  },
  {
    "url": "assets/js/67.21de44f4.js",
    "revision": "b80ddd13c821bbf1fce1e3ad4014ac6e"
  },
  {
    "url": "assets/js/68.5408515d.js",
    "revision": "38403c0d90590fb500aeadfc8385de1e"
  },
  {
    "url": "assets/js/69.e443b351.js",
    "revision": "74b0ac3496f0d9014635bb5b2ec57d90"
  },
  {
    "url": "assets/js/7.aba7e9e3.js",
    "revision": "ec58ffaae6bcb0592a650b3d5ccc4989"
  },
  {
    "url": "assets/js/70.4d2ccca3.js",
    "revision": "48e05c30c8b52842e5f4f7bbf920f27a"
  },
  {
    "url": "assets/js/71.8208ee78.js",
    "revision": "e17ca2cc56cd7b476594b89f0c085037"
  },
  {
    "url": "assets/js/72.d2234185.js",
    "revision": "e86ffa57395f66d348585a826ca0e57d"
  },
  {
    "url": "assets/js/73.c7b49f40.js",
    "revision": "39347bf16480be2a72b0c74c34fd5eca"
  },
  {
    "url": "assets/js/74.24730200.js",
    "revision": "16906fd7af8de2fabe33b1fb045e1bf3"
  },
  {
    "url": "assets/js/75.7c500590.js",
    "revision": "d9b33afd83ce15ada5bea5f166f3c23f"
  },
  {
    "url": "assets/js/76.4b18e8b0.js",
    "revision": "23af75c042f6fb0511bc9a578e3d3820"
  },
  {
    "url": "assets/js/77.0dd9f3bf.js",
    "revision": "7ac4026eb9c4351bc4d5033765be3cc1"
  },
  {
    "url": "assets/js/78.67da02fd.js",
    "revision": "6bc9e0f26066fb7429b40680fbab717e"
  },
  {
    "url": "assets/js/79.458c4197.js",
    "revision": "8cf0f96e6be600da7fa6f42769e5893a"
  },
  {
    "url": "assets/js/8.889bc0f1.js",
    "revision": "29642f52b0c1c732021596263432c3e8"
  },
  {
    "url": "assets/js/9.b97d0e6f.js",
    "revision": "7450f9fa9e291d370f87788cc533e66a"
  },
  {
    "url": "assets/js/app.f7de9bec.js",
    "revision": "cad2e70061a0f97571266e8981f23e48"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "68534e28264dcf6b52b872d641a957c0"
  },
  {
    "url": "cs/bash.html",
    "revision": "cc8cd43bd8fed64b6ca4b8eb6accae22"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "587fdbab56d69788462155858c655d96"
  },
  {
    "url": "cs/cmake.html",
    "revision": "248b336788fb788cd2feafb6687733f9"
  },
  {
    "url": "cs/compilation.html",
    "revision": "6cc77424a808bf5d6a065fb309db3707"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "ab95ce220ba8daa527dee837a9a7a4cb"
  },
  {
    "url": "cs/git.html",
    "revision": "6524f5bfbe2b28d6deba663461db4184"
  },
  {
    "url": "cs/index.html",
    "revision": "32e67127fe43c3ac7e130512b987d739"
  },
  {
    "url": "cs/keras.html",
    "revision": "a88d649b458e32d7a7f294a1a9254cea"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "1426b65c60c115ec72ea1e4e3450ebda"
  },
  {
    "url": "cs/lwip.html",
    "revision": "c7dc63faafca3ed8857e8874900965df"
  },
  {
    "url": "cs/scala.html",
    "revision": "75de9898e4c260bbb1dfbd85df94dff5"
  },
  {
    "url": "ee/about.html",
    "revision": "be162be0c36302dcdada03f5e7e5856c"
  },
  {
    "url": "ee/chisel.html",
    "revision": "60b0bb3e31c4a87efcf45a2d9d1ecc63"
  },
  {
    "url": "ee/esp32.html",
    "revision": "93a610f8a61ed7cc88c3fe9684791081"
  },
  {
    "url": "ee/index.html",
    "revision": "a05238d881271539130ac5add315c3d3"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "eb424666deb8099b8fdee16e6981123e"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "0fe923a3cb8a53ce48d6d5f62eb04a09"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "bf88fd033758f9006ab960477daa0e68"
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
    "revision": "3bc45d3e316e7509b65d3b34e4b34f22"
  },
  {
    "url": "others/about.html",
    "revision": "701b50dbe2033fad17a4d7931032a828"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "010af2ed1040dd28211515eb6a7f5fbc"
  },
  {
    "url": "others/android-studio.html",
    "revision": "fa08e287436c4ab39a09d0dafeebd79a"
  },
  {
    "url": "others/android.html",
    "revision": "7ddd3a217efc09446922b52434d1afda"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "23ddb16b70440e67645c12980ad7aa03"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "a1945705e3ae42e153927c235a08fda1"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "454cf3c92bc710fc9215f1d251066f70"
  },
  {
    "url": "others/css.html",
    "revision": "a758110f9e9badc2e2fb937473794b6e"
  },
  {
    "url": "others/docker.html",
    "revision": "b55c8c4a7cf0ce93c099ca713ebd1b54"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "4edd352414681bb82b53293d25f6d03f"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "ff34c732d2c7451013073a96d7f6c19c"
  },
  {
    "url": "others/english-writting.html",
    "revision": "fac605194b5e6ea74b6ead3cccc7ae9f"
  },
  {
    "url": "others/freertos.html",
    "revision": "184b9db3f577dfcf7e2cffbf0cc74bbd"
  },
  {
    "url": "others/gns3.html",
    "revision": "06d86e40aaf7d9a2740bcdee9e087a96"
  },
  {
    "url": "others/gps.html",
    "revision": "e4c2d92d2dabeca1538bc291cf806431"
  },
  {
    "url": "others/html5.html",
    "revision": "7e82f638e2d540dabf6d722f1090a22b"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "864f1f04937a275bc4015f2469baa484"
  },
  {
    "url": "others/index.html",
    "revision": "f896acfbe54ef033c91d9e366177427d"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "04c41a962885ee9f3311e2c6aacb30f3"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "d019ed202d00861f7c41a9a967faa719"
  },
  {
    "url": "others/javascript.html",
    "revision": "125f21647f3c1b334c65091e485eba0a"
  },
  {
    "url": "others/json.html",
    "revision": "b8b4ab49e71c23a409c773a6d0988e66"
  },
  {
    "url": "others/latex.html",
    "revision": "abd5fa8a4d61a3fbf29178b4212c7e7e"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "051519b1392acaea0a2cad78f88f6089"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "5de0eb1465248b8461200d7b195a0398"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "b403babf224b0c731fd5d2c8b0afd395"
  },
  {
    "url": "others/markdown.html",
    "revision": "2d74095d0764960ef0d98f88663fa775"
  },
  {
    "url": "others/matlab.html",
    "revision": "273aeb872ed71834707c81f4494c4ef4"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "317012d2aba7bae1f2231c57ac161dd8"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "a5fd59ab1fdd44a398dd27e8eb0c95d7"
  },
  {
    "url": "others/network-security.html",
    "revision": "0c84096fd203a9278101243b5245c785"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "b495fe71d55faf3fb0bc1823b7419d0a"
  },
  {
    "url": "others/oral_english.html",
    "revision": "ccaad49130cd7511201203e3a4b9fbf0"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "69b120f25631b20be2b232e3716e5ba4"
  },
  {
    "url": "others/poe.html",
    "revision": "b213652d791cc963132d5da49495484e"
  },
  {
    "url": "others/pyside2.html",
    "revision": "9f8d9f1c57f9bd3be10dafe96f2dd3ff"
  },
  {
    "url": "others/python-socket.html",
    "revision": "0ca90a765e37631a5cf4617b354e8911"
  },
  {
    "url": "others/python.html",
    "revision": "771a80c165d8e2a83fa4aa969b4fbc4f"
  },
  {
    "url": "others/q-learning.html",
    "revision": "250496110c8919988cca6cdd9059b212"
  },
  {
    "url": "others/qr-code.html",
    "revision": "a603e83b3fe2e96fbe80c7c9bcd918da"
  },
  {
    "url": "others/qt4.html",
    "revision": "f3d2b51f85ff5fb206d6f423e9c98455"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "e99a1e9f15d1fc2ad71f2943e2c7e5a8"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "f59b8b61b97a1bc567e17ede7dfb67c1"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "cfc8d13e00543411082ec5561929e3cb"
  },
  {
    "url": "others/sd-card.html",
    "revision": "00dd86a63d25ed0a8637b5411166f9f1"
  },
  {
    "url": "others/sdn.html",
    "revision": "9cd385f5c1d70554aaa9220fe4e1b7a6"
  },
  {
    "url": "others/star-uml.html",
    "revision": "4e00f548c2b7f6c052efc1337fb02f53"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "8700566a21884ebbe0cc62638739bce5"
  },
  {
    "url": "others/verilog.html",
    "revision": "1272fddb72e09f51227396249baad070"
  },
  {
    "url": "others/vue.html",
    "revision": "11e1557a6515780ea5fc9f4bd7103b82"
  },
  {
    "url": "others/w5500.html",
    "revision": "552bd8b3b83669bb6de951ea9de6b437"
  },
  {
    "url": "others/w7500.html",
    "revision": "ea847d5935e9b76699f745742839b2af"
  },
  {
    "url": "resume.html",
    "revision": "e25b56afd43880d6da416d3c4192ddff"
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
