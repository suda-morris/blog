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
    "revision": "2008e8e756c1653019e92cefc7d42621"
  },
  {
    "url": "assets/css/0.styles.5691af22.css",
    "revision": "db68d2d5322746d005ac3fac4707d842"
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
    "url": "assets/img/openscad_cheat_sheet.a66dbcd8.png",
    "revision": "a66dbcd8f8cb3a2f62e55f9db883fe4f"
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
    "url": "assets/img/regex_assertion.a1961b74.png",
    "revision": "a1961b74b0ace83e50bd17e6a513d981"
  },
  {
    "url": "assets/img/regex_case_insensitive_01.eeb074ed.png",
    "revision": "eeb074edfd6d052407130311aff8cae0"
  },
  {
    "url": "assets/img/regex_case_insensitive_02.b630d137.png",
    "revision": "b630d1374a88eb1591f223e86f11c37e"
  },
  {
    "url": "assets/img/regex_dot_all.59b4b56c.png",
    "revision": "59b4b56c3d5852b3412185dc3a3de052"
  },
  {
    "url": "assets/img/regex_escape.da9fb39c.png",
    "revision": "da9fb39cd29670dfd21de37b9acae42f"
  },
  {
    "url": "assets/img/regex_flavour.47bced97.png",
    "revision": "47bced97aaa52e799fda81de3771e6a6"
  },
  {
    "url": "assets/img/regex_greedy_example_result.b0c582cb.png",
    "revision": "b0c582cbf8ec081bc798296b5471804c"
  },
  {
    "url": "assets/img/regex_greedy_example.63e5c750.jpg",
    "revision": "63e5c750b66f6eb914c73befdba43f97"
  },
  {
    "url": "assets/img/regex_greedy_lazy_compare.40c03d7a.png",
    "revision": "40c03d7a2cb990b35e4801589eca1379"
  },
  {
    "url": "assets/img/regex_group.43e12b6a.png",
    "revision": "43e12b6a8df0738b6fb9aa2a8a042a57"
  },
  {
    "url": "assets/img/regex_ide_support.91329d89.jpg",
    "revision": "91329d890437420a2eed55eef713ad6b"
  },
  {
    "url": "assets/img/regex_lazy_example_result.10e40baa.png",
    "revision": "10e40baa1194b17dcc57a089524a37bc"
  },
  {
    "url": "assets/img/regex_linux_grep.a3bbeb6a.png",
    "revision": "a3bbeb6aa533cd06ea5d8f3b9e0b96b2"
  },
  {
    "url": "assets/img/regex_look_around.3cc80c66.png",
    "revision": "3cc80c66f73c3192e05a65b6b7abd181"
  },
  {
    "url": "assets/img/regex_match_mode.e53ccf35.png",
    "revision": "e53ccf35b39f9045db0c893351cf143a"
  },
  {
    "url": "assets/img/regex_meta_char.115b1f6c.png",
    "revision": "115b1f6c51598cd16ab9f496b8867071"
  },
  {
    "url": "assets/img/regex_modes.ee5d9a37.png",
    "revision": "ee5d9a3788090b4b526c26536409022f"
  },
  {
    "url": "assets/img/regex_multiline.e3bf8bd8.png",
    "revision": "e3bf8bd8f9d594472a940d4a7e4f2f19"
  },
  {
    "url": "assets/img/regex_posix_charset.c3202495.png",
    "revision": "c32024952cb6af3f78d9c08d9b5b3ada"
  },
  {
    "url": "assets/img/regex_posix_vs_pcre.ebfd6525.png",
    "revision": "ebfd65253886552f034c50da3674ce85"
  },
  {
    "url": "assets/img/regex_search_double_word.3951b939.png",
    "revision": "3951b939651d32402e9efe63a83e7de6"
  },
  {
    "url": "assets/img/regex_start_end.09cbdacb.png",
    "revision": "09cbdacb73c7c66423a878f452c87fb9"
  },
  {
    "url": "assets/img/regex_subgroup_index.083b6a8a.png",
    "revision": "083b6a8af68f56f3120b7c8875329340"
  },
  {
    "url": "assets/img/regex_subgroup.4b14f91e.png",
    "revision": "4b14f91e4307580bb482c58232c3f1fb"
  },
  {
    "url": "assets/img/regex_unicode_property.2ad1c343.jpg",
    "revision": "2ad1c343b4151d14e088a795c4ec77ae"
  },
  {
    "url": "assets/img/regex_unicode.c2e209e0.png",
    "revision": "c2e209e0fd5ecbf870c09d7a7244168d"
  },
  {
    "url": "assets/img/register_file.98edccb1.png",
    "revision": "98edccb1a727e294835d52225eb4d32f"
  },
  {
    "url": "assets/img/regular_expression_functioning.54a18454.png",
    "revision": "54a184548d369ca04ad4b69cd15dac1b"
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
    "url": "assets/img/USB_encoding.ef77eb86.png",
    "revision": "ef77eb86402676b8611fc1597aebe554"
  },
  {
    "url": "assets/img/USB_field_package_transaction_transfer.ab197813.png",
    "revision": "ab197813f446fd50ce335d2c67d355dc"
  },
  {
    "url": "assets/img/USB_signal_state.afb024aa.png",
    "revision": "afb024aa4e93c62f6001467972a3cdaa"
  },
  {
    "url": "assets/img/USB_slot_interface.fd582002.png",
    "revision": "fd582002f58f97d27e7a10e9194c65df"
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
    "url": "assets/js/10.039741cc.js",
    "revision": "c9e3f3ccef9b1c83511637712c1dc0d4"
  },
  {
    "url": "assets/js/11.f8803e93.js",
    "revision": "9d895b9f606709efdf6253047c4bde94"
  },
  {
    "url": "assets/js/12.f3170b6a.js",
    "revision": "0f32d8a4c84c0ea6e0f0ecd318e79bf6"
  },
  {
    "url": "assets/js/13.1e638f17.js",
    "revision": "047b444a41e91629f14da832a0503672"
  },
  {
    "url": "assets/js/14.19aa4979.js",
    "revision": "fab74d9803e43b2176557a353bf9b91d"
  },
  {
    "url": "assets/js/15.d7ffd921.js",
    "revision": "3ad8014a8f7047b98991ac8c6f0c9d7d"
  },
  {
    "url": "assets/js/16.4f13fa84.js",
    "revision": "29dbc2ab04afeee7b7beb42965b6dd7f"
  },
  {
    "url": "assets/js/17.2328c23c.js",
    "revision": "b5212b906b341bbb205f8cdfc91a82b1"
  },
  {
    "url": "assets/js/18.5375e3f8.js",
    "revision": "bbce2e1f7ec07b5597b5a933f785456a"
  },
  {
    "url": "assets/js/19.dcda4c0b.js",
    "revision": "be7ed476d1e71067cab8b9678ae633e8"
  },
  {
    "url": "assets/js/2.6448bdb8.js",
    "revision": "4e503d6e33ab6c2ca7e1ce9086052e4a"
  },
  {
    "url": "assets/js/20.38751727.js",
    "revision": "74c05d0ae4dad750be138deb835c105a"
  },
  {
    "url": "assets/js/21.236c666a.js",
    "revision": "cfde7b00b8cb0e005d6dca7b42366883"
  },
  {
    "url": "assets/js/22.a6b64ea5.js",
    "revision": "7de374cc35348020bdfb19fcf79afbe5"
  },
  {
    "url": "assets/js/23.464341ff.js",
    "revision": "41e236417e2f5d74e5fbe037365bb8c8"
  },
  {
    "url": "assets/js/24.fbb088a0.js",
    "revision": "3323922aaf0753fb2f4e495f7d4f34c3"
  },
  {
    "url": "assets/js/25.65b5e858.js",
    "revision": "3005f6ff7c7e4794ee06fb523ab3c7d5"
  },
  {
    "url": "assets/js/26.06ebcad1.js",
    "revision": "3c9dc2a2d1c6cda52c29d0c7049a4b62"
  },
  {
    "url": "assets/js/27.84588e13.js",
    "revision": "4dc661b5787a3423a6be8a1071348b18"
  },
  {
    "url": "assets/js/28.7cabd879.js",
    "revision": "6856355cf0b24e5787bf6fe6e4a79b6e"
  },
  {
    "url": "assets/js/29.420259c2.js",
    "revision": "5eb2c17ca9dabbec92cf6f2710f080ea"
  },
  {
    "url": "assets/js/3.6d6cb094.js",
    "revision": "1d5126d287ac192c6c6fe96a7b3502c3"
  },
  {
    "url": "assets/js/30.4c533b6c.js",
    "revision": "4d22f440a1cc35b85d9956a2316ea202"
  },
  {
    "url": "assets/js/31.ed65b6f5.js",
    "revision": "8499690eba4aebaaf0c42c28c4460861"
  },
  {
    "url": "assets/js/32.937a20f4.js",
    "revision": "b527eac4792daf93043130ef59b32dfe"
  },
  {
    "url": "assets/js/33.e74decc0.js",
    "revision": "de6b5d1f4ad93e3d647ed6b616d7dc64"
  },
  {
    "url": "assets/js/34.dcfdd505.js",
    "revision": "b2f717b869170812bb0a7170d69fd18e"
  },
  {
    "url": "assets/js/35.a6d13658.js",
    "revision": "191b9ea32bf4cab3a0d51dbfb08833c9"
  },
  {
    "url": "assets/js/36.94022c0c.js",
    "revision": "7356c6c9933d5ac501b06bd27805cd1f"
  },
  {
    "url": "assets/js/37.f22f0cb7.js",
    "revision": "539ccc77c3f0ebf3d0e7840bd2dcb2e9"
  },
  {
    "url": "assets/js/38.fd25af13.js",
    "revision": "3c799be5efef8e79e8d93e98afd57f24"
  },
  {
    "url": "assets/js/39.3cebdf34.js",
    "revision": "034a82fddad25f705ff13957e0a25e21"
  },
  {
    "url": "assets/js/4.7f350879.js",
    "revision": "a2c87c34f8156b3671675c2633ef89e9"
  },
  {
    "url": "assets/js/40.5a4d5c2b.js",
    "revision": "631dd5e3ddfeef01fbf8b42d2172238d"
  },
  {
    "url": "assets/js/41.d7b41aec.js",
    "revision": "757b4a8d3e2c74fe17fb2a3c84b7d7ac"
  },
  {
    "url": "assets/js/42.01060553.js",
    "revision": "712b4414707d1e96d1476f7d59443a93"
  },
  {
    "url": "assets/js/43.920f847e.js",
    "revision": "f4533438369151cc0c377ca3aca20f15"
  },
  {
    "url": "assets/js/44.373ab7e9.js",
    "revision": "666ea45df9c1e79c2568272a792b99c1"
  },
  {
    "url": "assets/js/45.08df0c45.js",
    "revision": "e3a8b1ee3bcc1a6b9b3fc15fa26ac84b"
  },
  {
    "url": "assets/js/46.36bfd7f3.js",
    "revision": "81dae697af77b060b23b2b0f9a004d77"
  },
  {
    "url": "assets/js/47.ffdcf236.js",
    "revision": "8eae15b0580fe3214e045581768e0f66"
  },
  {
    "url": "assets/js/48.c8e0dff7.js",
    "revision": "840964dc538f74873be5499ca7ceb554"
  },
  {
    "url": "assets/js/49.82cdaea0.js",
    "revision": "810ddfab40c26d6cdbda3c7942a5f14d"
  },
  {
    "url": "assets/js/5.6f6467ac.js",
    "revision": "999a24d83ed73d3d656da2d826c8d68a"
  },
  {
    "url": "assets/js/50.000f8976.js",
    "revision": "d79720e6aca872a38a6f00fcd4c61443"
  },
  {
    "url": "assets/js/51.19320f50.js",
    "revision": "eef10f1907d76b5055ca409b66edb050"
  },
  {
    "url": "assets/js/52.02d113fc.js",
    "revision": "de419129d40f4b82b9175783d6c373cd"
  },
  {
    "url": "assets/js/53.c3edcaed.js",
    "revision": "90c1ed989135e41c5592a6ccaa9a3a9e"
  },
  {
    "url": "assets/js/54.1d3562ee.js",
    "revision": "f5690f7bd8d2d2528ae307ebfa885be1"
  },
  {
    "url": "assets/js/55.45687792.js",
    "revision": "40aee3bf590f4dcd9af99704904fc47c"
  },
  {
    "url": "assets/js/56.4d87488b.js",
    "revision": "c12c6a85609656bf7a61d35d350d810e"
  },
  {
    "url": "assets/js/57.175c08df.js",
    "revision": "635c27c83453c787465fe934c8e9c98e"
  },
  {
    "url": "assets/js/58.27bc07b4.js",
    "revision": "da8cf1282be77924d647b03b3ad6b6c6"
  },
  {
    "url": "assets/js/59.d782aa9a.js",
    "revision": "bfe234e1cfca35d031a45d9dca36665d"
  },
  {
    "url": "assets/js/6.a402f953.js",
    "revision": "3b0279a3c3a10b2f23ea43bcf81cab4c"
  },
  {
    "url": "assets/js/60.8dc60df5.js",
    "revision": "f77eae99dd78ce5cdbb14c0938826f40"
  },
  {
    "url": "assets/js/61.bf5140d0.js",
    "revision": "9d7e7e0ad6cd071687900e0c56a984ad"
  },
  {
    "url": "assets/js/62.b43d624a.js",
    "revision": "488697c467a771e6510ecb4b6453e1a8"
  },
  {
    "url": "assets/js/63.edabcf52.js",
    "revision": "610c92567efcae375cffa20ae1cfa7d1"
  },
  {
    "url": "assets/js/64.4af0489f.js",
    "revision": "ed19165a9fc9b66d65ca059c97366b95"
  },
  {
    "url": "assets/js/65.be946e15.js",
    "revision": "c52148395c1d6bc0589f05c59ff48993"
  },
  {
    "url": "assets/js/66.4f19c068.js",
    "revision": "e57070b36d766c8e41c1052e7a7189c1"
  },
  {
    "url": "assets/js/67.fe90f0db.js",
    "revision": "b40d6fdb9a42a6d055cf5da38adc5616"
  },
  {
    "url": "assets/js/68.3c864f80.js",
    "revision": "54e8337161b56eec374a4d8db9369519"
  },
  {
    "url": "assets/js/69.3592f81e.js",
    "revision": "90074c353de0f0c2d5f3f5e5971ce9f9"
  },
  {
    "url": "assets/js/7.ccb5e6f4.js",
    "revision": "ba70a214ba71deacfa6db581be3acf2b"
  },
  {
    "url": "assets/js/70.66ce6d0d.js",
    "revision": "f67431583607bce9e6446ac34b527dec"
  },
  {
    "url": "assets/js/71.f5e21c78.js",
    "revision": "3ac784cc9a443e9f57102fd23d094eba"
  },
  {
    "url": "assets/js/72.800c90bd.js",
    "revision": "efc258cdb2a0726ec661f2a14665d7bc"
  },
  {
    "url": "assets/js/73.9fe7e4ee.js",
    "revision": "5278d2e3611c1d0754248932726139e9"
  },
  {
    "url": "assets/js/74.21a1a20f.js",
    "revision": "972ce575f3b4f21bffb607ea2f0d197a"
  },
  {
    "url": "assets/js/75.087f8aca.js",
    "revision": "a4eada3a881e3b74be49535d77d3fd6a"
  },
  {
    "url": "assets/js/76.8c9f8d65.js",
    "revision": "08c748d16700fb20ded11d088ae44bce"
  },
  {
    "url": "assets/js/77.dfd926b7.js",
    "revision": "b61ac41634a7c391b92ded5ecd28d368"
  },
  {
    "url": "assets/js/78.fc45f2a8.js",
    "revision": "e87b0af6eaa8bc8423e4e23e324a09ef"
  },
  {
    "url": "assets/js/79.e1e29d0a.js",
    "revision": "e0f3fa8f8293e40bcbe4df13f7c384fd"
  },
  {
    "url": "assets/js/8.b05ec433.js",
    "revision": "1602b1f3655fe7fa7903bce9b2c6ea10"
  },
  {
    "url": "assets/js/80.f6d761c0.js",
    "revision": "439d7e92e8a924c5816030c8d5b80bd1"
  },
  {
    "url": "assets/js/81.35437a97.js",
    "revision": "52656e83b6e034c84898efe7457b3d93"
  },
  {
    "url": "assets/js/82.7a30ada5.js",
    "revision": "bb044dc06bff0d23d7266939edd66469"
  },
  {
    "url": "assets/js/83.fb011237.js",
    "revision": "b1f5ae28c57b21c7a154797b1748d203"
  },
  {
    "url": "assets/js/84.f1fb481a.js",
    "revision": "16751b5fc9aaa021f1d0ae3f09554618"
  },
  {
    "url": "assets/js/85.967f00cb.js",
    "revision": "8bbbf74a30b3132b9d949902321f358f"
  },
  {
    "url": "assets/js/86.068bcc20.js",
    "revision": "7ae82d16ad4edce8370873f4c069f753"
  },
  {
    "url": "assets/js/87.b65d77f0.js",
    "revision": "073c488c4acdf1c3b86c9a575fb30ecf"
  },
  {
    "url": "assets/js/88.27d4be16.js",
    "revision": "8e4681bd9b4806fc8945170839a0c9a4"
  },
  {
    "url": "assets/js/89.ffa8f7b4.js",
    "revision": "5ba84c2385545b97747bc5450db740ad"
  },
  {
    "url": "assets/js/9.926548ab.js",
    "revision": "1cf1522b32967ea89e8a300d0b6fa3e8"
  },
  {
    "url": "assets/js/90.ba081c0c.js",
    "revision": "d197c755358f6296979500296fc20976"
  },
  {
    "url": "assets/js/app.5f75bd72.js",
    "revision": "e72f59acc8063589cc232c3794f172b8"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "1066b657239f09538d512617fd06452e"
  },
  {
    "url": "cs/bash.html",
    "revision": "28bd85c1c83ba9f795e3891ef0ccc4ae"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "700ed76f7e52b307fe023e2c99bc7728"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "82ccf38edc500683909c9ed57c3eab14"
  },
  {
    "url": "cs/cmake.html",
    "revision": "1bde9ff8957b5ff0a64f9bece9119f37"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "9eb3995c99b28f737583ac906df5f678"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "fda7e3b32cbbb3f44a458657c84f06fc"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "9615b70e9b96021a326f7618fc97871e"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "4e3d10c5c705ea44b8fb8f53cd33a827"
  },
  {
    "url": "cs/git.html",
    "revision": "89a0724bbbcae21967245838e0e2f00c"
  },
  {
    "url": "cs/index.html",
    "revision": "55601302ee47bedee8ad71672c387943"
  },
  {
    "url": "cs/iptables.html",
    "revision": "9afa983dc2fa826e23af571ea236ac75"
  },
  {
    "url": "cs/keras.html",
    "revision": "2cf432f479eacef9e7099868d57b3bf1"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "841be8dd3080c26240fbfecdaad82116"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "159b428b4f0f9c8ab9aa98e7f2da55e7"
  },
  {
    "url": "cs/lwip.html",
    "revision": "0ab2faeabfe55433a93fd53594b4c32e"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "be1c9a0078b6f87288c91d6351d82174"
  },
  {
    "url": "cs/python.html",
    "revision": "2dbfb886de1a906e587571c3eefdae3b"
  },
  {
    "url": "cs/regular_expression.html",
    "revision": "0bdf246531922c6eb5436dd28b5f296d"
  },
  {
    "url": "cs/risc-v.html",
    "revision": "0231c5bf313ef07f483889845618ecea"
  },
  {
    "url": "cs/scala.html",
    "revision": "1a6722d2fcc6f617ed37359530afd9dc"
  },
  {
    "url": "cs/think_in_code.html",
    "revision": "44bcc35c4113cf09b7e42ebb47587677"
  },
  {
    "url": "cs/xtensa.html",
    "revision": "ae27d660269a2ce3a57af4887c9975a8"
  },
  {
    "url": "ee/about.html",
    "revision": "4be5fc4a51821d4ae46dbf798b81d40f"
  },
  {
    "url": "ee/chisel.html",
    "revision": "555386b1a01d8defa379d79f3d42f6c9"
  },
  {
    "url": "ee/esp32.html",
    "revision": "70d19c4d65bba86cbf5bef76705401bc"
  },
  {
    "url": "ee/index.html",
    "revision": "f0ec26e93524b019b3f469da9de89ae1"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "e409431111b5d07a223f1817071ee07b"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "c63db2a8ad19facdda4bb25621ffc5a5"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "93455c788cc95f5144b44d4d41572a2f"
  },
  {
    "url": "ee/usb.html",
    "revision": "d4912d2c41b59d5a4878c350ec094cc9"
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
    "url": "images/cs/cheat_sheet/openscad_cheat_sheet.png",
    "revision": "a66dbcd8f8cb3a2f62e55f9db883fe4f"
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
    "url": "images/cs/regex/regex_assertion.png",
    "revision": "a1961b74b0ace83e50bd17e6a513d981"
  },
  {
    "url": "images/cs/regex/regex_case_insensitive_01.png",
    "revision": "eeb074edfd6d052407130311aff8cae0"
  },
  {
    "url": "images/cs/regex/regex_case_insensitive_02.png",
    "revision": "b630d1374a88eb1591f223e86f11c37e"
  },
  {
    "url": "images/cs/regex/regex_dot_all.png",
    "revision": "59b4b56c3d5852b3412185dc3a3de052"
  },
  {
    "url": "images/cs/regex/regex_escape.png",
    "revision": "da9fb39cd29670dfd21de37b9acae42f"
  },
  {
    "url": "images/cs/regex/regex_flavour.png",
    "revision": "47bced97aaa52e799fda81de3771e6a6"
  },
  {
    "url": "images/cs/regex/regex_greedy_example_result.png",
    "revision": "b0c582cbf8ec081bc798296b5471804c"
  },
  {
    "url": "images/cs/regex/regex_greedy_example.jpg",
    "revision": "63e5c750b66f6eb914c73befdba43f97"
  },
  {
    "url": "images/cs/regex/regex_greedy_lazy_compare.png",
    "revision": "40c03d7a2cb990b35e4801589eca1379"
  },
  {
    "url": "images/cs/regex/regex_group.png",
    "revision": "43e12b6a8df0738b6fb9aa2a8a042a57"
  },
  {
    "url": "images/cs/regex/regex_ide_support.jpg",
    "revision": "91329d890437420a2eed55eef713ad6b"
  },
  {
    "url": "images/cs/regex/regex_lazy_example_result.png",
    "revision": "10e40baa1194b17dcc57a089524a37bc"
  },
  {
    "url": "images/cs/regex/regex_linux_grep.png",
    "revision": "a3bbeb6aa533cd06ea5d8f3b9e0b96b2"
  },
  {
    "url": "images/cs/regex/regex_look_around.png",
    "revision": "3cc80c66f73c3192e05a65b6b7abd181"
  },
  {
    "url": "images/cs/regex/regex_match_mode.png",
    "revision": "e53ccf35b39f9045db0c893351cf143a"
  },
  {
    "url": "images/cs/regex/regex_meta_char.png",
    "revision": "115b1f6c51598cd16ab9f496b8867071"
  },
  {
    "url": "images/cs/regex/regex_modes.png",
    "revision": "ee5d9a3788090b4b526c26536409022f"
  },
  {
    "url": "images/cs/regex/regex_multiline.png",
    "revision": "e3bf8bd8f9d594472a940d4a7e4f2f19"
  },
  {
    "url": "images/cs/regex/regex_posix_charset.png",
    "revision": "c32024952cb6af3f78d9c08d9b5b3ada"
  },
  {
    "url": "images/cs/regex/regex_posix_vs_pcre.png",
    "revision": "ebfd65253886552f034c50da3674ce85"
  },
  {
    "url": "images/cs/regex/regex_search_double_word.png",
    "revision": "3951b939651d32402e9efe63a83e7de6"
  },
  {
    "url": "images/cs/regex/regex_start_end.png",
    "revision": "09cbdacb73c7c66423a878f452c87fb9"
  },
  {
    "url": "images/cs/regex/regex_subgroup_index.png",
    "revision": "083b6a8af68f56f3120b7c8875329340"
  },
  {
    "url": "images/cs/regex/regex_subgroup.png",
    "revision": "4b14f91e4307580bb482c58232c3f1fb"
  },
  {
    "url": "images/cs/regex/regex_unicode_property.jpg",
    "revision": "2ad1c343b4151d14e088a795c4ec77ae"
  },
  {
    "url": "images/cs/regex/regex_unicode.png",
    "revision": "c2e209e0fd5ecbf870c09d7a7244168d"
  },
  {
    "url": "images/cs/regex/regular_expression_functioning.png",
    "revision": "54a184548d369ca04ad4b69cd15dac1b"
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
    "url": "images/ee/usb/USB_encoding.png",
    "revision": "ef77eb86402676b8611fc1597aebe554"
  },
  {
    "url": "images/ee/usb/USB_field_package_transaction_transfer.png",
    "revision": "ab197813f446fd50ce335d2c67d355dc"
  },
  {
    "url": "images/ee/usb/USB_signal_state.png",
    "revision": "afb024aa4e93c62f6001467972a3cdaa"
  },
  {
    "url": "images/ee/usb/USB_slot_interface.png",
    "revision": "fd582002f58f97d27e7a10e9194c65df"
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
    "revision": "0341e82eab1dea9875fe94c4733aca83"
  },
  {
    "url": "others/about.html",
    "revision": "b0b7669f185931760b21e98d493803af"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "e0e3f0318f6971b1532f3535d0212d8e"
  },
  {
    "url": "others/android-studio.html",
    "revision": "7f12887c19dbbd0c33645f4b662a538a"
  },
  {
    "url": "others/android.html",
    "revision": "7a0c4faec9f62378a149c1e852cd68fe"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "dba05e63220c8e220c2d6b3424f82595"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "677906e4bd9e8e494e9650ce68491e0f"
  },
  {
    "url": "others/css.html",
    "revision": "03c109402dde94cb9afaa5a81ed09ffe"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "ae47fa68e9033df72ae5dd0ef982b6c0"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "61663062a230262754c4c84a80ceac9d"
  },
  {
    "url": "others/english-writting.html",
    "revision": "b6cc84b46207f2276b303bd2124c77b8"
  },
  {
    "url": "others/freertos.html",
    "revision": "9b0750d8ed765b009aa09cc2c1582a8f"
  },
  {
    "url": "others/gns3.html",
    "revision": "728e091597645bb832561802a7b17a92"
  },
  {
    "url": "others/gps.html",
    "revision": "a979fbe30a5df2b9848cfd2c6b156151"
  },
  {
    "url": "others/html5.html",
    "revision": "b3a5ea9c26c926eaee4e1394770eaa9f"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "805ba8739a609005faae4d65ab72b3ae"
  },
  {
    "url": "others/index.html",
    "revision": "71942be3a397c039b60e986cd3c58a25"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "f25e83584354b5ae2e9908104a1f00d8"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "9d011e4f01587d2437b430b4da8e5e7a"
  },
  {
    "url": "others/javascript.html",
    "revision": "eb6fee7a1255e9173b13a52306c23a64"
  },
  {
    "url": "others/json.html",
    "revision": "01a72133d226569af7839a389a8cb487"
  },
  {
    "url": "others/latex.html",
    "revision": "1b684b837754a0d1ed5039fc47b62af2"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "3d8a59ed3d8ee5981e573744e5dc1662"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "09e8dc063dc72cf81f0530cc890f5b56"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "10fb1ce32a4ae7bbce148a873e70e3fe"
  },
  {
    "url": "others/markdown.html",
    "revision": "bf37093fa9b12747e47110b33353c20a"
  },
  {
    "url": "others/matlab.html",
    "revision": "801c3f47b2c9d0a788385d1dfff972f7"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "41bfd83a74b496ccb3bbff0c4e8c0cdb"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "c50dc981ae3f55e05415b21cf6635d35"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "73ba8dbdee13bcda79ca867f73f792f1"
  },
  {
    "url": "others/network-security.html",
    "revision": "33a98753ce0b8d171346d42d29a34d55"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "d1093b40eecb30d26047806800812e76"
  },
  {
    "url": "others/oral_english.html",
    "revision": "51f4b96aac0172443ed9696156d42164"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "2803af4dbf10325be49e491bdcfa5657"
  },
  {
    "url": "others/poe.html",
    "revision": "6a50ce4c8033e008e17ab6ea5e3d6c27"
  },
  {
    "url": "others/pyside2.html",
    "revision": "88bb12c778549c3385c72487cc93c0d9"
  },
  {
    "url": "others/python-socket.html",
    "revision": "19ac0bfbacc54601f7ea673ee03f8a4e"
  },
  {
    "url": "others/q-learning.html",
    "revision": "9b1729cf736cbd6b61bdc170d3b82e0f"
  },
  {
    "url": "others/qr-code.html",
    "revision": "da250c690f8f93451e0d820d2a90fae2"
  },
  {
    "url": "others/qt4.html",
    "revision": "1bf46a1a0668da8e3ad489f7c2954c90"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "7df3418bd63cd21d6684d7def0529077"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "29a652c5ca1c35e240933259f005fed4"
  },
  {
    "url": "others/sd-card.html",
    "revision": "6b237f0d2985999d3a41d9aa8e07c3c1"
  },
  {
    "url": "others/sdn.html",
    "revision": "831b7be6d535acca834aa79baa91de20"
  },
  {
    "url": "others/star-uml.html",
    "revision": "d4cf8dd5db78f2488ecd1f2613af58a1"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "4e4d5617ebe3c7b402a1a61ad461d44a"
  },
  {
    "url": "others/verilog.html",
    "revision": "bb99808d35fc5ed5c7a2b8b19550202a"
  },
  {
    "url": "others/vue.html",
    "revision": "eb4182559cbd760926558f9ae61ab8f7"
  },
  {
    "url": "others/w5500.html",
    "revision": "343bff837b4fb9d8bbb42a80a8142993"
  },
  {
    "url": "others/w7500.html",
    "revision": "00ae01ecf4b75a2c5cdc73fa4a391103"
  },
  {
    "url": "resume.html",
    "revision": "4cb8836c077556691aebd55238698331"
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
