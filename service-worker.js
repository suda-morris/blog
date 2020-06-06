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
    "revision": "476980769464d0616c052ae291edab6b"
  },
  {
    "url": "assets/css/0.styles.f7f6f39f.css",
    "revision": "bb8051f29569d707c129b33e23f072f9"
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
    "url": "assets/img/gdb_cheat_sheet.6f7e5433.png",
    "revision": "6f7e54334df820074939f6a5dbb99998"
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
    "url": "assets/img/memory_and_bus.32a8b406.png",
    "revision": "32a8b406d22236061fcb758336ba55b4"
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
    "url": "assets/js/10.2e169623.js",
    "revision": "3e8fff0352ad35f0745a015142fbfc5c"
  },
  {
    "url": "assets/js/11.9af03d8a.js",
    "revision": "6bde5588d4d68cfc2a7c5752ae80b44f"
  },
  {
    "url": "assets/js/12.fb0e982a.js",
    "revision": "75a079a6cee4c8f810a0b8c95bad463d"
  },
  {
    "url": "assets/js/13.fb94874c.js",
    "revision": "75c6317f3ac18fc959d919bda8d838c9"
  },
  {
    "url": "assets/js/14.4e9b3598.js",
    "revision": "32c1f22c1c8040f79745a96efa44efc1"
  },
  {
    "url": "assets/js/15.15e54ee3.js",
    "revision": "6e82e0012f0dd642a5307561de978a76"
  },
  {
    "url": "assets/js/16.204dc95f.js",
    "revision": "a3b01bc68abb69a507d3bf5749cf1755"
  },
  {
    "url": "assets/js/17.bcca0f53.js",
    "revision": "02351640f3271ecdfce539cb5c53dbe7"
  },
  {
    "url": "assets/js/18.658aa865.js",
    "revision": "727c5ab32bc4708e0e621e24c71cf2e8"
  },
  {
    "url": "assets/js/19.772111cb.js",
    "revision": "fa531f58537290dbacfe67a6e7472edd"
  },
  {
    "url": "assets/js/2.558af3c9.js",
    "revision": "1302700a5214482bda006a81c02cdc88"
  },
  {
    "url": "assets/js/20.0df3f905.js",
    "revision": "1edd60930e30d59e8a73832983ee0098"
  },
  {
    "url": "assets/js/21.dab30b81.js",
    "revision": "1e3e2df556cb238fbedcbca6c41bf88c"
  },
  {
    "url": "assets/js/22.5c409928.js",
    "revision": "60ab965c22227d03db41178be13e7ec6"
  },
  {
    "url": "assets/js/23.90bd142d.js",
    "revision": "b4aed7ed0533663f7f97051deb537206"
  },
  {
    "url": "assets/js/24.bdc58161.js",
    "revision": "b3452137cace358735ec93ca3b325de5"
  },
  {
    "url": "assets/js/25.c0498c5e.js",
    "revision": "dca5f3750d96c19322a9f43a41cb6e42"
  },
  {
    "url": "assets/js/26.07ad601a.js",
    "revision": "f06dc89e1f85c3945b2497eb32c4f52c"
  },
  {
    "url": "assets/js/27.0ee910c6.js",
    "revision": "7594b181278407ad9f863fe42e2e6311"
  },
  {
    "url": "assets/js/28.fb042773.js",
    "revision": "3721c3ec582dafbfa7a56ea5cfebf2ae"
  },
  {
    "url": "assets/js/29.1c7340ea.js",
    "revision": "b109c6727c1f660a4d08580432641433"
  },
  {
    "url": "assets/js/3.72a6fe74.js",
    "revision": "1ca050b572a79a7583bf1eafd0ff3b48"
  },
  {
    "url": "assets/js/30.47aa58d1.js",
    "revision": "e581125cfefe5f434fd015b46409c28c"
  },
  {
    "url": "assets/js/31.a8b3c3bb.js",
    "revision": "5895238e26c364c4e9d42231f55755f3"
  },
  {
    "url": "assets/js/32.23e39700.js",
    "revision": "9f89fab61525b183e73a26bbb21f41a2"
  },
  {
    "url": "assets/js/33.190cf310.js",
    "revision": "92b388cb792ea5d771b54bf786df787e"
  },
  {
    "url": "assets/js/34.032c4fdb.js",
    "revision": "8aaa0d584bb81c768cedd39abb27f301"
  },
  {
    "url": "assets/js/35.eb8dd9a1.js",
    "revision": "f325ade73584a46439fa535352a54586"
  },
  {
    "url": "assets/js/36.483af3a5.js",
    "revision": "7959976b8ec41b6b414514ec2a846aa4"
  },
  {
    "url": "assets/js/37.8d4a1657.js",
    "revision": "8bed97c9f6a9eee31ce47016ae9d8cae"
  },
  {
    "url": "assets/js/38.8c11b4d1.js",
    "revision": "958ce78ea4b8cf0d66b22c677d70a146"
  },
  {
    "url": "assets/js/39.61dd9414.js",
    "revision": "a21bb57fb02645da73a939316d0ab310"
  },
  {
    "url": "assets/js/4.8c808c96.js",
    "revision": "0e69335f37d41521ec3aebabd00ca87c"
  },
  {
    "url": "assets/js/40.dd11dff3.js",
    "revision": "2d76089b62813150ef0eebd3ca69b2a8"
  },
  {
    "url": "assets/js/41.25d4c4c3.js",
    "revision": "0f504617e8a24bdc7f757f094c0ccb6f"
  },
  {
    "url": "assets/js/42.76550826.js",
    "revision": "e0a4aea5a72e8293a73911a05554b23a"
  },
  {
    "url": "assets/js/43.75ceba72.js",
    "revision": "5cef197968532cad03eb4c48bd42249f"
  },
  {
    "url": "assets/js/44.ae7cfaa2.js",
    "revision": "029f9947d07ab8c0defce7b4a3d947db"
  },
  {
    "url": "assets/js/45.1608bd2d.js",
    "revision": "e968db9e43de026559c9b1b754a99af0"
  },
  {
    "url": "assets/js/46.3c0dab27.js",
    "revision": "0295e0931c0092c30ddce670a28c981e"
  },
  {
    "url": "assets/js/47.ef6092f3.js",
    "revision": "084a2be9a13d91f671f78a0d6c6a531b"
  },
  {
    "url": "assets/js/48.01071be4.js",
    "revision": "0422e4741953431af65ed3aaa073d0ce"
  },
  {
    "url": "assets/js/49.0372d705.js",
    "revision": "d62d8f9bbbdd03d06e3f3eb93287fb66"
  },
  {
    "url": "assets/js/5.4fd2bc63.js",
    "revision": "1fe466ae825af73fd04489bd1fc9527a"
  },
  {
    "url": "assets/js/50.c1a9c1b4.js",
    "revision": "db13e183f4fd29f4df52cf1baf16ef21"
  },
  {
    "url": "assets/js/51.a204bf9a.js",
    "revision": "0e9172fe087e817add9feeec2380b531"
  },
  {
    "url": "assets/js/52.f9f9d658.js",
    "revision": "e768edb9f7ecb8467fe87bfad51c9a71"
  },
  {
    "url": "assets/js/53.b822bdc3.js",
    "revision": "5dcd788d151e9fcd866c6b551b56eaa9"
  },
  {
    "url": "assets/js/54.0f644287.js",
    "revision": "8d5cf3720f729dd3dbb6af89657ae1e0"
  },
  {
    "url": "assets/js/55.afd7cc6d.js",
    "revision": "9f62249168ee4c4593dcb95347bb0de8"
  },
  {
    "url": "assets/js/56.2ec1d08f.js",
    "revision": "63cbb1d2387864ff9eb7ba129ca588b7"
  },
  {
    "url": "assets/js/57.a8a66b3b.js",
    "revision": "43b41e0c2f29452dbbb1b36d68f696b2"
  },
  {
    "url": "assets/js/58.18ebad66.js",
    "revision": "efa6000620390b733e19bb7dde4acfa0"
  },
  {
    "url": "assets/js/59.7afba8e2.js",
    "revision": "048ba754e7915cdd80f10321b3d01c3d"
  },
  {
    "url": "assets/js/6.862b2f7e.js",
    "revision": "dc60116566f3883f94413dd21fa93bad"
  },
  {
    "url": "assets/js/60.0774949b.js",
    "revision": "286868571a48ac547b01b87de66a4aef"
  },
  {
    "url": "assets/js/61.52919256.js",
    "revision": "7e85ff82cc5efda485937f5671cac7c8"
  },
  {
    "url": "assets/js/62.d00e5fc8.js",
    "revision": "c96d67920a6d435426588b1513fe8ad6"
  },
  {
    "url": "assets/js/63.dfaf521d.js",
    "revision": "1b129ded7dd5e091a806d16d17bf4290"
  },
  {
    "url": "assets/js/64.e62b8bb4.js",
    "revision": "ab1fefa42d44948b20944cefd19c3d4d"
  },
  {
    "url": "assets/js/65.b2fcbed8.js",
    "revision": "1f7e530ea7ba530e8d35b2d08bd85ed9"
  },
  {
    "url": "assets/js/66.bc5921d8.js",
    "revision": "412939304ccb30103793cda63324b5b4"
  },
  {
    "url": "assets/js/67.2decae91.js",
    "revision": "8217cf447005df8342dbe960637292b4"
  },
  {
    "url": "assets/js/68.17dc58c9.js",
    "revision": "8bf8f89533517e61847bfa98ef6c7d82"
  },
  {
    "url": "assets/js/69.fb46ffbe.js",
    "revision": "6ca645408e9c1fb9885e2c6c5f9ceb13"
  },
  {
    "url": "assets/js/7.44c69445.js",
    "revision": "06dc73fc176bb9b88e943d77b2e2021c"
  },
  {
    "url": "assets/js/70.f341a021.js",
    "revision": "d00893bfe39123039baf3400ff3cd8c7"
  },
  {
    "url": "assets/js/71.5876ebb8.js",
    "revision": "d2b7bd625159466d8fe4395155780dd0"
  },
  {
    "url": "assets/js/72.1770d896.js",
    "revision": "683f4100ed86394f5bc1814c785c49ef"
  },
  {
    "url": "assets/js/73.df5e49ff.js",
    "revision": "2aed36bbb139b6144a15be657dda9415"
  },
  {
    "url": "assets/js/74.424d1f9b.js",
    "revision": "d3096665c271ec099ab9e1ffe5df4dbe"
  },
  {
    "url": "assets/js/75.6ee89253.js",
    "revision": "70f64bf0b4218b1ab17347a59328c7da"
  },
  {
    "url": "assets/js/76.7d95a787.js",
    "revision": "a6cac9a743e1bb1de2aae1528c785392"
  },
  {
    "url": "assets/js/77.a792c518.js",
    "revision": "69a396bd4372a7a29c70ddaaaf44f083"
  },
  {
    "url": "assets/js/78.e597724c.js",
    "revision": "d3c6067a807b9515a1b6f92395731429"
  },
  {
    "url": "assets/js/79.85d396de.js",
    "revision": "f05c069dd007fc981a64c86a27d5646c"
  },
  {
    "url": "assets/js/8.6dbee57f.js",
    "revision": "6da7dcfc9db5f221a46e741c9cc30f4a"
  },
  {
    "url": "assets/js/80.a53f77db.js",
    "revision": "5ee99c7d06b7913d57572f43cfdd5303"
  },
  {
    "url": "assets/js/81.f02a43fd.js",
    "revision": "0eaa43ed8d07a2e206ee981f6687f580"
  },
  {
    "url": "assets/js/82.5e9ba0bf.js",
    "revision": "39bc17a993274d8012fa4b906bfb3439"
  },
  {
    "url": "assets/js/83.d38f1caa.js",
    "revision": "98743725f737490b071055e357a56214"
  },
  {
    "url": "assets/js/84.d1364cf6.js",
    "revision": "7561e3eb8e91761a384f3e498ab1fc35"
  },
  {
    "url": "assets/js/9.5acfe886.js",
    "revision": "fc2be487c8a65d9f6f0536d452d235fe"
  },
  {
    "url": "assets/js/app.195d9e32.js",
    "revision": "370ea9a605b5b25c1958e870ada1d022"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "c3760dbaeb26ed556513b35c4256506a"
  },
  {
    "url": "cs/bash.html",
    "revision": "523473f7b9baef58867534482ac00802"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "1e5d681ceedbe67ee4c27383ef2c18bf"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "059d2d29b6a49276e357da51cdd8dd2d"
  },
  {
    "url": "cs/cmake.html",
    "revision": "9538c1c4999523f6e2791bdc59b709ee"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "00d515ea42b6b11dbf56ccbd27c57bd2"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "3859491267fbf6497a7525cc000c08af"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "f61bf3aa97e7b3891f7ab369ce83f9eb"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "936680e6e60b94b4cbde47a92828279f"
  },
  {
    "url": "cs/git.html",
    "revision": "ef0634ef1fbe517d26ce734c41e17e31"
  },
  {
    "url": "cs/index.html",
    "revision": "33e71d791f033e93854e252de013c954"
  },
  {
    "url": "cs/iptables.html",
    "revision": "3f6f42d20e140017224533549e906689"
  },
  {
    "url": "cs/keras.html",
    "revision": "e91b4b0cbde7a91975acd6ab8d0550a9"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "63f9936bf44d27e0ff3ee96b2e78f059"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "00fc4c429f3d1ca7810803d39db20aee"
  },
  {
    "url": "cs/lwip.html",
    "revision": "0b561771f9852b495e5cbadfe30559f3"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "602cdaf629781cdc3ba8cda097f1d01d"
  },
  {
    "url": "cs/scala.html",
    "revision": "2574ef7a7d8eb5bec1ef065d0962eb23"
  },
  {
    "url": "ee/about.html",
    "revision": "72240afbeb2db29b808b472ea6aa99f7"
  },
  {
    "url": "ee/chisel.html",
    "revision": "77b67ae6fcc7eb4c7d6c2354f4384e92"
  },
  {
    "url": "ee/esp32.html",
    "revision": "c0f4d5567a46e18795d910383e6f2186"
  },
  {
    "url": "ee/index.html",
    "revision": "d78edbd4c0126958b1ff426588ce72ff"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "fca42c88744590c63b0547a6dcaa3c29"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "3f355f0a70ba6beee4e5e9022cfce8b3"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "b13191972d78d31455b378fb703c78ba"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "f9a1714089a5c756b9e349d20d88e566"
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
    "url": "images/cs/cheat_sheet/gdb_cheat_sheet.png",
    "revision": "6f7e54334df820074939f6a5dbb99998"
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
    "url": "images/ee/esp32/memory_and_bus.png",
    "revision": "32a8b406d22236061fcb758336ba55b4"
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
    "revision": "1c91765363b458080689b5d42da71215"
  },
  {
    "url": "others/about.html",
    "revision": "b318993b6ad3c1685d3823900d66175c"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "d61c8dc7b957428e5251a128862924b5"
  },
  {
    "url": "others/android-studio.html",
    "revision": "d5b19b2635a283e873e6e59d4ee63365"
  },
  {
    "url": "others/android.html",
    "revision": "913177fc02eb42b1cbb34024d67f3367"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "2de1e721a28205f0f6ddd3c137917075"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "0baec5c9bd67bdbb736abdb3b0bd638b"
  },
  {
    "url": "others/css.html",
    "revision": "ecb60f4001b1eba7533f5f8599e94a26"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "3acc3cca846439e4608255b3a78699f2"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "3fb7a7772497744e95789584ba33764a"
  },
  {
    "url": "others/english-writting.html",
    "revision": "6c6e0a3c8a0cf2ad8d01956dfce6e3ef"
  },
  {
    "url": "others/freertos.html",
    "revision": "c9870a78e388b024efc0e366736c2b3c"
  },
  {
    "url": "others/gns3.html",
    "revision": "d197f0553bf8d687bd7f65f7968e5cf2"
  },
  {
    "url": "others/gps.html",
    "revision": "b0a756568fdd1c61fe92f2d644e0f5ae"
  },
  {
    "url": "others/html5.html",
    "revision": "7ea561dda278792c38e4a4e4c7c93f3b"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "51a31d35dd36e5423215e6cec92015e6"
  },
  {
    "url": "others/index.html",
    "revision": "e01ae5af4c71036cc2b8b5b02240ff0f"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "75e3cb0eed8f2c0604346adcc1e91918"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "5eeec567c164851df98a7f45649a3f45"
  },
  {
    "url": "others/javascript.html",
    "revision": "5e7a62d51a05f95f313a56396f4dbd1e"
  },
  {
    "url": "others/json.html",
    "revision": "4d7961076878e7fca03f3fc6c41f6234"
  },
  {
    "url": "others/latex.html",
    "revision": "96e5dab21644cb4a2aa25006016d51d5"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "de9f174cef7bebc2710b1ccf47ac1129"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "12f8afb667c5e3b73a558b579cc21afc"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "b30a40978305c9ed476edc859bfe8aef"
  },
  {
    "url": "others/markdown.html",
    "revision": "b87a5da95c809361f350fd8b3fb8c027"
  },
  {
    "url": "others/matlab.html",
    "revision": "961c474ccca76b3e763a71167094dffd"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "c32559413d7cf7fc1e4c585b8582775d"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "bb586834a3eecef9339359ad47a944c6"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "7c21c933bbfa7ea6b639ee707dcb92e3"
  },
  {
    "url": "others/network-security.html",
    "revision": "b50b589a3218fe265717a7a44a4bcaf2"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "f3bf47c8d93ee9f9ebc8952fb6141ba2"
  },
  {
    "url": "others/oral_english.html",
    "revision": "96790f68fd85cbef321f76daced7f68a"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "87063536a4c9e7076a4493ddc4f97c5b"
  },
  {
    "url": "others/poe.html",
    "revision": "377d9e37dd4381875e76687f27e76e9f"
  },
  {
    "url": "others/pyside2.html",
    "revision": "5df315d77b9d4c0ad016e8a74cf72ca0"
  },
  {
    "url": "others/python-socket.html",
    "revision": "c14d7fff191b0ca70da215081c16b11e"
  },
  {
    "url": "others/python.html",
    "revision": "2fa9187df0c8386af4b6d2e018dac0d2"
  },
  {
    "url": "others/q-learning.html",
    "revision": "54ea1c9b67e056dd0d1b1843155bb453"
  },
  {
    "url": "others/qr-code.html",
    "revision": "43345548829b944a3039ef79fd49d29b"
  },
  {
    "url": "others/qt4.html",
    "revision": "d277e41a1191a41a1b5d879d6d03315f"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "d0c5ecf6083c3d3fa630b7fbec86487e"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "5cb120162959e6a10f0a3a2e7b8ae78a"
  },
  {
    "url": "others/sd-card.html",
    "revision": "5fe6641ac9ce19672647e382ef414842"
  },
  {
    "url": "others/sdn.html",
    "revision": "1ab2bb6180e0617b5fff4b1cd14e46d9"
  },
  {
    "url": "others/star-uml.html",
    "revision": "53a140e5f44e3ae8303ffbe07adc036d"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "9a705f2e0cbe7589748e6c242f672a45"
  },
  {
    "url": "others/verilog.html",
    "revision": "c9de4b80e8bf30845849b7f9415c96e3"
  },
  {
    "url": "others/vue.html",
    "revision": "70e9052ebb9aa563487cf9e311758774"
  },
  {
    "url": "others/w5500.html",
    "revision": "d17d616d1ed0169942825ca2c80da3fb"
  },
  {
    "url": "others/w7500.html",
    "revision": "3734f56763dcb83390d86f4500facc01"
  },
  {
    "url": "resume.html",
    "revision": "bc986821614f3dade12cdec9bfaaa5e9"
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
