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
    "revision": "d12b473c5e8c0e7b9d130aac8b93e6bf"
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
    "url": "assets/js/12.b08b128b.js",
    "revision": "3c22059a1b37515ab13747d0bdd89801"
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
    "url": "assets/js/15.d5a93455.js",
    "revision": "cf4dcf0d8d03e25be8f479496abe65d0"
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
    "url": "assets/js/20.8611442e.js",
    "revision": "2e570be1399b15682f9a44e7b6e2b377"
  },
  {
    "url": "assets/js/21.f40529be.js",
    "revision": "5cd357e95a2123b5c8382b7ffeadf41d"
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
    "url": "assets/js/24.7c888ef3.js",
    "revision": "3be20cf4ee7bc7214c55e9aa43df469a"
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
    "url": "assets/js/29.2811c366.js",
    "revision": "e1766dce4bd1a9610ebc9b9c2528453f"
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
    "url": "assets/js/36.af0c1d06.js",
    "revision": "4854b69b53139c0df785adae88a433cd"
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
    "url": "assets/js/39.22ec9dd7.js",
    "revision": "41dab79b040920df6bfc810c54c71824"
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
    "url": "assets/js/45.d74ef2c0.js",
    "revision": "226cc9f0ddd03dc8b648a6ce58d9584e"
  },
  {
    "url": "assets/js/46.980635ea.js",
    "revision": "053ccd888428c9534f579fbf5e4af0e5"
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
    "url": "assets/js/49.c9f8c030.js",
    "revision": "0f3eb49d6d7e9e0755219a7aaf1bc089"
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
    "url": "assets/js/51.c7b9863d.js",
    "revision": "93b388c946f0387765513141ca9a8681"
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
    "url": "assets/js/57.3a49da0a.js",
    "revision": "2f778ad8cb31acd95a7858da68e8379e"
  },
  {
    "url": "assets/js/58.37acb9ea.js",
    "revision": "b51be0e93c04e1448a93e83bfffd08b0"
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
    "url": "assets/js/60.30ff10cb.js",
    "revision": "39209b32a7232df38a2b342370a0956d"
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
    "url": "assets/js/64.98d0011e.js",
    "revision": "ad7b4537da62e2e6fda5aa0aaa592d9a"
  },
  {
    "url": "assets/js/65.37017321.js",
    "revision": "3eafdaf5943fc94838dfdba27b9befbd"
  },
  {
    "url": "assets/js/66.9c7f0eab.js",
    "revision": "59094b00a16f3bef45c501d8d62f596f"
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
    "url": "assets/js/72.b93d4c05.js",
    "revision": "628895b072b56c4f3d383f4b4b32be89"
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
    "url": "assets/js/app.99d30971.js",
    "revision": "1eb4790d6833e2851130e857c0024ef0"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "25fd1d347cf7aafca4cfaa697a48b257"
  },
  {
    "url": "cs/bash.html",
    "revision": "574fa15fb1349721aa42e60ba29a3a1f"
  },
  {
    "url": "cs/cmake.html",
    "revision": "d2d20e7f374a0f25c4288e481201fda4"
  },
  {
    "url": "cs/compilation.html",
    "revision": "34ff30e3ba1901d8333792a91c9e692b"
  },
  {
    "url": "cs/index.html",
    "revision": "b92cd2694d3edcb322403f748ca93125"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "2cd6ff5103f24cf199fafd883e31a08f"
  },
  {
    "url": "ee/about.html",
    "revision": "7c20439456e157b9c5b17106987c977b"
  },
  {
    "url": "ee/index.html",
    "revision": "15c659838489fc1d836bc4e5e7c7a5ea"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "4ae07311d3e0d98d197a6409fef64cd1"
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
    "revision": "97f04128554856288d1c81f9831cd87f"
  },
  {
    "url": "others/about.html",
    "revision": "87690c7f5b34b0cc8b9e84cad1452eb2"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "024a47e212db494ff84ebea4a3553917"
  },
  {
    "url": "others/android-studio.html",
    "revision": "6e0712ff743250e7845ff3208e36afaf"
  },
  {
    "url": "others/android.html",
    "revision": "1b72c88031586396c52d680a15603251"
  },
  {
    "url": "others/chisel.html",
    "revision": "d3cd27380af0c2765a45f9129838aa44"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "f05d27596e342cc05c6e3c3e96b0d37a"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "ae42180103290725442e379b5ea8f965"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "d7ba4a2c151963d72d009bf470f0de3e"
  },
  {
    "url": "others/css.html",
    "revision": "498b68f09b5c07c35d9937ebed6e256e"
  },
  {
    "url": "others/docker.html",
    "revision": "a59b1825573767ea80ab3c419ad53023"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "e8f034d7c113280ad952f22b5c7a076b"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "0322c99f6c5d21c7ce2edc7c04fa90a9"
  },
  {
    "url": "others/english-writting.html",
    "revision": "08fa17f7135ade06566462fd8813e388"
  },
  {
    "url": "others/esp32.html",
    "revision": "38aa4909765ab0d25a7e5cdf49c1c31c"
  },
  {
    "url": "others/freertos.html",
    "revision": "dabc3ab2bf62feffa193128a32e12f5e"
  },
  {
    "url": "others/git.html",
    "revision": "dc4bc01d257a5169b528d13b5610ad50"
  },
  {
    "url": "others/gns3.html",
    "revision": "6ed4b23cdbefa9ab5062b9d701613cfd"
  },
  {
    "url": "others/gps.html",
    "revision": "93fb708f3f9269a36c3c0e4587c7b9f2"
  },
  {
    "url": "others/html5.html",
    "revision": "784db70f46af8071ea82aca0584e1201"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "9629f4f3a689f4e3ff15733533a5b0d2"
  },
  {
    "url": "others/index.html",
    "revision": "3b0a4751661546625a5af54800d79321"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "54d31c7a82ea220df246ada0bdde1e01"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "9348b0072ed62c399ca69e2282da9c1b"
  },
  {
    "url": "others/javascript.html",
    "revision": "bab7b9ee3a4f2e4cd67e1d1658b8a18c"
  },
  {
    "url": "others/json.html",
    "revision": "087404f4d3da1cfd7ee6b278e4e0020b"
  },
  {
    "url": "others/latex.html",
    "revision": "cd3aa55dde9c44b57296eecc481e1ced"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "6fcb1aba98ebbc60a50bec225a2b1e52"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "8c931e902a46ad70159fd4ed85ba35ab"
  },
  {
    "url": "others/lwip.html",
    "revision": "f7d4754344a58f7ab73320cc5c4935ae"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "067c7ecd2c9f9fd71b534b65fff99532"
  },
  {
    "url": "others/markdown.html",
    "revision": "ee133c2ab81ca8d22236f335727ed403"
  },
  {
    "url": "others/matlab.html",
    "revision": "f724fcd4bcd19c176a3bbb68f318ada0"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "d38751bfc54694a9196710ce7971a192"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "b73ab0b4b9a2eb9ab8248afc9a7c7a72"
  },
  {
    "url": "others/network-security.html",
    "revision": "3ddd4dd7bd069942afb1b3d55b12b323"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "3fee76bb10e86861ce82e697f5f9adff"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "eea0eebc85cc0b8138c6e2896abe40e5"
  },
  {
    "url": "others/poe.html",
    "revision": "ef2920611eeeb37bac1407b762bc6f7e"
  },
  {
    "url": "others/pyside2.html",
    "revision": "f4671fdd73eb77cf69c7a11429675bda"
  },
  {
    "url": "others/python-socket.html",
    "revision": "4c2c4b2103fbd238aae79ad22dbd36b0"
  },
  {
    "url": "others/python.html",
    "revision": "6acf9e4f78faa94677437590ea5d759e"
  },
  {
    "url": "others/q-learning.html",
    "revision": "dc7b75a95f722e06aee12f356ba69574"
  },
  {
    "url": "others/qr-code.html",
    "revision": "1c46e93c11362ffb94d01262aa01f981"
  },
  {
    "url": "others/qt4.html",
    "revision": "2a72a78569dfed57a2ca91071cd022f3"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "c0b0df274f316cd6055c20e1003653cb"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "6a0f614d7277571e75b401434fca0fd4"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "8462849cea2af84bf95f1fdb2b37a8d7"
  },
  {
    "url": "others/sd-card.html",
    "revision": "f69f6a31d1c60e77a5dfae506566b025"
  },
  {
    "url": "others/sdn.html",
    "revision": "0185d67b13f018703c4c88195f1660a9"
  },
  {
    "url": "others/star-uml.html",
    "revision": "c74eb9074994cfe3dd41196fdc8ea70f"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "787e23f487a2e833b10dc13a6077174c"
  },
  {
    "url": "others/verilog.html",
    "revision": "b0c21d942b7f60c8f793d0164ec05be2"
  },
  {
    "url": "others/vue.html",
    "revision": "9a356e585aa8e0e3fcceea62eb9e3517"
  },
  {
    "url": "others/w5500.html",
    "revision": "7001faf3f276df9af36e7bbd834a8348"
  },
  {
    "url": "others/w7500.html",
    "revision": "3e30715207545975554819380a388a08"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "592bee82ad05da19547e7033055b1962"
  },
  {
    "url": "resume.html",
    "revision": "2bf37a9d5962fa6e795bec577e67fb08"
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
