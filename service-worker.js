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
    "revision": "9432655a8323f5272d6a26ba9f03c1db"
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
    "url": "assets/js/13.84e335ae.js",
    "revision": "a1cef4244afb8071bf7bdb22ae166ecf"
  },
  {
    "url": "assets/js/14.c4000495.js",
    "revision": "3e0895a65b98bae0d271a60aaea37178"
  },
  {
    "url": "assets/js/15.e781866a.js",
    "revision": "31538d389b9832788f27dc8f960614fe"
  },
  {
    "url": "assets/js/16.fa4c991f.js",
    "revision": "ca479607a4413be713e20f02ecdb5c18"
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
    "url": "assets/js/25.931c0777.js",
    "revision": "a5ced7c36caa046814fce5e0563e4f3f"
  },
  {
    "url": "assets/js/26.e151e86f.js",
    "revision": "2204cfe35423ff90e379fae7e893e316"
  },
  {
    "url": "assets/js/27.29b2e2bb.js",
    "revision": "34e5b47aeb2435dd9cef7d91dddc8e37"
  },
  {
    "url": "assets/js/28.dc122af9.js",
    "revision": "4120210e53c4987281f5543549bfebdf"
  },
  {
    "url": "assets/js/29.be1753ff.js",
    "revision": "5a3bee9cefbaebf35d70bce30797bc28"
  },
  {
    "url": "assets/js/3.76ba8f1b.js",
    "revision": "7222ba68647cecaee5756e11fbb11c4c"
  },
  {
    "url": "assets/js/30.0d5e83e6.js",
    "revision": "75e8606d5a00024f3606125d00f51fbf"
  },
  {
    "url": "assets/js/31.2769efa3.js",
    "revision": "37c6ca429ec4d6124547614bf2013732"
  },
  {
    "url": "assets/js/32.ffdda388.js",
    "revision": "5d71c86eba98747a1d6362dbd4d0c185"
  },
  {
    "url": "assets/js/33.587a5642.js",
    "revision": "f80e809ef5969bd6b30ce8a6f0a672e2"
  },
  {
    "url": "assets/js/34.1404c8e6.js",
    "revision": "7cd227efccc9b1d7ef5ced8681453e16"
  },
  {
    "url": "assets/js/35.d1fc118b.js",
    "revision": "8b13ed27182042eb7736de5465b4bfcc"
  },
  {
    "url": "assets/js/36.1045a689.js",
    "revision": "6d4b79bbdb6ad9f667c6b67b1469806c"
  },
  {
    "url": "assets/js/37.a76839fb.js",
    "revision": "fb4049c756d27ee294668d232cd97cb1"
  },
  {
    "url": "assets/js/38.c05ef0dc.js",
    "revision": "f72e5ec971456c4cee63d3225b31266b"
  },
  {
    "url": "assets/js/39.9e12d8c3.js",
    "revision": "bdd024039af64f0325ef39e7adff1e5f"
  },
  {
    "url": "assets/js/4.68a7c28e.js",
    "revision": "dd024def18bed3e0d2b6c1c4e7347701"
  },
  {
    "url": "assets/js/40.4ea3f296.js",
    "revision": "94af3c4cac45fb9f18f86a1019a3fdd7"
  },
  {
    "url": "assets/js/41.a30cc061.js",
    "revision": "a896ee202e14298ca5f7047087bda1cf"
  },
  {
    "url": "assets/js/42.70d41079.js",
    "revision": "cfa98aa5f9a1304b0f1df2c8f537dbfe"
  },
  {
    "url": "assets/js/43.8fccce89.js",
    "revision": "c156bbca7216e7af0edfba2932cc0620"
  },
  {
    "url": "assets/js/44.0d2b4e26.js",
    "revision": "5a01abecb2920af31457bfe02d0bc352"
  },
  {
    "url": "assets/js/45.d889890f.js",
    "revision": "75421f8d68e262b09686aba8803fcdab"
  },
  {
    "url": "assets/js/46.9b95413b.js",
    "revision": "269944499eaaa24ec2a367a067b7dc78"
  },
  {
    "url": "assets/js/47.80b93c57.js",
    "revision": "27a38f39c7a2257a8565291beffbe2d5"
  },
  {
    "url": "assets/js/48.6f89d7a3.js",
    "revision": "8aeec3424dda5f50404ad9b57d8293d6"
  },
  {
    "url": "assets/js/49.af06bb03.js",
    "revision": "af3afdd5f0518c7884e95c58ae7b3d22"
  },
  {
    "url": "assets/js/5.06752cf7.js",
    "revision": "dd4f62d033e43eb8493f1f1001642f1d"
  },
  {
    "url": "assets/js/50.a3bdac28.js",
    "revision": "7c5386ea7dcfb7fc79eeb0cf9d5be88e"
  },
  {
    "url": "assets/js/51.c556ecfd.js",
    "revision": "70fa88410df8e63be70b1ee874286f7b"
  },
  {
    "url": "assets/js/52.a3e0e766.js",
    "revision": "840b4c19344a885b2a3eeac398a747e6"
  },
  {
    "url": "assets/js/53.fef96ac7.js",
    "revision": "c4d10574ad63a7a3184912c720b7df95"
  },
  {
    "url": "assets/js/54.62f73e39.js",
    "revision": "239d716ec6f7bb4f0d963bcd6920b4e2"
  },
  {
    "url": "assets/js/55.7fb18780.js",
    "revision": "67dd0fa1eaf7cbe490316ff9d46db7d6"
  },
  {
    "url": "assets/js/56.ade962e7.js",
    "revision": "455ac0e8c04fb007bd69a17cfe1c2596"
  },
  {
    "url": "assets/js/57.bcf5c5a4.js",
    "revision": "1ea194946c9075ec8ebc6e0de35f3716"
  },
  {
    "url": "assets/js/58.dfdd55f9.js",
    "revision": "4a7b15bca02a3f0ec063df9268568a8c"
  },
  {
    "url": "assets/js/59.c0a39094.js",
    "revision": "9dd3886301fcdc4742040376c6328d5a"
  },
  {
    "url": "assets/js/6.e2ee250e.js",
    "revision": "dc9895c03637f2713e085e867e356718"
  },
  {
    "url": "assets/js/60.9d4f3fc5.js",
    "revision": "d1522075ed4e20d981929192284c7532"
  },
  {
    "url": "assets/js/61.abc86ca5.js",
    "revision": "510d5d5f59f654f23dc75924d29347e4"
  },
  {
    "url": "assets/js/62.1e9f55e4.js",
    "revision": "e77a745dfca7ada20400b966ae41ba05"
  },
  {
    "url": "assets/js/63.43390a17.js",
    "revision": "01ab15f002dc0d20369209ac39b9e3da"
  },
  {
    "url": "assets/js/64.4d7cb2b2.js",
    "revision": "6ce6e0f5b28988c9fc858da6e60893d0"
  },
  {
    "url": "assets/js/65.c638e295.js",
    "revision": "c4167e84f5a7ed127917a9252aff52e1"
  },
  {
    "url": "assets/js/66.5f5322ad.js",
    "revision": "3325837c3ae9ae7abe964174b708124f"
  },
  {
    "url": "assets/js/67.e16fc39b.js",
    "revision": "0576d2221f3397896a89672df8debb91"
  },
  {
    "url": "assets/js/68.ffd798f4.js",
    "revision": "78af999a2fb8e0b6a579e0ca25990096"
  },
  {
    "url": "assets/js/69.a649e83b.js",
    "revision": "189d8d5dd75ab68c491e6ec381fb7c6c"
  },
  {
    "url": "assets/js/7.1d0044c6.js",
    "revision": "6f27c07307d79ff20f71adb497fea3ff"
  },
  {
    "url": "assets/js/70.e6ade8a1.js",
    "revision": "18ece5245c806d3094d14b29a9a9a462"
  },
  {
    "url": "assets/js/71.135ca774.js",
    "revision": "e2b563482fd633abe5baa111ad9f8d80"
  },
  {
    "url": "assets/js/72.fe6c20c8.js",
    "revision": "ab3f777c04e2c8231f9c99c17aa14dd1"
  },
  {
    "url": "assets/js/73.982b817e.js",
    "revision": "0ad7d39449976ba648aac750c8dd987d"
  },
  {
    "url": "assets/js/74.c1c49185.js",
    "revision": "1a93fb4e834ccec0aede5075dfd17048"
  },
  {
    "url": "assets/js/75.32ed0bc3.js",
    "revision": "69830612615607a3d59c1300c6b8fc38"
  },
  {
    "url": "assets/js/76.0750685c.js",
    "revision": "04337234e5aaf041d6996c891af86b4a"
  },
  {
    "url": "assets/js/77.2a72bb10.js",
    "revision": "ff9916b8de447b0bee0d0d4081d5da7b"
  },
  {
    "url": "assets/js/78.0d7a06d6.js",
    "revision": "2d6aa3788b1a6e82c5e1a359869002f8"
  },
  {
    "url": "assets/js/79.a41d6c9e.js",
    "revision": "c877fddd33c992ce3488a4eb93b1ec1f"
  },
  {
    "url": "assets/js/8.510a1287.js",
    "revision": "6ff2b99d78cdaa30ad7e4ce0760da076"
  },
  {
    "url": "assets/js/80.9b4728c9.js",
    "revision": "85525c6c01a491136ea84ca7590a2071"
  },
  {
    "url": "assets/js/81.7f7dbcea.js",
    "revision": "57dfb6b3eb6dbddd9df4df23620da5b9"
  },
  {
    "url": "assets/js/82.7daefc0b.js",
    "revision": "0a478bbb3d3bc54717f2689aa2b6de62"
  },
  {
    "url": "assets/js/9.6c12a8c3.js",
    "revision": "77470d20ca05c80011076e9a24ac0423"
  },
  {
    "url": "assets/js/app.dfa7a96a.js",
    "revision": "fe98ac3196e19ca5d8b8e9bb909a40ac"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "64a8d0257216d0951b02b21d7f672fba"
  },
  {
    "url": "cs/bash.html",
    "revision": "8aaf8f6beb507d07d3b0e2f58c22d4aa"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "468bc87c77051b497061ec9ef3f92384"
  },
  {
    "url": "cs/cmake.html",
    "revision": "72017436cfce7ea7070ad1134e38af15"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "4d7001d90d822a21ed104206c1aa83f9"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "ad2121e7234b9d6714b9ac220d548cae"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "23323232ea9e683b6d03c5dc0160d5bb"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "70bab9233bd059a740292ddc284431bd"
  },
  {
    "url": "cs/git.html",
    "revision": "d7d35a1944042fd634e54dc4ca8b1008"
  },
  {
    "url": "cs/index.html",
    "revision": "0880417c2ab6279424f92b645295dcc0"
  },
  {
    "url": "cs/iptables.html",
    "revision": "6ef7c6f28610b624a50bf47413f780e9"
  },
  {
    "url": "cs/keras.html",
    "revision": "a795f35932ec211aabb7616c646d0b6c"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "8ecd8f8ce55ea08367c66f6d39d747ba"
  },
  {
    "url": "cs/lwip.html",
    "revision": "855d9626c53751dac655a5e279f8e2f4"
  },
  {
    "url": "cs/scala.html",
    "revision": "178400b6de49b45b7790818c315d66ca"
  },
  {
    "url": "ee/about.html",
    "revision": "4fea25a2cf7ee8c59fe3542f8cf9ff32"
  },
  {
    "url": "ee/chisel.html",
    "revision": "58bdbc974d755ab86edc01f914358e53"
  },
  {
    "url": "ee/esp32.html",
    "revision": "d4f9115310f5a181c0f46d5d15347159"
  },
  {
    "url": "ee/index.html",
    "revision": "fbf8d959a19dab096d94038dd0f89ba2"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "01728998186ce8f414dcdf02e878acd5"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "2e600b4c8fe3a665a5275534eeca8110"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "f85764e8391eec1d5a4409873d1a04a0"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "399a75978c3e9365a726d02c8487fd01"
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
    "revision": "9f84071d545fe9cdcf08c6d7ad491cab"
  },
  {
    "url": "others/about.html",
    "revision": "4047ca6053a0c6d0371a3afaf718c069"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "8192465f7c3f507d0d9f33f25a3e29a8"
  },
  {
    "url": "others/android-studio.html",
    "revision": "9e55594b019b736236305520d42caf12"
  },
  {
    "url": "others/android.html",
    "revision": "42ed496812c25843e768e4dd50f577bb"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "9393119ae97e354f747f2781b8c6e0b0"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "195000170805b2e4d1205dfd7a4fe19a"
  },
  {
    "url": "others/css.html",
    "revision": "438453df38d17cb2606beddb61e0c317"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "f83fedd2cef7b1ee5e3645993dde8f4b"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "05f46f21a94b941f2e312598bf96000e"
  },
  {
    "url": "others/english-writting.html",
    "revision": "3841ed61554357097031033cdf6d92bd"
  },
  {
    "url": "others/freertos.html",
    "revision": "d216ffdf0bcfb38fe29f6b3ffd9203f0"
  },
  {
    "url": "others/gns3.html",
    "revision": "22682ba113c741b58f05532de1279106"
  },
  {
    "url": "others/gps.html",
    "revision": "f84554279abad3226183f8c455f5abd2"
  },
  {
    "url": "others/html5.html",
    "revision": "6c59c9839c098babadc4c6179e57ff6b"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "ee7c1002ccd765b83a58f0f99094fd26"
  },
  {
    "url": "others/index.html",
    "revision": "04cf176fa162cbb62b11cc08fe7d5cec"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "9f38ba6f6f3841a477ac539081102f37"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "5f0e2c431a3dc548174812e8c97c4ffa"
  },
  {
    "url": "others/javascript.html",
    "revision": "f1d02158f5c40739f993149cdd4f9ed9"
  },
  {
    "url": "others/json.html",
    "revision": "a79c5c96a29be206d841385919a8a717"
  },
  {
    "url": "others/latex.html",
    "revision": "9b431d92ee261c1a5c1c1671a082617e"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "d4447ee6a3f5d883f9657f1637cd9aee"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "d965772aab9495d96776179151d9a5b0"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "9d6cb8b476158d5c83a003011c8be8dd"
  },
  {
    "url": "others/markdown.html",
    "revision": "ce49398d41f201c2eb68db7229002cff"
  },
  {
    "url": "others/matlab.html",
    "revision": "f8ab021c1747d9b37adeaea9aa401587"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "b13835c35c699e0a11a9265af991bc83"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "df8622a838b5f9a33a4f7409cf421e89"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "d9bc72f1771cb273f09d27708f0006f4"
  },
  {
    "url": "others/network-security.html",
    "revision": "4fd1db55309fed164d34d441fc966e7f"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "6d99035b8b3252a6d66442debf116b1a"
  },
  {
    "url": "others/oral_english.html",
    "revision": "aec287986b55f96578449aeb64bf66f5"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "10cc48f6ef045dbbc1da9825612fe00e"
  },
  {
    "url": "others/poe.html",
    "revision": "6be9110d0183704a557884d38033e23b"
  },
  {
    "url": "others/pyside2.html",
    "revision": "ef1882b2f10a2e50a49834c8c8999d46"
  },
  {
    "url": "others/python-socket.html",
    "revision": "0807c19c79f95eb51051b7bb5a5a1f7e"
  },
  {
    "url": "others/python.html",
    "revision": "f78277fd5ecf398db15b50ab4c8de79a"
  },
  {
    "url": "others/q-learning.html",
    "revision": "172f923d3d17cd3526c2c9aa9507a7b3"
  },
  {
    "url": "others/qr-code.html",
    "revision": "32a88705f78cbea2aa5bb165af390014"
  },
  {
    "url": "others/qt4.html",
    "revision": "b6a8f3f38e539c4d5031caf72838f9a4"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "48299955f97225e5db53da17e7138c24"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "5227b28c43275a09cb9e7052b026162c"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "7fe384b9ec3bc463428fa3394c3739d0"
  },
  {
    "url": "others/sd-card.html",
    "revision": "8cb88d616e8f6d593f22e11a4762d966"
  },
  {
    "url": "others/sdn.html",
    "revision": "52209c47f6053781636711d93057e908"
  },
  {
    "url": "others/star-uml.html",
    "revision": "8064e8da990d4bafa8e11bbc07982ff1"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "95d5947047cacbe78659e3723d697214"
  },
  {
    "url": "others/verilog.html",
    "revision": "50554d8367f68f11f2a85460a8f0ac48"
  },
  {
    "url": "others/vue.html",
    "revision": "67254464dec9a04fff3f9596dad984b2"
  },
  {
    "url": "others/w5500.html",
    "revision": "b315dd875e6f9a17516885bb7dc48957"
  },
  {
    "url": "others/w7500.html",
    "revision": "c2881bc95e2eb3d18f0507d1a620ef7d"
  },
  {
    "url": "resume.html",
    "revision": "8d1bf73195a7ff6aeb5ada152f7b3eee"
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
