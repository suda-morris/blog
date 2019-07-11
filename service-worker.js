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
    "revision": "d1fba2b2cb7aa69f2b3dae98d4768b48"
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
    "url": "assets/js/10.c734c883.js",
    "revision": "2f1c8dff800389643b8997f406eef696"
  },
  {
    "url": "assets/js/11.7c897b7a.js",
    "revision": "04390b69e8e074a104cdeeeae8cd1216"
  },
  {
    "url": "assets/js/12.f375e6c7.js",
    "revision": "1a9138bdb9cf2e751b0be5279b35cc0f"
  },
  {
    "url": "assets/js/13.1affb5de.js",
    "revision": "ea10b5cc5b826df7df0689a6d5a982b0"
  },
  {
    "url": "assets/js/14.262429b5.js",
    "revision": "e221a371bb13ef85b1a3bd5997129438"
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
    "url": "assets/js/19.623ea8e0.js",
    "revision": "bb73f60fc3b24fa5e11259e33cd20cd9"
  },
  {
    "url": "assets/js/2.37a3b3f2.js",
    "revision": "81719bc8ab4ae8f768908940225b51cf"
  },
  {
    "url": "assets/js/20.7ce3a8a6.js",
    "revision": "501847ded1926b1072709b473f1a944d"
  },
  {
    "url": "assets/js/21.68c5d8b6.js",
    "revision": "4f815851b762d8c319fc5075fe52f827"
  },
  {
    "url": "assets/js/22.b8be94d2.js",
    "revision": "97e492b141318e87f9dd408bf46b2a9b"
  },
  {
    "url": "assets/js/23.d8b937ca.js",
    "revision": "75855b01fa9a1ce5d260af22f4510336"
  },
  {
    "url": "assets/js/24.3a511bce.js",
    "revision": "9bf9a1abc6fc4a0a328f563b6412c567"
  },
  {
    "url": "assets/js/25.ff972530.js",
    "revision": "8abd875c274d275101fa8bb1f8de3522"
  },
  {
    "url": "assets/js/26.651d2ba7.js",
    "revision": "91f73489c9d0f4550518171dc1563af2"
  },
  {
    "url": "assets/js/27.7488d9ca.js",
    "revision": "4a55add8f63ea0cbf87342d9e61ec4f9"
  },
  {
    "url": "assets/js/28.8f1c23df.js",
    "revision": "307fe51e1e04a6bb7a2ebc1b068ed064"
  },
  {
    "url": "assets/js/29.c86b97b2.js",
    "revision": "acba0110d423058f6f97111866776844"
  },
  {
    "url": "assets/js/3.10821b82.js",
    "revision": "67e01169cd2da8663ed49496ded1a3f9"
  },
  {
    "url": "assets/js/30.932eb429.js",
    "revision": "600eea1c9c0dfc06bc783f389f3c6f1c"
  },
  {
    "url": "assets/js/31.07841078.js",
    "revision": "8bc6fd1598e4861169955ea66402969e"
  },
  {
    "url": "assets/js/32.a40159c5.js",
    "revision": "cf268d8b06bf2810c33fdb3f023165fd"
  },
  {
    "url": "assets/js/33.69fa168d.js",
    "revision": "f1d62da4d1fbd68bb787889d5d808af6"
  },
  {
    "url": "assets/js/34.df9116cf.js",
    "revision": "998891eb8d176e2a633409cb9aa0f4da"
  },
  {
    "url": "assets/js/35.8ab20b34.js",
    "revision": "364b8c04bb000912bd05bba0baf66fd5"
  },
  {
    "url": "assets/js/36.87f73ac6.js",
    "revision": "bf51f652c755243072f547314fed32d4"
  },
  {
    "url": "assets/js/37.aaa946af.js",
    "revision": "dc412809cc4c5d7035ee883b693aea9e"
  },
  {
    "url": "assets/js/38.53f3be72.js",
    "revision": "b21b360f7aade2d0677888df531392d7"
  },
  {
    "url": "assets/js/39.9ec1a120.js",
    "revision": "3317be6e001928e09aedef682edbecbc"
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
    "url": "assets/js/53.6e4280b9.js",
    "revision": "97d0c552089a2554148f54c4e809e490"
  },
  {
    "url": "assets/js/54.0e586dd0.js",
    "revision": "a159a59bfe6551d8f0c288607865a6c5"
  },
  {
    "url": "assets/js/55.40bb0624.js",
    "revision": "d31450b506e35e9c9ec57052c9791cff"
  },
  {
    "url": "assets/js/56.b0661fca.js",
    "revision": "78927b515e65be3b0ed61d0a046ecf39"
  },
  {
    "url": "assets/js/57.f110678f.js",
    "revision": "16df15dcd330c857ba1cd95fa9590d18"
  },
  {
    "url": "assets/js/58.4edcfebc.js",
    "revision": "a1bfc356c93c208ec8e09a17bb526301"
  },
  {
    "url": "assets/js/59.72bfc85a.js",
    "revision": "170f8a393460345078034340bb19dbfa"
  },
  {
    "url": "assets/js/6.36d67b0c.js",
    "revision": "3b78038f45b368c5caa3a4ad25869247"
  },
  {
    "url": "assets/js/60.707fdb07.js",
    "revision": "f23ade90f479a93e60cd0fc85362a7d2"
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
    "url": "assets/js/68.a47f5ab5.js",
    "revision": "fe5ba53dda75af2caadaa799a66e0a44"
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
    "url": "assets/js/70.1cc54a3c.js",
    "revision": "132ad1d70dec91fc1a0501abc62b3b62"
  },
  {
    "url": "assets/js/71.0388b5a1.js",
    "revision": "e26e65f391503b1182e6f1ef6cf11d0d"
  },
  {
    "url": "assets/js/72.e8e2bd49.js",
    "revision": "fe13d149208751cfc876df58758c158e"
  },
  {
    "url": "assets/js/73.f1dc75a3.js",
    "revision": "f6224252ee0f52a0db6cedcfc13dedc5"
  },
  {
    "url": "assets/js/74.320ad177.js",
    "revision": "006c0226b6efa7f84ec62f813e3ff65a"
  },
  {
    "url": "assets/js/75.2385407f.js",
    "revision": "d8ded1542edb207a2de62fbe3ada036c"
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
    "url": "assets/js/78.12183d04.js",
    "revision": "d4eb4c7b0a54442fa6609d70ccd1aa2a"
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
    "url": "assets/js/app.7bbb6bc4.js",
    "revision": "62dc970bb69f8dac85aa76041e9b0b04"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "16349b5cecf5a640c0ae3ed99bcf979d"
  },
  {
    "url": "cs/bash.html",
    "revision": "01dafa2ff9e7680ce4b4973d5107e4a0"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "b34c9b2e2824e2373fe372539c6b4e53"
  },
  {
    "url": "cs/cmake.html",
    "revision": "00a6095807e471e82ef03e754420bc99"
  },
  {
    "url": "cs/compilation.html",
    "revision": "7956cc6dc48809e6caf12dda149726df"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "346dfb25f6fb8d3816ebc8ec1079cef3"
  },
  {
    "url": "cs/git.html",
    "revision": "2896c3c23fb74aaa6250470fbc2a6ebc"
  },
  {
    "url": "cs/index.html",
    "revision": "a57d071ba8f38e777858c66b83af7f8d"
  },
  {
    "url": "cs/keras.html",
    "revision": "e63e892aecb5f541cd9c227f599b127f"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "1d8aed58914ec75ec66320602bfc16e5"
  },
  {
    "url": "cs/lwip.html",
    "revision": "ffcc38188f1adb79d454bf7a457ee1b6"
  },
  {
    "url": "cs/scala.html",
    "revision": "1a85d5e5c74a3709c0b261a26c4f60dd"
  },
  {
    "url": "ee/about.html",
    "revision": "0fdc5d12e0389bf5c9350a41405625b3"
  },
  {
    "url": "ee/chisel.html",
    "revision": "380f761d1216debb61e67c523e2a431e"
  },
  {
    "url": "ee/index.html",
    "revision": "0dc888be67b4357b928cc9288d0b0280"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "fc17bdb47c7bdca01d5773bb32a7218e"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "7596b3916e07fc60f342a6244f221b5c"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "024fadb992ec4c09af667ff923e7210a"
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
    "revision": "67612b1637f9fa22a0da4b15617540c8"
  },
  {
    "url": "others/about.html",
    "revision": "8a43c6b8fd252908e99c5601322a65ae"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "eaaf975823021be13490ac62ed86c228"
  },
  {
    "url": "others/android-studio.html",
    "revision": "3dfc3ddeeb49b790359737da339893d5"
  },
  {
    "url": "others/android.html",
    "revision": "6233856fb83d04f472c00f2a39df9fd1"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "aa03ca364d8e1d4e7040e1db7d4bb234"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "2f2e98d99a871c97b0bbb87a397cd7a4"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "6c92de9f95f511c9da129b99d0b46510"
  },
  {
    "url": "others/css.html",
    "revision": "1af6cdf650a40661fdee3b9ee14dde77"
  },
  {
    "url": "others/docker.html",
    "revision": "b42690415524ae7a8a297e51e79c9ec8"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "e120e4c69fb49c42daece2640fd291d2"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "277fbf67cbbd70c636454ce796ec0c38"
  },
  {
    "url": "others/english-writting.html",
    "revision": "1f13105258e28d53034733fb8b99f726"
  },
  {
    "url": "others/esp32.html",
    "revision": "656504d145375830f8de35a7871c3291"
  },
  {
    "url": "others/freertos.html",
    "revision": "dca629f45cb5ced75e1ea98b4013074d"
  },
  {
    "url": "others/gns3.html",
    "revision": "ef8b6a0d45db8531fb167ac90cedf138"
  },
  {
    "url": "others/gps.html",
    "revision": "d31a95a48e0bc2247f429a5c15d79344"
  },
  {
    "url": "others/html5.html",
    "revision": "ce886ad56b3a6d4b4a3f1050b4c6a130"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "da5ef166edb2895de0a4799b34ec4880"
  },
  {
    "url": "others/index.html",
    "revision": "34beda52398d71b3f76cc57480cb4318"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "02e7f6e350207a85c8e14f8844fa986e"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "e578947a86a3f770f9a249c5b8d8e3c9"
  },
  {
    "url": "others/javascript.html",
    "revision": "9b6bbeda11513e498986a56000759d5c"
  },
  {
    "url": "others/json.html",
    "revision": "dcb8d368e37aba5c044eb610841bb1c0"
  },
  {
    "url": "others/latex.html",
    "revision": "a4e8db38047f4646dce6efbdf473b6ab"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "cdc81627f0991e88284e00e8266840e3"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "421538d5aa650a634133bea4429f5624"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "e4f5429125e6b82eeadc2a4ff912ba5c"
  },
  {
    "url": "others/markdown.html",
    "revision": "76777857fc8ff260d7d1e8ff701f2656"
  },
  {
    "url": "others/matlab.html",
    "revision": "640b5451209d992dd835d3fbb7d8d905"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "1083d5ae4f206a6aff887be1832619bb"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "bd002df8bdf58ac95dc6248cb0c1a170"
  },
  {
    "url": "others/network-security.html",
    "revision": "a98e81932e6c61b34b19b3b10b453a8e"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "9424a2189b963233a635018e36f5ae3e"
  },
  {
    "url": "others/oral_english.html",
    "revision": "24be0fb8013b41fca91982f71e2d7263"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "94ef07c2c1191f656fdc06e11a2c7d11"
  },
  {
    "url": "others/poe.html",
    "revision": "5680c7480e6fc95a458c5d0581ded86d"
  },
  {
    "url": "others/pyside2.html",
    "revision": "31dcd66f0a11787540c40c138beae70f"
  },
  {
    "url": "others/python-socket.html",
    "revision": "29592132486008e41df2ca69c4bd44fa"
  },
  {
    "url": "others/python.html",
    "revision": "70bea16fc3b8b487096ae8a2807563be"
  },
  {
    "url": "others/q-learning.html",
    "revision": "ee41b6d259f501da38788e325e037d71"
  },
  {
    "url": "others/qr-code.html",
    "revision": "5b4db573692316f0af0aac388233890a"
  },
  {
    "url": "others/qt4.html",
    "revision": "1088e157f58b23943756559e3aa4769a"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "b1cd1a322b79baf586e14d096c43103a"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "b9a2d7c16f7d3dce2e86b4dca5067d9a"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "980d882ebd36525f397c90a3d57e1d3d"
  },
  {
    "url": "others/sd-card.html",
    "revision": "9a4b167ad2035a5bec9b08825e98a253"
  },
  {
    "url": "others/sdn.html",
    "revision": "7bf5706694048eb05d5dcc8a904ca278"
  },
  {
    "url": "others/star-uml.html",
    "revision": "2454ff78dac7245f563106bb78ede45f"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "6caa8fff18a23c2c12187270066e4368"
  },
  {
    "url": "others/verilog.html",
    "revision": "c9dc6a524a84b275d0727286d7ffe631"
  },
  {
    "url": "others/vue.html",
    "revision": "ff7466fd1fb310e240e8a42cb54e99c6"
  },
  {
    "url": "others/w5500.html",
    "revision": "c2a9c7ba5e10261fe7a98f74af7b750c"
  },
  {
    "url": "others/w7500.html",
    "revision": "de891a62ae2729f6ac1e5241fe475384"
  },
  {
    "url": "resume.html",
    "revision": "4071706db31f7d46e5aaf8458bdaffaa"
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
