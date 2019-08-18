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
    "revision": "d61fba97efd41ceb68c6aba8b02e2d93"
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
    "url": "assets/js/10.74391138.js",
    "revision": "77a225d784270da594ccb3e1e3eb84a3"
  },
  {
    "url": "assets/js/11.48804626.js",
    "revision": "2f6396bee7591f42bfd74bd3fea1cbb7"
  },
  {
    "url": "assets/js/12.877b35e1.js",
    "revision": "53bc97036008d6943031c9f77fac2e72"
  },
  {
    "url": "assets/js/13.fe5ddfec.js",
    "revision": "3b773fe2ad69adb475c9d58e7784dd42"
  },
  {
    "url": "assets/js/14.a03f9d3d.js",
    "revision": "d33c550ed77dd593c50cb652850192ef"
  },
  {
    "url": "assets/js/15.344e9980.js",
    "revision": "e98ff3b1a82f1d290c05e29cf95ade9a"
  },
  {
    "url": "assets/js/16.55625ccc.js",
    "revision": "4b1e8b338118295fa716b5fa2ab734bf"
  },
  {
    "url": "assets/js/17.47583d8f.js",
    "revision": "27616f0a8d9c3e4b1f209876d24a86ca"
  },
  {
    "url": "assets/js/18.54b1f790.js",
    "revision": "e1a95a5b31aa667d7aa05d88dc5a226b"
  },
  {
    "url": "assets/js/19.775cd050.js",
    "revision": "5686a2edaf5ace428caee05923f8b965"
  },
  {
    "url": "assets/js/2.a611591d.js",
    "revision": "5ac261b9f6bb3dc4fcab2d1c85e80948"
  },
  {
    "url": "assets/js/20.b18d6cab.js",
    "revision": "69bddbaf0554d79513ff710ff1377184"
  },
  {
    "url": "assets/js/21.5d9ddb0f.js",
    "revision": "b49c5ea51aff5b88731a7e88fa3e4f22"
  },
  {
    "url": "assets/js/22.1dc0fb76.js",
    "revision": "9dedf94f7b01a473b69f5596b8edc79d"
  },
  {
    "url": "assets/js/23.09a77f8b.js",
    "revision": "27c404a84cab7044096e62c8406c18a3"
  },
  {
    "url": "assets/js/24.562e7885.js",
    "revision": "f27e1cabf498fc32dc07fdef7ada3b6c"
  },
  {
    "url": "assets/js/25.e912e0c2.js",
    "revision": "f89817c659d3228fa46a7dd067440149"
  },
  {
    "url": "assets/js/26.dde38e8f.js",
    "revision": "160f3825d1d610d55d71b3083ddc2529"
  },
  {
    "url": "assets/js/27.51813976.js",
    "revision": "ad3112a8365711b8343a5e2eef535f8e"
  },
  {
    "url": "assets/js/28.a4685baf.js",
    "revision": "db1cceeda7d45fc443d87d61db252670"
  },
  {
    "url": "assets/js/29.4e07bda6.js",
    "revision": "4ef60ebce57e3a1f1d9b7aed4d5f8ffd"
  },
  {
    "url": "assets/js/3.e492fc2e.js",
    "revision": "7b4381978515094d08104a9f1013873c"
  },
  {
    "url": "assets/js/30.daab13f8.js",
    "revision": "7f275ef1a2501d39b41218c78a09a42b"
  },
  {
    "url": "assets/js/31.8317c8bd.js",
    "revision": "1a1a725607ac2b7b0709e88eae5c1f85"
  },
  {
    "url": "assets/js/32.c0f3a00c.js",
    "revision": "db272402965911c3449ed65edc636a94"
  },
  {
    "url": "assets/js/33.45b0387c.js",
    "revision": "9e12f2adc02dfd54814728fcae0630d7"
  },
  {
    "url": "assets/js/34.304831b7.js",
    "revision": "ec474cc3e1a35464f59d654b9809c7cf"
  },
  {
    "url": "assets/js/35.6586484b.js",
    "revision": "6ca7872749b81b31b074e51b6b9768a8"
  },
  {
    "url": "assets/js/36.403a19fc.js",
    "revision": "8de480fe6c535db3327c8f484a4bcdae"
  },
  {
    "url": "assets/js/37.831cd7bc.js",
    "revision": "33de50f9652322b1ee28f2711706fe13"
  },
  {
    "url": "assets/js/38.073c8393.js",
    "revision": "30b3f8139b978d4e36722daee5647ad9"
  },
  {
    "url": "assets/js/39.c0224f3a.js",
    "revision": "722c275ffb04123a1a6ea3f06e8ee7a5"
  },
  {
    "url": "assets/js/4.25038618.js",
    "revision": "41f644a547589e527de8ac58dd98b850"
  },
  {
    "url": "assets/js/40.da48a6d8.js",
    "revision": "1cf80c71e1eba01027e4cc7041d7157a"
  },
  {
    "url": "assets/js/41.e4308a59.js",
    "revision": "d572a4448099a0012d3b44b24221e464"
  },
  {
    "url": "assets/js/42.a7008366.js",
    "revision": "e43f49fde2efcb633f58c387ec6a6bfb"
  },
  {
    "url": "assets/js/43.865fff88.js",
    "revision": "fc627f23b56078538d57b0b027680f73"
  },
  {
    "url": "assets/js/44.e0994906.js",
    "revision": "917c731c9efa9ffd3183c19cec85fead"
  },
  {
    "url": "assets/js/45.136d3646.js",
    "revision": "acb4f82ec0c1b5f42b87365eace1db83"
  },
  {
    "url": "assets/js/46.e86ecc5b.js",
    "revision": "972bd424e2b510fcebbdcc525eaedac8"
  },
  {
    "url": "assets/js/47.8349d4eb.js",
    "revision": "f3a995d6ed1def5d531c865ae5a54c3c"
  },
  {
    "url": "assets/js/48.f674ef6b.js",
    "revision": "b1bf3841a24c5c141a4b545e383cdd89"
  },
  {
    "url": "assets/js/49.ec1966c1.js",
    "revision": "2d2ff76590726f8e1168f718ff2c566f"
  },
  {
    "url": "assets/js/5.bf242d6b.js",
    "revision": "1b162dc8565c544f57555abfa9dd5a96"
  },
  {
    "url": "assets/js/50.b99a6fd3.js",
    "revision": "fe33e3b3c3d9bdafb2706acf8f15b102"
  },
  {
    "url": "assets/js/51.55d34770.js",
    "revision": "a39dd14766c60b6fc5d414e663d46a55"
  },
  {
    "url": "assets/js/52.529e2f40.js",
    "revision": "6876f63bbe6cb5df85f8604ce819da12"
  },
  {
    "url": "assets/js/53.bd432d18.js",
    "revision": "1742a242f6c57909e36fb76df47ca651"
  },
  {
    "url": "assets/js/54.72238e7e.js",
    "revision": "c81673181a9b6a71e191e8aece41e518"
  },
  {
    "url": "assets/js/55.3f1dc9ac.js",
    "revision": "04f21527c74a461a87d354d310249ceb"
  },
  {
    "url": "assets/js/56.300ca294.js",
    "revision": "fd93e854bfa73a9e3f6740323cf43fbf"
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
    "url": "assets/js/59.e283708a.js",
    "revision": "629e1a76868ac5d11655328bd13bda65"
  },
  {
    "url": "assets/js/6.46b480f0.js",
    "revision": "96eeb28882def201a757b7a3b08e4222"
  },
  {
    "url": "assets/js/60.34e5c392.js",
    "revision": "8fbf20e6a5ffe4b3508814566a55d99c"
  },
  {
    "url": "assets/js/61.3bfc2307.js",
    "revision": "944935ea4e05072b6070c8825e54f848"
  },
  {
    "url": "assets/js/62.8ecf480e.js",
    "revision": "28ff44eb51de4f82a56229c07c61abcd"
  },
  {
    "url": "assets/js/63.e66334cb.js",
    "revision": "dd4965e1e1fa99ce5359b91dc01fcea0"
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
    "url": "assets/js/66.c4f75b75.js",
    "revision": "04047eab66600e9fe90aea0f25581469"
  },
  {
    "url": "assets/js/67.1a65aef5.js",
    "revision": "839ad6d1937a956f6ebcd4f7cdccf916"
  },
  {
    "url": "assets/js/68.ef01f9ad.js",
    "revision": "928fcd2b70131c0a50b5c23959ea919a"
  },
  {
    "url": "assets/js/69.7f69f374.js",
    "revision": "d68ba92cf8fdf47b418c15abeb67c7b0"
  },
  {
    "url": "assets/js/7.124f1282.js",
    "revision": "ce383f01cc9f802d66823ae05ebfd549"
  },
  {
    "url": "assets/js/70.3eea05f2.js",
    "revision": "923c19871ad86b2638447852b0993840"
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
    "url": "assets/js/74.3806c78f.js",
    "revision": "54d49c172db3bf8a58eca4432401411f"
  },
  {
    "url": "assets/js/75.047bc98a.js",
    "revision": "7f380bf2e396260998a53b6b5c935d36"
  },
  {
    "url": "assets/js/76.478d08b1.js",
    "revision": "8a841665a2aad43fc89f567b2a6642b6"
  },
  {
    "url": "assets/js/77.41eee51c.js",
    "revision": "1f63ff4271a69714a582e5bb14885f87"
  },
  {
    "url": "assets/js/78.88b1a052.js",
    "revision": "894be6e650db090432867ed027f070bf"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.1683e464.js",
    "revision": "96cce7c3599421920f20cac0b0ec3605"
  },
  {
    "url": "assets/js/9.81f7e185.js",
    "revision": "f5b2fa826ef39d7fd05f116c01dc9003"
  },
  {
    "url": "assets/js/app.2376a4c0.js",
    "revision": "a0482d3b907e19d32a41eb66d4df5d0c"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "845f3f7043ae4feb4a4aa75964a225e2"
  },
  {
    "url": "cs/bash.html",
    "revision": "accbc7137cf92f8d967e8436b8c227b7"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "c7ca127b4db4213f677ae9cfe7d5188c"
  },
  {
    "url": "cs/cmake.html",
    "revision": "7188fd744bd57a91baece0fcb3c15880"
  },
  {
    "url": "cs/compilation.html",
    "revision": "e5dd1941b41fc11eb90d44f1c05c18f4"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "aeffa0441bc34aaf7c7168f439d3f52b"
  },
  {
    "url": "cs/git.html",
    "revision": "1d90343a4dbc9aaf5ee6b114ca9e0c95"
  },
  {
    "url": "cs/index.html",
    "revision": "6be949f4f971f3448a2fccb4920df3ab"
  },
  {
    "url": "cs/keras.html",
    "revision": "bf751429a1091ee66a8fdda2e5919cab"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a2c3278c4adf01711ee9eb335e63c7fd"
  },
  {
    "url": "cs/lwip.html",
    "revision": "4a86b940d6cef6720021b1388afb3450"
  },
  {
    "url": "cs/scala.html",
    "revision": "b46548df94d26037ad985b99195248fa"
  },
  {
    "url": "ee/about.html",
    "revision": "b478033fc23a7f546eb60493616872d2"
  },
  {
    "url": "ee/chisel.html",
    "revision": "b924f72087e34a1086c9adc7f598df63"
  },
  {
    "url": "ee/esp32.html",
    "revision": "ef1f3e2d97530717ee42dfab9b616d32"
  },
  {
    "url": "ee/index.html",
    "revision": "c2208e42591a982bb2d72c669dea1f69"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "816395fce4cff06926b6cf7eff548d0e"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "233ed54de62680c7f35c983678020eb5"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "e4bfb081eaba34bd3525895320f7a561"
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
    "revision": "aeccb6fcf978515f88f92e3e8f9ad370"
  },
  {
    "url": "others/about.html",
    "revision": "e760292ea4dda71daeba6166c7382fbc"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "beb9dffe782b330a39ab71064c9a6859"
  },
  {
    "url": "others/android-studio.html",
    "revision": "6046cf520ba340f6631fd74cf3bcb51f"
  },
  {
    "url": "others/android.html",
    "revision": "06e89bb8a5c629d37a830226a2b02ab3"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "764f242a67a1a767150669234563690e"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "94d454b29605beda4c29935fb22c4696"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "aca8643deee3983e187b9b58a4eaa358"
  },
  {
    "url": "others/css.html",
    "revision": "cda18b9fe84b9b766272951fdea846f6"
  },
  {
    "url": "others/docker.html",
    "revision": "9553dcfe3ed12b29652b9c3f3d14fc09"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "eb52f327e9f26bbcc087068ec8f6e1d5"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "d8176fd4b6cc55b1186045f049fb637a"
  },
  {
    "url": "others/english-writting.html",
    "revision": "b0f521425035d688ce33881a57ad03a9"
  },
  {
    "url": "others/freertos.html",
    "revision": "8e662221b00bad5804ab9853359ce3a6"
  },
  {
    "url": "others/gns3.html",
    "revision": "26b2c2399fdb5574c522a162e5e6da74"
  },
  {
    "url": "others/gps.html",
    "revision": "5015a9172750e4cff4ec9743edfdfe14"
  },
  {
    "url": "others/html5.html",
    "revision": "5272a7f2cfd0d5defe45018019b21769"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "c5bf071a7cbc84f926900a0d4adbb528"
  },
  {
    "url": "others/index.html",
    "revision": "dc21fd4f25734294887b31125e1b6492"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "1b897db349d192e9c458babd795b43cb"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "0f4d9da76c662fded2d3623cdebc3d10"
  },
  {
    "url": "others/javascript.html",
    "revision": "12d715a302144f54b459a2bb025285a2"
  },
  {
    "url": "others/json.html",
    "revision": "ca2b6f89bf5407369a3b4b0dda79c38e"
  },
  {
    "url": "others/latex.html",
    "revision": "e677efa9e75ac73e94398da2eaad1eff"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "f2971b22faaeccdc4dcbb74913e1e035"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "4b6e6c01aeea8ed4a33cb49646b8c334"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "7c2a32223312289b39be639cbfc94349"
  },
  {
    "url": "others/markdown.html",
    "revision": "987162bb7c5a56e0a62d248c4b0f8a27"
  },
  {
    "url": "others/matlab.html",
    "revision": "cd29434e8f1ccb1ec325b667372956b8"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "d9e47091ed0a187c570a60d96563fa56"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "0113f30f2a0e763a71627e5c79507563"
  },
  {
    "url": "others/network-security.html",
    "revision": "ab755eab2090fc3d34850fa362634f26"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "75417c7ed0cd3c20410f06f9fd92dc55"
  },
  {
    "url": "others/oral_english.html",
    "revision": "78413b36f04e5cd05ec5e5e3a47b8980"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "20984bc6adc76d38fdacc228cdc2d133"
  },
  {
    "url": "others/poe.html",
    "revision": "68d43817eeca9ffe411cc96048db6e33"
  },
  {
    "url": "others/pyside2.html",
    "revision": "bd201635a75969572078cc53c80a4ed6"
  },
  {
    "url": "others/python-socket.html",
    "revision": "4f91b13885a7891e28776d55d9df4173"
  },
  {
    "url": "others/python.html",
    "revision": "6bb4e37cbb954a643d2fa315789d7bb9"
  },
  {
    "url": "others/q-learning.html",
    "revision": "7376c2c824bc56a22101a3c39fc81bb9"
  },
  {
    "url": "others/qr-code.html",
    "revision": "cd12bc8f60c8d5425433f86bc72ac185"
  },
  {
    "url": "others/qt4.html",
    "revision": "99e7013be4a2e291a57411b92dfd4aea"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "ee39d6625c811430f6bdb4f3b3393e14"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "066ce68bb64c88612b8e3747ac84d0b9"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "b640927b7d87cc62c7bef003929de210"
  },
  {
    "url": "others/sd-card.html",
    "revision": "9fd1c58f99cdf340aa1008308652a19f"
  },
  {
    "url": "others/sdn.html",
    "revision": "9a3f9d74852b7b0f1c8cde912a1d9846"
  },
  {
    "url": "others/star-uml.html",
    "revision": "dfd8f7b8f69e94f841a5c388812914af"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "22491410460718063751970eaa3433f0"
  },
  {
    "url": "others/verilog.html",
    "revision": "77f200aea42d2c8a11a5a64e559768bc"
  },
  {
    "url": "others/vue.html",
    "revision": "77c10eb865dfffb30ce335d4e8577186"
  },
  {
    "url": "others/w5500.html",
    "revision": "a27b0932bbdc0481316d5741adb30df0"
  },
  {
    "url": "others/w7500.html",
    "revision": "255f28955b27ef9a327aff0129c43886"
  },
  {
    "url": "resume.html",
    "revision": "6561c5615b249a4b02d1e3e4c70f9119"
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
