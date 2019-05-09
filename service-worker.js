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
    "revision": "232cf0f6f4e02d1125c923c672963294"
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
    "url": "assets/js/10.b0c0010d.js",
    "revision": "50e92a24ef3100a0948797ffba494efd"
  },
  {
    "url": "assets/js/11.1d824b17.js",
    "revision": "95e55a2c7004b80c8bbb5eb36dc5dc3c"
  },
  {
    "url": "assets/js/12.3d5fb32a.js",
    "revision": "e7b3bd5b5e78b1996b2efef1a0b2d9f2"
  },
  {
    "url": "assets/js/13.2e900b62.js",
    "revision": "d7b739cb4664861efdbada6bf759ba74"
  },
  {
    "url": "assets/js/14.31c984bb.js",
    "revision": "1b36a01915f1dd9102978f608199a5d5"
  },
  {
    "url": "assets/js/15.d79e7c54.js",
    "revision": "607ae4aed9239b0b968f563545f5391a"
  },
  {
    "url": "assets/js/16.f2b2869e.js",
    "revision": "e4b9aa81b970d16f30a35c5233800d20"
  },
  {
    "url": "assets/js/17.f4fe2829.js",
    "revision": "287d662dc799754a0903ab4f22228e19"
  },
  {
    "url": "assets/js/18.ba822010.js",
    "revision": "7fdad240d7716c690ebdee75376c6329"
  },
  {
    "url": "assets/js/19.9c179f0d.js",
    "revision": "40931c7492008e70e2191a9bdcd09d3b"
  },
  {
    "url": "assets/js/2.5203ae48.js",
    "revision": "b43e93b01cf80ff6cf0c4c4c0d7a1008"
  },
  {
    "url": "assets/js/20.9202d7b7.js",
    "revision": "5705f1616718c4fb60fc1f1bd45494e9"
  },
  {
    "url": "assets/js/21.55616143.js",
    "revision": "73f47c452f5efa86c0024031f9e870b0"
  },
  {
    "url": "assets/js/22.93b038ed.js",
    "revision": "96f595c74dca32b78bf7015f099ef816"
  },
  {
    "url": "assets/js/23.0c5f86d4.js",
    "revision": "acd369ba8106c3728f2e102beb5eaf96"
  },
  {
    "url": "assets/js/24.50ea62e4.js",
    "revision": "a3db7b2b87df35f39ec6fcb2975fe947"
  },
  {
    "url": "assets/js/25.f29ca224.js",
    "revision": "04a529c893cecf4a95d4844b6371e639"
  },
  {
    "url": "assets/js/26.b7797967.js",
    "revision": "fefb1a27489280a0db5f99dedc0b3424"
  },
  {
    "url": "assets/js/27.4796d5e2.js",
    "revision": "e891223e74b4fe290ac35af2761392e2"
  },
  {
    "url": "assets/js/28.1f691912.js",
    "revision": "9283eb55ef578f857413599ec74c3b5e"
  },
  {
    "url": "assets/js/29.41949a25.js",
    "revision": "00bfacfaf8853a3f9d7035cd47059f69"
  },
  {
    "url": "assets/js/3.ee9c868d.js",
    "revision": "0c55b4bc3fe4f6df4faf5cd088dbd9d9"
  },
  {
    "url": "assets/js/30.f0100fa1.js",
    "revision": "d7b4eb990fa73a94bcabe77fb274fcd1"
  },
  {
    "url": "assets/js/31.06dc8c28.js",
    "revision": "07779b6f8098ad81061c115e415cbb5e"
  },
  {
    "url": "assets/js/32.64408253.js",
    "revision": "6e19efa8a28e47d94a51c7add65f6a7f"
  },
  {
    "url": "assets/js/33.d1e2a839.js",
    "revision": "54752d226e5443ce54b37b69b3082dd9"
  },
  {
    "url": "assets/js/34.a063724c.js",
    "revision": "daba76f8beaf3d0ddbe9efaec226eb79"
  },
  {
    "url": "assets/js/35.f3043ada.js",
    "revision": "5c1fa6497ccee0c0b7f5ced067d02fb3"
  },
  {
    "url": "assets/js/36.ef48650c.js",
    "revision": "51fe9cfd072c37c30ad9684cdbab01d3"
  },
  {
    "url": "assets/js/37.88c6fca5.js",
    "revision": "418965f6cc7e5aa070d2a64b52aef588"
  },
  {
    "url": "assets/js/38.fb88d3a3.js",
    "revision": "1b907527e743bae7522c86b7b6e3eebb"
  },
  {
    "url": "assets/js/39.bd0928bb.js",
    "revision": "6e32b399b876005a3a5f4e86b46563df"
  },
  {
    "url": "assets/js/4.b44fe652.js",
    "revision": "1d20c232dd7b13af8fe1656b1b8ceefa"
  },
  {
    "url": "assets/js/40.9a44c786.js",
    "revision": "e3a25cff43d6fa9c845362e0485fb152"
  },
  {
    "url": "assets/js/41.fb192acd.js",
    "revision": "fecd28829ed9752a9fc5384adccfc9e9"
  },
  {
    "url": "assets/js/42.58d89bc1.js",
    "revision": "9339c14832e096584cbbbad59fef1ab6"
  },
  {
    "url": "assets/js/43.0d8b38d1.js",
    "revision": "fa8e3e1415956a59de714d67414e7b56"
  },
  {
    "url": "assets/js/44.50475e5e.js",
    "revision": "293f5d6e680a61204fc9f46f465fb373"
  },
  {
    "url": "assets/js/45.b085d47c.js",
    "revision": "d7012ac40b9f4eb59ba7b3a3b1a588f9"
  },
  {
    "url": "assets/js/46.d8fcc705.js",
    "revision": "1e7d797e2bb0ebd07a326ab2f5472aeb"
  },
  {
    "url": "assets/js/47.91fd67ed.js",
    "revision": "4559c06dcac0b095c16f0b28a0f70809"
  },
  {
    "url": "assets/js/48.64f12297.js",
    "revision": "bf17c4de1bc72d9816afd770115b1fde"
  },
  {
    "url": "assets/js/49.a6975854.js",
    "revision": "9084ea8cb780ce3ec69a29e1a4d2a5ed"
  },
  {
    "url": "assets/js/5.4ad359d4.js",
    "revision": "5f5a852ba8d152e6072389669bb3d2f1"
  },
  {
    "url": "assets/js/50.de6cb49e.js",
    "revision": "5dc3897f70a889d219243963b3e6ed88"
  },
  {
    "url": "assets/js/51.4e250b82.js",
    "revision": "3fe3cb6e77009695e5ea2917de241cd1"
  },
  {
    "url": "assets/js/52.dc6491b3.js",
    "revision": "8bca3c6ff3b09cc63c344183d05edd1c"
  },
  {
    "url": "assets/js/53.5e4fe4cd.js",
    "revision": "3b497b73fb93d05c26ab40209c117361"
  },
  {
    "url": "assets/js/54.c746956b.js",
    "revision": "03390586102dcbf93051482afeea0eba"
  },
  {
    "url": "assets/js/55.f2578831.js",
    "revision": "1169c5847b18fda8eb1a254d5635b006"
  },
  {
    "url": "assets/js/56.d9d573dc.js",
    "revision": "8d099fd511515bb2f31caab2fad00f92"
  },
  {
    "url": "assets/js/57.34f53f82.js",
    "revision": "4a5193473acf14118e75988f0c862d81"
  },
  {
    "url": "assets/js/58.94a7ed4c.js",
    "revision": "699a6ea324616e48094e654b3d2dd5b1"
  },
  {
    "url": "assets/js/59.e91c2df4.js",
    "revision": "b28dea5bb6429ca65273c4e013152a05"
  },
  {
    "url": "assets/js/6.a2a18e64.js",
    "revision": "4e5db06b758842692a009cffdc06756a"
  },
  {
    "url": "assets/js/60.a892d72b.js",
    "revision": "06dacbe555b3eedb73c13cd628ca41f0"
  },
  {
    "url": "assets/js/61.bc8d93c4.js",
    "revision": "f2621babb2d6193443f7a13ab28c2210"
  },
  {
    "url": "assets/js/62.e9fb14db.js",
    "revision": "33de6a04f782c0570707dfa3a9338756"
  },
  {
    "url": "assets/js/63.993dd0ab.js",
    "revision": "3662411bbab2017b2303e64219345b37"
  },
  {
    "url": "assets/js/64.2aee1de7.js",
    "revision": "9b06cd19c83282abbc09411e5e3b406d"
  },
  {
    "url": "assets/js/65.17c4229f.js",
    "revision": "2ab32f002d7889df96ad99028cedabb2"
  },
  {
    "url": "assets/js/66.631e6987.js",
    "revision": "e3e99a7560518326f2a1660b04f25279"
  },
  {
    "url": "assets/js/67.cf87df9a.js",
    "revision": "b7ab7a11bd80e30ed7a4f3747ce8f603"
  },
  {
    "url": "assets/js/68.d488748b.js",
    "revision": "15c95fa6a8db756c6ed7aa662f02d56c"
  },
  {
    "url": "assets/js/69.4084b8dc.js",
    "revision": "1706afab60a1f25bc61e0a327af6f692"
  },
  {
    "url": "assets/js/7.8704ffb5.js",
    "revision": "d544dab2829af85cbe42e4877406e28f"
  },
  {
    "url": "assets/js/70.26d64aef.js",
    "revision": "e5b752be320d25db15df4eb36fa606bf"
  },
  {
    "url": "assets/js/71.63b603c1.js",
    "revision": "da0663fa3a0315f6373371d09ad22d07"
  },
  {
    "url": "assets/js/8.c70ee887.js",
    "revision": "5cf9182d07862b152ca108429d36f339"
  },
  {
    "url": "assets/js/9.25ecab8d.js",
    "revision": "78ffa78ae7b3794fea3816e0e9a35b67"
  },
  {
    "url": "assets/js/app.92c75c0b.js",
    "revision": "c59c9d3b40e7bfca22bb8956e0a9b972"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "cdd1a529f05da908df63bff4e7a22266"
  },
  {
    "url": "cs/bash.html",
    "revision": "bbf96b2d0a9192059f61c51c86801e0e"
  },
  {
    "url": "cs/compilation.html",
    "revision": "3cd30aa4c1f5ba930e6527eeb2b4a74d"
  },
  {
    "url": "cs/index.html",
    "revision": "823c56619142641ca3e8e99ec58d7c9a"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "9e0657798b9b387df8c35610c670713a"
  },
  {
    "url": "ee/about.html",
    "revision": "c00516d48d5e9011fc3a0cb1aba99cb8"
  },
  {
    "url": "ee/index.html",
    "revision": "bf24e18ea8992794dca2c60bdfc51583"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "0df69952ec26a40c87040dfac5f332ca"
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
    "revision": "7373133b27ee64cef042cb9615be25a6"
  },
  {
    "url": "others/about.html",
    "revision": "0a11e3433a4b6ff39f71c6012b3c16e5"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "21120aa98df9e0052c68c86e952b8814"
  },
  {
    "url": "others/android-studio.html",
    "revision": "ee1b533e6b19a3b6547d2892c530806f"
  },
  {
    "url": "others/android.html",
    "revision": "2d792cc9212d4cfc41eff6e4b25dbdbc"
  },
  {
    "url": "others/chisel.html",
    "revision": "6a454e9fa92b3854db9f2fe18c148001"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "6ad097c1a2ee8d24f731f1513e91f9d7"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "8568e7d3a96d6ec0690e05121897de00"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "7c42013212d9b3b2ea51c71ab23824a1"
  },
  {
    "url": "others/css.html",
    "revision": "02c88e998d2c3ce2e23f32da716a4680"
  },
  {
    "url": "others/docker.html",
    "revision": "8156154be4f55f86901cf50f3517428f"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "baaab8e28bcb59b682ed922463e5162d"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "a9a53b605a937964f71349b0fd4b0fd0"
  },
  {
    "url": "others/english-writting.html",
    "revision": "04b5347753103dfa0b8eb9d3659d8d40"
  },
  {
    "url": "others/esp32.html",
    "revision": "c13c5f3e5eafd377878d666a896e06a0"
  },
  {
    "url": "others/freertos.html",
    "revision": "04f60f20d0918dec4d8d68cac55ca83f"
  },
  {
    "url": "others/gns3.html",
    "revision": "bd24efdc4bd94e22acbafe8ecc7d89f4"
  },
  {
    "url": "others/gps.html",
    "revision": "c844cdd28fb1d76a625accee4c3a40b8"
  },
  {
    "url": "others/html5.html",
    "revision": "93a4d8dd514ff5fa5ffee312db86996a"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "925cb53dc2728f9b74bf07198c495caa"
  },
  {
    "url": "others/index.html",
    "revision": "b397d842ba927983cb34cd7a0600651b"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "d7a3b587d790ff8f8f0663b9c4ec0a93"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "fa272efef6dbb968a8af950c20bebee6"
  },
  {
    "url": "others/javascript.html",
    "revision": "6c32b4cd3c2ead02cd3ec6946465b4c2"
  },
  {
    "url": "others/json.html",
    "revision": "18b1d96b57347fe1beea9f1b808655c7"
  },
  {
    "url": "others/latex.html",
    "revision": "81539c0b37589e7c67a67a55809af62c"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "210a0e561e25b4575336ce7dbf24099b"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "c7057a7e573084a55dc7337e9338bb08"
  },
  {
    "url": "others/lwip.html",
    "revision": "82b4209840957033cbac49056dd5e0b5"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "2209cf0e09c66c13e4093b950df732fa"
  },
  {
    "url": "others/markdown.html",
    "revision": "f24d7fe9b259cacda2e9233fd476a4b5"
  },
  {
    "url": "others/matlab.html",
    "revision": "f9481f62369d0683a75f6b0f95a56717"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "03b3e048af89c7987f01e26fa71acae7"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "51d6a2d38711c89558b2712ce4439ec6"
  },
  {
    "url": "others/network-security.html",
    "revision": "a7dcf349cdb8f6830c7ba67755484da8"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "757da90a318017bcafd13ddb58a41f4e"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "8d4cbfd3ac56b9a59c15dd1d27030873"
  },
  {
    "url": "others/poe.html",
    "revision": "9ef95cc6abf7547e02e559ee29740a5c"
  },
  {
    "url": "others/pyside2.html",
    "revision": "4423a063fe3da8f1139d580bf4ee07b6"
  },
  {
    "url": "others/python-socket.html",
    "revision": "12225e72e3366d6d29df3632770d80cf"
  },
  {
    "url": "others/python.html",
    "revision": "cefa53e87097e4d808f7884acaa45ffc"
  },
  {
    "url": "others/q-learning.html",
    "revision": "eb2df6d1776bf985f96140ba86d60c0a"
  },
  {
    "url": "others/qr-code.html",
    "revision": "125678e65315b1592ded62996a521a9b"
  },
  {
    "url": "others/qt4.html",
    "revision": "495cd2b0af3475d142cf91b199607b8e"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "89c8bace4efc69713f3a505b53ea713b"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "7d81054c172928e613561f020043e4c0"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "5c71c07f627cd85e51c4e9d0491c6b9d"
  },
  {
    "url": "others/sd-card.html",
    "revision": "19715f2efddfe8febfdb2eaa9059de68"
  },
  {
    "url": "others/sdn.html",
    "revision": "b2875e18cc5bb9adfb3d8815e97432f6"
  },
  {
    "url": "others/star-uml.html",
    "revision": "899f7e6272b32f90013d102ff2cc93b1"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "d7eada65a3ac45a0d5e1c9203261b5f9"
  },
  {
    "url": "others/verilog.html",
    "revision": "9c237d0e84846523c1cea477153e5571"
  },
  {
    "url": "others/vue.html",
    "revision": "cf3a51b90702db544f75451d76130d24"
  },
  {
    "url": "others/w5500.html",
    "revision": "b68361696218baacd43e298662fc5417"
  },
  {
    "url": "others/w7500.html",
    "revision": "e84debbc027a451836110c4e0c6e7c9d"
  },
  {
    "url": "others/xtensa-assembly.html",
    "revision": "c28d4d55e5c195950b336442ffeae7d8"
  },
  {
    "url": "resume.html",
    "revision": "ca051acc4de9dd03dd48dd0877472f8b"
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
