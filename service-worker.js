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
    "revision": "1e76f5655592d62bb74b5128dccc962c"
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
    "url": "assets/js/10.7c9794cb.js",
    "revision": "f52be5e2405ce77f56ae8dec3c15206e"
  },
  {
    "url": "assets/js/11.7ac01e0e.js",
    "revision": "a73b1e8efd1c39877179663c6431fa7f"
  },
  {
    "url": "assets/js/12.5bf19773.js",
    "revision": "083bae910470b65aeb243eb277dbca44"
  },
  {
    "url": "assets/js/13.f3b46796.js",
    "revision": "3265cd792cdee272bef39964af208f39"
  },
  {
    "url": "assets/js/14.a1f6ef4b.js",
    "revision": "8395b9c8516013667a35f2fe1f6743ea"
  },
  {
    "url": "assets/js/15.c6d9a0a0.js",
    "revision": "cf39a018b6c55e1f9f865353e0f0851e"
  },
  {
    "url": "assets/js/16.46c50c0a.js",
    "revision": "aa8916ddad86b4ad888c3cbc8dbab1bd"
  },
  {
    "url": "assets/js/17.b923178a.js",
    "revision": "3cb26d64606b021f21dd6609edfa47dd"
  },
  {
    "url": "assets/js/18.3ef01a3a.js",
    "revision": "9ca067dabb9d4550a352de363adc2cae"
  },
  {
    "url": "assets/js/19.ae72a513.js",
    "revision": "a1c582b8afc0a860000fe5e424841808"
  },
  {
    "url": "assets/js/2.f9fceb7b.js",
    "revision": "5c5ef7927c0adfcc9e7af2dae403d535"
  },
  {
    "url": "assets/js/20.b5e05be0.js",
    "revision": "3563867e02605fbde7cd9e8e8b23c1a3"
  },
  {
    "url": "assets/js/21.762b2211.js",
    "revision": "bf6635a470c2483f65efa8ecdd6065eb"
  },
  {
    "url": "assets/js/22.76813830.js",
    "revision": "6796873f132f84a980d0a57f9912edc2"
  },
  {
    "url": "assets/js/23.4d4004f7.js",
    "revision": "9b70ca5eae3c253c73749c8ced8689a7"
  },
  {
    "url": "assets/js/24.32c786a5.js",
    "revision": "5579fe85c3e18562b12c14a4ed3ac437"
  },
  {
    "url": "assets/js/25.a2c17261.js",
    "revision": "d922cd6132e7ccf0296a4643d03711f5"
  },
  {
    "url": "assets/js/26.5f9ee02a.js",
    "revision": "2bfb4cbd1e23ff331a41012ba895adf3"
  },
  {
    "url": "assets/js/27.4810a70e.js",
    "revision": "68137af0e552a583f084bc1de94501fc"
  },
  {
    "url": "assets/js/28.d38987e6.js",
    "revision": "4a94a54b3ffbe4470ae0f45692565421"
  },
  {
    "url": "assets/js/29.7d773dc2.js",
    "revision": "d3be2364c4f66d9a1f12aed7794bb986"
  },
  {
    "url": "assets/js/3.aa641586.js",
    "revision": "618f1fa8ff588af590792b161d48b71a"
  },
  {
    "url": "assets/js/30.2c045525.js",
    "revision": "e507113e960d9ff094891b542fa934fe"
  },
  {
    "url": "assets/js/31.51fb3380.js",
    "revision": "66a0ef94ccfc94e02ec81a6eaab73631"
  },
  {
    "url": "assets/js/32.7099e955.js",
    "revision": "379859ee08000f1855518bbe2c33e6dc"
  },
  {
    "url": "assets/js/33.41c29964.js",
    "revision": "2bb9c82359b9cb2124db6feb130cf828"
  },
  {
    "url": "assets/js/34.35bb3a25.js",
    "revision": "e153416924132d758203e6a05aa99c4c"
  },
  {
    "url": "assets/js/35.00062d3d.js",
    "revision": "bd48e3e7e2bf9d7c9617d5e635699a3c"
  },
  {
    "url": "assets/js/36.457c19f2.js",
    "revision": "08bb66dde2fb0b7df0d4c832fe510af2"
  },
  {
    "url": "assets/js/37.e3a716c8.js",
    "revision": "d6b23d1d799c232650fe938f5f206d98"
  },
  {
    "url": "assets/js/38.ac27a577.js",
    "revision": "97a09821316f0e1427c3e60954428ad3"
  },
  {
    "url": "assets/js/39.57340f01.js",
    "revision": "c77168a191a815bb899f9f958df6ac5e"
  },
  {
    "url": "assets/js/4.bd65f4e4.js",
    "revision": "7eea082021b57632fb1a0ad02c923ec1"
  },
  {
    "url": "assets/js/40.785f261f.js",
    "revision": "1ec1829408a725036f6e77cba8f591bc"
  },
  {
    "url": "assets/js/41.02fa48f2.js",
    "revision": "f32318eff12229fd19cd128c67795c5c"
  },
  {
    "url": "assets/js/42.f9f5184e.js",
    "revision": "5e8b15885465219d65c62bed253940f2"
  },
  {
    "url": "assets/js/43.ee2006df.js",
    "revision": "5a7d91c79b370e79e50d5cbc7513f5ff"
  },
  {
    "url": "assets/js/44.88e8718c.js",
    "revision": "25a9833a6686e50dbf93a1d0d2e80584"
  },
  {
    "url": "assets/js/45.60b7d97f.js",
    "revision": "887b4228e7ea1597e4d4ad2df6786103"
  },
  {
    "url": "assets/js/46.b4acdfbc.js",
    "revision": "e85cf0fcc278c305212e47c199c12fe1"
  },
  {
    "url": "assets/js/47.6ab7fede.js",
    "revision": "fb05c1d040b99d3ee2d8bd6e5dfc7363"
  },
  {
    "url": "assets/js/48.191562a7.js",
    "revision": "ffe82c82c4a853d835813198a062e1ff"
  },
  {
    "url": "assets/js/49.fadfa1e3.js",
    "revision": "6a17de2c4b6b0be0ba7ae11e33633971"
  },
  {
    "url": "assets/js/5.024f0637.js",
    "revision": "0b0ccf3f1d58de1f7c9a433a7f7263b6"
  },
  {
    "url": "assets/js/50.49ba6e2c.js",
    "revision": "db62e22478753d1de365913f9b373d31"
  },
  {
    "url": "assets/js/51.d7cb70a2.js",
    "revision": "7fec4f3abab2303ea1c8ac853ad5b22c"
  },
  {
    "url": "assets/js/52.7228a038.js",
    "revision": "97cb6e82ce4eebad17aad584c02a9ebc"
  },
  {
    "url": "assets/js/53.5c4e9817.js",
    "revision": "328d049a184cd6656102d2060aa98d60"
  },
  {
    "url": "assets/js/54.3820d851.js",
    "revision": "a55c6919141dbb54709ff9000b5dd081"
  },
  {
    "url": "assets/js/55.eff61d54.js",
    "revision": "bcc06ce94666e6cc76c777fc4b4da11a"
  },
  {
    "url": "assets/js/56.5a911201.js",
    "revision": "54cb8d7c69f1077d434d85d2fd3b028b"
  },
  {
    "url": "assets/js/57.22514820.js",
    "revision": "dae195128f130915dbe6f20d06c74777"
  },
  {
    "url": "assets/js/58.d4e8cb6e.js",
    "revision": "bc52d7b1f80795ecf7ac2aa4397956c6"
  },
  {
    "url": "assets/js/59.a0fb01a3.js",
    "revision": "ba21a2fe81179ea33bcce49fce6e3b54"
  },
  {
    "url": "assets/js/6.cc228aca.js",
    "revision": "30a43bad70325de6cdbeb7052b75f38c"
  },
  {
    "url": "assets/js/60.6b9eb95b.js",
    "revision": "ad1ad21da60704d8b117f5d95a2d57b7"
  },
  {
    "url": "assets/js/61.e0f0bd75.js",
    "revision": "002b225cd14e14f04b2824f71b6c9435"
  },
  {
    "url": "assets/js/62.63db259d.js",
    "revision": "c44aa045b3bcee0b40c3450586e93ad9"
  },
  {
    "url": "assets/js/63.78d61daf.js",
    "revision": "c16d26dad512e41af43882fbb519e903"
  },
  {
    "url": "assets/js/64.66426b18.js",
    "revision": "b6f9426ed5de803d2b7f3ed1ead370b0"
  },
  {
    "url": "assets/js/65.4d68d1ee.js",
    "revision": "2a5710e030c5ab7a3abc7109524a1f32"
  },
  {
    "url": "assets/js/66.9960662e.js",
    "revision": "442923e0f6e786db9423cd1a724e4167"
  },
  {
    "url": "assets/js/67.1c7f5222.js",
    "revision": "677d9e2fd0a9ac6cdb65297d40b33b3f"
  },
  {
    "url": "assets/js/68.a41058bf.js",
    "revision": "640406b741990a2c8797547c1f03baaa"
  },
  {
    "url": "assets/js/69.5d71b1d6.js",
    "revision": "ddb69d75975df21fc50feb525ad79750"
  },
  {
    "url": "assets/js/7.c0dc1b50.js",
    "revision": "56f8aea8f87fbcf906c5acd758a4df96"
  },
  {
    "url": "assets/js/70.14938a0d.js",
    "revision": "d0f66a1804bbe4ce656dc7f6fa091911"
  },
  {
    "url": "assets/js/71.a6ed115d.js",
    "revision": "a569eedb85447c600c56dccad3a312d5"
  },
  {
    "url": "assets/js/72.083dbe53.js",
    "revision": "781e16c398e80490c6912f6fc71d2feb"
  },
  {
    "url": "assets/js/73.bc631a38.js",
    "revision": "a13f921d4d8128ac6b5969d29d0be74a"
  },
  {
    "url": "assets/js/74.c7af4819.js",
    "revision": "d4580a9dc6ebc0d61240f71d64401d02"
  },
  {
    "url": "assets/js/75.56e3d0ad.js",
    "revision": "84a338aefd1c346342ab13d9349a7cc2"
  },
  {
    "url": "assets/js/76.3d3ccbe9.js",
    "revision": "035e29285c80447d506d8bb18c76d1a3"
  },
  {
    "url": "assets/js/77.51ef59a7.js",
    "revision": "6f802d5e16b80705d902df41d2759711"
  },
  {
    "url": "assets/js/78.35ca0869.js",
    "revision": "31b53e5276a56004a1e01a23513e6138"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.38a36c27.js",
    "revision": "88166cc81784337a98c010b982a8bb0e"
  },
  {
    "url": "assets/js/9.0517aa16.js",
    "revision": "705eddd1b7f1381426cdf07ff3451713"
  },
  {
    "url": "assets/js/app.cf9a98ee.js",
    "revision": "8a13e1db892d040f7f8c80438ed20d93"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "323b9bcae036711c8d4fbaceffc1d942"
  },
  {
    "url": "cs/bash.html",
    "revision": "b3ee2ff1c733d212f28da0a353b3f200"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "6086acbbf123bcb0e6e7be36175595fc"
  },
  {
    "url": "cs/cmake.html",
    "revision": "cb515f667028717e29c8b82ae163463f"
  },
  {
    "url": "cs/compilation.html",
    "revision": "66a978c934848a526c415a3addc56236"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "e78ee80de25e4399b9fa320cedac0dad"
  },
  {
    "url": "cs/git.html",
    "revision": "0fbccb1f5ee8314589a711050db4c93e"
  },
  {
    "url": "cs/index.html",
    "revision": "c5239353118dd62bef8c38ceb3e1ee1b"
  },
  {
    "url": "cs/keras.html",
    "revision": "220b088cf9117b48fcebd5da5df99550"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "9a271a08ff3db27c16b5c696a0fe88f8"
  },
  {
    "url": "cs/lwip.html",
    "revision": "fc725cdcc399802c995523d8d923face"
  },
  {
    "url": "cs/scala.html",
    "revision": "f3ff3f1089a9e1c26e4ba9fbb0a0835a"
  },
  {
    "url": "ee/about.html",
    "revision": "bc6d4cdbb4a4fd9347015d4f53a9c71b"
  },
  {
    "url": "ee/chisel.html",
    "revision": "22ee8e3c7b595b92a716145db9f45719"
  },
  {
    "url": "ee/esp32.html",
    "revision": "7e50f9165b923764abd6116e1c39fbaf"
  },
  {
    "url": "ee/index.html",
    "revision": "204455ef250db6d11065e0452a717280"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "9ee9c8c5ceec52d63111b29974399db5"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "4db677e3eb5b56b47d44e61ca01107a4"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "5a48cb6e4a784dfd5de9855667621d78"
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
    "revision": "16ca0a3a1bb01f18dc2afaadd1d75e7a"
  },
  {
    "url": "others/about.html",
    "revision": "fed33350e9af3e07e66c122ace040436"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "cc8e1b44c91aa2e693f14f35a2776dee"
  },
  {
    "url": "others/android-studio.html",
    "revision": "f9f4e69cf8ecd0d5ace2911be881b0b7"
  },
  {
    "url": "others/android.html",
    "revision": "85a05bb982f278067c1ce0599ab64306"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "9c106451c8d8bb5977833c324b14b26c"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "59278ffa7b5b1e817c16825024e0bdc0"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "c31920b0fb05d447608d0ecb4c99525a"
  },
  {
    "url": "others/css.html",
    "revision": "a4488ba1112704842ff61b6319f92bb5"
  },
  {
    "url": "others/docker.html",
    "revision": "c29767724ba7177e67e209af0ac873bc"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "fa18da39d1c4b798208d735ceae47024"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "08f2c97ebcb5b4c7cbb592cd497faeea"
  },
  {
    "url": "others/english-writting.html",
    "revision": "e6cb5c78da29685f91077c44cae9401d"
  },
  {
    "url": "others/freertos.html",
    "revision": "c825c4059e9380f4c20bbaf7d954078f"
  },
  {
    "url": "others/gns3.html",
    "revision": "c661d5d14d40eae54c862a0c77852190"
  },
  {
    "url": "others/gps.html",
    "revision": "6e4396f7f3eac5e561ae873581f6104b"
  },
  {
    "url": "others/html5.html",
    "revision": "0cdaa8f1809475a76b3175c81aff909d"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "b19d1395c44ae388589ebdc3df0bc222"
  },
  {
    "url": "others/index.html",
    "revision": "d5a11b001d993aa75719bf820c1b1231"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "93056be449d9ed7d6668345a83138d2b"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "9c19f2bc04a315b70ec5cc15f784f3e6"
  },
  {
    "url": "others/javascript.html",
    "revision": "d9b66cf24cb6342c5e3eb4325729a0b5"
  },
  {
    "url": "others/json.html",
    "revision": "24d60d94cf7563c6c734cf711689906a"
  },
  {
    "url": "others/latex.html",
    "revision": "9b030f3a91a5783339d414e28508e505"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "2444a103e317836588ea7cc8058ae78b"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "7342fa4c21224d83fdd7f1aab2b52745"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "d5a4922f8d90ad65ca5f147caa0d994e"
  },
  {
    "url": "others/markdown.html",
    "revision": "2180c88de36c09e338b9f3a990d29fbf"
  },
  {
    "url": "others/matlab.html",
    "revision": "8a54a4f5418cbf7d04ae6867fd7fc159"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "357fd119cb9d7a33eb403bb43dd656f9"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "2a56bab34610df609fce19f406a2c70c"
  },
  {
    "url": "others/network-security.html",
    "revision": "f6ed81dc1a3b9b4a9d3778058592dc22"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "3a508c5110932cb702c554d3451a7351"
  },
  {
    "url": "others/oral_english.html",
    "revision": "5c3c434dd0a92df1ce2244ad4a2306ae"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "35168f4c5ab0752df5425d5732ddad1d"
  },
  {
    "url": "others/poe.html",
    "revision": "8aa0c010a30522d0da873b47c466ff84"
  },
  {
    "url": "others/pyside2.html",
    "revision": "4bb6a4fab94cea1d299c4e89502b97bc"
  },
  {
    "url": "others/python-socket.html",
    "revision": "b8d72d2f9cd30dc33382cf88b4803c2e"
  },
  {
    "url": "others/python.html",
    "revision": "36bdaa6820e0dec335e8dab0951b1866"
  },
  {
    "url": "others/q-learning.html",
    "revision": "253c99d8a82da95106abf2bfb3c6911c"
  },
  {
    "url": "others/qr-code.html",
    "revision": "b32a3c85680dd8c50bda7458146581b9"
  },
  {
    "url": "others/qt4.html",
    "revision": "9aea1d80ddc061d57c2b9ed4482e0c52"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "6901a0641f92c9548df90f769be94886"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "158d4460cda4e6bd1e996ae056708214"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "e1bfebddbcf710fb73495be2bb173aff"
  },
  {
    "url": "others/sd-card.html",
    "revision": "a0cbc584fca6d7d9ac0eb8fa21aca097"
  },
  {
    "url": "others/sdn.html",
    "revision": "32e3e60bf4e7167406da400dfd4a699f"
  },
  {
    "url": "others/star-uml.html",
    "revision": "afd932aa50b3277de87b33237a06b81f"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "283502120f693d9affbbde017eac969f"
  },
  {
    "url": "others/verilog.html",
    "revision": "703268334711702129bb5f3d44fa7db1"
  },
  {
    "url": "others/vue.html",
    "revision": "239d6f6fed19636e8ef1a1f7f54df57a"
  },
  {
    "url": "others/w5500.html",
    "revision": "01c26d52049a48d263af404a544b35e1"
  },
  {
    "url": "others/w7500.html",
    "revision": "c19d6acc5564ea0df311e1e30af8e8d0"
  },
  {
    "url": "resume.html",
    "revision": "7b7a5d6b98f44a32a6bd1286766c90ab"
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
