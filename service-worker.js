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
    "revision": "45ad6fb55d150b01ad701de823a5cf95"
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
    "url": "assets/img/plt_got_table.1144d3a2.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
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
    "url": "assets/img/tcp_ip_stack.13913b2b.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "assets/img/Von_Neumann_architecture.76984515.jpg",
    "revision": "7698451564f41bad92e81e46e2565cad"
  },
  {
    "url": "assets/js/10.bd48eedc.js",
    "revision": "b033c51781a46f7478974957a2386fe3"
  },
  {
    "url": "assets/js/11.9175fe70.js",
    "revision": "9ac4e7638b6c58f9bd69d4829ad0540b"
  },
  {
    "url": "assets/js/12.bf00487a.js",
    "revision": "f5cdf87d946637e14cf0b097aacbe0ef"
  },
  {
    "url": "assets/js/13.05c36174.js",
    "revision": "c62e5846123c3c7b11157de5952a1b28"
  },
  {
    "url": "assets/js/14.7d0ec3f4.js",
    "revision": "e044ef46a0450664bccaa2b74fcda441"
  },
  {
    "url": "assets/js/15.b37f7c0c.js",
    "revision": "eccdd96097d4bf9f67d400fc86f12b59"
  },
  {
    "url": "assets/js/16.6c4a5fe8.js",
    "revision": "9249c2ef9ae5bbb53d8bff95c0aaf1cf"
  },
  {
    "url": "assets/js/17.ff4168c8.js",
    "revision": "7278edeb5ec50ef5b05224ea23791c0a"
  },
  {
    "url": "assets/js/18.35d38e57.js",
    "revision": "0afdadfd1280f2a04a866057ae6b9ec7"
  },
  {
    "url": "assets/js/19.4fba9208.js",
    "revision": "cffe4a9aea2d30ed1b23c40d17e4d365"
  },
  {
    "url": "assets/js/2.5fd7aa49.js",
    "revision": "a78bfcf5259b42b5e96308a6cf07cb5f"
  },
  {
    "url": "assets/js/20.56204de8.js",
    "revision": "75fde2456f9854758b67c4ddb68742a2"
  },
  {
    "url": "assets/js/21.89250429.js",
    "revision": "eb8f972e0700197d53465c32932526f3"
  },
  {
    "url": "assets/js/22.c9817f6b.js",
    "revision": "cd223efe3035eaef55bed451e54e3481"
  },
  {
    "url": "assets/js/23.cf71527e.js",
    "revision": "918d72f34c92f712ef0ede9a5635401c"
  },
  {
    "url": "assets/js/24.f3ea2a29.js",
    "revision": "5eb64a5bb29223500292675f2ef189ad"
  },
  {
    "url": "assets/js/25.d77069fe.js",
    "revision": "103815c70ff2c658a92d49a94ec77af7"
  },
  {
    "url": "assets/js/26.fd664074.js",
    "revision": "3c66090c41d21bb1041593a8f2daa804"
  },
  {
    "url": "assets/js/27.7edc2400.js",
    "revision": "3da3425cad17467c2deb8b2a6c6ad1ae"
  },
  {
    "url": "assets/js/28.35382aae.js",
    "revision": "039ab1069835faefc93c22a3d95ef8ac"
  },
  {
    "url": "assets/js/29.76a05720.js",
    "revision": "069cc1137d06791ad602466b9c660e26"
  },
  {
    "url": "assets/js/3.4ae0e249.js",
    "revision": "8395a0b35c4af8a206c53a3fa179534b"
  },
  {
    "url": "assets/js/30.f283eb58.js",
    "revision": "0c5eb1a059cad5a740fe71d38284aa8a"
  },
  {
    "url": "assets/js/31.904d40b3.js",
    "revision": "d78b6fc8790d060e30b06d03b34a0c09"
  },
  {
    "url": "assets/js/32.141ba189.js",
    "revision": "93609ee0f1f166463bf65d77edf91c52"
  },
  {
    "url": "assets/js/33.beb0344d.js",
    "revision": "d9c5c6f442b0eaea809b67098ad4fe35"
  },
  {
    "url": "assets/js/34.5bff5397.js",
    "revision": "822bd5a9e9117f16083b9e1b2caf141d"
  },
  {
    "url": "assets/js/35.f5adaa82.js",
    "revision": "61bd56010d9cfbc5fc7ee8a08fe70ce4"
  },
  {
    "url": "assets/js/36.b72529b4.js",
    "revision": "4d1f6d296f9183a61292f5fda9732da0"
  },
  {
    "url": "assets/js/37.b6d35a94.js",
    "revision": "18533a10f01e62ebfe2ec6432dc15edb"
  },
  {
    "url": "assets/js/38.a2f7385e.js",
    "revision": "64d9d001cfe34d101c556a537b053a2f"
  },
  {
    "url": "assets/js/39.30b8f961.js",
    "revision": "8e1ffc5c030647a45544923c51a4dfb6"
  },
  {
    "url": "assets/js/4.e89b330f.js",
    "revision": "eb21b029c1b875d371b9a2c50b4c38b1"
  },
  {
    "url": "assets/js/40.4f57123f.js",
    "revision": "c57d7ffd11c9a47f20861491faeb278e"
  },
  {
    "url": "assets/js/41.338b4ad9.js",
    "revision": "d6264436f855341432693774829d6e0d"
  },
  {
    "url": "assets/js/42.b87842d4.js",
    "revision": "6c9af6c9d4ed3038ebec777930ea765c"
  },
  {
    "url": "assets/js/43.266acc23.js",
    "revision": "412d5c5449f49745d59ba949630cfb7c"
  },
  {
    "url": "assets/js/44.d3f89e1b.js",
    "revision": "72907f2984316150bec8cd87a5ed77a5"
  },
  {
    "url": "assets/js/45.91b53e6e.js",
    "revision": "3d227ffb9bea84e6c317f91c907178ee"
  },
  {
    "url": "assets/js/46.b138d845.js",
    "revision": "3c62f2d6503628472796a3fbe3fe3176"
  },
  {
    "url": "assets/js/47.91a33613.js",
    "revision": "87f787543ad34f7e4b37a6b2da56a89d"
  },
  {
    "url": "assets/js/48.5c33fcf4.js",
    "revision": "0c2f104d01e8412e206b490a9b45829d"
  },
  {
    "url": "assets/js/49.5d007593.js",
    "revision": "b30cc79a1161ab826b87faaf338c7a82"
  },
  {
    "url": "assets/js/5.67b769d1.js",
    "revision": "2acdba6281bdb04040609d40af40d198"
  },
  {
    "url": "assets/js/50.a5dad8a4.js",
    "revision": "981e7cb2b2d3cba15a283a6e53a4dd0c"
  },
  {
    "url": "assets/js/51.300960ea.js",
    "revision": "383847cd3ede4a323046aa0594adff53"
  },
  {
    "url": "assets/js/52.f1564b05.js",
    "revision": "7c88cf629e9643a62e2f43f1363a15f4"
  },
  {
    "url": "assets/js/53.a211feb1.js",
    "revision": "5a6c27ff6dae1bae4fc22b0986a2f843"
  },
  {
    "url": "assets/js/54.b35a8ceb.js",
    "revision": "eb7ee929567da09cc75b237d6377b230"
  },
  {
    "url": "assets/js/55.088f71ca.js",
    "revision": "8c0dfbe0ca83a4d42ea4032f549ecee7"
  },
  {
    "url": "assets/js/56.b7fb1e1b.js",
    "revision": "1ab4d95c190dfce9cb63477f7e5fa46e"
  },
  {
    "url": "assets/js/57.5c7a0c97.js",
    "revision": "276ef9c734259ee8dd3c3a0652c4eec8"
  },
  {
    "url": "assets/js/58.039f3d44.js",
    "revision": "7186e4a70f3a83e0c5b108a7a340b9f9"
  },
  {
    "url": "assets/js/59.c60a50e5.js",
    "revision": "c1681f205c60ccb8fb3876ccd7e19149"
  },
  {
    "url": "assets/js/6.087f4328.js",
    "revision": "c92d9f02e4449796455ef54c55c46903"
  },
  {
    "url": "assets/js/60.5e1ba16e.js",
    "revision": "29724187c700add67467330cc461da72"
  },
  {
    "url": "assets/js/61.c316274f.js",
    "revision": "727356c89cd48aa4e011ad575681cf37"
  },
  {
    "url": "assets/js/62.23cb9749.js",
    "revision": "be279ce781a8db157d33df7ca4af386c"
  },
  {
    "url": "assets/js/63.fe3ed7d3.js",
    "revision": "f94f9aacc5cc1a7d95b25814fbd316e5"
  },
  {
    "url": "assets/js/64.e26e7132.js",
    "revision": "19e6a700d0671d9482e24f835afd4e8c"
  },
  {
    "url": "assets/js/65.592392a7.js",
    "revision": "812137928cb9135270ad7010b4a4111a"
  },
  {
    "url": "assets/js/66.df71d22f.js",
    "revision": "e3c79387bb126ee33ebe48041364694c"
  },
  {
    "url": "assets/js/67.4dc84a2a.js",
    "revision": "a2f56ca53aeebbf6fdb54569dfdb5f26"
  },
  {
    "url": "assets/js/68.0ca40274.js",
    "revision": "18103a2ff1975d3d2c16facbd3729ac2"
  },
  {
    "url": "assets/js/69.707675a3.js",
    "revision": "35a90f009c9f8dcf9359f1196d53e135"
  },
  {
    "url": "assets/js/7.df868921.js",
    "revision": "a04e188816e618f4ef997763052f19ea"
  },
  {
    "url": "assets/js/70.44f53d84.js",
    "revision": "d01ec024248e506dd5cb6093ee76c45f"
  },
  {
    "url": "assets/js/71.d95da6ea.js",
    "revision": "619369f4bf036b1a6f4d5096fdcfe637"
  },
  {
    "url": "assets/js/72.50b22961.js",
    "revision": "5cab4e661337743821df5ca7e8d21f82"
  },
  {
    "url": "assets/js/73.6b656212.js",
    "revision": "7ad411844ffca166861c405261ae67de"
  },
  {
    "url": "assets/js/74.01edb650.js",
    "revision": "4626a8b6a0ea730d7605baddce16433a"
  },
  {
    "url": "assets/js/75.829ec0ee.js",
    "revision": "56a57f8877d04fb2f3ca884d139b7e20"
  },
  {
    "url": "assets/js/76.706e9b0b.js",
    "revision": "1f88acafc3fa487846dcb6a0f4ad24d6"
  },
  {
    "url": "assets/js/77.8683e762.js",
    "revision": "2be0f2b7ea90405d21637f844ee58dda"
  },
  {
    "url": "assets/js/78.e43faf65.js",
    "revision": "bb57353368b92e897b8acd300a45a23e"
  },
  {
    "url": "assets/js/79.be8be5ca.js",
    "revision": "427b494087bcae986aa1ab3235fb5b49"
  },
  {
    "url": "assets/js/8.65a8e296.js",
    "revision": "d0d95f5d2bdd14a6d2d806135360e1bb"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.ae88d30e.js",
    "revision": "543b9ed2c86e0dc83b25e91d7b1f946c"
  },
  {
    "url": "assets/js/app.41e59225.js",
    "revision": "746992a0e53628e65f263ac67b190ec2"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "45127b47981578c79a3232a12b82aa67"
  },
  {
    "url": "cs/bash.html",
    "revision": "f5b5b9cfae213795f920f011d78e5404"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "2fe0795c7e02bdc619365fcb964432e3"
  },
  {
    "url": "cs/cmake.html",
    "revision": "b89232da7bb2c7bdb7c8a574b99b7e2c"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "42c5860170f91a2142a972e94637242b"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "4bf79e292c48cbfa6b15390528c05a6f"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "00ee37f995e98967725a4bff2318db83"
  },
  {
    "url": "cs/git.html",
    "revision": "b1c6e34bd21f077d58193f6d97832fe9"
  },
  {
    "url": "cs/index.html",
    "revision": "954a48c0a0496a300928f64d91e4033f"
  },
  {
    "url": "cs/keras.html",
    "revision": "6be3796c8f5229bb8884b88dc43b1c0f"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "f9e514a1ee938f91a18989051f433531"
  },
  {
    "url": "cs/lwip.html",
    "revision": "a9f3ba2980521f7e0e2d23dffaf7062e"
  },
  {
    "url": "cs/scala.html",
    "revision": "1cf69261c4ac546798181144799bfa1f"
  },
  {
    "url": "ee/about.html",
    "revision": "4f5e49871279e5855c967297bb6a48d1"
  },
  {
    "url": "ee/chisel.html",
    "revision": "a7e11f80f343e678d1fdad55f19750b7"
  },
  {
    "url": "ee/esp32.html",
    "revision": "d689419b61cecda6cb3360f90e3c4405"
  },
  {
    "url": "ee/index.html",
    "revision": "1efb22ef03d53ee3e5c3398b1cfe2bf0"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "7e5c80fe910d02b4b24b1e0a9462e03d"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "bd41d8092cfc9f45f41a6c1356cbd9c7"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "7375675f1fbc6b006def5d275939085d"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "934329777765109f3b7cfd72fece7180"
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
    "url": "images/cs/computer_composition/PC_counter.jpg",
    "revision": "1ed21092022057ed192a7d9aff76144c"
  },
  {
    "url": "images/cs/computer_composition/plt_got_table.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
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
    "revision": "e83c63d32f90f980ff9faeb22c83963c"
  },
  {
    "url": "others/about.html",
    "revision": "c8cfc755df2c8e7d76a1b2286d405bf4"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "7966c1f5495e775d7f4208e8dd2134df"
  },
  {
    "url": "others/android-studio.html",
    "revision": "afc2c1a0980f3da5f321979a2fda81da"
  },
  {
    "url": "others/android.html",
    "revision": "065c553a0a37d80f8b494cec97084f1f"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "877ee4a3297c233842ecbf9a64a3c15f"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "4b787c2902609f3665fd29c34595c8b5"
  },
  {
    "url": "others/css.html",
    "revision": "62486e60cda650a951ed50157fb7e135"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "3bec2f410a30886ad13a37e8e33398c5"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "bff91ec738b6d870ebd4017a21146391"
  },
  {
    "url": "others/english-writting.html",
    "revision": "7a436834cb6181d5cbb4bc824aa0758d"
  },
  {
    "url": "others/freertos.html",
    "revision": "7beda84f2996d8cd9291aaf153fcfb67"
  },
  {
    "url": "others/gns3.html",
    "revision": "ab115aece9575140093c8bf29c1c3049"
  },
  {
    "url": "others/gps.html",
    "revision": "5b1bc6d0ab84fc04c32d455fc22a2467"
  },
  {
    "url": "others/html5.html",
    "revision": "49a1ee9572aa7ea2a55c0a7fa10901e8"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "e130714947280dc26ea5a504d9bd163b"
  },
  {
    "url": "others/index.html",
    "revision": "9f5c17224aaf86a84ae0bf5a57b4ef9c"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "f5753755a22d64afafb025619ff30ad2"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "186a36e7b949fe2e36e104a41af0180e"
  },
  {
    "url": "others/javascript.html",
    "revision": "3402352c0e8f93a7438b9e8a0ae68e13"
  },
  {
    "url": "others/json.html",
    "revision": "beae80f8da40d60f4acb3143dcf28079"
  },
  {
    "url": "others/latex.html",
    "revision": "84f0cddf1b580ce5f24ea9c44b875918"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "935f4d2859f2376afd3825f4379f371c"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "6e806365faa646665afec22dd3f03a96"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "7260a4889e7e96c92d323bf4d467ebbf"
  },
  {
    "url": "others/markdown.html",
    "revision": "1024357de05167b27582a224b5455ee7"
  },
  {
    "url": "others/matlab.html",
    "revision": "cb7246ff4f4c3d6fab367e80f234588b"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "f90597d82b0c01a161f7d02d6c55bb77"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "af2aa88f47daf02bd571255ebac51115"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "3f74a0a9d1c6b3067a3869d0821f6046"
  },
  {
    "url": "others/network-security.html",
    "revision": "36b073f31bea1faacf0436c5629a94df"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "49dff13d2bc16a8e9df4b148c7f8dec3"
  },
  {
    "url": "others/oral_english.html",
    "revision": "4f854bc349c98d178d22b7df971aa32e"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "2999717201947b11c1d8fb9519ccf83d"
  },
  {
    "url": "others/poe.html",
    "revision": "1706372c65f4231ae37a39469ebd1ac0"
  },
  {
    "url": "others/pyside2.html",
    "revision": "1a754f0337dc390b1c2cf24c3b421b87"
  },
  {
    "url": "others/python-socket.html",
    "revision": "b2850b28ef03df73c166c7ce1947b88c"
  },
  {
    "url": "others/python.html",
    "revision": "9c0f06ecd142c17c231e7fca209d9540"
  },
  {
    "url": "others/q-learning.html",
    "revision": "793f5c393de408b84c6a3f986e4fc710"
  },
  {
    "url": "others/qr-code.html",
    "revision": "61f109e54e3fc2ec898f1484f906ee6a"
  },
  {
    "url": "others/qt4.html",
    "revision": "ccc2fe303a03e776d4ab385da50e15c6"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "a0e81ede59054053b65894574c0a1f50"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "8d079d8093ec428abe38b688d49e9239"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "9d12f743f02dd8ed938e47b4dd04f4c0"
  },
  {
    "url": "others/sd-card.html",
    "revision": "19fd27fc4d975ab4ccd4cb028b13e8eb"
  },
  {
    "url": "others/sdn.html",
    "revision": "5d397d3e97cd12732ed656acb527b2d1"
  },
  {
    "url": "others/star-uml.html",
    "revision": "69e4354842f76ba66189804929fde50a"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "0c4781fffd5d4b4280a922b3efd76b45"
  },
  {
    "url": "others/verilog.html",
    "revision": "8665aa04a34606b25f4e9dae4e1dae18"
  },
  {
    "url": "others/vue.html",
    "revision": "ab304a9b8c4a1453428f0ed44bf86538"
  },
  {
    "url": "others/w5500.html",
    "revision": "1f247239d1aa7174bf072ecd665c3689"
  },
  {
    "url": "others/w7500.html",
    "revision": "43d70263a362d296f52e7d2c89832979"
  },
  {
    "url": "resume.html",
    "revision": "458d2c04da428ab7ca42593db90181dc"
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
