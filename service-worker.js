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
    "revision": "5279a143431439e4c123404f0059bd22"
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
    "url": "assets/img/base_addressing.ce56778e.png",
    "revision": "ce56778ebc9881d1c9db45c44ec6d301"
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
    "url": "assets/img/csr_register_access_instruction.20cc4af2.png",
    "revision": "20cc4af258e55224b9d6a0aedef7f112"
  },
  {
    "url": "assets/img/csr_register_encoding.43e73e84.png",
    "revision": "43e73e84f64f58165a0a87eceeda90a0"
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
    "url": "assets/img/immediate_addressing.63c65b49.png",
    "revision": "63c65b493f3567de925bf6559872fd89"
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
    "url": "assets/img/instruction_encoding.7fb352f5.png",
    "revision": "7fb352f503980a8a185f79d18bcaa129"
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
    "url": "assets/img/register_addressing.0d72c7c8.png",
    "revision": "0d72c7c824dd7ff34c8c8a9a80f6bd00"
  },
  {
    "url": "assets/img/relative_addressing.e48e0439.png",
    "revision": "e48e043961b987d94d50138b35c41972"
  },
  {
    "url": "assets/img/riscv_alu.9258ddd7.png",
    "revision": "9258ddd7ec5b8df0ddff9bde08335535"
  },
  {
    "url": "assets/img/riscv_data_path.dfce91f8.png",
    "revision": "dfce91f82ea46cbb7230d9114d50e657"
  },
  {
    "url": "assets/img/riscv_i_instruction.d8d8b541.png",
    "revision": "d8d8b5416aa1ed8dbdc59cde7f516eac"
  },
  {
    "url": "assets/img/riscv_interrupt_enter.192ffaf5.png",
    "revision": "192ffaf579fd488994cc125262188551"
  },
  {
    "url": "assets/img/riscv_interrupt_exit.16905898.png",
    "revision": "1690589888b0ad1b65b2209433c01055"
  },
  {
    "url": "assets/img/riscv_load_store_instruction.14da3f01.png",
    "revision": "14da3f01478210f8112a3ed728d752eb"
  },
  {
    "url": "assets/img/riscv_r_instruction.7b803b98.png",
    "revision": "7b803b9827e58e645c742b6a6e1191dd"
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
    "url": "assets/img/S_B_instruction.03f4e32b.png",
    "revision": "03f4e32b326535978c7ade9c3528f2e1"
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
    "url": "assets/img/U_J_instruction.76d4d585.png",
    "revision": "76d4d585bc00ff2ff7c08a5896f644b6"
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
    "url": "assets/js/10.8316a350.js",
    "revision": "2651547e4843df8f83a23bd73b23e003"
  },
  {
    "url": "assets/js/11.80bab86e.js",
    "revision": "8255178f5ae6537f86e95760922f4ea7"
  },
  {
    "url": "assets/js/12.c4c15d43.js",
    "revision": "071b0c3cc92f5248cb750355c2dec6f1"
  },
  {
    "url": "assets/js/13.512b3ce1.js",
    "revision": "35d4e3165a0aafa79dbb074ad83eb0fd"
  },
  {
    "url": "assets/js/14.d4350be7.js",
    "revision": "12071de71598f6999e3b72d4448fd67a"
  },
  {
    "url": "assets/js/15.1767b0b6.js",
    "revision": "7b32154ab736f355941257f9fe19792d"
  },
  {
    "url": "assets/js/16.c2efb3f2.js",
    "revision": "9f24a8123216b3a0bdcbf7586b92f94e"
  },
  {
    "url": "assets/js/17.a865289f.js",
    "revision": "64ef2b80fdd94dbd327630a232924348"
  },
  {
    "url": "assets/js/18.9ada01d1.js",
    "revision": "40d05cdc18ac13260f2c04db6e1275c3"
  },
  {
    "url": "assets/js/19.a92faf36.js",
    "revision": "f34e15367bd61d9522778a83848251f7"
  },
  {
    "url": "assets/js/2.18a0f6be.js",
    "revision": "e9e6c9a645453723825aac8a69947a8b"
  },
  {
    "url": "assets/js/20.f3aae1ea.js",
    "revision": "c1ec1a831d2aa77440cc9a34f8e06479"
  },
  {
    "url": "assets/js/21.15937ad2.js",
    "revision": "e03539f5e9d62caf0424204766b74123"
  },
  {
    "url": "assets/js/22.c6ab1230.js",
    "revision": "4e83f9a8689df03fde2cd2c1fd7e654d"
  },
  {
    "url": "assets/js/23.01a5b72e.js",
    "revision": "7a180b405c5143bbbedb1a8236fb6e44"
  },
  {
    "url": "assets/js/24.82456289.js",
    "revision": "45f4d757d4eace9b8c517538fc02cd2b"
  },
  {
    "url": "assets/js/25.c123ef92.js",
    "revision": "cbe021b31115de13aef9eea810e3d51e"
  },
  {
    "url": "assets/js/26.b2e16bbb.js",
    "revision": "51288bd87e09ac1ce8a29dfeb1a4ecb2"
  },
  {
    "url": "assets/js/27.56798be8.js",
    "revision": "cf2b85ae6af9666e0b4a9d52ab5afae0"
  },
  {
    "url": "assets/js/28.767b35c6.js",
    "revision": "916365cac9f681917655f67c2020f9c3"
  },
  {
    "url": "assets/js/29.24dbef61.js",
    "revision": "6c210657fd6da9773a845ed0c7a95979"
  },
  {
    "url": "assets/js/3.95b96fa9.js",
    "revision": "223f228e09ecc429bd166cc77ab15c80"
  },
  {
    "url": "assets/js/30.b5b1aee1.js",
    "revision": "f1a1350616aa0e0158672276ead35613"
  },
  {
    "url": "assets/js/31.bcd600e6.js",
    "revision": "1c1158065e44272b866848dcfc764947"
  },
  {
    "url": "assets/js/32.c09cda14.js",
    "revision": "c4a82cd06eec36577e312ea1303686cd"
  },
  {
    "url": "assets/js/33.ceae6411.js",
    "revision": "54b81f19b1fead2d5b3bb9b4cef590b6"
  },
  {
    "url": "assets/js/34.e3979428.js",
    "revision": "20141d8e024ff53102125001ede87cbe"
  },
  {
    "url": "assets/js/35.8abbbffa.js",
    "revision": "17feac7df3b02e81f1ba27c2827bc1dd"
  },
  {
    "url": "assets/js/36.3f86e92b.js",
    "revision": "325a551134b17f91601b856f612af756"
  },
  {
    "url": "assets/js/37.bb671608.js",
    "revision": "7b3d43bf061ac365e73b1c206975efd2"
  },
  {
    "url": "assets/js/38.bd1fb5a5.js",
    "revision": "7d3e98b30e95a2005cb5852ba3ac394c"
  },
  {
    "url": "assets/js/39.abde5d29.js",
    "revision": "5f69f9c5e82f737bfc1c4c84ff4ae034"
  },
  {
    "url": "assets/js/4.bcfa6b66.js",
    "revision": "637285e2e4ee18d46e644028e187fc99"
  },
  {
    "url": "assets/js/40.1eec341e.js",
    "revision": "dd121d7eaddf9bb76e79d9f8352d3825"
  },
  {
    "url": "assets/js/41.1280996e.js",
    "revision": "121c9575b0618d5818898461912a07c7"
  },
  {
    "url": "assets/js/42.c091858a.js",
    "revision": "c919b36c81156001a5e31697d0cc1b2e"
  },
  {
    "url": "assets/js/43.9869e743.js",
    "revision": "eb4b451ff2ccc049a37867064e209b0e"
  },
  {
    "url": "assets/js/44.7ae11453.js",
    "revision": "3acf08e73e12423115a4a9ce18c6fed6"
  },
  {
    "url": "assets/js/45.262c70c0.js",
    "revision": "dda4a40dcdbd7a14c0dca568051d3587"
  },
  {
    "url": "assets/js/46.d5b94c3d.js",
    "revision": "b5c8d38e81c522807eb1bfadec3dd922"
  },
  {
    "url": "assets/js/47.833b5932.js",
    "revision": "cc40333b43d058dac81e5f13219b6f21"
  },
  {
    "url": "assets/js/48.a96a3f9c.js",
    "revision": "00cb6ab322eec607e02b49499bf9b8c9"
  },
  {
    "url": "assets/js/49.890d9678.js",
    "revision": "1e01dcb46558751a4500025e02781119"
  },
  {
    "url": "assets/js/5.c82c9343.js",
    "revision": "4ea423ef96b1a4e63d171900f5134510"
  },
  {
    "url": "assets/js/50.09406c2e.js",
    "revision": "b3eb0463550a01c163550fe7beadbe4c"
  },
  {
    "url": "assets/js/51.204b1c6f.js",
    "revision": "c21955b09b894167d6744903ca9ebefb"
  },
  {
    "url": "assets/js/52.745cf5ec.js",
    "revision": "abfc24f5e46ad29f1502c4e6600839e6"
  },
  {
    "url": "assets/js/53.61e8595e.js",
    "revision": "06a19a06c972e390699512c288ebaaab"
  },
  {
    "url": "assets/js/54.1340935a.js",
    "revision": "e0788dbeae5529762e0638b22d8c251c"
  },
  {
    "url": "assets/js/55.f09c6bc3.js",
    "revision": "c06c586a5d14c6d6955db082a891122c"
  },
  {
    "url": "assets/js/56.9a2ef5e0.js",
    "revision": "0d7c6ca1855b79c55827df4e634e108b"
  },
  {
    "url": "assets/js/57.fd569a1e.js",
    "revision": "12c97863c434b134c28925f7d812a49b"
  },
  {
    "url": "assets/js/58.99ed757d.js",
    "revision": "25eb1f39b84f8aa5762c2b23c38bcb48"
  },
  {
    "url": "assets/js/59.4b09282e.js",
    "revision": "b6610578f14389bf4dda3c6874e5f020"
  },
  {
    "url": "assets/js/6.bd51842f.js",
    "revision": "fc4e91d05f93e115ba765608eb929cb0"
  },
  {
    "url": "assets/js/60.2ba19844.js",
    "revision": "b360c2de24686a6324b26143ebc7dc15"
  },
  {
    "url": "assets/js/61.db753824.js",
    "revision": "7830275659cdd80f36d723f5b52a0d92"
  },
  {
    "url": "assets/js/62.8ac47bd2.js",
    "revision": "d09fa866cd75ad13fd78556576c07b02"
  },
  {
    "url": "assets/js/63.86567580.js",
    "revision": "2ad42a8ab833b254fa2ca3d1b745a6c0"
  },
  {
    "url": "assets/js/64.7d0a6ffd.js",
    "revision": "1a791bd96eb6eb6fa9481f050f00e1c9"
  },
  {
    "url": "assets/js/65.cc723fad.js",
    "revision": "cce47388e4531866b83da1da89f8681e"
  },
  {
    "url": "assets/js/66.f07f40ff.js",
    "revision": "8093c719aa545a55697c7353e87682df"
  },
  {
    "url": "assets/js/67.e1023d4a.js",
    "revision": "66a0e84c90f570f66c5150e49aeecd76"
  },
  {
    "url": "assets/js/68.3fb44cbb.js",
    "revision": "c56e988c57e8b2c42f2bc44792df66d3"
  },
  {
    "url": "assets/js/69.ee599346.js",
    "revision": "20fd2b36a5c4f3e756e5b8e6cb4ae7df"
  },
  {
    "url": "assets/js/7.b27a92c3.js",
    "revision": "81514d3097d0bf106e7c589aa1d92581"
  },
  {
    "url": "assets/js/70.be2718be.js",
    "revision": "6bfad9ada87aee50c8f327308c1003fe"
  },
  {
    "url": "assets/js/71.8d900c51.js",
    "revision": "4c1b1c0ecbb02e111ab0a06641ba62a8"
  },
  {
    "url": "assets/js/72.a230c384.js",
    "revision": "e34ed566d488bfaeeededf06af215ddc"
  },
  {
    "url": "assets/js/73.e347c2e9.js",
    "revision": "e080764519f4e8ee0f7661099cd43a92"
  },
  {
    "url": "assets/js/74.3136e2da.js",
    "revision": "9a1065141f60de556745a9204b0bd742"
  },
  {
    "url": "assets/js/75.43580041.js",
    "revision": "73c855cf0415c1dbf1bc2df50428459f"
  },
  {
    "url": "assets/js/76.d999426d.js",
    "revision": "7995fef63e0de7ef3470deaf1f158aaf"
  },
  {
    "url": "assets/js/77.43a99c42.js",
    "revision": "559ae8b9725e6f93e15cf785c89070d5"
  },
  {
    "url": "assets/js/78.eec7e4e3.js",
    "revision": "bd43775bfc69e5c9180c775256e58aeb"
  },
  {
    "url": "assets/js/79.24fd22ac.js",
    "revision": "36d3aea8e8d96b559ff8a61e9f5419a5"
  },
  {
    "url": "assets/js/8.cc317b20.js",
    "revision": "db08a374df96f17a779459f928ab3293"
  },
  {
    "url": "assets/js/80.89273bc0.js",
    "revision": "cd86b6dcd7cde399b52a0eefe11285d7"
  },
  {
    "url": "assets/js/81.2c93688c.js",
    "revision": "1235b74b52902d0fc6d9f20e40ae9eb9"
  },
  {
    "url": "assets/js/82.811cfaff.js",
    "revision": "ffe48d602461b1a00ec4c05fa14af9be"
  },
  {
    "url": "assets/js/83.5c76ded9.js",
    "revision": "596ea7eea80b78a5cff6a3b31f6f7613"
  },
  {
    "url": "assets/js/84.f4aa591e.js",
    "revision": "87f5e424546678e3274bc9aea1fb410f"
  },
  {
    "url": "assets/js/85.cb18399b.js",
    "revision": "129a02431f04fa8013bee4dcb4787767"
  },
  {
    "url": "assets/js/9.fee5eb5e.js",
    "revision": "89c9695a9dde3a30fe8eb13abd8dca3c"
  },
  {
    "url": "assets/js/app.889fa6c2.js",
    "revision": "a2951287de801bfb68ed0d6d31b8fc8e"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "a926dae305b63b63d1882f631e017a8f"
  },
  {
    "url": "cs/bash.html",
    "revision": "c86686509296fdf1d6c58e1246e543dd"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "cb0b8681144737d10756860bc4b90179"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "35d88e443167127cd813e2e18ee2fcf8"
  },
  {
    "url": "cs/cmake.html",
    "revision": "5bb41020fb29c2b0099a40b9cc66ea56"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "dd22a8bf69acdc12ec7bdd65096e1d47"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "227012a467b35e60768346f5b857797e"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "752ebefec36eb4ff360368c58ba4b1a6"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "046597bbfdbde6097d6a45de3283777e"
  },
  {
    "url": "cs/git.html",
    "revision": "d1479957a2e146d2cc44ffc7af509c11"
  },
  {
    "url": "cs/index.html",
    "revision": "a2b930984bf3eb4e8558cc7e79de45db"
  },
  {
    "url": "cs/iptables.html",
    "revision": "38d6e8a8568fb130343047ff05b3dc12"
  },
  {
    "url": "cs/keras.html",
    "revision": "726fc38848dfce6d783c31a1163e954f"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "09c4d897f97b4c66da90aced0d44088b"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a532c50ea88d30d10992111f5b927b2a"
  },
  {
    "url": "cs/lwip.html",
    "revision": "676dc5ca06e384f33f72bc61d42139aa"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "364f6004d8095a1f1af8e2adcd1a533b"
  },
  {
    "url": "cs/risc-v.html",
    "revision": "cb687472148c706eb717b6fe1358f843"
  },
  {
    "url": "cs/scala.html",
    "revision": "7bc62858c3181c9b60111f6b08301304"
  },
  {
    "url": "cs/xtensa.html",
    "revision": "3fea888585ba0fa842896bd0b78ec2b8"
  },
  {
    "url": "ee/about.html",
    "revision": "9be7ef62d18ef4544a51fb7f5b8e93ab"
  },
  {
    "url": "ee/chisel.html",
    "revision": "7a30674b0e9b72c1117eb0fe04950e66"
  },
  {
    "url": "ee/esp32.html",
    "revision": "3e818145654a57740f44bc165650734f"
  },
  {
    "url": "ee/index.html",
    "revision": "af1e67348be9a1910eb4a4c71bea9c17"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "844aa5ba5e61607839e401d6de83a994"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "2c8a5a520a0cc97a18845477217fa85f"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "b2a706df254d93e454badacb6da478be"
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
    "url": "images/cs/risc-v/base_addressing.png",
    "revision": "ce56778ebc9881d1c9db45c44ec6d301"
  },
  {
    "url": "images/cs/risc-v/csr_register_access_instruction.png",
    "revision": "20cc4af258e55224b9d6a0aedef7f112"
  },
  {
    "url": "images/cs/risc-v/csr_register_encoding.png",
    "revision": "43e73e84f64f58165a0a87eceeda90a0"
  },
  {
    "url": "images/cs/risc-v/immediate_addressing.png",
    "revision": "63c65b493f3567de925bf6559872fd89"
  },
  {
    "url": "images/cs/risc-v/instruction_encoding.png",
    "revision": "7fb352f503980a8a185f79d18bcaa129"
  },
  {
    "url": "images/cs/risc-v/register_addressing.png",
    "revision": "0d72c7c824dd7ff34c8c8a9a80f6bd00"
  },
  {
    "url": "images/cs/risc-v/relative_addressing.png",
    "revision": "e48e043961b987d94d50138b35c41972"
  },
  {
    "url": "images/cs/risc-v/riscv_alu.png",
    "revision": "9258ddd7ec5b8df0ddff9bde08335535"
  },
  {
    "url": "images/cs/risc-v/riscv_data_path.png",
    "revision": "dfce91f82ea46cbb7230d9114d50e657"
  },
  {
    "url": "images/cs/risc-v/riscv_i_instruction.png",
    "revision": "d8d8b5416aa1ed8dbdc59cde7f516eac"
  },
  {
    "url": "images/cs/risc-v/riscv_interrupt_enter.png",
    "revision": "192ffaf579fd488994cc125262188551"
  },
  {
    "url": "images/cs/risc-v/riscv_interrupt_exit.png",
    "revision": "1690589888b0ad1b65b2209433c01055"
  },
  {
    "url": "images/cs/risc-v/riscv_load_store_instruction.png",
    "revision": "14da3f01478210f8112a3ed728d752eb"
  },
  {
    "url": "images/cs/risc-v/riscv_r_instruction.png",
    "revision": "7b803b9827e58e645c742b6a6e1191dd"
  },
  {
    "url": "images/cs/risc-v/S_B_instruction.png",
    "revision": "03f4e32b326535978c7ade9c3528f2e1"
  },
  {
    "url": "images/cs/risc-v/U_J_instruction.png",
    "revision": "76d4d585bc00ff2ff7c08a5896f644b6"
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
    "revision": "11514d3c4d854a2e3450d04b92eba6f0"
  },
  {
    "url": "others/about.html",
    "revision": "d54f0ba8037bc150424744096f94b329"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "076066541bb1b932bb8a7d48e4a1aabb"
  },
  {
    "url": "others/android-studio.html",
    "revision": "4684fc1659b122ddd6458fd9d3ee0b5c"
  },
  {
    "url": "others/android.html",
    "revision": "3c6d983665b035dce46a100dbb9148cf"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "d2a8e7cca3bcf952575954560d104511"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "08a7e1afe5d98129de53deed73f4d3b3"
  },
  {
    "url": "others/css.html",
    "revision": "f96b10ab0f6f3ce17699d8679f266091"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "7a62739669c20977eb6f9a735ede1c7a"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "d3a650cabe6d6a78a4f791c727ce8f70"
  },
  {
    "url": "others/english-writting.html",
    "revision": "06b0cd47ef758960067964323d3d4bf3"
  },
  {
    "url": "others/freertos.html",
    "revision": "040b004f772ba2c1288d067e26149662"
  },
  {
    "url": "others/gns3.html",
    "revision": "0c9b5ae2cef473f451c030e2b8785374"
  },
  {
    "url": "others/gps.html",
    "revision": "4136723a10a3d47e763fe135bd5d6e50"
  },
  {
    "url": "others/html5.html",
    "revision": "5f2b38e3d16281610bee9e796a471b38"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "cbdfa2a55aedea5e2aeeb14c2a89d2c5"
  },
  {
    "url": "others/index.html",
    "revision": "a306a08379f5894ae79bdb667549dd5c"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "f01c615cbe7b981f8241e6398b0c9eec"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "1b1bb4dbae424ea57002a199449b25a5"
  },
  {
    "url": "others/javascript.html",
    "revision": "67f247bb932877c080dfbcef780e2425"
  },
  {
    "url": "others/json.html",
    "revision": "72616b7b1e59caffcb655e041c0278ae"
  },
  {
    "url": "others/latex.html",
    "revision": "cfda4a1e68c5d0f8d311158770d6b0c4"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "8589ef30cfb42ae03ca625377de702f5"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "7c040152faa187090ecaa573e0442de9"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "89ae583c53b06f7133bb232509806d5b"
  },
  {
    "url": "others/markdown.html",
    "revision": "8aafa1fc7344ca61e0f91d943e610f06"
  },
  {
    "url": "others/matlab.html",
    "revision": "139fe8daed0651c94473ad376bd2d070"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "062ce8e21e36845a0fba1c9c4e1d0a3d"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "a49a9c64803514c489739c0a394bba45"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "881fbdbe62ac401edf849dc5c62fb66d"
  },
  {
    "url": "others/network-security.html",
    "revision": "31bf2061e87a6115d3c1cba19b2c5336"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "3aa4a5bd26a1bec4f21f1bb3530e58d1"
  },
  {
    "url": "others/oral_english.html",
    "revision": "0f959e13a35f4c3e34a7add08951af83"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "2111d6802bbea97c496a4cd52bce65e5"
  },
  {
    "url": "others/poe.html",
    "revision": "3b04d98880004f1e298166798a290400"
  },
  {
    "url": "others/pyside2.html",
    "revision": "9e61f5aedc7e919ea5d84192b5307497"
  },
  {
    "url": "others/python-socket.html",
    "revision": "e66735613f88a2cd25961f895f3e49c2"
  },
  {
    "url": "others/python.html",
    "revision": "892c87b54a77dda6fefc77edff9053e5"
  },
  {
    "url": "others/q-learning.html",
    "revision": "b30642957dcb01935172521320171008"
  },
  {
    "url": "others/qr-code.html",
    "revision": "ff09a731a1f22ab1bb19f0acd0203242"
  },
  {
    "url": "others/qt4.html",
    "revision": "e9683a51a42654185de6edc974299510"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "3d67883159e48d69539e84a24b52e7b6"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "5cc09ad62bc5fb16edf4bdaf5128e23f"
  },
  {
    "url": "others/sd-card.html",
    "revision": "cf1e863b4c89cc6ab2930e8e5bdcbe18"
  },
  {
    "url": "others/sdn.html",
    "revision": "3d1a4d2bb7decf45c1262731811eb6b9"
  },
  {
    "url": "others/star-uml.html",
    "revision": "1b6bf419a28651d1c24cd939e79d6140"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "6c4e03790cd7d56f3e291b34cd7a5485"
  },
  {
    "url": "others/verilog.html",
    "revision": "28b96037431c87f90e908a5bb7dc7535"
  },
  {
    "url": "others/vue.html",
    "revision": "5b7b35d1d9bfe7ecb9fac9eb3bcc7f41"
  },
  {
    "url": "others/w5500.html",
    "revision": "0dea8ae183e22cb1585f89a56a8b1955"
  },
  {
    "url": "others/w7500.html",
    "revision": "b7576ab71faa5d2d7ce757676f56be25"
  },
  {
    "url": "resume.html",
    "revision": "fc63107a6478539831e069f87022addd"
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
