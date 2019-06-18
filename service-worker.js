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
    "revision": "479bde3bb2c5ce6cb37a7ea6e1f125fb"
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
    "url": "assets/img/sigmoid_function.24758bff.png",
    "revision": "24758bffbd6a9a5d243ff226cb1e3306"
  },
  {
    "url": "assets/img/tcp_ip_stack.13913b2b.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "assets/js/10.798dfdf0.js",
    "revision": "d9991cfa3beb427433918f901c61f19f"
  },
  {
    "url": "assets/js/11.9fbed10e.js",
    "revision": "4d7d610ff5870095140898f00b4d5d70"
  },
  {
    "url": "assets/js/12.be0bd4a5.js",
    "revision": "7f8073074245871d305894cb0585f9b3"
  },
  {
    "url": "assets/js/13.3d1a14ef.js",
    "revision": "4802821f142f5189d5cb3394ddbb935b"
  },
  {
    "url": "assets/js/14.61182e06.js",
    "revision": "af7b308d5e4adc9b4ac53df74d4954f1"
  },
  {
    "url": "assets/js/15.7527ddea.js",
    "revision": "1656dfa62e1d3390b0ebd486daff65f8"
  },
  {
    "url": "assets/js/16.782b8339.js",
    "revision": "d2ca427389b7466d3ed7af5623f1bcbe"
  },
  {
    "url": "assets/js/17.3252cfa6.js",
    "revision": "cd0ae04bfb5b74e9702354bc06e1b006"
  },
  {
    "url": "assets/js/18.0262ea7e.js",
    "revision": "8a51772dbddb744f08ed39165bbcccd2"
  },
  {
    "url": "assets/js/19.48987cca.js",
    "revision": "149ed4f423cfa89c65a0904147a3a370"
  },
  {
    "url": "assets/js/2.3db96462.js",
    "revision": "8096d553d8dad66d592a8f87a0834ce7"
  },
  {
    "url": "assets/js/20.63a22211.js",
    "revision": "b257455a628f18bdccc8d00ee3283333"
  },
  {
    "url": "assets/js/21.0825e396.js",
    "revision": "b4f2598f6bc9040e3d3657598e87399f"
  },
  {
    "url": "assets/js/22.dbe85a92.js",
    "revision": "26b5feb3abce5e83fb4a471e923e4bc6"
  },
  {
    "url": "assets/js/23.7dd3a456.js",
    "revision": "d14dbf35bd589f49a4c9dc6667878118"
  },
  {
    "url": "assets/js/24.3356a582.js",
    "revision": "0ec7f400f412c6518985239386c3a41a"
  },
  {
    "url": "assets/js/25.0f14d512.js",
    "revision": "eabf219678e31502d58beac7647dc664"
  },
  {
    "url": "assets/js/26.08a6c37b.js",
    "revision": "d420ad6df10a2c845ab50a1db81e60d3"
  },
  {
    "url": "assets/js/27.ad939565.js",
    "revision": "9b176e29d39f12c3988bb2dda2d67e6a"
  },
  {
    "url": "assets/js/28.b6867902.js",
    "revision": "3a3f8bf22b5c006bc9ca9304ad096867"
  },
  {
    "url": "assets/js/29.3c545354.js",
    "revision": "9ac61c1689b7c9ae8468161fe9b271b5"
  },
  {
    "url": "assets/js/3.e3a9cbfa.js",
    "revision": "94facc49b86462efab2bc725ffb61378"
  },
  {
    "url": "assets/js/30.3cf3308c.js",
    "revision": "02132860fb57b11a4a9c533eb3b55004"
  },
  {
    "url": "assets/js/31.302cec7f.js",
    "revision": "d4bfb0fc110b98c30b3fa09aa9ade33e"
  },
  {
    "url": "assets/js/32.472420a0.js",
    "revision": "a7d0357e171f8aec115220cbcb04902d"
  },
  {
    "url": "assets/js/33.7899b430.js",
    "revision": "f9a3c3da370ec8a9072bfefbc7615ede"
  },
  {
    "url": "assets/js/34.b85d8815.js",
    "revision": "d58bce287f25695a50057b68fb7b86dc"
  },
  {
    "url": "assets/js/35.1049aa02.js",
    "revision": "b8273c40b6102358c653b06a2dac9ad4"
  },
  {
    "url": "assets/js/36.fe4e0aef.js",
    "revision": "30fd742e183856e9c45607f6a1ceb551"
  },
  {
    "url": "assets/js/37.eb390f9a.js",
    "revision": "b2a4813afc5d384f3b453e4e56a14a58"
  },
  {
    "url": "assets/js/38.05e10f74.js",
    "revision": "63879b4a2ba00ba06c8feb27e42e3e72"
  },
  {
    "url": "assets/js/39.aba6c804.js",
    "revision": "3f20526c531679d0f306555cc2eea85b"
  },
  {
    "url": "assets/js/4.4a82bd4c.js",
    "revision": "7bdf16e1c5884ea9c72be4da646356bb"
  },
  {
    "url": "assets/js/40.b7f34ebd.js",
    "revision": "e5b8974f458c8d1a88293193ce78cb93"
  },
  {
    "url": "assets/js/41.47854398.js",
    "revision": "d666f60346a4858406d9e73a76ab1583"
  },
  {
    "url": "assets/js/42.75397a86.js",
    "revision": "2f547fb6cefc43b8256014b8a1701239"
  },
  {
    "url": "assets/js/43.ff44a87a.js",
    "revision": "83c4bfbbea3534b18fafcfa45e0570c1"
  },
  {
    "url": "assets/js/44.e50c5137.js",
    "revision": "feae2d7c8701872245dc1e6093d73455"
  },
  {
    "url": "assets/js/45.62d7f76e.js",
    "revision": "0e7217f9e98070c4ae5dffd5b70346b7"
  },
  {
    "url": "assets/js/46.c8b0c8de.js",
    "revision": "60a60b062a8ca6fcd7504e30b26ec37e"
  },
  {
    "url": "assets/js/47.e64a337b.js",
    "revision": "c79adf38e6334a6b3b9f20dccf7988c7"
  },
  {
    "url": "assets/js/48.5436652c.js",
    "revision": "aaf57f0080485b63f26cdff8dc9a61e5"
  },
  {
    "url": "assets/js/49.34751ccd.js",
    "revision": "9a2ac1f3006172e02442728f333ddd57"
  },
  {
    "url": "assets/js/5.698b3271.js",
    "revision": "2a752fb83abbaf59a82ef5db434ce825"
  },
  {
    "url": "assets/js/50.fd466c18.js",
    "revision": "6a5124d56456a44505837c7010a94ab4"
  },
  {
    "url": "assets/js/51.28cb8f20.js",
    "revision": "6052e8c8e682c0a51f6b87b44d430581"
  },
  {
    "url": "assets/js/52.ced4661f.js",
    "revision": "e84fdf628d37d9698ad392d010f14b62"
  },
  {
    "url": "assets/js/53.304c9d4f.js",
    "revision": "0f993a0d9bc96a06526421d500f700e6"
  },
  {
    "url": "assets/js/54.d32bf824.js",
    "revision": "c6f92a982a28626bdae35277ce12db53"
  },
  {
    "url": "assets/js/55.7ebe9641.js",
    "revision": "0dd2b13bae2b30c37bc75791f24ef7e5"
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
    "url": "assets/js/58.25d5014b.js",
    "revision": "679ae950fbfa8daeec4a66721d88bf05"
  },
  {
    "url": "assets/js/59.df0ae4e7.js",
    "revision": "ba1101fa48a8c10df6537e0005125110"
  },
  {
    "url": "assets/js/6.409f552b.js",
    "revision": "21eef8dc751af6549e3fbfe2fba64077"
  },
  {
    "url": "assets/js/60.c81a9edc.js",
    "revision": "61c042a9900ace845bc35fc15c9347d0"
  },
  {
    "url": "assets/js/61.148a40a2.js",
    "revision": "06873218070a0b7763aa499d1c6e3977"
  },
  {
    "url": "assets/js/62.f6ddee9f.js",
    "revision": "9378b3d5e7589619bdcf6dd4b02ee5e7"
  },
  {
    "url": "assets/js/63.1b3541e9.js",
    "revision": "eed62279e24e9a72b82e3dbc54a94801"
  },
  {
    "url": "assets/js/64.b4554a0c.js",
    "revision": "f4968c7d937e843bcf70899fb7e726dc"
  },
  {
    "url": "assets/js/65.ccbc8bda.js",
    "revision": "ad2feae827fdb2ec90c68621b127f4e3"
  },
  {
    "url": "assets/js/66.d9ee1863.js",
    "revision": "ccae0690838dc94aa9d3b9e86801bde9"
  },
  {
    "url": "assets/js/67.9813fa81.js",
    "revision": "37b17545670095b2de6c91d377a40409"
  },
  {
    "url": "assets/js/68.215bcb75.js",
    "revision": "adf284c53d2fce0b2200b9abdb17f9b6"
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
    "url": "assets/js/70.f8230dd4.js",
    "revision": "7e5ff3465e634df123de2fbf8db9f067"
  },
  {
    "url": "assets/js/71.bbe11d77.js",
    "revision": "9216c5461b54ac9e49f837dfdd1ec3fa"
  },
  {
    "url": "assets/js/72.e6eff619.js",
    "revision": "e7a2bbef2f193c499bbff4eb87214c47"
  },
  {
    "url": "assets/js/73.f583e9d9.js",
    "revision": "c4049b8ab50576dc7295cbb81c7afa83"
  },
  {
    "url": "assets/js/74.5c0d756d.js",
    "revision": "4f656ade306696970c8ed432f2918849"
  },
  {
    "url": "assets/js/75.97bf741b.js",
    "revision": "56d19ff2d2dce3d48c7ffb9013d86d0b"
  },
  {
    "url": "assets/js/76.0ef899ea.js",
    "revision": "842c8933d608fc46bed754f5b515e3c2"
  },
  {
    "url": "assets/js/8.557c5cb5.js",
    "revision": "3e189cd37b76d48c714943fbf58de3ac"
  },
  {
    "url": "assets/js/9.83a6de03.js",
    "revision": "a4bb808c63a199b1cc983f8470576924"
  },
  {
    "url": "assets/js/app.046d86cd.js",
    "revision": "e77396f6791ce97b53e0f5f9d91fdde3"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "5f341b7332bceaeef173f23a59340470"
  },
  {
    "url": "cs/bash.html",
    "revision": "15dff6650f9fd1a4fc4739c9885642ab"
  },
  {
    "url": "cs/cmake.html",
    "revision": "b1557c10135ccf0ac4973e1514c72118"
  },
  {
    "url": "cs/compilation.html",
    "revision": "844bc0c87d4135b67bb48f38f9a18bb7"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "7deb5f6504726f69dbf37131e6502ba1"
  },
  {
    "url": "cs/index.html",
    "revision": "abc20163838c59631c266727b3743c2e"
  },
  {
    "url": "cs/keras.html",
    "revision": "3905a53e3783078fbf19f439945bcbc5"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a99f9f56de042a87645d70ae6badd1bb"
  },
  {
    "url": "cs/lwip.html",
    "revision": "2911edbb8b5de6059f1cc2c6f45a5ecd"
  },
  {
    "url": "cs/scala.html",
    "revision": "7a88267bfb69075b79a89f71a899bb23"
  },
  {
    "url": "ee/about.html",
    "revision": "2847cb9b602986d43224e30a1a9e2c3e"
  },
  {
    "url": "ee/chisel.html",
    "revision": "fdcf1aafd0d24a09bdfc924849e4c967"
  },
  {
    "url": "ee/index.html",
    "revision": "9d71b9d2040022c7f40be774e6b4af53"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "d3f3135d3f0635838fca8246c43cf1c7"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "68852383b4b3bcbc90314e53a64a560c"
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
    "revision": "63284f5d45cef3bf509a11590696eeca"
  },
  {
    "url": "others/about.html",
    "revision": "8ec5df2c4f9092f310d8f0d2ea69f97c"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "dec4ecf49799043ae62f65a677effb2d"
  },
  {
    "url": "others/android-studio.html",
    "revision": "6b682ad943102575f9f738ebbce3b36c"
  },
  {
    "url": "others/android.html",
    "revision": "80489ff5f23fb1291631cf6b9999c39f"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "b641263b4f6d1fa78b8c528e77022504"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "a075262a0c477a67ed16193bd989111c"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "2a00e7e71fa182524910df30a5cd066d"
  },
  {
    "url": "others/css.html",
    "revision": "1587eca16d64067e98f4cb9b3a5a2123"
  },
  {
    "url": "others/docker.html",
    "revision": "19474bc9bb1e2ccfc88f224fb9b6ec22"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "4e145d4a7e8089a7a238dbf171fda291"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "a1a9f747c636b8880b1484f74e3ef433"
  },
  {
    "url": "others/english-writting.html",
    "revision": "c32b394ccdf907a9493145d0b6e5fe13"
  },
  {
    "url": "others/esp32.html",
    "revision": "6c5f9131388647dcbb2d88695035fc22"
  },
  {
    "url": "others/freertos.html",
    "revision": "f2da8b068f4d0dc26f330c3eae431709"
  },
  {
    "url": "others/git.html",
    "revision": "f790964a6af8b6935e9baf379e723005"
  },
  {
    "url": "others/gns3.html",
    "revision": "1d5eb58417084fff9c9d8ef71805bca9"
  },
  {
    "url": "others/gps.html",
    "revision": "786341bfbedcfbd6fac763df8764cac2"
  },
  {
    "url": "others/html5.html",
    "revision": "c12b8512539b7fb6048ae60ae657d819"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "50fe6a3e79a7bb40941da8967916902b"
  },
  {
    "url": "others/index.html",
    "revision": "5df9559403b3abfc6cd66deca781ee1a"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "be3670fd05c3fd1ab15ff851c8675f1b"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "9071bdf6a8ab7a3729e1f93e0d14b23c"
  },
  {
    "url": "others/javascript.html",
    "revision": "467e079dab3c5a7ef5b270826d789dc8"
  },
  {
    "url": "others/json.html",
    "revision": "a827eb7a84397e5373fc96236c238f60"
  },
  {
    "url": "others/latex.html",
    "revision": "54b84c74a1e536a0dc7bd6fde43528ac"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "43f8e13e7fed01df11dd473fecf43498"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "f5ab4ed292c4f1bd906f0054aab05096"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "6f84de60c93e09e5302d95b31159e675"
  },
  {
    "url": "others/markdown.html",
    "revision": "398128e02f37eca15ffa23c75bd36eb3"
  },
  {
    "url": "others/matlab.html",
    "revision": "6f34d7b1de616f10f4cbbf16a24001dc"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "5bb5fa747928952607b49d42bbd00bf0"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "f605f702415e5b58c2b278a5bd93a440"
  },
  {
    "url": "others/network-security.html",
    "revision": "3b55595cbe2accc5083dc155b6173238"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "ec349cce36e0fd5422d0047637082494"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "72b70a21dd6f85457e1180f643b45026"
  },
  {
    "url": "others/poe.html",
    "revision": "e04b0c6ef2e80f8fe977ae41f5bee2f5"
  },
  {
    "url": "others/pyside2.html",
    "revision": "3787e283cc99093b5c17b77e4ba245c3"
  },
  {
    "url": "others/python-socket.html",
    "revision": "06861908d71b1a11403a1fa72e96ad75"
  },
  {
    "url": "others/python.html",
    "revision": "b9557b37f24cf1fcdfcef092f5b0e32f"
  },
  {
    "url": "others/q-learning.html",
    "revision": "e2fc6af718cec269eb9df02719a82769"
  },
  {
    "url": "others/qr-code.html",
    "revision": "59510f23d5ea0a6c3698f4e8e0a80d5e"
  },
  {
    "url": "others/qt4.html",
    "revision": "40530bca558ee4271a1fe26af634b25e"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "8cc1804be50d1bf2a6cd22000a9c0268"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "4bd72b29e179c73c23383ea0605c9954"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "1ec771988f2120d9197e16545282af60"
  },
  {
    "url": "others/sd-card.html",
    "revision": "c1cdedc4dd4bbdd6e3398857c7d4c2d7"
  },
  {
    "url": "others/sdn.html",
    "revision": "5a07274f2c179676f7b3589ec11bc75b"
  },
  {
    "url": "others/star-uml.html",
    "revision": "e62b73e2aeba1c2f4ff8be0125a1b762"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "240c44a6742509a93ef58356d4f66ac2"
  },
  {
    "url": "others/verilog.html",
    "revision": "c9fc781f0cda42b73f444e00f8e28888"
  },
  {
    "url": "others/vue.html",
    "revision": "d57fd4529b0e25ea46396829663a8dcf"
  },
  {
    "url": "others/w5500.html",
    "revision": "d0a3beaf6ff69933a265a4e828a166c1"
  },
  {
    "url": "others/w7500.html",
    "revision": "c3be3b89d3e3f538342c08c5bc0818af"
  },
  {
    "url": "resume.html",
    "revision": "03b62d0240e0a10a1abb9dcc099011a9"
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
