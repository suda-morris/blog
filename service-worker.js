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
    "revision": "026574d41d6296025bfe787e74c4c691"
  },
  {
    "url": "assets/css/0.styles.6499505b.css",
    "revision": "d5ea663310e84cd4ec7a8ee87c2a3d5b"
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
    "url": "assets/img/brash_motor.78e5d626.png",
    "revision": "78e5d626f0a9e18a5fd2434b712edb98"
  },
  {
    "url": "assets/img/brashless_motor.850d54bc.png",
    "revision": "850d54bc1f29f5bb3db7ee53d23803bd"
  },
  {
    "url": "assets/img/cache_system.0bb68b0b.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "assets/img/cpu_core_system.99c3127b.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "assets/img/dma_chain.5fca630d.png",
    "revision": "5fca630de450c01698ac8265b4f53961"
  },
  {
    "url": "assets/img/dma_engine.54d9bdb7.png",
    "revision": "54d9bdb70a2295e715bd1c7546115846"
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
    "url": "assets/img/input_signal_to_peripheral.a9b187b8.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "assets/img/interrupt_matrix.dc37bcbd.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
  },
  {
    "url": "assets/img/io_mux_pad.671514cc.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
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
    "url": "assets/img/motor_category.cd3b7f87.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
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
    "url": "assets/img/output_signal_to_pad.06e891ba.png",
    "revision": "06e891bab7649f99f5a1c070de7885c6"
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
    "url": "assets/img/spi_signals.2ac41670.png",
    "revision": "2ac4167088ad40da2f88c372545f26b9"
  },
  {
    "url": "assets/img/strapping_pin.5c9a4fda.png",
    "revision": "5c9a4fda6540177c3f7f80d6862a22cc"
  },
  {
    "url": "assets/img/tcp_ip_stack.13913b2b.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "assets/js/10.dd405d7e.js",
    "revision": "cb7207c1cb9c58341a20d69f1aa234d2"
  },
  {
    "url": "assets/js/11.713e1c7f.js",
    "revision": "abb3706d0e99fff4a9790057bbe3924d"
  },
  {
    "url": "assets/js/12.6a029221.js",
    "revision": "07e64f0ccce32ac53fd131beb91e85b0"
  },
  {
    "url": "assets/js/13.136e83d1.js",
    "revision": "54743481d3fc71073f4ca1e6aa5da8af"
  },
  {
    "url": "assets/js/14.3eb931a5.js",
    "revision": "114299b01032047775f170e82a7e1894"
  },
  {
    "url": "assets/js/15.54fb2f7f.js",
    "revision": "de104476291fc7a903d796dae7cd49c3"
  },
  {
    "url": "assets/js/16.c5f26489.js",
    "revision": "12d6378e9a26ee3cd42b64ccbd15f01a"
  },
  {
    "url": "assets/js/17.cf3deb33.js",
    "revision": "c6af9a522538b65f96aedf3da554eb38"
  },
  {
    "url": "assets/js/18.e6300bf6.js",
    "revision": "0a04705607ff8b87a70130937c20245e"
  },
  {
    "url": "assets/js/19.201ffbdb.js",
    "revision": "d56bddf41f208f328097cd74e87b386c"
  },
  {
    "url": "assets/js/2.937f97c1.js",
    "revision": "41bacae0be4d1f5fe4cd4820b2d9fa5e"
  },
  {
    "url": "assets/js/20.f166022f.js",
    "revision": "46eb322b8418a2666aed5625e49804ed"
  },
  {
    "url": "assets/js/21.0fc4703d.js",
    "revision": "76eab9ca483a67d7fb31c78f027ffd9c"
  },
  {
    "url": "assets/js/22.7472b12d.js",
    "revision": "68bc36049d39f92c35260d0ee56c9096"
  },
  {
    "url": "assets/js/23.c5ce8b6d.js",
    "revision": "1328c6730dd5f0a60b9e053c7b79bcd5"
  },
  {
    "url": "assets/js/24.79ee849e.js",
    "revision": "bd260365fb06d968a249ad832b4a5116"
  },
  {
    "url": "assets/js/25.f97ea77f.js",
    "revision": "5c74208878c8fc5ccf19a13401f5567e"
  },
  {
    "url": "assets/js/26.b41b1bf3.js",
    "revision": "e1116e46e67b2b427442086bab22a329"
  },
  {
    "url": "assets/js/27.eb54b7a6.js",
    "revision": "c3a6457c49755e0077be2a44447bf654"
  },
  {
    "url": "assets/js/28.f83a109d.js",
    "revision": "fa8797574d50cad53bd29e7802889399"
  },
  {
    "url": "assets/js/29.e473a8d0.js",
    "revision": "21f0828c882bfde0e49dc8ea325a30c0"
  },
  {
    "url": "assets/js/3.b19bbcdf.js",
    "revision": "9140efffa0aec2cdcb62b3cc92bd9c38"
  },
  {
    "url": "assets/js/30.fd21acd3.js",
    "revision": "12824e9f28062ce2e50c4685a29ad6fa"
  },
  {
    "url": "assets/js/31.f82aa9f8.js",
    "revision": "478a8f0534fc846fa3e24e4a61ebfb69"
  },
  {
    "url": "assets/js/32.f0e94c4b.js",
    "revision": "b111e2d9a7fc2ed1acbbfa61f5e14700"
  },
  {
    "url": "assets/js/33.d336578f.js",
    "revision": "53f00f03ae81475c782ccb3533e0af36"
  },
  {
    "url": "assets/js/34.4fd5b05b.js",
    "revision": "321f023f98bc5b7d337a615e28ec5fb4"
  },
  {
    "url": "assets/js/35.a9e59f43.js",
    "revision": "34967bec0abd232f4981c68f105b94c6"
  },
  {
    "url": "assets/js/36.42c32094.js",
    "revision": "68bafb560d3b4414a46ef6497ea87c88"
  },
  {
    "url": "assets/js/37.08f08b50.js",
    "revision": "c94025f47b7c211a377c85814db05052"
  },
  {
    "url": "assets/js/38.73ee321f.js",
    "revision": "d9beae8ea0b359afc96c278a8371332b"
  },
  {
    "url": "assets/js/39.6f3e432c.js",
    "revision": "2256a319ebc133eaa85647ec4074e81b"
  },
  {
    "url": "assets/js/4.847fa494.js",
    "revision": "6ff79c5a455aceea486296b39d701eca"
  },
  {
    "url": "assets/js/40.6c9a63bb.js",
    "revision": "21865f6036f8631ec3eadfc4e6445c61"
  },
  {
    "url": "assets/js/41.0d834c31.js",
    "revision": "1be0d1dd0b11546392438b7e30a362db"
  },
  {
    "url": "assets/js/42.988c2955.js",
    "revision": "2f22671a01e155f04ab2b3911508c0c6"
  },
  {
    "url": "assets/js/43.fe69e4b1.js",
    "revision": "62fbf1270dd04ddeb4b39429bb7c5534"
  },
  {
    "url": "assets/js/44.1ef2e358.js",
    "revision": "59a9590f17149bc4c6aa101ec91345db"
  },
  {
    "url": "assets/js/45.4aa8fec2.js",
    "revision": "4b0704c66ce59a7428876a0e73e31086"
  },
  {
    "url": "assets/js/46.a74e217b.js",
    "revision": "4ff546f6068620e2062ccc6dda210632"
  },
  {
    "url": "assets/js/47.78b7e475.js",
    "revision": "da4d14cbc87be2494b3df8bf729a2042"
  },
  {
    "url": "assets/js/48.462164bf.js",
    "revision": "8a4a9fe15f6ad41d3e71cdab1f02d1fa"
  },
  {
    "url": "assets/js/49.d96a01bf.js",
    "revision": "f7e12f264d3dd8b3075289b248a5da95"
  },
  {
    "url": "assets/js/5.ff69d6fe.js",
    "revision": "2d8dc876111e608b5c16042aad58dfbc"
  },
  {
    "url": "assets/js/50.8fac591b.js",
    "revision": "7d131e2d309676de6b73bc6504cf50fb"
  },
  {
    "url": "assets/js/51.a203e073.js",
    "revision": "c971a8dc56029ac17276ee8e6ea2c05c"
  },
  {
    "url": "assets/js/52.6615118a.js",
    "revision": "0958b87a503e888985d85abccddcb79a"
  },
  {
    "url": "assets/js/53.215bb849.js",
    "revision": "6031d67944e70cc6a722de53baf2f4d7"
  },
  {
    "url": "assets/js/54.26e9e06f.js",
    "revision": "5a71583cb4ebb8ae4c6d6597f5a3eed3"
  },
  {
    "url": "assets/js/55.23d2a125.js",
    "revision": "a4270e59c5c46e5e5b5e77841b6de973"
  },
  {
    "url": "assets/js/56.f2e4c2a1.js",
    "revision": "1e35147df648dbb17a5bb172e71d8399"
  },
  {
    "url": "assets/js/57.23c1724f.js",
    "revision": "df14c02ba75ae0503ad9d675437c5814"
  },
  {
    "url": "assets/js/58.7d2a4093.js",
    "revision": "5356ac60d025f51ddc7f4842a08f3399"
  },
  {
    "url": "assets/js/59.7fac03a8.js",
    "revision": "461f5fff247b3a9009c4036759f5eadd"
  },
  {
    "url": "assets/js/6.b2330d6f.js",
    "revision": "365f4fc0d7dc6d0f3e64a37743993d50"
  },
  {
    "url": "assets/js/60.3244f58e.js",
    "revision": "3fdfec8bcea47b9e53bd086ae8abb177"
  },
  {
    "url": "assets/js/61.fc91a0c5.js",
    "revision": "0c0fccf981b4d9f2edc265db240761d7"
  },
  {
    "url": "assets/js/62.79130fe3.js",
    "revision": "be3b5f960b69cc52da46fe1edb241004"
  },
  {
    "url": "assets/js/63.3280ad88.js",
    "revision": "2fbeb228b4c48f925dca26f4e7f13afd"
  },
  {
    "url": "assets/js/64.019b5a8b.js",
    "revision": "11da0efc854c8405c5426c3fcde34d13"
  },
  {
    "url": "assets/js/65.0509636e.js",
    "revision": "9e79bf4b8d2ebe6c8fb1b228608bb7c2"
  },
  {
    "url": "assets/js/66.26a21fd8.js",
    "revision": "d3cecc49288c150c1e3f3260d1911575"
  },
  {
    "url": "assets/js/67.4b7c6685.js",
    "revision": "73ff77d1d89ce5606379d70cc703511b"
  },
  {
    "url": "assets/js/68.a180c7a5.js",
    "revision": "873cec17935bab37afdbf399e2a23f28"
  },
  {
    "url": "assets/js/69.004a5fe1.js",
    "revision": "f6627747f2b1b71018625de823da8a38"
  },
  {
    "url": "assets/js/7.b2e4dd35.js",
    "revision": "96ec4bbd7c53ae2d962b5a818ba253d1"
  },
  {
    "url": "assets/js/70.745d236f.js",
    "revision": "27e205161d32c5eb9532cc5b8b7829aa"
  },
  {
    "url": "assets/js/71.800153b3.js",
    "revision": "2a5c950eddb39c7ccf1d043982f758db"
  },
  {
    "url": "assets/js/72.bb46a71a.js",
    "revision": "311dc1ee06bf9592239682aa24fd919c"
  },
  {
    "url": "assets/js/73.fcce3454.js",
    "revision": "dc7312b59836910771b7f8b01948bda0"
  },
  {
    "url": "assets/js/74.c9b91a8f.js",
    "revision": "edd38b18d9f950ce7de6d8afc992210b"
  },
  {
    "url": "assets/js/75.8a86c4a1.js",
    "revision": "22f99a257555f2031faf5888a2991396"
  },
  {
    "url": "assets/js/76.7de6e8e5.js",
    "revision": "bc8177b64a474c44beb97ba8877bdeca"
  },
  {
    "url": "assets/js/77.cc5d7cfc.js",
    "revision": "94ae6b793b167c5c650339c1b4563ebb"
  },
  {
    "url": "assets/js/78.ac55099c.js",
    "revision": "8c2e1edda50ce7a3f1cbc53990364abb"
  },
  {
    "url": "assets/js/79.030ab260.js",
    "revision": "8d8ac292cf6fcb1bbdadff6a26d448b9"
  },
  {
    "url": "assets/js/8.dcbf3b88.js",
    "revision": "db612373e0998eb75f0f9e72c473b537"
  },
  {
    "url": "assets/js/9.aea67dc5.js",
    "revision": "4f03e754ccc91a0217e9de30c35b52b5"
  },
  {
    "url": "assets/js/app.99b6ba19.js",
    "revision": "a13d2b350ff9091191d4a5319c000561"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "3f93464f63bb6be25dd27a021f444efb"
  },
  {
    "url": "cs/bash.html",
    "revision": "954aa7e5e717bd1eb03fa9dae977b51e"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "48ba54750d6a60a8c6519b241a467ace"
  },
  {
    "url": "cs/cmake.html",
    "revision": "9ca41acf6aa203f44f147974f5c3638a"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "91ee3e175fc9402b009d68ca923e48a1"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "14e4104d88414215ee26f1776893b674"
  },
  {
    "url": "cs/git.html",
    "revision": "2cb7c8148501cff3255b74be2554c21e"
  },
  {
    "url": "cs/index.html",
    "revision": "cfe8f3931e8fd5b188d76d258eb92223"
  },
  {
    "url": "cs/keras.html",
    "revision": "7421ebc0a66c64f62ee0e21557d2b524"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "17f67dd7d5f240e78f7949a07c9af3c5"
  },
  {
    "url": "cs/lwip.html",
    "revision": "991f1db405012799b12ebca90a6b9b70"
  },
  {
    "url": "cs/scala.html",
    "revision": "b494fe2a0894a290ecaca9ac86a0ef35"
  },
  {
    "url": "ee/about.html",
    "revision": "a02cf16e588d699f9a50a18418dabf18"
  },
  {
    "url": "ee/chisel.html",
    "revision": "6029d3a67e158e7a54be66c7d058d3aa"
  },
  {
    "url": "ee/esp32.html",
    "revision": "c50af0bd86488ee9f81552dd31065622"
  },
  {
    "url": "ee/index.html",
    "revision": "dcf6971ef6378d8fa3e7185e77d869fb"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "740a719317a156d77490ce73de1522f2"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "9c920550d7c14f9444fa3f5dd4ba72b2"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "0018d18f913100ee1b4ad32f82b17e8b"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "b9d22499535d19026309c8d84e83969e"
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
    "url": "images/ee/esp32/cache_system.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "images/ee/esp32/cpu_core_system.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "images/ee/esp32/dma_chain.png",
    "revision": "5fca630de450c01698ac8265b4f53961"
  },
  {
    "url": "images/ee/esp32/dma_engine.png",
    "revision": "54d9bdb70a2295e715bd1c7546115846"
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
    "url": "images/ee/esp32/input_signal_to_peripheral.png",
    "revision": "a9b187b89174d16d18a803e0112e2183"
  },
  {
    "url": "images/ee/esp32/interrupt_matrix.png",
    "revision": "dc37bcbdf70db978592e05f56ee47fe8"
  },
  {
    "url": "images/ee/esp32/io_mux_pad.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
  },
  {
    "url": "images/ee/esp32/memory_map.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "images/ee/esp32/output_signal_to_pad.png",
    "revision": "06e891bab7649f99f5a1c070de7885c6"
  },
  {
    "url": "images/ee/esp32/peripheral_clock.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "images/ee/esp32/spi_signals.png",
    "revision": "2ac4167088ad40da2f88c372545f26b9"
  },
  {
    "url": "images/ee/esp32/strapping_pin.png",
    "revision": "5c9a4fda6540177c3f7f80d6862a22cc"
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
    "url": "images/ee/motor/brash_motor.png",
    "revision": "78e5d626f0a9e18a5fd2434b712edb98"
  },
  {
    "url": "images/ee/motor/brashless_motor.png",
    "revision": "850d54bc1f29f5bb3db7ee53d23803bd"
  },
  {
    "url": "images/ee/motor/motor_category.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
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
    "revision": "ed3df48cf67180aeae480e575ad55323"
  },
  {
    "url": "others/about.html",
    "revision": "7989eb73821525a54ad9a188d8b894c2"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "7366232fd5f8be49cbe7f8e8d54f2b14"
  },
  {
    "url": "others/android-studio.html",
    "revision": "38dda32be34702ee73d520e8e444b351"
  },
  {
    "url": "others/android.html",
    "revision": "a543150e5069ea318261ecdcda611152"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "ac335e13b07fe387f8de75a7b0150b5a"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "efd67a34ce1b1550764bc635c915c6aa"
  },
  {
    "url": "others/css.html",
    "revision": "1a9a1374afe0941a6b1faf6195133881"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "13b3f0a89c6326033c74e0aaaeb372bb"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "f0a971e8c61ae9959295aa69acaf768c"
  },
  {
    "url": "others/english-writting.html",
    "revision": "6a37025e97b836a35d6e901dea1d2e94"
  },
  {
    "url": "others/freertos.html",
    "revision": "384737c7e304185164b615cb0f729adb"
  },
  {
    "url": "others/gns3.html",
    "revision": "b96778584a9619751edac27d6a67a630"
  },
  {
    "url": "others/gps.html",
    "revision": "7e6a274c6d61cb7f02147cebf8da7840"
  },
  {
    "url": "others/html5.html",
    "revision": "7c5699e5c75dd15c06817c97e085b098"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "1a52ea252801e834eaa58878f63863f5"
  },
  {
    "url": "others/index.html",
    "revision": "322cf7dc0fae1d1cfbaa9af9fe50f943"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "89ff7be6d046afbf6ff1487f8d65ab6f"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "4ff4dd0c06c657582980724e49ce9f01"
  },
  {
    "url": "others/javascript.html",
    "revision": "abdb6dc4828e18308e8466c2e9f5358e"
  },
  {
    "url": "others/json.html",
    "revision": "15a9fdb82852fca59665c7b64b5e9de0"
  },
  {
    "url": "others/latex.html",
    "revision": "4473aad3ce184a9cdee2625a20c184f6"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "17dbb2cece506efa5f2f2dd018542e16"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "ab75f15a1e9787c4160fbe25abdd5b6a"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "ac20661fc55858258f81ea4ca2456abd"
  },
  {
    "url": "others/markdown.html",
    "revision": "5d28d75a0ed3a27fb5607b4712829df9"
  },
  {
    "url": "others/matlab.html",
    "revision": "aaeea26bb2a23bc31d68067029d710a5"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "3de4e5a1abeaf1f8ced4bfbc2dfa2246"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "293723d5879167c41f59406ce67886ea"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "8d73cfb48e82cf1b02d1ab75b5155ddc"
  },
  {
    "url": "others/network-security.html",
    "revision": "6f89df2267d798de27140fbc59c0ae63"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "d7f40d29b81b77ed3076898e9aa04979"
  },
  {
    "url": "others/oral_english.html",
    "revision": "ee216cf691e4f40fa000db9f6b86fb74"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "35d52c6499dccabe7dfba058be44d20f"
  },
  {
    "url": "others/poe.html",
    "revision": "684853a016c98c320f145fce78a98a31"
  },
  {
    "url": "others/pyside2.html",
    "revision": "e33cb4e62f80457f1ca2cd36d7a69a14"
  },
  {
    "url": "others/python-socket.html",
    "revision": "d918c89d88450113168039026c3cc8bf"
  },
  {
    "url": "others/python.html",
    "revision": "09626ba977e8081f0c436be5e85a30ca"
  },
  {
    "url": "others/q-learning.html",
    "revision": "db28013dc6895c2b600f6a191006b7dc"
  },
  {
    "url": "others/qr-code.html",
    "revision": "9d505a09ec0c66d6237a1c259354055f"
  },
  {
    "url": "others/qt4.html",
    "revision": "1d53c92e0a0da528b5ed319d568175c5"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "95bf51c1c27e0c4f93a6edd0df1c1b11"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "9f320c1e157f29a09256c8d07a42d3a8"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "7bd538efd304d6924da5afba9f942f31"
  },
  {
    "url": "others/sd-card.html",
    "revision": "2c32fc93b9af813bfeba85a221af4d5b"
  },
  {
    "url": "others/sdn.html",
    "revision": "5b42971edd4aa35840a149b5e5fb5421"
  },
  {
    "url": "others/star-uml.html",
    "revision": "03a5bab9f31c8434d8d5a2cbddc26970"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "fff940735afafa94a8e7538e31b7f4fd"
  },
  {
    "url": "others/verilog.html",
    "revision": "220cb533a90f20640316390810ba699e"
  },
  {
    "url": "others/vue.html",
    "revision": "310e7b737c48f56db0cb4fabeb8e0d5a"
  },
  {
    "url": "others/w5500.html",
    "revision": "ce417a7c2ef4e09dd11fc766d32c1d1c"
  },
  {
    "url": "others/w7500.html",
    "revision": "4dd1e722615464f5bf45a9c1ed444c33"
  },
  {
    "url": "resume.html",
    "revision": "26ba90b74535041dd0dcfc8e563875e1"
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
