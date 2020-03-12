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
    "revision": "b49dfc34bed5f0645f67cc8be402b446"
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
    "url": "assets/js/15.26d43c0f.js",
    "revision": "56a770b1f170051c914da03b21d0daa7"
  },
  {
    "url": "assets/js/16.657a5d54.js",
    "revision": "ad42fe6898bc54d5de15d74f2202861f"
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
    "url": "assets/js/23.d9689e9d.js",
    "revision": "3c98e1d3b0aca39aba69053f68b0b72e"
  },
  {
    "url": "assets/js/24.17b558d0.js",
    "revision": "1a881814fced346eeb77b829fc8977b7"
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
    "url": "assets/js/53.bd7fb678.js",
    "revision": "089868bb01b06d4abd473aec96df5f96"
  },
  {
    "url": "assets/js/54.2be29717.js",
    "revision": "fad18c573f67492a8576e0e45cbda9e2"
  },
  {
    "url": "assets/js/55.27323526.js",
    "revision": "2e31edc729faf6ddf6f1d8f8c243b661"
  },
  {
    "url": "assets/js/56.b91da44c.js",
    "revision": "66be1e24a15e2dd4ef524cbf993e82d7"
  },
  {
    "url": "assets/js/57.bc1325ca.js",
    "revision": "93d6d34def3ecc53c9527556cdd66a5e"
  },
  {
    "url": "assets/js/58.d5260e63.js",
    "revision": "6fe0af1597d2968f040646dea4db7a4b"
  },
  {
    "url": "assets/js/59.bdaf2e71.js",
    "revision": "b38c53310f359324d8f0d95435b0706b"
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
    "url": "assets/js/79.68129e45.js",
    "revision": "f129e83f433745ece42b7c4f80c8fec0"
  },
  {
    "url": "assets/js/8.e0b4e9b6.js",
    "revision": "3e10b43413e4745452d5c6ca705481e9"
  },
  {
    "url": "assets/js/80.25e3516c.js",
    "revision": "d4976b8eb5d251e8e740b63e6d4b774d"
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
    "url": "assets/js/app.f2e9ced3.js",
    "revision": "9f5b18b7865825ba1b008d673c7cd8bc"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "7553dc49eafadd8df5109a2a8b0ded4c"
  },
  {
    "url": "cs/bash.html",
    "revision": "76b2acac524ab5e23d3f9bf7ba3e9d70"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "d71cb917bd86b7cbf9800135fdeb463b"
  },
  {
    "url": "cs/cmake.html",
    "revision": "a9472c76126aa0fa1d607bf5b1e01242"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "83cabd6a84aa6965ed44cf282fc09c2d"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "9a6d3f5e65e2efe017ac32c933ea9091"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "c27eddded7137023be27eeeadcbb5240"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "3d1cb5f91b663e2ed9b503cf42a7c87c"
  },
  {
    "url": "cs/git.html",
    "revision": "70b6d4c567db19f9b87557a2108739e2"
  },
  {
    "url": "cs/index.html",
    "revision": "b15df900e5b987c39e90122598ccbfe9"
  },
  {
    "url": "cs/iptables.html",
    "revision": "078ff923ed3b3766641b54997d53c689"
  },
  {
    "url": "cs/keras.html",
    "revision": "04cc469430a325343554bcee8f8fa8d9"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "9e95ccdc28d1ea1b11edefdae4bdee1c"
  },
  {
    "url": "cs/lwip.html",
    "revision": "8264f755749f2ee50f05b75d298ce79b"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "eab81f497c90a3eef7bf99ecc2aa38f0"
  },
  {
    "url": "cs/scala.html",
    "revision": "622b050669aa97c852e15a8c77432dde"
  },
  {
    "url": "ee/about.html",
    "revision": "5ea73cf09a24d515dc617163b8c41167"
  },
  {
    "url": "ee/chisel.html",
    "revision": "343ba144d34368872baed3935bf4e096"
  },
  {
    "url": "ee/esp32.html",
    "revision": "48f27082915e8e0b582c8615627ccfd0"
  },
  {
    "url": "ee/index.html",
    "revision": "2cff2eb05ae2cedfa34b3615778710bd"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "aa0ef8b4f32f6939996e4d1820e14fd4"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "6f80186baca78725e68426929aa9029a"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "43e572b2404e6d67d82964cd7f41fd7e"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "c547ea360a7e9305ad9f3ebc11824f37"
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
    "revision": "a176372965fff445fe8c2d48ce0d66a4"
  },
  {
    "url": "others/about.html",
    "revision": "ad62d7d084399eebb6bf11e85235b93b"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "249a5409196ee742f0011c9d1c397fd7"
  },
  {
    "url": "others/android-studio.html",
    "revision": "bdccdba6c4d38f502d5aebf2da132838"
  },
  {
    "url": "others/android.html",
    "revision": "0630a05d29cd8477f1e153b8240f6270"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "e13a7093832a08ca62a59c4b4aadee97"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "3f1bbf832393a494124165fdcb1cdbbf"
  },
  {
    "url": "others/css.html",
    "revision": "b647ae74eda872352956526774b0ad75"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "0e0f1df809dcc76a2319fe219c5c710d"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "93e7c266e2eb8e3e7473a42563603e96"
  },
  {
    "url": "others/english-writting.html",
    "revision": "0fbc7a70eb1280ae437ff93dfc0bb821"
  },
  {
    "url": "others/freertos.html",
    "revision": "1bb40fbfc9bd5e1f3095826a99085552"
  },
  {
    "url": "others/gns3.html",
    "revision": "56c38d376d4d41bf3262d908ec0d91b1"
  },
  {
    "url": "others/gps.html",
    "revision": "fdb1f704a872449e6e478fce201033ab"
  },
  {
    "url": "others/html5.html",
    "revision": "86e1f70015d739a52e95514f1cdb1df2"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "0738a4747fd6ef771e56a0e02d558a1b"
  },
  {
    "url": "others/index.html",
    "revision": "2f2b0a17a720c30e367e3fa08e6ba850"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "ce1baf84b830c4e77611b69773455b23"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "ace09a013a121ddf89ff4e1641611f3c"
  },
  {
    "url": "others/javascript.html",
    "revision": "14e23d3ad66370bb98afe2087c985c48"
  },
  {
    "url": "others/json.html",
    "revision": "141679bfa22f9b96ba707a70238f404e"
  },
  {
    "url": "others/latex.html",
    "revision": "52c2f1c204b0cb746759d5a5b8a227f1"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "874ec75066fd4daa5c52b2dc19fbf65d"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "88e0481c427f437fa0fd9f654507c186"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "a487b7991eddb829092fa234da73c384"
  },
  {
    "url": "others/markdown.html",
    "revision": "6e959acee3c551ade443c20684581929"
  },
  {
    "url": "others/matlab.html",
    "revision": "3e6a203ae91c5d43058a3f48dc378f4e"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "caeb8e129cf456489cd3d05ac5d0f108"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "f67470dc0404c9dcd32dd8415b8294e8"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "c88f0d9813da3a654f95a08076c868dd"
  },
  {
    "url": "others/network-security.html",
    "revision": "82d158b6acc59e4dc854aee13a6fb4dc"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "6828917a61d9385b442914d19513c546"
  },
  {
    "url": "others/oral_english.html",
    "revision": "c9ec4ec564dc60cd18dcd44a363c2cac"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "dc6a11fa4f965c0de7b2a50c43ada2d6"
  },
  {
    "url": "others/poe.html",
    "revision": "d028c88b7173170a179336897150c984"
  },
  {
    "url": "others/pyside2.html",
    "revision": "bec91da6314a1b50ef86878dd33a312d"
  },
  {
    "url": "others/python-socket.html",
    "revision": "521544a4b5f408158741d48e9020f9c1"
  },
  {
    "url": "others/python.html",
    "revision": "68d190c2155f5def1af706e2875d9e0f"
  },
  {
    "url": "others/q-learning.html",
    "revision": "e2194cb451bd8a8453dbcbf5b8e77ca3"
  },
  {
    "url": "others/qr-code.html",
    "revision": "380cdebeea195ce66c4a4952d195913d"
  },
  {
    "url": "others/qt4.html",
    "revision": "822c238cb7e96f97db81b674948f54f1"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "d136921107db67d01dba1da32709d6d8"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "e2c3afbeee6d7888f18c28c2da23da7b"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "03aae317f4ea7e4a3ce0788f33c91130"
  },
  {
    "url": "others/sd-card.html",
    "revision": "7c3b65b0baf2e7b43a819deb489de219"
  },
  {
    "url": "others/sdn.html",
    "revision": "477029e0b4cda5395845a3b733b788e5"
  },
  {
    "url": "others/star-uml.html",
    "revision": "ac7509957aa7fe72a507f02864a51ce7"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "153e20be8d71ad59fa5107d80b0f87ec"
  },
  {
    "url": "others/verilog.html",
    "revision": "3abe8b0aae0ab9e71430696b773307a1"
  },
  {
    "url": "others/vue.html",
    "revision": "1fc247c3986538ac5074a3b877f19c08"
  },
  {
    "url": "others/w5500.html",
    "revision": "4bd3d950fc38fe015fdf7c8684b8181a"
  },
  {
    "url": "others/w7500.html",
    "revision": "9537dfd59a6631572aa991879d5e9dde"
  },
  {
    "url": "resume.html",
    "revision": "1823a2ecac688db6f730c076078cb355"
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
