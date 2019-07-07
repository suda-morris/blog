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
    "revision": "4b9d376c45476a0b2a1060847d9e4588"
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
    "url": "assets/js/11.bd236ee5.js",
    "revision": "382656a14dbb464d36b2037daf114f14"
  },
  {
    "url": "assets/js/12.a2239319.js",
    "revision": "c1af3eea42d4cffd4ea7842ec7044770"
  },
  {
    "url": "assets/js/13.4ea2bd05.js",
    "revision": "fa4ec086c834f3dae6f2572e1ad8e4ac"
  },
  {
    "url": "assets/js/14.006a298b.js",
    "revision": "9c55ae4b59a9e94d9c546714aa154b47"
  },
  {
    "url": "assets/js/15.8d8dd02c.js",
    "revision": "8def4a9d7d914300291712bcc8204c15"
  },
  {
    "url": "assets/js/16.64c683a7.js",
    "revision": "25a22ed96dffa4bc9db8536514062172"
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
    "url": "assets/js/20.c6a5bc33.js",
    "revision": "370ce9c10069b9ccab0802e47e495680"
  },
  {
    "url": "assets/js/21.6101ff18.js",
    "revision": "b94bcba16b0e8dce3d617c53c07a0765"
  },
  {
    "url": "assets/js/22.5e9e04e4.js",
    "revision": "91210d24957ffe5942aa6611c96856b7"
  },
  {
    "url": "assets/js/23.c1fb4584.js",
    "revision": "da7671b9d8bec9553fb836439b09c1d6"
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
    "url": "assets/js/26.b4534308.js",
    "revision": "5a4156adb8f77c75a4ab7a706c94a55f"
  },
  {
    "url": "assets/js/27.4e4bf902.js",
    "revision": "7389af0592b11bed668271c9a6e4dec8"
  },
  {
    "url": "assets/js/28.c5083ac1.js",
    "revision": "3b1f1d4eba8e8c16a4b4c59cbdc1b8e8"
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
    "url": "assets/js/31.85c2857e.js",
    "revision": "5a3e897c440a98d773c666660110774a"
  },
  {
    "url": "assets/js/32.7be9e0a0.js",
    "revision": "8e360e08d838b5bcd96d8676c8c89eef"
  },
  {
    "url": "assets/js/33.3c037c85.js",
    "revision": "0aedefc7bf930cf76a02c929c510eccc"
  },
  {
    "url": "assets/js/34.6ae5611e.js",
    "revision": "4ad0667184fdc21e0b1ad36c98d0fb90"
  },
  {
    "url": "assets/js/35.d2005405.js",
    "revision": "d84eacd8f79e770ef0c964261592226d"
  },
  {
    "url": "assets/js/36.b01763f1.js",
    "revision": "ea6ed59232e4dc82bcbb9239924f819a"
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
    "url": "assets/js/43.a3a93558.js",
    "revision": "932901603a06b97f7a6e2eba4e60f786"
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
    "url": "assets/js/46.5e4724be.js",
    "revision": "aadc8853dc09d65936385a660f9ee3bd"
  },
  {
    "url": "assets/js/47.201eec93.js",
    "revision": "c73c3888a81ca350c6ea80cdacf44f75"
  },
  {
    "url": "assets/js/48.9257cb43.js",
    "revision": "10fc018d7bcf2ed44f8dd9563fc30a3e"
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
    "url": "assets/js/50.4b9f19ed.js",
    "revision": "e61bf9a1b7bfe189bb439772639c4b69"
  },
  {
    "url": "assets/js/51.0c150b8d.js",
    "revision": "1bafa0908d3f5572b3a6905133162319"
  },
  {
    "url": "assets/js/52.dabdfd58.js",
    "revision": "a87331e07ebc23692c37bd408990706d"
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
    "url": "assets/js/55.e428ada1.js",
    "revision": "17299f1b9ca0fbdb770af63b9a9b1072"
  },
  {
    "url": "assets/js/56.b6dac76e.js",
    "revision": "8e62434841c4984765d70cbc3f6160b6"
  },
  {
    "url": "assets/js/57.adc9580f.js",
    "revision": "c9aee8bd59e90a277a2de90c3dab7c1f"
  },
  {
    "url": "assets/js/58.8ddcc378.js",
    "revision": "9a5a018d88184390fc13c0acf24d2fab"
  },
  {
    "url": "assets/js/59.535767dd.js",
    "revision": "acf9d3d74e26f15575d29ae62e8af614"
  },
  {
    "url": "assets/js/6.f847a9ff.js",
    "revision": "f8514aadf526762a8e20a4c3b719df52"
  },
  {
    "url": "assets/js/60.a49f3bf2.js",
    "revision": "d1bca48480c73939de589e273cd6b2cb"
  },
  {
    "url": "assets/js/61.88b15a87.js",
    "revision": "46a135fe98cdba03da73c83d66f5d90a"
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
    "url": "assets/js/64.2ae8aa8e.js",
    "revision": "90e835465840ce882cd590052908a556"
  },
  {
    "url": "assets/js/65.64be3785.js",
    "revision": "07c7e5d59768de9c59c2473b6476eb44"
  },
  {
    "url": "assets/js/66.4bac8383.js",
    "revision": "638f17ce62bce617b34fd18334a1f0ab"
  },
  {
    "url": "assets/js/67.dc816659.js",
    "revision": "ee8345fdba490e793c77eff3e2b9bda5"
  },
  {
    "url": "assets/js/68.9ee3c927.js",
    "revision": "b87a9980cc8cde1199435dc68d7d41cb"
  },
  {
    "url": "assets/js/69.6d8dc55a.js",
    "revision": "9cb5d85233da51c9e57c443cf1059a4e"
  },
  {
    "url": "assets/js/7.4e6c9680.js",
    "revision": "33d6690f489902734303502bc0e391a5"
  },
  {
    "url": "assets/js/70.3ed805ac.js",
    "revision": "328143358840feed706c7652ed33377a"
  },
  {
    "url": "assets/js/71.e198ea40.js",
    "revision": "a54eedeac116f9bea08ac01c603664fe"
  },
  {
    "url": "assets/js/72.a9f90ed0.js",
    "revision": "6e7e2d079e756e2caed02010c90bb925"
  },
  {
    "url": "assets/js/73.8c0a7e70.js",
    "revision": "be185ba60d2853ba1ca45b732ba20307"
  },
  {
    "url": "assets/js/74.033cf08d.js",
    "revision": "4986566d89262de4f0fee9a1e4df3544"
  },
  {
    "url": "assets/js/75.76ecdfe2.js",
    "revision": "c78afccdf741e36e1e84a6ba6d30426d"
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
    "url": "assets/js/78.5cbf325b.js",
    "revision": "35ba57cc243e93dacb9cc95d0e1ab3d7"
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
    "url": "assets/js/app.93915711.js",
    "revision": "4bf3e78dd5e1e3f61d9984d31daef69f"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "6f3877363b91a1fea980f7291eb9a5da"
  },
  {
    "url": "cs/bash.html",
    "revision": "b0a6c78b1d3dc4a6ffca0a418e982b26"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "e5d82abb30ac0c020c4c2866b82e182f"
  },
  {
    "url": "cs/cmake.html",
    "revision": "3e7f2fd99fbfc32a13c921b5dd7ed310"
  },
  {
    "url": "cs/compilation.html",
    "revision": "3a52183a9320e3172493c1988265775b"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "9c9657cede6572a0d7bf05df90b436bd"
  },
  {
    "url": "cs/index.html",
    "revision": "46a919db31b656c9097345c0bf53c48e"
  },
  {
    "url": "cs/keras.html",
    "revision": "d9abf623dd885619c737d38d141e71e3"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "554a0a3b1c07ff9c087b15d7673f15cf"
  },
  {
    "url": "cs/lwip.html",
    "revision": "f89f790c4a089a3d50ffeefb486380f2"
  },
  {
    "url": "cs/scala.html",
    "revision": "a37ad3492f917df75ae5c1a9c1e5df26"
  },
  {
    "url": "ee/about.html",
    "revision": "5e0185d44b7029f7abfb806916f1715c"
  },
  {
    "url": "ee/chisel.html",
    "revision": "c6e2a6cc171768dfd6e29b11092bdef0"
  },
  {
    "url": "ee/index.html",
    "revision": "158225bdd2f8bafcba408ef6898891f7"
  },
  {
    "url": "ee/lirc.html",
    "revision": "d0fcf5df944acf724e3f72c88002bd32"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "cecff47bdc52ae755f28cdc884350cc3"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "1bcea4fd04b0809b0d2ed595a825b7ff"
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
    "revision": "2afc3f767726ac64c2ecdc7cd08dfe32"
  },
  {
    "url": "others/about.html",
    "revision": "cf04d786c165b593d909a5cc644dd882"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "1946b667e54ddc8cbc61f23313dfe788"
  },
  {
    "url": "others/android-studio.html",
    "revision": "ec82b5cfe1f99454d92c8595ca5e0526"
  },
  {
    "url": "others/android.html",
    "revision": "a3bf51df3f1678a4421faa6b354b2542"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "52128730fb43b83530b329a930c82bfd"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "b32b40bd243dce25fe7594e340e10066"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "9eae1f8e41793bcfe0cdbf0a56634d25"
  },
  {
    "url": "others/css.html",
    "revision": "6518b4f82fa1923b6863484941dcf0e7"
  },
  {
    "url": "others/docker.html",
    "revision": "0bc0804189a04d4ab8e37b38e526d42c"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "406a96c0dc5e9e1af7008a96e6d25679"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "8bcf3107af68069ddd40f1669d80818f"
  },
  {
    "url": "others/english-writting.html",
    "revision": "90e73aa63a791d274c7f69df22e391ae"
  },
  {
    "url": "others/esp32.html",
    "revision": "704fc064c16ce61c85369b8e8b0100e7"
  },
  {
    "url": "others/freertos.html",
    "revision": "009685fba63d5df9e8857e0fac67544d"
  },
  {
    "url": "others/git.html",
    "revision": "6aec6209f913409bfbdf8f2e5e0c7eb2"
  },
  {
    "url": "others/gns3.html",
    "revision": "c27c22e2916a07135e51eaad9a9db9c7"
  },
  {
    "url": "others/gps.html",
    "revision": "4738b66b51a9948ff4322d45100ecc40"
  },
  {
    "url": "others/html5.html",
    "revision": "38ba435d7cb8ba0e28523706c3714aa7"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "27358840091d234ffd8f9713d7df6713"
  },
  {
    "url": "others/index.html",
    "revision": "d78cf19c1cabfe1a7bead28feaa13d60"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "9d108e59544d48621875b62b7487284a"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "70b1a1cf8897e85ee9e1910265ef25ac"
  },
  {
    "url": "others/javascript.html",
    "revision": "13a6cb5e69f376dee9e0590ab2762cab"
  },
  {
    "url": "others/json.html",
    "revision": "f0f16a94b96cde047b0087e8cc94ce20"
  },
  {
    "url": "others/latex.html",
    "revision": "b9f788d3a3cdc9ab902648876e3145ff"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "3d6efa894d01f59360dd798da3cd8124"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "46abc9d9f233fe5d85367650e19144b7"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "8fedfcded211a64d50ad07c090175756"
  },
  {
    "url": "others/markdown.html",
    "revision": "cf25a725a383835a0c965a2187b1c36b"
  },
  {
    "url": "others/matlab.html",
    "revision": "6cdb3f6372843eff54f07c4e64047ec6"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "4e1bfa0190231bfd7ee5c35197676868"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "82583ce2279b775c5faff7ad904a516e"
  },
  {
    "url": "others/network-security.html",
    "revision": "d65bbea2099f70f9875edb5d7498236d"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "e395031943f1955cb1502cbe770cdc42"
  },
  {
    "url": "others/oral_english.html",
    "revision": "d43be35a64617db03800f74e6c4b7728"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "01db66f27285bfd5e21db7aa8201fbd2"
  },
  {
    "url": "others/poe.html",
    "revision": "bdaf39fcb481a466a72fee688ca0d6c6"
  },
  {
    "url": "others/pyside2.html",
    "revision": "71f464469a496f40c81da7762cc0066f"
  },
  {
    "url": "others/python-socket.html",
    "revision": "8fb62c3332a2e1b218dc1a33eee8a4be"
  },
  {
    "url": "others/python.html",
    "revision": "71263822afb6c4651f4fcad2e16598b2"
  },
  {
    "url": "others/q-learning.html",
    "revision": "1bc9c1cc8792c60c002f626c3eb25e6b"
  },
  {
    "url": "others/qr-code.html",
    "revision": "3fcec56cd9090e5ade3548e5a1d87b25"
  },
  {
    "url": "others/qt4.html",
    "revision": "64e72c4fad32b6edf5c4258edf4c1132"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "3e9c170b230940721538262458f31bb4"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "8f75a0d82ba12101ad0af8968f6fbb6b"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "290c07cda22b2f17f8c8ea5f8242e27f"
  },
  {
    "url": "others/sd-card.html",
    "revision": "d787b41fce32f81dd92fb77aeed486a4"
  },
  {
    "url": "others/sdn.html",
    "revision": "028bb90291ebc76edfa2d512fd62d841"
  },
  {
    "url": "others/star-uml.html",
    "revision": "a27ba1406d84b7e372e6828491231389"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "ed7bfce9c808ffe224650a48a23a392f"
  },
  {
    "url": "others/verilog.html",
    "revision": "099fac9ec79191e67616b342989c1cfa"
  },
  {
    "url": "others/vue.html",
    "revision": "c9767dde86a707ac8b5103762be90e7e"
  },
  {
    "url": "others/w5500.html",
    "revision": "06875a14f6113d35eaa9f0237d90438f"
  },
  {
    "url": "others/w7500.html",
    "revision": "13897de96dcc1983704908d808353a74"
  },
  {
    "url": "resume.html",
    "revision": "fd976a35bda8ddd62ffb5f4e9c8378cd"
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
