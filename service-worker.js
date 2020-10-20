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
    "revision": "318e93d0d7dcebdd69fc84abbcb4bfc6"
  },
  {
    "url": "assets/css/0.styles.91231688.css",
    "revision": "b39bc082247f603a3a8c6f387d543d1a"
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
    "url": "assets/img/register_file.98edccb1.png",
    "revision": "98edccb1a727e294835d52225eb4d32f"
  },
  {
    "url": "assets/img/riscv_alu_design.d2271fee.png",
    "revision": "d2271feebffc5d5334c95b82b2d234ce"
  },
  {
    "url": "assets/img/riscv_alu.b4571647.png",
    "revision": "b4571647545ff79bc38687cfcaa078c9"
  },
  {
    "url": "assets/img/riscv_B_instruction_data_path.d7c245a9.png",
    "revision": "d7c245a9de212c1d3071def5bd5f49c9"
  },
  {
    "url": "assets/img/riscv_B_instruction.768409cf.png",
    "revision": "768409cfa8ebce6bc01df289534b8935"
  },
  {
    "url": "assets/img/riscv_cache_direct_mapping_example.1f5de907.png",
    "revision": "1f5de9072253ebe2cb0f754bd5fb8971"
  },
  {
    "url": "assets/img/riscv_cache_direct_mapping.a724b585.png",
    "revision": "a724b585353c52dc2cbb079bce9f6bf8"
  },
  {
    "url": "assets/img/riscv_cache_full_association_mapping_example.c6b16b55.png",
    "revision": "c6b16b55c9899caa327abf42859095bf"
  },
  {
    "url": "assets/img/riscv_cache_full_association_mapping.50eaacf3.png",
    "revision": "50eaacf37ddf78784064bde48d4139b7"
  },
  {
    "url": "assets/img/riscv_cache_structure.b3d3a365.png",
    "revision": "b3d3a3651930ae17f10ba10fe8de8a8c"
  },
  {
    "url": "assets/img/riscv_cache.0010b661.png",
    "revision": "0010b661b965daa5e4974298a387a868"
  },
  {
    "url": "assets/img/riscv_cpu_controller_truth_table.9b41a36f.png",
    "revision": "9b41a36f4ca14ff52253de66525699d5"
  },
  {
    "url": "assets/img/riscv_csr_register_access_instruction.f54ee67a.png",
    "revision": "f54ee67a831892de447bfa813b8e9223"
  },
  {
    "url": "assets/img/riscv_data_path.75ca8e0f.png",
    "revision": "75ca8e0f3ddfb83060ba124bb8802965"
  },
  {
    "url": "assets/img/riscv_exception_csr_register_definitions.7cb72969.png",
    "revision": "7cb7296903026711f6e09741454e33e6"
  },
  {
    "url": "assets/img/riscv_exception_csr_registers.3be19f7b.png",
    "revision": "3be19f7b11879f1a16f82db40d401d6a"
  },
  {
    "url": "assets/img/riscv_exception_mtvec_register.bf624157.png",
    "revision": "bf62415702485620ba642c30f771d9d1"
  },
  {
    "url": "assets/img/riscv_exception_return.65f3e1bd.png",
    "revision": "65f3e1bd49183fbb4662919d6668d35d"
  },
  {
    "url": "assets/img/riscv_full_data_path.2bd3abe3.png",
    "revision": "2bd3abe393fa754fbd60ee7ebf1618d7"
  },
  {
    "url": "assets/img/riscv_I_instruction_data_path.a793de42.png",
    "revision": "a793de42939dc0e6faec5d9173540177"
  },
  {
    "url": "assets/img/riscv_I_instruction.350f3bc5.png",
    "revision": "350f3bc5906703c13f2aa852100fdf1f"
  },
  {
    "url": "assets/img/riscv_instruction_type.6459e601.png",
    "revision": "6459e601c18056ef475d0d057bff99e6"
  },
  {
    "url": "assets/img/riscv_interrupt_enable_pending.c4582d71.png",
    "revision": "c4582d71b0aacb8e22d9cf3f0905def8"
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
    "url": "assets/img/riscv_interrupt_priority.987e662d.png",
    "revision": "987e662de224d5f7b473f6ba82c16b4c"
  },
  {
    "url": "assets/img/riscv_isa_custom_instruction.47970635.png",
    "revision": "479706355607ee92c0d04fc8b19b3c19"
  },
  {
    "url": "assets/img/riscv_isa_extension.6e965d57.png",
    "revision": "6e965d5715436f01f6abb1e6a1091800"
  },
  {
    "url": "assets/img/riscv_jal_instruction_data_path.b400a062.png",
    "revision": "b400a062fae32e3f959208c9b2ae6acf"
  },
  {
    "url": "assets/img/riscv_jalr_instruction_data_path.f2b992fe.png",
    "revision": "f2b992fe4b3bf26fa2d5ce5c6d07b322"
  },
  {
    "url": "assets/img/riscv_jump_instruction.53be1f36.png",
    "revision": "53be1f36d4b8aebe72348d44e2794273"
  },
  {
    "url": "assets/img/riscv_load_instruction_data_path.994b1edd.png",
    "revision": "994b1eddb674bafcab0a194c5c3c3245"
  },
  {
    "url": "assets/img/riscv_load_store_instruction.9677a930.png",
    "revision": "9677a930cd97d64fe48c286a7567554e"
  },
  {
    "url": "assets/img/riscv_machine_exception_codes.ec2ed612.png",
    "revision": "ec2ed61278e8befe1db36a6396caf034"
  },
  {
    "url": "assets/img/riscv_mmu_page_manage.938e9249.png",
    "revision": "938e924911b9f07702ce6bd64f6d3af3"
  },
  {
    "url": "assets/img/riscv_mmu_segment_manage.fbbecfd3.png",
    "revision": "fbbecfd3a35ba066c2d89886f9706d80"
  },
  {
    "url": "assets/img/riscv_mmu_two_level_page_manage.5830951d.png",
    "revision": "5830951d69f8854ff1702c346b5136d0"
  },
  {
    "url": "assets/img/riscv_mmu.7262e30e.png",
    "revision": "7262e30e2a86e1344bbe9fb56be4cc51"
  },
  {
    "url": "assets/img/riscv_one_cycle_intruction_interrupt_enter.10ae6c05.png",
    "revision": "10ae6c05eafa66c512b7904ee5b794c5"
  },
  {
    "url": "assets/img/riscv_one_cycle_intruction_interrupt_exit.05a8d21c.png",
    "revision": "05a8d21c40cd98a5712653778803eef2"
  },
  {
    "url": "assets/img/riscv_pipeline_registers.7691b247.png",
    "revision": "7691b2476c6f81caa4896bc555925432"
  },
  {
    "url": "assets/img/riscv_pipeline.39941dc3.png",
    "revision": "39941dc35dfa6f252d48e75a0f29b0cf"
  },
  {
    "url": "assets/img/riscv_R_instruction_data_path.1c967b1f.png",
    "revision": "1c967b1feb770563c4682a1aa8d1e81f"
  },
  {
    "url": "assets/img/riscv_R_instruction.4f0a03ae.png",
    "revision": "4f0a03ae7e27ec018676b53a24b78fba"
  },
  {
    "url": "assets/img/riscv_set_associative_cache_example.90b50168.png",
    "revision": "90b501683c77db980ade0975d7f1a31b"
  },
  {
    "url": "assets/img/riscv_set_associative_cache.88e53b1f.png",
    "revision": "88e53b1f2628294cf6f7b3d68ecfecca"
  },
  {
    "url": "assets/img/riscv_store_instruction_data_path.104dac06.png",
    "revision": "104dac06d68818ba62a71dd3363c2d75"
  },
  {
    "url": "assets/img/riscv_tlb.22e93fc6.png",
    "revision": "22e93fc6ceb9b42c3f0d0c2b196e69f7"
  },
  {
    "url": "assets/img/riscv_U_instruction.a6d4c422.png",
    "revision": "a6d4c4221d9b33aea1da33fe5307fa0a"
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
    "url": "assets/img/single_instruction_CPU.5011d2a2.png",
    "revision": "5011d2a2df16a56ecc910449fd943e70"
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
    "url": "assets/js/10.ae56156a.js",
    "revision": "d774674b6b2cf50abc31898485b39d35"
  },
  {
    "url": "assets/js/11.ab8575fe.js",
    "revision": "1726bcc21088df09659757bbde285ecc"
  },
  {
    "url": "assets/js/12.00e807f7.js",
    "revision": "fe1ad61fff5b70de8363aeab3a1decb1"
  },
  {
    "url": "assets/js/13.1b34894f.js",
    "revision": "3213827470167c07d84b43fbcaff37bf"
  },
  {
    "url": "assets/js/14.6b262d55.js",
    "revision": "67e268fdab77ccde1c725fa1f538dced"
  },
  {
    "url": "assets/js/15.503782b2.js",
    "revision": "3dc0707fdf8b99ae6fc7b9a4a15a9021"
  },
  {
    "url": "assets/js/16.cef0b2a5.js",
    "revision": "f5ba2023d637fb51e4917cc1132c2dc0"
  },
  {
    "url": "assets/js/17.77d455c4.js",
    "revision": "9cd7031b716acc153cf69525842762e1"
  },
  {
    "url": "assets/js/18.d9f3619c.js",
    "revision": "8834d04e1ab66d4db6223e90be4bf1b5"
  },
  {
    "url": "assets/js/19.c232406d.js",
    "revision": "fed7e436bc7740f94958720a569e7ba6"
  },
  {
    "url": "assets/js/2.dfc2fd2f.js",
    "revision": "fe8600234150b2dbcf3a20ea7d26181e"
  },
  {
    "url": "assets/js/20.690d9998.js",
    "revision": "c1f44eb8ad266d7decf501a903838035"
  },
  {
    "url": "assets/js/21.a009894a.js",
    "revision": "387a9959aabd1fff77625f6b5fd1e372"
  },
  {
    "url": "assets/js/22.58736d73.js",
    "revision": "d3d49427655a1ea3d922c4e2fbd32080"
  },
  {
    "url": "assets/js/23.fafdf039.js",
    "revision": "e62879ba1f53fdedaea1a0e6b0d46dd9"
  },
  {
    "url": "assets/js/24.9a3ea698.js",
    "revision": "e5251be0dae39f48057e3de224fe6e95"
  },
  {
    "url": "assets/js/25.d8b95ef6.js",
    "revision": "9e184f60e728f506ac093aed1ca81c2b"
  },
  {
    "url": "assets/js/26.73376ffc.js",
    "revision": "70da6487f182640ee6bf7f5fd51c1328"
  },
  {
    "url": "assets/js/27.a13581ba.js",
    "revision": "a0b046ed47924c05ca64578a99c5e716"
  },
  {
    "url": "assets/js/28.f8e329a1.js",
    "revision": "4b6e7ca060be99e7eb8e7780d3c98726"
  },
  {
    "url": "assets/js/29.c2308395.js",
    "revision": "090fcee83673b686bf29045af5ea1bb4"
  },
  {
    "url": "assets/js/3.90adb2de.js",
    "revision": "95f2db2038219929b36edab8c187d024"
  },
  {
    "url": "assets/js/30.7d39ceff.js",
    "revision": "b30a068fa00ae1c451aa4a15a0460d71"
  },
  {
    "url": "assets/js/31.9d2b9f5c.js",
    "revision": "62da4164d5e6daf294b0a2f63bd96d94"
  },
  {
    "url": "assets/js/32.521c59b5.js",
    "revision": "eff8d3f427a94391579ce2fe0af677ec"
  },
  {
    "url": "assets/js/33.99e33e23.js",
    "revision": "b20398c2bfcad8227a385e7e93e23dc7"
  },
  {
    "url": "assets/js/34.7f867a89.js",
    "revision": "f3c1fec29c992959b1bda48c942ef801"
  },
  {
    "url": "assets/js/35.d0f19d91.js",
    "revision": "83ad4666df26cdc16a430e007031c731"
  },
  {
    "url": "assets/js/36.468324cb.js",
    "revision": "5d4c6cbe6452edb6e6ec908e4817bec4"
  },
  {
    "url": "assets/js/37.acb1b76c.js",
    "revision": "2b365b6243771c726f27e8d603a848ae"
  },
  {
    "url": "assets/js/38.7b7f930d.js",
    "revision": "798eaeb2975ea78b67918b11948657fc"
  },
  {
    "url": "assets/js/39.25f4bf76.js",
    "revision": "8999646d888242255c7734dab96ea00f"
  },
  {
    "url": "assets/js/4.879095c8.js",
    "revision": "d52c66ad32a56ec513c442c989403a53"
  },
  {
    "url": "assets/js/40.55667e41.js",
    "revision": "4cbf9d8e66d8640ee41cbcd4fd89bbad"
  },
  {
    "url": "assets/js/41.1b6d2012.js",
    "revision": "3756304e6697918489c87e4e49f2425e"
  },
  {
    "url": "assets/js/42.9c448da2.js",
    "revision": "d6643a21c7a462c45177846372afa0cd"
  },
  {
    "url": "assets/js/43.d01afb55.js",
    "revision": "ce301bb6770da1f53591a572ac740cbf"
  },
  {
    "url": "assets/js/44.001e33b4.js",
    "revision": "78429386f7eedf29dc6aa5370ea9af4a"
  },
  {
    "url": "assets/js/45.ef41e1bf.js",
    "revision": "6b1ebea6c37bc59bd0d441de82c7a8c4"
  },
  {
    "url": "assets/js/46.f57563de.js",
    "revision": "e65ea5fea17daa566819fa5f99160e23"
  },
  {
    "url": "assets/js/47.b2e7ef01.js",
    "revision": "10c9f4dc859b1057b5b34d052cadf241"
  },
  {
    "url": "assets/js/48.bf213af7.js",
    "revision": "cf88ea54d79f1f0c71220091e5f6e74a"
  },
  {
    "url": "assets/js/49.8841a39f.js",
    "revision": "6f8089afcc3b96fb21cba74299b1b2c2"
  },
  {
    "url": "assets/js/5.b5b8adea.js",
    "revision": "3d7e5240b03bdf4133214b17ab6b0554"
  },
  {
    "url": "assets/js/50.b448b4ae.js",
    "revision": "5092f887273dfebc92de5ee66bc2870d"
  },
  {
    "url": "assets/js/51.8aeca0cb.js",
    "revision": "1e824ca700c32b14bc5539bb21860fda"
  },
  {
    "url": "assets/js/52.13e77197.js",
    "revision": "e2ffa3e0e6fae2cdc579a1faf34a60ad"
  },
  {
    "url": "assets/js/53.450ccc2e.js",
    "revision": "f9ebea98e0b8508ef9e35c7996030c36"
  },
  {
    "url": "assets/js/54.cc40ddd5.js",
    "revision": "7525d53432ab36e6873990c535945d31"
  },
  {
    "url": "assets/js/55.32e96a5e.js",
    "revision": "2d962e95bc878e03d6ef58e0207c7a6f"
  },
  {
    "url": "assets/js/56.a396bf02.js",
    "revision": "ee2e422d0e5f9a8944b447f02d704349"
  },
  {
    "url": "assets/js/57.4c000e39.js",
    "revision": "a71c03da5e094ef7d0a4d27c31914352"
  },
  {
    "url": "assets/js/58.bd95ae7e.js",
    "revision": "6e3946381828ee4652c4e0d83e59866e"
  },
  {
    "url": "assets/js/59.98093720.js",
    "revision": "3aa4ff7b8cdb5e559f3b5308724d0bfc"
  },
  {
    "url": "assets/js/6.45f6babe.js",
    "revision": "7c716061d4635b1c34d1e4e79329c257"
  },
  {
    "url": "assets/js/60.59de88b4.js",
    "revision": "57743e31d24cb7aa2dba63e34ddc8c78"
  },
  {
    "url": "assets/js/61.3e72ef1f.js",
    "revision": "1c0c98150c59cf1dfc0117810c045440"
  },
  {
    "url": "assets/js/62.17df0bab.js",
    "revision": "dec91adf55464847d689c03bcd418a27"
  },
  {
    "url": "assets/js/63.59ed8142.js",
    "revision": "85fdfa44cfac5bb4d8abdb532fdba3e3"
  },
  {
    "url": "assets/js/64.0dfda8d3.js",
    "revision": "f5975e47d6a8bfc51b98b7adc53526ec"
  },
  {
    "url": "assets/js/65.e86b719b.js",
    "revision": "5d89313c0f7d0cfddfa84f93ab6b8fef"
  },
  {
    "url": "assets/js/66.b2f7e66e.js",
    "revision": "7f5466a462ab8609f03af8fe857b3b03"
  },
  {
    "url": "assets/js/67.bed0f0c0.js",
    "revision": "1cc89461bbfc5595b1829dd324f5d0c3"
  },
  {
    "url": "assets/js/68.30924d85.js",
    "revision": "ac6b10d84478a5e8e2a1a977dfdd82b4"
  },
  {
    "url": "assets/js/69.ff467e71.js",
    "revision": "884e66b7a3e922f4a16bb3df81977cc2"
  },
  {
    "url": "assets/js/7.36d15a78.js",
    "revision": "57e8a54445dfca4dac09f94d42003079"
  },
  {
    "url": "assets/js/70.66ccdf30.js",
    "revision": "11ca0fed1a8db7c55f3a4bf94fc38854"
  },
  {
    "url": "assets/js/71.7b95dd74.js",
    "revision": "1ea587b1aed9e719b93338377554df40"
  },
  {
    "url": "assets/js/72.a7060637.js",
    "revision": "d9286394f9ff3b7612bd713d9eb0861d"
  },
  {
    "url": "assets/js/73.aaf5e480.js",
    "revision": "98094dd33a27238837779999e99804c8"
  },
  {
    "url": "assets/js/74.2e6da911.js",
    "revision": "f00745d54ff0f2a24b1b2e8dece2a89c"
  },
  {
    "url": "assets/js/75.4811e33a.js",
    "revision": "23bc5b1b5dcca442cffc1c89fb877577"
  },
  {
    "url": "assets/js/76.9fadcb8b.js",
    "revision": "9737fa5968466b3de6be54556aad94d9"
  },
  {
    "url": "assets/js/77.881cd289.js",
    "revision": "a246f737732e4bd6a889f0f59170a17a"
  },
  {
    "url": "assets/js/78.631b19fd.js",
    "revision": "51a1795ee402d07b90c51ec4725056a3"
  },
  {
    "url": "assets/js/79.8658c7a9.js",
    "revision": "12ddfd49795170e8f37cdeafedecde03"
  },
  {
    "url": "assets/js/8.d7976355.js",
    "revision": "519606803d6d1a4c82bf361fef1566f3"
  },
  {
    "url": "assets/js/80.1c308107.js",
    "revision": "ab9520dcbdfbe02368f034640e053f14"
  },
  {
    "url": "assets/js/81.d61f3086.js",
    "revision": "faeca7df3622b69e57a1075da33b7fa7"
  },
  {
    "url": "assets/js/82.ff0e2604.js",
    "revision": "4332eace5ac51e3c70233b384288fa82"
  },
  {
    "url": "assets/js/83.fb04b4ee.js",
    "revision": "32f81b8c27e3009ab60dac466ff9f470"
  },
  {
    "url": "assets/js/84.1d9a41b7.js",
    "revision": "4fcb98920440772678cc4b4b6e439bc9"
  },
  {
    "url": "assets/js/85.38143805.js",
    "revision": "182a65017c5d993a9c1f6df4817edf0a"
  },
  {
    "url": "assets/js/9.6d0c3494.js",
    "revision": "0d1434ce1c51a9c1d49c72c7be0bad1d"
  },
  {
    "url": "assets/js/app.008bc57e.js",
    "revision": "821a7c097b519865772abb09a081c8dc"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "86ae9a242b453097b517cda7dcfc4678"
  },
  {
    "url": "cs/bash.html",
    "revision": "94090e93508b5fe2d4cc88e828cf20bf"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "67c8cee62e8efd4b0fe621026776c6c5"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "a0777e7b5c70683f925f34328542c363"
  },
  {
    "url": "cs/cmake.html",
    "revision": "70f223d3b97d5a76939d8a31d2b430ce"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "4e60cd4b19102deccccdf151f17e0857"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "ee014c72e8ce391b7f670e9f41649b9c"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "67dec75732b7eb9455cb7be9fdc98d3e"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "629555f8b2ec9610699bf9bdaaad3ff9"
  },
  {
    "url": "cs/git.html",
    "revision": "d8091ba72e53c274e69b09d900723c3a"
  },
  {
    "url": "cs/index.html",
    "revision": "a46c9495d34c1b89bbf95939e1b3906a"
  },
  {
    "url": "cs/iptables.html",
    "revision": "61ce74cbc47af6a063aebb384471f384"
  },
  {
    "url": "cs/keras.html",
    "revision": "e0327dccab8f4c7b9841724b6597a51e"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "f19a594c5f83d7ceb40c3dbe67c1d954"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "16621d7dd5fbd8db30ecfb6e7942e979"
  },
  {
    "url": "cs/lwip.html",
    "revision": "6ca361abaac6e6edb73af468d5abe58f"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "d71d2c266f511d70e30fb5d651a2437a"
  },
  {
    "url": "cs/risc-v.html",
    "revision": "6401d3713a06cbc6bec79592da25b620"
  },
  {
    "url": "cs/scala.html",
    "revision": "61e08c8c56299c8c16efb68b1b6c90e4"
  },
  {
    "url": "cs/xtensa.html",
    "revision": "a0805d4062328fcd64b2ba5cd815def6"
  },
  {
    "url": "ee/about.html",
    "revision": "383c68b7218bc28174e8b191cc14e2cc"
  },
  {
    "url": "ee/chisel.html",
    "revision": "4a1513d890b4f0cbb45547fa60229cdb"
  },
  {
    "url": "ee/esp32.html",
    "revision": "d719a078076f51d7c3c88b97382fb748"
  },
  {
    "url": "ee/index.html",
    "revision": "72c4b1dc9c2031ef4683d0bb5f19be03"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "a4f3c33a666de1db9a2badcc94079c25"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "673b9434d89d03054888fb54673c52ff"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "b703e53957f176aac2d08e244bf842d6"
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
    "url": "images/cs/risc-v/csr_register_encoding.png",
    "revision": "43e73e84f64f58165a0a87eceeda90a0"
  },
  {
    "url": "images/cs/risc-v/immediate_addressing.png",
    "revision": "63c65b493f3567de925bf6559872fd89"
  },
  {
    "url": "images/cs/risc-v/register_addressing.png",
    "revision": "0d72c7c824dd7ff34c8c8a9a80f6bd00"
  },
  {
    "url": "images/cs/risc-v/register_file.png",
    "revision": "98edccb1a727e294835d52225eb4d32f"
  },
  {
    "url": "images/cs/risc-v/relative_addressing.png",
    "revision": "e48e043961b987d94d50138b35c41972"
  },
  {
    "url": "images/cs/risc-v/riscv_alu_design.png",
    "revision": "d2271feebffc5d5334c95b82b2d234ce"
  },
  {
    "url": "images/cs/risc-v/riscv_alu.png",
    "revision": "b4571647545ff79bc38687cfcaa078c9"
  },
  {
    "url": "images/cs/risc-v/riscv_B_instruction_data_path.png",
    "revision": "d7c245a9de212c1d3071def5bd5f49c9"
  },
  {
    "url": "images/cs/risc-v/riscv_B_instruction.png",
    "revision": "768409cfa8ebce6bc01df289534b8935"
  },
  {
    "url": "images/cs/risc-v/riscv_cache_direct_mapping_example.png",
    "revision": "1f5de9072253ebe2cb0f754bd5fb8971"
  },
  {
    "url": "images/cs/risc-v/riscv_cache_direct_mapping.png",
    "revision": "a724b585353c52dc2cbb079bce9f6bf8"
  },
  {
    "url": "images/cs/risc-v/riscv_cache_full_association_mapping_example.png",
    "revision": "c6b16b55c9899caa327abf42859095bf"
  },
  {
    "url": "images/cs/risc-v/riscv_cache_full_association_mapping.png",
    "revision": "50eaacf37ddf78784064bde48d4139b7"
  },
  {
    "url": "images/cs/risc-v/riscv_cache_structure.png",
    "revision": "b3d3a3651930ae17f10ba10fe8de8a8c"
  },
  {
    "url": "images/cs/risc-v/riscv_cache.png",
    "revision": "0010b661b965daa5e4974298a387a868"
  },
  {
    "url": "images/cs/risc-v/riscv_cpu_controller_truth_table.png",
    "revision": "9b41a36f4ca14ff52253de66525699d5"
  },
  {
    "url": "images/cs/risc-v/riscv_csr_register_access_instruction.png",
    "revision": "f54ee67a831892de447bfa813b8e9223"
  },
  {
    "url": "images/cs/risc-v/riscv_data_path.png",
    "revision": "75ca8e0f3ddfb83060ba124bb8802965"
  },
  {
    "url": "images/cs/risc-v/riscv_exception_csr_register_definitions.png",
    "revision": "7cb7296903026711f6e09741454e33e6"
  },
  {
    "url": "images/cs/risc-v/riscv_exception_csr_registers.png",
    "revision": "3be19f7b11879f1a16f82db40d401d6a"
  },
  {
    "url": "images/cs/risc-v/riscv_exception_mtvec_register.png",
    "revision": "bf62415702485620ba642c30f771d9d1"
  },
  {
    "url": "images/cs/risc-v/riscv_exception_return.png",
    "revision": "65f3e1bd49183fbb4662919d6668d35d"
  },
  {
    "url": "images/cs/risc-v/riscv_full_data_path.png",
    "revision": "2bd3abe393fa754fbd60ee7ebf1618d7"
  },
  {
    "url": "images/cs/risc-v/riscv_I_instruction_data_path.png",
    "revision": "a793de42939dc0e6faec5d9173540177"
  },
  {
    "url": "images/cs/risc-v/riscv_I_instruction.png",
    "revision": "350f3bc5906703c13f2aa852100fdf1f"
  },
  {
    "url": "images/cs/risc-v/riscv_instruction_type.png",
    "revision": "6459e601c18056ef475d0d057bff99e6"
  },
  {
    "url": "images/cs/risc-v/riscv_interrupt_enable_pending.png",
    "revision": "c4582d71b0aacb8e22d9cf3f0905def8"
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
    "url": "images/cs/risc-v/riscv_interrupt_priority.png",
    "revision": "987e662de224d5f7b473f6ba82c16b4c"
  },
  {
    "url": "images/cs/risc-v/riscv_isa_custom_instruction.png",
    "revision": "479706355607ee92c0d04fc8b19b3c19"
  },
  {
    "url": "images/cs/risc-v/riscv_isa_extension.png",
    "revision": "6e965d5715436f01f6abb1e6a1091800"
  },
  {
    "url": "images/cs/risc-v/riscv_jal_instruction_data_path.png",
    "revision": "b400a062fae32e3f959208c9b2ae6acf"
  },
  {
    "url": "images/cs/risc-v/riscv_jalr_instruction_data_path.png",
    "revision": "f2b992fe4b3bf26fa2d5ce5c6d07b322"
  },
  {
    "url": "images/cs/risc-v/riscv_jump_instruction.png",
    "revision": "53be1f36d4b8aebe72348d44e2794273"
  },
  {
    "url": "images/cs/risc-v/riscv_load_instruction_data_path.png",
    "revision": "994b1eddb674bafcab0a194c5c3c3245"
  },
  {
    "url": "images/cs/risc-v/riscv_load_store_instruction.png",
    "revision": "9677a930cd97d64fe48c286a7567554e"
  },
  {
    "url": "images/cs/risc-v/riscv_machine_exception_codes.png",
    "revision": "ec2ed61278e8befe1db36a6396caf034"
  },
  {
    "url": "images/cs/risc-v/riscv_mmu_page_manage.png",
    "revision": "938e924911b9f07702ce6bd64f6d3af3"
  },
  {
    "url": "images/cs/risc-v/riscv_mmu_segment_manage.png",
    "revision": "fbbecfd3a35ba066c2d89886f9706d80"
  },
  {
    "url": "images/cs/risc-v/riscv_mmu_two_level_page_manage.png",
    "revision": "5830951d69f8854ff1702c346b5136d0"
  },
  {
    "url": "images/cs/risc-v/riscv_mmu.png",
    "revision": "7262e30e2a86e1344bbe9fb56be4cc51"
  },
  {
    "url": "images/cs/risc-v/riscv_one_cycle_intruction_interrupt_enter.png",
    "revision": "10ae6c05eafa66c512b7904ee5b794c5"
  },
  {
    "url": "images/cs/risc-v/riscv_one_cycle_intruction_interrupt_exit.png",
    "revision": "05a8d21c40cd98a5712653778803eef2"
  },
  {
    "url": "images/cs/risc-v/riscv_pipeline_registers.png",
    "revision": "7691b2476c6f81caa4896bc555925432"
  },
  {
    "url": "images/cs/risc-v/riscv_pipeline.png",
    "revision": "39941dc35dfa6f252d48e75a0f29b0cf"
  },
  {
    "url": "images/cs/risc-v/riscv_R_instruction_data_path.png",
    "revision": "1c967b1feb770563c4682a1aa8d1e81f"
  },
  {
    "url": "images/cs/risc-v/riscv_R_instruction.png",
    "revision": "4f0a03ae7e27ec018676b53a24b78fba"
  },
  {
    "url": "images/cs/risc-v/riscv_set_associative_cache_example.png",
    "revision": "90b501683c77db980ade0975d7f1a31b"
  },
  {
    "url": "images/cs/risc-v/riscv_set_associative_cache.png",
    "revision": "88e53b1f2628294cf6f7b3d68ecfecca"
  },
  {
    "url": "images/cs/risc-v/riscv_store_instruction_data_path.png",
    "revision": "104dac06d68818ba62a71dd3363c2d75"
  },
  {
    "url": "images/cs/risc-v/riscv_tlb.png",
    "revision": "22e93fc6ceb9b42c3f0d0c2b196e69f7"
  },
  {
    "url": "images/cs/risc-v/riscv_U_instruction.png",
    "revision": "a6d4c4221d9b33aea1da33fe5307fa0a"
  },
  {
    "url": "images/cs/risc-v/single_instruction_CPU.png",
    "revision": "5011d2a2df16a56ecc910449fd943e70"
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
    "revision": "8427a9b17606dcdec052d9f992b556ac"
  },
  {
    "url": "others/about.html",
    "revision": "8e1a6f3ce4ef71410506bff519e4da9f"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "62faee602708f230447c1bd4619cd6ae"
  },
  {
    "url": "others/android-studio.html",
    "revision": "bc52d434e1e0e4d55b034e3e1d66f7b5"
  },
  {
    "url": "others/android.html",
    "revision": "130a0f861de9c5eac6cc8fdde803152d"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "020acd7067dcf9d23fa872e637e53827"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "8cc9831203bfcefcf92da2cb82e2e6fe"
  },
  {
    "url": "others/css.html",
    "revision": "9f67205a90ad00333500a8001ba86f81"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "4cbf91b491d14a8cac8ee45d24573315"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "b41bf5dca618d54c69f3374dbdf0155e"
  },
  {
    "url": "others/english-writting.html",
    "revision": "f50e140e9081fcb7797262756dca1a18"
  },
  {
    "url": "others/freertos.html",
    "revision": "5929149a1c9ebf7a85e692137f612067"
  },
  {
    "url": "others/gns3.html",
    "revision": "82f2a6d2a5f8066bb122fa5872effc0b"
  },
  {
    "url": "others/gps.html",
    "revision": "69f77dbad2e9751a14fa2ed389b04ac0"
  },
  {
    "url": "others/html5.html",
    "revision": "2b342249f155a1bcff78c4360ff19d9a"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "67592e9603ba679ff74737646e79b8b3"
  },
  {
    "url": "others/index.html",
    "revision": "d3704b82f541d579c05d4c2527e68e4a"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "5bec729e934fdc50ddfe97eaca20f43f"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "d45d78df4f0167d5c8a951fef7122e2d"
  },
  {
    "url": "others/javascript.html",
    "revision": "af90dbe6a381f9a5b3a90e740ced8559"
  },
  {
    "url": "others/json.html",
    "revision": "d9bf3b7c4046e430a0406e31418d750d"
  },
  {
    "url": "others/latex.html",
    "revision": "c5e92c5dfc40aa7d716cfafae9b0fabf"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "abf0280a5f999ffb2dc0fb3a26653720"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "7e7b94b29c600d918f73a8fcb13e8405"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "cc655e1372a5c48e5ed92d940e48acaa"
  },
  {
    "url": "others/markdown.html",
    "revision": "965ddadbac0f95ffa8801ef4c1de69b0"
  },
  {
    "url": "others/matlab.html",
    "revision": "0d089bf88e09931845b348082ea19c34"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "bfadf0ec2855adad57aaed1d902343a4"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "158180649148ff47fc91f8716ee9736f"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "08b60ee0d23324fef07ff2c87f081013"
  },
  {
    "url": "others/network-security.html",
    "revision": "7fadb4d9426c90784739f00bfe69c118"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "5cf08a32d7182eee3728f0b98d66f601"
  },
  {
    "url": "others/oral_english.html",
    "revision": "13f4e38472a69ea03ec793dad8031d11"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "285aa40eb88eb8ec62f54690c50c3463"
  },
  {
    "url": "others/poe.html",
    "revision": "ef6035487d06f928d8266d01ec80a704"
  },
  {
    "url": "others/pyside2.html",
    "revision": "fcd49c62dfbdf61b0b6420e3cf5d6db4"
  },
  {
    "url": "others/python-socket.html",
    "revision": "125803ad1ce2ac6683377d4fc1d7651d"
  },
  {
    "url": "others/python.html",
    "revision": "69918b45c5b90c46107b9c5f85fbee9b"
  },
  {
    "url": "others/q-learning.html",
    "revision": "322af47565d205a5b456aeb08a4a32d6"
  },
  {
    "url": "others/qr-code.html",
    "revision": "9eb06efda52fab81033132482856f8fe"
  },
  {
    "url": "others/qt4.html",
    "revision": "4a9b29b54fb6de7f524e4bcf4d79b31b"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "da611697e1e7968c5e8cc3b01a9769fa"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "cc3a0dcb669000b1b5c710cd98d94658"
  },
  {
    "url": "others/sd-card.html",
    "revision": "eb804d0605da5a6bf76bae2364105e97"
  },
  {
    "url": "others/sdn.html",
    "revision": "5642d143c9867048e538e0ffe4f1f183"
  },
  {
    "url": "others/star-uml.html",
    "revision": "ec69c86270834bdc7f69cfdabd6c956d"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "6e88c839a7c8ee14920a49470e6943e0"
  },
  {
    "url": "others/verilog.html",
    "revision": "a53833738a9b2906ae62d692110f92a2"
  },
  {
    "url": "others/vue.html",
    "revision": "770c61fb6ff0f15d29468461a38d4fe5"
  },
  {
    "url": "others/w5500.html",
    "revision": "bb26bf0072e15060ddb8a24a2f0771eb"
  },
  {
    "url": "others/w7500.html",
    "revision": "032ef645471250951f5a233985dcfc27"
  },
  {
    "url": "resume.html",
    "revision": "1500d6d07530ad3cf90f54e613409e83"
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
