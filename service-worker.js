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
    "revision": "78771e586d0bdcd8297f14315d72fe1f"
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
    "url": "assets/js/55.5c074c8c.js",
    "revision": "922067586567a3327558fd59951858d9"
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
    "url": "assets/js/8.4f9e7591.js",
    "revision": "6ea7f09edc23b2d448d498136e8097e8"
  },
  {
    "url": "assets/js/9.37afb747.js",
    "revision": "7a238ab23d0c962dcc6df33876e800b1"
  },
  {
    "url": "assets/js/app.d3058f9c.js",
    "revision": "5fce512eee24b64b624dbd03aac4df05"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "e04bcffa70a55f9b54626822b1593549"
  },
  {
    "url": "cs/bash.html",
    "revision": "fcb6cd33a92cb837c4c0e04c3ee9e37c"
  },
  {
    "url": "cs/cmake.html",
    "revision": "09b8c0759fbf672698e06f95d0e295c4"
  },
  {
    "url": "cs/compilation.html",
    "revision": "3fb297187f12fe61071f4bdd63aa1953"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "de0b90930f9f5f1a9476b2c05aa2c47c"
  },
  {
    "url": "cs/index.html",
    "revision": "7699dea3808e6c802d6a3b849985e784"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "9a64d4ed7634dd30936e87dee84cba6b"
  },
  {
    "url": "ee/about.html",
    "revision": "11433b929c3d7e805fc6b37af9ace535"
  },
  {
    "url": "ee/index.html",
    "revision": "e4ae1f301387421a856ccfcd3d345103"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "ed57fd9a2d938b2ba2c5f41a4243f175"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "b58555221e777c7b658a1e8dd7c4edae"
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
    "revision": "5e9d23c860300b1887197044e70ea590"
  },
  {
    "url": "others/about.html",
    "revision": "44d387349171e86024d29122e2843fbe"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "a273452735222f75d566ad0d7b2f9975"
  },
  {
    "url": "others/android-studio.html",
    "revision": "75a76f42e4e241a7e165c270a0bf6842"
  },
  {
    "url": "others/android.html",
    "revision": "a66a43094befcddc99b5a959a24cae5d"
  },
  {
    "url": "others/chisel.html",
    "revision": "87e066de7e4d83d0b38cca95723f408f"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "04adae8cbfad6b31a4e42bd2f96e24f6"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "8a3286843791259536ea5038fcc1aaa9"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "15da02d29f6428a6b52cd5dab85eab9f"
  },
  {
    "url": "others/css.html",
    "revision": "9856c5874bf7589f051a137f20f4265e"
  },
  {
    "url": "others/docker.html",
    "revision": "d030bc4aac80b14346c876ecdc86ba50"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "79a88ebf70a0d3942ebec3668a950873"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "9aa2f61ddf2e1fb009bd57a8f98121a9"
  },
  {
    "url": "others/english-writting.html",
    "revision": "a5bb22c19959a86e18b015dd7a5133ec"
  },
  {
    "url": "others/esp32.html",
    "revision": "b67ee720f30b5207aa4f634accdc6945"
  },
  {
    "url": "others/freertos.html",
    "revision": "ba1c031554c2a830b77bf6463556d005"
  },
  {
    "url": "others/git.html",
    "revision": "71fc7ccf30ef1edf3631b52bd4cb2e18"
  },
  {
    "url": "others/gns3.html",
    "revision": "c3a2bb78759b61ba002b8a8575e4859b"
  },
  {
    "url": "others/gps.html",
    "revision": "d3afe08596fdf8e8f93e4e0ae9ff202d"
  },
  {
    "url": "others/html5.html",
    "revision": "f53b4e83cc2eeca020d533c9dcf8f8e1"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "1d7ca4515ce6409b0f9beffd47d4ec7d"
  },
  {
    "url": "others/index.html",
    "revision": "a996a4d98547e3e89f47c267a6afafb3"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "2872a1c5e446a9c22eb6fc1f383258b8"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "e23c3e8a12868ab0bb580ec830be3d39"
  },
  {
    "url": "others/javascript.html",
    "revision": "724d3374e429ff2e2ed4beeebe763504"
  },
  {
    "url": "others/json.html",
    "revision": "eb23db36a68b9f68a992db3c0c9a1fd2"
  },
  {
    "url": "others/latex.html",
    "revision": "cef449c02a54b75574bb689886b04a48"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "f209bb273c54d04b2acc373ca24c8c5b"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "f9502b73e876fc7fedf87ddb6ab4dbe7"
  },
  {
    "url": "others/lwip.html",
    "revision": "53c5a8483d68a7327c1ace20f8785594"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "0d819cd9a801a75450ea51ed601a646f"
  },
  {
    "url": "others/markdown.html",
    "revision": "f689f86fdc6f877a9abf6533f71192d9"
  },
  {
    "url": "others/matlab.html",
    "revision": "887ea308860d47f8a6748c1ac256de69"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "38b8dc20f876e8d24e0fd5356e26e211"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "26d87c87bd45dad7f9b1ae13a3f6f888"
  },
  {
    "url": "others/network-security.html",
    "revision": "434c8a6eb329ffa591328fa402857b37"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "b8a7b7f28585085604a72ebb49f0b56e"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "8360cb1cc1b17699d1470a854efef511"
  },
  {
    "url": "others/poe.html",
    "revision": "26cbd426d8e464267737f7caed35382c"
  },
  {
    "url": "others/pyside2.html",
    "revision": "dcbb79c50dee10db648de9cc42ab2161"
  },
  {
    "url": "others/python-socket.html",
    "revision": "beed7e9698dea81e3aef36cf2f46de42"
  },
  {
    "url": "others/python.html",
    "revision": "adbe36ba587d43adf92f232734611d04"
  },
  {
    "url": "others/q-learning.html",
    "revision": "64cdaafca5844955489bc860e54f2280"
  },
  {
    "url": "others/qr-code.html",
    "revision": "2a04576b7797cf220b98822fd374c77c"
  },
  {
    "url": "others/qt4.html",
    "revision": "81184cb64a8ea6df3e298861ecdef8b1"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "99bfa232b874794893f75f74c6ea033d"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "3536ebd11af16af85fd1f09ca1456d32"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "54bd125ce58b7f7494333b66398b68fa"
  },
  {
    "url": "others/sd-card.html",
    "revision": "cba61783d90027f5a142d0959e118c97"
  },
  {
    "url": "others/sdn.html",
    "revision": "d40ca4347e2c3e1b000301c7572d9f47"
  },
  {
    "url": "others/star-uml.html",
    "revision": "52542ef45074a58d402e8243b8e6e604"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "2088ec7c17a9e882e1306c22cb583b08"
  },
  {
    "url": "others/verilog.html",
    "revision": "9bc7d5dc27972b93c5c89c02114ad14a"
  },
  {
    "url": "others/vue.html",
    "revision": "fe6b88b6588d7a8306f9f2954becd5f2"
  },
  {
    "url": "others/w5500.html",
    "revision": "b32accaa63a58fbc9354142f7c170680"
  },
  {
    "url": "others/w7500.html",
    "revision": "4c02b5034828f5e757f385eb4acbfe76"
  },
  {
    "url": "resume.html",
    "revision": "f63f60b716bdd2fe8c45dd1545105592"
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
