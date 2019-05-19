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
    "revision": "e1ee47838c96136960fdf89feb2577b0"
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
    "url": "assets/img/iterator.a7ae1d2a.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "assets/img/logistic_regression.4ef370cc.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sigmoid_function.24758bff.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
  },
  {
    "url": "assets/js/10.efac9755.js",
    "revision": "4483ec37e96e53333a8642bc5914896f"
  },
  {
    "url": "assets/js/11.573860ff.js",
    "revision": "755c7a820db4230b0de28549e27fade4"
  },
  {
    "url": "assets/js/12.015d593a.js",
    "revision": "cbd0b2a84a9381e284f95e34b69f8b26"
  },
  {
    "url": "assets/js/13.56a931ad.js",
    "revision": "ca3269555ed71c320499606d27c33144"
  },
  {
    "url": "assets/js/14.1b12c03c.js",
    "revision": "3c33ac03848ea3a6629573bc054a4656"
  },
  {
    "url": "assets/js/15.f7bd023e.js",
    "revision": "e039f510bbf6a5f6688216a0af0f5623"
  },
  {
    "url": "assets/js/16.450ce983.js",
    "revision": "4994d550c64876b43491147c06df4c05"
  },
  {
    "url": "assets/js/17.e8111a06.js",
    "revision": "6af577060852da5e6f0f2e892c18c496"
  },
  {
    "url": "assets/js/18.43c78ab3.js",
    "revision": "be6b5f4d720d82591d7a946ed1480a37"
  },
  {
    "url": "assets/js/19.47431242.js",
    "revision": "04cd83c4edd6c7232fc61908b47e85bb"
  },
  {
    "url": "assets/js/2.55766845.js",
    "revision": "f58b563b2d9c0234d69ad932edf397b8"
  },
  {
    "url": "assets/js/20.21c50372.js",
    "revision": "130e8b206855a67fa6f67d19e5bbb740"
  },
  {
    "url": "assets/js/21.874c93d0.js",
    "revision": "6a18a8f0d49db09be334a11405394173"
  },
  {
    "url": "assets/js/22.dd43ed73.js",
    "revision": "7a71ed4ed668d09bac8cf0fa3a475229"
  },
  {
    "url": "assets/js/23.14e225f0.js",
    "revision": "60eda06bb4301a24a32c98e76ec67a6c"
  },
  {
    "url": "assets/js/24.7b6171ce.js",
    "revision": "e3a78ccf4438ae1bdbc82c9ff6bb4252"
  },
  {
    "url": "assets/js/25.34c867db.js",
    "revision": "91ed1d5bae52b5f31824e0553e43aa05"
  },
  {
    "url": "assets/js/26.0347903f.js",
    "revision": "889d98791fae78cec23acc70d74a745a"
  },
  {
    "url": "assets/js/27.6b18d5b9.js",
    "revision": "963104c1338a0e8713ff6db6ceb4f893"
  },
  {
    "url": "assets/js/28.36ed5059.js",
    "revision": "3a43d0c1647a528aa08926c06d6cb540"
  },
  {
    "url": "assets/js/29.119a039a.js",
    "revision": "ac620a833e80df756eb171089f0a7897"
  },
  {
    "url": "assets/js/3.bdd9f9c8.js",
    "revision": "86ff8a0a3591d11be4cb777a276c9088"
  },
  {
    "url": "assets/js/30.88e34003.js",
    "revision": "a0856b9fd8a583e306dabf8a18708f25"
  },
  {
    "url": "assets/js/31.72c2b4eb.js",
    "revision": "9f728a41515148840d326c764be6d14c"
  },
  {
    "url": "assets/js/32.f757e439.js",
    "revision": "d938f64893a64b421a61b766dceccb28"
  },
  {
    "url": "assets/js/33.e2d47802.js",
    "revision": "a0e65f51a570a871dc3a9f1ac4f5f789"
  },
  {
    "url": "assets/js/34.e3583d86.js",
    "revision": "fdc099a565d6daab19a7e893756b4ef4"
  },
  {
    "url": "assets/js/35.3e8035b3.js",
    "revision": "d7c3c16ac8d44097d6142660fbf268a6"
  },
  {
    "url": "assets/js/36.dd7189b0.js",
    "revision": "daf4df790a27b28c5c3a4f1f971d5231"
  },
  {
    "url": "assets/js/37.22fc291e.js",
    "revision": "0e9e53f7dc442c88c70cddeae62c74aa"
  },
  {
    "url": "assets/js/38.9dae8763.js",
    "revision": "4cb70f70e35dcac6bd43b52d0a47e0e5"
  },
  {
    "url": "assets/js/39.cd467148.js",
    "revision": "adad96f1774746c247c83c9c2cbef0f7"
  },
  {
    "url": "assets/js/4.aefa4001.js",
    "revision": "973479c81ea42a9d01400c3c1696d087"
  },
  {
    "url": "assets/js/40.6ec841f1.js",
    "revision": "464be619be48ac1a72531955a95caf4b"
  },
  {
    "url": "assets/js/41.66d6962e.js",
    "revision": "0912cbb978022f5cfd291711a399ca00"
  },
  {
    "url": "assets/js/42.95ae3803.js",
    "revision": "245b835c45e307e265086a497d133ad6"
  },
  {
    "url": "assets/js/43.15de53b9.js",
    "revision": "c0b4b790406d91f2714f512fb411d973"
  },
  {
    "url": "assets/js/44.0317d3ef.js",
    "revision": "0e5302a205d0d927bd60354bb95d8ae7"
  },
  {
    "url": "assets/js/45.798596ba.js",
    "revision": "c896fd4835e91e4b07704ea101fc4ccb"
  },
  {
    "url": "assets/js/46.679139af.js",
    "revision": "cdbe9e960fce6a88267dee0150b15fea"
  },
  {
    "url": "assets/js/47.c1274e9a.js",
    "revision": "12adfc44d713c44583622a41f426096d"
  },
  {
    "url": "assets/js/48.3024ecc6.js",
    "revision": "2d9ba65aadfa9a446707de9e7a542bfe"
  },
  {
    "url": "assets/js/49.861a16ba.js",
    "revision": "49fd101e54db07928b948bbb67da074d"
  },
  {
    "url": "assets/js/5.ad0ca43c.js",
    "revision": "4b6cce9c1fada924823949e2653e954f"
  },
  {
    "url": "assets/js/50.1ba3658b.js",
    "revision": "56985a8623c548c86f2059e189d29af3"
  },
  {
    "url": "assets/js/51.bde45d38.js",
    "revision": "279d65a5897adf85d08e2ab42fa2de6e"
  },
  {
    "url": "assets/js/52.af91c1b2.js",
    "revision": "8cb3dc68c2dde13e73fa0efe518aa72f"
  },
  {
    "url": "assets/js/53.e132e379.js",
    "revision": "23e84ddac278f809ba59e648ffd8b17e"
  },
  {
    "url": "assets/js/54.c06fd0b8.js",
    "revision": "68b3f47221b83d0a538f14809419dc64"
  },
  {
    "url": "assets/js/55.8a4c8768.js",
    "revision": "fdc67f1a012dc1afc83cd474850973d3"
  },
  {
    "url": "assets/js/56.5095f5f0.js",
    "revision": "8abc01e914bb4f20389b7ea7c5a03582"
  },
  {
    "url": "assets/js/57.32612f8d.js",
    "revision": "377b3b3f851a0e83627522ef8cdf870f"
  },
  {
    "url": "assets/js/58.0e797dfa.js",
    "revision": "a7e12bd0471e38cb0d61414085396fd3"
  },
  {
    "url": "assets/js/59.051582b7.js",
    "revision": "52fa324de40e5d121617c697f6e2b693"
  },
  {
    "url": "assets/js/6.9c814f8b.js",
    "revision": "2a1169470c334a0eb2d784d118224df9"
  },
  {
    "url": "assets/js/60.7bd1bd7b.js",
    "revision": "5b172564fcae8a22c3711f4048d6f396"
  },
  {
    "url": "assets/js/61.eb6863a7.js",
    "revision": "666bb2f0fd80ba3454b0681c6cab12ab"
  },
  {
    "url": "assets/js/62.431190fe.js",
    "revision": "5d12884ae6f69ae4c0c9c1fc856df357"
  },
  {
    "url": "assets/js/63.a53760d2.js",
    "revision": "03c17e81b975e2b896ad2a181fa57ddc"
  },
  {
    "url": "assets/js/64.1dd54c5c.js",
    "revision": "fef9c17770f9fe25f3ea9d8f7b2e09a5"
  },
  {
    "url": "assets/js/65.9f34e786.js",
    "revision": "d57d66aa93b385cd2ee3a873476d8d73"
  },
  {
    "url": "assets/js/66.e770164c.js",
    "revision": "8c7e2d2aedb460a6325572ae966f9909"
  },
  {
    "url": "assets/js/67.78af2598.js",
    "revision": "91f565ffcc2cca51437b8a57665b6ee4"
  },
  {
    "url": "assets/js/68.42bdd3d8.js",
    "revision": "9aeaef661f45b1a496985c9103207cde"
  },
  {
    "url": "assets/js/69.a4342b45.js",
    "revision": "4dc069bf0ffd3abd7f76b0f8d44b5751"
  },
  {
    "url": "assets/js/7.1265e282.js",
    "revision": "22620a1f5c010cd1ca65ea77694fa9f2"
  },
  {
    "url": "assets/js/70.27694e0f.js",
    "revision": "35621ebd84933fba9c84af1629b8802d"
  },
  {
    "url": "assets/js/71.ffa7b1be.js",
    "revision": "31cf05fb3a75d69927051c081c29cc8d"
  },
  {
    "url": "assets/js/72.2897ef71.js",
    "revision": "aec5ed309f1faf31848beb59fbcbb8da"
  },
  {
    "url": "assets/js/73.c4d92771.js",
    "revision": "61dd0954cb95776d139da292ce77961a"
  },
  {
    "url": "assets/js/74.80d3f73b.js",
    "revision": "69f6773594a6df337ed2a310d1c8b8dc"
  },
  {
    "url": "assets/js/8.3261deed.js",
    "revision": "1f898e5471be28b2378cb4603ce2f5ad"
  },
  {
    "url": "assets/js/9.9e76531c.js",
    "revision": "a13d3b8fc299dde83e8471bafc380f41"
  },
  {
    "url": "assets/js/app.56c7ffff.js",
    "revision": "45a8dc710849608418dd2142f3eef1ba"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "acc127c5f6447f018ba37d9527dd29d7"
  },
  {
    "url": "cs/bash.html",
    "revision": "b1d55f748160a3ec80916c563c56c1b8"
  },
  {
    "url": "cs/cmake.html",
    "revision": "3fe95401c0a91cc5401676a718b02baa"
  },
  {
    "url": "cs/compilation.html",
    "revision": "eb640a74e8e3f44ff3d57b4bfeae8d1e"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "6d3fdc9664588396de9e7bb185337e83"
  },
  {
    "url": "cs/index.html",
    "revision": "b43bdef22cba9360377d30436490b3b8"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "90597e6544e0d55d585b699949ae8850"
  },
  {
    "url": "ee/about.html",
    "revision": "437f4649cf1474bcc5bee37438384afc"
  },
  {
    "url": "ee/index.html",
    "revision": "c32a3ec5d8ddbc1651cabb2a8ea75a84"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "2c65f1c7c6e9434dbfbb68be42133d71"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "97766988572ef7fbd090e94f68ddf8db"
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
    "revision": "dc4d86f94d6973b0e88f6136eb2305e2"
  },
  {
    "url": "others/about.html",
    "revision": "4e413a80d4f54174892146e2fa49344c"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "517db61800eb9cb33919d02d90d72f06"
  },
  {
    "url": "others/android-studio.html",
    "revision": "2ee6a7ef6042bedfc28f6440a33908a5"
  },
  {
    "url": "others/android.html",
    "revision": "77b18b0f9c20d2d6804c02530cd2c1c8"
  },
  {
    "url": "others/chisel.html",
    "revision": "43d8d5c5f315c7f53a8bce0704fed07c"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "c9acf3140deaf2bec7b377fde228e495"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "e5abcc048c3f9997e3ec37825aa44e15"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "9c70cc7fb0aa0b2ae1693d5240e1e7dd"
  },
  {
    "url": "others/css.html",
    "revision": "60453493cfdba037f793d825031a0884"
  },
  {
    "url": "others/docker.html",
    "revision": "b672a14f347056e1df5f4db378aa4b90"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "c8dbd69bb90a1ebfbc39218bde7b702a"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "4984478ba92a4780fd1f65d9c3efdb00"
  },
  {
    "url": "others/english-writting.html",
    "revision": "6c6e231df43bb7a35e3dbd320677e9b8"
  },
  {
    "url": "others/esp32.html",
    "revision": "5ce84d0055d59d849754b3a3b001e450"
  },
  {
    "url": "others/freertos.html",
    "revision": "e93f51efe32090e05bf05955725dfbb3"
  },
  {
    "url": "others/git.html",
    "revision": "f0450f46b8509769ebe523f648f4ce84"
  },
  {
    "url": "others/gns3.html",
    "revision": "33ab11e584e977ce99386dac2823f9bd"
  },
  {
    "url": "others/gps.html",
    "revision": "cdc52bbc51b74edf6a046431c5d7408c"
  },
  {
    "url": "others/html5.html",
    "revision": "62810f4196e5424f3925464268c8542f"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "68eec2e0c6f5f57c37343155f97b09d9"
  },
  {
    "url": "others/index.html",
    "revision": "0631e49f673f068029e257bb05343068"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "a86a0784b5bd143c4895779268f089ff"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "a2cc7a82f1bb038c4f9b098641ec7a19"
  },
  {
    "url": "others/javascript.html",
    "revision": "9c4bde941516eed927e30371c0f337d8"
  },
  {
    "url": "others/json.html",
    "revision": "e5558b88f3136a1777e74dc32e40f9a0"
  },
  {
    "url": "others/latex.html",
    "revision": "9984a149ce06785d5bdf4e75336f8919"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "6846ff8208e73576bdfdc01a67104f79"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "0f600c4dad6e7833b1b5517997258c1e"
  },
  {
    "url": "others/lwip.html",
    "revision": "ca823392b658b1eda1b81cb28ff1ba52"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "fdb30031fd13d2c88a509c38eacc3cae"
  },
  {
    "url": "others/markdown.html",
    "revision": "41fdd181cea6633373e5bb708e788d6c"
  },
  {
    "url": "others/matlab.html",
    "revision": "65bae951d629551d0c5d608d302e42f1"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "f7026e39318b6e86228f64635019fe27"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "ce7310642f7a0245069c1c785a946907"
  },
  {
    "url": "others/network-security.html",
    "revision": "09d1a1ab1dacec851b118a9b1381ca20"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "510cbdf5d0ce0f91a6ac2283298ce154"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "15f5c4d843ecee01bb6a70cfb4c74623"
  },
  {
    "url": "others/poe.html",
    "revision": "5894f58e1c9ec3b82c8317712785f000"
  },
  {
    "url": "others/pyside2.html",
    "revision": "29cb9eb44c697eb26bea75ff4e8ce249"
  },
  {
    "url": "others/python-socket.html",
    "revision": "96e00abd96008ae369a5a67d5fb67601"
  },
  {
    "url": "others/python.html",
    "revision": "96b5cd5d3ac666515a831d7ec76b9712"
  },
  {
    "url": "others/q-learning.html",
    "revision": "add7ce3c0fcf244b4ac38a0eed30cf61"
  },
  {
    "url": "others/qr-code.html",
    "revision": "6f7e9da3dde8b026192ef017d72314fe"
  },
  {
    "url": "others/qt4.html",
    "revision": "a106a45beb4b79ae8cdc6605a4097f21"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "e826be943521bfcb71a1315b6b946b32"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "b19d2a51c0242a5d1d3cbdc0c3696ccf"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "60af9e6b401f9cdbacf8e8fefb024743"
  },
  {
    "url": "others/sd-card.html",
    "revision": "32562bf6fe9500e1b02e636f93e037e2"
  },
  {
    "url": "others/sdn.html",
    "revision": "8e41aab2f74a985c35e4ec438b2c6d49"
  },
  {
    "url": "others/star-uml.html",
    "revision": "e830cd5b026442446af29848ba5b583f"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "5d485478109eecbc9c2192096e7690b6"
  },
  {
    "url": "others/verilog.html",
    "revision": "36065949cf4c3dac21f4d8d335e428dc"
  },
  {
    "url": "others/vue.html",
    "revision": "d672896df07bf226e10f41f03afd8a71"
  },
  {
    "url": "others/w5500.html",
    "revision": "eb5478c5e4af5040326f04ce9cf6baa8"
  },
  {
    "url": "others/w7500.html",
    "revision": "5c893789600c1417fcf5e0ddfd4e9e16"
  },
  {
    "url": "resume.html",
    "revision": "6c9e99ea418e534f87e1bbe573edf8bf"
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
