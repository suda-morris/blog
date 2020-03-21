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
    "revision": "9465688db0288deac9f8f753dd400a25"
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
    "url": "assets/js/16.dec045c9.js",
    "revision": "e0652e97fe6571d5b5d6e5a4bd778ff8"
  },
  {
    "url": "assets/js/17.74ef246d.js",
    "revision": "adeea0c5eaac54078282c9fcb8b200ca"
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
    "url": "assets/js/20.d9cc7f79.js",
    "revision": "4b2c15032c1a71323b9e749432ca831b"
  },
  {
    "url": "assets/js/21.90b584e4.js",
    "revision": "21ebbf3edfb7562e0940fcdfcc6d9a84"
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
    "url": "assets/js/24.d584f2e9.js",
    "revision": "3a17b94976944ef4348c9097d086ba5f"
  },
  {
    "url": "assets/js/25.f462a6da.js",
    "revision": "ce098a714465f4a334c68b2624a5240b"
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
    "url": "assets/js/52.1a6b5542.js",
    "revision": "b484cee907cf602acb2c3972726bcc68"
  },
  {
    "url": "assets/js/53.d899c96d.js",
    "revision": "bd27e3f37113f3bf5297e69706649f1f"
  },
  {
    "url": "assets/js/54.796d519a.js",
    "revision": "9284ecec1bd5d8adca0e890d14295d59"
  },
  {
    "url": "assets/js/55.59333ef9.js",
    "revision": "dad27fde30743f97d388d7ae0fc6bdf0"
  },
  {
    "url": "assets/js/56.4dc6197f.js",
    "revision": "670528efcd2a27e79622b797f3f3f5e0"
  },
  {
    "url": "assets/js/57.f92a76ee.js",
    "revision": "4343540b165669005ba1a2fcde2daa61"
  },
  {
    "url": "assets/js/58.6d9537e3.js",
    "revision": "81e87bdcf53976d1cd1975dba9144237"
  },
  {
    "url": "assets/js/59.03225947.js",
    "revision": "f0e9786bdb0a402524c667f3660a7e5e"
  },
  {
    "url": "assets/js/6.962f953e.js",
    "revision": "f57e1b5feefc7e8884d37bdd59885ba0"
  },
  {
    "url": "assets/js/60.28a22bce.js",
    "revision": "c2d186e4fd4b50be2368b6d8366ba111"
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
    "url": "assets/js/68.f2a37764.js",
    "revision": "7a42082567b006366b8746916493516e"
  },
  {
    "url": "assets/js/69.3ba1be84.js",
    "revision": "03f7cf5dee9edd1735b224a72d988cbb"
  },
  {
    "url": "assets/js/7.8086a7e8.js",
    "revision": "674df332ad5ff4a80fc7b01a366b2e7c"
  },
  {
    "url": "assets/js/70.0a8ba116.js",
    "revision": "a563bb287d84a05b0d2342b9b1d4f79c"
  },
  {
    "url": "assets/js/71.4f652318.js",
    "revision": "88b9bd18dc2a270102a6cbfa07daa6fc"
  },
  {
    "url": "assets/js/72.c3836356.js",
    "revision": "03db60d18c3476e77a62f710998bd17f"
  },
  {
    "url": "assets/js/73.ff30937e.js",
    "revision": "c9aae0d321ea36d75c5126aa24571831"
  },
  {
    "url": "assets/js/74.22c6fcc1.js",
    "revision": "cd53b9125411e2660e5b31b242f8438f"
  },
  {
    "url": "assets/js/75.2fc26549.js",
    "revision": "a4e3c5b92177db2893d54a6803d8ccaf"
  },
  {
    "url": "assets/js/76.43ac4b51.js",
    "revision": "da764e68288218a03d3f20e98f44f510"
  },
  {
    "url": "assets/js/77.5ecbe4a9.js",
    "revision": "e3ff9c0d20fdcea538c8185dde5f9a8a"
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
    "url": "assets/js/app.34683aa3.js",
    "revision": "a815aa0ed57ea82e7da06e289a7c5d35"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "88b9ae6d32b4da49b9bbd52d8884f84c"
  },
  {
    "url": "cs/bash.html",
    "revision": "e15f8f19360559834c834a831a25e2f4"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "cfd128e99db47762c467b34cbf4fb3c3"
  },
  {
    "url": "cs/cmake.html",
    "revision": "fe25dce96551275f8f13a1e0f7c3bb22"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "78fb9d0e09c1c83d1dd6f26edb6acdc3"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "eeae04c77c8a9d7a84a7312b7d9c53f5"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "c79d052c2ae08165e5c0529fd0a90e9d"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "9931d9027058a831557a016a5e386911"
  },
  {
    "url": "cs/git.html",
    "revision": "779b5b88deeb69585c7cd27c6b0f2d88"
  },
  {
    "url": "cs/index.html",
    "revision": "ea18914824e0db89a4e5d4ce5df1b447"
  },
  {
    "url": "cs/iptables.html",
    "revision": "33800c4b6048fe3daa41d9930ab3da74"
  },
  {
    "url": "cs/keras.html",
    "revision": "8354f68b8b3d609cba81494bd8436079"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "c62be92e2781f7f7244dd1fa2e5cae15"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "25f352f83f18ed8eb3d8fd275947d98b"
  },
  {
    "url": "cs/lwip.html",
    "revision": "3024ccad0b267b9bb469fca085a0fc49"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "c58aec22d3d632789fff001c90338f6e"
  },
  {
    "url": "cs/scala.html",
    "revision": "3dc45460232d08405bd58ae2daa72116"
  },
  {
    "url": "ee/about.html",
    "revision": "b733f096e1f23da44e360f7a30064bd0"
  },
  {
    "url": "ee/chisel.html",
    "revision": "6b865dfe08ed6ad1935c19880f13ecd7"
  },
  {
    "url": "ee/esp32.html",
    "revision": "46930cb89c19b455c1a9b00b7e7602e7"
  },
  {
    "url": "ee/index.html",
    "revision": "9b963ae7af446b77af85529f8a9cd6a9"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "be8594fe934b98db28769295659a4efd"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "17fd25313fb0d896a15582933c204391"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "72840fbc8086123f49f1fe2587a93454"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "878e7c1c83ad1974fdb6213d84465055"
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
    "revision": "82ea37f6ca7df90d6b420467e6115607"
  },
  {
    "url": "others/about.html",
    "revision": "d05c2a49599d6d356cba07bb5f58be0e"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "34c4d0ce0db6d87538914c17f6b406d4"
  },
  {
    "url": "others/android-studio.html",
    "revision": "9ab5655a991ca2fbff4875b381841f0e"
  },
  {
    "url": "others/android.html",
    "revision": "bb0b9c996ad5c31236fcd1357f5f3bd4"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "f95aa2968fc390c5b6ad40e879b04a25"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "b25d9b2e4de3683b98522c22d53ca341"
  },
  {
    "url": "others/css.html",
    "revision": "5413ed6013fca34d307e018b1263b4ea"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "c818453c8b79bdcecbfde34dcdb1393c"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "9f3bcf9e67aa9c56f42b8926f09f780f"
  },
  {
    "url": "others/english-writting.html",
    "revision": "3a1532707eac18408609fc5f135678a5"
  },
  {
    "url": "others/freertos.html",
    "revision": "26bc6e8b8269d9aad6f3b9925b972eff"
  },
  {
    "url": "others/gns3.html",
    "revision": "337f211ec2cdba12f080d0131ccd0c49"
  },
  {
    "url": "others/gps.html",
    "revision": "993ac56574f5c65028d35ab52d1608c8"
  },
  {
    "url": "others/html5.html",
    "revision": "766e9317e79c11f8a522e69f34386cdb"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "fa5f24b4cd7e7a1c6ea2c074d3fef4eb"
  },
  {
    "url": "others/index.html",
    "revision": "ab5bc07fde8dce53781071c9130f154f"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "9225e9fe37da56241543ec611cf5f3b8"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "7e271d4bbc4aede86352dddd37e7e073"
  },
  {
    "url": "others/javascript.html",
    "revision": "d00af2e0d142265d81a31c83871f4f84"
  },
  {
    "url": "others/json.html",
    "revision": "7051c22e614d159819b671346b80b864"
  },
  {
    "url": "others/latex.html",
    "revision": "4e567049779b86843f344c2017e8a677"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "7bcfbf38640e4c7646229a6d25f8736c"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "491b8360e3da47ed3690628638a50522"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "c915454755eedb37c26fe9e1b433e8f4"
  },
  {
    "url": "others/markdown.html",
    "revision": "4b9744f54a673f8b6a41b1f03e248aaa"
  },
  {
    "url": "others/matlab.html",
    "revision": "7ff4605511c63634d9c5e1c037a47660"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "460c772cb82a368e7b2ec1c239f3b770"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "49e19abfaf9518f8f89e02a69a020f16"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "02983d4cc4ae92069c996a8ae7b37832"
  },
  {
    "url": "others/network-security.html",
    "revision": "379dc0cebfbe6f6eec614e593022adc1"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "15be598a4a257d8055ee24099c430872"
  },
  {
    "url": "others/oral_english.html",
    "revision": "ed5669eeb4b4460d31bff038f3595191"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "53c0ab51086011385042243be335af0e"
  },
  {
    "url": "others/poe.html",
    "revision": "2e5c5a627ae407c987c6fc8a5ca69b04"
  },
  {
    "url": "others/pyside2.html",
    "revision": "fdeb07b4aab8351c33b79f2d78469c8f"
  },
  {
    "url": "others/python-socket.html",
    "revision": "5a26013d9a130adf0435a7234cbd21de"
  },
  {
    "url": "others/python.html",
    "revision": "b9ce4fc9354ecc3d47802474a1bca200"
  },
  {
    "url": "others/q-learning.html",
    "revision": "700cef12a7b271910c3d9b129c83c105"
  },
  {
    "url": "others/qr-code.html",
    "revision": "00bbd54e7affa856be6848495cb55a47"
  },
  {
    "url": "others/qt4.html",
    "revision": "f0e3c2d356e2f5402d2f9b3be488fd0b"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "83f3e501e6ef1e517815f30eb1bf7750"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "120eff073216c59fad15f6376eea0438"
  },
  {
    "url": "others/sd-card.html",
    "revision": "17eb77e43d401210dc8e4b0c992f4296"
  },
  {
    "url": "others/sdn.html",
    "revision": "1bacdd536131695de0013ae7c1440519"
  },
  {
    "url": "others/star-uml.html",
    "revision": "b99d0ca371d8a556d99a0c181997fd96"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "28a521125d309ab8da82d63e0f88ccef"
  },
  {
    "url": "others/verilog.html",
    "revision": "cda4c18023445353b794534d1939d053"
  },
  {
    "url": "others/vue.html",
    "revision": "a92c1e5fccb85e06cfcb4a5d2dd26d36"
  },
  {
    "url": "others/w5500.html",
    "revision": "d92b22a2021e5d217afd3c9f7e32b100"
  },
  {
    "url": "others/w7500.html",
    "revision": "20abdcbc60c4e9debd3109d85ae8e808"
  },
  {
    "url": "resume.html",
    "revision": "60c538841048c7e2bbc2f6d848aa6bf8"
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
