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
    "revision": "7ceeceb152f675c0eedfc3295637217e"
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
    "url": "assets/img/iterator.607010e6.png",
    "revision": "607010e61637f5b4bba5be0fe506535b"
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
    "url": "assets/js/13.e2b4b4fc.js",
    "revision": "b702196e11cd11486713df40a0ca3fdd"
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
    "url": "assets/js/16.1a13a71b.js",
    "revision": "6edb7365e8a529a16440e35d41d1866d"
  },
  {
    "url": "assets/js/17.152ecb75.js",
    "revision": "dcf1bc0171895c58b2b9ae6c76407118"
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
    "url": "assets/js/20.220388fa.js",
    "revision": "9a183eab14a58380ec639a4d0a5556bc"
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
    "url": "assets/js/25.640454a0.js",
    "revision": "91ad3e29b617535cb89272f4c58c6db3"
  },
  {
    "url": "assets/js/26.0347903f.js",
    "revision": "889d98791fae78cec23acc70d74a745a"
  },
  {
    "url": "assets/js/27.29e8f6cb.js",
    "revision": "c4945b2330255ce8f75e689b7670e745"
  },
  {
    "url": "assets/js/28.ffd7aa3b.js",
    "revision": "46efc07105b1e450a83b4b0576e3ce75"
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
    "url": "assets/js/44.0726f9b0.js",
    "revision": "b4927d71ce983f34b51a207982e60255"
  },
  {
    "url": "assets/js/45.798596ba.js",
    "revision": "c896fd4835e91e4b07704ea101fc4ccb"
  },
  {
    "url": "assets/js/46.cabc4cc5.js",
    "revision": "75fb7c7d5aa2723c68d81987f3b87ae8"
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
    "url": "assets/js/52.437846eb.js",
    "revision": "ade894462bf884a64e0293469bb02a83"
  },
  {
    "url": "assets/js/53.e132e379.js",
    "revision": "23e84ddac278f809ba59e648ffd8b17e"
  },
  {
    "url": "assets/js/54.7678a798.js",
    "revision": "24261d6d6759821a100bbd07becdba20"
  },
  {
    "url": "assets/js/55.8d3b29ab.js",
    "revision": "2fe7c8f4c70eca86f96824f347b19f47"
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
    "url": "assets/js/6.df8090ce.js",
    "revision": "2d32bbe60814912e34efe6256106f8c9"
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
    "url": "assets/js/63.d04d6ba3.js",
    "revision": "4dbcadc7c1a61e0c2e55138afd19b1b8"
  },
  {
    "url": "assets/js/64.dec0ba74.js",
    "revision": "f687ff5cb9dc4467920e4a0ba4cd8b39"
  },
  {
    "url": "assets/js/65.6d54a20f.js",
    "revision": "913fb9da00e576323f9881824cbdcbde"
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
    "url": "assets/js/70.13da06fa.js",
    "revision": "a9dc6045c3d0a4bd2001ae21de071459"
  },
  {
    "url": "assets/js/71.ffa7b1be.js",
    "revision": "31cf05fb3a75d69927051c081c29cc8d"
  },
  {
    "url": "assets/js/72.658f36ab.js",
    "revision": "1bbd8b7d77ee4889f53cab539889a503"
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
    "url": "assets/js/app.929f4efc.js",
    "revision": "58a613d3be7c9a5d93063976ce79c7f6"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "8d855bb8a109bb714b017529ffa61953"
  },
  {
    "url": "cs/bash.html",
    "revision": "a3e5331f2bfa834f52cb8d57278f392f"
  },
  {
    "url": "cs/cmake.html",
    "revision": "b0bc7a9143dd3a17418942a4d2481480"
  },
  {
    "url": "cs/compilation.html",
    "revision": "7b700cba84edb694ceaef332249d268f"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "df1ad3c8405425ef1d58424aad119dfa"
  },
  {
    "url": "cs/index.html",
    "revision": "b6e2ae5b5a0d09b7b03bda74cbbca867"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "1f12a944b4e1e1266dc1079b25c26c42"
  },
  {
    "url": "ee/about.html",
    "revision": "b49f24cae568db4f3b6ce277da28a61d"
  },
  {
    "url": "ee/index.html",
    "revision": "ac1a4e7020775bb0715dfd8577189d09"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "c21d52130822be8e5a694e0c6fcca05e"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "74c70a03ddfe5a1828a95edd58509a98"
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
    "revision": "607010e61637f5b4bba5be0fe506535b"
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
    "revision": "1acc9daf91e9c07fe14449549f8b31b8"
  },
  {
    "url": "others/about.html",
    "revision": "733e1d12e5bca1ba8bbe666561d3a43c"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "9a3d22716d2f564124d6e669c8a47b73"
  },
  {
    "url": "others/android-studio.html",
    "revision": "a9d906f8b48f34b02e7bc9d44a54d740"
  },
  {
    "url": "others/android.html",
    "revision": "0f6c258e32c8a58a3912bdff8f45f64e"
  },
  {
    "url": "others/chisel.html",
    "revision": "3584ed2f5b6a1a5c866733ac44f104b2"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "575cfa3f0d9aee63de48333c52602252"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "83dcc9c25b688dd8baf2099853235b65"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "af31359c40790d1c010abac6b2a17a3d"
  },
  {
    "url": "others/css.html",
    "revision": "9f35cb872aeace0d9cb5fc00ae0285a1"
  },
  {
    "url": "others/docker.html",
    "revision": "10da29fb0eeb20ab1843a6e770f8a230"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "5895845b6e15cc526936e3b32a45059a"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "ee89acdf2e649e90677f5b93e03e66a2"
  },
  {
    "url": "others/english-writting.html",
    "revision": "698b757ac55ae718ff6bd434fbd9b75a"
  },
  {
    "url": "others/esp32.html",
    "revision": "e66e86b41b5c8a5a311d64953058fbd6"
  },
  {
    "url": "others/freertos.html",
    "revision": "2529155a263dc95a6a1ea65a72ef2b66"
  },
  {
    "url": "others/git.html",
    "revision": "c8c8ad76baa877a7588f84780bc0ceeb"
  },
  {
    "url": "others/gns3.html",
    "revision": "3113e7e8fc7bdd2635e38f168b2aabe1"
  },
  {
    "url": "others/gps.html",
    "revision": "f11b6ed2fc21946fcdb798f617e0c3bd"
  },
  {
    "url": "others/html5.html",
    "revision": "d5f27d04183ce2b1fec724dce7cb3f25"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "a7fdaa338f01cfb42098a80e7c75d694"
  },
  {
    "url": "others/index.html",
    "revision": "3408a9143b54494a420b1ba9c632f160"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "8bf24c2da7b34af8ed36e0118eb65eeb"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "4b41ed45012c4effc26f8ab35596e2d5"
  },
  {
    "url": "others/javascript.html",
    "revision": "638bca3bf6a298a209a3c71433589f18"
  },
  {
    "url": "others/json.html",
    "revision": "7235cb05ae9e9cf77107c0254b7d84dc"
  },
  {
    "url": "others/latex.html",
    "revision": "22aaaab543afc0f5c9ace10acb7566e9"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "62981d1072f6c9f25300491c29944e49"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "8fd1cafa8aabdbc19e974ebb93ff3d97"
  },
  {
    "url": "others/lwip.html",
    "revision": "5980e2c1617b33d47253f7141886364c"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "d9b70a3eb003cc73c1ea0f7fe69292ba"
  },
  {
    "url": "others/markdown.html",
    "revision": "539b14af2d47b96ecc9c9ab6d292932c"
  },
  {
    "url": "others/matlab.html",
    "revision": "fe10c9a5a723d7d74d39adea1698caea"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "7785039ccb257bc9fdc0761b25ea7353"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "105d5b8b22230d4368df24dc06137ac0"
  },
  {
    "url": "others/network-security.html",
    "revision": "cce1a75b8b608b9468544a06c6bad7f7"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "d47a595005af6dd06845fda23fa1c7b7"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "19bf99d63509930fbb5647a3af404c97"
  },
  {
    "url": "others/poe.html",
    "revision": "c96552b0be3e06ebb423a770db0308a3"
  },
  {
    "url": "others/pyside2.html",
    "revision": "15016751e1a28c39138d25893b7a4902"
  },
  {
    "url": "others/python-socket.html",
    "revision": "610cf89d4c466d7d86def9f85c77f7c3"
  },
  {
    "url": "others/python.html",
    "revision": "e118b92d1491ac5c6bcf050809850a03"
  },
  {
    "url": "others/q-learning.html",
    "revision": "d495bcbee21e9c112f88b2b84a0bd218"
  },
  {
    "url": "others/qr-code.html",
    "revision": "49dc048fb741f5394e3f15dd91e785da"
  },
  {
    "url": "others/qt4.html",
    "revision": "0180862c0ccd0023bcccc6d9ba95fb1a"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "d78ae6e4a0878dc34733fd32221d148f"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "fc9e7be63850a1d3cf30d639cc50bb62"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "5629b799bc93a7d7f77ba98ffdf4dbce"
  },
  {
    "url": "others/sd-card.html",
    "revision": "62d5eecb8a74084323131731c58e9e35"
  },
  {
    "url": "others/sdn.html",
    "revision": "e15439d7abb66d6b9d4ab78574a30730"
  },
  {
    "url": "others/star-uml.html",
    "revision": "77314a383e3e36b159a253a6424663f5"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "04dc0e13d9a5db81fcf5165e1044119a"
  },
  {
    "url": "others/verilog.html",
    "revision": "5f58bec4350bb3aee1413d59e6206e3d"
  },
  {
    "url": "others/vue.html",
    "revision": "6e49d0327dd4ccc4f9eb6b1ddfeb4399"
  },
  {
    "url": "others/w5500.html",
    "revision": "7bfa88150ecd46edb6f6dd124d3f6eaf"
  },
  {
    "url": "others/w7500.html",
    "revision": "11885c52ee050f347f5f4f8eb860eba0"
  },
  {
    "url": "resume.html",
    "revision": "a0a8ec7071f0de0efed9087e731e99e7"
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
