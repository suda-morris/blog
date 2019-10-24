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
    "revision": "1b187b6627502cc32cb766ba15d54445"
  },
  {
    "url": "assets/css/0.styles.2921267f.css",
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
    "url": "assets/js/10.5007cba4.js",
    "revision": "a89a5e932b82adf5435f96179cb00cc2"
  },
  {
    "url": "assets/js/11.a6e42e4d.js",
    "revision": "e9168b53eda5e806f2bf2fec7c618566"
  },
  {
    "url": "assets/js/12.b919e924.js",
    "revision": "ca8d75bd09dbf851ba9f45c673143b61"
  },
  {
    "url": "assets/js/13.a722694b.js",
    "revision": "5479683329ce726b9f9a1539654c5354"
  },
  {
    "url": "assets/js/14.b92a50e0.js",
    "revision": "7a422b11dccc29008cb7ff0dc5df36dc"
  },
  {
    "url": "assets/js/15.edf26043.js",
    "revision": "0316432d3892c0e125a05c01fe9bbfa4"
  },
  {
    "url": "assets/js/16.95111d4e.js",
    "revision": "30c1f83fa59bf033800c80bd7b7f3eda"
  },
  {
    "url": "assets/js/17.1e6fd484.js",
    "revision": "1521b9e1352887e5ecb2c9ff008ecabd"
  },
  {
    "url": "assets/js/18.8b59d37a.js",
    "revision": "cb059e2744cc5c18b7faa6e352975b09"
  },
  {
    "url": "assets/js/19.19a2df20.js",
    "revision": "39648913bd708f8075500369e14d02aa"
  },
  {
    "url": "assets/js/2.30513668.js",
    "revision": "71e2863b47500f33e6f72e18dde37a2f"
  },
  {
    "url": "assets/js/20.69ba9c4c.js",
    "revision": "6e3bfe9375a3037db0e24394a2f02831"
  },
  {
    "url": "assets/js/21.ba8e2b40.js",
    "revision": "6ef1c5102bff57a2baf0e61e595909d9"
  },
  {
    "url": "assets/js/22.04ca9b15.js",
    "revision": "384c005a6fa57766c27547d2085f27dd"
  },
  {
    "url": "assets/js/23.55956024.js",
    "revision": "6e2d0fa6be6073f1b5ee1651031c1205"
  },
  {
    "url": "assets/js/24.aafb3276.js",
    "revision": "f4c5637ca696f0f75de7cb92b4032feb"
  },
  {
    "url": "assets/js/25.cc225596.js",
    "revision": "ffc36b03d5c4d648359353d26ab0c6dc"
  },
  {
    "url": "assets/js/26.f6e2332c.js",
    "revision": "0215c9e5127392852903df986a8e7f96"
  },
  {
    "url": "assets/js/27.16119270.js",
    "revision": "2c8bf1c7acee506d5a7208a453640f91"
  },
  {
    "url": "assets/js/28.3fe686a8.js",
    "revision": "5695cdaeae554519c527ac4b49c1bd01"
  },
  {
    "url": "assets/js/29.7ef42a3d.js",
    "revision": "ae146307cc7d62542f4a09f15cda92fe"
  },
  {
    "url": "assets/js/3.493adecb.js",
    "revision": "3de2b8f12d4e649859b7c7e3b970957b"
  },
  {
    "url": "assets/js/30.86df9bec.js",
    "revision": "8791317906b6a56685f6177bb6066f72"
  },
  {
    "url": "assets/js/31.2e137f21.js",
    "revision": "18174aa5be9dacb646cbaee39df95ae2"
  },
  {
    "url": "assets/js/32.8733a75f.js",
    "revision": "bf4cb7d9afca20ce29c4c08a253562a5"
  },
  {
    "url": "assets/js/33.4b272ff7.js",
    "revision": "4fc82d926ae970d844df0926bfe6f94d"
  },
  {
    "url": "assets/js/34.2f1b32af.js",
    "revision": "8bd572374a1c220104c87bf3eded4af9"
  },
  {
    "url": "assets/js/35.719f4193.js",
    "revision": "3d790bb58226f8bba144c99d69693298"
  },
  {
    "url": "assets/js/36.2f937d04.js",
    "revision": "69bcc2d498abb590bed6350996cbf2e4"
  },
  {
    "url": "assets/js/37.83c09548.js",
    "revision": "c6a847934a7ab718c78ef1fa60bda611"
  },
  {
    "url": "assets/js/38.6ce8b583.js",
    "revision": "d2e896583954499c3d660c3f4be353f8"
  },
  {
    "url": "assets/js/39.0eafc0fd.js",
    "revision": "bff900a418d50cd546beaf0d54deb261"
  },
  {
    "url": "assets/js/4.fc99a8dd.js",
    "revision": "c3e1eba5a9c5c91ce2b3fac85580414c"
  },
  {
    "url": "assets/js/40.97ab1638.js",
    "revision": "e950967e051499b7b175de35841187eb"
  },
  {
    "url": "assets/js/41.d39fc35c.js",
    "revision": "c8ca38b7c774f6ae5fc22509a420a7d2"
  },
  {
    "url": "assets/js/42.86639905.js",
    "revision": "de5277b245128b72885904dc44c16f19"
  },
  {
    "url": "assets/js/43.73c61e06.js",
    "revision": "5d33ca60a7d15f0b70671af720fadde1"
  },
  {
    "url": "assets/js/44.547dfec5.js",
    "revision": "93370f935d8c6a723ef422c165a0c21a"
  },
  {
    "url": "assets/js/45.4eb892b8.js",
    "revision": "174e6a096800aa8fb413ce325c15fe3d"
  },
  {
    "url": "assets/js/46.0b0605dc.js",
    "revision": "cd7a9a279ed397a9985c48ddb4f03d98"
  },
  {
    "url": "assets/js/47.d10362fa.js",
    "revision": "19c84b082b09d6206c8fa7d1b74c2a6a"
  },
  {
    "url": "assets/js/48.667e38ff.js",
    "revision": "9f06f5b54a581689a4b67b7269ff041f"
  },
  {
    "url": "assets/js/49.836bded0.js",
    "revision": "10fcb47d7af9b678992c03937a0728d5"
  },
  {
    "url": "assets/js/5.c4f9386d.js",
    "revision": "99ac1f173ed25c54f9189e16816fa4f1"
  },
  {
    "url": "assets/js/50.523f3b22.js",
    "revision": "fd231582bc54a74720bc6470ec438734"
  },
  {
    "url": "assets/js/51.5025c686.js",
    "revision": "3c223ab26acfb19170e2b809c7835613"
  },
  {
    "url": "assets/js/52.4c1962eb.js",
    "revision": "52082bb9fc241b5cb16962b14b22055d"
  },
  {
    "url": "assets/js/53.5188f04d.js",
    "revision": "99e23ce384b4c959869d7aee88bc556a"
  },
  {
    "url": "assets/js/54.ca6dbfbb.js",
    "revision": "deadd09a7a9712c25ee230d4f4609f1a"
  },
  {
    "url": "assets/js/55.0d457560.js",
    "revision": "2e7f0d0cdfaf24f3420f9d07835f089a"
  },
  {
    "url": "assets/js/56.3e60169b.js",
    "revision": "8058624fb3429b066400919ef1e54605"
  },
  {
    "url": "assets/js/57.1bd4b54b.js",
    "revision": "27786e4133cfcb466ee1f08afb439b30"
  },
  {
    "url": "assets/js/58.12f6756b.js",
    "revision": "cff7ba24b109a63cbbfb175d13fd078c"
  },
  {
    "url": "assets/js/59.a1fc53c3.js",
    "revision": "26176d0e6e9240f114ee0dcbd838d8ad"
  },
  {
    "url": "assets/js/6.ee04f478.js",
    "revision": "2bbc175169289f7827a17efd624055e2"
  },
  {
    "url": "assets/js/60.67a1a28e.js",
    "revision": "db0771ff14dd14dd8fceaa1ea0fe9cdb"
  },
  {
    "url": "assets/js/61.0e8ef9e6.js",
    "revision": "fca9db0db4735ed90e59a22f34ada62a"
  },
  {
    "url": "assets/js/62.bfe86ce8.js",
    "revision": "1690a886307e1f3a1b942ff09f72a463"
  },
  {
    "url": "assets/js/63.8ef86feb.js",
    "revision": "6fae20d2461c0c5a9a8d2daa4ee1247d"
  },
  {
    "url": "assets/js/64.f95c2ba0.js",
    "revision": "66d181b047630088047cd5fac21b6bcf"
  },
  {
    "url": "assets/js/65.71fc297c.js",
    "revision": "accafa7ae7e53cbb0bb7da65efa4f62a"
  },
  {
    "url": "assets/js/66.187a9bbf.js",
    "revision": "959a39914b28e3a22341f54cb4cf1919"
  },
  {
    "url": "assets/js/67.fca786ea.js",
    "revision": "5d6bd92c374ac7bfd98a9b2d995a5a78"
  },
  {
    "url": "assets/js/68.b55e5453.js",
    "revision": "2fe9fc1cd2a172870aef9d346d29c771"
  },
  {
    "url": "assets/js/69.27df7771.js",
    "revision": "c6df372980eb52cc1c4048429b4f58d9"
  },
  {
    "url": "assets/js/7.32f210fc.js",
    "revision": "4b7f4253c2d4da939de05a18a7d0528a"
  },
  {
    "url": "assets/js/70.0899929e.js",
    "revision": "aa2349622ed6bb2f1589a8da476a5703"
  },
  {
    "url": "assets/js/71.80f7e775.js",
    "revision": "b5194b5a836b955c8a41a2426b9db41e"
  },
  {
    "url": "assets/js/72.57275488.js",
    "revision": "1a53d62c51ba1762990c8197413de33b"
  },
  {
    "url": "assets/js/73.7a323428.js",
    "revision": "d07dda0084b1dffdd1ed7a4e82e0a7d1"
  },
  {
    "url": "assets/js/74.d47dab4b.js",
    "revision": "12f4118e00cb6ebc312e4f5c26418525"
  },
  {
    "url": "assets/js/75.ecfca940.js",
    "revision": "dcfd951adf0c8d1e369486e74ce1c71a"
  },
  {
    "url": "assets/js/76.c93e7348.js",
    "revision": "fabe9bfb422c966936f2bf9a766abe59"
  },
  {
    "url": "assets/js/77.6c780aa0.js",
    "revision": "f8fa1393966ed702f283d097d80d690a"
  },
  {
    "url": "assets/js/78.8b184991.js",
    "revision": "e35e5c38e16a457a405423c6e58e7a22"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.851611aa.js",
    "revision": "b64ce0478961d1a3598f3e7d13a4df75"
  },
  {
    "url": "assets/js/9.afcdcc6b.js",
    "revision": "b842bb98cc025695ee6f73ab97e7c1af"
  },
  {
    "url": "assets/js/app.cbb0f942.js",
    "revision": "fd44b29e30201615e809d48082718385"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "8ee466e1f3b8bd2ccabad8e0430f1709"
  },
  {
    "url": "cs/bash.html",
    "revision": "655f0eba7fa86518f0ceb9733a9ac95b"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "05cbdbb2c9012fc2f5cd0213a3cbb3b0"
  },
  {
    "url": "cs/cmake.html",
    "revision": "ab0610cde4500f81c3c69c59b98f7060"
  },
  {
    "url": "cs/compilation.html",
    "revision": "c9366031f761f5a1739ba05672394807"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "bbb01b87402a1889cdda402797b7042b"
  },
  {
    "url": "cs/git.html",
    "revision": "5e8ab7fb7423572604f34fe94506ccbf"
  },
  {
    "url": "cs/index.html",
    "revision": "b10f71cc9dec65f669a3c9eff29a9dc7"
  },
  {
    "url": "cs/keras.html",
    "revision": "30f043549ca84262fe76eefa9b0b855d"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "9ea5f0317436c9ba8a6d6ba294d34917"
  },
  {
    "url": "cs/lwip.html",
    "revision": "be972d0b7565bd21ecff9bab1af1115b"
  },
  {
    "url": "cs/scala.html",
    "revision": "f00e635c390a7779bf037260c75c0e1f"
  },
  {
    "url": "ee/about.html",
    "revision": "be0217e5582e7823a721acbcd4580cc3"
  },
  {
    "url": "ee/chisel.html",
    "revision": "7a3ae36a74bd7dfff5e7e30fe7a6b356"
  },
  {
    "url": "ee/esp32.html",
    "revision": "3e9c457dce3087f383aea82f2f70c941"
  },
  {
    "url": "ee/index.html",
    "revision": "4461f2b239ba8eeae4536e2602c301eb"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "fee60ef9c6497f02119562c0bb43e693"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "ec91af288ae62aa1e64af14d367d89eb"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "e196f1a9fad5c0b2eb8540145f91ede5"
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
    "revision": "3d4f610cf8bf53e96f0b18d7c2c437b7"
  },
  {
    "url": "others/about.html",
    "revision": "7ccc82e820424b6235ad1081d8985b13"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "f372c3c68e33dd8320824a97c995ff94"
  },
  {
    "url": "others/android-studio.html",
    "revision": "ce0b3aeeadb2aa31e565f5ac0733c8b4"
  },
  {
    "url": "others/android.html",
    "revision": "8abcb87a982e7d318935ac747b0cb05d"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "0d2bd8bdd7353e2389a36de8c83be90c"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "b7fd509918601898399d402b13fb23d7"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "aa3e30ec9869685955b4b11ffbb63301"
  },
  {
    "url": "others/css.html",
    "revision": "b8506e24a0fe4f502812a86e7d5a41d1"
  },
  {
    "url": "others/docker.html",
    "revision": "77475c08cc116fc651c2c956dccc593f"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "9be25a893a10d3aa75804f49ba8a19d0"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "1df3ad8cf7cabfcf340a6552e2e5ea86"
  },
  {
    "url": "others/english-writting.html",
    "revision": "d277dbb3c229c6674f643333724c141e"
  },
  {
    "url": "others/freertos.html",
    "revision": "aaa06a21baaec6940371d31770384e98"
  },
  {
    "url": "others/gns3.html",
    "revision": "6df4f9df39414f0547c3d8c88c5b92d9"
  },
  {
    "url": "others/gps.html",
    "revision": "e4e388286825c962cce333117f3c5124"
  },
  {
    "url": "others/html5.html",
    "revision": "6290aab0f8dd5e114c853ad5b8492c1c"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "29abaf291ca630289d33e4fd6da9373f"
  },
  {
    "url": "others/index.html",
    "revision": "f6078f188176090f9d55aa92b1e5b05c"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "5cf270591ae3189bc81d5405a517c680"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "8e70613434a2d13707e9dd5250b8c2e9"
  },
  {
    "url": "others/javascript.html",
    "revision": "d2cacc53fa9972b9b582ec22c4a4128a"
  },
  {
    "url": "others/json.html",
    "revision": "278092ad9b252b48942bafb6c08d8688"
  },
  {
    "url": "others/latex.html",
    "revision": "1b8393ab61f6b307ccdf1ce11eac56cd"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "2ba0f51b8fd779451b2adf787366a4fb"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "25eedc65eb63d14b306c9a3f97cebda6"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "947d5c64e25023636db55a68f1567810"
  },
  {
    "url": "others/markdown.html",
    "revision": "c1e2d274557f894dfc1db5c1ba2a25b7"
  },
  {
    "url": "others/matlab.html",
    "revision": "795d7820fcc00a98c31dc5d715628738"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "53dfae5e6bda5136ee74eeb19bdf3df8"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "eff854e88a6a5d79a342a2960f8b6494"
  },
  {
    "url": "others/network-security.html",
    "revision": "297cba82fbe59a730b05ef081ee60578"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "53bde5192651a7217c05566ffd952723"
  },
  {
    "url": "others/oral_english.html",
    "revision": "a52def932fcb8d29c075a1477144cee1"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "45fb819437a6bdb971fe0590d5511e81"
  },
  {
    "url": "others/poe.html",
    "revision": "566d66a3235a769ba6139dd2a0885f18"
  },
  {
    "url": "others/pyside2.html",
    "revision": "5b33e6c43ab6fa590909a11e9ca34d1d"
  },
  {
    "url": "others/python-socket.html",
    "revision": "17b537d2033e1b7f09a71c550e41071f"
  },
  {
    "url": "others/python.html",
    "revision": "67738ce1a640d9051e6201fca1934604"
  },
  {
    "url": "others/q-learning.html",
    "revision": "097eb8f6f6723f4caf050293304d96c4"
  },
  {
    "url": "others/qr-code.html",
    "revision": "911bd89b6bd315c52b0a9809bf86e0a0"
  },
  {
    "url": "others/qt4.html",
    "revision": "9bb025e4cda08c35914092e2e7911e2a"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "597b90faf6df84a58729e33d8bab3e50"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "3636cd7e5127d42ea6cffa349c01d472"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "2b8709f73d42519842fe43d9250d268a"
  },
  {
    "url": "others/sd-card.html",
    "revision": "d1e127fedabb568646b0e64c419ac68b"
  },
  {
    "url": "others/sdn.html",
    "revision": "30b7f10f008c968629d43a0054e644a8"
  },
  {
    "url": "others/star-uml.html",
    "revision": "bb9b9e283151b12da134cfab2623c978"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "667e2f60ef4a871263f79dca96c6700e"
  },
  {
    "url": "others/verilog.html",
    "revision": "f24f51f387912dc5744f79840a17175c"
  },
  {
    "url": "others/vue.html",
    "revision": "f4d4f9a574a061b5aa6ceb05bd861613"
  },
  {
    "url": "others/w5500.html",
    "revision": "fb4b56b2860785e6deac5cb1cd2147e3"
  },
  {
    "url": "others/w7500.html",
    "revision": "1dd4a0ee57e2576a8afb83d25de5b077"
  },
  {
    "url": "resume.html",
    "revision": "6ae02e665812f6a2e4cc2d24300533eb"
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
