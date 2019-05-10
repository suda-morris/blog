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
    "revision": "93d154c357df8bd6ae38fbda3fb75fd9"
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
    "url": "assets/js/10.a518a206.js",
    "revision": "44a48d90a2efcb602683aa5810a6a286"
  },
  {
    "url": "assets/js/11.d0468147.js",
    "revision": "e5e19260ca293a369832d1502a0840c0"
  },
  {
    "url": "assets/js/12.0b0455f9.js",
    "revision": "19f3d30290eefe246255bbc0ad1d5113"
  },
  {
    "url": "assets/js/13.b23369cc.js",
    "revision": "53cefe157083385d7cee983b84e6a025"
  },
  {
    "url": "assets/js/14.19c9c88f.js",
    "revision": "17a364122212f0ec958275779a9d5edd"
  },
  {
    "url": "assets/js/15.bf0a6c64.js",
    "revision": "e91d87bda7012238b3b5f6684a21f377"
  },
  {
    "url": "assets/js/16.9fd7e438.js",
    "revision": "cd1e3685b13785dde7ecb9edef0cad13"
  },
  {
    "url": "assets/js/17.425f2b78.js",
    "revision": "7df6e866ed06f95c5fc28ad6f481691a"
  },
  {
    "url": "assets/js/18.63b235fb.js",
    "revision": "dcb3c420e3a0aca80e0e62dd7a441b64"
  },
  {
    "url": "assets/js/19.8db3f67f.js",
    "revision": "5443027f20ff0315bdf4446d866370cf"
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
    "url": "assets/js/22.7d168e50.js",
    "revision": "f6b43fb62bd551ee52920fc28a018537"
  },
  {
    "url": "assets/js/23.9039f956.js",
    "revision": "0834916b6f9f900b77dc5657ef7b6e7b"
  },
  {
    "url": "assets/js/24.4f9230ac.js",
    "revision": "460115ea79987545577f22e781f46197"
  },
  {
    "url": "assets/js/25.0517ba77.js",
    "revision": "9f4da9cd1fc1413c2b8f054a61f9ccc0"
  },
  {
    "url": "assets/js/26.8274963e.js",
    "revision": "1578099d3331c9c0315f329a634e1406"
  },
  {
    "url": "assets/js/27.de57d000.js",
    "revision": "96d7a8d87d0ac8decf9ffd95a275f874"
  },
  {
    "url": "assets/js/28.e459328f.js",
    "revision": "08f8b8d11018eb2219999bd7f84ef951"
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
    "url": "assets/js/30.fe54a9ca.js",
    "revision": "e08c4894bdacf3a2bafdfbc35e885349"
  },
  {
    "url": "assets/js/31.055b0c23.js",
    "revision": "2252f1217128de577d2368de2890d64d"
  },
  {
    "url": "assets/js/32.cc2ac06b.js",
    "revision": "8d89faf2908eed89c762be7cb964a567"
  },
  {
    "url": "assets/js/33.ae993ae6.js",
    "revision": "3cf33db5105b01959d7607429dfa0f5c"
  },
  {
    "url": "assets/js/34.e543702d.js",
    "revision": "40f18bf44bbbae0ab3d94c4d35e66801"
  },
  {
    "url": "assets/js/35.9ef54f0c.js",
    "revision": "3355bd1c3a2d8a81a989d73f96e867aa"
  },
  {
    "url": "assets/js/36.8394d099.js",
    "revision": "b438a760ad006d514dbf85d927aea91a"
  },
  {
    "url": "assets/js/37.f1ac50d4.js",
    "revision": "d0a93eac41a15e528a57ca6edaabe116"
  },
  {
    "url": "assets/js/38.3a1df932.js",
    "revision": "04ab0f4fc872ff0a27690c222590c146"
  },
  {
    "url": "assets/js/39.11bbf7e2.js",
    "revision": "26baf04a18c6a496233895bc236e7692"
  },
  {
    "url": "assets/js/4.c4d898bc.js",
    "revision": "19d218db2c46652a5b5236998c167251"
  },
  {
    "url": "assets/js/40.16337aab.js",
    "revision": "f25f00aa2a0a876b6570218af91f9a25"
  },
  {
    "url": "assets/js/41.4ac25845.js",
    "revision": "0e4b8f88f8e7559af3f87248b3c8e303"
  },
  {
    "url": "assets/js/42.a739d5e5.js",
    "revision": "05c1c2196ec8ee330630e12f7df33a46"
  },
  {
    "url": "assets/js/43.f5ecfb2b.js",
    "revision": "3618d55b7b3cf95d81882ec50d743a4e"
  },
  {
    "url": "assets/js/44.57b99b18.js",
    "revision": "fa2ea3f282cb663f823690996130ad85"
  },
  {
    "url": "assets/js/45.b4a260d9.js",
    "revision": "d845339adc627f91462fef3ff9e5369d"
  },
  {
    "url": "assets/js/46.28fcf794.js",
    "revision": "b796703967d622594e64c4880cb2837c"
  },
  {
    "url": "assets/js/47.db68b90e.js",
    "revision": "a5249ecf79f6e44252b69f2b69ce040a"
  },
  {
    "url": "assets/js/48.f6cf7f5d.js",
    "revision": "d05614cc68006d1c941a4989a70ecd0d"
  },
  {
    "url": "assets/js/49.0d3867ad.js",
    "revision": "4c06784b71abcdc3e07cb2d0b352e66b"
  },
  {
    "url": "assets/js/5.4ad359d4.js",
    "revision": "5f5a852ba8d152e6072389669bb3d2f1"
  },
  {
    "url": "assets/js/50.a4cde798.js",
    "revision": "0a38f7d9517071a594027e4b95ac2da2"
  },
  {
    "url": "assets/js/51.75a725dd.js",
    "revision": "1b5bee82fe26dcf13a63033f22d92f12"
  },
  {
    "url": "assets/js/52.509a339e.js",
    "revision": "a06d488cc62597d294472fd4cb2a97b3"
  },
  {
    "url": "assets/js/53.2bb34305.js",
    "revision": "ec21d9ef7c6ec7b8e9111d109d7bfc8b"
  },
  {
    "url": "assets/js/54.bed09ac2.js",
    "revision": "fa5e4c3cce52aa62f54398cfb5f8f352"
  },
  {
    "url": "assets/js/55.92f28634.js",
    "revision": "ad89cb09f6fd0a7798deadf583b758a1"
  },
  {
    "url": "assets/js/56.1112c7c7.js",
    "revision": "7df5fcd9b7b49541f6b5a29ceace20a8"
  },
  {
    "url": "assets/js/57.f0e0f970.js",
    "revision": "ee49336a38ac4d23374d8473fb107e39"
  },
  {
    "url": "assets/js/58.04b0261d.js",
    "revision": "74d219c133fbd3a94f167db344675de2"
  },
  {
    "url": "assets/js/59.ef3b0a3c.js",
    "revision": "2f8bbfd93cae13b6c3636a0b3fb50084"
  },
  {
    "url": "assets/js/6.5a4f2e87.js",
    "revision": "003ecbbeef465b7f514b36c5c817961d"
  },
  {
    "url": "assets/js/60.d3124edb.js",
    "revision": "8840358aba49dd48808333b11b66c655"
  },
  {
    "url": "assets/js/61.950faf09.js",
    "revision": "3b51fc8f6db0a99821207132dd11aa60"
  },
  {
    "url": "assets/js/62.d999e711.js",
    "revision": "8b7812edc30a47675aa525d629653060"
  },
  {
    "url": "assets/js/63.937ad50a.js",
    "revision": "426293d20b0b861d249d188b59dacad2"
  },
  {
    "url": "assets/js/64.a205c034.js",
    "revision": "13b58ae0515ee32cbadbc2253ed72d78"
  },
  {
    "url": "assets/js/65.ae7fdc40.js",
    "revision": "abeb66de84d60441c323f1ace062a2e7"
  },
  {
    "url": "assets/js/66.409d2b3d.js",
    "revision": "ea53974671d55afeb1524a74c302fb53"
  },
  {
    "url": "assets/js/67.a0034698.js",
    "revision": "bf6768a853be48d9607bdb1ef8dd5742"
  },
  {
    "url": "assets/js/68.55d0efbb.js",
    "revision": "5e71a8af18bfd18e490bcaa42f337f8e"
  },
  {
    "url": "assets/js/69.3b727230.js",
    "revision": "3c06404338f1dde0ad8ac11e1c3ab5ec"
  },
  {
    "url": "assets/js/7.f9c38f05.js",
    "revision": "60b111b992eb5c6f4c5f270df7b5b45a"
  },
  {
    "url": "assets/js/70.b953261c.js",
    "revision": "6658c018682d0f7bc420081ab195de11"
  },
  {
    "url": "assets/js/71.5bbb86c2.js",
    "revision": "3c14c444b5e73109dd45b8150a939177"
  },
  {
    "url": "assets/js/72.45451816.js",
    "revision": "b23d2867ca0ef663b068ee2f37a54f98"
  },
  {
    "url": "assets/js/8.6d7d09fc.js",
    "revision": "33d4ae05b189fcd4f5bca1660580a8e6"
  },
  {
    "url": "assets/js/9.532f4e84.js",
    "revision": "fb56308c03eb9a9b108214eb4d630a6d"
  },
  {
    "url": "assets/js/app.699cc430.js",
    "revision": "bb20178299c665ea747d0354eb5d8a69"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "30685d2a419c59ad1ba356e926e87505"
  },
  {
    "url": "cs/bash.html",
    "revision": "9d871e82b6a3ac6913acb604c086e9ee"
  },
  {
    "url": "cs/cmake.html",
    "revision": "e63e16bb94d623f9a6acede7c1fb95cc"
  },
  {
    "url": "cs/compilation.html",
    "revision": "277902b88035bb5cfe0bdecc0f28f7e7"
  },
  {
    "url": "cs/index.html",
    "revision": "6e072344690d6646b48f05d10772e72a"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "6547c4bfde3d23aee92dae6213dc896a"
  },
  {
    "url": "ee/about.html",
    "revision": "dd0872ff057c8013ac8e8002b0be3895"
  },
  {
    "url": "ee/index.html",
    "revision": "174c050a9b262cee5fb6af2f400b4704"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "ebb31c7391d337bf5f9fe74009857f3e"
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
    "revision": "6123e3f9dd5b78f5ee64abbd50cf2bb3"
  },
  {
    "url": "others/about.html",
    "revision": "dd982224f93e405e572b5d02e994bf38"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "930fe1283cbf55ddd4ba42cc499cab13"
  },
  {
    "url": "others/android-studio.html",
    "revision": "0670a37cc79e573390acc2cd2bf4029b"
  },
  {
    "url": "others/android.html",
    "revision": "98babe2aabc8c6f7067f941e1f9a6d7c"
  },
  {
    "url": "others/chisel.html",
    "revision": "9326713cb6a0988ae7150f9ea19c6a6b"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "b1ac7432a55579d22cb4cf12c5c3635d"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "c23d3687db73821d407e47c8d44e10f7"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "13e924bcef84396de02d68ae14ab8b4d"
  },
  {
    "url": "others/css.html",
    "revision": "047e468455128efe183b17c7bdf65f8a"
  },
  {
    "url": "others/docker.html",
    "revision": "9941d38bf53e50fcf1e42ccecbb30649"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "290a0212e4c2a85456fbae7086671be7"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "dc608f04780acb6b9b23243abcc4862b"
  },
  {
    "url": "others/english-writting.html",
    "revision": "efff697218304ee922c726dde4cc2810"
  },
  {
    "url": "others/esp32.html",
    "revision": "2da9bdb690a7b6bf69e755cecc589c57"
  },
  {
    "url": "others/freertos.html",
    "revision": "637d526b9b06f89b75975573d4767f00"
  },
  {
    "url": "others/gns3.html",
    "revision": "146a9bf14fbc4f0305069bfd1b5d1b8c"
  },
  {
    "url": "others/gps.html",
    "revision": "7a43a2d73fa6d45bb1520f29f007437d"
  },
  {
    "url": "others/html5.html",
    "revision": "469a69a3be70bda5d4555e12c738aea1"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "b863267cfb14cd421615dcca069575ed"
  },
  {
    "url": "others/index.html",
    "revision": "7c52b0a00b7357339ca75edc9a34c1ef"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "4730be19e32f0d210e3c704ee71ea03b"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "ff9de26e9bdb9e123f11410f07039397"
  },
  {
    "url": "others/javascript.html",
    "revision": "186c8818fbbb6ef175224c90d2c5e25a"
  },
  {
    "url": "others/json.html",
    "revision": "78cf9b146d6098de848e6c8a341d9926"
  },
  {
    "url": "others/latex.html",
    "revision": "115f2a8b2ca00bd5289b9d4bfbda66c3"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "ad033b2562bdaf59f86ac78fdc9a746e"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "78054ee09202ea2955d7c0499e78f8ae"
  },
  {
    "url": "others/lwip.html",
    "revision": "311b48ff304f467d08c164a993f3c447"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "c950898b5150f3d246f5a3d7bffb470b"
  },
  {
    "url": "others/markdown.html",
    "revision": "465029703bde36f53ca4c3de4ef0c868"
  },
  {
    "url": "others/matlab.html",
    "revision": "2e224bb2b7988410158d1a2052f8318e"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "6d8ff5676ca6129082f9efc4bd6a1968"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "92d4ade9c7379decdc0c94354564efa9"
  },
  {
    "url": "others/network-security.html",
    "revision": "c16f5cd184134d601425b3d9bb91e8ef"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "609648c248222878d61b6a4456ab395e"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "36bc7bf187f62664b84e9a99e67d13d9"
  },
  {
    "url": "others/poe.html",
    "revision": "775b4e921f728830e18bbc37a404e5c5"
  },
  {
    "url": "others/pyside2.html",
    "revision": "b81c33853b6d9ac0df024d8e5ffd6327"
  },
  {
    "url": "others/python-socket.html",
    "revision": "44808bba631ab018c0bc53e57fd614f3"
  },
  {
    "url": "others/python.html",
    "revision": "d67b67f2a7b6876df3d84b7ebfb345df"
  },
  {
    "url": "others/q-learning.html",
    "revision": "c06b1edd81a95b799f86da2fc2ab172c"
  },
  {
    "url": "others/qr-code.html",
    "revision": "10bfdecb2c44f417cabd1bfbf03fa07e"
  },
  {
    "url": "others/qt4.html",
    "revision": "83227c35a89261da187de9d8af25d568"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "9691515df101e8cbc2337d93c0a898c6"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "d8167d4cf13647a3237ff0ad5e5fb634"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "ab2821687d48cae75429b4dde10c6c32"
  },
  {
    "url": "others/sd-card.html",
    "revision": "e7c2fe253cde710337bff50cafbdabc8"
  },
  {
    "url": "others/sdn.html",
    "revision": "d45d4d430f4a108c982ac025e433dabe"
  },
  {
    "url": "others/star-uml.html",
    "revision": "5266430418d0ee1a4be63ec726528263"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "2222f60796ec4fa8670ceab2df180e1c"
  },
  {
    "url": "others/verilog.html",
    "revision": "784c4838b989c5224ea0f078061f39cf"
  },
  {
    "url": "others/vue.html",
    "revision": "bdb538a7bd653757ced7ee9eefc34dfe"
  },
  {
    "url": "others/w5500.html",
    "revision": "ad03f6ae56e442c0bcabd0e5fa275c1a"
  },
  {
    "url": "others/w7500.html",
    "revision": "1879538daf3f7fad3a4cd52399f710e2"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "ac24e4984a8794e4eaafc8bbc95068f2"
  },
  {
    "url": "resume.html",
    "revision": "ea6043a757e74407e81c43c1aa4b831d"
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
