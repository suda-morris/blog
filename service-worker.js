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
    "revision": "6f08c05e1991d8435f76dd359d52abee"
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
    "url": "assets/js/10.c23c4d56.js",
    "revision": "44f2b31cccc143d62fcc4cf418705eed"
  },
  {
    "url": "assets/js/11.fc094be5.js",
    "revision": "2c65ced548184c5ecdbce1d3f6123393"
  },
  {
    "url": "assets/js/12.f9e2715a.js",
    "revision": "17e1fd42e2fa939744e4ac718d7bda62"
  },
  {
    "url": "assets/js/13.08e2bc47.js",
    "revision": "54ee0a49708124fb5736ae88d39d25a9"
  },
  {
    "url": "assets/js/14.1b95faf8.js",
    "revision": "24cad077a9c026bcc6cefc7b8bfd78d6"
  },
  {
    "url": "assets/js/15.d1171c09.js",
    "revision": "35ff3c6214e6da21046939e00395b9d1"
  },
  {
    "url": "assets/js/16.481571bd.js",
    "revision": "cefe86216d8176e0acf18ea5273cfe03"
  },
  {
    "url": "assets/js/17.2393394a.js",
    "revision": "342a8b70b335460ddf0d554692bbc6af"
  },
  {
    "url": "assets/js/18.5aae6cb9.js",
    "revision": "36664d07a85878c7689d793c7ab12a4a"
  },
  {
    "url": "assets/js/19.452bc1ad.js",
    "revision": "451b70d1a4b2ac92307eb14a627c0bbb"
  },
  {
    "url": "assets/js/2.3db7c66f.js",
    "revision": "bbaefca6e9f8ae8d6b9bbd9d53a16440"
  },
  {
    "url": "assets/js/20.c39a2046.js",
    "revision": "cdef633a619376ab239e39e901e564b2"
  },
  {
    "url": "assets/js/21.1dffb0b0.js",
    "revision": "c9610f50427f252d30f98f01fcde471f"
  },
  {
    "url": "assets/js/22.b376dafb.js",
    "revision": "29ffabf1a2cdcfe0ea45589f82c6d148"
  },
  {
    "url": "assets/js/23.eeacb693.js",
    "revision": "63758c4334096c6fff461b052e6dacf2"
  },
  {
    "url": "assets/js/24.a7237648.js",
    "revision": "b28683a7e83b885f83d9494893a984ff"
  },
  {
    "url": "assets/js/25.a2c17261.js",
    "revision": "d922cd6132e7ccf0296a4643d03711f5"
  },
  {
    "url": "assets/js/26.6630785d.js",
    "revision": "1bc73787492bea64492f057fd87940b6"
  },
  {
    "url": "assets/js/27.526950c2.js",
    "revision": "cdb3ac6986520a517a187fcc3266cd86"
  },
  {
    "url": "assets/js/28.e05a8206.js",
    "revision": "6a91d7844b439e5a2b9daca173c19625"
  },
  {
    "url": "assets/js/29.f565333e.js",
    "revision": "c5e22f649bbea8c7786ece83d9c1987c"
  },
  {
    "url": "assets/js/3.476dc83d.js",
    "revision": "fe1ac8d1c2d814fc06556d6d987abfd2"
  },
  {
    "url": "assets/js/30.2c045525.js",
    "revision": "e507113e960d9ff094891b542fa934fe"
  },
  {
    "url": "assets/js/31.9228d22e.js",
    "revision": "d7382f3772d6b62714479605bc70ec2a"
  },
  {
    "url": "assets/js/32.1438a7ab.js",
    "revision": "ce343a2ebccb6e6f02e547323322e79c"
  },
  {
    "url": "assets/js/33.41c29964.js",
    "revision": "2bb9c82359b9cb2124db6feb130cf828"
  },
  {
    "url": "assets/js/34.34c1c63b.js",
    "revision": "105eb99fcb98df297efad7b06f4d208f"
  },
  {
    "url": "assets/js/35.d2228a05.js",
    "revision": "f51dc678c9b4c74d35b74559e78787ff"
  },
  {
    "url": "assets/js/36.2565bf1f.js",
    "revision": "164d49a7c235d9948927880c265a434b"
  },
  {
    "url": "assets/js/37.966b7362.js",
    "revision": "db0cbf5ccf304c0c19c9ab76497e2cd9"
  },
  {
    "url": "assets/js/38.ac27a577.js",
    "revision": "97a09821316f0e1427c3e60954428ad3"
  },
  {
    "url": "assets/js/39.db2188b8.js",
    "revision": "473f1cecb9cff29ec5cc3f3b8da108fb"
  },
  {
    "url": "assets/js/4.66fe69d9.js",
    "revision": "2fec0468a8ff0f2a4236d2a8a2739893"
  },
  {
    "url": "assets/js/40.0473bc97.js",
    "revision": "305c69cffc9ad8adaf8ff0b2f19ec3df"
  },
  {
    "url": "assets/js/41.d05f7209.js",
    "revision": "a6afbab47845efda84c21c005482fc9c"
  },
  {
    "url": "assets/js/42.05e02df7.js",
    "revision": "be469e8a4139b10d53a5e03524c28d04"
  },
  {
    "url": "assets/js/43.ee2006df.js",
    "revision": "5a7d91c79b370e79e50d5cbc7513f5ff"
  },
  {
    "url": "assets/js/44.325c2d39.js",
    "revision": "aaf7b2340d518921e721dea118248555"
  },
  {
    "url": "assets/js/45.b9deabba.js",
    "revision": "df9f4560ebc8cd69200e543ea958be1b"
  },
  {
    "url": "assets/js/46.b4acdfbc.js",
    "revision": "e85cf0fcc278c305212e47c199c12fe1"
  },
  {
    "url": "assets/js/47.5eb919b6.js",
    "revision": "c62f7f1fb9ba1a47ac6b059cd4a657e6"
  },
  {
    "url": "assets/js/48.191562a7.js",
    "revision": "ffe82c82c4a853d835813198a062e1ff"
  },
  {
    "url": "assets/js/49.f50f7428.js",
    "revision": "5d5a3c5fff48778e1fd399a60584b7cb"
  },
  {
    "url": "assets/js/5.024f0637.js",
    "revision": "0b0ccf3f1d58de1f7c9a433a7f7263b6"
  },
  {
    "url": "assets/js/50.ff7898b5.js",
    "revision": "7030c5b5e8ff8105becf9ac8795ffd32"
  },
  {
    "url": "assets/js/51.bd62a46e.js",
    "revision": "a3e18f9d2c3b42728eafc2f8c58fb75f"
  },
  {
    "url": "assets/js/52.fb226a34.js",
    "revision": "24caf2b1c3d269f4dab0d3822ca1ae9f"
  },
  {
    "url": "assets/js/53.4a95830b.js",
    "revision": "fc6be218b45af7b10df5c762c69ff751"
  },
  {
    "url": "assets/js/54.bba307f9.js",
    "revision": "49a0aecce4d9188dd97552668ea97623"
  },
  {
    "url": "assets/js/55.0dbd69be.js",
    "revision": "68a24231523099d26da74140769eba6c"
  },
  {
    "url": "assets/js/56.e3d50aad.js",
    "revision": "8fccd572a064071eed3da919f8965960"
  },
  {
    "url": "assets/js/57.1dfa99b1.js",
    "revision": "bb0f8f9d693b85c4ee8e1c2e8ee4a805"
  },
  {
    "url": "assets/js/58.b2a714f9.js",
    "revision": "c8778c7c05562127e34c4c8497d14742"
  },
  {
    "url": "assets/js/59.77e4b15e.js",
    "revision": "730c36c1b7b2b2e80fe88678d57be57c"
  },
  {
    "url": "assets/js/6.c6d12e41.js",
    "revision": "6f45878f22790895c140592bee616f19"
  },
  {
    "url": "assets/js/60.7031eca9.js",
    "revision": "45f6766ec60496a6e27fa5fd0df66f53"
  },
  {
    "url": "assets/js/61.88aebced.js",
    "revision": "9220d434be6522fdc17e47da24d6a166"
  },
  {
    "url": "assets/js/62.4027e8b0.js",
    "revision": "993cb5ff1e94404d6443efc83b887dc3"
  },
  {
    "url": "assets/js/63.acd671e0.js",
    "revision": "272d2d99a66b5b1b31821cd682c3cf26"
  },
  {
    "url": "assets/js/64.c508271b.js",
    "revision": "a0ab45dce4bce3f6a969fb0cb760f1af"
  },
  {
    "url": "assets/js/65.28fe2724.js",
    "revision": "030b294746f754a7867ccd42bc003764"
  },
  {
    "url": "assets/js/66.187a9bbf.js",
    "revision": "959a39914b28e3a22341f54cb4cf1919"
  },
  {
    "url": "assets/js/67.c0cd64f5.js",
    "revision": "780f4d84bbda88bac698a63e79bb4280"
  },
  {
    "url": "assets/js/68.32c4c2f7.js",
    "revision": "8b1ea7ba922f5ab25bedaf878309c70d"
  },
  {
    "url": "assets/js/69.8659cb40.js",
    "revision": "05a8fe4e9b59afb8f4bc04af19cfcf9a"
  },
  {
    "url": "assets/js/7.df05d0f4.js",
    "revision": "857551c6b0bc3ac42136ee4505c3c1fe"
  },
  {
    "url": "assets/js/70.c401a7e0.js",
    "revision": "de47a052cc6b59a833b68a1dcfea5422"
  },
  {
    "url": "assets/js/71.6a4e14eb.js",
    "revision": "6de1453408535c8892f1d572490bb8c3"
  },
  {
    "url": "assets/js/72.bb709046.js",
    "revision": "2c57b4a54a0ee36bead7982d741da2e7"
  },
  {
    "url": "assets/js/73.12ece528.js",
    "revision": "f0831c148c72015f8f40cdfd956d16ff"
  },
  {
    "url": "assets/js/74.2251f447.js",
    "revision": "b0d897335c34cd4b39c2c97123919500"
  },
  {
    "url": "assets/js/75.331ee87f.js",
    "revision": "8a46fe9708b36eca200838bde36c735b"
  },
  {
    "url": "assets/js/76.55ef60c7.js",
    "revision": "2f7e8bd27b6e65cb18d5ce7307f7bcdc"
  },
  {
    "url": "assets/js/77.51ef59a7.js",
    "revision": "6f802d5e16b80705d902df41d2759711"
  },
  {
    "url": "assets/js/78.fb20568d.js",
    "revision": "d575243eeeb8d43c701d6c140d24616f"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.75d5c573.js",
    "revision": "0ed8e8fdadcaf54782719bfba28e954d"
  },
  {
    "url": "assets/js/9.50c6431e.js",
    "revision": "88134cceee7ec3e773dd1145e278a08c"
  },
  {
    "url": "assets/js/app.d6b9585c.js",
    "revision": "9458395209b5989d8f551252daff52a3"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "4d788ff0ff0cccbe0947e39dc9cb4ce5"
  },
  {
    "url": "cs/bash.html",
    "revision": "3c7602535fc40ae74365b3ccf884e16d"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "8b7d130c477825283cc813e30abad387"
  },
  {
    "url": "cs/cmake.html",
    "revision": "d1e6ff6b4b0ddca9c5083b8da830cf6c"
  },
  {
    "url": "cs/compilation.html",
    "revision": "78915dc4aba7e091bbe80aa31db6d0d3"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "f56420febae124407a8403ea42073bd4"
  },
  {
    "url": "cs/git.html",
    "revision": "1bde6019e11946c70bcfa50d3138723b"
  },
  {
    "url": "cs/index.html",
    "revision": "2bde442f2335ebcace51a4f456284076"
  },
  {
    "url": "cs/keras.html",
    "revision": "2225a495cf81e29057dfbcf9af34e9fa"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "246f25ac12db22206a617ef3230160c0"
  },
  {
    "url": "cs/lwip.html",
    "revision": "4e6610be65205b42ddda8e11af95695f"
  },
  {
    "url": "cs/scala.html",
    "revision": "3cdf5fc2edfa69d759118c78c56c591a"
  },
  {
    "url": "ee/about.html",
    "revision": "df7caf3248d3437513058499d670d7ee"
  },
  {
    "url": "ee/chisel.html",
    "revision": "82accdabd1473d047576e405b6c68bf4"
  },
  {
    "url": "ee/esp32.html",
    "revision": "b406fd40f77d0d1bc1a170d270f3eabc"
  },
  {
    "url": "ee/index.html",
    "revision": "3f15c3f0c691e0a7438d6d3513a4766a"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "5b8d1dade438bff3c981cc688f744106"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "29926c9c73c4bcf7532fefb86fc1fe27"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "1f7f86a5d07c8d8c812abd9660ec38f0"
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
    "revision": "2dcf91df8c3c348a5211e4f22ecd16d8"
  },
  {
    "url": "others/about.html",
    "revision": "7d89627173d76bf50c284e8e18a6f52f"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "8618f7720b3e3e64f9bf2e02dfa60949"
  },
  {
    "url": "others/android-studio.html",
    "revision": "574a23e36f5c475bc688151e9819c947"
  },
  {
    "url": "others/android.html",
    "revision": "088df0a4a47e4590113c3c338520a8b1"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "c5f8acd860e3faa492a7197c6f89e222"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "3f0499afc2c669e4288dea71f535e5f4"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "36f6b34ba35d4d3e43e2d8d11ced8a68"
  },
  {
    "url": "others/css.html",
    "revision": "1deb023d189112b4822b3bd51f74515b"
  },
  {
    "url": "others/docker.html",
    "revision": "d74c8bf5809db2f072da83adfda9a65e"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "8f4976ab3404f48807b583593bfbe8b2"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "785a0d8f11cd8490a5de460f633a0dbc"
  },
  {
    "url": "others/english-writting.html",
    "revision": "b0ee51db5d2d95fc2df6c385203449b8"
  },
  {
    "url": "others/freertos.html",
    "revision": "cf588fbb278591adb8ac04a3e9c4e2a4"
  },
  {
    "url": "others/gns3.html",
    "revision": "9b13b9969974ef9242b7f81605e5e0bc"
  },
  {
    "url": "others/gps.html",
    "revision": "a67420c07f70aa272872eff9d0b4c9bb"
  },
  {
    "url": "others/html5.html",
    "revision": "e72a6236d9b228ff8c3f3ea66f33d828"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "02b5bd67386b82d6e60266bb01f51c96"
  },
  {
    "url": "others/index.html",
    "revision": "a4515cbdfed1b9299a455690fd74f3af"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "f9913a89098560a4cac3a62d8637e253"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "0c0394ca0fa7cb6d518b371bec46d200"
  },
  {
    "url": "others/javascript.html",
    "revision": "a853c7db09beb24285ac0ad1b5632dc5"
  },
  {
    "url": "others/json.html",
    "revision": "21941a73f838bda284c7f336cff40c3c"
  },
  {
    "url": "others/latex.html",
    "revision": "f0a88fba18f2df40e2235c2de4389acf"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "13efc28d66d07c624ce07506fa2ade04"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "7e87981b8bebf8865d1e675ef4b6b1bb"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "8534ffa955794a34826808bd057c2bc6"
  },
  {
    "url": "others/markdown.html",
    "revision": "0cc4e80c7253d8e45c258c3cb4707c03"
  },
  {
    "url": "others/matlab.html",
    "revision": "df7d6ffc5e78564296d14c8d8773dc7e"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "5f651248dd0d251634043e386c4169e4"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "79faff54f40dd9bd81213ceb9e46c045"
  },
  {
    "url": "others/network-security.html",
    "revision": "fa0cf3776f8a6da3e8350155c12884fe"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "8f674f9a3baff2e61c6c509c344acff4"
  },
  {
    "url": "others/oral_english.html",
    "revision": "c59702259a6f9015bf45c239d2980957"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "1cc630754f8f778981143b341f2c9030"
  },
  {
    "url": "others/poe.html",
    "revision": "4f46890cc1f77728e18ee084f4143217"
  },
  {
    "url": "others/pyside2.html",
    "revision": "04ad4788c3a74770073b53b1971a2640"
  },
  {
    "url": "others/python-socket.html",
    "revision": "eb5e137a136a4cbc0e9d6be5974c91d0"
  },
  {
    "url": "others/python.html",
    "revision": "5afef3ab641b26b9167a72b5e822805e"
  },
  {
    "url": "others/q-learning.html",
    "revision": "8bdc6cad42faae929183bfebcfb80c4f"
  },
  {
    "url": "others/qr-code.html",
    "revision": "28d7e712e8cbafafb77c966d6547a5dd"
  },
  {
    "url": "others/qt4.html",
    "revision": "4b50c1b63c47664859f350c6d64933a9"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "d642e4f0b1cc391585f909e461e42b1f"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "99a78b92ba0a07c2a4b30deb39212212"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "3dec04db76605f02371a945d48e6c957"
  },
  {
    "url": "others/sd-card.html",
    "revision": "625b3c3656f4e7c1a33edb5956235eb9"
  },
  {
    "url": "others/sdn.html",
    "revision": "549b5e91e673d41718d1b6c250e01daf"
  },
  {
    "url": "others/star-uml.html",
    "revision": "22ee111ba79d363761a5f298f666b3be"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "7544016c04a3036ecec273a63adac08a"
  },
  {
    "url": "others/verilog.html",
    "revision": "47a771f41409bd102f14df40726c0c6e"
  },
  {
    "url": "others/vue.html",
    "revision": "c5df9c9d274417f7b8d3676e0c6fcce2"
  },
  {
    "url": "others/w5500.html",
    "revision": "5714ef17da314746697dc63002aa6923"
  },
  {
    "url": "others/w7500.html",
    "revision": "718bd4b8a425ab04f967dbfbd150f4ae"
  },
  {
    "url": "resume.html",
    "revision": "f2bf9c74301a46410aebc4b9bd704830"
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
