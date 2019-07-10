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
    "revision": "4a76722ce65ae6b65e3eacccc038857f"
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
    "url": "assets/js/22.a6aa61b1.js",
    "revision": "bd2bb6662f428c04e656bd8fc9b99263"
  },
  {
    "url": "assets/js/23.d8b937ca.js",
    "revision": "75855b01fa9a1ce5d260af22f4510336"
  },
  {
    "url": "assets/js/24.9e22370a.js",
    "revision": "b95fca3444d3797e3ebb01f5ed720b1c"
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
    "url": "assets/js/29.e81b2179.js",
    "revision": "30e8c4c5a8c209475c2529ac4ae38246"
  },
  {
    "url": "assets/js/3.cd08504d.js",
    "revision": "b1db5ab80edf62542056fba18272f57d"
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
    "url": "assets/js/32.3ad220a1.js",
    "revision": "d4af07d12a10a6b751481d7afe292824"
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
    "url": "assets/js/37.ed26df88.js",
    "revision": "76b2a13f2d1f51619ca8cf3ed1bbd766"
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
    "url": "assets/js/43.7452e44d.js",
    "revision": "2473743976b8b4d7381cc8a435b65984"
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
    "url": "assets/js/46.e8c1063d.js",
    "revision": "c0c9e8fd9e15d6bd76cddd75cafac3fe"
  },
  {
    "url": "assets/js/47.5489a3f1.js",
    "revision": "3dcf166d889a181c423f8aedcb217425"
  },
  {
    "url": "assets/js/48.e258fdb8.js",
    "revision": "c1e1302a748f04f8f8845babf9cbe24c"
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
    "url": "assets/js/50.2bc124d5.js",
    "revision": "e40dbbf50d35348a1fee2cdcf3752f6a"
  },
  {
    "url": "assets/js/51.2827bf81.js",
    "revision": "e71f99b9b34daae7c58b0d2a9aba6136"
  },
  {
    "url": "assets/js/52.6ec65d94.js",
    "revision": "995e3b23ffd23410d59c8d44a7ca7e3d"
  },
  {
    "url": "assets/js/53.6e4280b9.js",
    "revision": "97d0c552089a2554148f54c4e809e490"
  },
  {
    "url": "assets/js/54.c13bb985.js",
    "revision": "ea1628f0e577294bd7078b5e142941ab"
  },
  {
    "url": "assets/js/55.5c65d17b.js",
    "revision": "dc1e1c2218d0297ae0f303544d1a09fc"
  },
  {
    "url": "assets/js/56.16d72804.js",
    "revision": "ecc1eaf92969134b256e5a1275954263"
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
    "url": "assets/js/59.65bc352f.js",
    "revision": "441abd79cf3b6c9d5be477eb3894544d"
  },
  {
    "url": "assets/js/6.36d67b0c.js",
    "revision": "3b78038f45b368c5caa3a4ad25869247"
  },
  {
    "url": "assets/js/60.3eb40562.js",
    "revision": "f81f26d135a151e3b1937d5b2982454f"
  },
  {
    "url": "assets/js/61.e0a1bfe9.js",
    "revision": "7f01a134bc0707587be2145f105a5c7c"
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
    "url": "assets/js/64.4d6191d4.js",
    "revision": "c5b63a73ac7842cfe196ae4899ab80fe"
  },
  {
    "url": "assets/js/65.30e5ada7.js",
    "revision": "fb546582cf2225adcd1ab6b35e49e2d6"
  },
  {
    "url": "assets/js/66.35cb40b5.js",
    "revision": "5407edc516faf6ee1f6440ab095bc75d"
  },
  {
    "url": "assets/js/67.63fe323b.js",
    "revision": "bcc630f14e1563c3ca4ecd6bb490c4b9"
  },
  {
    "url": "assets/js/68.04dc9c06.js",
    "revision": "ae31ce56d2c3e6376ff79f9c056e194d"
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
    "url": "assets/js/70.4f70e0e5.js",
    "revision": "719f6fbcf156877a034f7080c6399b16"
  },
  {
    "url": "assets/js/71.8602c559.js",
    "revision": "4b356ef5172476753bbc6d56331241ad"
  },
  {
    "url": "assets/js/72.f44ac7dc.js",
    "revision": "cc7005997bdab7ca7102ae5e415dfafd"
  },
  {
    "url": "assets/js/73.4dae40b7.js",
    "revision": "72777248502f9711ab0f3a658da2c339"
  },
  {
    "url": "assets/js/74.320ad177.js",
    "revision": "006c0226b6efa7f84ec62f813e3ff65a"
  },
  {
    "url": "assets/js/75.c71e184f.js",
    "revision": "57c5d37eae4a3c101205d5e9d8acfc8e"
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
    "url": "assets/js/78.28895905.js",
    "revision": "000d50bbf3d1a1c53f691e0ece901ff5"
  },
  {
    "url": "assets/js/79.458c4197.js",
    "revision": "8cf0f96e6be600da7fa6f42769e5893a"
  },
  {
    "url": "assets/js/8.c59f3980.js",
    "revision": "1a372dbd4864142d7dbe101f53731d69"
  },
  {
    "url": "assets/js/9.9b11be43.js",
    "revision": "3e3f83ffb8908311f6a27ba9351d86b0"
  },
  {
    "url": "assets/js/app.e39475a8.js",
    "revision": "6f4d6cbf4f86e93001bb074465c27e17"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "d267e3349a9a0cfb357201b65e2881c9"
  },
  {
    "url": "cs/bash.html",
    "revision": "930ce4255e49173645087de3aaa94682"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "c6bf077e3b05267b50ab639ef2aeaeec"
  },
  {
    "url": "cs/cmake.html",
    "revision": "c9c1e4fe825e77e77c479c60e8779012"
  },
  {
    "url": "cs/compilation.html",
    "revision": "608eeb089385133eef451b73920471c7"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "576bf8a21d5e1c05d9ea2024f798f09a"
  },
  {
    "url": "cs/git.html",
    "revision": "3fb8160ea8acebee06b934563fea71db"
  },
  {
    "url": "cs/index.html",
    "revision": "62b160b72335339ee41c71013b451b36"
  },
  {
    "url": "cs/keras.html",
    "revision": "94a496358f3e35984cb921cc0db7b074"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "ea837d29c3f80edfa4d6be71c9102b8d"
  },
  {
    "url": "cs/lwip.html",
    "revision": "172fbbdff59ac3ed218d69fd717e03ae"
  },
  {
    "url": "cs/scala.html",
    "revision": "a5b8276a12e9161bab9a3e6ec0302c90"
  },
  {
    "url": "ee/about.html",
    "revision": "c4e46fc3eaf49ceba42a752f35ae2b62"
  },
  {
    "url": "ee/chisel.html",
    "revision": "1abe3573617d5ea39cc63462d0cce3a9"
  },
  {
    "url": "ee/index.html",
    "revision": "1d23f3a049f0b270fdd0e3e93d291d9f"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "2955d06ff72595c8ffae08119eb789a6"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "f93889d4fdbd2eae962be12f1964af4b"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "019fb4ec2304835faa1789efcd4c29dc"
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
    "revision": "c2ce9e7db29182a68d0f5580ca559e20"
  },
  {
    "url": "others/about.html",
    "revision": "47a6e23ad47676cf916ada3aa2545102"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "8cd15bfaec69d09effa16833809acee3"
  },
  {
    "url": "others/android-studio.html",
    "revision": "b4865bf8b299253b3f19fc664527eca0"
  },
  {
    "url": "others/android.html",
    "revision": "124a56845a1bb60d986f971579edccee"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "029664abe5b9b019e1601664a70c954d"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "88471fc4a43c494b3d4ac508a559dfca"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "7063b9a860ddc4eaaae18410187296fd"
  },
  {
    "url": "others/css.html",
    "revision": "a9e379d7e275e2442bb9e0ed5196d77b"
  },
  {
    "url": "others/docker.html",
    "revision": "8103d82e2b8a6662d0e5616fa6ee67e1"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "04c3174a38a4b77b1d88badba4839b7d"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "5fc8661195123c23e8a8ffc80af8c5f4"
  },
  {
    "url": "others/english-writting.html",
    "revision": "d9f560b1c1a19c6cd1340bf20fc75927"
  },
  {
    "url": "others/esp32.html",
    "revision": "cfdc12d3f77f1d0d04379974cd51211b"
  },
  {
    "url": "others/freertos.html",
    "revision": "92d60b3d68e5ce442be32a14b7529e19"
  },
  {
    "url": "others/gns3.html",
    "revision": "49603c6871f62c0cb99bfe7b0013f9d5"
  },
  {
    "url": "others/gps.html",
    "revision": "796288ce2459ed0ba629235e2de4ed0a"
  },
  {
    "url": "others/html5.html",
    "revision": "8ff6d1dc769704ce8cfd1036447081f8"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "80fe2e75b9b4a4d10d5f38630e926b9f"
  },
  {
    "url": "others/index.html",
    "revision": "1018b5b78fb1af079a8af2cdccbd8ca2"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "9d3b250225c043bd2975cc2fa82dfcb2"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "a92fa3a87c719987e2f4fba598ec3626"
  },
  {
    "url": "others/javascript.html",
    "revision": "ecf81455c677b70efdc7e8a1408ff60b"
  },
  {
    "url": "others/json.html",
    "revision": "a81a8ab22983a4fbadf611792adaf9f4"
  },
  {
    "url": "others/latex.html",
    "revision": "64d29e234b8affacc7a673738acfc774"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "486e615c0facee014fcfeda0c8504c86"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "20ee7715b7ccf273232abbab7b91d157"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "078e31127642a062681a16ab3317161b"
  },
  {
    "url": "others/markdown.html",
    "revision": "8da6f4be9a9f0bcf9833e6c101078fad"
  },
  {
    "url": "others/matlab.html",
    "revision": "e2fa5a29be7be01dc2cb2530ad3b6ed9"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "101a909f62bbf56dfb9bd1d598016095"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "732b61b102997017150c208fe9ac7db8"
  },
  {
    "url": "others/network-security.html",
    "revision": "aa28f8947552d763ec5dd839120c2949"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "489a58076c3ccf3cc57cbdc072f523fb"
  },
  {
    "url": "others/oral_english.html",
    "revision": "3b059d06b021eaae08e71a6c62b2c473"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "ca8dce7440ad11ae4cb2142e1b09689c"
  },
  {
    "url": "others/poe.html",
    "revision": "d2cc84dbdbabc032ce8308d3ca6f5ef0"
  },
  {
    "url": "others/pyside2.html",
    "revision": "b82f1dfb542b46d0d49a3653cd0684fc"
  },
  {
    "url": "others/python-socket.html",
    "revision": "9511c971c655a4ea4d43aa5a5bd0abfc"
  },
  {
    "url": "others/python.html",
    "revision": "f6dfbafaf32f0b6db891616ff83a6259"
  },
  {
    "url": "others/q-learning.html",
    "revision": "a6fa0797fdbfe91298fe0e543dffcafd"
  },
  {
    "url": "others/qr-code.html",
    "revision": "78ca29c556938bd2b967070a09506719"
  },
  {
    "url": "others/qt4.html",
    "revision": "aa8318ca14ed1c124c367dcc0473765f"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "7aa00695097ebc9e14956a9c5dc20dd6"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "d7815c1c3d289b407fe7e39c68e2d5bb"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "177f590fb71d2c01ffab043ede1d4266"
  },
  {
    "url": "others/sd-card.html",
    "revision": "465859b4943527c19baad40793a61b5e"
  },
  {
    "url": "others/sdn.html",
    "revision": "0f6ca93a7317f0590fe8e236b23b0bce"
  },
  {
    "url": "others/star-uml.html",
    "revision": "e64b0c6b3e34a08663bd1183d2c9bf66"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "0c14129a7be758aec1a55266dad46feb"
  },
  {
    "url": "others/verilog.html",
    "revision": "31381267edf42d181f63f2bf8dc21e70"
  },
  {
    "url": "others/vue.html",
    "revision": "176421201bc8b140521f6d541aa30959"
  },
  {
    "url": "others/w5500.html",
    "revision": "efa7b195c77894368a96e45144065cce"
  },
  {
    "url": "others/w7500.html",
    "revision": "982cdcd0c22c029e9dde374e921c855d"
  },
  {
    "url": "resume.html",
    "revision": "da5b6114c6f6f8f6fb6d2e0bfb6a711f"
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
