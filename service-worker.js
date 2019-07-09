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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "afbb867c23d603bcfab27a1ada5d9973"
  },
  {
    "url": "assets/css/0.styles.6e7aa9f8.css",
    "revision": "3559d3a6e41ca47bb0d09208f45235d9"
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
    "url": "assets/js/10.f43b536f.js",
    "revision": "8e215246289333e48c2aa4d826166516"
  },
  {
    "url": "assets/js/11.6595aaf1.js",
    "revision": "f6eab87da9bb9daa4c93042d0fba9f2e"
  },
  {
    "url": "assets/js/12.de52d923.js",
    "revision": "f8daf80bb28aebfb7437338c7e10170c"
  },
  {
    "url": "assets/js/13.9d54abc3.js",
    "revision": "30295e41fbb38d3b4a0d699bc63214f3"
  },
  {
    "url": "assets/js/14.fb6117a6.js",
    "revision": "1d1076c3c73bc15d51d980b0c763df15"
  },
  {
    "url": "assets/js/15.e06f7176.js",
    "revision": "31c008b0eede60270a0477bf0a2d531e"
  },
  {
    "url": "assets/js/16.1b4ee21a.js",
    "revision": "8b2ef1fb6a37594998b0b3bf91a311e2"
  },
  {
    "url": "assets/js/17.9a959a1a.js",
    "revision": "2693af691cf7e5f2c83ce0876d4624b1"
  },
  {
    "url": "assets/js/18.61e7b6e4.js",
    "revision": "684507500bdef2ae8127445ba9be0f55"
  },
  {
    "url": "assets/js/19.cf5f920d.js",
    "revision": "3382801664d49e64adb50dbcdf896fcb"
  },
  {
    "url": "assets/js/2.39763849.js",
    "revision": "f6756e63881d3469251ba6c4267d92aa"
  },
  {
    "url": "assets/js/20.5835f211.js",
    "revision": "8231fbe0876514279fa31945af2f6a2a"
  },
  {
    "url": "assets/js/21.29ce6c57.js",
    "revision": "fd662d1ce2c9dc9c5639d188b235f632"
  },
  {
    "url": "assets/js/22.5e9e04e4.js",
    "revision": "91210d24957ffe5942aa6611c96856b7"
  },
  {
    "url": "assets/js/23.72b605fd.js",
    "revision": "6aa2d759cc033ce0140bb02707896f44"
  },
  {
    "url": "assets/js/24.c289e4ef.js",
    "revision": "0f67872bb98038be30a0756b9c5b58ab"
  },
  {
    "url": "assets/js/25.a0c75d1d.js",
    "revision": "767bff7b98835ab3f87f6509c030ef5b"
  },
  {
    "url": "assets/js/26.e934e888.js",
    "revision": "956aacab8a61731f0b4e838eb0c735f5"
  },
  {
    "url": "assets/js/27.dcc0e9d7.js",
    "revision": "e28e651dfb75bc067eff5b307cfb3e29"
  },
  {
    "url": "assets/js/28.9808199f.js",
    "revision": "0916228059cd01ea583645f5b35e7af7"
  },
  {
    "url": "assets/js/29.a7e077bc.js",
    "revision": "0352ae3bc67e70f7bdfc352540a61414"
  },
  {
    "url": "assets/js/3.1bad5f75.js",
    "revision": "8f8d5965929deb791c956eb8170410d1"
  },
  {
    "url": "assets/js/30.21af5c64.js",
    "revision": "d690303983b9ecdf8fc0d314515c8084"
  },
  {
    "url": "assets/js/31.6c214b74.js",
    "revision": "30e6430bdd14eb5f71c2d3639194f850"
  },
  {
    "url": "assets/js/32.534e5715.js",
    "revision": "9c23fb0e41e08fc694dacf5f6c52aef1"
  },
  {
    "url": "assets/js/33.0b46e3e2.js",
    "revision": "46d98cf4fb17c16fa2d7ba8b09a6e886"
  },
  {
    "url": "assets/js/34.6ae5611e.js",
    "revision": "4ad0667184fdc21e0b1ad36c98d0fb90"
  },
  {
    "url": "assets/js/35.d2005405.js",
    "revision": "d84eacd8f79e770ef0c964261592226d"
  },
  {
    "url": "assets/js/36.8dc751b9.js",
    "revision": "01af90e19e3f8f0d25383a2272617fc6"
  },
  {
    "url": "assets/js/37.dfce79d1.js",
    "revision": "f8161bea91ff7f6367edd4cb41da2425"
  },
  {
    "url": "assets/js/38.8addc573.js",
    "revision": "df1536bdcaf487f4df1bf321b36f05f9"
  },
  {
    "url": "assets/js/39.d590d115.js",
    "revision": "f2f2321b3c545a6e4b6e5a85a392539e"
  },
  {
    "url": "assets/js/4.b4e7f111.js",
    "revision": "914058cdd48c99e04207a8c589ee443a"
  },
  {
    "url": "assets/js/40.bbd258c2.js",
    "revision": "860b958bb11c691a7991ee0f6b065903"
  },
  {
    "url": "assets/js/41.145586c9.js",
    "revision": "2462b13660ddb5500ca72173f8e55826"
  },
  {
    "url": "assets/js/42.e3bd6d4b.js",
    "revision": "353d676f681aaab1d3070831baa8763e"
  },
  {
    "url": "assets/js/43.0c03caf4.js",
    "revision": "e6962796e5683d0dd03cdcb1248d4be6"
  },
  {
    "url": "assets/js/44.3f534a0f.js",
    "revision": "67511822625ca6613921f3632cd9fbb3"
  },
  {
    "url": "assets/js/45.d8ab6ab0.js",
    "revision": "e69a0f3409a007b597f1007cc567084b"
  },
  {
    "url": "assets/js/46.53ba7f1d.js",
    "revision": "de7a3a9e04d41fbff9523c4a4249f85c"
  },
  {
    "url": "assets/js/47.3167bd8d.js",
    "revision": "066191fd38d5394e0fa1f45cd4ed3d6a"
  },
  {
    "url": "assets/js/48.cb81bec0.js",
    "revision": "608ccccdf3a3082ffd84dd57f4a0af4c"
  },
  {
    "url": "assets/js/49.113fc0e3.js",
    "revision": "4c323f89be35ffec49480ea4a69c333e"
  },
  {
    "url": "assets/js/5.3f0149fd.js",
    "revision": "c9aa830e70b7c00d86f2d4dac1957311"
  },
  {
    "url": "assets/js/50.fcf01363.js",
    "revision": "f16b63b61be079695833b211839f4a44"
  },
  {
    "url": "assets/js/51.d4fa3fa1.js",
    "revision": "693ab0d771c31e2305e6d4db5c311ef7"
  },
  {
    "url": "assets/js/52.cc17a122.js",
    "revision": "df1752fb14919b0cdd37ec8e5bc54027"
  },
  {
    "url": "assets/js/53.bfe4a300.js",
    "revision": "c2b92434f65ddbeb37a2aaf92756cddd"
  },
  {
    "url": "assets/js/54.09016351.js",
    "revision": "a694668929d9ff827cee310f888c6a3f"
  },
  {
    "url": "assets/js/55.1ea4335a.js",
    "revision": "e9a7c5b8926f9a6419171446e3d523df"
  },
  {
    "url": "assets/js/56.c2e78003.js",
    "revision": "5883f6f1512e96987fba5379d0ae57ac"
  },
  {
    "url": "assets/js/57.0bc3c306.js",
    "revision": "931d210a2d1b4b21880dede3a351fa83"
  },
  {
    "url": "assets/js/58.d28bd29e.js",
    "revision": "0dbd11dd33a86679d8f794788f08d61f"
  },
  {
    "url": "assets/js/59.9acec8f3.js",
    "revision": "1389ac7936b146ae6e9ff6e5d7dd0da3"
  },
  {
    "url": "assets/js/6.f847a9ff.js",
    "revision": "f8514aadf526762a8e20a4c3b719df52"
  },
  {
    "url": "assets/js/60.9228943d.js",
    "revision": "3313d5975eed345825ab3232dc2d0f36"
  },
  {
    "url": "assets/js/61.33a9d21b.js",
    "revision": "b346a927ca86b3eea524af69992ed717"
  },
  {
    "url": "assets/js/62.0b41a010.js",
    "revision": "beace325af7f1660db468972248048a4"
  },
  {
    "url": "assets/js/63.bace85fe.js",
    "revision": "4253cd2ea703f40a51c85e9be2a49cce"
  },
  {
    "url": "assets/js/64.174fb7f7.js",
    "revision": "d93fd52e2c8b61402b8578b631fc9905"
  },
  {
    "url": "assets/js/65.73aa4ecd.js",
    "revision": "02110cd19d55ee66f6e71ea6474ac27b"
  },
  {
    "url": "assets/js/66.4bac8383.js",
    "revision": "638f17ce62bce617b34fd18334a1f0ab"
  },
  {
    "url": "assets/js/67.81745478.js",
    "revision": "2bd09b386e7df53926352eb7d8ed0b2d"
  },
  {
    "url": "assets/js/68.6f115916.js",
    "revision": "cd07cb67e050472633d0596f20fea4c4"
  },
  {
    "url": "assets/js/69.6d8dc55a.js",
    "revision": "9cb5d85233da51c9e57c443cf1059a4e"
  },
  {
    "url": "assets/js/7.ec2b9a92.js",
    "revision": "39fd26759d6b8b645d69a2c0cc590ba9"
  },
  {
    "url": "assets/js/70.518e0979.js",
    "revision": "ff5aede08014113483a4c3ea71d782c2"
  },
  {
    "url": "assets/js/71.8f118f1a.js",
    "revision": "7df09c5a401961d6b378942dcc3bc2f9"
  },
  {
    "url": "assets/js/72.73d34ec2.js",
    "revision": "32d41025a9c7ef71119b9a1efce43a86"
  },
  {
    "url": "assets/js/73.3d073b18.js",
    "revision": "280d8a0e56b0d1f15233fb537dce7b74"
  },
  {
    "url": "assets/js/74.033cf08d.js",
    "revision": "4986566d89262de4f0fee9a1e4df3544"
  },
  {
    "url": "assets/js/75.947344b7.js",
    "revision": "cb02c30c7b3b3442696a2e8192b42a1b"
  },
  {
    "url": "assets/js/76.9c1a2d2c.js",
    "revision": "1a7cd87b55a065afa0e62940ad02df73"
  },
  {
    "url": "assets/js/77.829a6bab.js",
    "revision": "cf41e86de945d6b227cf63888e4dc10b"
  },
  {
    "url": "assets/js/78.485f4745.js",
    "revision": "212d3ef40c6ab2e99abd75244476455a"
  },
  {
    "url": "assets/js/79.458c4197.js",
    "revision": "8cf0f96e6be600da7fa6f42769e5893a"
  },
  {
    "url": "assets/js/8.f18d9c07.js",
    "revision": "ec8c2f02fbbeaadfb677d3af48310a9c"
  },
  {
    "url": "assets/js/9.e25e8f07.js",
    "revision": "b37e0b1e4c902fd1f88c13aa4dcd216c"
  },
  {
    "url": "assets/js/app.2e7dd317.js",
    "revision": "98273ee2e5770ef49f9281fafecaae8e"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "db0c44c1899e77dd7cccd3bffa19fdb3"
  },
  {
    "url": "cs/bash.html",
    "revision": "cf3fd643341c44ffd57b753fb4f21da6"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "0b73d7f1d7ae0dc312be0ac4a2e46ac9"
  },
  {
    "url": "cs/cmake.html",
    "revision": "1fd46462e812509fa9d8090a7d8f4b02"
  },
  {
    "url": "cs/compilation.html",
    "revision": "eb5b9805131269fc123767aaa296a810"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "88b0fc454beeaf42101139861deea71b"
  },
  {
    "url": "cs/index.html",
    "revision": "8c0c74983a80afce20dbff618c7f9336"
  },
  {
    "url": "cs/keras.html",
    "revision": "345dc1538b54b82554e481bff0bfb78e"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "f2da0e67f307c2939a668300adacf49b"
  },
  {
    "url": "cs/lwip.html",
    "revision": "4174ede56dd3977229077bf0744f56ba"
  },
  {
    "url": "cs/scala.html",
    "revision": "d0d003f3791831fbc729096b77621ded"
  },
  {
    "url": "ee/about.html",
    "revision": "99ceae81f7843af9d802878f0bd1a731"
  },
  {
    "url": "ee/chisel.html",
    "revision": "ce6102261a0a6fdc844e15bc92f8142f"
  },
  {
    "url": "ee/index.html",
    "revision": "c2e8cdd53b7ac2d28e280678a2ebc0b0"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "8f523f4acee7c0dc08b4ad455814ffb6"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "9778fe5551017e83a9e78255578a1659"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "3de0e1043f1fb9d5bff34cd81388ffe1"
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
    "revision": "ad671be4236297f6717e009b3e3f892e"
  },
  {
    "url": "others/about.html",
    "revision": "ccbe766170d7b5196def084071208c85"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "a447d61998b4ad36311b38d337f50177"
  },
  {
    "url": "others/android-studio.html",
    "revision": "3ff937e6c267ebf0f645c6e7e09758a0"
  },
  {
    "url": "others/android.html",
    "revision": "a82d26145190d2982ca1e045f2c2c096"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "24b900d4818082aa4d396994ab065d5b"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "b1e3374332836184cdaf11b706c0b955"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "d951e4fc7888a9174578f737fd51597f"
  },
  {
    "url": "others/css.html",
    "revision": "58d50af2c92c35c9dca4c5120f0a33cc"
  },
  {
    "url": "others/docker.html",
    "revision": "f20d636785388bb25da8cc9f4f7bc897"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "8fe4679bce008a50f4db1d9655e98317"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "1e46f0d074ec6d1484511a81e0ceac18"
  },
  {
    "url": "others/english-writting.html",
    "revision": "574052e2f84bb2091e9f8f2f1adc94f6"
  },
  {
    "url": "others/esp32.html",
    "revision": "55d62c2d6eedaad7747e7421e0dc5ba2"
  },
  {
    "url": "others/freertos.html",
    "revision": "8665cc51560357cef9f898ff4d80f70d"
  },
  {
    "url": "others/git.html",
    "revision": "a2113e96a6aae6460c4f2ccd7d97d07b"
  },
  {
    "url": "others/gns3.html",
    "revision": "3f0e7647dcc684bc56d95778f215b868"
  },
  {
    "url": "others/gps.html",
    "revision": "e8c42690cac9d476283df9d8ae961c79"
  },
  {
    "url": "others/html5.html",
    "revision": "01198e9332e36413837b42648bc49581"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "9dd4d90d80c7a2e537a84ee58fb0c787"
  },
  {
    "url": "others/index.html",
    "revision": "461b60e912346541ed8a52d7abbeb341"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "3f601e1c922bfada3f23be84c786a202"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "a441a4dd4f1d87955de525c21b2fada0"
  },
  {
    "url": "others/javascript.html",
    "revision": "c2d222967251cee2f42962d7b4a6ceee"
  },
  {
    "url": "others/json.html",
    "revision": "ae77f60f1abbbbb9250db3b1484e4593"
  },
  {
    "url": "others/latex.html",
    "revision": "0dfcae9f833cf015acd39104cfad02d2"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "261faa4d7afcd0dba149593a0ba2db4c"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "2b71415ccdf0ecf1310c86b68108e8a8"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "a478af88fb85529a6f9a975de59aa7c7"
  },
  {
    "url": "others/markdown.html",
    "revision": "fbf137541a28e837ef6f90ba887404fc"
  },
  {
    "url": "others/matlab.html",
    "revision": "52ed667b798d12bfa522b02b525c570c"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "b5008fd8b11a5292b9f48c1ad3fb0897"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "4773177b59b657faaf31a925136b84a0"
  },
  {
    "url": "others/network-security.html",
    "revision": "dde91ce8edff5354cfc76cbbd7f271c3"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "37ef80ec650c1241a49787f2a2852574"
  },
  {
    "url": "others/oral_english.html",
    "revision": "bd9d5977b91df9663247cdb97168ccca"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "9c77e749143853965d5dd8ff3c60cf28"
  },
  {
    "url": "others/poe.html",
    "revision": "f6d83f12fa8442ef1a28cda01438d042"
  },
  {
    "url": "others/pyside2.html",
    "revision": "1b7de419863bcf156e2a462bfbcbffa4"
  },
  {
    "url": "others/python-socket.html",
    "revision": "7e7a62a793d7d4e46cbe8ffe1066a4d5"
  },
  {
    "url": "others/python.html",
    "revision": "2069aeee3a30a0dede0b2c60a0cca002"
  },
  {
    "url": "others/q-learning.html",
    "revision": "dc33d0f004baef20991bfbd63346982c"
  },
  {
    "url": "others/qr-code.html",
    "revision": "7a3284f73f4a9b67d9d44389a76280fd"
  },
  {
    "url": "others/qt4.html",
    "revision": "d403b70fe0c76f7225f6a95c1453a0d3"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "78d04fbace1c1e912d966c81f1f55d9f"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "782e5979a10851b5a4e3216f5ff8b648"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "9651449745c28f820b1e9d6474d1969a"
  },
  {
    "url": "others/sd-card.html",
    "revision": "869510729972733146f0727c8933ad60"
  },
  {
    "url": "others/sdn.html",
    "revision": "8c9fcbfb438409f1c5a3583c656062aa"
  },
  {
    "url": "others/star-uml.html",
    "revision": "aeb40fd71ac2830e3d13cc6e5483681b"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "61e03de8074179dfe604e8b43d4c81e8"
  },
  {
    "url": "others/verilog.html",
    "revision": "c33d7feb9d44f7005b60a317db293ebd"
  },
  {
    "url": "others/vue.html",
    "revision": "5cd7aefee0dea894b18da93d70f180de"
  },
  {
    "url": "others/w5500.html",
    "revision": "ade0136ac891e243d52bf69e9afaeabf"
  },
  {
    "url": "others/w7500.html",
    "revision": "1e7f88a441bd09b496e65cc333b49d02"
  },
  {
    "url": "resume.html",
    "revision": "d35232c7551a557db0753629b026c733"
  }
].concat(self.__precacheManifest || []);
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
