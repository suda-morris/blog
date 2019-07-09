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
    "revision": "c2c06ef23e90b38731605b3763a1ff58"
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
    "url": "assets/js/11.7c897b7a.js",
    "revision": "04390b69e8e074a104cdeeeae8cd1216"
  },
  {
    "url": "assets/js/12.bd6b4440.js",
    "revision": "c625fa4c7d3b22a8963cd6e2692ba1a6"
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
    "url": "assets/js/15.c53d4e02.js",
    "revision": "676841365f5ea729b1c5f7cd1b5d879e"
  },
  {
    "url": "assets/js/16.777581b6.js",
    "revision": "ecbdbef1cbd91e0466cc28869292aecd"
  },
  {
    "url": "assets/js/17.3309a30d.js",
    "revision": "925bb8b69c8713dd8eca6e9173b94cb2"
  },
  {
    "url": "assets/js/18.6dc8a613.js",
    "revision": "4d00bc2e37d956fef705883bc25a7274"
  },
  {
    "url": "assets/js/19.01c420c7.js",
    "revision": "493061a742ad5253020e6971888940f6"
  },
  {
    "url": "assets/js/2.37a3b3f2.js",
    "revision": "81719bc8ab4ae8f768908940225b51cf"
  },
  {
    "url": "assets/js/20.4cd58196.js",
    "revision": "6b3d3cacf4c3aebe2d3c2702d0a32518"
  },
  {
    "url": "assets/js/21.ca9f2cb0.js",
    "revision": "085ba9f332de15d85dd5bd0b7d878097"
  },
  {
    "url": "assets/js/22.5a328f99.js",
    "revision": "96eceda26fac9f065bbc0fafd6c312fe"
  },
  {
    "url": "assets/js/23.803e5a3a.js",
    "revision": "6168758e1b85592f96591f66621cae54"
  },
  {
    "url": "assets/js/24.c9ded088.js",
    "revision": "54f4eb7232276deab1623d00b8754be0"
  },
  {
    "url": "assets/js/25.34f2cd40.js",
    "revision": "c755744b43e211360cb998b1161636ba"
  },
  {
    "url": "assets/js/26.5b638ac2.js",
    "revision": "03c64524506d445e724799d267b7584a"
  },
  {
    "url": "assets/js/27.94ddb2be.js",
    "revision": "86422d48a9f5d58129c301401bf6e60e"
  },
  {
    "url": "assets/js/28.17cb9957.js",
    "revision": "4d5857e7a258885c44991b92a70bde39"
  },
  {
    "url": "assets/js/29.48191e2a.js",
    "revision": "4da29a9d7631d98ac976deea6e8a4a04"
  },
  {
    "url": "assets/js/3.10821b82.js",
    "revision": "67e01169cd2da8663ed49496ded1a3f9"
  },
  {
    "url": "assets/js/30.4b093ede.js",
    "revision": "bca0866c32db39b6a4a8c357c2523da5"
  },
  {
    "url": "assets/js/31.88f2c519.js",
    "revision": "80edb663398322a17e25fbfd9635ba0f"
  },
  {
    "url": "assets/js/32.683237eb.js",
    "revision": "d5988745bf694ff6729fbec41b7684b7"
  },
  {
    "url": "assets/js/33.fd57c677.js",
    "revision": "5a16c37c233cd3a4b07748b2d1684a94"
  },
  {
    "url": "assets/js/34.cbe01fc9.js",
    "revision": "4d507fbe6435a6b4fc903205817e0cde"
  },
  {
    "url": "assets/js/35.c7c3e876.js",
    "revision": "d75885f46d0353ba388e871ae9b7037d"
  },
  {
    "url": "assets/js/36.afef10c5.js",
    "revision": "be911e62002b1a7aa4c8f0a48879c0bf"
  },
  {
    "url": "assets/js/37.2b65fe4d.js",
    "revision": "6bd7be2707766a53d08dd5b7987ba2d1"
  },
  {
    "url": "assets/js/38.d46e551b.js",
    "revision": "feed4f00a113682edff9308e17ec3568"
  },
  {
    "url": "assets/js/39.06417f23.js",
    "revision": "2a8b7e5a474dfc21c628f2207a3168f7"
  },
  {
    "url": "assets/js/4.bd9b9f70.js",
    "revision": "b3dd84335d98005d29a9dc0d596c6046"
  },
  {
    "url": "assets/js/40.6048bdbc.js",
    "revision": "b1b84a3c5bdbccf20f8bfbf0dcade175"
  },
  {
    "url": "assets/js/41.767c0d73.js",
    "revision": "8dd2cbc64606621d608492672a4936f0"
  },
  {
    "url": "assets/js/42.bb91fab8.js",
    "revision": "fd8d414dd097ca3f0f30b48b80a954cf"
  },
  {
    "url": "assets/js/43.daf59461.js",
    "revision": "9e204ce8e0c39c1e522ea82f54f05cc7"
  },
  {
    "url": "assets/js/44.0f9d7f0e.js",
    "revision": "a82262e60753363579486574b5935444"
  },
  {
    "url": "assets/js/45.99323019.js",
    "revision": "fdc4e4eeb5812f7675fffffddf64c521"
  },
  {
    "url": "assets/js/46.1b01ad43.js",
    "revision": "f1a4c793390a151e965b89c4959671a0"
  },
  {
    "url": "assets/js/47.5489a3f1.js",
    "revision": "3dcf166d889a181c423f8aedcb217425"
  },
  {
    "url": "assets/js/48.74ba6ede.js",
    "revision": "1f27bbda1b6cae1aa244ce39b96553dd"
  },
  {
    "url": "assets/js/49.b0ee1683.js",
    "revision": "0801d888db6d9dda0dcb56e0ef4e8d16"
  },
  {
    "url": "assets/js/5.22f508ff.js",
    "revision": "0e91296fc795350a52b45df4e54cc92b"
  },
  {
    "url": "assets/js/50.3fbe4234.js",
    "revision": "93a2e8c5d438830ea0ed434c3e744e95"
  },
  {
    "url": "assets/js/51.d5ba66f6.js",
    "revision": "c6baae4caecf17f41f3a58b58bfb5378"
  },
  {
    "url": "assets/js/52.11a1715a.js",
    "revision": "4bd595f66eec3e8b63a59697c0c3daef"
  },
  {
    "url": "assets/js/53.a21fb99f.js",
    "revision": "eee96405d5d0544d61b742bbf5695c4e"
  },
  {
    "url": "assets/js/54.c13bb985.js",
    "revision": "ea1628f0e577294bd7078b5e142941ab"
  },
  {
    "url": "assets/js/55.40bb0624.js",
    "revision": "d31450b506e35e9c9ec57052c9791cff"
  },
  {
    "url": "assets/js/56.20c4acc7.js",
    "revision": "0b82f64a039f1508ca48b4cea0e6f878"
  },
  {
    "url": "assets/js/57.f110678f.js",
    "revision": "16df15dcd330c857ba1cd95fa9590d18"
  },
  {
    "url": "assets/js/58.e6d2964d.js",
    "revision": "8cbf003968caeaa83a91174754ef8bdc"
  },
  {
    "url": "assets/js/59.9b6423b7.js",
    "revision": "82b5530b71bfafbc24f5148d31c80235"
  },
  {
    "url": "assets/js/6.36d67b0c.js",
    "revision": "3b78038f45b368c5caa3a4ad25869247"
  },
  {
    "url": "assets/js/60.05269e06.js",
    "revision": "edfa80a3505a67bb357330d67a2c26a7"
  },
  {
    "url": "assets/js/61.e6310475.js",
    "revision": "ee77017ceb7f87291de8a6c87eab24cd"
  },
  {
    "url": "assets/js/62.5b23e5d6.js",
    "revision": "4da0d7e25cd057df0ef80cbd3b34079b"
  },
  {
    "url": "assets/js/63.c698e42d.js",
    "revision": "6957963d60717574cb8e98575845bf69"
  },
  {
    "url": "assets/js/64.3e681b10.js",
    "revision": "1e7d18ccccc24ef37f28fcfb6ea7df97"
  },
  {
    "url": "assets/js/65.ea6ec997.js",
    "revision": "403fab54c922bdb82017485e073dc19b"
  },
  {
    "url": "assets/js/66.35cb40b5.js",
    "revision": "5407edc516faf6ee1f6440ab095bc75d"
  },
  {
    "url": "assets/js/67.91922318.js",
    "revision": "401c40282a54860b2ed9b1dc2671a7a2"
  },
  {
    "url": "assets/js/68.a0958d3c.js",
    "revision": "8b2bb09953b938f85705e7a0bc4f3032"
  },
  {
    "url": "assets/js/69.263d9819.js",
    "revision": "77de79b7479436fbcf05758b322606b0"
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
    "url": "assets/js/71.92566d9a.js",
    "revision": "ef981b86d462406f40a29b088bab2f98"
  },
  {
    "url": "assets/js/72.0c801372.js",
    "revision": "4c08a6b9f67a76ac00d7627048831e20"
  },
  {
    "url": "assets/js/73.6ee05353.js",
    "revision": "af343f4a7d644b7b65c1cc441413e49f"
  },
  {
    "url": "assets/js/74.320ad177.js",
    "revision": "006c0226b6efa7f84ec62f813e3ff65a"
  },
  {
    "url": "assets/js/75.8ab42b53.js",
    "revision": "1b45c8ab48e19d386053d1ccfc7a49b1"
  },
  {
    "url": "assets/js/76.37107d99.js",
    "revision": "0e80e8e435cfde9b61a1b1a789531aba"
  },
  {
    "url": "assets/js/77.b687a910.js",
    "revision": "3be09fb19d211e23e931bd53dbdee478"
  },
  {
    "url": "assets/js/78.df65d601.js",
    "revision": "8e7ff588cd784f66b25bcce2691bebf6"
  },
  {
    "url": "assets/js/79.458c4197.js",
    "revision": "8cf0f96e6be600da7fa6f42769e5893a"
  },
  {
    "url": "assets/js/8.842f5810.js",
    "revision": "a426eb6a7974725dfc76758e6fec5425"
  },
  {
    "url": "assets/js/9.9b11be43.js",
    "revision": "3e3f83ffb8908311f6a27ba9351d86b0"
  },
  {
    "url": "assets/js/app.53e7d769.js",
    "revision": "f7e04fdc92fc1c7a71ef5da9385eb1be"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "76bf87a5fb5b7de72c9ad8d80cbd7a19"
  },
  {
    "url": "cs/bash.html",
    "revision": "ed632e6dfad7d160930cc22b0a610ae5"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "450a9820c5d89285aba428f52a1ac907"
  },
  {
    "url": "cs/cmake.html",
    "revision": "23dbc030b3865d842d830daae15915fc"
  },
  {
    "url": "cs/compilation.html",
    "revision": "0c85e5dd2b24a8063c61fc8e13406af8"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "f8bb94740f60f219e332f9fd336a7cde"
  },
  {
    "url": "cs/index.html",
    "revision": "3d8df39d96fbc77854f7d590f5aedde1"
  },
  {
    "url": "cs/keras.html",
    "revision": "85696d0e965ecd853cd8e3a45df507fd"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "cef79911a7c11a9fe2fe65535dd444c0"
  },
  {
    "url": "cs/lwip.html",
    "revision": "ad22fa939206ee49c94c8260eb6c34b0"
  },
  {
    "url": "cs/scala.html",
    "revision": "95fde6d21fe05b7eee2c491acdeb8937"
  },
  {
    "url": "ee/about.html",
    "revision": "10f9c0b685de1782aeade99d4206283e"
  },
  {
    "url": "ee/chisel.html",
    "revision": "e86cf88d9b3570fb3ca25a0318b66046"
  },
  {
    "url": "ee/index.html",
    "revision": "9e5879043ad5e5ff41598c5cdad3fcbb"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "6f1015decf64fde421804682d3cd51df"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "ebbdd1a0827397c9f79d2f370b61cc92"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "427086eb0b5f6f5185d17fe8386b24ba"
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
    "revision": "e730882c9201cb80fb4e52d68538f124"
  },
  {
    "url": "others/about.html",
    "revision": "d99635a892f00758789860be30276bff"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "b524cfc9018624f8dc4134390a2d4ecb"
  },
  {
    "url": "others/android-studio.html",
    "revision": "fe16b59157f421ebad99248634c4624e"
  },
  {
    "url": "others/android.html",
    "revision": "021a27200562b96a9e89e2859bb14625"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "071f0c6d6524d6fb7fffaaae646d9843"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "f7dee07a6d00ce6296303a94eaf585a4"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "b656bc6836922965e06604d646cff600"
  },
  {
    "url": "others/css.html",
    "revision": "0c9aaca79fead589c0e5e5714e5492cf"
  },
  {
    "url": "others/docker.html",
    "revision": "53ba46575763d196148bee2865c4bee8"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "698e4d62919d1d41a9275afb93238eef"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "98ba146caf0125074d7a353284a1b0f6"
  },
  {
    "url": "others/english-writting.html",
    "revision": "c84eb7f976326e636ce00739d32d5c91"
  },
  {
    "url": "others/esp32.html",
    "revision": "6a8749ad70aa1d11bc17f1a275cf5ed0"
  },
  {
    "url": "others/freertos.html",
    "revision": "c6fc786e04709206108a91cde173b8b7"
  },
  {
    "url": "others/git.html",
    "revision": "edba82b10d758d4b29f35ccf453293eb"
  },
  {
    "url": "others/gns3.html",
    "revision": "70e677c782690e9ed539e900303dcb1c"
  },
  {
    "url": "others/gps.html",
    "revision": "69049c5e267130760235bcd40c71364a"
  },
  {
    "url": "others/html5.html",
    "revision": "b063b5635b699161c1d45202d8395020"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "1f7e1cbebc7838176d3ef6afbf298ef8"
  },
  {
    "url": "others/index.html",
    "revision": "a8444c646d9cff5bec3671e167265bb4"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "97cf324c4a82224dce8b6275489b6afd"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "4dd91b4c30fc2739e4aaaec9ee66f137"
  },
  {
    "url": "others/javascript.html",
    "revision": "2335d35cb3da07300cda2b8834e22e50"
  },
  {
    "url": "others/json.html",
    "revision": "6c47f9ebda2d6d83e397ce2b768fcba4"
  },
  {
    "url": "others/latex.html",
    "revision": "ccbb83a484d81036cb5a6a6dbd939ef1"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "c70dc0ed6d15efac87cc276468ffbb33"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "9270b09c5e1b057159a90b50aca69d29"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "e15e956f2f2c908c3519cc35ac6da55e"
  },
  {
    "url": "others/markdown.html",
    "revision": "3a7806e6cc6b00d25ee49c4d33fbd3e7"
  },
  {
    "url": "others/matlab.html",
    "revision": "e53ebe8fed97ed90108905d061b4750c"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "583d58d1974ad5413aed04393ba829db"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "b3b900cb6f298b130f684f34348cbab4"
  },
  {
    "url": "others/network-security.html",
    "revision": "afc578f37b091062514368d710cb94fc"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "58f605cdcbac9cb583f690dc6a0b6c1b"
  },
  {
    "url": "others/oral_english.html",
    "revision": "88b7647d6c83f19d933ecbdc7ccfe111"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "066d3a37a9d9d068ad5de09a2d8eb893"
  },
  {
    "url": "others/poe.html",
    "revision": "8cee4b99717f2b83508c4c9cc3487d4a"
  },
  {
    "url": "others/pyside2.html",
    "revision": "d4bb3dcd1f69c7af8105a075aa33870e"
  },
  {
    "url": "others/python-socket.html",
    "revision": "25cb8aca0f44242b1ec3464563beae06"
  },
  {
    "url": "others/python.html",
    "revision": "5c673c81eeb7269c8e6f8b36f3c3081a"
  },
  {
    "url": "others/q-learning.html",
    "revision": "af047f7fb8e134200f387d784eadcf94"
  },
  {
    "url": "others/qr-code.html",
    "revision": "7182ff77e5ef563beaf8ceb85d4278e6"
  },
  {
    "url": "others/qt4.html",
    "revision": "404698f08699d37be6e757c64ee930e5"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "956773fba7a802c65c90d4013216390b"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "af4b58a8463c188d6c34ae9cecbf14d3"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "3d43a3784969058e097707fb36b0531f"
  },
  {
    "url": "others/sd-card.html",
    "revision": "a7582dbaeb20724fcdc5b65a4bb23e91"
  },
  {
    "url": "others/sdn.html",
    "revision": "54d6c69ef390fd48b3094f3da905df88"
  },
  {
    "url": "others/star-uml.html",
    "revision": "30e06b06152dd6b619d6e81e34b2351a"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "ff721cd3b19163ca1ab3afb0061ac222"
  },
  {
    "url": "others/verilog.html",
    "revision": "103c3cab5d4dd27fde6bcba14f357edb"
  },
  {
    "url": "others/vue.html",
    "revision": "6509000a99f486b6ededd2ff53d35dd0"
  },
  {
    "url": "others/w5500.html",
    "revision": "9540059abf227add4cbe5b711fe1246d"
  },
  {
    "url": "others/w7500.html",
    "revision": "aeed6cd1b037a66e3baad98e224520c0"
  },
  {
    "url": "resume.html",
    "revision": "82c10f7d3a8c28d4225b84cca3be41f5"
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
