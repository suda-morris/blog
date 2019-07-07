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
    "revision": "56e07ac5c15ad16d09361c6e694789e2"
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
    "url": "assets/js/11.2b06d8a7.js",
    "revision": "6c00cfbe1ced2515a8eeea8ece08cc85"
  },
  {
    "url": "assets/js/12.6938c398.js",
    "revision": "aabcb99af1557895e8e0bdc2cd2d0efa"
  },
  {
    "url": "assets/js/13.5e22cb21.js",
    "revision": "ef1189f296e7ac5d42f083a87e883ef9"
  },
  {
    "url": "assets/js/14.8f81edb0.js",
    "revision": "52db9c79aa12e31ff0c3af859ce850b4"
  },
  {
    "url": "assets/js/15.dbbef5dd.js",
    "revision": "984a0cea8f0cef44fb97402071378ee2"
  },
  {
    "url": "assets/js/16.0ff3aac7.js",
    "revision": "0961796b8dcc961d8a73167ef2ad5acf"
  },
  {
    "url": "assets/js/17.911a6867.js",
    "revision": "0cf817904eec2eb5fb495ece21c069ed"
  },
  {
    "url": "assets/js/18.232acb37.js",
    "revision": "5f480cf57265582a7c7734aeaa1f13e9"
  },
  {
    "url": "assets/js/19.c62085af.js",
    "revision": "96f916cdb753c5e88df6fa1117be747b"
  },
  {
    "url": "assets/js/2.39763849.js",
    "revision": "f6756e63881d3469251ba6c4267d92aa"
  },
  {
    "url": "assets/js/20.35c321b5.js",
    "revision": "be9d94d96fb0901ce99a53b32588d395"
  },
  {
    "url": "assets/js/21.074f2af3.js",
    "revision": "218f1d87c4bd314a83a1d2d86cf6fab4"
  },
  {
    "url": "assets/js/22.6d12ecde.js",
    "revision": "3b18ed0bd8461006ceb03f1473d738eb"
  },
  {
    "url": "assets/js/23.72b605fd.js",
    "revision": "6aa2d759cc033ce0140bb02707896f44"
  },
  {
    "url": "assets/js/24.429ef59a.js",
    "revision": "f5f691cc2860ad4c1d220a9869dd2782"
  },
  {
    "url": "assets/js/25.02616a50.js",
    "revision": "682fa7c453a9ec9ba37c1728bce49e2d"
  },
  {
    "url": "assets/js/26.07adc05f.js",
    "revision": "8e37128bd163b407de3eb861e0c3a6fc"
  },
  {
    "url": "assets/js/27.73ef45e8.js",
    "revision": "81446877e52809111ed1d37179c6baac"
  },
  {
    "url": "assets/js/28.9808199f.js",
    "revision": "0916228059cd01ea583645f5b35e7af7"
  },
  {
    "url": "assets/js/29.a7e077bc.js",
    "revision": "0352ae3bc67e70f7bdfc352540a61414"
  },
  {
    "url": "assets/js/3.34c53f41.js",
    "revision": "96196530582ef31e1d1d12c6bb39fbd4"
  },
  {
    "url": "assets/js/30.0fabc459.js",
    "revision": "562da8ff1f24c1ca03c4f4554a343497"
  },
  {
    "url": "assets/js/31.6c214b74.js",
    "revision": "30e6430bdd14eb5f71c2d3639194f850"
  },
  {
    "url": "assets/js/32.e94e175c.js",
    "revision": "2eaad978642b13cf2c08ac1197e840bf"
  },
  {
    "url": "assets/js/33.7bc4de03.js",
    "revision": "c6b87ecc5025cc29d2a09262b21d3812"
  },
  {
    "url": "assets/js/34.d2b4287a.js",
    "revision": "8334a7618115215dd29d20ebdf5762bb"
  },
  {
    "url": "assets/js/35.3a83b777.js",
    "revision": "715560d3a0b3695e49cafc39b1716200"
  },
  {
    "url": "assets/js/36.8dc751b9.js",
    "revision": "01af90e19e3f8f0d25383a2272617fc6"
  },
  {
    "url": "assets/js/37.b83b9ca6.js",
    "revision": "88f36640a3eb70ec1f6e89a6f06de84c"
  },
  {
    "url": "assets/js/38.a320b778.js",
    "revision": "5b1630b27da6e911d44a0b5a61518263"
  },
  {
    "url": "assets/js/39.6f9c14e4.js",
    "revision": "917b4a0fd61b5f056f93cfeb8367cafb"
  },
  {
    "url": "assets/js/4.b4e7f111.js",
    "revision": "914058cdd48c99e04207a8c589ee443a"
  },
  {
    "url": "assets/js/40.4da71bde.js",
    "revision": "a383a7eb7a83e7828270e0766948b439"
  },
  {
    "url": "assets/js/41.fa9bd8ca.js",
    "revision": "e9358012ddd0f93c1b63cbcac1f91c53"
  },
  {
    "url": "assets/js/42.996ce711.js",
    "revision": "9f385119965cc09d2e475be13f67638a"
  },
  {
    "url": "assets/js/43.0c03caf4.js",
    "revision": "e6962796e5683d0dd03cdcb1248d4be6"
  },
  {
    "url": "assets/js/44.baf52b76.js",
    "revision": "c3c1d08ed1915c7d1d58599ab37f4483"
  },
  {
    "url": "assets/js/45.ce589465.js",
    "revision": "c049ba69c32482974f53e2467610036f"
  },
  {
    "url": "assets/js/46.53ba7f1d.js",
    "revision": "de7a3a9e04d41fbff9523c4a4249f85c"
  },
  {
    "url": "assets/js/47.a74d42ed.js",
    "revision": "5a3d8d1310bd8c1bee06b1e51e4f4f9b"
  },
  {
    "url": "assets/js/48.cb81bec0.js",
    "revision": "608ccccdf3a3082ffd84dd57f4a0af4c"
  },
  {
    "url": "assets/js/49.21779386.js",
    "revision": "326c29493d22dac563a2f05330d8e49b"
  },
  {
    "url": "assets/js/5.a1b75de6.js",
    "revision": "6151d94e5a1fdac94d77738528f16817"
  },
  {
    "url": "assets/js/50.128a20e3.js",
    "revision": "1d29f4977c4af68789d748e533dc4d03"
  },
  {
    "url": "assets/js/51.0c6ac705.js",
    "revision": "81fae5246f400c176de3dff8b9831ffa"
  },
  {
    "url": "assets/js/52.8efb7adc.js",
    "revision": "1fcaa0e3183c12d4f03aeb4216ac4b3d"
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
    "url": "assets/js/55.555ee180.js",
    "revision": "c2d24a02951baa9d17397211fab1bff0"
  },
  {
    "url": "assets/js/56.c2e78003.js",
    "revision": "5883f6f1512e96987fba5379d0ae57ac"
  },
  {
    "url": "assets/js/57.e4d35fde.js",
    "revision": "ae86e2455c3aed910b88be7c30904e8d"
  },
  {
    "url": "assets/js/58.6cdc6a51.js",
    "revision": "f2cf9e9cf39cd91046b5ebd244a5e1c2"
  },
  {
    "url": "assets/js/59.72128470.js",
    "revision": "2d9ef8c8c50b4a6b3ad66a3f2e1cdbb8"
  },
  {
    "url": "assets/js/6.114e7557.js",
    "revision": "b3587ae7c71dddbfabbfbd09e840e9af"
  },
  {
    "url": "assets/js/60.84f1f7c0.js",
    "revision": "4e7a621830a58f070f60fba4067e64a7"
  },
  {
    "url": "assets/js/61.8538aa21.js",
    "revision": "64d96aa5a333250622fc2e9e49c11ca6"
  },
  {
    "url": "assets/js/62.3a9f605d.js",
    "revision": "45fd36a5e9beb67d1be04ae153be2e46"
  },
  {
    "url": "assets/js/63.c6ea4961.js",
    "revision": "018b5630b1a892e4b71f1520f9af4757"
  },
  {
    "url": "assets/js/64.9962584a.js",
    "revision": "edafe890a8721bff1c1a07bb28e5f446"
  },
  {
    "url": "assets/js/65.5a980165.js",
    "revision": "0e8d7fd1a9e2a6e9d934765eec80c58b"
  },
  {
    "url": "assets/js/66.608a61a6.js",
    "revision": "f31645d9376fb8672eb3299d877e1700"
  },
  {
    "url": "assets/js/67.cc0bbd15.js",
    "revision": "2c9e48c68adfa507e8b4ff545f168b20"
  },
  {
    "url": "assets/js/68.2296bfa8.js",
    "revision": "408f060f146224e2d97c0087202f81c0"
  },
  {
    "url": "assets/js/69.b756c728.js",
    "revision": "bb264f8ec47d96d84e6b263053ec9e54"
  },
  {
    "url": "assets/js/7.2afe2f0b.js",
    "revision": "4854cac2d347f13ba797308d71f2a44b"
  },
  {
    "url": "assets/js/70.a146f2bb.js",
    "revision": "86815ead3e355acd005ddd4f1b8fa006"
  },
  {
    "url": "assets/js/71.e23c3ba3.js",
    "revision": "844967af7d058ad3233846f2a7a7e624"
  },
  {
    "url": "assets/js/72.66651797.js",
    "revision": "c8de38e14e3b4b106ee8cf122bdfc1a9"
  },
  {
    "url": "assets/js/73.07c7e97c.js",
    "revision": "555fd07eb6663ed3f14403b45a4a03da"
  },
  {
    "url": "assets/js/74.d5333979.js",
    "revision": "a50794ff89210a3713cc52b16ac50a62"
  },
  {
    "url": "assets/js/75.46c667de.js",
    "revision": "f46122150ddaa1dcdbde5aaeba7568b9"
  },
  {
    "url": "assets/js/76.2336d17e.js",
    "revision": "036e45907a7ba664826e87079aa8fff5"
  },
  {
    "url": "assets/js/77.9ca247a4.js",
    "revision": "35de55d7295f93297466fecffdeda3d9"
  },
  {
    "url": "assets/js/78.9b90a9e1.js",
    "revision": "2939911eb23331c78cae30d5d62e77c9"
  },
  {
    "url": "assets/js/8.1f6c3b66.js",
    "revision": "6c5c2cd41ab3227c69c44c98937c178b"
  },
  {
    "url": "assets/js/9.a9e4fa45.js",
    "revision": "16bc65430624ea4bfca3c0c5fd53e57c"
  },
  {
    "url": "assets/js/app.8b70fc4b.js",
    "revision": "a58704e452b238002b2e2d218c566d76"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "13c88c172c64ddf1c8e0268cf09c0918"
  },
  {
    "url": "cs/bash.html",
    "revision": "181083cb5591e31d172485cab1ebc3b9"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "0e482606870626512afcb85ca83d9216"
  },
  {
    "url": "cs/cmake.html",
    "revision": "31c8278e607e52f184fb7855a38e5ae2"
  },
  {
    "url": "cs/compilation.html",
    "revision": "88bf3b273332e0312f390caa11e6d564"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "2a673285a923a7f4e4fa33c661ee9f7d"
  },
  {
    "url": "cs/index.html",
    "revision": "47361436dd0120e4acadf1adea7903de"
  },
  {
    "url": "cs/keras.html",
    "revision": "fa09c4a5cedbe42ba84c6613e096be02"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "08c446c10b8acf609beeb4b30acfcc8e"
  },
  {
    "url": "cs/lwip.html",
    "revision": "b8f66319f89e80e8a8402df1cbb0dcac"
  },
  {
    "url": "cs/scala.html",
    "revision": "b5a1d0f4b755e94d340549a9ce7d18d1"
  },
  {
    "url": "ee/about.html",
    "revision": "e08f5b8580e61a92ea76bcef5ffa6a81"
  },
  {
    "url": "ee/chisel.html",
    "revision": "5d05eacf235d2f785057b7143dd87a77"
  },
  {
    "url": "ee/index.html",
    "revision": "d6019ffaaaa1677594602e8e74a2481b"
  },
  {
    "url": "ee/lirc.html",
    "revision": "4dea518effba3c3fe91620fd3aa3e93e"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "d24a153ea195a6e9b406f70416953eaa"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "ea6a1f58689e82366cb941d01212a67a"
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
    "revision": "e001b21e20346a0692dee1ad5c30885e"
  },
  {
    "url": "others/about.html",
    "revision": "678917b10b89fbb13973c2404bbf6aa8"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "bc4d842b318602fe4fafe39a16e1f78e"
  },
  {
    "url": "others/android-studio.html",
    "revision": "cef4bd97c6dc4075a702cd1a84ecd5ee"
  },
  {
    "url": "others/android.html",
    "revision": "1ec55283487ecc2bd9d670e290b2b740"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "a2ec761fc1053bdada2e554b4a583da4"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "864c59c65102af89e465e726b5cb11fd"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "41103c4de73e44bed976741a9ba27a98"
  },
  {
    "url": "others/css.html",
    "revision": "abb319b0cd162ce749df48e29118d9cc"
  },
  {
    "url": "others/docker.html",
    "revision": "2cc33572190516b9f04ba5442bc312dd"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "0186c649302f054d06aa7890e230ed34"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "1ab0eaf1293800a7fa60a16195e35275"
  },
  {
    "url": "others/english-writting.html",
    "revision": "d53a289e291ee23b37f0cadba3c360fe"
  },
  {
    "url": "others/esp32.html",
    "revision": "56d6295e80a7533c7cbbee7a978d63fa"
  },
  {
    "url": "others/freertos.html",
    "revision": "a58a823cb0e18e38a43f8bd8da431137"
  },
  {
    "url": "others/git.html",
    "revision": "07930a770a48378d37bb31985ea6001d"
  },
  {
    "url": "others/gns3.html",
    "revision": "6fd0cd1871ce0ca130a03ab9e093c2a7"
  },
  {
    "url": "others/gps.html",
    "revision": "ef634530a348646d79ced67611653a1e"
  },
  {
    "url": "others/html5.html",
    "revision": "0fd45c1c32488cc97f1c5bf829743e35"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "a25a164ecba26b99b638d7b331bba3b3"
  },
  {
    "url": "others/index.html",
    "revision": "1b4b8456268ac2aedc13e86ac9d820c3"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "c7f62e8f74bb33c46b204c91682c107f"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "1bcebc79832aca9c746b4439f744e592"
  },
  {
    "url": "others/javascript.html",
    "revision": "8d5b8a7f0bc7a4c5798de4080615f707"
  },
  {
    "url": "others/json.html",
    "revision": "e0d8d182638343bbfd94b436fb22410a"
  },
  {
    "url": "others/latex.html",
    "revision": "bbdf2f2b4141c2d07a34621b81019bd6"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "9376bbd3a6b19cd7292bad356b6615a4"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "11b97fd864bdd98610ccf73c5afba84b"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "16f5a89d0958fde04b329933b6d1bcb5"
  },
  {
    "url": "others/markdown.html",
    "revision": "a180d832af3c313d44f364ceaa9bc0f6"
  },
  {
    "url": "others/matlab.html",
    "revision": "da22a26e54916777e3a12d63cecd0de9"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "b9a88e119e235115ef930d696e706752"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "b44e98a8838ccb685fde359b2ed7767b"
  },
  {
    "url": "others/network-security.html",
    "revision": "24620bc68e8e4ac60be71badef990644"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "6910743998bbd1d47047ae4246592143"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "63a39f56f0c8143152cf41428b921ad3"
  },
  {
    "url": "others/poe.html",
    "revision": "f836b882f8f0ba0fda89cf1f175910a6"
  },
  {
    "url": "others/pyside2.html",
    "revision": "dd235c6ebd966aa2de242f3d2d19a884"
  },
  {
    "url": "others/python-socket.html",
    "revision": "e168610096bb7fa81e43381155e04cd6"
  },
  {
    "url": "others/python.html",
    "revision": "b6e48866c6a49758dd99bc67004ef901"
  },
  {
    "url": "others/q-learning.html",
    "revision": "b28d96e4657058d15069de53de185ca9"
  },
  {
    "url": "others/qr-code.html",
    "revision": "c5087b74b32ae1d8f5fe23d112ed8d5f"
  },
  {
    "url": "others/qt4.html",
    "revision": "956e130225a7173392db856fa1937103"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "9449aea39106dccbf87b5b26de7bab7a"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "2dff5f0ee5b37f3750bd845f6635ea09"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "8ab9826c64fc422a3d7bdbee53ecae5c"
  },
  {
    "url": "others/sd-card.html",
    "revision": "652ff27e67b678bfc9218a19e341d7a6"
  },
  {
    "url": "others/sdn.html",
    "revision": "0571b0f0266cb09bb700482c649023c0"
  },
  {
    "url": "others/star-uml.html",
    "revision": "a5eccad25199c93b23ded87b62eb1f54"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "d43ebe226c4c20eab9a377ead9ea9306"
  },
  {
    "url": "others/verilog.html",
    "revision": "3b1f09002978a951b6182b0aa65b31f1"
  },
  {
    "url": "others/vue.html",
    "revision": "ad0b78499febc22047e0abc1a046c186"
  },
  {
    "url": "others/w5500.html",
    "revision": "36199ac77f210761e53d2e7236bb2275"
  },
  {
    "url": "others/w7500.html",
    "revision": "bd29d8fdeae5d807e473f5ea89284bdf"
  },
  {
    "url": "resume.html",
    "revision": "c1a3062c87001747975c1b1def0071f7"
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
