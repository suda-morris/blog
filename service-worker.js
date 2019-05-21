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
    "revision": "4e26a2e04ea88f996c7f6f3d33247667"
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
    "url": "assets/js/17.8d0c5398.js",
    "revision": "ca9d124530da162922e3f12c9a900ab7"
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
    "url": "assets/js/22.8a2e17a0.js",
    "revision": "3029a134809a77328c635dfd2f74fed3"
  },
  {
    "url": "assets/js/23.3a38853b.js",
    "revision": "682174fa1b006d2fc33ffdd153c06d13"
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
    "url": "assets/js/54.0db20926.js",
    "revision": "d95279e481516391a9c548f1e6602c39"
  },
  {
    "url": "assets/js/55.dff8edc4.js",
    "revision": "cd174bc035454a1a65482254606731c6"
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
    "url": "assets/js/58.69ca4a6a.js",
    "revision": "e90f582013a77babe517bf305215bd67"
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
    "url": "assets/js/61.b1d6aeb7.js",
    "revision": "d4ecc2bb7a60d27a4c1f2f6e94f80bfa"
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
    "url": "assets/js/app.0cb2a99e.js",
    "revision": "28b1cc86e8d6a0f58b18ee48e249916a"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "5fd7070930de3f997651c0b6d13e52de"
  },
  {
    "url": "cs/bash.html",
    "revision": "90b4d9183f8f0dea92ebb2ff3e6f81f2"
  },
  {
    "url": "cs/cmake.html",
    "revision": "a1cc5cb3d2f48d1bebd2ec85850d5617"
  },
  {
    "url": "cs/compilation.html",
    "revision": "bca5b6da856d19d49ea73051e59be995"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "56d288ba15462ca932e59bb7c9cfe102"
  },
  {
    "url": "cs/index.html",
    "revision": "476ec52b52cefc476bceb73c9c6143c0"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "814f9944aa162a57b0a2355ce67a95bc"
  },
  {
    "url": "ee/about.html",
    "revision": "6561ba32ef70704c889e31b3f1a05c01"
  },
  {
    "url": "ee/index.html",
    "revision": "c0b321430110de8488f4db93457ef155"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "dbab786afd7f8dc937fa23aa05dba755"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "030de2b8d876ecd588be923c13986f93"
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
    "revision": "2c4bfc62a92659942b272109aa26a37a"
  },
  {
    "url": "others/about.html",
    "revision": "c2897f4cb3b8d9f9486df2b7ecd7dfb2"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "3ded0f617095e41dc1152200af66e559"
  },
  {
    "url": "others/android-studio.html",
    "revision": "ddd32ba70a8c33734fbbccf37588dd0b"
  },
  {
    "url": "others/android.html",
    "revision": "563d1cbd8fbbe9bc845553c06d762e59"
  },
  {
    "url": "others/chisel.html",
    "revision": "c34548fdd97cb1b7d23420e75b853fed"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "afc4296af900dfd998e28ea09a103372"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "b85032eb72f0c35db7bf05372212f101"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "643ef9d4921a2de1217b977df5255a43"
  },
  {
    "url": "others/css.html",
    "revision": "5ff4e1ff3bbca6a9cecb15624a4a83ec"
  },
  {
    "url": "others/docker.html",
    "revision": "35efa5e9f2a7413202207f1febf0ffdc"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "437acafed3874ae6fa6c0acf0206c0be"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "869d42cc1ed4af82003fa9da7f6a4af9"
  },
  {
    "url": "others/english-writting.html",
    "revision": "6c7fc0e74d215a8dab0e09a22698b955"
  },
  {
    "url": "others/esp32.html",
    "revision": "61d1b9fa52386437a4fb1d9771fb8d60"
  },
  {
    "url": "others/freertos.html",
    "revision": "c04d33c0fb52629ebdd268a2761cc179"
  },
  {
    "url": "others/git.html",
    "revision": "e847d5c1327b22a1fa94eac667d58ab9"
  },
  {
    "url": "others/gns3.html",
    "revision": "d42a71b9560909def9ba529c03194893"
  },
  {
    "url": "others/gps.html",
    "revision": "a28cd97df3f59e4e9dd909911d49fbfe"
  },
  {
    "url": "others/html5.html",
    "revision": "c6da0b0d1d2d338b4eee927901ddeca2"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "d98c89d07b626c9c0318f2157689c2b5"
  },
  {
    "url": "others/index.html",
    "revision": "7bbfdf8950eb514ec41cba7c8cb9f0bc"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "e23e633505777c2484a7a403e8ddbe9f"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "1c49839512ec291309fe4714fe0dd12a"
  },
  {
    "url": "others/javascript.html",
    "revision": "e06f800382d2a25ff66443e805be3377"
  },
  {
    "url": "others/json.html",
    "revision": "284b50eb05858a0642116a91286272e9"
  },
  {
    "url": "others/latex.html",
    "revision": "e80add6eed8006b5094d03de8a72708d"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "093db5c4d779848d464b13b83450ed8a"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "676f99953082e61868514a85426953b6"
  },
  {
    "url": "others/lwip.html",
    "revision": "a252fcf2687422720bb8b73fe9b19f7e"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "5b594c989357f169e67f21ef83d14827"
  },
  {
    "url": "others/markdown.html",
    "revision": "10107d7508f615318c38215190f571b4"
  },
  {
    "url": "others/matlab.html",
    "revision": "5052aacd801d6052c218b985261a0b6f"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "89d5c23366bfe10826e82ce3f1dd313e"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "0844ab1211d207d1e9edd19b3d84bd46"
  },
  {
    "url": "others/network-security.html",
    "revision": "435468599e545c62bac7fd978aa3ab83"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "7ba5c6e00483ee70523cf4ceb5014df9"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "aa0b01dca956d594b24b7e120b313ba4"
  },
  {
    "url": "others/poe.html",
    "revision": "ad174cb5ec3b29c3f4a7c0c9184b327e"
  },
  {
    "url": "others/pyside2.html",
    "revision": "7893fe0811ae5032fb6773803f44e34d"
  },
  {
    "url": "others/python-socket.html",
    "revision": "1ff3f1f2e6d90b70e97771bf47eb2b94"
  },
  {
    "url": "others/python.html",
    "revision": "48bed3a226be45bb3ffd250b5d9ab472"
  },
  {
    "url": "others/q-learning.html",
    "revision": "47fb0b556193f74cb983cc1dbc9acb9b"
  },
  {
    "url": "others/qr-code.html",
    "revision": "ab820af8bc4a89d9616c140291294c3e"
  },
  {
    "url": "others/qt4.html",
    "revision": "000a3b3090bc0af491b51ce476005385"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "f1f1f9c3d545f90fb9122be7e7c37b79"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "491e19659f02a033d651586c5b78596a"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "97fcb538585ff8c4bc8be65a6697fde4"
  },
  {
    "url": "others/sd-card.html",
    "revision": "02523f79576367eec47f6c12c4389ad8"
  },
  {
    "url": "others/sdn.html",
    "revision": "0b71c97f9fcfff06c6ec4c7da8f5fec0"
  },
  {
    "url": "others/star-uml.html",
    "revision": "50c2cb39f4e79e8af6f4f01ec4fc2837"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "2d6e0e1f8816f15f52b5294e6276395c"
  },
  {
    "url": "others/verilog.html",
    "revision": "6ff7499affde0005f26c55cfb4fcbfd6"
  },
  {
    "url": "others/vue.html",
    "revision": "153d8f1f9712e6dfe8fa4debbfdbe73a"
  },
  {
    "url": "others/w5500.html",
    "revision": "7c35b2302982339ac00c7ceddee22c02"
  },
  {
    "url": "others/w7500.html",
    "revision": "f3a955ac1c8b87af822f408d0fbdfb6d"
  },
  {
    "url": "resume.html",
    "revision": "fba0c2f446ea5a29814d941340acca5c"
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
