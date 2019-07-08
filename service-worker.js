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
    "revision": "7981e84453631dfa59c0c095de6ac2c5"
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
    "url": "assets/js/11.6595aaf1.js",
    "revision": "f6eab87da9bb9daa4c93042d0fba9f2e"
  },
  {
    "url": "assets/js/12.de52d923.js",
    "revision": "f8daf80bb28aebfb7437338c7e10170c"
  },
  {
    "url": "assets/js/13.9d54abc3.js",
    "revision": "30295e41fbb38d3b4a0d699bc63214f3"
  },
  {
    "url": "assets/js/14.fb6117a6.js",
    "revision": "1d1076c3c73bc15d51d980b0c763df15"
  },
  {
    "url": "assets/js/15.e06f7176.js",
    "revision": "31c008b0eede60270a0477bf0a2d531e"
  },
  {
    "url": "assets/js/16.1b4ee21a.js",
    "revision": "8b2ef1fb6a37594998b0b3bf91a311e2"
  },
  {
    "url": "assets/js/17.9a959a1a.js",
    "revision": "2693af691cf7e5f2c83ce0876d4624b1"
  },
  {
    "url": "assets/js/18.61e7b6e4.js",
    "revision": "684507500bdef2ae8127445ba9be0f55"
  },
  {
    "url": "assets/js/19.cf5f920d.js",
    "revision": "3382801664d49e64adb50dbcdf896fcb"
  },
  {
    "url": "assets/js/2.39763849.js",
    "revision": "f6756e63881d3469251ba6c4267d92aa"
  },
  {
    "url": "assets/js/20.5835f211.js",
    "revision": "8231fbe0876514279fa31945af2f6a2a"
  },
  {
    "url": "assets/js/21.889809f0.js",
    "revision": "567a60c74ce6c65a5d9192db05f0a856"
  },
  {
    "url": "assets/js/22.5e9e04e4.js",
    "revision": "91210d24957ffe5942aa6611c96856b7"
  },
  {
    "url": "assets/js/23.d3d4cbd5.js",
    "revision": "877c21cd1453c068ebce024930c40682"
  },
  {
    "url": "assets/js/24.658c13fc.js",
    "revision": "e9dd6e7b1dedfb4e14c2de32584252e0"
  },
  {
    "url": "assets/js/25.545ad067.js",
    "revision": "d5e6cc4937b58d19f931fea48602b232"
  },
  {
    "url": "assets/js/26.e934e888.js",
    "revision": "956aacab8a61731f0b4e838eb0c735f5"
  },
  {
    "url": "assets/js/27.4e4bf902.js",
    "revision": "7389af0592b11bed668271c9a6e4dec8"
  },
  {
    "url": "assets/js/28.5e1db4d2.js",
    "revision": "acecfc71a70cef215a3ab94fb7dd75e4"
  },
  {
    "url": "assets/js/29.802811d3.js",
    "revision": "4ad21ebcbd5acdab6af950d369df226a"
  },
  {
    "url": "assets/js/3.1bad5f75.js",
    "revision": "8f8d5965929deb791c956eb8170410d1"
  },
  {
    "url": "assets/js/30.21af5c64.js",
    "revision": "d690303983b9ecdf8fc0d314515c8084"
  },
  {
    "url": "assets/js/31.a277cbf4.js",
    "revision": "0ed5085da670b4900f7e057fdd9fd32b"
  },
  {
    "url": "assets/js/32.7be9e0a0.js",
    "revision": "8e360e08d838b5bcd96d8676c8c89eef"
  },
  {
    "url": "assets/js/33.41a53d83.js",
    "revision": "d1b6aec214be3883c9b42be4d989f871"
  },
  {
    "url": "assets/js/34.67c3ecd7.js",
    "revision": "5396d78fd3020deea8f5e775aea7ae7b"
  },
  {
    "url": "assets/js/35.d2005405.js",
    "revision": "d84eacd8f79e770ef0c964261592226d"
  },
  {
    "url": "assets/js/36.c2584e9f.js",
    "revision": "c6ca158b4ddb418e1d7bda43641ba2b5"
  },
  {
    "url": "assets/js/37.cb64e251.js",
    "revision": "b36b7e9159bbaa141cbf49c7ee3ad85a"
  },
  {
    "url": "assets/js/38.8addc573.js",
    "revision": "df1536bdcaf487f4df1bf321b36f05f9"
  },
  {
    "url": "assets/js/39.91d87c34.js",
    "revision": "83d76a036b147b1ed5ca0199fed5d463"
  },
  {
    "url": "assets/js/4.b4e7f111.js",
    "revision": "914058cdd48c99e04207a8c589ee443a"
  },
  {
    "url": "assets/js/40.9235e530.js",
    "revision": "97581ffe4eff271bd2ac9dc3312d8708"
  },
  {
    "url": "assets/js/41.e6070049.js",
    "revision": "85b956c99c012fd2cb6f09b5c4c51d6a"
  },
  {
    "url": "assets/js/42.c69eab68.js",
    "revision": "2ebbbab3e2d1b2d095423025bbd21e20"
  },
  {
    "url": "assets/js/43.c38c57f5.js",
    "revision": "bacda925998a3bea90ff8c9cff8b99ab"
  },
  {
    "url": "assets/js/44.625cd216.js",
    "revision": "87edf15cc45c01d453da73a79a1f6c7b"
  },
  {
    "url": "assets/js/45.2e02e526.js",
    "revision": "145a70e4801bf687db156241fe46bb18"
  },
  {
    "url": "assets/js/46.6612aae6.js",
    "revision": "6ab0add77e391193c8064eafcab231e7"
  },
  {
    "url": "assets/js/47.201eec93.js",
    "revision": "c73c3888a81ca350c6ea80cdacf44f75"
  },
  {
    "url": "assets/js/48.50faa144.js",
    "revision": "7a14d5eda0fac1711ff96471042a7257"
  },
  {
    "url": "assets/js/49.113fc0e3.js",
    "revision": "4c323f89be35ffec49480ea4a69c333e"
  },
  {
    "url": "assets/js/5.3f0149fd.js",
    "revision": "c9aa830e70b7c00d86f2d4dac1957311"
  },
  {
    "url": "assets/js/50.16794b96.js",
    "revision": "71f538e5ad99f9f4bdba073d79c466dc"
  },
  {
    "url": "assets/js/51.436419ca.js",
    "revision": "a8a58ee757e68b0606f691da353fb124"
  },
  {
    "url": "assets/js/52.2b7aef4d.js",
    "revision": "9a37cafaca21b1420c74d366af30c81e"
  },
  {
    "url": "assets/js/53.bfe4a300.js",
    "revision": "c2b92434f65ddbeb37a2aaf92756cddd"
  },
  {
    "url": "assets/js/54.09016351.js",
    "revision": "a694668929d9ff827cee310f888c6a3f"
  },
  {
    "url": "assets/js/55.1ea4335a.js",
    "revision": "e9a7c5b8926f9a6419171446e3d523df"
  },
  {
    "url": "assets/js/56.bb65095a.js",
    "revision": "e093d5870e0898893a25dfcadb36d629"
  },
  {
    "url": "assets/js/57.0bc3c306.js",
    "revision": "931d210a2d1b4b21880dede3a351fa83"
  },
  {
    "url": "assets/js/58.d28bd29e.js",
    "revision": "0dbd11dd33a86679d8f794788f08d61f"
  },
  {
    "url": "assets/js/59.d66c0277.js",
    "revision": "295fd4135c025214c32d62b0ed238965"
  },
  {
    "url": "assets/js/6.f847a9ff.js",
    "revision": "f8514aadf526762a8e20a4c3b719df52"
  },
  {
    "url": "assets/js/60.c8c77626.js",
    "revision": "3820fdd1dffa129f555e90fde423a4f8"
  },
  {
    "url": "assets/js/61.33a9d21b.js",
    "revision": "b346a927ca86b3eea524af69992ed717"
  },
  {
    "url": "assets/js/62.0b41a010.js",
    "revision": "beace325af7f1660db468972248048a4"
  },
  {
    "url": "assets/js/63.bace85fe.js",
    "revision": "4253cd2ea703f40a51c85e9be2a49cce"
  },
  {
    "url": "assets/js/64.174fb7f7.js",
    "revision": "d93fd52e2c8b61402b8578b631fc9905"
  },
  {
    "url": "assets/js/65.73aa4ecd.js",
    "revision": "02110cd19d55ee66f6e71ea6474ac27b"
  },
  {
    "url": "assets/js/66.4bac8383.js",
    "revision": "638f17ce62bce617b34fd18334a1f0ab"
  },
  {
    "url": "assets/js/67.81745478.js",
    "revision": "2bd09b386e7df53926352eb7d8ed0b2d"
  },
  {
    "url": "assets/js/68.aa1b3279.js",
    "revision": "f622ca4266e6d706f40f76336174de4e"
  },
  {
    "url": "assets/js/69.6d8dc55a.js",
    "revision": "9cb5d85233da51c9e57c443cf1059a4e"
  },
  {
    "url": "assets/js/7.ec2b9a92.js",
    "revision": "39fd26759d6b8b645d69a2c0cc590ba9"
  },
  {
    "url": "assets/js/70.eb333125.js",
    "revision": "552f58f5ce5dde523dca6486564008b6"
  },
  {
    "url": "assets/js/71.8f118f1a.js",
    "revision": "7df09c5a401961d6b378942dcc3bc2f9"
  },
  {
    "url": "assets/js/72.73d34ec2.js",
    "revision": "32d41025a9c7ef71119b9a1efce43a86"
  },
  {
    "url": "assets/js/73.3d073b18.js",
    "revision": "280d8a0e56b0d1f15233fb537dce7b74"
  },
  {
    "url": "assets/js/74.033cf08d.js",
    "revision": "4986566d89262de4f0fee9a1e4df3544"
  },
  {
    "url": "assets/js/75.947344b7.js",
    "revision": "cb02c30c7b3b3442696a2e8192b42a1b"
  },
  {
    "url": "assets/js/76.9c1a2d2c.js",
    "revision": "1a7cd87b55a065afa0e62940ad02df73"
  },
  {
    "url": "assets/js/77.829a6bab.js",
    "revision": "cf41e86de945d6b227cf63888e4dc10b"
  },
  {
    "url": "assets/js/78.485f4745.js",
    "revision": "212d3ef40c6ab2e99abd75244476455a"
  },
  {
    "url": "assets/js/79.458c4197.js",
    "revision": "8cf0f96e6be600da7fa6f42769e5893a"
  },
  {
    "url": "assets/js/8.f18d9c07.js",
    "revision": "ec8c2f02fbbeaadfb677d3af48310a9c"
  },
  {
    "url": "assets/js/9.e25e8f07.js",
    "revision": "b37e0b1e4c902fd1f88c13aa4dcd216c"
  },
  {
    "url": "assets/js/app.68518cfb.js",
    "revision": "ec7885b9ee703ba662dbd10cfd927a96"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "3f59299a4f51ec648f5b859ca9bf890a"
  },
  {
    "url": "cs/bash.html",
    "revision": "b65abdccbb791d124b6abc7fe9a41455"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "046a9f77e887d9f9b91292491690f8d3"
  },
  {
    "url": "cs/cmake.html",
    "revision": "ff5f41354f7a16dc07c454f668d7dde1"
  },
  {
    "url": "cs/compilation.html",
    "revision": "bb97c8da6cbff5eb5fd326f77c0d3fa6"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "7ad5d037874f6c056b3ec6d19eff2f28"
  },
  {
    "url": "cs/index.html",
    "revision": "378b2074912368fa56ba2ebd0ed2c596"
  },
  {
    "url": "cs/keras.html",
    "revision": "e2a30deb6d34b0f74d5f1de0c2463795"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "e24790400ab3708bc3d74e2a94bef8a8"
  },
  {
    "url": "cs/lwip.html",
    "revision": "25b548de0a3683a346b2495b8ccb6509"
  },
  {
    "url": "cs/scala.html",
    "revision": "4e2301d098211d22968a23f14c46a71a"
  },
  {
    "url": "ee/about.html",
    "revision": "f31963e473ebe77485d8321ba352a593"
  },
  {
    "url": "ee/chisel.html",
    "revision": "50020fda900c0bc5d44d9e4fea4eb0af"
  },
  {
    "url": "ee/index.html",
    "revision": "09c9a39873cfad636d8bf14fd2ebcb6f"
  },
  {
    "url": "ee/lirc.html",
    "revision": "695d53afa308e7603b8ab2ba4ef1d90f"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "c17c2ca9945aa5c9ab1bb1b105015f7e"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "d569dc5337142816d81a7e4b34f6c6b8"
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
    "revision": "969ae66625916d14418cfa4dd2a31dd8"
  },
  {
    "url": "others/about.html",
    "revision": "ade3187704fbc04daec552e7e9961e06"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "9fd13b5c254523ea0b79b27579a8b935"
  },
  {
    "url": "others/android-studio.html",
    "revision": "d9d540f864f381d3a877f7c0c9f6ca4f"
  },
  {
    "url": "others/android.html",
    "revision": "174b64b24ff92dd76c6b424833ca8365"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "dfd0384c03324ae4d4b8e0585cf08fe7"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "dc0bc8c25fed723edeb781ab7dbef96b"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "fcd4f1b7642a82c1a458c68be2c6dc2a"
  },
  {
    "url": "others/css.html",
    "revision": "5877dcf884a439fee4e99dc6b3a25ec4"
  },
  {
    "url": "others/docker.html",
    "revision": "59a068b240c523cc355f9b53883a55a6"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "c96f148bb32b1d9470bbb4211ae156c9"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "d03bbe9b224b09cfae2ec4aa33f89c6c"
  },
  {
    "url": "others/english-writting.html",
    "revision": "10e6e9046a01e45e5aa0b2a4d30c8fc3"
  },
  {
    "url": "others/esp32.html",
    "revision": "2eb4d6903c51f9d9bbc6d8dba9e5d0c6"
  },
  {
    "url": "others/freertos.html",
    "revision": "281a75a96d3d689a24c891a0bcc4aeee"
  },
  {
    "url": "others/git.html",
    "revision": "01a4876c34be13c39a431933b104dffc"
  },
  {
    "url": "others/gns3.html",
    "revision": "5739491acedc29ff3097c4403e8251e6"
  },
  {
    "url": "others/gps.html",
    "revision": "3e7a9e8bcd186ac436cadb13fda920a0"
  },
  {
    "url": "others/html5.html",
    "revision": "29a5d8114fa144e72374a4433485e50b"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "148c980c74b7a15337380245a5755a2c"
  },
  {
    "url": "others/index.html",
    "revision": "2efc253901642fb122f909f64e96a89e"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "844db742b2cd26329b98fdfda6c8be93"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "cfa890f9500444e4df49722df5c43670"
  },
  {
    "url": "others/javascript.html",
    "revision": "ead51c1929a64527ccbafb6b33f35c0c"
  },
  {
    "url": "others/json.html",
    "revision": "f5a0a6471c9dd55f7fdf43380320ece3"
  },
  {
    "url": "others/latex.html",
    "revision": "2b92b20e18204a3ca7232a04801b3c7c"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "eab4aa353a9a5363f352a6d79516a191"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "34e50a929792f4208c28c8bda4d24a13"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "0bc9e6d467e6fcb48178a9e1f6ac2301"
  },
  {
    "url": "others/markdown.html",
    "revision": "92d6c5b12359275ce60210c122340148"
  },
  {
    "url": "others/matlab.html",
    "revision": "c13c1a34c3607dfcd6134f3b92bf6caa"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "e698676b3e8cf6b33a91faa9119670e3"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "e59e6eea72bdafe0282695b20f0fc8b7"
  },
  {
    "url": "others/network-security.html",
    "revision": "67a3504fcd72835a1e19da4ecb800d5a"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "fbfdc051b959c7d01d0f859083b1c0a5"
  },
  {
    "url": "others/oral_english.html",
    "revision": "48028bfaea76231e260e6bb847f15aca"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "15c0a8efa3cd8000b01da130d4a3d1d3"
  },
  {
    "url": "others/poe.html",
    "revision": "2d8b4ca87d7657002adaf2b278f0ab13"
  },
  {
    "url": "others/pyside2.html",
    "revision": "534bd002367e94eff0359c706385d7eb"
  },
  {
    "url": "others/python-socket.html",
    "revision": "5a095b1c07cca68e691b653eaf908b08"
  },
  {
    "url": "others/python.html",
    "revision": "6e8fcd05cc8e0d9bd16358752ac26b4e"
  },
  {
    "url": "others/q-learning.html",
    "revision": "110943896bb98cf7c7751e1d2ac68272"
  },
  {
    "url": "others/qr-code.html",
    "revision": "a389a2604dd89263c6e9e07a92c14b13"
  },
  {
    "url": "others/qt4.html",
    "revision": "a6c6226f086c82ad80579843e5cb48cc"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "2b7fb825d5a1249a3b160ce2ec0be52c"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "a2544ca534dfffd9c199143c453fe688"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "1a2b48dbcab90cd30dba33b0d159daa4"
  },
  {
    "url": "others/sd-card.html",
    "revision": "27aeee4cbf2bd7439b22bdfbdae04a7d"
  },
  {
    "url": "others/sdn.html",
    "revision": "bfdcc011ac4d103bb4b5cc4c873e0ec9"
  },
  {
    "url": "others/star-uml.html",
    "revision": "114ca76a0f45fbca8908eac66a459d87"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "0dd7e2da5011f70adfec775dc50e6978"
  },
  {
    "url": "others/verilog.html",
    "revision": "fd04e86b71c8a27425d8e3ff69ee10e2"
  },
  {
    "url": "others/vue.html",
    "revision": "a38c5e46497ba29999549a3d64b182a1"
  },
  {
    "url": "others/w5500.html",
    "revision": "c0442b19428154c1b8d40adea40208ff"
  },
  {
    "url": "others/w7500.html",
    "revision": "e19d5286239e9201fc5b54de746e4090"
  },
  {
    "url": "resume.html",
    "revision": "81324f7cd01f9c932e2407be4337da9e"
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
