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
    "revision": "d1a107fc7573a628fb1fd7edc32a4d4d"
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
    "url": "assets/js/10.c26b9088.js",
    "revision": "646a0b6b67483a2268aef3b84614ef9b"
  },
  {
    "url": "assets/js/11.90d47f0c.js",
    "revision": "b7f6e77bc081f5e07405ab1220f4b846"
  },
  {
    "url": "assets/js/12.38daeac6.js",
    "revision": "ac2f0ea05cf0e2284170260e261fc6eb"
  },
  {
    "url": "assets/js/13.77848d96.js",
    "revision": "ea59ce397a555db273c876422d918f4e"
  },
  {
    "url": "assets/js/14.dd2eb3b7.js",
    "revision": "f93a6b96caf8981080b46b0932364821"
  },
  {
    "url": "assets/js/15.9e647ef2.js",
    "revision": "08f183552f61abfb35485396307b3b45"
  },
  {
    "url": "assets/js/16.08793de4.js",
    "revision": "bae1774106150918a5d582b999f70d11"
  },
  {
    "url": "assets/js/17.2549a732.js",
    "revision": "560b58c1b2548ce81ba775a444d59c9b"
  },
  {
    "url": "assets/js/18.dd620fc7.js",
    "revision": "c4471f460d32c28fcd78c0127516d695"
  },
  {
    "url": "assets/js/19.8234d625.js",
    "revision": "64bd0ba4c62a7c52b2cd40fac7e86783"
  },
  {
    "url": "assets/js/2.e2016915.js",
    "revision": "a501a276c136a3e87817f6f9ebaa5691"
  },
  {
    "url": "assets/js/20.de1dd19c.js",
    "revision": "9dbef9726d93ae5f0d96d003dc0cd9b7"
  },
  {
    "url": "assets/js/21.6f979f15.js",
    "revision": "547f10e9737c57865c984e7bb94b65d1"
  },
  {
    "url": "assets/js/22.ae090a9f.js",
    "revision": "0a84f1ee7a9527d5eb0a83c14d347af0"
  },
  {
    "url": "assets/js/23.19d1f806.js",
    "revision": "94e321419938b859905cf810c9bd6ce1"
  },
  {
    "url": "assets/js/24.6bcea020.js",
    "revision": "78752b439d073163e3e672c0e578f015"
  },
  {
    "url": "assets/js/25.39b8f569.js",
    "revision": "aa87ee9e69b6765b6ff55a0e13152484"
  },
  {
    "url": "assets/js/26.8beff5b9.js",
    "revision": "4a02f8282dec801db2735a15c55ecc3b"
  },
  {
    "url": "assets/js/27.8b2beb86.js",
    "revision": "8670385a90c65a93270d99bf0f5771e2"
  },
  {
    "url": "assets/js/28.ba6f67b6.js",
    "revision": "31e3af2300290aa335df43a8e48fa544"
  },
  {
    "url": "assets/js/29.8e62cd16.js",
    "revision": "c7edd7ae10a913ba367929bf0d873092"
  },
  {
    "url": "assets/js/3.0eb0948e.js",
    "revision": "6ab6b7d89c97b3f0282dd0760323d3b6"
  },
  {
    "url": "assets/js/30.7a247bf5.js",
    "revision": "d499efbfd60e775ecae0237b3b80585f"
  },
  {
    "url": "assets/js/31.9a3347d0.js",
    "revision": "5776ce6ddc93f464b17a61b29bcfd01e"
  },
  {
    "url": "assets/js/32.5363a572.js",
    "revision": "d2c4a0ad1914d3d854414bafa33253d5"
  },
  {
    "url": "assets/js/33.88a99968.js",
    "revision": "a72c4058c7079404b461314d484b83fe"
  },
  {
    "url": "assets/js/34.7810b144.js",
    "revision": "f3bcf891f3c03cd3db022d644bde6b08"
  },
  {
    "url": "assets/js/35.262caf0c.js",
    "revision": "3156c0f3b778cbb4997aa5944417c998"
  },
  {
    "url": "assets/js/36.8381a845.js",
    "revision": "5d0a41c5e7343c5e96a3417f8755deab"
  },
  {
    "url": "assets/js/37.a2f775b0.js",
    "revision": "ca86ae4f94f5aa9bb7f19142a76b61d0"
  },
  {
    "url": "assets/js/38.95c3c260.js",
    "revision": "32f8ff1d888d952b0ed0023f419af754"
  },
  {
    "url": "assets/js/39.c39ef284.js",
    "revision": "cb588f3fdb8ff5d6eb9652f5cbbeaae5"
  },
  {
    "url": "assets/js/4.7f36b9fb.js",
    "revision": "0e13d11e1bfd3e116c516969d1b0be9d"
  },
  {
    "url": "assets/js/40.b0c0390a.js",
    "revision": "52dcd6508dbb88d8fe4367ef13ed4d04"
  },
  {
    "url": "assets/js/41.14690ae0.js",
    "revision": "4898ce17e15b22fad7307b1506300e71"
  },
  {
    "url": "assets/js/42.ed0bcff6.js",
    "revision": "34ec0a2736860b5b3c3c856f751c4393"
  },
  {
    "url": "assets/js/43.7b2c1ea3.js",
    "revision": "a55426f45359313abcd800dfd1a53a42"
  },
  {
    "url": "assets/js/44.1210597f.js",
    "revision": "97bf76a2c0683420539f660d3f43591d"
  },
  {
    "url": "assets/js/45.c269ab55.js",
    "revision": "2f5103377a80c989709b378c706e7f33"
  },
  {
    "url": "assets/js/46.9fa502f9.js",
    "revision": "5e9169987686f46a094b46c19fefd363"
  },
  {
    "url": "assets/js/47.8e32ba09.js",
    "revision": "156bbab9139de7ef083dbd9bb7adbd66"
  },
  {
    "url": "assets/js/48.80d79369.js",
    "revision": "0adccd006f88a8e014bbad0d4f094376"
  },
  {
    "url": "assets/js/49.a799f695.js",
    "revision": "183c13cf5d8b2232b7528eeedc25e821"
  },
  {
    "url": "assets/js/5.c31116b1.js",
    "revision": "b4aafd87c722e9f375be475b46f2df1a"
  },
  {
    "url": "assets/js/50.7ccec112.js",
    "revision": "9d2a92c4cf8e8cbb2ee26993736a77fd"
  },
  {
    "url": "assets/js/51.edafb361.js",
    "revision": "aabc41f8e587d54caa17814c4b8e472f"
  },
  {
    "url": "assets/js/52.4fa5260e.js",
    "revision": "d31cb6158fefc2c02345e3bd0c1e5ef2"
  },
  {
    "url": "assets/js/53.099683e9.js",
    "revision": "76893dfb7540a55f4dd4b05b3c34fee3"
  },
  {
    "url": "assets/js/54.917ef659.js",
    "revision": "487ba4c7f05700c77790dbbe0a5178ff"
  },
  {
    "url": "assets/js/55.eff33346.js",
    "revision": "00e081599aceb1ff637a0717141dcf64"
  },
  {
    "url": "assets/js/56.f3dea57e.js",
    "revision": "7d8a3dd5cc3c66e34e6cbfedcbf021a6"
  },
  {
    "url": "assets/js/57.de8e7f40.js",
    "revision": "2ee9beb94b4165e6ce0177bc2bb3f969"
  },
  {
    "url": "assets/js/58.10fc3958.js",
    "revision": "d75cd0259cbb57175d293d90ddcff55e"
  },
  {
    "url": "assets/js/59.416fad35.js",
    "revision": "2a7e5f6918234327f432d3e326466390"
  },
  {
    "url": "assets/js/6.3f328f02.js",
    "revision": "1b2990529c15598765d11627572203c1"
  },
  {
    "url": "assets/js/60.5f3376a6.js",
    "revision": "4b772ffabfcf49813fa1caebeebb1492"
  },
  {
    "url": "assets/js/61.6522c885.js",
    "revision": "72232e91c990570dec002919d25fe1be"
  },
  {
    "url": "assets/js/62.e4fe1265.js",
    "revision": "7dcedcc1ba56587b50cd008538c6972e"
  },
  {
    "url": "assets/js/63.fb8f679a.js",
    "revision": "6dea7c231e2dd4ca9e1c3b7d33f37b60"
  },
  {
    "url": "assets/js/64.0e8f0141.js",
    "revision": "fdc27b8d9379423801555fb8613b53b2"
  },
  {
    "url": "assets/js/65.b6948f1d.js",
    "revision": "d619a1c6ce190ebff5fb72f778738035"
  },
  {
    "url": "assets/js/66.0e06498e.js",
    "revision": "107870d497a4f5799dc5e5b0bc22dd1c"
  },
  {
    "url": "assets/js/67.a0377250.js",
    "revision": "e539eb700d04ddc05939acc54bd9cfe3"
  },
  {
    "url": "assets/js/68.3f71e884.js",
    "revision": "bd1f6a6533d5d9d9abffbfe90ecee051"
  },
  {
    "url": "assets/js/69.9e22f47a.js",
    "revision": "fe1c9f6f3123f26e0fa35a4c365cd6b8"
  },
  {
    "url": "assets/js/7.9910e2d9.js",
    "revision": "76afa4f5adb21ab60b51cecc0cfbf354"
  },
  {
    "url": "assets/js/70.b2f2d21b.js",
    "revision": "7c9d4e6e7ae440faac3dcdb52905c46b"
  },
  {
    "url": "assets/js/71.a95edf28.js",
    "revision": "62bb467abd480bbb737e8c1387b544b0"
  },
  {
    "url": "assets/js/72.f2c9c6b5.js",
    "revision": "28e80589d82bb267f523503504f6a6f1"
  },
  {
    "url": "assets/js/73.9a16a1cf.js",
    "revision": "c099ff9a7a49855431f40bcaa8f8cf7f"
  },
  {
    "url": "assets/js/74.df0d46d6.js",
    "revision": "c99761357acc3bf2e541640be0a25f49"
  },
  {
    "url": "assets/js/75.85bbabe7.js",
    "revision": "22c57376c8d4f9d8f351d77492d9f6ca"
  },
  {
    "url": "assets/js/76.7a00eb94.js",
    "revision": "ae49eb54ad4b3364319fa2a03ee9938f"
  },
  {
    "url": "assets/js/77.20469f60.js",
    "revision": "0aef04031ace7bc99aeedca872900df2"
  },
  {
    "url": "assets/js/78.0cfa7a3d.js",
    "revision": "38b9febfef14e6e95d039f6c0dfd98dc"
  },
  {
    "url": "assets/js/79.02d18d45.js",
    "revision": "89955c91473698aed63599a413a457a5"
  },
  {
    "url": "assets/js/8.31b96b33.js",
    "revision": "28b9614287aaaf18f443a2e4039ed1a5"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.12057fb1.js",
    "revision": "367e3edd8372f0476ae8ff56b76b0b2e"
  },
  {
    "url": "assets/js/app.4203e35c.js",
    "revision": "17b9252a906c82db127492563ce1c376"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "fe6ff6513589ab7c16f8d553d4c837e7"
  },
  {
    "url": "cs/bash.html",
    "revision": "ae46b20a3340285c316d2ee04b209b29"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "1967224866e6b0e10b063bca511e039a"
  },
  {
    "url": "cs/cmake.html",
    "revision": "ee5142e727131027c66a58ca73af44f2"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "97a63f1614d61f5fe97b34e88b6d344e"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "8ee88887cb34a486b441d301292ab7e4"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "d2ffa05f789aefb84dcf61cbb6d407b8"
  },
  {
    "url": "cs/git.html",
    "revision": "f2a1a26d5ebea26a4c71568b5787472c"
  },
  {
    "url": "cs/index.html",
    "revision": "c9b0c6b30a4e719c1246961f56ff82ef"
  },
  {
    "url": "cs/keras.html",
    "revision": "8ee0ca5c5f85a754f630a76799c8a379"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a6b876094f32b3c2c0ea1bb93547a2d8"
  },
  {
    "url": "cs/lwip.html",
    "revision": "25846a6a757c64e75dc2b4d09b90b677"
  },
  {
    "url": "cs/scala.html",
    "revision": "3dc6ee04ed71acb344d82ba5d47c3c87"
  },
  {
    "url": "ee/about.html",
    "revision": "37f336362d4d7be6c0119e1faef5c60b"
  },
  {
    "url": "ee/chisel.html",
    "revision": "2393c37e706469767fb4f237ac016679"
  },
  {
    "url": "ee/esp32.html",
    "revision": "f6577e1db667c55f23a5e22fc070cc05"
  },
  {
    "url": "ee/index.html",
    "revision": "e30677719b9ca285a8d1d46be567ba88"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "124777953664e18943247540df49b523"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "9c0b02ee1ac75d639bfc11f3fc9ef569"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "e93b79ec4ce4954507675e979a17c584"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "cbfd14176cce45b52c6f089b3927f7f0"
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
    "revision": "8701fb669abbac2cedaf23a0eb46af05"
  },
  {
    "url": "others/about.html",
    "revision": "da90dff8e0fb02d6fc456082c7acda33"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "0aba2817900e2cf682681b2cd40e3f31"
  },
  {
    "url": "others/android-studio.html",
    "revision": "08bcafa082310b26ec6587fb60f7454c"
  },
  {
    "url": "others/android.html",
    "revision": "cd033301f7b7c7c00389baac3a6bce3b"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "d2143ef3c5739fe94cb5fc57ec86a8df"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "cc4099aad4c65f293c28240e3d31343d"
  },
  {
    "url": "others/css.html",
    "revision": "7bf99f794fc003a5cfea13647e531173"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "fc1009a2ce9966e856a89179e551cff9"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "c68cae3d683d3d093e893938ab4d9de0"
  },
  {
    "url": "others/english-writting.html",
    "revision": "61d9a7104353d5581122b657dbf29fb2"
  },
  {
    "url": "others/freertos.html",
    "revision": "667be06914c934fe5be436b1efa6d205"
  },
  {
    "url": "others/gns3.html",
    "revision": "29505ce66768294558ab06b9dd3544a6"
  },
  {
    "url": "others/gps.html",
    "revision": "b89f1347bc9e7ab6db30c25da7686616"
  },
  {
    "url": "others/html5.html",
    "revision": "25917c581e643d2e6f1432cf367705fe"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "62af4dd3cfde10ae97054c01e8e6e201"
  },
  {
    "url": "others/index.html",
    "revision": "be8bfab54e216be80437587c590c14b7"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "2a3475c20975141448a647d2386fa5a6"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "2d970bdc4d2ead3490cfe244548bec1e"
  },
  {
    "url": "others/javascript.html",
    "revision": "389d3d8cd5ae4dbd8949a4c19163ad18"
  },
  {
    "url": "others/json.html",
    "revision": "bff8b9b653d75ef294396c6be62253db"
  },
  {
    "url": "others/latex.html",
    "revision": "1986ab6dc2f282438b8f4c65c6d5608b"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "435214838d97ee47bfd24bf9f517c858"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "5d1849f4435677913cb96ce0f1335967"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "f20bed7cf86dcb23e42e590d1747994c"
  },
  {
    "url": "others/markdown.html",
    "revision": "c6c17c749a61dffca616ddc3e738a758"
  },
  {
    "url": "others/matlab.html",
    "revision": "0b872a4f7908a36cce3cfe0c8487dc9d"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "411db8eb497edec87981503f0923f608"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "03270a6dc7295a93ffbbaac5f78f5cc1"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "521d5ba1a737beb2582beac761b710e8"
  },
  {
    "url": "others/network-security.html",
    "revision": "f926a8d8ac1ae72886cb6135d82a7996"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "379820aaa452403b0a00f473b0200497"
  },
  {
    "url": "others/oral_english.html",
    "revision": "fe28fd984ed60d86bd5a9bee33c43aee"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "7a5397aa5df3e4a8f63c69c8340d133f"
  },
  {
    "url": "others/poe.html",
    "revision": "17e4021eca0aa9dde762b9e9807f7f13"
  },
  {
    "url": "others/pyside2.html",
    "revision": "bd3309ea45c23b92824f9e35b0e5f221"
  },
  {
    "url": "others/python-socket.html",
    "revision": "68b9b884cea5d6cc3372430b5f7d87df"
  },
  {
    "url": "others/python.html",
    "revision": "f4233c52186e64e6de5693a4e89f3540"
  },
  {
    "url": "others/q-learning.html",
    "revision": "1e083018299007a8e0f6557b2c8c4f00"
  },
  {
    "url": "others/qr-code.html",
    "revision": "ba608d1601efd3b8d8648e22b217e4b1"
  },
  {
    "url": "others/qt4.html",
    "revision": "aa735b0869bca1a2b4f7fc62c5a1d71d"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "feacf61a568e6feeae35315bef2ca964"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "6c10f790276da6c28bc368f3c8d3ca9a"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "47bb5572e5e3b2db9e9fe4bc3a746270"
  },
  {
    "url": "others/sd-card.html",
    "revision": "b070d510e22027bae3161b2573e429d4"
  },
  {
    "url": "others/sdn.html",
    "revision": "c9ed2c6d04cda5219d9e58fa4ff4aa05"
  },
  {
    "url": "others/star-uml.html",
    "revision": "c57590d411632aa7fc491e9fa00cc0a1"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "e446f20107d5487234abd8391ef59209"
  },
  {
    "url": "others/verilog.html",
    "revision": "71290d29325f894099bbb4a6da2c0b3d"
  },
  {
    "url": "others/vue.html",
    "revision": "07ca3b8c8dade5b0aaffa2d482302a69"
  },
  {
    "url": "others/w5500.html",
    "revision": "a04b76a1987bc31852a8f97928f104a0"
  },
  {
    "url": "others/w7500.html",
    "revision": "b63cfc4eec12455900a002afdf885cde"
  },
  {
    "url": "resume.html",
    "revision": "dddb711f060438aaf13f48c413a9b2b5"
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
