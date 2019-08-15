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
    "revision": "6011e855a2be2f0abcbcc0bcc3902073"
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
    "url": "assets/img/esp32_on_chip_address_table.24c64bff.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
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
    "url": "assets/js/10.c548aab9.js",
    "revision": "1f2539eb6b4b898021f10cdee5c9e6db"
  },
  {
    "url": "assets/js/11.85e31f21.js",
    "revision": "f18fa9dca006c0d2a55289f63e88e26b"
  },
  {
    "url": "assets/js/12.f8d86511.js",
    "revision": "954926d72d7a1e85411b251d890a92c8"
  },
  {
    "url": "assets/js/13.d0b7d26b.js",
    "revision": "d6f0489a6547a2e98cc3eae763f29b0b"
  },
  {
    "url": "assets/js/14.7bfa9ad0.js",
    "revision": "831f4f609fa7e0b175d04b08066251c2"
  },
  {
    "url": "assets/js/15.d52a8cb5.js",
    "revision": "37c03fb1c67368ebbf5f0614a270a9c7"
  },
  {
    "url": "assets/js/16.3756da46.js",
    "revision": "2ce78c8bcaa2137faf2332cbe7ed6e60"
  },
  {
    "url": "assets/js/17.988c7f53.js",
    "revision": "11e8939be0f6c079549637dd97ff8d09"
  },
  {
    "url": "assets/js/18.63c68894.js",
    "revision": "162a409fb956cc84eb92e229b79b2cfe"
  },
  {
    "url": "assets/js/19.2519638b.js",
    "revision": "8618dfab002297c92690896e4bb9d1b3"
  },
  {
    "url": "assets/js/2.9b1100c9.js",
    "revision": "30241aed1982ddbda3388a157a41efec"
  },
  {
    "url": "assets/js/20.d4f21e11.js",
    "revision": "1e33116a5c6e71e4961edf7e7d823752"
  },
  {
    "url": "assets/js/21.530c7566.js",
    "revision": "79fb90c27ee3e6c1c2b9bf602a913cd2"
  },
  {
    "url": "assets/js/22.40fc68da.js",
    "revision": "60fcb601d1e4fa26316f7e9e86113cef"
  },
  {
    "url": "assets/js/23.3e0c5dd6.js",
    "revision": "50627c601233605b1a717cbcf9942623"
  },
  {
    "url": "assets/js/24.7831b92c.js",
    "revision": "dc454c216320af1750de872f12baa8e4"
  },
  {
    "url": "assets/js/25.ebca1d8f.js",
    "revision": "ac81bb4dd51935b633f34e064800ede0"
  },
  {
    "url": "assets/js/26.576cfa87.js",
    "revision": "520e63ec05794d8fab171f50a02c5b8f"
  },
  {
    "url": "assets/js/27.4c849738.js",
    "revision": "8daa3900dda8742c19110d13c2eb2358"
  },
  {
    "url": "assets/js/28.2ee22878.js",
    "revision": "3c1bde547516fd5d8121b449123cf8ea"
  },
  {
    "url": "assets/js/29.c8ce00e2.js",
    "revision": "584b45ee4825563706399e0aaec4e710"
  },
  {
    "url": "assets/js/3.9c46dfe0.js",
    "revision": "fbb9550169dd222a2d9b8ed2bda0da88"
  },
  {
    "url": "assets/js/30.8ef9f984.js",
    "revision": "49a51c9cadb026796362f64c8d999d24"
  },
  {
    "url": "assets/js/31.6ae08234.js",
    "revision": "7b7ded35af945a755480248120f23bdb"
  },
  {
    "url": "assets/js/32.d6e03d3a.js",
    "revision": "ee4f6dcdde9f7d9692f4d7c887f1e373"
  },
  {
    "url": "assets/js/33.7b93f421.js",
    "revision": "f4a31014892fbd01aff11907a752071b"
  },
  {
    "url": "assets/js/34.5e2ba0fe.js",
    "revision": "ec53d58772a538ff24d6656d57634ee7"
  },
  {
    "url": "assets/js/35.46b5c274.js",
    "revision": "6bd856c922d330701ef4378f9d9cb436"
  },
  {
    "url": "assets/js/36.9b113772.js",
    "revision": "7f23fb14d7805ab747bd382bcf207377"
  },
  {
    "url": "assets/js/37.ae1dcf74.js",
    "revision": "ed9321b18854d1394be16acd15b20bc2"
  },
  {
    "url": "assets/js/38.2ec81ee4.js",
    "revision": "712a0aeb0edcbb9f64d0e7699af5aff4"
  },
  {
    "url": "assets/js/39.aa7ad032.js",
    "revision": "3b25c7b2d7d97d0b59ff11cab261a70d"
  },
  {
    "url": "assets/js/4.7eebe499.js",
    "revision": "a197c69f8026141c050d61982e0f7d0e"
  },
  {
    "url": "assets/js/40.2292b98e.js",
    "revision": "116e916a8f18d8411423d284fcc47c56"
  },
  {
    "url": "assets/js/41.14581f83.js",
    "revision": "551306cf511bd73895694611ece98d59"
  },
  {
    "url": "assets/js/42.9340d0a0.js",
    "revision": "101007c928c91c4206c1be69db9727e6"
  },
  {
    "url": "assets/js/43.fdd9dae5.js",
    "revision": "d3379d39eae1915fafb38a8234394a79"
  },
  {
    "url": "assets/js/44.f09bcd55.js",
    "revision": "bfc0ed96819f4a124906395efd63cf22"
  },
  {
    "url": "assets/js/45.2c7a04e3.js",
    "revision": "67e7ae8a7481e49efac0edac03918028"
  },
  {
    "url": "assets/js/46.63e64e50.js",
    "revision": "14889c588074eca74d056aaa942ed803"
  },
  {
    "url": "assets/js/47.8db9fa45.js",
    "revision": "1b1735650c0ceca3730f863fe7980538"
  },
  {
    "url": "assets/js/48.32fa6a4c.js",
    "revision": "c70369dd78d29b7930bcb1156dee1186"
  },
  {
    "url": "assets/js/49.3690a7d3.js",
    "revision": "04012e443fecb5e0ec235d6a9b8e9b50"
  },
  {
    "url": "assets/js/5.d7be07cc.js",
    "revision": "389669414f0e143f802308ac0a78c5c7"
  },
  {
    "url": "assets/js/50.9cddfc09.js",
    "revision": "d4af457bfb4cdd4eccb77dcbeace0bb7"
  },
  {
    "url": "assets/js/51.4e4c8b49.js",
    "revision": "a82103bcd24061ee19d3d402de4bea05"
  },
  {
    "url": "assets/js/52.606ffef8.js",
    "revision": "51ac1dc1afa096df206e41203b4b52ea"
  },
  {
    "url": "assets/js/53.436b651a.js",
    "revision": "54e12848723466cb0f0fd04f95636e29"
  },
  {
    "url": "assets/js/54.998747f7.js",
    "revision": "454c398dfcd043f51af05dda241201fa"
  },
  {
    "url": "assets/js/55.7fa63d95.js",
    "revision": "195fd5ced799f8919d5a32de554dff5d"
  },
  {
    "url": "assets/js/56.d14131a9.js",
    "revision": "ba3b7fc816a59f6a185b74f95d424643"
  },
  {
    "url": "assets/js/57.25581481.js",
    "revision": "b8a378f7e0812ecf9835fbb79c11a014"
  },
  {
    "url": "assets/js/58.f4f17102.js",
    "revision": "c398b3670d7347618f4f2c652ef42165"
  },
  {
    "url": "assets/js/59.e51209c0.js",
    "revision": "e6515998b9f531f1eeef695b864f8964"
  },
  {
    "url": "assets/js/6.f71cac2d.js",
    "revision": "c50da08ce1fa0a5324f69bb97deb8c61"
  },
  {
    "url": "assets/js/60.b3a422f5.js",
    "revision": "852333391899d536513fd21436d2e409"
  },
  {
    "url": "assets/js/61.3e5e3450.js",
    "revision": "a2d28f7cea1d75e48e03683fbaccdbd1"
  },
  {
    "url": "assets/js/62.a381aaba.js",
    "revision": "fe13d04a71636c1711af52a51622b4c1"
  },
  {
    "url": "assets/js/63.c75e3b39.js",
    "revision": "9d6800f682e2d9d6eb4a2c6a4d92a6b3"
  },
  {
    "url": "assets/js/64.b3ee55e4.js",
    "revision": "b79b55b6815e5732870f57095371a100"
  },
  {
    "url": "assets/js/65.c488790b.js",
    "revision": "1b357b04f5b9ee6992e5cb3439ead1f5"
  },
  {
    "url": "assets/js/66.0519faf0.js",
    "revision": "ff2f95330f80663f81ea13c3666e894f"
  },
  {
    "url": "assets/js/67.0405a265.js",
    "revision": "327813135e23f98b13fa98c99677015f"
  },
  {
    "url": "assets/js/68.23a0f789.js",
    "revision": "e687952262f9ac90a3a88735e2367858"
  },
  {
    "url": "assets/js/69.e1fa5db7.js",
    "revision": "34010c9a33099a82f24c720f6a9d2677"
  },
  {
    "url": "assets/js/7.9a9bf61a.js",
    "revision": "6e9106c36f3a36a24fec70aff7ffb048"
  },
  {
    "url": "assets/js/70.feba29a0.js",
    "revision": "f6e42a9a2a6b652fa85c37f069d7e32b"
  },
  {
    "url": "assets/js/71.679a5c59.js",
    "revision": "f054d283d071b770a920f451252180c6"
  },
  {
    "url": "assets/js/72.3b3ce9f2.js",
    "revision": "4d923b01c9ea7c13de832f2da147952d"
  },
  {
    "url": "assets/js/73.38e1c11b.js",
    "revision": "880c333f918eee2805038ec7cb5b4dff"
  },
  {
    "url": "assets/js/74.94a7d6cc.js",
    "revision": "a97a9c71ea45b8286f13e6ddc54fc30d"
  },
  {
    "url": "assets/js/75.b92b30cd.js",
    "revision": "09bde3e4a1772a1f063b1322e25661df"
  },
  {
    "url": "assets/js/76.9d7634de.js",
    "revision": "0e4ae4eafc5f4e013668429fc0188f99"
  },
  {
    "url": "assets/js/77.f9579fa6.js",
    "revision": "b495fd37e6fd100a3fdae5efaeed3d49"
  },
  {
    "url": "assets/js/78.a535a1d6.js",
    "revision": "b0c00f22252e42a0a25e662d3b4ed25e"
  },
  {
    "url": "assets/js/79.458c4197.js",
    "revision": "8cf0f96e6be600da7fa6f42769e5893a"
  },
  {
    "url": "assets/js/8.416b2c78.js",
    "revision": "9c5b878f0560aacc417b7c417aa598a7"
  },
  {
    "url": "assets/js/9.fe1f1e0d.js",
    "revision": "2d39b08ab9050d3f480830e6ee6bed7d"
  },
  {
    "url": "assets/js/app.84edebe7.js",
    "revision": "9e90e1ac50df9501dbb66efcb9291522"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "3de64a71a282b50673cea079f4ce45fe"
  },
  {
    "url": "cs/bash.html",
    "revision": "2cbd5ddb526e8fa135b5a26b361387d5"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "7b18e2dd29d29a1c0a87571fc08253cc"
  },
  {
    "url": "cs/cmake.html",
    "revision": "29f5217d5456c064eb3bdd710ee7f502"
  },
  {
    "url": "cs/compilation.html",
    "revision": "2f70421f6209c6ef1bebcd14ea43abb1"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "3ceb6516cc376a1b56ea15be978246bd"
  },
  {
    "url": "cs/git.html",
    "revision": "0257bf35ddf0e1215aa62890050e4b38"
  },
  {
    "url": "cs/index.html",
    "revision": "ec93fa098ab53266a15f16946eb9a4dd"
  },
  {
    "url": "cs/keras.html",
    "revision": "452d528ac9d6c260760b6e079feb4372"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "cd146b2cf5ad2de5272055a9d545ab38"
  },
  {
    "url": "cs/lwip.html",
    "revision": "7f333886ca7af0d251c95c5920b5f2e4"
  },
  {
    "url": "cs/scala.html",
    "revision": "b0599bd7b383742624f986a56bd41c8a"
  },
  {
    "url": "ee/about.html",
    "revision": "8f703aaf8c20ceeea40a352b5104870a"
  },
  {
    "url": "ee/chisel.html",
    "revision": "660c9ced590a469d95aec21e63befa30"
  },
  {
    "url": "ee/esp32.html",
    "revision": "2e55d4586637a11972404400fbc21b97"
  },
  {
    "url": "ee/index.html",
    "revision": "843b9cd4225a8c29dfb666dba9f08638"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "e9bd35ccfd54562204add84ab7fb11eb"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "1018b42518fd24fc4507bab0ff152210"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "6ae4ee0826b35494dc91b450dc3210fa"
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
    "url": "images/ee/esp32/esp32_on_chip_address_table.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
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
    "revision": "b0cb75b1c60c80405ce68ade2d84a219"
  },
  {
    "url": "others/about.html",
    "revision": "1e289efaabb5ccbb14c2dc819aec7024"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "a0304a2b480a8c86605e3aaa269a34ec"
  },
  {
    "url": "others/android-studio.html",
    "revision": "2b1ac3e2170e3bd2410cfd076829838f"
  },
  {
    "url": "others/android.html",
    "revision": "6f3e702da6b97d8eeaa553b03df3f2ed"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "e12c7759803c2e79f83d4f2e04336b44"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "e4c158f7d86ede608487b872ae1fccf0"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "98ddb08bb4b2eaca4435c19067c84dd2"
  },
  {
    "url": "others/css.html",
    "revision": "c93651d2a941be9fb744d339aea9a6a7"
  },
  {
    "url": "others/docker.html",
    "revision": "6f9726849fce51c9265202ae749c349a"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "15a322a0180847bfc2d4fb082c1565fa"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "2515d956e1fa28d70c08977326010f4c"
  },
  {
    "url": "others/english-writting.html",
    "revision": "baa71ba626151734863a90ae051c9230"
  },
  {
    "url": "others/freertos.html",
    "revision": "e9ab95007b81d9a4b441c46c31832e3a"
  },
  {
    "url": "others/gns3.html",
    "revision": "f613a9bad4325017ced4c18ca2036931"
  },
  {
    "url": "others/gps.html",
    "revision": "9744faff1bf56f94c99736888c85e9d5"
  },
  {
    "url": "others/html5.html",
    "revision": "efb64ec4413c16b94098be5017de38ff"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "ab9b8869cbc5253513dde1b44554ad9e"
  },
  {
    "url": "others/index.html",
    "revision": "415a2d4108027a10f345efee8fcab4cb"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "ffd763e83b7acb3faf4ca086288c10b7"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "142e4d6a893c39ae2a5945308ddeb1cb"
  },
  {
    "url": "others/javascript.html",
    "revision": "afe1178a17609ad37863cded501db2e0"
  },
  {
    "url": "others/json.html",
    "revision": "872f1e0aa5617fe6d460a2dbb57958c2"
  },
  {
    "url": "others/latex.html",
    "revision": "39e8de757335c01b32816fafa6503d82"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "c4e262d553c36847277da3fc02275166"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "bddd729d6a4619dc0704b07a96a86dad"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "65daceb78419db3089d6ea404bc885b4"
  },
  {
    "url": "others/markdown.html",
    "revision": "59e5e370e7a03c5bd7b28a7212106210"
  },
  {
    "url": "others/matlab.html",
    "revision": "24711d8bd4f246ecae1ef239436fab3d"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "e8758a48cc62541c6a219352115aaa66"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "d6718aae169d085198ae27da54a2c747"
  },
  {
    "url": "others/network-security.html",
    "revision": "a0c23d3d08bc7d8aecf4e63a5223f452"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "92529b2a807871c6a17a4713018386d8"
  },
  {
    "url": "others/oral_english.html",
    "revision": "ac4eb216c2bc4d913f787ad6fad99737"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "1a82346eacd32ece675c07020cadbe3b"
  },
  {
    "url": "others/poe.html",
    "revision": "600f9fe2d351c726cd345b2fa8701e03"
  },
  {
    "url": "others/pyside2.html",
    "revision": "9f8ff1f9af43a1d78fec26bca7271c3f"
  },
  {
    "url": "others/python-socket.html",
    "revision": "2a25f181069f893127fb0b3cd81b99f3"
  },
  {
    "url": "others/python.html",
    "revision": "4cd2175fdcca96e88ce23ca3099f4a45"
  },
  {
    "url": "others/q-learning.html",
    "revision": "b3388a7d7e73b728e116874a21b72017"
  },
  {
    "url": "others/qr-code.html",
    "revision": "3f2e8a94d1066bd8303367fa2d781cbe"
  },
  {
    "url": "others/qt4.html",
    "revision": "2bae3b78cbd59bd0573af650ea8ab192"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "3454cc5f881f822f0bc7c0c3a537e137"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "69dfcfb22b7b27334d8f5018bd050d89"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "8a9b46a2efaa11ded3cd1c479033bb53"
  },
  {
    "url": "others/sd-card.html",
    "revision": "d71fc4a029e0e5bd121f20f22988db9f"
  },
  {
    "url": "others/sdn.html",
    "revision": "701a81f3ab0f87d144aa04b83ee87136"
  },
  {
    "url": "others/star-uml.html",
    "revision": "6f5f6d47acede9bc12332aaa4d5d88d8"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "6f28d094d565949b1845fae8881e2e7e"
  },
  {
    "url": "others/verilog.html",
    "revision": "16387d9737a67ecd95497b2871ffed92"
  },
  {
    "url": "others/vue.html",
    "revision": "c0946e2c0b395440600a121c2c44ae6f"
  },
  {
    "url": "others/w5500.html",
    "revision": "63e5b6b01e951240c9bc8fddc47511bd"
  },
  {
    "url": "others/w7500.html",
    "revision": "e41d35f1734adf3ba90107827224b693"
  },
  {
    "url": "resume.html",
    "revision": "15a03bc4f0cb3a6230895c31ef03d32e"
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
