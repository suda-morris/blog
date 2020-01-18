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
    "revision": "725b0aaf1b80a4263058ad4a1381479b"
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
    "url": "assets/img/2-1_selector.383bfbb0.jpeg",
    "revision": "383bfbb085c1eeb9b9473ae6f18e97a0"
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
    "url": "assets/img/CPU_pipeline_overhead.d9e141af.jpeg",
    "revision": "d9e141af3f2c5eedd5aed438388cfe26"
  },
  {
    "url": "assets/img/CPU_pipeline.1e880fa8.jpeg",
    "revision": "1e880fa8b1eab511583267e68f0541ad"
  },
  {
    "url": "assets/img/cpu_registers.cdba5c17.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
  },
  {
    "url": "assets/img/D_flip_flop.d749acce.jpeg",
    "revision": "d749acce21756d89c35ee19545cfebbb"
  },
  {
    "url": "assets/img/decoder.4002b5f8.jpeg",
    "revision": "4002b5f8f60a913e655d5268348ee201"
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
    "url": "assets/img/instruction_cycle.bde3548a.jpeg",
    "revision": "bde3548a4789ba49cab74c8c1ab02a67"
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
    "url": "assets/img/PC_counter.1ed21092.jpg",
    "revision": "1ed21092022057ed192a7d9aff76144c"
  },
  {
    "url": "assets/img/peripheral_clock.329fd309.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "assets/img/pipeline_bubble.0d762f2c.jpeg",
    "revision": "0d762f2ce532d87cfe69c7b167af9c2a"
  },
  {
    "url": "assets/img/plt_got_table.1144d3a2.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
  },
  {
    "url": "assets/img/princeton_harvard.e7508cb4.jpeg",
    "revision": "e7508cb409d398380753b292b6df8391"
  },
  {
    "url": "assets/img/RS_flip_flop_with_clock.9e9bc411.jpeg",
    "revision": "9e9bc411aa8c7bf2f080f306a0fb8bd8"
  },
  {
    "url": "assets/img/RS_flip_flop.dc6dcce6.jpeg",
    "revision": "dc6dcce612b2fd51939d7ec44b3fe1de"
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
    "url": "assets/img/simplest_CPU.6863e10f.jpeg",
    "revision": "6863e10fc635791878d1ecd57618b871"
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
    "url": "assets/img/structure_hazard.c2a4c034.jpeg",
    "revision": "c2a4c0340cb835350ea954cdc520704e"
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
    "url": "assets/js/10.1009ff67.js",
    "revision": "ce51b661f3f33b6d58f8c2b9d5c8d294"
  },
  {
    "url": "assets/js/11.a58dfea8.js",
    "revision": "6350b447a8c6382f2c0fe491f7dd5df2"
  },
  {
    "url": "assets/js/12.fbd1b783.js",
    "revision": "fe4034c5081ef72ce08bc2588332a6d0"
  },
  {
    "url": "assets/js/13.1ae01420.js",
    "revision": "8821ff69fd629eb9dd8e0de9cc489eec"
  },
  {
    "url": "assets/js/14.d399e264.js",
    "revision": "1dbe1e3c6c1a6830e8bfff70cd6b9277"
  },
  {
    "url": "assets/js/15.9e647ef2.js",
    "revision": "08f183552f61abfb35485396307b3b45"
  },
  {
    "url": "assets/js/16.17bba55e.js",
    "revision": "81ebccbf545511bd6b1478052a54c385"
  },
  {
    "url": "assets/js/17.4b216b4e.js",
    "revision": "066221d4f9776657aa7fb59079f5a7c9"
  },
  {
    "url": "assets/js/18.ee72f3cf.js",
    "revision": "dceb46f70547535aecebd7cba16b4d7a"
  },
  {
    "url": "assets/js/19.759ba502.js",
    "revision": "cfce98d30412ae1b59c5077aced33a1d"
  },
  {
    "url": "assets/js/2.546f7c4a.js",
    "revision": "8f0bad1ccdee9e67d4ea4f5ff739ae22"
  },
  {
    "url": "assets/js/20.0d226e6b.js",
    "revision": "343d6efe07c97d53a8d44e03d7390313"
  },
  {
    "url": "assets/js/21.92ae6af4.js",
    "revision": "8c7afc911587ef0fcdb9dcfc05815337"
  },
  {
    "url": "assets/js/22.9f5dcf4a.js",
    "revision": "07c029b8e8740c05c37d3fef9c18accc"
  },
  {
    "url": "assets/js/23.0e5b9d01.js",
    "revision": "108ddd349713348003bd6c482f2da618"
  },
  {
    "url": "assets/js/24.6bcea020.js",
    "revision": "78752b439d073163e3e672c0e578f015"
  },
  {
    "url": "assets/js/25.bc08cda0.js",
    "revision": "216dae120239c726d280800c448fbfe3"
  },
  {
    "url": "assets/js/26.c779e469.js",
    "revision": "cf3d43cc89329e2e5e6330c658ada199"
  },
  {
    "url": "assets/js/27.f7373080.js",
    "revision": "e70f61974665cb2574dc43fd9e3fe8ce"
  },
  {
    "url": "assets/js/28.9ffd63f9.js",
    "revision": "94e1bc656616a42a3b8eb50952afc208"
  },
  {
    "url": "assets/js/29.271352ac.js",
    "revision": "7ae4662c2232049b3cbc149ac478f0ee"
  },
  {
    "url": "assets/js/3.8d355b5e.js",
    "revision": "66c322f7d37f2ad192c37968338842fd"
  },
  {
    "url": "assets/js/30.0030f157.js",
    "revision": "042140276ae9233f07cbb8a715fbd170"
  },
  {
    "url": "assets/js/31.b11cfa13.js",
    "revision": "b2a613d2d670eb9c54bf21e86da235dd"
  },
  {
    "url": "assets/js/32.292e3709.js",
    "revision": "844bf03da082122f558a5cd1c972247b"
  },
  {
    "url": "assets/js/33.0feaedb2.js",
    "revision": "0c14f62b5c17e22bf82259112503fac0"
  },
  {
    "url": "assets/js/34.360b911b.js",
    "revision": "ce2ce0da570525122969193a4cc36074"
  },
  {
    "url": "assets/js/35.262caf0c.js",
    "revision": "3156c0f3b778cbb4997aa5944417c998"
  },
  {
    "url": "assets/js/36.2320cf52.js",
    "revision": "f34c13aa8351d60a1ac3d4687f40d223"
  },
  {
    "url": "assets/js/37.becb5b3c.js",
    "revision": "c91fb05f9f585c7101a6d0db97e707dc"
  },
  {
    "url": "assets/js/38.f7717100.js",
    "revision": "4497303d42ad9dd29f631c713ccae08d"
  },
  {
    "url": "assets/js/39.d88aaefc.js",
    "revision": "e40fa8aacef71ece99568916d38b960e"
  },
  {
    "url": "assets/js/4.c64c2d6a.js",
    "revision": "8a92be68f553ef1c7a1fc6fd4af3ce5d"
  },
  {
    "url": "assets/js/40.360ed6bc.js",
    "revision": "f9e8b2e3cdc1e2df35673905c7d62f03"
  },
  {
    "url": "assets/js/41.114f908d.js",
    "revision": "f4b634e1b1d5a810a4cecb7738269432"
  },
  {
    "url": "assets/js/42.b998ef01.js",
    "revision": "a3523231dfbc25da9c29eb0220a0193e"
  },
  {
    "url": "assets/js/43.51aeb367.js",
    "revision": "3bea563554454f8d2608706e17dfa661"
  },
  {
    "url": "assets/js/44.6e10f24e.js",
    "revision": "9d1372d3049ff49625638b621acaf0ea"
  },
  {
    "url": "assets/js/45.06c46cd5.js",
    "revision": "b5344c88116aabfd41337659cb5bd845"
  },
  {
    "url": "assets/js/46.9fa502f9.js",
    "revision": "5e9169987686f46a094b46c19fefd363"
  },
  {
    "url": "assets/js/47.79436a6b.js",
    "revision": "b90d83470d25e6521363a7c29e7467a9"
  },
  {
    "url": "assets/js/48.80d79369.js",
    "revision": "0adccd006f88a8e014bbad0d4f094376"
  },
  {
    "url": "assets/js/49.2412941c.js",
    "revision": "0703393349a8c2ccab4e705f4d895c65"
  },
  {
    "url": "assets/js/5.4fc6800b.js",
    "revision": "68b46f3016e8bc1afd2e050b48938a47"
  },
  {
    "url": "assets/js/50.024a48c6.js",
    "revision": "f8a333b4c7e8bed882c135b7179fe07b"
  },
  {
    "url": "assets/js/51.2018f8c8.js",
    "revision": "79472af0f3f160b8e049efe0ebd7b641"
  },
  {
    "url": "assets/js/52.e24ae6d9.js",
    "revision": "5e94b4f267a128969776289976432541"
  },
  {
    "url": "assets/js/53.099683e9.js",
    "revision": "76893dfb7540a55f4dd4b05b3c34fee3"
  },
  {
    "url": "assets/js/54.cfa75fa6.js",
    "revision": "c02a3219d8742c1580afaa6bddc88858"
  },
  {
    "url": "assets/js/55.edec6869.js",
    "revision": "4c657d010cd5b95da07ff6dcec12e1df"
  },
  {
    "url": "assets/js/56.f3dea57e.js",
    "revision": "7d8a3dd5cc3c66e34e6cbfedcbf021a6"
  },
  {
    "url": "assets/js/57.b5ab9e34.js",
    "revision": "1fb1f1dbcf7693d94cd2b33df2c6d41e"
  },
  {
    "url": "assets/js/58.696f59e7.js",
    "revision": "9fbbe938db92bad1f734cb4e38a57ced"
  },
  {
    "url": "assets/js/59.416fad35.js",
    "revision": "2a7e5f6918234327f432d3e326466390"
  },
  {
    "url": "assets/js/6.746c1ec8.js",
    "revision": "e9a7aca76377cb772300166d864c8ba3"
  },
  {
    "url": "assets/js/60.5f3376a6.js",
    "revision": "4b772ffabfcf49813fa1caebeebb1492"
  },
  {
    "url": "assets/js/61.f382196a.js",
    "revision": "cd044396601992b1281b063fc9fdea1d"
  },
  {
    "url": "assets/js/62.1b8319d5.js",
    "revision": "114387ef2a846d319e3314dd3f389a4a"
  },
  {
    "url": "assets/js/63.4eaf0eb1.js",
    "revision": "1315bf7729d0b26b440870106f0abb6d"
  },
  {
    "url": "assets/js/64.941b83f7.js",
    "revision": "08fdf7f723527f4b5461c81017638be7"
  },
  {
    "url": "assets/js/65.b6948f1d.js",
    "revision": "d619a1c6ce190ebff5fb72f778738035"
  },
  {
    "url": "assets/js/66.75009a4b.js",
    "revision": "ddcb6c6d12c4dc54cd406a0f5c23c8be"
  },
  {
    "url": "assets/js/67.8342d590.js",
    "revision": "cab40d9e577d5010328117bb2807e3fc"
  },
  {
    "url": "assets/js/68.96688be7.js",
    "revision": "8534c9916a6778f3f6a91e5ac20de410"
  },
  {
    "url": "assets/js/69.9e22f47a.js",
    "revision": "fe1c9f6f3123f26e0fa35a4c365cd6b8"
  },
  {
    "url": "assets/js/7.b8f5c292.js",
    "revision": "f9c86f3a27989252bddcda4f9af89c6d"
  },
  {
    "url": "assets/js/70.ef87119f.js",
    "revision": "748b444261468175f30866e05ad935e5"
  },
  {
    "url": "assets/js/71.afde5461.js",
    "revision": "6cf45d29ff6ca8a364858085b6f164e1"
  },
  {
    "url": "assets/js/72.cde12edc.js",
    "revision": "da0f77b6a709957e03bcb72dfbf0c178"
  },
  {
    "url": "assets/js/73.9a16a1cf.js",
    "revision": "c099ff9a7a49855431f40bcaa8f8cf7f"
  },
  {
    "url": "assets/js/74.eca5004f.js",
    "revision": "8f3580af67bd1eb50b290b3e13c3bdf9"
  },
  {
    "url": "assets/js/75.85bbabe7.js",
    "revision": "22c57376c8d4f9d8f351d77492d9f6ca"
  },
  {
    "url": "assets/js/76.7669117d.js",
    "revision": "2900fe8d1b433502d6aaae1e7968842b"
  },
  {
    "url": "assets/js/77.948e716f.js",
    "revision": "6c6994016e3c33de277ff3f9c3c45597"
  },
  {
    "url": "assets/js/78.1b92009b.js",
    "revision": "1fa61cb81cb464fae61fbfa9de95407f"
  },
  {
    "url": "assets/js/79.c28e6633.js",
    "revision": "7ab9f15f2152b0f3f23ab1a02345c433"
  },
  {
    "url": "assets/js/8.3780701a.js",
    "revision": "4ec3d7c27340a7602a2f5062274dd3a2"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.1ccaf805.js",
    "revision": "4ffdfff16a811ed4f1a647955599a16d"
  },
  {
    "url": "assets/js/app.a6d192a9.js",
    "revision": "eb5009692d249c9644460e00c6997559"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "09a783e1f4b83bb9476208c3b55a56d4"
  },
  {
    "url": "cs/bash.html",
    "revision": "316f09e68dcd65a0a29e6c53ac87c114"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "3508a3f7e46cb74797eb7d20ca073bd1"
  },
  {
    "url": "cs/cmake.html",
    "revision": "48d022b83cc74f3a2530cdb45a17614c"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "a6a76a26a0a14d8211a331ec184728bb"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "ce9e9e5c1db73deffc180942e2442454"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "40f8442557b200a44f79c45238a6ea8f"
  },
  {
    "url": "cs/git.html",
    "revision": "b0ea7100bda5cda7adb67e168c054bab"
  },
  {
    "url": "cs/index.html",
    "revision": "506cf9a4fcf93c7dfaa881a439ec7bab"
  },
  {
    "url": "cs/keras.html",
    "revision": "46992d8583e34af52ebc1e12b85f7831"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "851dea4c869129843ceb3c25805551c4"
  },
  {
    "url": "cs/lwip.html",
    "revision": "fbeea91d44973441074d3fbb3d4690ce"
  },
  {
    "url": "cs/scala.html",
    "revision": "fe340eb113b9bb693655ff605af835e6"
  },
  {
    "url": "ee/about.html",
    "revision": "142f33ad1b4c0325baa58cac6c9c8cca"
  },
  {
    "url": "ee/chisel.html",
    "revision": "a1cd9fe898aa708336d5e5222bb62bde"
  },
  {
    "url": "ee/esp32.html",
    "revision": "e4761eff4eb196e9adcac319d0716b9c"
  },
  {
    "url": "ee/index.html",
    "revision": "8933745881ca1b5dbca77c340474d648"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "8cce9fdf117d9c926f5da3afa92badd0"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "dcfcf7c978e9715275061b5938e992e9"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "51f3983e8aa702d8a9e29f0a2e62b2e3"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "d5e91a52b7ff8c3630722f6ac701c73c"
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
    "url": "images/cs/computer_composition/2-1_selector.jpeg",
    "revision": "383bfbb085c1eeb9b9473ae6f18e97a0"
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
    "url": "images/cs/computer_composition/CPU_pipeline_overhead.jpeg",
    "revision": "d9e141af3f2c5eedd5aed438388cfe26"
  },
  {
    "url": "images/cs/computer_composition/CPU_pipeline.jpeg",
    "revision": "1e880fa8b1eab511583267e68f0541ad"
  },
  {
    "url": "images/cs/computer_composition/cpu_registers.jpg",
    "revision": "cdba5c17a04f0dd5ef05b70368b9a96f"
  },
  {
    "url": "images/cs/computer_composition/D_flip_flop.jpeg",
    "revision": "d749acce21756d89c35ee19545cfebbb"
  },
  {
    "url": "images/cs/computer_composition/decoder.jpeg",
    "revision": "4002b5f8f60a913e655d5268348ee201"
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
    "url": "images/cs/computer_composition/instruction_cycle.jpeg",
    "revision": "bde3548a4789ba49cab74c8c1ab02a67"
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
    "url": "images/cs/computer_composition/PC_counter.jpg",
    "revision": "1ed21092022057ed192a7d9aff76144c"
  },
  {
    "url": "images/cs/computer_composition/pipeline_bubble.jpeg",
    "revision": "0d762f2ce532d87cfe69c7b167af9c2a"
  },
  {
    "url": "images/cs/computer_composition/plt_got_table.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
  },
  {
    "url": "images/cs/computer_composition/princeton_harvard.jpeg",
    "revision": "e7508cb409d398380753b292b6df8391"
  },
  {
    "url": "images/cs/computer_composition/RS_flip_flop_with_clock.jpeg",
    "revision": "9e9bc411aa8c7bf2f080f306a0fb8bd8"
  },
  {
    "url": "images/cs/computer_composition/RS_flip_flop.jpeg",
    "revision": "dc6dcce612b2fd51939d7ec44b3fe1de"
  },
  {
    "url": "images/cs/computer_composition/sequent_multiply.jpg",
    "revision": "cb809de19088d08767279715f07482e9"
  },
  {
    "url": "images/cs/computer_composition/simplest_CPU.jpeg",
    "revision": "6863e10fc635791878d1ecd57618b871"
  },
  {
    "url": "images/cs/computer_composition/structure_hazard.jpeg",
    "revision": "c2a4c0340cb835350ea954cdc520704e"
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
    "revision": "e23819022bdd9714ee5cf6996fcffdfe"
  },
  {
    "url": "others/about.html",
    "revision": "2900238023bc7f181b7f666afc013c45"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "cc116f76951a6472897784bff717c08d"
  },
  {
    "url": "others/android-studio.html",
    "revision": "c29f7d14d230e9c42621f459ef717196"
  },
  {
    "url": "others/android.html",
    "revision": "a6d7229170539e0483767a348cedf32e"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "818a482a3e4f49367826c03ab57ad97c"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "d47caebce38afaa5d25363fbe389ab94"
  },
  {
    "url": "others/css.html",
    "revision": "30b4f1aaaaf947e146d4a4d73983cd0b"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "a919a23ece51d90778ff475592bbbd76"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "7a745dd8fada696946c584a145d84caa"
  },
  {
    "url": "others/english-writting.html",
    "revision": "18ff503ee32ed2fa7858ecdcf5ea26d6"
  },
  {
    "url": "others/freertos.html",
    "revision": "f7817a3e3f7b6bffd3b08e46710b22db"
  },
  {
    "url": "others/gns3.html",
    "revision": "b17fd1216c8f5ab2bab914053b30a4c8"
  },
  {
    "url": "others/gps.html",
    "revision": "76a84f6d1c8005e3d42b5ee1b369d007"
  },
  {
    "url": "others/html5.html",
    "revision": "5c141839992548cae230586ed307bc55"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "acc57a24ba499a1c2936e230ec1185c3"
  },
  {
    "url": "others/index.html",
    "revision": "ad8403fef25a098b5f8a2dfb21d9ff00"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "5b66d8b4a06bebd8f6699a7b398a5570"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "495ccdb109b94d069e92c855260b35a1"
  },
  {
    "url": "others/javascript.html",
    "revision": "a22309d5b2fc3e79c520663b2292c449"
  },
  {
    "url": "others/json.html",
    "revision": "7b6a1da24f5b12f8c6a47a10dc7a87e7"
  },
  {
    "url": "others/latex.html",
    "revision": "2c8df569ae56c7b37aed2e812fec5150"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "80a1fd5e852fab03ab42abcf2b98c7cd"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "1528c56799c9cd300635bda3bfba761d"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "35b3ed2d5727475c12f8e295144a535d"
  },
  {
    "url": "others/markdown.html",
    "revision": "803cf7b1d38793f4ba436b308b1ddfed"
  },
  {
    "url": "others/matlab.html",
    "revision": "6b98f41aab09755ac31e13b8f9db667c"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "4ccdb623a39aee2fa7dfb5005916138c"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "1dfaf97435233edb3b666276a7f1a271"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "449aa25b9256b5f778f9b043ce1e64f6"
  },
  {
    "url": "others/network-security.html",
    "revision": "5f30cf27369e279be9ca7ad828796703"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "b14995fae824434a2c28740718d7e340"
  },
  {
    "url": "others/oral_english.html",
    "revision": "6f9e3185fd96d6895305b21d4ee4b31b"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "08431c800f39df539433c55b1c15f11c"
  },
  {
    "url": "others/poe.html",
    "revision": "1ef0f663771dbf6ace245fb4a6c8d5d1"
  },
  {
    "url": "others/pyside2.html",
    "revision": "95c0926314d09f8fcc4d23fa1534da4d"
  },
  {
    "url": "others/python-socket.html",
    "revision": "77ab9acbcf9331b0b793142a6917265e"
  },
  {
    "url": "others/python.html",
    "revision": "fc331abc763da33924f7ea238ebf43d5"
  },
  {
    "url": "others/q-learning.html",
    "revision": "53678d2a17808957b06094fa9fb0f2a1"
  },
  {
    "url": "others/qr-code.html",
    "revision": "58c0165070687eebd17d4d277012b67d"
  },
  {
    "url": "others/qt4.html",
    "revision": "87a8377c8f70aded3cc92c6a45c8388f"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "5dc03e7fa8f2cf6bf31c2294411a0148"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "8a7e6b145072ded9954f13f9c1447bca"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "d44b81ae786a5202b300b7e16f887d93"
  },
  {
    "url": "others/sd-card.html",
    "revision": "51ce24d9f8ae7109dd3fd4376028eab7"
  },
  {
    "url": "others/sdn.html",
    "revision": "5fa5af62688b046c8dd18d8bb94519d9"
  },
  {
    "url": "others/star-uml.html",
    "revision": "57dd168a4d1c6ecf3ff075f50c1bbea7"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "1f2ecb7ed2030f95355f56a591ef64b0"
  },
  {
    "url": "others/verilog.html",
    "revision": "e882248c192771de12dd86b0ae221ba6"
  },
  {
    "url": "others/vue.html",
    "revision": "38cce6d6f56b094d61d6a2b6e84febf2"
  },
  {
    "url": "others/w5500.html",
    "revision": "fa9f7ec414df2e7e57b394de78c801dc"
  },
  {
    "url": "others/w7500.html",
    "revision": "69d7e881a3f4a5413c85980d857d8b51"
  },
  {
    "url": "resume.html",
    "revision": "f6a1f67e086d8862be7a60fd19d2c468"
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
