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
    "revision": "934d9231431fdc81af88396a9bcc3526"
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
    "url": "assets/img/hall_sensor_6steps_clockwise.fb10333c.png",
    "revision": "fb10333c34851f4732760ad2e089b1ed"
  },
  {
    "url": "assets/img/hall_sensor_6steps_counter_clockwise.8c628e70.png",
    "revision": "8c628e70f3eb144734fc704a814250ac"
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
    "url": "assets/img/memory_map.325342cd.svg",
    "revision": "325342cdee752fdd0b44a7e8075dacac"
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
    "url": "assets/img/rust_compile_process.f98a877e.png",
    "revision": "f98a877eaaecea2c038fe32b531b2740"
  },
  {
    "url": "assets/img/rust_expression_classify.fe97eeaf.png",
    "revision": "fe97eeafadfa824f446d427314f650ba"
  },
  {
    "url": "assets/img/rust_memory_management_behind_expression.bfae4ded.png",
    "revision": "bfae4ded11aa5c60ed0c62ca6c51844a"
  },
  {
    "url": "assets/img/rust_version_edition.4d9eab76.png",
    "revision": "4d9eab76fb3f255b2fcbe9f6988c81c4"
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
    "url": "assets/img/USB_connection_detection.dc749bbf.png",
    "revision": "dc749bbf26d0c4cf57bdf1458e6e5491"
  },
  {
    "url": "assets/img/USB_control_transfer_setup_stage.54f7d194.png",
    "revision": "54f7d1946a025552460043e70ba9b163"
  },
  {
    "url": "assets/img/USB_control_transfer_transactions.73812a66.png",
    "revision": "73812a66e0c0187ab3299ea828284965"
  },
  {
    "url": "assets/img/USB_control_transfer.501fc695.png",
    "revision": "501fc6959909d85d3847c912bc7da42b"
  },
  {
    "url": "assets/img/USB_device_structure.e3d82b81.png",
    "revision": "e3d82b817ecb4abed5e43436593f95d4"
  },
  {
    "url": "assets/img/USB_encoding.ef77eb86.png",
    "revision": "ef77eb86402676b8611fc1597aebe554"
  },
  {
    "url": "assets/img/USB_enumeration.d3564010.png",
    "revision": "d3564010889d46f0d7efebaccde9e562"
  },
  {
    "url": "assets/img/USB_field_package_transaction_transfer.ab197813.png",
    "revision": "ab197813f446fd50ce335d2c67d355dc"
  },
  {
    "url": "assets/img/USB_fs_device_connection.6b26ee3c.png",
    "revision": "6b26ee3c5134c5d09ce6d7b7df242d23"
  },
  {
    "url": "assets/img/USB_hs_device_connection.4cf60d51.png",
    "revision": "4cf60d5190627975523ab6cdbe87cd5e"
  },
  {
    "url": "assets/img/USB_keyboard_design.1bfe6c12.png",
    "revision": "1bfe6c124c725a5145c1c85003959c3f"
  },
  {
    "url": "assets/img/USB_keyboard_sw.363b3b59.png",
    "revision": "363b3b59eb8c586944de41002752c79c"
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
    "url": "assets/img/USB_system_tier.fab32862.png",
    "revision": "fab32862b49e038d02178d1185b17559"
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
    "url": "assets/js/10.f5d77349.js",
    "revision": "a849129033d03efd11960097a8543a67"
  },
  {
    "url": "assets/js/11.38b85931.js",
    "revision": "c63ef052fd148e98a8a929f26effdad4"
  },
  {
    "url": "assets/js/12.60be568f.js",
    "revision": "bb280c1148c18fd0edb21b0cd763093d"
  },
  {
    "url": "assets/js/13.2c90b006.js",
    "revision": "494e907e2fba78bc522a521affb9ba6a"
  },
  {
    "url": "assets/js/14.3373285e.js",
    "revision": "0b5ce5e20980a617766c5bafd34e8c1c"
  },
  {
    "url": "assets/js/15.fc990a49.js",
    "revision": "bc350d1849fc202920df7bbb8669ad06"
  },
  {
    "url": "assets/js/16.049c012c.js",
    "revision": "e8393d1d76d31c709747c3b8c06a7186"
  },
  {
    "url": "assets/js/17.b5eec7cf.js",
    "revision": "54ba4be66cf7fa73cfd16e6b258e61a6"
  },
  {
    "url": "assets/js/18.fdaf68e0.js",
    "revision": "c6676f04668bb22cd6de0254398a9adc"
  },
  {
    "url": "assets/js/19.840f47ee.js",
    "revision": "e50b2d25caf0c04c7654f35fa960df87"
  },
  {
    "url": "assets/js/2.eb7fcb38.js",
    "revision": "4ca973406591dceb052f15f9d1c21e3c"
  },
  {
    "url": "assets/js/20.9027e13c.js",
    "revision": "fae2d61b4c1510053ea692b657e28c24"
  },
  {
    "url": "assets/js/21.0c697e73.js",
    "revision": "bf67224be695ca9ba1a2d43220cccd1f"
  },
  {
    "url": "assets/js/22.ff9883a0.js",
    "revision": "faddbf777509167bd09839f7f77023f1"
  },
  {
    "url": "assets/js/23.be6e0185.js",
    "revision": "64b99639cf851bcb2c8519328422ec44"
  },
  {
    "url": "assets/js/24.11c4fed4.js",
    "revision": "3cc2045e6097e5574872a05a2dab424c"
  },
  {
    "url": "assets/js/25.4862d7d9.js",
    "revision": "547132b32617d308b5d82a135f136015"
  },
  {
    "url": "assets/js/26.d99b5cc5.js",
    "revision": "b8c794ad929941d719d07dc944dae053"
  },
  {
    "url": "assets/js/27.25ce734c.js",
    "revision": "1ef8d31d1d1442c63c8c2716317a59a4"
  },
  {
    "url": "assets/js/28.c4962976.js",
    "revision": "257bf4b3ddba8319a3c579992520dec5"
  },
  {
    "url": "assets/js/29.29fe0482.js",
    "revision": "6f90e77ace225c322f84c8df6a225112"
  },
  {
    "url": "assets/js/3.691b13d1.js",
    "revision": "2d7d771e466098c56a3e8a1e9c5e68a3"
  },
  {
    "url": "assets/js/30.4fc82838.js",
    "revision": "51b5ba102021223f3802203c305a6202"
  },
  {
    "url": "assets/js/31.aaaf38fd.js",
    "revision": "6407768bd1599a65ac850d0b5313156e"
  },
  {
    "url": "assets/js/32.6437a4e5.js",
    "revision": "936e5fe2d6d981d7421ba40280efcd7d"
  },
  {
    "url": "assets/js/33.8608da82.js",
    "revision": "519ce1f954d1794b52e717634f743630"
  },
  {
    "url": "assets/js/34.1d2a8bf1.js",
    "revision": "7d7e139a35b423630b5a31bfe2dfc80b"
  },
  {
    "url": "assets/js/35.46e354e2.js",
    "revision": "bc073cdb04ceb8aafe4427411e7951f2"
  },
  {
    "url": "assets/js/36.29cccd9c.js",
    "revision": "e4e3c06b9754c835c327e08c820cee97"
  },
  {
    "url": "assets/js/37.384ecc2b.js",
    "revision": "609334b45e2ca1b3f1a7e49ad2951abe"
  },
  {
    "url": "assets/js/38.53bbeb7e.js",
    "revision": "e27ab57894f6055503c1bb40c7622314"
  },
  {
    "url": "assets/js/39.ee0520cb.js",
    "revision": "bb44595689f5f59be6afdab8b2ef5132"
  },
  {
    "url": "assets/js/4.32596a1d.js",
    "revision": "5c23b85e7a09cef77fdd4646c0f1c1d6"
  },
  {
    "url": "assets/js/40.eecbb38c.js",
    "revision": "c5074021df62a783891b33b0686b4238"
  },
  {
    "url": "assets/js/41.2ecf47d3.js",
    "revision": "3b6cf0cba03206d7c6c5a38c51952a8a"
  },
  {
    "url": "assets/js/42.d9a6f097.js",
    "revision": "ce8dec4975901f362467e1da2d4a17ff"
  },
  {
    "url": "assets/js/43.7dfc5eb0.js",
    "revision": "11eabd903a7e4e50e9bd46219f8cdd38"
  },
  {
    "url": "assets/js/44.bfc0f86d.js",
    "revision": "3f60fbd72f4e79e3223d4fc28068145b"
  },
  {
    "url": "assets/js/45.7d73ce91.js",
    "revision": "9509829c17a68c7c37b18bd8491ccd88"
  },
  {
    "url": "assets/js/46.b089e2af.js",
    "revision": "4004334f67301d7822df11a7a69be0e3"
  },
  {
    "url": "assets/js/47.4fab34c4.js",
    "revision": "06eba11c63a0294daa655c7f43b57e00"
  },
  {
    "url": "assets/js/48.74f3c5a8.js",
    "revision": "88f294b10a476bb4c0cb1a87da21c268"
  },
  {
    "url": "assets/js/49.593d37c7.js",
    "revision": "42ba85a2767167b876c59cc3d6509bb2"
  },
  {
    "url": "assets/js/5.20f6998f.js",
    "revision": "495ba3b7dccf6b667bb2e54dacf2eeff"
  },
  {
    "url": "assets/js/50.2a5fbc02.js",
    "revision": "13affa0d62e3914e5c85d1d5cfcac5bd"
  },
  {
    "url": "assets/js/51.6a81f966.js",
    "revision": "9b10ad36b40b260761f6be706feb8360"
  },
  {
    "url": "assets/js/52.df77a750.js",
    "revision": "0adc8d434488ec4518a932c2fe7abe21"
  },
  {
    "url": "assets/js/53.ee1f3d6c.js",
    "revision": "54578b6d27727e8f4f2f57d66833ecd0"
  },
  {
    "url": "assets/js/54.20f9f9be.js",
    "revision": "303f236f8bfe3b2b21a6f2898df1569d"
  },
  {
    "url": "assets/js/55.0f2e373f.js",
    "revision": "a4812ad45249292f7572989d609c0f70"
  },
  {
    "url": "assets/js/56.4a6a1f2a.js",
    "revision": "fef84e42f111d4f4f5680f66b1e69698"
  },
  {
    "url": "assets/js/57.d07c4809.js",
    "revision": "f625c9251a4727ba22f4b6444bc4513e"
  },
  {
    "url": "assets/js/58.eec4ec4f.js",
    "revision": "82b9e324df6ed9eea255e56fb2027918"
  },
  {
    "url": "assets/js/59.760f6229.js",
    "revision": "7fadec8d4d16266825729fb8ef5b45e8"
  },
  {
    "url": "assets/js/6.0bcfb578.js",
    "revision": "876a129e272bc19b87be02c3556b0843"
  },
  {
    "url": "assets/js/60.cdf21e93.js",
    "revision": "32d81c7117db9588a1734a00034dae51"
  },
  {
    "url": "assets/js/61.deba28d2.js",
    "revision": "ef2f4c63b1f910ccb561f19c1f627e74"
  },
  {
    "url": "assets/js/62.327be610.js",
    "revision": "27382950482ca0a5f8db4f4a2290d8b1"
  },
  {
    "url": "assets/js/63.f352e0e3.js",
    "revision": "4b9933f7b8977a6579c0662d84c6e4fd"
  },
  {
    "url": "assets/js/64.bad43304.js",
    "revision": "cab7c224c992ee0a3e330b8a7f84dda7"
  },
  {
    "url": "assets/js/65.81183a7b.js",
    "revision": "f3e0227a966a4e5a3e0d33512b46d0dd"
  },
  {
    "url": "assets/js/66.2b2e6207.js",
    "revision": "0dd4d62aa0c076355fffa5e248fbc04d"
  },
  {
    "url": "assets/js/67.092119db.js",
    "revision": "57a93d46e9b8502f81ae32d89eaeb556"
  },
  {
    "url": "assets/js/68.7abb149f.js",
    "revision": "a8064f41b25913cab80d367a470636c0"
  },
  {
    "url": "assets/js/69.6d22bf28.js",
    "revision": "cdb5304bfa8cc2d748f9cd74beb1f4bc"
  },
  {
    "url": "assets/js/7.a1026f10.js",
    "revision": "b259c9b0766dc78ed781f4dc77091bc6"
  },
  {
    "url": "assets/js/70.7a035920.js",
    "revision": "60e3f79d0de6cd10b641a8592a457c4f"
  },
  {
    "url": "assets/js/71.ef0d37f0.js",
    "revision": "6942db3e3fceea23de5e7dc2bf7ef585"
  },
  {
    "url": "assets/js/72.83ea4164.js",
    "revision": "0054806aa3d8dcc84ba9fa0b912bc79c"
  },
  {
    "url": "assets/js/73.df2a9535.js",
    "revision": "cc8eee6492bdaa1cd6c8ef3419f5b3d2"
  },
  {
    "url": "assets/js/74.5f632520.js",
    "revision": "a5798ecc26b6b26dd77a35f9a17b52be"
  },
  {
    "url": "assets/js/75.d614a335.js",
    "revision": "f864fe9a340e1b1f41534d1a3e180a45"
  },
  {
    "url": "assets/js/76.05fd9435.js",
    "revision": "08b82066bcf55158bf8da8f5c06356b0"
  },
  {
    "url": "assets/js/77.7d0d8877.js",
    "revision": "8785660788cd06ed8ce7c3f61346a829"
  },
  {
    "url": "assets/js/78.81c6b5c6.js",
    "revision": "2200c95758dcd7f5f84036b3da29fe0c"
  },
  {
    "url": "assets/js/79.06b65f0d.js",
    "revision": "980f6bae2b6de75be649f865667a9944"
  },
  {
    "url": "assets/js/8.2edd82b1.js",
    "revision": "e58489c83d34bff38cd62057c4deee69"
  },
  {
    "url": "assets/js/80.7c31b3b4.js",
    "revision": "225425b7c8ad6f173384ceda367b4264"
  },
  {
    "url": "assets/js/81.b2cccea7.js",
    "revision": "f222acbc6cdd76529e3f6a7b5ec0068e"
  },
  {
    "url": "assets/js/82.cf98867c.js",
    "revision": "f50d717c080bf0b6bcae807b8a3417bf"
  },
  {
    "url": "assets/js/83.d5f4d1f0.js",
    "revision": "4dc71bf219f208bf954f5fe0c59589f5"
  },
  {
    "url": "assets/js/84.575ee0a0.js",
    "revision": "4f5622309ca771cecf60fd22a9f66cc5"
  },
  {
    "url": "assets/js/85.c0b8568a.js",
    "revision": "b4f5a940eeab2d728e06cffbba21e8b8"
  },
  {
    "url": "assets/js/86.2c3a3d68.js",
    "revision": "1aa632b694a225c17033b35b8a31336c"
  },
  {
    "url": "assets/js/87.8a5ecab4.js",
    "revision": "1e495715980a975ba84ceeda1d7accb5"
  },
  {
    "url": "assets/js/88.b50ec93e.js",
    "revision": "f65c1157b07aad8d8ec9523435c219f5"
  },
  {
    "url": "assets/js/89.64613859.js",
    "revision": "786306ca770f650d7f6624da2f21ea9c"
  },
  {
    "url": "assets/js/9.53caaa71.js",
    "revision": "eb1948131f5c5d914c451edef6da8b84"
  },
  {
    "url": "assets/js/90.7ed7e44a.js",
    "revision": "03e6106312ca28c2745839c9d7d0f25e"
  },
  {
    "url": "assets/js/91.f9f4f641.js",
    "revision": "c23bf5eea92865285a9428d749a9f3b7"
  },
  {
    "url": "assets/js/app.358bea89.js",
    "revision": "8f8062b925ef13ebd5267d397b57f1f1"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "811cd3159ddf72eab6e2260ef616a62e"
  },
  {
    "url": "cs/bash.html",
    "revision": "949941baedd9c46b31b886abed193116"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "e998df0197cf2ac3981f455588ab221b"
  },
  {
    "url": "cs/cheat_sheet.html",
    "revision": "a8155bcbbd14ed59b41617a7c31d7548"
  },
  {
    "url": "cs/cmake.html",
    "revision": "e20cdd96b98a115c2f735e20f6307b79"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "c166b3701a992792d68a6103cf575b07"
  },
  {
    "url": "cs/concurrent_programming.html",
    "revision": "d9631f14f78f8d44f6ed6df946879fde"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "f8ff867494849504475eeb5d20100e94"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "be4eb99e92147584e1587a063c90b216"
  },
  {
    "url": "cs/git.html",
    "revision": "a6deff39d9bc357f3ad4959d1b006add"
  },
  {
    "url": "cs/index.html",
    "revision": "18499ee21484d7a0fea9c247db692399"
  },
  {
    "url": "cs/iptables.html",
    "revision": "ce7bddbf4d912e3edcdaa9e1e9052c6d"
  },
  {
    "url": "cs/keras.html",
    "revision": "b741d118b00aa3d16ddbd69308f570f8"
  },
  {
    "url": "cs/knowledge_map.html",
    "revision": "3027be85e2201f03aaf4e5f46d694b61"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "1991c90a38d4ba98463df3687da35a02"
  },
  {
    "url": "cs/lwip.html",
    "revision": "0464ad002bc542f32a4ac8978cdbf957"
  },
  {
    "url": "cs/mbedtls.html",
    "revision": "0eb0d567afc3353c5862cb529e771f6b"
  },
  {
    "url": "cs/python.html",
    "revision": "f4d3dfc0b40ae2ac853c7aefe6ca6a32"
  },
  {
    "url": "cs/regular_expression.html",
    "revision": "018ddcb1fdf265f17014f24ae9b9608c"
  },
  {
    "url": "cs/risc-v.html",
    "revision": "527521ec66b3e2353ce9792103f6b14c"
  },
  {
    "url": "cs/rust_lang.html",
    "revision": "9cc45b38a139b8f4ddfa7ef80f810c36"
  },
  {
    "url": "cs/scala.html",
    "revision": "ee10f86b3948f3165698cda377459e7a"
  },
  {
    "url": "cs/think_in_code.html",
    "revision": "6cb20d979a2e8b4ced375e2d63a8faff"
  },
  {
    "url": "cs/xtensa.html",
    "revision": "31b96a070621ec2b21708c26cba7b696"
  },
  {
    "url": "ee/about.html",
    "revision": "25f29dfbf04af6929a23348cfe934a7d"
  },
  {
    "url": "ee/chisel.html",
    "revision": "18e6f457eb170d0bffb4cfabdeda62b8"
  },
  {
    "url": "ee/esp32.html",
    "revision": "76c81676b19c9efcfd713f15301f7f13"
  },
  {
    "url": "ee/index.html",
    "revision": "6ad82ff7bfb044167888a1a4487a0936"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "8b0c06ffc960578ebac6191f30d595da"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "e6e7d58d835938be40b128bc639d7dd8"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "2e7bd320b93d5a5212fa3a8f7bb6124f"
  },
  {
    "url": "ee/usb.html",
    "revision": "7bafc1afe1d4154b8a1bd45db3e1a32c"
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
    "revision": "1a5134664cf1c6f9b6b7147559bc75a5"
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
    "url": "images/cs/rust/rust_compile_process.png",
    "revision": "f98a877eaaecea2c038fe32b531b2740"
  },
  {
    "url": "images/cs/rust/rust_expression_classify.png",
    "revision": "fe97eeafadfa824f446d427314f650ba"
  },
  {
    "url": "images/cs/rust/rust_memory_management_behind_expression.png",
    "revision": "bfae4ded11aa5c60ed0c62ca6c51844a"
  },
  {
    "url": "images/cs/rust/rust_version_edition.png",
    "revision": "4d9eab76fb3f255b2fcbe9f6988c81c4"
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
    "revision": "26f7ec809f8cae19823c924458da7528"
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
    "revision": "325342cdee752fdd0b44a7e8075dacac"
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
    "url": "images/ee/motor/hall_sensor_6steps_clockwise.png",
    "revision": "fb10333c34851f4732760ad2e089b1ed"
  },
  {
    "url": "images/ee/motor/hall_sensor_6steps_counter_clockwise.png",
    "revision": "8c628e70f3eb144734fc704a814250ac"
  },
  {
    "url": "images/ee/usb/USB_connection_detection.png",
    "revision": "dc749bbf26d0c4cf57bdf1458e6e5491"
  },
  {
    "url": "images/ee/usb/USB_control_transfer_setup_stage.png",
    "revision": "54f7d1946a025552460043e70ba9b163"
  },
  {
    "url": "images/ee/usb/USB_control_transfer_transactions.png",
    "revision": "73812a66e0c0187ab3299ea828284965"
  },
  {
    "url": "images/ee/usb/USB_control_transfer.png",
    "revision": "501fc6959909d85d3847c912bc7da42b"
  },
  {
    "url": "images/ee/usb/USB_device_structure.png",
    "revision": "e3d82b817ecb4abed5e43436593f95d4"
  },
  {
    "url": "images/ee/usb/USB_encoding.png",
    "revision": "ef77eb86402676b8611fc1597aebe554"
  },
  {
    "url": "images/ee/usb/USB_enumeration.png",
    "revision": "d3564010889d46f0d7efebaccde9e562"
  },
  {
    "url": "images/ee/usb/USB_field_package_transaction_transfer.png",
    "revision": "ab197813f446fd50ce335d2c67d355dc"
  },
  {
    "url": "images/ee/usb/USB_fs_device_connection.png",
    "revision": "6b26ee3c5134c5d09ce6d7b7df242d23"
  },
  {
    "url": "images/ee/usb/USB_hs_device_connection.png",
    "revision": "4cf60d5190627975523ab6cdbe87cd5e"
  },
  {
    "url": "images/ee/usb/USB_keyboard_design.png",
    "revision": "1bfe6c124c725a5145c1c85003959c3f"
  },
  {
    "url": "images/ee/usb/USB_keyboard_sw.png",
    "revision": "363b3b59eb8c586944de41002752c79c"
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
    "url": "images/ee/usb/USB_system_tier.png",
    "revision": "fab32862b49e038d02178d1185b17559"
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
    "revision": "b0cc2cdb3fc61f092de062097cb4409d"
  },
  {
    "url": "images/resume/ai.svg",
    "revision": "1a544279d64c2b5e81bc1ba9033c1886"
  },
  {
    "url": "images/resume/bilibili.svg",
    "revision": "5dd9641eeab55dc7b7747bc812556807"
  },
  {
    "url": "images/resume/blog.svg",
    "revision": "0d3442e0284bd90fc805a138fbf33505"
  },
  {
    "url": "images/resume/briefcase.svg",
    "revision": "b165e3d27b893eab8662447a881bb997"
  },
  {
    "url": "images/resume/certificate.svg",
    "revision": "331d93a386845bec7ea6281cf4ccfefc"
  },
  {
    "url": "images/resume/electronic.svg",
    "revision": "e76691327bbf8562231a3b76d98b4dfa"
  },
  {
    "url": "images/resume/envelope.svg",
    "revision": "9d80c917f95ee043b57cf875826a21c6"
  },
  {
    "url": "images/resume/geek.svg",
    "revision": "7a8636b2cc66410afe1575cb79d3f1f6"
  },
  {
    "url": "images/resume/github.svg",
    "revision": "8f252dbe04cd4d52a7fb46dc6ef516e6"
  },
  {
    "url": "images/resume/graduation-cap.svg",
    "revision": "6db3fa1ef42b5f83aecdde84d94c4389"
  },
  {
    "url": "images/resume/hobby.svg",
    "revision": "f2d62a8271552255b0ed75e89b7d0c9c"
  },
  {
    "url": "images/resume/info.svg",
    "revision": "11d8ddd1c8da06856fe3f2eda7bd5d91"
  },
  {
    "url": "images/resume/language.svg",
    "revision": "808218093776b1c1951f8c0cc91efa63"
  },
  {
    "url": "images/resume/media.svg",
    "revision": "6e5f82b34a9caf1e2b03d3121cef2b0e"
  },
  {
    "url": "images/resume/network.svg",
    "revision": "53aabf1498e5070b724e3bd70b639edb"
  },
  {
    "url": "images/resume/phone.svg",
    "revision": "8eac5f356a4e7f886dcf783d0e3ebbe3"
  },
  {
    "url": "images/resume/programming.svg",
    "revision": "3de7014e10ad9a0884667ececb5f3172"
  },
  {
    "url": "images/resume/project-diagram.svg",
    "revision": "57fd869e79825914143289c781b0ff7a"
  },
  {
    "url": "images/resume/tools.svg",
    "revision": "f8cadcb563c9801c6d13ebb4e85baac7"
  },
  {
    "url": "images/resume/writing.svg",
    "revision": "1330e0988c0b7971f2c67631d1821a7f"
  },
  {
    "url": "index.html",
    "revision": "19518b6b6a6e5417dbc587ded306f3e8"
  },
  {
    "url": "others/about.html",
    "revision": "f04da1f64208bbd741eef5a3756a1d8d"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "5fee6cfc6ced376ab5c8b833c5bf008e"
  },
  {
    "url": "others/android-studio.html",
    "revision": "4d29873b4aae33f84d8cff0f7dc8c313"
  },
  {
    "url": "others/android.html",
    "revision": "f035abb47d082225196d77e4359c6677"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "f45b6baa045d1702d6be55f3becdfaf8"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "a99241092783bf66d5f460fea596acc5"
  },
  {
    "url": "others/css.html",
    "revision": "e0b5491ee313872354ddfcd66858a36d"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "3106dd3a3158b5b23315082d52c99d36"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "12a39de5382275df9bc41d322cb7ea0e"
  },
  {
    "url": "others/english-writting.html",
    "revision": "4d760c44579e9227294d329ab9d276c5"
  },
  {
    "url": "others/freertos.html",
    "revision": "24816a5f7161bcbb438b7ef458ada588"
  },
  {
    "url": "others/gns3.html",
    "revision": "a2e91a5ea2a57513022650f18dbc67be"
  },
  {
    "url": "others/gps.html",
    "revision": "2e796fb2248c7f4b8cacdbbab4475982"
  },
  {
    "url": "others/html5.html",
    "revision": "678f50855be7f018ac38e335c21bdb0c"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "f45c4f3e0f51afba2c1ac0cf786adbcc"
  },
  {
    "url": "others/index.html",
    "revision": "be7f76fa3c28944a5c9aaeab53403d21"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "991eefc058bac56fe28f5818e683ae38"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "f5b7e043027c95ae954563acc99ac9fd"
  },
  {
    "url": "others/javascript.html",
    "revision": "62270000a27dad6553527edb8f2f8e95"
  },
  {
    "url": "others/json.html",
    "revision": "60b4a45b31bbc768bca83ee5163b8ae4"
  },
  {
    "url": "others/latex.html",
    "revision": "d2d8fe052da9919032c8ca2c7b15e780"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "9b9e27be2bc91c28daf1f3fa9d5dbe72"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "ffd3d09bd2916a249bc7a0beee9fb9f3"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "87b2de24c5ac5a44d253b45e2df6f5e2"
  },
  {
    "url": "others/markdown.html",
    "revision": "8c7d2d00db10ebeabd05c9f7e0795497"
  },
  {
    "url": "others/matlab.html",
    "revision": "ad1ace9d6d6d16920a4799b98a89ec7b"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "d8fe9b6c521cf7d0343d6c64e7fb5a58"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "7fd8411c661011ece0d56dadc6d921a9"
  },
  {
    "url": "others/network-security.html",
    "revision": "50a21cadbe4960250fc879a62dd5a927"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "2ef37a8f55b888ed657d6db71feaadbc"
  },
  {
    "url": "others/oral_english.html",
    "revision": "2409cb3b1c6d109e6f8be4fffe8b0631"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "3bbd9aa509c6fd59a5adccc7dc3c8b6f"
  },
  {
    "url": "others/poe.html",
    "revision": "8b2b40e93be5bd9df56984bc35268857"
  },
  {
    "url": "others/pyside2.html",
    "revision": "57ae74b437ef0a75e0fde2e23abcf9ed"
  },
  {
    "url": "others/python-socket.html",
    "revision": "a5442268cfc20c55be9050b3d7f71c9f"
  },
  {
    "url": "others/q-learning.html",
    "revision": "2f8250b2d8ee6dc71b2e7c22bdf9dcd0"
  },
  {
    "url": "others/qr-code.html",
    "revision": "620d1c939866c2cc80b6a2a2ceb90200"
  },
  {
    "url": "others/qt4.html",
    "revision": "2ad8ac5625fb26ee9f4f649244005402"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "a494f08ea883524996dc74967f8c5afd"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "dfddd1c2278c32bda5e1d8b34d67c11e"
  },
  {
    "url": "others/sd-card.html",
    "revision": "22615268ad6ce858be45e4d379faf2ef"
  },
  {
    "url": "others/sdn.html",
    "revision": "d969f64702452b8c075e523b1497cad5"
  },
  {
    "url": "others/star-uml.html",
    "revision": "431593f1ba7c54ce4d1f0963da05a14e"
  },
  {
    "url": "others/terminal_presentation.html",
    "revision": "1ecfe84dcbdab3c6093c9294b52fbf6b"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "a21628e62bd5c88cf69dceb20a1bc32a"
  },
  {
    "url": "others/verilog.html",
    "revision": "b6c42bd2965a450452d02fd6e269842b"
  },
  {
    "url": "others/vue.html",
    "revision": "0f59027d74fdf381ee23f4b0866ded35"
  },
  {
    "url": "others/w5500.html",
    "revision": "5d11cb7bea9eff08be9f9277b2c67e73"
  },
  {
    "url": "others/w7500.html",
    "revision": "81f5b0d34442c7465f9fb26fabbe58e8"
  },
  {
    "url": "resume.html",
    "revision": "88e941c5897e2bf95874ea6db00a4680"
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
