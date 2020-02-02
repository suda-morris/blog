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
    "revision": "84bb4ee53af2587e99e9d5bb31fe3e1d"
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
    "url": "assets/js/10.2910169d.js",
    "revision": "dc87cac6bc744b2deac4eb0290d913ac"
  },
  {
    "url": "assets/js/11.b09fe64a.js",
    "revision": "195b1b860f519c0091af4b6fa8cd53cb"
  },
  {
    "url": "assets/js/12.fed0dc10.js",
    "revision": "68afb499a855b3ddfe8636c3bcee653b"
  },
  {
    "url": "assets/js/13.cf343997.js",
    "revision": "477cca397a8d03a92b1ad27dd2d55705"
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
    "url": "assets/js/23.99af14ce.js",
    "revision": "0333629ed3cf612e993880fa8f52a8cb"
  },
  {
    "url": "assets/js/24.9178de08.js",
    "revision": "58e0d8eb080b79fec9a35b85b06a02aa"
  },
  {
    "url": "assets/js/25.d571d99e.js",
    "revision": "38055eea3d6a30bb1c28f322e4a212e4"
  },
  {
    "url": "assets/js/26.e8c67087.js",
    "revision": "604738011c8039960f79cc9f8fbba95a"
  },
  {
    "url": "assets/js/27.3b4fea5b.js",
    "revision": "263b1b52ce587993ce0c946ef42e83a0"
  },
  {
    "url": "assets/js/28.ace50669.js",
    "revision": "ba08beb3220c0127b5c8f34a6501e64d"
  },
  {
    "url": "assets/js/29.d6d3c67c.js",
    "revision": "0a21638dde54f2aa9e012beeb2cd5356"
  },
  {
    "url": "assets/js/3.76ba8f1b.js",
    "revision": "7222ba68647cecaee5756e11fbb11c4c"
  },
  {
    "url": "assets/js/30.5304df03.js",
    "revision": "d40bf14c2d2d100e852ec0852fd4eb0b"
  },
  {
    "url": "assets/js/31.e865ee21.js",
    "revision": "1ee6ca58ec3c837c5e9c7be98686c06b"
  },
  {
    "url": "assets/js/32.2d044863.js",
    "revision": "8ffceb1ac2b1adc38dd3c7c8f99649ed"
  },
  {
    "url": "assets/js/33.3aa26c3f.js",
    "revision": "e9f1dd960d3e64a84bccb459b0ddce88"
  },
  {
    "url": "assets/js/34.0fca3814.js",
    "revision": "9d22750109b7794700a18e6b7a93dc5f"
  },
  {
    "url": "assets/js/35.24cc5515.js",
    "revision": "01ed027b347834a0f8e57289e0ac4109"
  },
  {
    "url": "assets/js/36.1ec3e87c.js",
    "revision": "6d6cba40206f78c373b7b0ac62faa8c0"
  },
  {
    "url": "assets/js/37.9ab9e249.js",
    "revision": "adbd5947f7a7fa21ad9a5082edcbc8c2"
  },
  {
    "url": "assets/js/38.3e337f4b.js",
    "revision": "f321b59a760745656d27b0ad7004f4d2"
  },
  {
    "url": "assets/js/39.738abd3a.js",
    "revision": "fab88f788e39ec3f9d7411f99b3f9074"
  },
  {
    "url": "assets/js/4.d7b1b425.js",
    "revision": "bac85ad35ba8512e7c9c7f4d091aab88"
  },
  {
    "url": "assets/js/40.50802a99.js",
    "revision": "f226a6a71ff20d93c5b75a5a6b45f54d"
  },
  {
    "url": "assets/js/41.2e4c9f6c.js",
    "revision": "25e1acf16a1ac30305cdcf31805cc86d"
  },
  {
    "url": "assets/js/42.687cdcab.js",
    "revision": "41fe974490533ed91fa6785f19f9411a"
  },
  {
    "url": "assets/js/43.bd210985.js",
    "revision": "6813005955c1c43aa3e4e889f2da3930"
  },
  {
    "url": "assets/js/44.0af7406c.js",
    "revision": "2e506089b3721e0ef08ea4e962fc7d1a"
  },
  {
    "url": "assets/js/45.92375031.js",
    "revision": "704767dfe15dc4c59ac06ad1ee31ed9d"
  },
  {
    "url": "assets/js/46.62cfd65d.js",
    "revision": "b6cba87d0641b3a116b4ca2b1b497e85"
  },
  {
    "url": "assets/js/47.73a8c30b.js",
    "revision": "e4810490886d43142a5752c73d20e1a7"
  },
  {
    "url": "assets/js/48.7e2a8d01.js",
    "revision": "c1016b9aa12e837b2932703ea3ec0bd7"
  },
  {
    "url": "assets/js/49.60410c1a.js",
    "revision": "4a5871c47e5db51021f0e04567ffb81e"
  },
  {
    "url": "assets/js/5.faeee60a.js",
    "revision": "662008da9d38156b6645a5e23da5cb1a"
  },
  {
    "url": "assets/js/50.57fa6ca5.js",
    "revision": "29a6379efb7f5d69c188f46ee61cd7ec"
  },
  {
    "url": "assets/js/51.11c34a90.js",
    "revision": "1b92703c69ab8d36ad7624845a326b37"
  },
  {
    "url": "assets/js/52.bf469d94.js",
    "revision": "297e5e2bc94def4ca99d57a9f06f212d"
  },
  {
    "url": "assets/js/53.1635a053.js",
    "revision": "c45f35014ea40b666ca27b43903df3ef"
  },
  {
    "url": "assets/js/54.eb32bd7e.js",
    "revision": "4da625fad27efab1bdc1924e7c0e4d51"
  },
  {
    "url": "assets/js/55.e2e52225.js",
    "revision": "7c596ad03dbd4f088a1c86ee73b2fbee"
  },
  {
    "url": "assets/js/56.d6427198.js",
    "revision": "ac945963e989a97c864f5445f0b11156"
  },
  {
    "url": "assets/js/57.52e46ff2.js",
    "revision": "36a258ac7edd57c5ae09446033dd11f4"
  },
  {
    "url": "assets/js/58.b8245c01.js",
    "revision": "82dfd1947a08dbdbee528d83c50a1730"
  },
  {
    "url": "assets/js/59.2844db4b.js",
    "revision": "18f5f3c325904d27ecf8120e3f493d1e"
  },
  {
    "url": "assets/js/6.e35d395a.js",
    "revision": "f12be05d95667bc318c89ab4376b481a"
  },
  {
    "url": "assets/js/60.06a88138.js",
    "revision": "cd72e7fed244cc3fb33b23d329eb2286"
  },
  {
    "url": "assets/js/61.8b13af53.js",
    "revision": "3e8d372b836041edfbe27dca8b317a83"
  },
  {
    "url": "assets/js/62.1b0e5839.js",
    "revision": "c9886b8058d2eee114391f476703e33c"
  },
  {
    "url": "assets/js/63.42c6419f.js",
    "revision": "ebd34c59bbb6db7748dfe24c5ce5bff4"
  },
  {
    "url": "assets/js/64.f311ab87.js",
    "revision": "e4363155963f8836723315a212ff788b"
  },
  {
    "url": "assets/js/65.b552a968.js",
    "revision": "0c21dc21f41ec64e510f32389317b929"
  },
  {
    "url": "assets/js/66.88198579.js",
    "revision": "f9900a4ea734b88d4bb77f1a9da6ccfd"
  },
  {
    "url": "assets/js/67.cff4be56.js",
    "revision": "aa96473616413e9cee1a0d78ac73b61e"
  },
  {
    "url": "assets/js/68.bbac3ea3.js",
    "revision": "6be3c4e14d7dbb818b8466436420de87"
  },
  {
    "url": "assets/js/69.511344e5.js",
    "revision": "7784891b9362d1ea3728f4e0ade526fb"
  },
  {
    "url": "assets/js/7.e420ee6e.js",
    "revision": "3778e45f4692c3bb85337d460fab43eb"
  },
  {
    "url": "assets/js/70.b4b1dcb0.js",
    "revision": "1f783b794c1851ed3b0848ffacf5a6d8"
  },
  {
    "url": "assets/js/71.f06abc63.js",
    "revision": "6d1559767cbe2349ff0142b0402f1de5"
  },
  {
    "url": "assets/js/72.a5f9f1ff.js",
    "revision": "21fc8351ba1cc02a1be9590550514963"
  },
  {
    "url": "assets/js/73.d9e0c3c1.js",
    "revision": "b48327109522cc59988c9c60c4df992e"
  },
  {
    "url": "assets/js/74.24152c70.js",
    "revision": "fad5472082cad29e77c2085f139fc683"
  },
  {
    "url": "assets/js/75.44b5f644.js",
    "revision": "baed6120e0dc9c0c77d694c89fc6d66a"
  },
  {
    "url": "assets/js/76.3d453172.js",
    "revision": "a8534291428a046a2f348e4eb97da6cf"
  },
  {
    "url": "assets/js/77.2206e427.js",
    "revision": "d837fcbaff5ca9ef16a8739d17cec510"
  },
  {
    "url": "assets/js/78.6f102eb8.js",
    "revision": "6dc1913a3ea031cf7389c4ca964f5403"
  },
  {
    "url": "assets/js/79.7574cb32.js",
    "revision": "365dc15e2d83e9820d5962073fc39f27"
  },
  {
    "url": "assets/js/8.510a1287.js",
    "revision": "6ff2b99d78cdaa30ad7e4ce0760da076"
  },
  {
    "url": "assets/js/80.d937df48.js",
    "revision": "ce756a2391cb11a778047fd18c82aa30"
  },
  {
    "url": "assets/js/81.2fc2bd6c.js",
    "revision": "cd518c064354b08b9a7c0b4f4af21fcf"
  },
  {
    "url": "assets/js/9.d455550e.js",
    "revision": "009c69bacc44bda40b96da83bcd1f5d1"
  },
  {
    "url": "assets/js/app.1cb092b5.js",
    "revision": "f7b47bc0c7be3e75261c6cb16534812a"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "547384bb15ceef612d556d0cb769b8e0"
  },
  {
    "url": "cs/bash.html",
    "revision": "b5b8dc858a7ec335fcc27def7ed7b84c"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "8ce8b0043026afa751bac67d5398ef89"
  },
  {
    "url": "cs/cmake.html",
    "revision": "4a005b43ebd772724c53c436a34ac5f6"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "e08ca187328658b9c2c1b4d259a2d92e"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "5677eac4df5e97af3c245e3d05b26f1e"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "ffb4c5fda07b10a7dedbff007a9a37c8"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "43f888de2e074b5b4b9873d9531dcf82"
  },
  {
    "url": "cs/git.html",
    "revision": "3ee30e20760875df4c5c471a2a54eb30"
  },
  {
    "url": "cs/index.html",
    "revision": "d5533f7a9f5001c82ecb8f3863ed137b"
  },
  {
    "url": "cs/keras.html",
    "revision": "2c803121024ad81474c0a8eb24c0b1a1"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "e8007f064b7e1b98161dcf8ff79e30e0"
  },
  {
    "url": "cs/lwip.html",
    "revision": "0a5cd0f9abb07bd5a7c4dd84d470ce48"
  },
  {
    "url": "cs/scala.html",
    "revision": "52dafc89bd4b9891eab21d0a47bff0c2"
  },
  {
    "url": "ee/about.html",
    "revision": "2ca1fa23bb4d32aaff96af45ae6d0365"
  },
  {
    "url": "ee/chisel.html",
    "revision": "adc77cd1b1202a48eec77a43a778337e"
  },
  {
    "url": "ee/esp32.html",
    "revision": "685370efc1f1978e6fb0d45df8a9a9b8"
  },
  {
    "url": "ee/index.html",
    "revision": "587d9bb06c75486966e1aca88f8b24fa"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "bbe90265d40c086e8210e8102d9985e6"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "a06a29608f4a3d62f359732293515ce8"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "215e99c01e8cbf65799ece39279746cc"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "6501f129fe5729818b6b53f4e8792822"
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
    "revision": "f2cf5deee6d95d8b9516c52115d3789b"
  },
  {
    "url": "others/about.html",
    "revision": "8616b2b378db547c96a4092a710150bc"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "a6e0c6eed147e39aa7ecd18d52bdecfe"
  },
  {
    "url": "others/android-studio.html",
    "revision": "ca12c2522d181c9fbfc586188f2af0ab"
  },
  {
    "url": "others/android.html",
    "revision": "a78ac49afe6fb2c7fde84bd40f8acbba"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "5ef49c3e5acae7a6066b21813e026870"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "b03c5b521e6994d2b850a1fe70b8bbcb"
  },
  {
    "url": "others/css.html",
    "revision": "596176fd23f9d2d4ea016802bf0af4bf"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "5d8a4659b4ae86a51934dc928953b261"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "1dea004cb2a61f2ebed3db87660ae2e3"
  },
  {
    "url": "others/english-writting.html",
    "revision": "4caf22d898d472bd55ddca8c36398d99"
  },
  {
    "url": "others/freertos.html",
    "revision": "3bb7b433cf423fbf299e1752aa6a62f4"
  },
  {
    "url": "others/gns3.html",
    "revision": "2778b059ed1518fcba8ce0ada10d85d3"
  },
  {
    "url": "others/gps.html",
    "revision": "b157454347c85e24105ea218d0c3527f"
  },
  {
    "url": "others/html5.html",
    "revision": "874cc5e3e44e94c489c6e97493206c07"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "18daf34267dbca66eb7a9ec97bc887c6"
  },
  {
    "url": "others/index.html",
    "revision": "538215a0b9d536da03ba6ecbacbcb4c7"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "fe466ba193694e8eb1b0fa2eb7b26c2b"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "4c1d1063debcdbd337edad1c493d39fc"
  },
  {
    "url": "others/javascript.html",
    "revision": "ee664e0d0064bfbf4859a9ed9b3ea563"
  },
  {
    "url": "others/json.html",
    "revision": "ccc7cae4a0532faef9bdab01aa60f0b8"
  },
  {
    "url": "others/latex.html",
    "revision": "e22483706f1e017b1fdab0fecbad290d"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "a43a18580c3bdf1ca399864c86cefbd5"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "5191c2e4c34dcc91ffc1dd2e173b4b75"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "a9278f36fbb3313e0724c5aa5fabc0a8"
  },
  {
    "url": "others/markdown.html",
    "revision": "d678812e7dce5e59272d88f64bc96ac6"
  },
  {
    "url": "others/matlab.html",
    "revision": "66cf2ce7d28128f50aac42296800c74f"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "0ec7283e10ce966d69b6733b606eae79"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "f70ee9075a0fd71e0795366d979fa82a"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "db343d068d67d835f21aa92b01b8a3c9"
  },
  {
    "url": "others/network-security.html",
    "revision": "5ac8fad3fe7a1143b59cc9572974efc0"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "e8db8d5970fb5de7e926b701139ab7d2"
  },
  {
    "url": "others/oral_english.html",
    "revision": "0069c8e6e8428c1a7f5b9632b85e740e"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "a0e35b6b19b3bf30c47f6fc3019ba023"
  },
  {
    "url": "others/poe.html",
    "revision": "e099e681ac69ba847499d513e908ea83"
  },
  {
    "url": "others/pyside2.html",
    "revision": "a70ae7a020fde682b4f3eb339ab5bf72"
  },
  {
    "url": "others/python-socket.html",
    "revision": "e5c09ba126c5a219f5379190738ffaec"
  },
  {
    "url": "others/python.html",
    "revision": "600a0cb1a87a085cd7a477858b959f0f"
  },
  {
    "url": "others/q-learning.html",
    "revision": "458e48c4fa467a514cbd9c83c171f1b1"
  },
  {
    "url": "others/qr-code.html",
    "revision": "76d705b269277a3584e7c70a34cc67d5"
  },
  {
    "url": "others/qt4.html",
    "revision": "1dd38ba60521fdc6235348042aa42330"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "58dd436f527d3c63148aec9606797887"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "0129f077c8db6a6a45720f291fa7daa3"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "ff1a29fc842c148068879b2d9002a5b7"
  },
  {
    "url": "others/sd-card.html",
    "revision": "fefd2d92852752515bf0b510d3a70b65"
  },
  {
    "url": "others/sdn.html",
    "revision": "36238b482bccd044b3fdd986b23d6e24"
  },
  {
    "url": "others/star-uml.html",
    "revision": "22c904f00ac23b4c6fac5d996291d0d7"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "8ed9bd4525e0c8368f32e935e809d8c4"
  },
  {
    "url": "others/verilog.html",
    "revision": "00a16a01565c24fe143ed465c5dfbdc9"
  },
  {
    "url": "others/vue.html",
    "revision": "b5d7bb32998bac825227b5b849798987"
  },
  {
    "url": "others/w5500.html",
    "revision": "d1bc1cc03d4fb15c42172a28a513ffd4"
  },
  {
    "url": "others/w7500.html",
    "revision": "b3ada58d56a33970266f94f8345f57d7"
  },
  {
    "url": "resume.html",
    "revision": "c9892ea16f5fc95f7fd164c4851a4e33"
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
