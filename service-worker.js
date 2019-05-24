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
    "revision": "2606331da2665e9e2ff70184c70c1e93"
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
    "url": "assets/js/11.a3425d51.js",
    "revision": "001084201cd01ab762ac6ab77b992808"
  },
  {
    "url": "assets/js/12.751b3b99.js",
    "revision": "94612c0b79c4354dbf9c984fbe5beac8"
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
    "url": "assets/js/16.1a2034af.js",
    "revision": "5eca6cd5ed35eb12b4a52b19059d56f0"
  },
  {
    "url": "assets/js/17.843018aa.js",
    "revision": "5fc92fb932d9891dd42ee9ffd7dda892"
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
    "url": "assets/js/58.0e797dfa.js",
    "revision": "a7e12bd0471e38cb0d61414085396fd3"
  },
  {
    "url": "assets/js/59.051582b7.js",
    "revision": "52fa324de40e5d121617c697f6e2b693"
  },
  {
    "url": "assets/js/6.e8498951.js",
    "revision": "3a6619094235935442b7eb05890ef1f4"
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
    "url": "assets/js/app.512f8b93.js",
    "revision": "c2276ae75592c57eacba5ae3def445c3"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "669667e9450c95eadeeca97bf88eee4c"
  },
  {
    "url": "cs/bash.html",
    "revision": "cdebdc2b07a903ee0a088656b7fa026b"
  },
  {
    "url": "cs/cmake.html",
    "revision": "9a5c203ad0fb4885f4c4ecaa7072c25d"
  },
  {
    "url": "cs/compilation.html",
    "revision": "c66d38b5ba4a7963b38d370120da33eb"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "e1e68f9056831a76f384a4c62347a5cd"
  },
  {
    "url": "cs/index.html",
    "revision": "f52984e903d82c5e3dc101eb717819b7"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "9bb1df117c9e8d623167cfb9e51316a4"
  },
  {
    "url": "ee/about.html",
    "revision": "c40b1321f7b091cce60adcf290f64c64"
  },
  {
    "url": "ee/index.html",
    "revision": "6c81fb2921b39c7bd751232311a71369"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "af0fba3a0680af1aa14a148a6117878e"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "588e6d34490bfd5594a063bf868f876d"
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
    "revision": "040f8baa62afe6a646b8dc4239d86a53"
  },
  {
    "url": "others/about.html",
    "revision": "e67e23a706b9b433f2b1134020b10226"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "1e2970be74b7698aa2611751b919a248"
  },
  {
    "url": "others/android-studio.html",
    "revision": "267b047e7ac2f1ca0ad0b9ee5537e776"
  },
  {
    "url": "others/android.html",
    "revision": "49fa206d8ff508623d6457580195f895"
  },
  {
    "url": "others/chisel.html",
    "revision": "78380ea87f86753dc4e448f5e777b363"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "19d6bfbf013196419354fd5ab9b9a5d5"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "50122e56f4342b2d0a5d504501a6035b"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "065169c34b79044b52774b21bfdfc70e"
  },
  {
    "url": "others/css.html",
    "revision": "6a7802161c0366aa77473ec9fa83fe4b"
  },
  {
    "url": "others/docker.html",
    "revision": "398c4a2d92713158f59bba0a5278e936"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "548cbc2a1215a3647f432e5209c6f61b"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "b822736f78db98ab176e15e3232cc076"
  },
  {
    "url": "others/english-writting.html",
    "revision": "3f12595977db6131e0dede9c576e09bd"
  },
  {
    "url": "others/esp32.html",
    "revision": "84698c56002bde0dbeffe9c1e61591cb"
  },
  {
    "url": "others/freertos.html",
    "revision": "2a94d9282ba4fa7eafe2ad601725ef0f"
  },
  {
    "url": "others/git.html",
    "revision": "38165b3c01368435454cb31fa2a873b6"
  },
  {
    "url": "others/gns3.html",
    "revision": "b5284bb11d06fbe67406376b621ec1b0"
  },
  {
    "url": "others/gps.html",
    "revision": "f417e9a2ce71b6684a30db02d04b9b79"
  },
  {
    "url": "others/html5.html",
    "revision": "f6f7fc8531801c37cd4fc7ee419687d5"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "d21a8104c5c56ef73057ad59ee89fc03"
  },
  {
    "url": "others/index.html",
    "revision": "ef6abadcc6de6598dbca17198ebffc2d"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "81110976b185bc21c96bad4b825b7d04"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "9a3ab325c7aa44b58f2db03968709d4a"
  },
  {
    "url": "others/javascript.html",
    "revision": "d20f029f12b569a09672360bb126ff57"
  },
  {
    "url": "others/json.html",
    "revision": "fa67b63a860e894030b3b48d9e0849cf"
  },
  {
    "url": "others/latex.html",
    "revision": "87320888e31d1227a7899f448f870a8a"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "1419cbf5bcc34578bb7b0d307d2799a5"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "740d373b5cbef8f947bfd5def0d3be54"
  },
  {
    "url": "others/lwip.html",
    "revision": "57044090e50635a4bcb472ab3d22155b"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "22ef11d63330e1650e4a179d83eec28e"
  },
  {
    "url": "others/markdown.html",
    "revision": "371ec07772631808fa311aa7ef73f391"
  },
  {
    "url": "others/matlab.html",
    "revision": "81dbc32ffcd799b821d61cfae4dd66d7"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "b9de863cb67ceb06180a9c7e261d440b"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "6f116cd7645646d391359f0e76018a42"
  },
  {
    "url": "others/network-security.html",
    "revision": "caa8097b2e1051177a269fc308af1241"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "048e7352bf756da1f90237043ecf26bd"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "3aa5efbaa3de1031015ae13a97fdd22c"
  },
  {
    "url": "others/poe.html",
    "revision": "0d527744464906563f1af9f9207ab86a"
  },
  {
    "url": "others/pyside2.html",
    "revision": "133f99f064d431740197f385d7d29e35"
  },
  {
    "url": "others/python-socket.html",
    "revision": "2b2325c1b80e886fbba0706bc7243d1a"
  },
  {
    "url": "others/python.html",
    "revision": "819df2f8ad9a1f7feaab9c20ef2bc15f"
  },
  {
    "url": "others/q-learning.html",
    "revision": "67980859af4cbe6971381c46bc32e655"
  },
  {
    "url": "others/qr-code.html",
    "revision": "e61d4c17b56d7ac0560776c6b7d72fe7"
  },
  {
    "url": "others/qt4.html",
    "revision": "7ddc3413861f144e80193f0b00b178b0"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "88d75deb1c7ab48cfa5dd4f7a214637a"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "07d1b38d1ff504fb520801e45126aaba"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "71d22f5f8993be82f7b5426d726532ef"
  },
  {
    "url": "others/sd-card.html",
    "revision": "78c769091f662ebe20b36f8fdf7c2d1a"
  },
  {
    "url": "others/sdn.html",
    "revision": "27e926d87bc2a24093b1a535e5a85d38"
  },
  {
    "url": "others/star-uml.html",
    "revision": "a1dd22d8e70b09dfcde642fc7d31c9dc"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "a28378bec6107b93a097de192b100b12"
  },
  {
    "url": "others/verilog.html",
    "revision": "3aa212d9475d02a6412430af95f34ad7"
  },
  {
    "url": "others/vue.html",
    "revision": "35afa49a15695dd96b15ff421ae402cb"
  },
  {
    "url": "others/w5500.html",
    "revision": "ed094dab0e16cfd4cbe77304398162d3"
  },
  {
    "url": "others/w7500.html",
    "revision": "7a3e41deee27872d718d8f76f3cc9a1f"
  },
  {
    "url": "resume.html",
    "revision": "2cf94e556dc8955a38993c42d006c931"
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
