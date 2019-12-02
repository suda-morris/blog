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
    "revision": "ea639214e94f59fad6fbf421b6d2fe6d"
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
    "url": "assets/img/arp_protocol.6e6dab0f.png",
    "revision": "6e6dab0fff2514677894612462c709ce"
  },
  {
    "url": "assets/img/cache_system.0bb68b0b.png",
    "revision": "0bb68b0bcda593888a0cc797d1735ab5"
  },
  {
    "url": "assets/img/cpu_core_system.99c3127b.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
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
    "url": "assets/img/gpio_matrix.0bccff5a.png",
    "revision": "0bccff5a741106393e63ab66db51fb45"
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
    "url": "assets/img/linear_regression.d67e8d49.png",
    "revision": "d67e8d496f872612aa62e02e4a2bcbaa"
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
    "url": "assets/img/sbt_jvm_options.53a2af9f.png",
    "revision": "53a2af9fa1316b81595ea40f95af4685"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
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
    "url": "assets/js/10.e68898b2.js",
    "revision": "e3486813c3eff2cdae4633f31feb35b5"
  },
  {
    "url": "assets/js/11.d7402d23.js",
    "revision": "43869a258a50bc031c6576e857b611f0"
  },
  {
    "url": "assets/js/12.742c1902.js",
    "revision": "676394d5ec0033a01ebc9704e2fa0305"
  },
  {
    "url": "assets/js/13.0adef9ee.js",
    "revision": "aea551df5c8e6a19ee3de98a35f34f1e"
  },
  {
    "url": "assets/js/14.0c92822d.js",
    "revision": "9bb1670404ad15dc82a9d8cdef179246"
  },
  {
    "url": "assets/js/15.d332a181.js",
    "revision": "9049ec2f24856fde9b318bce216d1a84"
  },
  {
    "url": "assets/js/16.da73c199.js",
    "revision": "d88b097d3e95d1ff9312949b4555f624"
  },
  {
    "url": "assets/js/17.773fb2cc.js",
    "revision": "d8e6de09164eed73aeda3942d446d730"
  },
  {
    "url": "assets/js/18.df628010.js",
    "revision": "a137b2e934f904f31cae5f884faffaa6"
  },
  {
    "url": "assets/js/19.4e665847.js",
    "revision": "8ae7b74f67f7a691f65eecaa68ec06c2"
  },
  {
    "url": "assets/js/2.1a027f0a.js",
    "revision": "d6bd0ee40b5469b30a4ae21987d2e3f4"
  },
  {
    "url": "assets/js/20.f64d4faf.js",
    "revision": "4451b118b2f0a736dbccd5c8e0373236"
  },
  {
    "url": "assets/js/21.23559975.js",
    "revision": "c096dbd0096be824d14f3dde64f74128"
  },
  {
    "url": "assets/js/22.eb466fb7.js",
    "revision": "9674185d64eb0e314945719c34e1ba44"
  },
  {
    "url": "assets/js/23.a2d57c11.js",
    "revision": "5dee7411b84d40010866a438c9e7c37f"
  },
  {
    "url": "assets/js/24.c4c6e6b7.js",
    "revision": "09004f2021a7477033a9c2437e28308b"
  },
  {
    "url": "assets/js/25.1b700abd.js",
    "revision": "0cd015787a1f6abad250b468c3101033"
  },
  {
    "url": "assets/js/26.77b1085a.js",
    "revision": "c18f005c551f74131a7a0772ef6f45e4"
  },
  {
    "url": "assets/js/27.706a67bd.js",
    "revision": "2591565a01d0c82d7097fda727a1a436"
  },
  {
    "url": "assets/js/28.18efb487.js",
    "revision": "7911a870fbcf21565478146ce932d2c2"
  },
  {
    "url": "assets/js/29.a19b494c.js",
    "revision": "94e83d2e12c3f7e8fc1ca7e4f6f128f7"
  },
  {
    "url": "assets/js/3.598115c9.js",
    "revision": "8a73eb414e83c233ebb5bc3f6043da87"
  },
  {
    "url": "assets/js/30.18dc0b8a.js",
    "revision": "9a8eb65c913c37d2cc90b00581149c76"
  },
  {
    "url": "assets/js/31.e4b06bf5.js",
    "revision": "d3f920d435f34bb7b63accd20caa5ac0"
  },
  {
    "url": "assets/js/32.90a63d4f.js",
    "revision": "31efb99d620222c1cb843d7c80b60757"
  },
  {
    "url": "assets/js/33.89597334.js",
    "revision": "57ae8d96f9a5a747b99df0a9868c1a06"
  },
  {
    "url": "assets/js/34.e9fd6de1.js",
    "revision": "c4774ca484f202b652b7b7557e02c673"
  },
  {
    "url": "assets/js/35.60dea2cf.js",
    "revision": "8f86b3412ebf20aa7a9325c7be35c8c4"
  },
  {
    "url": "assets/js/36.f774eb39.js",
    "revision": "f064800793a013364e11393bfefb97b2"
  },
  {
    "url": "assets/js/37.1dda64d7.js",
    "revision": "25d01a361720653aa0a993f5a18f857e"
  },
  {
    "url": "assets/js/38.53d0792c.js",
    "revision": "e4f4a86569305f249458f8352c928528"
  },
  {
    "url": "assets/js/39.984da496.js",
    "revision": "8a3e2263d0dc5bf1cfe95bfd082481b9"
  },
  {
    "url": "assets/js/4.b70783e2.js",
    "revision": "0db94073c45f42802bf301cad48b2a7e"
  },
  {
    "url": "assets/js/40.e5d7063a.js",
    "revision": "1583c499d7e9f7f0c336dda73296f7f8"
  },
  {
    "url": "assets/js/41.d0881c33.js",
    "revision": "7adcc2318495fbdc9a721bfb5dc417e4"
  },
  {
    "url": "assets/js/42.1dc93d87.js",
    "revision": "308551737500fb600bb33abc697e5ad7"
  },
  {
    "url": "assets/js/43.0280ba31.js",
    "revision": "899330bd091c66e1ecee4fe193314c0c"
  },
  {
    "url": "assets/js/44.66ee8525.js",
    "revision": "80a192653f40b1f9e71a98a97ae86c83"
  },
  {
    "url": "assets/js/45.faa59422.js",
    "revision": "5d40cce6e7fcaad94a3f29e19ff218e9"
  },
  {
    "url": "assets/js/46.e83df08c.js",
    "revision": "2c9741d79509d94058665160fa8fa5a2"
  },
  {
    "url": "assets/js/47.11d89779.js",
    "revision": "1119c9bb2acc3c117efa63b2070ea7dd"
  },
  {
    "url": "assets/js/48.5189a5ba.js",
    "revision": "de87d47428e75d397129efb8548da57a"
  },
  {
    "url": "assets/js/49.0d4693f8.js",
    "revision": "1496ce85ad1ec43d75cd99b94d8b8b27"
  },
  {
    "url": "assets/js/5.f2241e6a.js",
    "revision": "201e85b8344aa10923c6d44365004080"
  },
  {
    "url": "assets/js/50.14ee2537.js",
    "revision": "b7ae2e106ce7a7e02d576f3195d567f2"
  },
  {
    "url": "assets/js/51.9cb380ec.js",
    "revision": "058602f5c0e3bbcdafff5ba8965c3b4c"
  },
  {
    "url": "assets/js/52.a0e161fe.js",
    "revision": "fd35ec854c4000c4291434b8d1d85b63"
  },
  {
    "url": "assets/js/53.3c46721b.js",
    "revision": "5a3e511e1ab68066bf31c64a55aed7fb"
  },
  {
    "url": "assets/js/54.aace3cf4.js",
    "revision": "26c8d094a0b019632891c585c20d5f83"
  },
  {
    "url": "assets/js/55.6cd190b6.js",
    "revision": "d4b757f183b8e843eba336fcf7a63fa8"
  },
  {
    "url": "assets/js/56.913e2dd5.js",
    "revision": "78814fca546d555c5feac20d7ef2814a"
  },
  {
    "url": "assets/js/57.7da0d3bf.js",
    "revision": "6601238b6db761ab90dba7fd8aad0b14"
  },
  {
    "url": "assets/js/58.400e61f1.js",
    "revision": "50d6cdb1195c6d051d1981400bdba869"
  },
  {
    "url": "assets/js/59.6241a146.js",
    "revision": "2371e8c7f4d8c6c5adfdc9a683f99f2b"
  },
  {
    "url": "assets/js/6.ee2d1ab7.js",
    "revision": "dba534de211aec337d1697d5f5f2a3eb"
  },
  {
    "url": "assets/js/60.da0e75a3.js",
    "revision": "6785f355d630320e872de532375aaec8"
  },
  {
    "url": "assets/js/61.bdc9972a.js",
    "revision": "12bdd8e6778c4c7ca7090f880917f887"
  },
  {
    "url": "assets/js/62.a59e7845.js",
    "revision": "570f1cf96ec16e870fab1fa30efe1009"
  },
  {
    "url": "assets/js/63.51c314df.js",
    "revision": "3fa1a54043d4e09cfdf0b3dce7a5e26c"
  },
  {
    "url": "assets/js/64.fd1c34ad.js",
    "revision": "5de7ad9e154eb586183cbf65e4f254e2"
  },
  {
    "url": "assets/js/65.167a7adc.js",
    "revision": "f134f393580fd4cebfdafcb419495612"
  },
  {
    "url": "assets/js/66.6700145a.js",
    "revision": "2ca039422580d98c1201709db334f900"
  },
  {
    "url": "assets/js/67.83f26a05.js",
    "revision": "7b73695eddc6aca2c3218aa6900dee31"
  },
  {
    "url": "assets/js/68.0bb367b3.js",
    "revision": "3b2d1b6cc335494263dde464f0ed4fa1"
  },
  {
    "url": "assets/js/69.5a4468bb.js",
    "revision": "66cfbae8196431e2d375e9cbd9386ebd"
  },
  {
    "url": "assets/js/7.5170a724.js",
    "revision": "3e273a3d3cbcfdf8410acf5069525b8a"
  },
  {
    "url": "assets/js/70.42c69b06.js",
    "revision": "d3b06d70aa83fb7018be3dadeab7f3eb"
  },
  {
    "url": "assets/js/71.6f355f33.js",
    "revision": "f31a004fafcb7dcfa5bc05aa2dd168cc"
  },
  {
    "url": "assets/js/72.e012cdd8.js",
    "revision": "23135bda4edb972f8aff9edbcd1db6b1"
  },
  {
    "url": "assets/js/73.d51476dc.js",
    "revision": "fd09dcff6e707bd1d79cf01d67ad1b9e"
  },
  {
    "url": "assets/js/74.ef722653.js",
    "revision": "05ce84b2969577fab2a6e6781a09536b"
  },
  {
    "url": "assets/js/75.8d5f3753.js",
    "revision": "5c2e1949dcb6e4c22bf5b2fc936a8afc"
  },
  {
    "url": "assets/js/76.25e5ff33.js",
    "revision": "1e9683fe193959a7418a080e5edb9d40"
  },
  {
    "url": "assets/js/77.3db55d0a.js",
    "revision": "cc6ac77cdbb8d5cc05bd7f6b602661d7"
  },
  {
    "url": "assets/js/78.7166e7dc.js",
    "revision": "ef04886e3d352ce2bffdac66ac3cfefd"
  },
  {
    "url": "assets/js/79.030ab260.js",
    "revision": "8d8ac292cf6fcb1bbdadff6a26d448b9"
  },
  {
    "url": "assets/js/8.32c08b55.js",
    "revision": "03c890ee18cabf3496b669751957cc5b"
  },
  {
    "url": "assets/js/9.809bb007.js",
    "revision": "25bcd91cb8f37b3646f025d8991a0f22"
  },
  {
    "url": "assets/js/app.7a9bb27c.js",
    "revision": "33e0dcdf0d7382b989c4d821a9fde114"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "15059acad28fca92ef23764838592f5f"
  },
  {
    "url": "cs/bash.html",
    "revision": "f2707b3b1e347a5547a852a491481fd9"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "49a205c1dcb267ac115ae2f35f29d4f7"
  },
  {
    "url": "cs/cmake.html",
    "revision": "f6d2d5cdde4979528edb210f8cb8a513"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "669f03811ff56e13e859224dd460a119"
  },
  {
    "url": "cs/gcc_toolchains.html",
    "revision": "0d434a81134aaea2fe455fd2690fabfe"
  },
  {
    "url": "cs/git.html",
    "revision": "8967bd9702d951c6ffce3f5aabb91829"
  },
  {
    "url": "cs/index.html",
    "revision": "2df4b2098efc4daf1d6e932384c7d048"
  },
  {
    "url": "cs/keras.html",
    "revision": "f8f283dd87feedca2bc800e20d096354"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "c36d9ce353fbe807add652fab10a5c8f"
  },
  {
    "url": "cs/lwip.html",
    "revision": "b78e493da92ff8f5d3d41bd1ab1f1f4c"
  },
  {
    "url": "cs/scala.html",
    "revision": "46e557daf7027fdab2cc8f9ab4296596"
  },
  {
    "url": "ee/about.html",
    "revision": "2bca4120d9eb3488de5feb2260064c36"
  },
  {
    "url": "ee/chisel.html",
    "revision": "ea8eb8a6e2f9dc8aef21ceb911e72a0f"
  },
  {
    "url": "ee/esp32.html",
    "revision": "53c7815a86c3baf874166c2648bd7de4"
  },
  {
    "url": "ee/index.html",
    "revision": "302cd210cfa1ac9994c4ff533bf1a090"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "005437243f32b7c3ec07470d76a24bdf"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "ab8d31e1af2750c3a662e9eac7c55336"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "3544456ef6896e916dcc67681f72bddf"
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
    "revision": "bdb74865fc98df3aa57a2b4c08ebf709"
  },
  {
    "url": "others/about.html",
    "revision": "3dd4b1d65e63b0b5d3ad3a1e2b8e6435"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "072641b88557e742857394f0e23750ea"
  },
  {
    "url": "others/android-studio.html",
    "revision": "3ed3de1095f9eabcdae2793bcd02c462"
  },
  {
    "url": "others/android.html",
    "revision": "fcc3009fcc774275860924bd0de13aa1"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "a5ae365b1a77d16e1e2a9fff53781390"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "ee21a57858bd35668eec2ef3c72b3f56"
  },
  {
    "url": "others/css.html",
    "revision": "61614c25d6f2925b63a569913e1dc35d"
  },
  {
    "url": "others/docker.html",
    "revision": "1c0ee4461280b75b1c5996e81c9ce098"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "1781fa4b46e1cb81bb5a98977449d67b"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "20c22980d4ec3811794e9ad056b52ce1"
  },
  {
    "url": "others/english-writting.html",
    "revision": "15fa02665d10ce59b6e432916575143f"
  },
  {
    "url": "others/freertos.html",
    "revision": "9d6a828ee64458fc3f288ed8f0bf3295"
  },
  {
    "url": "others/gns3.html",
    "revision": "d829044f8d601b415ec0782b00357243"
  },
  {
    "url": "others/gps.html",
    "revision": "784c4e558005f26da0f11938338024a0"
  },
  {
    "url": "others/html5.html",
    "revision": "48457e7d5303ede0f027a13915a721e1"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "d94bcb4fd197371239d64536e291c2e4"
  },
  {
    "url": "others/index.html",
    "revision": "3a569fa4382bcc040a7f2cf47031a137"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "190fdf75cda174767d0fcff4df847d27"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "82e62a8e80333ff554b9ca0ce1bffd04"
  },
  {
    "url": "others/javascript.html",
    "revision": "f81a54e37c38f3ffabbd660148f35bea"
  },
  {
    "url": "others/json.html",
    "revision": "05145447f274a8bbfb3fa3d2617ffefa"
  },
  {
    "url": "others/latex.html",
    "revision": "ab4c9a278f656dd60a938ce3f34e9b3c"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "43edfe49f5f37ff644ddce7a6c0ffd0e"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "9a188ffc166ba11c4b1d1b71f3e7a921"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "6ce23170c0250cfb1ed9738837ed9a81"
  },
  {
    "url": "others/markdown.html",
    "revision": "4899d8ae3090cc7bf52b4a01c712d1fa"
  },
  {
    "url": "others/matlab.html",
    "revision": "a7f9377d1c9bb4f4536cc32b1d30f27f"
  },
  {
    "url": "others/mdp-template.html",
    "revision": "18038811461660d449545ae042d872bd"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "ca7e74243269a82207bb847ac065ba8c"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "bdcb15e9d9ca7e39439571dcdbd623d6"
  },
  {
    "url": "others/network-security.html",
    "revision": "831e5ca3b862263c2d1069ea4b6a6933"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "501c5f260a1f70996f9d4db2605e6938"
  },
  {
    "url": "others/oral_english.html",
    "revision": "c81fb27012d0e7023934ee58915cc0d3"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "236678aba5fc9433db4b96a2e5fb0150"
  },
  {
    "url": "others/poe.html",
    "revision": "ed34ea0a474057e1f312fd0ef51da036"
  },
  {
    "url": "others/pyside2.html",
    "revision": "782be07d94825df9626599d98a4033f4"
  },
  {
    "url": "others/python-socket.html",
    "revision": "69f873f65bc8430cd9de66a9ef61498b"
  },
  {
    "url": "others/python.html",
    "revision": "55d0e9fa1d4f35244062868fdc8ee986"
  },
  {
    "url": "others/q-learning.html",
    "revision": "e8338cb734244cf790b771a0ad447dc4"
  },
  {
    "url": "others/qr-code.html",
    "revision": "5c3236c0bec10e65e6c89e5d8ea09579"
  },
  {
    "url": "others/qt4.html",
    "revision": "40ce3b08a5dcf8bfb0431729406f6666"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "b3c71b8cdcbbb5d469b2c4762ed62919"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "9aaa618b97cbd5ee777dc40ab3f80ebc"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "d79eb3c898b324e2c98ff29c7d01b4af"
  },
  {
    "url": "others/sd-card.html",
    "revision": "210bf07cffd058fccf85a2e50f256721"
  },
  {
    "url": "others/sdn.html",
    "revision": "25d2c42e547214127add09f804fdd910"
  },
  {
    "url": "others/star-uml.html",
    "revision": "d1ac83738b6a2a91fc7df8f8ec1fa69c"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "a095e4da3dfdda254d73bc364b1c356a"
  },
  {
    "url": "others/verilog.html",
    "revision": "412415819d7f1f9b1c07df305c11a459"
  },
  {
    "url": "others/vue.html",
    "revision": "e70f57d71181165bb253e5dff17acf90"
  },
  {
    "url": "others/w5500.html",
    "revision": "63dce0aac8d50ee2947cde3599b24dfb"
  },
  {
    "url": "others/w7500.html",
    "revision": "45f073fbdd6d615ccdf4828ae9fb6ad4"
  },
  {
    "url": "resume.html",
    "revision": "58fb9e6be58b9787a1a6f7192cbc32b7"
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
