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
    "revision": "40d0e792f430d2d0852b41fc6a7c4c02"
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
    "url": "assets/img/address_space_layout_randomization.dbda1bd1.jpeg",
    "revision": "dbda1bd1d43d6fa9d7b552ca57d223b9"
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
    "url": "assets/img/multi_level_page_table.61403411.jpeg",
    "revision": "614034116a840ef565feda078d73cb76"
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
    "url": "assets/img/simple_page_table.22bb7912.jpeg",
    "revision": "22bb79129f6363ac26be47b35748500f"
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
    "url": "assets/img/ssd_lifecycle.966e51db.jpeg",
    "revision": "966e51db8354922b533e1db236337e81"
  },
  {
    "url": "assets/img/ssd_slc.0698c240.jpeg",
    "revision": "0698c240459faa11254932905675dba7"
  },
  {
    "url": "assets/img/ssd_structure.0eee4453.jpeg",
    "revision": "0eee44535a925825b657bcac6afb72d3"
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
    "url": "assets/img/tlb.43205044.jpeg",
    "revision": "432050446f68569a37c7699cccda75d9"
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
    "url": "assets/img/wear_leveling.6e78f8da.jpeg",
    "revision": "6e78f8da0320dc9b392b9d35ecf42091"
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
    "url": "assets/js/10.d58c0237.js",
    "revision": "bed32519d3985a96e7435d2f5373f51e"
  },
  {
    "url": "assets/js/11.9096204e.js",
    "revision": "4abbac6e58209d68f7277cd500dad1a4"
  },
  {
    "url": "assets/js/12.fed0dc10.js",
    "revision": "68afb499a855b3ddfe8636c3bcee653b"
  },
  {
    "url": "assets/js/13.f48137fb.js",
    "revision": "b05dc62633390efcb5ed04aee1e44c73"
  },
  {
    "url": "assets/js/14.c4000495.js",
    "revision": "3e0895a65b98bae0d271a60aaea37178"
  },
  {
    "url": "assets/js/15.afbca406.js",
    "revision": "2563730dfe2a62fcc84fb5c61435452e"
  },
  {
    "url": "assets/js/16.01cc70bc.js",
    "revision": "a8fb3c3e0a50d7b7f6abc3a301c0c9c5"
  },
  {
    "url": "assets/js/17.2c3e49bd.js",
    "revision": "6924f4ca6ddf38472bc35843e37dc7ef"
  },
  {
    "url": "assets/js/18.3be25434.js",
    "revision": "984c9a14e2063e12de18c8e0abc29337"
  },
  {
    "url": "assets/js/19.85a7b434.js",
    "revision": "416f4a1e80b3c76a6f2c669177d322b9"
  },
  {
    "url": "assets/js/2.6a1763f5.js",
    "revision": "cff7de7a01b223627ff0a58aaa125b42"
  },
  {
    "url": "assets/js/20.7f7dd856.js",
    "revision": "86d22bad56758eac8c62ab2712dc0b1f"
  },
  {
    "url": "assets/js/21.46bb6598.js",
    "revision": "5a6c468a9e2baed8f31fb208fcd96cbb"
  },
  {
    "url": "assets/js/22.21736f07.js",
    "revision": "50ffca5411d4a51f62cb850210e82eae"
  },
  {
    "url": "assets/js/23.e6f4fcf6.js",
    "revision": "1630eecd24cda0cfa8c5b2919090aa90"
  },
  {
    "url": "assets/js/24.1391003e.js",
    "revision": "5faf75904dfd5f1918ae82524921b3f3"
  },
  {
    "url": "assets/js/25.c10c42bb.js",
    "revision": "8cf405d5a6867826cce4030874649cca"
  },
  {
    "url": "assets/js/26.ebf0f6d5.js",
    "revision": "708b30b0d1357683699debe316f422fb"
  },
  {
    "url": "assets/js/27.42663b05.js",
    "revision": "54605c785ee94e5b6f61dfbd779873d5"
  },
  {
    "url": "assets/js/28.280d4b09.js",
    "revision": "b951b02b76b14cc381d684ecedef7bbc"
  },
  {
    "url": "assets/js/29.2b1159a9.js",
    "revision": "2c08a6fe977080f6edf8c5f98f960eb2"
  },
  {
    "url": "assets/js/3.76ba8f1b.js",
    "revision": "7222ba68647cecaee5756e11fbb11c4c"
  },
  {
    "url": "assets/js/30.bed49873.js",
    "revision": "d45de9c0fb0bb4d6d0d68d4bdf72464b"
  },
  {
    "url": "assets/js/31.fba9cef7.js",
    "revision": "12c46f36428fdb359e3fc969aac33d59"
  },
  {
    "url": "assets/js/32.254728e7.js",
    "revision": "43cf6f5cceacb0e0e57a5bab23509f8d"
  },
  {
    "url": "assets/js/33.efb3eac2.js",
    "revision": "4f8f6008c14182b0461a178e45a97536"
  },
  {
    "url": "assets/js/34.34013c7d.js",
    "revision": "ed89a46269f5c0f9f7a7eabdf5419fdc"
  },
  {
    "url": "assets/js/35.32eb873b.js",
    "revision": "8e438306b919914ed7bad56fa20943df"
  },
  {
    "url": "assets/js/36.42319d37.js",
    "revision": "674114b9e478beb27e32461f79bb61d1"
  },
  {
    "url": "assets/js/37.0754345a.js",
    "revision": "03fc24b18b943f68b178f54875405608"
  },
  {
    "url": "assets/js/38.c75ee495.js",
    "revision": "b7d41577d71685881b6a453c99b207de"
  },
  {
    "url": "assets/js/39.4d15c560.js",
    "revision": "d4bb2c7bec01e2b2b552cd5008b06286"
  },
  {
    "url": "assets/js/4.68a7c28e.js",
    "revision": "dd024def18bed3e0d2b6c1c4e7347701"
  },
  {
    "url": "assets/js/40.50ac4088.js",
    "revision": "f2856e2a7e55c6285d5c2025566b91e7"
  },
  {
    "url": "assets/js/41.8cce4a48.js",
    "revision": "1ea779179a93184af6ffd368dc291ea6"
  },
  {
    "url": "assets/js/42.503956fc.js",
    "revision": "408816b426d55092a12aacb64193df3c"
  },
  {
    "url": "assets/js/43.2339eab6.js",
    "revision": "1b31921f9bfb7d327b583fb023165873"
  },
  {
    "url": "assets/js/44.af7a1cb0.js",
    "revision": "5c4f9f48d00862298331e36604522633"
  },
  {
    "url": "assets/js/45.14676910.js",
    "revision": "1a474cbe45d8755b7e9b1ca5d332f1f3"
  },
  {
    "url": "assets/js/46.7902bc1b.js",
    "revision": "d024203737196d77c72bc77bf0ab5797"
  },
  {
    "url": "assets/js/47.56cd91bf.js",
    "revision": "42c08b7a5b3458fef91c1560bdec93ff"
  },
  {
    "url": "assets/js/48.b17bfe49.js",
    "revision": "9adbb6f8a9fec166603090e4dd419503"
  },
  {
    "url": "assets/js/49.3a93e6c2.js",
    "revision": "b06133c7794923264f93fa3ece579ee4"
  },
  {
    "url": "assets/js/5.08814bfe.js",
    "revision": "1d5b709fc683fc2a56897c3cbd443be1"
  },
  {
    "url": "assets/js/50.97a67a29.js",
    "revision": "871c78cd07945f9b0963c1d85e9c1328"
  },
  {
    "url": "assets/js/51.b002487b.js",
    "revision": "45c20ea4b332cea28dbd0f49d7f82fe9"
  },
  {
    "url": "assets/js/52.7a503fa4.js",
    "revision": "e360a28c72121bf8e1bfe3e93d0492b3"
  },
  {
    "url": "assets/js/53.bb2fb50f.js",
    "revision": "cb45b1f6e443aa2fed0be00d70577606"
  },
  {
    "url": "assets/js/54.f59e47d5.js",
    "revision": "2ae3d23cf1b18ffa649111f018a4f598"
  },
  {
    "url": "assets/js/55.3cc49b7b.js",
    "revision": "b5f70e0213932240b07c45b98c625478"
  },
  {
    "url": "assets/js/56.b4171203.js",
    "revision": "2426f92a7303365bf1810217546960c6"
  },
  {
    "url": "assets/js/57.b6c5fce4.js",
    "revision": "c9a607268965e0333e1b0a7a6fcfe98c"
  },
  {
    "url": "assets/js/58.66a11c63.js",
    "revision": "686bfd9906f1201aa0a16f7200fded04"
  },
  {
    "url": "assets/js/59.eeb1471d.js",
    "revision": "efa293e64051c5eb2f1404edf2573f9b"
  },
  {
    "url": "assets/js/6.a4ca1714.js",
    "revision": "b335c0e199d62166c5eb3f844dd5f64f"
  },
  {
    "url": "assets/js/60.9d516398.js",
    "revision": "bf02e388a9e55a4d3b987a9162112257"
  },
  {
    "url": "assets/js/61.d6d57094.js",
    "revision": "c1c8f079aff4d427779e1c5c40bb4810"
  },
  {
    "url": "assets/js/62.aee91a29.js",
    "revision": "e5474fa9d36761b9418e1e27d2cf183b"
  },
  {
    "url": "assets/js/63.f95b69b1.js",
    "revision": "adae122f9cfbfdb772327bd0a30d3029"
  },
  {
    "url": "assets/js/64.a6ef0c43.js",
    "revision": "54e230b056c1e39b1d4595d5bc3f2a5f"
  },
  {
    "url": "assets/js/65.c49bc979.js",
    "revision": "9a145e8c241497fe47a728261f843002"
  },
  {
    "url": "assets/js/66.12cfbc57.js",
    "revision": "262ddd3b1f83ecc699719661b5ac513a"
  },
  {
    "url": "assets/js/67.bb69d0eb.js",
    "revision": "d87a5dc0f5ecbe159d0c7f1d7b77dcd7"
  },
  {
    "url": "assets/js/68.d3c4ee0a.js",
    "revision": "e2b5e0af69dfb4a0e84d8f610dc8da7a"
  },
  {
    "url": "assets/js/69.8aec844b.js",
    "revision": "5ad346114f006c17468b24d942d68103"
  },
  {
    "url": "assets/js/7.40a6abf8.js",
    "revision": "23c2e4cfc0c048ff69467ee96eff02e6"
  },
  {
    "url": "assets/js/70.1331494f.js",
    "revision": "ec79ca7dc4e06cf9d12b8623adc86332"
  },
  {
    "url": "assets/js/71.7532c2a0.js",
    "revision": "4aae55f0bb2a8a4c29136464d6cfead2"
  },
  {
    "url": "assets/js/72.07e5d31b.js",
    "revision": "ef9ed76421b3ad88280426e662433f77"
  },
  {
    "url": "assets/js/73.5fbe9a1b.js",
    "revision": "0a94712f872230ad421e1035883ca34b"
  },
  {
    "url": "assets/js/74.69841600.js",
    "revision": "cc7a3240d47b844e7aa17d9af6f39881"
  },
  {
    "url": "assets/js/75.458ba0b3.js",
    "revision": "5de3e65cd1b21d6391c5152e0c9bd333"
  },
  {
    "url": "assets/js/76.c4772a88.js",
    "revision": "257391e08888f00b87999b715a0b59a1"
  },
  {
    "url": "assets/js/77.a63e8c2a.js",
    "revision": "7dd4df9d3a67a4c9dadf08711927451d"
  },
  {
    "url": "assets/js/78.d44e259e.js",
    "revision": "b8b23da5eeb883a1be323b551a89c457"
  },
  {
    "url": "assets/js/79.2a4733e1.js",
    "revision": "c6fd3b85b5ed15d6c7046fd474e0bf96"
  },
  {
    "url": "assets/js/8.510a1287.js",
    "revision": "6ff2b99d78cdaa30ad7e4ce0760da076"
  },
  {
    "url": "assets/js/80.5e5acdd8.js",
    "revision": "981128cc18c37d69103978c5881a0119"
  },
  {
    "url": "assets/js/81.56f6e720.js",
    "revision": "dfb644c2d9a176496372eb803e31c784"
  },
  {
    "url": "assets/js/82.577327e6.js",
    "revision": "2b30b1584a8b5c19a8bb222845a38094"
  },
  {
    "url": "assets/js/83.28164919.js",
    "revision": "fe8fb80cf90cdcc09482dba889dccdc6"
  },
  {
    "url": "assets/js/9.71f79f82.js",
    "revision": "f41e04dde341cb34ee0f7fcf9c207e83"
  },
  {
    "url": "assets/js/app.ba8dacd1.js",
    "revision": "024afaa5f3e4fbbfb9a85db131970e4f"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "702b304901e8b274cd6dbb74d76c684d"
  },
  {
    "url": "cs/bash.html",
    "revision": "ab82d045d4fda098c9ba2baf1aa0bd08"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "7c4156d82f98244af6a9e16c8ffe7910"
  },
  {
    "url": "cs/cmake.html",
    "revision": "a31d98f780c569fe03d323c56d1f264e"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "03401acc0445852d42952bb064b0e6bb"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "c806be697b06e401c290de0f2062a1ee"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "da4cfe5dc8c2c797170b7b45ed1e030f"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "842fd96fbcc79de5f9411656a49c979f"
  },
  {
    "url": "cs/git.html",
    "revision": "b769fe94be42f3a6f45be322078582d5"
  },
  {
    "url": "cs/index.html",
    "revision": "f81eeda568f368ba3ee0566fe0bdf782"
  },
  {
    "url": "cs/iptables.html",
    "revision": "71a8b402d0691107d92d8ee01ac6c9be"
  },
  {
    "url": "cs/keras.html",
    "revision": "4bbf8356c4af174513f63e5326eeb6b7"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a04ac808d5d0b812593780b3a30ceab3"
  },
  {
    "url": "cs/lwip.html",
    "revision": "23b33006952878ae2c78731798873549"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "1e28e7f442040e4b4c4bf5608630ada0"
  },
  {
    "url": "cs/scala.html",
    "revision": "5de940078cc94dd5da6217de4d39e08a"
  },
  {
    "url": "ee/about.html",
    "revision": "ca3fe477928c9505d372641e05843845"
  },
  {
    "url": "ee/chisel.html",
    "revision": "eac1f33fcb5318a3eda261ba5b65a586"
  },
  {
    "url": "ee/esp32.html",
    "revision": "1b3930763d81e5b771813388dd6277a0"
  },
  {
    "url": "ee/index.html",
    "revision": "d612b22ba34ed7d2268d22822c6e1e3a"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "1658d2b5ee26ab02bc576d5ab3e90bad"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "5decf9424f4297a313bac8f835c3a6d6"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "c7710feaa2407908036d4d0942379f8f"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "c0092ff905806b17f73f01ed2ad4dc94"
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
    "url": "images/cs/computer_composition/address_space_layout_randomization.jpeg",
    "revision": "dbda1bd1d43d6fa9d7b552ca57d223b9"
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
    "url": "images/cs/computer_composition/multi_level_page_table.jpeg",
    "revision": "614034116a840ef565feda078d73cb76"
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
    "url": "images/cs/computer_composition/simple_page_table.jpeg",
    "revision": "22bb79129f6363ac26be47b35748500f"
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
    "url": "images/cs/computer_composition/ssd_lifecycle.jpeg",
    "revision": "966e51db8354922b533e1db236337e81"
  },
  {
    "url": "images/cs/computer_composition/ssd_slc.jpeg",
    "revision": "0698c240459faa11254932905675dba7"
  },
  {
    "url": "images/cs/computer_composition/ssd_structure.jpeg",
    "revision": "0eee44535a925825b657bcac6afb72d3"
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
    "url": "images/cs/computer_composition/tlb.jpeg",
    "revision": "432050446f68569a37c7699cccda75d9"
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
    "url": "images/cs/computer_composition/wear_leveling.jpeg",
    "revision": "6e78f8da0320dc9b392b9d35ecf42091"
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
    "revision": "f14e1e9c9042248686f16bc7690a6c52"
  },
  {
    "url": "others/about.html",
    "revision": "4a0cf3ed0ce6989b115fb9b1c3059a0d"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "6856d870d3f192fa6d4920570084847c"
  },
  {
    "url": "others/android-studio.html",
    "revision": "89a85fbf0e117681a4791d02a607742e"
  },
  {
    "url": "others/android.html",
    "revision": "e9bbafbfdb3897fab3851d55cf0297a8"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "6872959ce2bfdf0842ae863897b93c4e"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "f945f1faa2fd0a4070a95ff94770147d"
  },
  {
    "url": "others/css.html",
    "revision": "41a7add76871aa15d13f454a03aee40c"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "40265d1a8836811528b8880a0dc3af6e"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "ff58dcf4e99c4e8deec3e006023fc056"
  },
  {
    "url": "others/english-writting.html",
    "revision": "57f6b51b5c4d82c2a89933b31ab61d1b"
  },
  {
    "url": "others/freertos.html",
    "revision": "7ad68c672a1e715aef0536aca17310b5"
  },
  {
    "url": "others/gns3.html",
    "revision": "8aafa82346d65536c0190690a60f691b"
  },
  {
    "url": "others/gps.html",
    "revision": "d0e5865028a2db27c06afaa711ba6a37"
  },
  {
    "url": "others/html5.html",
    "revision": "be9e5a2c056fbd68280bd0ec03899aa4"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "173b0adfd0d6c628479a8d0c7226b511"
  },
  {
    "url": "others/index.html",
    "revision": "d1736b21d5ee63845ad3a789d27cbe7f"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "6a06da3f92bc6c045461bac66c8e496f"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "37a2caca267d0d3677b6fe4d545e145b"
  },
  {
    "url": "others/javascript.html",
    "revision": "ab9852b6e65c146560b48cb7ce6236aa"
  },
  {
    "url": "others/json.html",
    "revision": "3ceebd9a1cc50c695571143514e7077e"
  },
  {
    "url": "others/latex.html",
    "revision": "7cc8180d775ffd7fa38e0ac658f02440"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "459d05469cf26c5d41cfdce7905efe5d"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "fcc213af191dcabd645b5f234d4f671f"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "0645a2152fa312a0c55051727aa335bf"
  },
  {
    "url": "others/markdown.html",
    "revision": "9d4689c02f26059471c855a5625cac98"
  },
  {
    "url": "others/matlab.html",
    "revision": "b484c8db6760297fecd2770f770a8221"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "d54f3ea8734ae29742cf68a2a2d01224"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "d35ab4e93620f85ebadb8665d230544d"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "5905e602e67c3e68a1de65a9ae5783fd"
  },
  {
    "url": "others/network-security.html",
    "revision": "0995de2f7b7692428f57210e8658a83e"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "8dea510cd6f0dc940c25b5095aa569a4"
  },
  {
    "url": "others/oral_english.html",
    "revision": "43bbe5bdbdcbfe09abb12ddd6cacf224"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "3f6b90b87ad2368f95750ab22b8aa927"
  },
  {
    "url": "others/poe.html",
    "revision": "bc2e62b3a7c4745f967c7552adc66cd4"
  },
  {
    "url": "others/pyside2.html",
    "revision": "a75797856219c9918f1b4f7b5651f6e2"
  },
  {
    "url": "others/python-socket.html",
    "revision": "1849ba6ba3814e60fce273ae44a12d79"
  },
  {
    "url": "others/python.html",
    "revision": "9f26b2e2e9f00974c4a3a59dfc98f3ee"
  },
  {
    "url": "others/q-learning.html",
    "revision": "f6abb3eb713eef3c918852f3cd78c852"
  },
  {
    "url": "others/qr-code.html",
    "revision": "86f3d0fc0220d2be4e15fdcf43ad63ce"
  },
  {
    "url": "others/qt4.html",
    "revision": "bc334ae487ff98f0f6d5cfa1194b1517"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "f4ca89b78c1e2ea9a0bb4050bf8443c1"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "5f25eaaee9b110c189aab5e079e06d00"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "7e9b4bcb9ad92b6c8aa7c6c17b49692b"
  },
  {
    "url": "others/sd-card.html",
    "revision": "b00cb0ba1b877dc1c72b7777324881fe"
  },
  {
    "url": "others/sdn.html",
    "revision": "2fa31ae94a02aa34380108032594df8a"
  },
  {
    "url": "others/star-uml.html",
    "revision": "0556fe96ba6e6df5ab4a4d8d20ddc194"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "021c0cbd459cf002706d6677708d4278"
  },
  {
    "url": "others/verilog.html",
    "revision": "ec345e31bdec1cd873e469e1196bb391"
  },
  {
    "url": "others/vue.html",
    "revision": "ede6cee9cbfcdd01848e5f82f571a1ea"
  },
  {
    "url": "others/w5500.html",
    "revision": "4551d0ca3325b8e4cb057d80708d08bc"
  },
  {
    "url": "others/w7500.html",
    "revision": "064e5aa9ab5c3da3236a09efa73bc93c"
  },
  {
    "url": "resume.html",
    "revision": "9bcc385db2d8f82e7c05410d8d91b468"
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
