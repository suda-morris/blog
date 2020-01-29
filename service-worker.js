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
    "revision": "500afb006f16397e270bb34da97b27ab"
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
    "url": "assets/js/10.058f9f5a.js",
    "revision": "3321072ffeb5d7abb1b227d8bd9a3f8f"
  },
  {
    "url": "assets/js/11.2d88526f.js",
    "revision": "840ced8181e0b091e93c3251735cae50"
  },
  {
    "url": "assets/js/12.788ebb4e.js",
    "revision": "50e15d5033b01021e9192f1d5baafb88"
  },
  {
    "url": "assets/js/13.b90e59dd.js",
    "revision": "b8632e01586aecb54915376cefedfaad"
  },
  {
    "url": "assets/js/14.6282626e.js",
    "revision": "196233e711137fd317b84283cb08d6fd"
  },
  {
    "url": "assets/js/15.42395a1e.js",
    "revision": "fd51e18409cf4c82b555ea488fbf3877"
  },
  {
    "url": "assets/js/16.4b7dca06.js",
    "revision": "1d89f0e9b3ab18f9bbc72818821029dc"
  },
  {
    "url": "assets/js/17.4d4da0e1.js",
    "revision": "6eb48dc50c2aaa7fccd13f2b08b476e8"
  },
  {
    "url": "assets/js/18.7f50411e.js",
    "revision": "125e5e6f7f2276ca6efa789653160185"
  },
  {
    "url": "assets/js/19.3b5385a0.js",
    "revision": "25e4751083be94792218971a0c275e10"
  },
  {
    "url": "assets/js/2.85fa7c0d.js",
    "revision": "7e4178eb256e17827c5d60d33d52b26e"
  },
  {
    "url": "assets/js/20.459466cc.js",
    "revision": "f0186153fcb1d32a390f928a5dba6369"
  },
  {
    "url": "assets/js/21.e0825b00.js",
    "revision": "9654608b78e3b222e34ba5c6f32d5c48"
  },
  {
    "url": "assets/js/22.678d8886.js",
    "revision": "b61d2b19ee362f565da30dba71e8d399"
  },
  {
    "url": "assets/js/23.85abb1cc.js",
    "revision": "55a8c39e900edbf6a428892ed5d550c9"
  },
  {
    "url": "assets/js/24.cbfc5ba7.js",
    "revision": "b95e8ae7905805bffb2739b1c61cd388"
  },
  {
    "url": "assets/js/25.39683d4b.js",
    "revision": "8a65ac7be8dc851d3ee6ae7947649d94"
  },
  {
    "url": "assets/js/26.c6ad1e3d.js",
    "revision": "f0ee00204985b026664b42fb94635e35"
  },
  {
    "url": "assets/js/27.768606c6.js",
    "revision": "4147bd547164b58264684cd463859254"
  },
  {
    "url": "assets/js/28.a2b599ff.js",
    "revision": "3a751b27bb0eaac1ff444ec49f6cfcd9"
  },
  {
    "url": "assets/js/29.b3c572d2.js",
    "revision": "f7e79a17e11aa7aa0449b389c58c2667"
  },
  {
    "url": "assets/js/3.b5f14314.js",
    "revision": "6c37521330f19fd53f8e0f404b0cdea0"
  },
  {
    "url": "assets/js/30.d6e4ead1.js",
    "revision": "6db4d8aaa4d27a09c5b787c9e2b03ece"
  },
  {
    "url": "assets/js/31.55517a0f.js",
    "revision": "1e3580df8ad1570618a23abc1bc22f76"
  },
  {
    "url": "assets/js/32.27ebe8f7.js",
    "revision": "441240c3296f19c5063520fc2cef9d84"
  },
  {
    "url": "assets/js/33.8dc8ca5d.js",
    "revision": "bea231daeb137ff8564ff8c8786e1441"
  },
  {
    "url": "assets/js/34.ac07eac8.js",
    "revision": "d6f4f886a0d383ea3dfaec2ea7a89a6b"
  },
  {
    "url": "assets/js/35.c17b6828.js",
    "revision": "b10258000c5df7f49c377bf775fb0ff5"
  },
  {
    "url": "assets/js/36.2ff23f07.js",
    "revision": "4c939444d11fc7862f4dab1b6bf75626"
  },
  {
    "url": "assets/js/37.ba264d56.js",
    "revision": "bdd99603ab792ddf85f05b7e4079067a"
  },
  {
    "url": "assets/js/38.e8e31619.js",
    "revision": "ec452074d0eb9391c6088462921ed3be"
  },
  {
    "url": "assets/js/39.e7a7cba6.js",
    "revision": "441f9d5e9db2c4a32daa2cc00cf5ab7a"
  },
  {
    "url": "assets/js/4.f3b94b1c.js",
    "revision": "9ca662eb81708616716374c2cf1db5a4"
  },
  {
    "url": "assets/js/40.eedbaa7e.js",
    "revision": "1797c9da27bb2d02067811ccc2285a4a"
  },
  {
    "url": "assets/js/41.7e84d4b7.js",
    "revision": "ec7a8aa8fb10a2c71ecec048669bd81d"
  },
  {
    "url": "assets/js/42.b9b9f851.js",
    "revision": "a409e81a0ee8e64e4bfb5c1996844e68"
  },
  {
    "url": "assets/js/43.fdce0490.js",
    "revision": "75a32b0f124544abacaa7b1093fd65d5"
  },
  {
    "url": "assets/js/44.08c59ed3.js",
    "revision": "d479f0f7e665f1b6c3ad0141f38375c0"
  },
  {
    "url": "assets/js/45.e31e1af2.js",
    "revision": "11abc41530b83168da7756797cb3af83"
  },
  {
    "url": "assets/js/46.66862f02.js",
    "revision": "3e741ceb9b2ccfed53680699341648ac"
  },
  {
    "url": "assets/js/47.97952a7b.js",
    "revision": "5a160f1ae15e88345b4cbc64e477298f"
  },
  {
    "url": "assets/js/48.500a3ade.js",
    "revision": "fe68a49f83e454ad4fe2f3a4ec4de25a"
  },
  {
    "url": "assets/js/49.fdb0f8f4.js",
    "revision": "f6a3018419a7384208da9e06e29a29c0"
  },
  {
    "url": "assets/js/5.0e6ae255.js",
    "revision": "a017a83eed339cd30926936e7b24ebd6"
  },
  {
    "url": "assets/js/50.cd22a799.js",
    "revision": "6479ee5ce45532386d36bcc8da105cee"
  },
  {
    "url": "assets/js/51.8646a643.js",
    "revision": "e488534a9572a1f31f992181ecf33985"
  },
  {
    "url": "assets/js/52.f36a9477.js",
    "revision": "e15b06a28fe9cd47ca62bbb73f0154b8"
  },
  {
    "url": "assets/js/53.b03649b5.js",
    "revision": "b020a34f69ea05a5a9103cb2b4f25783"
  },
  {
    "url": "assets/js/54.1138959b.js",
    "revision": "1664402c98a5c9fa717fbb04cfc7e1c4"
  },
  {
    "url": "assets/js/55.a73cc0a7.js",
    "revision": "3b25ae5ad7dfeeea01f0a9aaed1bc8c4"
  },
  {
    "url": "assets/js/56.a88a9278.js",
    "revision": "a9ca746ebf168d4c3ed0975c559e8b13"
  },
  {
    "url": "assets/js/57.04b33602.js",
    "revision": "61d921db6b5af163e8014f20fd4891ab"
  },
  {
    "url": "assets/js/58.1fa417a7.js",
    "revision": "9c9fb4d5dc073d0ad94994149ab83266"
  },
  {
    "url": "assets/js/59.6e018378.js",
    "revision": "5e8b805b117724ff1f9c241df707c2ff"
  },
  {
    "url": "assets/js/6.3a5c6b6e.js",
    "revision": "5523a2f429af535b2912ad179ee6f029"
  },
  {
    "url": "assets/js/60.b1a7660c.js",
    "revision": "8e6f733c38476ee022f29a9fd748d04f"
  },
  {
    "url": "assets/js/61.ce3feec8.js",
    "revision": "8a40f44a44de1fa4f5c7a991e4b9beb0"
  },
  {
    "url": "assets/js/62.24d57edf.js",
    "revision": "143e2400ca98ec4ada65f0a0c08cc517"
  },
  {
    "url": "assets/js/63.cab1e94f.js",
    "revision": "a3f520f17497404eca7501f1c6c1a1a8"
  },
  {
    "url": "assets/js/64.a9b4d4f6.js",
    "revision": "b3109fa96e251ed0fe497ac99cd5d3b1"
  },
  {
    "url": "assets/js/65.634e5d2f.js",
    "revision": "14bc0389cc69d45d50748d7d51b71dce"
  },
  {
    "url": "assets/js/66.bae13712.js",
    "revision": "52ee9bcbbca167b900c665d2ca9b1da5"
  },
  {
    "url": "assets/js/67.eaf1a2fd.js",
    "revision": "f6e402aacc1510e26a5ecf4415809f0a"
  },
  {
    "url": "assets/js/68.7e2f207d.js",
    "revision": "7500e1343fa28edf46ffa3c65f455e49"
  },
  {
    "url": "assets/js/69.5c424433.js",
    "revision": "03f3e2f84c8e0097c8ff2fc5539a4d80"
  },
  {
    "url": "assets/js/7.e2ad9c71.js",
    "revision": "c47b7a177bf69befba6c151a8f76aa7b"
  },
  {
    "url": "assets/js/70.eda54605.js",
    "revision": "16618cd3d07ce829f48a1db2e30bb9ba"
  },
  {
    "url": "assets/js/71.f3951770.js",
    "revision": "43d23c1a9d53df8417e951f1551e8d2b"
  },
  {
    "url": "assets/js/72.c9d2d16b.js",
    "revision": "2ecb567b965133c19df32f21904306f5"
  },
  {
    "url": "assets/js/73.515d105c.js",
    "revision": "826c93929fc566d6a6c9abcb756893e6"
  },
  {
    "url": "assets/js/74.5a936b67.js",
    "revision": "27654adc64937df3f2673cfce612d1fb"
  },
  {
    "url": "assets/js/75.eb7c4120.js",
    "revision": "4bf4fed5d2afb81dcace07aabaf62807"
  },
  {
    "url": "assets/js/76.60a35792.js",
    "revision": "3f3215bdc5c14dc2c0a4ba621e8f0ddd"
  },
  {
    "url": "assets/js/77.18c0353f.js",
    "revision": "b3aee6b042dfc55b1bfde9a1e88714ef"
  },
  {
    "url": "assets/js/78.b7e95c8b.js",
    "revision": "e54cce0cd510baab56eb4fe4b42f79ad"
  },
  {
    "url": "assets/js/79.a8914120.js",
    "revision": "bee71cf71ee476a1d2e41643081dc000"
  },
  {
    "url": "assets/js/8.a3aad30e.js",
    "revision": "560b40dbd5bbdd4837df191826e964c8"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.54bae29a.js",
    "revision": "69592fb3a1214c3e0daf370c04888f81"
  },
  {
    "url": "assets/js/app.cf0655d7.js",
    "revision": "c7d09baf6d72a7737c7ebd1797154697"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "d12c8645a1f12c9a4efc0440d12b9048"
  },
  {
    "url": "cs/bash.html",
    "revision": "8d815f2581b8b40230d5efde45a6cb05"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "d243510edb469e660b9bf59661ce3316"
  },
  {
    "url": "cs/cmake.html",
    "revision": "b0f538c1e2a4eb20724d9aa036c63f19"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "623eef1610254aa8b68fc10f884381ed"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "f148ec8e71c52201c05e2654e263dc08"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "5573bc9ad635ea7adbbe0d90000c3ce7"
  },
  {
    "url": "cs/git.html",
    "revision": "e7dad2e23bae4fb08510216a645a2270"
  },
  {
    "url": "cs/index.html",
    "revision": "73a78aae8c99056860e471eb5b2dae7d"
  },
  {
    "url": "cs/keras.html",
    "revision": "52e1f2251505297052641ab1ad921a58"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "5c230e9847da4d17d58c7b6c6d15e0e0"
  },
  {
    "url": "cs/lwip.html",
    "revision": "83515628724a563037763d2180158059"
  },
  {
    "url": "cs/scala.html",
    "revision": "293148c91f241ad13d716c71bf14edf7"
  },
  {
    "url": "ee/about.html",
    "revision": "c52aabd0b7a05d42b04492be47c0cc3b"
  },
  {
    "url": "ee/chisel.html",
    "revision": "279566aa6c446684fd806278d7962f7f"
  },
  {
    "url": "ee/esp32.html",
    "revision": "bf6430abc6dac7cd8b3de9be3e1c7b33"
  },
  {
    "url": "ee/index.html",
    "revision": "971f2cf3a42664bc4cd42353de5d4cfa"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "1efe36aa51b43539cb78e8bb52961263"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "f46859179819a4d597f50e78652fcda5"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "0bccca1d9084f449f9f42c157393d833"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "9752e34e2901681eb88b9a9aee52be13"
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
    "url": "images/cs/computer_composition/simd.jpeg",
    "revision": "48ddcd5ac345091c1be5963d5ef7d7a6"
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
    "revision": "fbe422388c9a5c2d4dc95a5ffa7c6fc8"
  },
  {
    "url": "others/about.html",
    "revision": "08b773c41f1aa6a3010ddf2e8bfa551f"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "0782441fb270796d5ebf16073ba9de36"
  },
  {
    "url": "others/android-studio.html",
    "revision": "16964067112394b657cb2ddabffc8d27"
  },
  {
    "url": "others/android.html",
    "revision": "d88862d4bf0fa42c9b13772dc1dd2b30"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "9d1e4ceccf5f9d031492a7fc5ea49fbd"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "dc7c4caff1287461c0ae406e3a899cc9"
  },
  {
    "url": "others/css.html",
    "revision": "5c5bf56b26c4b419fce87ff15e8154e6"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "225ac3f4a8f017531003d51d701aef9d"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "07ed89c50e75d4ab1ebf275d2289c6f2"
  },
  {
    "url": "others/english-writting.html",
    "revision": "7b8f6de6395fe0ddc3296333fb5c71b6"
  },
  {
    "url": "others/freertos.html",
    "revision": "cb6a1584772a75fc7dc0483e8c7baf75"
  },
  {
    "url": "others/gns3.html",
    "revision": "a52849c9697f2b629f1434bd1852bffe"
  },
  {
    "url": "others/gps.html",
    "revision": "7dbe4d010ce183e9ba71735166b8e53b"
  },
  {
    "url": "others/html5.html",
    "revision": "55214a4f758b814d5bb68ee2c3cdc2ea"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "fd75079052f5589a676e356191c87496"
  },
  {
    "url": "others/index.html",
    "revision": "0cfb8be62846860da088a0389d80f0ea"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "19bfcc8b22da18822ea72edafc18d3eb"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "247e69e6f7739cba0c0cc0d31d7f7da6"
  },
  {
    "url": "others/javascript.html",
    "revision": "6e27e1cdc83386d72feedc29d49a17b2"
  },
  {
    "url": "others/json.html",
    "revision": "75682c8bd41504c3952008b7b6c7bce0"
  },
  {
    "url": "others/latex.html",
    "revision": "5c363c348d45feed39733f18e7fcf4dc"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "2538582ee39f3617dfce0cce75854254"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "24a91ff8ff0c60a8bec2f789bb924146"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "97386d8b856697141959d6aebee5ab83"
  },
  {
    "url": "others/markdown.html",
    "revision": "e090786acdec69165057cf3e9d060704"
  },
  {
    "url": "others/matlab.html",
    "revision": "a9348c0b58fd211224fbd349370d6c0a"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "7c1f61b2db471c69816ef9f86e48d2ec"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "1e2757a9ac4e378c1539cc35967b39b9"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "70c1d29f1d9ba348d633eb61fe7d0726"
  },
  {
    "url": "others/network-security.html",
    "revision": "edefda94525091df0ecc7739e03df5e4"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "6c2d279ce3dbc7f8bfd685557b101fa1"
  },
  {
    "url": "others/oral_english.html",
    "revision": "44d909d1264173c8615501a463e60f70"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "91f7ff105892c5f26057e5891a018b78"
  },
  {
    "url": "others/poe.html",
    "revision": "e1b261ea4b20a9862b4958ffa7dbdd0d"
  },
  {
    "url": "others/pyside2.html",
    "revision": "8cd390391195aa82827b4d4946aa0a8b"
  },
  {
    "url": "others/python-socket.html",
    "revision": "820bfff9c5ba2bd962fbd4a93006291d"
  },
  {
    "url": "others/python.html",
    "revision": "77ad95fa27ad3592a28b9f8788419e14"
  },
  {
    "url": "others/q-learning.html",
    "revision": "d41c16a1dcf111904eca7c699fe9e0a0"
  },
  {
    "url": "others/qr-code.html",
    "revision": "3f4503bd46f5bd10af308c9084290902"
  },
  {
    "url": "others/qt4.html",
    "revision": "afe1c8c419842ba21f93588fc07c5b60"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "0ba24a49747876f1285d4c2ef2d7c0e4"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "88de8201139511725deda52b26762494"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "58b165e55c71328f04da5552a2b833d5"
  },
  {
    "url": "others/sd-card.html",
    "revision": "8ea927d09267c46141ffc1a84d81a46d"
  },
  {
    "url": "others/sdn.html",
    "revision": "e2424400c5940b148dd345582ddf3eca"
  },
  {
    "url": "others/star-uml.html",
    "revision": "4262bd24919b7719741e578c7adc2c86"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "c906c10d917144b104ebfbe616a48b6b"
  },
  {
    "url": "others/verilog.html",
    "revision": "4126bedfd9031f9c93391f9203c7868d"
  },
  {
    "url": "others/vue.html",
    "revision": "39759b7e3e5dcc7ac57ceac98af24be4"
  },
  {
    "url": "others/w5500.html",
    "revision": "db164039fa87b11e0b4c02637b0c8f73"
  },
  {
    "url": "others/w7500.html",
    "revision": "1652dffaf6362be50a12e14411a16ac8"
  },
  {
    "url": "resume.html",
    "revision": "01062050b4997ef75bf9138c6cd4b5bb"
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
