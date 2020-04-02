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
    "revision": "22426bde7890990f9dbe17b7bee2a38e"
  },
  {
    "url": "assets/css/0.styles.0b089c3e.css",
    "revision": "5b7cbcd0dd3fd27c2111a852ed5050a6"
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
    "url": "assets/js/10.454ac533.js",
    "revision": "b33410ed99212edb5ba0d78c13bed195"
  },
  {
    "url": "assets/js/11.e63ff7cd.js",
    "revision": "2a74b6d358aac0f07e0034e29413d037"
  },
  {
    "url": "assets/js/12.26ff35fa.js",
    "revision": "9deccc45c9401fa541f226efd81122df"
  },
  {
    "url": "assets/js/13.899104f6.js",
    "revision": "da09620bf8e0746ce74cc24eda94663e"
  },
  {
    "url": "assets/js/14.00f454d8.js",
    "revision": "424a7c9e0e1117cb8a82de260bd2eae4"
  },
  {
    "url": "assets/js/15.27b27203.js",
    "revision": "5d6d7a903d37ad4fd12f46167554b640"
  },
  {
    "url": "assets/js/16.b500e478.js",
    "revision": "e564dd4183aa3751c00b7fb89ce98976"
  },
  {
    "url": "assets/js/17.baa39582.js",
    "revision": "adeea0c5eaac54078282c9fcb8b200ca"
  },
  {
    "url": "assets/js/18.b8013c23.js",
    "revision": "5e741a6c908ddbc961c5a23ef5298827"
  },
  {
    "url": "assets/js/19.9520deb2.js",
    "revision": "39b371761993cad5412b1623ac4f154c"
  },
  {
    "url": "assets/js/2.b033ffad.js",
    "revision": "d41f7cd6ab692a8817c37fafa489ed9a"
  },
  {
    "url": "assets/js/20.d95db026.js",
    "revision": "5784a30ea27734719fb6afb58de14d34"
  },
  {
    "url": "assets/js/21.dd6239d1.js",
    "revision": "f911a725d43cb409e9decd97cf15cbdf"
  },
  {
    "url": "assets/js/22.b365bd44.js",
    "revision": "7a37b40c82a48d7cc4cf1e55518854aa"
  },
  {
    "url": "assets/js/23.1ccec693.js",
    "revision": "882669d7207fdcedb9ed21a1a35f553c"
  },
  {
    "url": "assets/js/24.6873251d.js",
    "revision": "aa56c877432d52cd9f3f7b08ba342802"
  },
  {
    "url": "assets/js/25.7fbf2fe5.js",
    "revision": "31104584f0914f7d702d8e87d105ef83"
  },
  {
    "url": "assets/js/26.02f4a8ee.js",
    "revision": "7616dfcbe03f417950d068fc2d168374"
  },
  {
    "url": "assets/js/27.b3f49fe0.js",
    "revision": "71ed2ceba189f971834ed81ca9f33676"
  },
  {
    "url": "assets/js/28.d3db2c4d.js",
    "revision": "96cfd725a5696eef5e859f2f71cd96c8"
  },
  {
    "url": "assets/js/29.a825dba5.js",
    "revision": "4a8a251330c7a37e1b6ede16162d31bd"
  },
  {
    "url": "assets/js/3.aa0cd0eb.js",
    "revision": "281e27b97ba787c6432af1536ee3fa92"
  },
  {
    "url": "assets/js/30.62fac0ac.js",
    "revision": "52a8f7faf42c7b16ed3b8d8194ef2ec1"
  },
  {
    "url": "assets/js/31.133d543f.js",
    "revision": "417d0c068b885c30ca7937e5c11a27a4"
  },
  {
    "url": "assets/js/32.7500879d.js",
    "revision": "3348a7f1bac29c5b5660d6ea19196de8"
  },
  {
    "url": "assets/js/33.322513ac.js",
    "revision": "e4682ce9e86e83ecdd79531590f8fba1"
  },
  {
    "url": "assets/js/34.4e6d8c3f.js",
    "revision": "f121257b6957c8244158ba05a1b5c8d0"
  },
  {
    "url": "assets/js/35.54c717d2.js",
    "revision": "5836406b9812a2852aa2f9cb758091fe"
  },
  {
    "url": "assets/js/36.a7f79166.js",
    "revision": "d62f104c28cfbe778867180cc7cfe2ae"
  },
  {
    "url": "assets/js/37.36429af5.js",
    "revision": "572299640d8f25135b03d4ea776faeb5"
  },
  {
    "url": "assets/js/38.7881edb5.js",
    "revision": "8663d3bf9a328366012d4efda1a50dba"
  },
  {
    "url": "assets/js/39.06fd6a45.js",
    "revision": "18c4b020b4f1af3e3578a5cb85ba7f8b"
  },
  {
    "url": "assets/js/4.bba2ac7f.js",
    "revision": "c7f0e094b41c3cd1ef7586fbc85540dd"
  },
  {
    "url": "assets/js/40.af1d496e.js",
    "revision": "e56bc4e586eebf8e262360a7b15b78a7"
  },
  {
    "url": "assets/js/41.85fbcb08.js",
    "revision": "90e7a2ffa8d5234b05a7b588cda30503"
  },
  {
    "url": "assets/js/42.0667b13e.js",
    "revision": "76c7ea41acc98ff762d86daa380344dc"
  },
  {
    "url": "assets/js/43.4a679c70.js",
    "revision": "3f680b2a8fde2c119e4845e6e2dcf4a1"
  },
  {
    "url": "assets/js/44.ab944a6a.js",
    "revision": "6ba9f4358e21a292632f6d45bae5ba19"
  },
  {
    "url": "assets/js/45.dc392203.js",
    "revision": "9da554ae4674eb6312d64b44597f48ce"
  },
  {
    "url": "assets/js/46.a7d4f590.js",
    "revision": "0e523607a2a7210d419d84325284e5bb"
  },
  {
    "url": "assets/js/47.5032d7a4.js",
    "revision": "a82617c2c46fab399bdf157726944643"
  },
  {
    "url": "assets/js/48.482a1bc0.js",
    "revision": "9b122df2c76fe3f0ee052970fe82efcf"
  },
  {
    "url": "assets/js/49.38eea09f.js",
    "revision": "cd95b409f1a7d13e96438c2809255b2d"
  },
  {
    "url": "assets/js/5.c33a25f8.js",
    "revision": "4d46dbfa3008f047286b89c12527063f"
  },
  {
    "url": "assets/js/50.4b47897a.js",
    "revision": "ef950d8e61c61b41583ce06e56380232"
  },
  {
    "url": "assets/js/51.9b88ea7a.js",
    "revision": "7a4011270d166713707a5060d077f8be"
  },
  {
    "url": "assets/js/52.4218a568.js",
    "revision": "1d9d144a833a0405ca595cefa737f51d"
  },
  {
    "url": "assets/js/53.b911127b.js",
    "revision": "12980a05da9d327ca8773304e700af80"
  },
  {
    "url": "assets/js/54.a5d78383.js",
    "revision": "3baf6beb2c06839c25b97e9fbd0534b7"
  },
  {
    "url": "assets/js/55.8b9c26ea.js",
    "revision": "c9915365545a703885bf72cf77f1d683"
  },
  {
    "url": "assets/js/56.d3303fc5.js",
    "revision": "dbb9bf68ea891010c35e965282d83a80"
  },
  {
    "url": "assets/js/57.5b3fd283.js",
    "revision": "85b622b44505fa9284a63bcea93cdb8a"
  },
  {
    "url": "assets/js/58.653def69.js",
    "revision": "4343d15d283732fce9f82080bbb1e277"
  },
  {
    "url": "assets/js/59.4508b210.js",
    "revision": "29fb7e71909ee368453fd3aaec63341c"
  },
  {
    "url": "assets/js/6.704d0670.js",
    "revision": "c6d02416b880aa5619551e2e0c2106fb"
  },
  {
    "url": "assets/js/60.a0cf4b39.js",
    "revision": "9d39eb02ac17adc04adad97663982c46"
  },
  {
    "url": "assets/js/61.4c6defe2.js",
    "revision": "b460c3f7cce8455c2cd5445a5f02a514"
  },
  {
    "url": "assets/js/62.8756ee37.js",
    "revision": "03f162157f830b0e088ae8173ed2ccba"
  },
  {
    "url": "assets/js/63.b165b97b.js",
    "revision": "2663d1bbbe53c41379df3894de12844d"
  },
  {
    "url": "assets/js/64.c80bcbaa.js",
    "revision": "411fe70c6280c5e2204b57d95e640352"
  },
  {
    "url": "assets/js/65.59c77810.js",
    "revision": "092e282a3dcb9b8ada3f83553af64330"
  },
  {
    "url": "assets/js/66.51a9dee8.js",
    "revision": "f86e65c5177881aea1438b7d74879910"
  },
  {
    "url": "assets/js/67.20acae49.js",
    "revision": "1feac8e3e1aabb03bf7ee72c6d13c284"
  },
  {
    "url": "assets/js/68.42d0781a.js",
    "revision": "921c5b27f9c730e3fce3f31f3550e26b"
  },
  {
    "url": "assets/js/69.e41cfcf8.js",
    "revision": "c8721a725c66ce8eefa862d0011601b5"
  },
  {
    "url": "assets/js/7.ab9fc71a.js",
    "revision": "b86c0e091d6a186f295867a218054890"
  },
  {
    "url": "assets/js/70.9f39f121.js",
    "revision": "6ab6daa9e11aa7cc80650935996346fd"
  },
  {
    "url": "assets/js/71.1291cba9.js",
    "revision": "c80fe1b40bdf279e0016796dc5c6c530"
  },
  {
    "url": "assets/js/72.5d0cfad2.js",
    "revision": "186824e09dd655acb0b92bc2f8ecf727"
  },
  {
    "url": "assets/js/73.5275c6cd.js",
    "revision": "99a87b2443b4f5ce73cc7eaf898171d2"
  },
  {
    "url": "assets/js/74.23d07e41.js",
    "revision": "2d3e5321bb3cd916fac999b360cfb776"
  },
  {
    "url": "assets/js/75.5a4136b7.js",
    "revision": "de7603a305b25ea12549ce2450c52fee"
  },
  {
    "url": "assets/js/76.ef3e9ae7.js",
    "revision": "7196fcbcce2980fad0b37923eb638e94"
  },
  {
    "url": "assets/js/77.d71c5cbf.js",
    "revision": "c221ece3458102dde43035d7f5474025"
  },
  {
    "url": "assets/js/78.96774f42.js",
    "revision": "4a2e237a685eacd85c83e875bda38235"
  },
  {
    "url": "assets/js/79.7a0d4232.js",
    "revision": "41e8355b97bf78a4c8fdaad600eabc61"
  },
  {
    "url": "assets/js/8.6c290bcf.js",
    "revision": "3c4125781114aaf20d6dddef185198e5"
  },
  {
    "url": "assets/js/80.ee1e5348.js",
    "revision": "e7e6e554d6766ad637f24d67e203d87e"
  },
  {
    "url": "assets/js/81.aa79f1f6.js",
    "revision": "21bcd91e09f337ef83609d055b023c29"
  },
  {
    "url": "assets/js/82.935b680f.js",
    "revision": "9404d26f88c563c80bc6d99987c40f6f"
  },
  {
    "url": "assets/js/83.1a97331f.js",
    "revision": "14b1c8010ca88596860f065d22d190a6"
  },
  {
    "url": "assets/js/84.3fe3fb97.js",
    "revision": "d648325a8043c0d472179e2359b373d6"
  },
  {
    "url": "assets/js/9.fc3f06f6.js",
    "revision": "9d079c6d7c75a23ec9c2137dee846fca"
  },
  {
    "url": "assets/js/app.0f107196.js",
    "revision": "d5f19890e4d1200e646a292d69acbead"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "bc5701bb6b08c9478d47aeae1af3f2a1"
  },
  {
    "url": "cs/bash.html",
    "revision": "3aa9c24676dd31b9bfbb2eb50222ae78"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "97c421cce386f76fe997795a0e480add"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "be9216c37db82792b64462117180d798"
  },
  {
    "url": "cs/cmake.html",
    "revision": "6093c77c037d831eab27af9b8fe07671"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "15c622b45ac4fc1396c66c73593a39d3"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "7a6e91365487491929a1281d32e45ce1"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "c33a7b401ceb941ad306640d64e00184"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "e690d7dff1cb69f3962c3b1f3936a174"
  },
  {
    "url": "cs/git.html",
    "revision": "a8550038261f00a18410809b16b26f75"
  },
  {
    "url": "cs/index.html",
    "revision": "2447c70481c3908f77bb48fc62228011"
  },
  {
    "url": "cs/iptables.html",
    "revision": "f6f799bfb038fa59ea2e4ac044e2d34b"
  },
  {
    "url": "cs/keras.html",
    "revision": "a2d5d98b8252875c5b73c0c9fda72293"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "018996f2a6b6101333999aa82c5a54c9"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "292740d84810d265a92dd3fec64df726"
  },
  {
    "url": "cs/lwip.html",
    "revision": "6179e60bb34cc23ddcb1a693e5acc8a4"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "59e8dd8d2e8b1acf0ef870f5b3184769"
  },
  {
    "url": "cs/scala.html",
    "revision": "1f9d56ac1ecd1fd8845646dd3a06acb1"
  },
  {
    "url": "ee/about.html",
    "revision": "47099ce4f2fc6499c47dbc087704bb5a"
  },
  {
    "url": "ee/chisel.html",
    "revision": "21b1a5c17faa138145f6ac3c28702a73"
  },
  {
    "url": "ee/esp32.html",
    "revision": "1b43264e7cbc535f9eb292fbaf0d75d3"
  },
  {
    "url": "ee/index.html",
    "revision": "150f6b0684d79f18a58503fde78a0b2c"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "72c514427c6614dc66589d606dd7e659"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "1893dc8f4282a8f333cf30e3455f1ad5"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "afcc516008d060d495e6f2e1cbc87e9e"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "63c0a9956ade8bbf3dfc7c47c70b5d62"
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
    "revision": "01f6b9f894ebf5dda275e3ea01adb85c"
  },
  {
    "url": "others/about.html",
    "revision": "2620d0dd7387b7c496ee4b8b1f547b79"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "1d6087f59ee31be045cef90401f32c57"
  },
  {
    "url": "others/android-studio.html",
    "revision": "063329fcc267509261eaf28ae8d8e5ac"
  },
  {
    "url": "others/android.html",
    "revision": "5ff598fc17b252be7d6398442f42de55"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "0a9e9e781a78b9a31806deddf700d24e"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "83f50a5ec54eb19d8f13fa2b7b4b8493"
  },
  {
    "url": "others/css.html",
    "revision": "64d4ff8e43eb23cdd2f18329f1d89f1d"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "7329b2acdd6efe61d35ab31735caaa6d"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "869ab2ce85b7402281daecd86e9dfc5e"
  },
  {
    "url": "others/english-writting.html",
    "revision": "921f2f51f11c9a372e9d6d1d2f82997e"
  },
  {
    "url": "others/freertos.html",
    "revision": "33345454466b7f6166cd6ae6e665230e"
  },
  {
    "url": "others/gns3.html",
    "revision": "5c463ddb6cd1511f754b1c011c332a1a"
  },
  {
    "url": "others/gps.html",
    "revision": "243658b726cbc14469249bf7b8d3534d"
  },
  {
    "url": "others/html5.html",
    "revision": "b1926b1ef58c09e90e61e9637bca0a8e"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "a6e3e0b73af591c372978e228c3440a0"
  },
  {
    "url": "others/index.html",
    "revision": "b0526f63b45074a0d982ae977d172c41"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "4a5620bf3e3518e02975351bb18ed87b"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "02f595dcd70c6cd21794873ea5cea86b"
  },
  {
    "url": "others/javascript.html",
    "revision": "74efe4708161d4bc36dd7d4e1fcda770"
  },
  {
    "url": "others/json.html",
    "revision": "117cebdadbb7e280b501c9d906a7ddc2"
  },
  {
    "url": "others/latex.html",
    "revision": "113b1b6fbf08e75c0d01b8e85e5359ff"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "f1e7b240f0751b33c61600270aa44c5a"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "891831c9670f07a6373cf6ff75787af8"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "2a95bc884662c42bc8a515e0ccc75c93"
  },
  {
    "url": "others/markdown.html",
    "revision": "837416c4d7263e0e82e3476e29b068ae"
  },
  {
    "url": "others/matlab.html",
    "revision": "21a660e7a7d07c9b472a0f765cb3f391"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "92669e828a85227fc869141111279bdf"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "94c42c23004298e3d267b5a1a9642a49"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "dd673389815f06d0212bc9fbdf0633b1"
  },
  {
    "url": "others/network-security.html",
    "revision": "ede072d1f7da15f92ee58f539e087627"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "513626feffefa8e728c2a70efb105037"
  },
  {
    "url": "others/oral_english.html",
    "revision": "b41f2bb240ce1f2df9535bf6070b4106"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "e226d1eff6b734a6a65294089e6c0c35"
  },
  {
    "url": "others/poe.html",
    "revision": "88e726a3544d5dfa37c195b0c829e3ba"
  },
  {
    "url": "others/pyside2.html",
    "revision": "27633dc9832808aa6219ff4ef824c7ec"
  },
  {
    "url": "others/python-socket.html",
    "revision": "e1c7ccc4268dc34ec37f77f7608db34d"
  },
  {
    "url": "others/python.html",
    "revision": "cd6bd420d78f6942a4bc69fbd805204b"
  },
  {
    "url": "others/q-learning.html",
    "revision": "f273bffc66073ea0f79db881284e69cb"
  },
  {
    "url": "others/qr-code.html",
    "revision": "bc0b504d1ee6df01b1937c7b61d9409d"
  },
  {
    "url": "others/qt4.html",
    "revision": "4b77429a48497aa0b381f8f27619233f"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "155428cba8768c4b67f235ecadc3c5cf"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "2ca2b939d783a73af8c7cdb3790add82"
  },
  {
    "url": "others/sd-card.html",
    "revision": "562f046ca0f35cc2802a1eda20d53cf6"
  },
  {
    "url": "others/sdn.html",
    "revision": "8f738cdd2639ebb312c02b27dabec790"
  },
  {
    "url": "others/star-uml.html",
    "revision": "f7edcd5caca27f456b9584315e00829f"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "feb0a17029c2694a5df622c8938d236c"
  },
  {
    "url": "others/verilog.html",
    "revision": "e938aae364866bf40b58e2e27ad78b3d"
  },
  {
    "url": "others/vue.html",
    "revision": "a2090360c879477ca7e53368f4973ea1"
  },
  {
    "url": "others/w5500.html",
    "revision": "655f9b3355eecdb6dd44989402a29c6d"
  },
  {
    "url": "others/w7500.html",
    "revision": "1e14bd21f9b07785b835b1c0c6be4b24"
  },
  {
    "url": "resume.html",
    "revision": "6f163f2be7f866dacb2293e684e19d4f"
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
