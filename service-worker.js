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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f4771fa5d3e06a36a6c7c109cb3a0dc5"
  },
  {
    "url": "assets/css/0.styles.aea52b3d.css",
    "revision": "ae1d25e511a384b68fff9900d23c6b0c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b0c0010d.js",
    "revision": "50e92a24ef3100a0948797ffba494efd"
  },
  {
    "url": "assets/js/11.72cb3854.js",
    "revision": "865aa674b074f8cb93e997f76b321d70"
  },
  {
    "url": "assets/js/12.1ad341e6.js",
    "revision": "7762caa2d61652ead8c39c1fab3fcf14"
  },
  {
    "url": "assets/js/13.475ed0f9.js",
    "revision": "6b6f303c6585108377978be0b3b3fc1d"
  },
  {
    "url": "assets/js/14.509a879e.js",
    "revision": "a71df3e825fe0e80cfc95f4dafd19cee"
  },
  {
    "url": "assets/js/15.6ab69359.js",
    "revision": "327b86116c14c7ffc3fd81db032d3af4"
  },
  {
    "url": "assets/js/16.0bf9f453.js",
    "revision": "fcc65dc532813ebd9df80beb3e69612b"
  },
  {
    "url": "assets/js/17.632e3b2c.js",
    "revision": "a8e2a406d0843349e04c75080c443bfc"
  },
  {
    "url": "assets/js/18.cbaa8241.js",
    "revision": "af0eeea9e1a1b4084a4580a7645cd3d8"
  },
  {
    "url": "assets/js/19.055b1066.js",
    "revision": "db11ba458fcbd29e5cfd3e8969baf95b"
  },
  {
    "url": "assets/js/2.4a73e09d.js",
    "revision": "5f34ee97aa1bdabebbf53314638ee1b9"
  },
  {
    "url": "assets/js/20.3b4797b4.js",
    "revision": "be178493a10fcf4a8dd2869035f79821"
  },
  {
    "url": "assets/js/21.05bb93e6.js",
    "revision": "ea9746da0dd2e7753727fc478e50cc39"
  },
  {
    "url": "assets/js/22.93b038ed.js",
    "revision": "96f595c74dca32b78bf7015f099ef816"
  },
  {
    "url": "assets/js/23.dda8ebb0.js",
    "revision": "45bc388ae4a8236873f07e743a088cd6"
  },
  {
    "url": "assets/js/24.e1e5cf40.js",
    "revision": "51e59d568ee479bc21d3068e79d69447"
  },
  {
    "url": "assets/js/25.149e7db6.js",
    "revision": "29836fa72e269c43dbd7feb29a10b0be"
  },
  {
    "url": "assets/js/26.c3f5eed4.js",
    "revision": "c2ab68f24114376654983a3cb03cf564"
  },
  {
    "url": "assets/js/27.5d3cbe94.js",
    "revision": "8235ecf15cef5f831a36db01bd1fc7eb"
  },
  {
    "url": "assets/js/28.7bf133b4.js",
    "revision": "249b1b8ec3a633a5616a0bf7256e412b"
  },
  {
    "url": "assets/js/29.7c9a47b8.js",
    "revision": "bc3a1c05762e0ae601d66fd42b39b2f0"
  },
  {
    "url": "assets/js/3.b11672f7.js",
    "revision": "152401cd7e9575ab5bba3ba629de3ca5"
  },
  {
    "url": "assets/js/30.6e7d5b7a.js",
    "revision": "0648f62b4ff8a9dc1ffc60a22f5d4612"
  },
  {
    "url": "assets/js/31.b1fabd67.js",
    "revision": "127a6dddaf5949ecde431993d0a49fcb"
  },
  {
    "url": "assets/js/32.9decea62.js",
    "revision": "64a84cb79ec365e90d1e8b94face5344"
  },
  {
    "url": "assets/js/33.fa4e1467.js",
    "revision": "3828f28f9336cc5a1170296650e0dd1e"
  },
  {
    "url": "assets/js/34.11becf88.js",
    "revision": "8a324367174b92afe0b7a915d94605b1"
  },
  {
    "url": "assets/js/35.dcce5440.js",
    "revision": "3bf89034049c46716a5581750a7c17c6"
  },
  {
    "url": "assets/js/36.5ae704cf.js",
    "revision": "8107857601d94a58abf9cd94f6575b2f"
  },
  {
    "url": "assets/js/37.d828fcd3.js",
    "revision": "acbc61e4170cee1389c1c1bf6c59f078"
  },
  {
    "url": "assets/js/38.4312e88b.js",
    "revision": "be8505d1c1282fc0fd497220d15dd627"
  },
  {
    "url": "assets/js/39.094559c3.js",
    "revision": "3520ad396035c0444053f6c66a3a9b46"
  },
  {
    "url": "assets/js/4.e3e090f7.js",
    "revision": "a9c27245504f4c9ce764a9b86e0dbbe7"
  },
  {
    "url": "assets/js/40.0ca172e6.js",
    "revision": "6c01cb0a8b69201c424fca98b5e18464"
  },
  {
    "url": "assets/js/41.e0ca6b7b.js",
    "revision": "ade4d41b3c0f6907152cc21dfd080fa3"
  },
  {
    "url": "assets/js/42.d8d152e7.js",
    "revision": "8fa97353c97449ef5b6e2b31cf0b2fd3"
  },
  {
    "url": "assets/js/43.c3053021.js",
    "revision": "9ca8b07b6dcb16eb165631c1f3be1e6a"
  },
  {
    "url": "assets/js/44.30cf0529.js",
    "revision": "b084f1247411abdfd09b429c127cb31b"
  },
  {
    "url": "assets/js/45.3f4b474c.js",
    "revision": "fdee051b924d816db1231be8a3290509"
  },
  {
    "url": "assets/js/46.547cb6b8.js",
    "revision": "675476602739fc05f42d3f09a7bfd6e3"
  },
  {
    "url": "assets/js/47.778b8037.js",
    "revision": "322c8e029bb05292c427267fffabba0f"
  },
  {
    "url": "assets/js/48.2ee0be6e.js",
    "revision": "27970bd9d749ceb9e91ed8b24b38a8a1"
  },
  {
    "url": "assets/js/49.aac13fd5.js",
    "revision": "38503ee850653a3d8aeb5414813b3c1f"
  },
  {
    "url": "assets/js/5.2a354d3d.js",
    "revision": "601d29586ea314ff02f24bd7e290abe2"
  },
  {
    "url": "assets/js/50.07abbf60.js",
    "revision": "9a68d38a0b81e688a5181e7076e49166"
  },
  {
    "url": "assets/js/51.1bd8fe4f.js",
    "revision": "62745bfbdf4ba87828e568dff13ec46a"
  },
  {
    "url": "assets/js/52.bfc474a5.js",
    "revision": "3fe6f161166f7577f8b1616c5af3b4ab"
  },
  {
    "url": "assets/js/53.442d5e52.js",
    "revision": "c19417c666554a42c4ba48631fec5fa6"
  },
  {
    "url": "assets/js/54.b8a3d93b.js",
    "revision": "efce3899f99242de6df05191ee3c49e8"
  },
  {
    "url": "assets/js/55.4c75e5cd.js",
    "revision": "7f8e3889b2d569efa4ff00919b747261"
  },
  {
    "url": "assets/js/56.d9d573dc.js",
    "revision": "8d099fd511515bb2f31caab2fad00f92"
  },
  {
    "url": "assets/js/57.8f3b4900.js",
    "revision": "ba420de89278e89781dcd0ef0ff0db87"
  },
  {
    "url": "assets/js/58.cfa6a4a1.js",
    "revision": "99d7e3c758d92ff6e25fbda828a4964f"
  },
  {
    "url": "assets/js/59.e91c2df4.js",
    "revision": "b28dea5bb6429ca65273c4e013152a05"
  },
  {
    "url": "assets/js/6.a0364a73.js",
    "revision": "dcb3440c8ab1d068fdba22730700dd55"
  },
  {
    "url": "assets/js/60.80dc3e63.js",
    "revision": "f33b33d4ee27e7028dc0bac2e05e1718"
  },
  {
    "url": "assets/js/61.bc8d93c4.js",
    "revision": "f2621babb2d6193443f7a13ab28c2210"
  },
  {
    "url": "assets/js/62.e21299a6.js",
    "revision": "58e4e359bb8100a7f87cbef6ca51c1d4"
  },
  {
    "url": "assets/js/63.0b14764d.js",
    "revision": "70877687bcebed1dd4514aa9c2c50a66"
  },
  {
    "url": "assets/js/64.c88d5184.js",
    "revision": "9648582fa6362b7bfb90d3ff1c971413"
  },
  {
    "url": "assets/js/65.0e8fed7b.js",
    "revision": "91605a5717ac4c570512e85a679291c5"
  },
  {
    "url": "assets/js/66.631e6987.js",
    "revision": "e3e99a7560518326f2a1660b04f25279"
  },
  {
    "url": "assets/js/67.deda1286.js",
    "revision": "70d69890fc745a38b95a5fbc5203fa4a"
  },
  {
    "url": "assets/js/68.d488748b.js",
    "revision": "15c95fa6a8db756c6ed7aa662f02d56c"
  },
  {
    "url": "assets/js/69.4084b8dc.js",
    "revision": "1706afab60a1f25bc61e0a327af6f692"
  },
  {
    "url": "assets/js/7.05f8ac37.js",
    "revision": "a517aa276e88885982af78c966234d85"
  },
  {
    "url": "assets/js/70.13a5a6d3.js",
    "revision": "d249ad44dea5ab65ac953b4b391317e4"
  },
  {
    "url": "assets/js/71.75c2f594.js",
    "revision": "243ab3fcac4c42c05031f6bfa8926b44"
  },
  {
    "url": "assets/js/8.ab17c590.js",
    "revision": "8257cfaf2b642696f541a5efc72a78f9"
  },
  {
    "url": "assets/js/9.5709aa1f.js",
    "revision": "dba4ebab184ef80799af081b9bc08f37"
  },
  {
    "url": "assets/js/app.63bb8dec.js",
    "revision": "e222fc53c0150228452dbe52c505e0b5"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "faff03e91325e9112031dbbe7f889287"
  },
  {
    "url": "cs/bash.html",
    "revision": "8b7581bc9ba5c36d43e93d8876a9cf1d"
  },
  {
    "url": "cs/compilation.html",
    "revision": "3bb480256bbad8c5e643d15da4645513"
  },
  {
    "url": "cs/index.html",
    "revision": "896fb5ab838df4244cd6d2d744289cc7"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "f58ae243435bec1fbee33e8dfab3ad9f"
  },
  {
    "url": "ee/about.html",
    "revision": "d0c9024744d4acd13fea295e41841299"
  },
  {
    "url": "ee/index.html",
    "revision": "f4e22cba62fc37d547b62c8ec6656033"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "d7845624223b1b951ee880adfe6e5972"
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
    "revision": "590ded0457e6c2a3ac4167d728b91c91"
  },
  {
    "url": "others/about.html",
    "revision": "7fd01de0499321abb3744800365837b5"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "980d4e898098215e93ba11f5c35a9090"
  },
  {
    "url": "others/android-studio.html",
    "revision": "18ea600bf793ca680809459d1bdb3e40"
  },
  {
    "url": "others/android.html",
    "revision": "d72fa65a430409e0f0db984a7aafeb37"
  },
  {
    "url": "others/chisel.html",
    "revision": "5219ba7e35ca5013d03563bf0100128d"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "d9d4d9e06c3c8cb5d40c121d13ff0efd"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "f409e0aaa7790753b774a782fb9a2f95"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "3a43d04753915dd832c79541233661a4"
  },
  {
    "url": "others/css.html",
    "revision": "d02a2031b5af29e5b947df3f3653f177"
  },
  {
    "url": "others/docker.html",
    "revision": "0a99e116702560f8511888120cb4c083"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "9844e29eb374fdc286e9a663be9915f0"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "adae8309c69bbd4f048569c5971eee38"
  },
  {
    "url": "others/english-writting.html",
    "revision": "2d4fbede97f628bf203a306ef320de8b"
  },
  {
    "url": "others/esp32.html",
    "revision": "e7141927239a6c85795727fd566d811f"
  },
  {
    "url": "others/freertos.html",
    "revision": "10e6215ab2c7b5521ff35b4b6b665036"
  },
  {
    "url": "others/gns3.html",
    "revision": "365f12dc5afc0ad37b9f932fea158ae0"
  },
  {
    "url": "others/gps.html",
    "revision": "31bf4c21717a1bd0ed30453fd623a0a5"
  },
  {
    "url": "others/html5.html",
    "revision": "2af5ebbd4c6616d25a05c113d0d7b8c5"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "49f1e27e6d37aeba0159632f72943c4d"
  },
  {
    "url": "others/index.html",
    "revision": "c4c96e4ed9f49a12ebda0f7ea654fe76"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "cfdae2e4869b77b1ee73543388349a3b"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "baf775352632cf56089884ca19991ea6"
  },
  {
    "url": "others/javascript.html",
    "revision": "4aef9f7747955bee6ecba2a4927308ac"
  },
  {
    "url": "others/json.html",
    "revision": "e48c4ce36146e52f8852b5c8528082db"
  },
  {
    "url": "others/latex.html",
    "revision": "2451c77b39b1a246d6f29d733917a464"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "9284af51b84a04c497cc8b7cccf33293"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "70381bc65eeaa5689bfba3a009879186"
  },
  {
    "url": "others/lwip.html",
    "revision": "ab933f69ed4af6b3244be34b222dcab8"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "8f7c4b86e819aacdebc1381954d7724e"
  },
  {
    "url": "others/markdown.html",
    "revision": "f1e1707f88ea20b5a50e97da736a73a3"
  },
  {
    "url": "others/matlab.html",
    "revision": "9a118d75e2860406561b454c3fd42de0"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "9882c785008a9a83de34284a260be249"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "d23ae8577705b7b8a7b3186e216f045f"
  },
  {
    "url": "others/network-security.html",
    "revision": "d179f14ab1577dc6dd69bbd7d6ef0b9a"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "fb8a03136645010f1666f3e08883d2f3"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "7ed82a44e016618d9aedb06212cc1c1d"
  },
  {
    "url": "others/poe.html",
    "revision": "a6fbbd53ab26e2000c74b1eb10684439"
  },
  {
    "url": "others/pyside2.html",
    "revision": "5533450fb1b5ecd992a8f5b1f484022d"
  },
  {
    "url": "others/python-socket.html",
    "revision": "e15541ef6321b3949528a39b5b812915"
  },
  {
    "url": "others/python.html",
    "revision": "f721ef62a1d1b1ad071c95f5f4599d96"
  },
  {
    "url": "others/q-learning.html",
    "revision": "7e04b19c5b43692b0463179181acb573"
  },
  {
    "url": "others/qr-code.html",
    "revision": "4068bdbca89a4ca474e0e4e9207e5276"
  },
  {
    "url": "others/qt4.html",
    "revision": "af28270df3e214e84c45fbf8430e6660"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "91b0c2f375d414a5136d8bed1825f2ad"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "b2946f5d185f232e9526286c9a5d2c13"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "80e01cd3801f5643c16680452bcb6301"
  },
  {
    "url": "others/sd-card.html",
    "revision": "3312e348c6bb49b1f631a1db1cbe8e3a"
  },
  {
    "url": "others/sdn.html",
    "revision": "15e3a3fa5770480a9b5e22e8289a13a5"
  },
  {
    "url": "others/star-uml.html",
    "revision": "b2ef60d67b06bad5eaa8395af5c4f270"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "f1b8bff7185a7df72e728c671049d55f"
  },
  {
    "url": "others/verilog.html",
    "revision": "e248095aecfbd6df031016f1fd3a0277"
  },
  {
    "url": "others/vue.html",
    "revision": "3bc3cfaafe3ded3443db6d09d72ef387"
  },
  {
    "url": "others/w5500.html",
    "revision": "6a13f7f0a0d2d9665f475e5137c91683"
  },
  {
    "url": "others/w7500.html",
    "revision": "455c3eb4bf8e2b27f4ed26730e27ec91"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "7d99402f52a04e5fbaab53d1c32c6bcd"
  },
  {
    "url": "resume.html",
    "revision": "507703ccae7284eafa8172b89b5cbce5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
