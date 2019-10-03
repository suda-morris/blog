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
    "revision": "1ece37a053b311c066a20b57c25873d2"
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
    "url": "assets/js/10.4de47570.js",
    "revision": "fd31ae6b18d3302c8782c36da10a55f7"
  },
  {
    "url": "assets/js/11.ba31a5ad.js",
    "revision": "bbb3fa56e3febee0398232ecf8e15c6c"
  },
  {
    "url": "assets/js/12.2ea09b78.js",
    "revision": "c521378c28fe2db5e48a59fa2bf892ec"
  },
  {
    "url": "assets/js/13.810f1300.js",
    "revision": "411fcb281938377457b0247cd4cae48c"
  },
  {
    "url": "assets/js/14.207c7997.js",
    "revision": "2569c730b2567f1fd985f4ca9ddbb3cc"
  },
  {
    "url": "assets/js/15.67569d2f.js",
    "revision": "556be3ca5855d34273243d6ee36ad904"
  },
  {
    "url": "assets/js/16.8bcb3597.js",
    "revision": "30795976aadb4fe9863a2d5ca63e5a7c"
  },
  {
    "url": "assets/js/17.2877eea7.js",
    "revision": "ad05bf768a21fc4726f9329a7862a0e6"
  },
  {
    "url": "assets/js/18.3aa6dac7.js",
    "revision": "7aeed6a71bb677c68219e7d36b5228da"
  },
  {
    "url": "assets/js/19.19a2df20.js",
    "revision": "39648913bd708f8075500369e14d02aa"
  },
  {
    "url": "assets/js/2.31d33714.js",
    "revision": "e845ceccf3da512fb2190ee3a6d572ce"
  },
  {
    "url": "assets/js/20.20dcf5b3.js",
    "revision": "ae6b6678420b22ee2d51238b33d730e7"
  },
  {
    "url": "assets/js/21.b7250fb8.js",
    "revision": "c5d92b03a8f3fe0c0afffa8a38b35c86"
  },
  {
    "url": "assets/js/22.e0df6d79.js",
    "revision": "fc3b54cb1f0b4bd1b104a1705a4ddcb6"
  },
  {
    "url": "assets/js/23.3f3b7c9c.js",
    "revision": "999622d5e9cf01d9d09230b3865f2be4"
  },
  {
    "url": "assets/js/24.5b1f2768.js",
    "revision": "3d2ede1042edaf018c546ef09923c570"
  },
  {
    "url": "assets/js/25.3c67a29c.js",
    "revision": "01f85f26efefd713726384704baceb6e"
  },
  {
    "url": "assets/js/26.a1090ab6.js",
    "revision": "83ddda17d457f46443c0ed7f797142c7"
  },
  {
    "url": "assets/js/27.c26feedf.js",
    "revision": "14878dc0449409a439c4ff99cb654eb3"
  },
  {
    "url": "assets/js/28.26c2b9bd.js",
    "revision": "79285b62e55cd96a87a3d644ca1fc758"
  },
  {
    "url": "assets/js/29.e8fadee3.js",
    "revision": "0535ecef0f402476cb1b26b63d6ab187"
  },
  {
    "url": "assets/js/3.0a7cccfe.js",
    "revision": "9263dba7ee138c96de08c96d2f80fc8d"
  },
  {
    "url": "assets/js/30.cade1430.js",
    "revision": "4e0f6654ee09b0e11989d6bf4b4ecb42"
  },
  {
    "url": "assets/js/31.faa4a145.js",
    "revision": "e17c1cc5c3b6841bdca9fae90cad581a"
  },
  {
    "url": "assets/js/32.e321e58e.js",
    "revision": "3e1c30e1776f13a80a6d5d97ef1a60be"
  },
  {
    "url": "assets/js/33.7fc712d4.js",
    "revision": "e64fb9ab7eceb3376f52650105ff28f1"
  },
  {
    "url": "assets/js/34.012e2841.js",
    "revision": "c91ac7ec5371b9ce31942e8740cf44a2"
  },
  {
    "url": "assets/js/35.6c867f8e.js",
    "revision": "748d3f5ae15018be79bd93073e60dcc4"
  },
  {
    "url": "assets/js/36.306fbbfc.js",
    "revision": "ea43c925ff04c6043fc5906e496ef864"
  },
  {
    "url": "assets/js/37.b16c01a2.js",
    "revision": "cff69f47ee966cfbb1c16b6bd972b746"
  },
  {
    "url": "assets/js/38.4561b1a2.js",
    "revision": "c3f4edf253f7ab4f6989fbc8eb1d7051"
  },
  {
    "url": "assets/js/39.f0a4f0cc.js",
    "revision": "9d34fea3bd91192f88438ef6f625427f"
  },
  {
    "url": "assets/js/4.0bf05310.js",
    "revision": "fe50059d327c312c82ccee5ead067982"
  },
  {
    "url": "assets/js/40.e5d5128b.js",
    "revision": "bd4770af9e6113535278c1fe6f5dac2f"
  },
  {
    "url": "assets/js/41.f1423b19.js",
    "revision": "2fd2bc1d7263a9ddf34fbe7e6e8f46dc"
  },
  {
    "url": "assets/js/42.2283864d.js",
    "revision": "14a46824a8d83a82c209c05798b45d20"
  },
  {
    "url": "assets/js/43.4a98a91a.js",
    "revision": "4d93ad2dc4b6d1b01cc432edfb1fcc8e"
  },
  {
    "url": "assets/js/44.adda5697.js",
    "revision": "fa0abfbfd3f23de734f1157d33525743"
  },
  {
    "url": "assets/js/45.efd7a59b.js",
    "revision": "c53704df7bcf1ef5c98947035c28a352"
  },
  {
    "url": "assets/js/46.b19acded.js",
    "revision": "c02ba6b6120fef3615649721c80b97d2"
  },
  {
    "url": "assets/js/47.ed241f5a.js",
    "revision": "c1ffaadabc24557f940ad19b2eaef7ba"
  },
  {
    "url": "assets/js/48.f9138886.js",
    "revision": "577a7b9fc07ca45622b402b721baaf42"
  },
  {
    "url": "assets/js/49.781b1c19.js",
    "revision": "90faf3a5e6db74f0be2331b41c2ba2fa"
  },
  {
    "url": "assets/js/5.62e1b5e0.js",
    "revision": "c5a4015d5be835837effcbc848573700"
  },
  {
    "url": "assets/js/50.482a1e4e.js",
    "revision": "fd2f2405203b9cc7bd459eee70215ad0"
  },
  {
    "url": "assets/js/51.f4d9528a.js",
    "revision": "3c77738e65104f2d3418a93f8a683f5b"
  },
  {
    "url": "assets/js/52.cf9ad625.js",
    "revision": "8c5eb1b767217fed66757348c5432f04"
  },
  {
    "url": "assets/js/53.dd0d8405.js",
    "revision": "13deab4d0a43b3e959d8a3d2f4ab9ea1"
  },
  {
    "url": "assets/js/54.bc1af328.js",
    "revision": "c305f9c75963d21311d198d232e00f43"
  },
  {
    "url": "assets/js/55.9f9c2a3f.js",
    "revision": "0f96713c7684d005037dd603d986b611"
  },
  {
    "url": "assets/js/56.bf870cb5.js",
    "revision": "1d49815b1a0b2a4f05c2d371a57cb344"
  },
  {
    "url": "assets/js/57.bd99145a.js",
    "revision": "0c71fec1d70573129409f83b8f7c307d"
  },
  {
    "url": "assets/js/58.f5a78639.js",
    "revision": "fafcf0e0fea6b5ad60a13ff1df58edc5"
  },
  {
    "url": "assets/js/59.19fe5d9b.js",
    "revision": "fb7340c95a0c16d63fecb1a5c29ddc1a"
  },
  {
    "url": "assets/js/6.b27c7c7d.js",
    "revision": "464725d390ee1c19fdeea583abe18c5b"
  },
  {
    "url": "assets/js/60.e0a0f792.js",
    "revision": "8c7379d08bb165388766910daf7226d0"
  },
  {
    "url": "assets/js/61.4f1ac788.js",
    "revision": "654261e427a2f2411800d254d55cf9fb"
  },
  {
    "url": "assets/js/62.911df9bf.js",
    "revision": "e7bf8170f80b1c370af49ee15cec0d84"
  },
  {
    "url": "assets/js/63.ad08a8e4.js",
    "revision": "3d60f9f85b308fb65cac79c2d55bed3f"
  },
  {
    "url": "assets/js/64.1d3c9914.js",
    "revision": "11e2dccde7e4b2f08176516779aeaa08"
  },
  {
    "url": "assets/js/65.40938233.js",
    "revision": "79ea6ab8dca6803dfc69785077f1a289"
  },
  {
    "url": "assets/js/66.fe80edc3.js",
    "revision": "35f5901b546eee290d842823022361be"
  },
  {
    "url": "assets/js/67.8733de2b.js",
    "revision": "9fd327fa4661fe364aec2b84a57fca55"
  },
  {
    "url": "assets/js/68.b1aa5bba.js",
    "revision": "ca2d317d77f398392ab87cefe0db06ea"
  },
  {
    "url": "assets/js/69.87c1bc29.js",
    "revision": "bad728117960f39cee394e215753b700"
  },
  {
    "url": "assets/js/7.cc7e26d8.js",
    "revision": "02f289ca75c8580ebcca594a3822daf5"
  },
  {
    "url": "assets/js/70.653455b9.js",
    "revision": "8f1063da9bd66a8d78ab4ee97a30048a"
  },
  {
    "url": "assets/js/71.4cd3da8e.js",
    "revision": "9b3201e90910fa1b6995b391215c12e2"
  },
  {
    "url": "assets/js/72.ac32dd09.js",
    "revision": "e342296743ea68615b406625f4888a44"
  },
  {
    "url": "assets/js/73.6f856424.js",
    "revision": "669fab572dcaff1f7d10491f99db63bd"
  },
  {
    "url": "assets/js/74.ec9a01e6.js",
    "revision": "19b4878b501b44e0ec47c835a0b7a4b1"
  },
  {
    "url": "assets/js/75.5d168c0f.js",
    "revision": "834d094fccc75f39718d0f8aa571cd72"
  },
  {
    "url": "assets/js/76.f423b601.js",
    "revision": "f61190c6a2eebc39a69a7763300669d6"
  },
  {
    "url": "assets/js/77.e03f4b41.js",
    "revision": "103fd3225ea4a39257020cea8725bd98"
  },
  {
    "url": "assets/js/78.c43a1e8d.js",
    "revision": "e065bb8f7d788942a2e03ddbe829b150"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.822a3964.js",
    "revision": "b5e48f22060b81538193c2187f00cb8e"
  },
  {
    "url": "assets/js/9.9e0dbf11.js",
    "revision": "f831a8cefe2c053ee1ba55a5bac47397"
  },
  {
    "url": "assets/js/app.83f551d7.js",
    "revision": "6ab89d3be3ddcd54effb43dda0a89a53"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "a7956644dfacb336808f4b67f3e6f59e"
  },
  {
    "url": "cs/bash.html",
    "revision": "f13f3ecb6a2971f5803299d9fea7a5cb"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "0035195bccb26ca61759f124ec59eb8c"
  },
  {
    "url": "cs/cmake.html",
    "revision": "3a21765da8bdcad84781ca7382ea3e74"
  },
  {
    "url": "cs/compilation.html",
    "revision": "9819de5ffd5c45b7efe3da4face136f8"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "2425c5ca999c70b81d8a2db3fec42afe"
  },
  {
    "url": "cs/git.html",
    "revision": "c76116f8c3b6fa5b9216649f46930722"
  },
  {
    "url": "cs/index.html",
    "revision": "5954fb1ff9d7f91abefc971b72a45cc7"
  },
  {
    "url": "cs/keras.html",
    "revision": "b3cca82bdaeac96c8a089f298da0eca6"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "e468d0e62ff29654bf1fc456a774ac69"
  },
  {
    "url": "cs/lwip.html",
    "revision": "3fb96d08dc734ce30ff725e5ca779389"
  },
  {
    "url": "cs/scala.html",
    "revision": "c2ded379d01f748b0fa992324fe17625"
  },
  {
    "url": "ee/about.html",
    "revision": "983b5064a1528e564f5db5485c1f5783"
  },
  {
    "url": "ee/chisel.html",
    "revision": "15a883ea81434a815162fda0a0a19302"
  },
  {
    "url": "ee/esp32.html",
    "revision": "55c7e85926aa3bdf26b2a13f03d86b05"
  },
  {
    "url": "ee/index.html",
    "revision": "2196db20e56d7ba12da4af3517cb2fc1"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "ad604fcb7faad7d2f6823f783a221de8"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "faf21526ba10ea0567a15f55caa16ad6"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "1a95ce73f4251a794690b629ca148597"
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
    "revision": "9208809011a3048c80fcd412280c1c62"
  },
  {
    "url": "others/about.html",
    "revision": "bc48d513cf12df103b003b6ea7023954"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "2932807f198382517a011962069903b6"
  },
  {
    "url": "others/android-studio.html",
    "revision": "c9976e972f087273994975e2dd6f58af"
  },
  {
    "url": "others/android.html",
    "revision": "bbabaf8cfe334cc7d0f64934032b5d07"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "c84938d705d442825cd9b1048e78f2c0"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "2cdb29b8176ce36d0e0ea55211acb571"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "1dd911e7eef475f8307ffa74f4b77283"
  },
  {
    "url": "others/css.html",
    "revision": "1aa68df4b8ec0c13e7c24ccd9c83c5bb"
  },
  {
    "url": "others/docker.html",
    "revision": "c68286ad94d1542eb1f172700f222d65"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "dbf1966d3bdbb1782ca839b19fd34c78"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "ef27b262cb321131cc2c058533117b2e"
  },
  {
    "url": "others/english-writting.html",
    "revision": "ce20608783987d5ce57366ecacd4cdfb"
  },
  {
    "url": "others/freertos.html",
    "revision": "b98483b41a8a51eea1b02cda182551fe"
  },
  {
    "url": "others/gns3.html",
    "revision": "f363310177e12b9f8fddf1323279a424"
  },
  {
    "url": "others/gps.html",
    "revision": "92561aea3e8fc796913ee63c633d366e"
  },
  {
    "url": "others/html5.html",
    "revision": "7e3853c59be5fb3e7d4d63e83eafd980"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "80fcd872761c94d9114c23773ff8d028"
  },
  {
    "url": "others/index.html",
    "revision": "498f7d56f8366dc49802a367bee62e9c"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "5165d1673fbf174bf9162687c162e31a"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "9e25d5c4030805d2d8a9f5633c03b37b"
  },
  {
    "url": "others/javascript.html",
    "revision": "4f8d3ed6499b7fc0220995ef44ca6229"
  },
  {
    "url": "others/json.html",
    "revision": "592cb8f4a165dfeac4849c20289747a9"
  },
  {
    "url": "others/latex.html",
    "revision": "e820729f323de7757ad83dde145fc350"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "9b46e648027a7619cbc34856ce65609c"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "95f90dd4d1a6022b677f1832e0431d18"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "467e3cdd38c50b0a7b579c05b0a7c1c0"
  },
  {
    "url": "others/markdown.html",
    "revision": "916d3ed9d3d6e1cad33876cd9001255b"
  },
  {
    "url": "others/matlab.html",
    "revision": "653c4c37020148025979827476c3fd07"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "71d5670fbe20582a87e847a32db7fab9"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "40a74e99282ed7634db8e1f1207e20fd"
  },
  {
    "url": "others/network-security.html",
    "revision": "78fe2649dd2033c2246bc164c3086d2b"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "6ef80fb66524f91b6f9ad2fae2bb90a6"
  },
  {
    "url": "others/oral_english.html",
    "revision": "5b7216058bb8aff61d1375c2deb85c77"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "57fc250dd5b49301566ac441f16c5599"
  },
  {
    "url": "others/poe.html",
    "revision": "c5b2947497148374e3349458e4bc5cd5"
  },
  {
    "url": "others/pyside2.html",
    "revision": "83c1cc8119ecf1bf471c6c84d739d750"
  },
  {
    "url": "others/python-socket.html",
    "revision": "62d7306297984f876475dc0a4a17e117"
  },
  {
    "url": "others/python.html",
    "revision": "180960f6db04611994c0b88098add2b1"
  },
  {
    "url": "others/q-learning.html",
    "revision": "fee61f6f9c1e9e3f487f725d75746d2e"
  },
  {
    "url": "others/qr-code.html",
    "revision": "b406295807390722eefc0d5ab61bde9e"
  },
  {
    "url": "others/qt4.html",
    "revision": "78a8f98123d6308c4ed0d3737c087ffa"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "3dcc2c729ddbf17cd7466611422f94b3"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "065dcf74c60ba62c208d4247d08c6503"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "a07a37c4aa3faa6b903dda0c6e64238a"
  },
  {
    "url": "others/sd-card.html",
    "revision": "63acdb60e1ebaed43f95010662e6f051"
  },
  {
    "url": "others/sdn.html",
    "revision": "b3c855e0b978343aa817c1a794450729"
  },
  {
    "url": "others/star-uml.html",
    "revision": "2022691666ac8ac613d8fef6b6faaec7"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "34ce81be78a2bb8f9b3acfff38688c8a"
  },
  {
    "url": "others/verilog.html",
    "revision": "5e1f468bad22612ea4af1172929d61e5"
  },
  {
    "url": "others/vue.html",
    "revision": "ae72b13aa1079c912dad8d502a1969a2"
  },
  {
    "url": "others/w5500.html",
    "revision": "2a37f79ef3d3763bf80ed0aaeb20a491"
  },
  {
    "url": "others/w7500.html",
    "revision": "3fb0ce32ba9e0bf67e616c9200479678"
  },
  {
    "url": "resume.html",
    "revision": "4fd40096dddf0e0e6a1c1f3194274f48"
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
