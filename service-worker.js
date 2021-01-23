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
    "revision": "924fc00b9f7dad10a4235d2a8e5e9ae8"
  },
  {
    "url": "assets/css/0.styles.3b77ef9d.css",
    "revision": "93f0cb833d07811dde0c652d7b2d908e"
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
    "url": "assets/img/big_class.97e1df24.jpg",
    "revision": "97e1df242f09005baac64fd4b2349184"
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
    "url": "assets/img/disordered_dependency.7886e47e.jpg",
    "revision": "7886e47e508dab49bfb9300d2e885887"
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
    "url": "assets/img/long_function.38b69cbf.jpg",
    "revision": "38b69cbf9b4eb674e251d506016bf179"
  },
  {
    "url": "assets/img/long_parameter.5fcd73d0.jpg",
    "revision": "5fcd73d05aad54d698e10f7fe265b872"
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
    "url": "assets/img/misuse_control_flow.60125e6d.jpg",
    "revision": "60125e6dc6a16720cfb37fbf31799fcc"
  },
  {
    "url": "assets/img/misuse_encapsulation.34256e13.jpg",
    "revision": "34256e13cdf6b68050ef8d95f9d81816"
  },
  {
    "url": "assets/img/misuse_english.fd97f3e5.jpg",
    "revision": "fd97f3e58e467134e93b3a75a35f5a41"
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
    "url": "assets/img/mutable_data.e2d0a29a.jpg",
    "revision": "e2d0a29aeb6386d5d400b0da0abcfb6c"
  },
  {
    "url": "assets/img/naming.2c29094e.jpg",
    "revision": "2c29094ee11a21ff232bb17b7f2cca71"
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
    "url": "assets/img/redundant_code.79ea61d2.jpg",
    "revision": "79ea61d29abae79d547396eecf9b0b62"
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
    "url": "assets/img/riscv_tlb_location.3998049f.png",
    "revision": "3998049fdf6f7b0bdbcb56f3930a2057"
  },
  {
    "url": "assets/img/riscv_tlb_translation.7a0bf91b.png",
    "revision": "7a0bf91b234ebbb017ea66b78689c255"
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
    "url": "assets/img/riscv_vma_pma_translation.4670166a.png",
    "revision": "4670166aae19e89519cd1d636a6378fd"
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
    "url": "assets/img/typical_bad_taste.c1458bce.jpg",
    "revision": "c1458bce5fb4814043a3deea88a040c2"
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
    "url": "assets/js/10.a701c7b5.js",
    "revision": "68a203aabb7475ec7e9616d508c75e30"
  },
  {
    "url": "assets/js/11.5b50f57d.js",
    "revision": "81535cf14bfd0c491c9d2e5df405e343"
  },
  {
    "url": "assets/js/12.4b2986b2.js",
    "revision": "4fc7830d5653bbe956a10a430c0dc1e2"
  },
  {
    "url": "assets/js/13.acc434bb.js",
    "revision": "62accdd4a11bc0b932c9e38fa5b45aaa"
  },
  {
    "url": "assets/js/14.6121c6d1.js",
    "revision": "209d52d19f7ae4ddf86cbb37384ae753"
  },
  {
    "url": "assets/js/15.d694e514.js",
    "revision": "da9b69befef63906077c0241d0df2139"
  },
  {
    "url": "assets/js/16.ba0bd911.js",
    "revision": "e335b12486054fa64c8eed78729ce3b0"
  },
  {
    "url": "assets/js/17.75980385.js",
    "revision": "24146547aa3a9bf87cbaf33a61cb6245"
  },
  {
    "url": "assets/js/18.04d19428.js",
    "revision": "ea2d16ae46231790c7c759f906387fe3"
  },
  {
    "url": "assets/js/19.6efda518.js",
    "revision": "73c7158dd4b5db84e977d8b620b7ef7e"
  },
  {
    "url": "assets/js/2.a67ef539.js",
    "revision": "e758a272649931bf2de64f18ad49d56e"
  },
  {
    "url": "assets/js/20.578bdf23.js",
    "revision": "3c626c4e8df64a01645e5e79b27ef150"
  },
  {
    "url": "assets/js/21.c31cf45b.js",
    "revision": "17f6645b8f27d43ab31be089245b206e"
  },
  {
    "url": "assets/js/22.9485297b.js",
    "revision": "8d344c4dd559c08c901fae18ff6eb159"
  },
  {
    "url": "assets/js/23.90adfbea.js",
    "revision": "57ff8e8a27a9dd017ab591f9e55d728b"
  },
  {
    "url": "assets/js/24.f13bae7a.js",
    "revision": "ef25becd14f57323c77dd74973b88cda"
  },
  {
    "url": "assets/js/25.15063e9d.js",
    "revision": "3efdf1161abda738b17c3424dfea0283"
  },
  {
    "url": "assets/js/26.3e21c203.js",
    "revision": "fa7e27f2e4ad22bcd606313246af7d77"
  },
  {
    "url": "assets/js/27.f0be2f36.js",
    "revision": "e323a54e1695e3ae87302de53b344247"
  },
  {
    "url": "assets/js/28.ecad5ff0.js",
    "revision": "b5446881bcaa2122e47aaeefc9000b0c"
  },
  {
    "url": "assets/js/29.1ee259d4.js",
    "revision": "829c381d2a67fbdd4a3dd6553f1f0c0d"
  },
  {
    "url": "assets/js/3.9ff285b8.js",
    "revision": "aa538e19d1d969cc3a09ad40a1ee0248"
  },
  {
    "url": "assets/js/30.94fade4b.js",
    "revision": "a20dad5b1314aac129b5bd4e5d867001"
  },
  {
    "url": "assets/js/31.b306d869.js",
    "revision": "ca51f8f1a394548040ca5998c1db4a44"
  },
  {
    "url": "assets/js/32.023cc397.js",
    "revision": "14f6cf3978f99fd6da1fb6bea051b3d3"
  },
  {
    "url": "assets/js/33.46cfb12c.js",
    "revision": "53898c78778ee33dc99ae8a0f50379d5"
  },
  {
    "url": "assets/js/34.53501f6e.js",
    "revision": "bd7aedd14dfc9b1bb0006ca833654520"
  },
  {
    "url": "assets/js/35.bd6cac7c.js",
    "revision": "bc8fd13f75822b25b584d312f7a81b40"
  },
  {
    "url": "assets/js/36.78bd7b6d.js",
    "revision": "9dd6803b92cd15718a7c9984c2d803c0"
  },
  {
    "url": "assets/js/37.52d9eba8.js",
    "revision": "bc13684dfa65dab1dd0ee6feffc6cb44"
  },
  {
    "url": "assets/js/38.a7968f48.js",
    "revision": "fb099c69e5c94d912eb3db1ba1826ee7"
  },
  {
    "url": "assets/js/39.b4551484.js",
    "revision": "983c3ec69d69b1d5b98b9f5eee9b64e9"
  },
  {
    "url": "assets/js/4.b3a62746.js",
    "revision": "103c4db408954b917fe55da7f718aae8"
  },
  {
    "url": "assets/js/40.e9398701.js",
    "revision": "178d66c99ac1e1736ef7cda7282a7006"
  },
  {
    "url": "assets/js/41.e7f813ac.js",
    "revision": "8020f7986fa23a689667a741b972ec9c"
  },
  {
    "url": "assets/js/42.e9009fbb.js",
    "revision": "f7bae616c4500c877ffabf6f386a7c2b"
  },
  {
    "url": "assets/js/43.c51635b3.js",
    "revision": "da3bd93d9cccb4e72f8b988898a8e30c"
  },
  {
    "url": "assets/js/44.3b91e6b3.js",
    "revision": "1f7dfc521d716ca82cb9fc5269934ff5"
  },
  {
    "url": "assets/js/45.646b065b.js",
    "revision": "137fe2e5db72c3fe794b3e3ac1a369ab"
  },
  {
    "url": "assets/js/46.804f52e2.js",
    "revision": "eb9099bdfd93a1e7ed1013a806baf300"
  },
  {
    "url": "assets/js/47.9e010bf6.js",
    "revision": "3c02c1af6a016eda133d7b05c5222e8e"
  },
  {
    "url": "assets/js/48.1c902fe3.js",
    "revision": "c2057a8bbbe05f03caecc7bd20886d04"
  },
  {
    "url": "assets/js/49.773c6e43.js",
    "revision": "5178c53cbbdb5195a8a5c242983a0301"
  },
  {
    "url": "assets/js/5.3260ba9c.js",
    "revision": "127f00e5adcc1fe6f9845fc75dce91c3"
  },
  {
    "url": "assets/js/50.ed53d989.js",
    "revision": "ebd3386abac929b5d22ecb5771a81612"
  },
  {
    "url": "assets/js/51.4a0619ca.js",
    "revision": "0b68a35698fff1e2c081e07bb5214bd6"
  },
  {
    "url": "assets/js/52.bf466c5e.js",
    "revision": "da24956487f1c99ba3772453ef6669fb"
  },
  {
    "url": "assets/js/53.d509a149.js",
    "revision": "e7c0700419499aaffac2213f30a11532"
  },
  {
    "url": "assets/js/54.7f835021.js",
    "revision": "8b4d283f890f76ef658c51255153c156"
  },
  {
    "url": "assets/js/55.bd5c5085.js",
    "revision": "c83e8fd9bfec4e09d776c96c86ab82c7"
  },
  {
    "url": "assets/js/56.3c96834b.js",
    "revision": "a6eab60962a50e8cfff38c61d210b702"
  },
  {
    "url": "assets/js/57.4b339557.js",
    "revision": "d5aa975bb0222fe3a43fe75f95c1a758"
  },
  {
    "url": "assets/js/58.8aa0b406.js",
    "revision": "cc1c77dd800454d9d61705a41486ae29"
  },
  {
    "url": "assets/js/59.eb6b0bc3.js",
    "revision": "be7da6b44a256c94e90eb806c241bdae"
  },
  {
    "url": "assets/js/6.2b4624dc.js",
    "revision": "aa7eb767d55260a1a8c9f25ba18c237b"
  },
  {
    "url": "assets/js/60.db32f104.js",
    "revision": "7c177c088b72b53fab16ff47efe06193"
  },
  {
    "url": "assets/js/61.4a7a0667.js",
    "revision": "d1ac47b26e498c613c052c1cfae3c7cf"
  },
  {
    "url": "assets/js/62.77a3832c.js",
    "revision": "0bf52734153966c50906b12e92b87c7b"
  },
  {
    "url": "assets/js/63.0de49f79.js",
    "revision": "122334ebeadbb55970f9a289f8b7961b"
  },
  {
    "url": "assets/js/64.711f96b9.js",
    "revision": "8d2331d77fc737b4de5e930647404c61"
  },
  {
    "url": "assets/js/65.8a8de9c6.js",
    "revision": "63f2ef38c3eccb6ff36bb65cb70f8413"
  },
  {
    "url": "assets/js/66.18cb7923.js",
    "revision": "4a37c62f169b7a068d8a1ff16f7a7367"
  },
  {
    "url": "assets/js/67.d8b3b703.js",
    "revision": "873c04d49b704e03a33f95c6c0c9cf84"
  },
  {
    "url": "assets/js/68.71da7fa3.js",
    "revision": "88f0b36f2dd79b509ca8c31421ad38ca"
  },
  {
    "url": "assets/js/69.14ca8a34.js",
    "revision": "439cf415c4f1015bab4220b171e3523b"
  },
  {
    "url": "assets/js/7.52e8e065.js",
    "revision": "c51a5201e4450015d1da425a64226173"
  },
  {
    "url": "assets/js/70.e8545e6e.js",
    "revision": "123ecc1e3e234005a2be203397e20008"
  },
  {
    "url": "assets/js/71.64f25999.js",
    "revision": "6c4a555f439c2562190cdca5008826b0"
  },
  {
    "url": "assets/js/72.cc2921a0.js",
    "revision": "7d1dfabacbd83d17955d8b7a791258b8"
  },
  {
    "url": "assets/js/73.1cbc466d.js",
    "revision": "ff1a44b806c49f33c8ccf843fb91bf33"
  },
  {
    "url": "assets/js/74.e2c837b9.js",
    "revision": "0bd6bb48027e9bdf642c488ef0488ae1"
  },
  {
    "url": "assets/js/75.8f584637.js",
    "revision": "54fb756f030d4caf0f168a728dcce3df"
  },
  {
    "url": "assets/js/76.6e5f771b.js",
    "revision": "686f9aa090116f225b180e38ebb08cf6"
  },
  {
    "url": "assets/js/77.d829e003.js",
    "revision": "2ad7256ccaddd0c385e4edc8c1a751ad"
  },
  {
    "url": "assets/js/78.fc79d167.js",
    "revision": "06e2fc3dcfecc26b7445ab3124c77877"
  },
  {
    "url": "assets/js/79.02a8ca01.js",
    "revision": "75c9d52d58329a1b3df1bab922eb2481"
  },
  {
    "url": "assets/js/8.f8732e9d.js",
    "revision": "4156418ae4c982fc4234a48b8cee9daa"
  },
  {
    "url": "assets/js/80.82e07370.js",
    "revision": "01e1d07687315f7b9d7b85d4a1165c20"
  },
  {
    "url": "assets/js/81.120259db.js",
    "revision": "bf696feb1c0a40bb500fa5223c71b6e7"
  },
  {
    "url": "assets/js/82.5726cdb0.js",
    "revision": "cb5ebe9e2954e11aef8a8d9c554a1293"
  },
  {
    "url": "assets/js/83.7603fccf.js",
    "revision": "4d691c1624c0acf2cb13d223de3f5819"
  },
  {
    "url": "assets/js/84.a1dd8d32.js",
    "revision": "e823195b12888b4bcb38128ff6aa0ea9"
  },
  {
    "url": "assets/js/85.b848176e.js",
    "revision": "e4f0c5a5445852918d15e4fc15bfb3b5"
  },
  {
    "url": "assets/js/86.3ce69271.js",
    "revision": "9bc784f3c4bfc671213885eeb474e7d2"
  },
  {
    "url": "assets/js/87.932ba731.js",
    "revision": "423000ff8a7358f362fee4ef11028453"
  },
  {
    "url": "assets/js/88.507e4ed2.js",
    "revision": "f08efa75b4a48bbe0bcd155b1914ee97"
  },
  {
    "url": "assets/js/9.2fdc513a.js",
    "revision": "dfaaa11983d3bfef578238bcb1cebb7a"
  },
  {
    "url": "assets/js/app.5d508aa3.js",
    "revision": "ec506dfb2d02f050bec6e15a665139e9"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "f7c40015d49ceed9a2389fb43dd377ef"
  },
  {
    "url": "cs/bash.html",
    "revision": "7121279d61e1bdde45b506d67ef2a13b"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "4cd4c25b6518cf38fcb19094aceb7aa3"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "d52fb2aa86e765affdb72c17343fe2ee"
  },
  {
    "url": "cs/cmake.html",
    "revision": "8c286ad9d2e3f4d857d4ea6c79644b22"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "9534c678b2a7ce022b9cf4a066f97dcf"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "6c58caff6ce6b082aaf03b49823dff6d"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "ea2a4bcc85e87acf4f82e0246901a2db"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "8ea4063c95c24ad8449f69b5ea32e780"
  },
  {
    "url": "cs/git.html",
    "revision": "9416850c339ab3ccb49432d152edc7ac"
  },
  {
    "url": "cs/index.html",
    "revision": "5adc289d47abda842d1025411fc6f076"
  },
  {
    "url": "cs/iptables.html",
    "revision": "75c1a5d61294adb14168b9f66182b834"
  },
  {
    "url": "cs/keras.html",
    "revision": "8edd5fff673b202d063c55cfd2e36b7b"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "0db2100131e59910f83aa4f7886bbce3"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "2d5a49aee6166fba1c779444be053e1f"
  },
  {
    "url": "cs/lwip.html",
    "revision": "e718d9f2d0aa7619f993e9f394151e7f"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "61697f4d9c562e60f6e077ce422b3182"
  },
  {
    "url": "cs/python.html",
    "revision": "cfbe358db9ab5ad9d043f6942d5b93d0"
  },
  {
    "url": "cs/risc-v.html",
    "revision": "2b4f17d0e637b656ded8f98a0e979245"
  },
  {
    "url": "cs/scala.html",
    "revision": "feaa16d5cfcf4017c8f7beedeb43c65d"
  },
  {
    "url": "cs/think_in_code.html",
    "revision": "1c99e8c86f338c4bb3e488d6e2cb90a0"
  },
  {
    "url": "cs/xtensa.html",
    "revision": "cb5c74cbed655b85e6eca60ea6fd0cea"
  },
  {
    "url": "ee/about.html",
    "revision": "1a6faae7956140d5b1073656a79b037d"
  },
  {
    "url": "ee/chisel.html",
    "revision": "1b288dc389d7d99caff6dd63d765a217"
  },
  {
    "url": "ee/esp32.html",
    "revision": "938e1f6924a859427f76eed713015293"
  },
  {
    "url": "ee/index.html",
    "revision": "fdc078b1ce6e12db5bcfd8e7276c4827"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "5bcbd0e3419943a8a454ccae7a6552a4"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "3b1718dfe7c1fc350077db1dd4cbe593"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "81f03452a05526f40c63668a9a3f0da2"
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
    "url": "images/cs/risc-v/riscv_tlb_location.png",
    "revision": "3998049fdf6f7b0bdbcb56f3930a2057"
  },
  {
    "url": "images/cs/risc-v/riscv_tlb_translation.png",
    "revision": "7a0bf91b234ebbb017ea66b78689c255"
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
    "url": "images/cs/risc-v/riscv_vma_pma_translation.png",
    "revision": "4670166aae19e89519cd1d636a6378fd"
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
    "url": "images/cs/think_in_code/big_class.jpg",
    "revision": "97e1df242f09005baac64fd4b2349184"
  },
  {
    "url": "images/cs/think_in_code/disordered_dependency.jpg",
    "revision": "7886e47e508dab49bfb9300d2e885887"
  },
  {
    "url": "images/cs/think_in_code/long_function.jpg",
    "revision": "38b69cbf9b4eb674e251d506016bf179"
  },
  {
    "url": "images/cs/think_in_code/long_parameter.jpg",
    "revision": "5fcd73d05aad54d698e10f7fe265b872"
  },
  {
    "url": "images/cs/think_in_code/misuse_control_flow.jpg",
    "revision": "60125e6dc6a16720cfb37fbf31799fcc"
  },
  {
    "url": "images/cs/think_in_code/misuse_encapsulation.jpg",
    "revision": "34256e13cdf6b68050ef8d95f9d81816"
  },
  {
    "url": "images/cs/think_in_code/misuse_english.jpg",
    "revision": "fd97f3e58e467134e93b3a75a35f5a41"
  },
  {
    "url": "images/cs/think_in_code/mutable_data.jpg",
    "revision": "e2d0a29aeb6386d5d400b0da0abcfb6c"
  },
  {
    "url": "images/cs/think_in_code/naming.jpg",
    "revision": "2c29094ee11a21ff232bb17b7f2cca71"
  },
  {
    "url": "images/cs/think_in_code/redundant_code.jpg",
    "revision": "79ea61d29abae79d547396eecf9b0b62"
  },
  {
    "url": "images/cs/think_in_code/typical_bad_taste.jpg",
    "revision": "c1458bce5fb4814043a3deea88a040c2"
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
    "revision": "fe6baa6c2c17d9a423d25e9e60e46cd1"
  },
  {
    "url": "others/about.html",
    "revision": "fe116404023ff6672565f868a58f59d9"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "7c7cc967c5675f4dadc73c00ce3a9770"
  },
  {
    "url": "others/android-studio.html",
    "revision": "28fb0cfe4ceaf7d58d8afed23e3ca21b"
  },
  {
    "url": "others/android.html",
    "revision": "b797b75bdae2d54b04ad966b2488f6b4"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "123249d15dd9d3d3f04b64984c81224b"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "9a45a46120caadaf34ffd9a2538aa5ad"
  },
  {
    "url": "others/css.html",
    "revision": "4a92cbe0b319e6334d6dff5063e4e5ef"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "ed8a8387806f1a5bb220a92406d6783e"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "b883e73ea685916735a01c349fd8965b"
  },
  {
    "url": "others/english-writting.html",
    "revision": "b53ec61059c5a3e96918b49f5e7631e4"
  },
  {
    "url": "others/freertos.html",
    "revision": "e6bc015d97e7788ebd9993f42d54c43a"
  },
  {
    "url": "others/gns3.html",
    "revision": "1878d5bfaf48fad02e0b274d2456e6e6"
  },
  {
    "url": "others/gps.html",
    "revision": "bcd5809409e418d03f5a428d16f3da78"
  },
  {
    "url": "others/html5.html",
    "revision": "14d4b6f0dbb3cc1f72735060750b98b1"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "565c0c653ca9f6f1667fdf58fce4d2d0"
  },
  {
    "url": "others/index.html",
    "revision": "0f894721fbe2f3e04e28a7b799665775"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "ccca622f615bca695984b5863e2c7bfe"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "3021f281bd9e4d0a1905d44d5876e5e4"
  },
  {
    "url": "others/javascript.html",
    "revision": "2615b8d69b4c972385037a40e76906b3"
  },
  {
    "url": "others/json.html",
    "revision": "50aa1b0d57a91712395789692144b73b"
  },
  {
    "url": "others/latex.html",
    "revision": "a441450aacebb9e479027123ed3b7644"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "4acb5ac70facbaa2df06cdd4421d6c92"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "ed76681b8f827638fa6662798ba89a45"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "123a730307376bd948b457b81c29b050"
  },
  {
    "url": "others/markdown.html",
    "revision": "a982a12f6d940ba20d796074ad6f01de"
  },
  {
    "url": "others/matlab.html",
    "revision": "311bc5dde804aafa44aa4f890a1a10a1"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "b1fea5f4892f0d97a8017b52e7bd038e"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "566cec39ef3cc2644fdbee5d82439b19"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "05a91d767737a50417a6df92a7fc95c2"
  },
  {
    "url": "others/network-security.html",
    "revision": "d5055342d5df9b35eac707d8e17751fd"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "3cdffe49455b07f25e78cfaa23ee3994"
  },
  {
    "url": "others/oral_english.html",
    "revision": "774bc54784c0452f7ff4bc9367dc95b9"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "35f4215f3f1b7511ecdd71c3fbbea231"
  },
  {
    "url": "others/poe.html",
    "revision": "249bd9818b75f51d8fca82edde1f808b"
  },
  {
    "url": "others/pyside2.html",
    "revision": "351aa5072309b54f52da4f93cfa3a9a6"
  },
  {
    "url": "others/python-socket.html",
    "revision": "f287e9f17fdc47674b525fb783e0efd1"
  },
  {
    "url": "others/q-learning.html",
    "revision": "2f2e877417d4196ef68ce84b11a489d3"
  },
  {
    "url": "others/qr-code.html",
    "revision": "a6638eb409fd9e3e31c2f340334b98dc"
  },
  {
    "url": "others/qt4.html",
    "revision": "9a777818a7df9dc031bbfab6e484cffe"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "ade34ae18b6fb762814c6debf6ac42e9"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "76663c1d6980ad733a16b478e475872a"
  },
  {
    "url": "others/sd-card.html",
    "revision": "c97c23bfa7a1b3088878868c46b4f87e"
  },
  {
    "url": "others/sdn.html",
    "revision": "c370197bb05aefb3b8962cdbd9c340f7"
  },
  {
    "url": "others/star-uml.html",
    "revision": "4a2e55fe7b06163cb94f25d1a1432ca6"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "8ed895a5652e747dd08bf57c2a9af466"
  },
  {
    "url": "others/verilog.html",
    "revision": "fe08c487bc7ba2c6acf6d59a9bd56e24"
  },
  {
    "url": "others/vue.html",
    "revision": "03c21a38b3972e0d39a880fdea558396"
  },
  {
    "url": "others/w5500.html",
    "revision": "da5a3038b10097c09b7408cbeb994c60"
  },
  {
    "url": "others/w7500.html",
    "revision": "c929999b9f22d6072d2e9eebc0d7a249"
  },
  {
    "url": "resume.html",
    "revision": "56dbe9da5059acf97882b9b8872a1a36"
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
