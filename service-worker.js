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
    "revision": "2d3a99b9522285acfc73cddec53e106d"
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
    "url": "assets/js/19.af860167.js",
    "revision": "d7d1f4fe98f8f7a3325caa87264c5d2b"
  },
  {
    "url": "assets/js/2.21aeb18c.js",
    "revision": "9caf71a23c161fde5b254bf2df5bca7c"
  },
  {
    "url": "assets/js/20.5161de76.js",
    "revision": "4e04b4e840d708804a46721a8be4d827"
  },
  {
    "url": "assets/js/21.025d1460.js",
    "revision": "3353e2d9e0a916ce29839e4d1cdf8b9a"
  },
  {
    "url": "assets/js/22.c5d89a05.js",
    "revision": "84cf95c1050ece063ee57ac0ed436352"
  },
  {
    "url": "assets/js/23.aa99ad1b.js",
    "revision": "94a5ab93a1ca1b0903f9cd9e1fb75085"
  },
  {
    "url": "assets/js/24.3356a582.js",
    "revision": "0ec7f400f412c6518985239386c3a41a"
  },
  {
    "url": "assets/js/25.192c4daa.js",
    "revision": "6e9086eea27078be06ecfd83c54f4c11"
  },
  {
    "url": "assets/js/26.2aad0eb6.js",
    "revision": "9b51e510026a100be089ed0d043fa790"
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
    "url": "assets/js/50.578ce359.js",
    "revision": "f756b8e4ee030a2bfae7eb079d5ab20e"
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
    "url": "assets/js/53.d4e34cf0.js",
    "revision": "2b6ac99e0e05b0773f743781ed42268b"
  },
  {
    "url": "assets/js/54.d32bf824.js",
    "revision": "c6f92a982a28626bdae35277ce12db53"
  },
  {
    "url": "assets/js/55.85fc5260.js",
    "revision": "98beedba1275a2a8a77f8ac33b5a1c56"
  },
  {
    "url": "assets/js/56.cfb6ecaf.js",
    "revision": "7094bfd4d73636ba6db1dc6a3d532abc"
  },
  {
    "url": "assets/js/57.e6c3a07b.js",
    "revision": "5e80c07c4b459700a8ec37d46a26d4f9"
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
    "url": "assets/js/9.fc6a117a.js",
    "revision": "1f4937067a469bc232232868e94a19f8"
  },
  {
    "url": "assets/js/app.131af974.js",
    "revision": "d70579e1d7d2495a5e4c788328193d9c"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "4a6b720b4eac33dc229d1034a41f6eb5"
  },
  {
    "url": "cs/bash.html",
    "revision": "39bc078a76915086d381d88c957079f1"
  },
  {
    "url": "cs/cmake.html",
    "revision": "80e118c1cc0bc9f8382a8cee564c2112"
  },
  {
    "url": "cs/compilation.html",
    "revision": "29ef698e258aa5d7cd843577d8b19ba2"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "ccda3f5399555fe9c78bfb6fd685e6ca"
  },
  {
    "url": "cs/index.html",
    "revision": "f3aa42e19438beafa514fff1a11fac96"
  },
  {
    "url": "cs/keras.html",
    "revision": "c644bcd5fd43bdafeb0ebc1ef696b8ae"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "98748d5b741115e7d68bcab81b6631d7"
  },
  {
    "url": "cs/lwip.html",
    "revision": "2b01229498bf2be05ad618f743e21da0"
  },
  {
    "url": "cs/scala.html",
    "revision": "28548165a430958a64a643bc0d37f15e"
  },
  {
    "url": "ee/about.html",
    "revision": "5446ea599e4654fea17cc08e33f6ee4a"
  },
  {
    "url": "ee/chisel.html",
    "revision": "296eb48e0b426024ee22956f39531093"
  },
  {
    "url": "ee/index.html",
    "revision": "f1d30ccf9660e4848d56c250ed997002"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "7e598c36dcac5622dd295ebef6162cf5"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "9eb71eed6bb683ff0024874ecef8d25a"
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
    "revision": "e76d9cc2fe0ea589c5d2031ddcdff721"
  },
  {
    "url": "others/about.html",
    "revision": "d6bfcfacc675fa20bb8aee41fc1c007e"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "b71dd5643972caff3cf2a36b32c05425"
  },
  {
    "url": "others/android-studio.html",
    "revision": "5831827e529f72fccc2c1a84e27025b1"
  },
  {
    "url": "others/android.html",
    "revision": "c3f1f0206ee3cf5ee03ec4fb85380c2a"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "87e948f92ff34d60bcf5d1a1cac6795b"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "f1c29ad988f4b1b8d8a4714dce2017ea"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "056f54095d3a79ebd9282c8ebaab067a"
  },
  {
    "url": "others/css.html",
    "revision": "af5c2342f04577cb91b90258b4c87dee"
  },
  {
    "url": "others/docker.html",
    "revision": "c5fb7bebf34094a7d8d4b3585f09e713"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "c3320529e390dcdbc01f08525498417e"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "caa4cdae8638671a9ee7fdace6eb8b7f"
  },
  {
    "url": "others/english-writting.html",
    "revision": "c3a37103df3f4c31009dc76ea048cae5"
  },
  {
    "url": "others/esp32.html",
    "revision": "94ed2f8016cf42bda80f5e39bb2edcd0"
  },
  {
    "url": "others/freertos.html",
    "revision": "465b4942870f82ce82d51a2502e90835"
  },
  {
    "url": "others/git.html",
    "revision": "96be940e7fa0fb3a9454bd3f69887e5b"
  },
  {
    "url": "others/gns3.html",
    "revision": "cce6274b57392a1ff1fb5c7900b821bf"
  },
  {
    "url": "others/gps.html",
    "revision": "c9805ca8f5c48f258a561fa14264b427"
  },
  {
    "url": "others/html5.html",
    "revision": "6792b16818b717ffeb03e93206dd7298"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "267ea7bd3a90500e06c859eb5439c93d"
  },
  {
    "url": "others/index.html",
    "revision": "0fcebeb471ec39637fabab6a6eb764c1"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "0f8330a5140fc6f53973dfb8ea6cf71f"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "2bc650cf024e4006fdadacc6c3fd533f"
  },
  {
    "url": "others/javascript.html",
    "revision": "ea424babf7502f569209cde4c864bb5c"
  },
  {
    "url": "others/json.html",
    "revision": "98c153c36ec70c288ccdd689ab9c0ac9"
  },
  {
    "url": "others/latex.html",
    "revision": "fee0b2451a78c338287e1f2ec8a5c124"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "6a54ee65420d9e4414f43d578760bebf"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "3e30f63655609b7ab2bc914b12df6c75"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "7748da650b49bb3dded4e83fb0a00cd9"
  },
  {
    "url": "others/markdown.html",
    "revision": "dfbc703317d654bacb445ecfd22a8d55"
  },
  {
    "url": "others/matlab.html",
    "revision": "156c7c603dc36c312b0345f7e5849745"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "6482de645b9556a49805ed15363a5586"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "8139753c63b71757d3129fbd042d7736"
  },
  {
    "url": "others/network-security.html",
    "revision": "b7ec6307eb035032deb274899454b0c8"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "2000b092621091066b1f111b81be2e9f"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "d93f17b49408d985f5d6857cf7a7453a"
  },
  {
    "url": "others/poe.html",
    "revision": "3fb03af68c43cd92db0698e7704e6853"
  },
  {
    "url": "others/pyside2.html",
    "revision": "54ac45226d8c45d76af6372cd2e5cb78"
  },
  {
    "url": "others/python-socket.html",
    "revision": "1159712d6c40a4eeba631bb166395ab6"
  },
  {
    "url": "others/python.html",
    "revision": "831dd82a6967f5fa5d9601456a92f360"
  },
  {
    "url": "others/q-learning.html",
    "revision": "81dc354843eab7da56491a32e8a05efc"
  },
  {
    "url": "others/qr-code.html",
    "revision": "a0dca6de7a832e680b314190f4d94fcd"
  },
  {
    "url": "others/qt4.html",
    "revision": "b92aba5b9219a50eaa6b54ef3dbc55b5"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "e73e625af9f74cc36fe074b0a6fe16e9"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "235d4a48fdc2621c4ad7ce54d2d7f4cb"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "59975743d18e77c45437724f31fa2474"
  },
  {
    "url": "others/sd-card.html",
    "revision": "d57fc436a3a173b187fe1599c86ddc91"
  },
  {
    "url": "others/sdn.html",
    "revision": "fe8f423e496b332a827ac959c56936b1"
  },
  {
    "url": "others/star-uml.html",
    "revision": "86bfd4cffc6719a0ec380e3760e572c3"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "e5d82fa9f652c63834b603bbf6e4024c"
  },
  {
    "url": "others/verilog.html",
    "revision": "3c2ab66d32bd2e4641e17ae6af345f9c"
  },
  {
    "url": "others/vue.html",
    "revision": "4aff3c773933c8a1f553a32e9c53553c"
  },
  {
    "url": "others/w5500.html",
    "revision": "2039d9b1d4d095a43580d17d46f1e497"
  },
  {
    "url": "others/w7500.html",
    "revision": "9e203fbe239894fd5fcf352fd50c84b1"
  },
  {
    "url": "resume.html",
    "revision": "8fdea8f3dd999d9009a40fabc886af1a"
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
