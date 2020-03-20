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
    "revision": "1fb3af5d7f7d927bd3a700dd6213aa80"
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
    "url": "assets/js/10.c0615258.js",
    "revision": "300d5d1503596d5a77adb236a716699e"
  },
  {
    "url": "assets/js/11.7ffe868f.js",
    "revision": "d8015a208b13edb897843b76ea682439"
  },
  {
    "url": "assets/js/12.e4e13224.js",
    "revision": "324887004144f61fa59f682e021dfef9"
  },
  {
    "url": "assets/js/13.da597169.js",
    "revision": "04d832cb55389fb66c2c7755a57805dd"
  },
  {
    "url": "assets/js/14.79892527.js",
    "revision": "1a0edbb57ab8b65023eddb07a9e5cd54"
  },
  {
    "url": "assets/js/15.48b792d6.js",
    "revision": "4cf2280a0ae467935cd53d10f4505a2f"
  },
  {
    "url": "assets/js/16.4cfe11e2.js",
    "revision": "694240726c4966e62712083fc0e45e4f"
  },
  {
    "url": "assets/js/17.7d09b19f.js",
    "revision": "399168979eefcdd0362fe2b2bd0edcd5"
  },
  {
    "url": "assets/js/18.d86aa9d7.js",
    "revision": "bfb1934e34b90b62f7b72b6d5602097a"
  },
  {
    "url": "assets/js/19.aef6d069.js",
    "revision": "4e03ea87bf4dc460322cea41e17b25f4"
  },
  {
    "url": "assets/js/2.c8b3192c.js",
    "revision": "daa71ae404a599f1bed0325a5ff5756d"
  },
  {
    "url": "assets/js/20.9a927eeb.js",
    "revision": "f3d1437cd50d1aea67a1d086e1c968ca"
  },
  {
    "url": "assets/js/21.93a57204.js",
    "revision": "449610694d534eb56ae852489d824334"
  },
  {
    "url": "assets/js/22.061cca66.js",
    "revision": "4095ae96ac16190d5d7d29f2ee15399f"
  },
  {
    "url": "assets/js/23.785fa11a.js",
    "revision": "43b034dc90ef9bffe4a3fa08f7564bc7"
  },
  {
    "url": "assets/js/24.e60029ce.js",
    "revision": "cdf6128eb382b0d4cb21603bf76b1cb5"
  },
  {
    "url": "assets/js/25.87e460df.js",
    "revision": "4e2c8db45c2ce1639b7fd42d4b61e722"
  },
  {
    "url": "assets/js/26.927e6e3a.js",
    "revision": "5822edd90f37cd3971bf463438028a57"
  },
  {
    "url": "assets/js/27.72604011.js",
    "revision": "02b1c5aa674265625fb1dfae6df74ad2"
  },
  {
    "url": "assets/js/28.8e975129.js",
    "revision": "156024836742b5ccab3087620b1bbb94"
  },
  {
    "url": "assets/js/29.99177fe3.js",
    "revision": "f6b42965297c7ca2d7cb93257a40f5b3"
  },
  {
    "url": "assets/js/3.f7e5f015.js",
    "revision": "fc1fef5eccbc21e5d7bf8cb8c2c189fe"
  },
  {
    "url": "assets/js/30.a9ac6870.js",
    "revision": "36717a944d6dd09511a2c67679283d8e"
  },
  {
    "url": "assets/js/31.c3a49cd8.js",
    "revision": "0cdeb86dadfa581c89ec09bab96e77f7"
  },
  {
    "url": "assets/js/32.3acd8a55.js",
    "revision": "48b2a479d5d56fb7196b19ef1df22fc5"
  },
  {
    "url": "assets/js/33.24390a56.js",
    "revision": "58d0f8ae3b082a102d0da90bc290c859"
  },
  {
    "url": "assets/js/34.8d6f6eb1.js",
    "revision": "10afe981b67feb0a5ba0067575c3dcef"
  },
  {
    "url": "assets/js/35.8ab98f81.js",
    "revision": "1f2cb91af1f4153ce29f561aa6c536e6"
  },
  {
    "url": "assets/js/36.fa53c9b5.js",
    "revision": "a92715446f678bc4df37bac48b14fbf0"
  },
  {
    "url": "assets/js/37.26016435.js",
    "revision": "9295e27dd8a1200bbc699206ed625733"
  },
  {
    "url": "assets/js/38.15a635e6.js",
    "revision": "69c7a10aad4b8289997b6dfff7c7da99"
  },
  {
    "url": "assets/js/39.5f70a964.js",
    "revision": "4af404a7de10c1eb3f9494ec4cf0c3ec"
  },
  {
    "url": "assets/js/4.8d2abcb5.js",
    "revision": "96bfef838cdac99132f78dd78233ab7e"
  },
  {
    "url": "assets/js/40.75d5437d.js",
    "revision": "1d593939da7de82f86e6ef15b4414211"
  },
  {
    "url": "assets/js/41.f9e15143.js",
    "revision": "6ce77df6ad25c96795f5218de3f5b46f"
  },
  {
    "url": "assets/js/42.34f0b8a4.js",
    "revision": "92d325780a1f841ab765663905104486"
  },
  {
    "url": "assets/js/43.9ea259b8.js",
    "revision": "df8261007163ac89fcd8f546db047533"
  },
  {
    "url": "assets/js/44.006a0e66.js",
    "revision": "67acbf517281424debbc8449ce4c5258"
  },
  {
    "url": "assets/js/45.ea096179.js",
    "revision": "17a3d3d115a8f0f883be4da5a316fe94"
  },
  {
    "url": "assets/js/46.2d9f4512.js",
    "revision": "2788cd666e0d12f1ff8478e9a4d037a5"
  },
  {
    "url": "assets/js/47.46ea25f8.js",
    "revision": "89124a6b5c82058b668bca1ce22af4fc"
  },
  {
    "url": "assets/js/48.863ecbaa.js",
    "revision": "4f439f1dad9317d5f73d3b784457c414"
  },
  {
    "url": "assets/js/49.becf6907.js",
    "revision": "3a68f28778dc9daf8b92ccb115ff388e"
  },
  {
    "url": "assets/js/5.d2563bf6.js",
    "revision": "9b296043b5b65f613374e471bd8cd390"
  },
  {
    "url": "assets/js/50.bf8ef837.js",
    "revision": "0f3b1cf671f8a3717a5a0126aca7c9b4"
  },
  {
    "url": "assets/js/51.9618fd83.js",
    "revision": "035a4afccd59c78fd6128380c88cd1f2"
  },
  {
    "url": "assets/js/52.05cbe098.js",
    "revision": "f8f7a2fe9b68840e96f2fc2d808bb9df"
  },
  {
    "url": "assets/js/53.33a83636.js",
    "revision": "9bd69806d210bd593cb23b2f3fc333d6"
  },
  {
    "url": "assets/js/54.92d0d239.js",
    "revision": "af0c3554494ed60d164dbf5f71e769b6"
  },
  {
    "url": "assets/js/55.722aeb7a.js",
    "revision": "5d959b97e801b5a85945c399af24cd15"
  },
  {
    "url": "assets/js/56.4a4e1d44.js",
    "revision": "a3af2936dc1b7b33b968f41137b91539"
  },
  {
    "url": "assets/js/57.e2961a15.js",
    "revision": "2d8b5b67cf725e89290e662939567480"
  },
  {
    "url": "assets/js/58.6d9537e3.js",
    "revision": "81e87bdcf53976d1cd1975dba9144237"
  },
  {
    "url": "assets/js/59.249bd80e.js",
    "revision": "8a0f8a2ad12bfd98820c658830a93476"
  },
  {
    "url": "assets/js/6.962f953e.js",
    "revision": "f57e1b5feefc7e8884d37bdd59885ba0"
  },
  {
    "url": "assets/js/60.a5996f3b.js",
    "revision": "a4de7f3e0260e06128b36617c5f4909a"
  },
  {
    "url": "assets/js/61.e54d1866.js",
    "revision": "ba410b859be53be178a4c0c67eee98e6"
  },
  {
    "url": "assets/js/62.63e9f1d3.js",
    "revision": "92dceb6da8e087a091bbce66b9136833"
  },
  {
    "url": "assets/js/63.e425d595.js",
    "revision": "8b43dd3f79d97519584810a87fb6d217"
  },
  {
    "url": "assets/js/64.c508a0e9.js",
    "revision": "b4d6fd4c781a0a88f581216264432b7e"
  },
  {
    "url": "assets/js/65.a5fcec1e.js",
    "revision": "ccebd9ca4b354f92f7b512b6d968afef"
  },
  {
    "url": "assets/js/66.55acd939.js",
    "revision": "86dff32b2d077388e2a66be198bab1e1"
  },
  {
    "url": "assets/js/67.7d3f61db.js",
    "revision": "aa7cb43e8028e65a7d1c1ef435218ea2"
  },
  {
    "url": "assets/js/68.1c356a22.js",
    "revision": "413f3af6e2038563716d40d990bd431d"
  },
  {
    "url": "assets/js/69.eecc690c.js",
    "revision": "f4669a4b7f71607fac52f06d0811e8ec"
  },
  {
    "url": "assets/js/7.8086a7e8.js",
    "revision": "674df332ad5ff4a80fc7b01a366b2e7c"
  },
  {
    "url": "assets/js/70.08dcdf90.js",
    "revision": "760c01e939db037c3e2f97a68ecefef5"
  },
  {
    "url": "assets/js/71.201d226c.js",
    "revision": "ff381ee19aa564a601e10fc74fa78052"
  },
  {
    "url": "assets/js/72.aeb70bdc.js",
    "revision": "d0728bf36dfd6ea7e7a13c47a82282fd"
  },
  {
    "url": "assets/js/73.6ffda668.js",
    "revision": "8eab36f96ce20eacbfbe03ba3d1c1cc6"
  },
  {
    "url": "assets/js/74.f477c3ec.js",
    "revision": "dd60d2810e017d97c11c59860b997e42"
  },
  {
    "url": "assets/js/75.8c3a9534.js",
    "revision": "63454c1302e1d4cc5ab5b4464d76efb0"
  },
  {
    "url": "assets/js/76.446a4462.js",
    "revision": "8e3bbb802ca9689b89eaf478eb3f8e84"
  },
  {
    "url": "assets/js/77.4433c7be.js",
    "revision": "1afd2f621a9f1c6b787a69c258d693ac"
  },
  {
    "url": "assets/js/78.83811337.js",
    "revision": "b8815825ae670a0eb4f109f2b66c5855"
  },
  {
    "url": "assets/js/79.fd498ba3.js",
    "revision": "5254caebfbd9f69f3c00b44169f306e9"
  },
  {
    "url": "assets/js/8.2f010e4e.js",
    "revision": "b374a901b7abccc2160220eb54683bd4"
  },
  {
    "url": "assets/js/80.779257bb.js",
    "revision": "9387482c454e1e7a23928b17cd0031e1"
  },
  {
    "url": "assets/js/81.9801aaf9.js",
    "revision": "f853c7ec455b934bac14746b2988747b"
  },
  {
    "url": "assets/js/82.bb000e9e.js",
    "revision": "0bf52afeaa88b447a46cdf703fead2d7"
  },
  {
    "url": "assets/js/83.92ac5c41.js",
    "revision": "d4b930afca32356f2d1faf892018cc99"
  },
  {
    "url": "assets/js/9.8621f8ee.js",
    "revision": "e74d7f95e1db06107cef5fb4a769fea6"
  },
  {
    "url": "assets/js/app.86a6b766.js",
    "revision": "5f97dddfb570c46c24394950624d0898"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "bdbfe221fb299cd310ac24746b99001a"
  },
  {
    "url": "cs/bash.html",
    "revision": "3be65608bb4b68215953a956c1a4f114"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "0056417321a955e32da5371de0a969b1"
  },
  {
    "url": "cs/cmake.html",
    "revision": "3bdf93e8da946415146b9585639a8b5d"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "3143bdcfc378579ff1a1a9d844272f4d"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "6f5f1b2a771ca0714bb58b5efab5b1b2"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "045a047d4bf584d5150d1f1975d0fbf6"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "5de0ebe032a444d49a15b53e8072c8e0"
  },
  {
    "url": "cs/git.html",
    "revision": "70e37819f090d64aa6ca069180b0dfc1"
  },
  {
    "url": "cs/index.html",
    "revision": "23b50eb7d43dc4462f4716c6acaa73b4"
  },
  {
    "url": "cs/iptables.html",
    "revision": "1adf1b3b07b0b93d352a3395d860eb08"
  },
  {
    "url": "cs/keras.html",
    "revision": "cc64ecf1b0ca826a7b0439a05b4ed8f3"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "345af6276cdd030a28635e103ae796ee"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "8fa36469d6b5d3b7f60edf372b123ce3"
  },
  {
    "url": "cs/lwip.html",
    "revision": "48a415705f1c13654142c7e532ce123e"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "70437d79a9c2464c5f68f5e9ba1822f4"
  },
  {
    "url": "cs/scala.html",
    "revision": "a8a8dcb1d56d259cccccba90633f661d"
  },
  {
    "url": "ee/about.html",
    "revision": "61fd55b43fb7abc4e783e725cc0c620f"
  },
  {
    "url": "ee/chisel.html",
    "revision": "54cc35b47b7b9d5592733f68bd9a571f"
  },
  {
    "url": "ee/esp32.html",
    "revision": "30964ebc772908a33c1a906c823c2daf"
  },
  {
    "url": "ee/index.html",
    "revision": "023101ddbd3fc22f8615fe98a03bc54d"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "9df934da4534a918b94a30cd65c3b1d1"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "4f8a50f4ec77f7c3182939f1adaeafb6"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "3eb888685d6eebcd4d086ac5d4f2333c"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "0f4d6ceb201f08c7e927039ebcd05834"
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
    "revision": "bf3b44554cc08ff05f50c850ae3a6224"
  },
  {
    "url": "others/about.html",
    "revision": "1cc30cf54dcb8fc935334b1a4f3676b1"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "9be950545ac73c7415d2e8063ff5d46e"
  },
  {
    "url": "others/android-studio.html",
    "revision": "a44d0ba501d2109c60ad432ce356543c"
  },
  {
    "url": "others/android.html",
    "revision": "21f855a138f274fef8bb686277b744b2"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "7b44029a3abdc8cebc4a66b9b82f3288"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "45281a8ce6bf33eae9567b8f79f4161e"
  },
  {
    "url": "others/css.html",
    "revision": "d47e4688648c68bc7a409d6c4f62701a"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "2c0f234b4402d94f1f025b709daff328"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "32213d8311042d9014b960d7148b29ab"
  },
  {
    "url": "others/english-writting.html",
    "revision": "ae634809b08434daa475e20f553c510c"
  },
  {
    "url": "others/freertos.html",
    "revision": "92c22cae15020a8c179a04a000e7a058"
  },
  {
    "url": "others/gns3.html",
    "revision": "f825bfdcaa654f9a5e4a8b71a98fd806"
  },
  {
    "url": "others/gps.html",
    "revision": "b69d4b665697c1e7cfee5ddc6f72501c"
  },
  {
    "url": "others/html5.html",
    "revision": "d1d756abbbe4183586b48d5ba792a018"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "b06afdcf3d4ae38e915dca4c7d69939a"
  },
  {
    "url": "others/index.html",
    "revision": "a8e4ad61e23130a04a17446149034fe7"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "0112cb977163a804ab3710b3e08c57a7"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "9e9d4478812c931ef328d1263a6bb5db"
  },
  {
    "url": "others/javascript.html",
    "revision": "79862940a014430cc9027365a8113337"
  },
  {
    "url": "others/json.html",
    "revision": "a19f60a97e8d92757ba6233d8e4bfc8d"
  },
  {
    "url": "others/latex.html",
    "revision": "35a22c5457aa362e4027f86bf7302f9c"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "b64901b2ac96ed0b4691e3b050c70a0a"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "a1a4872b83bc1fd9914dce04dd6639cf"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "3f19685e062da1745c7948db70cab2db"
  },
  {
    "url": "others/markdown.html",
    "revision": "2aca86726c839d6c14c6e72b6c311633"
  },
  {
    "url": "others/matlab.html",
    "revision": "881b6db020b89655732a733417f5b4a6"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "2c69714ec2ad4d5be55cfedc53b57a41"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "44cd806da5714f16dbbaf2f50d9f63a1"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "3a01be5431a8e407e06644f68b0b9443"
  },
  {
    "url": "others/network-security.html",
    "revision": "0c79013e354f6933efa05370c052b98d"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "96344ab3645a092f9e31ce4e794b9111"
  },
  {
    "url": "others/oral_english.html",
    "revision": "c67bca93cf636bc639227935cd65ae1c"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "0e0d075062b954b1eea6abfdb0c3cacd"
  },
  {
    "url": "others/poe.html",
    "revision": "4c8060e070dac92a5151d8a09f8f6a8d"
  },
  {
    "url": "others/pyside2.html",
    "revision": "13bffc3991ebfe7a5295eb369979be69"
  },
  {
    "url": "others/python-socket.html",
    "revision": "49b8ab98027a60368c72d766e822e4e3"
  },
  {
    "url": "others/python.html",
    "revision": "c31155c484ad075a8a53e3a35b87bfa1"
  },
  {
    "url": "others/q-learning.html",
    "revision": "308f5cb4548c3cf9e78ed3a20bc740b6"
  },
  {
    "url": "others/qr-code.html",
    "revision": "a4e5301399f9f3672b96330664cefa50"
  },
  {
    "url": "others/qt4.html",
    "revision": "889e6d4a97495a0bbbf5db693c8a7080"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "dc3d1d67fee4dd1cfa383e373d4ba2ed"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "633b6770cd1d32bce14a9be2e2020955"
  },
  {
    "url": "others/sd-card.html",
    "revision": "fc589930298df8357978f81d1e57cad2"
  },
  {
    "url": "others/sdn.html",
    "revision": "646277a6de8a2d8d787d1ace63040bda"
  },
  {
    "url": "others/star-uml.html",
    "revision": "8f5a64a18a7d28bd0ff309bcdba9f77e"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "7db42c875284b1a4732a3fbecfbec41b"
  },
  {
    "url": "others/verilog.html",
    "revision": "a975af4794266c072d2af626c8901d44"
  },
  {
    "url": "others/vue.html",
    "revision": "689f03b36dbcb87bb4934887aec6601f"
  },
  {
    "url": "others/w5500.html",
    "revision": "6be9e13407d321f4d87e3903efdef30c"
  },
  {
    "url": "others/w7500.html",
    "revision": "7ceec1c54adc7dd7980c8eb1cbf8ef47"
  },
  {
    "url": "resume.html",
    "revision": "5bf5f455605dd7c9d8dda6eda8666127"
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
