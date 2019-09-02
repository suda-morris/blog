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
    "revision": "3c2ecc2701fb135f53a533f8acc36789"
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
    "url": "assets/img/lwip_memp.1fc0c568.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
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
    "url": "assets/js/10.7c5059af.js",
    "revision": "1300528793f7c54fd0615a142e35bff7"
  },
  {
    "url": "assets/js/11.ad691a3d.js",
    "revision": "cd3bb495e8c3381d6017faf828c3f1c3"
  },
  {
    "url": "assets/js/12.73c69ffe.js",
    "revision": "04c9fde1409fe324d5ddab41c2289f0b"
  },
  {
    "url": "assets/js/13.eb49b9a9.js",
    "revision": "3cf8d0cc875396f5e8add15587562d9f"
  },
  {
    "url": "assets/js/14.26bbff1e.js",
    "revision": "320383dbb4f516060a14c659e9348187"
  },
  {
    "url": "assets/js/15.5a686d1f.js",
    "revision": "c4e373845f5622b998dd747815de56fd"
  },
  {
    "url": "assets/js/16.67f95d5f.js",
    "revision": "bb78f148c17cde78e881df090392b77d"
  },
  {
    "url": "assets/js/17.bc8d2dbc.js",
    "revision": "67597dd0a47352de1325c50f39e16876"
  },
  {
    "url": "assets/js/18.8329a708.js",
    "revision": "4261b58910f1ab2f6a2ecb4cc8f08e60"
  },
  {
    "url": "assets/js/19.d40c4b9e.js",
    "revision": "fc55ff817b073f7515cbe340a3da2e27"
  },
  {
    "url": "assets/js/2.9736e660.js",
    "revision": "94595955ac6714725a590c85f311a889"
  },
  {
    "url": "assets/js/20.b652d186.js",
    "revision": "e6cde33d42d32802de2ccfd7a715a6f2"
  },
  {
    "url": "assets/js/21.63887ac2.js",
    "revision": "6fc22f192ca5b3e8ee1107721b0fcea4"
  },
  {
    "url": "assets/js/22.78c582d6.js",
    "revision": "8e5ba2479cb43887ccf3068c567228c7"
  },
  {
    "url": "assets/js/23.55956024.js",
    "revision": "6e2d0fa6be6073f1b5ee1651031c1205"
  },
  {
    "url": "assets/js/24.95eec127.js",
    "revision": "9380261e8ba500b62d0f20d86702fe9e"
  },
  {
    "url": "assets/js/25.af33ba62.js",
    "revision": "a2995efc62f58203033295e941d397ee"
  },
  {
    "url": "assets/js/26.057895e5.js",
    "revision": "9f7f353719037123f46f6b47ada37b75"
  },
  {
    "url": "assets/js/27.ac38a5db.js",
    "revision": "918bff5576485c91d6e929d390b355cd"
  },
  {
    "url": "assets/js/28.2ab0fb4e.js",
    "revision": "8db480d58368fc66f6f7c27ffa36926b"
  },
  {
    "url": "assets/js/29.08b65479.js",
    "revision": "c9d380e923606b50af5fbc9d38045576"
  },
  {
    "url": "assets/js/3.866f7e96.js",
    "revision": "62dd1c2f9ab4252017a715e97e1d5a9e"
  },
  {
    "url": "assets/js/30.bc42bc85.js",
    "revision": "06caa741f5ccb9df5d4f7ebb5af3c2a8"
  },
  {
    "url": "assets/js/31.5d7b727b.js",
    "revision": "9c8453d684a27d41d8b2aeec04ca0617"
  },
  {
    "url": "assets/js/32.e6ebe59f.js",
    "revision": "f2dd201666e2af2ccc7d0177b58b1397"
  },
  {
    "url": "assets/js/33.2a2bfffc.js",
    "revision": "2d0e1b33ae92ecfd4055ac39e83d636d"
  },
  {
    "url": "assets/js/34.cc87b47b.js",
    "revision": "eb7ad9e343cabe9fa8eaa490c430a95e"
  },
  {
    "url": "assets/js/35.6e6613d9.js",
    "revision": "65d443dda23db9b57468267dadc4bc8b"
  },
  {
    "url": "assets/js/36.8b13aff2.js",
    "revision": "f212ef67224c9f406acdcb270209fc97"
  },
  {
    "url": "assets/js/37.04d910a0.js",
    "revision": "3ac34bc9b8ea6781b12dc52921f7c6dc"
  },
  {
    "url": "assets/js/38.69ea86c3.js",
    "revision": "5acae402aefdc489ca7c312a5982e2d9"
  },
  {
    "url": "assets/js/39.471849ed.js",
    "revision": "100d30fb4456256f573f7fd73954bfbd"
  },
  {
    "url": "assets/js/4.3f9e4392.js",
    "revision": "34f768cf8823d92accdc193257e69d6e"
  },
  {
    "url": "assets/js/40.13b9f833.js",
    "revision": "0cf04f2f4a854d1a2d707eb6f14e5bb5"
  },
  {
    "url": "assets/js/41.a0eb4771.js",
    "revision": "585b8e0614472828ca930deb393c667f"
  },
  {
    "url": "assets/js/42.c4a5ba34.js",
    "revision": "ab078e4829240d25659f37b0390efdb8"
  },
  {
    "url": "assets/js/43.d12a055a.js",
    "revision": "f5b9aeed8504b68fdee266e01ce4763f"
  },
  {
    "url": "assets/js/44.55d4ff76.js",
    "revision": "692bcad5a00e3d69c7af0a758b9efd4b"
  },
  {
    "url": "assets/js/45.7c35b8ef.js",
    "revision": "9d07dcfc687b5967cb704831873ccd58"
  },
  {
    "url": "assets/js/46.3c3ef7d0.js",
    "revision": "09c70dff901747a73a1544c9b6f65c97"
  },
  {
    "url": "assets/js/47.ebd423b6.js",
    "revision": "7920b895ff567ef59c5a257b12879c2e"
  },
  {
    "url": "assets/js/48.44882fa0.js",
    "revision": "d2bf8d1c5a18906b4ce9b72e755c14d7"
  },
  {
    "url": "assets/js/49.98c02ac8.js",
    "revision": "b164e24f55a8a58c905b960cefbae767"
  },
  {
    "url": "assets/js/5.5167f7c9.js",
    "revision": "ca1647e2739f7aa98796e20d480adaf3"
  },
  {
    "url": "assets/js/50.8e00445d.js",
    "revision": "bbfec86cdba3e4901be5c193351c319e"
  },
  {
    "url": "assets/js/51.39fd221b.js",
    "revision": "5e355bf6a4f56a42fbd489123805adc8"
  },
  {
    "url": "assets/js/52.529e2f40.js",
    "revision": "6876f63bbe6cb5df85f8604ce819da12"
  },
  {
    "url": "assets/js/53.74dcc25c.js",
    "revision": "83d9a2109cf6c152d8654358a1f22d03"
  },
  {
    "url": "assets/js/54.5148bbc8.js",
    "revision": "8265ba75d19aa51f45370e61aacff75f"
  },
  {
    "url": "assets/js/55.b28591e3.js",
    "revision": "0dde4d03c23d568ba4aa3a9710630384"
  },
  {
    "url": "assets/js/56.7cc872a4.js",
    "revision": "7e97364d09b9b52f4833d5f49797a0d4"
  },
  {
    "url": "assets/js/57.2c6c3369.js",
    "revision": "8dd71b4b052eeddd34b29f9ceeddf799"
  },
  {
    "url": "assets/js/58.f3dcd284.js",
    "revision": "70d7bc8fea7c8b5aabf219c10100806c"
  },
  {
    "url": "assets/js/59.251e76fc.js",
    "revision": "9f5a09d20f2b5d9789039e3f95519674"
  },
  {
    "url": "assets/js/6.0c7b0898.js",
    "revision": "8a11c867d2454e74040f8b8539292483"
  },
  {
    "url": "assets/js/60.5118afac.js",
    "revision": "2e53598fe25002a66b9dfff58c97fba3"
  },
  {
    "url": "assets/js/61.bf5b846f.js",
    "revision": "54d71f83da491b859cba01245903c2c7"
  },
  {
    "url": "assets/js/62.1ee4cbfa.js",
    "revision": "db355a8ac2c8da742d3a03d9118071a6"
  },
  {
    "url": "assets/js/63.cb6f8ef6.js",
    "revision": "1cbfb9093d8a20300e924eaf8adfb339"
  },
  {
    "url": "assets/js/64.2b0ebc3f.js",
    "revision": "974ffa8f5957acb91fcb010badd46990"
  },
  {
    "url": "assets/js/65.a8448f2f.js",
    "revision": "c798e5744e5e59874e23bf4f27a8ea89"
  },
  {
    "url": "assets/js/66.33948b73.js",
    "revision": "4145139519b760f7f3fb8ec244999f48"
  },
  {
    "url": "assets/js/67.57b17eef.js",
    "revision": "b76b531e54374fdf36cc5301fe53b0e8"
  },
  {
    "url": "assets/js/68.380b267f.js",
    "revision": "be5321a16fb19f41bc1dd30f144cdf5a"
  },
  {
    "url": "assets/js/69.96613c6f.js",
    "revision": "10cc12dfe8db2f9e0ea6fd4370e4aef7"
  },
  {
    "url": "assets/js/7.bb8f3383.js",
    "revision": "7e15a28eda0349075f73097e42303e47"
  },
  {
    "url": "assets/js/70.503fd2fe.js",
    "revision": "e8f3f86dc9bf5b30cd3c69ce1549d6da"
  },
  {
    "url": "assets/js/71.2c9fd56c.js",
    "revision": "12b4e62c08ad6488d6f6faadfc4a9693"
  },
  {
    "url": "assets/js/72.732d80e5.js",
    "revision": "a808a980322b7ec1ff89cac6c805266e"
  },
  {
    "url": "assets/js/73.5265831d.js",
    "revision": "c19d6c0a7eebf4c8f573cdb9fe040597"
  },
  {
    "url": "assets/js/74.0abd47da.js",
    "revision": "61273d30765d33cd383c8e45badc715f"
  },
  {
    "url": "assets/js/75.18ad7ff5.js",
    "revision": "45aa927d386ba6bdd416d956218ba5bb"
  },
  {
    "url": "assets/js/76.c4552e20.js",
    "revision": "67eb483482f4a0ec455f490b8b0c0ece"
  },
  {
    "url": "assets/js/77.ff8c06a0.js",
    "revision": "b309c0271422c5f882e820561c92e591"
  },
  {
    "url": "assets/js/78.7c4af7c9.js",
    "revision": "73dad2569c0304cb6242d0e7ccb4fc02"
  },
  {
    "url": "assets/js/79.6bcd4783.js",
    "revision": "d91cf5868e31dfdc8757eee63c75a275"
  },
  {
    "url": "assets/js/8.de8f6447.js",
    "revision": "759d166f9e53f87ad9ede84f2444b9f7"
  },
  {
    "url": "assets/js/9.7efba97d.js",
    "revision": "2cd78dcd035793f947e64093647fc3d7"
  },
  {
    "url": "assets/js/app.8903576a.js",
    "revision": "9a4fa3a1a99dfc49dc047714a4d7a042"
  },
  {
    "url": "author.jpg",
    "revision": "470d3d82b88189dccb7cf1cae3f5956d"
  },
  {
    "url": "cs/about.html",
    "revision": "0c34d1e1ac7cf7b6303af1509f0f15db"
  },
  {
    "url": "cs/bash.html",
    "revision": "c21a00b7c42cd7706496b7b07976623d"
  },
  {
    "url": "cs/bit_ops.html",
    "revision": "a81c8538c8258241913b61822a0c2891"
  },
  {
    "url": "cs/cmake.html",
    "revision": "7668596ac3673d61f1c71e330b2ba0c2"
  },
  {
    "url": "cs/compilation.html",
    "revision": "89b24837f77d95710fec10360f6d2049"
  },
  {
    "url": "cs/design_pattern.html",
    "revision": "ea1a059368d1590d942821125f2e8ac4"
  },
  {
    "url": "cs/git.html",
    "revision": "d25aa1b9f1cced27198d5a3e9c69f28a"
  },
  {
    "url": "cs/index.html",
    "revision": "2095cea331a2e1ff4a428f304febccb7"
  },
  {
    "url": "cs/keras.html",
    "revision": "14d22fe2cafab470d9729b21e5be66f8"
  },
  {
    "url": "cs/logistic_regression.html",
    "revision": "8267971d769ca5d1a065e5d05b01a8cc"
  },
  {
    "url": "cs/lwip.html",
    "revision": "46e1b0562498c4c83094ba80d5f81a51"
  },
  {
    "url": "cs/scala.html",
    "revision": "55f626862fe14110c1f96980bc52a456"
  },
  {
    "url": "ee/about.html",
    "revision": "a4f233c60492981bcbe0cb7b1ea1c092"
  },
  {
    "url": "ee/chisel.html",
    "revision": "4c36359ab6aa5373dae7fdc6b2e873b6"
  },
  {
    "url": "ee/esp32.html",
    "revision": "a5dff417438a7fa172bf1b3624220a77"
  },
  {
    "url": "ee/index.html",
    "revision": "7057caf93b02930c43ef68ac99927fe6"
  },
  {
    "url": "ee/infrared_remote.html",
    "revision": "94f07000a1b77ef6efe7d6f32633973e"
  },
  {
    "url": "ee/openwrt.html",
    "revision": "157c0ec11b2a17c0b3a5173c4106d488"
  },
  {
    "url": "ee/xtensa.html",
    "revision": "7ff2358047db3cd0ea3c75b9e6335e54"
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
    "url": "images/cs/lwip/lwip_memp.png",
    "revision": "1fc0c56889cac9ecfdf57925e31afa22"
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
    "revision": "05e786e32aa7be31d986c35248c68729"
  },
  {
    "url": "others/about.html",
    "revision": "3d603071b772155fc54b0f2898b42028"
  },
  {
    "url": "others/altium-desinger.html",
    "revision": "f4bc1fcad0511e35579527e7eed99d2b"
  },
  {
    "url": "others/android-studio.html",
    "revision": "fa2f4713d5a33dcc95c3884eeb89a93e"
  },
  {
    "url": "others/android.html",
    "revision": "58b24dc3682b0704567b4a82c9e1df5d"
  },
  {
    "url": "others/communication-principle.html",
    "revision": "a00582ea00f3f419972f46042524084f"
  },
  {
    "url": "others/compilation-process.html",
    "revision": "3e1ac7a764f94d75125ec53b91951723"
  },
  {
    "url": "others/cortex-m0-introduction.html",
    "revision": "63d2828f67da0fdd4d83bf5531af51b5"
  },
  {
    "url": "others/css.html",
    "revision": "406c62ad2c69f9dc1d724b834c33ab7d"
  },
  {
    "url": "others/docker.html",
    "revision": "27ca0f5abf40f9a86a2612ae14ab2b22"
  },
  {
    "url": "others/electron-vue.html",
    "revision": "2f0db27267da7acdcca7d04af845e86e"
  },
  {
    "url": "others/embedded-linux.html",
    "revision": "206f51f817960e2476136d6b1d238d45"
  },
  {
    "url": "others/english-writting.html",
    "revision": "3cd8721680650a4188e42b3ab6cab78b"
  },
  {
    "url": "others/freertos.html",
    "revision": "2c939df55a0c31dae876c83c4e9b89e5"
  },
  {
    "url": "others/gns3.html",
    "revision": "46f21884cf98c91e67ca6417c3e8b4eb"
  },
  {
    "url": "others/gps.html",
    "revision": "f73b5b060dc870e6d347b58118409764"
  },
  {
    "url": "others/html5.html",
    "revision": "c1a07036f8e0b11d4dabc5f231a67f3c"
  },
  {
    "url": "others/ieee1588.html",
    "revision": "3bcf1676eb78ac78fe7b06948da1c35f"
  },
  {
    "url": "others/index.html",
    "revision": "6b4263cdf68ab121cb7f1f49451529e4"
  },
  {
    "url": "others/inline-assembly.html",
    "revision": "9580ff8294d47d63790788c19163abe1"
  },
  {
    "url": "others/interview-by-code.html",
    "revision": "faa76f9dafb5a06031766c187740adfb"
  },
  {
    "url": "others/javascript.html",
    "revision": "504f8360af34a6bd49f64b03475365c1"
  },
  {
    "url": "others/json.html",
    "revision": "51b20e8160c353509d22c9cadfc8827a"
  },
  {
    "url": "others/latex.html",
    "revision": "54ac120d2d289a79ae0baddbbcd4c874"
  },
  {
    "url": "others/linux-basic.html",
    "revision": "ded423fb86d77ed9dbaa310fac2cab2c"
  },
  {
    "url": "others/linux-kernel.html",
    "revision": "ac040148d2d59e9893d76b8601d9c528"
  },
  {
    "url": "others/machine-learning.html",
    "revision": "5b8221082f1df8c031f26bf234232115"
  },
  {
    "url": "others/markdown.html",
    "revision": "debf140214c7c816dc61e24ade55b647"
  },
  {
    "url": "others/matlab.html",
    "revision": "899f35c944c1f7879f81c02d06ce3674"
  },
  {
    "url": "others/micro-fabrication.html",
    "revision": "4abba73e8898655848898bcca2a599d6"
  },
  {
    "url": "others/microsoft-office.html",
    "revision": "353999db3adde92e68991da77fdff705"
  },
  {
    "url": "others/network-security.html",
    "revision": "b3de84668463e0498135cef932846031"
  },
  {
    "url": "others/nfc-pn532.html",
    "revision": "eb30075648dcb9324d8ad43871fb4d29"
  },
  {
    "url": "others/oral_english.html",
    "revision": "f2a1affe43b008d306dc9d113fa7ff7c"
  },
  {
    "url": "others/poe-introduction.html",
    "revision": "6204dfb6746853b842cb168c337876ed"
  },
  {
    "url": "others/poe.html",
    "revision": "d82c23a568adf3132a9f8b63deb8495f"
  },
  {
    "url": "others/pyside2.html",
    "revision": "0715b07048bd0f31a8266439c948b2c5"
  },
  {
    "url": "others/python-socket.html",
    "revision": "c918118eb85912b6e20a091a0016acc2"
  },
  {
    "url": "others/python.html",
    "revision": "b459e0868b2681bb5b7884c17cddba7c"
  },
  {
    "url": "others/q-learning.html",
    "revision": "a0a513f5926d5520b8da7e25c4b0303a"
  },
  {
    "url": "others/qr-code.html",
    "revision": "314a18b8e326f3c6cf818686f3c10018"
  },
  {
    "url": "others/qt4.html",
    "revision": "e8e16b8738cb2f4990650b58cc085398"
  },
  {
    "url": "others/review-in-c.html",
    "revision": "b2f156d98a06d359e5015c9a90e8001f"
  },
  {
    "url": "others/review-in-cpp.html",
    "revision": "3de1a3e18ff34578c246565debdfa07e"
  },
  {
    "url": "others/s3c6410.html",
    "revision": "f42902e5d55fbb509756b8ac09932f9a"
  },
  {
    "url": "others/sd-card.html",
    "revision": "14dd7fbca7dfff8f38c66e34936cf08c"
  },
  {
    "url": "others/sdn.html",
    "revision": "888c651ad1572667348fdbe6aeec4745"
  },
  {
    "url": "others/star-uml.html",
    "revision": "583448260a3c51e7367fcee34f4511ce"
  },
  {
    "url": "others/ubuntu-mate.html",
    "revision": "95eaf908d81c75dd068e9c4cd7598f4f"
  },
  {
    "url": "others/verilog.html",
    "revision": "8c0b520969d7bb234a6df64ef9f65f12"
  },
  {
    "url": "others/vue.html",
    "revision": "88e1f5393c2a3300ebbb2fc1767455ec"
  },
  {
    "url": "others/w5500.html",
    "revision": "ad5846f6234d803d868daea345b00a31"
  },
  {
    "url": "others/w7500.html",
    "revision": "e8bd4105e50ceeb72ba8867895ca4ed6"
  },
  {
    "url": "resume.html",
    "revision": "6cdf5c3f3eaab0886f9bfc864d12798d"
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
