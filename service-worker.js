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
    "revision": "ca87e7cf0ca32bc3555534f1c980d40e"
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
    "url": "assets/img/peripheral_clock.329fd309.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
  },
  {
    "url": "assets/img/plt_got_table.1144d3a2.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
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
    "url": "assets/js/10.24b66217.js",
    "revision": "4a309e95a7c14f4630e7c293196ded39"
  },
  {
    "url": "assets/js/11.8bca78d9.js",
    "revision": "aa880febfe9d00969ae0d95c78d6955a"
  },
  {
    "url": "assets/js/12.fdabd6f1.js",
    "revision": "b9c68d8bb27f95d1aeb8c1e355fc0e7e"
  },
  {
    "url": "assets/js/13.df6a4289.js",
    "revision": "0739798a83988a7e3c2f12674e8116e5"
  },
  {
    "url": "assets/js/14.ff34e727.js",
    "revision": "d27217ab725bb854599ad03a8790fa74"
  },
  {
    "url": "assets/js/15.222b65b9.js",
    "revision": "cdf132468294b89508e77192e80418c3"
  },
  {
    "url": "assets/js/16.82645542.js",
    "revision": "d5b0a1b9519d19f23d3b399bdccd99cc"
  },
  {
    "url": "assets/js/17.5a66786d.js",
    "revision": "6eec5ae9b310e00bf079e23350110067"
  },
  {
    "url": "assets/js/18.8861278c.js",
    "revision": "1724a489dca57d121dc595f4ac7f8513"
  },
  {
    "url": "assets/js/19.2ef66655.js",
    "revision": "a1a163ca436becc8b7b6b0807a966497"
  },
  {
    "url": "assets/js/2.12300d41.js",
    "revision": "442378371bddf5ec7c742bf525b2e501"
  },
  {
    "url": "assets/js/20.9e3e5a94.js",
    "revision": "63e9a0c917b4578d320363bdeb5a864b"
  },
  {
    "url": "assets/js/21.601e8ae3.js",
    "revision": "3a613231566d26dbb0a84453773f90ea"
  },
  {
    "url": "assets/js/22.8374dc10.js",
    "revision": "3a67882ad5eb03ae21d74a01cc57f0a7"
  },
  {
    "url": "assets/js/23.d8a345f4.js",
    "revision": "d57c373d2bf76be70ced73097c640157"
  },
  {
    "url": "assets/js/24.eaadfa84.js",
    "revision": "48bd6d6928edd027c3299d130e7aa932"
  },
  {
    "url": "assets/js/25.855ec040.js",
    "revision": "10a393fb338611bb42ebc325c1d43d43"
  },
  {
    "url": "assets/js/26.e7a7d937.js",
    "revision": "6dad7fd028ae66670c16a295d73f0dc8"
  },
  {
    "url": "assets/js/27.1f37b2bb.js",
    "revision": "fceda3d868a155d206d99d3aa8d1aadd"
  },
  {
    "url": "assets/js/28.6e70f90a.js",
    "revision": "38b17cc40d6b19ee1ef8c2b736a76398"
  },
  {
    "url": "assets/js/29.bac41daf.js",
    "revision": "a6fbd2ac0837cbb1a50311577db05db5"
  },
  {
    "url": "assets/js/3.a2af69eb.js",
    "revision": "5fc44d4305924e771916ccb326d58ce8"
  },
  {
    "url": "assets/js/30.d866e99a.js",
    "revision": "4fd3c528d79286bfc83f5aef29f1805b"
  },
  {
    "url": "assets/js/31.e09479b6.js",
    "revision": "93be63d78d345b722f4d7341a7dc37db"
  },
  {
    "url": "assets/js/32.014b8ee4.js",
    "revision": "ca8d93ff14f704730519741343f9e638"
  },
  {
    "url": "assets/js/33.53395043.js",
    "revision": "8e06262ccf91eda6acdb63b12d3f03e9"
  },
  {
    "url": "assets/js/34.8e188500.js",
    "revision": "27c69d376709ff9faa3969f45e2b254b"
  },
  {
    "url": "assets/js/35.39cf1bd8.js",
    "revision": "fb483dbe2f41d96bbeb3ca93750a3a9c"
  },
  {
    "url": "assets/js/36.f58cb35b.js",
    "revision": "412ac7112fb4c70b027c444e431e2ce3"
  },
  {
    "url": "assets/js/37.7c37a9b5.js",
    "revision": "387739e63a639e6f9d54317154e645c0"
  },
  {
    "url": "assets/js/38.81821122.js",
    "revision": "0f36aada25e2f302aa210b06f49860fe"
  },
  {
    "url": "assets/js/39.e630d51e.js",
    "revision": "d6e20dc057d24a9cf29d1087656430f1"
  },
  {
    "url": "assets/js/4.632b8e17.js",
    "revision": "0ec5fbd99438d20f3b65075d1a8e9af8"
  },
  {
    "url": "assets/js/40.3b08014b.js",
    "revision": "a88bb82c97ed5be0b6c91ef9c676d345"
  },
  {
    "url": "assets/js/41.4c6af416.js",
    "revision": "5ba8c3e3f61bb100e9898fff195734fe"
  },
  {
    "url": "assets/js/42.0b40a149.js",
    "revision": "ca0a26aed423eff2b9ee2014e8750abe"
  },
  {
    "url": "assets/js/43.99009198.js",
    "revision": "df9b6c1acde4537d59e3dbf5a5d01599"
  },
  {
    "url": "assets/js/44.4ba184f2.js",
    "revision": "8b1ad1815a9c079242d81dec6a828fb8"
  },
  {
    "url": "assets/js/45.11286c9a.js",
    "revision": "2bbe3162950518ffa6d7411820485625"
  },
  {
    "url": "assets/js/46.28bffd5b.js",
    "revision": "cead592f3b7935a42d340d1e42c9f235"
  },
  {
    "url": "assets/js/47.7316b2aa.js",
    "revision": "f19d86e1d9260459f76ad2d8c87c3c91"
  },
  {
    "url": "assets/js/48.cc8ad3ab.js",
    "revision": "73ef794475aff9413fd4b295fe69cd99"
  },
  {
    "url": "assets/js/49.41e628ab.js",
    "revision": "66c090acc24be54c8c71149dbaee1519"
  },
  {
    "url": "assets/js/5.5f291ae3.js",
    "revision": "4257829090c537835c8fb16d739727e0"
  },
  {
    "url": "assets/js/50.80ac2ae9.js",
    "revision": "4f47326956990ec1c35ba6225d539be4"
  },
  {
    "url": "assets/js/51.a50374b2.js",
    "revision": "8b675dfbe20049296c21a842d37cb83a"
  },
  {
    "url": "assets/js/52.6919b610.js",
    "revision": "626070000c4eb16cba7aa375c1dd18ea"
  },
  {
    "url": "assets/js/53.6dd5cf61.js",
    "revision": "f4524d565c5853ec370420e4569ff5ed"
  },
  {
    "url": "assets/js/54.f722a4e8.js",
    "revision": "a3d3ddf2053909525738d7fc3bf93523"
  },
  {
    "url": "assets/js/55.4b7d7b02.js",
    "revision": "fa8c4edb5f955af0df292525c2526f2b"
  },
  {
    "url": "assets/js/56.ef0b137e.js",
    "revision": "9e79a6d6b22adf2cf2ac721ab8f19b2e"
  },
  {
    "url": "assets/js/57.90dc8d18.js",
    "revision": "8271215fce3f9e80a7b39a2f8f264f8f"
  },
  {
    "url": "assets/js/58.e3ceda36.js",
    "revision": "1184fb5ccfb434245f905987af1e5a14"
  },
  {
    "url": "assets/js/59.4910df23.js",
    "revision": "dc997bce6a3b4c502c9dd1f0adf88b1e"
  },
  {
    "url": "assets/js/6.1f283e39.js",
    "revision": "aabedcb6e92439164d2f004c02a44182"
  },
  {
    "url": "assets/js/60.63a84952.js",
    "revision": "8e19c4ef31e23849df5fd4c12ebc451d"
  },
  {
    "url": "assets/js/61.7aba6b0c.js",
    "revision": "f6144a144c7380feb23805ac62fa6345"
  },
  {
    "url": "assets/js/62.5e35ac55.js",
    "revision": "ac77d49be1296f8920357505e668ab1d"
  },
  {
    "url": "assets/js/63.99821964.js",
    "revision": "dac1871797b670e6b1df99ef9ee25bd0"
  },
  {
    "url": "assets/js/64.b340584b.js",
    "revision": "359241af77073630f57ec06923c9112b"
  },
  {
    "url": "assets/js/65.2049bf75.js",
    "revision": "b040d24409c5ed29bd07070191f42a06"
  },
  {
    "url": "assets/js/66.3c92f41f.js",
    "revision": "d248573c766ff774d3d62560dc97e1d2"
  },
  {
    "url": "assets/js/67.d87d5cf0.js",
    "revision": "f799590fe1799957ededbdc7445b0519"
  },
  {
    "url": "assets/js/68.dcbf9d9b.js",
    "revision": "34e9155f108defc1eb312713ec34c52f"
  },
  {
    "url": "assets/js/69.48e3403d.js",
    "revision": "df3e8b044fc26f2df2c22a5ee8288c1a"
  },
  {
    "url": "assets/js/7.c30ca601.js",
    "revision": "81c5c36c4dd294d623ecdcc7fb7e8c69"
  },
  {
    "url": "assets/js/70.dc6d3013.js",
    "revision": "3fb4a1f0c1f1122bcc76cf1d5840aa9c"
  },
  {
    "url": "assets/js/71.2c6df269.js",
    "revision": "ed12e80f3e8227539988d274c610089c"
  },
  {
    "url": "assets/js/72.267363a3.js",
    "revision": "77ae7c0109973e188d8a3055f7ea5e7a"
  },
  {
    "url": "assets/js/73.fb6b677b.js",
    "revision": "38b534950244d00d8d6fb77fcc7638cc"
  },
  {
    "url": "assets/js/74.c62e3d38.js",
    "revision": "dabcf1c4e57e04e7dbc88ef9592b28c0"
  },
  {
    "url": "assets/js/75.075109bc.js",
    "revision": "bf1e6579b8746c75a06d6f8e90726f80"
  },
  {
    "url": "assets/js/76.99300a6e.js",
    "revision": "5568d0a5aa150f1f58760ffca27374a2"
  },
  {
    "url": "assets/js/77.91d1eed6.js",
    "revision": "02d4dad8a5468bfb14942fd1a9ec3772"
  },
  {
    "url": "assets/js/78.d5dcf927.js",
    "revision": "df9754dcf305f10710a6efc9eb9e845f"
  },
  {
    "url": "assets/js/79.eecc5140.js",
    "revision": "94773725e48226773b66f6d5d4886f9f"
  },
  {
    "url": "assets/js/8.094283f7.js",
    "revision": "2bfb7a7ad0b27f62d5769793e5942caf"
  },
  {
    "url": "assets/js/80.671f5ff4.js",
    "revision": "b677a7171f3944595455de48adcebf31"
  },
  {
    "url": "assets/js/9.e6f547a3.js",
    "revision": "318ba7b45ad40cfff224038a8ead2521"
  },
  {
    "url": "assets/js/app.3d74ee8b.js",
    "revision": "835d91c09ea2511e5849670e92efd8c8"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "6e22b679411c73f267b6b59cd21dbc96"
  },
  {
    "url": "cs/bash.html",
    "revision": "e99845716b189a639a832dccf2ee66bc"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "094cb1b4a0f8198ec6be82fbbde74aff"
  },
  {
    "url": "cs/cmake.html",
    "revision": "302e9b8f6944d64fa8e01ce90be52bd9"
  },
  {
    "url": "cs/computer_composition.html",
    "revision": "f9e7fc97ca84464c85d0ed102bb8720d"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "f48f31062252c2467464e488c48aa4c6"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "52e7f1b4a6678cf205bf15a15b70ead5"
  },
  {
    "url": "cs/git.html",
    "revision": "56c4ecf7e1cec82982a72ba031358f75"
  },
  {
    "url": "cs/index.html",
    "revision": "ad7e84245a834e4204c89b2646734f13"
  },
  {
    "url": "cs/keras.html",
    "revision": "e9f18bf1aa35b0667604c7b32e189484"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a4aea6762a5ff6850b8b24b803b94f3f"
  },
  {
    "url": "cs/lwip.html",
    "revision": "aea345e2eef93b5120563d3990b1b2f0"
  },
  {
    "url": "cs/scala.html",
    "revision": "f416b5cf9f7849c1d089f495d420e649"
  },
  {
    "url": "ee/about.html",
    "revision": "6e9fc2b778d2209c6399fd683c297706"
  },
  {
    "url": "ee/chisel.html",
    "revision": "c687140cf81ee59db0e894f29751328f"
  },
  {
    "url": "ee/esp32.html",
    "revision": "b2765c23b4aa0140186536efddad7f86"
  },
  {
    "url": "ee/index.html",
    "revision": "4c91f32c91d8ea332cb2310fb2824f94"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "73b716ab7f4e3e1fb1d835c8e8b9ba8d"
  },
  {
    "url": "ee/motor_control.html",
    "revision": "eacec9211ddee9fe0db949e5664cad4b"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "488c173d9eafbc27fee409763b04950c"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "725c5a6f86d1eb71caae968c6888db6a"
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
    "url": "images/cs/computer_composition/dynamic_link.jpeg",
    "revision": "8cab516a92fd3d7e951887808597094a"
  },
  {
    "url": "images/cs/computer_composition/elf_format.jpg",
    "revision": "276a740d0eabf5f4be905fe7326d9fb3"
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
    "url": "images/cs/computer_composition/plt_got_table.jpg",
    "revision": "1144d3a2d4f3f4f87c349a93429805c8"
  },
  {
    "url": "images/cs/computer_composition/sequent_multiply.jpg",
    "revision": "cb809de19088d08767279715f07482e9"
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
    "revision": "e7c22c1508516a68ea1a6fed653e346f"
  },
  {
    "url": "others/about.html",
    "revision": "29742d18520c217c9334a140c9212a6b"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "c3f652338323eae4656b0b8b61701aa0"
  },
  {
    "url": "others/android-studio.html",
    "revision": "c757ec38c0b9c61b3e35a4f417c06455"
  },
  {
    "url": "others/android.html",
    "revision": "895cf631d087f416a8ee1012e126e98d"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "dda0d7d27f6d450cc478a491e44c3fad"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "b86c92a2c8666ec9a2a791c61ac55f7a"
  },
  {
    "url": "others/css.html",
    "revision": "a0c1ae48b12540ef2f3c6e93fbf61d15"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "5f604b455f2a205f13126393808884c5"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "40607611a7ece667f675f5ebb8812506"
  },
  {
    "url": "others/english-writting.html",
    "revision": "7f23fefaf2085e46909cabadab4527c4"
  },
  {
    "url": "others/freertos.html",
    "revision": "2744182fbd0659543161671f90353746"
  },
  {
    "url": "others/gns3.html",
    "revision": "0db1912bbb2f4dfab86a0a9bc40af7de"
  },
  {
    "url": "others/gps.html",
    "revision": "338b158ece347e678f5ed90a401e86eb"
  },
  {
    "url": "others/html5.html",
    "revision": "4b2b7e7a093f59ad73baa0c4d32338fe"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "9f4f880d2b2788397f054767745319f5"
  },
  {
    "url": "others/index.html",
    "revision": "e66ee2770dabed022e39676a0e659ac4"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "07809f9843f581ef6c65ac5a93749799"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "6b732f5ca0f92a8b4cfb2f7723cffb34"
  },
  {
    "url": "others/javascript.html",
    "revision": "0f17e4d31eb41d05cf992770bcaf6bf2"
  },
  {
    "url": "others/json.html",
    "revision": "b7bdb48f9bf84f4b12f106d671cf3c4c"
  },
  {
    "url": "others/latex.html",
    "revision": "1affa693b7d1a2a440cde2ddbfb885c6"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "3e8dcf7989cd0db47e203d8dd2adeccc"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "324d2ce20db3e886fa0901191da90335"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "0805bd9a179d32d3bbd5efcb9f4af26d"
  },
  {
    "url": "others/markdown.html",
    "revision": "b7e586a44bdcb161d13f2bf65e90abdf"
  },
  {
    "url": "others/matlab.html",
    "revision": "a9cf11b37a162292ed975f6e5d774507"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "33854b500921ce2b2eda88cc64528e71"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "d96662ea8ed060f0b10878d46f45ab05"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "a5dae654ff9e05bef86334628d3e25fe"
  },
  {
    "url": "others/network-security.html",
    "revision": "fd0954d8c3ec21b84aabcac4ac03801e"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "32677142a4000911ac17a5136cdfcded"
  },
  {
    "url": "others/oral_english.html",
    "revision": "cea5bd0e0bfa9e374f45d7a36bd457fc"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "e02b9d7006be38f76c040d4d6c63de7a"
  },
  {
    "url": "others/poe.html",
    "revision": "aa84b16be7ddfd79223ecfd0be2198ed"
  },
  {
    "url": "others/pyside2.html",
    "revision": "b0eea9bae3e2f3aa6827be297dd87c3c"
  },
  {
    "url": "others/python-socket.html",
    "revision": "5a6b80bdbb4b611d80e6e1aa0ba371ec"
  },
  {
    "url": "others/python.html",
    "revision": "d8e6db3694b099374e3762320b277e12"
  },
  {
    "url": "others/q-learning.html",
    "revision": "c22b43cd922d9530a625c01e10f6287b"
  },
  {
    "url": "others/qr-code.html",
    "revision": "2fa3c0c09e600dfc2aae2f7c0a914b2f"
  },
  {
    "url": "others/qt4.html",
    "revision": "5d43c64ba3e9f0991c8575c7063b085f"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "5bf8d39c203e275034638754643c9a13"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "c34c7f99584de6ba278de15fafbbf55e"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "9ec9e34c2de28a37b82e46b1e21cbef9"
  },
  {
    "url": "others/sd-card.html",
    "revision": "e74549890444d46b9d070b63cb4e785b"
  },
  {
    "url": "others/sdn.html",
    "revision": "78d415c8e13f8f51ec6ff4c639afaf25"
  },
  {
    "url": "others/star-uml.html",
    "revision": "9b23b6ece508986fc9f170eda7319615"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "bcae0d2140664997b6bfdd9a1e4b4610"
  },
  {
    "url": "others/verilog.html",
    "revision": "b944b3087dd1ae2925578b409d21f317"
  },
  {
    "url": "others/vue.html",
    "revision": "068910ab42d6515f749dc63206b046c0"
  },
  {
    "url": "others/w5500.html",
    "revision": "4100d224cc75bd11350643c81201d736"
  },
  {
    "url": "others/w7500.html",
    "revision": "28c404004fa0eb828d31babf84bebd44"
  },
  {
    "url": "resume.html",
    "revision": "eef6c8142dfeab0ed56649967f36bbe0"
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
