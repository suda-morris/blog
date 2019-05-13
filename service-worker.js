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
    "revision": "e733fb18005bbcf8cc859699e82d8845"
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
    "url": "assets/js/16.fd91ba36.js",
    "revision": "3f856a3f2cc08c915cb3d519391142ab"
  },
  {
    "url": "assets/js/17.fcb7a325.js",
    "revision": "7f34ff40b345f4c83d7806e00d208259"
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
    "url": "assets/js/20.d0d808d1.js",
    "revision": "bca6767952bc59af9567e2dc4e3eaa15"
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
    "url": "assets/js/25.640454a0.js",
    "revision": "91ad3e29b617535cb89272f4c58c6db3"
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
    "url": "assets/js/52.af91c1b2.js",
    "revision": "8cb3dc68c2dde13e73fa0efe518aa72f"
  },
  {
    "url": "assets/js/53.e132e379.js",
    "revision": "23e84ddac278f809ba59e648ffd8b17e"
  },
  {
    "url": "assets/js/54.2562fb86.js",
    "revision": "9ca6d14331c73f21e874c0c61bd3a4fd"
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
    "url": "assets/js/63.a53760d2.js",
    "revision": "03c17e81b975e2b896ad2a181fa57ddc"
  },
  {
    "url": "assets/js/64.dec0ba74.js",
    "revision": "f687ff5cb9dc4467920e4a0ba4cd8b39"
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
    "url": "assets/js/app.35560576.js",
    "revision": "d7acfcb00023efb471cb86e22dbd3393"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "db84b9f48fda13a12406645d7efd3e46"
  },
  {
    "url": "cs/bash.html",
    "revision": "14c1dff19e120d5977b01004d4233bd5"
  },
  {
    "url": "cs/cmake.html",
    "revision": "4765119d675a4df186c4fc2639d55c4f"
  },
  {
    "url": "cs/compilation.html",
    "revision": "cf91a921a5ea4aa11e999469f4d3156b"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "88d18bfc7b09bb37be298375f42c5637"
  },
  {
    "url": "cs/index.html",
    "revision": "7608c772d7e81b1e7d2e4510a931f394"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "6d3f2af66831353e97aadc4136630356"
  },
  {
    "url": "ee/about.html",
    "revision": "e9e0c33f4c5306a0b5bf3030df49afa3"
  },
  {
    "url": "ee/index.html",
    "revision": "6715f3f08aba011b94422b23d12829e1"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "70189de1545c1474e5ee9b490487b187"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "cef65885b7fca06c702b383e4c5df119"
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
    "revision": "f5ad6b9f5073c3432447639577bce4f0"
  },
  {
    "url": "others/about.html",
    "revision": "acd5b7cc459d3d5c4f75b17b270053f0"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "ccb42cd0eb3e1818395b628b18f3ea95"
  },
  {
    "url": "others/android-studio.html",
    "revision": "03e19203aa01182bf5cc47829041f837"
  },
  {
    "url": "others/android.html",
    "revision": "8350daab61c671a0376d7702438c4368"
  },
  {
    "url": "others/chisel.html",
    "revision": "bee98dd149246350d773773ae88f42d9"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "b99a4133199d2160c434f398063dad4e"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "f68b932f0e98ed52e9cd1ad31cfd1123"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "e60f888ee6da5d68663b79aa94be80e9"
  },
  {
    "url": "others/css.html",
    "revision": "a0dc094a2e126240bd4cddba46d1778a"
  },
  {
    "url": "others/docker.html",
    "revision": "7722ee2f4d39fce1e8b57559adcbe06d"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "b82129718d19c8b52f843cfa566495b9"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "56936d1410bb8846c11a530bd8818c4c"
  },
  {
    "url": "others/english-writting.html",
    "revision": "2faa467034e1be920d5dd545e3e9c125"
  },
  {
    "url": "others/esp32.html",
    "revision": "32d3b10aba896cf63265c64d9794c064"
  },
  {
    "url": "others/freertos.html",
    "revision": "18cd02feaaaf56f3338042c0a1daa0e6"
  },
  {
    "url": "others/git.html",
    "revision": "0f97fe2b9c3c50ddbfa915c9157186e5"
  },
  {
    "url": "others/gns3.html",
    "revision": "c5856a2300e03eb3ab46b1b3105002d6"
  },
  {
    "url": "others/gps.html",
    "revision": "2fd5b89484bb770d6b238fdfd09a85cf"
  },
  {
    "url": "others/html5.html",
    "revision": "b198b800960419df0d620f1afef87827"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "2b3b930a0abd98f4c5d0c2dc6ee782c7"
  },
  {
    "url": "others/index.html",
    "revision": "17f3499a448649cd5a01038c57a40a21"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "fed827fe41fe8e743a4ac342034c4df8"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "bc157c4046f6d007b6fca5fd08e19d80"
  },
  {
    "url": "others/javascript.html",
    "revision": "237094e3153f5e1dfa04c749fae1f012"
  },
  {
    "url": "others/json.html",
    "revision": "548295f3d9c33c6d5eae80e4d78f9483"
  },
  {
    "url": "others/latex.html",
    "revision": "4f520216f6e1caaf8cd056b5be182b54"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "12f8aa243340b20e7cbd54203d835a74"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "f55808b4d787e833e04ac3e57e14ddfc"
  },
  {
    "url": "others/lwip.html",
    "revision": "31cf02806a6ab0394eab7b4064a290ef"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "b66366f460176044b886cd48c699523a"
  },
  {
    "url": "others/markdown.html",
    "revision": "807dee29a67ccdd26fac00466041541a"
  },
  {
    "url": "others/matlab.html",
    "revision": "052b410194e36b845f67c7af8b278f3b"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "c51b7a0b40b018f42098c41eb25e7575"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "c924c3408bbe7206fbaad5c9bbed312c"
  },
  {
    "url": "others/network-security.html",
    "revision": "e6f8a877f28b6c7c339ae8f4a9cfdbff"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "44824393ce72a950e355ad994ff8ae5c"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "b474e51e9dffe85f2f1abc95354deb25"
  },
  {
    "url": "others/poe.html",
    "revision": "819b9e880157d127915f2e454e95c454"
  },
  {
    "url": "others/pyside2.html",
    "revision": "000916fcee2ad350562de439167925fc"
  },
  {
    "url": "others/python-socket.html",
    "revision": "ec378a03a811a2ae1f0986a216591b23"
  },
  {
    "url": "others/python.html",
    "revision": "da4f27b0333822dcc6fca33a73a0654e"
  },
  {
    "url": "others/q-learning.html",
    "revision": "355e7f4718d48d506d6b7d8f06c30a53"
  },
  {
    "url": "others/qr-code.html",
    "revision": "61c67dd9012859e615be454de9ad8443"
  },
  {
    "url": "others/qt4.html",
    "revision": "330a1367eca7a110297e2bcaa6c74e57"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "03b764d27d47af269169ceca07390617"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "79203f56554bde9ce2095442c988ec1a"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "e6d17c873757a467bdbea575ade6272d"
  },
  {
    "url": "others/sd-card.html",
    "revision": "136e25437668979f4da2e470865e86e2"
  },
  {
    "url": "others/sdn.html",
    "revision": "8551c2aa89550692ac0d5a15f95263ef"
  },
  {
    "url": "others/star-uml.html",
    "revision": "14a875a433bd53c01b6d6a3feb3e5af5"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "01955acf7dff2dd662d1f8c442f7bf3f"
  },
  {
    "url": "others/verilog.html",
    "revision": "bfabd16283490d9322400bd8de27bc63"
  },
  {
    "url": "others/vue.html",
    "revision": "1a5c7985b1eff07515a029ddc524ce66"
  },
  {
    "url": "others/w5500.html",
    "revision": "44dc975f222bc9f64a1e5cd2acffa54b"
  },
  {
    "url": "others/w7500.html",
    "revision": "52f461fafe563974f4a2c6c0bf4b224e"
  },
  {
    "url": "resume.html",
    "revision": "3b8b6d7e21eb0f899d454351bb29acbc"
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
