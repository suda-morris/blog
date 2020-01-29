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
    "revision": "839df9d89b762fbda6d6c5a88db1a343"
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
    "url": "assets/img/branch_prediction.ea82f279.jpeg",
    "revision": "ea82f279b48c10ad95027c91ed62ab5d"
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
    "url": "assets/img/OoOE.153f8d5e.jpeg",
    "revision": "153f8d5e4a4363399133e1d7d9052804"
  },
  {
    "url": "assets/img/operant_forwarding.dceadd35.jpeg",
    "revision": "dceadd35c334974d8270052b37d48c27"
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
    "url": "assets/img/two_add_instructions.94dda233.jpeg",
    "revision": "94dda2330b07c08530540ae11838c569"
  },
  {
    "url": "assets/img/Von_Neumann_architecture.76984515.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
  },
  {
    "url": "assets/js/10.bd24192f.js",
    "revision": "48fb47a5ada66385a793dfca7a59f495"
  },
  {
    "url": "assets/js/11.8cfc5ea9.js",
    "revision": "8044fd2eb5e7c79b19772e1391940f89"
  },
  {
    "url": "assets/js/12.36d6d5b3.js",
    "revision": "559c5378085446a317540b82581bde3d"
  },
  {
    "url": "assets/js/13.1b4b524a.js",
    "revision": "230d9d85ab7616b104ce51ebdfb10d2d"
  },
  {
    "url": "assets/js/14.332197fd.js",
    "revision": "7bbfe753321856ca6b4b85d65cdcf931"
  },
  {
    "url": "assets/js/15.2555065e.js",
    "revision": "81de09cd1516f2a824b36998f74d0546"
  },
  {
    "url": "assets/js/16.d262e6d1.js",
    "revision": "dce6cbd63cbd8ce940a621e9c7447590"
  },
  {
    "url": "assets/js/17.b247933d.js",
    "revision": "419a47b57ad1cf0e984572df2f2d174d"
  },
  {
    "url": "assets/js/18.12c09f19.js",
    "revision": "d1156dbed29aa721d3cc8826212589e8"
  },
  {
    "url": "assets/js/19.a4bcac25.js",
    "revision": "2d5dbecad493b8063e8636f81c782cdd"
  },
  {
    "url": "assets/js/2.791c5530.js",
    "revision": "655388c9a9be7df1164c9f094aa66ef2"
  },
  {
    "url": "assets/js/20.0ba57639.js",
    "revision": "aec5e2e17f2ba2608870e80c3b3a1b7b"
  },
  {
    "url": "assets/js/21.abfc5bf5.js",
    "revision": "d1ea23508d20beb1051be621b80217a3"
  },
  {
    "url": "assets/js/22.bfe90bbf.js",
    "revision": "48e66c7ee7813a2e75e947de544cce7d"
  },
  {
    "url": "assets/js/23.0759a267.js",
    "revision": "8fb26ee362b8aa1098a3e4e0036f5fa3"
  },
  {
    "url": "assets/js/24.d3ccfa3d.js",
    "revision": "34d150c20be8206be28ac114b50a9048"
  },
  {
    "url": "assets/js/25.d1852a96.js",
    "revision": "f5f26ab1f490a9e48bb66a98d0785c94"
  },
  {
    "url": "assets/js/26.7e76c7ff.js",
    "revision": "a65c2c028bd454070ba62ef481faabb0"
  },
  {
    "url": "assets/js/27.39ac2d7d.js",
    "revision": "0cee430537f97b78316d3d933a8dd22e"
  },
  {
    "url": "assets/js/28.34d21004.js",
    "revision": "b7bb9eb5150737a9be6d3e4be14404cb"
  },
  {
    "url": "assets/js/29.67a6568a.js",
    "revision": "4d26b701db9c37b1b9b2ba1006e9a464"
  },
  {
    "url": "assets/js/3.045f78bc.js",
    "revision": "636cc84c7fc18e52857d40ebeda0c972"
  },
  {
    "url": "assets/js/30.4ec2df5f.js",
    "revision": "3b32b24c235d0e89a3fdfeda641bcded"
  },
  {
    "url": "assets/js/31.03343ecb.js",
    "revision": "1f4c1c68af478ee6126551532bf219b6"
  },
  {
    "url": "assets/js/32.08cb6184.js",
    "revision": "95b9f6295e339c372608f87a158d844c"
  },
  {
    "url": "assets/js/33.642d668c.js",
    "revision": "4ef81d064781a28ea2f8f355d635d654"
  },
  {
    "url": "assets/js/34.931ac4d5.js",
    "revision": "b7e6eece819d51cb5eb89a81a95417bf"
  },
  {
    "url": "assets/js/35.da9716bc.js",
    "revision": "af3602d943e93ce2f713f73ae1b05513"
  },
  {
    "url": "assets/js/36.a2cff952.js",
    "revision": "36d5829d61ada435befe93c738de7f8c"
  },
  {
    "url": "assets/js/37.5a868cda.js",
    "revision": "77c21c5eb039d62424540634322dec01"
  },
  {
    "url": "assets/js/38.28ce2c5b.js",
    "revision": "e12ecc91e6f6340cfe8fd51ccd8d9b69"
  },
  {
    "url": "assets/js/39.b06c3d27.js",
    "revision": "b0251f79b192693f9782714f71ae9e2a"
  },
  {
    "url": "assets/js/4.1678631d.js",
    "revision": "11c7c1b44e1290e5f43b81182933704e"
  },
  {
    "url": "assets/js/40.14ba66e6.js",
    "revision": "187a6f76d4635d9efb650f09130c8f65"
  },
  {
    "url": "assets/js/41.17141f22.js",
    "revision": "faa4689ae0d12b531a6326d4ff4f3a08"
  },
  {
    "url": "assets/js/42.326ae10d.js",
    "revision": "464fb56b03088e372fd448dac87137ba"
  },
  {
    "url": "assets/js/43.bf0fe9c2.js",
    "revision": "5f5aea683df0dd5880eb99ed16412726"
  },
  {
    "url": "assets/js/44.8a102433.js",
    "revision": "8ecb50de301753a5422eb40979fff707"
  },
  {
    "url": "assets/js/45.6fa9ec99.js",
    "revision": "6ed0ff3f0d8cfe82ecd1b1937497e205"
  },
  {
    "url": "assets/js/46.72a015aa.js",
    "revision": "b3806938879e18a10fdfe61eb51d6728"
  },
  {
    "url": "assets/js/47.4dcbcf94.js",
    "revision": "9f77287ee9391f0bb084f541d2d987f6"
  },
  {
    "url": "assets/js/48.b1924265.js",
    "revision": "691aedeae7a6d54ce247fe8979087838"
  },
  {
    "url": "assets/js/49.9e065a9c.js",
    "revision": "f41c6a7477d35dd1037b81b768d57db7"
  },
  {
    "url": "assets/js/5.b5bff20c.js",
    "revision": "bfe06aebdb17d153cea95d914369dfaf"
  },
  {
    "url": "assets/js/50.52e06ea1.js",
    "revision": "86b3d4e7c51c6fa7b421dba941bff803"
  },
  {
    "url": "assets/js/51.68afdc13.js",
    "revision": "9acc8d2dc18ed922ca81cdea617fa76e"
  },
  {
    "url": "assets/js/52.db1b29ef.js",
    "revision": "803dfc1a47d773faf775e4048939b465"
  },
  {
    "url": "assets/js/53.94f77220.js",
    "revision": "70285758349c14e96de72a28aa29772e"
  },
  {
    "url": "assets/js/54.a7f4ff51.js",
    "revision": "b3656f438b1b8dcf14e9ca8ef8cb7e65"
  },
  {
    "url": "assets/js/55.7c2fc8b4.js",
    "revision": "0ab3f3b840e4df8f12cdd525f7bb8c3c"
  },
  {
    "url": "assets/js/56.1a372923.js",
    "revision": "c944fc9e58a646095c268cfb31075fdd"
  },
  {
    "url": "assets/js/57.fd17673a.js",
    "revision": "73e017e1ce79074e81678d8248ca7e0c"
  },
  {
    "url": "assets/js/58.9145ff99.js",
    "revision": "9370c4c8733066bdf8f51af72337c11f"
  },
  {
    "url": "assets/js/59.9e6ebff2.js",
    "revision": "01717a0606959c00a09075f41537f1f7"
  },
  {
    "url": "assets/js/6.602a99b0.js",
    "revision": "56c5481506e7cbba78caa1056af6e8bc"
  },
  {
    "url": "assets/js/60.3cdc2357.js",
    "revision": "ffeb951ca3de0a012546aece4401af57"
  },
  {
    "url": "assets/js/61.894fb1f3.js",
    "revision": "491e1fa4a2183d7a583bfb30c6b8b538"
  },
  {
    "url": "assets/js/62.955c50be.js",
    "revision": "b44a4256da8389b4fa0d3b44bab1c0d0"
  },
  {
    "url": "assets/js/63.c7ad4792.js",
    "revision": "2005db149946532ce61447918f69c786"
  },
  {
    "url": "assets/js/64.191ff3f8.js",
    "revision": "185dde62ea417171aab14f0b724fd0db"
  },
  {
    "url": "assets/js/65.bcbc91ce.js",
    "revision": "7de350570532ef49b1ac3930f9ecc7cd"
  },
  {
    "url": "assets/js/66.0ac747ba.js",
    "revision": "939820ac823dbc283a56f8f6e3e4e2c3"
  },
  {
    "url": "assets/js/67.968b2b91.js",
    "revision": "d4a27df16e34bd172301a48329f14d88"
  },
  {
    "url": "assets/js/68.67c5cddd.js",
    "revision": "d5a3940b043a0f0525f4ac923083cd23"
  },
  {
    "url": "assets/js/69.d10efcc4.js",
    "revision": "8c8bffcecf7e8e27fd3a8e8a5c2568b6"
  },
  {
    "url": "assets/js/7.5b21bcc5.js",
    "revision": "cf693bf2ed360b9a26d291432e4b28af"
  },
  {
    "url": "assets/js/70.ff2e0d2f.js",
    "revision": "0861c02188ac21265c61b9bc35b17d6c"
  },
  {
    "url": "assets/js/71.69ef3986.js",
    "revision": "56a111644a8487774b6e7aa9d18f6d2e"
  },
  {
    "url": "assets/js/72.0b99c4ec.js",
    "revision": "0ac947341a0875140a0b75e7d7b873ff"
  },
  {
    "url": "assets/js/73.d0989ef9.js",
    "revision": "11dba3394b2a300bd081f509574ac2ae"
  },
  {
    "url": "assets/js/74.76ec6949.js",
    "revision": "004ac4b2eeb17316f3997a990b444d0a"
  },
  {
    "url": "assets/js/75.2fc12769.js",
    "revision": "ec6e3de2c15f3046b254bfdd100f2064"
  },
  {
    "url": "assets/js/76.9af2cde1.js",
    "revision": "9ee1b275eb62d977b6d1c3432526972d"
  },
  {
    "url": "assets/js/77.f5108380.js",
    "revision": "b58ea53fb9e7e631a252cdbc5d30f3f8"
  },
  {
    "url": "assets/js/78.6ed08771.js",
    "revision": "d98a2ebf82e60f84506adc8e07fe23d8"
  },
  {
    "url": "assets/js/79.6d460c2b.js",
    "revision": "66cb449ee5d42737813ed86ce12e9729"
  },
  {
    "url": "assets/js/8.f5935c22.js",
    "revision": "09699866790b39f3df7cdfdefc5a1042"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.3705f5a3.js",
    "revision": "b9380675f38bb3f1f0054c0fa3d2a6a6"
  },
  {
    "url": "assets/js/app.c091cdee.js",
    "revision": "51d1083bf34db2ce391d605a8066060d"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "3d8abb3219b62fdf58d333d6c5f57ec0"
  },
  {
    "url": "cs/bash.html",
    "revision": "b56250a8471417a9bcf61a245c7cbf33"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "86bc4ef56f291e3f3c938d26b1552ea9"
  },
  {
    "url": "cs/cmake.html",
    "revision": "116a29929a660bfd3c9dc7b4ff354ed5"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "5ab1f03c4b2bc90ac5d72b3c000e5f0e"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "e6092234c5ce7e2ea93da14feecece69"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "b982b0d6eef873d6153582d5b35072d6"
  },
  {
    "url": "cs/git.html",
    "revision": "3758abba70fe469a5c7d6996eed0d167"
  },
  {
    "url": "cs/index.html",
    "revision": "fae8643e38131b3bcc77c9de7d791cdd"
  },
  {
    "url": "cs/keras.html",
    "revision": "4f779fa2bfabc544e76f6562b645df64"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "f1bebe970d93b7467e55468dd19dfbea"
  },
  {
    "url": "cs/lwip.html",
    "revision": "6a512865800b2d42bd656457f3fc373d"
  },
  {
    "url": "cs/scala.html",
    "revision": "b5ddb9571c7a5ad803aaf209096750d9"
  },
  {
    "url": "ee/about.html",
    "revision": "41cf0a250a2a58fda950c9370916b402"
  },
  {
    "url": "ee/chisel.html",
    "revision": "2b22687508ce4a8df92e5917892b5043"
  },
  {
    "url": "ee/esp32.html",
    "revision": "ba9c15d55c6cab8abdbfad902cc1fb2c"
  },
  {
    "url": "ee/index.html",
    "revision": "19b8626e0dfe5c7d6bba79d52ec4cf51"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "66521f0ef66eaceb4436e821e1211c31"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "3cef7defd542fd86c7b40ee6ac7b2761"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "6b691257c3e6f545df9772a3c7501f50"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "c851401e699ef3e416de81345faa32de"
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
    "url": "images/cs/computer_composition/branch_prediction.jpeg",
    "revision": "ea82f279b48c10ad95027c91ed62ab5d"
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
    "url": "images/cs/computer_composition/OoOE.jpeg",
    "revision": "153f8d5e4a4363399133e1d7d9052804"
  },
  {
    "url": "images/cs/computer_composition/operant_forwarding.jpeg",
    "revision": "dceadd35c334974d8270052b37d48c27"
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
    "url": "images/cs/computer_composition/two_add_instructions.jpeg",
    "revision": "94dda2330b07c08530540ae11838c569"
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
    "revision": "d6f8b4ab2230d79293f2a6fba96da5e6"
  },
  {
    "url": "others/about.html",
    "revision": "3d385dfb5ac522de618f027fbdea0f12"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "a945729eee0e8984b1cb014b931facba"
  },
  {
    "url": "others/android-studio.html",
    "revision": "ba6bf250ef0099528a937ee34f25b8f0"
  },
  {
    "url": "others/android.html",
    "revision": "8447db50b9a81fa5ed22fbe89dda5fd0"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "4a8d344f25951ed9294dcf3ebda180a2"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "fa6571f3d82babd067918d05d279833a"
  },
  {
    "url": "others/css.html",
    "revision": "b119bead49d7aea4de31aea48f38af15"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "16423491bd8bc026dbd7f021325fbae1"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "d655aea200f46cb5b4297e242782c7cc"
  },
  {
    "url": "others/english-writting.html",
    "revision": "b74b703d59c29acb6054243104670a58"
  },
  {
    "url": "others/freertos.html",
    "revision": "89da81db241d0669248e2e1b87bfd8ec"
  },
  {
    "url": "others/gns3.html",
    "revision": "ab92893a135ede0247fab5671f00d5ea"
  },
  {
    "url": "others/gps.html",
    "revision": "4533c4e5242ddb228c64c3bc80a560d5"
  },
  {
    "url": "others/html5.html",
    "revision": "50a520c0781e7be940871045c6b7612a"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "91aaafc6ff1d49ce53b3ec3272b37334"
  },
  {
    "url": "others/index.html",
    "revision": "c7bf1d1587679481b971b89a45e8273d"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "8b69540452c96b22f6d7b173b496f1bb"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "ffee59083102831efee0de2df8fc46a4"
  },
  {
    "url": "others/javascript.html",
    "revision": "47ca420f80167a559b43aa95814eda98"
  },
  {
    "url": "others/json.html",
    "revision": "d8d782cecc9166a2fae42c399f4a6e66"
  },
  {
    "url": "others/latex.html",
    "revision": "9da989775050dfd4a4188df879ba9e67"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "02c936872200c4eee1c17e5d467c14c0"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "3a3c8c028575456d2da7310652dbd2dd"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "8b4453a61cba695b7c64ac5d49e65e9b"
  },
  {
    "url": "others/markdown.html",
    "revision": "30efee39a09e3db56abd1b3bad53d725"
  },
  {
    "url": "others/matlab.html",
    "revision": "5930f9eb99eaf57e0521d713eeb117a2"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "87a0e4da6266498c598eb32d7ad56bb9"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "636a514b48d6e38485b783159a8403ff"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "03bc87e6fedf0127e744d0cae5a29c0f"
  },
  {
    "url": "others/network-security.html",
    "revision": "207faf6411afa2fa78629b2e6ec1a802"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "7af7a1b9caf97614c77ebc7c10530a02"
  },
  {
    "url": "others/oral_english.html",
    "revision": "4f2d6102f8937e21fe9cca7909568200"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "b9c44d1d50ada34f55ce6b743d45c5ed"
  },
  {
    "url": "others/poe.html",
    "revision": "25b63f5290ce7711e11289637ce1a507"
  },
  {
    "url": "others/pyside2.html",
    "revision": "099dac0aefe7894eccdb42b4120985aa"
  },
  {
    "url": "others/python-socket.html",
    "revision": "3ca89c63f00a312c2956094327170300"
  },
  {
    "url": "others/python.html",
    "revision": "3f23c4d947ded75d794263671de6addb"
  },
  {
    "url": "others/q-learning.html",
    "revision": "fea388e618814dedb0fa8e41f95fe394"
  },
  {
    "url": "others/qr-code.html",
    "revision": "6600e17287a692e24f092f88e5287980"
  },
  {
    "url": "others/qt4.html",
    "revision": "ea4335690039fe78c7d75a36322be805"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "dcde10b28f7aed6697760a8a47c6bfc2"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "d110144b5789f94da9de7425ddab2127"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "25a67796636cdba2f9f77056b1f1d45f"
  },
  {
    "url": "others/sd-card.html",
    "revision": "6b4b962530896bb22fb83e43e7dfcc09"
  },
  {
    "url": "others/sdn.html",
    "revision": "d0f42828438821ee551a19ad9dce13d0"
  },
  {
    "url": "others/star-uml.html",
    "revision": "d10013032db19046f28173747bdeff2e"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "d5db1dc6a137ce3261f182acdfaa545a"
  },
  {
    "url": "others/verilog.html",
    "revision": "24e27b35b1a2a134cfb1c496b0e688cb"
  },
  {
    "url": "others/vue.html",
    "revision": "8b84d6567043f38eebe411a3f1502ec6"
  },
  {
    "url": "others/w5500.html",
    "revision": "4d8f21427dc04d6ad5a19bac4e72424b"
  },
  {
    "url": "others/w7500.html",
    "revision": "58a2dc8e9f9be81ded76f53e2e0737d3"
  },
  {
    "url": "resume.html",
    "revision": "8a497d57988eae042d9e85acfb5bde6e"
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
