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
    "revision": "df943b796dc0f5b230cf7f3e9b859a28"
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
    "url": "assets/js/12.eb11126a.js",
    "revision": "2c8f65f071d0f8d6841407ffc5a74b75"
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
    "url": "assets/js/21.4406b39e.js",
    "revision": "703e6c13c9e6e77e50991b697e33d701"
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
    "url": "assets/js/3.f84f9de6.js",
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
    "url": "assets/js/53.f0a61fb0.js",
    "revision": "ee7f711a0e4e2ab09190be3f4faa39c6"
  },
  {
    "url": "assets/js/54.550ce1ed.js",
    "revision": "2659efa40abe0fe42b9108ac7ed49a8f"
  },
  {
    "url": "assets/js/55.8b9c26ea.js",
    "revision": "c9915365545a703885bf72cf77f1d683"
  },
  {
    "url": "assets/js/56.866f759e.js",
    "revision": "61e8a537b181bfa07afecd5c89c51481"
  },
  {
    "url": "assets/js/57.885fa78b.js",
    "revision": "49818be0a4bb2362b9c597716dbb50fb"
  },
  {
    "url": "assets/js/58.4f010f29.js",
    "revision": "83fb6d9dea75b4a1168b727ae7177a31"
  },
  {
    "url": "assets/js/59.6405def7.js",
    "revision": "a28967e6e75a37ab319287f0271560a5"
  },
  {
    "url": "assets/js/6.704d0670.js",
    "revision": "c6d02416b880aa5619551e2e0c2106fb"
  },
  {
    "url": "assets/js/60.dbce7b5d.js",
    "revision": "e75bb94e0f265781697be16c6cd29fb3"
  },
  {
    "url": "assets/js/61.aaf8bd80.js",
    "revision": "cb05d1159b575a5b8917f5f45ee41841"
  },
  {
    "url": "assets/js/62.82d7a168.js",
    "revision": "7e911fd4fb6926665ee59e226449883f"
  },
  {
    "url": "assets/js/63.a8c5817c.js",
    "revision": "325c551abf1a0cbf5ff96bf099d380e2"
  },
  {
    "url": "assets/js/64.2be5a869.js",
    "revision": "05ea7456a5936b73d544e17f96e64ee7"
  },
  {
    "url": "assets/js/65.9b1ef8dc.js",
    "revision": "10ca15a7bb7978b2cb0f956153b2c7f5"
  },
  {
    "url": "assets/js/66.069381cd.js",
    "revision": "19c1d8ca9dfe17aaef0c418dc86a35e0"
  },
  {
    "url": "assets/js/67.43d7ef6e.js",
    "revision": "3f821b18cb323a7131745d81bbc1cf99"
  },
  {
    "url": "assets/js/68.4c181b32.js",
    "revision": "0cd9162187bc73720f1377a8a742f570"
  },
  {
    "url": "assets/js/69.cbae029d.js",
    "revision": "4799543471a52051b20a36a261e16a54"
  },
  {
    "url": "assets/js/7.ab9fc71a.js",
    "revision": "b86c0e091d6a186f295867a218054890"
  },
  {
    "url": "assets/js/70.50b546ed.js",
    "revision": "b2b7678605e83c59f5b9c6721fec8b39"
  },
  {
    "url": "assets/js/71.98fcc171.js",
    "revision": "db2741ecfab29da47ca454b39a6fc01b"
  },
  {
    "url": "assets/js/72.bb048ac9.js",
    "revision": "cd0f726038d9db2557f828ee15d4ae02"
  },
  {
    "url": "assets/js/73.e5a9b21f.js",
    "revision": "ee1578320367b4e340dcf43858d8aa58"
  },
  {
    "url": "assets/js/74.42ecf6ab.js",
    "revision": "5e448d17de067fe093e6fe66f0184aa3"
  },
  {
    "url": "assets/js/75.02d59071.js",
    "revision": "0c671e65381dc3679f683fd25c3cddb1"
  },
  {
    "url": "assets/js/76.0a03f86b.js",
    "revision": "3e8edb61d0e24ff5365e1a8b390e5de6"
  },
  {
    "url": "assets/js/77.dc0e7011.js",
    "revision": "19a2fa119e2e280017decc7d0509f501"
  },
  {
    "url": "assets/js/78.e7c878cf.js",
    "revision": "0c1fcdbdf733305a4a05910bac840285"
  },
  {
    "url": "assets/js/79.bf51f552.js",
    "revision": "23f3411fe810846eb0b043bcbfe6c622"
  },
  {
    "url": "assets/js/8.6c290bcf.js",
    "revision": "3c4125781114aaf20d6dddef185198e5"
  },
  {
    "url": "assets/js/80.1eac70f1.js",
    "revision": "04b36e844ad9e1436f106e20c5038ace"
  },
  {
    "url": "assets/js/81.078e4670.js",
    "revision": "611ca73079eb3d52c373ca7f6de8c6cc"
  },
  {
    "url": "assets/js/82.8515a92b.js",
    "revision": "0cffbdb6e82f4df3193259edc9a2126f"
  },
  {
    "url": "assets/js/83.a904f942.js",
    "revision": "818f5237b24d21e22a1b8687f9ef5b99"
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
    "url": "assets/js/app.44a675e3.js",
    "revision": "8c2d6fa9f217df643847295eed20bcbf"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "45b108407d1613f6e63fb86ec6a8837e"
  },
  {
    "url": "cs/bash.html",
    "revision": "e198f0595af0700e24023d65d1021080"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "3fadd418779a0812fc226f7e1607400b"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "ace4d3ef6c19fdb9b39b4124517b2bc7"
  },
  {
    "url": "cs/cmake.html",
    "revision": "da5fe508d8566908947ccf3cc93b6e7c"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "aabc26db7ba5f7f0c9715e1a50918347"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "73ea3dad692687725a07245bb12e2170"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "fe4fa100c2c9012222b5b54026c607d8"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "03c777205064dafa2427338ef7dfc298"
  },
  {
    "url": "cs/git.html",
    "revision": "9fbed6b05ec3368aeb7af8e484abdab8"
  },
  {
    "url": "cs/index.html",
    "revision": "f404c6e84652bdaa77419ce4ee85dbc2"
  },
  {
    "url": "cs/iptables.html",
    "revision": "8a5eaffcd9486d17acb1d4f404ff9a51"
  },
  {
    "url": "cs/keras.html",
    "revision": "6fafda349f0012bdc453d4eb781d8dd7"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "62280994fe865a3ba08305407f716471"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "8ad3b0f1d541cc7d398e82cce636e5b3"
  },
  {
    "url": "cs/lwip.html",
    "revision": "3a6e3b4eb47d8a506eac3b22206b6c2a"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "09dd1ce7d78d5d8edf511603db8cfb5d"
  },
  {
    "url": "cs/scala.html",
    "revision": "08c65bee68646d512de391a017a9e67e"
  },
  {
    "url": "ee/about.html",
    "revision": "fa96f17cbf0965a4b09ecb79cc8340d5"
  },
  {
    "url": "ee/chisel.html",
    "revision": "83d5fc5ade413f8aa7676c976c7d080a"
  },
  {
    "url": "ee/esp32.html",
    "revision": "b775b72ba9643d8b118a673280416432"
  },
  {
    "url": "ee/index.html",
    "revision": "e076679ce17a3180e95e0a82ff5e2633"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "8b982e746dd58edc676ce639aec94f96"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "70fc56520d01fc5918416f0a2b269f7e"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "8bbb956db33040a9cde34416bbb1c388"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "e3cca65a2cec15b37f01b00354e9fa58"
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
    "revision": "8d110155e6849907b4a34e7d1f3da79f"
  },
  {
    "url": "others/about.html",
    "revision": "5d8fa217fb67c0a25446a3cb91cd45a2"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "6b3759d4c80d619181ec1a9f38177728"
  },
  {
    "url": "others/android-studio.html",
    "revision": "1bd21525fe27e85a8fccc4cd10530f7a"
  },
  {
    "url": "others/android.html",
    "revision": "89756843fea705e508b65c2ffd966b1f"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "7b12089474d2dc4cee03f326af7a352e"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "579f7fa01cbf9a21f9b4f8c99d4335b0"
  },
  {
    "url": "others/css.html",
    "revision": "4fe94edf552808f69184fd4dab2f3847"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "81b8506ba124375becd7b98fd16cd0d7"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "f06e81e959686ed637fbeb2b526e1d63"
  },
  {
    "url": "others/english-writting.html",
    "revision": "3b1375bc1a8b3bd7fac9aac75312fad8"
  },
  {
    "url": "others/freertos.html",
    "revision": "5e8d2f76302fb9a93369ae42453d0cc5"
  },
  {
    "url": "others/gns3.html",
    "revision": "d06e81ed3e881831b35577b5703024d6"
  },
  {
    "url": "others/gps.html",
    "revision": "96c6d0caff709a1a318887fb31fbe497"
  },
  {
    "url": "others/html5.html",
    "revision": "1069af02d842fb7cb59a7278f78a2246"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "2410a1a6875c970c883ea93d6a17077e"
  },
  {
    "url": "others/index.html",
    "revision": "58a3f344a84e9e5b940bfdc40bba1b56"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "0e0887dabefd076cb80994d8d0ad50c7"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "902c9625cac438b7dbb551f0648e27ed"
  },
  {
    "url": "others/javascript.html",
    "revision": "301e9150c3aacfcc11d2853d7f8d6cdf"
  },
  {
    "url": "others/json.html",
    "revision": "420effc7b555135f7f1fe87666343604"
  },
  {
    "url": "others/latex.html",
    "revision": "6d66a005e776bf3fffec2e2da99344d9"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "9672822cb9569237a0a1897a0feab95a"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "6e18b799eb839276116f3d6b3d1746a7"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "fac38f4d5ccdfe372ece6d3efafde2bd"
  },
  {
    "url": "others/markdown.html",
    "revision": "ab35292cdfb33cce27feb692b6f58917"
  },
  {
    "url": "others/matlab.html",
    "revision": "5c57a810b78efc2919fa7cf0dd636f84"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "533b2a83488359c1847d04d8cb66b52e"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "c9119363bc30acc0611f530651147b9e"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "dffb7d830a761992b216326b6f10039a"
  },
  {
    "url": "others/network-security.html",
    "revision": "b5b0a4ca2a2658ac6e3b904a48c1cac0"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "ad8876c3d342d6b50aca72ab12112737"
  },
  {
    "url": "others/oral_english.html",
    "revision": "065e3b08ad4569189223ffd27db1a7cf"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "8bd61f63ee623d2be84370b49a0f2254"
  },
  {
    "url": "others/poe.html",
    "revision": "8349d9850c48e47be7436d0b9e0fe7a2"
  },
  {
    "url": "others/pyside2.html",
    "revision": "eef115ac91c245f86c433669b88b9d24"
  },
  {
    "url": "others/python-socket.html",
    "revision": "22e30b218ea643549a8ddb6871d572b4"
  },
  {
    "url": "others/python.html",
    "revision": "69b5781ef02f580074a5a13163a0c674"
  },
  {
    "url": "others/q-learning.html",
    "revision": "ae7439dc9d31eb313622579deac3a01a"
  },
  {
    "url": "others/qr-code.html",
    "revision": "3e6ba7df1cf38fd995166a67be58de49"
  },
  {
    "url": "others/qt4.html",
    "revision": "dce14b2891c10e582cb9d888efd6df11"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "7c80e30a0cbc82174c14040d4d51050a"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "5f44662bcbedd2a7feb9f31f602049c0"
  },
  {
    "url": "others/sd-card.html",
    "revision": "d2a35c38329117042d949e593f98fff6"
  },
  {
    "url": "others/sdn.html",
    "revision": "3b6ef1923d0729ca16c668997961504f"
  },
  {
    "url": "others/star-uml.html",
    "revision": "6a2db6812ef2b87d8e3d7acc712feb60"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "84f52c032acd70c459e9c90047d8dd29"
  },
  {
    "url": "others/verilog.html",
    "revision": "29f1abdd31902e7cc463e82ea05d564a"
  },
  {
    "url": "others/vue.html",
    "revision": "e97d8da4571afe5343451d203232e6b1"
  },
  {
    "url": "others/w5500.html",
    "revision": "306e5478bbce15b1c7f2163586d95860"
  },
  {
    "url": "others/w7500.html",
    "revision": "8b3564bbae2951344863cd81c645bc0d"
  },
  {
    "url": "resume.html",
    "revision": "204b2251b2607d7aacb610c3d22a856c"
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
