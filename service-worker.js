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
    "revision": "f9be0803b09779a47ec15701bfb13d6e"
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
    "url": "assets/img/netif_list.73bfcf79.png",
    "revision": "73bfcf7938735b596ec4e2538170a853"
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
    "url": "assets/img/setup_lwip.c67664dc.png",
    "revision": "c67664dc461af6d603ec1bc2e3f6a661"
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
    "url": "assets/js/10.795e4662.js",
    "revision": "a6f555134e2ba354881169b219610039"
  },
  {
    "url": "assets/js/11.9fbed10e.js",
    "revision": "4d7d610ff5870095140898f00b4d5d70"
  },
  {
    "url": "assets/js/12.37900c23.js",
    "revision": "f0dd026389f14efefd9b63fe9d7a8c5a"
  },
  {
    "url": "assets/js/13.1a43e549.js",
    "revision": "da0f7b4d4bc3c3a130befe5adf506ebe"
  },
  {
    "url": "assets/js/14.481506ee.js",
    "revision": "49b8fe22381e4a375cd4132f5b6d0978"
  },
  {
    "url": "assets/js/15.da436db9.js",
    "revision": "d8b5a3eb0727b2ebd6c1f377d1569f17"
  },
  {
    "url": "assets/js/16.b0f930b5.js",
    "revision": "38e2c465e008897de7d41b07c9f24531"
  },
  {
    "url": "assets/js/17.4dd4a422.js",
    "revision": "ee4cc90a0583c24447aaeeddb8dab613"
  },
  {
    "url": "assets/js/18.77111b04.js",
    "revision": "f1e9873a0cdf786eab87d9d669171a58"
  },
  {
    "url": "assets/js/19.48987cca.js",
    "revision": "149ed4f423cfa89c65a0904147a3a370"
  },
  {
    "url": "assets/js/2.b38a5ffc.js",
    "revision": "73ad8801c2d25406999f6a987ac6e7d6"
  },
  {
    "url": "assets/js/20.ea057b98.js",
    "revision": "9f59508209323f8a6e821a02faa10c5e"
  },
  {
    "url": "assets/js/21.0825e396.js",
    "revision": "b4f2598f6bc9040e3d3657598e87399f"
  },
  {
    "url": "assets/js/22.a769da33.js",
    "revision": "845b1d2f5cfc8b5cea58fd7aa0adaa3d"
  },
  {
    "url": "assets/js/23.b9043b82.js",
    "revision": "8750f5af580efd3ea56ede2edb14c8cb"
  },
  {
    "url": "assets/js/24.91705922.js",
    "revision": "ce897ffd3ea47d944e5150efe3c1c404"
  },
  {
    "url": "assets/js/25.5e85dfe6.js",
    "revision": "f515d6ad2ebff33d6cf2492c572b7a24"
  },
  {
    "url": "assets/js/26.08a6c37b.js",
    "revision": "d420ad6df10a2c845ab50a1db81e60d3"
  },
  {
    "url": "assets/js/27.c88ea89a.js",
    "revision": "004f026b8b7ce17c0daedd6cb395d940"
  },
  {
    "url": "assets/js/28.fa375a39.js",
    "revision": "141cdd019e54e70ef070cf2937a58f49"
  },
  {
    "url": "assets/js/29.3c545354.js",
    "revision": "9ac61c1689b7c9ae8468161fe9b271b5"
  },
  {
    "url": "assets/js/3.cbc3ec42.js",
    "revision": "c436bc1525ab01a70f60377bc4147ccc"
  },
  {
    "url": "assets/js/30.62e1daf2.js",
    "revision": "bc2befa0b6db7d57e0a847e98e228797"
  },
  {
    "url": "assets/js/31.9086755f.js",
    "revision": "435c0e0b244cabcb709a9128c0056bbb"
  },
  {
    "url": "assets/js/32.e46b1794.js",
    "revision": "3dd542de3008a70a1e1819d520b8c750"
  },
  {
    "url": "assets/js/33.0cf2568b.js",
    "revision": "7c0f7fbb845564d2d9ef00e09fae3fdb"
  },
  {
    "url": "assets/js/34.b85d8815.js",
    "revision": "d58bce287f25695a50057b68fb7b86dc"
  },
  {
    "url": "assets/js/35.0d2d34de.js",
    "revision": "1e9b889a0a427238aaf008cf3db25880"
  },
  {
    "url": "assets/js/36.2d5a7139.js",
    "revision": "b9c420c80667df087e8d53509006b438"
  },
  {
    "url": "assets/js/37.5d1448ea.js",
    "revision": "36938eebe8deb0359b89edea4dabb88f"
  },
  {
    "url": "assets/js/38.c915bae9.js",
    "revision": "ffaea4d4ce1ab830bd874ad8d42921a0"
  },
  {
    "url": "assets/js/39.c4eb1744.js",
    "revision": "0d61266df0c85f3fd65cc8eac0f920e2"
  },
  {
    "url": "assets/js/4.51a18632.js",
    "revision": "864acbd0fe15ec3585698ca62e4af0a4"
  },
  {
    "url": "assets/js/40.4fd516d3.js",
    "revision": "dc2c44ac505c7a5d8fcb6c3fc2971a58"
  },
  {
    "url": "assets/js/41.47854398.js",
    "revision": "d666f60346a4858406d9e73a76ab1583"
  },
  {
    "url": "assets/js/42.dd460097.js",
    "revision": "3c369b2b8a92bae4f9202ff44f5b383f"
  },
  {
    "url": "assets/js/43.f3c6c2d2.js",
    "revision": "7db9e8ac5da63201cabe42e80bca13ae"
  },
  {
    "url": "assets/js/44.e50c5137.js",
    "revision": "feae2d7c8701872245dc1e6093d73455"
  },
  {
    "url": "assets/js/45.a9cb85e7.js",
    "revision": "7f7ec3782ff9689b2231d7392cf21eda"
  },
  {
    "url": "assets/js/46.c8b0c8de.js",
    "revision": "60a60b062a8ca6fcd7504e30b26ec37e"
  },
  {
    "url": "assets/js/47.42b00224.js",
    "revision": "47be27f207538a5956eec89a70fb328b"
  },
  {
    "url": "assets/js/48.5436652c.js",
    "revision": "aaf57f0080485b63f26cdff8dc9a61e5"
  },
  {
    "url": "assets/js/49.1aeaf7ea.js",
    "revision": "1a731e1f532d65ad7b5e24f1c90b9919"
  },
  {
    "url": "assets/js/5.c4b80a82.js",
    "revision": "4430c270c54a0647ac4b075d225efd40"
  },
  {
    "url": "assets/js/50.c719ec7a.js",
    "revision": "661ceef384733e7f7a84f370ac8f4135"
  },
  {
    "url": "assets/js/51.5383823f.js",
    "revision": "dbe9fd1456f0d9dc77304dbd32b9cacf"
  },
  {
    "url": "assets/js/52.64d4a39f.js",
    "revision": "b48f28308fef340f576633104509b696"
  },
  {
    "url": "assets/js/53.c3a08c29.js",
    "revision": "0cdea0b67a69ee87fe875f1c93ab947a"
  },
  {
    "url": "assets/js/54.bb003d8d.js",
    "revision": "3c6e36ae34b6db8c95abc0275b7c725c"
  },
  {
    "url": "assets/js/55.ee9cfa71.js",
    "revision": "ca8e92bf517170b3d07df64c83b12638"
  },
  {
    "url": "assets/js/56.9f7ae3ab.js",
    "revision": "1c4811173352960256d905a7d7d4e48a"
  },
  {
    "url": "assets/js/57.b0b89344.js",
    "revision": "2b345c534e90fc913edd1253c3c07b35"
  },
  {
    "url": "assets/js/58.4a22c825.js",
    "revision": "ff329a7669092aec88fce0f90bea2eed"
  },
  {
    "url": "assets/js/59.ccf342b7.js",
    "revision": "beeb0e3b72129e6c2f9ef2157683e4a0"
  },
  {
    "url": "assets/js/6.f5fe8f1c.js",
    "revision": "5f8a044640d314d6d4a07feb64662ed2"
  },
  {
    "url": "assets/js/60.590aedb7.js",
    "revision": "418e330f4e71688c4fcadf3360f576fd"
  },
  {
    "url": "assets/js/61.e742ab0c.js",
    "revision": "74420d0a2e0395424171285c83b12af3"
  },
  {
    "url": "assets/js/62.5a0c6f49.js",
    "revision": "73dda8431539063284b23e1103c0c627"
  },
  {
    "url": "assets/js/63.028c8f54.js",
    "revision": "35770f6f040505b61b781861676d59e5"
  },
  {
    "url": "assets/js/64.d0783387.js",
    "revision": "0dbcdd4ceae5f01daf3c36a02384c29f"
  },
  {
    "url": "assets/js/65.163f0345.js",
    "revision": "1087bf72dceecdc5384504881808f4f6"
  },
  {
    "url": "assets/js/66.43e493a7.js",
    "revision": "0b52c16a3e7f3fddbae4d958ad57d08a"
  },
  {
    "url": "assets/js/67.2eed0c23.js",
    "revision": "6bab8d807aa6c9e2a06a8c814bf4a175"
  },
  {
    "url": "assets/js/68.d6170dcf.js",
    "revision": "513850cdcc5d465424212ca81f004bec"
  },
  {
    "url": "assets/js/69.0c785b0d.js",
    "revision": "af764510269d1a7145e08e679b4112e9"
  },
  {
    "url": "assets/js/7.72d85f6c.js",
    "revision": "2ff970366eaeee4881d1d4818445e01f"
  },
  {
    "url": "assets/js/70.9d6275d2.js",
    "revision": "5a5367e3023a4fd377dba6998194f4a2"
  },
  {
    "url": "assets/js/71.84adf56d.js",
    "revision": "d4c7c1391c0a1dfbbebdbf4906be1296"
  },
  {
    "url": "assets/js/72.da0de53f.js",
    "revision": "ababe3fb6c3ae9cd8394dc20432e9b3e"
  },
  {
    "url": "assets/js/73.4be6ae02.js",
    "revision": "3e50d12e4eacf8837be621bba50cd1a3"
  },
  {
    "url": "assets/js/74.185c66e6.js",
    "revision": "6c81cdec073d47e14785d14590a724ba"
  },
  {
    "url": "assets/js/75.5c141ebe.js",
    "revision": "7cb16228075d103846807dd66be8f236"
  },
  {
    "url": "assets/js/76.0ef899ea.js",
    "revision": "842c8933d608fc46bed754f5b515e3c2"
  },
  {
    "url": "assets/js/8.32487b60.js",
    "revision": "511ef6456434fe5637341e121843fd45"
  },
  {
    "url": "assets/js/9.329eb83c.js",
    "revision": "06d51474acfc648fdaf64dbd48d0a0e7"
  },
  {
    "url": "assets/js/app.659e2bff.js",
    "revision": "deedc261a734043ed159bc3f2a6497e9"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "1a0d3f8cea22b5e0b104e86b022e9a46"
  },
  {
    "url": "cs/bash.html",
    "revision": "c35f600863de8d9e07895af146082a99"
  },
  {
    "url": "cs/cmake.html",
    "revision": "191b9b42cdd3dd8316cb61beab324236"
  },
  {
    "url": "cs/compilation.html",
    "revision": "a17ffd3d0622aeab46dc4b2b1d43e919"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "807ec3096a29f08dee46e60e58cfddd5"
  },
  {
    "url": "cs/index.html",
    "revision": "cf34009f4f0bf33ee465a996eca4be99"
  },
  {
    "url": "cs/keras.html",
    "revision": "d5ebd68bd107cb0645e403a425a7ca43"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "66cc6b273810454aa6dfa3b7ea4d8cc0"
  },
  {
    "url": "cs/lwip.html",
    "revision": "f8d05ffcfabb4efabb50b54db12848bc"
  },
  {
    "url": "cs/scala.html",
    "revision": "7cdb1533c8c8a7a192c2e40cd9d4f8a2"
  },
  {
    "url": "ee/about.html",
    "revision": "e31b6a30cb77d779481be841af78d30b"
  },
  {
    "url": "ee/chisel.html",
    "revision": "ef22e917cda01ded2cd83f50a59bf81f"
  },
  {
    "url": "ee/index.html",
    "revision": "7dea0e0608da9147f95312712a809099"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "ac4ed79c5e0068ab805fc77b004764a3"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "47da58abb3f6eb14acf28c542164079e"
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
    "url": "images/cs/lwip/netif_list.png",
    "revision": "73bfcf7938735b596ec4e2538170a853"
  },
  {
    "url": "images/cs/lwip/setup_lwip.png",
    "revision": "c67664dc461af6d603ec1bc2e3f6a661"
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
    "revision": "254905b03ee5602e2d4d6856bbb60eb6"
  },
  {
    "url": "others/about.html",
    "revision": "73cff3e0c33c529f02b24e9201deaac3"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "21faa23e5cbecfd604fd6b77242aed10"
  },
  {
    "url": "others/android-studio.html",
    "revision": "9e9c5fa57aadd6763e03f6d17bbc783e"
  },
  {
    "url": "others/android.html",
    "revision": "21c2ba3d046c20fe5a96f49b144ce8fb"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "8c8fd7e804763d1aaaf6bdb7507fe48c"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "68a3428f70e58adf30b65888baf9b8d6"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "2f40570e105f0cd9ba140c00dce4a0ce"
  },
  {
    "url": "others/css.html",
    "revision": "fef6a2b67723dfda71eb47065a4accb9"
  },
  {
    "url": "others/docker.html",
    "revision": "ac8b8b3871ee0ff3e7d1928d5afdbb86"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "ac0ce8b42115768e66b6e94611d43ad0"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "bfd45ba4bcd74d8633c91adf1072da67"
  },
  {
    "url": "others/english-writting.html",
    "revision": "8642da5c341e6f85bff13cb9da9f2e5d"
  },
  {
    "url": "others/esp32.html",
    "revision": "8e0825c38e0071b1ac0d5e21a9156a6a"
  },
  {
    "url": "others/freertos.html",
    "revision": "4869e805d5e5b6a822ecf59e9cf15c75"
  },
  {
    "url": "others/git.html",
    "revision": "5e637dbd844c62c0efe47f0f8ce5a3b2"
  },
  {
    "url": "others/gns3.html",
    "revision": "de2bb07f576b1c104e7d736a001aef69"
  },
  {
    "url": "others/gps.html",
    "revision": "cb08aa95641599a0938d9ccc2e3e5a4a"
  },
  {
    "url": "others/html5.html",
    "revision": "73b2c13a5e6dfd52f2940c0d4635a391"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "c7a905c61bfc9db51b352d6d894620e5"
  },
  {
    "url": "others/index.html",
    "revision": "4dd1c1e8e104cc98adc98d5d68d63e40"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "c02236187d0e5632cc0d8b728d48f40d"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "38d928d0871ee5138b0b27ce1c2a50d4"
  },
  {
    "url": "others/javascript.html",
    "revision": "89fadaeeab180758fe9e412bc4b3118e"
  },
  {
    "url": "others/json.html",
    "revision": "9346bd2bb44bc0aad89b790fff9ff329"
  },
  {
    "url": "others/latex.html",
    "revision": "6f597e9cb1c6c80a1700aaecfe2f8e0f"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "a15bd5f18b45c9f63e739a06ada0c524"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "8d8915fd3f3d93067238561a204a2f16"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "1d4a51fc7e00300896f1a8bbbfcf3275"
  },
  {
    "url": "others/markdown.html",
    "revision": "116a72db1c1db957cd252c3f928a48ac"
  },
  {
    "url": "others/matlab.html",
    "revision": "dc944ea73c68b4ddbb2e9ee942dde066"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "f2ca548d5138346ffc9194c7e42ad40f"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "cf5075ef13d2155ab28c2018aa02dc08"
  },
  {
    "url": "others/network-security.html",
    "revision": "bec700dcf34fcdbc10d0f636e7e24fc0"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "31d9137c60afb5cd2dd7f747b0a819ab"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "54dde5769aafa4478c8b113d892f390a"
  },
  {
    "url": "others/poe.html",
    "revision": "ec58acc82e6191faed0519c6c3b6f495"
  },
  {
    "url": "others/pyside2.html",
    "revision": "604a703e50a9f62889f57241b5132235"
  },
  {
    "url": "others/python-socket.html",
    "revision": "87de90ae203b6a7f30784d930ec5a7dd"
  },
  {
    "url": "others/python.html",
    "revision": "cdd5f5d7efc9527a1aa4a4577af12b13"
  },
  {
    "url": "others/q-learning.html",
    "revision": "bb359dfd1db2cc2e95e2021e879471f1"
  },
  {
    "url": "others/qr-code.html",
    "revision": "b8e7e7c8cb85913b9e6078c9a7492d93"
  },
  {
    "url": "others/qt4.html",
    "revision": "f91a8356130adaf067e5e1b3bd8b6079"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "006abd69a3f23f869b0f2a64768bde55"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "ecd910b0442e28b57b910571e35502ca"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "e07334657323b4cec6cb47c9627b6cf9"
  },
  {
    "url": "others/sd-card.html",
    "revision": "be61a1183f02b2073bee3694686a9f5c"
  },
  {
    "url": "others/sdn.html",
    "revision": "8ee42ba3bf392d493b823c00868d5b29"
  },
  {
    "url": "others/star-uml.html",
    "revision": "e3658a0eee7412011e41094d968e388c"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "3834653c4ccb950b226205810fca9604"
  },
  {
    "url": "others/verilog.html",
    "revision": "6e577b2a0c91c936e759b12e481d076c"
  },
  {
    "url": "others/vue.html",
    "revision": "d8eef072c504092c95e4b7d7c89435f2"
  },
  {
    "url": "others/w5500.html",
    "revision": "e6f6614bcc9399316e9305fecd3f5557"
  },
  {
    "url": "others/w7500.html",
    "revision": "c384c6fea28bab8892d39f1856f97160"
  },
  {
    "url": "resume.html",
    "revision": "b147fcdc8c525ab5bbff101ee04c7c76"
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
