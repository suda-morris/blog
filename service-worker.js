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
    "revision": "960698ed411fa87da942e14693cbf1a1"
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
    "url": "assets/img/arp_protocol.6e6dab0f.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
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
    "url": "assets/img/ip_protocol.f8dade33.png",
    "revision": "f8dade3399a1b809f04f3921124d38cf"
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
    "url": "assets/img/lwip_arp_process_input.35e6fc48.png",
    "revision": "35e6fc48d57f6bdd06dcc3e9e7edead8"
  },
  {
    "url": "assets/img/lwip_arp_process_output.999a53be.png",
    "revision": "999a53be718cf8bb3857986a359d349b"
  },
  {
    "url": "assets/img/lwip_arp_reply.59985110.png",
    "revision": "59985110fc7d039a3cb5c11c152a145b"
  },
  {
    "url": "assets/img/lwip_arp_request.7e489783.png",
    "revision": "7e489783ce9afbf4379c3e2ff47718fe"
  },
  {
    "url": "assets/img/lwip_heap.1ac8ef3c.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "assets/img/lwip_icmp_protocol.a19c8c2e.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "assets/img/lwip_ip_frag.c71fe3b0.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "assets/img/lwip_ip_input.2eb1bb3b.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "assets/img/lwip_ip_output.a56af61e.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
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
    "url": "assets/js/10.74df3795.js",
    "revision": "c34cb2f3a5e3ebb81b5c16b3623def57"
  },
  {
    "url": "assets/js/11.7d1e2eea.js",
    "revision": "6f81f32af8154af956ed814f75f51f2a"
  },
  {
    "url": "assets/js/12.b919e924.js",
    "revision": "ca8d75bd09dbf851ba9f45c673143b61"
  },
  {
    "url": "assets/js/13.f29049d7.js",
    "revision": "6fee29dd5b04207bee2f3248bc082541"
  },
  {
    "url": "assets/js/14.a9a7f5c6.js",
    "revision": "5924aa74a2afe282d0024380f7631315"
  },
  {
    "url": "assets/js/15.aa523ab2.js",
    "revision": "f73266d9708c9fd667945db33e6dfe87"
  },
  {
    "url": "assets/js/16.a087bf4a.js",
    "revision": "5f0b6293d1d3102087635208f902669b"
  },
  {
    "url": "assets/js/17.4faa1ebf.js",
    "revision": "3c6c93a245911fe8581b7fd37572a007"
  },
  {
    "url": "assets/js/18.f9d29a48.js",
    "revision": "ad5d618c4ee964e8240eef5c6155ad4b"
  },
  {
    "url": "assets/js/19.1995e4ba.js",
    "revision": "fdc99ec7092d40c2a57f581630561adf"
  },
  {
    "url": "assets/js/2.30513668.js",
    "revision": "5486ffeec1a62469474af047485fe6e4"
  },
  {
    "url": "assets/js/20.230a6edd.js",
    "revision": "511c19e218d27940ee5d107165b9d063"
  },
  {
    "url": "assets/js/21.4582f68e.js",
    "revision": "0ef749b46514aec53ec82e853ee65994"
  },
  {
    "url": "assets/js/22.6e61366e.js",
    "revision": "d8d919c7b2e194b025be0ff102c643af"
  },
  {
    "url": "assets/js/23.047c26b7.js",
    "revision": "936896430e8a9662b8dcec82480537c1"
  },
  {
    "url": "assets/js/24.f4a0fe5b.js",
    "revision": "725a400906a3fe4055fe7ffa6dbf18b7"
  },
  {
    "url": "assets/js/25.b10c44cf.js",
    "revision": "bfb9eb61404b01965caab8af7c955892"
  },
  {
    "url": "assets/js/26.3ff655bc.js",
    "revision": "2465ff545bf834cf79ee8f66441e5002"
  },
  {
    "url": "assets/js/27.995262fe.js",
    "revision": "67e3ea67eef4187463f2ab6420e12bf4"
  },
  {
    "url": "assets/js/28.9b702d8b.js",
    "revision": "b0d7a5c01f51758ad5e872197477f353"
  },
  {
    "url": "assets/js/29.9b979212.js",
    "revision": "f462c394b45d8b088785ae5d21457871"
  },
  {
    "url": "assets/js/3.05c20f0c.js",
    "revision": "4f6176c36226a36275a1af45c1aa1152"
  },
  {
    "url": "assets/js/30.5309c37e.js",
    "revision": "f651f9e5c20990b07ebd5a92b8dca178"
  },
  {
    "url": "assets/js/31.c854179a.js",
    "revision": "ed0d64203d0ab5144bd3b4abc3444b49"
  },
  {
    "url": "assets/js/32.5dcb0777.js",
    "revision": "de13c9e7f657f1af9559d4e804e90161"
  },
  {
    "url": "assets/js/33.67a305fe.js",
    "revision": "518cd5cf52f6eab8a68d1ea2ec61ea3f"
  },
  {
    "url": "assets/js/34.68fb9d67.js",
    "revision": "4466b284ebeb62435dc99c98af7569bd"
  },
  {
    "url": "assets/js/35.152c0de3.js",
    "revision": "cb2e0664b97a71221a06f3625b159a95"
  },
  {
    "url": "assets/js/36.8ec215e8.js",
    "revision": "23258db07fdeeaa5fc74d98da8df994d"
  },
  {
    "url": "assets/js/37.1d850cbc.js",
    "revision": "1c16dfd842914a40bd8cec8ca5a530ab"
  },
  {
    "url": "assets/js/38.92ff458c.js",
    "revision": "81f84cf384ed63ae43758f0b32b71db2"
  },
  {
    "url": "assets/js/39.0eafc0fd.js",
    "revision": "bff900a418d50cd546beaf0d54deb261"
  },
  {
    "url": "assets/js/4.bbef7ee6.js",
    "revision": "b6d6f3102ef089a76bb386d8075d592e"
  },
  {
    "url": "assets/js/40.62b1171d.js",
    "revision": "06ef875c1e8125696df3dd544e590036"
  },
  {
    "url": "assets/js/41.a9c8cbfd.js",
    "revision": "6cf3f5221128d8b49c45b672540dfad5"
  },
  {
    "url": "assets/js/42.fa2db96f.js",
    "revision": "cf21ca0f827e069ac82c44097585892a"
  },
  {
    "url": "assets/js/43.4b22cf59.js",
    "revision": "d17b9718f0c63355aae66de9dc17ef1e"
  },
  {
    "url": "assets/js/44.97dae151.js",
    "revision": "406efef4506894ff1b159a3bc681fcad"
  },
  {
    "url": "assets/js/45.414b3f9b.js",
    "revision": "77b8424905c53ea57b68a79619970354"
  },
  {
    "url": "assets/js/46.0f1dc4bc.js",
    "revision": "ff6ce451a70b905431a66d254bab9e4e"
  },
  {
    "url": "assets/js/47.397f907e.js",
    "revision": "0ab59fc30b2e2282ab6439efbe384dcd"
  },
  {
    "url": "assets/js/48.75c631f3.js",
    "revision": "602756a89d0fe4c19b884fed53e3f432"
  },
  {
    "url": "assets/js/49.dc4ccd88.js",
    "revision": "1cf34b52c404bff885de37876b80d77d"
  },
  {
    "url": "assets/js/5.49522c69.js",
    "revision": "c6960d50a232902b46fb7e0f2872e90c"
  },
  {
    "url": "assets/js/50.6feb8a36.js",
    "revision": "921e85eb18c1c455f52abd3cf7bc6dab"
  },
  {
    "url": "assets/js/51.1c944c53.js",
    "revision": "e6703729bdb55741d691973902105386"
  },
  {
    "url": "assets/js/52.35b81660.js",
    "revision": "06362f83c1db7cbe071fbcb4cf0cd0d9"
  },
  {
    "url": "assets/js/53.9329ec2a.js",
    "revision": "7f6a99d93e9db5d9dc4af4d2adb00481"
  },
  {
    "url": "assets/js/54.00499f50.js",
    "revision": "7fce115407d8a06ac565ea5a89402357"
  },
  {
    "url": "assets/js/55.d1112eee.js",
    "revision": "af07f172703f9e379dd2fef28a576b3f"
  },
  {
    "url": "assets/js/56.db1fd1b9.js",
    "revision": "5b7b2b9dcf7055fd3c37850ee9e29b9b"
  },
  {
    "url": "assets/js/57.05baf443.js",
    "revision": "83cd4abf52f1db03ea9563450480786b"
  },
  {
    "url": "assets/js/58.9d8c323d.js",
    "revision": "32c36f204486aa1a642b67a5813f9865"
  },
  {
    "url": "assets/js/59.66ba7c9a.js",
    "revision": "461d438d05d77cd7d084ac029cbada48"
  },
  {
    "url": "assets/js/6.ee04f478.js",
    "revision": "2bbc175169289f7827a17efd624055e2"
  },
  {
    "url": "assets/js/60.7e0c0f5d.js",
    "revision": "0fa2d7eccd13bdcdcff8bc3690c9f2bd"
  },
  {
    "url": "assets/js/61.2c29906a.js",
    "revision": "10aa8c0353667c25ada50cfe3970aaec"
  },
  {
    "url": "assets/js/62.366982d2.js",
    "revision": "f503a61439db4f2fc29aa388deb2b0a6"
  },
  {
    "url": "assets/js/63.bb0e7a4c.js",
    "revision": "ff90f504145a8739226ad1616ee38dcd"
  },
  {
    "url": "assets/js/64.14530364.js",
    "revision": "510f03fe332d74f1782373952724a3bc"
  },
  {
    "url": "assets/js/65.bfdd1b06.js",
    "revision": "d85171242da92450eda83d60aef6153c"
  },
  {
    "url": "assets/js/66.1d10afe2.js",
    "revision": "bd5267957a3431dc37ec88ae395d285b"
  },
  {
    "url": "assets/js/67.a371db07.js",
    "revision": "1376d9cca8f6959572215a1d59eb2a53"
  },
  {
    "url": "assets/js/68.db55529e.js",
    "revision": "99fa91754b1cda1ee8099b51164556f6"
  },
  {
    "url": "assets/js/69.741a3fba.js",
    "revision": "4455479cf171af3687037e3fc6eefabe"
  },
  {
    "url": "assets/js/7.095c8568.js",
    "revision": "d88688383c327e75b12748ceb24b611d"
  },
  {
    "url": "assets/js/70.197bff21.js",
    "revision": "61220bff41c7418da9a7af2120ce20c6"
  },
  {
    "url": "assets/js/71.2060b36e.js",
    "revision": "35927d4be9f6f2e4322cefd1ccd72520"
  },
  {
    "url": "assets/js/72.aa5f10ca.js",
    "revision": "5793fe4388d772ff1f9ecb56cba5ee3a"
  },
  {
    "url": "assets/js/73.363f46de.js",
    "revision": "319274243f674642f58429948c27775f"
  },
  {
    "url": "assets/js/74.f4cd928e.js",
    "revision": "7644ca5e0b7794f31a443a0fb2b1504f"
  },
  {
    "url": "assets/js/75.825b083b.js",
    "revision": "01e0bbddc543da0a20c0c70987bfb979"
  },
  {
    "url": "assets/js/76.9770a6b0.js",
    "revision": "f303ef17c26dcba233fa1c79d2326eac"
  },
  {
    "url": "assets/js/77.94c4c3af.js",
    "revision": "d83d8d27d197405f93ca6458711852de"
  },
  {
    "url": "assets/js/78.782df4b5.js",
    "revision": "cfdc8fb87a64552764edd34810883f3e"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.135dfc25.js",
    "revision": "8533599492ae42779cb3cd16b04fe3d6"
  },
  {
    "url": "assets/js/9.ca83487a.js",
    "revision": "67c32c4e225c00e3d456f51c24fd68f5"
  },
  {
    "url": "assets/js/app.7a8b4f63.js",
    "revision": "120be191564c3be839c3ea37b85ac26c"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "7624679e4092c6460d50ef75f4fd4ab3"
  },
  {
    "url": "cs/bash.html",
    "revision": "730cdb0810f48a163830cf5690ad66b5"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "2d1ed3998858b82171982c168a1f02d5"
  },
  {
    "url": "cs/cmake.html",
    "revision": "65a3649ed8b9b0c19d1a0ca4f01c48c3"
  },
  {
    "url": "cs/compilation.html",
    "revision": "b5859cc8726417d8cf65a4433e0781a9"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "c84ded5f26c7f68cdf8192b7261ccbea"
  },
  {
    "url": "cs/git.html",
    "revision": "b02d05e8e0599ad131c80e9605c5fba5"
  },
  {
    "url": "cs/index.html",
    "revision": "655eb513a8754b7a4719f866eece1219"
  },
  {
    "url": "cs/keras.html",
    "revision": "f37c3147a8a21964a849badffeab73c9"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "7dba2803b603199be5aff680eac6e4ba"
  },
  {
    "url": "cs/lwip.html",
    "revision": "05ffd03330c22a77da6a4ecb22251672"
  },
  {
    "url": "cs/scala.html",
    "revision": "f4166dcd6f6385c808ee0eb8ff8462d9"
  },
  {
    "url": "ee/about.html",
    "revision": "db110e93cf44a1353a49b8cb35815c82"
  },
  {
    "url": "ee/chisel.html",
    "revision": "a2f72908facd0b429db62646202198b7"
  },
  {
    "url": "ee/esp32.html",
    "revision": "57a70d23fcfb1bdd23a8316ac4a85ee2"
  },
  {
    "url": "ee/index.html",
    "revision": "d044f7e1a9de009386889b8033295ffb"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "1ed77f7acd8173e100dd4de281e69719"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "95e5065a46c01641496e3909dc1e0bdf"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "2b31538116850ed3ddcb128e858d02c3"
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
    "url": "images/cs/lwip/arp_protocol.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "images/cs/lwip/ethernet_frame.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "images/cs/lwip/ip_protocol.png",
    "revision": "f8dade3399a1b809f04f3921124d38cf"
  },
  {
    "url": "images/cs/lwip/lwip_api_message.png",
    "revision": "6f55181782841bf71f3f1aa7c953d320"
  },
  {
    "url": "images/cs/lwip/lwip_arp_process_input.png",
    "revision": "35e6fc48d57f6bdd06dcc3e9e7edead8"
  },
  {
    "url": "images/cs/lwip/lwip_arp_process_output.png",
    "revision": "999a53be718cf8bb3857986a359d349b"
  },
  {
    "url": "images/cs/lwip/lwip_arp_reply.png",
    "revision": "59985110fc7d039a3cb5c11c152a145b"
  },
  {
    "url": "images/cs/lwip/lwip_arp_request.png",
    "revision": "7e489783ce9afbf4379c3e2ff47718fe"
  },
  {
    "url": "images/cs/lwip/lwip_heap.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "images/cs/lwip/lwip_icmp_protocol.jpg",
    "revision": "a19c8c2e0dfbf7b390f610bc68d0d5b5"
  },
  {
    "url": "images/cs/lwip/lwip_ip_frag.png",
    "revision": "c71fe3b02e3a1b6896a3a32eed5746bc"
  },
  {
    "url": "images/cs/lwip/lwip_ip_input.png",
    "revision": "2eb1bb3bbef845e62bbd254be337b47d"
  },
  {
    "url": "images/cs/lwip/lwip_ip_output.png",
    "revision": "a56af61ee032ef9fc2aa137c5c38ead4"
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
    "revision": "9f25fbd5667d0e35a8e5ba21311ac38a"
  },
  {
    "url": "others/about.html",
    "revision": "6dbde67b44ee6ee9f4ebd3e09afed528"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "dc07d0cd2cac68d6803054c838cd72ba"
  },
  {
    "url": "others/android-studio.html",
    "revision": "0e74c82cf160eba4a7119897bf1e0a29"
  },
  {
    "url": "others/android.html",
    "revision": "86605a75ad42d75f0a8f04958d81325a"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "d27156ace75c0284f0124cfa3cb12267"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "4dcbf8cdfc0528525c006c577e8e961c"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "4c8c217cdea248ccdb8811e51659cac5"
  },
  {
    "url": "others/css.html",
    "revision": "66dc4aec697ac449ecbfc3740ffd574e"
  },
  {
    "url": "others/docker.html",
    "revision": "484ef987ea1c0600e90c2dc0bc07b45c"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "2aac4baca544b5893dfa277bc2cd9f60"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "263f877771264a53759b6ecad45470f2"
  },
  {
    "url": "others/english-writting.html",
    "revision": "dafe870f6a11bf71c30b9d712b00e900"
  },
  {
    "url": "others/freertos.html",
    "revision": "72580ea0716ba9d5354776510c66e2e0"
  },
  {
    "url": "others/gns3.html",
    "revision": "93e3f31cad1ca1fcc96e9575195d8ec5"
  },
  {
    "url": "others/gps.html",
    "revision": "8929c3cd16e8ea675ca093a33779b682"
  },
  {
    "url": "others/html5.html",
    "revision": "dca13b3ac0e5df2189d02792a8aabeb0"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "40306dcee79cdbf0ac042d6e57bf5bc8"
  },
  {
    "url": "others/index.html",
    "revision": "4bdf1430db4e483fb9043830e93b3192"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "63cb1b5bfeea2d16302b663a4937d39c"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "c1acc14a8544279500dcbf8cbccb3c85"
  },
  {
    "url": "others/javascript.html",
    "revision": "10aad2ac68f375bbb39ffb4141346ef1"
  },
  {
    "url": "others/json.html",
    "revision": "95294d8d522c71fba8cc560031f28341"
  },
  {
    "url": "others/latex.html",
    "revision": "6cb4b810734ee22dc7d4470b00662169"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "539062b8f8474c901b11276fbffabf7a"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "da57b9714d0bcd20728b738d4bf4cb8d"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "559b27dd53045f604a65994b0e52c74b"
  },
  {
    "url": "others/markdown.html",
    "revision": "a79b1f5a6fc712c2afcd9f08706319a9"
  },
  {
    "url": "others/matlab.html",
    "revision": "51d9358d2b2ba189670c2c44b67ede12"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "55dac8acddd7056ce6cbcfa9b431e778"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "e1d64d67afe19974f6832db094a0d295"
  },
  {
    "url": "others/network-security.html",
    "revision": "9585d3983c2ddc5e960e04bbe88abbf4"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "ab6b646b309b0a1a7faa818b81e4143a"
  },
  {
    "url": "others/oral_english.html",
    "revision": "beca4b12dca5c214b3ad3c2eebfeb8ff"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "b8bbb9b6312b4cd890e65a8f4aea9548"
  },
  {
    "url": "others/poe.html",
    "revision": "0b3ebe356e8f67ece80b64332f8f29b4"
  },
  {
    "url": "others/pyside2.html",
    "revision": "a8c122a2721a41574e2b5518e9ca3d9d"
  },
  {
    "url": "others/python-socket.html",
    "revision": "8edca753b3729f19149c536e855fc920"
  },
  {
    "url": "others/python.html",
    "revision": "e1af82206da06be1a921bfcb3cb57fb3"
  },
  {
    "url": "others/q-learning.html",
    "revision": "5bc5dde78891783e81f702bae25cbb43"
  },
  {
    "url": "others/qr-code.html",
    "revision": "d2cf36d2cf38e821e331c0e721f6bca1"
  },
  {
    "url": "others/qt4.html",
    "revision": "44daad8d252f982f8b5a13727cc00f2f"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "93c7d7248377fe1f2d7b7a98908f7c5e"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "2cc1bfa1535ba90628dab788f90936e3"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "0d94a88782407b9249828ffa3b9ac4ea"
  },
  {
    "url": "others/sd-card.html",
    "revision": "ae4f96c1822d9dc26d122651061d9dd5"
  },
  {
    "url": "others/sdn.html",
    "revision": "5a3d7c37117b32428b460d411af0e8c4"
  },
  {
    "url": "others/star-uml.html",
    "revision": "168a883ad2c3d098b51481f5cabf00c5"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "f3de6f7d310ce1a9001b730917d66e7d"
  },
  {
    "url": "others/verilog.html",
    "revision": "7b2372c11d4130c95c8e689c0025240f"
  },
  {
    "url": "others/vue.html",
    "revision": "fac56125f4e8fed38cdea826429c934f"
  },
  {
    "url": "others/w5500.html",
    "revision": "dc0e81442c0f639420e9338201c19875"
  },
  {
    "url": "others/w7500.html",
    "revision": "9e6308fee7f2f0fdfe2fa5c29f9e5e82"
  },
  {
    "url": "resume.html",
    "revision": "d07220e4ec169e6d8ab33688683383b8"
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
