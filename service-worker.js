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
    "revision": "c8c71dba0e9eb90de17cb522444f4742"
  },
  {
    "url": "assets/css/0.styles.c4b83633.css",
    "revision": "9669ae2515a628073fb617be9eda1296"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.762f9583.js",
    "revision": "401ff33e3409313228e21872a160bb83"
  },
  {
    "url": "assets/js/11.2fcfe9d0.js",
    "revision": "f653e4229211b2253e3389d8e459f5da"
  },
  {
    "url": "assets/js/12.cfdaaa7e.js",
    "revision": "a6a11cbc383b9bfd1727f5873a4bca9d"
  },
  {
    "url": "assets/js/13.1cec2db5.js",
    "revision": "bedcca38beeb63ebbd0ebb830676cd62"
  },
  {
    "url": "assets/js/14.32ece556.js",
    "revision": "afa0939a34aecb223d6978bf130aa192"
  },
  {
    "url": "assets/js/15.bef76533.js",
    "revision": "b8f624ae1b60a5d1cf0471080049c853"
  },
  {
    "url": "assets/js/16.1146c2b8.js",
    "revision": "e058dc8a252f2b270c7e5ff15e8d736f"
  },
  {
    "url": "assets/js/17.907230eb.js",
    "revision": "429c4b546fbc9305d195e37556502c88"
  },
  {
    "url": "assets/js/18.c216624d.js",
    "revision": "9fb67f944ea5a156fad4665389f6e062"
  },
  {
    "url": "assets/js/19.07721fc5.js",
    "revision": "75418fa77a6c7e836679d3159fa6cab1"
  },
  {
    "url": "assets/js/2.5203ae48.js",
    "revision": "b43e93b01cf80ff6cf0c4c4c0d7a1008"
  },
  {
    "url": "assets/js/20.42a5eba3.js",
    "revision": "8bfeb656d42a8d9a724ee108e673f584"
  },
  {
    "url": "assets/js/21.1928f675.js",
    "revision": "dc827c092f2c7bd9286d4722160b5882"
  },
  {
    "url": "assets/js/22.c9c12d28.js",
    "revision": "1f576a23a35708bd825a59a45a71312c"
  },
  {
    "url": "assets/js/23.7548c7cb.js",
    "revision": "524f47f57dbf5a96eec88ec0a02a64f3"
  },
  {
    "url": "assets/js/24.4f9230ac.js",
    "revision": "460115ea79987545577f22e781f46197"
  },
  {
    "url": "assets/js/25.0e2bea73.js",
    "revision": "9a889f4eb4c72a6489d8661335b85938"
  },
  {
    "url": "assets/js/26.c346f7c6.js",
    "revision": "d7dbb66fbd086c437e950c7e28ef124a"
  },
  {
    "url": "assets/js/27.ef47ca7c.js",
    "revision": "7c18fec52e969d124554544da6b66f14"
  },
  {
    "url": "assets/js/28.0a9e89ff.js",
    "revision": "5be7456fb0a175bd379e63dddddc96d9"
  },
  {
    "url": "assets/js/29.13c5a23a.js",
    "revision": "e7044ca1be57ee51b83b9982965aaab8"
  },
  {
    "url": "assets/js/3.ee9c868d.js",
    "revision": "0c55b4bc3fe4f6df4faf5cd088dbd9d9"
  },
  {
    "url": "assets/js/30.97468ce2.js",
    "revision": "c1afe77aa7601a8dd17a65d5088e5741"
  },
  {
    "url": "assets/js/31.e44ba6cd.js",
    "revision": "8532ff9750217b1f86c4193579a8c17e"
  },
  {
    "url": "assets/js/32.6a61a726.js",
    "revision": "e1ce350ff66096b17a229f2860ad32de"
  },
  {
    "url": "assets/js/33.0eead473.js",
    "revision": "b8589ae3a51cfc6b1cd612ca3a023272"
  },
  {
    "url": "assets/js/34.f63fe7f6.js",
    "revision": "406a3be3f6dbd723945c680f5ba016a7"
  },
  {
    "url": "assets/js/35.52be639b.js",
    "revision": "c8a6fd810e113da02b176b279c00308a"
  },
  {
    "url": "assets/js/36.51cbc4de.js",
    "revision": "f66607261d8c699d21fc66f5f824797f"
  },
  {
    "url": "assets/js/37.4f5372cb.js",
    "revision": "08afa0f321581ffdbb34c692de14baf8"
  },
  {
    "url": "assets/js/38.064c04dc.js",
    "revision": "df965f79a11fa61ccae6c2a37f1e0620"
  },
  {
    "url": "assets/js/39.8ed97e59.js",
    "revision": "5cf00a71d1ec5078147e992837a0f14c"
  },
  {
    "url": "assets/js/4.fa8a62ca.js",
    "revision": "f52e7d20ba5b911bbbbafeefd57f5e0b"
  },
  {
    "url": "assets/js/40.4e625985.js",
    "revision": "c69e183499310c192aa8d89e61f2bcaf"
  },
  {
    "url": "assets/js/41.19ee1091.js",
    "revision": "ca06c63ea5d9185899104f01789d77c5"
  },
  {
    "url": "assets/js/42.0e31b534.js",
    "revision": "1229c064e0b1318cb3cd1dd3530ae3fb"
  },
  {
    "url": "assets/js/43.30a2eb19.js",
    "revision": "137574d9a974830fe8cc7be021fbc7c3"
  },
  {
    "url": "assets/js/44.f7ea51d9.js",
    "revision": "98fcb18b5681f973ed077953543d9d3f"
  },
  {
    "url": "assets/js/45.d74ef2c0.js",
    "revision": "226cc9f0ddd03dc8b648a6ce58d9584e"
  },
  {
    "url": "assets/js/46.980635ea.js",
    "revision": "053ccd888428c9534f579fbf5e4af0e5"
  },
  {
    "url": "assets/js/47.e24ce952.js",
    "revision": "6b36324982a0d3509a79a34dbe1ccb0c"
  },
  {
    "url": "assets/js/48.86bbd8f6.js",
    "revision": "efe7afe6cde63f765e6239bb14d2866e"
  },
  {
    "url": "assets/js/49.c9f8c030.js",
    "revision": "0f3eb49d6d7e9e0755219a7aaf1bc089"
  },
  {
    "url": "assets/js/5.4ad359d4.js",
    "revision": "5f5a852ba8d152e6072389669bb3d2f1"
  },
  {
    "url": "assets/js/50.8c16a020.js",
    "revision": "f0e1129ab30adbe2adbfd3baeaf91725"
  },
  {
    "url": "assets/js/51.c7b9863d.js",
    "revision": "93b388c946f0387765513141ca9a8681"
  },
  {
    "url": "assets/js/52.c3dfad3d.js",
    "revision": "0614552f01317ffc994ffb3ab9be74a2"
  },
  {
    "url": "assets/js/53.5c2cf209.js",
    "revision": "c63d69d12451561dcacf47f0ea315e76"
  },
  {
    "url": "assets/js/54.1b3eef38.js",
    "revision": "5afcfdbb7f5dbc23497aa1c0fd68432f"
  },
  {
    "url": "assets/js/55.a84bedfe.js",
    "revision": "3e84a16e2bbc0af72a7ecff9efbe9e1a"
  },
  {
    "url": "assets/js/56.39b89665.js",
    "revision": "27df9c41a828d1157d00ec60ff3e1f4a"
  },
  {
    "url": "assets/js/57.83bbc676.js",
    "revision": "a805981c35568b2bdf1597c44320d7df"
  },
  {
    "url": "assets/js/58.05828456.js",
    "revision": "0bc814e8e2c432c4a368feba6bad4d83"
  },
  {
    "url": "assets/js/59.8fe98ad4.js",
    "revision": "813b19036c5b05ffe433e903d35768af"
  },
  {
    "url": "assets/js/6.e3392981.js",
    "revision": "d1292efd86d3f537bc847a6c67047d21"
  },
  {
    "url": "assets/js/60.fa16504e.js",
    "revision": "1a5038fea46f26d01ef58e923e4d47eb"
  },
  {
    "url": "assets/js/61.56eed8d6.js",
    "revision": "6d46d1c3ca9b4351c8a63a949ae923f5"
  },
  {
    "url": "assets/js/62.eda7f5c3.js",
    "revision": "6b6dfd342677cbe2925f6d20e9f93ebf"
  },
  {
    "url": "assets/js/63.da59083d.js",
    "revision": "9975030585b05e433a8aabd38f739b42"
  },
  {
    "url": "assets/js/64.f9b837f0.js",
    "revision": "74796e35fb9422192f92710b69d5fdf8"
  },
  {
    "url": "assets/js/65.2ca4c9dd.js",
    "revision": "25a9afc2a2e31d58b882d38c72701bfd"
  },
  {
    "url": "assets/js/66.b3f5c11f.js",
    "revision": "b5d5b5f7c47f2f2e185d12b7a5021297"
  },
  {
    "url": "assets/js/67.fc0db5ab.js",
    "revision": "d9e74399c247d5b941d20326f15f23bb"
  },
  {
    "url": "assets/js/68.105278b0.js",
    "revision": "39885c64b6bf39aff0484afb6b60efc7"
  },
  {
    "url": "assets/js/69.d72640ac.js",
    "revision": "42a5f390f74e63379318161ece91eedb"
  },
  {
    "url": "assets/js/7.482f5b1a.js",
    "revision": "216bc24ffd50b4ebcb87925b72f72e33"
  },
  {
    "url": "assets/js/70.f49ced8f.js",
    "revision": "ed667bbf6bbd7c263b001f3591eb9ff5"
  },
  {
    "url": "assets/js/71.17853e0b.js",
    "revision": "af82877bb580c08969a58ba11923f326"
  },
  {
    "url": "assets/js/72.41a81933.js",
    "revision": "e1fc4fb418bdd881d229a435ac782ee5"
  },
  {
    "url": "assets/js/73.50147b93.js",
    "revision": "cff596e75963345a1febfa3df664b10e"
  },
  {
    "url": "assets/js/8.6e32f0dc.js",
    "revision": "ff5cdd54800ec188197a2b219519fdf8"
  },
  {
    "url": "assets/js/9.67fbd9f3.js",
    "revision": "4dbaf1da2b8a6cbbdd7b230de853bcce"
  },
  {
    "url": "assets/js/app.0883ae28.js",
    "revision": "92beb11e62727373359b11ca71161f6b"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "092a57c4124c3b7478ea72284f810ccd"
  },
  {
    "url": "cs/bash.html",
    "revision": "fe67bd0b30fb14dbd631b6b9cddb5100"
  },
  {
    "url": "cs/cmake.html",
    "revision": "e9030a6af9867f8d3b2cda5ff4c384c0"
  },
  {
    "url": "cs/compilation.html",
    "revision": "f59d90c64b49661d7a512b5ed716b2ac"
  },
  {
    "url": "cs/index.html",
    "revision": "ebd2c2c512051b0814d28fb6f8d6f2c4"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "42609b6a14033fa58cb4a7b432ece406"
  },
  {
    "url": "ee/about.html",
    "revision": "90ebee70b4d3097d2cdb0dbde10530de"
  },
  {
    "url": "ee/index.html",
    "revision": "9fe3adf641f1d670b6c4189e09451e51"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "fcfb32785f29dbc72357b8e59630bc89"
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
    "revision": "032ab1fb1975d3cb21b1619234a6c6f2"
  },
  {
    "url": "others/about.html",
    "revision": "521fc6001760e780e79974a564cf2b3e"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "32033877ecd09d5b5c1562760428f545"
  },
  {
    "url": "others/android-studio.html",
    "revision": "851f0877e855dc0b021b147d82f45846"
  },
  {
    "url": "others/android.html",
    "revision": "ed7b29c0e0247b26fa128ef414e86e3f"
  },
  {
    "url": "others/chisel.html",
    "revision": "908238420e708de5cd18e488ce3828a8"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "64ec217ed3961c2fbd4cf428e35afedf"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "508063eec079d53124b7cf695668fe3d"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "27de0f1498eb331cd24662c02ceb0973"
  },
  {
    "url": "others/css.html",
    "revision": "b34d8f5a2293d86cd61486d7b2632cdc"
  },
  {
    "url": "others/docker.html",
    "revision": "7209ca4e7b6f7c13c82d6691fa694952"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "1d92fd6a64d83e01be4ae01e4df89fac"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "9aeef519be11280015fd5d8ccdba061a"
  },
  {
    "url": "others/english-writting.html",
    "revision": "99fcdfbea742447d46d3cf3139b606ba"
  },
  {
    "url": "others/esp32.html",
    "revision": "99a0c71c07401956bd04191cb09ee36d"
  },
  {
    "url": "others/freertos.html",
    "revision": "f328a68e396499ed7749a5e83edc12cd"
  },
  {
    "url": "others/git.html",
    "revision": "301bf4d6406412c06166136859468e48"
  },
  {
    "url": "others/gns3.html",
    "revision": "f978a287c0238397259ca41028a5aac3"
  },
  {
    "url": "others/gps.html",
    "revision": "3787d865060ad481ffa73c27699a04e3"
  },
  {
    "url": "others/html5.html",
    "revision": "6c767135be8223e809392fff937ece3f"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "40962e37d2949821361087fdd97d40b6"
  },
  {
    "url": "others/index.html",
    "revision": "01f363b029e5e56e8ad1c79670970570"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "ac85241cf6c1fc6496fa8246b7a6bd47"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "66e019352a5625ec4406273c123cc099"
  },
  {
    "url": "others/javascript.html",
    "revision": "0027c9eebb111a10d9638e40bcd223a8"
  },
  {
    "url": "others/json.html",
    "revision": "a96db893fb02e24055a3facbf44357dc"
  },
  {
    "url": "others/latex.html",
    "revision": "1aac89184096b07ce0be159b40f43259"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "bd5b07713d55d1c6fd6e4946ff094827"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "e76bf2c733ed0c9d58723205813a254c"
  },
  {
    "url": "others/lwip.html",
    "revision": "ec5bcf55c44746b2346414668856987f"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "19a48567424ab4b3e58bb404bf3a50a3"
  },
  {
    "url": "others/markdown.html",
    "revision": "be1f1a710444fa4bc088a71142016905"
  },
  {
    "url": "others/matlab.html",
    "revision": "4774585b72ed06ce4d8c46147b5b9301"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "4e8ee4983f39e1a98b12c201a8d0e13e"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "aa72b733b188d988d42ea7b895145bbf"
  },
  {
    "url": "others/network-security.html",
    "revision": "efd5511c42a274a89b111cfba745fa97"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "c6f027a019220e2316d9c77760ef6e53"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "67dc86313f473e7ce77d6b498213c876"
  },
  {
    "url": "others/poe.html",
    "revision": "52a0e90ab1b83e66626dd29b4bcdb819"
  },
  {
    "url": "others/pyside2.html",
    "revision": "dc9c4a2291e8206e0bc18ff9b00fa85c"
  },
  {
    "url": "others/python-socket.html",
    "revision": "3c33fe7ba07f57c48ce826d5c55ca996"
  },
  {
    "url": "others/python.html",
    "revision": "8dac518e2f716c95b88a24fa3e14e816"
  },
  {
    "url": "others/q-learning.html",
    "revision": "cb5b379959ac4b07250009c93f2b82ff"
  },
  {
    "url": "others/qr-code.html",
    "revision": "630a7abb36d821bfabb60b3d49a0bb32"
  },
  {
    "url": "others/qt4.html",
    "revision": "28c51f0cfac714f0fae1769d1626b25e"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "39dff6a90b64a7237d41d0bd8214042e"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "3a7f0d7b7b0c313ce00a28ee8e25ddc7"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "40fc5c88290f7c185883718c601136f3"
  },
  {
    "url": "others/sd-card.html",
    "revision": "a805cc55cfa6c63105224aed82c918cf"
  },
  {
    "url": "others/sdn.html",
    "revision": "e9393d359c34d3f7aad4b2eeb21b7783"
  },
  {
    "url": "others/star-uml.html",
    "revision": "e03eede6533c817f6642ab09842e082a"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "55c327f55b025fa7ab176ba0fcd4fdc1"
  },
  {
    "url": "others/verilog.html",
    "revision": "9534aafa25ec00ca68b657f246be64b4"
  },
  {
    "url": "others/vue.html",
    "revision": "0a118696782143d6578c09ce3d87b6a5"
  },
  {
    "url": "others/w5500.html",
    "revision": "02605579da4c9d7c686910c112eace60"
  },
  {
    "url": "others/w7500.html",
    "revision": "6b3f3b6da339d8c9bd65104a3feb146f"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "685c10285c76284b0067bd61a3ed4ada"
  },
  {
    "url": "resume.html",
    "revision": "9cbd2a9608bee365c42684bc18b3662e"
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
