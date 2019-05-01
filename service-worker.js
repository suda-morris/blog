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
    "revision": "7330d22ce16f177852f4ca996c349d77"
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
    "url": "assets/js/11.5c7dd166.js",
    "revision": "62f5872d852537330c3d49fa913c9b09"
  },
  {
    "url": "assets/js/12.09b71797.js",
    "revision": "de8fbd02492909a07c740c944f600131"
  },
  {
    "url": "assets/js/13.b5eb91b8.js",
    "revision": "7e9db850b46f0e4b0cb0c1a6f2da3159"
  },
  {
    "url": "assets/js/14.17663e31.js",
    "revision": "30ba3e40b04a8d226ae0461a2c67a6fc"
  },
  {
    "url": "assets/js/15.3d8139ba.js",
    "revision": "894757756604aee1b30b03d82ba3a392"
  },
  {
    "url": "assets/js/16.14c13aa7.js",
    "revision": "53711145b53548208e2834620eb25368"
  },
  {
    "url": "assets/js/17.d2e551cb.js",
    "revision": "c1812d971df0061b22dc79ff4821062b"
  },
  {
    "url": "assets/js/18.11f82cf1.js",
    "revision": "fe39cb72e0b60a2d864ffee24e8c5ea7"
  },
  {
    "url": "assets/js/19.28e4b8ad.js",
    "revision": "65a07d31e00fc550736a94ebd54aab34"
  },
  {
    "url": "assets/js/2.4a73e09d.js",
    "revision": "5f34ee97aa1bdabebbf53314638ee1b9"
  },
  {
    "url": "assets/js/20.79f42a2b.js",
    "revision": "28cdb0c5227638e7696a72098ccc1d81"
  },
  {
    "url": "assets/js/21.e9d74a75.js",
    "revision": "1932702c51d9616809bdbcf060432b06"
  },
  {
    "url": "assets/js/22.3cdb306e.js",
    "revision": "3c304e51e2d8f26f7687864e6d30f4ac"
  },
  {
    "url": "assets/js/23.d0114f8f.js",
    "revision": "00e8b9d6ccce6d47124b1ef7590e060d"
  },
  {
    "url": "assets/js/24.fddd5c79.js",
    "revision": "f747b73bd205e1f6e2e539b9655f3581"
  },
  {
    "url": "assets/js/25.e373e38e.js",
    "revision": "52428526a4bc2ce29ab8e0a944289abc"
  },
  {
    "url": "assets/js/26.b90e1900.js",
    "revision": "58f1cce948a81e62d14870d17f6536d0"
  },
  {
    "url": "assets/js/27.26e0cddb.js",
    "revision": "947a0c487821c08364864bcc3e3db28e"
  },
  {
    "url": "assets/js/28.b4583a43.js",
    "revision": "87942dc09d7dc8f63b1a70db01da5e6d"
  },
  {
    "url": "assets/js/29.2b349e1f.js",
    "revision": "08e6c3930253854acb8a16abd51becef"
  },
  {
    "url": "assets/js/3.b11672f7.js",
    "revision": "152401cd7e9575ab5bba3ba629de3ca5"
  },
  {
    "url": "assets/js/30.34730ace.js",
    "revision": "2412f9a16c491f26488ee216b702ece4"
  },
  {
    "url": "assets/js/31.356ef136.js",
    "revision": "7a46a91a6563012642d779f215152d0d"
  },
  {
    "url": "assets/js/32.3a8f3247.js",
    "revision": "e65a9d15fcf046e0b45766f01b709261"
  },
  {
    "url": "assets/js/33.f55f7576.js",
    "revision": "6b9448edb497d4cb933e09bc003c1c35"
  },
  {
    "url": "assets/js/34.7dd01167.js",
    "revision": "57d3232bae22bb6ef446d0eea73798f1"
  },
  {
    "url": "assets/js/35.5d28f42d.js",
    "revision": "831c84a8cbd740e2d2406893660b31d1"
  },
  {
    "url": "assets/js/36.01908a4b.js",
    "revision": "a05e72f264aa067326581bfb61db54be"
  },
  {
    "url": "assets/js/37.e6457baa.js",
    "revision": "bb0d121aac159fc307ba049440fe65bc"
  },
  {
    "url": "assets/js/38.0229f5d4.js",
    "revision": "3a47213dcd1149e7e6ce4e307e26bd56"
  },
  {
    "url": "assets/js/39.0a11c877.js",
    "revision": "0d47257fd62f89d53dd672a06c7bc1e9"
  },
  {
    "url": "assets/js/4.7131e971.js",
    "revision": "0f3830ac0354e283468823611896d3ad"
  },
  {
    "url": "assets/js/40.6a2ff98a.js",
    "revision": "5e4aa2f3ff89bcc51baf24802ad781c6"
  },
  {
    "url": "assets/js/41.97b5319f.js",
    "revision": "65b147afff11680dd4b672011c0e65ea"
  },
  {
    "url": "assets/js/42.cf587378.js",
    "revision": "1cf0096bfb93ccd40052a7331fdbaea2"
  },
  {
    "url": "assets/js/43.92158c79.js",
    "revision": "992a0521bbc5bf5c81103bbebc82cdf1"
  },
  {
    "url": "assets/js/44.5b4391fc.js",
    "revision": "b2ff1681fcfcab97b52e428d36c57754"
  },
  {
    "url": "assets/js/45.a3fcb10d.js",
    "revision": "37f2b60bf2404acb12584d1f6ef7039e"
  },
  {
    "url": "assets/js/46.46a4a00b.js",
    "revision": "0eb7783ccfa273842041206c1c703554"
  },
  {
    "url": "assets/js/47.cf8a321b.js",
    "revision": "6dc47e4c1af125677194c84c409ae359"
  },
  {
    "url": "assets/js/48.7bce743d.js",
    "revision": "42e6a3bb56ea17ae05be59faeea9e5dd"
  },
  {
    "url": "assets/js/49.b1a7da02.js",
    "revision": "a6817f88ad1c646d6e7b9ee0819664a4"
  },
  {
    "url": "assets/js/5.2a354d3d.js",
    "revision": "601d29586ea314ff02f24bd7e290abe2"
  },
  {
    "url": "assets/js/50.bc571c80.js",
    "revision": "bc93052476c82f6101018febde8f30af"
  },
  {
    "url": "assets/js/51.2c97da89.js",
    "revision": "ebc72f44828f43413fca7b1acdae2307"
  },
  {
    "url": "assets/js/52.7bf4d14d.js",
    "revision": "58a59801862aacfc6213cba4dbf0c13d"
  },
  {
    "url": "assets/js/53.41293891.js",
    "revision": "880ce3c2bd65038811b5b133baf7a4eb"
  },
  {
    "url": "assets/js/54.3b58aa0b.js",
    "revision": "eea92c5ffdde67bb4ca9e720895de81c"
  },
  {
    "url": "assets/js/55.2880ba20.js",
    "revision": "47d9bf82510ace2ab0f26fc1d4e67eac"
  },
  {
    "url": "assets/js/56.ba0da503.js",
    "revision": "817e4603ab978e77f35d016d00a576f1"
  },
  {
    "url": "assets/js/57.a46dd164.js",
    "revision": "e8ff87fbdc7a1226b382a3fa55ec3041"
  },
  {
    "url": "assets/js/58.93b2d8a5.js",
    "revision": "cf27a4c913437930e2b2f289435eeb17"
  },
  {
    "url": "assets/js/59.9242d115.js",
    "revision": "97a6c72da1626029565284fc2bd954bb"
  },
  {
    "url": "assets/js/6.c2a56e42.js",
    "revision": "eb26e0c205636b13fe4ed97bc800495b"
  },
  {
    "url": "assets/js/60.4a6ecf36.js",
    "revision": "6724191fe610397080ef953fda00f947"
  },
  {
    "url": "assets/js/61.2518c83c.js",
    "revision": "9790ab76f52bb3853a21e64618ca83da"
  },
  {
    "url": "assets/js/62.0060b6e3.js",
    "revision": "f160de71ba75da5e6ddd441a6d7f5837"
  },
  {
    "url": "assets/js/63.b47afb47.js",
    "revision": "95f1613b0da665f662fb1b85c75562ac"
  },
  {
    "url": "assets/js/64.8e611e8b.js",
    "revision": "bbcc9dec756733c833d97c51703969d3"
  },
  {
    "url": "assets/js/65.1b048635.js",
    "revision": "ac72b6a5f8eee8199a914284d4d26a55"
  },
  {
    "url": "assets/js/66.04e0afae.js",
    "revision": "962038a35a2d7fae86e538746d33e60b"
  },
  {
    "url": "assets/js/67.56920b76.js",
    "revision": "5baf338abb8ce5dad651aab1c6f06126"
  },
  {
    "url": "assets/js/68.da13ed57.js",
    "revision": "308c038c67efd58f4b3336aa7e441a9b"
  },
  {
    "url": "assets/js/69.257f3066.js",
    "revision": "0e091689d82a6306530e593f20c90342"
  },
  {
    "url": "assets/js/7.da4bc7cc.js",
    "revision": "80aa2764a911c5e77703af55516ab802"
  },
  {
    "url": "assets/js/70.5ae44640.js",
    "revision": "4fce0ffc25437a95aeef301f40059429"
  },
  {
    "url": "assets/js/8.3a6c9ec9.js",
    "revision": "ed7ce43c388598fb29fe41c439112dd7"
  },
  {
    "url": "assets/js/9.71e99c0e.js",
    "revision": "2909726d9157560af767a8cdba946861"
  },
  {
    "url": "assets/js/app.800d1bb6.js",
    "revision": "57cfb5139acce5833c73bfdabcd14d76"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "b4a5b6037a86296a33bdbc45504d7daf"
  },
  {
    "url": "cs/bash.html",
    "revision": "6d90b808cee62ef43782673240675e20"
  },
  {
    "url": "cs/compilation.html",
    "revision": "c199c15c0de0cbc0ca0f7603211f6d1f"
  },
  {
    "url": "cs/index.html",
    "revision": "74fe2e619fb54b241f20c483ac9da2cf"
  },
  {
    "url": "ee/about.html",
    "revision": "f0d9ba0c51ebd23685b11784f5ecc290"
  },
  {
    "url": "ee/index.html",
    "revision": "e2356720695d9bfbd3b32d62f5958059"
  },
  {
    "url": "ee/poe.html",
    "revision": "da3f4c7da46a9ec6c840562d26d52d40"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
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
    "revision": "680809b0c61ece2708f6832bf1c40c90"
  },
  {
    "url": "others/about.html",
    "revision": "42644c9a1374e9f210f96a7072521952"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "597b3bf8c13f59e12d6afa0562481953"
  },
  {
    "url": "others/android-studio.html",
    "revision": "b8aaa5c3479b227b6dde2ad596d8292a"
  },
  {
    "url": "others/android.html",
    "revision": "91a00a09bf9536d780f0c76f347ebe2e"
  },
  {
    "url": "others/chisel.html",
    "revision": "c7a0c96c019e4deac913f2ab1351292a"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "aad9ba595d0ffc46302422ade9707bec"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "ff2569f2638aad93e3770a9f3e9a8fea"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "215ebf2d5900e8d425fb491690781a61"
  },
  {
    "url": "others/css.html",
    "revision": "81bfc5b16c1349187f7929502e09ae84"
  },
  {
    "url": "others/docker.html",
    "revision": "19bef49ecf6d66aa803b1d6d1914c4ee"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "73e78e7f1e5b051b18372fe5fe584b98"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "a93854b8263536a72967c0afbbafcf1b"
  },
  {
    "url": "others/english-writting.html",
    "revision": "19b838f38ebe68a6958f8e8b5d20d47d"
  },
  {
    "url": "others/esp32.html",
    "revision": "980938255df5bf33137010528aa2e6bd"
  },
  {
    "url": "others/freertos.html",
    "revision": "ed5e01ef279aa493b5334f5534e3dcbb"
  },
  {
    "url": "others/gns3.html",
    "revision": "9b857c1d9e4a2f46c72d0d27517b2591"
  },
  {
    "url": "others/gps.html",
    "revision": "e8b1ce8e3b0981827fab0973a386a072"
  },
  {
    "url": "others/html5.html",
    "revision": "91d6f2b677ffe10cd1041019b535c5c3"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "22cec6c3574b062a8e77f7463b529a34"
  },
  {
    "url": "others/index.html",
    "revision": "ac01222d6450ba60ae8196845acacfcd"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "85f6d2d1d77ce45171af43234f3cea04"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "a1e05eed842aa2b9c2d3d24596952844"
  },
  {
    "url": "others/javascript.html",
    "revision": "d48efc59ce9a3ff22f8d07a7f26378ef"
  },
  {
    "url": "others/json.html",
    "revision": "178fd81a82335652606a2372bf6cae77"
  },
  {
    "url": "others/latex.html",
    "revision": "807b33245470e46e555deff7bc29a876"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "e1dbd8e5fb6b295c46691a13716dde95"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "d68a726214e3ec04d0e8a0e900d45ecb"
  },
  {
    "url": "others/logistic-regression.html",
    "revision": "1eb2819252528236ae58d7dc79cbdec8"
  },
  {
    "url": "others/lwip.html",
    "revision": "7c3655a396c42bd41f606295973b0b31"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "a3cfe45603134b53432a8aa0eb28727f"
  },
  {
    "url": "others/markdown.html",
    "revision": "8f50ec9d3c1b84494e021ddf28d59959"
  },
  {
    "url": "others/matlab.html",
    "revision": "b8ed71b38f98c39057e1b25fe3342535"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "0f842d087ed38b03476e4dc239fa51bb"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "dc9e26e486d3a9728843757bbcb38502"
  },
  {
    "url": "others/network-security.html",
    "revision": "ed353d9c7c8e8c3dace5d45df2c125fb"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "fd66497a7b51e9b19e08070986791aa8"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "d6e5cc03a7c50de39331caef8a385691"
  },
  {
    "url": "others/pyside2.html",
    "revision": "b03fe809dd4d3cb4a349dcde2697dea5"
  },
  {
    "url": "others/python-socket.html",
    "revision": "9d99c1e1bd4032f984b9132d5a6fc2bb"
  },
  {
    "url": "others/python.html",
    "revision": "8a7738189f50b9096d8c0291834e6995"
  },
  {
    "url": "others/q-learning.html",
    "revision": "625bf4544439fa750a971bcbdfeb9c93"
  },
  {
    "url": "others/qr-code.html",
    "revision": "0916f3c7c998a754b7d09543e8ec23c7"
  },
  {
    "url": "others/qt4.html",
    "revision": "77167792e743c6fd5d7ab2161fea9ab4"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "f59c75163f9f1bd0532015ca7287b373"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "6a0f8b231c42ab88c299190846f67502"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "e2911272f303091d4a697d44c122260a"
  },
  {
    "url": "others/sd-card.html",
    "revision": "f989b756a9f7a44529b981296de88671"
  },
  {
    "url": "others/sdn.html",
    "revision": "bd3e39434777fc561e866d6032c63394"
  },
  {
    "url": "others/star-uml.html",
    "revision": "7e2da75f3af6d0eb8e315e00b069a158"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "1ba5c537501e13541b15ea776db9f849"
  },
  {
    "url": "others/verilog.html",
    "revision": "c060f9cdc7518506ca8af7896e3211bf"
  },
  {
    "url": "others/vue.html",
    "revision": "970c32210cd073618229c823003bb3c4"
  },
  {
    "url": "others/w5500.html",
    "revision": "c9bdce4e448d5f517ba5855ee924d520"
  },
  {
    "url": "others/w7500.html",
    "revision": "71ebf6eb2a9db19c533f936bb53445ea"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "33490a200901748bc7e8e4bea1104101"
  },
  {
    "url": "resume.html",
    "revision": "a482d749c5c14c6c4c0e84fe91c52194"
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
