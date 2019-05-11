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
    "revision": "3e6e2fca7508d7b4839ef80870b2e35a"
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
    "url": "assets/js/15.f9f7326e.js",
    "revision": "20bbf4ca56861070e6a9e31bbda1b057"
  },
  {
    "url": "assets/js/16.4e0e8e29.js",
    "revision": "03ab0b0dfc011285db7641bde5fd7f02"
  },
  {
    "url": "assets/js/17.ec71529e.js",
    "revision": "ee99fd888d0d867b959d180dd2306e72"
  },
  {
    "url": "assets/js/18.c216624d.js",
    "revision": "9fb67f944ea5a156fad4665389f6e062"
  },
  {
    "url": "assets/js/19.6fb51ee5.js",
    "revision": "655abe2d2715b1b48e1b3dd456c46c44"
  },
  {
    "url": "assets/js/2.5203ae48.js",
    "revision": "b43e93b01cf80ff6cf0c4c4c0d7a1008"
  },
  {
    "url": "assets/js/20.8611442e.js",
    "revision": "2e570be1399b15682f9a44e7b6e2b377"
  },
  {
    "url": "assets/js/21.f40529be.js",
    "revision": "5cd357e95a2123b5c8382b7ffeadf41d"
  },
  {
    "url": "assets/js/22.db270325.js",
    "revision": "3a0fbb42c332bd06191409f7f8033859"
  },
  {
    "url": "assets/js/23.7548c7cb.js",
    "revision": "524f47f57dbf5a96eec88ec0a02a64f3"
  },
  {
    "url": "assets/js/24.7c888ef3.js",
    "revision": "3be20cf4ee7bc7214c55e9aa43df469a"
  },
  {
    "url": "assets/js/25.40664069.js",
    "revision": "589a8e32e6cecfdbb33085b2ae761b28"
  },
  {
    "url": "assets/js/26.99516395.js",
    "revision": "f9f3ca350a4a89945837b3a7b9e71c56"
  },
  {
    "url": "assets/js/27.59199a94.js",
    "revision": "16964e71f92d3d980269ee9a158fdffa"
  },
  {
    "url": "assets/js/28.0a9e89ff.js",
    "revision": "5be7456fb0a175bd379e63dddddc96d9"
  },
  {
    "url": "assets/js/29.2811c366.js",
    "revision": "e1766dce4bd1a9610ebc9b9c2528453f"
  },
  {
    "url": "assets/js/3.ee9c868d.js",
    "revision": "0c55b4bc3fe4f6df4faf5cd088dbd9d9"
  },
  {
    "url": "assets/js/30.93cdf7cb.js",
    "revision": "077033a4afc2b46aa199241f32998771"
  },
  {
    "url": "assets/js/31.e44ba6cd.js",
    "revision": "8532ff9750217b1f86c4193579a8c17e"
  },
  {
    "url": "assets/js/32.1245768e.js",
    "revision": "2e81c70dcf69e0f2c299bad5d8e9f7d8"
  },
  {
    "url": "assets/js/33.11ea0b4a.js",
    "revision": "cd7d68cc24b050083615e693eabbb2ce"
  },
  {
    "url": "assets/js/34.a6f68732.js",
    "revision": "701077c17e55d3cd94b7855fc5d6c56f"
  },
  {
    "url": "assets/js/35.86e7f52a.js",
    "revision": "7c5f4033f698fabbb3e43e4c5268e569"
  },
  {
    "url": "assets/js/36.af0c1d06.js",
    "revision": "4854b69b53139c0df785adae88a433cd"
  },
  {
    "url": "assets/js/37.c5bdf2bb.js",
    "revision": "582f92c33c3dba036a6bdfa84dd59745"
  },
  {
    "url": "assets/js/38.5c01d9f7.js",
    "revision": "0929709a26c407cbde7a30155ce861cb"
  },
  {
    "url": "assets/js/39.22ec9dd7.js",
    "revision": "41dab79b040920df6bfc810c54c71824"
  },
  {
    "url": "assets/js/4.fa8a62ca.js",
    "revision": "f52e7d20ba5b911bbbbafeefd57f5e0b"
  },
  {
    "url": "assets/js/40.a91fff8d.js",
    "revision": "8caa478cd830e67514e66d5bc577b400"
  },
  {
    "url": "assets/js/41.6586df66.js",
    "revision": "3eee2f1ae24398ca23621476b828697f"
  },
  {
    "url": "assets/js/42.0e31b534.js",
    "revision": "1229c064e0b1318cb3cd1dd3530ae3fb"
  },
  {
    "url": "assets/js/43.1d6da04e.js",
    "revision": "011167ee646dd43c987bea9a7408eda3"
  },
  {
    "url": "assets/js/44.f7ea51d9.js",
    "revision": "98fcb18b5681f973ed077953543d9d3f"
  },
  {
    "url": "assets/js/45.83355131.js",
    "revision": "64361e68fe12aea7d2d634fa896a6db3"
  },
  {
    "url": "assets/js/46.926e02d7.js",
    "revision": "8ba93c875423c77dd61179d28eb9a7c1"
  },
  {
    "url": "assets/js/47.d2bdfdf9.js",
    "revision": "e4f08665c9790ad75724a4c622ac5092"
  },
  {
    "url": "assets/js/48.86bbd8f6.js",
    "revision": "efe7afe6cde63f765e6239bb14d2866e"
  },
  {
    "url": "assets/js/49.d8bfb0bf.js",
    "revision": "c64d0348e9c958170e97fb43b144203c"
  },
  {
    "url": "assets/js/5.4ad359d4.js",
    "revision": "5f5a852ba8d152e6072389669bb3d2f1"
  },
  {
    "url": "assets/js/50.0ad0abd1.js",
    "revision": "05fc7bc6f3c81d6e7375840b63adc058"
  },
  {
    "url": "assets/js/51.a007cf9f.js",
    "revision": "42c915f5c6e959fe7490624e0514542c"
  },
  {
    "url": "assets/js/52.ed15c1be.js",
    "revision": "301f66f084629ccf2cf2a6d154bc631e"
  },
  {
    "url": "assets/js/53.d71408da.js",
    "revision": "cdbd1f4a480c7a75715ed4fb4283d32d"
  },
  {
    "url": "assets/js/54.1e98536a.js",
    "revision": "17d4751e9865f4ecbdb980047083f437"
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
    "url": "assets/js/6.5080ff4e.js",
    "revision": "992a2cc519fdfd793e6cf4ffca3bcd0a"
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
    "url": "assets/js/7.f49c4cfa.js",
    "revision": "b030fd4179e1fccdefa5c7aa894e8c22"
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
    "url": "assets/js/app.6e1e7fac.js",
    "revision": "d952fca755fada77ba188471a0d51c62"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "fdaf3984de3a8fbdf89bbe5a28b2417b"
  },
  {
    "url": "cs/bash.html",
    "revision": "3ec98c429e8fe15feea25a010f8c5fb1"
  },
  {
    "url": "cs/cmake.html",
    "revision": "3519ac288f1ed3ab092567f04efb764b"
  },
  {
    "url": "cs/compilation.html",
    "revision": "2bae5c1cf56a5db5066563e45e335588"
  },
  {
    "url": "cs/index.html",
    "revision": "9c350edc6573d9597f7b8328a8e80fa6"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "12dab3f87a6316440cc717f527607bef"
  },
  {
    "url": "ee/about.html",
    "revision": "fe88087be02e5e474decc0e2f9a26ff2"
  },
  {
    "url": "ee/index.html",
    "revision": "441cdeec2d05fd4f5be25ac92f627e1d"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "e6a39227c8c0bf043b35c0fe35de4252"
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
    "revision": "f7ccfeff7e61dc15c808af14482b9f16"
  },
  {
    "url": "others/about.html",
    "revision": "9281c51c88149d76923654f4c5fa7aa9"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "3db09a2d11959e60d591c9a1941434d1"
  },
  {
    "url": "others/android-studio.html",
    "revision": "b5f556e3b65276725c997ab83a82ae6f"
  },
  {
    "url": "others/android.html",
    "revision": "840433f0ed4a4483462295b2cbf35018"
  },
  {
    "url": "others/chisel.html",
    "revision": "18eaf076b7dae68d00ccb0e47973604b"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "74ec6f48b6d379358f1bfa0806326112"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "74d867594ca071a233ea027712358cde"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "1883f341f801e166b0828d517ff05af5"
  },
  {
    "url": "others/css.html",
    "revision": "c8a90cab6188ec18faa4a2b1244d6234"
  },
  {
    "url": "others/docker.html",
    "revision": "bd63070fdbca4b10d3a8d9e32a8c623f"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "c0a4b3cad9e58000d55d19aca2ba39ab"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "35380133bba4d89688084885d77bd4db"
  },
  {
    "url": "others/english-writting.html",
    "revision": "38524d0725a6ab6c68d251c258281d6c"
  },
  {
    "url": "others/esp32.html",
    "revision": "82238e00a202f7989e16d9ac666cd87d"
  },
  {
    "url": "others/freertos.html",
    "revision": "d93132178d9ef7079c614c1e7e41335c"
  },
  {
    "url": "others/git.html",
    "revision": "7f634eaaa269ba7dfef6272b0f6d4789"
  },
  {
    "url": "others/gns3.html",
    "revision": "3af66550d6bac89d0c4224cf70e6c50a"
  },
  {
    "url": "others/gps.html",
    "revision": "98329708690b98bd2fcb72846eaf11f1"
  },
  {
    "url": "others/html5.html",
    "revision": "d78be7cf1c6f1e38cfcc57d24bd8b3d9"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "4e8a7a385a684f481f0e323e22992f48"
  },
  {
    "url": "others/index.html",
    "revision": "b732438b95abda87f81cb5cfe03973ff"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "fe7f582a56daa2a7ac73d37fb1ba0c83"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "18f344464345dc1b216bf2bcaf5ba553"
  },
  {
    "url": "others/javascript.html",
    "revision": "2aee78547480a7a1fa783a2011fb75a9"
  },
  {
    "url": "others/json.html",
    "revision": "1b3d44d47654e791becead8ffa4e4032"
  },
  {
    "url": "others/latex.html",
    "revision": "24e545539f755bdbee88aa077aabddd7"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "2c36ef72e68a8d098f41368e16d7a919"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "8da999349675bbcfcecbb83db4609409"
  },
  {
    "url": "others/lwip.html",
    "revision": "037f7f6a862ab21b9bd7e0c02adfbaf4"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "552499a595ca164d641750e7544c5ef5"
  },
  {
    "url": "others/markdown.html",
    "revision": "38fcd747d040865fe67dc3bf73b927f8"
  },
  {
    "url": "others/matlab.html",
    "revision": "4c5cdf6fa967c74929711094dd3905cd"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "f66cc99a69f74056efffcc2d438a9a62"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "acf0151c882282637497ae46b109795b"
  },
  {
    "url": "others/network-security.html",
    "revision": "7579521d69256c6c0bb6f7ddae9e93c9"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "895ebee0ddea57cef36f2040603fe72a"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "88cce692e2aa623f5a84850f2f5f2213"
  },
  {
    "url": "others/poe.html",
    "revision": "52c2ef776d9020c4cf27b233a60e73a2"
  },
  {
    "url": "others/pyside2.html",
    "revision": "07ce5c27c9830a4ec5e97cb25bb7f84d"
  },
  {
    "url": "others/python-socket.html",
    "revision": "bafef57f0ca24ac85c3ab511d05dcea9"
  },
  {
    "url": "others/python.html",
    "revision": "488e1de88f4705a531bc5c4e9ea5aab8"
  },
  {
    "url": "others/q-learning.html",
    "revision": "a3753b292e246997f98e488317d537e0"
  },
  {
    "url": "others/qr-code.html",
    "revision": "1459285e2067fb63e153219dc43deef2"
  },
  {
    "url": "others/qt4.html",
    "revision": "6569a1a40e49292bbdb27f71327faf90"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "c6770fcccc2099424e566f1856acb2fc"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "88d3e9cd7951286459412514841add2e"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "230eb749f36c2110c95261720c96c692"
  },
  {
    "url": "others/sd-card.html",
    "revision": "f2afd421f9c6afd6c1370e5690cdb6e9"
  },
  {
    "url": "others/sdn.html",
    "revision": "8e50f5da4fd6f0f1a29811c41f9fa431"
  },
  {
    "url": "others/star-uml.html",
    "revision": "bf654045dccdc3b17b7e27c629fcd9fc"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "e4006adea9a533422304d02443c62b9f"
  },
  {
    "url": "others/verilog.html",
    "revision": "2772319acb3aab9d6d352d287a42ca33"
  },
  {
    "url": "others/vue.html",
    "revision": "96fec992a00a5fcdc50ce74514ed26ec"
  },
  {
    "url": "others/w5500.html",
    "revision": "dd97f6be17a85f443aca403acb98dfb9"
  },
  {
    "url": "others/w7500.html",
    "revision": "d78ad83393436a84f0dd140c18dab4c0"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "2998edf44edbc0e9a0ed8c72bfd4c7ff"
  },
  {
    "url": "resume.html",
    "revision": "2ad87a5003a1fb4413e6bf70f38425f7"
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
