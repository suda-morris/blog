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
    "revision": "f7112b129dc85bfa08fa227982562ae4"
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
    "url": "assets/js/10.6a839dac.js",
    "revision": "5aaf85b1352324173c32c54c292eb180"
  },
  {
    "url": "assets/js/11.19e11ab9.js",
    "revision": "90249af5f9b33ca801091c1a42400cfa"
  },
  {
    "url": "assets/js/12.42bc256f.js",
    "revision": "1a0fc5fbfc9c54bdd883854060ee147b"
  },
  {
    "url": "assets/js/13.ba4f6048.js",
    "revision": "5e784c39093893087406a1820df72184"
  },
  {
    "url": "assets/js/14.9e54b723.js",
    "revision": "be1d38030fdbab5ae71f287edc7a1d6c"
  },
  {
    "url": "assets/js/15.668b5aae.js",
    "revision": "e5536cadd6e669e446b23108b498a8d3"
  },
  {
    "url": "assets/js/16.0adbf0d4.js",
    "revision": "e0652e97fe6571d5b5d6e5a4bd778ff8"
  },
  {
    "url": "assets/js/17.cd8b8f87.js",
    "revision": "3f851e7e43f0b8dea8b9abc239fedcad"
  },
  {
    "url": "assets/js/18.81b9161a.js",
    "revision": "83cf5747fa589fb9e5f6003d24cf06fd"
  },
  {
    "url": "assets/js/19.7cf0b8a3.js",
    "revision": "5bfb01fa65d2e2a54d2420313f4fe8fc"
  },
  {
    "url": "assets/js/2.96e1f172.js",
    "revision": "488b17c4f7b4cacbb4b7e48a9ecadc9f"
  },
  {
    "url": "assets/js/20.182dc9d6.js",
    "revision": "39ecbbd6361a842615f685ae88888cac"
  },
  {
    "url": "assets/js/21.1f616819.js",
    "revision": "9267fb5fa1dd78893d2eafb2be152265"
  },
  {
    "url": "assets/js/22.f05aa30f.js",
    "revision": "78524428b21bec4f4067b2972466cb1b"
  },
  {
    "url": "assets/js/23.d5b13094.js",
    "revision": "cba7779f67e1c49fe53ae5bac39d8866"
  },
  {
    "url": "assets/js/24.206fa5fe.js",
    "revision": "17d39f76a881063455c4674d7638dd8e"
  },
  {
    "url": "assets/js/25.e589d846.js",
    "revision": "08351ef6f1bd2865bb997825ce39f0ff"
  },
  {
    "url": "assets/js/26.62ffba98.js",
    "revision": "8ba6d03cee8385d09a8893a5a3e4d454"
  },
  {
    "url": "assets/js/27.e5626c26.js",
    "revision": "c167277f76dc6d9a5589f05f2a5035ed"
  },
  {
    "url": "assets/js/28.b2df8991.js",
    "revision": "0016a42ff0cba6bd3d9db15cf082c7e7"
  },
  {
    "url": "assets/js/29.d56efa31.js",
    "revision": "698c707b79341807a0ced169cb80f394"
  },
  {
    "url": "assets/js/3.7d548686.js",
    "revision": "c62b44c02f38cec6435d8cbd34afbed9"
  },
  {
    "url": "assets/js/30.2c5c257c.js",
    "revision": "75848a24fad23098e0f5b49863fb8a45"
  },
  {
    "url": "assets/js/31.864cf22b.js",
    "revision": "068bcc24eb37eebe753abeaccc928df6"
  },
  {
    "url": "assets/js/32.9a1bea3a.js",
    "revision": "ff266856d15b57bd7c2db7725bf442c7"
  },
  {
    "url": "assets/js/33.812ccc0c.js",
    "revision": "3a9974d178d242c83bc355f749ac4c56"
  },
  {
    "url": "assets/js/34.ab360ef7.js",
    "revision": "ce6ad9e530e29f25de35c8ca9d09593a"
  },
  {
    "url": "assets/js/35.3a20d0b3.js",
    "revision": "0a1df0a03442110bb8ee3f13969e405c"
  },
  {
    "url": "assets/js/36.23cd713f.js",
    "revision": "d1767d8fc754ed7af21ed952751518c4"
  },
  {
    "url": "assets/js/37.b75f0e15.js",
    "revision": "e096fc7ac20f0b91e5816d7cf875a79b"
  },
  {
    "url": "assets/js/38.bd20d485.js",
    "revision": "2bad6f763af3826e2ed355934f21c0fa"
  },
  {
    "url": "assets/js/39.fa79b7aa.js",
    "revision": "ab615e75574ff739e05000964929b12f"
  },
  {
    "url": "assets/js/4.c3200ae6.js",
    "revision": "b53f33dbe9072e6f412a4351631aca22"
  },
  {
    "url": "assets/js/40.22d85f71.js",
    "revision": "05ffff6eee26e40c7ccd3dfa4245d7d9"
  },
  {
    "url": "assets/js/41.59b7bc2f.js",
    "revision": "ee73b7bc4267306ab1eeb9f95dbab25f"
  },
  {
    "url": "assets/js/42.d204a194.js",
    "revision": "6fb3c6b2c9bf1ae900d2a7ac96629e3d"
  },
  {
    "url": "assets/js/43.a263c160.js",
    "revision": "324e032c72dea823c31fd6dec5443902"
  },
  {
    "url": "assets/js/44.4d4e529b.js",
    "revision": "3ee2dacd512f8783dba634d737ab8e8b"
  },
  {
    "url": "assets/js/45.9891d50d.js",
    "revision": "9d4f0c43fca0c9f1be139ea204d14c6a"
  },
  {
    "url": "assets/js/46.738090dd.js",
    "revision": "2b19bfe1bb72228ec40c612826d9755d"
  },
  {
    "url": "assets/js/47.08d01d75.js",
    "revision": "d1f8460af6ec980c6ef28a7efdcb8039"
  },
  {
    "url": "assets/js/48.1b8e0ff1.js",
    "revision": "8eee2c1f54f6740cee6f6d606a7d7f3a"
  },
  {
    "url": "assets/js/49.b7472cbc.js",
    "revision": "709ec57ccf8818612d1b89ddad871129"
  },
  {
    "url": "assets/js/5.c40a56bf.js",
    "revision": "013f25029941bb331bcb03369d2f4a93"
  },
  {
    "url": "assets/js/50.4effe068.js",
    "revision": "c395f44bc7929445aa16b8b105fa03bc"
  },
  {
    "url": "assets/js/51.f2c6676f.js",
    "revision": "e0291aa941c1790f369052a151d80de4"
  },
  {
    "url": "assets/js/52.88152f41.js",
    "revision": "617dbe25a5f69c8bb991973acc8b0e6e"
  },
  {
    "url": "assets/js/53.5c5fd5db.js",
    "revision": "305ccb1608e437ba99e964e4622df5e1"
  },
  {
    "url": "assets/js/54.a065a25a.js",
    "revision": "3320f6378476a31248d6f471875132d7"
  },
  {
    "url": "assets/js/55.f89a2e4a.js",
    "revision": "c5fa61bd1df65068940c45173131eb5a"
  },
  {
    "url": "assets/js/56.8b446cf9.js",
    "revision": "d82f39599e84fb4d165f8a7f0fb778d2"
  },
  {
    "url": "assets/js/57.f7dc3010.js",
    "revision": "0997e932cf2c3553f57f92ecb1637318"
  },
  {
    "url": "assets/js/58.b53da57b.js",
    "revision": "4aae415717ce870177d6ee6d5a44755c"
  },
  {
    "url": "assets/js/59.d63e2f97.js",
    "revision": "aca9e6119e962b266857e2d2296ac449"
  },
  {
    "url": "assets/js/6.2c7a064d.js",
    "revision": "cbd53efc5efbe3e019fecad1c75c1b02"
  },
  {
    "url": "assets/js/60.95582f61.js",
    "revision": "5bfb81663ca93aa78931d04035bd0c57"
  },
  {
    "url": "assets/js/61.3db945fa.js",
    "revision": "8ffca3ab2abdaf997397df1c936a3ae4"
  },
  {
    "url": "assets/js/62.a625ef8d.js",
    "revision": "d973cfb7febcf30706a036308df0d9a5"
  },
  {
    "url": "assets/js/63.d0eced4c.js",
    "revision": "7a53f254c4089f97a5a8f8fb9bb9ff8b"
  },
  {
    "url": "assets/js/64.381b5d74.js",
    "revision": "155714a86c28a64638d3b0c995646042"
  },
  {
    "url": "assets/js/65.356302b4.js",
    "revision": "4ed8b7631b33451c07a97b16d3922e95"
  },
  {
    "url": "assets/js/66.4a9b3b87.js",
    "revision": "e5d32cf92f93597bf97aed5f684fece9"
  },
  {
    "url": "assets/js/67.2e9e858f.js",
    "revision": "b3f6c2df214e4fbe039adfd7d31baa7c"
  },
  {
    "url": "assets/js/68.a22cb4fc.js",
    "revision": "b1fca6b5fab4c981921bb76d08b80b0a"
  },
  {
    "url": "assets/js/69.7d2ce852.js",
    "revision": "fbecfbe3aad136194dfafa738bd9f0ad"
  },
  {
    "url": "assets/js/7.b84096ca.js",
    "revision": "1d67a3f551384e2b9593bdee9cffda48"
  },
  {
    "url": "assets/js/70.1682edf1.js",
    "revision": "b71c63f545e8f7b5ca61bf416adee21e"
  },
  {
    "url": "assets/js/71.753d018c.js",
    "revision": "655190bb76a469a1986d9c3c1f1d8e14"
  },
  {
    "url": "assets/js/72.bc4df195.js",
    "revision": "a7c6d35a3207ae5bba6bd0d2683f7826"
  },
  {
    "url": "assets/js/73.e9e1ccd5.js",
    "revision": "e87ed3c7ebe222e700519636a7ba32f5"
  },
  {
    "url": "assets/js/74.6bd257b7.js",
    "revision": "6ca217b8b8a7b6a0215d5f0d94b23285"
  },
  {
    "url": "assets/js/75.1931460d.js",
    "revision": "23f25d832e4aac188d5f0401177d9e9a"
  },
  {
    "url": "assets/js/76.39256562.js",
    "revision": "53de6fd526181bb34a1126ef20d4dc41"
  },
  {
    "url": "assets/js/77.0cf29899.js",
    "revision": "8c106e8c1175d87145265346c0977863"
  },
  {
    "url": "assets/js/78.d82f2c1e.js",
    "revision": "f0ff68a3ab3f9fa25eb943601ebad53c"
  },
  {
    "url": "assets/js/79.0accf4c3.js",
    "revision": "e13e6542a8e70968007582803265532a"
  },
  {
    "url": "assets/js/8.e0b4e9b6.js",
    "revision": "3e10b43413e4745452d5c6ca705481e9"
  },
  {
    "url": "assets/js/80.9f8dc64c.js",
    "revision": "f935cd2fe261ecba8220596985a32317"
  },
  {
    "url": "assets/js/81.2874afa7.js",
    "revision": "b5f82d3e5caf0a276d43ab6249d98b78"
  },
  {
    "url": "assets/js/82.ef740394.js",
    "revision": "a3cf187a6de9dc4c6a06547538ebe25f"
  },
  {
    "url": "assets/js/83.92ac5c41.js",
    "revision": "d4b930afca32356f2d1faf892018cc99"
  },
  {
    "url": "assets/js/9.c9b5ea3e.js",
    "revision": "8efb132ffd81be90f66e868515920e4a"
  },
  {
    "url": "assets/js/app.909509d4.js",
    "revision": "4789cf70aab359cab1e5b80aa19d8710"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "353b3c528ee6d7f12bfff09e261ad566"
  },
  {
    "url": "cs/bash.html",
    "revision": "8eb7c94f9495c4da4d91e1fa569389d5"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "a8f913c2901f8c27d0d78a1affc06d32"
  },
  {
    "url": "cs/cmake.html",
    "revision": "53e735131d842bf299f1ac7639cc2740"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "1160b7e5c25aa6d67e2e664bbd46a72e"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "39e0e09ee98c71c04d94aacb5ce6e880"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "dbf143712f8b9303f64f1bb5461d6879"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "69c47c82417773e9deab91e1e6a59795"
  },
  {
    "url": "cs/git.html",
    "revision": "b5b336c2a1e6523146980af6aed3f1b6"
  },
  {
    "url": "cs/index.html",
    "revision": "822bd96a91e952d4d09d1748a9f2f5da"
  },
  {
    "url": "cs/iptables.html",
    "revision": "a6f152d6293a18f129a2ba6337d70e9f"
  },
  {
    "url": "cs/keras.html",
    "revision": "5bff8321f4ce92681c6ede9101a1ad14"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "27340f31574e52782b8676278b85e439"
  },
  {
    "url": "cs/lwip.html",
    "revision": "6fc8c057d896e2dc562017193aea426f"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "17607deefcfd488ba50df2fcd851dc02"
  },
  {
    "url": "cs/scala.html",
    "revision": "6f79866b154d65c3360ace2616a59b74"
  },
  {
    "url": "ee/about.html",
    "revision": "1d3434909d617267aeb26061e119300b"
  },
  {
    "url": "ee/chisel.html",
    "revision": "8642d0d48ea1525e137fe8f23aa6e5c1"
  },
  {
    "url": "ee/esp32.html",
    "revision": "e59e332be3f7f48e4cf4b1db9a99dd41"
  },
  {
    "url": "ee/index.html",
    "revision": "48ad10dc53575680e6bf216fa5a8f3f1"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "19b7f47aacb09c8653c00053249de006"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "2234ef757f5e2a6b31d9b41052a3d1c2"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "b51516a579b3ef3de671f02fdbec57dc"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "8d3d445d8a569e8e002c5578097a1cc3"
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
    "revision": "5e36d4e11091635f931164c2c2539380"
  },
  {
    "url": "others/about.html",
    "revision": "3657f8199c37d0cc72b87437617fd638"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "1dbca7e4016c3f464dc05353d30bb55e"
  },
  {
    "url": "others/android-studio.html",
    "revision": "ce025b66725052f91f1ae403228d390e"
  },
  {
    "url": "others/android.html",
    "revision": "9c90b2d91d4cce2bfc98f9313e8ffb0e"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "b561bf7b2742fa1331cd3a768e39e643"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "99a06342d9a8ea235ed26dd8341ed991"
  },
  {
    "url": "others/css.html",
    "revision": "f317f64da52cdef63f07918f08534048"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "520203e75ecd1503f51e627e4a280269"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "65767eeebbbc15e6cdd51ff90c0a2be0"
  },
  {
    "url": "others/english-writting.html",
    "revision": "b192251a231535b84a5c42211ae72710"
  },
  {
    "url": "others/freertos.html",
    "revision": "736ae3e0b13243d07a6587d4843f6c9d"
  },
  {
    "url": "others/gns3.html",
    "revision": "43308222ecb8599df7906eac026832f3"
  },
  {
    "url": "others/gps.html",
    "revision": "d344b5d3157e94d0e09bba8b99a1e8f3"
  },
  {
    "url": "others/html5.html",
    "revision": "7f9c486322574353da9dfbba0c471610"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "a86dda85d90cf703d5a0bf4cb95728b3"
  },
  {
    "url": "others/index.html",
    "revision": "14d6935249092b01ed805d21083bd140"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "fb77b5cb685f7330d69b65b5f5b4bd57"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "798930102c68a2a1b3b1b6a48287cde8"
  },
  {
    "url": "others/javascript.html",
    "revision": "3b863c09af396b4d85723dcb445289c3"
  },
  {
    "url": "others/json.html",
    "revision": "002d0b1ad6969298cf3257205a8645d4"
  },
  {
    "url": "others/latex.html",
    "revision": "48d48b6bcf4100a76e260ece476a9f20"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "e9c40b727886ff0274cd3c87dfa3717e"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "3c992aa17d1c7d823e2ac668c8c213ee"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "433facb363997fcfb80d2f624a24215a"
  },
  {
    "url": "others/markdown.html",
    "revision": "9e2041882ff97de1abac19883c89324c"
  },
  {
    "url": "others/matlab.html",
    "revision": "b25889f47b5e45828565de7d48780639"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "0cc325f1c783c4a591e644bd21dc7797"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "7b980eb95df0fe64b45dfb6a4a6487d7"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "44beaba11f86d8da892e71b7e5740405"
  },
  {
    "url": "others/network-security.html",
    "revision": "a8d5d97af0ac96863beefde85ec08655"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "427c3f1a059271ced138d767736425d1"
  },
  {
    "url": "others/oral_english.html",
    "revision": "1a54b4efac2b01e323c44a41497f7d15"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "e3573c2d06dba3a8f686eee0b8ea304a"
  },
  {
    "url": "others/poe.html",
    "revision": "e63f495948003f37e7f7e70204520ddb"
  },
  {
    "url": "others/pyside2.html",
    "revision": "d21ee344e94eb941a5a6e21cf1e4adb9"
  },
  {
    "url": "others/python-socket.html",
    "revision": "fde78a903bb6c314af72509e403c5fb3"
  },
  {
    "url": "others/python.html",
    "revision": "cb6115cc815a09a1f56fbfa0dcf37f82"
  },
  {
    "url": "others/q-learning.html",
    "revision": "8c10bd3a91b6375684ad3573d61fe792"
  },
  {
    "url": "others/qr-code.html",
    "revision": "d3d80217d13648c1bc08a45d371b4c4a"
  },
  {
    "url": "others/qt4.html",
    "revision": "21eb8af5aee86523a739302515adeca9"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "c2fe8a19e37f04246229a86a3b186a7c"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "7d88686d2ae41c52bd7556ec50e64dca"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "09fe6147ee8bcd7889ce44842639bf62"
  },
  {
    "url": "others/sd-card.html",
    "revision": "7b66d5319bf0986df96233a84ef9c4fe"
  },
  {
    "url": "others/sdn.html",
    "revision": "e804b54a45e90ef82ddc99fe5cd71e9b"
  },
  {
    "url": "others/star-uml.html",
    "revision": "196187fd43fc73aa41c3a72d7c967ade"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "91b0060de56220bf2e2124b95f190f9e"
  },
  {
    "url": "others/verilog.html",
    "revision": "cab0a6421df9018039d8092f9f533e5e"
  },
  {
    "url": "others/vue.html",
    "revision": "166953a53e90fe20d4167c0c7caa9095"
  },
  {
    "url": "others/w5500.html",
    "revision": "4797422e2e6b37dde115a1bcb5da0a9a"
  },
  {
    "url": "others/w7500.html",
    "revision": "b851fec23fc82c72f9a71c2a09f99481"
  },
  {
    "url": "resume.html",
    "revision": "f5afd230beb6b799656f9cea9b86a109"
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
