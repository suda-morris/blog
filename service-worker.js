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
    "revision": "a93d115d8c11059347f7a6ae8275a2c1"
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
    "url": "assets/js/10.5351e390.js",
    "revision": "18c6c47618de73a7256dee7c3a20c8db"
  },
  {
    "url": "assets/js/11.11c2f9b3.js",
    "revision": "28c096a22b46cd21dae6a1579939a562"
  },
  {
    "url": "assets/js/12.d2b9fb72.js",
    "revision": "e8bff66276563956e7a652bb29afa44b"
  },
  {
    "url": "assets/js/13.03c34847.js",
    "revision": "6382ab4453a644156f158ad0513dd416"
  },
  {
    "url": "assets/js/14.172e9933.js",
    "revision": "63879cdc06f46f902599e7f0326ff6e8"
  },
  {
    "url": "assets/js/15.4ac94291.js",
    "revision": "7aac5b20577494c01828643726215e3c"
  },
  {
    "url": "assets/js/16.11a5c975.js",
    "revision": "9f3e0f401f33110fb0462049ca2ec8a4"
  },
  {
    "url": "assets/js/17.1d75c0ee.js",
    "revision": "c1732453e1fa57979c69239e9d182ab8"
  },
  {
    "url": "assets/js/18.80b98299.js",
    "revision": "a6fc2556a4968812bd21e779079efaf1"
  },
  {
    "url": "assets/js/19.b4b47a4e.js",
    "revision": "64a9b29f3259a5d9e22823ad877bf276"
  },
  {
    "url": "assets/js/2.0a96373b.js",
    "revision": "1caf86c35ed549cd5f2692456be8551b"
  },
  {
    "url": "assets/js/20.dab038cf.js",
    "revision": "38d1ba233f1019cbc83abb9c47f951f1"
  },
  {
    "url": "assets/js/21.22f043ae.js",
    "revision": "351320ae9fb2a49469848f741d1b217c"
  },
  {
    "url": "assets/js/22.c9dc1649.js",
    "revision": "44903c452b1f71663f951bd126e61e69"
  },
  {
    "url": "assets/js/23.52901182.js",
    "revision": "4b3f0c3bb7f5112ae16d56f2d9943026"
  },
  {
    "url": "assets/js/24.53558e2a.js",
    "revision": "797bf350c2ea3b66bc640dd1dafd2607"
  },
  {
    "url": "assets/js/25.5a7b61c6.js",
    "revision": "45e3d0d97e3f3e1d27aa62426f6603ff"
  },
  {
    "url": "assets/js/26.a9ad32d4.js",
    "revision": "0894d34fbaa9b44adf3e89b050d13187"
  },
  {
    "url": "assets/js/27.7575c196.js",
    "revision": "c4d410002943d32e34790066ec245fd0"
  },
  {
    "url": "assets/js/28.8fcf81a9.js",
    "revision": "8a632ce866e2e5ff4080fdc083361fb9"
  },
  {
    "url": "assets/js/29.f709aafa.js",
    "revision": "6e5b828e242ef33ba0d096d8239bca13"
  },
  {
    "url": "assets/js/3.c63a9d89.js",
    "revision": "4a66bad77c0938e38d121878bf57ded2"
  },
  {
    "url": "assets/js/30.979a34b8.js",
    "revision": "f465a53003295635bfacd6db1031e72f"
  },
  {
    "url": "assets/js/31.8923a3fc.js",
    "revision": "0fc85dc814e716914c17c6c58d1a9351"
  },
  {
    "url": "assets/js/32.43224a40.js",
    "revision": "2c4f692a45029b7894d386f347e88511"
  },
  {
    "url": "assets/js/33.224ac9ab.js",
    "revision": "204d1c2ae71a5f0c6ee5f11827ea9798"
  },
  {
    "url": "assets/js/34.41e83a8c.js",
    "revision": "711cd7de080c6b54eeb52988c1845f97"
  },
  {
    "url": "assets/js/35.fdb6c4d9.js",
    "revision": "b077e2792f5b6f3725f195468386e258"
  },
  {
    "url": "assets/js/36.b128808a.js",
    "revision": "fcb2fb59064365607570a32a053af0a7"
  },
  {
    "url": "assets/js/37.0ece2737.js",
    "revision": "1a66eba339f2c46b37c1e9076aeeffc1"
  },
  {
    "url": "assets/js/38.7fa5043d.js",
    "revision": "87befb57fff7ec5426592b6fe7db0d3c"
  },
  {
    "url": "assets/js/39.202913d0.js",
    "revision": "f1179cda3e373bd18c8cd16e6ad1d38c"
  },
  {
    "url": "assets/js/4.39b335ec.js",
    "revision": "5aa7d7a13e293a0dc5ab4bfaa67457df"
  },
  {
    "url": "assets/js/40.3a08fbb7.js",
    "revision": "65246aac1793f21ddf941582a6077dde"
  },
  {
    "url": "assets/js/41.5e73cb53.js",
    "revision": "d2a0bf9b8b816a6e166acc2afd64bc61"
  },
  {
    "url": "assets/js/42.df693d1f.js",
    "revision": "a7642a2d35afd6908f4b8a38fa2ac837"
  },
  {
    "url": "assets/js/43.415ae2e4.js",
    "revision": "f936f0e946512057a7d944d52a677d26"
  },
  {
    "url": "assets/js/44.271378c8.js",
    "revision": "46fc42286d2e8cbc2b5988889deae47d"
  },
  {
    "url": "assets/js/45.3b151baf.js",
    "revision": "1dfd084b6f8ee3af399fc1feaf64ce8f"
  },
  {
    "url": "assets/js/46.774cc3f1.js",
    "revision": "024f61d81b24af823e0d9f45b7be24d2"
  },
  {
    "url": "assets/js/47.ee120a7b.js",
    "revision": "70a41b4396a75d588b0af2515a3e19b7"
  },
  {
    "url": "assets/js/48.b6a4395a.js",
    "revision": "ed91e843fafa77301bfe881154f6c3f9"
  },
  {
    "url": "assets/js/49.b797c083.js",
    "revision": "a7c02c13cd954056c7fc44dd8687ad1c"
  },
  {
    "url": "assets/js/5.424c5400.js",
    "revision": "808b109c58d98ec53f4a36949f97819c"
  },
  {
    "url": "assets/js/50.4c5d2a68.js",
    "revision": "5e854f89df5c676f607b4de3cddcb0a9"
  },
  {
    "url": "assets/js/51.9f793d8f.js",
    "revision": "8e3585fed1d64f66ab49537197331525"
  },
  {
    "url": "assets/js/52.7a3ad6c1.js",
    "revision": "4da961e25310cf85a15ccf5ae8232341"
  },
  {
    "url": "assets/js/53.72fefc2a.js",
    "revision": "d75ec8a5d1a82293b52c33998571b48c"
  },
  {
    "url": "assets/js/54.8a0b2563.js",
    "revision": "3ba78b369df7436082b3e07efa4df3ca"
  },
  {
    "url": "assets/js/55.a4dd40f3.js",
    "revision": "4c50d636b00bf5025b089b9cae87ef0d"
  },
  {
    "url": "assets/js/56.39d1ff35.js",
    "revision": "d3554c3287fbe939c08ec87fca086908"
  },
  {
    "url": "assets/js/57.4c3f0867.js",
    "revision": "1f59153dfd0f68f5ce077d083a2f3254"
  },
  {
    "url": "assets/js/58.4b32c26c.js",
    "revision": "91ad73294e00cface17d81d93b95db79"
  },
  {
    "url": "assets/js/59.f330bbc6.js",
    "revision": "e91af9ad6ff4cda6e7b239f2203a9f21"
  },
  {
    "url": "assets/js/6.f2720c6b.js",
    "revision": "541754fac28cbd53fe42a006098a753e"
  },
  {
    "url": "assets/js/60.dd5a048a.js",
    "revision": "ba160d8be46e4f44b3fef21210cee512"
  },
  {
    "url": "assets/js/61.f12592fb.js",
    "revision": "dca7e653b913b522bc1edb133db1cde9"
  },
  {
    "url": "assets/js/62.d376e3fa.js",
    "revision": "08a99c60d3c92316e173d5f041fc1aac"
  },
  {
    "url": "assets/js/63.e230eb07.js",
    "revision": "736b0a247cee36bd6eded7678f27e456"
  },
  {
    "url": "assets/js/64.047a6451.js",
    "revision": "87d0c825236270d7a2eeaa93acd673c7"
  },
  {
    "url": "assets/js/65.3d549f32.js",
    "revision": "92328e7c1189ea1fa6ff2ff68592aa21"
  },
  {
    "url": "assets/js/66.b659ed06.js",
    "revision": "150197485d9796f5bad92027d150cee6"
  },
  {
    "url": "assets/js/67.080b3ab9.js",
    "revision": "851f3b8700059b2136af76742e6b1b6a"
  },
  {
    "url": "assets/js/68.509d138a.js",
    "revision": "f1cdd1b015e9c71c36796941a595a998"
  },
  {
    "url": "assets/js/69.76579d19.js",
    "revision": "d2810765059edd89443e047e7b476025"
  },
  {
    "url": "assets/js/7.d64976ff.js",
    "revision": "7cfefc8dc1189c95f148ba2e82dd087f"
  },
  {
    "url": "assets/js/70.53b10945.js",
    "revision": "46605c92e924e834c083a7ebd3b35d92"
  },
  {
    "url": "assets/js/71.c91febc7.js",
    "revision": "12ebee10292bc5685db173ef90c7ac55"
  },
  {
    "url": "assets/js/72.7567e0f7.js",
    "revision": "9332797bc2e7e7a65d4a7da999f40068"
  },
  {
    "url": "assets/js/73.842046d7.js",
    "revision": "b63d4458bd5e1a5dfc698714d30068c8"
  },
  {
    "url": "assets/js/74.569ffb47.js",
    "revision": "217c163139a318b800cf5be431c58b91"
  },
  {
    "url": "assets/js/75.adafc080.js",
    "revision": "d08f0291e1009599902e423684cd8919"
  },
  {
    "url": "assets/js/76.94cd23ca.js",
    "revision": "9262ceca02a8f395bb515a0cbe795e17"
  },
  {
    "url": "assets/js/77.728c7738.js",
    "revision": "83b642471de48d86c61172f9a54b939c"
  },
  {
    "url": "assets/js/78.fe2de3fa.js",
    "revision": "272da1aeea22a5883ad46441a704ef34"
  },
  {
    "url": "assets/js/79.2968f182.js",
    "revision": "ff86d9340b31b74d8186e6383373c8a8"
  },
  {
    "url": "assets/js/8.c60b0d5e.js",
    "revision": "9b6b106fbbf5692dac818346125a6963"
  },
  {
    "url": "assets/js/80.21f908fc.js",
    "revision": "5a3fb40dc99b018423e30b53e3854543"
  },
  {
    "url": "assets/js/81.402ea616.js",
    "revision": "5298e76e5174b53958058729c24891b7"
  },
  {
    "url": "assets/js/82.e7591714.js",
    "revision": "677e948e49e4414e4a96e1e48d519130"
  },
  {
    "url": "assets/js/83.fdcbccce.js",
    "revision": "c3bcd8f35326ca0001f2154d062a524e"
  },
  {
    "url": "assets/js/84.41be0e47.js",
    "revision": "6aa235e1030e4be704faa78c80f55c95"
  },
  {
    "url": "assets/js/85.584bdd5b.js",
    "revision": "68822db76310e5c8ea950de54edc1b13"
  },
  {
    "url": "assets/js/86.0208296d.js",
    "revision": "3a9d3fb57bbc6ffb11260df23b2ef509"
  },
  {
    "url": "assets/js/87.983a4661.js",
    "revision": "15f6e6751008a2a06a6feae956f27158"
  },
  {
    "url": "assets/js/88.3878e53c.js",
    "revision": "2343f238d2ca27e52bb2873b61740127"
  },
  {
    "url": "assets/js/89.b2566fe9.js",
    "revision": "f43f428fd535764e6588f27c8135696a"
  },
  {
    "url": "assets/js/9.cc8a36a8.js",
    "revision": "ed6ce931055727db77e0748addf8eef8"
  },
  {
    "url": "assets/js/90.e811e8d4.js",
    "revision": "8c4436a400fe14cb823ea8a07e188be2"
  },
  {
    "url": "assets/js/app.c58bb5ff.js",
    "revision": "97cb04ce23f390b3afced579648e16a6"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "83f8cbba5caf97c951e6091e980ecf1c"
  },
  {
    "url": "cs/bash.html",
    "revision": "27e4a3d64fa289a76ac2588155850ca2"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "dbe4e81ed3654a2654da9585d84ff049"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "3251bb9222ac68a5abe79782fff473f8"
  },
  {
    "url": "cs/cmake.html",
    "revision": "3598070905bc08d97eb9cfe96091b77d"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "c1d5ae6c63d9df60f94f9804573a3c94"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "28ec65a9b1ab40cb0035e90a09400f9d"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "9c60463dece3ccbcd7ddb1f7da887e5f"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "f5b751da31a7a1a3870c42f0aced25ea"
  },
  {
    "url": "cs/git.html",
    "revision": "6e066c7a57858459e61b49bc94eb4ad2"
  },
  {
    "url": "cs/index.html",
    "revision": "f69597f9c737037c0d39884f8811700f"
  },
  {
    "url": "cs/iptables.html",
    "revision": "4d9be20d13a5862062ca3af8311b1147"
  },
  {
    "url": "cs/keras.html",
    "revision": "ef95ff6dea15426a36ccfe49d988a6e1"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "07c6cf3dac2113fdcee9935ba16bd55d"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "56829a9d6502c11641bf86908b68550f"
  },
  {
    "url": "cs/lwip.html",
    "revision": "75c99a3b706763b5580a31d80cd49f35"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "3a2a69e8f8111d4de188e0f3f58d1688"
  },
  {
    "url": "cs/python.html",
    "revision": "42532c53d713314b03d1dcbc799d293d"
  },
  {
    "url": "cs/regular_expression.html",
    "revision": "73327fa9a458bfb67e18b796dc550a88"
  },
  {
    "url": "cs/risc-v.html",
    "revision": "4c593d92a3ad20551ef572e6f1bab9a4"
  },
  {
    "url": "cs/scala.html",
    "revision": "c3ded177da7d3b300fec51a0e64bc3c7"
  },
  {
    "url": "cs/think_in_code.html",
    "revision": "1ed0803b9bc1bcca1ab20d1fb833660d"
  },
  {
    "url": "cs/xtensa.html",
    "revision": "6cff8aa919370e9e99724775a07cbf9f"
  },
  {
    "url": "ee/about.html",
    "revision": "a891bc90761a7c5178da600e0946ff4e"
  },
  {
    "url": "ee/chisel.html",
    "revision": "67d69b31be22f4dae6d942f2be4ff8ac"
  },
  {
    "url": "ee/esp32.html",
    "revision": "bf6e048ab890a0c2fd3114eaf0d8e9e5"
  },
  {
    "url": "ee/index.html",
    "revision": "c6787a8ce7f45f2294fadf9f77faf664"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "248aae5e7370c9f36fd2c74da30570cc"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "50be078cae37de927baab9c22322bc6c"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "a1d82c3baa39e5925991a4c9f2929eae"
  },
  {
    "url": "ee/usb.html",
    "revision": "80a2ca28587b6f59ce0a05b81bef32de"
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
    "revision": "045a51e8f3e686e1e8d67454748db3f6"
  },
  {
    "url": "others/about.html",
    "revision": "12741630b1f49454637be41d0c00950c"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "a456acd32bebd13e197c1dd4fd39edf1"
  },
  {
    "url": "others/android-studio.html",
    "revision": "f66bb38e98ccfdc9eb812dc0d1f07979"
  },
  {
    "url": "others/android.html",
    "revision": "2e6216e7f4d529b6dc56c8ab8aa75b8a"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "64b5ebd40aa7850f6d4af232a9a9d976"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "55d6a27898d3cc87ad9f1856a8fe92b9"
  },
  {
    "url": "others/css.html",
    "revision": "e0e103719f99816bc170bd3277eea599"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "d062a6fd93c9a10df7d960b640740581"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "9c887a17c789bc2f866a3d60b655cf1d"
  },
  {
    "url": "others/english-writting.html",
    "revision": "dd2dec04d86f2b3ac7539c15a8727237"
  },
  {
    "url": "others/freertos.html",
    "revision": "24714ea038f106b9be44300342920242"
  },
  {
    "url": "others/gns3.html",
    "revision": "82882becc09c89606ebfb512d464811b"
  },
  {
    "url": "others/gps.html",
    "revision": "de3f3ec46c3879b92df1ff58c87f9d29"
  },
  {
    "url": "others/html5.html",
    "revision": "1b6e9c78af0720771c9ed2c19f70491a"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "9b32e42e3836af5df717a156aed6fbd1"
  },
  {
    "url": "others/index.html",
    "revision": "3f2f607b623fae194cfe57f2eb9aa905"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "3922329e8f95d370d61f3b6a8613a4d3"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "22814b76224600a6353231e8ac74794a"
  },
  {
    "url": "others/javascript.html",
    "revision": "7eb860ca06eb0cc1196d2b58650dd9ef"
  },
  {
    "url": "others/json.html",
    "revision": "fe39112fb9ab3eac01855f63e176ba94"
  },
  {
    "url": "others/latex.html",
    "revision": "6c8a3eb534e108946478f8c3e91720c2"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "3f7b82c5f0ee957fe8375633f0583a10"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "96cf54fde91837b49e7fc92aa801013f"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "8f1497b80a998af7946495efb260fdc4"
  },
  {
    "url": "others/markdown.html",
    "revision": "912989840e5662ffb17040523a9f5270"
  },
  {
    "url": "others/matlab.html",
    "revision": "78b1f36364b6038aad6a926c1fcbf285"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "34ef2e366a1a9d368f45b4e85f1b52c9"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "8d82ca624f227c20c7d0e6bcab47ad48"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "84bac426a4f113552c1d6d9844afe79a"
  },
  {
    "url": "others/network-security.html",
    "revision": "d797d84761cb95048beb8ed38124ce80"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "fac4d6ebc6453d105c91fe1e852208f0"
  },
  {
    "url": "others/oral_english.html",
    "revision": "7ddff1dc4bc7a48d1e3fba4a40e18aa2"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "2dc3f2290eb469b1e921cc4f8fa5d215"
  },
  {
    "url": "others/poe.html",
    "revision": "6de75a2ae4b3d59c517743add6cb2f4a"
  },
  {
    "url": "others/pyside2.html",
    "revision": "f399bf85a2b120e3fc703176809be28b"
  },
  {
    "url": "others/python-socket.html",
    "revision": "37197e7cacd2546155e02af74b30d9da"
  },
  {
    "url": "others/q-learning.html",
    "revision": "d231234bd1e179f0d224488a4ba6b68d"
  },
  {
    "url": "others/qr-code.html",
    "revision": "7279f034f6a473cb3702018e583af09d"
  },
  {
    "url": "others/qt4.html",
    "revision": "9f36acbc9b5b955b0aa5861e36ba8169"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "c7e72d4026483d90a5cef4f28a2f373a"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "cb76612f8d51d04a0c0a78874fc53597"
  },
  {
    "url": "others/sd-card.html",
    "revision": "b7ad53df38c7658fd297b273704d5aa8"
  },
  {
    "url": "others/sdn.html",
    "revision": "513e078d3fd69c7bd01c28e5efeaed63"
  },
  {
    "url": "others/star-uml.html",
    "revision": "d87ad573e065299109710026a5b436fa"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "b3a3fc935a470e990bd6b528d1303f96"
  },
  {
    "url": "others/verilog.html",
    "revision": "29d51bdf06de2795b7b37e3f4a6f0d2b"
  },
  {
    "url": "others/vue.html",
    "revision": "2d4ab3b1d3f9cc1aeecf92e2c57c91a5"
  },
  {
    "url": "others/w5500.html",
    "revision": "0b417840ceedc6cdea54ee9ce9826c27"
  },
  {
    "url": "others/w7500.html",
    "revision": "320c5d71103fc1a135f54da99871703b"
  },
  {
    "url": "resume.html",
    "revision": "e80333fc9cab8dbf2dd20c6662aa0b49"
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
