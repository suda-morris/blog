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
    "revision": "d7da65372a5052f8a4cfd6c0cfcc0f58"
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
    "url": "assets/js/10.c0a37c62.js",
    "revision": "ba4dc77abe593ccca482bc3fd40d2f2a"
  },
  {
    "url": "assets/js/11.da34e1a5.js",
    "revision": "3cba28549bde9df71bb85ffc0ab40bf8"
  },
  {
    "url": "assets/js/12.b2a1d8dd.js",
    "revision": "ef1efa81b9be1209362e94e4252ac23f"
  },
  {
    "url": "assets/js/13.6ba6dfe3.js",
    "revision": "2ab99e401d5eeb32c6cb49bd9e15e9c9"
  },
  {
    "url": "assets/js/14.851d19d2.js",
    "revision": "5c686345e69cdbe8685db7ed9275038f"
  },
  {
    "url": "assets/js/15.29b3f87a.js",
    "revision": "0b7824aed2636892aca5a5889837ded8"
  },
  {
    "url": "assets/js/16.7d7259e7.js",
    "revision": "a106a27d31e3f53c91fdc721f17d94eb"
  },
  {
    "url": "assets/js/17.107ed60c.js",
    "revision": "73ca2bb5e73f64c4c1c167f2ee2bf992"
  },
  {
    "url": "assets/js/18.388466a9.js",
    "revision": "12da809be5f37e3e74d4e2e885a32f4f"
  },
  {
    "url": "assets/js/19.cdabc290.js",
    "revision": "86009f045433226a1f6a3c9047f4df6c"
  },
  {
    "url": "assets/js/2.b36a4d72.js",
    "revision": "54dd2c46ed3a458fa934800583c96aec"
  },
  {
    "url": "assets/js/20.7a466b0c.js",
    "revision": "1ae4d3d2cfcb5e8328e711b144c0edef"
  },
  {
    "url": "assets/js/21.1f1a2099.js",
    "revision": "0f6f557e041f270afe858fb01f85d4a8"
  },
  {
    "url": "assets/js/22.feab4881.js",
    "revision": "71d2291f32c6301ad441762723e19e70"
  },
  {
    "url": "assets/js/23.265d04c2.js",
    "revision": "ebac2728a2f37d06eb692f217801cb72"
  },
  {
    "url": "assets/js/24.ce1b5b84.js",
    "revision": "76604bf979115c30434f003a67ff38a9"
  },
  {
    "url": "assets/js/25.3b0a0e4e.js",
    "revision": "b7abab6d8bebd52c72aa67046e27721b"
  },
  {
    "url": "assets/js/26.c9046cbb.js",
    "revision": "c86710d797b19731788921b4c3389991"
  },
  {
    "url": "assets/js/27.1b150bcc.js",
    "revision": "22ad7b2733fbee4b0b594c6d1424a7e2"
  },
  {
    "url": "assets/js/28.88e852c4.js",
    "revision": "cb558eef96e160c14f198aff5407852b"
  },
  {
    "url": "assets/js/29.3dcb30f5.js",
    "revision": "f1a79cc1ccea412d96be3a19d22a2fb9"
  },
  {
    "url": "assets/js/3.3cbd1775.js",
    "revision": "7c1b97d8a4b71ee7430de9cb8e69a0d7"
  },
  {
    "url": "assets/js/30.f7475544.js",
    "revision": "ea3396f90afc9ce34805da06a0b566f3"
  },
  {
    "url": "assets/js/31.2f321e54.js",
    "revision": "3422b000b148940e50b74595b6d04a05"
  },
  {
    "url": "assets/js/32.c38cbc72.js",
    "revision": "ffa867f8b2e2748ef71f68588ba256a9"
  },
  {
    "url": "assets/js/33.b920c844.js",
    "revision": "fa31d74a18afaa26cc702ace2458e117"
  },
  {
    "url": "assets/js/34.2640ac83.js",
    "revision": "66d329c34c4da85f68356a708cdf002c"
  },
  {
    "url": "assets/js/35.fe5074dc.js",
    "revision": "0b3ff518d37ae6c2deae5b7bfb32e0dd"
  },
  {
    "url": "assets/js/36.5cc291d9.js",
    "revision": "4c9d878ad5ad52bdb9386c208bbc414b"
  },
  {
    "url": "assets/js/37.9a57abb2.js",
    "revision": "2102f2bdc410adae172765aaead3a5c9"
  },
  {
    "url": "assets/js/38.5eba202f.js",
    "revision": "8d9f848444c3eec295b120daa8dde6c8"
  },
  {
    "url": "assets/js/39.c4cdb27a.js",
    "revision": "008262ee93742d012707970f26bdf625"
  },
  {
    "url": "assets/js/4.afaeaf03.js",
    "revision": "d64ca09f02fc1493ca478e8d9b574215"
  },
  {
    "url": "assets/js/40.ba901203.js",
    "revision": "fe639614f25ac3bdeaab695fbabcf3f7"
  },
  {
    "url": "assets/js/41.a835c8d8.js",
    "revision": "6cf5529f4ffb1f5759e06ff8a89ea40b"
  },
  {
    "url": "assets/js/42.b5fea5b7.js",
    "revision": "b9f8ba57ffa2e0f62dccabca62cf00aa"
  },
  {
    "url": "assets/js/43.a44dea5b.js",
    "revision": "08ccdfc6db82754f9b50598340a0d0b1"
  },
  {
    "url": "assets/js/44.1e9c23ad.js",
    "revision": "23f88de333af43a84c1c3db3fad77f2f"
  },
  {
    "url": "assets/js/45.762b4589.js",
    "revision": "6e38f76df94f0fcd1b140306439483a0"
  },
  {
    "url": "assets/js/46.ac57d8d2.js",
    "revision": "33fc382495240e3c366c8cc4c2758655"
  },
  {
    "url": "assets/js/47.bc8b92fc.js",
    "revision": "6851cbb277a77c033e78d21c76c7c25f"
  },
  {
    "url": "assets/js/48.54016560.js",
    "revision": "52ad1ea0c66f71aa3155ac27526b6f7f"
  },
  {
    "url": "assets/js/49.6da8acd8.js",
    "revision": "cdf8bd5b76758377b5b5677b429437eb"
  },
  {
    "url": "assets/js/5.f7313de4.js",
    "revision": "7e01f3570331b6bec99b5ce1b05e4ede"
  },
  {
    "url": "assets/js/50.3216bf98.js",
    "revision": "2ed7eace546b5ad30011d1b4c32d17c8"
  },
  {
    "url": "assets/js/51.55b82e32.js",
    "revision": "6171317953c71c1d32d6de974aa2aa26"
  },
  {
    "url": "assets/js/52.529ce48e.js",
    "revision": "f00ae633278dc9373c726669bbffae4b"
  },
  {
    "url": "assets/js/53.02c3f8d8.js",
    "revision": "2c83ab62feb18d7d25a26b2d8b0a6915"
  },
  {
    "url": "assets/js/54.5272c74f.js",
    "revision": "7c3435c26c9a8fddd70c5ed6ed5fb9db"
  },
  {
    "url": "assets/js/55.5c65d17b.js",
    "revision": "dc1e1c2218d0297ae0f303544d1a09fc"
  },
  {
    "url": "assets/js/56.20c4acc7.js",
    "revision": "0b82f64a039f1508ca48b4cea0e6f878"
  },
  {
    "url": "assets/js/57.01b59275.js",
    "revision": "c81cbc8b0bf1df5a7aa2647bb06901dc"
  },
  {
    "url": "assets/js/58.8f31b182.js",
    "revision": "dd2c868dd68d16d66af713fd0aaf77d8"
  },
  {
    "url": "assets/js/59.9b6423b7.js",
    "revision": "82b5530b71bfafbc24f5148d31c80235"
  },
  {
    "url": "assets/js/6.78d14187.js",
    "revision": "ef8f7590bb4aea37a51f94e5da8fb1d5"
  },
  {
    "url": "assets/js/60.05269e06.js",
    "revision": "edfa80a3505a67bb357330d67a2c26a7"
  },
  {
    "url": "assets/js/61.e0a1bfe9.js",
    "revision": "7f01a134bc0707587be2145f105a5c7c"
  },
  {
    "url": "assets/js/62.489d520a.js",
    "revision": "3b56e6bd4462b6a55cc1d7be9151b422"
  },
  {
    "url": "assets/js/63.da6c0dd3.js",
    "revision": "d0b13ac7361304bc8ab7879d31802727"
  },
  {
    "url": "assets/js/64.4d6191d4.js",
    "revision": "c5b63a73ac7842cfe196ae4899ab80fe"
  },
  {
    "url": "assets/js/65.30e5ada7.js",
    "revision": "fb546582cf2225adcd1ab6b35e49e2d6"
  },
  {
    "url": "assets/js/66.2b4ba998.js",
    "revision": "a294d8b95bd70ffdb09dda9f5544b5da"
  },
  {
    "url": "assets/js/67.63fe323b.js",
    "revision": "bcc630f14e1563c3ca4ecd6bb490c4b9"
  },
  {
    "url": "assets/js/68.a0958d3c.js",
    "revision": "8b2bb09953b938f85705e7a0bc4f3032"
  },
  {
    "url": "assets/js/69.78764690.js",
    "revision": "1a6ca89ffacb8f795416ef4402261a81"
  },
  {
    "url": "assets/js/7.b5220b7f.js",
    "revision": "e0a90db1ab4bad268d227ec434a70f61"
  },
  {
    "url": "assets/js/70.2d49e489.js",
    "revision": "555d90f80a04c56eb3f4705e67379221"
  },
  {
    "url": "assets/js/71.841b0437.js",
    "revision": "48cb69321e52a3542e5662e297455cbe"
  },
  {
    "url": "assets/js/72.8730ca2f.js",
    "revision": "7bf6484b8af328e62efc556a39fcc9d0"
  },
  {
    "url": "assets/js/73.4dae40b7.js",
    "revision": "72777248502f9711ab0f3a658da2c339"
  },
  {
    "url": "assets/js/74.1cf31cdd.js",
    "revision": "93f94dad21a9a22ab8928b2ab681d844"
  },
  {
    "url": "assets/js/75.8ab42b53.js",
    "revision": "1b45c8ab48e19d386053d1ccfc7a49b1"
  },
  {
    "url": "assets/js/76.f189a1f5.js",
    "revision": "5c7dbaa0b47dddd614cac6735ea1c986"
  },
  {
    "url": "assets/js/77.594becae.js",
    "revision": "a6e68d3e888e1e02bfebad45e5ccd948"
  },
  {
    "url": "assets/js/78.ad7d4ada.js",
    "revision": "2b1bc8a34cd48aa9d3c75a81956cc69b"
  },
  {
    "url": "assets/js/79.458c4197.js",
    "revision": "8cf0f96e6be600da7fa6f42769e5893a"
  },
  {
    "url": "assets/js/8.a11aa557.js",
    "revision": "a013987399e0b9b16c25976a8cc42d04"
  },
  {
    "url": "assets/js/9.003ca955.js",
    "revision": "d03826c1c9965f1703808ae0e247d17b"
  },
  {
    "url": "assets/js/app.8a0a5e66.js",
    "revision": "26c45c3ebdd2542e29dc5c0fd3992998"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "2e1c86ea514f44e81c23f549bc81de5e"
  },
  {
    "url": "cs/bash.html",
    "revision": "bf3304deb7c42acb51cee1b9fef2fe94"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "6189b6f334f7c51e502d6d75ae725ee2"
  },
  {
    "url": "cs/cmake.html",
    "revision": "70ba961a7d3b306736605f923f503dd2"
  },
  {
    "url": "cs/compilation.html",
    "revision": "ec8b65531db27e2cafb62de498a6ac04"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "0f45657570024793721a015ccbf2aed2"
  },
  {
    "url": "cs/git.html",
    "revision": "b25b9ba523f00f4d87345b8a23ce9e9b"
  },
  {
    "url": "cs/index.html",
    "revision": "58746481a2e9cf9d957d2069fe8a0470"
  },
  {
    "url": "cs/keras.html",
    "revision": "c3688ccff584f0ab9aec6d6b2e8462b6"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "adf71bf89bd9adad7aa86bd03e9a859e"
  },
  {
    "url": "cs/lwip.html",
    "revision": "00d30988beb0c07e82e509254294e8b4"
  },
  {
    "url": "cs/scala.html",
    "revision": "4add98deec4878f56062455ba464dfad"
  },
  {
    "url": "ee/about.html",
    "revision": "4de7882bb73c71ff0725f26c72d23ae7"
  },
  {
    "url": "ee/chisel.html",
    "revision": "a77636d0dda059fd14ba8738bf68c009"
  },
  {
    "url": "ee/index.html",
    "revision": "ba757ccfaa40294ace5a2e7c94d4336e"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "5f8aa9ab8c3caa388b81396570c0f90b"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "e1a7b7ac96ac1aaac8b24ab7bc212f70"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "74ecd5a910480518efdfa93e13961244"
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
    "revision": "8ec1db608baefc7bfb43a50a4c877481"
  },
  {
    "url": "others/about.html",
    "revision": "c4e87c1fd82540c749b5585c98365d56"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "a9d426eba39c3c77d04d9d76bfb8b879"
  },
  {
    "url": "others/android-studio.html",
    "revision": "1cee1c729fa81ecd055fa4048606fb20"
  },
  {
    "url": "others/android.html",
    "revision": "5b18b2f3195c730834a668d51dcb0a2e"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "e5ee18d85b1791d0a2fca93736f03cb9"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "626d566f746f081376eb5bc746fd90ba"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "93a2993d01f7997e9fb5ca1db2469373"
  },
  {
    "url": "others/css.html",
    "revision": "0ab8acafcb982599878199aea60782c7"
  },
  {
    "url": "others/docker.html",
    "revision": "a7692043d3ab1688eaf888d142ae5006"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "983aa9878daf4effa23442953e2e391a"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "4dfc72c75179e94b53939b0a9dd367bc"
  },
  {
    "url": "others/english-writting.html",
    "revision": "30307394690e2de57c155522b8a640c2"
  },
  {
    "url": "others/esp32.html",
    "revision": "8063c130bb12da4d8871478caf637cc3"
  },
  {
    "url": "others/freertos.html",
    "revision": "c4f171b42eb821097748e7004ccadb38"
  },
  {
    "url": "others/gns3.html",
    "revision": "72cc11b3c0524f60f8eec0fa3fb4f36e"
  },
  {
    "url": "others/gps.html",
    "revision": "2d930aa83434d7ae5780cc05821f3ecc"
  },
  {
    "url": "others/html5.html",
    "revision": "e77e3218df01dab0f8842c87011c70a5"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "19e69c897900c9cd91215c8a7ccf7f5b"
  },
  {
    "url": "others/index.html",
    "revision": "3cb52c5ac36c6a9158434b603f6f8d15"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "14594caa2a84e80cecdeaef6fb98cc83"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "18059282f60fe543601d4a06c54304c3"
  },
  {
    "url": "others/javascript.html",
    "revision": "fa4c189d7afa0c484730dad96f1fe1d0"
  },
  {
    "url": "others/json.html",
    "revision": "55841c9ba7016ba1deb1f276bb94b7a1"
  },
  {
    "url": "others/latex.html",
    "revision": "243bfad973e2a0b7ba4e717b93b55998"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "67d61a5076c451fbea41accf47779bb2"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "0a58912d176ccb30d1a5334dfade9f3f"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "a53351d2780e2917ddbbe12147001908"
  },
  {
    "url": "others/markdown.html",
    "revision": "bfd4d01f3272d4988eea16a0c0b323bd"
  },
  {
    "url": "others/matlab.html",
    "revision": "395a287bfe4f6718d3e8868f8c2ca41e"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "3d592acf2f8fbc91ed19f84da86aeab7"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "af8045d33feb32adb068e42cf0e09e95"
  },
  {
    "url": "others/network-security.html",
    "revision": "7819efc76014e91c1c1744c3a49a864c"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "cf07dc805ad066461196f097a37b9299"
  },
  {
    "url": "others/oral_english.html",
    "revision": "3f8c42cee104b50b1ee9ca10d4407326"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "12b3e887e857b14ad997167e39ca32b1"
  },
  {
    "url": "others/poe.html",
    "revision": "6685a2f233b635df145286cd31eccd40"
  },
  {
    "url": "others/pyside2.html",
    "revision": "b17a9bd3da85a8900c9ea5dda946a279"
  },
  {
    "url": "others/python-socket.html",
    "revision": "5c5af71d378b62055aa2c873964def03"
  },
  {
    "url": "others/python.html",
    "revision": "c6fce3741f414acda77e7f5f5957e274"
  },
  {
    "url": "others/q-learning.html",
    "revision": "5bc2f1fcbf3e4697684287fd536b1742"
  },
  {
    "url": "others/qr-code.html",
    "revision": "583b44e789b8bb6296dfa6f8388b6be2"
  },
  {
    "url": "others/qt4.html",
    "revision": "685a8eedfc944e402133b6895ed0b305"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "6a91d72d85c836009c551fe1ca35a180"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "09bc6575227f51d103bd649717024eb9"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "e6dde82f7de07bd21959faa8efb2bb8f"
  },
  {
    "url": "others/sd-card.html",
    "revision": "b0924c4f642dd6a7f2017cb582b1c242"
  },
  {
    "url": "others/sdn.html",
    "revision": "000bef0b6d1af952bc8bf9f0589d7dac"
  },
  {
    "url": "others/star-uml.html",
    "revision": "c4ed423dcc4561b9f168af20a94d62f0"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "13b45134f660025917aa2642bb51361e"
  },
  {
    "url": "others/verilog.html",
    "revision": "a2a1284a8ac80e86cee9e25248c43f63"
  },
  {
    "url": "others/vue.html",
    "revision": "10312519ebc95b21edd77ea1140cf873"
  },
  {
    "url": "others/w5500.html",
    "revision": "dcfb72a26a50c7ecc9332a0b1f81bde2"
  },
  {
    "url": "others/w7500.html",
    "revision": "fe3b08de4e91847641faf811a62bc104"
  },
  {
    "url": "resume.html",
    "revision": "1b3b4bbd60ec0a667d74f2d084eb87a7"
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
