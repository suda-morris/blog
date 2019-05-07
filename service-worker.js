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
    "revision": "9da22f7ac7fd3691a2d99d0df89966f7"
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
    "url": "assets/js/11.a452eadb.js",
    "revision": "85f12dbb62affe28977f24834c063e47"
  },
  {
    "url": "assets/js/12.eafb2f27.js",
    "revision": "e4246880b086a696d029157a5765971b"
  },
  {
    "url": "assets/js/13.fe289341.js",
    "revision": "9b93d8bdebd187429dfd252b52ca9bfd"
  },
  {
    "url": "assets/js/14.d59211b4.js",
    "revision": "0b188d433f73db723f14d0a8cedaad35"
  },
  {
    "url": "assets/js/15.2e8fafc4.js",
    "revision": "c93747b41bdb0e19b10047affe81b7c9"
  },
  {
    "url": "assets/js/16.14c13aa7.js",
    "revision": "53711145b53548208e2834620eb25368"
  },
  {
    "url": "assets/js/17.0ee49138.js",
    "revision": "bc9ee06db5ca7490c680447d1b71cc4f"
  },
  {
    "url": "assets/js/18.bffe08b1.js",
    "revision": "d1c22b344728cd4cec3143ad29bd2e6b"
  },
  {
    "url": "assets/js/19.580e3334.js",
    "revision": "4b8a2bd558ab23b95c55c18e31dc38c6"
  },
  {
    "url": "assets/js/2.4a73e09d.js",
    "revision": "5f34ee97aa1bdabebbf53314638ee1b9"
  },
  {
    "url": "assets/js/20.5d20b12e.js",
    "revision": "2c49f4ae4edb4386c1a7f1abf7a1aaad"
  },
  {
    "url": "assets/js/21.e9d74a75.js",
    "revision": "1932702c51d9616809bdbcf060432b06"
  },
  {
    "url": "assets/js/22.3be5055f.js",
    "revision": "ea4769e548153ed80a08892c025407a0"
  },
  {
    "url": "assets/js/23.418d6234.js",
    "revision": "016ca14e51d096fdc8c164ca39b0cee5"
  },
  {
    "url": "assets/js/24.b2f0fb97.js",
    "revision": "68bf48d93663e63e2b2d992937842e04"
  },
  {
    "url": "assets/js/25.2e67b9a1.js",
    "revision": "525e30c7af163244a58eb3f48f808e56"
  },
  {
    "url": "assets/js/26.34d6247d.js",
    "revision": "b50eea5cb7a023f2356163b19d541928"
  },
  {
    "url": "assets/js/27.40a7ec49.js",
    "revision": "03b34ea02ed522c9593918049303ce05"
  },
  {
    "url": "assets/js/28.59f1bd9e.js",
    "revision": "f50b1478e5eab52a7320c4b76126b9c7"
  },
  {
    "url": "assets/js/29.af6fa38e.js",
    "revision": "7e53a1e7c21e16ac78b3e1d4ea570ecf"
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
    "url": "assets/js/31.6c694c6a.js",
    "revision": "933a6365b7f1f2638dfa05faf3f479d7"
  },
  {
    "url": "assets/js/32.6f5dab1a.js",
    "revision": "20edb8fefd2faeb3fc5ddfba122f8bb1"
  },
  {
    "url": "assets/js/33.83ec9794.js",
    "revision": "209187bc0ab7045a3297fffcb49320d0"
  },
  {
    "url": "assets/js/34.ba4bf389.js",
    "revision": "c75a4b399552c4c9440c4ae52c130372"
  },
  {
    "url": "assets/js/35.b5009de5.js",
    "revision": "c134e572017e71174a1388ed73870019"
  },
  {
    "url": "assets/js/36.f4c5f88e.js",
    "revision": "d7b8e4f979c4a50a997c4958fb35f1f2"
  },
  {
    "url": "assets/js/37.96b284de.js",
    "revision": "3d0a057b7496d9c0e6d081cc07e3783f"
  },
  {
    "url": "assets/js/38.e35615d0.js",
    "revision": "ac4cf7ac119a8dfcbf3962cab32f2ea8"
  },
  {
    "url": "assets/js/39.0a11c877.js",
    "revision": "0d47257fd62f89d53dd672a06c7bc1e9"
  },
  {
    "url": "assets/js/4.e3e090f7.js",
    "revision": "a9c27245504f4c9ce764a9b86e0dbbe7"
  },
  {
    "url": "assets/js/40.8291462c.js",
    "revision": "dcd19734861b39421c985da5996e1784"
  },
  {
    "url": "assets/js/41.675e2db9.js",
    "revision": "37052e3b466060bc0406ae4020e895be"
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
    "url": "assets/js/45.b085d47c.js",
    "revision": "d7012ac40b9f4eb59ba7b3a3b1a588f9"
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
    "url": "assets/js/48.64f12297.js",
    "revision": "bf17c4de1bc72d9816afd770115b1fde"
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
    "url": "assets/js/50.989af8d1.js",
    "revision": "9de8a2c5db9c5dad9e5b98b8666f1b3e"
  },
  {
    "url": "assets/js/51.af681967.js",
    "revision": "fe0900577f281092dd6e9480327e36a8"
  },
  {
    "url": "assets/js/52.c9dba548.js",
    "revision": "3f302ab72f2c890be12544e8bdcd5d80"
  },
  {
    "url": "assets/js/53.a2ecb806.js",
    "revision": "055c84410af9cfa3921a0af2c7d4750e"
  },
  {
    "url": "assets/js/54.b1b3d3b8.js",
    "revision": "9764e93a13478de61627cfa4f8b38a12"
  },
  {
    "url": "assets/js/55.df6ac2c7.js",
    "revision": "8ee82f3b9e4ee364c4cf4f54c6777a0c"
  },
  {
    "url": "assets/js/56.06d3671b.js",
    "revision": "2f21d3b44b33cf281f4a01821d396c35"
  },
  {
    "url": "assets/js/57.8f3b4900.js",
    "revision": "ba420de89278e89781dcd0ef0ff0db87"
  },
  {
    "url": "assets/js/58.0a367d39.js",
    "revision": "ceeaf9b9f2609879810edc875d28c54e"
  },
  {
    "url": "assets/js/59.873b0206.js",
    "revision": "ea07080d4d91fe4bc2926071f51951c7"
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
    "url": "assets/js/61.ab49a976.js",
    "revision": "c90967a8c49cfde1147a215f687c4e7e"
  },
  {
    "url": "assets/js/62.f0d995c4.js",
    "revision": "6cb7c57d4ce65d91525c2ec6a28f1ff8"
  },
  {
    "url": "assets/js/63.cbad06cd.js",
    "revision": "ef3fe0089fa5055eacda9f5d4103f19a"
  },
  {
    "url": "assets/js/64.ed9a0b1d.js",
    "revision": "b72cb6abdcda0099008341e4c502002f"
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
    "url": "assets/js/70.cd6954a0.js",
    "revision": "b7131e7e5c4e82d21c3aa5823e133e8c"
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
    "url": "assets/js/app.a16d77d4.js",
    "revision": "94cf93229c8d2175115b8c79061c0a44"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "452e7f64f0e4322830ccda8d3d2a6bea"
  },
  {
    "url": "cs/bash.html",
    "revision": "47d9188c492126e8e55e567402a9182a"
  },
  {
    "url": "cs/compilation.html",
    "revision": "8cf0c88324d1dd1308488a49e7cc22fc"
  },
  {
    "url": "cs/index.html",
    "revision": "2bdb3b330ae8adb53cbe8d13f3ac9f92"
  },
  {
    "url": "ee/about.html",
    "revision": "76f8ec97f9c8a0b74aa0f118062b7d2d"
  },
  {
    "url": "ee/index.html",
    "revision": "032c62ff6e250424c35c471ab0676ad3"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "c1dea2f29380a2a173936435957d0281"
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
    "revision": "48a992eef8fc22e6944d0d7d64539a18"
  },
  {
    "url": "others/about.html",
    "revision": "257115ce5170ec09849aff345b799fed"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "49c485b4c87503b97ab4603b90b65e69"
  },
  {
    "url": "others/android-studio.html",
    "revision": "381c51c62b65f2d771a55b466dccd691"
  },
  {
    "url": "others/android.html",
    "revision": "e0ea38f5bb7371e1ef28ffe0f8adb57d"
  },
  {
    "url": "others/chisel.html",
    "revision": "34e3892a3111af8a48700746004c9150"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "551bd9fc14bea6298ef813b05fc3cd9d"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "efe9c6c93888ecef0acadb5ec0429ed9"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "b2d0a3c0f4306a3c2712338154733bb8"
  },
  {
    "url": "others/css.html",
    "revision": "fa1aefb622c409a4e5352fbbef95f87e"
  },
  {
    "url": "others/docker.html",
    "revision": "65704d5a41da5a935f0e1132b88737d5"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "8712a7c401e5dddea94e815a0f97933d"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "07760b0de49f0511256b3b6d21310673"
  },
  {
    "url": "others/english-writting.html",
    "revision": "a678655e051991cd88d446f2a33bae6d"
  },
  {
    "url": "others/esp32.html",
    "revision": "11820f292b1d88034bddcf766e8dc468"
  },
  {
    "url": "others/freertos.html",
    "revision": "9e586ed7ad806b494860abd045782ca2"
  },
  {
    "url": "others/gns3.html",
    "revision": "d6b32969185e31c17d93327d9f0eec6c"
  },
  {
    "url": "others/gps.html",
    "revision": "16c1aef49d0ee3b53695a2e464a86c9b"
  },
  {
    "url": "others/html5.html",
    "revision": "f9de72d7b5ed5899e6a2e5ddf6790229"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "61fabe5314dd1c08853d2aa619023c94"
  },
  {
    "url": "others/index.html",
    "revision": "07ca60c2b6d6c511bab2a295cb4c16ef"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "a7572e962cc60c22a9035cd0f151a765"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "56b2d43f5510ba194479e0d8a4167e7c"
  },
  {
    "url": "others/javascript.html",
    "revision": "714c8dba9e80fc2b8645a1834a322f66"
  },
  {
    "url": "others/json.html",
    "revision": "174270c6b00f86187325608b1711c455"
  },
  {
    "url": "others/latex.html",
    "revision": "a8b29e240cba14221056cf5d020181ec"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "d1a463ba0d2e5494ba8abfbc219a921d"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "23546a105fe1b176ae6ede4813b80f0f"
  },
  {
    "url": "others/logistic-regression.html",
    "revision": "f1ca490867f4dd7c95bf26571bc15ee4"
  },
  {
    "url": "others/lwip.html",
    "revision": "27603013d1a97b2f3992444a16bc450a"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "b0d44598b483a243b49846a66b0cd8fc"
  },
  {
    "url": "others/markdown.html",
    "revision": "74a3f0a82159b3a7369693691395d207"
  },
  {
    "url": "others/matlab.html",
    "revision": "1d0705f9f5e694429b5f9370d413ffa2"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "2e9af7df288f756b071a937d2f17317f"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "35b4d534631af1098b1dac25bdf8449b"
  },
  {
    "url": "others/network-security.html",
    "revision": "d6f8837c22a3c7929af5c94777d9c7e0"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "5ae245ad5eb04142778c258e46769cd5"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "73ab4c54b8e28247cb81ddbb2d779ae1"
  },
  {
    "url": "others/poe.html",
    "revision": "a596b688e1a1398c2109938a775f5e89"
  },
  {
    "url": "others/pyside2.html",
    "revision": "c0d259c132847a5b74eced11a5f436d9"
  },
  {
    "url": "others/python-socket.html",
    "revision": "757eeedd440c0bd923fbe8a9777dd5c1"
  },
  {
    "url": "others/python.html",
    "revision": "d26fddd28f94f4e71c0a18be3766d44c"
  },
  {
    "url": "others/q-learning.html",
    "revision": "dea9250a29a265b57b34686de05e3754"
  },
  {
    "url": "others/qr-code.html",
    "revision": "2387d58ee07c63eb04b1a509301168a4"
  },
  {
    "url": "others/qt4.html",
    "revision": "4322e9b7f8316bd024ea227b175af291"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "cd40f8c1ce02bb16be4928d7edc6276a"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "9f74d350307cef9f0904d8d6679bd875"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "5f4b8427d1539383e8f0a4aa5b1a3068"
  },
  {
    "url": "others/sd-card.html",
    "revision": "ae54ef56a9f505ba5338724125cd9297"
  },
  {
    "url": "others/sdn.html",
    "revision": "edf3090daa0e6cd36c5d0e74c3222f40"
  },
  {
    "url": "others/star-uml.html",
    "revision": "835b4c6c0027c5c73de827087a0209df"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "3ac18ceebff43a1435b9039c488ee0e9"
  },
  {
    "url": "others/verilog.html",
    "revision": "51c716946c737bf8f54b6542d8769fc8"
  },
  {
    "url": "others/vue.html",
    "revision": "8048c9442fb90709baf84819f0e8977d"
  },
  {
    "url": "others/w5500.html",
    "revision": "aaab1bfcb20fff9935a5792d8527a26c"
  },
  {
    "url": "others/w7500.html",
    "revision": "aece64351892458cbdc67afa494e48c6"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "46278e23cc63bea1cb69da62ac0e1fda"
  },
  {
    "url": "resume.html",
    "revision": "8b2147308014bae692c1529ad5282779"
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
