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
    "revision": "875bfafd79d25c326897a97b6c03bfdd"
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
    "url": "assets/js/10.a0264db2.js",
    "revision": "d82c6bf33d698fbf6ffe62c170d0dcac"
  },
  {
    "url": "assets/js/11.66ef6683.js",
    "revision": "bf1b41c918e91dbc972bbc156d0caaf3"
  },
  {
    "url": "assets/js/12.1a8fe7ff.js",
    "revision": "2834be9e7b0feceab4fd2d21fea47f3f"
  },
  {
    "url": "assets/js/13.5200b09a.js",
    "revision": "fc10912491ddaa3858bf868d306d7a27"
  },
  {
    "url": "assets/js/14.32db8b11.js",
    "revision": "251005dc3f74689f7c2c969032385a10"
  },
  {
    "url": "assets/js/15.7c9cbd4a.js",
    "revision": "f55c1eb5758a4ebf4bc0bb9712bca0e9"
  },
  {
    "url": "assets/js/16.cb02d74c.js",
    "revision": "d4e02108e8993274e5249c795474d37c"
  },
  {
    "url": "assets/js/17.d7f028cf.js",
    "revision": "d11b82308db98e1dbd3bf9314da4ac16"
  },
  {
    "url": "assets/js/18.7356b0d8.js",
    "revision": "c9132c4dc619d9940586aadb62b57787"
  },
  {
    "url": "assets/js/19.6bb299fc.js",
    "revision": "5e9b7b964f6d30fbc6386c9fc35997aa"
  },
  {
    "url": "assets/js/2.7ec0cc9f.js",
    "revision": "104f01856291a27f6bc041c8f60d3b82"
  },
  {
    "url": "assets/js/20.f08a790a.js",
    "revision": "9d134cc32c247e3980c59fd9f73addf5"
  },
  {
    "url": "assets/js/21.e90c56f9.js",
    "revision": "03b2c0b03b094efc25a760fbdc740765"
  },
  {
    "url": "assets/js/22.eedd0a60.js",
    "revision": "d62e7591ae0bba984a7ec4a79cf7e09b"
  },
  {
    "url": "assets/js/23.8b19bd6f.js",
    "revision": "601d4b587451a708f93cdc0b8a949d48"
  },
  {
    "url": "assets/js/24.fd30fd56.js",
    "revision": "0bbd8a153a7ac07e8de7fb14735777be"
  },
  {
    "url": "assets/js/25.01a46cc4.js",
    "revision": "ebe5cda4e2b7839b1a951bd28cb16760"
  },
  {
    "url": "assets/js/26.ec58ccf1.js",
    "revision": "369b41410455701e01bd4019ec57a6b3"
  },
  {
    "url": "assets/js/27.d92c96fe.js",
    "revision": "067916794286db451a36e8ec6a9c54a0"
  },
  {
    "url": "assets/js/28.7639fb6a.js",
    "revision": "ac5136bae2aa18fd8782f96182ec6fe8"
  },
  {
    "url": "assets/js/29.05b06031.js",
    "revision": "a7b9b9468fa6ba8af372449069088da6"
  },
  {
    "url": "assets/js/3.625dbf16.js",
    "revision": "c45da98c58197b48564feed2c9a65590"
  },
  {
    "url": "assets/js/30.8e07822b.js",
    "revision": "9623d8eb7fb7cd4ff946b2d7ada3b3a2"
  },
  {
    "url": "assets/js/31.be067f27.js",
    "revision": "826eb806d209f53acf31d3e375810674"
  },
  {
    "url": "assets/js/32.16af990a.js",
    "revision": "f56ce816781d35a55bca85c26209e88d"
  },
  {
    "url": "assets/js/33.b7e51836.js",
    "revision": "ac07780543eafe87b8bdc17988ad58f0"
  },
  {
    "url": "assets/js/34.4e291fac.js",
    "revision": "e58e39f98dcb2f3d4bd2fa768c1ecb45"
  },
  {
    "url": "assets/js/35.39e0f051.js",
    "revision": "31f1be0cee7176f81b1106efb6912f4e"
  },
  {
    "url": "assets/js/36.0277a810.js",
    "revision": "08581b3260d229a79f9385e4e39695c8"
  },
  {
    "url": "assets/js/37.9f437836.js",
    "revision": "9af2912b914d379e7a5104a0dc28cf24"
  },
  {
    "url": "assets/js/38.b601b31a.js",
    "revision": "2ac3d3a42d464dfa89d7a2b43b2c7a8f"
  },
  {
    "url": "assets/js/39.ff4cbe99.js",
    "revision": "a9a0e3b55696279a92e5409434dfcaee"
  },
  {
    "url": "assets/js/4.dc932efd.js",
    "revision": "c8acd3ddaa3c0146accc762f02af6641"
  },
  {
    "url": "assets/js/40.ec88b722.js",
    "revision": "21fa450851f9e06eb16e2739ebeae035"
  },
  {
    "url": "assets/js/41.2064ff11.js",
    "revision": "42c550c9e9ea607e7942ab0d1a551f8c"
  },
  {
    "url": "assets/js/42.d102e828.js",
    "revision": "6efb59ed336c4856ebeb598446a60856"
  },
  {
    "url": "assets/js/43.ed7916dd.js",
    "revision": "7fece682b363897446aa7d4ac16c4a15"
  },
  {
    "url": "assets/js/44.90058a2d.js",
    "revision": "50098e92de7d62194d8c6529389aad4e"
  },
  {
    "url": "assets/js/45.83bea6a0.js",
    "revision": "c06e16e7fe0e381848e3e8883b69bc61"
  },
  {
    "url": "assets/js/46.fb528dc3.js",
    "revision": "2c66b35c7b2178dab7f614a6f120778a"
  },
  {
    "url": "assets/js/47.64167282.js",
    "revision": "81c62a4d538499cb4f0aa131373118b6"
  },
  {
    "url": "assets/js/48.8c3b6a5b.js",
    "revision": "876c33186c874ba68370b44ae391e291"
  },
  {
    "url": "assets/js/49.e7b9a6c8.js",
    "revision": "321084f5391e045604827f67f7ae6ccb"
  },
  {
    "url": "assets/js/5.3bb5e1cd.js",
    "revision": "a3576b98b373d7f051381c8d7050d8de"
  },
  {
    "url": "assets/js/50.a0d054e3.js",
    "revision": "f9364ad9f22ba031dcd0cd63649f8fa2"
  },
  {
    "url": "assets/js/51.02402dd3.js",
    "revision": "c5ff3dd016ff8ac6af42778c29410473"
  },
  {
    "url": "assets/js/52.fa4ec6d2.js",
    "revision": "4e5cc0f89e89c71017aa626aac020a36"
  },
  {
    "url": "assets/js/53.142272e7.js",
    "revision": "67118439d412291636e4abd26f8b94bd"
  },
  {
    "url": "assets/js/54.043553ed.js",
    "revision": "156397743d4c7278190a6747031d456c"
  },
  {
    "url": "assets/js/55.3e9cc6f5.js",
    "revision": "08c3249a432d7371fb654604c72d78fe"
  },
  {
    "url": "assets/js/56.fe8ecad5.js",
    "revision": "0b81b8ffa35d9632d63baa0e4ee6f713"
  },
  {
    "url": "assets/js/57.b59ca55d.js",
    "revision": "4e6e59129b042911390e21ed08b2f811"
  },
  {
    "url": "assets/js/58.78ea8962.js",
    "revision": "e71d0e595f8f65be31b6038d8f8323d7"
  },
  {
    "url": "assets/js/59.80ba1db4.js",
    "revision": "a6ddcbe3c748bb085c7fa30098dfae4c"
  },
  {
    "url": "assets/js/6.b69b6521.js",
    "revision": "df429543af0751b4e053ad146d67bb2a"
  },
  {
    "url": "assets/js/60.25e22d2c.js",
    "revision": "60a2870c6e7730db0112dbbea032d3df"
  },
  {
    "url": "assets/js/61.56b01a73.js",
    "revision": "80c34db4d1bd4ba0bda36ce03f7fc344"
  },
  {
    "url": "assets/js/62.c20a9e2c.js",
    "revision": "b12636930d6a7929b9170d5b03f3a4c3"
  },
  {
    "url": "assets/js/63.980edf05.js",
    "revision": "8421c2a3087834d2843beda55945beca"
  },
  {
    "url": "assets/js/64.0e89a369.js",
    "revision": "297b9974831a716fc1fb0c4ceefb5520"
  },
  {
    "url": "assets/js/65.7e636633.js",
    "revision": "d280283f50d2690d0167ad53549dc5c1"
  },
  {
    "url": "assets/js/66.6500b9ca.js",
    "revision": "090b4031eb5753f9e82ffb967b2a813e"
  },
  {
    "url": "assets/js/67.ab755800.js",
    "revision": "6cf2c364585400c3b8c2eba9ff5782a9"
  },
  {
    "url": "assets/js/68.95d9ba7b.js",
    "revision": "0ffb18c39c0fe93722da707a20fd3ef9"
  },
  {
    "url": "assets/js/69.243a907c.js",
    "revision": "cc0ca324a7fbb9179f8b2fad9a217084"
  },
  {
    "url": "assets/js/7.a4b71507.js",
    "revision": "730453e2cfd4c6f5568be32954920aac"
  },
  {
    "url": "assets/js/70.69c0b545.js",
    "revision": "8a3e1e20f78b54a84eeddedb4f9c36ac"
  },
  {
    "url": "assets/js/71.97ee60f9.js",
    "revision": "c15723ca7f1a6200c76dd885c07f7348"
  },
  {
    "url": "assets/js/72.6d5dbfdc.js",
    "revision": "7d5a0fd5416b8eae8e401bf9e66894ac"
  },
  {
    "url": "assets/js/73.914f0203.js",
    "revision": "966d3353877f2f7882a9936c9dd58c4e"
  },
  {
    "url": "assets/js/74.7bdfb4f7.js",
    "revision": "3f6ef3894e27248ce782a78a8be11e9a"
  },
  {
    "url": "assets/js/75.35092719.js",
    "revision": "c7f5dd418ec2a860ae0b92ea70f45a29"
  },
  {
    "url": "assets/js/76.acf3b4da.js",
    "revision": "97a1e425521cc260d31d62eb049d08ff"
  },
  {
    "url": "assets/js/77.06817f74.js",
    "revision": "7b8441d7d089ab9b5103bf1f30caf7b6"
  },
  {
    "url": "assets/js/78.63b47bbf.js",
    "revision": "61c8c219725d9c372e3690b5b1693bff"
  },
  {
    "url": "assets/js/79.ab5f5a56.js",
    "revision": "eabaa892b45187c1b572972a6aa9202a"
  },
  {
    "url": "assets/js/8.93d43633.js",
    "revision": "3e8165a9ce185b39a99538cf20722260"
  },
  {
    "url": "assets/js/80.eef962e8.js",
    "revision": "a673d0e58b92bc19ba5eecf93627255a"
  },
  {
    "url": "assets/js/81.1123ad20.js",
    "revision": "e252b6a7223396d790ed0c9f1a9335d5"
  },
  {
    "url": "assets/js/82.e0b1d847.js",
    "revision": "d56a6a4d5858582ebd5df11628177844"
  },
  {
    "url": "assets/js/83.120addeb.js",
    "revision": "6c572f2c76dd33bed1b5f297dc04b6f6"
  },
  {
    "url": "assets/js/84.e6e0546f.js",
    "revision": "9a76212d2150ba31a8d8f3a5d925d976"
  },
  {
    "url": "assets/js/85.2c982bea.js",
    "revision": "8c42f6cb023f67ff801031064d580d98"
  },
  {
    "url": "assets/js/9.b93019c9.js",
    "revision": "a05fe78b5979081e345578656d19b54a"
  },
  {
    "url": "assets/js/app.8a9a609a.js",
    "revision": "b4579e794698e5bed13260da40b7698d"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "8cf0abd6f96906212fea2ce69c2b4225"
  },
  {
    "url": "cs/bash.html",
    "revision": "3d06750a77a9aaab84ac1ae2803988a6"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "e65ab6cacd3ce554dd42cee6b2b38d96"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "e6358a94493f49c6a398f0f6716cbeae"
  },
  {
    "url": "cs/cmake.html",
    "revision": "3b52de4112879c87448fbe3a09eae58c"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "4fd52c7546396e6ccd9d0535d4f62bb7"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "db364aefde17ee975369f16a8b31f0e7"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "b7cbdcaccdd00a205a9d22e57d0aa1cb"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "a6754008cb964ca01685ea27a4d85ba6"
  },
  {
    "url": "cs/git.html",
    "revision": "31e4a7a36e82af418a687b76006750cd"
  },
  {
    "url": "cs/index.html",
    "revision": "3eba3d16d25a313f9041c02b45543ea8"
  },
  {
    "url": "cs/iptables.html",
    "revision": "6ce7d0ca2adc0d90e1ec09a6d129e307"
  },
  {
    "url": "cs/keras.html",
    "revision": "2ae83d325a0f9b32440c61ad9d311973"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "6b90f8401ce5a975a7965262220f02f8"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "f43effdc1b160caab883eed590e970a6"
  },
  {
    "url": "cs/lwip.html",
    "revision": "f675e4bcd34aa1c49e3bf284ac88657f"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "2131561f3dc600f30b9d806c7d615344"
  },
  {
    "url": "cs/risc-v.html",
    "revision": "f51358a541224b50997e9d01b6182b7a"
  },
  {
    "url": "cs/scala.html",
    "revision": "b7d8bdc45fd27131baa270cbc21e84cc"
  },
  {
    "url": "cs/xtensa.html",
    "revision": "f4e2cd98dc2dbef26f9a068e6464d0f3"
  },
  {
    "url": "ee/about.html",
    "revision": "51ce780bf65b2154e4d01c8a4f5ef113"
  },
  {
    "url": "ee/chisel.html",
    "revision": "06350b534c0e5ffe58a23e9a45ad2644"
  },
  {
    "url": "ee/esp32.html",
    "revision": "097791506b79d8506049247bd436a1a8"
  },
  {
    "url": "ee/index.html",
    "revision": "6484267a62a121138a2f41b30b37436e"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "6544d56950f4075add3b2437c89f8350"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "fa342b3ca5b15410fa9c2af0943ba877"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "98899158400c6b1fe9f6471f22a16cd2"
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
    "revision": "d06846e054aedc94b7f23b0e84154e6f"
  },
  {
    "url": "others/about.html",
    "revision": "d49e5c76aa0c6c279c6354e4c28247d1"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "1629f4bcd1b57883e77e7a806933e789"
  },
  {
    "url": "others/android-studio.html",
    "revision": "102f0cea6b7e98577587352cd2db3e1f"
  },
  {
    "url": "others/android.html",
    "revision": "a69bfd70013a7c84c0b8e8d3701a8c09"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "a3031292d1442a05d6dd6df26489637e"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "806122fbf1ae80097fb70c00c5512477"
  },
  {
    "url": "others/css.html",
    "revision": "c39187eac1b2feffc142c43380f931b0"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "5e55b870679463bd7675107d2aa8e2df"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "42a8c33c28b4540174b58871055990fa"
  },
  {
    "url": "others/english-writting.html",
    "revision": "3ff9cee3c4e9d8d7dfa190d050981cf2"
  },
  {
    "url": "others/freertos.html",
    "revision": "af5dd48e332c8cc66047f5cce1ec75aa"
  },
  {
    "url": "others/gns3.html",
    "revision": "644330d1dad17250b969eb4e95f86a85"
  },
  {
    "url": "others/gps.html",
    "revision": "962ab785d8cb963f58079e84523e9dc6"
  },
  {
    "url": "others/html5.html",
    "revision": "c325a1df30233f24ee4bbf7d948f8cea"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "1bfdd83b407b9492680bc413e17466e0"
  },
  {
    "url": "others/index.html",
    "revision": "87dede39b4b9234bd2d0b72e5e77beee"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "3a7679af42e653c779f47a060072814d"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "28fff18bc7765f0b372ad4360c51495b"
  },
  {
    "url": "others/javascript.html",
    "revision": "90196457e7b5ad1f7438119fa4198a99"
  },
  {
    "url": "others/json.html",
    "revision": "4a39ecf35a34ce0abb0b9acde596469a"
  },
  {
    "url": "others/latex.html",
    "revision": "4cc9a4c26e9e7a481943a5c03ff13c27"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "0f063404730232b2eeb02f74c044ca8d"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "90b2cdd599f87fab68c828f0480ff090"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "43b9f0a27036fb7d222a3b28b6d8dbc7"
  },
  {
    "url": "others/markdown.html",
    "revision": "fcb3624cfbd48c73bf00321261d87b05"
  },
  {
    "url": "others/matlab.html",
    "revision": "3e0b1f9f475aa7131430dff8573a0ef5"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "ddf4818dd1f26c95f918d1514cf09bf8"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "df023189d0f4de53943192bce2202326"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "365eacbe7ff0929b5ef24f0b555d211d"
  },
  {
    "url": "others/network-security.html",
    "revision": "70516b4e27c522f1706a7879987da116"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "bf5838c3f2a9b1a94a79db2277d03001"
  },
  {
    "url": "others/oral_english.html",
    "revision": "795f3f86ef490a8560b041f6c1cbb50b"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "0f4825f8f2ce997c71fe58ad79d55c59"
  },
  {
    "url": "others/poe.html",
    "revision": "3504ce48dc947c069cd16c98b5875e70"
  },
  {
    "url": "others/pyside2.html",
    "revision": "99238ad2efedf8f0b48f3a3080e1086a"
  },
  {
    "url": "others/python-socket.html",
    "revision": "6a0c08faddfa3e0ba1ffe11d35c4a0fd"
  },
  {
    "url": "others/python.html",
    "revision": "cf8753c1d33caf4b5c6300cb5a7b7542"
  },
  {
    "url": "others/q-learning.html",
    "revision": "ee5de403698480ecdfb0d8b59790f99e"
  },
  {
    "url": "others/qr-code.html",
    "revision": "724d763f4b82c553e37f338e8d6d5f6f"
  },
  {
    "url": "others/qt4.html",
    "revision": "e6eb71c0b86817842e8c8f1f1d1c0ef6"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "49f85c4c22f0a109439e0ab1f9013de4"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "ad09f74ecce2dbc5d1577afefaba3d82"
  },
  {
    "url": "others/sd-card.html",
    "revision": "b84a6e802cf4c3593f5503727de89430"
  },
  {
    "url": "others/sdn.html",
    "revision": "e93d9dee0aa9556e1997be58cce65a73"
  },
  {
    "url": "others/star-uml.html",
    "revision": "f4035d009f10defe0e735547be42160e"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "16ff5ed8cbbb99dab811e1e1a3de847e"
  },
  {
    "url": "others/verilog.html",
    "revision": "689fbf66cddc08dac64f101b2d222fa0"
  },
  {
    "url": "others/vue.html",
    "revision": "375ff50626b131a7dfb71b4d22804a5a"
  },
  {
    "url": "others/w5500.html",
    "revision": "6c30169fc290e99c956d9dfedc679de1"
  },
  {
    "url": "others/w7500.html",
    "revision": "9ff432d18828ae3b9949b7f50631cdcc"
  },
  {
    "url": "resume.html",
    "revision": "d0443c8755747c247235bf7e9775f7a5"
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
