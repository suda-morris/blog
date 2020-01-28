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
    "revision": "5ebddd8f83b2442c413c6afeae3c3b40"
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
    "url": "assets/img/arp_protocol.6e6dab0f.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "assets/img/BCD_encoding.f5a0b0f2.jpg",
    "revision": "f5a0b0f2188ebe0d18f4424578a588b3"
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
    "url": "assets/img/cache_system.0bb68b0b.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "assets/img/charset_encoding.9911c58d.jpg",
    "revision": "9911c58d79e8a1f106d48a83457d193e"
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
    "url": "assets/img/mips_instruction.b1ade5f8.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
  },
  {
    "url": "assets/img/motor_category.cd3b7f87.png",
    "revision": "cd3b7f87a795775889c64b6404eb3f54"
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
    "url": "assets/img/simplest_CPU.6863e10f.jpeg",
    "revision": "6863e10fc635791878d1ecd57618b871"
  },
  {
    "url": "assets/img/spi_signals.2ac41670.png",
    "revision": "2ac4167088ad40da2f88c372545f26b9"
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
    "url": "assets/img/tcp_ip_stack.13913b2b.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
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
    "url": "assets/js/10.8eff4d60.js",
    "revision": "4f6cec6808edf5918bb4d6c2ac44a2a7"
  },
  {
    "url": "assets/js/11.feda0a24.js",
    "revision": "3fffed92f1e4e0bf0df2743a874a3c53"
  },
  {
    "url": "assets/js/12.da8c8d02.js",
    "revision": "5aedfd794327b62262be787033f891a2"
  },
  {
    "url": "assets/js/13.767304dc.js",
    "revision": "9bb779503df202d34c4a4e6b49a2e61e"
  },
  {
    "url": "assets/js/14.0805eb31.js",
    "revision": "2e7506c43cdccbd04a1a146b22eb610f"
  },
  {
    "url": "assets/js/15.ecb624bd.js",
    "revision": "ee2cc3a85c45733b87796e42d136cf2f"
  },
  {
    "url": "assets/js/16.d262e6d1.js",
    "revision": "dce6cbd63cbd8ce940a621e9c7447590"
  },
  {
    "url": "assets/js/17.986bafd5.js",
    "revision": "e92d77a1b14d6a285aa7f370026272f2"
  },
  {
    "url": "assets/js/18.12c09f19.js",
    "revision": "d1156dbed29aa721d3cc8826212589e8"
  },
  {
    "url": "assets/js/19.b5d23061.js",
    "revision": "8e86bd016d8d44a24e76958d706568de"
  },
  {
    "url": "assets/js/2.15b42549.js",
    "revision": "70ffe4dd8deb1e64f64f8098d74bfff8"
  },
  {
    "url": "assets/js/20.a396703e.js",
    "revision": "e3d875c92d9bd68f6ac44623f808f200"
  },
  {
    "url": "assets/js/21.f22811c5.js",
    "revision": "b41a3c0809ca17e610005f3eb54532ef"
  },
  {
    "url": "assets/js/22.83186d6a.js",
    "revision": "6c0c4af028a8b6742acee1fcb2416d03"
  },
  {
    "url": "assets/js/23.87447ff0.js",
    "revision": "13ca52d03f8a983d29cc50f0b053dbfc"
  },
  {
    "url": "assets/js/24.2082966e.js",
    "revision": "aefcd30d33120fd7a598cf8e3c33d18f"
  },
  {
    "url": "assets/js/25.ad624506.js",
    "revision": "13d0b009c5f38fad0384592e19be6d9c"
  },
  {
    "url": "assets/js/26.b84eb10c.js",
    "revision": "462c444eda6e9629ebee7aba019e98ba"
  },
  {
    "url": "assets/js/27.c749a290.js",
    "revision": "f053cfe4690e028f4c47053838daa753"
  },
  {
    "url": "assets/js/28.b5f67a29.js",
    "revision": "3e768d68c757bdeee25fd0ca6a146b0e"
  },
  {
    "url": "assets/js/29.2fe4ec4e.js",
    "revision": "936659b1d5dfcbf245a66cf9ccc0b31e"
  },
  {
    "url": "assets/js/3.a4352aca.js",
    "revision": "2b5f13320966eb823bfeda7734f9beb1"
  },
  {
    "url": "assets/js/30.1fbc1a5c.js",
    "revision": "4f5b1fb681d2e95830b2de2806ae2f54"
  },
  {
    "url": "assets/js/31.423b5c2c.js",
    "revision": "f27e177f7ee744032c8bf88ad9de76b3"
  },
  {
    "url": "assets/js/32.cca33982.js",
    "revision": "fe6a92382265b436bafd53c0b3701561"
  },
  {
    "url": "assets/js/33.61e070ae.js",
    "revision": "dbccc692adef0a1796e8694a3cafb4cf"
  },
  {
    "url": "assets/js/34.d2e77d53.js",
    "revision": "b8787f148c40bf15e9d631627a82db06"
  },
  {
    "url": "assets/js/35.42b1a791.js",
    "revision": "eff9a0729c71ab970700a7f9102704a1"
  },
  {
    "url": "assets/js/36.4c63c6b2.js",
    "revision": "9499c2e9515a94906e0993c6113376f5"
  },
  {
    "url": "assets/js/37.8ea61e89.js",
    "revision": "43dad5ca5708b09a1ebd638a11106c97"
  },
  {
    "url": "assets/js/38.58fbaead.js",
    "revision": "77c34164514b60dce20c32fa96c03a50"
  },
  {
    "url": "assets/js/39.5ca366b9.js",
    "revision": "1eb743dfb6621b2210ae4d2cfd07c42c"
  },
  {
    "url": "assets/js/4.1678631d.js",
    "revision": "11c7c1b44e1290e5f43b81182933704e"
  },
  {
    "url": "assets/js/40.4f564a91.js",
    "revision": "e665e7f6e22f1faebad045ac854e36f9"
  },
  {
    "url": "assets/js/41.e79966bc.js",
    "revision": "04200b33a752b89eefaf82c5ca702a47"
  },
  {
    "url": "assets/js/42.326ae10d.js",
    "revision": "464fb56b03088e372fd448dac87137ba"
  },
  {
    "url": "assets/js/43.21168fc3.js",
    "revision": "d20c477af572d0f1483e2ad822ef08c2"
  },
  {
    "url": "assets/js/44.0133ab94.js",
    "revision": "58740620f5d0ff37a78a7fd1a323abed"
  },
  {
    "url": "assets/js/45.ae3e6ae4.js",
    "revision": "403cb12f39ab3b1bbf63208dd1a075f4"
  },
  {
    "url": "assets/js/46.fedb5b98.js",
    "revision": "d1e7aec220ef077751095cb015cbba9e"
  },
  {
    "url": "assets/js/47.74ed6396.js",
    "revision": "32238d55754dc99b7ed25274b5dfa699"
  },
  {
    "url": "assets/js/48.c0e1755f.js",
    "revision": "6c32ff5c849b1ef2c16343419ea4cdae"
  },
  {
    "url": "assets/js/49.efb3c916.js",
    "revision": "7c0f13a6c9441adc588857b4cde65341"
  },
  {
    "url": "assets/js/5.51aac8f4.js",
    "revision": "d309d102eab57707c30dab4d02051177"
  },
  {
    "url": "assets/js/50.5a4ca32d.js",
    "revision": "aeb836b2513c127daae2eac6f06ff3cc"
  },
  {
    "url": "assets/js/51.68afdc13.js",
    "revision": "9acc8d2dc18ed922ca81cdea617fa76e"
  },
  {
    "url": "assets/js/52.3673f6aa.js",
    "revision": "ddba0f7bb36e47a1c6fe918eca2bea3f"
  },
  {
    "url": "assets/js/53.94f77220.js",
    "revision": "70285758349c14e96de72a28aa29772e"
  },
  {
    "url": "assets/js/54.7b1344ed.js",
    "revision": "0cf72d6ab1b25ad01510b6a4e0fc571f"
  },
  {
    "url": "assets/js/55.3922e57c.js",
    "revision": "c8fb7f0924aa891a35cfdc245ff6e056"
  },
  {
    "url": "assets/js/56.94453588.js",
    "revision": "36e640fe8150d412bffde425362a14a7"
  },
  {
    "url": "assets/js/57.fd17673a.js",
    "revision": "73e017e1ce79074e81678d8248ca7e0c"
  },
  {
    "url": "assets/js/58.d9fa7cd7.js",
    "revision": "ef1f8f43f9baab54f78abb106526f393"
  },
  {
    "url": "assets/js/59.f0440445.js",
    "revision": "0f6cafa1d9c4eda8feccdcc989e1490a"
  },
  {
    "url": "assets/js/6.ef9a5f2f.js",
    "revision": "393cd09ffc006c17da060cc57aff5dd9"
  },
  {
    "url": "assets/js/60.3cdc2357.js",
    "revision": "ffeb951ca3de0a012546aece4401af57"
  },
  {
    "url": "assets/js/61.5bfada55.js",
    "revision": "631318dbb038d3e6527db8524fcbbbfd"
  },
  {
    "url": "assets/js/62.955c50be.js",
    "revision": "b44a4256da8389b4fa0d3b44bab1c0d0"
  },
  {
    "url": "assets/js/63.1d31a57a.js",
    "revision": "d36536506aff978223f7330a6eb733d5"
  },
  {
    "url": "assets/js/64.191ff3f8.js",
    "revision": "185dde62ea417171aab14f0b724fd0db"
  },
  {
    "url": "assets/js/65.12f8db5d.js",
    "revision": "1dd3c1d9f402f9ca677a788838eb154c"
  },
  {
    "url": "assets/js/66.0ac747ba.js",
    "revision": "939820ac823dbc283a56f8f6e3e4e2c3"
  },
  {
    "url": "assets/js/67.fa8cd423.js",
    "revision": "9044acb517f7d04a3d2a71d85432c313"
  },
  {
    "url": "assets/js/68.ef65afa9.js",
    "revision": "94f299ed96c61ab3a7fafd07903a1907"
  },
  {
    "url": "assets/js/69.34322fd6.js",
    "revision": "c90f9c779918e53460f1ebeedfc0d9c6"
  },
  {
    "url": "assets/js/7.4783ebba.js",
    "revision": "2da668ceba7a101333cebce7d507976f"
  },
  {
    "url": "assets/js/70.f784a525.js",
    "revision": "22d0955521f5ecda2582904ea3d2ea56"
  },
  {
    "url": "assets/js/71.da87574f.js",
    "revision": "39aafd322e8ace0723ce864e3eebc9b8"
  },
  {
    "url": "assets/js/72.c9455788.js",
    "revision": "d644a336c3dbac3e781d9b41756c5e09"
  },
  {
    "url": "assets/js/73.78352056.js",
    "revision": "fba55b2276c99e6426f2149d91b5b4ed"
  },
  {
    "url": "assets/js/74.5f26ec01.js",
    "revision": "195bc30da2f10284657e7110aeba8414"
  },
  {
    "url": "assets/js/75.670295e0.js",
    "revision": "ce364e095ae25b24ac13a82b3a41b74f"
  },
  {
    "url": "assets/js/76.5e68f368.js",
    "revision": "25658dcb48995afcd5620533e2776dd6"
  },
  {
    "url": "assets/js/77.9f4e088d.js",
    "revision": "159773a73e70e0273eb846ffcffeccff"
  },
  {
    "url": "assets/js/78.14f2b86b.js",
    "revision": "50e7ca99ccd367d818173c7c541526a1"
  },
  {
    "url": "assets/js/79.53449ed5.js",
    "revision": "9f348081a6f1c66de9a3e26053df8ddd"
  },
  {
    "url": "assets/js/8.0dc150db.js",
    "revision": "bcad0f17cf9d329a1d906362ed21f327"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.44b1ae89.js",
    "revision": "cb64772694c53b0ebe5eec25f92fc36f"
  },
  {
    "url": "assets/js/app.b262175c.js",
    "revision": "26745dc2f5cb6ec5bab6a6c25852f01b"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "44df2f5227e455cc2715dab8d710132c"
  },
  {
    "url": "cs/bash.html",
    "revision": "641f2905d0fcdc8e11e3aea5786e1eef"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "e265cbda5f71ed06fb0180ab953c8648"
  },
  {
    "url": "cs/cmake.html",
    "revision": "1dab29f71e1d03728423e34d652cfb81"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "e7d651d7b50b95520801ec3ed4749ba0"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "2ca91cce2967408386532bd7113ae432"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "518b1b1378d484d6b692979d278d7924"
  },
  {
    "url": "cs/git.html",
    "revision": "6bd9bcbc808fdf4a9428e8bc38a15621"
  },
  {
    "url": "cs/index.html",
    "revision": "e0e78100af02728fb040066d62087856"
  },
  {
    "url": "cs/keras.html",
    "revision": "cbc92507ec0a121af8e7d1f340d699bd"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "785a550df6c262dfcf9a26c6cc8fec14"
  },
  {
    "url": "cs/lwip.html",
    "revision": "4a10a394e72d53c1a4266bcf4b2ec2f2"
  },
  {
    "url": "cs/scala.html",
    "revision": "15b2189d24ce3b16cd1c86376e365313"
  },
  {
    "url": "ee/about.html",
    "revision": "c5620d2b140e2877c5cafde846fd3058"
  },
  {
    "url": "ee/chisel.html",
    "revision": "669ec2da2b493f599bf1530f3f6b74c2"
  },
  {
    "url": "ee/esp32.html",
    "revision": "d629baf6e5e0312fff5d98b5e40d36be"
  },
  {
    "url": "ee/index.html",
    "revision": "4d53a790f1c0fa410d12f8cf50a29eeb"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "d8feedf26985fe472bf669f5a55132b6"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "dcdc813e6fdf32320b34782044d28104"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "a2da777bfc713bbe33113dd854a2be64"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "f18217d43494e16328f26b0c095aafae"
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
    "url": "images/cs/computer_composition/BCD_encoding.jpg",
    "revision": "f5a0b0f2188ebe0d18f4424578a588b3"
  },
  {
    "url": "images/cs/computer_composition/charset_encoding.jpg",
    "revision": "9911c58d79e8a1f106d48a83457d193e"
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
    "url": "images/cs/computer_composition/dynamic_link.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
  },
  {
    "url": "images/cs/computer_composition/elf_format.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
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
    "url": "images/cs/computer_composition/memory_paging.png",
    "revision": "0cf2f08e1ceda473df71189334857cf0"
  },
  {
    "url": "images/cs/computer_composition/memory_segmentation.png",
    "revision": "57211af3053ed621aeb903433c6c10d1"
  },
  {
    "url": "images/cs/computer_composition/mips_instruction.jpeg",
    "revision": "b1ade5f8de67b172bf7b4ec9f63589bf"
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
    "url": "images/cs/computer_composition/simplest_CPU.jpeg",
    "revision": "6863e10fc635791878d1ecd57618b871"
  },
  {
    "url": "images/cs/computer_composition/structure_hazard.jpeg",
    "revision": "c2a4c0340cb835350ea954cdc520704e"
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
    "revision": "3c9e6553f7394d15daf42d6c0331b8fb"
  },
  {
    "url": "others/about.html",
    "revision": "1db74e8cdf83b4bfee5c2d2fb14322ff"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "853c6a5ba099e150022bc9f36d3c7a30"
  },
  {
    "url": "others/android-studio.html",
    "revision": "d7d08a434a80135562267fa22a72a3c5"
  },
  {
    "url": "others/android.html",
    "revision": "deb4fe94c5c9d6ae7b35fc6880f0f20f"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "c15393ce3240613429281a277144054c"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "4f82faaec38fb525ef8392e564e938f1"
  },
  {
    "url": "others/css.html",
    "revision": "5b4f92d416f63f0a6418d6e67130a172"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "5fe5dc72889a5815e73f88da5aca5675"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "fbec004723dbb30e569a16603088d5f0"
  },
  {
    "url": "others/english-writting.html",
    "revision": "9cf950965ffcbc6dcfe9c45d5442bc9a"
  },
  {
    "url": "others/freertos.html",
    "revision": "79d482ffed2370f3633b09d44a4148d3"
  },
  {
    "url": "others/gns3.html",
    "revision": "f1c71a89757118b160b8365b8cebb67a"
  },
  {
    "url": "others/gps.html",
    "revision": "e73e3456d5e91d42a18fa8f35b6494ef"
  },
  {
    "url": "others/html5.html",
    "revision": "5706fd461c0484792f13e857ae3e635e"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "400a8e9322521c01acda2650fe831bfd"
  },
  {
    "url": "others/index.html",
    "revision": "63598da788dc67e5bb52e0f9da6b3fcc"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "7f625d8c9dffe9b90bb56436054b2d18"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "0149ae2b87e5c1ede6735837c64e1a61"
  },
  {
    "url": "others/javascript.html",
    "revision": "6e99909fab4d1864aa65165b084b45ee"
  },
  {
    "url": "others/json.html",
    "revision": "77745550a50de980905e3ec81d335eef"
  },
  {
    "url": "others/latex.html",
    "revision": "e4cbc77c255a593024ef5edfe5fd8850"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "8e89d927f65a90b280f8c7af09f0a609"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "8545f1fb2414e45ef06c945d4f4aedcc"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "4d55863bb23e90d1f18677d927a4ff8a"
  },
  {
    "url": "others/markdown.html",
    "revision": "f75a207d2541948ebd5d90b73c4ae3b5"
  },
  {
    "url": "others/matlab.html",
    "revision": "1c6048adcc9f5b481266827fd6821732"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "bac0ff1136b755ad705fb7936c2adfb1"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "b0d573f7aa2bb36d52f781ed25f7d563"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "b5a60331ee92c5fb33e0275ddcb01da4"
  },
  {
    "url": "others/network-security.html",
    "revision": "8a30de1e7fd2df5fdfb5641243ad230e"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "284f00d870c187628278c3abd75d8216"
  },
  {
    "url": "others/oral_english.html",
    "revision": "99fbf3f2d3d0634fc823be9f0a38cd14"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "a329404f15475dbd1e835b1212842dc0"
  },
  {
    "url": "others/poe.html",
    "revision": "c861b7cab87157c79da3d644d322efa4"
  },
  {
    "url": "others/pyside2.html",
    "revision": "fd889f5852048cebbac74a2b29bfaf9f"
  },
  {
    "url": "others/python-socket.html",
    "revision": "2c6bba8be72f8295465cabec8ae38ab9"
  },
  {
    "url": "others/python.html",
    "revision": "63ecefb4daf2b551d1e982542b236b8f"
  },
  {
    "url": "others/q-learning.html",
    "revision": "bfc262f4a8f13cc770157d281b27fd1f"
  },
  {
    "url": "others/qr-code.html",
    "revision": "dbfe2c7f8fc1f9ae98cf0a3f7b4e5fe2"
  },
  {
    "url": "others/qt4.html",
    "revision": "8c63e4c7fb4ef6e17c89e623d9eceb4f"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "6525bdba34f02a00075794e2b7d26bda"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "d4a7f3292da74696d8eb46842b49f61c"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "2f5448d77cb013a7b0205aaf651505a0"
  },
  {
    "url": "others/sd-card.html",
    "revision": "ad4c72d9d945c9f4439102391b680c18"
  },
  {
    "url": "others/sdn.html",
    "revision": "1b846de052b360ee56f970729e80a771"
  },
  {
    "url": "others/star-uml.html",
    "revision": "5510fdbdb90f80eb300bf4124e8aca8b"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "3116aca87834a37878561e0b3dda81e3"
  },
  {
    "url": "others/verilog.html",
    "revision": "444d0723b847d26391dd345ebc25b581"
  },
  {
    "url": "others/vue.html",
    "revision": "82c57db95fbd136f736bfa2163fa5323"
  },
  {
    "url": "others/w5500.html",
    "revision": "4b76ef77c4b644ef9377597650939a7e"
  },
  {
    "url": "others/w7500.html",
    "revision": "a64c02efd331643a557990203e00cff1"
  },
  {
    "url": "resume.html",
    "revision": "a79f7c5eaf32e0905d8455a4d42da79b"
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
