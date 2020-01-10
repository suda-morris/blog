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
    "revision": "9552f9ebce6828faea5d7d290792f190"
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
    "url": "assets/img/8_bit_adder.68cd3891.jpeg",
    "revision": "68cd38910f526c149d232720b82b6ca1"
  },
  {
    "url": "assets/img/arp_protocol.6e6dab0f.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "assets/img/BCD_encoding.f5a0b0f2.jpg",
    "revision": "f5a0b0f2188ebe0d18f4424578a588b3"
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
    "url": "assets/img/charset_encoding.9911c58d.jpg",
    "revision": "9911c58d79e8a1f106d48a83457d193e"
  },
  {
    "url": "assets/img/cpu_core_system.99c3127b.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
  },
  {
    "url": "assets/img/cpu_registers.cdba5c17.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
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
    "url": "assets/img/dynamic_link.8cab516a.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
  },
  {
    "url": "assets/img/elf_format.276a740d.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
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
    "url": "assets/img/float_example_result.9ace5a74.jpeg",
    "revision": "9ace5a7404d1790b03d07bd1b3cb5a27"
  },
  {
    "url": "assets/img/float_example.f9213c43.jpg",
    "revision": "f9213c43f5fa658a2192a68cd26435ae"
  },
  {
    "url": "assets/img/full_adder.3f11f278.jpg",
    "revision": "3f11f278ba8f24209a56fb3ee1ca9e2a"
  },
  {
    "url": "assets/img/gate_circuit.94194480.jpg",
    "revision": "94194480bcfd3b5366e4649ee80de4f6"
  },
  {
    "url": "assets/img/gpio_matrix.0bccff5a.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
  },
  {
    "url": "assets/img/half_adder.5860fd8c.jpg",
    "revision": "5860fd8c4ace079b40e66b9568d2b81e"
  },
  {
    "url": "assets/img/ieee_float32.914b71bf.jpg",
    "revision": "914b71bf1d85fb6ed76e1135f39b6941"
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
    "url": "assets/img/knowledge_map.12bc9800.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
  },
  {
    "url": "assets/img/linear_regression.d67e8d49.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
  },
  {
    "url": "assets/img/linker_process.f62da9b2.jpeg",
    "revision": "f62da9b29aa53218f8907851df27f912"
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
    "url": "assets/img/memory_paging.0cf2f08e.png",
    "revision": "0cf2f08e1ceda473df71189334857cf0"
  },
  {
    "url": "assets/img/memory_segmentation.57211af3.png",
    "revision": "57211af3053ed621aeb903433c6c10d1"
  },
  {
    "url": "assets/img/mips_instruction.b1ade5f8.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
  },
  {
    "url": "assets/img/motor_category.cd3b7f87.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
  },
  {
    "url": "assets/img/multiply_example.0615e5e4.jpeg",
    "revision": "0615e5e4406617ee6584adbb929f9571"
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
    "url": "assets/img/plt_got_table.1144d3a2.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
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
    "url": "assets/img/sequent_multiply.cb809de1.jpg",
    "revision": "cb809de19088d08767279715f07482e9"
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
    "url": "assets/img/Von_Neumann_architecture.76984515.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
  },
  {
    "url": "assets/js/10.c07b44f4.js",
    "revision": "4854ba34550876b277f4cf0a24604907"
  },
  {
    "url": "assets/js/11.069a670a.js",
    "revision": "525fc94ffa6f6fb682408b9172275a7e"
  },
  {
    "url": "assets/js/12.92f36a98.js",
    "revision": "dd77d83f130d2139d48755da969b2d54"
  },
  {
    "url": "assets/js/13.5d5556ff.js",
    "revision": "2f0b5423777fbd62a04910c92a6bf0dc"
  },
  {
    "url": "assets/js/14.e0bb4b7f.js",
    "revision": "16edc1755c29914f3bd32a6270bbd488"
  },
  {
    "url": "assets/js/15.fb7b349c.js",
    "revision": "326a846ec5aea9fa324216ce0a12bae4"
  },
  {
    "url": "assets/js/16.eedcb886.js",
    "revision": "bee08f91cfbb41083e57a20966e7df80"
  },
  {
    "url": "assets/js/17.f3cc3d3d.js",
    "revision": "278d623c1bd0dfae592c4581b47c0cb6"
  },
  {
    "url": "assets/js/18.e3bb02d3.js",
    "revision": "93135f8049c2d4f3ad73ec05c7add51a"
  },
  {
    "url": "assets/js/19.c6a16251.js",
    "revision": "1294c3f193c9aed1fe446a97d39c8c59"
  },
  {
    "url": "assets/js/2.51019dae.js",
    "revision": "9cd36119b44b2a4b6cfd5fdeb1ffa6ec"
  },
  {
    "url": "assets/js/20.54be728e.js",
    "revision": "215da48db53ece6ffb62c443c788f7a2"
  },
  {
    "url": "assets/js/21.59486622.js",
    "revision": "1f9621be2e2f4bb07553443c3d11d2f5"
  },
  {
    "url": "assets/js/22.e67703d9.js",
    "revision": "db7d8c928b4cdf0f253260ada7d924fb"
  },
  {
    "url": "assets/js/23.25f9e78a.js",
    "revision": "3fb1268e30e1dbc20bb545eb51ff6a1e"
  },
  {
    "url": "assets/js/24.cd1aa43e.js",
    "revision": "509c7d5b2721c787fab03599c1c7e16d"
  },
  {
    "url": "assets/js/25.a5f5cedc.js",
    "revision": "e48160492303d6b4e31dc4b68c1a12e7"
  },
  {
    "url": "assets/js/26.f6678112.js",
    "revision": "a7852f00402e5bc3d38ad9773e376812"
  },
  {
    "url": "assets/js/27.90cb469d.js",
    "revision": "bf01a241842058cff9bae028472b83b6"
  },
  {
    "url": "assets/js/28.2fd166ea.js",
    "revision": "b5284926147fda906d709fa5f3b9c8ef"
  },
  {
    "url": "assets/js/29.adcc5686.js",
    "revision": "23de3457dfd951462525a175b0d559e3"
  },
  {
    "url": "assets/js/3.15de794f.js",
    "revision": "a0fb0f6d57f642511ff2393a3ef9d0a0"
  },
  {
    "url": "assets/js/30.9ad0cd04.js",
    "revision": "686896f1a4ece035262ad3649e7a1a23"
  },
  {
    "url": "assets/js/31.3165aec8.js",
    "revision": "374c17ca66e8d372666e91f19b39a991"
  },
  {
    "url": "assets/js/32.a428cf9a.js",
    "revision": "a2738603e3942c54eb5263677ecf5789"
  },
  {
    "url": "assets/js/33.029e66b5.js",
    "revision": "d4bcabd8872aa62112cc9f90b1da0c05"
  },
  {
    "url": "assets/js/34.8801f7ba.js",
    "revision": "d7fcf5d5538b200ca0585ecb67ccbeb2"
  },
  {
    "url": "assets/js/35.765df9aa.js",
    "revision": "e85baa93a5d5025f446eee64c405a9d5"
  },
  {
    "url": "assets/js/36.a1a15b02.js",
    "revision": "8b3942e48b5719b0bbb96c71a8cea45b"
  },
  {
    "url": "assets/js/37.8d386f80.js",
    "revision": "0bd9bb9cdf706ca36873b92b6619071d"
  },
  {
    "url": "assets/js/38.364b599b.js",
    "revision": "d1636c0e5ba0ad2d8e35beea4b8af844"
  },
  {
    "url": "assets/js/39.317cfad1.js",
    "revision": "5745547886d7b8f75ed98f6e5bcaa0d1"
  },
  {
    "url": "assets/js/4.36293a7c.js",
    "revision": "f7d0f80def6dce9bf075f16b8f86eaf9"
  },
  {
    "url": "assets/js/40.65d8c210.js",
    "revision": "e286e42373c53ada32a479d6d7fc15ad"
  },
  {
    "url": "assets/js/41.ae21fb20.js",
    "revision": "609431c27dbf3df671b2db044f22ad3c"
  },
  {
    "url": "assets/js/42.6f78e126.js",
    "revision": "82fe6bd01968a328850bdcd6be06824f"
  },
  {
    "url": "assets/js/43.c920600a.js",
    "revision": "0c2e3f82f131adfc60194a68f70b92ae"
  },
  {
    "url": "assets/js/44.1c631e46.js",
    "revision": "2ad7627ce4366fdd649e0540331cf62b"
  },
  {
    "url": "assets/js/45.219042bc.js",
    "revision": "ccd1e5efebdaab1a06659d503ac20983"
  },
  {
    "url": "assets/js/46.e1bb3d87.js",
    "revision": "4f3d97682eebd0743dec6e0e1fd31775"
  },
  {
    "url": "assets/js/47.17c9bf50.js",
    "revision": "806ce328d8e58adda20ea9b8566de716"
  },
  {
    "url": "assets/js/48.fa933f1b.js",
    "revision": "993548f00afaf7e2900efc218c8e990d"
  },
  {
    "url": "assets/js/49.e97c3922.js",
    "revision": "06be7df285a15db325d9f44c956b63b4"
  },
  {
    "url": "assets/js/5.8d7d72e6.js",
    "revision": "3ca1b3d72438eb90608de0e1c0e228ee"
  },
  {
    "url": "assets/js/50.aadcdfce.js",
    "revision": "f08270d748e1545c930b8edb0b7902f8"
  },
  {
    "url": "assets/js/51.9eda7a25.js",
    "revision": "9d254f7c9dbb632860563ddee80bdf82"
  },
  {
    "url": "assets/js/52.99b79915.js",
    "revision": "87abb61e9ecf9795fc8b7c82cca617b9"
  },
  {
    "url": "assets/js/53.90ef1c12.js",
    "revision": "7fb5579460b48efd03e9a6fac4a9f74c"
  },
  {
    "url": "assets/js/54.dbfb181e.js",
    "revision": "005f5f1296d0a96720f3e2d2b4bd5c64"
  },
  {
    "url": "assets/js/55.4b7d7b02.js",
    "revision": "fa8c4edb5f955af0df292525c2526f2b"
  },
  {
    "url": "assets/js/56.25485383.js",
    "revision": "5d9f669ac6dd901daf89c50fa662775c"
  },
  {
    "url": "assets/js/57.c4bf6213.js",
    "revision": "4cbd227d40ecad6289adeacfb939097d"
  },
  {
    "url": "assets/js/58.f90596b7.js",
    "revision": "a4a944dd4fb8289b209242295f9958fc"
  },
  {
    "url": "assets/js/59.fffd593a.js",
    "revision": "47b7b06b8d1044ce1eaca66c4be77eac"
  },
  {
    "url": "assets/js/6.543b0774.js",
    "revision": "99983f3c1744f179bc727a66f40cffdb"
  },
  {
    "url": "assets/js/60.3f0d6d15.js",
    "revision": "cf33fefd83b8f9ede70b8d7f7f0e57d8"
  },
  {
    "url": "assets/js/61.ad4c128d.js",
    "revision": "79bbeab7d75e930054e76579c117d0dd"
  },
  {
    "url": "assets/js/62.a061bb16.js",
    "revision": "bf1fe64599f46fc36003ae0c2837e3ea"
  },
  {
    "url": "assets/js/63.4cb8f61b.js",
    "revision": "cb60b86b8aa0711b07cf4c1f3df19ba5"
  },
  {
    "url": "assets/js/64.b340584b.js",
    "revision": "359241af77073630f57ec06923c9112b"
  },
  {
    "url": "assets/js/65.a7916aa8.js",
    "revision": "d9404af6f7c10cda0aabf497b2136e86"
  },
  {
    "url": "assets/js/66.b868e1d8.js",
    "revision": "1f0fddf45f20e6057a1bf49f15272b10"
  },
  {
    "url": "assets/js/67.cc05a3d1.js",
    "revision": "8c0f045f79b35f37545ef439b7352780"
  },
  {
    "url": "assets/js/68.9ad363d2.js",
    "revision": "a6cfb712e7d61981eb16d8a9d054f964"
  },
  {
    "url": "assets/js/69.70ae7409.js",
    "revision": "1abb169503aae41d8720d16a7f885c4d"
  },
  {
    "url": "assets/js/7.00a021eb.js",
    "revision": "087788f4f06b9a688c0f7bd5300d3c7f"
  },
  {
    "url": "assets/js/70.797e45fb.js",
    "revision": "0a4090a62913b642aa76cbb174ae64d8"
  },
  {
    "url": "assets/js/71.a268b57e.js",
    "revision": "c33a09237cc0b4c5c24bf4e58e38539d"
  },
  {
    "url": "assets/js/72.a4931f8a.js",
    "revision": "eb80d6d075e2afa0bce3d4e3fe291563"
  },
  {
    "url": "assets/js/73.5e0bae4b.js",
    "revision": "ff9ffde1a7aad90eae692fd7bd9ab177"
  },
  {
    "url": "assets/js/74.2c93daca.js",
    "revision": "02a827f29d7a9fabcf789cbb0299b59d"
  },
  {
    "url": "assets/js/75.595d686b.js",
    "revision": "d8178ddaa23e05f1e108b35b71032e90"
  },
  {
    "url": "assets/js/76.03c71e8f.js",
    "revision": "162cb3fb650829b374a7edef38fc7ebb"
  },
  {
    "url": "assets/js/77.f474fe2c.js",
    "revision": "c400d5f5c353c86e008af894d3c66de7"
  },
  {
    "url": "assets/js/78.bf116a6a.js",
    "revision": "f60c4a99ffb760b432d286de1176da8e"
  },
  {
    "url": "assets/js/79.74d8f62a.js",
    "revision": "0427be5f8741d96c6cda43a6b7c65088"
  },
  {
    "url": "assets/js/8.b26a089b.js",
    "revision": "87c0be34cd7d548b204ff2a41d263881"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.f34f0489.js",
    "revision": "4673bda5015432b22a7c03d502af1011"
  },
  {
    "url": "assets/js/app.f276c78d.js",
    "revision": "a05a47996854e04616fc28fd731f8d32"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "7dc89dd7a606ed71c791593aea4eafb0"
  },
  {
    "url": "cs/bash.html",
    "revision": "b27a39309b4f9c90463ebf60d8322a2b"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "77a692521b8fedde69e8f4b6b02fc080"
  },
  {
    "url": "cs/cmake.html",
    "revision": "4e498e9b25ee58f9053fb902719d7de5"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "0a2bf41f26c6869f91fdc06d79ada938"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "6bff49dde9e4663abc5b5f0819c6c71a"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "5bb26476f233b4fba34e81ecf3af3dc5"
  },
  {
    "url": "cs/git.html",
    "revision": "0a894053e690426717d2330cb04de590"
  },
  {
    "url": "cs/index.html",
    "revision": "e01cdcd6e6de2032f1c1402b8b93be48"
  },
  {
    "url": "cs/keras.html",
    "revision": "c65fe173763ae8fdb0d5d32fd44f4bb7"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "7757878cf03d2d9c6796333a3652933a"
  },
  {
    "url": "cs/lwip.html",
    "revision": "677dd7987e7260733550446f0d7033cd"
  },
  {
    "url": "cs/scala.html",
    "revision": "0117ac701d06946c20751a6656d260fe"
  },
  {
    "url": "ee/about.html",
    "revision": "a7a35652bc307d369608ff04754e1b41"
  },
  {
    "url": "ee/chisel.html",
    "revision": "274db634a45c29754ebd673bd6010bb6"
  },
  {
    "url": "ee/esp32.html",
    "revision": "c2bb0d096d1d49a52c33e7091400aa62"
  },
  {
    "url": "ee/index.html",
    "revision": "5749fe2809b9edcefa5bb831183ba2cf"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "ec2f1e66a2aae5b793fc804a1f36fa75"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "0fba4950c9e6a271fc21f2cdcea94c2a"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "454777343d6685b55e691f974341fb26"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "fd9dd0f7c08d6cdc377f591d8b99ab7a"
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
    "url": "images/cs/computer_composition/8_bit_adder.jpeg",
    "revision": "68cd38910f526c149d232720b82b6ca1"
  },
  {
    "url": "images/cs/computer_composition/BCD_encoding.jpg",
    "revision": "f5a0b0f2188ebe0d18f4424578a588b3"
  },
  {
    "url": "images/cs/computer_composition/charset_encoding.jpg",
    "revision": "9911c58d79e8a1f106d48a83457d193e"
  },
  {
    "url": "images/cs/computer_composition/cpu_registers.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
  },
  {
    "url": "images/cs/computer_composition/dynamic_link.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
  },
  {
    "url": "images/cs/computer_composition/elf_format.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
  },
  {
    "url": "images/cs/computer_composition/float_example_result.jpeg",
    "revision": "9ace5a7404d1790b03d07bd1b3cb5a27"
  },
  {
    "url": "images/cs/computer_composition/float_example.jpg",
    "revision": "f9213c43f5fa658a2192a68cd26435ae"
  },
  {
    "url": "images/cs/computer_composition/full_adder.jpg",
    "revision": "3f11f278ba8f24209a56fb3ee1ca9e2a"
  },
  {
    "url": "images/cs/computer_composition/gate_circuit.jpg",
    "revision": "94194480bcfd3b5366e4649ee80de4f6"
  },
  {
    "url": "images/cs/computer_composition/half_adder.jpg",
    "revision": "5860fd8c4ace079b40e66b9568d2b81e"
  },
  {
    "url": "images/cs/computer_composition/ieee_float32.jpg",
    "revision": "914b71bf1d85fb6ed76e1135f39b6941"
  },
  {
    "url": "images/cs/computer_composition/knowledge_map.jpg",
    "revision": "12bc980053ea355a201e2b529048e2ff"
  },
  {
    "url": "images/cs/computer_composition/linker_process.jpeg",
    "revision": "f62da9b29aa53218f8907851df27f912"
  },
  {
    "url": "images/cs/computer_composition/memory_paging.png",
    "revision": "0cf2f08e1ceda473df71189334857cf0"
  },
  {
    "url": "images/cs/computer_composition/memory_segmentation.png",
    "revision": "57211af3053ed621aeb903433c6c10d1"
  },
  {
    "url": "images/cs/computer_composition/mips_instruction.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
  },
  {
    "url": "images/cs/computer_composition/multiply_example.jpeg",
    "revision": "0615e5e4406617ee6584adbb929f9571"
  },
  {
    "url": "images/cs/computer_composition/plt_got_table.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
  },
  {
    "url": "images/cs/computer_composition/sequent_multiply.jpg",
    "revision": "cb809de19088d08767279715f07482e9"
  },
  {
    "url": "images/cs/computer_composition/Von_Neumann_architecture.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
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
    "revision": "b5970558d6b42860397b7444a2d8dac7"
  },
  {
    "url": "others/about.html",
    "revision": "6e3326389b94a6211ddbe9e61f0bc83f"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "7c87fdf7db7fce685f26bac27d5723e3"
  },
  {
    "url": "others/android-studio.html",
    "revision": "af47a510084d61439c3d52bdc9b635b5"
  },
  {
    "url": "others/android.html",
    "revision": "af8fd483d083d3d6c2c3163a03e58a41"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "c4dcaf56c1b7e38f5b4b852573c1d05c"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "14d3820251ab76c9a0c572689e2c6363"
  },
  {
    "url": "others/css.html",
    "revision": "5a9795e1f75ed434ded08fe41e133329"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "87aab01941ec3c9b38b6afa191d12b93"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "679ae9f5027da5503e62630a423b7c0a"
  },
  {
    "url": "others/english-writting.html",
    "revision": "0e92f5e0a03adce3f7921edad0220d23"
  },
  {
    "url": "others/freertos.html",
    "revision": "d576cab349163d51601e581c88e2c573"
  },
  {
    "url": "others/gns3.html",
    "revision": "b381bddd562a84d8ba57f91a85be2079"
  },
  {
    "url": "others/gps.html",
    "revision": "bdd4e35624d6201a6a51979f52091836"
  },
  {
    "url": "others/html5.html",
    "revision": "96ebf8a90d8f6047274674e8d072fcbb"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "4c927ed8b635b8a56d3b815b7d9a9c11"
  },
  {
    "url": "others/index.html",
    "revision": "08ea5137771cf124b21b59da657c1622"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "579ebdf22d2f5296e322a0eea5cd1b3b"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "fc16adf2684936b4f047bff9af373cf0"
  },
  {
    "url": "others/javascript.html",
    "revision": "9a9bb296e76be1ad866d8d592aefbc11"
  },
  {
    "url": "others/json.html",
    "revision": "d3e83e66caa76fd97365ad7a8d4d87c5"
  },
  {
    "url": "others/latex.html",
    "revision": "131bcf79879f4812e17233d2816d5ea0"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "db965b1d68af36101c848174a9d25f74"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "88a56880e014e23e591423e544af3ccd"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "785207aeb8ae21d0064e368900faa591"
  },
  {
    "url": "others/markdown.html",
    "revision": "b74916d19e24dca6de65ad6f47d41ad6"
  },
  {
    "url": "others/matlab.html",
    "revision": "bc1d0d1f6c6a8b0d8e14f3691ae814c0"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "460e420c41155e3982d0537d7bae45be"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "ba51e9e14791984b4e71233f8948f12c"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "c1bcd4babb8deec5eeef573a07cb2bfe"
  },
  {
    "url": "others/network-security.html",
    "revision": "1ca2d00338adf3fce5926e9e010743f5"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "f53b88f023a7a1b26c3a1441fa56b1d5"
  },
  {
    "url": "others/oral_english.html",
    "revision": "694c65cce319375e5a2ed075bf5961eb"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "c3d8e3e15df092aed7704419fe3d235f"
  },
  {
    "url": "others/poe.html",
    "revision": "75c25cda9c81b110d9e69014d6ecf156"
  },
  {
    "url": "others/pyside2.html",
    "revision": "a497f32e069a31a412e650ac75fe6db5"
  },
  {
    "url": "others/python-socket.html",
    "revision": "717e2a2c56a110e6e8811c507f66c96f"
  },
  {
    "url": "others/python.html",
    "revision": "356b1b46533ff1abdaee28b14a425fec"
  },
  {
    "url": "others/q-learning.html",
    "revision": "e415523d1fadd512394cf7e125ef9ec4"
  },
  {
    "url": "others/qr-code.html",
    "revision": "7fb0a764890a41defe265de66eb6189e"
  },
  {
    "url": "others/qt4.html",
    "revision": "e539c8de596afd83be26f9c63574e78d"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "3135bb0139f0785d41afc2f305b1e17d"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "30db000fe94ad40d413ccde5644a5d3d"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "638882b25224ce6740105a3114e7f7b3"
  },
  {
    "url": "others/sd-card.html",
    "revision": "f2705600cba9df941f77ebf3499a12fd"
  },
  {
    "url": "others/sdn.html",
    "revision": "266c0f6db8bfca71a57df0d80dd8155d"
  },
  {
    "url": "others/star-uml.html",
    "revision": "f65a1495b126a053c4c1d34c997d58ea"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "269190ace8eba52f853fa62060e81737"
  },
  {
    "url": "others/verilog.html",
    "revision": "faddd583d32bc15541c228ef260b9595"
  },
  {
    "url": "others/vue.html",
    "revision": "ca1689d06e723701ae8df07f393eac4c"
  },
  {
    "url": "others/w5500.html",
    "revision": "62c992bde06a5505f1f929276b4534f0"
  },
  {
    "url": "others/w7500.html",
    "revision": "a98ed299bf4ab726c7c1ad26dec8fed9"
  },
  {
    "url": "resume.html",
    "revision": "4a3fdabd9c82b528820cf3d21f4d9e98"
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
