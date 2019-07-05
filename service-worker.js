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
    "revision": "fe306837fee26d7e790369257f70a478"
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
    "url": "assets/js/10.f43b536f.js",
    "revision": "8e215246289333e48c2aa4d826166516"
  },
  {
    "url": "assets/js/11.47a5d532.js",
    "revision": "08d008d82a67c3af81c5701eda5683b1"
  },
  {
    "url": "assets/js/12.231558a2.js",
    "revision": "c4a00181d4a410a21a1bc2b4b91c016a"
  },
  {
    "url": "assets/js/13.8077bb94.js",
    "revision": "224c71d87a3860f1a19aee6369ba6f72"
  },
  {
    "url": "assets/js/14.3972b2cf.js",
    "revision": "479e3e7b99fe488472e6008285879865"
  },
  {
    "url": "assets/js/15.dcc9bd56.js",
    "revision": "475c425e0d1280a637113d204ab3d43d"
  },
  {
    "url": "assets/js/16.2787dcb5.js",
    "revision": "30c7f454aaaaadd5c0843df24ab9ef68"
  },
  {
    "url": "assets/js/17.9a959a1a.js",
    "revision": "2693af691cf7e5f2c83ce0876d4624b1"
  },
  {
    "url": "assets/js/18.f9eefe72.js",
    "revision": "a58674ba282f18e4049784ee9a4a448e"
  },
  {
    "url": "assets/js/19.72f60bb7.js",
    "revision": "28447d78a9945167cfbf95ddc70b6060"
  },
  {
    "url": "assets/js/2.39763849.js",
    "revision": "f6756e63881d3469251ba6c4267d92aa"
  },
  {
    "url": "assets/js/20.c6a5bc33.js",
    "revision": "370ce9c10069b9ccab0802e47e495680"
  },
  {
    "url": "assets/js/21.d3947e5a.js",
    "revision": "71715facfc6baac20ac757369c069b38"
  },
  {
    "url": "assets/js/22.3bee67aa.js",
    "revision": "1a55f8f3de3609dba545937a818238d1"
  },
  {
    "url": "assets/js/23.cfe2364d.js",
    "revision": "c54fc232e0e8615313f712ac435edd9e"
  },
  {
    "url": "assets/js/24.445c0166.js",
    "revision": "3a164dc0b02cbaef0a574c4fe5d70638"
  },
  {
    "url": "assets/js/25.0439ae30.js",
    "revision": "e1ca782cc18ce4aa342e87ca45869b6f"
  },
  {
    "url": "assets/js/26.6d0586fd.js",
    "revision": "fc8468701f483d9f2fc01ec1ffce5c42"
  },
  {
    "url": "assets/js/27.dae1d75f.js",
    "revision": "dc8477b3d8ca6e0b6f95588cbdf169d5"
  },
  {
    "url": "assets/js/28.6dcc085a.js",
    "revision": "b5c6641da23cd943af428215d5750b77"
  },
  {
    "url": "assets/js/29.cf3f9910.js",
    "revision": "21d1b1dbf7ddbc3c103ccd93e31f55a4"
  },
  {
    "url": "assets/js/3.1bad5f75.js",
    "revision": "8f8d5965929deb791c956eb8170410d1"
  },
  {
    "url": "assets/js/30.4809ba75.js",
    "revision": "cc3b23695c9a67e9a966a65f16678518"
  },
  {
    "url": "assets/js/31.e8457ba4.js",
    "revision": "e39808247a01329ada68044160c5af6f"
  },
  {
    "url": "assets/js/32.e5ef816a.js",
    "revision": "5ea8140827d740689018ace15b77966b"
  },
  {
    "url": "assets/js/33.7d70ef59.js",
    "revision": "b8332237831adf5a4f1873bf36e2d436"
  },
  {
    "url": "assets/js/34.043378cb.js",
    "revision": "89486130e7c370af13372979f2075726"
  },
  {
    "url": "assets/js/35.d4486353.js",
    "revision": "f3ecaf23d1c6963377ccdd57760e62d0"
  },
  {
    "url": "assets/js/36.fe4b2e34.js",
    "revision": "c82f1069296a1ba9356aa2b5ed60a402"
  },
  {
    "url": "assets/js/37.1587d415.js",
    "revision": "09556c8435ca1a02278c507698e605e4"
  },
  {
    "url": "assets/js/38.887eda53.js",
    "revision": "28d52dea4d4411a8bde6ff6480547060"
  },
  {
    "url": "assets/js/39.fcdedb25.js",
    "revision": "f58d5ef49890b23c360748b0393b3342"
  },
  {
    "url": "assets/js/4.b4e7f111.js",
    "revision": "914058cdd48c99e04207a8c589ee443a"
  },
  {
    "url": "assets/js/40.25c5dc41.js",
    "revision": "1fed1a338d0290814cdf6900e90a87b9"
  },
  {
    "url": "assets/js/41.5a9ef59a.js",
    "revision": "03a326ada4cac64cdf43ecce0a4a559c"
  },
  {
    "url": "assets/js/42.89d7185f.js",
    "revision": "270c8871e8d339c7232e25837a055768"
  },
  {
    "url": "assets/js/43.0aeae8ff.js",
    "revision": "83abbf636ae1fe21df81435251326a49"
  },
  {
    "url": "assets/js/44.01d86cd1.js",
    "revision": "075596b15d864c24bbfc6fc2c54447a7"
  },
  {
    "url": "assets/js/45.96568447.js",
    "revision": "9da39ee915982f9d4f2b258dac7c8c0f"
  },
  {
    "url": "assets/js/46.3ddf3c48.js",
    "revision": "b7de442e38491380593dfbbb5be1f8be"
  },
  {
    "url": "assets/js/47.dcd7efff.js",
    "revision": "690e4fcfcb21953203cbd6568686d24b"
  },
  {
    "url": "assets/js/48.4f5964d8.js",
    "revision": "e4fd4da8cdc75ba61659cddfe3bb1893"
  },
  {
    "url": "assets/js/49.f6c9f46a.js",
    "revision": "710f85266c4a6499bae4ffb6a0b50d0c"
  },
  {
    "url": "assets/js/5.3f0149fd.js",
    "revision": "c9aa830e70b7c00d86f2d4dac1957311"
  },
  {
    "url": "assets/js/50.63daec3f.js",
    "revision": "69a536b8f7edcfa015e8fce046fa2853"
  },
  {
    "url": "assets/js/51.de1ad294.js",
    "revision": "6d4a6b8107ac166a582a9a9545590900"
  },
  {
    "url": "assets/js/52.ea881764.js",
    "revision": "06696b9fec90ae230c8751e5f8f7ec0f"
  },
  {
    "url": "assets/js/53.d1ad93cb.js",
    "revision": "11d35a553ad99195b7e206f4d34a64f5"
  },
  {
    "url": "assets/js/54.5e5ee1e4.js",
    "revision": "97713f5ce3e8192fbcf3b953d5031c7b"
  },
  {
    "url": "assets/js/55.d7e80adb.js",
    "revision": "a6ce8950e0492ee0464a6a6049e2edf9"
  },
  {
    "url": "assets/js/56.e447cba5.js",
    "revision": "0458fce9e9bdf02ff0e5903267810a73"
  },
  {
    "url": "assets/js/57.1a897cfa.js",
    "revision": "22bc839a6bd2eef7c6ed031d803ca6ea"
  },
  {
    "url": "assets/js/58.65864662.js",
    "revision": "b96db2af19d5e7c47cc8e483e552ba40"
  },
  {
    "url": "assets/js/59.3d013fa5.js",
    "revision": "2d8294f8cd18bce44767912e25d596b8"
  },
  {
    "url": "assets/js/6.3834d2f3.js",
    "revision": "084be7a5f00b77cda803aa38bbeb6253"
  },
  {
    "url": "assets/js/60.dd4c2dac.js",
    "revision": "e0433fa143195196ef741509e30dc262"
  },
  {
    "url": "assets/js/61.25f3178a.js",
    "revision": "d8538cb5e66daee69cf406420b0631a0"
  },
  {
    "url": "assets/js/62.3fe4553d.js",
    "revision": "fec701f4e598384b8dca917bb737ea45"
  },
  {
    "url": "assets/js/63.6d254322.js",
    "revision": "296e73d32187c4a6140ceca0d3131371"
  },
  {
    "url": "assets/js/64.972e1380.js",
    "revision": "7cb59995882165d73ea5e96a099fe536"
  },
  {
    "url": "assets/js/65.2718e5a7.js",
    "revision": "0dfc380dcc15d926215ff27e1793bfbf"
  },
  {
    "url": "assets/js/66.0d7e1430.js",
    "revision": "13e07373f12f189f38b1a3d6e954db21"
  },
  {
    "url": "assets/js/67.dec21b61.js",
    "revision": "ed24d2af0ef6c5e0fc664e9d6aad8d45"
  },
  {
    "url": "assets/js/68.622b6251.js",
    "revision": "c50882778a70d8aecab1a74f095c7cc8"
  },
  {
    "url": "assets/js/69.1a95d924.js",
    "revision": "49f1fc58b6e2d0da5ff6665d45d8cdb2"
  },
  {
    "url": "assets/js/7.4e6c9680.js",
    "revision": "33d6690f489902734303502bc0e391a5"
  },
  {
    "url": "assets/js/70.8c6354c0.js",
    "revision": "1ae99afea5581542b4d2069b75664dbd"
  },
  {
    "url": "assets/js/71.77d82ab9.js",
    "revision": "d61600463966ca6ee8c4b76aa516af64"
  },
  {
    "url": "assets/js/72.ec4dba8b.js",
    "revision": "f06e4d8c4e23ebcf5db3aa2351b9c095"
  },
  {
    "url": "assets/js/73.5576d03c.js",
    "revision": "e6e232985325c8efe94dc359e8d408ca"
  },
  {
    "url": "assets/js/74.78ef504c.js",
    "revision": "291d6378dae03a5ca9a195023ed68725"
  },
  {
    "url": "assets/js/75.edc8b16c.js",
    "revision": "995275854ee88ee43e0bf7d49f6b7d29"
  },
  {
    "url": "assets/js/76.706a82c8.js",
    "revision": "3af5aedaf5a45948c9575e76e7a06475"
  },
  {
    "url": "assets/js/77.9610dae5.js",
    "revision": "c91edcd05214931397b93553d3c3f0f1"
  },
  {
    "url": "assets/js/8.28bdecf4.js",
    "revision": "4cf5e0b92d639e3fb19a9fa19444949c"
  },
  {
    "url": "assets/js/9.6e9cdb06.js",
    "revision": "d7f23d2cabff57047fa4ce9dc606ae07"
  },
  {
    "url": "assets/js/app.d8b2516f.js",
    "revision": "4a511b28b99a2028aaf0bcfa8650cce0"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "cb581076004692007462d6d4604b768b"
  },
  {
    "url": "cs/bash.html",
    "revision": "55deaa61098bb673ef436e1598cade1e"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "ddbe980c7037ad97a04d49a3f11b99ae"
  },
  {
    "url": "cs/cmake.html",
    "revision": "8d7f815ce8498e7ddf5bddd50261249e"
  },
  {
    "url": "cs/compilation.html",
    "revision": "eab7a6359678ec6a6360fd5aa8abe321"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "c65357fef85e3c194a1870e3c0cad570"
  },
  {
    "url": "cs/index.html",
    "revision": "f6ef4d88bbfede7236eea4a943114d10"
  },
  {
    "url": "cs/keras.html",
    "revision": "7e8b6bdecdfc07eb10bf6be985f50ae3"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "71f800e4a77d1f23efa6b0c23095209f"
  },
  {
    "url": "cs/lwip.html",
    "revision": "9082676c5afd59ab8936d5572ba50019"
  },
  {
    "url": "cs/scala.html",
    "revision": "0e3327b2ce69156931f6cc9b9ce90a1d"
  },
  {
    "url": "ee/about.html",
    "revision": "727a633ca2599ba8baf7c19e1d4a68ba"
  },
  {
    "url": "ee/chisel.html",
    "revision": "0aace8ce5ba57dc926c76f0c81ac4be7"
  },
  {
    "url": "ee/index.html",
    "revision": "1c5a3e1b6663000a13c0a2cb42a134f7"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "9fc21135db2591b5af411b5868747776"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "831df9a6f94c5dd8985276769c8b2c7b"
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
    "revision": "eca7936472247fb354874138a513975b"
  },
  {
    "url": "others/about.html",
    "revision": "9868f8d319776751c46f50cb634fce16"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "0a0e3baeab8e674924010e88e4f27724"
  },
  {
    "url": "others/android-studio.html",
    "revision": "e92518221063e9cddede850ac31cda2d"
  },
  {
    "url": "others/android.html",
    "revision": "231e8ca4d8ab02693ab17088e2ceeb8b"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "89ee48e3bf572d26456b65c7029b7018"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "426904ae7390de7984951f789e3fb339"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "d8d639cf0a1f2b2265c9ec9051c15ca9"
  },
  {
    "url": "others/css.html",
    "revision": "43da21697f94096f36af88de0a0f9eaf"
  },
  {
    "url": "others/docker.html",
    "revision": "2062c70373cd9dd6f2d6a88affb43650"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "949f2148c891baa91fb42398f426cbaa"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "fef6540c5d049c9ea98b7a7cba7b78b4"
  },
  {
    "url": "others/english-writting.html",
    "revision": "d317238558a653c1c40c545f0352af57"
  },
  {
    "url": "others/esp32.html",
    "revision": "88527d1e7a3ed500e9a6238e0700db04"
  },
  {
    "url": "others/freertos.html",
    "revision": "48737c2b3599f8d063c73c3faa400070"
  },
  {
    "url": "others/git.html",
    "revision": "6a868e788251101b1acd6718361957dc"
  },
  {
    "url": "others/gns3.html",
    "revision": "d358ed8fb9e1aff6f98b270676eb5203"
  },
  {
    "url": "others/gps.html",
    "revision": "0f429d54f5189198dcdfe936a3583818"
  },
  {
    "url": "others/html5.html",
    "revision": "a22c95d182efe4a77adad650667989fb"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "0ce470d387223770c32af3057db53eaa"
  },
  {
    "url": "others/index.html",
    "revision": "9f425e63a5bc1e4e438a28ce23647be5"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "9a6af8f3986034b7f949c750d233cf56"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "ff345c324faeba32335edb5129d4d882"
  },
  {
    "url": "others/javascript.html",
    "revision": "30b642bfe154031a3a00198e92646974"
  },
  {
    "url": "others/json.html",
    "revision": "06b7f5838abb885d230af2f6b4b0e549"
  },
  {
    "url": "others/latex.html",
    "revision": "da2fd225236f8f06a3628d11d5a98dd7"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "5d488049e1bd275608eb9c7b3fc054d0"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "60fa647c50932bf6ab7e5b105d651faa"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "949c067570c010ff51178c6bcc6fca0f"
  },
  {
    "url": "others/markdown.html",
    "revision": "15de7560d6f1a57508169d00cb8f3930"
  },
  {
    "url": "others/matlab.html",
    "revision": "4ae7ef0cce894b1f6d395aa777565368"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "692cd70db09ed4159a764ece1b248a18"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "18834e3aa0e84d563deae20b96230675"
  },
  {
    "url": "others/network-security.html",
    "revision": "06b2d4bcc8e3960e74874fbe98de11a3"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "f8838cd85df5e0c01616884927021e5e"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "fe68b0b44b1e98e42c33285ef2fdcc1c"
  },
  {
    "url": "others/poe.html",
    "revision": "71628e38e64ab29f1064f45a373e1330"
  },
  {
    "url": "others/pyside2.html",
    "revision": "bfad3cc3f77e9e0db7eab999f28e0ccc"
  },
  {
    "url": "others/python-socket.html",
    "revision": "85d3cb9cc72ebc6f01abff6f0f346ae1"
  },
  {
    "url": "others/python.html",
    "revision": "5b8c090856c77d5803f5dd9f033a8536"
  },
  {
    "url": "others/q-learning.html",
    "revision": "14af6f6fd634ea86ae7ff5904a858531"
  },
  {
    "url": "others/qr-code.html",
    "revision": "b6a72c8874269b8f6876b81f954e07fe"
  },
  {
    "url": "others/qt4.html",
    "revision": "f63d752d3d74f718c57aaf618a74cfc3"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "06ba7b6fb1c6f351fd0fe3a738bf1e3c"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "1c628be2248fa547f1be9d201b3a5e19"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "ebd1b29bb4b5b10d4b56a19f2165811d"
  },
  {
    "url": "others/sd-card.html",
    "revision": "7c498fb5c3719f861b89f9babf87aecf"
  },
  {
    "url": "others/sdn.html",
    "revision": "4b632a414df2f04601fa8fddfb91beff"
  },
  {
    "url": "others/star-uml.html",
    "revision": "1abc3aa52563a3ffa53002541b03e041"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "6322bb5086e59f96488e9c83196f089e"
  },
  {
    "url": "others/verilog.html",
    "revision": "716a2484f333785e0da7d5c9d3eaea3f"
  },
  {
    "url": "others/vue.html",
    "revision": "220740c13caef0510eb57e3be7b82e43"
  },
  {
    "url": "others/w5500.html",
    "revision": "c1bebb32073802708394a7e6a9d9e496"
  },
  {
    "url": "others/w7500.html",
    "revision": "3663ec23de4601f5daad5080d0a82dd7"
  },
  {
    "url": "resume.html",
    "revision": "5c38a42e19e6502ca56dec25fd5b86b7"
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
