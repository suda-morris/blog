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
    "revision": "8628bb265c73277692ee7f9ecc5d5a8e"
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
    "url": "assets/js/15.49154de4.js",
    "revision": "078c4f726f10d06ac8b85dbd137eec52"
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
    "url": "assets/js/28.f98f4520.js",
    "revision": "1ceac27591d1bf931f1965d52a2607a4"
  },
  {
    "url": "assets/js/29.394bbd6d.js",
    "revision": "bd681d1a7ff380b49477f13c9aff9f58"
  },
  {
    "url": "assets/js/3.625dbf16.js",
    "revision": "c45da98c58197b48564feed2c9a65590"
  },
  {
    "url": "assets/js/30.d2a8a262.js",
    "revision": "6acfa55d05d8d634c5a9690f52f1c37d"
  },
  {
    "url": "assets/js/31.fed843a7.js",
    "revision": "912d8c799742c35cff2c60331ac55f61"
  },
  {
    "url": "assets/js/32.690ba670.js",
    "revision": "17884873d059b9d19725e7a5c9b794b2"
  },
  {
    "url": "assets/js/33.194824f3.js",
    "revision": "6578ace62ebb4cbb9a595be447a5e929"
  },
  {
    "url": "assets/js/34.f7075a5d.js",
    "revision": "c4861efd83a636b30f7a9b45ce54a302"
  },
  {
    "url": "assets/js/35.0fa168e2.js",
    "revision": "2b9edb80f9823febf9b335ef36e27c1b"
  },
  {
    "url": "assets/js/36.492cb434.js",
    "revision": "ee972571ca083406f3e91b0cebc54e2c"
  },
  {
    "url": "assets/js/37.1c4b46bd.js",
    "revision": "e621dc57261cc9bb417a425bce1a04c7"
  },
  {
    "url": "assets/js/38.c9f7d1ce.js",
    "revision": "7f75053f2af46c6b8cba5b24cea80312"
  },
  {
    "url": "assets/js/39.c28862d5.js",
    "revision": "d96d38832786e00b72bc1fa9d1b45ab5"
  },
  {
    "url": "assets/js/4.dc932efd.js",
    "revision": "c8acd3ddaa3c0146accc762f02af6641"
  },
  {
    "url": "assets/js/40.fefca520.js",
    "revision": "9dd8c623dbb3c730f561a61b24c3e80b"
  },
  {
    "url": "assets/js/41.dc2a0edd.js",
    "revision": "bee925f00221b2b255b12bb605a20551"
  },
  {
    "url": "assets/js/42.f67f5f6a.js",
    "revision": "d85bd1c3fc75e9fbf7d47bd1a62da1e1"
  },
  {
    "url": "assets/js/43.924185fc.js",
    "revision": "6eeffdee3dc7df83a1abf132169cea7a"
  },
  {
    "url": "assets/js/44.e174bef2.js",
    "revision": "2804f25066d85f6e29514a965901d11c"
  },
  {
    "url": "assets/js/45.719f9994.js",
    "revision": "66c62053907ecd81378a0d02c41b8196"
  },
  {
    "url": "assets/js/46.3f0dc57d.js",
    "revision": "76f67da4b5fa16e8ebbd224063265e7c"
  },
  {
    "url": "assets/js/47.df349a91.js",
    "revision": "c6a62fce438c8caa27fb1d4a7272a610"
  },
  {
    "url": "assets/js/48.009306aa.js",
    "revision": "60981e0c52338192eabb643d57c03d77"
  },
  {
    "url": "assets/js/49.76a71386.js",
    "revision": "4a9200d0572dab40f99ac9cf830e61c9"
  },
  {
    "url": "assets/js/5.43757ba1.js",
    "revision": "ad747c60d4a779291971e537f6f807d5"
  },
  {
    "url": "assets/js/50.95105e36.js",
    "revision": "0af90358beaa971eeed4925e92a3eb70"
  },
  {
    "url": "assets/js/51.57309a80.js",
    "revision": "a175d45c4be0a1c1b60e03e13207985b"
  },
  {
    "url": "assets/js/52.eaa0cab5.js",
    "revision": "aa34a1cdde0ffbae0569bfe02171453c"
  },
  {
    "url": "assets/js/53.5823b504.js",
    "revision": "100a2f14921a6c1c4d2063c63f782d6b"
  },
  {
    "url": "assets/js/54.7d12fb7a.js",
    "revision": "0bad4668f9e672563e36d5bad454607e"
  },
  {
    "url": "assets/js/55.9facf745.js",
    "revision": "47290d814136389f0adf679e0a890541"
  },
  {
    "url": "assets/js/56.39a3b235.js",
    "revision": "24d54125022ab20f9e321caf5cee14e6"
  },
  {
    "url": "assets/js/57.7f8dee09.js",
    "revision": "2dd9b99af270a4a10bcd592521c5af53"
  },
  {
    "url": "assets/js/58.12cfcffb.js",
    "revision": "fe80ed11740c9924899d01fba2f22887"
  },
  {
    "url": "assets/js/59.c3687ce5.js",
    "revision": "5b8f62ab7b2b2adf48d7eec05c308f97"
  },
  {
    "url": "assets/js/6.c66112cd.js",
    "revision": "a9fa87cb5a0f401a3a212e4a1ecbb738"
  },
  {
    "url": "assets/js/60.e64845a7.js",
    "revision": "c7d7019d2704c70089c19a6206b3c255"
  },
  {
    "url": "assets/js/61.b6c021fb.js",
    "revision": "b52bb158f06c0bf20fd0ea4a5f7d822a"
  },
  {
    "url": "assets/js/62.70c35662.js",
    "revision": "e8941cc354b0df84f9f9ad706dcd2c9d"
  },
  {
    "url": "assets/js/63.ca1b41d7.js",
    "revision": "f0c0fe822678fde2f3912abcc39003e4"
  },
  {
    "url": "assets/js/64.20a68f7f.js",
    "revision": "cd18132f7559b203f031ae5446da27b8"
  },
  {
    "url": "assets/js/65.f8df278e.js",
    "revision": "963dac1850468da438a7a311cabb3b40"
  },
  {
    "url": "assets/js/66.57365381.js",
    "revision": "caed83b4b4dfdacf60c10fb8000fce96"
  },
  {
    "url": "assets/js/67.a3b30bc7.js",
    "revision": "89275e0791505666f8e2a42b5fc7f9c4"
  },
  {
    "url": "assets/js/68.0d77e2a8.js",
    "revision": "e527f5ec1ec9599b766978896c4342a3"
  },
  {
    "url": "assets/js/69.71a5d603.js",
    "revision": "030c06cd104fb2a21e38f36f4e0dd239"
  },
  {
    "url": "assets/js/7.8e8c1f33.js",
    "revision": "cd14a674c187abc3445c3a200dbeba2e"
  },
  {
    "url": "assets/js/70.8bccab06.js",
    "revision": "5d09bdbe98522589910e25ecc5bea317"
  },
  {
    "url": "assets/js/71.8a2b0051.js",
    "revision": "6ef5f702c072163a0836c82f35fffcf0"
  },
  {
    "url": "assets/js/72.7085b0c8.js",
    "revision": "4f259274b59637c5793952970600377b"
  },
  {
    "url": "assets/js/73.332cbbb4.js",
    "revision": "8dcb58055fe90bcb3097bbddd6ba51e9"
  },
  {
    "url": "assets/js/74.bd7ea8cf.js",
    "revision": "150c8c340e6f99b4acedc4a981460ca8"
  },
  {
    "url": "assets/js/75.cb8a53dc.js",
    "revision": "39d7c918843d72aa5f8627085c612e2c"
  },
  {
    "url": "assets/js/76.8921b0e2.js",
    "revision": "2630ea6471670c698d2e62f425a8326f"
  },
  {
    "url": "assets/js/77.ff8c064f.js",
    "revision": "69aacd42183937e6fa2f3cdca5a5195f"
  },
  {
    "url": "assets/js/78.83c20801.js",
    "revision": "c192c8bcde3e7d1dc69b69a1b9699cad"
  },
  {
    "url": "assets/js/79.4db4a594.js",
    "revision": "ed2f4bf4329dae72bc69cbf41ae57c95"
  },
  {
    "url": "assets/js/8.93d43633.js",
    "revision": "3e8165a9ce185b39a99538cf20722260"
  },
  {
    "url": "assets/js/80.2bda1c61.js",
    "revision": "c929f94e3b6b0eeaa8bab6efadc56907"
  },
  {
    "url": "assets/js/81.d5eec0a7.js",
    "revision": "b702a6838f3b9d1e8cd98c442c3f7ef8"
  },
  {
    "url": "assets/js/82.ccd9865b.js",
    "revision": "831938e815fc3b47b3bd9a6cecb667a4"
  },
  {
    "url": "assets/js/83.ac53c8c4.js",
    "revision": "3c4fb05c197f48233ffbd458265f1ad0"
  },
  {
    "url": "assets/js/84.f8f9f094.js",
    "revision": "3baf53fb8797769e89b5a961f8c970d2"
  },
  {
    "url": "assets/js/9.a134bfb5.js",
    "revision": "173325aed112a8f7e54db3261c1f720f"
  },
  {
    "url": "assets/js/app.edfa5e6d.js",
    "revision": "c2b301f0780416bc6a323327df5635f7"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "338f47d5472a6c05cd23d2bfe14e4615"
  },
  {
    "url": "cs/bash.html",
    "revision": "873acd4656d889fbaa6ec2758e661f79"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "332d9600a31c6c48eff2850c1f12e01d"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "d4efb77d82a8f28fa7d92a1c9ee12336"
  },
  {
    "url": "cs/cmake.html",
    "revision": "af283264c8bf265df13956f1af81c412"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "80fdadecfe75df4cdeff6cb1b1608e84"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "19657895b1f88ac929db17ebab6f01ad"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "26294feb0182e43ea0dd81c62a777fa0"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "81734f1dd6fb1acfe5b56a3a72a53dae"
  },
  {
    "url": "cs/git.html",
    "revision": "235e9af11c998fac4f4d04a43acf6c52"
  },
  {
    "url": "cs/index.html",
    "revision": "66a341ee2f97aa690341c631eae67956"
  },
  {
    "url": "cs/iptables.html",
    "revision": "5f263467d50b620273dc287c7057d58a"
  },
  {
    "url": "cs/keras.html",
    "revision": "771f363091a6afe0cdba12200eb7301d"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "5daea5d0f11d4238b0bdcccd871bc577"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "0b26001565a6be03c7226848bad9a243"
  },
  {
    "url": "cs/lwip.html",
    "revision": "62c992d01e0eac7d406aeb07dde29a71"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "c97109df9b2642913ee27bca045d6c51"
  },
  {
    "url": "cs/scala.html",
    "revision": "f222c06159de898469e89989eb090f0e"
  },
  {
    "url": "ee/about.html",
    "revision": "8d21430ef2bb0da32873a24d9f0dc154"
  },
  {
    "url": "ee/chisel.html",
    "revision": "48f05bf139e590aec4f8e171da1997c8"
  },
  {
    "url": "ee/esp32.html",
    "revision": "fc7a266fab1a45747dabbbed5f811bc4"
  },
  {
    "url": "ee/index.html",
    "revision": "509bada2c3f89aec605ff3175756de7c"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "a1cbf29852e9a1263a94977f2ec2eda3"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "4800ce1ebc521ca76160e781f564b76d"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "796540822f554e20dc0cb21e9e3b2efa"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "dd3e46ea6b4b95466c579d6a676369e1"
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
    "revision": "d712df5f864e31b4fa03ab80fe1b5478"
  },
  {
    "url": "others/about.html",
    "revision": "851ac59838a15946a19ebb69a9e2ef49"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "bde315882a28b2074c3b562b1bf175b5"
  },
  {
    "url": "others/android-studio.html",
    "revision": "19e4b6612e4bd284e0e3ae6e66013a1a"
  },
  {
    "url": "others/android.html",
    "revision": "59d2b51cd09a9d580a6dffb9a25cacad"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "4b64bb57bf7e4163ab2a3fae4312e12a"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "e4f16d673f5dbaeb27b5c9dc13333dcc"
  },
  {
    "url": "others/css.html",
    "revision": "6b66d0faf3d52637d601a95bc0059c83"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "782451d0714b83f141413c1de11469ec"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "be248e3d0924a2b194ebd70d9339cc2c"
  },
  {
    "url": "others/english-writting.html",
    "revision": "495cd34e52ed9fb42da87baa89fada3a"
  },
  {
    "url": "others/freertos.html",
    "revision": "975e2177865ddc9a8abd0f08be16a137"
  },
  {
    "url": "others/gns3.html",
    "revision": "742e93b5fea180466e808cfa62fb9cc3"
  },
  {
    "url": "others/gps.html",
    "revision": "de9af58bf35915ec20c909d795cad5a3"
  },
  {
    "url": "others/html5.html",
    "revision": "1cfc1a9d71f28dd15d6a3b7916fc6629"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "74acc7c885730f7d02e8e0717cc8f308"
  },
  {
    "url": "others/index.html",
    "revision": "7cf4ab615b728a1822c3d352211d8460"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "6c15577085f608fec5d14d15c99dca81"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "d07652c0089e4f8acd8ab9a596473265"
  },
  {
    "url": "others/javascript.html",
    "revision": "dc2f2517e981abc0de01cc463277cb55"
  },
  {
    "url": "others/json.html",
    "revision": "c2960b38817fb6f2ec90dd1c8eeee7b2"
  },
  {
    "url": "others/latex.html",
    "revision": "dc10fd29b51dba73e55981f43490f5f5"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "9d1c0af359310017bb6871f2ce6ca477"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "e158176be3e52b903c50f07a2d3bd0c5"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "92be6803998382ea5e9c38970e645acd"
  },
  {
    "url": "others/markdown.html",
    "revision": "62292d346f3938ce255dcb80401d6781"
  },
  {
    "url": "others/matlab.html",
    "revision": "0ea75bdd5ce54860c89c723e02b7a0cf"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "99170804a628e71a78fceb7d15800162"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "67c851b0ad2c186def9aa94435484389"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "ed4fd89375e9d468cd403f4031e946c5"
  },
  {
    "url": "others/network-security.html",
    "revision": "6932414c599bea7bb1ff99f8c9e63fb6"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "f818a080f94ce1da2f33bb599a78f9a6"
  },
  {
    "url": "others/oral_english.html",
    "revision": "261e683201c639b9941271e2972b2688"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "fbeb21ea3385fc65123e1e6a265147a9"
  },
  {
    "url": "others/poe.html",
    "revision": "74fbcaaed223383ee5cfb298e96b9a65"
  },
  {
    "url": "others/pyside2.html",
    "revision": "695b7723ccd75bbf10fc917db9ba9dba"
  },
  {
    "url": "others/python-socket.html",
    "revision": "f8083f7b5256e1df1470291f1e7f2465"
  },
  {
    "url": "others/python.html",
    "revision": "a00fc4573f28a5baeddc4bef202a01cb"
  },
  {
    "url": "others/q-learning.html",
    "revision": "3047ce19e4b37e181eb6d711db677340"
  },
  {
    "url": "others/qr-code.html",
    "revision": "a4395c275718e83852880f716f5cf2fa"
  },
  {
    "url": "others/qt4.html",
    "revision": "91a294fbb501710a53fd15e5a25e83ae"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "e32f65979335c0439dd156779158e21b"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "f16961c4e56e3360aba62882549507f7"
  },
  {
    "url": "others/sd-card.html",
    "revision": "306ad45ca3832e83bf107da0c913f18f"
  },
  {
    "url": "others/sdn.html",
    "revision": "aa9ab56cc6a86bb41fc19481585693a8"
  },
  {
    "url": "others/star-uml.html",
    "revision": "a9f0ca53d945222b43584b722d5dee05"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "36f7a6fad099f46806df95d9f94b38bf"
  },
  {
    "url": "others/verilog.html",
    "revision": "463009526bc82d0289b6ed61196f903a"
  },
  {
    "url": "others/vue.html",
    "revision": "d0bb00966605d2615c539daa4ab3b8d7"
  },
  {
    "url": "others/w5500.html",
    "revision": "d5b18c35f5fd4d59b536ca7d034ed6af"
  },
  {
    "url": "others/w7500.html",
    "revision": "23de834705d672a32d18a945b2fd0b9d"
  },
  {
    "url": "resume.html",
    "revision": "29b01f897cd2002a52a585f558f0b395"
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
