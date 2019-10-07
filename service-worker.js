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
    "revision": "ebc100f194e5f078f7638327b9aebdf9"
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
    "url": "assets/js/13.5a588e86.js",
    "revision": "7f788dbad0f5a3d61bece934866ad61e"
  },
  {
    "url": "assets/js/14.9858fe3b.js",
    "revision": "6b71647f782c7db67d3270c05503d6e8"
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
    "url": "assets/js/18.ca1365b3.js",
    "revision": "da3a4f8a65a718535ef53bb5a8031974"
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
    "url": "assets/js/50.31965ed1.js",
    "revision": "d5664a748d38ef4a5fba04f2b088819e"
  },
  {
    "url": "assets/js/51.ddfcbfad.js",
    "revision": "5ab62448a500af8bccb3106c663e9c6e"
  },
  {
    "url": "assets/js/52.c6b4968d.js",
    "revision": "410cd5a6572bab8dd8920339fa0b21a9"
  },
  {
    "url": "assets/js/53.434393dd.js",
    "revision": "729ddb19b2f924ea8235a6c32afc889f"
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
    "url": "assets/js/56.6ade23ad.js",
    "revision": "e7d5ac77526fd6126974bfb6c61980a7"
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
    "url": "assets/js/59.3a65e903.js",
    "revision": "ba503fb96df566d2e625a2a8abc6e1ed"
  },
  {
    "url": "assets/js/6.b27c7c7d.js",
    "revision": "464725d390ee1c19fdeea583abe18c5b"
  },
  {
    "url": "assets/js/60.dd7293ea.js",
    "revision": "30eb4637bc0ef3f44d15fe79d1acedca"
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
    "url": "assets/js/68.3a5891e1.js",
    "revision": "d95250c8bf916040a27356bdddd06761"
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
    "url": "assets/js/70.bd4428ea.js",
    "revision": "870e8517ecad2deb30e39343ba738321"
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
    "url": "assets/js/77.f57fd593.js",
    "revision": "54a99ff325050325acaa1fcef5e6bbc1"
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
    "url": "assets/js/app.898da244.js",
    "revision": "834e185054dab9afadb7712aa371963c"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "0daa0f31944b968953da62a64eb37f29"
  },
  {
    "url": "cs/bash.html",
    "revision": "1413022460daef3a838266cacc2b8906"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "5b9d19a6fa20f323b2a9ad597b8f7e14"
  },
  {
    "url": "cs/cmake.html",
    "revision": "f20ec89b42d4c5858b3449dbcf4bd09b"
  },
  {
    "url": "cs/compilation.html",
    "revision": "b5a11187a0e186c9d32ae654882adb20"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "e8fec8f05d488c502162c0189add1014"
  },
  {
    "url": "cs/git.html",
    "revision": "80321bad0dc7e5b949bec1beaa38df33"
  },
  {
    "url": "cs/index.html",
    "revision": "bd0279848304e60e87bbb4a1a6ad6d81"
  },
  {
    "url": "cs/keras.html",
    "revision": "b60f1a5acfd4187c2e4396e671d8daf8"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a29890341122111793675236d44f0ed5"
  },
  {
    "url": "cs/lwip.html",
    "revision": "f434d07c84694a3a9ec04058efa4f113"
  },
  {
    "url": "cs/scala.html",
    "revision": "9d046cc75e0e6f5bc3f4e43ffe144c81"
  },
  {
    "url": "ee/about.html",
    "revision": "1307fcee3efc21191b820df65874aa6f"
  },
  {
    "url": "ee/chisel.html",
    "revision": "576431c1d31eb59b412e6ce43f6d982c"
  },
  {
    "url": "ee/esp32.html",
    "revision": "4c5372cb8219c1252932a947508784d7"
  },
  {
    "url": "ee/index.html",
    "revision": "5ad41ecb99b82051f70f5c228eb455cd"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "37555c6c4c28453e5b5c0a460838b8c0"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "fed9b03a9ba970dc01f7af9e2d86a1d0"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "aa1201fe2b2fae52aa96dcc012931727"
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
    "revision": "eafedeab0db619fcd6071a0ec2175cb6"
  },
  {
    "url": "others/about.html",
    "revision": "582e8ebfbbdbc534f8ca4cb4cac46567"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "132471742396bf9ca2680caa619f8ca7"
  },
  {
    "url": "others/android-studio.html",
    "revision": "e553e2c2f949bb594c03123b7f7c058e"
  },
  {
    "url": "others/android.html",
    "revision": "c38fa3cb4974ceaec774bc27f3ca912f"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "8201dbf73880e17a3aa9aa591435f7b8"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "19e7e2646f7dc19c44079b6211d32bd3"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "9b9c3ae6f41942773b3fee2c4654f3d1"
  },
  {
    "url": "others/css.html",
    "revision": "bb1764d54d6a70b16bbd581bb6b3e02a"
  },
  {
    "url": "others/docker.html",
    "revision": "ad269a58f5a34d4b6122c7afb6920a9a"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "468e11b0110c93109f1879b83d2cd95f"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "1519df4d9cd7b698582ccb0503dd812b"
  },
  {
    "url": "others/english-writting.html",
    "revision": "d5a026fdc81aaf508ba7a8f5300c7745"
  },
  {
    "url": "others/freertos.html",
    "revision": "9fa1ccea6d8cdb210989760aa705c61d"
  },
  {
    "url": "others/gns3.html",
    "revision": "d32da50ebec7100aee98ca11958a1b0c"
  },
  {
    "url": "others/gps.html",
    "revision": "315dcf2d240f2be415dfd0e65a88a045"
  },
  {
    "url": "others/html5.html",
    "revision": "f1b55e7d534c663de6b88ba05c46c917"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "3e42f6decb15c7f11f6283080ce19d32"
  },
  {
    "url": "others/index.html",
    "revision": "b57f6922acbc4c73e04be1a90a90fc0a"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "559581b96e27abff97dee15e62991354"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "232803f39071a4f5cb67e100866561bb"
  },
  {
    "url": "others/javascript.html",
    "revision": "3af4858685baf3445221202ea2473b7c"
  },
  {
    "url": "others/json.html",
    "revision": "0684c473d5c441093e5f4fd0e4f0047a"
  },
  {
    "url": "others/latex.html",
    "revision": "ac205d598dcb90fab2b2d2c53298b6c2"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "4f89427c3b3430c0b4ec60ae3620ead3"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "5cb25c57c94e5ed9c84b327d6159dc59"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "2c2d33650150132987387656bfea5d48"
  },
  {
    "url": "others/markdown.html",
    "revision": "6b56b273127ba3dacd561cb0a2ed3bd3"
  },
  {
    "url": "others/matlab.html",
    "revision": "6affcb278b58d250a400a23af86851e8"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "c0435b9d1eebba49c1c19d2497a8d5f5"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "765e19b29d918dff6e87a0d38ce81f30"
  },
  {
    "url": "others/network-security.html",
    "revision": "919cc1fe92127ca826aafa6b3eb0bbb1"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "00cdab3721a922a90ec6149dd0aa10d9"
  },
  {
    "url": "others/oral_english.html",
    "revision": "2819497c583b591de1d50513421e947a"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "5668a0b85047d8e54edec17fefeb1ba3"
  },
  {
    "url": "others/poe.html",
    "revision": "016a2df62d6c520433e4bff026b3cdf4"
  },
  {
    "url": "others/pyside2.html",
    "revision": "b974a452c983be460408c5e97c80a4fc"
  },
  {
    "url": "others/python-socket.html",
    "revision": "80146cd90232b886a07fb89f8e1ca933"
  },
  {
    "url": "others/python.html",
    "revision": "7b571ce6b97f54b89e8ff04da3856ea8"
  },
  {
    "url": "others/q-learning.html",
    "revision": "dfbfa3118e416b1d0760c4299e40ff03"
  },
  {
    "url": "others/qr-code.html",
    "revision": "9d3f8592eb2093487b515c2ec088ca73"
  },
  {
    "url": "others/qt4.html",
    "revision": "1d7617070039ec5fbe28e963e84ebdeb"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "e2ebf9e409bc9eb3ce670045c1393e76"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "367a32232f9bb60128f5b104f4ba0536"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "642941dd52ab9238883c5bb245843a19"
  },
  {
    "url": "others/sd-card.html",
    "revision": "fcadf1a95d46c43f8d4ea03c9f35232c"
  },
  {
    "url": "others/sdn.html",
    "revision": "9faa8a5c279c7bb124ffae1080b1218b"
  },
  {
    "url": "others/star-uml.html",
    "revision": "2a23eb822561e8444e50b0c78e215e7d"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "e607cef8e13a3128a47a4430ba2eea79"
  },
  {
    "url": "others/verilog.html",
    "revision": "32df97e1b5b01b0cf2a13f7ecb4772a4"
  },
  {
    "url": "others/vue.html",
    "revision": "4b1ce0d83ff657e0b6942f4ca23222ee"
  },
  {
    "url": "others/w5500.html",
    "revision": "45eceb7141bc42fee0a680b268f3c39c"
  },
  {
    "url": "others/w7500.html",
    "revision": "dc6fb5b08c9e4796bf09390afd93e346"
  },
  {
    "url": "resume.html",
    "revision": "2841dc1b28b2cc34bdaa6d7ecf4332da"
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
