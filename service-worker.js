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
    "revision": "9530d957c04e1cda583e37582a3663ad"
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
    "url": "assets/js/19.6a688e7e.js",
    "revision": "15fbaeea2150f9a822a267b1db867d45"
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
    "url": "assets/js/22.feab4881.js",
    "revision": "71d2291f32c6301ad441762723e19e70"
  },
  {
    "url": "assets/js/23.d8b937ca.js",
    "revision": "75855b01fa9a1ce5d260af22f4510336"
  },
  {
    "url": "assets/js/24.ce1b5b84.js",
    "revision": "76604bf979115c30434f003a67ff38a9"
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
    "url": "assets/js/27.1b150bcc.js",
    "revision": "22ad7b2733fbee4b0b594c6d1424a7e2"
  },
  {
    "url": "assets/js/28.8f1c23df.js",
    "revision": "307fe51e1e04a6bb7a2ebc1b068ed064"
  },
  {
    "url": "assets/js/29.3dcb30f5.js",
    "revision": "f1a79cc1ccea412d96be3a19d22a2fb9"
  },
  {
    "url": "assets/js/3.9b494deb.js",
    "revision": "7d93c059af10cca773ee7c38dc8774c3"
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
    "url": "assets/js/32.c38cbc72.js",
    "revision": "ffa867f8b2e2748ef71f68588ba256a9"
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
    "url": "assets/js/37.9a57abb2.js",
    "revision": "2102f2bdc410adae172765aaead3a5c9"
  },
  {
    "url": "assets/js/38.53f3be72.js",
    "revision": "b21b360f7aade2d0677888df531392d7"
  },
  {
    "url": "assets/js/39.cf0a2f9f.js",
    "revision": "ce96c8d60b7dcd5c30de54d83c9ccc7d"
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
    "url": "assets/js/43.a44dea5b.js",
    "revision": "08ccdfc6db82754f9b50598340a0d0b1"
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
    "url": "assets/js/46.ac57d8d2.js",
    "revision": "33fc382495240e3c366c8cc4c2758655"
  },
  {
    "url": "assets/js/47.5489a3f1.js",
    "revision": "3dcf166d889a181c423f8aedcb217425"
  },
  {
    "url": "assets/js/48.54016560.js",
    "revision": "52ad1ea0c66f71aa3155ac27526b6f7f"
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
    "url": "assets/js/50.036cc6eb.js",
    "revision": "587a698999b5b5b6ea4d635ce8960f60"
  },
  {
    "url": "assets/js/51.d5ba66f6.js",
    "revision": "c6baae4caecf17f41f3a58b58bfb5378"
  },
  {
    "url": "assets/js/52.9d22b161.js",
    "revision": "de9c1ee9f6ba62389d8d15ecc70588b4"
  },
  {
    "url": "assets/js/53.02c3f8d8.js",
    "revision": "2c83ab62feb18d7d25a26b2d8b0a6915"
  },
  {
    "url": "assets/js/54.c13bb985.js",
    "revision": "ea1628f0e577294bd7078b5e142941ab"
  },
  {
    "url": "assets/js/55.0f8942e5.js",
    "revision": "f899bd47717e0b285d881a6699dd73c9"
  },
  {
    "url": "assets/js/56.010512a5.js",
    "revision": "0a6a187ce8d14edcdc10c348f4c1cde4"
  },
  {
    "url": "assets/js/57.6fe5040b.js",
    "revision": "8562063647d9a5d27e4ab3292c147519"
  },
  {
    "url": "assets/js/58.370882f4.js",
    "revision": "645367aab5c125593a12deaae1bd16f7"
  },
  {
    "url": "assets/js/59.b8630b01.js",
    "revision": "9cb351c3d56295dfe91964b920c45d99"
  },
  {
    "url": "assets/js/6.36d67b0c.js",
    "revision": "3b78038f45b368c5caa3a4ad25869247"
  },
  {
    "url": "assets/js/60.556c02e4.js",
    "revision": "a51289699d8609ba0a5000d6c5fb2ead"
  },
  {
    "url": "assets/js/61.1242dc55.js",
    "revision": "b399ae64f7778bcba870645ba32eedba"
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
    "url": "assets/js/64.3a34da04.js",
    "revision": "5214b68f712fa93092ff2724c3cba909"
  },
  {
    "url": "assets/js/65.b708481b.js",
    "revision": "d05fe688721e94c0b1a3c5d329c802a5"
  },
  {
    "url": "assets/js/66.35cb40b5.js",
    "revision": "5407edc516faf6ee1f6440ab095bc75d"
  },
  {
    "url": "assets/js/67.c43e5af8.js",
    "revision": "d6779b88e60c9243f9d51d80bc37cdb1"
  },
  {
    "url": "assets/js/68.8642913b.js",
    "revision": "098cb55efeff88311f0f6608643d1bf3"
  },
  {
    "url": "assets/js/69.263d9819.js",
    "revision": "77de79b7479436fbcf05758b322606b0"
  },
  {
    "url": "assets/js/7.bd805a57.js",
    "revision": "852399f9e08f50654dc30e0abad8fb8f"
  },
  {
    "url": "assets/js/70.2d49e489.js",
    "revision": "555d90f80a04c56eb3f4705e67379221"
  },
  {
    "url": "assets/js/71.2055d8b6.js",
    "revision": "e335e37d0967df3ba496654fce1c08a9"
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
    "url": "assets/js/78.0bc48c51.js",
    "revision": "1d6597753cc3a41b37f0c3a9541bf915"
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
    "url": "assets/js/9.9b11be43.js",
    "revision": "3e3f83ffb8908311f6a27ba9351d86b0"
  },
  {
    "url": "assets/js/app.c9dad254.js",
    "revision": "8b4babeb668e60463b98075a7afea86b"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "d800fe83a2d7b6015c2a2f3ab00ce9e7"
  },
  {
    "url": "cs/bash.html",
    "revision": "2e4085b29cadf313b615fb775af0ec30"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "cf96f4274d1a84a84f97c8492bb2ee15"
  },
  {
    "url": "cs/cmake.html",
    "revision": "d5fb58206403ef5adf3b3561235915d4"
  },
  {
    "url": "cs/compilation.html",
    "revision": "e387e66a27bdadce444eebab968e2f1c"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "5153b4a5e241faa483ba2f1b6618034c"
  },
  {
    "url": "cs/git.html",
    "revision": "188bb3a869c9f86c0a6eb2b7f3e5a495"
  },
  {
    "url": "cs/index.html",
    "revision": "e2db20022bfd7a4830e9986240e3dad1"
  },
  {
    "url": "cs/keras.html",
    "revision": "74c7961a2491ce155ba74219631671da"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "864084743ac488ee39d658daaad9d5b9"
  },
  {
    "url": "cs/lwip.html",
    "revision": "9ea778bbf812024b6e9c3056b200fbf9"
  },
  {
    "url": "cs/scala.html",
    "revision": "58ed00db7823d91b57f5aa58f80556b8"
  },
  {
    "url": "ee/about.html",
    "revision": "be85b54264591632d65503076e9c074b"
  },
  {
    "url": "ee/chisel.html",
    "revision": "5b7fcbae7a4fc51d8da15597ba58ad0a"
  },
  {
    "url": "ee/index.html",
    "revision": "f14c7f38e5f1f4816aa57f90d4627858"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "286ef8d562d18abcdc4920a6895582d8"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "db2afd219dd80c72af0971f34e3dff9f"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "d65c77edaf9c96cc1c243939833bd5a9"
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
    "revision": "e75545fcbc48421acbcf91b0011b2fda"
  },
  {
    "url": "others/about.html",
    "revision": "175d27da83ce79c945fadb9c8d4acfcb"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "d70f9a0879bd44d318135fa39e0ba313"
  },
  {
    "url": "others/android-studio.html",
    "revision": "bfe82abcae95e167ca8bb5c8ed380dc9"
  },
  {
    "url": "others/android.html",
    "revision": "e83be107a17a8a7a740cb4cb021e59c0"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "6aee5af71fb762cfbaf9f062094a6994"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "be814c33c2ca1f9bba634a21fd7d7ba3"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "15cfa511c5151d2f273bacbd3479bbd8"
  },
  {
    "url": "others/css.html",
    "revision": "7f3c13d02d2d4d9c47953c45321b650a"
  },
  {
    "url": "others/docker.html",
    "revision": "2f01e105a8851e979cce86ef179ff4d1"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "c08452f16eb6a24e96bbf697754665c2"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "1fbb873c6e02e6825ab1aafaa48c26b3"
  },
  {
    "url": "others/english-writting.html",
    "revision": "8e083b0842553fdf4a942e0f2b92d18b"
  },
  {
    "url": "others/esp32.html",
    "revision": "54579321f34a932dd287ebeed60178a7"
  },
  {
    "url": "others/freertos.html",
    "revision": "a571bc7fc53ce134d484031b38d2954e"
  },
  {
    "url": "others/gns3.html",
    "revision": "186e87b4b39fdefadcaf0343bc9069fd"
  },
  {
    "url": "others/gps.html",
    "revision": "71f503f19e64a943234c1aae9e4df680"
  },
  {
    "url": "others/html5.html",
    "revision": "48920b2b91fc04583f33c647f0c52b3b"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "dd5a9687f8c08ac148b9a6f6d6699d75"
  },
  {
    "url": "others/index.html",
    "revision": "1da3192ca7bdd8c7a9ef512963b2c1cb"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "7712054e71161e94e0466dde1ac26c50"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "e83afd37591e3e857171d1fafe5007ea"
  },
  {
    "url": "others/javascript.html",
    "revision": "fbc996bef44e90baeb304abaed4dfb0d"
  },
  {
    "url": "others/json.html",
    "revision": "c4db04072c213b384bc41229ccd092cd"
  },
  {
    "url": "others/latex.html",
    "revision": "972e73286fbe6a71fd06de0908fc4634"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "4581c8b48fa37095ecf62fedbee1ec9a"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "8b780aa8e5ca6c5a5b08718f4011195e"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "ee4dc8e631023b610358d8029b77e589"
  },
  {
    "url": "others/markdown.html",
    "revision": "a0fb2895812ca336289667d1e5961ff7"
  },
  {
    "url": "others/matlab.html",
    "revision": "df3d088d013b8b3994fb8dcc28b89a70"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "a793f04c5985566ed88559650c262817"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "0471917ede04e6ee3f17b0bd8342960e"
  },
  {
    "url": "others/network-security.html",
    "revision": "efef94b77ccb227128ff9d937326bfd7"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "b88311547ce1de02dd9f065fd66cdc0d"
  },
  {
    "url": "others/oral_english.html",
    "revision": "ae77266e79221c5c715e91e0b6a69214"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "4cd5c5cb2fae481c7c23aef470fed520"
  },
  {
    "url": "others/poe.html",
    "revision": "baa223abd0ac8019fec1674279a7a745"
  },
  {
    "url": "others/pyside2.html",
    "revision": "7dc7d08f82078b6f12dbcb035806ed13"
  },
  {
    "url": "others/python-socket.html",
    "revision": "f6512a18d85af77563b240cc92044c60"
  },
  {
    "url": "others/python.html",
    "revision": "2cf451fe0bc63eeecef0cc3d7292ad39"
  },
  {
    "url": "others/q-learning.html",
    "revision": "453fa892debb3477de5c785cbb222aa6"
  },
  {
    "url": "others/qr-code.html",
    "revision": "2179078ea3509b6006613e7a0c82c019"
  },
  {
    "url": "others/qt4.html",
    "revision": "6790005d0ba1b30d6f3cd583b565860c"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "50fb59da7ce7fec17fd07ab276dd68d2"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "7cf5467cc6c6f749ef3a4ecf8f5a3ead"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "9f608a21c14acca627828c735d01c569"
  },
  {
    "url": "others/sd-card.html",
    "revision": "3f99894653d90fe1b9f1cfcc1053e44c"
  },
  {
    "url": "others/sdn.html",
    "revision": "ef2e1fff8b0f8151346512de9b9aadb9"
  },
  {
    "url": "others/star-uml.html",
    "revision": "a6491ba45e5ccc49b0bf640a341fb15b"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "dd0403c8f643ee2442c62d0745293d22"
  },
  {
    "url": "others/verilog.html",
    "revision": "eb18f5a2bb703c1ed85737c30547d3e9"
  },
  {
    "url": "others/vue.html",
    "revision": "831e517d2d44f855547e83842c47a766"
  },
  {
    "url": "others/w5500.html",
    "revision": "4f4ce9b55481e81b7ec1462996e4ddc2"
  },
  {
    "url": "others/w7500.html",
    "revision": "58bcf8b9e66be38d76fa9b337e8875ab"
  },
  {
    "url": "resume.html",
    "revision": "b5a7e763800722edd0b8973d6741494f"
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
