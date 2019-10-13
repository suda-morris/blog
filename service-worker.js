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
    "revision": "12556498b19a42f74644ef00d909fb47"
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
    "url": "assets/js/3.8e82545f.js",
    "revision": "2ebb4caa8ede47cd0acf59f2430ae08b"
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
    "url": "assets/js/51.b041664f.js",
    "revision": "70fbf904c0166dc9c4a5099af37ce9a3"
  },
  {
    "url": "assets/js/52.bd4b9b8a.js",
    "revision": "008bff3d5f812f0cd04388612d10f5cb"
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
    "url": "assets/js/app.af6f4790.js",
    "revision": "f446d0a101402ec0dd0aea31dbd14b2b"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "8aeb599f41ade5c05306c0099f2e4fb9"
  },
  {
    "url": "cs/bash.html",
    "revision": "8aa4e96f0cd144a3f6d92bbf4ce16ccb"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "db1328e1396d52ede8997ab9dfe19f89"
  },
  {
    "url": "cs/cmake.html",
    "revision": "69b0b734d890d5a42f30b771219af3c8"
  },
  {
    "url": "cs/compilation.html",
    "revision": "43ce77d9e840090b92d51f1c5c3d81c5"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "0287bba8d24170da69392a0c95ba4438"
  },
  {
    "url": "cs/git.html",
    "revision": "42cd1ca15cfe44b761f168a3f65038ba"
  },
  {
    "url": "cs/index.html",
    "revision": "1e63ad8b29c986d2dd97bc83f4981776"
  },
  {
    "url": "cs/keras.html",
    "revision": "de7f6462fcbd2b9cdbe10004ca1a50dd"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "df70d2c45964f99475533c1b09cfe581"
  },
  {
    "url": "cs/lwip.html",
    "revision": "a6506320d68114c7946bf1ac62a11132"
  },
  {
    "url": "cs/scala.html",
    "revision": "ec5d49f9b1be856993fcc74c35d6b70c"
  },
  {
    "url": "ee/about.html",
    "revision": "88ed58183ecd840a22b375f611fb137b"
  },
  {
    "url": "ee/chisel.html",
    "revision": "40a479ba6c6ffa2fd5f407d3b4f2da10"
  },
  {
    "url": "ee/esp32.html",
    "revision": "539788813366daf8cfa8796e2c4436cf"
  },
  {
    "url": "ee/index.html",
    "revision": "de4f8272ab0e00a06c509f9195332093"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "fdf393e95825703e5513bb544b682145"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "46a3ec8fa2cb8e8b1650ed9e18bda074"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "67c7eb02d2383f3e9988c5f336a83de6"
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
    "revision": "d8fc44724d59390cada79d1b23ec0691"
  },
  {
    "url": "others/about.html",
    "revision": "750e32ea178c4ddb401c7126a6875640"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "35397bc50f6d581d0d50442802a51562"
  },
  {
    "url": "others/android-studio.html",
    "revision": "84d3494039fece09709c0637eedace41"
  },
  {
    "url": "others/android.html",
    "revision": "c62ae2e0edee04c7dd55df36f40547f8"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "c7bd35f893d4fe8fd1dac67fea689d00"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "bb854fdeb64db4c678207acb577da7b4"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "3c9e880495fa9348961ca3a9ed9b2c3e"
  },
  {
    "url": "others/css.html",
    "revision": "b32c69645238a805d066f8ca5673153b"
  },
  {
    "url": "others/docker.html",
    "revision": "a38c930ca7e0593b4b78e44cba040b8a"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "64100545a3d14c83bbb54eb6f9de6294"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "95521c642718f231400fee2ee87ac238"
  },
  {
    "url": "others/english-writting.html",
    "revision": "e74ea3c32220c60fa2c8e8d32cdbaf05"
  },
  {
    "url": "others/freertos.html",
    "revision": "4687627fb51c874e0dbb0e8311c7c72a"
  },
  {
    "url": "others/gns3.html",
    "revision": "f230f28f449a73eb63ff8a2d34e53219"
  },
  {
    "url": "others/gps.html",
    "revision": "b572323c3d245aaa716023ac47a09131"
  },
  {
    "url": "others/html5.html",
    "revision": "941b60e67a4cdc1deb5e34fa015f50ea"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "8113e191d30842518db3c1766f0113e0"
  },
  {
    "url": "others/index.html",
    "revision": "db4d853e0df8c4b23d2f18f2110da060"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "24dd0359c8600c33bc4bfed1f578bde9"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "a39523fea27df75bd620a174c0e1d21f"
  },
  {
    "url": "others/javascript.html",
    "revision": "d300132dae056852709ca4f1facf2370"
  },
  {
    "url": "others/json.html",
    "revision": "2cd89c9ef8245dbbfed2f0ac726f3151"
  },
  {
    "url": "others/latex.html",
    "revision": "e5bdd66a1ccb7cbf37ee9d886f665ef1"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "b81f58f83f88184b93cc780e9957db46"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "ba221e11d3ed752c9d4c2b17df65bc54"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "fcbdaf2b89178f01a9b813913acbade5"
  },
  {
    "url": "others/markdown.html",
    "revision": "f01c2af1afeba13fb9bcd3be198e38a7"
  },
  {
    "url": "others/matlab.html",
    "revision": "c0f5fa0052b1faa4c9df5c05df20e53c"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "ac5a87d670165b6e945a42c17a593703"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "2eda6fea071fb9d10048905ec3b561d6"
  },
  {
    "url": "others/network-security.html",
    "revision": "a13714247cc266cb18de3d22c6a43590"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "0045d084a03709ad57f8bd915a148e80"
  },
  {
    "url": "others/oral_english.html",
    "revision": "6ab28df2a226976dec7c33687732584e"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "0b5ffe3096df52e4d2b9ad4f16e12c65"
  },
  {
    "url": "others/poe.html",
    "revision": "82eebd89b71bb0de87870e67784c33a3"
  },
  {
    "url": "others/pyside2.html",
    "revision": "f1675be76609119e4c5823495bf5b107"
  },
  {
    "url": "others/python-socket.html",
    "revision": "381e0eb818a6719bae1aa67c036b5862"
  },
  {
    "url": "others/python.html",
    "revision": "29e20da67e5cc01b2815ed85cd3f74b0"
  },
  {
    "url": "others/q-learning.html",
    "revision": "6777da99c535fd67453bba166da2442b"
  },
  {
    "url": "others/qr-code.html",
    "revision": "157343282f86977c365569b971fbd677"
  },
  {
    "url": "others/qt4.html",
    "revision": "c3039f8fad940250a9b5317481134f0c"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "413a0c3faa2d9e6fbc9d8d0c0c4f9dba"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "faf795e090e01d7adc14dc31ffda1ac1"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "5db49506b8837babdf35a1cc58361847"
  },
  {
    "url": "others/sd-card.html",
    "revision": "5fe4d7da1975d27c84180ef68f2be1cd"
  },
  {
    "url": "others/sdn.html",
    "revision": "5fd4aad9452fb231adee8c62ee09445e"
  },
  {
    "url": "others/star-uml.html",
    "revision": "f1be93ce8bb60d60bd0829801a1825e2"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "0cfadd5f51d1f6106e6786e4f2e6b01a"
  },
  {
    "url": "others/verilog.html",
    "revision": "b2c843736188db71709605fc35f33910"
  },
  {
    "url": "others/vue.html",
    "revision": "c5b4c2364765eb5fed336978adaafc4d"
  },
  {
    "url": "others/w5500.html",
    "revision": "1d56b41f46333a39379d76391b917329"
  },
  {
    "url": "others/w7500.html",
    "revision": "8c7239870f9e61dd014358ca8a323aee"
  },
  {
    "url": "resume.html",
    "revision": "ec2074bd348b0404968707af010fa352"
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
