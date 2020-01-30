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
    "revision": "ff2ae3bc68752a4ce0640a8c9a91fc8c"
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
    "url": "assets/img/cache_coherence.a6146ddd.jpeg",
    "revision": "a6146ddd5c78f2cbc1af56b0ee3292da"
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
    "url": "assets/img/cisc_risc.d69a1e75.jpeg",
    "revision": "d69a1e753fa1523df054573f13516277"
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
    "url": "assets/img/direct_mapped_cache.522eade5.png",
    "revision": "522eade51bbfad19fd25eb4f3ce80f22"
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
    "url": "assets/img/exception_class.da0117e6.jpeg",
    "revision": "da0117e669ebd2bd06c19beaf12d0da8"
  },
  {
    "url": "assets/img/exception.e8a49f09.jpeg",
    "revision": "e8a49f09d1bb50e4d42fccd14d743ad6"
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
    "url": "assets/img/hyper_threading.96aa1220.jpeg",
    "revision": "96aa1220ff27776f55091c55c2eddbc8"
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
    "url": "assets/img/memory_address_to_cache_line.1313fe1e.png",
    "revision": "1313fe1e4eb3b5c949284c8b215af8d4"
  },
  {
    "url": "assets/img/memory_hierarchy.ab345017.png",
    "revision": "ab345017c3f662b15e15e97e0ca1db0a"
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
    "url": "assets/img/mesi.fa98835c.jpeg",
    "revision": "fa98835c78c879ab69fd1f29193e54d1"
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
    "url": "assets/img/simd.48ddcd5a.jpeg",
    "revision": "48ddcd5ac345091c1be5963d5ef7d7a6"
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
    "url": "assets/img/sram.25c619a6.png",
    "revision": "25c619a683c161d3678c7339aa34d399"
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
    "url": "assets/img/super_scalar.85f15ec6.jpeg",
    "revision": "85f15ec667d09fd2d368822904029b32"
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
    "url": "assets/img/write_back.67053624.jpeg",
    "revision": "67053624d6aa2a5c27c295e1fda4890d"
  },
  {
    "url": "assets/img/write_through.8b9ad674.jpeg",
    "revision": "8b9ad674953bf36680e815247de235d3"
  },
  {
    "url": "assets/js/10.34ccfdef.js",
    "revision": "2e262ae864d1ef1a5cc726667debb9be"
  },
  {
    "url": "assets/js/11.87575fe4.js",
    "revision": "bd1313b4d3df9991f544f00343534b11"
  },
  {
    "url": "assets/js/12.93a99273.js",
    "revision": "2e6e70cb7380921557f7d9439dceb7f0"
  },
  {
    "url": "assets/js/13.6da26cf0.js",
    "revision": "0d36505f63ee15d13b5d93f66449c809"
  },
  {
    "url": "assets/js/14.9de485cb.js",
    "revision": "7f87cf822b0fc7fbf3b997b3e61ecf59"
  },
  {
    "url": "assets/js/15.3d74ded3.js",
    "revision": "df3726ecd8928859f99aa9d58cd234e9"
  },
  {
    "url": "assets/js/16.ab436090.js",
    "revision": "df983ce2684dc9b13e43db7f05e46d43"
  },
  {
    "url": "assets/js/17.5ad78525.js",
    "revision": "0b05b46e1453a113057e4a28fbce2924"
  },
  {
    "url": "assets/js/18.ad076a8e.js",
    "revision": "d0c2999d57de0c20875a8bd634cd066f"
  },
  {
    "url": "assets/js/19.5e098491.js",
    "revision": "1f347074abb25a395957c47c5ab8130d"
  },
  {
    "url": "assets/js/2.0cd057d8.js",
    "revision": "7ee94741751a5c0aaad0fe8563b22e39"
  },
  {
    "url": "assets/js/20.9d4224a1.js",
    "revision": "fb38edb27cff7c77d79316ac4d2639e6"
  },
  {
    "url": "assets/js/21.3990c519.js",
    "revision": "212f79ddd297190cfcb4e7f2f4d9de1c"
  },
  {
    "url": "assets/js/22.980df637.js",
    "revision": "184422053a5aa3d72b9d4660788e7aca"
  },
  {
    "url": "assets/js/23.f0325d60.js",
    "revision": "cfb8e2c6e3731b2e009712adda1f034a"
  },
  {
    "url": "assets/js/24.8ed2c282.js",
    "revision": "b00af1f56a4dbb5e74dfa58993ff553d"
  },
  {
    "url": "assets/js/25.caecc052.js",
    "revision": "24d5726f200dfca93eb6877f26b900b1"
  },
  {
    "url": "assets/js/26.b330ff1a.js",
    "revision": "68054a5e92614407e1ad8378a3e08a11"
  },
  {
    "url": "assets/js/27.b1660a9d.js",
    "revision": "d1ee9881ba3eeaeed10507b8fb3d00ae"
  },
  {
    "url": "assets/js/28.2756ddfc.js",
    "revision": "2285f528b899ddcb204e80bb7234da27"
  },
  {
    "url": "assets/js/29.0cfee411.js",
    "revision": "80cdf97d8854efbfb7606d3e559cf20f"
  },
  {
    "url": "assets/js/3.1c94e5e7.js",
    "revision": "b2d445436f572bd706c3f4209f0a89a3"
  },
  {
    "url": "assets/js/30.b0ee3173.js",
    "revision": "93f83ea4b8c31560342c0492d31b0d6a"
  },
  {
    "url": "assets/js/31.3a5fcb18.js",
    "revision": "edc9b16785537a5b4a115e9cfcf461e6"
  },
  {
    "url": "assets/js/32.941a6fcb.js",
    "revision": "0a442d092ba254987aed67086c9c314e"
  },
  {
    "url": "assets/js/33.60972eb4.js",
    "revision": "9029b556889e61f83e63c5e90348c422"
  },
  {
    "url": "assets/js/34.d18f7e6b.js",
    "revision": "4354c775b8296a5ec2f80c095e826f42"
  },
  {
    "url": "assets/js/35.052a28ad.js",
    "revision": "09f52a03e6b6a716ea7fac9125a4c974"
  },
  {
    "url": "assets/js/36.8e28a993.js",
    "revision": "79f8bd638e625a07776c3dae12711509"
  },
  {
    "url": "assets/js/37.34beb817.js",
    "revision": "27815df8895a9a8369c5d5b71f42f5da"
  },
  {
    "url": "assets/js/38.ec2e7c67.js",
    "revision": "f9faff693d4c01c4dcc5b18369ac24b7"
  },
  {
    "url": "assets/js/39.1486a6e8.js",
    "revision": "9aa0e7213efa9230745c0cb74d87b5fd"
  },
  {
    "url": "assets/js/4.1d5eb5ae.js",
    "revision": "3b4d8ff00cf193ed2948aae7a4c681cf"
  },
  {
    "url": "assets/js/40.17689514.js",
    "revision": "dadb8e3859181300ab62e0f4e05f9f4f"
  },
  {
    "url": "assets/js/41.a8ea6aec.js",
    "revision": "02b07b5e8f09215b865257bdef412c71"
  },
  {
    "url": "assets/js/42.6da17f20.js",
    "revision": "15a8dce93881ea29ef8c6d70ad7ac375"
  },
  {
    "url": "assets/js/43.9b8a2ad2.js",
    "revision": "9d5663d8b28c4109fb80ef5661ba9f4b"
  },
  {
    "url": "assets/js/44.ddc66568.js",
    "revision": "f766fbb1237a689688e136677054e521"
  },
  {
    "url": "assets/js/45.07668d80.js",
    "revision": "9eb067d51f808e832881bc2126f99701"
  },
  {
    "url": "assets/js/46.be014884.js",
    "revision": "903a475ccc97a244742485c27144d9ef"
  },
  {
    "url": "assets/js/47.e88cf5f3.js",
    "revision": "af9b978bf0566e1e4b95240eff21e807"
  },
  {
    "url": "assets/js/48.b7ee9dbd.js",
    "revision": "3e1aac952dfb8e9d6e5e78bacab5fcec"
  },
  {
    "url": "assets/js/49.2053eb7d.js",
    "revision": "12c1216637e8061090e2a203360695ed"
  },
  {
    "url": "assets/js/5.8cda95d1.js",
    "revision": "6d999c341c5778bf829b895d8731aaed"
  },
  {
    "url": "assets/js/50.ad010838.js",
    "revision": "d453cfaada3895c532a7e43408f0cf1b"
  },
  {
    "url": "assets/js/51.7980fac9.js",
    "revision": "efb42ea831078798a52a463305ed4d8d"
  },
  {
    "url": "assets/js/52.91969839.js",
    "revision": "abfb6ed20f1da4f50eaf5a58f53caf1f"
  },
  {
    "url": "assets/js/53.3c374671.js",
    "revision": "43938fed2796f0e37ec6b72ba5b033a3"
  },
  {
    "url": "assets/js/54.b227e0bc.js",
    "revision": "aa7f3ff1240fcb2eb5db3df2ff66df9e"
  },
  {
    "url": "assets/js/55.022120cc.js",
    "revision": "21504b44fbdabdcdd5247c9689cdd28f"
  },
  {
    "url": "assets/js/56.3a2cf80b.js",
    "revision": "c6ca47c1d58d24a4710c6c31b7809620"
  },
  {
    "url": "assets/js/57.c7c6c92e.js",
    "revision": "10a903054f5e8607f90d14635f743c26"
  },
  {
    "url": "assets/js/58.e1ea2bd7.js",
    "revision": "568e325cac43193de36ff6e480491307"
  },
  {
    "url": "assets/js/59.4d1aa3a8.js",
    "revision": "beb99f7d95cb15bdb6b75445c10ecb7b"
  },
  {
    "url": "assets/js/6.22679b7e.js",
    "revision": "a41f41eb352ce34bea37f051d1cf483e"
  },
  {
    "url": "assets/js/60.63f3faa3.js",
    "revision": "d039e60baf37ffcb06158222ef3ed8fb"
  },
  {
    "url": "assets/js/61.0da94fb5.js",
    "revision": "59ba41893b53d93cdd4b238a57e03242"
  },
  {
    "url": "assets/js/62.033aa5d7.js",
    "revision": "cf5d1587a07913fa1421400659256934"
  },
  {
    "url": "assets/js/63.e300a71e.js",
    "revision": "a88ecfc9dd6140edc79263fdf0377dfe"
  },
  {
    "url": "assets/js/64.aabcdedf.js",
    "revision": "2806dc79ff94663e7e4e5fce6224d32d"
  },
  {
    "url": "assets/js/65.edefbc45.js",
    "revision": "8542fb8e43991b14a0473a918fd9e735"
  },
  {
    "url": "assets/js/66.6de738f1.js",
    "revision": "5fd8e5717c564a6999163d8f75408c7c"
  },
  {
    "url": "assets/js/67.7711ff85.js",
    "revision": "53c8b0632ce2e9f3269cc20c064f6534"
  },
  {
    "url": "assets/js/68.e1e6a18b.js",
    "revision": "e9a8010811ba4f68e41c4d03bad4fb3b"
  },
  {
    "url": "assets/js/69.bf8b911f.js",
    "revision": "082d5ea74ae032b9ef85e0d24cafb5db"
  },
  {
    "url": "assets/js/7.cf87c32f.js",
    "revision": "1518353a9fb5f6e36f1a6ffb08819905"
  },
  {
    "url": "assets/js/70.48480e6f.js",
    "revision": "7479309b487c0dfda8bb4cc3abef57df"
  },
  {
    "url": "assets/js/71.dc718e71.js",
    "revision": "20fb428956eab79c05d753443aab95cd"
  },
  {
    "url": "assets/js/72.570a2db6.js",
    "revision": "7533062a063577261e32312b1246a615"
  },
  {
    "url": "assets/js/73.f23da08a.js",
    "revision": "286369ce25bb37ce973ee6d305a832a2"
  },
  {
    "url": "assets/js/74.c31f6179.js",
    "revision": "1bfdbae8d89f9d96562e7ec4f4a60009"
  },
  {
    "url": "assets/js/75.af6084de.js",
    "revision": "3d510b71a0c0a6861122ee93f4ca21c8"
  },
  {
    "url": "assets/js/76.36523114.js",
    "revision": "80a55b999a46df9dc608a714bf902cb1"
  },
  {
    "url": "assets/js/77.a01d1857.js",
    "revision": "3137cddbb956a345dfcddd4d9533c5ed"
  },
  {
    "url": "assets/js/78.831ef1b2.js",
    "revision": "1c787ed8523fc6b85e4b7140845f75b3"
  },
  {
    "url": "assets/js/79.9602ebc7.js",
    "revision": "c1b5f89ded5eeb958b8f9b47caa02e6c"
  },
  {
    "url": "assets/js/8.a3dc64df.js",
    "revision": "17d4355d23f3e0f03c707b6e60fbe59f"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.d009b09a.js",
    "revision": "e69c260d196d821a28e44bc77d4fea8f"
  },
  {
    "url": "assets/js/app.f26e0637.js",
    "revision": "3b91c34119820614cb91fde34892a524"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "b699f84f9bf785470a8abd196acec6d6"
  },
  {
    "url": "cs/bash.html",
    "revision": "81b6c1ada539a253a42d0044a43e1c9b"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "392e04c2d050f5b248e88a5c1dcf2c38"
  },
  {
    "url": "cs/cmake.html",
    "revision": "76e01f449b192e24c2ef057a749e3280"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "9fd524046dad695cd2ce9678dacc59c4"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "e35287a7fc6de86e2fc372063bdcd01c"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "dfcefdec8c95ea563fe2a118241f532f"
  },
  {
    "url": "cs/git.html",
    "revision": "ab8ac51939982325036e45bf28236d00"
  },
  {
    "url": "cs/index.html",
    "revision": "38cb9c330c4a2b3c967c17372df5305a"
  },
  {
    "url": "cs/keras.html",
    "revision": "a0fd0f4a583523673fde723e1b6188e3"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "e600a35555a44b5286a09ada67d6a124"
  },
  {
    "url": "cs/lwip.html",
    "revision": "28d87f54e2e4cdbb710132ac27ad728f"
  },
  {
    "url": "cs/scala.html",
    "revision": "44e2486bb7c73555b95e7a5b6dcf43e0"
  },
  {
    "url": "ee/about.html",
    "revision": "205814222964b8591287c1b225e0d073"
  },
  {
    "url": "ee/chisel.html",
    "revision": "bfb6f5e57514adefa7b3b76bc9a55c36"
  },
  {
    "url": "ee/esp32.html",
    "revision": "2439ea1ba9d0ac8f52c9910b75772aff"
  },
  {
    "url": "ee/index.html",
    "revision": "a94df7964ba7d23fad61a844feaa584c"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "10e695f83e4c98aa4ff6ce09483b0a2c"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "24a51e1b3ee0cbf6f5f63e5c5827d8ce"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "a0c54f43b53744bdaf8708ac6b2b81da"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "2362bdd845fd5e62a0bcb66638543144"
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
    "url": "images/cs/computer_composition/cache_coherence.jpeg",
    "revision": "a6146ddd5c78f2cbc1af56b0ee3292da"
  },
  {
    "url": "images/cs/computer_composition/charset_encoding.jpg",
    "revision": "9911c58d79e8a1f106d48a83457d193e"
  },
  {
    "url": "images/cs/computer_composition/cisc_risc.jpeg",
    "revision": "d69a1e753fa1523df054573f13516277"
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
    "url": "images/cs/computer_composition/direct_mapped_cache.png",
    "revision": "522eade51bbfad19fd25eb4f3ce80f22"
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
    "url": "images/cs/computer_composition/exception_class.jpeg",
    "revision": "da0117e669ebd2bd06c19beaf12d0da8"
  },
  {
    "url": "images/cs/computer_composition/exception.jpeg",
    "revision": "e8a49f09d1bb50e4d42fccd14d743ad6"
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
    "url": "images/cs/computer_composition/hyper_threading.jpeg",
    "revision": "96aa1220ff27776f55091c55c2eddbc8"
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
    "url": "images/cs/computer_composition/memory_address_to_cache_line.png",
    "revision": "1313fe1e4eb3b5c949284c8b215af8d4"
  },
  {
    "url": "images/cs/computer_composition/memory_hierarchy.png",
    "revision": "ab345017c3f662b15e15e97e0ca1db0a"
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
    "url": "images/cs/computer_composition/mesi.jpeg",
    "revision": "fa98835c78c879ab69fd1f29193e54d1"
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
    "url": "images/cs/computer_composition/simd.jpeg",
    "revision": "48ddcd5ac345091c1be5963d5ef7d7a6"
  },
  {
    "url": "images/cs/computer_composition/simplest_CPU.jpeg",
    "revision": "6863e10fc635791878d1ecd57618b871"
  },
  {
    "url": "images/cs/computer_composition/sram.png",
    "revision": "25c619a683c161d3678c7339aa34d399"
  },
  {
    "url": "images/cs/computer_composition/structure_hazard.jpeg",
    "revision": "c2a4c0340cb835350ea954cdc520704e"
  },
  {
    "url": "images/cs/computer_composition/super_scalar.jpeg",
    "revision": "85f15ec667d09fd2d368822904029b32"
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
    "url": "images/cs/computer_composition/write_back.jpeg",
    "revision": "67053624d6aa2a5c27c295e1fda4890d"
  },
  {
    "url": "images/cs/computer_composition/write_through.jpeg",
    "revision": "8b9ad674953bf36680e815247de235d3"
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
    "revision": "f72a2d13cb7e9982566f7085156e7dab"
  },
  {
    "url": "others/about.html",
    "revision": "ccb85f018634d7fccdb57d2fc5ad1c77"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "ab56988a9f0382feb870106b77b671b2"
  },
  {
    "url": "others/android-studio.html",
    "revision": "d8968c526a7af83fc6559ef67624e07a"
  },
  {
    "url": "others/android.html",
    "revision": "e6491462e709759412275cf17706768e"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "0e44387659b9ecc5c1bbce2aebfcb991"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "1d5d31b78336132fea86d130a8c289ea"
  },
  {
    "url": "others/css.html",
    "revision": "c30a708f718a12695efb8cb8d4cc770c"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "cc2f5012cbce7f1a7378801a8290c492"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "a949778b10dd1aac474de2b24c803ac4"
  },
  {
    "url": "others/english-writting.html",
    "revision": "53efa25ce80c5da57d97f3f7425d845d"
  },
  {
    "url": "others/freertos.html",
    "revision": "c1b5353fd1a73bc6bb846caa817367f4"
  },
  {
    "url": "others/gns3.html",
    "revision": "b2abf1ddb6433de0cd95a6cac9f16f30"
  },
  {
    "url": "others/gps.html",
    "revision": "f7fbbf8671cf75a8ec78a56b6c14e2ee"
  },
  {
    "url": "others/html5.html",
    "revision": "b5e54d043274ad8f68b7bbd25062561a"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "f8cc31b02d07cc1a3e77e6dfa4d0bff5"
  },
  {
    "url": "others/index.html",
    "revision": "9f3fa61435fe5628420cfdede4669efb"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "47fa698f3ad6a803c95ebd62836f5b8e"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "e49a49b4f0dcd498b821856e74953b38"
  },
  {
    "url": "others/javascript.html",
    "revision": "2ca4969c565d4cea15c9b6d6a46c160f"
  },
  {
    "url": "others/json.html",
    "revision": "642294fbc3da5195f923db7950e8bc89"
  },
  {
    "url": "others/latex.html",
    "revision": "e87772d700e6cc31414278a93b92fcce"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "408b928ece565a26517e191a99d7b9cc"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "f87ccb72ad4cc779a33900388348f6d8"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "fbe674b3e8e91e66f5a639a69f335252"
  },
  {
    "url": "others/markdown.html",
    "revision": "ee31fadbc6ba58440bfb139ef503591e"
  },
  {
    "url": "others/matlab.html",
    "revision": "ef9f35c33f55589189d60499bcce2890"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "d488a7b33ea6963ea54c995620dff9d8"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "d78b28b520ec5b650c005e928eafb0ec"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "d282c132b381160c292d6822a443fbe1"
  },
  {
    "url": "others/network-security.html",
    "revision": "4fca3a52baac058cd2293cf66f33f44e"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "6fda2c2e5fcbf03da342a51b4004665e"
  },
  {
    "url": "others/oral_english.html",
    "revision": "5dd4901120b0bc852b79e7a2c7c7a13d"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "4101790bdede7638f76e2d8742bb483a"
  },
  {
    "url": "others/poe.html",
    "revision": "38b38c1d967c1af876182734b31c4f60"
  },
  {
    "url": "others/pyside2.html",
    "revision": "865cc40a4900a22405b7ea8adae6e3ad"
  },
  {
    "url": "others/python-socket.html",
    "revision": "97a00ca1a2289d036ce96780ffb6ceaf"
  },
  {
    "url": "others/python.html",
    "revision": "1c5b0ccea65009f0435fc83fd11d19e4"
  },
  {
    "url": "others/q-learning.html",
    "revision": "bb71ab384f2f4a454a9470add5fa0536"
  },
  {
    "url": "others/qr-code.html",
    "revision": "bfe2446fabbd45013e33c514659fe5b4"
  },
  {
    "url": "others/qt4.html",
    "revision": "b9bbcfce37f6878eb780ff8a55069d4d"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "d96c278367c940a07d19ac5f8f086caa"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "62cc857b053c428937ecd6199e77a2b9"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "dd0e6909f4d9f62e0d738476b72305e3"
  },
  {
    "url": "others/sd-card.html",
    "revision": "211fecac043b70cd8a029142b4943992"
  },
  {
    "url": "others/sdn.html",
    "revision": "f6af3fee9682ff58b77517fb50d16d98"
  },
  {
    "url": "others/star-uml.html",
    "revision": "e4c2fa8f3772e45064a88a0360663088"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "3b9907d6636dee44cff890dd3838c1db"
  },
  {
    "url": "others/verilog.html",
    "revision": "73594dffdc155ec165198d43a40de874"
  },
  {
    "url": "others/vue.html",
    "revision": "1ce55749451898436e2a0e30845c3de1"
  },
  {
    "url": "others/w5500.html",
    "revision": "f328aed039609a4e6bd57665b604beda"
  },
  {
    "url": "others/w7500.html",
    "revision": "b85c14228fc93f18c78d6a9ef3554539"
  },
  {
    "url": "resume.html",
    "revision": "add6d05ca11b550fd5c7ecee2cd9ca37"
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
