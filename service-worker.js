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
    "revision": "8fd88e3fe572109f2dc02929b0f576d7"
  },
  {
    "url": "assets/css/0.styles.0ce263ec.css",
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
    "url": "assets/js/10.527cd05e.js",
    "revision": "d82c6bf33d698fbf6ffe62c170d0dcac"
  },
  {
    "url": "assets/js/11.81ea5d89.js",
    "revision": "bf1b41c918e91dbc972bbc156d0caaf3"
  },
  {
    "url": "assets/js/12.3d254077.js",
    "revision": "2834be9e7b0feceab4fd2d21fea47f3f"
  },
  {
    "url": "assets/js/13.eed0497e.js",
    "revision": "fc10912491ddaa3858bf868d306d7a27"
  },
  {
    "url": "assets/js/14.57dfa7c0.js",
    "revision": "251005dc3f74689f7c2c969032385a10"
  },
  {
    "url": "assets/js/15.59568794.js",
    "revision": "f55c1eb5758a4ebf4bc0bb9712bca0e9"
  },
  {
    "url": "assets/js/16.b5747841.js",
    "revision": "d4e02108e8993274e5249c795474d37c"
  },
  {
    "url": "assets/js/17.1f7b3bc3.js",
    "revision": "d11b82308db98e1dbd3bf9314da4ac16"
  },
  {
    "url": "assets/js/18.4e628601.js",
    "revision": "c9132c4dc619d9940586aadb62b57787"
  },
  {
    "url": "assets/js/19.adb4926d.js",
    "revision": "5e9b7b964f6d30fbc6386c9fc35997aa"
  },
  {
    "url": "assets/js/2.74265b2d.js",
    "revision": "104f01856291a27f6bc041c8f60d3b82"
  },
  {
    "url": "assets/js/20.62ab3f2d.js",
    "revision": "9d134cc32c247e3980c59fd9f73addf5"
  },
  {
    "url": "assets/js/21.0b9407bc.js",
    "revision": "03b2c0b03b094efc25a760fbdc740765"
  },
  {
    "url": "assets/js/22.a89b11f8.js",
    "revision": "d62e7591ae0bba984a7ec4a79cf7e09b"
  },
  {
    "url": "assets/js/23.359c2240.js",
    "revision": "601d4b587451a708f93cdc0b8a949d48"
  },
  {
    "url": "assets/js/24.25c5edaf.js",
    "revision": "0bbd8a153a7ac07e8de7fb14735777be"
  },
  {
    "url": "assets/js/25.eb0ad7a8.js",
    "revision": "ebe5cda4e2b7839b1a951bd28cb16760"
  },
  {
    "url": "assets/js/26.80ad67f0.js",
    "revision": "369b41410455701e01bd4019ec57a6b3"
  },
  {
    "url": "assets/js/27.ab30de73.js",
    "revision": "067916794286db451a36e8ec6a9c54a0"
  },
  {
    "url": "assets/js/28.d936eed0.js",
    "revision": "2624b8be6597523d2d68ccfe5a74f79b"
  },
  {
    "url": "assets/js/29.df929737.js",
    "revision": "a7b9b9468fa6ba8af372449069088da6"
  },
  {
    "url": "assets/js/3.d80f70ec.js",
    "revision": "c45da98c58197b48564feed2c9a65590"
  },
  {
    "url": "assets/js/30.456ca77e.js",
    "revision": "9623d8eb7fb7cd4ff946b2d7ada3b3a2"
  },
  {
    "url": "assets/js/31.88f48861.js",
    "revision": "826eb806d209f53acf31d3e375810674"
  },
  {
    "url": "assets/js/32.9694ff86.js",
    "revision": "f56ce816781d35a55bca85c26209e88d"
  },
  {
    "url": "assets/js/33.f72e1be6.js",
    "revision": "ac07780543eafe87b8bdc17988ad58f0"
  },
  {
    "url": "assets/js/34.e1295f09.js",
    "revision": "e58e39f98dcb2f3d4bd2fa768c1ecb45"
  },
  {
    "url": "assets/js/35.12270068.js",
    "revision": "31f1be0cee7176f81b1106efb6912f4e"
  },
  {
    "url": "assets/js/36.1bc50caf.js",
    "revision": "08581b3260d229a79f9385e4e39695c8"
  },
  {
    "url": "assets/js/37.ff275c26.js",
    "revision": "9af2912b914d379e7a5104a0dc28cf24"
  },
  {
    "url": "assets/js/38.c9219210.js",
    "revision": "2ac3d3a42d464dfa89d7a2b43b2c7a8f"
  },
  {
    "url": "assets/js/39.458a4c92.js",
    "revision": "a9a0e3b55696279a92e5409434dfcaee"
  },
  {
    "url": "assets/js/4.4c716575.js",
    "revision": "c8acd3ddaa3c0146accc762f02af6641"
  },
  {
    "url": "assets/js/40.ef1a0ae0.js",
    "revision": "21fa450851f9e06eb16e2739ebeae035"
  },
  {
    "url": "assets/js/41.16cbf99a.js",
    "revision": "42c550c9e9ea607e7942ab0d1a551f8c"
  },
  {
    "url": "assets/js/42.5101c369.js",
    "revision": "6efb59ed336c4856ebeb598446a60856"
  },
  {
    "url": "assets/js/43.5cbfda90.js",
    "revision": "7fece682b363897446aa7d4ac16c4a15"
  },
  {
    "url": "assets/js/44.2a804ab2.js",
    "revision": "50098e92de7d62194d8c6529389aad4e"
  },
  {
    "url": "assets/js/45.3381e634.js",
    "revision": "c06e16e7fe0e381848e3e8883b69bc61"
  },
  {
    "url": "assets/js/46.0c22af93.js",
    "revision": "2c66b35c7b2178dab7f614a6f120778a"
  },
  {
    "url": "assets/js/47.a4cfc04b.js",
    "revision": "81c62a4d538499cb4f0aa131373118b6"
  },
  {
    "url": "assets/js/48.1d186a8d.js",
    "revision": "876c33186c874ba68370b44ae391e291"
  },
  {
    "url": "assets/js/49.93b7c86c.js",
    "revision": "321084f5391e045604827f67f7ae6ccb"
  },
  {
    "url": "assets/js/5.ac10ecc4.js",
    "revision": "a3576b98b373d7f051381c8d7050d8de"
  },
  {
    "url": "assets/js/50.c783852a.js",
    "revision": "f9364ad9f22ba031dcd0cd63649f8fa2"
  },
  {
    "url": "assets/js/51.1c6ef221.js",
    "revision": "c5ff3dd016ff8ac6af42778c29410473"
  },
  {
    "url": "assets/js/52.c7045772.js",
    "revision": "4e5cc0f89e89c71017aa626aac020a36"
  },
  {
    "url": "assets/js/53.1f5f196d.js",
    "revision": "67118439d412291636e4abd26f8b94bd"
  },
  {
    "url": "assets/js/54.43aeabb1.js",
    "revision": "156397743d4c7278190a6747031d456c"
  },
  {
    "url": "assets/js/55.2ad4e638.js",
    "revision": "08c3249a432d7371fb654604c72d78fe"
  },
  {
    "url": "assets/js/56.7a7c4a0b.js",
    "revision": "0b81b8ffa35d9632d63baa0e4ee6f713"
  },
  {
    "url": "assets/js/57.cd78d3dd.js",
    "revision": "4e6e59129b042911390e21ed08b2f811"
  },
  {
    "url": "assets/js/58.7f92da2e.js",
    "revision": "e71d0e595f8f65be31b6038d8f8323d7"
  },
  {
    "url": "assets/js/59.62fb3c83.js",
    "revision": "a6ddcbe3c748bb085c7fa30098dfae4c"
  },
  {
    "url": "assets/js/6.0907cae4.js",
    "revision": "df429543af0751b4e053ad146d67bb2a"
  },
  {
    "url": "assets/js/60.2d36ba8b.js",
    "revision": "60a2870c6e7730db0112dbbea032d3df"
  },
  {
    "url": "assets/js/61.b5c03b0e.js",
    "revision": "80c34db4d1bd4ba0bda36ce03f7fc344"
  },
  {
    "url": "assets/js/62.67a1fcee.js",
    "revision": "b12636930d6a7929b9170d5b03f3a4c3"
  },
  {
    "url": "assets/js/63.5052b991.js",
    "revision": "8421c2a3087834d2843beda55945beca"
  },
  {
    "url": "assets/js/64.52f228d6.js",
    "revision": "297b9974831a716fc1fb0c4ceefb5520"
  },
  {
    "url": "assets/js/65.2e9e02b0.js",
    "revision": "d280283f50d2690d0167ad53549dc5c1"
  },
  {
    "url": "assets/js/66.e4cd2d1f.js",
    "revision": "090b4031eb5753f9e82ffb967b2a813e"
  },
  {
    "url": "assets/js/67.426b97f5.js",
    "revision": "6cf2c364585400c3b8c2eba9ff5782a9"
  },
  {
    "url": "assets/js/68.267c7d54.js",
    "revision": "0ffb18c39c0fe93722da707a20fd3ef9"
  },
  {
    "url": "assets/js/69.1295eb49.js",
    "revision": "cc0ca324a7fbb9179f8b2fad9a217084"
  },
  {
    "url": "assets/js/7.21cafcb4.js",
    "revision": "730453e2cfd4c6f5568be32954920aac"
  },
  {
    "url": "assets/js/70.c4f01211.js",
    "revision": "8a3e1e20f78b54a84eeddedb4f9c36ac"
  },
  {
    "url": "assets/js/71.8c200a96.js",
    "revision": "c15723ca7f1a6200c76dd885c07f7348"
  },
  {
    "url": "assets/js/72.4490a4ab.js",
    "revision": "7d5a0fd5416b8eae8e401bf9e66894ac"
  },
  {
    "url": "assets/js/73.f3fcb2a4.js",
    "revision": "966d3353877f2f7882a9936c9dd58c4e"
  },
  {
    "url": "assets/js/74.abec6d48.js",
    "revision": "3f6ef3894e27248ce782a78a8be11e9a"
  },
  {
    "url": "assets/js/75.cbec3d5c.js",
    "revision": "c7f5dd418ec2a860ae0b92ea70f45a29"
  },
  {
    "url": "assets/js/76.72d06b5e.js",
    "revision": "97a1e425521cc260d31d62eb049d08ff"
  },
  {
    "url": "assets/js/77.941e9575.js",
    "revision": "7b8441d7d089ab9b5103bf1f30caf7b6"
  },
  {
    "url": "assets/js/78.c0818a95.js",
    "revision": "61c8c219725d9c372e3690b5b1693bff"
  },
  {
    "url": "assets/js/79.0c6f29d9.js",
    "revision": "eabaa892b45187c1b572972a6aa9202a"
  },
  {
    "url": "assets/js/8.b88bd42c.js",
    "revision": "3e8165a9ce185b39a99538cf20722260"
  },
  {
    "url": "assets/js/80.07c95395.js",
    "revision": "a673d0e58b92bc19ba5eecf93627255a"
  },
  {
    "url": "assets/js/81.be6dd62d.js",
    "revision": "e252b6a7223396d790ed0c9f1a9335d5"
  },
  {
    "url": "assets/js/82.5c245363.js",
    "revision": "d56a6a4d5858582ebd5df11628177844"
  },
  {
    "url": "assets/js/83.fe19132d.js",
    "revision": "6c572f2c76dd33bed1b5f297dc04b6f6"
  },
  {
    "url": "assets/js/84.84be36e5.js",
    "revision": "9a76212d2150ba31a8d8f3a5d925d976"
  },
  {
    "url": "assets/js/85.5cb0141a.js",
    "revision": "8c42f6cb023f67ff801031064d580d98"
  },
  {
    "url": "assets/js/9.d1fbc1ed.js",
    "revision": "a05fe78b5979081e345578656d19b54a"
  },
  {
    "url": "assets/js/app.91fe0589.js",
    "revision": "eab71814ed7517d7d043b32fb00b7c8c"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "b23f59daa06beec6457e9c5f6975e16b"
  },
  {
    "url": "cs/bash.html",
    "revision": "a9006b10fc4c6248e3628e7bd2f2c4ff"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "a3b7e0ace4a4c27b92a2f76b19c9d241"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "a63a2623d69e49aae1a6a4c8bc857905"
  },
  {
    "url": "cs/cmake.html",
    "revision": "fa11e842e443b726468e6a8731846cb5"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "b5ca2aec0c448d5104f270094781de94"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "28274d138c7b193831ccc293e4474e0f"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "ff80278e76f0ba6165afad0a044d2de3"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "465711b932b1514a8b8bb61ba6fad4d0"
  },
  {
    "url": "cs/git.html",
    "revision": "c72a261c30b36bf39c6c458656660ade"
  },
  {
    "url": "cs/index.html",
    "revision": "b7628e62ce78125415be5caf202b533e"
  },
  {
    "url": "cs/iptables.html",
    "revision": "2bee4f1b05e97ae1bb444eb2f6b93e5a"
  },
  {
    "url": "cs/keras.html",
    "revision": "2cdbf9e590a971494287096152adbf3b"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "2956b241656a95313e3ff43a3cc81c35"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "67ea73f324d266a2a667c3aa2e77bbbd"
  },
  {
    "url": "cs/lwip.html",
    "revision": "172c5e762c7e85803f1be587142cb849"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "bada2e3fcac0d244b5b8668eb951cbec"
  },
  {
    "url": "cs/risc-v.html",
    "revision": "9595628afa23fdbaa4a3b6dde5c3073c"
  },
  {
    "url": "cs/scala.html",
    "revision": "e56b2512df7c0c432f5cf14cebe6186c"
  },
  {
    "url": "cs/xtensa.html",
    "revision": "d9c07e1a236f86e002f383d71883aa77"
  },
  {
    "url": "ee/about.html",
    "revision": "316efeb4841b9a050f1a1cf4f652b79e"
  },
  {
    "url": "ee/chisel.html",
    "revision": "4783b2b6d0f9662f95fb28c0c174a2f7"
  },
  {
    "url": "ee/esp32.html",
    "revision": "8d6e5200d2d681d704588318efc6b5bd"
  },
  {
    "url": "ee/index.html",
    "revision": "7a37a204a86354a6c44f75324d3ef733"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "252c7240c1fe04635bc3a71b12281b51"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "e2e8dc87466d3eb658f6d0aeba627bdf"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "b14bfdb5f8017bddc2d9a30ee1ed811d"
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
    "revision": "89c73ad243b6da61044f70566fb3e22b"
  },
  {
    "url": "others/about.html",
    "revision": "86ebe70dd569fe09a6dd2552d6a5d159"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "6e1edf7ef9b11536219f1c6611651fa4"
  },
  {
    "url": "others/android-studio.html",
    "revision": "08bd97977c8ca73574e3ca3ce154acc1"
  },
  {
    "url": "others/android.html",
    "revision": "4fb1806c415c7c719069a895d4d11d79"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "182ad8ff92e1409b609653190ea4e019"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "903479d342cd02dbf65128640627de83"
  },
  {
    "url": "others/css.html",
    "revision": "090d0e03987966de0922e52a03c6af54"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "abaa92250877ed8f680f7f4964362810"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "c7930eb10fdae4975d59ee027ab210a9"
  },
  {
    "url": "others/english-writting.html",
    "revision": "e6cbb8d0238ef7c66db8d6c4d7c20a22"
  },
  {
    "url": "others/freertos.html",
    "revision": "3affe922239a138437bc2a373aff9d7b"
  },
  {
    "url": "others/gns3.html",
    "revision": "be711a2ca2c70b6dce5c700f54eef2f3"
  },
  {
    "url": "others/gps.html",
    "revision": "b8be3f208c7d808d77c10e817c150f81"
  },
  {
    "url": "others/html5.html",
    "revision": "47dc5d343f85fc2dfa3d544f8723fbe5"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "507e21cbc5b53149d3edf1119f2dac64"
  },
  {
    "url": "others/index.html",
    "revision": "8f7f3d68c1ee16c2adfff0640379c43a"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "ccaa4130dc612b29b42c5209b58dd98a"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "c30899efc2bc43c1f60c332be26a65e0"
  },
  {
    "url": "others/javascript.html",
    "revision": "a698d90f61158518810c0bef7d802821"
  },
  {
    "url": "others/json.html",
    "revision": "47cae545193f247af6e4a6e1c6888cc3"
  },
  {
    "url": "others/latex.html",
    "revision": "4834d3c9f871f145822790cc78fd8f4b"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "6494791737aee33022270361670c2af5"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "da91ef8f03c378f8966e952f561c8d6c"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "14b4f99b3ac6ec8d8ee1fccd3fe775cf"
  },
  {
    "url": "others/markdown.html",
    "revision": "3811f6e641516db4c75349b1a35bf4de"
  },
  {
    "url": "others/matlab.html",
    "revision": "9c0f3f1b12311ca89d178695ed8e0d3b"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "29747cb1c73b2ab85ce4cf3ab4f22743"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "ec02b8501ef72a994fd9ec2beba2c818"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "5708f782ba5a16b40bc7ba569b0528cc"
  },
  {
    "url": "others/network-security.html",
    "revision": "692f47db7bcffd4a2ef4e4659553ad8b"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "bf14faa1e9d05686fb3c1ad64baf3a16"
  },
  {
    "url": "others/oral_english.html",
    "revision": "7cc9ccc8141343300620d940e57da9cc"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "03cd69b8a759443ec13ec1672a03a740"
  },
  {
    "url": "others/poe.html",
    "revision": "76d8781e6f7abe0407f4ef57ff504863"
  },
  {
    "url": "others/pyside2.html",
    "revision": "2b7a6b6920a8cabe2f091edc11da4042"
  },
  {
    "url": "others/python-socket.html",
    "revision": "46b6a7bdfc4b3f359a9d670b66f713a9"
  },
  {
    "url": "others/python.html",
    "revision": "06e4f470869e232d6405663bf86f0659"
  },
  {
    "url": "others/q-learning.html",
    "revision": "c406cd8c2c07c471e0b8b5c57c0554db"
  },
  {
    "url": "others/qr-code.html",
    "revision": "cc75f60c8d02154a54aa8af8667d362a"
  },
  {
    "url": "others/qt4.html",
    "revision": "60525acc006fa1daa9fcee499a62e205"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "45b2c26f468d7bb5d4767b24aa7fcc56"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "e04ca7c6c20874daba40fa9d260e3c73"
  },
  {
    "url": "others/sd-card.html",
    "revision": "d53c37b2d01f1279510d60ef018f084f"
  },
  {
    "url": "others/sdn.html",
    "revision": "dd64061aa8db441bf61c117e8510e4d4"
  },
  {
    "url": "others/star-uml.html",
    "revision": "798eebb5409fea5f0bef1f465cc508da"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "a89810ee71fc2719e8dd4e981ddec30c"
  },
  {
    "url": "others/verilog.html",
    "revision": "8f4e7fa9569d4d5e148ed5ad245a07e4"
  },
  {
    "url": "others/vue.html",
    "revision": "62b2139425364e21e50c294f345d9b7d"
  },
  {
    "url": "others/w5500.html",
    "revision": "4860f1b029fd6be19b48bab0ec722834"
  },
  {
    "url": "others/w7500.html",
    "revision": "39a53aed1f6dec01cb80f59a447de4c1"
  },
  {
    "url": "resume.html",
    "revision": "e9bc189c970f5213f7ce113116ccd359"
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
