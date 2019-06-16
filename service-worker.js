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
    "revision": "8c34e7343237addbd207e56fb1932868"
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
    "url": "assets/img/ethernet_frame.f4de10c4.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "assets/img/iterator.a7ae1d2a.png",
    "revision": "a7ae1d2a4c8687e67b1f67a0c7af8e86"
  },
  {
    "url": "assets/img/linear_regression.d67e8d49.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "assets/img/logistic_regression.4ef370cc.png",
    "revision": "4ef370cc17dbcafcc7091ea024cd56ae"
  },
  {
    "url": "assets/img/nonlinear_regression.f58b96b1.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
  },
  {
    "url": "assets/img/sbt_jvm_options.53a2af9f.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
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
    "url": "assets/img/tcp_ip_stack.13913b2b.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "assets/js/10.10f22d78.js",
    "revision": "aa8931fc10ef4493233503ec1f17a4b2"
  },
  {
    "url": "assets/js/11.045420fb.js",
    "revision": "b301f90d75f6ec0e56d44b7617be5b34"
  },
  {
    "url": "assets/js/12.b6eae3f0.js",
    "revision": "71b481f995d1be507be75e09742677d9"
  },
  {
    "url": "assets/js/13.4a762473.js",
    "revision": "742faa18c7989ae1af58b2df32b6d963"
  },
  {
    "url": "assets/js/14.44369d26.js",
    "revision": "f8481d310d7f0decf2746ab69c0d44d1"
  },
  {
    "url": "assets/js/15.d7b36148.js",
    "revision": "bc99daceef095a3a8d6d27fe7818618f"
  },
  {
    "url": "assets/js/16.320070ea.js",
    "revision": "52de2b2e470c32e845ade627b729bc12"
  },
  {
    "url": "assets/js/17.3712dfa2.js",
    "revision": "d951f201eb1ed0ff31f4d758e8e08fa2"
  },
  {
    "url": "assets/js/18.2c17a523.js",
    "revision": "384f848cde6880a8c3670bb0b63948b8"
  },
  {
    "url": "assets/js/19.44be5de1.js",
    "revision": "5dc3331a68083e6f5d47d3711de04148"
  },
  {
    "url": "assets/js/2.21aeb18c.js",
    "revision": "9caf71a23c161fde5b254bf2df5bca7c"
  },
  {
    "url": "assets/js/20.6bbb430f.js",
    "revision": "c972ba9d3dfcdf826495ade8ee2739ce"
  },
  {
    "url": "assets/js/21.8236a6f3.js",
    "revision": "8ec214eb204c256b27409747577d9c43"
  },
  {
    "url": "assets/js/22.afdcfaf1.js",
    "revision": "2e566b88f246a0ba2f34578ed279b56d"
  },
  {
    "url": "assets/js/23.6cc0b3a8.js",
    "revision": "376f8cd8025c2bfbb427e6753bd56dfc"
  },
  {
    "url": "assets/js/24.ddca8915.js",
    "revision": "714badd4ab37cadc2372626f495469fd"
  },
  {
    "url": "assets/js/25.7d714881.js",
    "revision": "bc1cd80ed39d3dc0879e3a95cf2bf739"
  },
  {
    "url": "assets/js/26.31c116a6.js",
    "revision": "c55e3c9d052673796be134694092d374"
  },
  {
    "url": "assets/js/27.0107adc8.js",
    "revision": "b3dc422c23058db0e024811cd85643be"
  },
  {
    "url": "assets/js/28.08cd00fc.js",
    "revision": "e64e9946b1d5a23bc5dd6fae726c8b4c"
  },
  {
    "url": "assets/js/29.f7833fd1.js",
    "revision": "d46a8d6a4a37d0486dab431cb66a7713"
  },
  {
    "url": "assets/js/3.f4cf25c9.js",
    "revision": "5b3db49ecf701aee863cf2b864bd7741"
  },
  {
    "url": "assets/js/30.8579fdf2.js",
    "revision": "ca7d8facca5906a3bcf8db08c155e46d"
  },
  {
    "url": "assets/js/31.869890e6.js",
    "revision": "706a32d6cb539933171f7d17837371ab"
  },
  {
    "url": "assets/js/32.44e5092d.js",
    "revision": "ded7d7ddc16f616e3f540f4ebc76c68e"
  },
  {
    "url": "assets/js/33.6d61dc69.js",
    "revision": "29c2012049c7d4eaf979e99becb3cf8b"
  },
  {
    "url": "assets/js/34.b09553ad.js",
    "revision": "49aeff0180f3ca2a7a3972610d4b5f3e"
  },
  {
    "url": "assets/js/35.53c6bb6a.js",
    "revision": "8929d89f46c15f14f1d595a80dada6b2"
  },
  {
    "url": "assets/js/36.a138ecd2.js",
    "revision": "c382ee4dd5a3d49a6636e534bc529652"
  },
  {
    "url": "assets/js/37.e6d3431c.js",
    "revision": "fa1fefa8d9534bdd139c901943d9c479"
  },
  {
    "url": "assets/js/38.4f5952ed.js",
    "revision": "5987b1e0b08f66cc7996cb0fbf132afd"
  },
  {
    "url": "assets/js/39.82ed45ff.js",
    "revision": "39dc0f8a8edc4597ae73941d158f05d6"
  },
  {
    "url": "assets/js/4.860995bb.js",
    "revision": "421b9a87bc7d7cb468744bfe7872e1fb"
  },
  {
    "url": "assets/js/40.c6a5e916.js",
    "revision": "a19a5d063b46a8b36a13eba7d968b47a"
  },
  {
    "url": "assets/js/41.a2dcc2aa.js",
    "revision": "bbfa511bee21bdf283d2267048c3dab4"
  },
  {
    "url": "assets/js/42.4e8ca8b7.js",
    "revision": "6be5550cc5dcc2898a159037f1b05f41"
  },
  {
    "url": "assets/js/43.de59f620.js",
    "revision": "d49491e8877c4a39ef9e55ac6d35e46f"
  },
  {
    "url": "assets/js/44.4bd3449b.js",
    "revision": "60da510eb1215fd006ffbdab27e99422"
  },
  {
    "url": "assets/js/45.bce2c989.js",
    "revision": "a117c5b8b8bfc1b739829cbe442fedc9"
  },
  {
    "url": "assets/js/46.bc31571d.js",
    "revision": "dc8829e716ec36fc4f14574f8122d22d"
  },
  {
    "url": "assets/js/47.34d7688c.js",
    "revision": "7c8705bb00647fe7fd369c002d950fde"
  },
  {
    "url": "assets/js/48.847aab66.js",
    "revision": "420eb6eaa5ff79e7c5358e04cec2ae41"
  },
  {
    "url": "assets/js/49.7690ea6b.js",
    "revision": "b1ca3319f6a02d7fedd480b73e2001ae"
  },
  {
    "url": "assets/js/5.3c2b4eb8.js",
    "revision": "f14355be3ec0d21f4382dab689db4dfd"
  },
  {
    "url": "assets/js/50.f0711633.js",
    "revision": "b7720451cc026ae2a4db0eb167821c0e"
  },
  {
    "url": "assets/js/51.a9d5acb9.js",
    "revision": "fa7dcd8dd1197de21e920563ab622792"
  },
  {
    "url": "assets/js/52.154ce030.js",
    "revision": "937c281b60ef4e8c7dcacc426ddcb185"
  },
  {
    "url": "assets/js/53.a3ea3648.js",
    "revision": "423eb879e3d9bc71fcd3aed2fbe0319c"
  },
  {
    "url": "assets/js/54.e17560c2.js",
    "revision": "f580887553dd12a1c0684ac315a49b93"
  },
  {
    "url": "assets/js/55.85fc5260.js",
    "revision": "98beedba1275a2a8a77f8ac33b5a1c56"
  },
  {
    "url": "assets/js/56.1749ce9c.js",
    "revision": "cb4f91e6ea0607cde2717835386766c2"
  },
  {
    "url": "assets/js/57.71a08473.js",
    "revision": "d2cc25e98664b4ed9d8f44ff3c9d0734"
  },
  {
    "url": "assets/js/58.1c3fccd0.js",
    "revision": "821e42f6d7adf51313d1c7411b19b75e"
  },
  {
    "url": "assets/js/59.364532c2.js",
    "revision": "c0d76485f67d540c4d87df15320def3b"
  },
  {
    "url": "assets/js/6.81764ccc.js",
    "revision": "a184d733b569db99c21d819735ab17d1"
  },
  {
    "url": "assets/js/60.82a8d6f2.js",
    "revision": "db11b90b39b614c73e239c8fa41cf047"
  },
  {
    "url": "assets/js/61.389c9393.js",
    "revision": "f78bfdf8df3da3eb6348b49cde9d8cfa"
  },
  {
    "url": "assets/js/62.1b65f3bc.js",
    "revision": "a670d612f35bdaa8f86a66ea184ec382"
  },
  {
    "url": "assets/js/63.10b345a8.js",
    "revision": "4dfd9ebf47ef84e712d24ebe7879d99f"
  },
  {
    "url": "assets/js/64.f8ca0b67.js",
    "revision": "f486be8b43165632222107856b95ec53"
  },
  {
    "url": "assets/js/65.ccbc8bda.js",
    "revision": "ad2feae827fdb2ec90c68621b127f4e3"
  },
  {
    "url": "assets/js/66.03c87955.js",
    "revision": "afe5af4742e8c2f5b04f6e1e86f74bd0"
  },
  {
    "url": "assets/js/67.9813fa81.js",
    "revision": "37b17545670095b2de6c91d377a40409"
  },
  {
    "url": "assets/js/68.59c8caba.js",
    "revision": "3f23d3e3fe466a64f5d9b9f7f082a69b"
  },
  {
    "url": "assets/js/69.752b022d.js",
    "revision": "682329b6ef67a9108cf25eeb28f8fffb"
  },
  {
    "url": "assets/js/7.d4ed304c.js",
    "revision": "d8e25d3d3c9e5b273e520a3c90f9d300"
  },
  {
    "url": "assets/js/70.ae5cafbe.js",
    "revision": "d0a9b9447cff7b7bab441ef6ccee5e7a"
  },
  {
    "url": "assets/js/71.dfdd8382.js",
    "revision": "efdb337362f55b5da9a0bac7905eac60"
  },
  {
    "url": "assets/js/72.e6eff619.js",
    "revision": "e7a2bbef2f193c499bbff4eb87214c47"
  },
  {
    "url": "assets/js/73.4985f75e.js",
    "revision": "d43ecd6e74a785f920859ff121ca1379"
  },
  {
    "url": "assets/js/74.65458e23.js",
    "revision": "b7ed62973391eabfa253202b25429361"
  },
  {
    "url": "assets/js/75.48e255ad.js",
    "revision": "417065809e0cdab7a9d733679891fb1d"
  },
  {
    "url": "assets/js/76.0ef899ea.js",
    "revision": "842c8933d608fc46bed754f5b515e3c2"
  },
  {
    "url": "assets/js/8.c404accc.js",
    "revision": "1fed56fdc7187fc6ef7c7d66b2d93c51"
  },
  {
    "url": "assets/js/9.b8dea098.js",
    "revision": "cd9917985d6b9f961144ba0640b22139"
  },
  {
    "url": "assets/js/app.249209ab.js",
    "revision": "432fcf26924cab5a4a25cd520801b0d3"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "d56bd91648e8eaa832859f8c976b6ea6"
  },
  {
    "url": "cs/bash.html",
    "revision": "ac5134d41c695d7f9388519a09799166"
  },
  {
    "url": "cs/cmake.html",
    "revision": "f0ef075cc392cb82fac24b557a4a24a7"
  },
  {
    "url": "cs/compilation.html",
    "revision": "b0a9487e3577c194819782c423f5e4c7"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "63ce748f60e9d5675a54ba1868d0a53e"
  },
  {
    "url": "cs/index.html",
    "revision": "4b1325dcb47a29eb2f5b017176b447f8"
  },
  {
    "url": "cs/keras.html",
    "revision": "959c7c38117c732f8babf31599edfde4"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "ded40e5724c0bd24e2414a0ef8a54016"
  },
  {
    "url": "cs/lwip.html",
    "revision": "cefe825e61038273badbead96422dab7"
  },
  {
    "url": "cs/scala.html",
    "revision": "439a4bcc12b9388e7fa4d4301cec7fb3"
  },
  {
    "url": "ee/about.html",
    "revision": "2d007b540acc1f2641b19d3a1f5a592a"
  },
  {
    "url": "ee/index.html",
    "revision": "71f5a1f7e0e91f91ea79facd99625fe2"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "12c9167b1a3a345ce611eca799bd25cc"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "7df92bc3c726e13030782b1108e222f0"
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
    "url": "images/cs/keras/linear_regression.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "images/cs/keras/nonlinear_regression.png",
    "revision": "f58b96b1b0e08f26bbf8838ad0957776"
  },
  {
    "url": "images/cs/lwip/ethernet_frame.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "images/cs/lwip/tcp_ip_stack.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "images/cs/scala/sbt_jvm_options.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
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
    "revision": "de75e10f076dd004aaa515cc2c6558bb"
  },
  {
    "url": "others/about.html",
    "revision": "21f1609077dae0743c4b8795bef91211"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "e3364c1f56ef6c427a603d28665b1da6"
  },
  {
    "url": "others/android-studio.html",
    "revision": "673faec272ccea819c59c478dae2ab4d"
  },
  {
    "url": "others/android.html",
    "revision": "0b56e706f2949c40d5afc8052a1b8e53"
  },
  {
    "url": "others/chisel.html",
    "revision": "91ed80ab70a883487192521e9ffe8064"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "dda88770d512ed7c83c4109e4864e9b7"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "23ebd69d8eaab415aca7f8c1603a601c"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "91f16ae6d22c20867bfa7d6ec3fdec50"
  },
  {
    "url": "others/css.html",
    "revision": "6aac5a98ebd45d18542a6ac5ac719d4b"
  },
  {
    "url": "others/docker.html",
    "revision": "039ba78367825958143ed6a84bdbf01a"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "f297cd4f25005df849dd61211bf7f2f8"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "e391fab0a89970a1db848bf416ea9741"
  },
  {
    "url": "others/english-writting.html",
    "revision": "a352dabc13404b28859697960292063b"
  },
  {
    "url": "others/esp32.html",
    "revision": "6133cb918c257ace931cbeb364eb9866"
  },
  {
    "url": "others/freertos.html",
    "revision": "d69feab47fa0bb38f87c91b8e49169dc"
  },
  {
    "url": "others/git.html",
    "revision": "db97c0e91d401dd4e9285eb77b303062"
  },
  {
    "url": "others/gns3.html",
    "revision": "fa40ba0f0c35cd8f740eae2b6279e8b1"
  },
  {
    "url": "others/gps.html",
    "revision": "2aeae90238fa3b88f1cfd9e54e87c0da"
  },
  {
    "url": "others/html5.html",
    "revision": "3784b16bb7944ceb2e7eeced3f62cd6b"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "dc2641160bfd897448f7422df94ad74d"
  },
  {
    "url": "others/index.html",
    "revision": "d549f9c16fb3fc4caa1519dab98a3020"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "73d6c9c2358443f54c4b5ece2701c63b"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "05dd761b48d4a3d299af0685fd5b73d7"
  },
  {
    "url": "others/javascript.html",
    "revision": "7b9f1d0d98709821defb1d383fa3235c"
  },
  {
    "url": "others/json.html",
    "revision": "2619995236c4084ced9b68f09ce16f64"
  },
  {
    "url": "others/latex.html",
    "revision": "fe2b618acb6b813ff85f589f58afe759"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "7f3d5167fc53344183d929f395fef557"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "90cf5dee799e49b25cea6c836510f407"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "66cc7684428d4821edf0f6f0aa56c309"
  },
  {
    "url": "others/markdown.html",
    "revision": "d7e9210bbd9f89b70288155adfefefdd"
  },
  {
    "url": "others/matlab.html",
    "revision": "5104ff32ae2f53e1152c0569dec156c1"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "a19678be2ffff6355b4cb6524d540c40"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "7a249a52ae44a5d31698e310e98493dd"
  },
  {
    "url": "others/network-security.html",
    "revision": "691d8669aa98338b92a1afa6f5d35743"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "43d943b54c5d78accdf221197dff0d37"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "7d6967102f3067b9e4feb9403324ee2f"
  },
  {
    "url": "others/poe.html",
    "revision": "449d3fbc88deb4f61e5c08156e01e921"
  },
  {
    "url": "others/pyside2.html",
    "revision": "f6039d1e0cf5e118d08abed0c45ab7c1"
  },
  {
    "url": "others/python-socket.html",
    "revision": "8a69f50abf457da083517c4af5c5e112"
  },
  {
    "url": "others/python.html",
    "revision": "0229874d16a8213bdde791d4431c107e"
  },
  {
    "url": "others/q-learning.html",
    "revision": "8e0b819b67e0a3a6d84e225786ebb492"
  },
  {
    "url": "others/qr-code.html",
    "revision": "7f2983e8fdada866d248ac80f7e7b9f5"
  },
  {
    "url": "others/qt4.html",
    "revision": "6a3646491ac0bb098463da84e7ada5b6"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "2ac6a7be3b62683c8b02da980f0b3125"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "a8d9142e6645a1ad780d345fcae5fcc1"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "21e8542b6d62d4a2867de88f7fd5cc8d"
  },
  {
    "url": "others/sd-card.html",
    "revision": "3d9e706e729db650a4777253fdbfc533"
  },
  {
    "url": "others/sdn.html",
    "revision": "60c8deaa0a49a84e16d084d395072e7f"
  },
  {
    "url": "others/star-uml.html",
    "revision": "f5d8aeb8c3568d415ab6730d0059d669"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "e1c1b3494c199ecea8d163e6a4a1be5b"
  },
  {
    "url": "others/verilog.html",
    "revision": "f072d9df7bd0f06af6b5ebddd55857b1"
  },
  {
    "url": "others/vue.html",
    "revision": "1586974d11df20ddc4874fe2dcbf83d6"
  },
  {
    "url": "others/w5500.html",
    "revision": "b5c295e6cbb4a86ca8b0bd7fe0d3b67e"
  },
  {
    "url": "others/w7500.html",
    "revision": "7f03bd46ba9ae1fbd421f2bd35972d1c"
  },
  {
    "url": "resume.html",
    "revision": "942f6793c3441fe106393704057ac448"
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
