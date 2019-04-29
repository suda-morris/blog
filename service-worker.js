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
    "revision": "f2ba6e36cec4c2e7f6bc2ad5ac9c01bc"
  },
  {
    "url": "about.html",
    "revision": "b1155b728f3e4b0b5631b93f91bd67ed"
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
    "url": "assets/js/10.7c5a0e0a.js",
    "revision": "51f2b387f8f54f2a3396e07779213c9d"
  },
  {
    "url": "assets/js/11.a452eadb.js",
    "revision": "85f12dbb62affe28977f24834c063e47"
  },
  {
    "url": "assets/js/12.eafb2f27.js",
    "revision": "e4246880b086a696d029157a5765971b"
  },
  {
    "url": "assets/js/13.4bfde5b4.js",
    "revision": "c9db0dd8fd57ac20daab197376ac21ed"
  },
  {
    "url": "assets/js/14.7c716bac.js",
    "revision": "7ee0015b9102fd098a51128a6f6e550e"
  },
  {
    "url": "assets/js/15.9df65885.js",
    "revision": "7dbcaafb05f8d99e62426c0e5692b896"
  },
  {
    "url": "assets/js/16.14c13aa7.js",
    "revision": "53711145b53548208e2834620eb25368"
  },
  {
    "url": "assets/js/17.64f168e6.js",
    "revision": "1d4145ac4a9d1aa60917b39b05158e03"
  },
  {
    "url": "assets/js/18.dffb1b27.js",
    "revision": "dd4c41b458d8529262921412ad50b7b4"
  },
  {
    "url": "assets/js/19.26f0abbb.js",
    "revision": "dd983a58212008717fd25c0ee523d5e4"
  },
  {
    "url": "assets/js/2.4a73e09d.js",
    "revision": "5f34ee97aa1bdabebbf53314638ee1b9"
  },
  {
    "url": "assets/js/20.a8acc48c.js",
    "revision": "06982b24d3b21b218b693952967af0f3"
  },
  {
    "url": "assets/js/21.e9d74a75.js",
    "revision": "1932702c51d9616809bdbcf060432b06"
  },
  {
    "url": "assets/js/22.1d1b0861.js",
    "revision": "a77a438a253350df9bcbc4d79aeb4e21"
  },
  {
    "url": "assets/js/23.60e2ca35.js",
    "revision": "460872d69592445a4d3c646e771e98c6"
  },
  {
    "url": "assets/js/24.2d58c046.js",
    "revision": "ae8d1d574e85d16cc475e3f8615a62c5"
  },
  {
    "url": "assets/js/25.1a89c386.js",
    "revision": "d43deb0dd25d9efd14b1bd28e23ad670"
  },
  {
    "url": "assets/js/26.b90e1900.js",
    "revision": "58f1cce948a81e62d14870d17f6536d0"
  },
  {
    "url": "assets/js/27.0b0ef00c.js",
    "revision": "e27c2f4ec220aa4e7cd662cbc5878a0d"
  },
  {
    "url": "assets/js/28.f195fcbd.js",
    "revision": "33972975b45c73b3a21e418f847a5555"
  },
  {
    "url": "assets/js/29.5617b2e3.js",
    "revision": "63137e7a20b714b2f9b7dd02ad4746d8"
  },
  {
    "url": "assets/js/3.b11672f7.js",
    "revision": "152401cd7e9575ab5bba3ba629de3ca5"
  },
  {
    "url": "assets/js/30.89bb07b1.js",
    "revision": "d9c321cecd8fa03e5c401ff5815e0eac"
  },
  {
    "url": "assets/js/31.660f89c1.js",
    "revision": "4ee898515e82043579d3afb56bbfe365"
  },
  {
    "url": "assets/js/32.a993aa84.js",
    "revision": "c9cfbd8f0cf32d4b0ea89b8932bd59c7"
  },
  {
    "url": "assets/js/33.08d00d32.js",
    "revision": "ed280228a53044f496889f1f050e1415"
  },
  {
    "url": "assets/js/34.1fa7fd87.js",
    "revision": "4ae5b69af98161c382396c4edd8f4c26"
  },
  {
    "url": "assets/js/35.de170958.js",
    "revision": "df072c6df184d76515d7f73e1a9506a7"
  },
  {
    "url": "assets/js/36.e42233c4.js",
    "revision": "e2dc2ae48e1834294be39e2fc248f52c"
  },
  {
    "url": "assets/js/37.ee8fa185.js",
    "revision": "548027189a0d6dfadf22f5b596737cbb"
  },
  {
    "url": "assets/js/38.a7eda2dc.js",
    "revision": "84c434e2b341402a5b1646011ac673a5"
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
    "url": "assets/js/40.dab93db9.js",
    "revision": "c2fa570023edb76962edb70760bd112e"
  },
  {
    "url": "assets/js/41.c49f0714.js",
    "revision": "36e84b7e5bc284b3e455182efd364699"
  },
  {
    "url": "assets/js/42.d8d152e7.js",
    "revision": "8fa97353c97449ef5b6e2b31cf0b2fd3"
  },
  {
    "url": "assets/js/43.298829b8.js",
    "revision": "2c03465e0230a8f7e0d24e882864b43f"
  },
  {
    "url": "assets/js/44.72f73c9d.js",
    "revision": "eef2e3bab8bb099d976e1542ef98ec35"
  },
  {
    "url": "assets/js/45.9220b443.js",
    "revision": "6a068ca298af21cddd3e92951a1c098a"
  },
  {
    "url": "assets/js/46.547cb6b8.js",
    "revision": "675476602739fc05f42d3f09a7bfd6e3"
  },
  {
    "url": "assets/js/47.bfcb0e3a.js",
    "revision": "8925bf4308f965158823c9ea51bb7cd9"
  },
  {
    "url": "assets/js/48.fc41c802.js",
    "revision": "578e9884f19f15f6d3d4ce01e0d565fa"
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
    "url": "assets/js/50.de6cb49e.js",
    "revision": "5dc3897f70a889d219243963b3e6ed88"
  },
  {
    "url": "assets/js/51.c79c032d.js",
    "revision": "54e5dabb147b2b5601e09c225d0af871"
  },
  {
    "url": "assets/js/52.8b58fef8.js",
    "revision": "9489b6ff5e80971417ad39f901fefdde"
  },
  {
    "url": "assets/js/53.10415ab8.js",
    "revision": "4357a3b5e5875b74711f968652684ac5"
  },
  {
    "url": "assets/js/54.3b58aa0b.js",
    "revision": "eea92c5ffdde67bb4ca9e720895de81c"
  },
  {
    "url": "assets/js/55.48a1c0b1.js",
    "revision": "423f72233d040829105c595b97055afe"
  },
  {
    "url": "assets/js/56.ba0da503.js",
    "revision": "817e4603ab978e77f35d016d00a576f1"
  },
  {
    "url": "assets/js/57.6e4ab174.js",
    "revision": "6809add63b2650a9cf49c0163481f9c2"
  },
  {
    "url": "assets/js/58.93b2d8a5.js",
    "revision": "cf27a4c913437930e2b2f289435eeb17"
  },
  {
    "url": "assets/js/59.050e95a5.js",
    "revision": "258f2ccdb1d615b22d15d926d8ceac1d"
  },
  {
    "url": "assets/js/6.a0364a73.js",
    "revision": "dcb3440c8ab1d068fdba22730700dd55"
  },
  {
    "url": "assets/js/60.4a6ecf36.js",
    "revision": "6724191fe610397080ef953fda00f947"
  },
  {
    "url": "assets/js/61.b98c2d97.js",
    "revision": "66e45d829fa15d91c7ca469116329b25"
  },
  {
    "url": "assets/js/62.f647e052.js",
    "revision": "28105eb385da87c8a349dea5298caf2d"
  },
  {
    "url": "assets/js/63.1f4e0bfd.js",
    "revision": "e591cae14f0ad5146b6cbb7c2d1eb3a8"
  },
  {
    "url": "assets/js/64.db688e6d.js",
    "revision": "251cad1bddd5d66aaff2c63b8dcd9f3d"
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
    "url": "assets/js/69.cd56f349.js",
    "revision": "d5df4e359cc10e2a6b5d1da2102db912"
  },
  {
    "url": "assets/js/7.4f365cbf.js",
    "revision": "b2d5996cb7c288c4bba2ea5c17d9714a"
  },
  {
    "url": "assets/js/8.b41aa53d.js",
    "revision": "ced4ba0cc7d7737e571e170497f3ea18"
  },
  {
    "url": "assets/js/9.32775705.js",
    "revision": "fc76f1c5cc55b79733b24ebf7123de53"
  },
  {
    "url": "assets/js/app.94a110ec.js",
    "revision": "2dd71f9a507e84bc249ec8f2f40a4ebf"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "b863e083772dbe9c3ed36cf7ce01fb53"
  },
  {
    "url": "cs/compilation.html",
    "revision": "9e94e41a59f58df77f0c45cbd061a12c"
  },
  {
    "url": "cs/index.html",
    "revision": "70ab041fcec28cf5fb9bf8b020098db9"
  },
  {
    "url": "ee/about.html",
    "revision": "d525c596645115def296095ac8cc53e2"
  },
  {
    "url": "ee/index.html",
    "revision": "cf1bde7dfba4e492465b829e10cf9080"
  },
  {
    "url": "ee/poe.html",
    "revision": "944953d7d0dfc6b0d552fa1b0a3fa8ca"
  },
  {
    "url": "favicon.png",
    "revision": "3ad5329b46f55d3cd680401f459a28bc"
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
    "revision": "f81690492d867e520a6e281f557f46b9"
  },
  {
    "url": "others/about.html",
    "revision": "6afb5cfa6db92e8e7553fcc0525dda4e"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "10dfda58ee856ca0558e0cc1a66f48a2"
  },
  {
    "url": "others/android-studio.html",
    "revision": "de2346d07de2bb159f793090554d2df3"
  },
  {
    "url": "others/android.html",
    "revision": "d5cdd34175e4f62a1c939ded5412eaa6"
  },
  {
    "url": "others/chisel.html",
    "revision": "fada58789566b29d399c9bdf87866500"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "ca3eafd397d4f0f790350a9dd5f359bd"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "ad12988e4d08f8aa83b6827d1eaef629"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "e8d419a20d11970d8c0adee77ffec53f"
  },
  {
    "url": "others/css.html",
    "revision": "447ef0cf89e9810ad3d9a023d156209a"
  },
  {
    "url": "others/docker.html",
    "revision": "8cd705aa470f9d26973e9c9097e01fec"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "031a5df3c72e6ac854e7b36f8f9b3961"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "ab7279fe6704c2905b5e06395920998e"
  },
  {
    "url": "others/english-writting.html",
    "revision": "d46de9cff5703311663d82d1c37aa08b"
  },
  {
    "url": "others/esp32.html",
    "revision": "e6f996bfdebb85415ddff6835bc0de38"
  },
  {
    "url": "others/freertos.html",
    "revision": "e897d0affc97b7ff4660b1da2db7963d"
  },
  {
    "url": "others/gns3.html",
    "revision": "28f5c582d7a3e875638c26c83430e5ce"
  },
  {
    "url": "others/gps.html",
    "revision": "00c98b9b378cf138fecf3706b72c30cb"
  },
  {
    "url": "others/html5.html",
    "revision": "5bb0771f06caeea17e9a48d3e896720b"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "19d5e06ab2b2e3bfc945bb45c104e2c0"
  },
  {
    "url": "others/index.html",
    "revision": "d3877ade97b0be900d47a3e8de637b83"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "b2cc27402f3b87e7d65f711b4492588b"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "87567e061c1a944b4b18cf686f81730a"
  },
  {
    "url": "others/javascript.html",
    "revision": "b305da153ae1596d5473bf8876527a28"
  },
  {
    "url": "others/json.html",
    "revision": "00b06a840e7234c055b288da11088033"
  },
  {
    "url": "others/latex.html",
    "revision": "ff69dba79c2e69153bda2a52a4c14cf7"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "00011e62efbc08a356b5f9f93836f260"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "f20ffe70204969e49faff6a1b2f60f02"
  },
  {
    "url": "others/logistic-regression.html",
    "revision": "b2c3cd42494fa35816eb8f355eb54588"
  },
  {
    "url": "others/lwip.html",
    "revision": "fe73a6763e15c9f00fe53dfe56f2f8a1"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "cac1700bc4f71b02ff0771a9f72fde0d"
  },
  {
    "url": "others/markdown.html",
    "revision": "e19701065d8076f18ffcdaf5da44841e"
  },
  {
    "url": "others/matlab.html",
    "revision": "440c186e2e7b482c64492e5372fdbb27"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "703db90d38963539368a0e4e9d1e7637"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "647164f459147f6d3c8dbaa3a76117da"
  },
  {
    "url": "others/network-security.html",
    "revision": "f99d7587cae20aab13ef207225de6c1a"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "924788d92078cb9570c54335691ab545"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "069f8ce856c944c6f3f6dbfee61cc016"
  },
  {
    "url": "others/pyside2.html",
    "revision": "0cf217060e55769dfee14d44f5d48500"
  },
  {
    "url": "others/python-socket.html",
    "revision": "5295c0744ceb05618157eaae564d29fc"
  },
  {
    "url": "others/python.html",
    "revision": "dbe6fa694b9f1dc73cd4788d90fe3ebb"
  },
  {
    "url": "others/q-learning.html",
    "revision": "ad089b25976237d398ea4899e04e43bb"
  },
  {
    "url": "others/qr-code.html",
    "revision": "7981b94ddd608f51b31bd57704373fd7"
  },
  {
    "url": "others/qt4.html",
    "revision": "8cdadcdec27c00f9b4b4b38da1c2e68c"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "15c0ac0b43e3887993d5df1d55f6a85b"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "0b39ea3242524f240f9a9efc819484dc"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "37473b4a0d984dca67801be3a0a2981c"
  },
  {
    "url": "others/sd-card.html",
    "revision": "944653a70ce3be59b124046bf5e4653d"
  },
  {
    "url": "others/sdn.html",
    "revision": "3aa6918e24d0d5fa0712c819d32fe556"
  },
  {
    "url": "others/star-uml.html",
    "revision": "25dd8754bc61d9c7bdf0857b40ec7251"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "d4d3bd43db29aff985398e2a3627a099"
  },
  {
    "url": "others/verilog.html",
    "revision": "9181be6076ba9ed8c5f52b38db4c79aa"
  },
  {
    "url": "others/vue.html",
    "revision": "8b3c731826eaa36c4cd65e55430f298f"
  },
  {
    "url": "others/w5500.html",
    "revision": "7e4baefd91f9f3a9d276ea21278ecc60"
  },
  {
    "url": "others/w7500.html",
    "revision": "e419d3b54df552a850516dfec7af7901"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "4dbb23dd789a06b256433ce43c68b8d1"
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
