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
    "revision": "5cae5eef2c416d6fc0ce82632193ffce"
  },
  {
    "url": "assets/css/0.styles.6499505b.css",
    "revision": "d5ea663310e84cd4ec7a8ee87c2a3d5b"
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
    "url": "assets/img/cache_system.0bb68b0b.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
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
    "url": "assets/img/input_signal_to_peripheral.a9b187b8.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "assets/img/interrupt_matrix.dc37bcbd.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
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
    "url": "assets/img/lwip_icmp_protocol.a19c8c2e.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "assets/img/lwip_ip_frag.c71fe3b0.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "assets/img/lwip_ip_input.2eb1bb3b.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "assets/img/lwip_ip_output.a56af61e.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
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
    "url": "assets/js/10.82c6c11c.js",
    "revision": "e2e5138efe1dd7be65ddbeccf4df6560"
  },
  {
    "url": "assets/js/11.ff63db6c.js",
    "revision": "971a378a78ce97d89f9db3e1dce37c27"
  },
  {
    "url": "assets/js/12.1d1abe1f.js",
    "revision": "830e63baa7c2cf9ee63146fa064e3fe5"
  },
  {
    "url": "assets/js/13.2c40dcb1.js",
    "revision": "4668b9a94bd319fd002196b478210e0a"
  },
  {
    "url": "assets/js/14.75ede771.js",
    "revision": "2b716901bf2bc49a1f8ee358ca3142dd"
  },
  {
    "url": "assets/js/15.e4e2bace.js",
    "revision": "6a72f1fbbd1a9f449bf543851951aca5"
  },
  {
    "url": "assets/js/16.b24dceb1.js",
    "revision": "a74d8a59b09c0e0ea54f73cc3651753f"
  },
  {
    "url": "assets/js/17.d4bbf246.js",
    "revision": "790cf57b279db8bb233cb8f4f92a4a1b"
  },
  {
    "url": "assets/js/18.e63a5f4c.js",
    "revision": "44035c42cfe0615c92f2c11cd3002816"
  },
  {
    "url": "assets/js/19.4040b68e.js",
    "revision": "81d3be02db7a0f3f07da43172efc5975"
  },
  {
    "url": "assets/js/2.bfba40aa.js",
    "revision": "fc48fae5dffd6f42149cd4f2c6f50f19"
  },
  {
    "url": "assets/js/20.d1778c3d.js",
    "revision": "86a17a6d8ae9b0bcedc4d1e9b1523073"
  },
  {
    "url": "assets/js/21.5753b09a.js",
    "revision": "9473cb9eaabb44b0c403650460e93d58"
  },
  {
    "url": "assets/js/22.53d3630b.js",
    "revision": "9c4288d8e8b2b713752072ed7464b6aa"
  },
  {
    "url": "assets/js/23.d0b72c93.js",
    "revision": "f3fefc0613628fdbc06409c2097f2d32"
  },
  {
    "url": "assets/js/24.a4ec1fdd.js",
    "revision": "d0309bb2702bdb0a76883223c1a3c138"
  },
  {
    "url": "assets/js/25.6ca942be.js",
    "revision": "d8be01a01c0e17db88b498672c683565"
  },
  {
    "url": "assets/js/26.e77fbb72.js",
    "revision": "2bc7b8625ec22abbeec0a47c3d677afc"
  },
  {
    "url": "assets/js/27.86d6ac51.js",
    "revision": "8a3eecc558083397391ab93e93730561"
  },
  {
    "url": "assets/js/28.35c2c348.js",
    "revision": "5ffc5b4a9c851ba3442bfd45abd2de10"
  },
  {
    "url": "assets/js/29.39d9ee2f.js",
    "revision": "ddc24ede5590b748117d5b5e47749738"
  },
  {
    "url": "assets/js/3.2d5eb4b5.js",
    "revision": "1c553c0fe55e05f8063a3114c7add667"
  },
  {
    "url": "assets/js/30.582f4977.js",
    "revision": "2e2f0a046a5158a571c973330ab0eab3"
  },
  {
    "url": "assets/js/31.5b8bdd94.js",
    "revision": "94f4d203cd79b4652b694251b2d02762"
  },
  {
    "url": "assets/js/32.df236284.js",
    "revision": "7f1525ac12120cdc451cade68fddb2f2"
  },
  {
    "url": "assets/js/33.d99ed35b.js",
    "revision": "333bb70a1de02ac2bbf35282e1869813"
  },
  {
    "url": "assets/js/34.50b7dbac.js",
    "revision": "4f22e50496bb0a70c87c75056c868965"
  },
  {
    "url": "assets/js/35.904adfc7.js",
    "revision": "73b62b857ecf331a713f333e954ee478"
  },
  {
    "url": "assets/js/36.4c8b4de0.js",
    "revision": "343d5382cbfea3ce894b3cb8ef6bb984"
  },
  {
    "url": "assets/js/37.f541f4b2.js",
    "revision": "63174e7441a0cdb305be5fa84c369b83"
  },
  {
    "url": "assets/js/38.a564d890.js",
    "revision": "7cdc0936627c6d0b00b641a3885d3e0d"
  },
  {
    "url": "assets/js/39.47c6e22e.js",
    "revision": "2867f1422b5cc6abe45badb63aebfd9a"
  },
  {
    "url": "assets/js/4.a6897b04.js",
    "revision": "9a8d3b660fffd7c1712662ca27cb6e49"
  },
  {
    "url": "assets/js/40.ee9f4c5c.js",
    "revision": "500d989b47fa393944a81cac5c3a4c75"
  },
  {
    "url": "assets/js/41.64cfdea3.js",
    "revision": "bd6684eeeb1ffdece056237b8255641a"
  },
  {
    "url": "assets/js/42.7a1a9831.js",
    "revision": "f6418b336d012db4f89c27c654e47a4d"
  },
  {
    "url": "assets/js/43.d39f22cf.js",
    "revision": "47104f7a59b880c062dad66ac255722b"
  },
  {
    "url": "assets/js/44.657882b9.js",
    "revision": "dc651798291ae6614191c7596eb9982b"
  },
  {
    "url": "assets/js/45.489a9574.js",
    "revision": "d1b900487e326dffedd85057c8375d25"
  },
  {
    "url": "assets/js/46.0d2ed0f1.js",
    "revision": "21eb18c41a54e567578da2879bf1cbe9"
  },
  {
    "url": "assets/js/47.9153a702.js",
    "revision": "863c43f16af0c92a9d1a357181ffced7"
  },
  {
    "url": "assets/js/48.82411da9.js",
    "revision": "dd58650f0263b7d430d26e5219fa31c4"
  },
  {
    "url": "assets/js/49.f273480c.js",
    "revision": "77aecd4ca6f187bd5e244731ceca20f9"
  },
  {
    "url": "assets/js/5.0b66e673.js",
    "revision": "072a99cfe7b688d469820122c51c4cf1"
  },
  {
    "url": "assets/js/50.d8c536ab.js",
    "revision": "d31d02dd8defcf616f95ac5fdd5e3f79"
  },
  {
    "url": "assets/js/51.7254fd80.js",
    "revision": "3d13ece5d824e7a19b91915fcc064b99"
  },
  {
    "url": "assets/js/52.f1c81958.js",
    "revision": "50e011aa2a694b9edec312ca0611bc24"
  },
  {
    "url": "assets/js/53.cace80a5.js",
    "revision": "a4a06d59d5d2af16f764d8c4b6092f37"
  },
  {
    "url": "assets/js/54.24fa40ba.js",
    "revision": "5bcc273ca36e835c3bd4e8ef86fec00b"
  },
  {
    "url": "assets/js/55.47dcdb03.js",
    "revision": "609e22cae64f0a8e5af649bf946b6cf1"
  },
  {
    "url": "assets/js/56.1e3a7e35.js",
    "revision": "47f919e493ded7751b0da3d68e6a2fc4"
  },
  {
    "url": "assets/js/57.1d239d51.js",
    "revision": "f710f9903a17d41990df1294ad9eda3c"
  },
  {
    "url": "assets/js/58.07ebdc0f.js",
    "revision": "46ee2fd35d7e3fc91b7187a3eefcb468"
  },
  {
    "url": "assets/js/59.4109a5f1.js",
    "revision": "4ffb162469c19a5dc9b884f72b459ad6"
  },
  {
    "url": "assets/js/6.bd4f2206.js",
    "revision": "012334c19f5717ff4e4d01becdd7b983"
  },
  {
    "url": "assets/js/60.8108f0d0.js",
    "revision": "74f3232c24800617fe821993bb3ae35b"
  },
  {
    "url": "assets/js/61.7c8595ce.js",
    "revision": "1e630f05b8f587b20c06b0091014afa0"
  },
  {
    "url": "assets/js/62.a2e24d87.js",
    "revision": "916a7fa277ba3c128757d7f3e96b5ad4"
  },
  {
    "url": "assets/js/63.769f8b17.js",
    "revision": "6e80b3bfa354864a2e1b9b66f824b6a5"
  },
  {
    "url": "assets/js/64.ee5a40d7.js",
    "revision": "7eebc6f5d263429875cc60ca09c167ee"
  },
  {
    "url": "assets/js/65.19cadc70.js",
    "revision": "567662e88e207eb9fd9a06d444f11a36"
  },
  {
    "url": "assets/js/66.0636dc5c.js",
    "revision": "2cbef6463dce5e230b927d6357292d97"
  },
  {
    "url": "assets/js/67.8569ef3d.js",
    "revision": "7543ec34530874ae55551b57030f072f"
  },
  {
    "url": "assets/js/68.cb1e9152.js",
    "revision": "e05c0ca1f808f126eb881ca3c1affd60"
  },
  {
    "url": "assets/js/69.833e62d8.js",
    "revision": "1aa762576ae00a0b5b1aff36f859b8d1"
  },
  {
    "url": "assets/js/7.dca6eddf.js",
    "revision": "cbe059f11e202cbaa78d3bf675063fc4"
  },
  {
    "url": "assets/js/70.ef27c4fa.js",
    "revision": "6bf0cec5446cc14ec3833911b6eb792f"
  },
  {
    "url": "assets/js/71.a64a5ba3.js",
    "revision": "f0a979591bb730274bbe02f1b91903a3"
  },
  {
    "url": "assets/js/72.bb434fb6.js",
    "revision": "549bea4c1abe1eba5afe1c0451a4dd24"
  },
  {
    "url": "assets/js/73.1b423204.js",
    "revision": "784b08af0b7fa0eb2a8d7516e1b089b3"
  },
  {
    "url": "assets/js/74.1aabd0d4.js",
    "revision": "1dd8d909fad941d25fdc8b1971fb50a0"
  },
  {
    "url": "assets/js/75.4fc0f8af.js",
    "revision": "55172d1190cb84fd94de23da6286dcf8"
  },
  {
    "url": "assets/js/76.de4ea69a.js",
    "revision": "1bef9edfd09070f3e5e8fa3ac91cecc9"
  },
  {
    "url": "assets/js/77.5dcfcfb1.js",
    "revision": "6b0b3a775d59c8ad2bb700bc06c90c3f"
  },
  {
    "url": "assets/js/78.0004d31a.js",
    "revision": "587fa836e6557d831c47e53c94a07031"
  },
  {
    "url": "assets/js/79.030ab260.js",
    "revision": "8d8ac292cf6fcb1bbdadff6a26d448b9"
  },
  {
    "url": "assets/js/8.fa238af0.js",
    "revision": "96bccca8fd1d3c24a727b7904d6c6d77"
  },
  {
    "url": "assets/js/9.02b5d70c.js",
    "revision": "79d75102368f01e7f9f46ea5a465aa74"
  },
  {
    "url": "assets/js/app.4355feb7.js",
    "revision": "d8f612190bfaeea1b3d5640a4af85eb3"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "e19bc2bf58973f6a7ad360c38e7a0113"
  },
  {
    "url": "cs/bash.html",
    "revision": "f8672cd0c51485950201aff7dde1a838"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "cac5e7e1c66981bceeffff81a1ad37eb"
  },
  {
    "url": "cs/cmake.html",
    "revision": "ea7324687cc4471b9ab4e813644f94c7"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "9cdb5b01b3107020b87fc522b1641bf1"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "16cabc949d015c80f418bc187f3c146b"
  },
  {
    "url": "cs/git.html",
    "revision": "d2d8452388e8f5acd8b2da45a03cf118"
  },
  {
    "url": "cs/index.html",
    "revision": "7078049d038f74d8e1653e06af6e3f0f"
  },
  {
    "url": "cs/keras.html",
    "revision": "7ddc108d6aa5deffe476e99d1b3ff110"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "376a74144e5fa6652f065e60820449a5"
  },
  {
    "url": "cs/lwip.html",
    "revision": "651f806c137695c17ac92194eab94aae"
  },
  {
    "url": "cs/scala.html",
    "revision": "5105da3ff4a22e30e2d8f767a89496a0"
  },
  {
    "url": "ee/about.html",
    "revision": "d6f6fb9d5bcd930c97c9ab51ddae8a52"
  },
  {
    "url": "ee/chisel.html",
    "revision": "acf3037392d027dcd30f650aed63d276"
  },
  {
    "url": "ee/esp32.html",
    "revision": "519cc9add96f8eabd456714fbc5c8cb1"
  },
  {
    "url": "ee/index.html",
    "revision": "2b7fa9e282fb2079dfd86b41368caab2"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "1cf683d0540e6988ea588ed6f0c8dedc"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "80bf1c457401db05328b30ab7614c722"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "d304d85d363d8e64ff4bbd19ec551afd"
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
    "url": "images/cs/lwip/lwip_icmp_protocol.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "images/cs/lwip/lwip_ip_frag.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "images/cs/lwip/lwip_ip_input.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "images/cs/lwip/lwip_ip_output.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
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
    "url": "images/ee/esp32/cache_system.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
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
    "url": "images/ee/esp32/input_signal_to_peripheral.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "images/ee/esp32/interrupt_matrix.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
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
    "revision": "3a944efef461e81bd2668c6ddd7dbb2b"
  },
  {
    "url": "others/about.html",
    "revision": "e3b0a7c23133b76785dcc77f5b1e7763"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "1434f4af262a6e8a26b27c745046b095"
  },
  {
    "url": "others/android-studio.html",
    "revision": "dc6336b9fe6d1e432ab72e83eea316f4"
  },
  {
    "url": "others/android.html",
    "revision": "a2997c2172f800481114b6da3d23982c"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "ad8e45fb1c750ae82a43790059509921"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "51bac097e6c1ef292deb064b89b3aa6f"
  },
  {
    "url": "others/css.html",
    "revision": "7ff8928d9a7df77371a6a26daeab4077"
  },
  {
    "url": "others/docker.html",
    "revision": "8e1a4111599c073897483e577892677e"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "d77922beb4df6fddf4cbfbfecc0fcb45"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "fc2ea26675ab99d08a39618cce41d87f"
  },
  {
    "url": "others/english-writting.html",
    "revision": "7ae425fad778bb832dbf5d18477d33f6"
  },
  {
    "url": "others/freertos.html",
    "revision": "9a5ca54893d50230a2b99ba3edf2219b"
  },
  {
    "url": "others/gns3.html",
    "revision": "25fe85b6b190d8746d4a2376c832167e"
  },
  {
    "url": "others/gps.html",
    "revision": "2ca9967808e09ceaa495a233dfcf73ed"
  },
  {
    "url": "others/html5.html",
    "revision": "f7002ac27d35d2f1feec48cd361bfe51"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "2d857b27502c96b28b64bebda4365f19"
  },
  {
    "url": "others/index.html",
    "revision": "5cadbb964aacb2b3c911870c1c83acb9"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "75797c02aeb57ffd8efdac038c66d11e"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "b4be56c05ef55c1f409465fa95bc57b8"
  },
  {
    "url": "others/javascript.html",
    "revision": "a38092b0e7025054f8a88107ef114e4a"
  },
  {
    "url": "others/json.html",
    "revision": "fb1da3d104ccc749ea093e8c55a5f595"
  },
  {
    "url": "others/latex.html",
    "revision": "d95427e6d88b3f5c13c173ec6e3e230d"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "947607655e87504f353ac219b9cee749"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "6db501eb77aa6ab01bf8327097690ad2"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "f9bd6d2ba548b6930224b75cf3ef9aa9"
  },
  {
    "url": "others/markdown.html",
    "revision": "33a04a6e6ea76a93d5f86e136be1946d"
  },
  {
    "url": "others/matlab.html",
    "revision": "8e5e2592236e6c5921ad7a542ace00bb"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "2bac2ab955cc04ac14a36123c5b2e446"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "80341b8c799abb45b213466b0266671e"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "bc8fbcc94e586ca781132885bf5a3f54"
  },
  {
    "url": "others/network-security.html",
    "revision": "9efe341cebead1b811663da2e418a059"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "2fa7e307117b083c7597e20f92057284"
  },
  {
    "url": "others/oral_english.html",
    "revision": "b0bc1e0bf5daa39923940e1d126c13aa"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "fe9321c7b2557673699916f71c2ab596"
  },
  {
    "url": "others/poe.html",
    "revision": "6fb8124e9d31e0a57adf0313e0eaafa4"
  },
  {
    "url": "others/pyside2.html",
    "revision": "24c6605451b92bce59aef7e92ba116e4"
  },
  {
    "url": "others/python-socket.html",
    "revision": "2efa98202c78edc6359b2788f712edea"
  },
  {
    "url": "others/python.html",
    "revision": "3be01c0fac5dea644fcbe4f92680e296"
  },
  {
    "url": "others/q-learning.html",
    "revision": "51e97ca21addef88dbf26e471755567f"
  },
  {
    "url": "others/qr-code.html",
    "revision": "0636912e8de60f7c6a5c3fdcad5b54fd"
  },
  {
    "url": "others/qt4.html",
    "revision": "8efbb645ceec5dabe7aa573e462d8e9c"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "41d1040bbe945a052918889559c570f1"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "236d4652f0da475c4c2dd2303c6cf741"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "b608522b877609d7ff167d8bb5c8d138"
  },
  {
    "url": "others/sd-card.html",
    "revision": "b01b83e582ada93204bf770c4c92f831"
  },
  {
    "url": "others/sdn.html",
    "revision": "a0b9d6e1b0fc4218ba19f8acc1016df3"
  },
  {
    "url": "others/star-uml.html",
    "revision": "72695b427aa323e6f109e35325852085"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "42242935b59f589dabdf6335977e5776"
  },
  {
    "url": "others/verilog.html",
    "revision": "79c1d8d237ff0bfcc0425429ac80858e"
  },
  {
    "url": "others/vue.html",
    "revision": "44fbd86b06bc8bbdf1ae8d6b7ec66ae2"
  },
  {
    "url": "others/w5500.html",
    "revision": "058dfccb8882237e4b3162f6dcb29809"
  },
  {
    "url": "others/w7500.html",
    "revision": "02a101fff2b75c89eebb4ecd7f13b607"
  },
  {
    "url": "resume.html",
    "revision": "06371c2e11906eeb8fbec6a2237eb2e2"
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
