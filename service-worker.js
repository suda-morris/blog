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
    "revision": "bab4c6473e4d0ba473eb4d1b38ecb38a"
  },
  {
    "url": "assets/css/0.styles.59426545.css",
    "revision": "0cdcac5933a9f836387a8b2cba491aec"
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
    "url": "assets/img/cpu_core_system.99c3127b.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
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
    "url": "assets/img/esp32_pin_functions.671514cc.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
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
    "url": "assets/img/lwip_heap.1ac8ef3c.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "assets/img/lwip_memp.1fc0c568.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
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
    "url": "assets/img/tcp_ip_stack.13913b2b.png",
    "revision": "13913b2bf1552065429e62743ba0214c"
  },
  {
    "url": "assets/js/10.2a1f180b.js",
    "revision": "6256e6992123f1c5de8ffb18dca6c942"
  },
  {
    "url": "assets/js/11.fc094be5.js",
    "revision": "2c65ced548184c5ecdbce1d3f6123393"
  },
  {
    "url": "assets/js/12.e106e8c1.js",
    "revision": "765f9d3fdfba59d98d0af8025d684973"
  },
  {
    "url": "assets/js/13.e0407110.js",
    "revision": "e2bb7bf1bbda3c73abd595187eb8b99c"
  },
  {
    "url": "assets/js/14.f38ebf3a.js",
    "revision": "34e4db2bc0e926a0f9c3aeecf69a961d"
  },
  {
    "url": "assets/js/15.b045f877.js",
    "revision": "229b9d10eee9478cc67df2df32f82b91"
  },
  {
    "url": "assets/js/16.1689508f.js",
    "revision": "c39f8597ba634055282ecbfb030d5200"
  },
  {
    "url": "assets/js/17.eb37b2f2.js",
    "revision": "08ac506820df44a0eda52c543503fcab"
  },
  {
    "url": "assets/js/18.67addf90.js",
    "revision": "950b30b2e5cc299b8caa34c7dd6c0bb0"
  },
  {
    "url": "assets/js/19.3b96d3e3.js",
    "revision": "97f63347500fb51a03a633c5f3767064"
  },
  {
    "url": "assets/js/2.ba6e2a5b.js",
    "revision": "cfc2969139ede58fc5a083c0c3a3bdd7"
  },
  {
    "url": "assets/js/20.c39a2046.js",
    "revision": "cdef633a619376ab239e39e901e564b2"
  },
  {
    "url": "assets/js/21.c6eabc36.js",
    "revision": "bc565f67e4d5c70fd7746ef1c88f09e9"
  },
  {
    "url": "assets/js/22.dc2472bb.js",
    "revision": "4a1d862f92f469beb66f746011f99f0a"
  },
  {
    "url": "assets/js/23.ed86e9c1.js",
    "revision": "b283a4f8091a8ff61dc1ae9a0d53e709"
  },
  {
    "url": "assets/js/24.661c4997.js",
    "revision": "7dff18811b22466a1012d7edcd59a270"
  },
  {
    "url": "assets/js/25.6d7873d4.js",
    "revision": "4b240eafa7b56c660f50587d039a59e5"
  },
  {
    "url": "assets/js/26.7572199c.js",
    "revision": "ea9545a2eda673facda345272fe1a54f"
  },
  {
    "url": "assets/js/27.22f61b82.js",
    "revision": "a277fe62d6a6c33cf9b814404df65e63"
  },
  {
    "url": "assets/js/28.d60b119c.js",
    "revision": "7a18dd9c9c8b11d6d290de585fb02405"
  },
  {
    "url": "assets/js/29.f060d0dc.js",
    "revision": "93ce8f64e36c5e7d545440773d7709c5"
  },
  {
    "url": "assets/js/3.2cc9c07b.js",
    "revision": "a438afc5c543d6a87a01107ed7a14f82"
  },
  {
    "url": "assets/js/30.5fa1d056.js",
    "revision": "d8d2d2f1eb6c4ec7c89a676f4d40aee0"
  },
  {
    "url": "assets/js/31.9fb68153.js",
    "revision": "27552420d642d8a24e792c2419580e08"
  },
  {
    "url": "assets/js/32.ea0a89cd.js",
    "revision": "dd7eda9155021aab929920d5df53b22b"
  },
  {
    "url": "assets/js/33.93968b73.js",
    "revision": "9778ca0b72346a3615c1556f6073a0f6"
  },
  {
    "url": "assets/js/34.1e18b1f7.js",
    "revision": "f67a294ee579b2de1cb1ca308d07a582"
  },
  {
    "url": "assets/js/35.908e1242.js",
    "revision": "9552bb0e23e733abb8f8cfab1efca196"
  },
  {
    "url": "assets/js/36.db455c3f.js",
    "revision": "4ecfccc34a310bd48f5f28c4f3216c1e"
  },
  {
    "url": "assets/js/37.fff02997.js",
    "revision": "e29073d7a101ef41a938971fadd89c48"
  },
  {
    "url": "assets/js/38.3cc78af9.js",
    "revision": "65f1336257c957e2c56819c81635ecad"
  },
  {
    "url": "assets/js/39.a581de12.js",
    "revision": "89008a0fb85dc9e209dd81a64d5fd79c"
  },
  {
    "url": "assets/js/4.6732641b.js",
    "revision": "18688753424f3bf85f70b68fed6bdf5b"
  },
  {
    "url": "assets/js/40.18425e8b.js",
    "revision": "9be8d6663e19f57eb1a60155865e680d"
  },
  {
    "url": "assets/js/41.a01333b4.js",
    "revision": "59d5167704b49ef9383a11489d4ee67a"
  },
  {
    "url": "assets/js/42.5571a7a7.js",
    "revision": "45f7086e8047e25504d11e9cc06ff511"
  },
  {
    "url": "assets/js/43.68f8bad4.js",
    "revision": "73e94e6bc25a7f9054d88d6118b06e17"
  },
  {
    "url": "assets/js/44.4ffb0c3a.js",
    "revision": "12e9a0f988cea15fad76fcceaab0d633"
  },
  {
    "url": "assets/js/45.cecab89b.js",
    "revision": "e37f8983787d5e85c098e8b415cbe205"
  },
  {
    "url": "assets/js/46.91072da5.js",
    "revision": "9724590556f6d88e67ea1192a816759f"
  },
  {
    "url": "assets/js/47.45690a64.js",
    "revision": "c6b944f5c781d8fc431b5e9f2371e631"
  },
  {
    "url": "assets/js/48.b83115f0.js",
    "revision": "d4b78bae9b773c5fa0fe54a775fca85d"
  },
  {
    "url": "assets/js/49.0ca27cb6.js",
    "revision": "33400b7cc16fc379b9750a08b19a6d87"
  },
  {
    "url": "assets/js/5.84848b79.js",
    "revision": "88b6dc436b15d7b3d7fa0813083663f9"
  },
  {
    "url": "assets/js/50.ffae53f8.js",
    "revision": "d098f4ac2a4b99e2bd93cc6a9c363004"
  },
  {
    "url": "assets/js/51.8df2b31e.js",
    "revision": "e192847b54cf892c9b76a7ab93d30ebd"
  },
  {
    "url": "assets/js/52.7b2ff626.js",
    "revision": "b47cfbcfb80a1929de7d5cbafcc2efc7"
  },
  {
    "url": "assets/js/53.b0e2ebe4.js",
    "revision": "4b060d7b41690e96ae51974fed3f2141"
  },
  {
    "url": "assets/js/54.d934ad6f.js",
    "revision": "7c1db317ea7099cbd61fbbbace990876"
  },
  {
    "url": "assets/js/55.56147da5.js",
    "revision": "9dcda9e7b00b593dcba5388e8466e475"
  },
  {
    "url": "assets/js/56.4e79f2c8.js",
    "revision": "3aee7c75255b47b5987bf4b1285e1ed4"
  },
  {
    "url": "assets/js/57.fb37f111.js",
    "revision": "57d1bdb99147aa3759c9e074e2b568a4"
  },
  {
    "url": "assets/js/58.12f6756b.js",
    "revision": "cff7ba24b109a63cbbfb175d13fd078c"
  },
  {
    "url": "assets/js/59.a1ffb6c7.js",
    "revision": "b266d764b779ae0cdaebf51be0e9fc6f"
  },
  {
    "url": "assets/js/6.cbf08ea1.js",
    "revision": "26a8d82a611c246f5b2aac3762b12f61"
  },
  {
    "url": "assets/js/60.3dbe40e1.js",
    "revision": "241a7873a5bfcb5c820d55e18fa15be6"
  },
  {
    "url": "assets/js/61.2157d261.js",
    "revision": "d6e378b2e382fa4ecf0bf9b08ba0c405"
  },
  {
    "url": "assets/js/62.83471227.js",
    "revision": "a335828759df613f551a899c30d6d264"
  },
  {
    "url": "assets/js/63.6bb3d59a.js",
    "revision": "5bfd8e104e72ac4fb940239542809331"
  },
  {
    "url": "assets/js/64.00d19af4.js",
    "revision": "64cf7093626a0d6e2e03f59683d39504"
  },
  {
    "url": "assets/js/65.76c2e594.js",
    "revision": "9cb8fe5c2dcb0642dfe4bb5cc1907ae7"
  },
  {
    "url": "assets/js/66.4921dad3.js",
    "revision": "43fc2a37fb7035cda18e43a638f5bba5"
  },
  {
    "url": "assets/js/67.6d6e3436.js",
    "revision": "16450ee2fbc5e6e2f914e2fa28cdee13"
  },
  {
    "url": "assets/js/68.53d378d1.js",
    "revision": "642e8812e9e93fe725db2e189219e495"
  },
  {
    "url": "assets/js/69.7d01fb8b.js",
    "revision": "2cac363e572f5ec6195a1b4fb9c04f4e"
  },
  {
    "url": "assets/js/7.898fe663.js",
    "revision": "945562f9a60fc1c5d9c45483e5e32182"
  },
  {
    "url": "assets/js/70.3122c7f8.js",
    "revision": "3cbf2e6ebd0fd345257d4dd2925762b4"
  },
  {
    "url": "assets/js/71.4ef97f15.js",
    "revision": "6b464c196f5187edbee60e882b62af4d"
  },
  {
    "url": "assets/js/72.2eb9629f.js",
    "revision": "0060bb59e1936a504083690d336166a6"
  },
  {
    "url": "assets/js/73.8dcd0d62.js",
    "revision": "de28df7a5e2d4eab6e21cfdf43fb375a"
  },
  {
    "url": "assets/js/74.101c7c22.js",
    "revision": "076211d08a7cb7e1cd0965d1b2acd2fa"
  },
  {
    "url": "assets/js/75.31fb0904.js",
    "revision": "abe6f9ff115fac451b12671074efc831"
  },
  {
    "url": "assets/js/76.3d3ccbe9.js",
    "revision": "035e29285c80447d506d8bb18c76d1a3"
  },
  {
    "url": "assets/js/77.9c3f66df.js",
    "revision": "193f2371a8458b2ff816c7a22805f84c"
  },
  {
    "url": "assets/js/78.dce096a8.js",
    "revision": "b6b2785acdfe48b28f23dcb056bc9826"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.2b8efdb6.js",
    "revision": "7012da25f097428b185da53e1719e142"
  },
  {
    "url": "assets/js/9.bc72ac38.js",
    "revision": "3de57d3c675b14fb8c4b8b40ea15e591"
  },
  {
    "url": "assets/js/app.9f7e5712.js",
    "revision": "d6f1bf9f40b9778da095e73a2ae110dd"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "2ce5bdc892ab02bd382800d6f6aa1838"
  },
  {
    "url": "cs/bash.html",
    "revision": "eded8b4d48427cf76ddb10aaac533a7a"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "b2714979826898f52b0f9b468f33f9e2"
  },
  {
    "url": "cs/cmake.html",
    "revision": "62f7ea2f62437cb8c51630b1d8584b2d"
  },
  {
    "url": "cs/compilation.html",
    "revision": "a565950bc3dccae46337526ef968871c"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "231eca77727057f4bf069082d2cd9506"
  },
  {
    "url": "cs/git.html",
    "revision": "c0f2f466c569cdaa22063f95037a7508"
  },
  {
    "url": "cs/index.html",
    "revision": "e9fedbc3c3ed4fe273fa6430305742cd"
  },
  {
    "url": "cs/keras.html",
    "revision": "22eba1fd89fa29d7cf1ae57f719bfc67"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "a19d94f0f1f8a456e4eb5b3576e7c803"
  },
  {
    "url": "cs/lwip.html",
    "revision": "ba432f5d9d0399f1262da830b22521c5"
  },
  {
    "url": "cs/scala.html",
    "revision": "aa75f4cdeb33f7bf36f9bb81c8a78f82"
  },
  {
    "url": "ee/about.html",
    "revision": "f6fb657cee85dccde573b6f3fb55a63b"
  },
  {
    "url": "ee/chisel.html",
    "revision": "e8a828a156bed46d6a190046a9aa9156"
  },
  {
    "url": "ee/esp32.html",
    "revision": "4bc91d13d6a2dfb733edebd4117ba1a5"
  },
  {
    "url": "ee/index.html",
    "revision": "c55e0abcc04877a232ddef2d14c696ef"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "85086f63d83c6dcb737dd5e08f5d29c3"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "265a39cb1f4f140e27241a852dfeab22"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "66aeec54d591b61d77b29ff43dddf6ef"
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
    "url": "images/cs/lwip/ethernet_frame.png",
    "revision": "f4de10c483aafa9d08f8920858e828ba"
  },
  {
    "url": "images/cs/lwip/lwip_heap.png",
    "revision": "1ac8ef3cd1e40f0272465b615331d63c"
  },
  {
    "url": "images/cs/lwip/lwip_memp.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
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
    "url": "images/ee/esp32/cpu_core_system.png",
    "revision": "99c3127b152a0c83c8c03f4ac719558a"
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
    "url": "images/ee/esp32/esp32_pin_functions.png",
    "revision": "671514cc44c8b5a394fa3e3a0cced2a8"
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
    "url": "images/ee/esp32/memory_map.svg",
    "revision": "6e8f854157f68ded4cbfa11f64108ae0"
  },
  {
    "url": "images/ee/esp32/peripheral_clock.png",
    "revision": "329fd3095367667745b5e01c9102bb71"
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
    "revision": "aff7a69d4c0272bd67ff9e0c2b0f4d4a"
  },
  {
    "url": "others/about.html",
    "revision": "6b2d85ffad9886fb348da2fcd69fa52a"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "a5836afdbd503f7ab628a3b927870cd8"
  },
  {
    "url": "others/android-studio.html",
    "revision": "576939999fa4833ce76e6abf2273d149"
  },
  {
    "url": "others/android.html",
    "revision": "72be52fca1b9b4abcd2f66674891664a"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "4a6ecec79d2b4f652a000c48cd9d30c4"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "e8fe594e0fe1a5004e9b626b404c2246"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "ead95a1ef5a9a6b290451bdc008ffd0a"
  },
  {
    "url": "others/css.html",
    "revision": "5aaaae4b47eabcc9d62df5ca661303a4"
  },
  {
    "url": "others/docker.html",
    "revision": "2f7cdea9a6bd85b9f5070a1b0f7ce33c"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "a0eda2b4a954afe5983e3a3e6e44c03e"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "5dd5650803dcf15bd864d3b32ec53637"
  },
  {
    "url": "others/english-writting.html",
    "revision": "d4b7b657a6ac746b5133490dd79844db"
  },
  {
    "url": "others/freertos.html",
    "revision": "c33e75fb717f58efe43b05faf6c9780b"
  },
  {
    "url": "others/gns3.html",
    "revision": "c61ee3db4e22112596f3228efc95b1ca"
  },
  {
    "url": "others/gps.html",
    "revision": "3c1c74e174f6828792de2b6a831535f1"
  },
  {
    "url": "others/html5.html",
    "revision": "2976d26b3cd7fe1a9cfa3b4d8506dcf7"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "6ece92d0d563603552344a5d536231e9"
  },
  {
    "url": "others/index.html",
    "revision": "5d43319d61d8358f0a903c8e7fad9691"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "90ab351bbcee1423e6b932d818767d3e"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "d5eafdf67a3db039a2b82bf461823e64"
  },
  {
    "url": "others/javascript.html",
    "revision": "8a984e4edc90b8bfa74b015b6864e2c3"
  },
  {
    "url": "others/json.html",
    "revision": "abd64cf8d2d1dc8835756452a97f3a68"
  },
  {
    "url": "others/latex.html",
    "revision": "b5529eb9584a8aca87578cf2dc31b500"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "c9310ff47f9ad7cdb902f4aa98f9b065"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "f29b26527365b67c26c57a2d463c8d7f"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "1a1e2f79b2427daeface3aa0dd9cb1f3"
  },
  {
    "url": "others/markdown.html",
    "revision": "ee7083172f8c2d4f8e6826e5bd3c6d05"
  },
  {
    "url": "others/matlab.html",
    "revision": "23b48565b7dffa83386f1c32877dda9f"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "39fd5d50577160bc946148c4812f0400"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "4c437b7d264a00808477ead16d23046e"
  },
  {
    "url": "others/network-security.html",
    "revision": "cf70ab3227d936a5b5d1d2c9a36e16a1"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "05efcead3feba8caa96f41cd3317c419"
  },
  {
    "url": "others/oral_english.html",
    "revision": "d27a26422430fb1bcbc051537ea81611"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "b61a3b856b26156543d6cb6d277c2974"
  },
  {
    "url": "others/poe.html",
    "revision": "1a6c0f1db5789f3e55387215ac028727"
  },
  {
    "url": "others/pyside2.html",
    "revision": "e6df6089421521b1a45f6f5d4fcb876c"
  },
  {
    "url": "others/python-socket.html",
    "revision": "e2a69736bc0aa87cb13f67c9175ea3ba"
  },
  {
    "url": "others/python.html",
    "revision": "ad8cb5d845ed1807fa212f7ef723f6ba"
  },
  {
    "url": "others/q-learning.html",
    "revision": "64218448249d8d3b311b869ad94f7d2f"
  },
  {
    "url": "others/qr-code.html",
    "revision": "fdfbddec9e952f140f3dcd1588c9bfd2"
  },
  {
    "url": "others/qt4.html",
    "revision": "b8aa188a0e09249d22f0a3d9d5a5e4bd"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "208fa2115994e9c083478926d2b8ffdb"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "b03b3f36311778df7ba22f0b434a2c50"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "1008215884c05d957ed85a69470fb2d9"
  },
  {
    "url": "others/sd-card.html",
    "revision": "26b33b70f874fc33e85e5b5ba5af2b56"
  },
  {
    "url": "others/sdn.html",
    "revision": "5146b998c37918747b19f0468fcf153e"
  },
  {
    "url": "others/star-uml.html",
    "revision": "76a66b970bb96653f6fd014d2483559f"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "46620c85b065f7d144ee11add295c4ff"
  },
  {
    "url": "others/verilog.html",
    "revision": "ea45124b0cb067c68e85f58e6ba42cd1"
  },
  {
    "url": "others/vue.html",
    "revision": "86d0cd5c71e02831ee75fedfeab66ba5"
  },
  {
    "url": "others/w5500.html",
    "revision": "ae250e0d71c7b6e87e8fc30683ae26d6"
  },
  {
    "url": "others/w7500.html",
    "revision": "b087f5cba379e9821b68178fdbb4f4ee"
  },
  {
    "url": "resume.html",
    "revision": "e04f80896afc587217b82f9d1c9a0bda"
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
