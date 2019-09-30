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
    "revision": "f9eb75300933d102e99d30f21d4c7d8d"
  },
  {
    "url": "assets/css/0.styles.59426545.css",
    "revision": "0cdcac5933a9f836387a8b2cba491aec"
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
    "url": "assets/img/cpu_core_system.99c3127b.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "assets/img/esp32_address_table.85ad7d78.png",
    "revision": "85ad7d785bd61aa4cb118f0043b0e85b"
  },
  {
    "url": "assets/img/esp32_external_memory.00b7148f.png",
    "revision": "00b7148f698a82bf10935863900e4886"
  },
  {
    "url": "assets/img/esp32_on_chip_address_table.24c64bff.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
  },
  {
    "url": "assets/img/esp32_pin_functions.671514cc.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
  },
  {
    "url": "assets/img/esp32_system_clock.212a5357.png",
    "revision": "212a53578bdae5d21866d16781a2a258"
  },
  {
    "url": "assets/img/esp32_system_structure.70e29ed6.png",
    "revision": "70e29ed6a527c6a0285db28bb7845464"
  },
  {
    "url": "assets/img/ethernet_frame.f4de10c4.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "assets/img/gpio_matrix.0bccff5a.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
  },
  {
    "url": "assets/img/image_map.017b48c6.png",
    "revision": "017b48c6656dddd64aed21cad3813ae0"
  },
  {
    "url": "assets/img/infrared_modulation_demodulation.f86ad3e6.svg",
    "revision": "f86ad3e629424c9af8a216abb58ec189"
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
    "url": "assets/img/lwip_api_message.6f551817.png",
    "revision": "6f55181782841bf71f3f1aa7c953d320"
  },
  {
    "url": "assets/img/lwip_heap.1ac8ef3c.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "assets/img/lwip_memp.1fc0c568.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
  },
  {
    "url": "assets/img/lwip_packet_message.217126c7.png",
    "revision": "217126c725e129b967094255902f19ba"
  },
  {
    "url": "assets/img/lwip_packets_into_core.85a67ff6.png",
    "revision": "85a67ff6553a1d80caff17436465fa64"
  },
  {
    "url": "assets/img/lwip_pbuf_free_0.f2634715.png",
    "revision": "f263471547a20caf3e0b2ec438161dc0"
  },
  {
    "url": "assets/img/lwip_pbuf_free_1.33781abf.png",
    "revision": "33781abf43d12a922ea4eb1bb2f74828"
  },
  {
    "url": "assets/img/lwip_pbuf_pool.e9801004.png",
    "revision": "e98010044b87e4e7c0ff77af5605c319"
  },
  {
    "url": "assets/img/lwip_pbuf_ram.408a7517.png",
    "revision": "408a7517eeb27554819334a236e3806b"
  },
  {
    "url": "assets/img/lwip_pbuf_rom_ref.64893f56.png",
    "revision": "64893f569acab92710ec71b82dabf036"
  },
  {
    "url": "assets/img/lwip_timeouts_list.51042adb.png",
    "revision": "51042adb1c6c886cfc3878b0bc89594a"
  },
  {
    "url": "assets/img/memory_map.6e8f8541.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
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
    "url": "assets/img/peripheral_clock.329fd309.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
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
    "url": "assets/js/10.af302254.js",
    "revision": "6d5d9ebd8e659ed11670e43890c60007"
  },
  {
    "url": "assets/js/11.31a14f1a.js",
    "revision": "49caa999004dc9077680e9e6702b9752"
  },
  {
    "url": "assets/js/12.666a10a5.js",
    "revision": "ce064ff8bfa5e5d991101b119f3bfd49"
  },
  {
    "url": "assets/js/13.6ed3835d.js",
    "revision": "bb2bd8fcff56e8840e2b486fce37a8ab"
  },
  {
    "url": "assets/js/14.f723b199.js",
    "revision": "75cbf4f6e5880de948ebf80c9c093ece"
  },
  {
    "url": "assets/js/15.6da17463.js",
    "revision": "4f8ee4c1f0d4a532541f3494dadcf91f"
  },
  {
    "url": "assets/js/16.6ecc38ed.js",
    "revision": "08c93398e115f8097dea297859bc4a6e"
  },
  {
    "url": "assets/js/17.b452130b.js",
    "revision": "0f813c78c2a67d5243848599e0de5046"
  },
  {
    "url": "assets/js/18.e6712898.js",
    "revision": "351deb40a78b967fa9cd955479a0630f"
  },
  {
    "url": "assets/js/19.0ce14b53.js",
    "revision": "fa48b6d744903af0309d5bf57f90ed58"
  },
  {
    "url": "assets/js/2.27b4101d.js",
    "revision": "352c8f4d27c3d202f675ba6b7d7c9452"
  },
  {
    "url": "assets/js/20.045644cf.js",
    "revision": "261a3e99db4c94d36f9396ef7a4c684d"
  },
  {
    "url": "assets/js/21.8d2e6873.js",
    "revision": "b476544f8f37b9afdb3e4218e29dc105"
  },
  {
    "url": "assets/js/22.0c59c79c.js",
    "revision": "31698fa42779e9484dcca50247f8dee4"
  },
  {
    "url": "assets/js/23.99de2a30.js",
    "revision": "6071b11c1af9c859fb50468d7279fe6a"
  },
  {
    "url": "assets/js/24.e64c6b85.js",
    "revision": "0f45853f97a7ba2195d34e90c9b3da68"
  },
  {
    "url": "assets/js/25.34f90c3c.js",
    "revision": "1f81282e7b1fdb463d123779c2f06f0a"
  },
  {
    "url": "assets/js/26.d3cfdf4a.js",
    "revision": "4954af653aa8ec210d28f76b1634fcb6"
  },
  {
    "url": "assets/js/27.3207854e.js",
    "revision": "831db3edbb23a38e39247a940a29bac2"
  },
  {
    "url": "assets/js/28.4706ea2e.js",
    "revision": "260d48e98e5e6f74e25a6cd233b899ab"
  },
  {
    "url": "assets/js/29.2606114d.js",
    "revision": "2b967110ec40479b0dfa39de427d7733"
  },
  {
    "url": "assets/js/3.dbb1ef24.js",
    "revision": "180d50e5f4f2b317aca7f16c44377ef0"
  },
  {
    "url": "assets/js/30.e567bbde.js",
    "revision": "a88e4f1ff9c176d3bac82ab64d0efb47"
  },
  {
    "url": "assets/js/31.42b9d74b.js",
    "revision": "7e9d0636d5cb968f3afd8f13f452b75f"
  },
  {
    "url": "assets/js/32.e412e0e5.js",
    "revision": "5a71952c82cb39764873c45ed0eedf51"
  },
  {
    "url": "assets/js/33.339cf1b6.js",
    "revision": "fc18c36639bc5c00d1b6cffbe91a2823"
  },
  {
    "url": "assets/js/34.675846b4.js",
    "revision": "7677e24fbfb671d908eb5fd6d75a1ac0"
  },
  {
    "url": "assets/js/35.8482dd8a.js",
    "revision": "9d9d244d7161b010042af2d1cd7c6c56"
  },
  {
    "url": "assets/js/36.8b33fece.js",
    "revision": "e376f5467a55a897e26b5c82880eb0f5"
  },
  {
    "url": "assets/js/37.243565eb.js",
    "revision": "dd4b6bee910b88237b0bab6edc8ac385"
  },
  {
    "url": "assets/js/38.6abea47a.js",
    "revision": "d2d879c71c7beb7aafa8a1fa61ee6d54"
  },
  {
    "url": "assets/js/39.3cd6c67f.js",
    "revision": "02c9817d1cd479512527f1e3fbef3e7c"
  },
  {
    "url": "assets/js/4.e6e96bf9.js",
    "revision": "40405c8a59152af93ea452abb92f1fcc"
  },
  {
    "url": "assets/js/40.6e9e6b01.js",
    "revision": "708beb34817a4ced2bc86f7a32889116"
  },
  {
    "url": "assets/js/41.f5c34988.js",
    "revision": "d1b008b1751134a096fa086cfe427bda"
  },
  {
    "url": "assets/js/42.e6e2cbf8.js",
    "revision": "d029f9b5ce3c2701ddeffc642333a9da"
  },
  {
    "url": "assets/js/43.fc5f0de3.js",
    "revision": "149e926a5c2140d0ddb99cfb4c24ca13"
  },
  {
    "url": "assets/js/44.c3c358ea.js",
    "revision": "a22a47ebc18ff9de0aebe843272cf191"
  },
  {
    "url": "assets/js/45.3c7ac18a.js",
    "revision": "47f8d8ea8b44b37a4cf3e06217b24b46"
  },
  {
    "url": "assets/js/46.f872ec0f.js",
    "revision": "60a5f0b4e7e5c54b85a0c71d4b064775"
  },
  {
    "url": "assets/js/47.98e1087f.js",
    "revision": "5a75db1210c9b31fece3182ce5554e2a"
  },
  {
    "url": "assets/js/48.0ffd0e8c.js",
    "revision": "2e303ead5fc3936c7168f31387894110"
  },
  {
    "url": "assets/js/49.8dc0a7e6.js",
    "revision": "f05d0b660c074c4775ed53076550e6b9"
  },
  {
    "url": "assets/js/5.7a42a6cb.js",
    "revision": "1968f5e6874550085b3682ce77fee70e"
  },
  {
    "url": "assets/js/50.ad106584.js",
    "revision": "1719b47f87fc82aa370678f761bf8d7f"
  },
  {
    "url": "assets/js/51.fd163ad9.js",
    "revision": "19490955e1651c1e805765ae10d52eb9"
  },
  {
    "url": "assets/js/52.cf9ad625.js",
    "revision": "8c5eb1b767217fed66757348c5432f04"
  },
  {
    "url": "assets/js/53.7d039ee0.js",
    "revision": "047032e5c1d7577971ddc2f9e4cb280f"
  },
  {
    "url": "assets/js/54.23429ffa.js",
    "revision": "a24ffcddbe2153142f86b96d7d76f6d3"
  },
  {
    "url": "assets/js/55.9da22a72.js",
    "revision": "0f4c9442b32e247a8f8dce023b5962c2"
  },
  {
    "url": "assets/js/56.5a911201.js",
    "revision": "54cb8d7c69f1077d434d85d2fd3b028b"
  },
  {
    "url": "assets/js/57.3d6e9308.js",
    "revision": "85aac55d315f53796d84d7b130b32fa7"
  },
  {
    "url": "assets/js/58.f7a51e3f.js",
    "revision": "2e3e746daf32184a5ffd8cb072180a1a"
  },
  {
    "url": "assets/js/59.a0fb01a3.js",
    "revision": "ba21a2fe81179ea33bcce49fce6e3b54"
  },
  {
    "url": "assets/js/6.37fa056a.js",
    "revision": "22844d2b83b95256ce4cf10df6828bf4"
  },
  {
    "url": "assets/js/60.6b9eb95b.js",
    "revision": "ad1ad21da60704d8b117f5d95a2d57b7"
  },
  {
    "url": "assets/js/61.afbd1865.js",
    "revision": "0e478930407c69e6cea02fb11a324e3d"
  },
  {
    "url": "assets/js/62.32004a6d.js",
    "revision": "b8549993d23a19f835160ed16e795560"
  },
  {
    "url": "assets/js/63.58cb2ff2.js",
    "revision": "91f3998773cba2a2283c14c5f49a4ef1"
  },
  {
    "url": "assets/js/64.f9606a2a.js",
    "revision": "70952b5813417562c122c52ca48514d9"
  },
  {
    "url": "assets/js/65.3a317de5.js",
    "revision": "f27bd5fb3892ff8757dc0bcd59a30fec"
  },
  {
    "url": "assets/js/66.d701c2e7.js",
    "revision": "8f28154f2eae96e93ccf591387e8a783"
  },
  {
    "url": "assets/js/67.0d58fcb9.js",
    "revision": "5a913263252b9b3217527db94d30a0dc"
  },
  {
    "url": "assets/js/68.a41058bf.js",
    "revision": "640406b741990a2c8797547c1f03baaa"
  },
  {
    "url": "assets/js/69.41517d0e.js",
    "revision": "1982f79f59a0dbc6e0a1253745fe9a86"
  },
  {
    "url": "assets/js/7.bdec5141.js",
    "revision": "0be0e4b8d95d002d124ff81c86620552"
  },
  {
    "url": "assets/js/70.14938a0d.js",
    "revision": "d0f66a1804bbe4ce656dc7f6fa091911"
  },
  {
    "url": "assets/js/71.58526663.js",
    "revision": "39d52a54f600a3d6494ec5a9df2ab1a9"
  },
  {
    "url": "assets/js/72.dbf75033.js",
    "revision": "918b1aadf14e532b5c83a436b49c84c2"
  },
  {
    "url": "assets/js/73.a34de300.js",
    "revision": "928bd0a4f4e0c015fc8166ef2dcb2c63"
  },
  {
    "url": "assets/js/74.40f0c615.js",
    "revision": "29f851e0d9690cc12ec4e03515958ec0"
  },
  {
    "url": "assets/js/75.56e3d0ad.js",
    "revision": "84a338aefd1c346342ab13d9349a7cc2"
  },
  {
    "url": "assets/js/76.ee8da2c6.js",
    "revision": "dcfba536d18a9da5fd6471fa13c634b6"
  },
  {
    "url": "assets/js/77.d104911b.js",
    "revision": "afc0a5450d1ae0025a59a83dd9c157c4"
  },
  {
    "url": "assets/js/78.cf6939dd.js",
    "revision": "22f1bdce46ce6037e3a516b7fe414396"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.fbb25fc5.js",
    "revision": "e5811f756fb5d7067e865a7fa5c5c6de"
  },
  {
    "url": "assets/js/9.dc54c6a6.js",
    "revision": "fa3cfdbfdbe8b993f6e07a4426f9fa0e"
  },
  {
    "url": "assets/js/app.c70fe7b2.js",
    "revision": "102b5751fd70b67ea34f5438c4e04f83"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "f427b3cf1721a6da9c4fcdd649cbb87e"
  },
  {
    "url": "cs/bash.html",
    "revision": "842c83285dfe8da39b397c5f8e755cd5"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "c1e856c7d8540b897004279394df52ac"
  },
  {
    "url": "cs/cmake.html",
    "revision": "8e5ea429392a85d9f5e18bb7fb1cffd2"
  },
  {
    "url": "cs/compilation.html",
    "revision": "2c8c2634132fa77b80dabeb594e5e38c"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "89c41898d75a5ebf4fa80d4676b4ab83"
  },
  {
    "url": "cs/git.html",
    "revision": "9260c168481605f27089859855ef7b55"
  },
  {
    "url": "cs/index.html",
    "revision": "e9480180d97496ff9b2dddb81ecc82c3"
  },
  {
    "url": "cs/keras.html",
    "revision": "00e9a692dfc3f17d791aa16bba776e16"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a71dc7e4065461c74b3085c4b69f3c56"
  },
  {
    "url": "cs/lwip.html",
    "revision": "126dc9b200620feb3b6b4ef77fc6d5e5"
  },
  {
    "url": "cs/scala.html",
    "revision": "d8c31b5aa2197eb6a4c60c19f13495ea"
  },
  {
    "url": "ee/about.html",
    "revision": "fe56efc27dd21244ccb6e5da9d43a91d"
  },
  {
    "url": "ee/chisel.html",
    "revision": "0263fde690e67f903c906cb331238ec9"
  },
  {
    "url": "ee/esp32.html",
    "revision": "317b26c73304d521cfc0e3ca7d40cbd4"
  },
  {
    "url": "ee/index.html",
    "revision": "5fce29d5a00622b92283a6558602ad8a"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "0a10a188dd31b78d3856200e284af2c1"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "5c24667daeb78f63bafe370291147ff2"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "e022d044564a5147c1c3127e9c2c14ea"
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
    "url": "images/cs/lwip/lwip_api_message.png",
    "revision": "6f55181782841bf71f3f1aa7c953d320"
  },
  {
    "url": "images/cs/lwip/lwip_heap.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "images/cs/lwip/lwip_memp.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
  },
  {
    "url": "images/cs/lwip/lwip_packet_message.png",
    "revision": "217126c725e129b967094255902f19ba"
  },
  {
    "url": "images/cs/lwip/lwip_packets_into_core.png",
    "revision": "85a67ff6553a1d80caff17436465fa64"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_free_0.png",
    "revision": "f263471547a20caf3e0b2ec438161dc0"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_free_1.png",
    "revision": "33781abf43d12a922ea4eb1bb2f74828"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_pool.png",
    "revision": "e98010044b87e4e7c0ff77af5605c319"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_ram.png",
    "revision": "408a7517eeb27554819334a236e3806b"
  },
  {
    "url": "images/cs/lwip/lwip_pbuf_rom_ref.png",
    "revision": "64893f569acab92710ec71b82dabf036"
  },
  {
    "url": "images/cs/lwip/lwip_timeouts_list.png",
    "revision": "51042adb1c6c886cfc3878b0bc89594a"
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
    "url": "images/ee/esp32/cpu_core_system.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "images/ee/esp32/esp32_address_table.png",
    "revision": "85ad7d785bd61aa4cb118f0043b0e85b"
  },
  {
    "url": "images/ee/esp32/esp32_external_memory.png",
    "revision": "00b7148f698a82bf10935863900e4886"
  },
  {
    "url": "images/ee/esp32/esp32_on_chip_address_table.png",
    "revision": "24c64bffb60d382f37029329d89f1aeb"
  },
  {
    "url": "images/ee/esp32/esp32_pin_functions.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
  },
  {
    "url": "images/ee/esp32/esp32_system_clock.png",
    "revision": "212a53578bdae5d21866d16781a2a258"
  },
  {
    "url": "images/ee/esp32/esp32_system_structure.png",
    "revision": "70e29ed6a527c6a0285db28bb7845464"
  },
  {
    "url": "images/ee/esp32/gpio_matrix.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
  },
  {
    "url": "images/ee/esp32/image_map.png",
    "revision": "017b48c6656dddd64aed21cad3813ae0"
  },
  {
    "url": "images/ee/esp32/memory_map.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "images/ee/esp32/peripheral_clock.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "images/ee/infrared_remote/infrared_modulation_demodulation.svg",
    "revision": "f86ad3e629424c9af8a216abb58ec189"
  },
  {
    "url": "images/ee/infrared_remote/nec_ext_train.png",
    "revision": "2f78d1ce7f001926f6b90ad966796e91"
  },
  {
    "url": "images/ee/infrared_remote/nec_modulation.png",
    "revision": "da33571c6f0afb94b1ec1d91caba3edb"
  },
  {
    "url": "images/ee/infrared_remote/nec_repeat.png",
    "revision": "63364daf21e5522c64eb8dfa82f2cef2"
  },
  {
    "url": "images/ee/infrared_remote/nec_sequence.png",
    "revision": "afea92a3b5cc1aa2457d2b118b157c84"
  },
  {
    "url": "images/ee/infrared_remote/nec_train.png",
    "revision": "f970404e7bbfb5711fea5c776f689f3a"
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
    "revision": "eb86d128640d5e2c9c289454cf9fc53c"
  },
  {
    "url": "others/about.html",
    "revision": "4d2e7abb8eb4b87dce5b88b7aef2e844"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "93423111ab7e5d43fb55d9f68b9d4ef2"
  },
  {
    "url": "others/android-studio.html",
    "revision": "65b321db1e5b4addf131c931f5ba69bc"
  },
  {
    "url": "others/android.html",
    "revision": "d8e1f3165d97274e531f44dea95fc8dc"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "88ea5c286305823ae8fe0b525f66267d"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "3991c286cbe1f08d613651f010615461"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "2066818f7280232c29f3e4bc53485f3b"
  },
  {
    "url": "others/css.html",
    "revision": "28e35ad9347d8455d62700f385a51f59"
  },
  {
    "url": "others/docker.html",
    "revision": "73bac722f62f8932993de3e522412961"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "8b4c0eeca358dbe8383f74531f55855d"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "6b7063365f27e4a563f099b99c3361e8"
  },
  {
    "url": "others/english-writting.html",
    "revision": "b7cb44ed53068e8c9c13d379c554bc17"
  },
  {
    "url": "others/freertos.html",
    "revision": "f59911a5c40d3255c611792e874fb940"
  },
  {
    "url": "others/gns3.html",
    "revision": "8ef12e892c3e7a71ac8753bf7c5cc41a"
  },
  {
    "url": "others/gps.html",
    "revision": "ee08a363f00a8d5304f9385d1fc5272c"
  },
  {
    "url": "others/html5.html",
    "revision": "7ca5317befa9efa2b11950c1613fb678"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "bc8096550ddda6339b73aed51cc66105"
  },
  {
    "url": "others/index.html",
    "revision": "55639a3eda7745419b887231c59ec9d5"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "b34b87bc5a18ec45fbe40941921a4cb5"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "6b247e211bc651ec5ce352dda2758080"
  },
  {
    "url": "others/javascript.html",
    "revision": "3e77e807269677c825ea141a344d8214"
  },
  {
    "url": "others/json.html",
    "revision": "b923b02b9c57ccd45388f9f6e0928edd"
  },
  {
    "url": "others/latex.html",
    "revision": "c8ffb803c5c8250595a9cf5510a103aa"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "e9db8963b4fa0fb60569e9ee5f981e4b"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "f884289d6ea2b3db7723cd87cd1ace0e"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "fea4e5d4919521e954877f501478a81a"
  },
  {
    "url": "others/markdown.html",
    "revision": "3239ec25c086915013148e02d9cee3d0"
  },
  {
    "url": "others/matlab.html",
    "revision": "f5ad283bedcfc84b97d23c9d9fa21907"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "a65e8fe4a31f2b0e345e0f6c4aa8e14a"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "b13102f1daab8ba384ff43ccd6c253c8"
  },
  {
    "url": "others/network-security.html",
    "revision": "fbb223afd1bb3085a94f9c9e481bddea"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "1a1d816d954f4cc1f12dfa0949cbc347"
  },
  {
    "url": "others/oral_english.html",
    "revision": "2b3a7648237ac49a26af5b58737b38f8"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "2cf0f0c3132bd8cce7c2a9f63b679ee6"
  },
  {
    "url": "others/poe.html",
    "revision": "047c89dd74692fe8b372b97bb3eab473"
  },
  {
    "url": "others/pyside2.html",
    "revision": "191d97839cbf7b7a41a409612aa3ba2f"
  },
  {
    "url": "others/python-socket.html",
    "revision": "db51afacae71876b8ff7ae8ee598cbd2"
  },
  {
    "url": "others/python.html",
    "revision": "d194213c401c42c6d3471bfde7208d02"
  },
  {
    "url": "others/q-learning.html",
    "revision": "d9e3fc2b12e310f08d497355ae326e54"
  },
  {
    "url": "others/qr-code.html",
    "revision": "78a3d05b14521858fdbd83dc4c50c5e3"
  },
  {
    "url": "others/qt4.html",
    "revision": "98c90b8a868b64bb3241f40c42d3d2ea"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "1bc7cfd9a9fe4ce51efded7b3ee2965a"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "fdfd14ed9d8eb2010231fd8f47c18aed"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "25e01dcfbfaf63b11d39297ed01a192c"
  },
  {
    "url": "others/sd-card.html",
    "revision": "b9e780d04f6669351feb6ee010abe64a"
  },
  {
    "url": "others/sdn.html",
    "revision": "91de912b7062e71e70e4c7485c7760dc"
  },
  {
    "url": "others/star-uml.html",
    "revision": "4ac581c872508a003506f3074062c002"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "90941ad2f1923f60458972c367445b22"
  },
  {
    "url": "others/verilog.html",
    "revision": "c209cfc3b5af49dd46e8b6dd922cc85b"
  },
  {
    "url": "others/vue.html",
    "revision": "d7f32b198c0f04992fec528a3cf2700b"
  },
  {
    "url": "others/w5500.html",
    "revision": "0a36b5365e6bd2528ce9de3139273edc"
  },
  {
    "url": "others/w7500.html",
    "revision": "cb3b66089949b762f6e33f33d4cdc6a0"
  },
  {
    "url": "resume.html",
    "revision": "a5c3919bcfabda43a0d7e432633c75f5"
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
