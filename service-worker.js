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
    "revision": "df03490008e0be97283a2c82b2358924"
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
    "url": "assets/js/14.caa17e95.js",
    "revision": "38d6279e744d57ce6a177bf80e62cf7f"
  },
  {
    "url": "assets/js/15.d3beb185.js",
    "revision": "435e44957caa1f4a22467898ea7fef8e"
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
    "url": "assets/js/26.07adc05f.js",
    "revision": "8e37128bd163b407de3eb861e0c3a6fc"
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
    "url": "assets/js/50.6dbf5c9d.js",
    "revision": "9727509033b2e041ef70338cfba2a7ef"
  },
  {
    "url": "assets/js/51.0c6ac705.js",
    "revision": "81fae5246f400c176de3dff8b9831ffa"
  },
  {
    "url": "assets/js/52.9d22b161.js",
    "revision": "de9c1ee9f6ba62389d8d15ecc70588b4"
  },
  {
    "url": "assets/js/53.34ca4296.js",
    "revision": "403c089eb6c8f3ca1d9940c0dfa95aee"
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
    "url": "assets/js/56.532cd00f.js",
    "revision": "c92b346ff026de8ce7b1d4164adb1211"
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
    "url": "assets/js/59.9e4d1eee.js",
    "revision": "c18a6dc17ed3e5ad54b167a4688a6edb"
  },
  {
    "url": "assets/js/6.f847a9ff.js",
    "revision": "f8514aadf526762a8e20a4c3b719df52"
  },
  {
    "url": "assets/js/60.9228943d.js",
    "revision": "3313d5975eed345825ab3232dc2d0f36"
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
    "url": "assets/js/68.29f71fdb.js",
    "revision": "698c7d6ad8c2a3a55092b0e999146ba0"
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
    "url": "assets/js/70.8993325a.js",
    "revision": "1e3fea8552770109d88347119281eab8"
  },
  {
    "url": "assets/js/71.0faf9483.js",
    "revision": "8954bfb480c1b5cb8554958554bda5b5"
  },
  {
    "url": "assets/js/72.11ef3e4c.js",
    "revision": "9848b01566df3ea61dfecf472785da9f"
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
    "url": "assets/js/75.7e467109.js",
    "revision": "99fc1cea1c8aded8ce8c30fa520adc07"
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
    "url": "assets/js/app.7fc40d2f.js",
    "revision": "85d9d9f21e18be86c3f66e48f18acea3"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "785b2ac9ae9663ba3bcf4b5fc0df6ff9"
  },
  {
    "url": "cs/bash.html",
    "revision": "f44265e2900d5397a33a2196b629876c"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "9610c449a75a7e41ac4ab3676b1dbcf8"
  },
  {
    "url": "cs/cmake.html",
    "revision": "2848351ce1f8e7aa3e6b5f07bd680729"
  },
  {
    "url": "cs/compilation.html",
    "revision": "b6e003d068e5586fdba34dc8db6bf668"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "e7cc83bdb7a17bfc0f9d3a3d448849a8"
  },
  {
    "url": "cs/index.html",
    "revision": "b1be07232ee9a451160d5a4d7737936f"
  },
  {
    "url": "cs/keras.html",
    "revision": "4ff8ffe49875cecfcb80b47634f8c2ec"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "71dd48f365fa2f9ee3858f0e3a0185e4"
  },
  {
    "url": "cs/lwip.html",
    "revision": "b2cd394259f202163543e2207eb0ea8b"
  },
  {
    "url": "cs/scala.html",
    "revision": "0525e63fb8cbc802cf0a042be3323592"
  },
  {
    "url": "ee/about.html",
    "revision": "fba02a305ae5c49f2db761808b010c6d"
  },
  {
    "url": "ee/chisel.html",
    "revision": "ea92dac82736f93450cf4aeca2b28228"
  },
  {
    "url": "ee/index.html",
    "revision": "f366768ae8113c9343c4ab5686d0ace7"
  },
  {
    "url": "ee/lirc.html",
    "revision": "2f1a72e3ab990c7b50b280f3c3ded783"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "6a86d8f261f6612b85c1f192eccfc9e6"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "e2273c8481784a55b50b164d376dba38"
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
    "revision": "70c6e4d39119d3f90391f596045421e9"
  },
  {
    "url": "others/about.html",
    "revision": "c853322a9f296dce4d08b62bf2ecb99d"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "8257f79eb01b9ddf5c650d18e7c5f085"
  },
  {
    "url": "others/android-studio.html",
    "revision": "7068f4f1f80c5961a0c0fff19e8dc8ba"
  },
  {
    "url": "others/android.html",
    "revision": "bbfa96af784abdbe6f6bbd995f7aa3d5"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "03522e83e2bc27f39a9db35f8a1f55b0"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "6059c861dd6b027c470811c45f34b6e9"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "8c264e071293baf98c70b50b2de15cd1"
  },
  {
    "url": "others/css.html",
    "revision": "0932e329a45ca73e6e28f22fbd9ac405"
  },
  {
    "url": "others/docker.html",
    "revision": "68e89d5191522323ff86d03f45e20cac"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "d98658a155db723f295cfe38c3a45f34"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "80293c73122f030f83fa024f10041073"
  },
  {
    "url": "others/english-writting.html",
    "revision": "ca48e69f8c3047b33bf0d74443268d2d"
  },
  {
    "url": "others/esp32.html",
    "revision": "d5fc014a1813e12c595b9e0765edd97a"
  },
  {
    "url": "others/freertos.html",
    "revision": "6d9a3f0fb7cb4e5130c0931537c9ef9a"
  },
  {
    "url": "others/git.html",
    "revision": "99abc39bb503a6709a2e61ece77fc9f0"
  },
  {
    "url": "others/gns3.html",
    "revision": "3d3abe2082c49c1b6c514e0dc3347241"
  },
  {
    "url": "others/gps.html",
    "revision": "260346bb6d4fa57427b13f9518bb790b"
  },
  {
    "url": "others/html5.html",
    "revision": "33f0a9285529333d6371b7653b0079d2"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "c47461483d17b084274633b3b901643f"
  },
  {
    "url": "others/index.html",
    "revision": "24b8933819c18ec3b1f153b3a7820ed5"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "7a65cfc145caedc4c218d4bb3a89acdf"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "7e03a93ec001f2686f22d5d6c5d0ac55"
  },
  {
    "url": "others/javascript.html",
    "revision": "592e761c5db3192b254ec4d974c6ba20"
  },
  {
    "url": "others/json.html",
    "revision": "2b16a3f6229d379d0c191b0e71088279"
  },
  {
    "url": "others/latex.html",
    "revision": "d18b7f0fd144e295ff5ed4bd7525fdc2"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "7a76f030c11353a16180843bd7d2222e"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "5b5fca2c6e8ccdc1a30dc39ba9ab109f"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "dac678d4a097bda017b95d3ceeccfaa7"
  },
  {
    "url": "others/markdown.html",
    "revision": "0320504aa17a393fe5e05d385668a708"
  },
  {
    "url": "others/matlab.html",
    "revision": "dd2794d19519702049123b02b1ead847"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "1030dec03e4645e5516512f3c0857c4a"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "35270d176db01cec3a4932ff49d5c99a"
  },
  {
    "url": "others/network-security.html",
    "revision": "2551ad717696bdbaaa4996c2c9ad88aa"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "938a5897b476f8020b1ca979c886b105"
  },
  {
    "url": "others/oral_english.html",
    "revision": "1726884d70c7389d6b98b9886556856a"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "368b21e63bb4c1e4193f6d3fb44f50cb"
  },
  {
    "url": "others/poe.html",
    "revision": "3d44d86b105d7785c83eb981ba239eba"
  },
  {
    "url": "others/pyside2.html",
    "revision": "a11f346402585e6f2ff2034215f969e8"
  },
  {
    "url": "others/python-socket.html",
    "revision": "d75faba70fd4de7fe92babe172c06ff6"
  },
  {
    "url": "others/python.html",
    "revision": "a26480a8ebac73901ed3688d8498dc6c"
  },
  {
    "url": "others/q-learning.html",
    "revision": "34d89e4e3a64a0cafee18466e1c48036"
  },
  {
    "url": "others/qr-code.html",
    "revision": "5ac6839662850f352cff315c3fe85962"
  },
  {
    "url": "others/qt4.html",
    "revision": "a1451d787421d444a7527b4842b27bc5"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "4ed65ca32acc022febe80eef6413c9d1"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "02a5329cb42873865ca1e60a50e7ca14"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "c89e28e438d1873286ea5045c2fb3f77"
  },
  {
    "url": "others/sd-card.html",
    "revision": "020d49b80e022ea1cfd7ea8b9eefef05"
  },
  {
    "url": "others/sdn.html",
    "revision": "160c75b107161a7f866cd039ff42b2ff"
  },
  {
    "url": "others/star-uml.html",
    "revision": "40e074e8f468198afb014b2891ebd88d"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "8f45c316ecb53b61509c86e3b27bbb7c"
  },
  {
    "url": "others/verilog.html",
    "revision": "c67d3ce0cb4313a4cea4f2088e3ca3ad"
  },
  {
    "url": "others/vue.html",
    "revision": "3d0988190a333bc6ef474aba7276c2f6"
  },
  {
    "url": "others/w5500.html",
    "revision": "fa0a89b9b8b787e34352f267214d21b0"
  },
  {
    "url": "others/w7500.html",
    "revision": "ce5d00db735497ed1f52b21c21831158"
  },
  {
    "url": "resume.html",
    "revision": "eb6e63e572d37180773076c8ea09a1d8"
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
