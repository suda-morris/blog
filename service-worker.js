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
    "revision": "01e07148e931577313a528b420cbe83c"
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
    "url": "assets/js/18.bf8ac22a.js",
    "revision": "2889188a74c6985e5947ed55ebe9b52d"
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
    "url": "assets/js/23.4221025a.js",
    "revision": "eb371cc7f5b8bdcd58b5575f106b7a93"
  },
  {
    "url": "assets/js/24.5b1f2768.js",
    "revision": "3d2ede1042edaf018c546ef09923c570"
  },
  {
    "url": "assets/js/25.cb8f2179.js",
    "revision": "d69d94b83cb3be06a9f8429592eef5e4"
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
    "url": "assets/js/30.86df9bec.js",
    "revision": "8791317906b6a56685f6177bb6066f72"
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
    "url": "assets/js/33.29527f14.js",
    "revision": "0a617c6627988e707171a758b15b3031"
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
    "url": "assets/js/38.5536c496.js",
    "revision": "8430c6930df78dc7768cc3d12099f3b4"
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
    "url": "assets/js/43.804c8377.js",
    "revision": "d8d920217344909586ba88ad28537ee3"
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
    "url": "assets/js/46.fdc535ce.js",
    "revision": "7f674ba5db51a5afb0680537ef501a58"
  },
  {
    "url": "assets/js/47.ed241f5a.js",
    "revision": "c1ffaadabc24557f940ad19b2eaef7ba"
  },
  {
    "url": "assets/js/48.c5df2f6a.js",
    "revision": "96affc107198c40952c34599e06d83dd"
  },
  {
    "url": "assets/js/49.781b1c19.js",
    "revision": "90faf3a5e6db74f0be2331b41c2ba2fa"
  },
  {
    "url": "assets/js/5.d1482df3.js",
    "revision": "ce019b46ef105f1e0a4dcbea33493d7c"
  },
  {
    "url": "assets/js/50.2f553ab7.js",
    "revision": "d445f8175214115327a1785cc54464e4"
  },
  {
    "url": "assets/js/51.e6889a6e.js",
    "revision": "8717ed5284da56d2a217c38c07a57399"
  },
  {
    "url": "assets/js/52.cf9ad625.js",
    "revision": "8c5eb1b767217fed66757348c5432f04"
  },
  {
    "url": "assets/js/53.64c0ac34.js",
    "revision": "e66078a95b8fd498228102b08af150e5"
  },
  {
    "url": "assets/js/54.bc1af328.js",
    "revision": "c305f9c75963d21311d198d232e00f43"
  },
  {
    "url": "assets/js/55.6d7d1125.js",
    "revision": "d1eb0e32701f28d1a4d228c45b67e6d8"
  },
  {
    "url": "assets/js/56.7cd49792.js",
    "revision": "085b6e18a6bc3e2cac2b923c9f6c8d64"
  },
  {
    "url": "assets/js/57.d3e8451d.js",
    "revision": "8d4e1cfc8391e9e0efad6ec5004d4109"
  },
  {
    "url": "assets/js/58.c558a086.js",
    "revision": "e54773c64f503cea1dbc34e111eeaaaf"
  },
  {
    "url": "assets/js/59.7b21eb3d.js",
    "revision": "adfee608b309870f0507d4873d3a9dfa"
  },
  {
    "url": "assets/js/6.b27c7c7d.js",
    "revision": "464725d390ee1c19fdeea583abe18c5b"
  },
  {
    "url": "assets/js/60.b86c7c8b.js",
    "revision": "59ae1e1cdd14c5309b22130afbd372fa"
  },
  {
    "url": "assets/js/61.022ddd63.js",
    "revision": "47d645b0369a216f662957228b0f754a"
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
    "url": "assets/js/64.8ffeca4b.js",
    "revision": "2023b1b30835be44138a6f3f3fc134d4"
  },
  {
    "url": "assets/js/65.bd557b12.js",
    "revision": "28323b0c7befb6acff43a0233297053d"
  },
  {
    "url": "assets/js/66.fe80edc3.js",
    "revision": "35f5901b546eee290d842823022361be"
  },
  {
    "url": "assets/js/67.60404a3c.js",
    "revision": "6add203c002755a1fafbca44d648db12"
  },
  {
    "url": "assets/js/68.51223d2a.js",
    "revision": "d0c3e9bc7fbf0265b4981c5eff67cceb"
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
    "url": "assets/js/70.5c5ccb06.js",
    "revision": "46d5f1599d04a438549f998185eb193e"
  },
  {
    "url": "assets/js/71.b7fc4f2f.js",
    "revision": "e22d5d9d2a82436cf3cabd635e6fef7f"
  },
  {
    "url": "assets/js/72.9e4ee787.js",
    "revision": "55ceb2b076b533e61c946b0ce275cd3e"
  },
  {
    "url": "assets/js/73.d90535de.js",
    "revision": "aba96a2b5db75327cc1cfdb0e83c638d"
  },
  {
    "url": "assets/js/74.ec9a01e6.js",
    "revision": "19b4878b501b44e0ec47c835a0b7a4b1"
  },
  {
    "url": "assets/js/75.954f8154.js",
    "revision": "c93e5f0f4d208f9f3768722727e72705"
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
    "url": "assets/js/78.ed40cc29.js",
    "revision": "5517b92147209405c6fd79cdd3ebda09"
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
    "url": "assets/js/9.690a78c5.js",
    "revision": "ad3d6e3d095d2866965dc5af6dada2f6"
  },
  {
    "url": "assets/js/app.5b729b9f.js",
    "revision": "1178841661555e03b68f04ed41075a92"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "5173ce8552b2ea2752e0d7de9d20525e"
  },
  {
    "url": "cs/bash.html",
    "revision": "2a330efefc965e3009824237047438c6"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "e21957f9d28ff741194a6bb76e1a8825"
  },
  {
    "url": "cs/cmake.html",
    "revision": "3b7adf431bf1e042a89302b09602ea50"
  },
  {
    "url": "cs/compilation.html",
    "revision": "333f74a0d39372d75e01e69579303076"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "7c7bd5e65c7301bb3ea8a9ce22d26d42"
  },
  {
    "url": "cs/git.html",
    "revision": "d971a4d353f5869bb2ab90f949e0202c"
  },
  {
    "url": "cs/index.html",
    "revision": "372392b79b2131ffc89421806ffbcdd3"
  },
  {
    "url": "cs/keras.html",
    "revision": "297eb3117318f52df26bc65d82d64c1a"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "ff52166d9b3ebe828056d6a9542f6980"
  },
  {
    "url": "cs/lwip.html",
    "revision": "c2540b421422286f129baad0d33879ff"
  },
  {
    "url": "cs/scala.html",
    "revision": "24f0c2327e01b4d5f66ab372c6b08526"
  },
  {
    "url": "ee/about.html",
    "revision": "494125d54f7ebdf0b151e6009f3e726d"
  },
  {
    "url": "ee/chisel.html",
    "revision": "cefc2269201ea6a4789319f157ca491c"
  },
  {
    "url": "ee/esp32.html",
    "revision": "3cab2e10459230af2a66cb6dc245715c"
  },
  {
    "url": "ee/index.html",
    "revision": "2207b07e0620b1d620bc0e79b5ae7610"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "e6a8a42eddfba3f19ddd37627037001d"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "f3bb9445fdaba895b3d5e006b578ce5d"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "92e18a3a4bc8d11804d4752ff82feb6e"
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
    "revision": "a0d808703babc3f5d6b53363f0641882"
  },
  {
    "url": "others/about.html",
    "revision": "c64ed455436a385719ee65566dce4c3d"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "10e112c9b8057f1a7886c5935bf01587"
  },
  {
    "url": "others/android-studio.html",
    "revision": "bfd250199e48986f05edf4fa94cd5c18"
  },
  {
    "url": "others/android.html",
    "revision": "cecef107124a17f8ec8eb8784a83feb2"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "90fcf005037ce03c6ddfefb73e7ba78e"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "554ced72f5e4d111d9eab244f068ca25"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "58e0a84aeab053daf8cba133cd93fefa"
  },
  {
    "url": "others/css.html",
    "revision": "b117294616c2f476c851878be234ac82"
  },
  {
    "url": "others/docker.html",
    "revision": "5f803c00eb7497eb151626b9e9686f5c"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "b715ff2e1a2c7c19fa8d581fc389b231"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "2abf4d6a88b4698eb0d72300756144b4"
  },
  {
    "url": "others/english-writting.html",
    "revision": "c1251c7ca07276ebbfff96a1b35f904f"
  },
  {
    "url": "others/freertos.html",
    "revision": "c5bb1cc2463ce83f4dac340d1511c201"
  },
  {
    "url": "others/gns3.html",
    "revision": "5e9e60f7cb4b62da401a8555d6130d11"
  },
  {
    "url": "others/gps.html",
    "revision": "fed032049cee0f6f5b86581892786bc5"
  },
  {
    "url": "others/html5.html",
    "revision": "054a42459a9a0918a6df7f1d659e793c"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "cc502ecaf1deb3836d97071c53fcf70a"
  },
  {
    "url": "others/index.html",
    "revision": "7ec1cd36a935264112dc114fe8cf2a89"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "4c6f83173e23edcbf6a2e5c256655b43"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "765038907b3f5ca6987b02e8db226ada"
  },
  {
    "url": "others/javascript.html",
    "revision": "ce2472f44cb393a790959756d2d13252"
  },
  {
    "url": "others/json.html",
    "revision": "06d622051e8a59fa678d0358a5f3946f"
  },
  {
    "url": "others/latex.html",
    "revision": "9c5225e1aeacf56b2e393f2437fd19b7"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "eb1d5c04f28dde88567a246deed6b1d9"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "a49cbaec47e1b8a17883fd5e6d4bf57f"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "4ed48d8f279bdad064067e7c2b518c58"
  },
  {
    "url": "others/markdown.html",
    "revision": "aaa23746ebace3766fe0234ad4aafd3d"
  },
  {
    "url": "others/matlab.html",
    "revision": "da23808de0454386f083a531cec15785"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "3100a1f2cf881e81c1971ec0bad19c86"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "ebbf53a860da9b2eefe3dcf03b6d529b"
  },
  {
    "url": "others/network-security.html",
    "revision": "08ce22e12b8d4da465ac8753ad80e8d8"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "7bd0ad589811f5b73891a4f4916b7aca"
  },
  {
    "url": "others/oral_english.html",
    "revision": "dc847401fe4bcd13369235ec2455fb69"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "6adbbd26e078f36dc92123134b0dc7e2"
  },
  {
    "url": "others/poe.html",
    "revision": "18b36852916cf42a522287f11e00104b"
  },
  {
    "url": "others/pyside2.html",
    "revision": "061c0837833ea2255c6b68017a511da7"
  },
  {
    "url": "others/python-socket.html",
    "revision": "6970239751bd27734a32326864d1e44e"
  },
  {
    "url": "others/python.html",
    "revision": "38168a4f988541474f633825926cb5b8"
  },
  {
    "url": "others/q-learning.html",
    "revision": "c32b336e74a6a1154fbe6efb71d8fb4a"
  },
  {
    "url": "others/qr-code.html",
    "revision": "5cf3b284dbd1c37e8a2673b51eced023"
  },
  {
    "url": "others/qt4.html",
    "revision": "d6a5991ca4f948ed5065806facaeb3cb"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "f69acaf8581cb1695f559e3b759f1e87"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "82193a71dd4cdeb53afbf9aa65e383dc"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "76f6f590b09757c0f4b881a9471484dd"
  },
  {
    "url": "others/sd-card.html",
    "revision": "d613772f2f4e057e6d357caba2255fce"
  },
  {
    "url": "others/sdn.html",
    "revision": "6ccdc1e4ea231d9732137fca68717982"
  },
  {
    "url": "others/star-uml.html",
    "revision": "45222e92b66da76a5c002d430ce62cd2"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "c6c7b01457d2c4ed1653ad7a69f7446f"
  },
  {
    "url": "others/verilog.html",
    "revision": "4a5af62c33258f6fc2fa6cf347f3f62b"
  },
  {
    "url": "others/vue.html",
    "revision": "6be38caca81073bb23ccd489dac76fb4"
  },
  {
    "url": "others/w5500.html",
    "revision": "3b1ef756fd56dd3c3ce419c74724b7c6"
  },
  {
    "url": "others/w7500.html",
    "revision": "076df8349a4ea7bbdacd94b347651a13"
  },
  {
    "url": "resume.html",
    "revision": "b3ef3d29777aed84bccf6ba129c1f612"
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
