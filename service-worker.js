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
    "revision": "cc20473fdf60018160af1175240671c1"
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
    "url": "assets/js/10.00c02032.js",
    "revision": "b75f52329e082782818db199cbd7bdef"
  },
  {
    "url": "assets/js/11.ee4f7d00.js",
    "revision": "1435342774eeea30284de35477043914"
  },
  {
    "url": "assets/js/12.edd155f0.js",
    "revision": "a8f7a9705b1de0c8f799f4a75de643e0"
  },
  {
    "url": "assets/js/13.f9d4bfa8.js",
    "revision": "b6f2fe7d27f7d65d480e2b5c42047145"
  },
  {
    "url": "assets/js/14.583888f4.js",
    "revision": "b5db18244ea307a6025095460d17af9f"
  },
  {
    "url": "assets/js/15.f5d871d0.js",
    "revision": "e06dff4f2d0401af631df622976b769f"
  },
  {
    "url": "assets/js/16.0446fef1.js",
    "revision": "6e713415fecabaf28f49efb9360619e8"
  },
  {
    "url": "assets/js/17.be0d963b.js",
    "revision": "08daaf617725fd6f95853340dbd45659"
  },
  {
    "url": "assets/js/18.f76015e2.js",
    "revision": "f2fc63c169f8db5a417e72a9578c846f"
  },
  {
    "url": "assets/js/19.dee1f87e.js",
    "revision": "4a56005325973332b7a2e824c6fecca0"
  },
  {
    "url": "assets/js/2.789c7d40.js",
    "revision": "381513de43058f8f54840d55577f264b"
  },
  {
    "url": "assets/js/20.13725151.js",
    "revision": "7c31b0af0b26c12b654462b845344fab"
  },
  {
    "url": "assets/js/21.adec0464.js",
    "revision": "f383c90dc307438c849ed52cf3c9ae0e"
  },
  {
    "url": "assets/js/22.7b9ba5fb.js",
    "revision": "1c6e26ff20a98014f8217d5d29a68f7d"
  },
  {
    "url": "assets/js/23.75076064.js",
    "revision": "cde630ba59272d7e3b3d01168843e172"
  },
  {
    "url": "assets/js/24.3e13301a.js",
    "revision": "6bf287083b6365b8f690a4fd923f668b"
  },
  {
    "url": "assets/js/25.37192c04.js",
    "revision": "c903d2dc0546af234cd548be33b9ea2b"
  },
  {
    "url": "assets/js/26.18e9f940.js",
    "revision": "c263c6a4c2e53695e9fbdf744f2a9cda"
  },
  {
    "url": "assets/js/27.df35fdbd.js",
    "revision": "e19dbc2cc7502635c8886245a94ff3a3"
  },
  {
    "url": "assets/js/28.7251c935.js",
    "revision": "e5bd35a3b89a96b536974b359303067a"
  },
  {
    "url": "assets/js/29.22182695.js",
    "revision": "61d936fff9dd1abf63cd4cb1b04bd4e1"
  },
  {
    "url": "assets/js/3.3f750942.js",
    "revision": "c1f67aa5091ef6c2c962759d96fdb374"
  },
  {
    "url": "assets/js/30.5924de50.js",
    "revision": "a93170064dddccc2d8150a2fb8557a56"
  },
  {
    "url": "assets/js/31.e12dd514.js",
    "revision": "8be0b59433d2aacbee072c175092f50b"
  },
  {
    "url": "assets/js/32.d4fe9309.js",
    "revision": "2cce1d0cf03a56b8483443528ce01802"
  },
  {
    "url": "assets/js/33.938f16db.js",
    "revision": "d25722d0ae8987a40e995fca7318d9a8"
  },
  {
    "url": "assets/js/34.233f24d4.js",
    "revision": "f2ca8f2a0386a1315eaebea43864575e"
  },
  {
    "url": "assets/js/35.c5d392c0.js",
    "revision": "928c921289c202c39e10ea9abd67b81a"
  },
  {
    "url": "assets/js/36.45682d58.js",
    "revision": "5db7e0e1bf833a7bb3478ba4c12b7f57"
  },
  {
    "url": "assets/js/37.e0485f66.js",
    "revision": "224b129905d6bc6d6eea27a3ace3d3c0"
  },
  {
    "url": "assets/js/38.efb7a9b7.js",
    "revision": "66be3e4540dad59dd74c5fbbf4db062d"
  },
  {
    "url": "assets/js/39.115b4a10.js",
    "revision": "d5f513c1bc67633da6d59be86f34dca7"
  },
  {
    "url": "assets/js/4.739116b7.js",
    "revision": "7836613e1c39b7e68aa951579f2dc2b3"
  },
  {
    "url": "assets/js/40.a02827a7.js",
    "revision": "483a103033a360b208b5b49dba14f5bc"
  },
  {
    "url": "assets/js/41.a780f58b.js",
    "revision": "c03a65c5cfffe04be1077bf51b7a9a1f"
  },
  {
    "url": "assets/js/42.5a38a2ee.js",
    "revision": "c3a05805c1059edb9aa24eae6ea4837d"
  },
  {
    "url": "assets/js/43.1bc1d741.js",
    "revision": "121eb09be81a9ca9b61a3ca7fb0d043c"
  },
  {
    "url": "assets/js/44.03833982.js",
    "revision": "a2e88b0605d342946529104bd36e52b9"
  },
  {
    "url": "assets/js/45.ed1bca24.js",
    "revision": "eaee71c3d5d7a12e9ba04084bf8a47c8"
  },
  {
    "url": "assets/js/46.76900f4e.js",
    "revision": "b9375a027eb4911931fab979783b0ffd"
  },
  {
    "url": "assets/js/47.8e88ad7d.js",
    "revision": "a0c3a2cac30d930eeefe113f2685cd4a"
  },
  {
    "url": "assets/js/48.97a49d59.js",
    "revision": "eb534e01e9d9605e6ec07f6db97df7ed"
  },
  {
    "url": "assets/js/49.f47b4111.js",
    "revision": "75ef43b88c3b9bb8de32763556b4c2ba"
  },
  {
    "url": "assets/js/5.b91d6342.js",
    "revision": "2f065303532e64abd68f00ed840b0eb5"
  },
  {
    "url": "assets/js/50.db3d0281.js",
    "revision": "c3054d14baeca0d250f3d12cf622e388"
  },
  {
    "url": "assets/js/51.9ac990b1.js",
    "revision": "3e694e337d013538ed4c5623f1678870"
  },
  {
    "url": "assets/js/52.c92e3f1b.js",
    "revision": "e3dda8cda811f211cff2f6c1dc744edb"
  },
  {
    "url": "assets/js/53.5d13ee49.js",
    "revision": "2ea0e1a46929205f8c86892daf2e295f"
  },
  {
    "url": "assets/js/54.f744ad45.js",
    "revision": "0eec65341525d9d229a5cdaf2eb7ae86"
  },
  {
    "url": "assets/js/55.382360e5.js",
    "revision": "86445af18ab62943a2b2b93f6f191c5f"
  },
  {
    "url": "assets/js/56.150cc318.js",
    "revision": "21903f2a90773747b74a5f01c377fd0c"
  },
  {
    "url": "assets/js/57.1cb7eda6.js",
    "revision": "a3a8021b917d6ef3a01f1324c491f61e"
  },
  {
    "url": "assets/js/58.52c8085f.js",
    "revision": "d17e84588c2d2654e5dc497298e9c998"
  },
  {
    "url": "assets/js/59.322242d4.js",
    "revision": "ab72890b68190c955fe66ca8dc92ec8d"
  },
  {
    "url": "assets/js/6.b612583b.js",
    "revision": "317987371e7414c5d5a62feca4dc8776"
  },
  {
    "url": "assets/js/60.9f0f8583.js",
    "revision": "523e446d1e6f975a2674622caf622d77"
  },
  {
    "url": "assets/js/61.d3078bfb.js",
    "revision": "a556b8f4509d6cef8e95cc53ada9ee6c"
  },
  {
    "url": "assets/js/62.c9e26a05.js",
    "revision": "4ca5a52884350523ac75dca541637303"
  },
  {
    "url": "assets/js/63.efefd937.js",
    "revision": "b17c2611864220b9590882c2310d6b15"
  },
  {
    "url": "assets/js/64.384984ca.js",
    "revision": "5af503eddaeaf1844f32e396ebe425fc"
  },
  {
    "url": "assets/js/65.a21f4c94.js",
    "revision": "cfb2955c181064a33a0e1504dbd849d3"
  },
  {
    "url": "assets/js/66.63a80c2d.js",
    "revision": "4e433a8d1be28e04be392a690a6413e6"
  },
  {
    "url": "assets/js/67.a07c869f.js",
    "revision": "96eca16a96981d2546c2d0995f2900ce"
  },
  {
    "url": "assets/js/68.ea91a99a.js",
    "revision": "0144b9c2c54c9eab5372b122aa5bc329"
  },
  {
    "url": "assets/js/69.add8070b.js",
    "revision": "e491856b9dd86f0ed257b28af329f46c"
  },
  {
    "url": "assets/js/7.4d4a21e6.js",
    "revision": "217c357797d71cd05bcde3849d7f79dd"
  },
  {
    "url": "assets/js/70.57c1fe79.js",
    "revision": "273e42a94bb22ed0798cee8947f187e1"
  },
  {
    "url": "assets/js/71.5127077a.js",
    "revision": "3023d6b1c7f5072f04f12bc0bd6c4331"
  },
  {
    "url": "assets/js/72.f01b38e1.js",
    "revision": "de4871fb278d8ab2e880f40621ddc689"
  },
  {
    "url": "assets/js/73.9dea56b3.js",
    "revision": "bea4bc21f0dfaff546d183eb9deda19c"
  },
  {
    "url": "assets/js/74.3e710be1.js",
    "revision": "daeb93c55f5f3f732ea4291f9a347aa6"
  },
  {
    "url": "assets/js/75.cc059efc.js",
    "revision": "6a05fe65c4e6c7f4309d04f54097c776"
  },
  {
    "url": "assets/js/76.d26c2768.js",
    "revision": "945354be62c88421f37216dbb27d3264"
  },
  {
    "url": "assets/js/77.219aa92e.js",
    "revision": "9cc4d772026a9ca2575c725303ac177b"
  },
  {
    "url": "assets/js/78.070af24b.js",
    "revision": "e644c1873d458ceaff4b1ed01dcd6226"
  },
  {
    "url": "assets/js/79.48e421a4.js",
    "revision": "5797c80d9fd99fd8c5a823ad2833c730"
  },
  {
    "url": "assets/js/8.d2e2d167.js",
    "revision": "fdf6a698d2de7095f32c0bb7f58c35cd"
  },
  {
    "url": "assets/js/80.84aa1b25.js",
    "revision": "9b80891f85fbf4fcf3be06d16ac3d9ee"
  },
  {
    "url": "assets/js/81.37910876.js",
    "revision": "209c0b140789e838320fe31119e05591"
  },
  {
    "url": "assets/js/82.dc48a069.js",
    "revision": "f7abe0965a1804923efd8f49ca08d08c"
  },
  {
    "url": "assets/js/83.cea935fa.js",
    "revision": "5960004e6732280d8ad1f0466bcaa112"
  },
  {
    "url": "assets/js/84.4cd6f6a0.js",
    "revision": "1d7b136d6f2bd22ad83470ea949249ab"
  },
  {
    "url": "assets/js/85.b4167837.js",
    "revision": "d86b5170427871cd6c8df11e3e73d8e0"
  },
  {
    "url": "assets/js/86.725e4149.js",
    "revision": "d7e0ddb3252da6ec623a17eb1260acce"
  },
  {
    "url": "assets/js/87.447ea938.js",
    "revision": "8ae6df3d5e252a596200ec5170f19756"
  },
  {
    "url": "assets/js/88.aaf18210.js",
    "revision": "5c9d3f17974d194d8624adf30cf8dfda"
  },
  {
    "url": "assets/js/9.951cfaef.js",
    "revision": "14b9a790bba90930151fc94e64b96bc2"
  },
  {
    "url": "assets/js/app.7b683843.js",
    "revision": "b00c7335a2098ad240746bd0a8e594ad"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "c961b4dbf554ac9c116713e8140deb07"
  },
  {
    "url": "cs/bash.html",
    "revision": "e2e6f7986ae851bed81833b042d3a90b"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "6c14cdc763827cfb5578ae1680b74aa6"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "115d61c367f686fa73f2e8ebfa0a2fb8"
  },
  {
    "url": "cs/cmake.html",
    "revision": "dcda958a81d5e1519b19a52300b1e035"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "c563a74078b0b3bb8d173b843290fa75"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "c6b9f72f9db90e494f296116843f948f"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "4f5342d9954adf31614caac4bfddd108"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "1999e640aac138a109173de7443202dc"
  },
  {
    "url": "cs/git.html",
    "revision": "87b4011d28653358793b24a04a2ae354"
  },
  {
    "url": "cs/index.html",
    "revision": "a83dc8497ae5527c0275cb84dd2673d7"
  },
  {
    "url": "cs/iptables.html",
    "revision": "9c8c03407872e30562237ea6eef37269"
  },
  {
    "url": "cs/keras.html",
    "revision": "74a4d4e3b77641150208c3c7169bdf50"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "0a02928960aea8c8229704090989d1e7"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "58a4a4b29236f89fbb04d4068d9af320"
  },
  {
    "url": "cs/lwip.html",
    "revision": "ef52442b280a7adac580c8e49e35fbe4"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "afe9b1cc840bbafd2b6d2d129a1cf70b"
  },
  {
    "url": "cs/python.html",
    "revision": "0080328b15d7d31f0cd3634d6e40d386"
  },
  {
    "url": "cs/risc-v.html",
    "revision": "8bc379f32f9cfb53c28d393d16dab390"
  },
  {
    "url": "cs/scala.html",
    "revision": "89874b8ce790e089ce225bc2984a470c"
  },
  {
    "url": "cs/think_in_code.html",
    "revision": "5d679f8ff9b1636a627c50fa17f7f7f9"
  },
  {
    "url": "cs/xtensa.html",
    "revision": "d4c158db02e1ba3e07b855ed8e29c7f1"
  },
  {
    "url": "ee/about.html",
    "revision": "e96ea8477210b0a945c24cf23a4e474e"
  },
  {
    "url": "ee/chisel.html",
    "revision": "594486e9d661ad1206485c6ec02ceac1"
  },
  {
    "url": "ee/esp32.html",
    "revision": "12970ffd16c5e14a2fe07d83d47328de"
  },
  {
    "url": "ee/index.html",
    "revision": "e17acc0fa26169a6fa0f5db42267f5a8"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "01221ad918345ab0cd57e520745a00ac"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "e4dd803c545449ace10c9dabc17c9117"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "3349d1b8b36598406493924979633686"
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
    "revision": "6dce922fef081f3d7f32ad52822965a2"
  },
  {
    "url": "others/about.html",
    "revision": "fd2553adeb56d8ffab3a1698098923f1"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "a0c411a3c267518997688ee3b33b77d4"
  },
  {
    "url": "others/android-studio.html",
    "revision": "9294aa68024bf1dacf37cde0a1fdc312"
  },
  {
    "url": "others/android.html",
    "revision": "c590807a67126e4acb262b276c1ecb6d"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "213428bd41b8bcc7e43cb426acb6be25"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "4cfa823a8902d55ad3a3bb05c9966bd3"
  },
  {
    "url": "others/css.html",
    "revision": "cca5015ddd5ea6aea269513a0e722d61"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "37eefdf35c067cd03d7f801a27bc0291"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "91ab11574391f7a265dc07fa057a8aa0"
  },
  {
    "url": "others/english-writting.html",
    "revision": "ea8db84f64caf7aa9bb21c285a85d625"
  },
  {
    "url": "others/freertos.html",
    "revision": "17b878d7c38f0a75c94fa6a1f862343d"
  },
  {
    "url": "others/gns3.html",
    "revision": "47ebca64f7dd207fca821e5ac2156ad0"
  },
  {
    "url": "others/gps.html",
    "revision": "1b9ac357715af58b1dbff8352b1f8162"
  },
  {
    "url": "others/html5.html",
    "revision": "f852d541fa60737786248326e97a85d8"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "af783599bf2ebdbd34b1a4090429ced9"
  },
  {
    "url": "others/index.html",
    "revision": "d4eba8e5e40687e359a01b24bfe83346"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "2fa981f756f3d0c4b5192e3d0f852369"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "c398eeae57cc2a1d7ea68d753bf4957e"
  },
  {
    "url": "others/javascript.html",
    "revision": "fb71b8a20ead52bb6dc0adbeecc9922e"
  },
  {
    "url": "others/json.html",
    "revision": "90716768f14ef916c34f3a76ed3ff59c"
  },
  {
    "url": "others/latex.html",
    "revision": "b718a5d0cab4dd6ececaeabb7963adb5"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "301b7aeade7af47f48420369fa76ff5d"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "d08505e883688d43152d7b12d8c67a44"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "4ac52becffde85c61f2fd094ad74310a"
  },
  {
    "url": "others/markdown.html",
    "revision": "c180b0e3f7b4c029212dd5368d203a03"
  },
  {
    "url": "others/matlab.html",
    "revision": "ee1374665f04868f59643cfa9588b23b"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "95052df84d1ac63de7f0f294221f69a4"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "b85c97e5105574df46706338924f8405"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "658220b6ee00e7c4a557e5f916cf8e35"
  },
  {
    "url": "others/network-security.html",
    "revision": "2c5b8236e757404314148644bd503781"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "a7fe09f724e78030c4b35fcd583dd308"
  },
  {
    "url": "others/oral_english.html",
    "revision": "34e59e87ef13ff2716551257cd5e6639"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "478007d581e3f33ec7fea51325ee9a22"
  },
  {
    "url": "others/poe.html",
    "revision": "b983e0d41335292cfbb1b40921708be3"
  },
  {
    "url": "others/pyside2.html",
    "revision": "5dccd972b44ac853c2cd9a987c6f651f"
  },
  {
    "url": "others/python-socket.html",
    "revision": "e149953c9c3735a00d7df7ba76c782a2"
  },
  {
    "url": "others/q-learning.html",
    "revision": "5830c37f0b8dcef6b23374135c0dd276"
  },
  {
    "url": "others/qr-code.html",
    "revision": "98119afe51f0586d4bc83fb7d13a1b3c"
  },
  {
    "url": "others/qt4.html",
    "revision": "6585b3da1a7b40048715cb40f2bbece4"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "c471aa93c7613aa1b3d4dc9564361596"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "2de85c5266ded8213d21330854bfcac3"
  },
  {
    "url": "others/sd-card.html",
    "revision": "443e959a3366ac35d092e0c0d6207845"
  },
  {
    "url": "others/sdn.html",
    "revision": "13a61fa0139a914657e5436428fd309e"
  },
  {
    "url": "others/star-uml.html",
    "revision": "1a764462b52be8624ed9fa81b100a2e8"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "abca4c6500b38005189314889a3bf576"
  },
  {
    "url": "others/verilog.html",
    "revision": "cc5938bc0bea77f754684ae8376e5016"
  },
  {
    "url": "others/vue.html",
    "revision": "19b97dc3b293eb74d2910b99578f5468"
  },
  {
    "url": "others/w5500.html",
    "revision": "3d9730855e71a0ed39a59bf7b763f41a"
  },
  {
    "url": "others/w7500.html",
    "revision": "8064e2d97179bfe637f04d2d8f2dc00d"
  },
  {
    "url": "resume.html",
    "revision": "383bc668c93867011d7fab5fda2ba5d2"
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
