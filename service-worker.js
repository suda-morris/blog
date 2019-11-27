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
    "revision": "9869381e0cc712e04d64d8b49ece4636"
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
    "url": "assets/js/10.00ded5d7.js",
    "revision": "2fef2095f819320cecaea2f45cab5e83"
  },
  {
    "url": "assets/js/11.d1d79cdc.js",
    "revision": "78fd4306d04a6699e1397d2486ae1f81"
  },
  {
    "url": "assets/js/12.e615321f.js",
    "revision": "e3e405e0185128903789fdfacde2223e"
  },
  {
    "url": "assets/js/13.96bdd9c3.js",
    "revision": "6ff9568d016efcfebe222b747efb0f7c"
  },
  {
    "url": "assets/js/14.ad2da871.js",
    "revision": "4ac96edc2b4cc51fbb76adc1366c5743"
  },
  {
    "url": "assets/js/15.f5a16151.js",
    "revision": "3cc1a98219ef958990def538c18a31f7"
  },
  {
    "url": "assets/js/16.59fd33ef.js",
    "revision": "11d8c7047a67417abf2a98f539c43d3c"
  },
  {
    "url": "assets/js/17.be43d567.js",
    "revision": "27e10c27c1b7d80da684e2b3a2999c83"
  },
  {
    "url": "assets/js/18.2ab089df.js",
    "revision": "92b80988736f6257a0f310422937b82f"
  },
  {
    "url": "assets/js/19.709d33d5.js",
    "revision": "3c9291d6825fd092e9844a5a249ea54a"
  },
  {
    "url": "assets/js/2.fb0c29b6.js",
    "revision": "c16c8fc9fb291bae2a130910ad2f5f62"
  },
  {
    "url": "assets/js/20.126832d2.js",
    "revision": "f863039816c809ce0f21a6b104f62b23"
  },
  {
    "url": "assets/js/21.91aece60.js",
    "revision": "7c2ee3aec19d2e77514f8d5993edd317"
  },
  {
    "url": "assets/js/22.8f4cc99c.js",
    "revision": "9f388df80851bd93ba622b3e75c0e85a"
  },
  {
    "url": "assets/js/23.bad77b92.js",
    "revision": "45a119da8c9d04b6ea4e1fd08ca7a8ad"
  },
  {
    "url": "assets/js/24.3395f892.js",
    "revision": "cc23641cebce0858a090e7c0f25785ae"
  },
  {
    "url": "assets/js/25.3c9b2f0a.js",
    "revision": "26623016c77b73fac905d9a8d106ad6d"
  },
  {
    "url": "assets/js/26.068aa5d6.js",
    "revision": "1434561e4814866e4fe8d89db0936408"
  },
  {
    "url": "assets/js/27.8fb499a5.js",
    "revision": "b0271b09d106d11628f0c07408ce17e7"
  },
  {
    "url": "assets/js/28.0dd2d667.js",
    "revision": "6f5452fcb1229d6bec72b294ea15de8e"
  },
  {
    "url": "assets/js/29.e459b01f.js",
    "revision": "2205e1b766687d888f261fc99b8b94b3"
  },
  {
    "url": "assets/js/3.80f7f642.js",
    "revision": "cfd6d8c1cdaf915474317c4d1e68c19d"
  },
  {
    "url": "assets/js/30.2426ade0.js",
    "revision": "0dd922c0fb8627be05b1170d293024e1"
  },
  {
    "url": "assets/js/31.1627b123.js",
    "revision": "7a1a3b093334d915b84ec37941f7c2e0"
  },
  {
    "url": "assets/js/32.f1ac85fb.js",
    "revision": "e5c326ffec9d7981b56f883c2c456024"
  },
  {
    "url": "assets/js/33.4388ccf2.js",
    "revision": "437db5d14de76af3da19930caa6c1f9a"
  },
  {
    "url": "assets/js/34.e7a2620f.js",
    "revision": "0b7f4ff4282ff5bf614cf432dcb8c10d"
  },
  {
    "url": "assets/js/35.c005b40b.js",
    "revision": "63dc156dff1d22593d8e533c7fe8e208"
  },
  {
    "url": "assets/js/36.6d36ca20.js",
    "revision": "7bd404341e2d2446a524f9d07810d600"
  },
  {
    "url": "assets/js/37.0569ab50.js",
    "revision": "57bc3e69b6f97b592ffb16590d8c9612"
  },
  {
    "url": "assets/js/38.1ac8f762.js",
    "revision": "2e3e801760f6061a4c38d976228b4710"
  },
  {
    "url": "assets/js/39.da8bf6d7.js",
    "revision": "6e2da096074d0e8db7fc2bb100f71b9c"
  },
  {
    "url": "assets/js/4.62073fcc.js",
    "revision": "88b17e62e34581ed2bafded2c0e6248d"
  },
  {
    "url": "assets/js/40.8e1d84d9.js",
    "revision": "2d80d100729a70e1389e8b9903721c5e"
  },
  {
    "url": "assets/js/41.cd5e4904.js",
    "revision": "5b3fcaefbe355cce86145306c85c18d6"
  },
  {
    "url": "assets/js/42.4c975aeb.js",
    "revision": "733870e05425b7caaf299dd992204dcf"
  },
  {
    "url": "assets/js/43.0a823e1e.js",
    "revision": "bd9beec8a2b2d0949b9f613e8d2ddf15"
  },
  {
    "url": "assets/js/44.af3a2e75.js",
    "revision": "56d677c58f98a95fb47a24f3f6fc1e5e"
  },
  {
    "url": "assets/js/45.9283f8f0.js",
    "revision": "30b4ba8e43fdc5a22487bdb995de4848"
  },
  {
    "url": "assets/js/46.620ea844.js",
    "revision": "75c6b62170d489f6ab1851bbf86ff5c8"
  },
  {
    "url": "assets/js/47.3cc52979.js",
    "revision": "bcb1cbab377bc6c6d956e8f17448dac3"
  },
  {
    "url": "assets/js/48.f3e84387.js",
    "revision": "26cd512e794955e5dda699313f053db9"
  },
  {
    "url": "assets/js/49.f8ee041b.js",
    "revision": "f11e20213d7a1db6ad8679d2033ed9ba"
  },
  {
    "url": "assets/js/5.52d1d043.js",
    "revision": "3ec892cfc361c7de06330e15dc6a5048"
  },
  {
    "url": "assets/js/50.c03455da.js",
    "revision": "2a3adb57053b6ff2b3a2053258c9f51d"
  },
  {
    "url": "assets/js/51.7b44ca68.js",
    "revision": "a517a29da567173a1f7466947251afa8"
  },
  {
    "url": "assets/js/52.267c0dcb.js",
    "revision": "85f7b69f24658c638c49bd7151c574c7"
  },
  {
    "url": "assets/js/53.cace80a5.js",
    "revision": "a4a06d59d5d2af16f764d8c4b6092f37"
  },
  {
    "url": "assets/js/54.80bb8efe.js",
    "revision": "f0b78c46284835934c4fe112fa7bf559"
  },
  {
    "url": "assets/js/55.1cbf1f2e.js",
    "revision": "f77e25cd5df72358550d48ea7a206928"
  },
  {
    "url": "assets/js/56.4b1f0484.js",
    "revision": "b0fbdd206fcfb5e7c568e558438c07a1"
  },
  {
    "url": "assets/js/57.1d239d51.js",
    "revision": "f710f9903a17d41990df1294ad9eda3c"
  },
  {
    "url": "assets/js/58.10440680.js",
    "revision": "5c0a6d0188be109195d06aeed09e31de"
  },
  {
    "url": "assets/js/59.521b9883.js",
    "revision": "e903b64561c13787613371893992a555"
  },
  {
    "url": "assets/js/6.d4803506.js",
    "revision": "518ae229f5739f1573bc2b18bb256b64"
  },
  {
    "url": "assets/js/60.a2ca9e81.js",
    "revision": "1c58618fa2b138f5eab0e7cedce0b703"
  },
  {
    "url": "assets/js/61.030540f1.js",
    "revision": "72682c0bde74cec011570de8f7341294"
  },
  {
    "url": "assets/js/62.48aa010e.js",
    "revision": "fc2093c94c343914c7d6841594b01e26"
  },
  {
    "url": "assets/js/63.54871fac.js",
    "revision": "3cc4825cd69be9e74fd4b30d6f3c8c4c"
  },
  {
    "url": "assets/js/64.8c127895.js",
    "revision": "eace0bbab2c937da9b4b4dd351c92438"
  },
  {
    "url": "assets/js/65.bb229b29.js",
    "revision": "c32ec1ce319f72c7e8efca54f0fd7696"
  },
  {
    "url": "assets/js/66.4abcd063.js",
    "revision": "8ccc420b56067fba72f3a2530081e95a"
  },
  {
    "url": "assets/js/67.8569ef3d.js",
    "revision": "7543ec34530874ae55551b57030f072f"
  },
  {
    "url": "assets/js/68.204cd803.js",
    "revision": "7d4cd4e623f1e23c549d2b89eb2a5c67"
  },
  {
    "url": "assets/js/69.fc604993.js",
    "revision": "7be5b876ee70674870686d9f5187aa17"
  },
  {
    "url": "assets/js/7.97434574.js",
    "revision": "bb4c499d97febd30aa5ea8203b9caee2"
  },
  {
    "url": "assets/js/70.b4eea9f3.js",
    "revision": "659dda6bb57d8d8adcd8a3a56e121df4"
  },
  {
    "url": "assets/js/71.b9fcafec.js",
    "revision": "3e72d229f6d3bd7314b7b0362bda37c8"
  },
  {
    "url": "assets/js/72.57d6344a.js",
    "revision": "b86128eb7ec7c6c4c3563afb0fac6be9"
  },
  {
    "url": "assets/js/73.985fc306.js",
    "revision": "66e8a1e467f8815e1b6c79db550b0111"
  },
  {
    "url": "assets/js/74.47783737.js",
    "revision": "9907d5f7c25bdbbcf78a3514d15c769c"
  },
  {
    "url": "assets/js/75.072a350e.js",
    "revision": "18dc88cac59c7b2c5827c7057e30ef6c"
  },
  {
    "url": "assets/js/76.3f34c3b7.js",
    "revision": "a86d4bb4701f0f23024a5e78dd0d580d"
  },
  {
    "url": "assets/js/77.2578f988.js",
    "revision": "950bae433919655951e5e8082f9ef9be"
  },
  {
    "url": "assets/js/78.171ab9b3.js",
    "revision": "13509af335ec0a2cecff8acc8374fd06"
  },
  {
    "url": "assets/js/79.030ab260.js",
    "revision": "8d8ac292cf6fcb1bbdadff6a26d448b9"
  },
  {
    "url": "assets/js/8.05b57f35.js",
    "revision": "44b46a9fde4a32dae0fe16104a60a63d"
  },
  {
    "url": "assets/js/9.ae5ed663.js",
    "revision": "f79db0d48159b887598db8d26ce0f2d7"
  },
  {
    "url": "assets/js/app.c04a14a4.js",
    "revision": "7507c14bf26fb5e48a70fa2effe3cebe"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "71a85ad00ba11604ac42e1519ab81515"
  },
  {
    "url": "cs/bash.html",
    "revision": "cb10b569c050e82dc5175511e0d4c3fa"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "a987514b22f1811f023fe5abec86e129"
  },
  {
    "url": "cs/cmake.html",
    "revision": "3ce6aded75c79e62a215e0dd0c4ef7f2"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "ae8e517c127b589bd744948447c53e22"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "1a57ab02c7cf6b7efd500c7fa6cbec08"
  },
  {
    "url": "cs/git.html",
    "revision": "bed0d3e5883b8cc7ce794bca3c2d9476"
  },
  {
    "url": "cs/index.html",
    "revision": "e668fb0693960b4fbc9ea1a3614c8d4f"
  },
  {
    "url": "cs/keras.html",
    "revision": "f1c8e7bdb8be2c122b9fd2b8833a6fec"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "50780f1ec7b28b49d1d564e50ec509bf"
  },
  {
    "url": "cs/lwip.html",
    "revision": "c4d5b1d571bb03d1b8b121fe58e7f07d"
  },
  {
    "url": "cs/scala.html",
    "revision": "9cd3d9578b464128b151e46d28e62e34"
  },
  {
    "url": "ee/about.html",
    "revision": "6786e70e232c6414aa8147e8c028f81c"
  },
  {
    "url": "ee/chisel.html",
    "revision": "75e0464cb54fde9420303fb713cd49f3"
  },
  {
    "url": "ee/esp32.html",
    "revision": "51c48649eeb330a5b410e599428531aa"
  },
  {
    "url": "ee/index.html",
    "revision": "c1fb41cf0d52dc1a7efa69e0f85b8e25"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "f875889d6d2fdcc68c7145c77bb1ace6"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "0e2d6fe78b4156687cf4143fe75d9989"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "3ff59388aa6a8fed5b820d1380781fdd"
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
    "revision": "70e00da2f8e327db69cacdfce6dd4b7c"
  },
  {
    "url": "others/about.html",
    "revision": "87bd09ddd250050e5b136ca472d20365"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "e665611eaa64b23b931672cd359362f1"
  },
  {
    "url": "others/android-studio.html",
    "revision": "ab0d94b922d3439248f8880eb537a72f"
  },
  {
    "url": "others/android.html",
    "revision": "46a94175e3b33aa201ff646b3a82212a"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "e926a79f6f84a8bb831e32592d305a0d"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "8628ab5d2b90e1d333e8ad1ec6903c6c"
  },
  {
    "url": "others/css.html",
    "revision": "4a181c87f51ed5369a5a52251cc964d0"
  },
  {
    "url": "others/docker.html",
    "revision": "01d6f7476d0bce6b06e455dca9b399a7"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "60fe6c676c4733b1ab7a072cacf8a5e6"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "5b31ad8cfe8d3359883f3805d9298e42"
  },
  {
    "url": "others/english-writting.html",
    "revision": "15d2096ae6a979840c6e78dcee29a3e8"
  },
  {
    "url": "others/freertos.html",
    "revision": "21f03d919bee9476f4371a45a6214813"
  },
  {
    "url": "others/gns3.html",
    "revision": "3cd50da097067bd183012b2bde4cd211"
  },
  {
    "url": "others/gps.html",
    "revision": "ca1160c66945ca7eb3982e67df74960c"
  },
  {
    "url": "others/html5.html",
    "revision": "60f31da3b760ecefc65236fd3cfad737"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "6e83053df444b70cb4518bc0816b1455"
  },
  {
    "url": "others/index.html",
    "revision": "27b84c1542ca08411aa9c6987f0fae56"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "4e358ffa19d00d355a9dbc6d7bc5ec41"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "d16ca060c3a82c730ce96388e10d4128"
  },
  {
    "url": "others/javascript.html",
    "revision": "e6f7132e3f6985b15a5e608289b9b405"
  },
  {
    "url": "others/json.html",
    "revision": "faeaafb8cba078aa5dce9f813986de71"
  },
  {
    "url": "others/latex.html",
    "revision": "82ef241cdf74e1ebb7a5deb002127cab"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "0f8fbe734d2c37a529c7ec6a08c7d021"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "114dd9bb4e5092960f85a5c5a9f0ae72"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "a1eebb6e543c42c6ff3724a8bef7458d"
  },
  {
    "url": "others/markdown.html",
    "revision": "20abd8c311bd792d1fb3e0b410a73062"
  },
  {
    "url": "others/matlab.html",
    "revision": "64def45f145db9789a00254c231371a8"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "b683c0ee0611d3cfd6fcf918388f3b61"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "4aba474ae500797863a3619db320a5a9"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "f11e51de326f3219d14a5861ff190005"
  },
  {
    "url": "others/network-security.html",
    "revision": "c6b0daa5de3569a4662514d4ea0f7583"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "f648f4c069baff74524d062c389c94e8"
  },
  {
    "url": "others/oral_english.html",
    "revision": "0a280dca25e661489357f8f26bbed018"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "4dafeffafd7804d513fce652316d5016"
  },
  {
    "url": "others/poe.html",
    "revision": "c3d93ff9fb5af02159a0bf4527cb563f"
  },
  {
    "url": "others/pyside2.html",
    "revision": "cd5eb386fff0f4b43fecf54de6319cb9"
  },
  {
    "url": "others/python-socket.html",
    "revision": "03bfc6a57fb0dd2405a77c61ee9b485e"
  },
  {
    "url": "others/python.html",
    "revision": "e3d775c3c9a37f34a59621f210f42f1f"
  },
  {
    "url": "others/q-learning.html",
    "revision": "88fab01996dac2166205891d31a510b8"
  },
  {
    "url": "others/qr-code.html",
    "revision": "e5e5fb6d1bf2ae10df7663a35d43aa0c"
  },
  {
    "url": "others/qt4.html",
    "revision": "2436570c16406e6553d879f7f661a1db"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "5e0eed21d6f705676d14a1e27ac7365a"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "b4cdeab74fda383b01e5d933a440b5bc"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "ee14a9a1c94d5ffe15ae683b977605ce"
  },
  {
    "url": "others/sd-card.html",
    "revision": "b4677c0d6300c851efcabd0371c1ef87"
  },
  {
    "url": "others/sdn.html",
    "revision": "308bc8430b77421517faa659b4d67655"
  },
  {
    "url": "others/star-uml.html",
    "revision": "7474f6c48167622f686ef7cf77486018"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "07d0ffdb5058c1d956d6d8aa4ffcf573"
  },
  {
    "url": "others/verilog.html",
    "revision": "8ae1cf50bd0ca813e0b61d05ba06e2a9"
  },
  {
    "url": "others/vue.html",
    "revision": "03b9f915d5718020ad6ae0d4b51c54c5"
  },
  {
    "url": "others/w5500.html",
    "revision": "2c38b8e910e3caf0aa646e3b5391ff74"
  },
  {
    "url": "others/w7500.html",
    "revision": "231b0b12233a892e4f4a5364fa0c773e"
  },
  {
    "url": "resume.html",
    "revision": "9f86a5b16fefa810cea8bb1b90a33350"
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
